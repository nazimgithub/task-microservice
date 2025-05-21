const Task = require('../models/Task');

exports.create = async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.status(201).send(task);
};

exports.all = async (req, res) => {
    const tasks = await Task.find();
    res.status(200).send(tasks);
};


