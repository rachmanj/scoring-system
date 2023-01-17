const activitiesService = require("../services/activitiesService");

const activitiesController = {
  async getAllActivities(req, res, next) {
    try {
      res.json({ message: "All activities" });
    } catch (error) {
      next(error);
    }
  },
  async createActivity(req, res, next) {
    try {
      const activity = await activitiesService.addActiviy(req.body);
      res.json(activity);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = activitiesController;
