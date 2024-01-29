//  IMPORTS
const { PORT } = require('./src/constants/constants');
const express = require('express');
const cookieParser = require('cookie-parser');
const  dbConfig  = require('./src/db/dbConfig');
const router = require('../server/src/router/router');

// EXPRESS CONFIG
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());


//  ROUTES
app.use(router);


// DB CONFIG
dbConfig();

// LISTEN TO PORT
app.listen(PORT, () => console.log(`Listening on ${PORT}`));