(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(_,e,t){},16:function(_,e,t){},17:function(_,e,t){"use strict";t.r(e);var a=t(0),l=t.n(a),r=t(2),u=t.n(r),n=(t(15),t(3));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(l.a.createElement(n.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(_){_.unregister()})},3:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_yiwen_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),C_Users_yiwen_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),C_Users_yiwen_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),C_Users_yiwen_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6),C_Users_yiwen_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_App_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(16),_App_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__),inputButtons=["+","-","*","/","1","2","3","4","5","6","7","8","9","0",".","AC","="],Calculator=function(_React$Component){function Calculator(_){var e;return Object(C_Users_yiwen_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calculator),(e=Object(C_Users_yiwen_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(C_Users_yiwen_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator).call(this,_))).state={inputValue:"0"},e}return Object(C_Users_yiwen_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(Calculator,_React$Component),Object(C_Users_yiwen_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calculator,[{key:"inputButtonPressed",value:function(_){var e=this.state.inputValue,t=this.valueInput(e,_),a={};a.inputValue=t,this.setState(a)}},{key:"valueInput",value:function valueInput(oldvalue,value){switch(value){case"=":var outcome=""+eval(oldvalue),result=oldvalue+"="+outcome;return result;case"AC":return oldvalue="0",oldvalue;case"+":case"-":case"*":case"/":return oldvalue+value;default:return"0"===oldvalue&&(oldvalue=""),oldvalue+value}}},{key:"render",value:function(){var _=this,e=[];return inputButtons.forEach(function(t){e.push(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{type:"button",onClick:_.inputButtonPressed.bind(_,t)},t))}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"calculator"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input",{type:"text",className:"calculator-screen",value:this.state.inputValue},this.state.value),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"calculator-keys"},e))}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);__webpack_exports__.a=Calculator},9:function(_,e,t){_.exports=t(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.b658ba7c.chunk.js.map