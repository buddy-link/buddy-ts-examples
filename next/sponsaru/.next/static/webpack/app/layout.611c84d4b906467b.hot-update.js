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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"0082d6225310\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/YzY1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjAwODJkNjIyNTMxMFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/login-dialog.tsx":
/*!*****************************************!*\
  !*** ./src/components/login-dialog.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/icons */ \"(app-pages-browser)/./src/assets/icons/index.ts\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _ui_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/dialog */ \"(app-pages-browser)/./src/components/ui/dialog.tsx\");\n/* harmony import */ var _wallet_connect_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wallet-connect-button */ \"(app-pages-browser)/./src/components/wallet-connect-button.tsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react.js\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"(app-pages-browser)/./node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_truncate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/truncate */ \"(app-pages-browser)/./src/utils/truncate.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst LoginDialog = ()=>{\n    var _session_data_user, _session_data, _session_data_user1, _session_data_user2;\n    _s();\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)();\n    const wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_8__.useWallet)();\n    const truncatedWalletAddress = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>{\n        var _wallet_publicKey;\n        var _wallet_publicKey_toBase58;\n        return (0,_utils_truncate__WEBPACK_IMPORTED_MODULE_7__.truncateString)((_wallet_publicKey_toBase58 = (_wallet_publicKey = wallet.publicKey) === null || _wallet_publicKey === void 0 ? void 0 : _wallet_publicKey.toBase58()) !== null && _wallet_publicKey_toBase58 !== void 0 ? _wallet_publicKey_toBase58 : \"\");\n    }, [\n        wallet.publicKey\n    ]);\n    const isAutheticated = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>(session === null || session === void 0 ? void 0 : session.status) === \"authenticated\", [\n        session === null || session === void 0 ? void 0 : session.status\n    ]);\n    console.log(\"session: \", (_session_data = session.data) === null || _session_data === void 0 ? void 0 : (_session_data_user = _session_data.user) === null || _session_data_user === void 0 ? void 0 : _session_data_user.name);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.Dialog, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogTrigger, {\n                asChild: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    type: \"button\",\n                    variant: session.status === \"unauthenticated\" ? \"primary\" : \"ghost\",\n                    className: \"gap-2 px-6 py-4\",\n                    children: (session === null || session === void 0 ? void 0 : session.status) === \"loading\" || wallet.connecting ? \"loading...\" : (session === null || session === void 0 ? void 0 : session.status) === \"unauthenticated\" ? \"Connect\" : (session === null || session === void 0 ? void 0 : session.status) === \"authenticated\" && ((_session_data_user1 = session.data.user) === null || _session_data_user1 === void 0 ? void 0 : _session_data_user1.name) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-2 items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"mt-[1px]\",\n                            children: (_session_data_user2 = session.data.user) === null || _session_data_user2 === void 0 ? void 0 : _session_data_user2.name\n                        }, void 0, false, {\n                            fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, undefined) : wallet.publicKey && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-2 items-center justify-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_icons__WEBPACK_IMPORTED_MODULE_1__.WalletIcon, {\n                                className: \"fill-white h-4 w-4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"mt-[1px]\",\n                                children: truncatedWalletAddress\n                            }, void 0, false, {\n                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogContent, {\n                className: \"max-w-xs\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogHeader, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogTitle, {\n                            className: \"font-bold text-5xl\",\n                            children: Login\n                        }, void 0, false, {\n                            fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col  justify-center py-6 gap-4 px-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_wallet_connect_button__WEBPACK_IMPORTED_MODULE_4__.BuddyConnectWalletButton, {}, void 0, false, {\n                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, undefined),\n                            (session === null || session === void 0 ? void 0 : session.status) === \"unauthenticated\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                variant: \"primary\",\n                                className: \"text-white gap-2 px-6 py-4\",\n                                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.signIn)(\"google\"),\n                                children: \"Sign In with Google\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogFooter, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogClose, {\n                            asChild: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                variant: \"primary\",\n                                children: \"Close\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LoginDialog, \"fi2vQoZ1NDf7FgdNIbR03H7mUPw=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_8__.useWallet\n    ];\n});\n_c = LoginDialog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginDialog);\nvar _c;\n$RefreshReg$(_c, \"LoginDialog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2xvZ2luLWRpYWxvZy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUV1RDtBQUNsQjtBQVNoQjtBQUU4QztBQUNkO0FBQ0k7QUFDekI7QUFDa0I7QUFFbEQsTUFBTWUsY0FBYztRQVNPQyxvQkFBQUEsZUFjMEJBLHFCQUVYQTs7SUF4QnhDLE1BQU1BLFVBQVVMLDJEQUFVQTtJQUMxQixNQUFNTSxTQUFTTCx1RUFBU0E7SUFDeEIsTUFBTU0seUJBQXlCTCw4Q0FBT0EsQ0FBQztZQUNmSTtZQUFBQTtRQUF0QixPQUFPSCwrREFBY0EsQ0FBQ0csQ0FBQUEsOEJBQUFBLG9CQUFBQSxPQUFPRSxTQUFTLGNBQWhCRix3Q0FBQUEsa0JBQWtCRyxRQUFRLGdCQUExQkgsd0NBQUFBLDZCQUFnQztJQUN4RCxHQUFHO1FBQUNBLE9BQU9FLFNBQVM7S0FBQztJQUVyQixNQUFNRSxpQkFBaUJSLDhDQUFPQSxDQUFDLElBQU1HLENBQUFBLG9CQUFBQSw4QkFBQUEsUUFBU00sTUFBTSxNQUFLLGlCQUFpQjtRQUFDTixvQkFBQUEsOEJBQUFBLFFBQVNNLE1BQU07S0FBQztJQUUzRkMsUUFBUUMsR0FBRyxDQUFDLGNBQWFSLGdCQUFBQSxRQUFRUyxJQUFJLGNBQVpULHFDQUFBQSxxQkFBQUEsY0FBY1UsSUFBSSxjQUFsQlYseUNBQUFBLG1CQUFvQlcsSUFBSTtJQUVqRCxxQkFDRSw4REFBQ3pCLDhDQUFNQTs7MEJBQ0wsOERBQUNNLHFEQUFhQTtnQkFBQ29CLE9BQU87MEJBQ3BCLDRFQUFDM0IsOENBQU1BO29CQUNMNEIsTUFBSztvQkFDTEMsU0FBU2QsUUFBUU0sTUFBTSxLQUFLLG9CQUFvQixZQUFZO29CQUM1RFMsV0FBVTs4QkFFVGYsQ0FBQUEsb0JBQUFBLDhCQUFBQSxRQUFTTSxNQUFNLE1BQUssYUFBYUwsT0FBT2UsVUFBVSxHQUNqRCxlQUNFaEIsQ0FBQUEsb0JBQUFBLDhCQUFBQSxRQUFTTSxNQUFNLE1BQUssb0JBQ3RCLFlBQ0VOLENBQUFBLG9CQUFBQSw4QkFBQUEsUUFBU00sTUFBTSxNQUFLLHFCQUFtQk4sc0JBQUFBLFFBQVFTLElBQUksQ0FBQ0MsSUFBSSxjQUFqQlYsMENBQUFBLG9CQUFtQlcsSUFBSSxrQkFDaEUsOERBQUNNO3dCQUFJRixXQUFVO2tDQUNiLDRFQUFDRzs0QkFBS0gsV0FBVTt1Q0FBWWYsc0JBQUFBLFFBQVFTLElBQUksQ0FBQ0MsSUFBSSxjQUFqQlYsMENBQUFBLG9CQUFtQlcsSUFBSTs7Ozs7Ozs7OztvQ0FHckRWLE9BQU9FLFNBQVMsa0JBQ2QsOERBQUNjO3dCQUFJRixXQUFVOzswQ0FDYiw4REFBQy9CLHFEQUFVQTtnQ0FBQytCLFdBQVU7Ozs7OzswQ0FDdEIsOERBQUNHO2dDQUFLSCxXQUFVOzBDQUFZYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFPdEMsOERBQUNkLHFEQUFhQTtnQkFBQzJCLFdBQVU7O2tDQUN2Qiw4REFBQ3pCLG9EQUFZQTtrQ0FDWCw0RUFBQ0MsbURBQVdBOzRCQUFDd0IsV0FBVTtzQ0FBc0JJOzs7Ozs7Ozs7OztrQ0FHL0MsOERBQUNGO3dCQUFJRixXQUFVOzswQ0FDYiw4REFBQ3RCLDRFQUF3QkE7Ozs7OzRCQUN4Qk8sQ0FBQUEsb0JBQUFBLDhCQUFBQSxRQUFTTSxNQUFNLE1BQUssbUNBQ25CLDhEQUFDckIsOENBQU1BO2dDQUFDNkIsU0FBUTtnQ0FBVUMsV0FBVTtnQ0FBNkJLLFNBQVMsSUFBTTFCLHVEQUFNQSxDQUFDOzBDQUFXOzs7Ozs7Ozs7Ozs7a0NBS3RHLDhEQUFDTCxvREFBWUE7a0NBQ1gsNEVBQUNGLG1EQUFXQTs0QkFBQ3lCLE9BQU87c0NBQ2xCLDRFQUFDM0IsOENBQU1BO2dDQUFDNkIsU0FBUTswQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU10QztHQTNETWY7O1FBQ1lKLHVEQUFVQTtRQUNYQyxtRUFBU0E7OztLQUZwQkc7QUE2RE4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbG9naW4tZGlhbG9nLnRzeD84YWUyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgVGVhbXNJY29uLCBXYWxsZXRJY29uIH0gZnJvbSAnQC9hc3NldHMvaWNvbnMnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi91aS9idXR0b24nO1xuaW1wb3J0IHtcbiAgRGlhbG9nLFxuICBEaWFsb2dDbG9zZSxcbiAgRGlhbG9nQ29udGVudCxcbiAgRGlhbG9nRm9vdGVyLFxuICBEaWFsb2dIZWFkZXIsXG4gIERpYWxvZ1RpdGxlLFxuICBEaWFsb2dUcmlnZ2VyLFxufSBmcm9tICcuL3VpL2RpYWxvZyc7XG5cbmltcG9ydCB7IEJ1ZGR5Q29ubmVjdFdhbGxldEJ1dHRvbiB9IGZyb20gJy4vd2FsbGV0LWNvbm5lY3QtYnV0dG9uJztcbmltcG9ydCB7IHNpZ25JbiwgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XG5pbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0JztcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB0cnVuY2F0ZVN0cmluZyB9IGZyb20gJ0AvdXRpbHMvdHJ1bmNhdGUnO1xuXG5jb25zdCBMb2dpbkRpYWxvZyA9ICgpID0+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IHVzZVNlc3Npb24oKTtcbiAgY29uc3Qgd2FsbGV0ID0gdXNlV2FsbGV0KCk7XG4gIGNvbnN0IHRydW5jYXRlZFdhbGxldEFkZHJlc3MgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gdHJ1bmNhdGVTdHJpbmcod2FsbGV0LnB1YmxpY0tleT8udG9CYXNlNTgoKSA/PyAnJyk7XG4gIH0sIFt3YWxsZXQucHVibGljS2V5XSk7XG5cbiAgY29uc3QgaXNBdXRoZXRpY2F0ZWQgPSB1c2VNZW1vKCgpID0+IHNlc3Npb24/LnN0YXR1cyA9PT0gJ2F1dGhlbnRpY2F0ZWQnLCBbc2Vzc2lvbj8uc3RhdHVzXSk7XG5cbiAgY29uc29sZS5sb2coJ3Nlc3Npb246ICcsIHNlc3Npb24uZGF0YT8udXNlcj8ubmFtZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nPlxuICAgICAgPERpYWxvZ1RyaWdnZXIgYXNDaGlsZD5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIHZhcmlhbnQ9e3Nlc3Npb24uc3RhdHVzID09PSAndW5hdXRoZW50aWNhdGVkJyA/ICdwcmltYXJ5JyA6ICdnaG9zdCd9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZ2FwLTIgcHgtNiBweS00XCJcbiAgICAgICAgPlxuICAgICAgICAgIHtzZXNzaW9uPy5zdGF0dXMgPT09ICdsb2FkaW5nJyB8fCB3YWxsZXQuY29ubmVjdGluZyA/IChcbiAgICAgICAgICAgICdsb2FkaW5nLi4uJ1xuICAgICAgICAgICkgOiBzZXNzaW9uPy5zdGF0dXMgPT09ICd1bmF1dGhlbnRpY2F0ZWQnID8gKFxuICAgICAgICAgICAgJ0Nvbm5lY3QnXG4gICAgICAgICAgKSA6IHNlc3Npb24/LnN0YXR1cyA9PT0gJ2F1dGhlbnRpY2F0ZWQnICYmIHNlc3Npb24uZGF0YS51c2VyPy5uYW1lID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtdC1bMXB4XVwiPntzZXNzaW9uLmRhdGEudXNlcj8ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgd2FsbGV0LnB1YmxpY0tleSAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8V2FsbGV0SWNvbiBjbGFzc05hbWU9XCJmaWxsLXdoaXRlIGgtNCB3LTRcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm10LVsxcHhdXCI+e3RydW5jYXRlZFdhbGxldEFkZHJlc3N9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICApfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvRGlhbG9nVHJpZ2dlcj5cblxuICAgICAgPERpYWxvZ0NvbnRlbnQgY2xhc3NOYW1lPVwibWF4LXcteHNcIj5cbiAgICAgICAgPERpYWxvZ0hlYWRlcj5cbiAgICAgICAgICA8RGlhbG9nVGl0bGUgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtNXhsXCI+e0xvZ2lufTwvRGlhbG9nVGl0bGU+XG4gICAgICAgIDwvRGlhbG9nSGVhZGVyPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCAganVzdGlmeS1jZW50ZXIgcHktNiBnYXAtNCBweC02XCI+XG4gICAgICAgICAgPEJ1ZGR5Q29ubmVjdFdhbGxldEJ1dHRvbiAvPlxuICAgICAgICAgIHtzZXNzaW9uPy5zdGF0dXMgPT09ICd1bmF1dGhlbnRpY2F0ZWQnICYmIChcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGdhcC0yIHB4LTYgcHktNFwiIG9uQ2xpY2s9eygpID0+IHNpZ25JbignZ29vZ2xlJyl9PlxuICAgICAgICAgICAgICBTaWduIEluIHdpdGggR29vZ2xlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPERpYWxvZ0Zvb3Rlcj5cbiAgICAgICAgICA8RGlhbG9nQ2xvc2UgYXNDaGlsZD5cbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIj5DbG9zZTwvQnV0dG9uPlxuICAgICAgICAgIDwvRGlhbG9nQ2xvc2U+XG4gICAgICAgIDwvRGlhbG9nRm9vdGVyPlxuICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgIDwvRGlhbG9nPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW5EaWFsb2c7XG4iXSwibmFtZXMiOlsiV2FsbGV0SWNvbiIsIkJ1dHRvbiIsIkRpYWxvZyIsIkRpYWxvZ0Nsb3NlIiwiRGlhbG9nQ29udGVudCIsIkRpYWxvZ0Zvb3RlciIsIkRpYWxvZ0hlYWRlciIsIkRpYWxvZ1RpdGxlIiwiRGlhbG9nVHJpZ2dlciIsIkJ1ZGR5Q29ubmVjdFdhbGxldEJ1dHRvbiIsInNpZ25JbiIsInVzZVNlc3Npb24iLCJ1c2VXYWxsZXQiLCJ1c2VNZW1vIiwidHJ1bmNhdGVTdHJpbmciLCJMb2dpbkRpYWxvZyIsInNlc3Npb24iLCJ3YWxsZXQiLCJ0cnVuY2F0ZWRXYWxsZXRBZGRyZXNzIiwicHVibGljS2V5IiwidG9CYXNlNTgiLCJpc0F1dGhldGljYXRlZCIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwidXNlciIsIm5hbWUiLCJhc0NoaWxkIiwidHlwZSIsInZhcmlhbnQiLCJjbGFzc05hbWUiLCJjb25uZWN0aW5nIiwiZGl2Iiwic3BhbiIsIkxvZ2luIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/login-dialog.tsx\n"));

/***/ })

});