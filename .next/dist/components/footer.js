"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _modal = require("./modal");

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/kk/tests/next.js/components/footer.js";


var Footer = function Footer() {
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement("button", { id: "btn", type: "button", className: "btn btn-danger btn-lg", "data-toggle": "modal", "data-target": "#modal", __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "\u5982\u679C\u89C9\u5F97\u5F88\u8D5E\u3002\u6350\u8D602-10\u5143\uFF0C\u9F13\u52B1\u4F5C\u8005\u7EE7\u7EED\u5199\u4F5C"), _react2.default.createElement("button", { type: "button", className: "btn btn-success col-md-offset-1", __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "\u4E0A\u4E00\u9875"), _react2.default.createElement("button", { type: "button", className: "btn btn-success", style: { "margin-left": "10px" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "\u4E0B\u4E00\u9875")), _react2.default.createElement(_modal2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }));
};

exports.default = Footer;