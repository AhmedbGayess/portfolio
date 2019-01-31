const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  publishedAt: {
    type: Date,
    default: Date.now()
  },
  comments: [
    {
      text: {
        type: String,
        required: true
      },
      publishedAt: {
        type: Date,
        default: Date.now()
      }
    }
  ],
  images: [{
    type: "String"
  }]
});

const Post = mongoose.model("posts", PostSchema);

module.exports = Post;
