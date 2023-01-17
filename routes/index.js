const express = require("express");
const router = express.Router();

// ROUTES
const scoreRoute = require("./scoreRoute");
const activitiesRoute = require("./activitiesRoute");

const routeIndex = [
  {
    path: "/score",
    route: scoreRoute,
  },
  {
    path: "/activities",
    route: activitiesRoute,
  },
];

routeIndex.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
