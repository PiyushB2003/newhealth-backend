import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from 'dotenv';
import MongoConnect from "./database/Db.js";
import ShippingRoute from "./routes/ShippingRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

MongoConnect();

app.get("/", (req, res) => {
  res.send("Hello this is piyush")
})

app.use('/api', ShippingRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
