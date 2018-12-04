const { inputArray } = require('./input');
const { orderLogs, buildGuardsHistory } = require('./helpers');

const guardsHistory = buildGuardsHistory(orderLogs(inputArray));
console.log(guardsHistory);

const getMostSleepyGuard = () => {
  const mostSleepyGuard = {
      id: -1,
      totalAsleepMinutes: -1,
      mostAsleepMinute: {
        minute: -1,
        timesAsleep: -1
      }
  };

  for (guard in guardsHistory) {
    let totalAsleepMinutes = 0;
    let mostAsleepMinute = {
      minute: -1,
      timesAsleep: -1
    };

    for (minute in guardsHistory[guard]) {
      totalAsleepMinutes += guardsHistory[guard][minute];
      if (guardsHistory[guard][minute] > mostAsleepMinute.timesAsleep) {
        mostAsleepMinute.minute = minute;
        mostAsleepMinute.timesAsleep = guardsHistory[guard][minute];
      }
    }

    if (totalAsleepMinutes > mostSleepyGuard.totalAsleepMinutes) {
      mostSleepyGuard.id = guard;
      mostSleepyGuard.totalAsleepMinutes = totalAsleepMinutes;
      mostSleepyGuard.mostAsleepMinute = mostAsleepMinute;
    }
  }

  return mostSleepyGuard;
}

const mostSleepyGuard = getMostSleepyGuard();
console.log(`${mostSleepyGuard.id} * ${mostSleepyGuard.mostAsleepMinute.minute} = ${mostSleepyGuard.id * mostSleepyGuard.mostAsleepMinute.minute}`);
