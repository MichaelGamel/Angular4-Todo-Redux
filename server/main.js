// like using in .net (using (just import) existing packages inside package.json)
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
/** custom modules */
const api = require('./routes');

// change the default promise of mongoos with the promise of global
mongoose.Promise = global.Promise;
// opening database
mongoose.connect('mongodb://localhost/TodoDB');

// use the fanctionality of express
const app = express();

/// app.use section (Middle Ware)
// to handle cross-origin error
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', api);

/** to handle port when changed between server and localhost */
const port = process.env.port || 5000;
/** run the server */
app.listen(port, () => console.log('Running...'));