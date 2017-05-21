
          window.__NEXT_REGISTER_PAGE('/deploy', function() {
            var comp = module.exports =
webpackJsonp([12],{

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

/***/ 585:
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

var _jsxFileName = '/Users/kk/tests/next.js/pages/deploy.js?entry';

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/kk/tests/next.js/pages/deploy.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/kk/tests/next.js/pages/deploy.js"); } } })();
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
    })(module.exports.default || module.exports, "/deploy")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(585);


/***/ })

},[586]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9kZXBsb3kuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci5qcz9kNjU0MmYwIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0LmpzP2Q2NTQyZjAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZW51LmpzP2Q2NTQyZjAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZXNzYWdlLmpzP2Q2NTQyZjAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZGVwbG95LmpzP2Q2NTQyZjAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgSGVhZGVyID0gKCkgPT4gKFxuICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZGVmYXVsdFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1oZWFkZXJcIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj5OZXh0LmpzPC9hPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwiYnMtZXhhbXBsZS1uYXZiYXItY29sbGFwc2UtMVwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XCI+XG4gICAgICAgICAgPGxpPjxzcGFuIHN0eWxlPXt7IFwiY29sb3JcIjpcIiM5OTlcIn19PuacrOS5puivkeiHqkxlYXJuaW5nIE5leHQuanPoi7HmlofniYjvvIzlpoLpnIDoi7HmlofniYjvvIzor7forr/pl648L3NwYW4+PGEgc3R5bGU9e3sgXCJkaXNwbGF5XCI6XCJpbmxpbmUtYmxvY2tcIixcInBhZGRpbmdcIjpcIjE1cHggMnB4XCIsXCJjb2xvclwiOlwiIzIxOTZGM1wiIH19IGhyZWY9XCJodHRwczovL2xlYXJubmV4dGpzLmNvbS9iYXNpY3MvZ2V0dGluZy1zdGFydGVkXCIgdGFyZ2V0PVwiX2JsYW5rXCI+6Iux5paH54mIPC9hPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9uYXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwiaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgTWVudSBmcm9tICcuL21lbnUnO1xuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi4uL3N0YXRpYy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiB0eXBlPVwidGV4dC9jc3NcIiAvPlxuICAgIDxIZWFkZXIgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPlxuICAgICAgICAgIDxNZW51IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC05XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbGF5b3V0LmpzIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuY29uc3QgbGlua1N0eWxlID0ge1xuICBtYXJnaW5SaWdodDogMTVcbn1cblxuY29uc3QgTmF2aWdhdG9yID0gW1xuICB7XG4gICAgdXJsOlwiL1wiLFxuICAgIGRlc2M6XCLotbfmraXlhaXpl6hcIlxuICB9LFxuICB7XG4gICAgdXJsOlwiL2xpbmtcIixcbiAgICBkZXNjOlwi5Zyo6aG16Z2i6Ze055qE6Lez6L2sXCJcbiAgfSxcbiAge1xuICAgIHVybDpcIi9zaGFyZVwiLFxuICAgIGRlc2M6XCLlhbHkuqvnu4Tku7bnmoTnlKjms5VcIlxuICB9LHtcbiAgICB1cmw6XCIvZHluYW1pY1wiLFxuICAgIGRlc2M6XCLliJvlu7rliqjmgIHpobXpnaJcIlxuICB9LHtcbiAgICB1cmw6XCIvY2xlYW5cIixcbiAgICBkZXNjOlwi6Lev55Sx576O5YyW5ZCO55qE5riF5pmwVVJMc1wiXG4gIH0se1xuICAgIHVybDpcIi9zZXJ2ZXJcIixcbiAgICBkZXNjOlwi5riF5pmwVVJMc+eahOacjeWKoeWZqOerr+aUr+aMgVwiXG4gIH0se1xuICAgIHVybDpcIi9mZXRjaFwiLFxuICAgIGRlc2M6XCLkuLrpobXpnaLojrflj5bmlbDmja5cIlxuICB9LHtcbiAgICB1cmw6XCIvc3R5bGVcIixcbiAgICBkZXNjOlwi57uZ57uE5Lu25re75Yqg5qC35byPXCJcbiAgfSx7XG4gICAgdXJsOlwiL2RlcGxveVwiLFxuICAgIGRlc2M6XCLpg6jnvbLkuIDkuKpOZXh0LmpzIEFwcFwiXG4gIH1cbl1cblxuY29uc3QgZ2V0TmF2aWdhdG9yTGlzdCA9IChuYXZpZ2F0b3IpID0+IHtcbiAgbGV0IGFyciA9IFtdO1xuXG4gIGZvcihsZXQgaT0wO2k8bmF2aWdhdG9yLmxlbmd0aDtpKyspe1xuICAgIGFyci5wdXNoKFxuICAgICAgPGxpIGtleT17aX0gY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9e25hdmlnYXRvcltpXS51cmx9PlxuICAgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PnsgbmF2aWdhdG9yW2ldLmRlc2MgfTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9saT5cbiAgICApXG4gIH1cbiAgXG4gIHJldHVybiBhcnI7XG59XG5jb25zdCBNZW51ID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMz48L2gzPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cbiAgICAgICAgeyBnZXROYXZpZ2F0b3JMaXN0KE5hdmlnYXRvcikgfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTWVudVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbWVudS5qcyIsImNvbnN0IE1lc3NzYWdlID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgIDxwIHN0eWxlPXt7IFxuICAgICAgICBcInBhZGRpbmctbGVmdFwiOlwiMzAwcHhcIixcbiAgICAgICAgXCJtYXJnaW4tdG9wXCI6XCIxMDBweFwiLFxuICAgICAgICBcImZvbnQtc2l6ZVwiOlwiMjBweFwiXG4gICAgfX0+XG4gICAgICDmraPlnKjntKfmgKXlvIDlj5HkuK3vvIzmlazor7fmnJ/lvoXjgIJcbiAgICA8L3A+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBNZXNzc2FnZVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbWVzc2FnZS5qcyIsImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgTWVzc2FnZSBmcm9tICcuLi9jb21wb25lbnRzL21lc3NhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPE1lc3NhZ2UgLz5cbiAgPC9MYXlvdXQ+XG4pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvZGVwbG95LmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFRQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBOzs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBQUE7QUFEQTtBQUtBO0FBQUE7QUFEQTtBQUtBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFBQTtBQWRBO0FBZUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBS0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0RBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUZBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        