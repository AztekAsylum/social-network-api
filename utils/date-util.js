const dateTimeStamp = function (timeStamp) {
  const formatedDate = new Date(timeStamp).toString();
  return formatedDate;
};

module.exports = dateTimeStamp;
