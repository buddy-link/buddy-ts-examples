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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"5499842e2b46\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/YzY1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjU0OTk4NDJlMmI0NlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/login-dialog.tsx":
/*!*****************************************!*\
  !*** ./src/components/login-dialog.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/icons */ \"(app-pages-browser)/./src/assets/icons/index.ts\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _ui_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/dialog */ \"(app-pages-browser)/./src/components/ui/dialog.tsx\");\n/* harmony import */ var _wallet_connect_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wallet-connect-button */ \"(app-pages-browser)/./src/components/wallet-connect-button.tsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react.js\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"(app-pages-browser)/./node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_truncate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/truncate */ \"(app-pages-browser)/./src/utils/truncate.ts\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"(app-pages-browser)/./node_modules/@solana/wallet-adapter-react-ui/lib/esm/useWalletModal.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst LoginDialog = ()=>{\n    var _session_data_user, _session_data, _session_data_user1, _session_data1, _session_data_user2, _session_data2, _session_data_user3, _session_data3, _session_data_user4, _session_data4;\n    _s();\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)();\n    const wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_9__.useWallet)();\n    const { setVisible } = (0,_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_10__.useWalletModal)();\n    const truncatedWalletAddress = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>{\n        var _session_data_user, _session_data, _wallet_publicKey;\n        var _session_data_user_name, _ref;\n        return (0,_utils_truncate__WEBPACK_IMPORTED_MODULE_7__.truncateString)((_ref = (_session_data_user_name = session === null || session === void 0 ? void 0 : (_session_data = session.data) === null || _session_data === void 0 ? void 0 : (_session_data_user = _session_data.user) === null || _session_data_user === void 0 ? void 0 : _session_data_user.name) !== null && _session_data_user_name !== void 0 ? _session_data_user_name : (_wallet_publicKey = wallet.publicKey) === null || _wallet_publicKey === void 0 ? void 0 : _wallet_publicKey.toBase58()) !== null && _ref !== void 0 ? _ref : \"\");\n    }, [\n        wallet.publicKey\n    ]);\n    const isAuthenticated = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>session.status === \"authenticated\", [\n        session === null || session === void 0 ? void 0 : session.status\n    ]);\n    const changeWallet = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(async ()=>{\n        await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.signOut)({\n            redirect: false\n        });\n        await wallet.disconnect();\n        setVisible(true);\n    }, [\n        setVisible,\n        wallet\n    ]);\n    console.log(\"session: \", session);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.Dialog, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogTrigger, {\n                asChild: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    type: \"button\",\n                    variant: \"primary\",\n                    className: \"gap-2 px-6 py-4\",\n                    children: (session === null || session === void 0 ? void 0 : session.status) === \"loading\" || wallet.connecting ? \"loading...\" : !isAuthenticated ? \"Connect\" : isAuthenticated && ((_session_data = session.data) === null || _session_data === void 0 ? void 0 : (_session_data_user = _session_data.user) === null || _session_data_user === void 0 ? void 0 : _session_data_user.name) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-2 items-center justify-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_icons__WEBPACK_IMPORTED_MODULE_1__.WalletIcon, {\n                                className: \"fill-white h-4 w-4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"mt-[1px]\",\n                                children: (session === null || session === void 0 ? void 0 : (_session_data1 = session.data) === null || _session_data1 === void 0 ? void 0 : (_session_data_user1 = _session_data1.user) === null || _session_data_user1 === void 0 ? void 0 : _session_data_user1.name.length) >= 32 ? truncatedWalletAddress : session === null || session === void 0 ? void 0 : (_session_data2 = session.data) === null || _session_data2 === void 0 ? void 0 : (_session_data_user2 = _session_data2.user) === null || _session_data_user2 === void 0 ? void 0 : _session_data_user2.name\n                            }, void 0, false, {\n                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 19\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogContent, {\n                className: \"max-w-xs\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogHeader, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogTitle, {\n                            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_8__.cn)(\"font-bold\", isAuthenticated ? \"text-2xl\" : \"text-5xl\"),\n                            children: isAuthenticated ? isAuthenticated && session.data.name && (session === null || session === void 0 ? void 0 : (_session_data3 = session.data) === null || _session_data3 === void 0 ? void 0 : (_session_data_user3 = _session_data3.user) === null || _session_data_user3 === void 0 ? void 0 : _session_data_user3.name.length) >= 32 ? truncatedWalletAddress : session === null || session === void 0 ? void 0 : (_session_data4 = session.data) === null || _session_data4 === void 0 ? void 0 : (_session_data_user4 = _session_data4.user) === null || _session_data_user4 === void 0 ? void 0 : _session_data_user4.name : \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined),\n                    isAuthenticated ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col  justify-center py-6 gap-4 px-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogTrigger, {\n                                asChild: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                    variant: \"primary\",\n                                    type: \"button\",\n                                    className: \"\",\n                                    onClick: changeWallet,\n                                    children: \"Change Wallet\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                variant: \"primary\",\n                                className: \"text-white gap-2 px-6 py-4\",\n                                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.signOut)({\n                                        redirect: false\n                                    }),\n                                children: \"Logout\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col  justify-center py-6 gap-4 px-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_wallet_connect_button__WEBPACK_IMPORTED_MODULE_4__.BuddyConnectWalletButton, {}, void 0, false, {\n                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, undefined),\n                            (session === null || session === void 0 ? void 0 : session.status) === \"unauthenticated\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                variant: \"primary\",\n                                className: \"text-white gap-2 px-6 py-4\",\n                                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.signIn)(\"google\"),\n                                children: \"Sign In with Google\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogFooter, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogClose, {\n                            asChild: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                variant: \"primary\",\n                                children: \"Close\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LoginDialog, \"xdWw5EwrNQzQL5FKU8Y5UTwCh2s=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_9__.useWallet,\n        _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_10__.useWalletModal\n    ];\n});\n_c = LoginDialog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginDialog);\nvar _c;\n$RefreshReg$(_c, \"LoginDialog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2xvZ2luLWRpYWxvZy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRXVEO0FBQ2xCO0FBU2hCO0FBRThDO0FBQ0w7QUFDTDtBQUNaO0FBQ0s7QUFDakI7QUFDZ0M7QUFFakUsTUFBTW1CLGNBQWM7UUE0QkpDLG9CQUFBQSxlQUlPQSxxQkFBQUEsZ0JBQWtFQSxxQkFBQUEsZ0JBV2pDQSxxQkFBQUEsZ0JBRXRDQSxxQkFBQUE7O0lBNUNoQixNQUFNQSxVQUFVUiwyREFBVUE7SUFDMUIsTUFBTVMsU0FBU1IsdUVBQVNBO0lBQ3hCLE1BQU0sRUFBRVMsVUFBVSxFQUFFLEdBQUdKLGdGQUFjQTtJQUVyQyxNQUFNSyx5QkFBeUJSLDhDQUFPQSxDQUFDO1lBQ2ZLLG9CQUFBQSxlQUE2QkM7WUFBN0JELHlCQUFBQTtRQUF0QixPQUFPSiwrREFBY0EsQ0FBQ0ksQ0FBQUEsT0FBQUEsQ0FBQUEsMEJBQUFBLG9CQUFBQSwrQkFBQUEsZ0JBQUFBLFFBQVNJLElBQUksY0FBYkoscUNBQUFBLHFCQUFBQSxjQUFlSyxJQUFJLGNBQW5CTCx5Q0FBQUEsbUJBQXFCTSxJQUFJLGNBQXpCTixxQ0FBQUEsMkJBQTZCQyxvQkFBQUEsT0FBT00sU0FBUyxjQUFoQk4sd0NBQUFBLGtCQUFrQk8sUUFBUSxnQkFBdkRSLGtCQUFBQSxPQUE2RDtJQUNyRixHQUFHO1FBQUNDLE9BQU9NLFNBQVM7S0FBQztJQUVyQixNQUFNRSxrQkFBa0JkLDhDQUFPQSxDQUFDLElBQU1LLFFBQVFVLE1BQU0sS0FBSyxpQkFBaUI7UUFBQ1Ysb0JBQUFBLDhCQUFBQSxRQUFTVSxNQUFNO0tBQUM7SUFFM0YsTUFBTUMsZUFBZWpCLGtEQUFXQSxDQUFDO1FBQy9CLE1BQU1ILHdEQUFPQSxDQUFDO1lBQUVxQixVQUFVO1FBQU07UUFDaEMsTUFBTVgsT0FBT1ksVUFBVTtRQUN2QlgsV0FBVztJQUNiLEdBQUc7UUFBQ0E7UUFBWUQ7S0FBTztJ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eD84YWUyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgVGVhbXNJY29uLCBXYWxsZXRJY29uIH0gZnJvbSAnQC9hc3NldHMvaWNvbnMnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi91aS9idXR0b24nO1xuaW1wb3J0IHtcbiAgRGlhbG9nLFxuICBEaWFsb2dDbG9zZSxcbiAgRGlhbG9nQ29udGVudCxcbiAgRGlhbG9nRm9vdGVyLFxuICBEaWFsb2dIZWFkZXIsXG4gIERpYWxvZ1RpdGxlLFxuICBEaWFsb2dUcmlnZ2VyLFxufSBmcm9tICcuL3VpL2RpYWxvZyc7XG5cbmltcG9ydCB7IEJ1ZGR5Q29ubmVjdFdhbGxldEJ1dHRvbiB9IGZyb20gJy4vd2FsbGV0LWNvbm5lY3QtYnV0dG9uJztcbmltcG9ydCB7IHNpZ25Jbiwgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XG5pbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0JztcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdHJ1bmNhdGVTdHJpbmcgfSBmcm9tICdAL3V0aWxzL3RydW5jYXRlJztcbmltcG9ydCB7IGNuIH0gZnJvbSAnQC9saWIvdXRpbHMnO1xuaW1wb3J0IHsgdXNlV2FsbGV0TW9kYWwgfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0LXVpJztcblxuY29uc3QgTG9naW5EaWFsb2cgPSAoKSA9PiB7XG4gIGNvbnN0IHNlc3Npb24gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnN0IHdhbGxldCA9IHVzZVdhbGxldCgpO1xuICBjb25zdCB7IHNldFZpc2libGUgfSA9IHVzZVdhbGxldE1vZGFsKCk7XG5cbiAgY29uc3QgdHJ1bmNhdGVkV2FsbGV0QWRkcmVzcyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiB0cnVuY2F0ZVN0cmluZyhzZXNzaW9uPy5kYXRhPy51c2VyPy5uYW1lID8/IHdhbGxldC5wdWJsaWNLZXk/LnRvQmFzZTU4KCkgPz8gJycpO1xuICB9LCBbd2FsbGV0LnB1YmxpY0tleV0pO1xuXG4gIGNvbnN0IGlzQXV0aGVudGljYXRlZCA9IHVzZU1lbW8oKCkgPT4gc2Vzc2lvbi5zdGF0dXMgPT09ICdhdXRoZW50aWNhdGVkJywgW3Nlc3Npb24/LnN0YXR1c10pO1xuXG4gIGNvbnN0IGNoYW5nZVdhbGxldCA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBzaWduT3V0KHsgcmVkaXJlY3Q6IGZhbHNlIH0pO1xuICAgIGF3YWl0IHdhbGxldC5kaXNjb25uZWN0KCk7XG4gICAgc2V0VmlzaWJsZSh0cnVlKTtcbiAgfSwgW3NldFZpc2libGUsIHdhbGxldF0pO1xuXG4gIGNvbnNvbGUubG9nKCdzZXNzaW9uOiAnLCBzZXNzaW9uKTtcblxuICByZXR1cm4gKFxuICAgIDxEaWFsb2c+XG4gICAgICA8RGlhbG9nVHJpZ2dlciBhc0NoaWxkPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiB2YXJpYW50PVwicHJpbWFyeVwiIGNsYXNzTmFtZT1cImdhcC0yIHB4LTYgcHktNFwiPlxuICAgICAgICAgIHtzZXNzaW9uPy5zdGF0dXMgPT09ICdsb2FkaW5nJyB8fCB3YWxsZXQuY29ubmVjdGluZ1xuICAgICAgICAgICAgPyAnbG9hZGluZy4uLidcbiAgICAgICAgICAgIDogIWlzQXV0aGVudGljYXRlZFxuICAgICAgICAgICAgICA/ICdDb25uZWN0J1xuICAgICAgICAgICAgICA6IGlzQXV0aGVudGljYXRlZCAmJlxuICAgICAgICAgICAgICAgIHNlc3Npb24uZGF0YT8udXNlcj8ubmFtZSAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxXYWxsZXRJY29uIGNsYXNzTmFtZT1cImZpbGwtd2hpdGUgaC00IHctNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm10LVsxcHhdXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3Nlc3Npb24/LmRhdGE/LnVzZXI/Lm5hbWUubGVuZ3RoID49IDMyID8gdHJ1bmNhdGVkV2FsbGV0QWRkcmVzcyA6IHNlc3Npb24/LmRhdGE/LnVzZXI/Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9EaWFsb2dUcmlnZ2VyPlxuXG4gICAgICA8RGlhbG9nQ29udGVudCBjbGFzc05hbWU9XCJtYXgtdy14c1wiPlxuICAgICAgICA8RGlhbG9nSGVhZGVyPlxuICAgICAgICAgIDxEaWFsb2dUaXRsZSBjbGFzc05hbWU9e2NuKCdmb250LWJvbGQnLCBpc0F1dGhlbnRpY2F0ZWQgPyAndGV4dC0yeGwnIDogJ3RleHQtNXhsJyl9PlxuICAgICAgICAgICAge2lzQXV0aGVudGljYXRlZFxuICAgICAgICAgICAgICA/IGlzQXV0aGVudGljYXRlZCAmJiBzZXNzaW9uLmRhdGEubmFtZSAmJiBzZXNzaW9uPy5kYXRhPy51c2VyPy5uYW1lLmxlbmd0aCA+PSAzMlxuICAgICAgICAgICAgICAgID8gdHJ1bmNhdGVkV2FsbGV0QWRkcmVzc1xuICAgICAgICAgICAgICAgIDogc2Vzc2lvbj8uZGF0YT8udXNlcj8ubmFtZVxuICAgICAgICAgICAgICA6ICdMb2dpbid9XG4gICAgICAgICAgPC9EaWFsb2dUaXRsZT5cbiAgICAgICAgPC9EaWFsb2dIZWFkZXI+XG5cbiAgICAgICAge2lzQXV0aGVudGljYXRlZCA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgIGp1c3RpZnktY2VudGVyIHB5LTYgZ2FwLTQgcHgtNlwiPlxuICAgICAgICAgICAgPERpYWxvZ1RyaWdnZXIgYXNDaGlsZD5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJcIiBvbkNsaWNrPXtjaGFuZ2VXYWxsZXR9PlxuICAgICAgICAgICAgICAgIENoYW5nZSBXYWxsZXRcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0RpYWxvZ1RyaWdnZXI+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBnYXAtMiBweC02IHB5LTRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KHsgcmVkaXJlY3Q6IGZhbHNlIH0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCAganVzdGlmeS1jZW50ZXIgcHktNiBnYXAtNCBweC02XCI+XG4gICAgICAgICAgICA8QnVkZHlDb25uZWN0V2FsbGV0QnV0dG9uIC8+XG4gICAgICAgICAgICB7c2Vzc2lvbj8uc3RhdHVzID09PSAndW5hdXRoZW50aWNhdGVkJyAmJiAoXG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGdhcC0yIHB4LTYgcHktNFwiIG9uQ2xpY2s9eygpID0+IHNpZ25JbignZ29vZ2xlJyl9PlxuICAgICAgICAgICAgICAgIFNpZ24gSW4gd2l0aCBHb29nbGVcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8RGlhbG9nRm9vdGVyPlxuICAgICAgICAgIDxEaWFsb2dDbG9zZSBhc0NoaWxkPlxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiPkNsb3NlPC9CdXR0b24+XG4gICAgICAgICAgPC9EaWFsb2dDbG9zZT5cbiAgICAgICAgPC9EaWFsb2dGb290ZXI+XG4gICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgPC9EaWFsb2c+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkRpYWxvZztcbiJdLCJuYW1lcyI6WyJXYWxsZXRJY29uIiwiQnV0dG9uIiwiRGlhbG9nIiwiRGlhbG9nQ2xvc2UiLCJEaWFsb2dDb250ZW50IiwiRGlhbG9nRm9vdGVyIiwiRGlhbG9nSGVhZGVyIiwiRGlhbG9nVGl0bGUiLCJEaWFsb2dUcmlnZ2VyIiwiQnVkZHlDb25uZWN0V2FsbGV0QnV0dG9uIiwic2lnbkluIiwic2lnbk91dCIsInVzZVNlc3Npb24iLCJ1c2VXYWxsZXQiLCJ1c2VDYWxsYmFjayIsInVzZU1lbW8iLCJ0cnVuY2F0ZVN0cmluZyIsImNuIiwidXNlV2FsbGV0TW9kYWwiLCJMb2dpbkRpYWxvZyIsInNlc3Npb24iLCJ3YWxsZXQiLCJzZXRWaXNpYmxlIiwidHJ1bmNhdGVkV2FsbGV0QWRkcmVzcyIsImRhdGEiLCJ1c2VyIiwibmFtZSIsInB1YmxpY0tleSIsInRvQmFzZTU4IiwiaXNBdXRoZW50aWNhdGVkIiwic3RhdHVzIiwiY2hhbmdlV2FsbGV0IiwicmVkaXJlY3QiLCJkaXNjb25uZWN0IiwiY29uc29sZSIsImxvZyIsImFzQ2hpbGQiLCJ0eXBlIiwidmFyaWFudCIsImNsYXNzTmFtZSIsImNvbm5lY3RpbmciLCJkaXYiLCJzcGFuIiwibGVuZ3RoIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/login-dialog.tsx\n"));

/***/ })

});