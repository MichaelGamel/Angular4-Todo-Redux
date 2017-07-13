
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
        .then((todo) => {
            res.status(200).send(todo);
        }).catch((err) => {
            res.status(400).send(err);
        })
}

let deleteTodo = (req, res) => {
    let _id = req.params.id;
    Todo.findByIdAndRemove(_id)
        .then((d) => {
            res.status(200).send(d);
        }).catch((err) => {
            res.status(400).send(err);
        })
}

let update = (req, res) => {
    let _id = req.params.id;
    let todo = req.body;
    Todo.findByIdAndUpdate(_id, { isCompleted: todo.isCompleted })
        .then((d) => {
            console.log('data', d);
            res.status(200).send(d);
        }).catch((err) => {
            res.status(400).send(err);
        })
}



module.exports = {
    getAll, seed, add, deleteTodo, update
}