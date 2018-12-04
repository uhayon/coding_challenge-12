const getLogTimeStamp = log => {
  return new Date(getTimestampString(log));
}

const getTimestampString = log => {
  return log.substr(log.indexOf('[') + 1, log.indexOf(']') - 1);
}

const getLogMinutes = log => {
  const timestampString = getTimestampString(log);
  const [date, time] = timestampString.split(' ');
  const [hour, minutes] = time.split(':');
  return minutes;
}

const orderLogs = logs => {
  return logs.sort((firstDate, secondDate) => {
    if (firstDate > secondDate) {
      return 1;
    }

    if (firstDate < secondDate) {
      return -1;
    }

    return 0;
  });
}

const getGuardId = log => {
  const logStartingFromId = log.substr(log.indexOf('#') + 1);
  return logStartingFromId.substr(0, logStartingFromId.indexOf(' '));
}

const buildGuardsHistory = logs => {
  const guardsHistory = {};
  let guardId;
  let asleepFrom;
  logs.forEach(log => {
    const upperCaseLog = log.toUpperCase();
    if (upperCaseLog.match(/BEGINS SHIFT/) !== null) {
      guardId = getGuardId(log);
    }

    if (upperCaseLog.match(/FALLS ASLEEP/) !== null) {
      asleepFrom = Number(getLogMinutes(log));
    }

    if (upperCaseLog.match(/WAKES UP/) !== null) {
      let asleepTo = Number(getLogMinutes(log));
      guardsHistory[guardId] = (!guardsHistory[guardId]) ? {} : guardsHistory[guardId];

      for (let i = asleepFrom; i < asleepTo; i++) {
        guardsHistory[guardId][i] = (!guardsHistory[guardId][i]) ? 1 : (guardsHistory[guardId][i] + 1);
      }
    }
  });
  return guardsHistory;
}

module.exports = {
  getLogTimeStamp,
  orderLogs,
  getTimestampString,
  getLogMinutes,
  getGuardId,
  buildGuardsHistory
}
