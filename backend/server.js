require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/saqr-erp';

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err.message));

// Routes
const authRoutes = require('./src/routes/auth');
app.use('/api/auth', authRoutes);

// Hello World endpoint
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
