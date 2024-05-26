const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const quoteRoutes = require('./routes/quoteRoutes');
const userRoutes = require('./routes/userRoutes');
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
const DB_NAME = process.env.DB_NAME || 'quotiverse';
const DB_URI = process.env.MONGODB_URI || `mongodb://127.0.0.1:27017/${DB_NAME}`;

// Middleware
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/quotes', quoteRoutes);
app.use('/api/users', userRoutes);

// Connect to MongoDB
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
