const multer = require("multer");
const path = require("path");

// Thiết lập nơi lưu trữ file và cách đặt tên file
const storage = multer.memoryStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Đường dẫn tới thư mục lưu trữ file
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Đặt tên file theo thời gian hiện tại và tên gốc của file
  },
});

// Xác định loại file hợp lệ
const fileFilter = (req, file, cb) => {
  const filetypes = /jpeg|jpg|png|pdf|doc|docx|xlsx|fig/; // Loại file cho phép
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error("File type not supported"), false);
  }
};

const upload = multer({ storage: storage });

module.exports = upload;
