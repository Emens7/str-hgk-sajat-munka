const express = require('express');
const app = express();

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const port = 8080;

const swaggerDoc = YAML.load('./openapi.yaml')

app.use('/person', require('./routes/person'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(port, () => {
    console.log(`The server is listening on http://localhost:${port}`);
});