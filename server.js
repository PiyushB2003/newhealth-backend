import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from 'dotenv';
import MongoConnect from "./database/Db.js";
import ShippingOption from "./models/ShippingOption.js";

dotenv.config();


// Initialize express app
const app = express();

// Middleware to parse JSON request body
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
MongoConnect();

// POST route to handle form submission
app.get("/", (req, res) => {
  res.send("Hello this is piyush")
})

app.post('/submit-form', async (req, res) => {

  try {
    const {
      encapsulate, first_name, last_name, address1, address2, city, country, postal_code, email, phone, due_date, allergies, referred_by, placenta_preference, color_preference, signature_umbilical_preference, capsule_preference, terms, hospital, initials, promo_code
    } = req.body;

    if (!terms) {
      return res.status(400).json({ message: 'You must agree to the terms.' });
    }
    const shipping = await ShippingOption.findOne({ email })
    if (shipping) {
      return res.status(409).json({ message: "User already exist", success: false })
    }
    const newShipping = new ShippingOption({ encapsulate, first_name, last_name, address1, address2, city, country, postal_code, email, phone, due_date, allergies, referred_by, placenta_preference, color_preference, signature_umbilical_preference, capsule_preference, terms, hospital, initials, promo_code });

    await newShipping.save();
    res.status(200).json({ message: "Shipping successful", success: true })
  } catch (error) {
    console.log("Error while shipping ", error);
    return res.status(500).json({ message: "Internal server error", success: false });
  }
  const newFormData = new FormData({ firstname, lastname, email, address });

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
