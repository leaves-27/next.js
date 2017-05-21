'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _question = require('../components/question');

var _question2 = _interopRequireDefault(_question);

var _modal = require('../components/modal');

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kk/tests/next.js/pages/index.js?entry';

// import $ from 'jquery'
// import 'bootstrap'

var one = function one() {
  return _react2.default.createElement('div', { style: { "margin-bottom": "100px" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, '\u76EE\u524D\uFF0C\u521B\u5EFA\u5355\u9875JavaScript\u5E94\u7528\u8FD8\u662F\u76F8\u5F53\u6709\u6311\u6218\u7684\u8FD9\u5DF2\u7ECF\u4E0D\u662F\u4EC0\u4E48\u79D8\u5BC6\u3002\u5E78\u8FD0\u7684\u662F\uFF0C\u6709\u4E00\u4E9B\u7B80\u5316\u4E86\u8FD9\u4E9B\u4E8B\u60C5\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u4F60\u5FEB\u901F\u6784\u5EFA\u4F60\u7684app\u7684\u73B0\u6210\u9879\u76EE\u3002'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, '\u4F8B\u5982', _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, 'Create React App'), '\u5C31\u662F\u4E00\u4E2A\u975E\u5E38\u597D\u7684\u4F8B\u5B50\u3002'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, '\u4F46\u5373\u4F7F\u5982\u6B64\uFF0C\u4F60\u8981\u6784\u5EFA\u9002\u5408\u4F60\u81EA\u5DF1\u7684JavaScript\u5E94\u7528\uFF0C\u8FD8\u662F\u6709\u5F88\u9AD8\u7684\u6210\u672C\u3002\u56E0\u4E3A\u4F60\u8FD8\u9700\u8981\u5B66\u4E60\u5BA2\u6237\u7AEF\u8DEF\u7531\u3001\u9875\u9762\u5E03\u5C40\u7B49\u7B49\u3002\u5982\u679C\u4F60\u60F3\u8981\u5B8C\u6210\u670D\u52A1\u7AEF\u6E32\u67D3\u6765\u4F7F\u4F60\u7684\u9875\u9762\u52A0\u8F7D\u7684\u66F4\u5FEB\uFF0C\u4E8B\u60C5\u53EF\u80FD\u53D8\u7684\u4F1A\u66F4\u52A0\u56F0\u96BE\u3002'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('strong', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, '\u9274\u4E8E\u6B64\uFF0C\u6211\u4EEC\u9700\u8981\u4E8B\u60C5\u53D8\u7684\u7B80\u5355\u4F46\u53EF\u5B9A\u5236\u3002')), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, '\u60F3\u60F3webapps\u662F\u5982\u4F55\u88AB\u7528PHP\u521B\u5EFA\u7684\u3002\u4F60\u521B\u5EFA\u4E00\u4E9B\u6587\u4EF6\uFF0C\u5199\u4E0APHP\u4EE3\u7801\uFF0C\u7136\u540E\u7B80\u5355\u7684\u90E8\u7F72\u5B83\u3002\u4F60\u4E0D\u7528\u62C5\u5FC3\u592A\u591A\u7684\u8DEF\u7531\u914D\u7F6E\uFF0Capp\u6E32\u67D3\u9ED8\u8BA4\u5C31\u662F\u5728\u670D\u52A1\u5668\u7AEF\u8FDB\u884C\u7684\u3002'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement('img', { width: '112', alt: 'Next.js Logo', src: 'https://cloud.githubusercontent.com/assets/50838/24116055/7076ba9c-0dcb-11e7-93d0-ba8f9ac8f6e4.png', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  })), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, '\u8FD9\u4E9B\uFF0C\u6211\u4EEC\u7528Next.js\u505A\u8D77\u6765\u66F4\u7B80\u5355\u3002\u4E0EPHP\u4E0D\u540C\u7684\u662F\uFF0C\u6211\u4EEC\u662F\u7528JavaScript\u548CReact\u6765\u6784\u5EFA\u8FD9\u4E2Aapp\u3002\u8FD9\u513F\u662F\u4E00\u4E9BNext.js\u5E26\u7ED9\u6211\u4EEC\u5F88\u9177\u7684\u529F\u80FD:'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement('ul', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, '\u9ED8\u8BA4\u901A\u8FC7\u670D\u52A1\u5668\u7AEF\u6E32\u67D3'), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, '\u4E3A\u4E86\u66F4\u5FEB\u7684\u8FDB\u884C\u9875\u9762\u52A0\u8F7D\uFF0C\u4EE3\u7801\u81EA\u52A8\u5206\u5272'), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, '\u57FA\u4E8E\u9875\u9762\u7B80\u5355\u7684\u5BA2\u6237\u7AEF\u8DEF\u7531\u914D\u7F6E'), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, '\u57FA\u4E8Ewebpack\u652F\u6301\u70ED\u66FF\u6362\u7684\u5F00\u53D1\u73AF\u5883', _react2.default.createElement('a', { href: 'https://webpack.js.org/concepts/hot-module-replacement/', target: '_blank', __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, '\u70ED\u66FF\u6362'), ' (HMR)'), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, '\u53EF\u4EE5\u7528Express\u6216\u8005\u5176\u4ED6\u7684\u4E00\u4E9BNode.js HTTP\u670D\u52A1\u5B9E\u73B0'), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, '\u7528\u4F60\u81EA\u5DF1\u7684Babel\u548CWebpack\u914D\u7F6E\u8FDB\u884C\u5B9A\u5236'))), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, '\u542C\u8D77\u6765\u5F88\u7F8E\u597D\uFF0C\u5BF9\u4E0D\u5BF9\uFF1F'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, '\u8BA9\u6211\u4EEC\u6765\u5C1D\u8BD5\u4E00\u4E0B'), _react2.default.createElement('button', { className: 'btn btn-success', __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, '\u73B0\u5728\u5F00\u59CB'));
};

var second = function second() {
  return _react2.default.createElement('div', { style: { "margin-bottom": "100px" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react2.default.createElement('h5', { id: 'setup', __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, '\u5F00\u59CB'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, 'Next.js\u53EF\u4EE5\u8FD0\u884C\u5728Windows\u5E73\u53F0\u4E0A\uFF0C\u540C\u6837\u4E5F\u53EF\u4EE5\u8FD0\u884C\u5728Mac\u548CLinux\u5E73\u53F0\u4E0A\u3002\u4F60\u4EC5\u4EC5\u9700\u8981\u5728\u4F60\u7684\u7CFB\u7EDF\u4E0A\u5B89\u88C5Node.js\u5C31\u53EF\u4EE5\u5F00\u59CB\u6784\u5EFANext.js\u5E94\u7528\u3002'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, '\u8FD9\u4E4B\u540E\uFF0C\u4F60\u9700\u8981\u6709\u4E00\u4E2A\u6587\u672C\u7F16\u8F91\u5668\u6765\u5199\u4EE3\u7801\u548C\u4E00\u4E2A\u7EC8\u7AEF\u6765\u8FD0\u884C\u76F8\u5173\u7684\u547D\u4EE4\u3002'), _react2.default.createElement('blockquote', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, '\u5982\u679C\u4F60\u7684\u5E73\u53F0\u662FWindows,\u5C1D\u8BD5\u7528 PowerShell. ', _react2.default.createElement('br', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }), 'Next.js\u9700\u8981\u4E00\u4E9B\u547D\u4EE4\u884C\u6216\u7EC8\u7AEF\u914D\u5408\u5DE5\u4F5C,\u56E0\u4E3A\u5728\u672C\u6307\u5357\u4E2D\uFF0C\u6211\u4EEC\u5C06\u4F1A\u7528\u5230\u4E00\u4E9B\u7279\u5B9A\u7684unix\u547D\u4EE4\u3002', _react2.default.createElement('br', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }), '\u6211\u4EEC\u63A8\u8350\u7528\u8FD9\u4E2APowerShell\u4EE5\u4FBF\u4F7F\u4E0B\u6765\u7684\u5B66\u4E60\u53D8\u7684\u5BB9\u6613\u3002')), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, '\u5F00\u59CB\uFF0C\u7528\u4E0B\u9762\u7684\u547D\u4EE4\u521B\u5EFA\u4E00\u4E2A\u7B80\u5355\u7684\u5DE5\u7A0B\u3002'), _react2.default.createElement('pre', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, _react2.default.createElement('code', { className: 'lang-sh hljs bash', __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, 'mkdir hello-next ', _react2.default.createElement('br', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }), _react2.default.createElement('span', { className: 'hljs-built_in', style: { "color": "#c18401" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, 'cd '), 'hello-next', _react2.default.createElement('br', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }), 'npm init -y', _react2.default.createElement('br', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }), 'npm install --save react react-dom next', _react2.default.createElement('br', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }), 'mkdir pages')), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, '\u7136\u540E\u5728hello-next\u76EE\u5F55\u4E2D\u6253\u5F00"package.json"\u5E76\u6DFB\u52A0\u4E0B\u9762\u7684\u811A\u6B65\u3002'), _react2.default.createElement('pre', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, _react2.default.createElement('code', { className: 'lang-json hljs', __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, (0, _stringify2.default)({
    "scripts": {
      "dev": "next"
    }
  }, null, 2))), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, '\u73B0\u5728\u4E00\u5207\u90FD\u51C6\u5907\u5C31\u7EED\u3002\u8FD0\u884C\u4E0B\u9762\u7684\u547D\u4EE4\u542F\u52A8\u5F00\u53D1\u670D\u52A1\u5668'), _react2.default.createElement('pre', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, _react2.default.createElement('code', { 'class': 'lang-json hljs', __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }, 'npm run dev')), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  }, '\u7136\u540E\u6253\u5F00\u4F60\u559C\u6B22\u7684\u6D4F\u89C8\u5668\uFF0C\u8BBF\u95EEhttp://localhost:3000 '), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }, '\u5728\u5C4F\u5E55\u4E0A\uFF0C\u4F60\u770B\u5230\u4E0B\u9762\u90A3\u4E2A\u4E00\u4E2A\u8F93\u51FA\uFF1F'), (0, _question2.default)({
    "answers": [{
      desc: "Error No Page Found"
    }, {
      desc: "404 - This page could not be found"
    }, {
      desc: "Hello Next.js"
    }, {
      desc: "Hello World"
    }]
  }), _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    }
  }, _react2.default.createElement('button', { id: 'btn', type: 'button', className: 'btn btn-danger btn-lg', 'data-toggle': 'modal', 'data-target': '#modal', __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    }
  }, '\u5982\u679C\u89C9\u5F97\u5F88\u8D5E\u3002\u6350\u8D602-10\u5143\uFF0C\u9F13\u52B1\u4F5C\u8005\u7EE7\u7EED\u5199\u4F5C'), _react2.default.createElement('button', { type: 'button', className: 'btn btn-success col-md-offset-1', __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    }
  }, '\u4E0A\u4E00\u9875'), _react2.default.createElement('button', { type: 'button', className: 'btn btn-success', style: { "margin-left": "10px" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }, '\u4E0B\u4E00\u9875')), _react2.default.createElement(_modal2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    }
  }));
};

var Index = function Index() {
  return _react2.default.createElement(_layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    }
  }, _react2.default.createElement('h4', { style: { "margin-bottom": "40px" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    }
  }, '\u8D77\u6B65\u5165\u95E8'), second());
};

exports.default = Index;