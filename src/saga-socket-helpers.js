import { eventChannel } from 'redux-saga';

import SockJs from "sockjs-client";
import Stomp from "stompjs";

const hostname = process.env.API_URL;

function createSocketConnection() {
    const socket = new SockJs(hostname + "/websocket");
    const stompClient = Stomp.over(socket);
    stompClient.debug = null;
    console.log('createSocketConnection client:', stompClient);
    console.log('createSocketConnection socket:', socket);
    return {socket, stompClient};
}

function createSocketChannel(socket, stompClient) {
    // returns eventChannel that'll push out(emit) messages from stompJS client
    return eventChannel(emit => {

        const socketHandler = (event) => {
            // puts event payload into the channel
            // this allows a Saga to take this payload from the returned channel
            emit(event);
        };

        // stompClient's subscribe method uses socketHandler as callback to emit received push messages
        stompClient.connect({}, (frame) => {
            const subscription = stompClient.subscribe('/topic/timers', (message) => {
                socketHandler({type: 'RECEIVE_TIMER_STATUS', data: JSON.parse(message.body)});
            });
        });

        socket.onclose = function() {
            console.log('socket.onclose => close');
        };

        const unsubscribe = () => {
            stompClient.disconnect();
            socket.close();
        };

        return unsubscribe;
    })
}

export {createSocketConnection, createSocketChannel};