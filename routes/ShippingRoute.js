import express from "express";
import ShippingController from "../controllers/ShippingController.js";
import GetShippingDataController from "../controllers/GetShippingDataController.js";

const ShippingRoute = express.Router();


ShippingRoute.post("/submit-form", ShippingController);

ShippingRoute.get("/get-entries", GetShippingDataController);

export default ShippingRoute;