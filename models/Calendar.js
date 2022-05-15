const mongoose = require("mongoose");
ObjectId = mongoose.Schema.ObjectId;

const calendarSchema = new mongoose.Schema(
  {
    phonenumber: {
      type: Number,
      required: true,
      unique: true,
    },
    slot: { type: String, required: true },
    date: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    updatedBy: { type: String },
    createdBy: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Calendar", calendarSchema);
