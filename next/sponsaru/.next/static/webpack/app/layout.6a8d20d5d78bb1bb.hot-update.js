"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"241c1c669618\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/YzY1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjI0MWMxYzY2OTYxOFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/providers/user-provider.tsx":
/*!*****************************************!*\
  !*** ./src/providers/user-provider.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserContext: function() { return /* binding */ UserContext; },\n/* harmony export */   UserProvider: function() { return /* binding */ UserProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react.js\");\n/* harmony import */ var _use_cognito_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-cognito-credentials */ \"(app-pages-browser)/./src/providers/use-cognito-credentials.ts\");\n/* harmony import */ var _hooks_use_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/use-user */ \"(app-pages-browser)/./src/hooks/use-user.ts\");\n/* __next_internal_client_entry_do_not_use__ UserProvider,UserContext auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst UserProvider = (param)=>{\n    let { children, googleToken } = param;\n    _s();\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        credentials: null,\n        isAuthenticated: false,\n        user: null\n    });\n    const { user } = (0,_hooks_use_user__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(session.status === \"authenticated\" && state.credentials !== null);\n    (0,_use_cognito_credentials__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n        googleToken: googleToken,\n        setState\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setState((prevState)=>{\n            if (!user.data) {\n                return prevState;\n            }\n            return {\n                ...prevState,\n                ...{\n                    user: user.data\n                }\n            };\n        });\n    }, [\n        user.data\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: state,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/providers/user-provider.tsx\",\n        lineNumber: 50,\n        columnNumber: 10\n    }, undefined);\n};\n_s(UserProvider, \"Xvwwe/7OQF6aHjlmSGSynod1K48=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession,\n        _hooks_use_user__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _use_cognito_credentials__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = UserProvider;\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    isAuthenticated: false,\n    credentials: null,\n    user: null\n});\nvar _c;\n$RefreshReg$(_c, \"UserProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9wcm92aWRlcnMvdXNlci1wcm92aWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUUrRDtBQUVsQjtBQUV1QjtBQUM5QjtBQUVDO0FBWWhDLE1BQU1NLGVBQWU7UUFBQyxFQUFFQyxRQUFRLEVBQUVDLFdBQVcsRUFBUzs7SUFDM0QsTUFBTUMsVUFBVVAsMkRBQVVBO0lBQzFCLE1BQU0sQ0FBQ1EsT0FBT0MsU0FBUyxHQUFHViwrQ0FBUUEsQ0FBa0I7UUFDbERXLGFBQWE7UUFDYkMsaUJBQWlCO1FBQ2pCQyxNQUFNO0lBQ1I7SUFDQSxNQUFNLEVBQUVBLElBQUksRUFBRSxHQUFHVCwyREFBT0EsQ0FBQ0ksUUFBUU0sTUFBTSxLQUFLLG1CQUFtQkwsTUFBTUUsV0FBVyxLQUFLO0lBQ3JGVCxvRUFBMkJBLENBQUM7UUFDMUJLLGFBQWFBO1FBQ2JHO0lBQ0Y7SUFFQVgsZ0RBQVNBLENBQUM7UUFDUlcsU0FBUyxDQUFDSztZQUNSLElBQUksQ0FBQ0YsS0FBS0csSUFBSSxFQUFFO2dCQUNkLE9BQU9EO1lBQ1Q7WUFFQSxPQUFPO2dCQUNMLEdBQUdBLFNBQVM7Z0JBQ1osR0FBRztvQkFDREYsTUFBTUEsS0FBS0csSUFBSTtnQkFDakIsQ0FBQztZQUNIO1FBQ0Y7SUFDRixHQUFHO1FBQUNILEtBQUtHLElBQUk7S0FBQztJQUVkLHFCQUFPLDhEQUFDQyxZQUFZQyxRQUFRO1FBQUNDLE9BQU9WO2tCQUFRSDs7Ozs7O0FBQzlDLEVBQUU7R0E3QldEOztRQUNLSix1REFBVUE7UUFNVEcsdURBQU9BO1FBQ3hCRixnRUFBMkJBOzs7S0FSaEJHO0FBK0JOLE1BQU1ZLDRCQUFjZCxvREFBYUEsQ0FBa0I7SUFDeERTLGlCQUFpQjtJQUNqQkQsYUFBYTtJQUNiRSxNQUFNO0FBQ1IsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcHJvdmlkZXJzL3VzZXItcHJvdmlkZXIudHN4PzZjZWQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyBQcm9wc1dpdGhDaGlsZHJlbiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XG5cbmltcG9ydCB1c2VVcGRhdGVDb2duaXRvQ3JlZGVudGlhbHMgZnJvbSAnLi91c2UtY29nbml0by1jcmVkZW50aWFscyc7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ3JlZGVudGlhbHMgfSBmcm9tICdAYXdzLXNkay9jbGllbnQtY29nbml0by1pZGVudGl0eSc7XG5pbXBvcnQgdXNlVXNlciBmcm9tICdAL2hvb2tzL3VzZS11c2VyJztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgUHJvcHNXaXRoQ2hpbGRyZW4ge1xuICBnb29nbGVUb2tlbjogVXNlci5Hb29nbGVUb2tlbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VyQ29udGV4dFR5cGUge1xuICBpc0F1dGhlbnRpY2F0ZWQ6IGJvb2xlYW47XG4gIGNyZWRlbnRpYWxzOiBDcmVkZW50aWFscyB8IG51bGw7XG4gIHVzZXI6IFVzZXIuSXRlbSB8IG51bGw7XG59XG5cbmV4cG9ydCBjb25zdCBVc2VyUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiwgZ29vZ2xlVG9rZW4gfTogUHJvcHMpID0+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IHVzZVNlc3Npb24oKTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZTxVc2VyQ29udGV4dFR5cGU+KHtcbiAgICBjcmVkZW50aWFsczogbnVsbCxcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlLFxuICAgIHVzZXI6IG51bGwsXG4gIH0pO1xuICBjb25zdCB7IHVzZXIgfSA9IHVzZVVzZXIoc2Vzc2lvbi5zdGF0dXMgPT09ICdhdXRoZW50aWNhdGVkJyAmJiBzdGF0ZS5jcmVkZW50aWFscyAhPT0gbnVsbCk7XG4gIHVzZVVwZGF0ZUNvZ25pdG9DcmVkZW50aWFscyh7XG4gICAgZ29vZ2xlVG9rZW46IGdvb2dsZVRva2VuLFxuICAgIHNldFN0YXRlLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcbiAgICAgIGlmICghdXNlci5kYXRhKSB7XG4gICAgICAgIHJldHVybiBwcmV2U3RhdGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgLi4ue1xuICAgICAgICAgIHVzZXI6IHVzZXIuZGF0YSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH0sIFt1c2VyLmRhdGFdKTtcblxuICByZXR1cm4gPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+e2NoaWxkcmVufTwvVXNlckNvbnRleHQuUHJvdmlkZXI+O1xufTtcblxuZXhwb3J0IGNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxVc2VyQ29udGV4dFR5cGU+KHtcbiAgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcbiAgY3JlZGVudGlhbHM6IG51bGwsXG4gIHVzZXI6IG51bGwsXG59KTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVNlc3Npb24iLCJ1c2VVcGRhdGVDb2duaXRvQ3JlZGVudGlhbHMiLCJjcmVhdGVDb250ZXh0IiwidXNlVXNlciIsIlVzZXJQcm92aWRlciIsImNoaWxkcmVuIiwiZ29vZ2xlVG9rZW4iLCJzZXNzaW9uIiwic3RhdGUiLCJzZXRTdGF0ZSIsImNyZWRlbnRpYWxzIiwiaXNBdXRoZW50aWNhdGVkIiwidXNlciIsInN0YXR1cyIsInByZXZTdGF0ZSIsImRhdGEiLCJVc2VyQ29udGV4dCIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/providers/user-provider.tsx\n"));

/***/ })

});