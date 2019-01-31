const express = require("express");
const passport = require("passport");

const router = express.Router();

// Import Post model
const Post = require("../models/Post");

// Import comment validation
const validateComment = require("../validation/commentValidation");

// Add comment
router.post("/:id", async (req, res) => {
  const { error } = validateComment(req.body);
  if (error) {
    return res.status(400).json(error.details[0].message);
  }

  const post = await Post.findById(req.params.id);
  if (!post) {
    return res.status(404).json({ post: "No post found" });
  }
  post.comments.unshift(req.body);
  post.save().then(post => res.json(post));
});

// Delete comment
router.delete(
  "/:post_id/:comment_id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const post = await Post.findById(req.params.post_id);
    if (!post) {
      return res.status(404).json({ post: "No post found" });
    }

    const commentIndex = post.comments.findIndex(
      comment => comment._id.toString() === req.params.comment_id
    );

    post.comments.splice(commentIndex, 1);
    post.save().then(post => res.json(post));
  }
);

module.exports = router;
