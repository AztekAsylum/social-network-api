const dateTimeStamp = function () {
  const date = Date.now();
  const formatedDate = new Date(date).toString();
  return formatedDate;
};

module.exports = dateTimeStamp;
