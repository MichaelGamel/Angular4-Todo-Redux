const express = require('express');
const router = express.Router();
const todo = require('./todo.api');


router.use('/todo', todo);

/** to expose the service functionality */
module.exports = router;