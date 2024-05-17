"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/leaderboard.tsx":
/*!****************************************!*\
  !*** ./src/components/leaderboard.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./src/components/ui/card.tsx\");\n/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/icons */ \"(app-pages-browser)/./src/assets/icons/index.ts\");\n/* harmony import */ var _ui_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/tabs */ \"(app-pages-browser)/./src/components/ui/tabs.tsx\");\n/* harmony import */ var _ui_avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/avatar */ \"(app-pages-browser)/./src/components/ui/avatar.tsx\");\n\n\n\n\n\n\n\nconst notifications = [\n    {\n        title: \"Your call has been confirmed.\",\n        description: \"1 hour ago\"\n    },\n    {\n        title: \"You have a new message!\",\n        description: \"1 hour ago\"\n    },\n    {\n        title: \"Your subscription is expiring soon!\",\n        description: \"2 hours ago\"\n    }\n];\nconst Leaderboard = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.Card, {\n        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"bg-[#FCF4EE] border-4 border-[#FCF4EE]\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {\n                className: \"flex flex-row justify-between items-center p-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardTitle, {\n                        className: \"text-xl text-primary-foreground\",\n                        children: \"LeaderBoard\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/leaderboard.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_icons__WEBPACK_IMPORTED_MODULE_4__.CrownIcon, {\n                        className: \"w-8 h-8 !m-0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/leaderboard.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/leaderboard.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardContent, {\n                className: \"grid gap-4 bg-white rounded-lg pt-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_tabs__WEBPACK_IMPORTED_MODULE_5__.Tabs, {\n                    defaultValue: \"team\",\n                    className: \"w-[300px]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_tabs__WEBPACK_IMPORTED_MODULE_5__.TabsList, {\n                            className: \"grid w-full grid-cols-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_tabs__WEBPACK_IMPORTED_MODULE_5__.TabsTrigger, {\n                                    value: \"team\",\n                                    children: \"Team\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/leaderboard.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_tabs__WEBPACK_IMPORTED_MODULE_5__.TabsTrigger, {\n                                    value: \"solo\",\n                                    children: \"Solo\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/leaderboard.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/leaderboard.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_tabs__WEBPACK_IMPORTED_MODULE_5__.TabsContent, {\n                            value: \"team\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardTitle, {\n                                                children: \"Account\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/leaderboard.tsx\",\n                                                lineNumber: 39,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardDescription, {\n                                                children: \"Make changes to your account here. Click save when you're done.\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/leaderboard.tsx\",\n                                                lineNumber: 40,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/leaderboard.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardContent, {\n                                        className: \"space-y-2 flex flex-row gap-3\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_avatar__WEBPACK_IMPORTED_MODULE_6__.Avatar, {\n                                                className: \"object-fit h-[5.625rem] w-[5.625rem] items-center justify-center\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_avatar__WEBPACK_IMPORTED_MODULE_6__.AvatarImage, {\n                                                        src: \"/logo.webp\",\n                                                        alt: \"Profile Pic Preview\",\n                                                        className: \"h-12 w-12 rounded-full object-cover\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/leaderboard.tsx\",\n                                                        lineNumber: 44,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_avatar__WEBPACK_IMPORTED_MODULE_6__.AvatarFallback, {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_icons__WEBPACK_IMPORTED_MODULE_4__.UserIcon, {}, void 0, false, {\n                                                            fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/leaderboard.tsx\",\n                                                            lineNumber: 50,\n                                                            columnNumber: 21\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/leaderboard.tsx\",\n                                                        lineNumber: 49,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/leaderboard.tsx\",\n                                                lineNumber: 43,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"Wagg\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/leaderboard.tsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"7,100\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/leaderboard.tsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/leaderboard.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardFooter, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                            children: \"Save changes\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/leaderboard.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/leaderboard.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/leaderboard.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/leaderboard.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_tabs__WEBPACK_IMPORTED_MODULE_5__.TabsContent, {\n                            value: \"solo\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardTitle, {\n                                                children: \"Password\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/leaderboard.tsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardDescription, {\n                                                children: \"Change your password here. After saving, you'll be logged out.\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/leaderboard.tsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/leaderboard.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardContent, {\n                                        className: \"space-y-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"space-y-1\",\n                                                children: \"AAAAA\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/leaderboard.tsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"space-y-1\",\n                                                children: \"AAAAA\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/leaderboard.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/leaderboard.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardFooter, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                            children: \"Save password\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/leaderboard.tsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/leaderboard.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/leaderboard.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/leaderboard.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/leaderboard.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/leaderboard.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/leaderboard.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Leaderboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Leaderboard);\nvar _c;\n$RefreshReg$(_c, \"Leaderboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2xlYWRlcmJvYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUM7QUFDZTtBQUM2RDtBQUN4RDtBQUNnQjtBQUNIO0FBRWxFLE1BQU1pQixnQkFBZ0I7SUFDcEI7UUFDRUMsT0FBTztRQUNQQyxhQUFhO0lBQ2Y7SUFDQTtRQUNFRCxPQUFPO1FBQ1BDLGFBQWE7SUFDZjtJQUNBO1FBQ0VELE9BQU87UUFDUEMsYUFBYTtJQUNmO0NBQ0Q7QUFFRCxNQUFNQyxjQUFjO0lBQ2xCLHFCQUNFLDhEQUFDbEIscURBQUlBO1FBQUNtQixXQUFXckIsOENBQUVBLENBQUM7OzBCQUNsQiw4REFBQ00sMkRBQVVBO2dCQUFDZSxXQUFVOztrQ0FDcEIsOERBQUNkLDBEQUFTQTt3QkFBQ2MsV0FBVTtrQ0FBa0M7Ozs7OztrQ0FDdkQsOERBQUNiLG9EQUFTQTt3QkFBQ2EsV0FBVTs7Ozs7Ozs7Ozs7OzBCQUV2Qiw4REFBQ2xCLDREQUFXQTtnQkFBQ2tCLFdBQVU7MEJBQ3JCLDRFQUFDWCwwQ0FBSUE7b0JBQUNZLGNBQWE7b0JBQU9ELFdBQVU7O3NDQUNsQyw4REFBQ1YsOENBQVFBOzRCQUFDVSxXQUFVOzs4Q0FDbEIsOERBQUNULGlEQUFXQTtvQ0FBQ1csT0FBTTs4Q0FBTzs7Ozs7OzhDQUMxQiw4REFBQ1gsaURBQVdBO29DQUFDVyxPQUFNOzhDQUFPOzs7Ozs7Ozs7Ozs7c0NBRTVCLDhEQUFDVixpREFBV0E7NEJBQUNVLE9BQU07c0NBQ2pCLDRFQUFDckIscURBQUlBOztrREFDSCw4REFBQ0ksMkRBQVVBOzswREFDVCw4REFBQ0MsMERBQVNBOzBEQUFDOzs7Ozs7MERBQ1gsOERBQUNILGdFQUFlQTswREFBQzs7Ozs7Ozs7Ozs7O2tEQUVuQiw4REFBQ0QsNERBQVdBO3dDQUFDa0IsV0FBVTs7MERBQ3JCLDhEQUFDUCw4Q0FBTUE7Z0RBQUNPLFdBQVU7O2tFQUNoQiw4REFBQ04sbURBQVdBO3dEQUNWUyxLQUFLO3dEQUNMQyxLQUFJO3dEQUNKSixXQUFVOzs7Ozs7a0VBRVosOERBQUNMLHNEQUFjQTtrRUFDYiw0RUFBQ1AsbURBQVFBOzs7Ozs7Ozs7Ozs7Ozs7OzBEQUdiLDhEQUFDaUI7MERBQUs7Ozs7OzswREFDTiw4REFBQ0E7MERBQUs7Ozs7Ozs7Ozs7OztrREFFUiw4REFBQ3JCLDJEQUFVQTtrREFDVCw0RUFBQ0oseURBQU1BO3NEQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUlkLDhEQUFDWSxpREFBV0E7NEJBQUNVLE9BQU07c0NBQ2pCLDRFQUFDckIscURBQUlBOztrREFDSCw4REFBQ0ksMkRBQVVBOzswREFDVCw4REFBQ0MsMERBQVNBOzBEQUFDOzs7Ozs7MERBQ1gsOERBQUNILGdFQUFlQTswREFBQzs7Ozs7Ozs7Ozs7O2tEQUVuQiw4REFBQ0QsNERBQVdBO3dDQUFDa0IsV0FBVTs7MERBQ3JCLDhEQUFDTTtnREFBSU4sV0FBVTswREFBWTs7Ozs7OzBEQUMzQiw4REFBQ007Z0RBQUlOLFdBQVU7MERBQVk7Ozs7Ozs7Ozs7OztrREFFN0IsOERBQUNoQiwyREFBVUE7a0RBQ1QsNEVBQUNKLHlEQUFNQTtzREFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXhCO0tBekRNbUI7QUEyRE4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGVhZGVyYm9hcmQudHN4PzIxMjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY24gfSBmcm9tICdAL2xpYi91dGlscyc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvYnV0dG9uJztcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBDYXJkRGVzY3JpcHRpb24sIENhcmRGb290ZXIsIENhcmRIZWFkZXIsIENhcmRUaXRsZSB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9jYXJkJztcbmltcG9ydCB7IENyb3duSWNvbiwgVXNlckljb24gfSBmcm9tICdAL2Fzc2V0cy9pY29ucyc7XG5pbXBvcnQgeyBUYWJzLCBUYWJzTGlzdCwgVGFic1RyaWdnZXIsIFRhYnNDb250ZW50IH0gZnJvbSAnLi91aS90YWJzJztcbmltcG9ydCB7IEF2YXRhciwgQXZhdGFySW1hZ2UsIEF2YXRhckZhbGxiYWNrIH0gZnJvbSAnLi91aS9hdmF0YXInO1xuXG5jb25zdCBub3RpZmljYXRpb25zID0gW1xuICB7XG4gICAgdGl0bGU6ICdZb3VyIGNhbGwgaGFzIGJlZW4gY29uZmlybWVkLicsXG4gICAgZGVzY3JpcHRpb246ICcxIGhvdXIgYWdvJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnWW91IGhhdmUgYSBuZXcgbWVzc2FnZSEnLFxuICAgIGRlc2NyaXB0aW9uOiAnMSBob3VyIGFnbycsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1lvdXIgc3Vic2NyaXB0aW9uIGlzIGV4cGlyaW5nIHNvb24hJyxcbiAgICBkZXNjcmlwdGlvbjogJzIgaG91cnMgYWdvJyxcbiAgfSxcbl07XG5cbmNvbnN0IExlYWRlcmJvYXJkID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDYXJkIGNsYXNzTmFtZT17Y24oJ2JnLVsjRkNGNEVFXSBib3JkZXItNCBib3JkZXItWyNGQ0Y0RUVdJyl9PlxuICAgICAgPENhcmRIZWFkZXIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHAtM1wiPlxuICAgICAgICA8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1wcmltYXJ5LWZvcmVncm91bmRcIj5MZWFkZXJCb2FyZDwvQ2FyZFRpdGxlPlxuICAgICAgICA8Q3Jvd25JY29uIGNsYXNzTmFtZT1cInctOCBoLTggIW0tMFwiIC8+XG4gICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNCBiZy13aGl0ZSByb3VuZGVkLWxnIHB0LTZcIj5cbiAgICAgICAgPFRhYnMgZGVmYXVsdFZhbHVlPVwidGVhbVwiIGNsYXNzTmFtZT1cInctWzMwMHB4XVwiPlxuICAgICAgICAgIDxUYWJzTGlzdCBjbGFzc05hbWU9XCJncmlkIHctZnVsbCBncmlkLWNvbHMtMlwiPlxuICAgICAgICAgICAgPFRhYnNUcmlnZ2VyIHZhbHVlPVwidGVhbVwiPlRlYW08L1RhYnNUcmlnZ2VyPlxuICAgICAgICAgICAgPFRhYnNUcmlnZ2VyIHZhbHVlPVwic29sb1wiPlNvbG88L1RhYnNUcmlnZ2VyPlxuICAgICAgICAgIDwvVGFic0xpc3Q+XG4gICAgICAgICAgPFRhYnNDb250ZW50IHZhbHVlPVwidGVhbVwiPlxuICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgIDxDYXJkSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxDYXJkVGl0bGU+QWNjb3VudDwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgICAgIDxDYXJkRGVzY3JpcHRpb24+TWFrZSBjaGFuZ2VzIHRvIHlvdXIgYWNjb3VudCBoZXJlLiBDbGljayBzYXZlIHdoZW4geW91J3JlIGRvbmUuPC9DYXJkRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInNwYWNlLXktMiBmbGV4IGZsZXgtcm93IGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9XCJvYmplY3QtZml0IGgtWzUuNjI1cmVtXSB3LVs1LjYyNXJlbV0gaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8QXZhdGFySW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgc3JjPXsnL2xvZ28ud2VicCd9XG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlByb2ZpbGUgUGljIFByZXZpZXdcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTEyIHctMTIgcm91bmRlZC1mdWxsIG9iamVjdC1jb3ZlclwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPEF2YXRhckZhbGxiYWNrPlxuICAgICAgICAgICAgICAgICAgICA8VXNlckljb24gLz5cbiAgICAgICAgICAgICAgICAgIDwvQXZhdGFyRmFsbGJhY2s+XG4gICAgICAgICAgICAgICAgPC9BdmF0YXI+XG4gICAgICAgICAgICAgICAgPHNwYW4+V2FnZzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj43LDEwMDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPENhcmRGb290ZXI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbj5TYXZlIGNoYW5nZXM8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9DYXJkRm9vdGVyPlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDwvVGFic0NvbnRlbnQ+XG4gICAgICAgICAgPFRhYnNDb250ZW50IHZhbHVlPVwic29sb1wiPlxuICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgIDxDYXJkSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxDYXJkVGl0bGU+UGFzc3dvcmQ8L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgICA8Q2FyZERlc2NyaXB0aW9uPkNoYW5nZSB5b3VyIHBhc3N3b3JkIGhlcmUuIEFmdGVyIHNhdmluZywgeW91J2xsIGJlIGxvZ2dlZCBvdXQuPC9DYXJkRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xXCI+QUFBQUE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMVwiPkFBQUFBPC9kaXY+XG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgIDxDYXJkRm9vdGVyPlxuICAgICAgICAgICAgICAgIDxCdXR0b24+U2F2ZSBwYXNzd29yZDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0NhcmRGb290ZXI+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9UYWJzQ29udGVudD5cbiAgICAgICAgPC9UYWJzPlxuICAgICAgPC9DYXJkQ29udGVudD5cbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMZWFkZXJib2FyZDtcbiJdLCJuYW1lcyI6WyJjbiIsIkJ1dHRvbiIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmREZXNjcmlwdGlvbiIsIkNhcmRGb290ZXIiLCJDYXJkSGVhZGVyIiwiQ2FyZFRpdGxlIiwiQ3Jvd25JY29uIiwiVXNlckljb24iLCJUYWJzIiwiVGFic0xpc3QiLCJUYWJzVHJpZ2dlciIsIlRhYnNDb250ZW50IiwiQXZhdGFyIiwiQXZhdGFySW1hZ2UiLCJBdmF0YXJGYWxsYmFjayIsIm5vdGlmaWNhdGlvbnMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiTGVhZGVyYm9hcmQiLCJjbGFzc05hbWUiLCJkZWZhdWx0VmFsdWUiLCJ2YWx1ZSIsInNyYyIsImFsdCIsInNwYW4iLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/leaderboard.tsx\n"));

/***/ })

});