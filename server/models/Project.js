const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  technologies: [{
    type: String,
    required: true
  }],
  images: [{
    type: String,
    required: true
  }],
  liveDemo: {
    type: String,
    default: ""
  },
  code: {
    type: String,
    default: ""
  }
});

const Project = mongoose.model("projects", ProjectSchema);

module.exports = Project;

