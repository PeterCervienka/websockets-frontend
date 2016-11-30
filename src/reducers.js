"use strict";
function default_1(timers, action) {
    if (timers === void 0) { timers = []; }
    switch (action.type) {
        case "RECEIVE_TIMER_STATUS":
            var timerStatus_1 = action.data;
            var current = timers.findIndex(function (timer) { return timerStatus_1.name === timer.name; });
            if (current === -1) {
                return timers.concat([timerStatus_1]);
            }
            else {
                return timers.slice(0, current).concat([
                    timerStatus_1
                ], timers.slice(current + 1, timers.length));
            }
        default:
            return timers;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
