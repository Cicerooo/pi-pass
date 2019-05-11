//Requires
const express = require('express');
const app = express();
const path = require('path');
const chalk = require('chalk');
const morgan = require('morgan');
const fs = require('fs');
//Static Routes
app.use('/', express.static(path.join(__dirname, '/')));
app.use(morgan('dev')) // logging
//Main App Route
app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/passwords', (req, res, next) => res.sendFile(path.join(__dirname, 'public/manager.json')));

const port = 8080;
//Run Server
app.listen(process.env.PORT || port, () => console.log(chalk.blue(`Listening intently on port ${port}`)));