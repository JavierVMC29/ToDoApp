const { Schema, model } = require('mongoose');

const TaskSchema = new Schema({
  title: {
    type: String,
    required: [true, 'You must provide a title']
  },
  label: {
    type: Schema.Types.ObjectId,
    ref: 'Labels',
    required: [true, 'You must provide a label']
  },
  date: {
    type: Date,
    required: [true, 'You must provide a date']
  },
  priority: {
    type: String,
    required: [true, 'You must provide a priority']
  },
  details: {
    type: String,
    required: false,
    default: ''
  },
  completed: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = model('Tasks', TaskSchema);
