import pool from "../../config/database/connectionDB.js";

const lookJobs = async (loggedInUserEmail) => {
    try {
        const lookJobsQuery = `SELECT * FROM jobs WHERE business = (SELECT id FROM business WHERE email = $1)`;
        const result = await pool.query(lookJobsQuery, [loggedInUserEmail]);
        const jobs = result.rows;
        return { success: true, jobs };
    } catch (error) {
        console.error('Error querying jobs:', error);
        const errorMessage = error.message || "An error occurred while fetching jobs.";
        return { success: false, error: errorMessage };
    }
};

export { lookJobs };



