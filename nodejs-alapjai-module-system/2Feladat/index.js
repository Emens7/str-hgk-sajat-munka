const utils = require('./utils');

const users = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 11
    },
    {
        firstName: 'Steve',
        lastName: 'Smith',
        age: 51
    }
];

const result = utils.generateUserList(users);
console.log(result);