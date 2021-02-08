// DEPENDENCIES

const express = require("express");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
let port = process.env.PORT || 8000;
/*if (port == null || port == "") {
  port = 8000;
}*/

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// ROUTES

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// LISTENER

// app.listen(port);

app.listen(port, function() {
  console.log("App listening on PORT: " + port);
});

