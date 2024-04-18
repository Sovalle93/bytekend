import { lookJobs } from "../models/seeJobsModel.js";

const lookJobsController = async (req, res) => {
    try {
        const loggedInUserEmail = req.userEmail;
        const jobsResult = await lookJobs(loggedInUserEmail);

        if (jobsResult.success) {
            const jobs = jobsResult.jobs;
            res.status(200).json({ success: true, jobs });
        } else {
            const error = jobsResult.error;
            res.status(500).json({ success: false, error });
        }
    } catch (error) {
        console.error('Error in lookJobs controller:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

export { lookJobsController };



