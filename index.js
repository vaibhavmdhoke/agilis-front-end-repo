// index.js

/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/user", (req, res) => {
  res.render("user", { title: "Profile", userProfile: { nickname: "Auth0" } });
});

app.get("/vikas", (req, res) => {
  res.render("userResume", {
    title: "Vikas",
    userProfile: {
      image: "/vikas-photo.jpg",
      name: "Vikas",
      college: "CVR",
      residence: "Hyderabad",
      company: "Agilis AS",
      role: "Front End Engineer",
      contactNumber: "6300813872",
      emailId: "msaivikas98@gmail.com",
    },
  });
});
app.get("/karthik", (req, res) => {
  res.render("userResume", {
    title: "Karthik",
    userProfile: {
      image: "/karthik-photo.jpeg",
      name: "Karthik",
      college: "IIITD&MK",
      residence: "Warangal",
      company: "Agilis AS",
      role: "Front End Engineer",
      contactNumber: "9566181750",
      emailId: "vangetikarthik26@gmail.com",
    },
  });
});
/**
 * Server Activation
 */

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
