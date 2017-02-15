// Jan 1st 1970 00:00:00 am
const moment = require('moment');

// var date = moment().locale('ko');
// date.add(100,'year').subtract(9,'month');
// console.log(date.format('MMM DD YYYY'));

var someTimeStamp = moment().valueOf();
console.log(someTimeStamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));