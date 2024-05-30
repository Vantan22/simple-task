const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/is-auth");
const { body } = require("express-validator");
const {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/project");
const projectValidationRules = require("../validator/project/project");
const uploadFileMiddleware = require("../middleware/file-handler");

// router.get("/projects", authMiddleware, getProjects);

// router.get("/project/:projectId", authMiddleware, getProject);
router.post(
  "/project",
  authMiddleware,
  uploadFileMiddleware.single("image"),
  projectValidationRules,
  createProject,
);
// router.patch("/project/:projectId", authMiddleware, updateProject);
// router.delete("/project/:projectId", authMiddleware, deleteProject);

module.exports = router;
