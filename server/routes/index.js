const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    let todo = [
        {_id: 1, title: 'finish Redux App', description: 'test description', isCompleted: false },
        {_id: 2, title: 'finish design documents', description: 'test description1123', isCompleted: true }
    ];
    res.send(todo);
});

module.exports = router;