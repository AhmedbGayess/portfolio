const express = require("express");
const upload = require("../multer/storage");
const fs = require("fs");

const router = express.Router();

// Upload an image
router.post("/", (req, res) => {
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
router.delete("/:filename", (req, res) => {
  try {
    const path = "./uploads/" + req.params.filename;
    fs.unlinkSync(path);
    res.json({ success: "Image deleted" });
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
