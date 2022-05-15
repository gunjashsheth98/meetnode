const express = require("express");
const {
  getmeetingdata,
  addmeeting,
  editmeeting,
  deletemeeting,
} = require("../controllers/control");

const router = express.Router();

router.route("/").get(getmeetingdata);
router.post("/", addmeeting);
router.put("/", editmeeting);
router.delete("/:id", deletemeeting);

module.exports = router;
