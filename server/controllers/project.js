const Project = require("../models/project");
const User = require("../models/user");
const { validationResult } = require("express-validator");
const { storage } = require("../config/supabase/supabase-client");
exports.createProject = async (req, res, next) => {
  const errors = validationResult(req);

  let imageUrl = null;
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  console.log(req.file);
  if (req.file) {
    const { data, error } = await storage.createBucket("storage", {
      public: false,
      allowedMimeTypes: ["image/png"],
      fileSizeLimit: 1024,
    });

    if (error) {
      console.log(errors);
      return res.status(500).json({ message: error.message });
    }

    imageUrl = data.Key;
    console.log(data);
  }
  const { name, category, budget, dueDate, image, members } = req.body;
  const file = req.file ? req.file.path : null;
  const processedMembers = Array.isArray(members) ? members : [members];
  const project = new Project({
    name,
    category,
    dueDate,
    budget,
    file,
    processedMembers,
    image: imageUrl,
  });

  const uniqueMembers = [...new Set(members)];

  if (uniqueMembers.length !== members.length) {
    return res.status(400).json({ message: "id is duplicate" });
  }

  const membersArray = JSON.parse(members);
  const users = await User.find({ _id: { $in: membersArray } });
  const existingMemberIds = users.map((user) => user._id.toString());

  const nonExistentMembers = membersArray.filter(
    (memberId) => !existingMemberIds.includes(memberId),
  );
  if (nonExistentMembers.length > 0) {
    return res
      .status(400)
      .json({ message: "Members not found", nonExistentMembers });
  }

  try {
    const savedProject = await project.save();
    await User.updateMany(
      { _id: { $in: members } },
      { $push: { projects: savedProject._id } },
    );
    res
      .status(201)
      .json({ message: "Project created!", projectId: savedProject._id });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
