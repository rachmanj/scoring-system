const { Activity } = require("../models/Activity");

const addActiviy = async (body) => {
  try {
    const activity = new Activity({ ...body, score: parseInt(body.score) });
    await activity.save();
    return activity;
  } catch (error) {
    throw error;
  }
};

module.exports = { addActiviy };
