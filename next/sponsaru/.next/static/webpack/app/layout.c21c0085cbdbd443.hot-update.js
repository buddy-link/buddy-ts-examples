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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"0b0364c0a6c6\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/YzY1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjBiMDM2NGMwYTZjNlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/login-dialog.tsx":
/*!*****************************************!*\
  !*** ./src/components/login-dialog.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/icons */ \"(app-pages-browser)/./src/assets/icons/index.ts\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _ui_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/dialog */ \"(app-pages-browser)/./src/components/ui/dialog.tsx\");\n/* harmony import */ var _wallet_connect_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wallet-connect-button */ \"(app-pages-browser)/./src/components/wallet-connect-button.tsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react.js\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"(app-pages-browser)/./node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_truncate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/truncate */ \"(app-pages-browser)/./src/utils/truncate.ts\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst LoginDialog = ()=>{\n    var _session_data_user, _session_data, _session_data_user1, _session_data1, _session_data_user2, _session_data_user3, _session_data2, _session_data_user4;\n    _s();\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)();\n    const wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_9__.useWallet)();\n    const truncatedWalletAddress = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>{\n        var _wallet_publicKey;\n        var _wallet_publicKey_toBase58;\n        return (0,_utils_truncate__WEBPACK_IMPORTED_MODULE_7__.truncateString)((_wallet_publicKey_toBase58 = (_wallet_publicKey = wallet.publicKey) === null || _wallet_publicKey === void 0 ? void 0 : _wallet_publicKey.toBase58()) !== null && _wallet_publicKey_toBase58 !== void 0 ? _wallet_publicKey_toBase58 : \"\");\n    }, [\n        wallet.publicKey\n    ]);\n    const isAuthenticated = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>session.status === \"authenticated\", [\n        session === null || session === void 0 ? void 0 : session.status\n    ]);\n    console.log(\"session: \", (_session_data = session.data) === null || _session_data === void 0 ? void 0 : (_session_data_user = _session_data.user) === null || _session_data_user === void 0 ? void 0 : _session_data_user.name);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.Dialog, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogTrigger, {\n                asChild: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    type: \"button\",\n                    variant: isAuthenticated ? \"primary\" : \"ghost\",\n                    className: \"gap-2 px-6 py-4\",\n                    children: (session === null || session === void 0 ? void 0 : session.status) === \"loading\" || wallet.connecting ? \"loading...\" : !isAuthenticated ? \"Connect\" : isAuthenticated && ((_session_data1 = session.data) === null || _session_data1 === void 0 ? void 0 : (_session_data_user1 = _session_data1.user) === null || _session_data_user1 === void 0 ? void 0 : _session_data_user1.name) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-2 items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"mt-[1px]\",\n                            children: (_session_data_user2 = session.data.user) === null || _session_data_user2 === void 0 ? void 0 : _session_data_user2.name\n                        }, void 0, false, {\n                            fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, undefined) : wallet.publicKey && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-2 items-center justify-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_icons__WEBPACK_IMPORTED_MODULE_1__.WalletIcon, {\n                                className: \"fill-white h-4 w-4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"mt-[1px]\",\n                                children: truncatedWalletAddress\n                            }, void 0, false, {\n                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogContent, {\n                className: \"max-w-xs\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogHeader, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogTitle, {\n                            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_8__.cn)(\"font-bold\", isAuthenticated ? \"text-2xl\" : \"text-5xl\"),\n                            children: isAuthenticated ? isAuthenticated && ((_session_data2 = session.data) === null || _session_data2 === void 0 ? void 0 : (_session_data_user3 = _session_data2.user) === null || _session_data_user3 === void 0 ? void 0 : _session_data_user3.name) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-2 items-center justify-start\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"mt-[1px]\",\n                                    children: (_session_data_user4 = session.data.user) === null || _session_data_user4 === void 0 ? void 0 : _session_data_user4.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 17\n                            }, undefined) : wallet.publicKey && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-2 items-center justify-start\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_icons__WEBPACK_IMPORTED_MODULE_1__.WalletIcon, {\n                                        className: \"fill-white h-4 w-4\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"mt-[1px]\",\n                                        children: truncatedWalletAddress\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 21\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 19\n                            }, undefined) : \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    isAuthenticated ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        variant: \"primary\",\n                        className: \"text-white gap-2 px-6 py-4\",\n                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.signOut)({\n                                redirect: false\n                            }),\n                        children: \"Logout\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col  justify-center py-6 gap-4 px-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_wallet_connect_button__WEBPACK_IMPORTED_MODULE_4__.BuddyConnectWalletButton, {}, void 0, false, {\n                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, undefined),\n                            (session === null || session === void 0 ? void 0 : session.status) === \"unauthenticated\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                variant: \"primary\",\n                                className: \"text-white gap-2 px-6 py-4\",\n                                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.signIn)(\"google\"),\n                                children: \"Sign In with Google\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogFooter, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogClose, {\n                            asChild: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                variant: \"primary\",\n                                children: \"Close\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/login-dialog.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LoginDialog, \"npOaS+uGzNgXBwZHlcCXixOK2uA=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_9__.useWallet\n    ];\n});\n_c = LoginDialog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginDialog);\nvar _c;\n$RefreshReg$(_c, \"LoginDialog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2xvZ2luLWRpYWxvZy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFdUQ7QUFDbEI7QUFTaEI7QUFFOEM7QUFDTDtBQUNMO0FBQ3pCO0FBQ2tCO0FBQ2pCO0FBRWpDLE1BQU1pQixjQUFjO1FBU09DLG9CQUFBQSxlQVVNQSxxQkFBQUEsZ0JBRVNBLHFCQWlCVEEscUJBQUFBLGdCQUVhQTs7SUF2QzVDLE1BQU1BLFVBQVVOLDJEQUFVQTtJQUMxQixNQUFNTyxTQUFTTix1RUFBU0E7SUFDeEIsTUFBTU8seUJBQXlCTiw4Q0FBT0EsQ0FBQztZQUNmSztZQUFBQTtRQUF0QixPQUFPSiwrREFBY0EsQ0FBQ0ksQ0FBQUEsOEJBQUFBLG9CQUFBQSxPQUFPRSxTQUFTLGNBQWhCRix3Q0FBQUEsa0JBQWtCRyxRQUFRLGdCQUExQkgsd0NBQUFBLDZCQUFnQztJQUN4RCxHQUFHO1FBQUNBLE9BQU9FLFNBQVM7S0FBQztJQUVyQixNQUFNRSxrQkFBa0JULDhDQUFPQSxDQUFDLElBQU1JLFFBQVFNLE1BQU0sS0FBSyxpQkFBaUI7UUFBQ04sb0JBQUFBLDhCQUFBQSxRQUFTTSxNQUFNO0tBQUM7SUFFM0ZDLFFBQVFDLEdBQUcsQ0FBQyxjQUFhUixnQkFBQUEsUUFBUVMsSUFBSSxjQUFaVCxxQ0FBQUEscUJBQUFBLGNBQWNVLElBQUksY0FBbEJWLHlDQUFBQSxtQkFBb0JXLElBQUk7SUFFakQscUJBQ0UsOERBQUMzQiw4Q0FBTUE7OzBCQUNMLDhEQUFDTSxxREFBYUE7Z0JBQUNzQixPQUFPOzBCQUNwQiw0RUFBQzdCLDhDQUFNQTtvQkFBQzhCLE1BQUs7b0JBQVNDLFNBQVNULGtCQUFrQixZQUFZO29CQUFTVSxXQUFVOzhCQUM3RWYsQ0FBQUEsb0JBQUFBLDhCQUFBQSxRQUFTTSxNQUFNLE1BQUssYUFBYUwsT0FBT2UsVUFBVSxHQUNqRCxlQUNFLENBQUNYLGtCQUNILFlBQ0VBLHFCQUFtQkwsaUJBQUFBLFFBQVFTLElBQUksY0FBWlQsc0NBQUFBLHNCQUFBQSxlQUFjVSxJQUFJLGNBQWxCViwwQ0FBQUEsb0JBQW9CVyxJQUFJLGtCQUM3Qyw4REFBQ007d0JBQUlGLFdBQVU7a0NBQ2IsNEVBQUNHOzRCQUFLSCxXQUFVO3VDQUFZZixzQkFBQUEsUUFBUVMsSUFBSSxDQUFDQyxJQUFJLGNBQWpCViwwQ0FBQUEsb0JBQW1CVyxJQUFJOzs7Ozs7Ozs7O29DQUdyRFYsT0FBT0UsU0FBUyxrQkFDZCw4REFBQ2M7d0JBQUlGLFdBQVU7OzBDQUNiLDhEQUFDakMscURBQVVBO2dDQUFDaUMsV0FBVTs7Ozs7OzBDQUN0Qiw4REFBQ0c7Z0NBQUtILFdBQVU7MENBQVliOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU90Qyw4REFBQ2hCLHFEQUFhQTtnQkFBQzZCLFdBQVU7O2tDQUN2Qiw4REFBQzNCLG9EQUFZQTtrQ0FDWCw0RUFBQ0MsbURBQVdBOzRCQUFDMEIsV0FBV2pCLDhDQUFFQSxDQUFDLGFBQWFPLGtCQUFrQixhQUFhO3NDQUNwRUEsa0JBQ0NBLHFCQUFtQkwsaUJBQUFBLFFBQVFTLElBQUksY0FBWlQsc0NBQUFBLHNCQUFBQSxlQUFjVSxJQUFJLGNBQWxCViwwQ0FBQUEsb0JBQW9CVyxJQUFJLGtCQUN6Qyw4REFBQ007Z0NBQUlGLFdBQVU7MENBQ2IsNEVBQUNHO29DQUFLSCxXQUFVOytDQUFZZixzQkFBQUEsUUFBUVMsSUFBSSxDQUFDQyxJQUFJLGNBQWpCViwwQ0FBQUEsb0JBQW1CVyxJQUFJOzs7Ozs7Ozs7OzRDQUdyRFYsT0FBT0UsU0FBUyxrQkFDZCw4REFBQ2M7Z0NBQUlGLFdBQVU7O2tEQUNiLDhEQUFDakMscURBQVVBO3dDQUFDaUMsV0FBVTs7Ozs7O2tEQUN0Qiw4REFBQ0c7d0NBQUtILFdBQVU7a0RBQVliOzs7Ozs7Ozs7Ozs0Q0FLbEM7Ozs7Ozs7Ozs7O29CQUtMRyxnQ0FDQyw4REFBQ3RCLDhDQUFNQTt3QkFBQytCLFNBQVE7d0JBQVVDLFdBQVU7d0JBQTZCSSxTQUFTLElBQU0xQix3REFBT0EsQ0FBQztnQ0FBRTJCLFVBQVU7NEJBQU07a0NBQUk7Ozs7O2tEQUk5Ryw4REFBQ0g7d0JBQUlGLFdBQVU7OzBDQUNiLDhEQUFDeEIsNEVBQXdCQTs7Ozs7NEJBQ3hCUyxDQUFBQSxvQkFBQUEsOEJBQUFBLFFBQVNNLE1BQU0sTUFBSyxtQ0FDbkIsOERBQUN2Qiw4Q0FBTUE7Z0NBQUMrQixTQUFRO2dDQUFVQyxXQUFVO2dDQUE2QkksU0FBUyxJQUFNM0IsdURBQU1BLENBQUM7MENBQVc7Ozs7Ozs7Ozs7OztrQ0FNeEcsOERBQUNMLG9EQUFZQTtrQ0FDWCw0RUFBQ0YsbURBQVdBOzRCQUFDMkIsT0FBTztzQ0FDbEIsNEVBQUM3Qiw4Q0FBTUE7Z0NBQUMrQixTQUFROzBDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXRDO0dBOUVNZjs7UUFDWUwsdURBQVVBO1FBQ1hDLG1FQUFTQTs7O0tBRnBCSTtBQWdGTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9sb2dpbi1kaWFsb2cudHN4PzhhZTIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyBUZWFtc0ljb24sIFdhbGxldEljb24gfSBmcm9tICdAL2Fzc2V0cy9pY29ucyc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL3VpL2J1dHRvbic7XG5pbXBvcnQge1xuICBEaWFsb2csXG4gIERpYWxvZ0Nsb3NlLFxuICBEaWFsb2dDb250ZW50LFxuICBEaWFsb2dGb290ZXIsXG4gIERpYWxvZ0hlYWRlcixcbiAgRGlhbG9nVGl0bGUsXG4gIERpYWxvZ1RyaWdnZXIsXG59IGZyb20gJy4vdWkvZGlhbG9nJztcblxuaW1wb3J0IHsgQnVkZHlDb25uZWN0V2FsbGV0QnV0dG9uIH0gZnJvbSAnLi93YWxsZXQtY29ubmVjdC1idXR0b24nO1xuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcbmltcG9ydCB7IHVzZVdhbGxldCB9IGZyb20gJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QnO1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHRydW5jYXRlU3RyaW5nIH0gZnJvbSAnQC91dGlscy90cnVuY2F0ZSc7XG5pbXBvcnQgeyBjbiB9IGZyb20gJ0AvbGliL3V0aWxzJztcblxuY29uc3QgTG9naW5EaWFsb2cgPSAoKSA9PiB7XG4gIGNvbnN0IHNlc3Npb24gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnN0IHdhbGxldCA9IHVzZVdhbGxldCgpO1xuICBjb25zdCB0cnVuY2F0ZWRXYWxsZXRBZGRyZXNzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIHRydW5jYXRlU3RyaW5nKHdhbGxldC5wdWJsaWNLZXk/LnRvQmFzZTU4KCkgPz8gJycpO1xuICB9LCBbd2FsbGV0LnB1YmxpY0tleV0pO1xuXG4gIGNvbnN0IGlzQXV0aGVudGljYXRlZCA9IHVzZU1lbW8oKCkgPT4gc2Vzc2lvbi5zdGF0dXMgPT09ICdhdXRoZW50aWNhdGVkJywgW3Nlc3Npb24/LnN0YXR1c10pO1xuXG4gIGNvbnNvbGUubG9nKCdzZXNzaW9uOiAnLCBzZXNzaW9uLmRhdGE/LnVzZXI/Lm5hbWUpO1xuXG4gIHJldHVybiAoXG4gICAgPERpYWxvZz5cbiAgICAgIDxEaWFsb2dUcmlnZ2VyIGFzQ2hpbGQ+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cImJ1dHRvblwiIHZhcmlhbnQ9e2lzQXV0aGVudGljYXRlZCA/ICdwcmltYXJ5JyA6ICdnaG9zdCd9IGNsYXNzTmFtZT1cImdhcC0yIHB4LTYgcHktNFwiPlxuICAgICAgICAgIHtzZXNzaW9uPy5zdGF0dXMgPT09ICdsb2FkaW5nJyB8fCB3YWxsZXQuY29ubmVjdGluZyA/IChcbiAgICAgICAgICAgICdsb2FkaW5nLi4uJ1xuICAgICAgICAgICkgOiAhaXNBdXRoZW50aWNhdGVkID8gKFxuICAgICAgICAgICAgJ0Nvbm5lY3QnXG4gICAgICAgICAgKSA6IGlzQXV0aGVudGljYXRlZCAmJiBzZXNzaW9uLmRhdGE/LnVzZXI/Lm5hbWUgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm10LVsxcHhdXCI+e3Nlc3Npb24uZGF0YS51c2VyPy5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICB3YWxsZXQucHVibGljS2V5ICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxXYWxsZXRJY29uIGNsYXNzTmFtZT1cImZpbGwtd2hpdGUgaC00IHctNFwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXQtWzFweF1cIj57dHJ1bmNhdGVkV2FsbGV0QWRkcmVzc308L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgICl9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9EaWFsb2dUcmlnZ2VyPlxuXG4gICAgICA8RGlhbG9nQ29udGVudCBjbGFzc05hbWU9XCJtYXgtdy14c1wiPlxuICAgICAgICA8RGlhbG9nSGVhZGVyPlxuICAgICAgICAgIDxEaWFsb2dUaXRsZSBjbGFzc05hbWU9e2NuKCdmb250LWJvbGQnLCBpc0F1dGhlbnRpY2F0ZWQgPyAndGV4dC0yeGwnIDogJ3RleHQtNXhsJyl9PlxuICAgICAgICAgICAge2lzQXV0aGVudGljYXRlZCA/IChcbiAgICAgICAgICAgICAgaXNBdXRoZW50aWNhdGVkICYmIHNlc3Npb24uZGF0YT8udXNlcj8ubmFtZSA/IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm10LVsxcHhdXCI+e3Nlc3Npb24uZGF0YS51c2VyPy5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICB3YWxsZXQucHVibGljS2V5ICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICA8V2FsbGV0SWNvbiBjbGFzc05hbWU9XCJmaWxsLXdoaXRlIGgtNCB3LTRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtdC1bMXB4XVwiPnt0cnVuY2F0ZWRXYWxsZXRBZGRyZXNzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgJ0xvZ2luJ1xuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0RpYWxvZ1RpdGxlPlxuICAgICAgICA8L0RpYWxvZ0hlYWRlcj5cblxuICAgICAgICB7aXNBdXRoZW50aWNhdGVkID8gKFxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGdhcC0yIHB4LTYgcHktNFwiIG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoeyByZWRpcmVjdDogZmFsc2UgfSl9PlxuICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sICBqdXN0aWZ5LWNlbnRlciBweS02IGdhcC00IHB4LTZcIj5cbiAgICAgICAgICAgIDxCdWRkeUNvbm5lY3RXYWxsZXRCdXR0b24gLz5cbiAgICAgICAgICAgIHtzZXNzaW9uPy5zdGF0dXMgPT09ICd1bmF1dGhlbnRpY2F0ZWQnICYmIChcbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZ2FwLTIgcHgtNiBweS00XCIgb25DbGljaz17KCkgPT4gc2lnbkluKCdnb29nbGUnKX0+XG4gICAgICAgICAgICAgICAgU2lnbiBJbiB3aXRoIEdvb2dsZVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxEaWFsb2dGb290ZXI+XG4gICAgICAgICAgPERpYWxvZ0Nsb3NlIGFzQ2hpbGQ+XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCI+Q2xvc2U8L0J1dHRvbj5cbiAgICAgICAgICA8L0RpYWxvZ0Nsb3NlPlxuICAgICAgICA8L0RpYWxvZ0Zvb3Rlcj5cbiAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICA8L0RpYWxvZz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luRGlhbG9nO1xuIl0sIm5hbWVzIjpbIldhbGxldEljb24iLCJCdXR0b24iLCJEaWFsb2ciLCJEaWFsb2dDbG9zZSIsIkRpYWxvZ0NvbnRlbnQiLCJEaWFsb2dGb290ZXIiLCJEaWFsb2dIZWFkZXIiLCJEaWFsb2dUaXRsZSIsIkRpYWxvZ1RyaWdnZXIiLCJCdWRkeUNvbm5lY3RXYWxsZXRCdXR0b24iLCJzaWduSW4iLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsInVzZVdhbGxldCIsInVzZU1lbW8iLCJ0cnVuY2F0ZVN0cmluZyIsImNuIiwiTG9naW5EaWFsb2ciLCJzZXNzaW9uIiwid2FsbGV0IiwidHJ1bmNhdGVkV2FsbGV0QWRkcmVzcyIsInB1YmxpY0tleSIsInRvQmFzZTU4IiwiaXNBdXRoZW50aWNhdGVkIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJ1c2VyIiwibmFtZSIsImFzQ2hpbGQiLCJ0eXBlIiwidmFyaWFudCIsImNsYXNzTmFtZSIsImNvbm5lY3RpbmciLCJkaXYiLCJzcGFuIiwib25DbGljayIsInJlZGlyZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/login-dialog.tsx\n"));

/***/ })

});