import pool from "../../config/database/connectionDB.js";

const getAllBusinesses = async () => {
    try {
        const query = "SELECT * FROM business";
        const result = await pool.query(query);
        return result.rows;
    } catch (error) {
        console.error("Error fetching businesses:", error);
        throw new Error("An error occurred while fetching businesses.");
    }
};

export { getAllBusinesses };
