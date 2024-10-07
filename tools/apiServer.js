require('dotenv').config();
const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

// SSL options
let options;
try {
  options = {
    key: fs.readFileSync(path.join(__dirname, './cert/key.pem')),
    cert: fs.readFileSync(path.join(__dirname, './cert/cert.pem'))
  };
} catch (error) {
  console.error('Error reading SSL certificate files:', error);
  process.exit(1);
}

// Connect to MongoDB
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@clusterpete85.nb0hz5t.mongodb.net/pete85`;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => null);

const courseSchema = new mongoose.Schema({
  title: String,
  authorId: String,
  category: String,
});
const Author = mongoose.model('Author', courseSchema);
const Course = mongoose.model('Course', courseSchema);

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// API Routes for Courses
app.get('/api/courses', async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post('/api/courses', async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.put('/api/courses/:id', async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(course);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete('/api/courses/:id', async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Start HTTPS Server
https.createServer(options, app).listen(port, () => {
  console.log(`Server running on https://localhost:${port}`);
});

app.get('/api/authors', async (req, res) => {
  try {
    const authors = await Author.find();
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
