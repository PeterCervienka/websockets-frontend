import {Timer, Action} from "./interfaces"

export default function (timers: Array<Timer> = [], action: Action) {
    switch (action.type) {
        case "RECEIVE_TIMER_STATUS":
            const timerStatus = action.data;
            const current = timers.findIndex((timer) => timerStatus.name === timer.name);
            if (current === -1) {
                return [...timers, timerStatus];
            } else {
                return [
                    ...timers.slice(0, current),
                    timerStatus,
                    ...timers.slice(current + 1, timers.length)
                ];
            }
        default:
            return timers;

    }
}
