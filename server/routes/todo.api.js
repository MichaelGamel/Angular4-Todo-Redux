const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo.controller');


/** first service retrieves array of todos */
router.get('/seed', todoController.seed);

router.get('/', todoController.getAll);

router.post('/', todoController.add);

router.delete('/:id', todoController.deleteTodo);

router.put('/:id', todoController.update);


module.exports = router;
