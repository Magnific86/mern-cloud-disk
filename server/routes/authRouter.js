const { Router } = require("express");
const User = require("../models/User.js");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const config = require("config");
const jwt = require("jsonwebtoken");
const middleWare = require("../middleWare/aurhMiddleWare.js");
const fileController = require("../controllers/fileController.js");
const fileService = require("../services/fileService.js");
const File = require("../models/File.js");

const router = new Router();

router.get("/auth", middleWare, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.id });
    const token = jwt.sign({ id: user.id }, config.get("secretKeyForJWT"), {
      expiresIn: "1h",
    });
    return res.status(200).json({
      message: "Auth was successfully",
      body: {
        token,
        user,
      },
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message, bode: e });
  }
});

router.post(
  "/signup",
  [
    check("email", "Incorrect email").isEmail(),
    check("password", "Incprrect length of password 3 - 12").isLength({
      min: 3,
      max: 12,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Incorrect value", errors });
      }
      const { email, password } = req.body;
      const candidate = await User.findOne({ email });
      if (candidate) {
        return res
          .status(400)
          .json({ message: `User with email ${email} already exist` });
      }
      const hashedPassword = await bcrypt.hash(password, 6);

      const user = new User({
        email,
        password: hashedPassword,
      });
      await user.save();
      await fileService.createDir(new File({ name: "", user: user.id }));
      const token = jwt.sign({ id: user.id }, config.get("secretKeyForJWT"), {
        expiresIn: "1h",
      });
      return res.status(200).json({
        message: "User and token successfully created",
        body: {
          token,
          user,
        },
      });
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: e.message, bode: e });
    }
  }
);

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const isPassValid = bcrypt.compareSync(password, user.password);
    if (!isPassValid) {
      return res.status(400).json({ message: "Incorrect password" });
    }
    const token = jwt.sign({ id: user.id }, config.get("secretKeyForJWT"), {
      expiresIn: "1h",
    });
    return res.status(200).json({
      message: "Sign in was successfully",
      body: {
        token,
        user,
      },
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: e.message, bode: e });
  }
});

module.exports = router;
