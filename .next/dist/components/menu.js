"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/kk/tests/next.js/components/menu.js";

var Navigator = ["起步入门", "在页面间的跳转", "共享组件的用法", "创建动态页面", "路由美化后的清晰URLs", "清晰URLs的服务器端支持", "为页面获取数据", "给组件添加样式", "部署一个Next.js App"];

var getNavigatorList = function getNavigatorList(navigator) {
  var arr = [];

  for (var i = 0; i < navigator.length; i++) {
    arr.push(_react2.default.createElement("li", { key: i, className: "list-group-item", __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }, navigator[i]));
  }

  return arr;
};
var Menu = function Menu(props) {
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, _react2.default.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), _react2.default.createElement("ul", { className: "list-group", __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, getNavigatorList(Navigator)));
};

exports.default = Menu;