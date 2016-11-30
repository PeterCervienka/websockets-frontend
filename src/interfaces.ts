export interface Action {
    type: string,
    data: Timer
}

export interface ActionStartTimer {
    type: string,
    name: string
}

export interface Timer {
    name: string,
    state: any,
    counter: number
}

export interface State {
    timers: Array<Timer>
}
