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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"13298f40efd6\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/YzY1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjEzMjk4ZjQwZWZkNlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/login-dialog.tsx":
/*!*****************************************!*\
  !*** ./src/components/login-dialog.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/icons */ \"(app-pages-browser)/./src/assets/icons/index.ts\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _ui_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/dialog */ \"(app-pages-browser)/./src/components/ui/dialog.tsx\");\n/* harmony import */ var _wallet_connect_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wallet-connect-button */ \"(app-pages-browser)/./src/components/wallet-connect-button.tsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react.js\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"(app-pages-browser)/./node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_truncate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/truncate */ \"(app-pages-browser)/./src/utils/truncate.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst LoginDialog = ()=>{\n    var _session_data_user, _session_data, _session_data_user1;\n    _s();\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)();\n    const wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_8__.useWallet)();\n    const truncatedWalletAddress = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>{\n        var _wallet_publicKey;\n        var _wallet_publicKey_toBase58;\n        return (0,_utils_truncate__WEBPACK_IMPORTED_MODULE_7__.truncateString)((_wallet_publicKey_toBase58 = (_wallet_publicKey = wallet.publicKey) === null || _wallet_publicKey === void 0 ? void 0 : _wallet_publicKey.toBase58()) !== null && _wallet_publicKey_toBase58 !== void 0 ? _wallet_publicKey_toBase58 : \"\");\n    }, [\n        wallet.publicKey\n    ]);\n    console.log(\"session: \", (_session_data = session.data) === null || _session_data === void 0 ? void 0 : (_session_data_user = _session_data.user) === null || _session_data_user === void 0 ? void 0 : _session_data_user.name);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.Dialog, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogTrigger, {\n                asChild: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    type: \"button\",\n                    variant: \"primary\",\n                    className: \"text-white gap-2 px-6 py-4\",\n                    children: (session === null || session === void 0 ? void 0 : session.status) === \"loading\" || wallet.connecting ? \"loading...\" : (session === null || session === void 0 ? void 0 : session.status) === \"unauthenticated\" ? \"Connect\" : (session === null || session === void 0 ? void 0 : session.status) === \"authenticated\" && wallet.publicKey && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-2 items-center justify-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_icons__WEBPACK_IMPORTED_MODULE_1__.WalletIcon, {\n                                className: \"fill-white h-4 w-4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"mt-[1px]\",\n                                children: (_session_data_user1 = session.data.user) === null || _session_data_user1 === void 0 ? void 0 : _session_data_user1.name\n                            }, void 0, false, {\n                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 19\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogContent, {\n                className: \"max-w-xs\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogHeader, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogTitle, {\n                            className: \"font-bold text-5xl\",\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col  justify-center py-6 gap-4 px-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_wallet_connect_button__WEBPACK_IMPORTED_MODULE_4__.BuddyConnectWalletButton, {}, void 0, false, {\n                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, undefined),\n                            (session === null || session === void 0 ? void 0 : session.status) === \"unauthenticated\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                variant: \"primary\",\n                                className: \"text-white gap-2 px-6 py-4\",\n                                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.signIn)(\"google\"),\n                                children: \"Sign In with Google\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogFooter, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogClose, {\n                            asChild: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                variant: \"primary\",\n                                children: \"Close\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LoginDialog, \"FXSEjOsE66djlVluSxYiFcOPof8=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_8__.useWallet\n    ];\n});\n_c = LoginDialog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginDialog);\nvar _c;\n$RefreshReg$(_c, \"LoginDialog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2xvZ2luLWRpYWxvZy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUV1RDtBQUNsQjtBQVNoQjtBQUU4QztBQUNkO0FBQ0k7QUFDekI7QUFDa0I7QUFFbEQsTUFBTWUsY0FBYztRQU9PQyxvQkFBQUEsZUFjcUJBOztJQXBCOUMsTUFBTUEsVUFBVUwsMkRBQVVBO0lBQzFCLE1BQU1NLFNBQVNMLHVFQUFTQTtJQUN4QixNQUFNTSx5QkFBeUJMLDhDQUFPQSxDQUFDO1lBQ2ZJO1lBQUFBO1FBQXRCLE9BQU9ILCtEQUFjQSxDQUFDRyxDQUFBQSw4QkFBQUEsb0JBQUFBLE9BQU9FLFNBQVMsY0FBaEJGLHdDQUFBQSxrQkFBa0JHLFFBQVEsZ0JBQTFCSCx3Q0FBQUEsNkJBQWdDO0lBQ3hELEdBQUc7UUFBQ0EsT0FBT0UsU0FBUztLQUFDO0lBRXJCRSxRQUFRQyxHQUFHLENBQUMsY0FBYU4sZ0JBQUFBLFFBQVFPLElBQUksY0FBWlAscUNBQUFBLHFCQUFBQSxjQUFjUSxJQUFJLGNBQWxCUix5Q0FBQUEsbUJBQW9CUyxJQUFJO0lBRWpELHFCQUNFLDhEQUFDdkIsOENBQU1BOzswQkFDTCw4REFBQ00scURBQWFBO2dCQUFDa0IsT0FBTzswQkFDcEIsNEVBQUN6Qiw4Q0FBTUE7b0JBQUMwQixNQUFLO29CQUFTQyxTQUFRO29CQUFVQyxXQUFVOzhCQUMvQ2IsQ0FBQUEsb0JBQUFBLDhCQUFBQSxRQUFTYyxNQUFNLE1BQUssYUFBYWIsT0FBT2MsVUFBVSxHQUMvQyxlQUNBZixDQUFBQSxvQkFBQUEsOEJBQUFBLFFBQVNjLE1BQU0sTUFBSyxvQkFDbEIsWUFDQWQsQ0FBQUEsb0JBQUFBLDhCQUFBQSxRQUFTYyxNQUFNLE1BQUssbUJBQ3BCYixPQUFPRSxTQUFTLGtCQUNkLDhEQUFDYTt3QkFBSUgsV0FBVTs7MENBQ2IsOERBQUM3QixxREFBVUE7Z0NBQUM2QixXQUFVOzs7Ozs7MENBQ3RCLDhEQUFDSTtnQ0FBS0osV0FBVTsyQ0FBWWIsc0JBQUFBLFFBQVFPLElBQUksQ0FBQ0MsSUFBSSxjQUFqQlIsMENBQUFBLG9CQUFtQlMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNakUsOERBQUNyQixxREFBYUE7Z0JBQUN5QixXQUFVOztrQ0FDdkIsOERBQUN2QixvREFBWUE7a0NBQ1gsNEVBQUNDLG1EQUFXQTs0QkFBQ3NCLFdBQVU7c0NBQXFCOzs7Ozs7Ozs7OztrQ0FROUMsOERBQUNHO3dCQUFJSCxXQUFVOzswQ0FDYiw4REFBQ3BCLDRFQUF3QkE7Ozs7OzRCQUN4Qk8sQ0FBQUEsb0JBQUFBLDhCQUFBQSxRQUFTYyxNQUFNLE1BQUssbUNBQ25CLDhEQUFDN0IsOENBQU1BO2dDQUFDMkIsU0FBUTtnQ0FBVUMsV0FBVTtnQ0FBNkJLLFNBQVMsSUFBTXhCLHVEQUFNQSxDQUFDOzBDQUFXOzs7Ozs7Ozs7Ozs7a0NBS3RHLDhEQUFDTCxvREFBWUE7a0NBQ1gsNEVBQUNGLG1EQUFXQTs0QkFBQ3VCLE9BQU87c0NBQ2xCLDRFQUFDekIsOENBQU1BO2dDQUFDMkIsU0FBUTswQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU10QztHQXJETWI7O1FBQ1lKLHVEQUFVQTtRQUNYQyxtRUFBU0E7OztLQUZwQkc7QUF1RE4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbG9naW4tZGlhbG9nLnRzeD84YWUyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgVGVhbXNJY29uLCBXYWxsZXRJY29uIH0gZnJvbSAnQC9hc3NldHMvaWNvbnMnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi91aS9idXR0b24nO1xuaW1wb3J0IHtcbiAgRGlhbG9nLFxuICBEaWFsb2dDbG9zZSxcbiAgRGlhbG9nQ29udGVudCxcbiAgRGlhbG9nRm9vdGVyLFxuICBEaWFsb2dIZWFkZXIsXG4gIERpYWxvZ1RpdGxlLFxuICBEaWFsb2dUcmlnZ2VyLFxufSBmcm9tICcuL3VpL2RpYWxvZyc7XG5cbmltcG9ydCB7IEJ1ZGR5Q29ubmVjdFdhbGxldEJ1dHRvbiB9IGZyb20gJy4vd2FsbGV0LWNvbm5lY3QtYnV0dG9uJztcbmltcG9ydCB7IHNpZ25JbiwgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XG5pbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0JztcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB0cnVuY2F0ZVN0cmluZyB9IGZyb20gJ0AvdXRpbHMvdHJ1bmNhdGUnO1xuXG5jb25zdCBMb2dpbkRpYWxvZyA9ICgpID0+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IHVzZVNlc3Npb24oKTtcbiAgY29uc3Qgd2FsbGV0ID0gdXNlV2FsbGV0KCk7XG4gIGNvbnN0IHRydW5jYXRlZFdhbGxldEFkZHJlc3MgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gdHJ1bmNhdGVTdHJpbmcod2FsbGV0LnB1YmxpY0tleT8udG9CYXNlNTgoKSA/PyAnJyk7XG4gIH0sIFt3YWxsZXQucHVibGljS2V5XSk7XG5cbiAgY29uc29sZS5sb2coJ3Nlc3Npb246ICcsIHNlc3Npb24uZGF0YT8udXNlcj8ubmFtZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nPlxuICAgICAgPERpYWxvZ1RyaWdnZXIgYXNDaGlsZD5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgdmFyaWFudD1cInByaW1hcnlcIiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGdhcC0yIHB4LTYgcHktNFwiPlxuICAgICAgICAgIHtzZXNzaW9uPy5zdGF0dXMgPT09ICdsb2FkaW5nJyB8fCB3YWxsZXQuY29ubmVjdGluZ1xuICAgICAgICAgICAgPyAnbG9hZGluZy4uLidcbiAgICAgICAgICAgIDogc2Vzc2lvbj8uc3RhdHVzID09PSAndW5hdXRoZW50aWNhdGVkJ1xuICAgICAgICAgICAgICA/ICdDb25uZWN0J1xuICAgICAgICAgICAgICA6IHNlc3Npb24/LnN0YXR1cyA9PT0gJ2F1dGhlbnRpY2F0ZWQnICYmXG4gICAgICAgICAgICAgICAgd2FsbGV0LnB1YmxpY0tleSAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxXYWxsZXRJY29uIGNsYXNzTmFtZT1cImZpbGwtd2hpdGUgaC00IHctNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm10LVsxcHhdXCI+e3Nlc3Npb24uZGF0YS51c2VyPy5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9EaWFsb2dUcmlnZ2VyPlxuXG4gICAgICA8RGlhbG9nQ29udGVudCBjbGFzc05hbWU9XCJtYXgtdy14c1wiPlxuICAgICAgICA8RGlhbG9nSGVhZGVyPlxuICAgICAgICAgIDxEaWFsb2dUaXRsZSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC01eGxcIj5Mb2dpbjwvRGlhbG9nVGl0bGU+XG4gICAgICAgIDwvRGlhbG9nSGVhZGVyPlxuICAgICAgICB7LyogPERpYWxvZ0Rlc2NyaXB0aW9uIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT4gJmd0OyBKb2luIHRlYW1zIHRvIGNvbWJpbmUgeW91ciBwb2ludCB0b3RhbHMgb24gdGhlIFRlYW0gTGVhZGVyYm9hcmRzPC9saT5cbiAgICAgICAgICAgIDxsaT4mZ3Q7IE1ha2UgeW91ciBvd24gdGVhbSBvciBqb2luIGV4aXN0aW5nIG9uZXMsIGl04oCZcyB5b3VyIGNob2ljZSE8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvRGlhbG9nRGVzY3JpcHRpb24+ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgIGp1c3RpZnktY2VudGVyIHB5LTYgZ2FwLTQgcHgtNlwiPlxuICAgICAgICAgIDxCdWRkeUNvbm5lY3RXYWxsZXRCdXR0b24gLz5cbiAgICAgICAgICB7c2Vzc2lvbj8uc3RhdHVzID09PSAndW5hdXRoZW50aWNhdGVkJyAmJiAoXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBnYXAtMiBweC02IHB5LTRcIiBvbkNsaWNrPXsoKSA9PiBzaWduSW4oJ2dvb2dsZScpfT5cbiAgICAgICAgICAgICAgU2lnbiBJbiB3aXRoIEdvb2dsZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxEaWFsb2dGb290ZXI+XG4gICAgICAgICAgPERpYWxvZ0Nsb3NlIGFzQ2hpbGQ+XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCI+Q2xvc2U8L0J1dHRvbj5cbiAgICAgICAgICA8L0RpYWxvZ0Nsb3NlPlxuICAgICAgICA8L0RpYWxvZ0Zvb3Rlcj5cbiAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICA8L0RpYWxvZz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luRGlhbG9nO1xuIl0sIm5hbWVzIjpbIldhbGxldEljb24iLCJCdXR0b24iLCJEaWFsb2ciLCJEaWFsb2dDbG9zZSIsIkRpYWxvZ0NvbnRlbnQiLCJEaWFsb2dGb290ZXIiLCJEaWFsb2dIZWFkZXIiLCJEaWFsb2dUaXRsZSIsIkRpYWxvZ1RyaWdnZXIiLCJCdWRkeUNvbm5lY3RXYWxsZXRCdXR0b24iLCJzaWduSW4iLCJ1c2VTZXNzaW9uIiwidXNlV2FsbGV0IiwidXNlTWVtbyIsInRydW5jYXRlU3RyaW5nIiwiTG9naW5EaWFsb2ciLCJzZXNzaW9uIiwid2FsbGV0IiwidHJ1bmNhdGVkV2FsbGV0QWRkcmVzcyIsInB1YmxpY0tleSIsInRvQmFzZTU4IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJ1c2VyIiwibmFtZSIsImFzQ2hpbGQiLCJ0eXBlIiwidmFyaWFudCIsImNsYXNzTmFtZSIsInN0YXR1cyIsImNvbm5lY3RpbmciLCJkaXYiLCJzcGFuIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/login-dialog.tsx\n"));

/***/ })

});