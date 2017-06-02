// Functions

const {
  message,
  success,
  error,
  highlight,
} = require('./chalkPresets.js');

const print = console.log;

function createID(length = 8) {
  return parseInt(
    Date.now()
      .toString()
      .split('')
      .reverse()
      .splice(0, length)
      .reverse()
      .join('')
  );
}

function logRouteMetadata(request) {
  const { route: { methods } } = request;
  print();
  print('----------');
  print(
    success(
      `${methods.get ? 'GET' : 'POST'} ${request.route.path.replace(/\:table/g, request.params.table)}`
    )
  );
  if (Object.keys(request.params).length > 0)
    print(message(`Params:`), request.params);
  if (Object.keys(request.query).length > 0)
    print(message(`Query:`), request.query);
  print('----------');
  print();
}

/**
 * From http://stackoverflow.com/questions/1765803/convert-a-mysql-date-to-javascript-date
 */
function parseISODate(dateString) {
  print(`${dateString}`);
  const dateParts = dateString.split('-');
  return new Date(
    dateParts[0],
    dateParts[1] - 1,
    dateParts[2].substr(0, 2)
  );
}

// Date.UTC(year, month, day, hours, minutes, seconds, millisec)
function createUTCTimestamp(theDate = Date.now()) {
  const now = new Date(theDate);
  return Date.UTC(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    now.getHours(),
    now.getMinutes(),
    now.getSeconds()
  );
}

// 'YYYY-MM-DD HH:MM:SS'
function createDateString(theDate = Date.now()) {
  const now = new Date(parseInt(theDate));
  return `${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
}

module.exports = {
  createDateString,
  createID,
  createUTCTimestamp,
  logRouteMetadata,
  parseISODate,
  print,
};