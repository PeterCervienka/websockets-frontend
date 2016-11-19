export default function (timers = [], action) {
    switch (action.type) {
        case "RECEIVE_TIMER_STATUS":
            var timerStatus = action.data;
            const currentIndex = timers.findIndex((el) => timerStatus.name === el.name);
            if (currentIndex === -1) {
                return [...timers, timerStatus];
            } else {
                return [
                    ...timers.slice(0, currentIndex),
                    timerStatus,
                    ...timers.slice(currentIndex + 1, timers.length)
                ];
            }
        default:
            return timers;
    }
}
