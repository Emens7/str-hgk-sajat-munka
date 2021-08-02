const express = require('express');
const app = express();

// Mongoose importáéása
const mongoose = require('mongoose');
// Beépített globális promise használata
mongoose.Promise = global.Promise;

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const bodyParser = require('body-parser');

const port = 8080;

// Adatbázishoz csatlakozás monggos-al
const connectDB = async () => {
    try {
        await mongoose
            .connect('mongodb://localhost:27017/myFirstDatabase',
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                }
            );
            console.log(`MongoDB kapcsolódás sikeres`)
    } catch(err) {
        console.log('A kapcsolódás a mongDb-vel sikertelen')
    }    
};

connectDB();

const swaggerDoc = YAML.load('./openapi.yaml');

app.use(bodyParser.json());

app.use('/person', require('./routes/person'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(port, () => {
    console.log(`The server is listening on http://localhost:${port}`);
});