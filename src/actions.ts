import {ActionStartTimer} from "./interfaces"


export function startTimer(name: string = "Default"): ActionStartTimer {
    return {
        type: "START_TIMER",
        name
    };
}
