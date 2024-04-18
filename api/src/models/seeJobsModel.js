import pool from "../../config/database/connectionDB.js";

const lookJobs = async (loggedInUserEmail) => {
    try {
        const lookJobsQuery = `
            SELECT j.*
            FROM jobs j
            JOIN business b ON j.business = b.firstname
            WHERE b.email = $1
        `;
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



