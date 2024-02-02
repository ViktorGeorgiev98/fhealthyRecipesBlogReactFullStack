//  IMPORTS
const { PORT } = require('./src/constants/constants');
const express = require('express');
const cookieParser = require('cookie-parser');
const  dbConfig  = require('./src/db/dbConfig');
const router = require('../server/src/router/router');
const cors = require('cors');
const bodyParser = require('body-parser');

// EXPRESS CONFIG
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:5173' // Replace with your frontend origin
}));



//  ROUTES
app.use(router);


// DB CONFIG
dbConfig();

// LISTEN TO PORT
app.listen(PORT, () => console.log(`Listening on ${PORT}`));