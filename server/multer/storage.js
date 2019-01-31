const multer = require("multer");
const path = require("path");

// Set the storage engine
const storage = multer.diskStorage({
    destination: "./uploads",
    filename: (req, file, cb) => {
        cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
    }
});

// Check File Type
const checkFileType = (file, cb) => {
    // Allowed extensions
    const filetypes = /jpeg|jpg|png/;
    // Check extension
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
}

const upload = multer({
    storage,
    limits: { fileSize: 10000000 },
    fileFilter: (req, file, cb) => {
        checkFileType(file, cb);
    }
}).single("images");

module.exports = upload;