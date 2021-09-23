var express = require("express");
var router = express.Router();
var path = require("path");

// helper function
const sendImage = (res, file) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, `../public/images/compufest/${file}.jpg`));
};

/* GET users listing. */
router.get("/:name", function (req, res) {
  sendImage(res, req.params.name);
});

module.exports = router;
