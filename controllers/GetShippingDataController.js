import ShippingOption from "../models/ShippingOption.js";

const GetShippingDataController = async (req, res) => {
    try {
        const entries = await ShippingOption.find();
        return res.status(200).json(entries);
    } catch (error) {
        console.error('Error fetching entries:', error);
        return res.status(500).json({ message: 'Error retrieving entries' });
    }
}


export default GetShippingDataController;