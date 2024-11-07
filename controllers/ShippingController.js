import ShippingOption from "../models/ShippingOption.js";


const ShippingController = async (req, res) => {
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
}

export default ShippingController;