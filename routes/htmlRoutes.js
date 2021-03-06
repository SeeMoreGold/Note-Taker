// DEPENDENCIES

const path = require("path");

// ROUTES

module.exports = function(app) {
  // HTML GET Requests

  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  // If no matching route is found default to the index file
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
