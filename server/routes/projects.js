const express = require("express");
const passport = require("passport");

const router = express.Router();

// Import Project model and validation
const Project = require("../models/Project");
const validateProject = require("../validation/projectValidation");

// Add new project
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),  
  (req, res) => {
    const { error } = validateProject(req.body);
    if (error) {
      return res.status(400).json(error.details[0].message);
    }

    const newProject = new Project(req.body);

    newProject.save().then(project => res.json(project));
  }
);

// Get all projects
router.get("/", async (req, res) => {
  const projects = await Project.find();
  if (!projects) {
    return res.status(404).json({ projects: "No projects found" });
  }

  res.json(projects);
});

// Get project by id
router.get("/:id", async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project) {
    return res.status(404).json({ project: "No project found" });
  }

  res.json(project);
});

// Edit project
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { error } = validateProject(req.body);
    if (error) {
      return res.status(400).json(error.details[0].message);
    }

    Project.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    )
      .then(project => res.json(project))
      .catch(err => res.status(404).json({ project: "No project found" }));
  }
);

// Delete project
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Project.findOneAndRemove(req.params.id)
    .then(() => res.json({ delete: "Done" }))
    .catch(err => res.status(404).json({ project: "No project found" }));
  }
);
module.exports = router;
