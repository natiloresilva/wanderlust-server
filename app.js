require("dotenv").config();

const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const cors = require("cors");

const auth = require("./routes/auth");

const authRouter = require('./routes/auth');
const travelRouter = require('./routes/travel-routes');
const profileRouter = require('./routes/profile');

// MONGOOSE CONNECTION
mongoose
  .connect("mongodb://localhost/wanderlust", {
    useUnifiedTopology: true,
    keepAlive: true,
    useNewUrlParser: true,
  })
  .then(() => console.log(`Connected to database`))
  .catch((err) => console.error(err));

// EXPRESS SERVER INSTANCE
const app = express();

// CORS MIDDLEWARE SETUP
app.use(
  cors({
    credentials: true,
    origin: [process.env.PUBLIC_DOMAIN],
  })
);

// SESSION MIDDLEWARE
app.use(
  session({
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60, // 1 day
    }),
    secret: process.env.SECRET_SESSION,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

// MIDDLEWARE
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/profile", profileRouter);
app.use("/travel", travelRouter);
app.use("/auth", authRouter)

// ERROR HANDLING
// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).json({ code: "not found" });
});

app.use((err, req, res, next) => {
  // always log the error
  console.error("ERROR", req.method, req.path, err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    const statusError = err.status || "500";
    res.status(statusError).json(err);
  }
});

module.exports = app;