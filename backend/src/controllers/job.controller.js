import Job from "../models/job.model.js";

// Submit job application
export const applyJob = async (req, res) => {
  try {
    const application = new Job(req.body);
    await application.save();

    res.status(201).json({
      message: "Job application submitted",
      application
    });
  } catch (error) {
    res.status(400).json({ message: "Error submitting application", error });
  }
};

// Get all job applications (Admin only)
export const getJobApplications = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching applications", error });
  }
};
