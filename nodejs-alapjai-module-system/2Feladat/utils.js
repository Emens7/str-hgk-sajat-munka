const generateUserList = (users) => {
    return users.map(user => {
        return {
            fullName: `${user.lastName} ${user.firstName}`,
            isAdult: user.age >= 18
        };
    });
}

module.exports = Object.freeze({
    generateUserList
})