const express = require('express');
const router = express.Router();

const User = require('../models/User');

/**
 * Send all users
 */
router.get('/', async (req, res) => {
  try {
    const users = await User.find().populate('tasks');
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});

/**
 * Send the user with the specified id
 */
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('tasks');
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
});

/**
 * Create and send a new user
 */
router.post('/', async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      name: req.body.name,
      lastname: req.body.lastname,
      age: req.body.age,
      tasks: req.body.tasks,
      email: req.body.email,
      password: req.body.password
    });
    const user = await newUser.save();
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
});

/**
 * Update the username of the user with the specified id
 */
router.patch('/:id/username', async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.id },
      { $set: { username: req.body.username } }
    );
    res.json(updatedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

/**
 * Update the password of the user with the specified id
 */
router.patch('/:id/password', async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.id },
      { $set: { password: req.body.password } }
    );
    res.json(updatedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

/**
 * Update the age of the user with the specified id
 */
router.patch('/:id/age', async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.id },
      { $set: { age: req.body.age } }
    );
    res.json(updatedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

/**
 * Update the tasks of the user with the specified id
 */
router.patch('/:id/tasks', async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.id },
      { $set: { tasks: req.body.tasks } }
    );
    res.json(updatedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

/**
 * Delete the user with the specified id
 */
router.delete('/:id', async (req, res) => {
  try {
    const removedUser = await User.remove({ _id: req.params.id });
    res.send(removedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
