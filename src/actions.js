"use strict";
function startTimer(name) {
    if (name === void 0) { name = "Default"; }
    return {
        type: "START_TIMER",
        name: name
    };
}
exports.startTimer = startTimer;
