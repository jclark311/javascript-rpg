"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _ExpressServer = _interopRequireDefault(require("./server/ExpressServer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const WebServer = new _ExpressServer.default();