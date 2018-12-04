const getLogTimeStamp = log => {
  return new Date(log.substr(log.indexOf('[') + 1, log.indexOf(']') - 1))
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

module.exports = {
  getLogTimeStamp,
  orderLogs
}
