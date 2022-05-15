const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/aync");
const Calendar = require("../models/Calendar");

// Get Meeting List
exports.getmeetingdata = async (req, res, next) => {
  const config = await Calendar.find(req.query);
  res.status(200).json({ success: true, count: config.length, data: config });
};

// Delete Meeting List
exports.deletemeeting = async (req, res, next) => {
  try {
    const config = await Calendar.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, data: config });
  } catch (err) {
    console.log(err);
  }
};

// Add Meeting
exports.addmeeting = async (req, res, next) => {
  try {
    let data = req.body;

    const meeting = await Calendar.create(data);
    res.status(201).json({
      success: true,
      data: meeting,
    });
  } catch (err) {
    console.log(err);

    if (err.name === "ValidationError") {
      const message = Object.values(err.errors).map((val) => val.message);
      error = new ErrorResponse(message, 400);
      next(err);
    }

    if (err.code === 11000) {
      console.log(err.message);
      const message = "PhoneNumber Is Already Exits!";
      error = new ErrorResponse(message, 400);
      next(err);
    }
  }
};

// Edit Meeting
exports.editmeeting = async (req, res, next) => {
  try {
    let data = req.body;
    const meeting = await Calendar.findByIdAndUpdate(data.id, data);
    res.status(201).json({
      success: true,
      data: meeting,
    });
  } catch (err) {
    console.log(err);

    if (err.name === "ValidationError") {
      const message = Object.values(err.errors).map((val) => val.message);
      error = new ErrorResponse(message, 400);
      next(err);
    }

    if (err.code === 11000) {
      console.log(err.message);
      const message = "PhoneNumber Is Already Exits!";
      error = new ErrorResponse(message, 400);
      next(err);
    }
  }
};
