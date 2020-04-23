"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

class App {
  

   constructor() {
    this.express = _express2.default.call(void 0, );
  }

   middlewares() {
    this.express.use(_express2.default.json());
    this.express.use(_cors2.default.call(void 0, ));
  }

   database() {
    _mongoose2.default.connect("", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

   routes() {
    this.express.get("/", (req, res) => {
      return res.send("Hello Word");
    });
  }
}

exports. default = new App().express;
