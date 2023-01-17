const express = require("express");
const router = express.Router();

// CONTROLLERS
const activitiesController = require("../controllers/activitiesController");

// ROUTES
router.get("/", activitiesController.getAllActivities);
router.post("/", activitiesController.createActivity);

module.exports = router;
