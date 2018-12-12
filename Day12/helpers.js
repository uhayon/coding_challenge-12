const splitStringInGroups = (string, groupLength) => {
  const regex = new RegExp(`.{1,${groupLength}}`, 'g');
  return string.match(regex);
}

const getAllOcurrencesOfStringIndexes = (string, subStringToSearch) => {
  const regex = new RegExp(`${subStringToSearch}`, 'g');
  return (string.match(regex) || []).length;
}

module.exports = {
  splitStringInGroups,
  getAllOcurrencesOfStringIndexes
}
