const mongoose = require("mongoose");

const ActivitySchema = new mongoose.Schema(
  {
    employeeNik: {
      type: String,
      required: [true, "Please add an employee NIK"],
    },
    activityName: {
      type: String,
      required: [true, "Please add an activity name"],
    },
    documentType: {
      type: String,
    },
    documentNumber: {
      type: String,
    },
    score: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Activity = mongoose.model("Activity", ActivitySchema);
module.exports = { Activity };
