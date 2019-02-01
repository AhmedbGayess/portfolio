const express = require("express");
const consola = require("consola");
const { Nuxt, Builder } = require("nuxt");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const user = require("./routes/user");
const posts = require("./routes/posts");
const comments = require("./routes/comments");
const projects = require("./routes/projects");
const messages = require("./routes/messages");
const uploads = require("./routes/uploads");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cors middleware
app.use(cors());

// DB config
const { mongoURI } = require("./config/keys");

// Connect to MongoDB
mongoose
  .connect(
    mongoURI,
    { useNewUrlParser: true, useFindAndModify: false }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Passport middleware
require("./config/passport")(passport);

// Multer images static folder
app.use(express.static("./uploads"));

// Routes
app.use("/api/user", user);
app.use("/api/posts", posts);
app.use("/api/comments", comments);
app.use("/api/messages", messages);
app.use("/api/projects", projects);
app.use("/api/uploads", uploads);

const host = process.env.HOST || "127.0.0.1";
const port = process.env.PORT || 3000;

app.set("port", port);

// Import and Set Nuxt.js options
let config = require("../nuxt.config.js");
config.dev = !(process.env.NODE_ENV === "production");

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Listen the server
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
}
start();
