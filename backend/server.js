const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

// Connect to DB
connectDB();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(200).send('Hello! Welcome to Support Desk App');
});

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/users/login', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
