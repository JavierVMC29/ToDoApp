const express = require('express');
const router = express.Router();

const Label = require('../models/Label');

/**
 * Send all labels
 */
router.get('/', async (req, res) => {
  try {
    const labels = await Label.find();
    res.json(labels);
  } catch (err) {
    res.json({ message: err });
  }
});

/**
 * Send the label with the specified id
 */
router.get('/:id', async (req, res) => {
  try {
    const label = await Label.findById(req.params.id);
    res.json(label);
  } catch (err) {
    res.json({ message: err });
  }
});

/**
 * Create and send a new label
 */
router.post('/', async (req, res) => {
  try {
    const newLabel = new Label({
      name: req.body.name,
      color: req.body.color
    });
    const label = await newLabel.save();
    res.json(label);
  } catch (err) {
    res.json({ message: err });
  }
});

/**
 * Update the name of the label with the specified id
 */
router.patch('/:id/name', async (req, res) => {
  try {
    const updatedLabel = await Label.updateOne(
      { _id: req.params.id },
      { $set: { name: req.body.name } }
    );
    res.json(updatedLabel);
  } catch (err) {
    res.json({ message: err });
  }
});

/**
 * Update the color of the label with the specified id
 */
router.patch('/:id/color', async (req, res) => {
  try {
    const updatedLabel = await Label.updateOne(
      { _id: req.params.id },
      { $set: { color: req.body.color } }
    );
    res.json(updatedLabel);
  } catch (err) {
    res.json({ message: err });
  }
});

/**
 * Delete the label with the specified id
 */
router.delete('/:id', async (req, res) => {
  try {
    const removedLabel = await Label.remove({ _id: req.params.id });
    res.send(removedLabel);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
