"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const bodyParser = require("body-parser");

const createError = require("http-errors");

const cookieParser = require("cookie-parser");

const logger = require("morgan");

const helmet = require("helmet");

const indexRouter = require("../routes/index");
/**
 *  Example of using ES6 syntectic sugar to create Express JS server
 */


class ExpressServer {
  constructor(hostname = process.env.LOCAL_HOST, port = process.env.DEFAULT_PORT) {
    _defineProperty(this, "initServer", () => {
      // Create Server
      this.server = (0, _express.default)();
      this.server.use(bodyParser.json()); // for parsing application/json

      this.server.use(bodyParser.urlencoded({
        extended: true
      })); // view engine setup

      this.server.set("views", "views");
      this.server.set("view engine", "ejs");
      this.server.use(logger("dev"));
      this.server.use(cookieParser());
      this.server.use(helmet());
      this.server.use(_express.default.static("public"));
      this.server.use("/", indexRouter); // catch 404 and forward to error handler

      this.server.use((req, res, next) => {
        next(createError(404));
      }); // error handler

      this.server.use((err, req, res) => {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get("env") === "development" ? err : {}; // render the error page

        res.status(err.status || 500);
        res.render("error");
      }); // Start Listening

      this.server.listen(this.port, () => {
        console.log(`${this.serverName} Started at http://${this.hostname}:${this.port}/`);
      });
    });

    this.serverName = "Express Server";
    this.hostname = hostname;
    this.port = port; // Auto Start Server

    this.initServer();
  }

} // EXPORT MODULE


module.exports = ExpressServer;