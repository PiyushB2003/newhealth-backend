const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// Initialize express app
const app = express();

// Middleware to parse JSON request body
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
  }
}

// Call connection function
connectToMongoDB();

// MongoDB Schema for form data
const formSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true }
});

// Model for form data
const FormData = mongoose.model('FormData', formSchema);

// POST route to handle form submission
app.get("/", (req, res) => {
    res.send("Hello this is piyush")
})
app.post('/submit-form', (req, res) => {
  const { firstname, lastname, email, address } = req.body;

  // Create a new document from the form data
  const newFormData = new FormData({ firstname, lastname, email, address });

  // Save to MongoDB
  newFormData.save()
    .then(() => {
      res.send('Form data saved successfully');
    })
    .catch(err => {
      res.status(500).send('Error saving form data: ' + err.message);
    });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
