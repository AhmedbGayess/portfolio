const express = require("express");
const passport = require("passport");
const upload = require("../multer/storage");
const fs = require("fs");

const router = express.Router();

// Upload an image
router.post("/", passport.authenticate("jwt", {session: false}), (req, res) => {
  upload(req, res, err => {
    if (err) {
      res.json({ err: err });
    } else {
      if (req.file == undefined) {
        res.json({ msg: "Error: No File Selected!" });
      } else {
        res.json({ file: `${req.file.filename}` });
      }
    }
  });
});

// Delete image
router.delete("/:filename", passport.authenticate("jwt", {session: false}), (req, res) => {
  try {
    const path = "./uploads/" + req.params.filename;
    fs.unlinkSync(path);
    res.json({ success: "Image deleted" });
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
