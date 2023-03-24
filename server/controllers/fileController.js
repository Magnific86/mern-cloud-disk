const FileService = require("../services/fileService.js");
const User = require("../models/User.js");
const File = require("../models/File.js");

class FileController {
  async createDir(req, res) {
    try {
      const { name, type, parent } = req.body;
      const file = new File({ name, type, parent, user: req.user.id });
      const parentFile = await File.findOne({ _id: parent });
      if (!parentFile) {
        file.path = name;
        await FileService.createDir(file);
      } else {
        file.path = `${parentFile.path}\\${name}`;
        await FileService.createDir(file);
        parentFile.childs.push(file._id);
        await parentFile.save();
      }
      await file.save();
      return res
        .status(200)
        .json({ message: "File successfully created", file });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Failed to create dir", e });
    }
  }

  async fetchFiles(req, res) {
    try {
      const files = File.find({ user: req.user.id, parent: req.query.parent });
      return res
        .status(200)
        .json({ message: "Files successfully finded", body: files });
    } catch (e) {
      return res.status(500).json({ message: "Failed to get file", e });
    }
  }
}

module.exports = new FileController();
