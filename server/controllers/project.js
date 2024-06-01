const Project = require("../models/project");
const User = require("../models/user");

exports.createProject = async (req, res, next) => {
  const { fileUrls } = req;

  const imageUrl = fileUrls ? fileUrls[0] : null;
  const { name, category, budget, dueDate, image, members } = req.body;
  const file = req.file ? req.file.path : null;
  const processedMembers = Array.isArray(members) ? members : [members];

  const uniqueMembers = [...new Set(members)];

  if (uniqueMembers.length !== members.length) {
    return res.status(400).json({ message: "id is duplicate" });
  }

  const users = await User.find({ _id: { $in: processedMembers } });
  const existingMemberIds = users.map((user) => user._id.toString());

  const nonExistentMembers = members.filter(
    (memberId) => !existingMemberIds.includes(memberId),
  );
  if (nonExistentMembers.length > 0) {
    return res.status(400).json({
      message: "Members not found",
      nonExistentMembers,
    });
  }

  const project = new Project({
    name,
    category,
    dueDate,
    budget,
    file,
    processedMembers,
    image: imageUrl,
    members: members,
  });

  try {
    const savedProject = await project.save();
    await savedProject.populate("members");
    await User.updateMany(
      { _id: { $in: members } },
      { $push: { projects: savedProject._id } },
    );
    res.status(201).json({
      message: "Project created!",
      projectId: savedProject._id,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
      res.status(500).json({ message: err.message });
    }
    next(err);
  }
};
