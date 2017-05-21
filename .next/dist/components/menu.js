"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/kk/tests/next.js/components/menu.js";

var linkStyle = {
  marginRight: 15
};

var Navigator = [{
  url: "/",
  desc: "起步入门"
}, {
  url: "/link",
  desc: "在页面间的跳转"
}, {
  url: "/share",
  desc: "共享组件的用法"
}, {
  url: "/dynamic",
  desc: "创建动态页面"
}, {
  url: "/clean",
  desc: "路由美化后的清晰URLs"
}, {
  url: "/server",
  desc: "清晰URLs的服务器端支持"
}, {
  url: "/fetch",
  desc: "为页面获取数据"
}, {
  url: "/style",
  desc: "给组件添加样式"
}, {
  url: "/deploy",
  desc: "部署一个Next.js App"
}];

var getNavigatorList = function getNavigatorList(navigator) {
  var arr = [];

  for (var i = 0; i < navigator.length; i++) {
    arr.push(_react2.default.createElement("li", { key: i, className: "list-group-item", __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      }
    }, _react2.default.createElement(_link2.default, { href: navigator[i].url, __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      }
    }, _react2.default.createElement("a", { style: linkStyle, __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      }
    }, navigator[i].desc))));
  }

  return arr;
};
var Menu = function Menu(props) {
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, _react2.default.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }), _react2.default.createElement("ul", { className: "list-group", __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, getNavigatorList(Navigator)));
};

exports.default = Menu;