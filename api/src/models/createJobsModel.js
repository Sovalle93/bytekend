import pool from "../../config/database/connectionDB.js";

const createJobs = async (business, role, skill, service) => {
    try {
        if (!business || !role || !skill || !service) {
            throw new Error("Missing required parameters.");
        }

        const insertJobsQuery = `
            INSERT INTO jobs (business_id, role, skill, service)
            VALUES ((SELECT id FROM business WHERE firstname = $1), $2, $3, $4)
            RETURNING *
        `;

        const result = await pool.query(insertJobsQuery, [business, role, skill, service]);
        const newJob = result.rows[0];
        return { success: true, job: newJob };
    } catch (error) {
        console.error(error);
        const errorMessage = error.message || "An error occurred while creating the job.";
        return { success: false, error: errorMessage };
    }
};

export { createJobs };
