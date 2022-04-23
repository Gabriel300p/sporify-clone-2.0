"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction login({ providers  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"flex flex-col items-center bg-black min-h-screen w-full justify-center\",\n        __source: {\n            fileName: \"/home/gabriel/Documentos/Estudos/spotify-clone-2.0/pages/login.js\",\n            lineNumber: 5,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                className: \"w-52 mb-5\",\n                src: \"https://links.papareact.com/9xl\",\n                alt: \"Logo Spotify\",\n                __source: {\n                    fileName: \"/home/gabriel/Documentos/Estudos/spotify-clone-2.0/pages/login.js\",\n                    lineNumber: 6,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            Object.values(providers).map((provider)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    __source: {\n                        fileName: \"/home/gabriel/Documentos/Estudos/spotify-clone-2.0/pages/login.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"button\", {\n                        className: \"bg-[#18D860] text-white p-5 rounded-full\",\n                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(provider.id, {\n                                callbackUrl: \"/\"\n                            })\n                        ,\n                        __source: {\n                            fileName: \"/home/gabriel/Documentos/Estudos/spotify-clone-2.0/pages/login.js\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: [\n                            \"Login with \",\n                            provider.name\n                        ]\n                    })\n                }, provider.name)\n            )\n        ]\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (login);\nasync function getServerSideProps() {\n    const providers = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getProviders)();\n    return {\n        props: {\n            providers\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXNEO1NBRTdDRSxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDN0IsTUFBTSx1RUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBd0U7Ozs7Ozs7O2lGQUNwRkMsQ0FBRztnQkFDRkQsU0FBUyxFQUFDLENBQVc7Z0JBQ3JCRSxHQUFHLEVBQUMsQ0FBaUM7Z0JBQ3JDQyxHQUFHLEVBQUMsQ0FBYzs7Ozs7Ozs7WUFFbkJDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDUCxTQUFTLEVBQUVRLEdBQUcsRUFBRUMsUUFBUSx3RUFDcENSLENBQUc7Ozs7Ozs7b0dBQ0RTLENBQU07d0JBQ0xSLFNBQVMsRUFBQyxDQUEwQzt3QkFDcERTLE9BQU8sTUFBUWIsdURBQU0sQ0FBQ1csUUFBUSxDQUFDRyxFQUFFLEVBQUUsQ0FBQztnQ0FBQ0MsV0FBVyxFQUFFLENBQUc7NEJBQUMsQ0FBQzs7Ozs7Ozs7OzRCQUN4RCxDQUNZOzRCQUFDSixRQUFRLENBQUNLLElBQUk7OzttQkFMbkJMLFFBQVEsQ0FBQ0ssSUFBSTs7OztBQVcvQixDQUFDO0FBRUQsaUVBQWVmLEtBQUssRUFBQztBQUVkLGVBQWVnQixrQkFBa0IsR0FBRyxDQUFDO0lBQzFDLEtBQUssQ0FBQ2YsU0FBUyxHQUFHLEtBQUssQ0FBQ0gsNkRBQVk7SUFFcEMsTUFBTSxDQUFDLENBQUM7UUFDTm1CLEtBQUssRUFBRSxDQUFDO1lBQ05oQixTQUFTO1FBQ1gsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvbG9naW4uanM/ODFiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRQcm92aWRlcnMsIHNpZ25JbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcblxuZnVuY3Rpb24gbG9naW4oeyBwcm92aWRlcnMgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgYmctYmxhY2sgbWluLWgtc2NyZWVuIHctZnVsbCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGltZ1xuICAgICAgICBjbGFzc05hbWU9XCJ3LTUyIG1iLTVcIlxuICAgICAgICBzcmM9XCJodHRwczovL2xpbmtzLnBhcGFyZWFjdC5jb20vOXhsXCJcbiAgICAgICAgYWx0PVwiTG9nbyBTcG90aWZ5XCJcbiAgICAgIC8+XG4gICAgICB7T2JqZWN0LnZhbHVlcyhwcm92aWRlcnMpLm1hcCgocHJvdmlkZXIpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e3Byb3ZpZGVyLm5hbWV9PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLVsjMThEODYwXSB0ZXh0LXdoaXRlIHAtNSByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2lnbkluKHByb3ZpZGVyLmlkLCB7IGNhbGxiYWNrVXJsOiBcIi9cIiB9KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBMb2dpbiB3aXRoIHtwcm92aWRlci5uYW1lfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2dpbjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgY29uc3QgcHJvdmlkZXJzID0gYXdhaXQgZ2V0UHJvdmlkZXJzKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcHJvdmlkZXJzLFxuICAgIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsiZ2V0UHJvdmlkZXJzIiwic2lnbkluIiwibG9naW4iLCJwcm92aWRlcnMiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJwcm92aWRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpZCIsImNhbGxiYWNrVXJsIiwibmFtZSIsImdldFNlcnZlclNpZGVQcm9wcyIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login.js"));
module.exports = __webpack_exports__;

})();