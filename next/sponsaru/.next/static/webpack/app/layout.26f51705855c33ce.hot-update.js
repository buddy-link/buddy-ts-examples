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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"3a27e3c84b66\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/YzY1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjNhMjdlM2M4NGI2NlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/login-dialog.tsx":
/*!*****************************************!*\
  !*** ./src/components/login-dialog.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/icons */ \"(app-pages-browser)/./src/assets/icons/index.ts\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _ui_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/dialog */ \"(app-pages-browser)/./src/components/ui/dialog.tsx\");\n/* harmony import */ var _wallet_connect_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wallet-connect-button */ \"(app-pages-browser)/./src/components/wallet-connect-button.tsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react.js\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"(app-pages-browser)/./node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_truncate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/truncate */ \"(app-pages-browser)/./src/utils/truncate.ts\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"(app-pages-browser)/./node_modules/@solana/wallet-adapter-react-ui/lib/esm/useWalletModal.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst LoginDialog = ()=>{\n    var _session_data_user, _session_data, _session_data_user1, _session_data1, _session_data_user2, _session_data2, _session_data3, _session_data_user3, _session_data4, _session_data_user4, _session_data5;\n    _s();\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)();\n    const wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_9__.useWallet)();\n    const { setVisible } = (0,_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_10__.useWalletModal)();\n    const truncatedWalletAddress = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>{\n        var _session_data_user, _session_data, _wallet_publicKey;\n        var _session_data_user_name, _ref;\n        return (0,_utils_truncate__WEBPACK_IMPORTED_MODULE_7__.truncateString)((_ref = (_session_data_user_name = session === null || session === void 0 ? void 0 : (_session_data = session.data) === null || _session_data === void 0 ? void 0 : (_session_data_user = _session_data.user) === null || _session_data_user === void 0 ? void 0 : _session_data_user.name) !== null && _session_data_user_name !== void 0 ? _session_data_user_name : (_wallet_publicKey = wallet.publicKey) === null || _wallet_publicKey === void 0 ? void 0 : _wallet_publicKey.toBase58()) !== null && _ref !== void 0 ? _ref : \"\");\n    }, [\n        wallet.publicKey\n    ]);\n    const isAuthenticated = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>session.status === \"authenticated\", [\n        session === null || session === void 0 ? void 0 : session.status\n    ]);\n    const changeWallet = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(async ()=>{\n        await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.signOut)({\n            redirect: false\n        });\n        await wallet.disconnect();\n        setVisible(true);\n    }, [\n        setVisible,\n        wallet\n    ]);\n    console.log(\"session: \", session);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.Dialog, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogTrigger, {\n                asChild: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    type: \"button\",\n                    variant: \"primary\",\n                    className: \"gap-2 px-6 py-4\",\n                    children: (session === null || session === void 0 ? void 0 : session.status) === \"loading\" || wallet.connecting ? \"loading...\" : !isAuthenticated ? \"Connect\" : isAuthenticated && ((_session_data = session.data) === null || _session_data === void 0 ? void 0 : (_session_data_user = _session_data.user) === null || _session_data_user === void 0 ? void 0 : _session_data_user.name) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-2 items-center justify-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_icons__WEBPACK_IMPORTED_MODULE_1__.WalletIcon, {\n                                className: \"fill-white h-4 w-4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"mt-[1px]\",\n                                children: (session === null || session === void 0 ? void 0 : (_session_data1 = session.data) === null || _session_data1 === void 0 ? void 0 : (_session_data_user1 = _session_data1.user) === null || _session_data_user1 === void 0 ? void 0 : _session_data_user1.name.length) >= 32 ? truncatedWalletAddress : session === null || session === void 0 ? void 0 : (_session_data2 = session.data) === null || _session_data2 === void 0 ? void 0 : (_session_data_user2 = _session_data2.user) === null || _session_data_user2 === void 0 ? void 0 : _session_data_user2.name\n                            }, void 0, false, {\n                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 19\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogContent, {\n                className: \"max-w-xs\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogHeader, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogTitle, {\n                            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_8__.cn)(\"font-bold\", isAuthenticated ? \"text-2xl\" : \"text-5xl\"),\n                            children: isAuthenticated ? isAuthenticated && (session === null || session === void 0 ? void 0 : (_session_data3 = session.data) === null || _session_data3 === void 0 ? void 0 : _session_data3.user.name) && (session === null || session === void 0 ? void 0 : (_session_data4 = session.data) === null || _session_data4 === void 0 ? void 0 : (_session_data_user3 = _session_data4.user) === null || _session_data_user3 === void 0 ? void 0 : _session_data_user3.name.length) >= 32 ? truncatedWalletAddress : session === null || session === void 0 ? void 0 : (_session_data5 = session.data) === null || _session_data5 === void 0 ? void 0 : (_session_data_user4 = _session_data5.user) === null || _session_data_user4 === void 0 ? void 0 : _session_data_user4.name : \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined),\n                    isAuthenticated ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col  justify-center py-6 gap-4 px-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogTrigger, {\n                                asChild: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                    variant: \"primary\",\n                                    type: \"button\",\n                                    className: \"\",\n                                    onClick: changeWallet,\n                                    children: \"Change Wallet\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                variant: \"primary\",\n                                className: \"text-white gap-2 px-6 py-4\",\n                                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.signOut)({\n                                        redirect: false\n                                    }),\n                                children: \"Logout\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col  justify-center py-6 gap-4 px-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_wallet_connect_button__WEBPACK_IMPORTED_MODULE_4__.BuddyConnectWalletButton, {}, void 0, false, {\n                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, undefined),\n                            (session === null || session === void 0 ? void 0 : session.status) === \"unauthenticated\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                variant: \"primary\",\n                                className: \"text-white gap-2 px-6 py-4\",\n                                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.signIn)(\"google\"),\n                                children: \"Sign In with Google\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogFooter, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogClose, {\n                            asChild: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                variant: \"primary\",\n                                children: \"Close\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LoginDialog, \"xdWw5EwrNQzQL5FKU8Y5UTwCh2s=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_9__.useWallet,\n        _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_10__.useWalletModal\n    ];\n});\n_c = LoginDialog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginDialog);\nvar _c;\n$RefreshReg$(_c, \"LoginDialog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2xvZ2luLWRpYWxvZy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRXVEO0FBQ2xCO0FBU2hCO0FBRThDO0FBQ0w7QUFDTDtBQUNaO0FBQ0s7QUFDakI7QUFDZ0M7QUFFakUsTUFBTW1CLGNBQWM7UUE0QkpDLG9CQUFBQSxlQUlPQSxxQkFBQUEsZ0JBQWtFQSxxQkFBQUEsZ0JBV3REQSxnQkFBNEJBLHFCQUFBQSxnQkFFN0NBLHFCQUFBQTs7SUE1Q2hCLE1BQU1BLFVBQVVSLDJEQUFVQTtJQUMxQixNQUFNUyxTQUFTUix1RUFBU0E7SUFDeEIsTUFBTSxFQUFFUyxVQUFVLEVBQUUsR0FBR0osZ0ZBQWNBO0lBRXJDLE1BQU1LLHlCQUF5QlIsOENBQU9BLENBQUM7WUFDZkssb0JBQUFBLGVBQTZCQztZQUE3QkQseUJBQUFBO1FBQXRCLE9BQU9KLCtEQUFjQSxDQUFDSSxDQUFBQSxPQUFBQSxDQUFBQSwwQkFBQUEsb0JBQUFBLCtCQUFBQSxnQkFBQUEsUUFBU0ksSUFBSSxjQUFiSixxQ0FBQUEscUJBQUFBLGNBQWVLLElBQUksY0FBbkJMLHlDQUFBQSxtQkFBcUJNLElBQUksY0FBekJOLHFDQUFBQSwyQkFBNkJDLG9CQUFBQSxPQUFPTSxTQUFTLGNBQWhCTix3Q0FBQUEsa0JBQWtCTyxRQUFRLGdCQUF2RFIsa0JBQUFBLE9BQTZEO0lBQ3JGLEdBQUc7UUFBQ0MsT0FBT00sU0FBUztLQUFDO0lBRXJCLE1BQU1FLGtCQUFrQmQsOENBQU9BLENBQUMsSUFBTUssUUFBUVUsTUFBTSxLQUFLLGlCQUFpQjtRQUFDVixvQkFBQUEsOEJBQUFBLFFBQVNVLE1BQU07S0FBQztJQUUzRixNQUFNQyxlQUFlakIsa0RBQVdBLENBQUM7UUFDL0IsTUFBTUgsd0RBQU9BLENBQUM7WUFBRXFCLFVBQVU7UUFBTTtRQUNoQyxNQUFNWCxPQUFPWSxVQUFVO1FBQ3ZCWCxXQUFXO0lBQ2IsR0FBRztRQUFDQTtRQUFZ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ZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9sb2dpbi1kaWFsb2cudHN4PzhhZTIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyBUZWFtc0ljb24sIFdhbGxldEljb24gfSBmcm9tICdAL2Fzc2V0cy9pY29ucyc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL3VpL2J1dHRvbic7XG5pbXBvcnQge1xuICBEaWFsb2csXG4gIERpYWxvZ0Nsb3NlLFxuICBEaWFsb2dDb250ZW50LFxuICBEaWFsb2dGb290ZXIsXG4gIERpYWxvZ0hlYWRlcixcbiAgRGlhbG9nVGl0bGUsXG4gIERpYWxvZ1RyaWdnZXIsXG59IGZyb20gJy4vdWkvZGlhbG9nJztcblxuaW1wb3J0IHsgQnVkZHlDb25uZWN0V2FsbGV0QnV0dG9uIH0gZnJvbSAnLi93YWxsZXQtY29ubmVjdC1idXR0b24nO1xuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcbmltcG9ydCB7IHVzZVdhbGxldCB9IGZyb20gJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QnO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB0cnVuY2F0ZVN0cmluZyB9IGZyb20gJ0AvdXRpbHMvdHJ1bmNhdGUnO1xuaW1wb3J0IHsgY24gfSBmcm9tICdAL2xpYi91dGlscyc7XG5pbXBvcnQgeyB1c2VXYWxsZXRNb2RhbCB9IGZyb20gJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QtdWknO1xuXG5jb25zdCBMb2dpbkRpYWxvZyA9ICgpID0+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IHVzZVNlc3Npb24oKTtcbiAgY29uc3Qgd2FsbGV0ID0gdXNlV2FsbGV0KCk7XG4gIGNvbnN0IHsgc2V0VmlzaWJsZSB9ID0gdXNlV2FsbGV0TW9kYWwoKTtcblxuICBjb25zdCB0cnVuY2F0ZWRXYWxsZXRBZGRyZXNzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIHRydW5jYXRlU3RyaW5nKHNlc3Npb24/LmRhdGE/LnVzZXI/Lm5hbWUgPz8gd2FsbGV0LnB1YmxpY0tleT8udG9CYXNlNTgoKSA/PyAnJyk7XG4gIH0sIFt3YWxsZXQucHVibGljS2V5XSk7XG5cbiAgY29uc3QgaXNBdXRoZW50aWNhdGVkID0gdXNlTWVtbygoKSA9PiBzZXNzaW9uLnN0YXR1cyA9PT0gJ2F1dGhlbnRpY2F0ZWQnLCBbc2Vzc2lvbj8uc3RhdHVzXSk7XG5cbiAgY29uc3QgY2hhbmdlV2FsbGV0ID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHNpZ25PdXQoeyByZWRpcmVjdDogZmFsc2UgfSk7XG4gICAgYXdhaXQgd2FsbGV0LmRpc2Nvbm5lY3QoKTtcbiAgICBzZXRWaXNpYmxlKHRydWUpO1xuICB9LCBbc2V0VmlzaWJsZSwgd2FsbGV0XSk7XG5cbiAgY29uc29sZS5sb2coJ3Nlc3Npb246ICcsIHNlc3Npb24pO1xuXG4gIHJldHVybiAoXG4gICAgPERpYWxvZz5cbiAgICAgIDxEaWFsb2dUcmlnZ2VyIGFzQ2hpbGQ+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cImJ1dHRvblwiIHZhcmlhbnQ9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPVwiZ2FwLTIgcHgtNiBweS00XCI+XG4gICAgICAgICAge3Nlc3Npb24/LnN0YXR1cyA9PT0gJ2xvYWRpbmcnIHx8IHdhbGxldC5jb25uZWN0aW5nXG4gICAgICAgICAgICA/ICdsb2FkaW5nLi4uJ1xuICAgICAgICAgICAgOiAhaXNBdXRoZW50aWNhdGVkXG4gICAgICAgICAgICAgID8gJ0Nvbm5lY3QnXG4gICAgICAgICAgICAgIDogaXNBdXRoZW50aWNhdGVkICYmXG4gICAgICAgICAgICAgICAgc2Vzc2lvbi5kYXRhPy51c2VyPy5uYW1lICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFdhbGxldEljb24gY2xhc3NOYW1lPVwiZmlsbC13aGl0ZSBoLTQgdy00XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXQtWzFweF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICB7c2Vzc2lvbj8uZGF0YT8udXNlcj8ubmFtZS5sZW5ndGggPj0gMzIgPyB0cnVuY2F0ZWRXYWxsZXRBZGRyZXNzIDogc2Vzc2lvbj8uZGF0YT8udXNlcj8ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0RpYWxvZ1RyaWdnZXI+XG5cbiAgICAgIDxEaWFsb2dDb250ZW50IGNsYXNzTmFtZT1cIm1heC13LXhzXCI+XG4gICAgICAgIDxEaWFsb2dIZWFkZXI+XG4gICAgICAgICAgPERpYWxvZ1RpdGxlIGNsYXNzTmFtZT17Y24oJ2ZvbnQtYm9sZCcsIGlzQXV0aGVudGljYXRlZCA/ICd0ZXh0LTJ4bCcgOiAndGV4dC01eGwnKX0+XG4gICAgICAgICAgICB7aXNBdXRoZW50aWNhdGVkXG4gICAgICAgICAgICAgID8gaXNBdXRoZW50aWNhdGVkICYmIHNlc3Npb24/LmRhdGE/LnVzZXIubmFtZSAmJiBzZXNzaW9uPy5kYXRhPy51c2VyPy5uYW1lLmxlbmd0aCA+PSAzMlxuICAgICAgICAgICAgICAgID8gdHJ1bmNhdGVkV2FsbGV0QWRkcmVzc1xuICAgICAgICAgICAgICAgIDogc2Vzc2lvbj8uZGF0YT8udXNlcj8ubmFtZVxuICAgICAgICAgICAgICA6ICdMb2dpbid9XG4gICAgICAgICAgPC9EaWFsb2dUaXRsZT5cbiAgICAgICAgPC9EaWFsb2dIZWFkZXI+XG5cbiAgICAgICAge2lzQXV0aGVudGljYXRlZCA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgIGp1c3RpZnktY2VudGVyIHB5LTYgZ2FwLTQgcHgtNlwiPlxuICAgICAgICAgICAgPERpYWxvZ1RyaWdnZXIgYXNDaGlsZD5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJcIiBvbkNsaWNrPXtjaGFuZ2VXYWxsZXR9PlxuICAgICAgICAgICAgICAgIENoYW5nZSBXYWxsZXRcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0RpYWxvZ1RyaWdnZXI+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBnYXAtMiBweC02IHB5LTRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KHsgcmVkaXJlY3Q6IGZhbHNlIH0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCAganVzdGlmeS1jZW50ZXIgcHktNiBnYXAtNCBweC02XCI+XG4gICAgICAgICAgICA8QnVkZHlDb25uZWN0V2FsbGV0QnV0dG9uIC8+XG4gICAgICAgICAgICB7c2Vzc2lvbj8uc3RhdHVzID09PSAndW5hdXRoZW50aWNhdGVkJyAmJiAoXG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGdhcC0yIHB4LTYgcHktNFwiIG9uQ2xpY2s9eygpID0+IHNpZ25JbignZ29vZ2xlJyl9PlxuICAgICAgICAgICAgICAgIFNpZ24gSW4gd2l0aCBHb29nbGVcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8RGlhbG9nRm9vdGVyPlxuICAgICAgICAgIDxEaWFsb2dDbG9zZSBhc0NoaWxkPlxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiPkNsb3NlPC9CdXR0b24+XG4gICAgICAgICAgPC9EaWFsb2dDbG9zZT5cbiAgICAgICAgPC9EaWFsb2dGb290ZXI+XG4gICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgPC9EaWFsb2c+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkRpYWxvZztcbiJdLCJuYW1lcyI6WyJXYWxsZXRJY29uIiwiQnV0dG9uIiwiRGlhbG9nIiwiRGlhbG9nQ2xvc2UiLCJEaWFsb2dDb250ZW50IiwiRGlhbG9nRm9vdGVyIiwiRGlhbG9nSGVhZGVyIiwiRGlhbG9nVGl0bGUiLCJEaWFsb2dUcmlnZ2VyIiwiQnVkZHlDb25uZWN0V2FsbGV0QnV0dG9uIiwic2lnbkluIiwic2lnbk91dCIsInVzZVNlc3Npb24iLCJ1c2VXYWxsZXQiLCJ1c2VDYWxsYmFjayIsInVzZU1lbW8iLCJ0cnVuY2F0ZVN0cmluZyIsImNuIiwidXNlV2FsbGV0TW9kYWwiLCJMb2dpbkRpYWxvZyIsInNlc3Npb24iLCJ3YWxsZXQiLCJzZXRWaXNpYmxlIiwidHJ1bmNhdGVkV2FsbGV0QWRkcmVzcyIsImRhdGEiLCJ1c2VyIiwibmFtZSIsInB1YmxpY0tleSIsInRvQmFzZTU4IiwiaXNBdXRoZW50aWNhdGVkIiwic3RhdHVzIiwiY2hhbmdlV2FsbGV0IiwicmVkaXJlY3QiLCJkaXNjb25uZWN0IiwiY29uc29sZSIsImxvZyIsImFzQ2hpbGQiLCJ0eXBlIiwidmFyaWFudCIsImNsYXNzTmFtZSIsImNvbm5lY3RpbmciLCJkaXYiLCJzcGFuIiwibGVuZ3RoIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/login-dialog.tsx\n"));

/***/ })

});