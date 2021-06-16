const utils = require('./utils');

const users = [
    {
        firstName: 'Sándor',
        lastName: 'Nagy',
        age: 11
    },
    {
        firstName: 'Mátyás',
        lastName: 'Király',
        age: 51
    }
];

const result = utils.generateUserList(users);
console.log(result);

const allUserNames = utils.getUserNames(users);

console.log(allUserNames);

console.log(Object.isFrozen(utils.generateUserList, utils.getUserNames))