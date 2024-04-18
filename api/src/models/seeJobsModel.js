import pool from "../../config/database/connectionDB.js";

const lookJobs = async (loggedInUserEmail) => {
    try {
        console.log('Looking for jobs of user with email:', loggedInUserEmail);
        const lookJobsQuery = `
            SELECT j.*, b.firstname AS business_name
            FROM jobs j
            JOIN business b ON j.business_id = b.id
            WHERE b.email = $1
        `;
        console.log('Executing query:', lookJobsQuery);
        const result = await pool.query(lookJobsQuery, [loggedInUserEmail]);
        const jobs = result.rows;
        console.log('Found jobs:', jobs);
        return jobs;
    } catch (error) {
        console.error('Error querying jobs:', error);
        const errorMessage = error.message || "An error occurred while fetching jobs.";
        return { success: false, error: errorMessage };
    }
};

export { lookJobs };




