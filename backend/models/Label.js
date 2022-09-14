const { Schema, model } = require('mongoose');

const LabelSchema = new Schema({
  name: {
    type: String,
    required: [true, 'You must provide a name']
  },
  color: {
    type: String,
    required: [true, 'You must provide a color']
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = model('Labels', LabelSchema);
