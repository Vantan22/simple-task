const multer = require("multer");
const path = require("path");

const storage = multer.memoryStorage();

const bucket = require("../firebase/firebaseConfig");
//Filter file type
const fileFilter = (req, file, cb) => {
  const filetypes = /jpeg|jpg|png|pdf|doc|docx|xlsx|fig/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error("File type not supported"), false);
  }
};
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 },
});

const uploadFilesToFirebase = async (req, res, next) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).send("No files uploaded.");
  }
  const fileUrls = [];

  for (const file of req.files) {
    const blob = bucket.file(`uploads/${Date.now()}-${file.originalname}`);
    const blobStream = blob.createWriteStream({
      resumable: false,
      contentType: file.mimetype,
      predefinedAcl: "publicRead",
    });

    blobStream.on("error", (err) => {
      console.log(err);
      return res.status(500).send("Failed to upload files.");
    });

    blobStream.on("finish", async () => {
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
      fileUrls.push(publicUrl);

      if (fileUrls.length === req.files.length) {
        req.fileUrls = fileUrls;
        next();
      }
    });

    blobStream.end(file.buffer);
  }
};

module.exports = { upload, uploadFilesToFirebase };
