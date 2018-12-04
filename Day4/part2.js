const { inputArray } = require('./input');
const { orderLogs, buildGuardsHistory } = require('./helpers');

const guardsHistory = buildGuardsHistory(orderLogs(inputArray));
console.log(guardsHistory);

const getMostSleepyGuard = () => {
  const mostSleepyMinuteGuard = {
      id: -1,
      mostAsleepMinute: {
        minute: -1,
        timesAsleep: -1
      }
  };

  for (guard in guardsHistory) {
    let mostAsleepMinute = {
      minute: -1,
      timesAsleep: -1
    };

    for (minute in guardsHistory[guard]) {
      if (guardsHistory[guard][minute] > mostAsleepMinute.timesAsleep) {
        mostAsleepMinute.minute = minute;
        mostAsleepMinute.timesAsleep = guardsHistory[guard][minute];
      }
    }

    if (mostAsleepMinute.timesAsleep > mostSleepyMinuteGuard.mostAsleepMinute.timesAsleep) {
      mostSleepyMinuteGuard.id = guard;
      mostSleepyMinuteGuard.mostAsleepMinute = mostAsleepMinute;
    }
  }

  return mostSleepyMinuteGuard;
}

const mostSleepyGuard = getMostSleepyGuard();
console.log(mostSleepyGuard);
console.log(`${mostSleepyGuard.id} * ${mostSleepyGuard.mostAsleepMinute.minute} = ${mostSleepyGuard.id * mostSleepyGuard.mostAsleepMinute.minute}`);
