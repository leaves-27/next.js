
          window.__NEXT_REGISTER_PAGE('/style', function() {
            var comp = module.exports =
webpackJsonp([11],{

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

/***/ 583:
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

var _jsxFileName = '/Users/kk/tests/next.js/pages/style.js?entry';

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/kk/tests/next.js/pages/style.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/kk/tests/next.js/pages/style.js"); } } })();
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
    })(module.exports.default || module.exports, "/style")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(583);


/***/ })

},[584]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9zdHlsZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyLmpzP2YyODQ0ZGQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQuanM/ZjI4NDRkZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbnUuanM/ZjI4NDRkZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lc3NhZ2UuanM/ZjI4NDRkZCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9zdHlsZS5qcz9mMjg0NGRkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWRlZmF1bHRcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVhZGVyXCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+TmV4dC5qczwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cImJzLWV4YW1wbGUtbmF2YmFyLWNvbGxhcHNlLTFcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFwiPlxuICAgICAgICAgIDxsaT48c3BhbiBzdHlsZT17eyBcImNvbG9yXCI6XCIjOTk5XCJ9fT7mnKzkuabor5Hoh6pMZWFybmluZyBOZXh0Lmpz6Iux5paH54mI77yM5aaC6ZyA6Iux5paH54mI77yM6K+36K6/6ZeuPC9zcGFuPjxhIHN0eWxlPXt7IFwiZGlzcGxheVwiOlwiaW5saW5lLWJsb2NrXCIsXCJwYWRkaW5nXCI6XCIxNXB4IDJweFwiLFwiY29sb3JcIjpcIiMyMTk2RjNcIiB9fSBocmVmPVwiaHR0cHM6Ly9sZWFybm5leHRqcy5jb20vYmFzaWNzL2dldHRpbmctc3RhcnRlZFwiIHRhcmdldD1cIl9ibGFua1wiPuiLseaWh+eJiDwvYT48L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbmF2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2hlYWRlci5qcyIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51JztcblxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIuLi9zdGF0aWMvYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgdHlwZT1cInRleHQvY3NzXCIgLz5cbiAgICA8SGVhZGVyIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5cbiAgICAgICAgICA8TWVudSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2xheW91dC5qcyIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmNvbnN0IGxpbmtTdHlsZSA9IHtcbiAgbWFyZ2luUmlnaHQ6IDE1XG59XG5cbmNvbnN0IE5hdmlnYXRvciA9IFtcbiAge1xuICAgIHVybDpcIi9cIixcbiAgICBkZXNjOlwi6LW35q2l5YWl6ZeoXCJcbiAgfSxcbiAge1xuICAgIHVybDpcIi9saW5rXCIsXG4gICAgZGVzYzpcIuWcqOmhtemdoumXtOeahOi3s+i9rFwiXG4gIH0sXG4gIHtcbiAgICB1cmw6XCIvc2hhcmVcIixcbiAgICBkZXNjOlwi5YWx5Lqr57uE5Lu255qE55So5rOVXCJcbiAgfSx7XG4gICAgdXJsOlwiL2R5bmFtaWNcIixcbiAgICBkZXNjOlwi5Yib5bu65Yqo5oCB6aG16Z2iXCJcbiAgfSx7XG4gICAgdXJsOlwiL2NsZWFuXCIsXG4gICAgZGVzYzpcIui3r+eUsee+juWMluWQjueahOa4heaZsFVSTHNcIlxuICB9LHtcbiAgICB1cmw6XCIvc2VydmVyXCIsXG4gICAgZGVzYzpcIua4heaZsFVSTHPnmoTmnI3liqHlmajnq6/mlK/mjIFcIlxuICB9LHtcbiAgICB1cmw6XCIvZmV0Y2hcIixcbiAgICBkZXNjOlwi5Li66aG16Z2i6I635Y+W5pWw5o2uXCJcbiAgfSx7XG4gICAgdXJsOlwiL3N0eWxlXCIsXG4gICAgZGVzYzpcIue7mee7hOS7tua3u+WKoOagt+W8j1wiXG4gIH0se1xuICAgIHVybDpcIi9kZXBsb3lcIixcbiAgICBkZXNjOlwi6YOo572y5LiA5LiqTmV4dC5qcyBBcHBcIlxuICB9XG5dXG5cbmNvbnN0IGdldE5hdmlnYXRvckxpc3QgPSAobmF2aWdhdG9yKSA9PiB7XG4gIGxldCBhcnIgPSBbXTtcblxuICBmb3IobGV0IGk9MDtpPG5hdmlnYXRvci5sZW5ndGg7aSsrKXtcbiAgICBhcnIucHVzaChcbiAgICAgIDxsaSBrZXk9e2l9IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxuICAgICAgICA8TGluayBocmVmPXtuYXZpZ2F0b3JbaV0udXJsfT5cbiAgICAgICAgICA8YSBzdHlsZT17bGlua1N0eWxlfT57IG5hdmlnYXRvcltpXS5kZXNjIH08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgKVxuICB9XG4gIFxuICByZXR1cm4gYXJyO1xufVxuY29uc3QgTWVudSA9IChwcm9wcykgPT4gKFxuICAgIDxkaXY+XG4gICAgICA8aDM+PC9oMz5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XG4gICAgICAgIHsgZ2V0TmF2aWdhdG9yTGlzdChOYXZpZ2F0b3IpIH1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21lbnUuanMiLCJjb25zdCBNZXNzc2FnZSA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICA8cCBzdHlsZT17eyBcbiAgICAgICAgXCJwYWRkaW5nLWxlZnRcIjpcIjMwMHB4XCIsXG4gICAgICAgIFwibWFyZ2luLXRvcFwiOlwiMTAwcHhcIixcbiAgICAgICAgXCJmb250LXNpemVcIjpcIjIwcHhcIlxuICAgIH19PlxuICAgICAg5q2j5Zyo57Sn5oCl5byA5Y+R5Lit77yM5pWs6K+35pyf5b6F44CCXG4gICAgPC9wPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTWVzc3NhZ2VcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21lc3NhZ2UuanMiLCJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9tZXNzYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8TGF5b3V0PlxuICAgIDxNZXNzYWdlIC8+XG4gIDwvTGF5b3V0PlxuKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3N0eWxlLmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFRQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBOzs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBQUE7QUFEQTtBQUtBO0FBQUE7QUFEQTtBQUtBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFBQTtBQWRBO0FBZUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBS0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0RBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUZBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        