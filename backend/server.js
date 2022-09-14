require('dotenv/config');
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

// Middlewares
app.use(
  cors({
    origin: '*'
  })
);
app.use(express.json());

// ROUTES
const userRouter = require('./routes/users');
const taskRouter = require('./routes/tasks');
const labelRouter = require('./routes/labels');

app.get('/', (req, res) => {
  res.send('Hola');
});

app.use('/users', userRouter);
app.use('/tasks', taskRouter);
app.use('/labels', labelRouter);

// Connect to database
try {
  mongoose.connect(
    process.env.DB_CONNECTION,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    () => {
      console.log('Connected to Mongo!');
    }
  );
} catch (err) {
  console.error('Error connecting to Mongo', err);
}

// Server start listen in port 5000
app.listen(5000);
