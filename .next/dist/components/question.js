"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/kk/tests/next.js/components/question.js";


var Question = function Question(props) {
  var questions = [];

  for (var i = 0; i < props.answers.length; i++) {
    questions.push(_react2.default.createElement("label", { style: { "display": "block" }, __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }, _react2.default.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }, "\u2726"), _react2.default.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }, props.answers[i].desc)));
  }

  return _react2.default.createElement("div", { style: {
      "background-color": "#FFF8E1",
      "border": "1px solid #FFE0B2",
      "max-width": "580px",
      "padding": "10px",
      "margin": "0 0 20px 0"
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, questions);
};

exports.default = Question;