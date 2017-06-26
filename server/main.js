const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/TodoDB');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const api = require('./routes');

app.use('/api', api);


const port = process.env.port || 5000;
app.listen(port, () => console.log('Running...'));