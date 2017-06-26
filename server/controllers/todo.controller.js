
const Todo = require('../models/todo');

let getAll = (req, res) => {
    Todo.find()
        .then((todos) => {
            res.send(todos);
        }).catch((err) => {
            res.status(400).send(err);
        })
}

let seed = (req, res) => {

    let newTodo = {};

    let arr = [
        new Todo({ title: 'finish Redux App', description: 'test description', isCompleted: false }),
        new Todo({ title: 'finish design documents', description: 'test description1123', isCompleted: true })
    ];

    Todo.collection.insert(arr)
        .then(() => {
            res.send('done')
        }).catch((err) => {
            res.status(400).send(err);
        })

}

let add = (req, res) => {
    let todo = req.body;
    let newTodo = new Todo({
        title: todo.title,
        description: todo.description,
        isCompleted: false
    });
    newTodo.save()
        .then(() => {
            res.status(200);
        }).catch((err) => {
            res.status(400).send(err);
        })
}


module.exports = {
    getAll, seed, add
}