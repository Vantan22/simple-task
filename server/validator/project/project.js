const { body } = require("express-validator");

const projectValidationRules = [
  // Validate name
  body("name")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Name is required and must be at least 3 characters long")
    .matches(/^[a-zA-Z0-9 ]+$/)
    .withMessage("Name can only contain letters, numbers, and spaces"),

  // Validate category
  body("category")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Category is required and must be at least 3 characters long")
    .matches(/^[a-zA-Z0-9 ]+$/)
    .withMessage("Category can only contain letters, numbers, and spaces"),

  // Validate dueDate
  body("dueDate")
    .trim()
    .isISO8601()
    .toDate()
    .withMessage("Due Date is required and must be a valid date"),

  // Validate budget
  body("budget")
    .trim()
    .isFloat({ min: 0 })
    .withMessage("Budget is required and must be a positive number"),
  // Validate members
  body("members")
    .optional()
    .custom((value, { req }) => {
      // Nếu giá trị của trường 'members' là một chuỗi, chuyển đổi nó thành một mảng chứa giá trị đó
      const members = Array.isArray(value) ? value : [value];

      // Kiểm tra nếu 'members' không phải là mảng hoặc mảng không chứa ít nhất một phần tử
      if (!Array.isArray(members) || members.length < 1) {
        throw new Error("Members is required and must be an array");
      }

      // Kiểm tra mỗi phần tử trong mảng 'members' nếu nó có đúng định dạng ObjectId của MongoDB
      if (
        !members.every(
          (member) =>
            typeof member === "string" && member.match(/^[a-fA-F0-9]{24}$/),
        )
      ) {
        throw new Error("Each member ID must be a valid MongoDB ObjectId");
      }

      // Trả về true nếu tất cả các điều kiện đều đúng
      return true;
    }),
];

module.exports = projectValidationRules;
