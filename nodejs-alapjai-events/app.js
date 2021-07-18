const Logger = require('./logger')
const TitleCaseStream = require('./utils')

const logger = new Logger()
const titleStream = new TitleCaseStream()

logger.success('Sikeres!');

logger.error("Sikertelen!")