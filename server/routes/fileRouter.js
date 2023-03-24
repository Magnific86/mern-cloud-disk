const { Router } = require("express");
const fileController = require("../controllers/fileController.js");
const middleWare = require("../middleWare/aurhMiddleWare.js");

const router = new Router();

router.post("", middleWare, fileController.createDir);
router.get("", middleWare, fileController.fetchFiles);

module.exports = router;
