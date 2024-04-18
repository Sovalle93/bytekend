import { getAllBusinesses } from "../models/getAllBusinessModel.js";

const getBusinesses = async (req, res) => {
    try {
        const businesses = await getAllBusinesses();
        res.status(200).json({ businesses });
    } catch (error) {
        console.error("Error fetching businesses:", error);
        res.status(500).json({ message: "An error occurred while fetching businesses." });
    }
};

export { getBusinesses };
