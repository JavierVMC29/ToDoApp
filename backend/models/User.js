const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, 'You must provide a username']
  },
  name: {
    type: String,
    required: [true, 'You must provide a name']
  },
  lastname: {
    type: String,
    required: [true, 'You must provide a lastname']
  },
  age: {
    type: String,
    required: [true, 'You must provide an age']
  },
  tasks: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Tasks' }],
    required: [true, 'You must provide an array of tasks']
  },
  email: {
    type: String,
    required: [true, 'You must provide an email'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'You must provide a password']
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = model('Users', UserSchema);
