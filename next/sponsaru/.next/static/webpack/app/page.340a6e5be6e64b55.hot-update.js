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

/***/ "(app-pages-browser)/./src/components/quests-dialog.tsx":
/*!******************************************!*\
  !*** ./src/components/quests-dialog.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/icons */ \"(app-pages-browser)/./src/assets/icons/index.ts\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _ui_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/dialog */ \"(app-pages-browser)/./src/components/ui/dialog.tsx\");\n/* harmony import */ var _circular_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./circular-progress-bar */ \"(app-pages-browser)/./src/components/circular-progress-bar.tsx\");\n\n\n\n\n\nconst QuestsDialog = (param)=>{\n    let { quests, isLoading } = param;\n    console.log(\"quests\", quests);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.Dialog, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogTrigger, {\n                asChild: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    type: \"button\",\n                    variant: \"primary\",\n                    className: \"text-white gap-2 px-6 py-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_icons__WEBPACK_IMPORTED_MODULE_1__.JoystickIcon, {}, void 0, false, {\n                            fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/quests-dialog.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, undefined),\n                        \"Quests\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/quests-dialog.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/quests-dialog.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogContent, {\n                className: \"max-w-screen-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogHeader, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogTitle, {\n                            className: \"font-bold text-5xl\",\n                            children: \"Quests\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/quests-dialog.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/quests-dialog.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogDescription, {\n                        className: \"font-bold\",\n                        children: \"> Complete quests to increase personal & team points\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/quests-dialog.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Loading...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/quests-dialog.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-3 gap-5\",\n                        children: quests.map((quest, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"shadow-[0px_-4px_0px_0px_#ff9b61_inset] rounded-md border-x-2 border-t-2 border-[#FCF4EE] flex gap-6 p-[0.625rem]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex gap-2 items-center justify-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_circular_progress_bar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                percentage: 70,\n                                                text: 100\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/quests-dialog.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex flex-col items-start justify-center whitespace-nowrap\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"text-xs\",\n                                                        children: quest.displayName\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/quests-dialog.tsx\",\n                                                        lineNumber: 71,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"text-[0.625rem]\",\n                                                        children: [\n                                                            \"Time left: \",\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                className: \"text-light-primary\",\n                                                                children: \"17m 23s\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/quests-dialog.tsx\",\n                                                                lineNumber: 73,\n                                                                columnNumber: 34\n                                                            }, undefined)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/quests-dialog.tsx\",\n                                                        lineNumber: 72,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/quests-dialog.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/quests-dialog.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                        variant: \"primary\",\n                                        className: \"text-white gap-2 px-6 py-4\",\n                                        children: \"Claim\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/quests-dialog.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, quest.name, true, {\n                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/quests-dialog.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/quests-dialog.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogFooter, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogClose, {\n                            asChild: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                variant: \"primary\",\n                                children: \"Close\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/quests-dialog.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/quests-dialog.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/quests-dialog.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/quests-dialog.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/quests-dialog.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_c = QuestsDialog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuestsDialog);\nvar _c;\n$RefreshReg$(_c, \"QuestsDialog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3F1ZXN0cy1kaWFsb2cudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBOEM7QUFDVDtBQVVoQjtBQUNxQztBQTJCMUQsTUFBTVcsZUFBZTtRQUFDLEVBQUVDLE1BQU0sRUFBRUMsU0FBUyxFQUFxQjtJQUM1REMsUUFBUUMsR0FBRyxDQUFDLFVBQVVIO0lBRXRCLHFCQUNFLDhEQUFDViw4Q0FBTUE7OzBCQUNMLDhEQUFDTyxxREFBYUE7Z0JBQUNPLE9BQU87MEJBQ3BCLDRFQUFDZiw4Q0FBTUE7b0JBQUNnQixNQUFLO29CQUFTQyxTQUFRO29CQUFVQyxXQUFVOztzQ0FDaEQsOERBQUNuQix1REFBWUE7Ozs7O3dCQUFHOzs7Ozs7Ozs7Ozs7MEJBS3BCLDhEQUFDSSxxREFBYUE7Z0JBQUNlLFdBQVU7O2tDQUN2Qiw4REFBQ1osb0RBQVlBO2tDQUNYLDRFQUFDQyxtREFBV0E7NEJBQUNXLFdBQVU7c0NBQXFCOzs7Ozs7Ozs7OztrQ0FFOUMsOERBQUNkLHlEQUFpQkE7d0JBQUNjLFdBQVU7a0NBQVk7Ozs7OztvQkFHeENOLDBCQUNDLDhEQUFDTztrQ0FBSTs7Ozs7a0RBRUwsOERBQUNBO3dCQUFJRCxXQUFVO2tDQUNaUCxPQUFPUyxHQUFHLENBQUMsQ0FBQ0MsT0FBT0Msc0JBQ2xCLDhEQUFDSDtnQ0FFQ0QsV0FBVTs7a0RBRVYsOERBQUNDO3dDQUFJRCxXQUFVOzswREFDYiw4REFBQ1QsOERBQW1CQTtnREFBQ2MsWUFBWTtnREFBSUMsTUFBTTs7Ozs7OzBEQUMzQyw4REFBQ0w7Z0RBQUlELFdBQVU7O2tFQUNiLDhEQUFDTzt3REFBS1AsV0FBVTtrRUFBV0csTUFBTUssV0FBVzs7Ozs7O2tFQUM1Qyw4REFBQ0M7d0RBQUVULFdBQVU7OzREQUFrQjswRUFDbEIsOERBQUNPO2dFQUFLUCxXQUFVOzBFQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQUl2RCw4REFBQ2xCLDhDQUFNQTt3Q0FBQ2lCLFNBQVE7d0NBQVVDLFdBQVU7a0RBQTZCOzs7Ozs7OytCQVo1REcsTUFBTU8sSUFBSTs7Ozs7Ozs7OztrQ0FvQnZCLDhEQUFDdkIsb0RBQVlBO2tDQUNYLDRFQUFDSCxtREFBV0E7NEJBQUNhLE9BQU87c0NBQ2xCLDRFQUFDZiw4Q0FBTUE7Z0NBQUNpQixTQUFROzBDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXRDO0tBckRNUDtBQXVETiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9xdWVzdHMtZGlhbG9nLnRzeD9iYzVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEpveXN0aWNrSWNvbiB9IGZyb20gJ0AvYXNzZXRzL2ljb25zJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vdWkvYnV0dG9uJztcbmltcG9ydCB7XG4gIERpYWxvZyxcbiAgRGlhbG9nQ2xvc2UsXG4gIERpYWxvZ0NvbnRlbnQsXG4gIERpYWxvZ0Rlc2NyaXB0aW9uLFxuICBEaWFsb2dGb290ZXIsXG4gIERpYWxvZ0hlYWRlcixcbiAgRGlhbG9nVGl0bGUsXG4gIERpYWxvZ1RyaWdnZXIsXG59IGZyb20gJy4vdWkvZGlhbG9nJztcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzQmFyIGZyb20gJy4vY2lyY3VsYXItcHJvZ3Jlc3MtYmFyJztcblxudHlwZSBRdWVzdCA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICBjb25maWc6IHtcbiAgICBwb2ludFZhbHVlOiBudW1iZXI7XG4gICAgcmVwZWF0RnJlcXVlbmN5OiAnbm9uZSc7XG4gICAgdXNlTGFzdFN1Y2Nlc3NBc0Vwb2NoOiBib29sZWFuO1xuICAgIE1heGltdW1UaW1lVG9Db21wbGV0ZTogbnVtYmVyO1xuICAgIHRpbWV6b25lOiBzdHJpbmc7XG4gICAgcmVwZWF0TGltaXQ6IG51bWJlcjtcbiAgfTtcbiAgaW1hZ2U6IHN0cmluZztcbiAgZGlzcGxheU5hbWU6IHN0cmluZztcbiAgb3duZXI6IHN0cmluZztcbiAgdHJpZ2dlcjoge1xuICAgIHR5cGU6IHN0cmluZztcbiAgICBwcm92aWRlcjogc3RyaW5nO1xuICAgIGFyZ3M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICB9O1xufTtcblxudHlwZSBRdWVzdHNEaWFsb2dQcm9wcyA9IHtcbiAgcXVlc3RzOiBRdWVzdFtdO1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG59O1xuXG5jb25zdCBRdWVzdHNEaWFsb2cgPSAoeyBxdWVzdHMsIGlzTG9hZGluZyB9OiBRdWVzdHNEaWFsb2dQcm9wcykgPT4ge1xuICBjb25zb2xlLmxvZygncXVlc3RzJywgcXVlc3RzKTtcblxuICByZXR1cm4gKFxuICAgIDxEaWFsb2c+XG4gICAgICA8RGlhbG9nVHJpZ2dlciBhc0NoaWxkPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiB2YXJpYW50PVwicHJpbWFyeVwiIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZ2FwLTIgcHgtNiBweS00XCI+XG4gICAgICAgICAgPEpveXN0aWNrSWNvbiAvPlxuICAgICAgICAgIFF1ZXN0c1xuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvRGlhbG9nVHJpZ2dlcj5cblxuICAgICAgPERpYWxvZ0NvbnRlbnQgY2xhc3NOYW1lPVwibWF4LXctc2NyZWVuLWxnXCI+XG4gICAgICAgIDxEaWFsb2dIZWFkZXI+XG4gICAgICAgICAgPERpYWxvZ1RpdGxlIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTV4bFwiPlF1ZXN0czwvRGlhbG9nVGl0bGU+XG4gICAgICAgIDwvRGlhbG9nSGVhZGVyPlxuICAgICAgICA8RGlhbG9nRGVzY3JpcHRpb24gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+XG4gICAgICAgICAgJmd0OyBDb21wbGV0ZSBxdWVzdHMgdG8gaW5jcmVhc2UgcGVyc29uYWwgJiB0ZWFtIHBvaW50c1xuICAgICAgICA8L0RpYWxvZ0Rlc2NyaXB0aW9uPlxuICAgICAgICB7aXNMb2FkaW5nID8gKFxuICAgICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBnYXAtNVwiPlxuICAgICAgICAgICAge3F1ZXN0cy5tYXAoKHF1ZXN0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtxdWVzdC5uYW1lfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdy1bMHB4Xy00cHhfMHB4XzBweF8jZmY5YjYxX2luc2V0XSByb3VuZGVkLW1kIGJvcmRlci14LTIgYm9yZGVyLXQtMiBib3JkZXItWyNGQ0Y0RUVdIGZsZXggZ2FwLTYgcC1bMC42MjVyZW1dXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzQmFyIHBlcmNlbnRhZ2U9ezcwfSB0ZXh0PXsxMDB9IC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQganVzdGlmeS1jZW50ZXIgd2hpdGVzcGFjZS1ub3dyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14c1wiPntxdWVzdC5kaXNwbGF5TmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzAuNjI1cmVtXVwiPlxuICAgICAgICAgICAgICAgICAgICAgIFRpbWUgbGVmdDogPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1saWdodC1wcmltYXJ5XCI+eycxN20gMjNzJ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGdhcC0yIHB4LTYgcHktNFwiPlxuICAgICAgICAgICAgICAgICAgQ2xhaW1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICA8RGlhbG9nRm9vdGVyPlxuICAgICAgICAgIDxEaWFsb2dDbG9zZSBhc0NoaWxkPlxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiPkNsb3NlPC9CdXR0b24+XG4gICAgICAgICAgPC9EaWFsb2dDbG9zZT5cbiAgICAgICAgPC9EaWFsb2dGb290ZXI+XG4gICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgPC9EaWFsb2c+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBRdWVzdHNEaWFsb2c7XG4iXSwibmFtZXMiOlsiSm95c3RpY2tJY29uIiwiQnV0dG9uIiwiRGlhbG9nIiwiRGlhbG9nQ2xvc2UiLCJEaWFsb2dDb250ZW50IiwiRGlhbG9nRGVzY3JpcHRpb24iLCJEaWFsb2dGb290ZXIiLCJEaWFsb2dIZWFkZXIiLCJEaWFsb2dUaXRsZSIsIkRpYWxvZ1RyaWdnZXIiLCJDaXJjdWxhclByb2dyZXNzQmFyIiwiUXVlc3RzRGlhbG9nIiwicXVlc3RzIiwiaXNMb2FkaW5nIiwiY29uc29sZSIsImxvZyIsImFzQ2hpbGQiLCJ0eXBlIiwidmFyaWFudCIsImNsYXNzTmFtZSIsImRpdiIsIm1hcCIsInF1ZXN0IiwiaW5kZXgiLCJwZXJjZW50YWdlIiwidGV4dCIsInNwYW4iLCJkaXNwbGF5TmFtZSIsInAiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/quests-dialog.tsx\n"));

/***/ })

});