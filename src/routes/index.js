const authRoute = require("./auth.route");
const notionRoute = require('./note.route');
const route = (app) => {
  app.use("/api/auth", authRoute);
  app.use("/api/todo", notionRoute);
};

module.exports = route;
