//  IMPORTS
const { PORT } = require('./src/constants/constants');
const express = require('express');
const cookieParser = require('cookie-parser');

// EXPRESS CONFIG
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());


//  ROUTES



// DB CONFIG


// LISTEN TO PORT
app.listen(PORT, () => console.log(`Listening on ${PORT}`));