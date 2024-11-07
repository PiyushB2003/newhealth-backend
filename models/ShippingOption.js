import mongoose from "mongoose";

const shippingOptionSchema = new mongoose.Schema({
    encapsulate: {
        type: Boolean
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    address1: {
        type: String,
        required: true
    },
    address2: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    postal_code: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true
    },
    due_date: {
        type: Date,
        required: true
    },
    allergies: {
        type: String,
        required: true
    },
    referred_by: {
        type: String
    },
    placenta_preference: {
        type: [String]
    },
    color_preference: {
        type: [String]
    },
    signature_umbilical_preference: {
        type: Boolean
    },
    capsule_preference: {
        type: [String]
    },
    terms: {
        type: Boolean
    },
    hospital: {
        type: String,
        required: true
    },
    initials: {
        type: String,
        required: true
    },
    promo_code: {
        type: String
    }
});

const ShippingOption = mongoose.model("Shipping", shippingOptionSchema);

export default ShippingOption;