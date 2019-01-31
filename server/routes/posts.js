const express = require("express");
const passport = require("passport");

const router = express.Router();

// Import Post model and validation
const Post = require("../models/Post");
const validatePost = require("../validation/postValidation");

// Create new post
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { error } = validatePost(req.body);
    if (error) {
      return res.status(400).json(error.details[0].message);
    }

    const newPost = new Post(req.body);

    newPost.save().then(post => res.json(post));
  }
);

// Get all posts
router.get("/", async (req, res) => {
  const posts = await Post.find();
  if (!posts) {
    return res.status(404).json({ posts: "No posts found" });
  }

  res.json(posts);
});

// Get post by id
router.get("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    return res.status(404).json({ post: "No post found" });
  }

  res.json(post);
});

// Edit post
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { error } = validatePost(req.body);
    if (error) {
      return res.status(400).json(error.details[0].message);
    }

    Post.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    )
      .then(post => res.json(post))
      .catch(err => res.status(404).json({ post: "No post found" }));
  }
);

// Delete post
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Post.findOneAndRemove(req.params.id)
      .then(() => res.json({ delete: "Done" }))
      .catch(err => res.status(404).json({ post: "No post found" }));
  }
);

module.exports = router;
