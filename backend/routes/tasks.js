const express = require('express');
const router = express.Router();

const Task = require('../models/Task');

/**
 * Send all tasks
 */
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find().populate('label');
    res.json(tasks);
  } catch (err) {
    res.json({ message: err });
  }
});

/**
 * Send the task with the specified id
 */
router.get('/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate('label');
    res.json(task);
  } catch (err) {
    res.json({ message: err });
  }
});

/**
 * Create and send a new task
 */
router.post('/', async (req, res) => {
  try {
    const newTask = new Task({
      title: req.body.title,
      label: req.body.label,
      date: req.body.date,
      priority: req.body.priority,
      details: req.body.details
    });
    const task = await newTask.save();
    res.json(task);
  } catch (err) {
    res.json({ message: err });
  }
});

/**
 * Update the title of the task with the specified id
 */
router.patch('/:id/title', async (req, res) => {
  try {
    const updatedTask = await Task.updateOne(
      { _id: req.params.id },
      { $set: { title: req.body.title } }
    );
    res.json(updatedTask);
  } catch (err) {
    res.json({ message: err });
  }
});

/**
 * Update the date of the task with the specified id
 */
router.patch('/:id/date', async (req, res) => {
  try {
    const updatedTask = await Task.updateOne(
      { _id: req.params.id },
      { $set: { date: req.body.date } }
    );
    res.json(updatedTask);
  } catch (err) {
    res.json({ message: err });
  }
});

/**
 * Update the label of the task with the specified id
 */
router.patch('/:id/label', async (req, res) => {
  try {
    const updatedTask = await Task.updateOne(
      { _id: req.params.id },
      { $set: { label: req.body.label } }
    );
    res.json(updatedTask);
  } catch (err) {
    res.json({ message: err });
  }
});

/**
 * Update the priority of the task with the specified id
 */
router.patch('/:id/priority', async (req, res) => {
  try {
    const updatedTask = await Task.updateOne(
      { _id: req.params.id },
      { $set: { priority: req.body.priority } }
    );
    res.json(updatedTask);
  } catch (err) {
    res.json({ message: err });
  }
});

/**
 * Update the details of the task with the specified id
 */
router.patch('/:id/details', async (req, res) => {
  try {
    const updatedTask = await Task.updateOne(
      { _id: req.params.id },
      { $set: { details: req.body.details } }
    );
    res.json(updatedTask);
  } catch (err) {
    res.json({ message: err });
  }
});

/**
 * Update the completed field of the task with the specified id
 */
router.patch('/:id/completed', async (req, res) => {
  try {
    const updatedTask = await Task.updateOne(
      { _id: req.params.id },
      { $set: { completed: req.body.completed } }
    );
    res.json(updatedTask);
  } catch (err) {
    res.json({ message: err });
  }
});

/**
 * Delete the task with the specified id
 */
router.delete('/:id', async (req, res) => {
  try {
    const removedTask = await Task.remove({ _id: req.params.id });
    res.send(removedTask);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
