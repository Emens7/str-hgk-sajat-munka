const EventEmitter = require('events')

class Logger extends EventEmitter {

    constructor() {
        super();
    }

    error (message) {
        this.emit('errorEvent', message);
        console.log(`\u001b[31m Error! ${message}\u001b[0m`)
    }
    success (message) {
        this.emit('successEvent', message);
        console.log(`\u001b[32m ${message}\u001b[0m`)
    }
}

module.exports = Logger