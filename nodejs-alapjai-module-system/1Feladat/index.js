const { increaseAndFormatDate } = require('./utils');

const transformDates = increaseAndFormatDate([
    new Date('July 20, 21 00:20:18 GMT+00:00'), // 2021. július 23.
    new Date('July 12, 21 00:20:18 GMT+00:00'),
    new Date('July 20, 19 00:20:18 GMT+00:00')
]);

console.log(transformDates)