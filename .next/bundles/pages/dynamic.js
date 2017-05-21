
          window.__NEXT_REGISTER_PAGE('/dynamic', function() {
            var comp = module.exports =
webpackJsonp([7],{

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/kk/tests/next.js/components/header.js";

var Header = function Header() {
  return _react2.default.createElement("nav", { className: "navbar navbar-default", __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, _react2.default.createElement("div", { className: "container-fluid", __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, _react2.default.createElement("div", { className: "navbar-header", __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement("a", { className: "navbar-brand", href: "#", __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, "Next.js")), _react2.default.createElement("div", { className: "collapse navbar-collapse", id: "bs-example-navbar-collapse-1", __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement("ul", { className: "nav navbar-nav navbar-right", __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement("span", { style: { "color": "#999" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "\u672C\u4E66\u8BD1\u81EALearning Next.js\u82F1\u6587\u7248\uFF0C\u5982\u9700\u82F1\u6587\u7248\uFF0C\u8BF7\u8BBF\u95EE"), _react2.default.createElement("a", { style: { "display": "inline-block", "padding": "15px 2px", "color": "#2196F3" }, href: "https://learnnextjs.com/basics/getting-started", target: "_blank", __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "\u82F1\u6587\u7248"))))));
};

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/kk/tests/next.js/components/header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/kk/tests/next.js/components/header.js"); } } })();

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(562);

var _header2 = _interopRequireDefault(_header);

var _menu = __webpack_require__(564);

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kk/tests/next.js/components/layout.js';


var Layout = function Layout(props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('link', { rel: 'stylesheet', href: '../static/bootstrap/dist/css/bootstrap.min.css', type: 'text/css', __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), _react2.default.createElement(_header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), _react2.default.createElement('div', { className: 'container-fluid', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('div', { className: 'row', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('div', { className: 'col-md-3', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_menu2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  })), _react2.default.createElement('div', { className: 'col-md-9', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement('div', { className: 'main', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, props.children)))));
};

exports.default = Layout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/kk/tests/next.js/components/layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/kk/tests/next.js/components/layout.js"); } } })();

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(569);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/kk/tests/next.js/components/menu.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/kk/tests/next.js/components/menu.js"); } } })();

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/kk/tests/next.js/components/message.js";

var Messsage = function Messsage() {
  return _react2.default.createElement("div", { className: "container", __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, _react2.default.createElement("p", { style: {
      "padding-left": "300px",
      "margin-top": "100px",
      "font-size": "20px"
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, "\u6B63\u5728\u7D27\u6025\u5F00\u53D1\u4E2D\uFF0C\u656C\u8BF7\u671F\u5F85\u3002"));
};

exports.default = Messsage;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/kk/tests/next.js/components/message.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/kk/tests/next.js/components/message.js"); } } })();

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _layout = __webpack_require__(563);

var _layout2 = _interopRequireDefault(_layout);

var _message = __webpack_require__(571);

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kk/tests/next.js/pages/dynamic.js?entry';

exports.default = function () {
  return _react2.default.createElement(_layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_message2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/kk/tests/next.js/pages/dynamic.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/kk/tests/next.js/pages/dynamic.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/dynamic")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(575);


/***/ })

},[576]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9keW5hbWljLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXIuanM/MWM5ZGVmOSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC5qcz8xYzlkZWY5Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVudS5qcz8xYzlkZWY5Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVzc2FnZS5qcz8xYzlkZWY5Iiwid2VicGFjazovLy8uL3BhZ2VzL2R5bmFtaWMuanM/MWM5ZGVmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBIZWFkZXIgPSAoKSA9PiAoXG4gIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1kZWZhdWx0XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWhlYWRlclwiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPk5leHQuanM8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJicy1leGFtcGxlLW5hdmJhci1jb2xsYXBzZS0xXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcIj5cbiAgICAgICAgICA8bGk+PHNwYW4gc3R5bGU9e3sgXCJjb2xvclwiOlwiIzk5OVwifX0+5pys5Lmm6K+R6IeqTGVhcm5pbmcgTmV4dC5qc+iLseaWh+eJiO+8jOWmgumcgOiLseaWh+eJiO+8jOivt+iuv+mXrjwvc3Bhbj48YSBzdHlsZT17eyBcImRpc3BsYXlcIjpcImlubGluZS1ibG9ja1wiLFwicGFkZGluZ1wiOlwiMTVweCAycHhcIixcImNvbG9yXCI6XCIjMjE5NkYzXCIgfX0gaHJlZj1cImh0dHBzOi8vbGVhcm5uZXh0anMuY29tL2Jhc2ljcy9nZXR0aW5nLXN0YXJ0ZWRcIiB0YXJnZXQ9XCJfYmxhbmtcIj7oi7HmlofniYg8L2E+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L25hdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9oZWFkZXIuanMiLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCBNZW51IGZyb20gJy4vbWVudSc7XG5cbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLi4vc3RhdGljL2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiIHR5cGU9XCJ0ZXh0L2Nzc1wiIC8+XG4gICAgPEhlYWRlciAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XG4gICAgICAgICAgPE1lbnUgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sYXlvdXQuanMiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5jb25zdCBsaW5rU3R5bGUgPSB7XG4gIG1hcmdpblJpZ2h0OiAxNVxufVxuXG5jb25zdCBOYXZpZ2F0b3IgPSBbXG4gIHtcbiAgICB1cmw6XCIvXCIsXG4gICAgZGVzYzpcIui1t+atpeWFpemXqFwiXG4gIH0sXG4gIHtcbiAgICB1cmw6XCIvbGlua1wiLFxuICAgIGRlc2M6XCLlnKjpobXpnaLpl7TnmoTot7PovaxcIlxuICB9LFxuICB7XG4gICAgdXJsOlwiL3NoYXJlXCIsXG4gICAgZGVzYzpcIuWFseS6q+e7hOS7tueahOeUqOazlVwiXG4gIH0se1xuICAgIHVybDpcIi9keW5hbWljXCIsXG4gICAgZGVzYzpcIuWIm+W7uuWKqOaAgemhtemdolwiXG4gIH0se1xuICAgIHVybDpcIi9jbGVhblwiLFxuICAgIGRlc2M6XCLot6/nlLHnvo7ljJblkI7nmoTmuIXmmbBVUkxzXCJcbiAgfSx7XG4gICAgdXJsOlwiL3NlcnZlclwiLFxuICAgIGRlc2M6XCLmuIXmmbBVUkxz55qE5pyN5Yqh5Zmo56uv5pSv5oyBXCJcbiAgfSx7XG4gICAgdXJsOlwiL2ZldGNoXCIsXG4gICAgZGVzYzpcIuS4uumhtemdouiOt+WPluaVsOaNrlwiXG4gIH0se1xuICAgIHVybDpcIi9zdHlsZVwiLFxuICAgIGRlc2M6XCLnu5nnu4Tku7bmt7vliqDmoLflvI9cIlxuICB9LHtcbiAgICB1cmw6XCIvZGVwbG95XCIsXG4gICAgZGVzYzpcIumDqOe9suS4gOS4qk5leHQuanMgQXBwXCJcbiAgfVxuXVxuXG5jb25zdCBnZXROYXZpZ2F0b3JMaXN0ID0gKG5hdmlnYXRvcikgPT4ge1xuICBsZXQgYXJyID0gW107XG5cbiAgZm9yKGxldCBpPTA7aTxuYXZpZ2F0b3IubGVuZ3RoO2krKyl7XG4gICAgYXJyLnB1c2goXG4gICAgICA8bGkga2V5PXtpfSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cbiAgICAgICAgPExpbmsgaHJlZj17bmF2aWdhdG9yW2ldLnVybH0+XG4gICAgICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+eyBuYXZpZ2F0b3JbaV0uZGVzYyB9PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2xpPlxuICAgIClcbiAgfVxuICBcbiAgcmV0dXJuIGFycjtcbn1cbmNvbnN0IE1lbnUgPSAocHJvcHMpID0+IChcbiAgICA8ZGl2PlxuICAgICAgPGgzPjwvaDM+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxuICAgICAgICB7IGdldE5hdmlnYXRvckxpc3QoTmF2aWdhdG9yKSB9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBNZW51XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tZW51LmpzIiwiY29uc3QgTWVzc3NhZ2UgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgPHAgc3R5bGU9e3sgXG4gICAgICAgIFwicGFkZGluZy1sZWZ0XCI6XCIzMDBweFwiLFxuICAgICAgICBcIm1hcmdpbi10b3BcIjpcIjEwMHB4XCIsXG4gICAgICAgIFwiZm9udC1zaXplXCI6XCIyMHB4XCJcbiAgICB9fT5cbiAgICAgIOato+WcqOe0p+aApeW8gOWPkeS4re+8jOaVrOivt+acn+W+heOAglxuICAgIDwvcD5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NzYWdlXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tZXNzYWdlLmpzIiwiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBNZXNzYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvbWVzc2FnZSc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPExheW91dD5cbiAgICA8TWVzc2FnZSAvPlxuICA8L0xheW91dD5cbilcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9keW5hbWljLmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFRQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBOzs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBQUE7QUFEQTtBQUtBO0FBQUE7QUFEQTtBQUtBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFBQTtBQWRBO0FBZUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBS0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0RBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUZBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        