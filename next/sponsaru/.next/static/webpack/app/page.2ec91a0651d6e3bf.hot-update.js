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

/***/ "(app-pages-browser)/./src/components/team-popover.tsx":
/*!*****************************************!*\
  !*** ./src/components/team-popover.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TeamPopover: function() { return /* binding */ TeamPopover; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _components_ui_popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/popover */ \"(app-pages-browser)/./src/components/ui/popover.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n\n\n\n\nfunction TeamPopover(param) {\n    let { open, onClose, node, position } = param;\n    if (!node) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_popover__WEBPACK_IMPORTED_MODULE_2__.Popover, {\n        open: open,\n        onOpenChange: onClose,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_popover__WEBPACK_IMPORTED_MODULE_2__.PopoverTrigger, {\n                asChild: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"hidden\"\n                }, void 0, false, {\n                    fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/team-popover.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/team-popover.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_popover__WEBPACK_IMPORTED_MODULE_2__.PopoverContent, {\n                className: \"w-fit min-w-[240px] z-50 gap-3 py-8 shadow-none border-4 border-[#FCF4EE]\",\n                style: {\n                    position: \"fixed\",\n                    left: position.x,\n                    top: position.y\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center gap-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col items-center justify-center gap-1\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    src: node.image,\n                                    width: 84,\n                                    height: 84,\n                                    alt: node.label\n                                }, void 0, false, {\n                                    fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/team-popover.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    className: \"font-bold text-primary-dark\",\n                                    children: node.label\n                                }, void 0, false, {\n                                    fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/team-popover.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"flex items-center justify-center space-x-2 text-light font-normal\",\n                                    children: node.members.toLocaleString(\"en-US\", {\n                                        minimumFractionDigits: 0,\n                                        maximumFractionDigits: 0\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/team-popover.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/team-popover.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                            type: \"button\",\n                            variant: \"primary\",\n                            className: \"px-8 mt-4\",\n                            onClick: onClose,\n                            children: \"Join\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/team-popover.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/team-popover.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/team-popover.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/team-popover.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_c = TeamPopover;\nvar _c;\n$RefreshReg$(_c, \"TeamPopover\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3RlYW0tcG9wb3Zlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWdEO0FBQ2tDO0FBQ25EO0FBVXhCLFNBQVNLLFlBQVksS0FBbUQ7UUFBbkQsRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFvQixHQUFuRDtJQUMxQixJQUFJLENBQUNELE1BQU0sT0FBTztJQUVsQixxQkFDRSw4REFBQ1AsMkRBQU9BO1FBQUNLLE1BQU1BO1FBQU1JLGNBQWNIOzswQkFDakMsOERBQUNKLGtFQUFjQTtnQkFBQ1EsT0FBTzswQkFDckIsNEVBQUNDO29CQUFJQyxXQUFVOzs7Ozs7Ozs7OzswQkFFakIsOERBQUNYLGtFQUFjQTtnQkFDYlcsV0FBVTtnQkFDVkMsT0FBTztvQkFDTEwsVUFBVTtvQkFDVk0sTUFBTU4sU0FBU08sQ0FBQztvQkFDaEJDLEtBQUtSLFNBQVNTLENBQUM7Z0JBQ2pCOzBCQUVBLDRFQUFDTjtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ1Qsa0RBQUtBO29DQUFDZSxLQUFLWCxLQUFLWSxLQUFLO29DQUFFQyxPQUFPO29DQUFJQyxRQUFRO29DQUFJQyxLQUFLZixLQUFLZ0IsS0FBSzs7Ozs7OzhDQUM5RCw4REFBQ0M7b0NBQUdaLFdBQVU7OENBQStCTCxLQUFLZ0IsS0FBSzs7Ozs7OzhDQUN2RCw4REFBQ0U7b0NBQUtiLFdBQVU7OENBQ2JMLEtBQUttQixPQUFPLENBQUNDLGNBQWMsQ0FBQyxTQUFTO3dDQUNwQ0MsdUJBQXVCO3dDQUN2QkMsdUJBQXVCO29DQUN6Qjs7Ozs7Ozs7Ozs7O3NDQUlKLDhEQUFDOUIseURBQU1BOzRCQUFDK0IsTUFBSzs0QkFBU0MsU0FBUTs0QkFBVW5CLFdBQVU7NEJBQVlvQixTQUFTMUI7c0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzFGO0tBbkNnQkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVhbS1wb3BvdmVyLnRzeD9lOWM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9idXR0b24nO1xuaW1wb3J0IHsgUG9wb3ZlciwgUG9wb3ZlckNvbnRlbnQsIFBvcG92ZXJUcmlnZ2VyIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL3BvcG92ZXInO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgTm9kZURhdGEsIFBvc2l0aW9uIH0gZnJvbSAnLi90eXBlcyc7XG5cbmludGVyZmFjZSBUZWFtUG9wb3ZlclByb3BzIHtcbiAgb3BlbjogYm9vbGVhbjtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbiAgbm9kZTogTm9kZURhdGEgfCBudWxsO1xuICBwb3NpdGlvbjogUG9zaXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUZWFtUG9wb3Zlcih7IG9wZW4sIG9uQ2xvc2UsIG5vZGUsIHBvc2l0aW9uIH06IFRlYW1Qb3BvdmVyUHJvcHMpIHtcbiAgaWYgKCFub2RlKSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxQb3BvdmVyIG9wZW49e29wZW59IG9uT3BlbkNoYW5nZT17b25DbG9zZX0+XG4gICAgICA8UG9wb3ZlclRyaWdnZXIgYXNDaGlsZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW5cIj57LyogRXN0ZSDDqSB1bSB0cmlnZ2VyIGludmlzw612ZWwgcGFyYSBxdWUgbyBQb3BvdmVyIHBvc3NhIHNlciBjb250cm9sYWRvICovfTwvZGl2PlxuICAgICAgPC9Qb3BvdmVyVHJpZ2dlcj5cbiAgICAgIDxQb3BvdmVyQ29udGVudFxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZpdCBtaW4tdy1bMjQwcHhdIHotNTAgZ2FwLTMgcHktOCBzaGFkb3ctbm9uZSBib3JkZXItNCBib3JkZXItWyNGQ0Y0RUVdXCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICBsZWZ0OiBwb3NpdGlvbi54LFxuICAgICAgICAgIHRvcDogcG9zaXRpb24ueSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTFcIj5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e25vZGUuaW1hZ2V9IHdpZHRoPXs4NH0gaGVpZ2h0PXs4NH0gYWx0PXtub2RlLmxhYmVsfSAvPlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXByaW1hcnktZGFya1wiPntub2RlLmxhYmVsfTwvaDQ+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzcGFjZS14LTIgdGV4dC1saWdodCBmb250LW5vcm1hbFwiPlxuICAgICAgICAgICAgICB7bm9kZS5tZW1iZXJzLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHtcbiAgICAgICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAsXG4gICAgICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAwLFxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cImJ1dHRvblwiIHZhcmlhbnQ9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPVwicHgtOCBtdC00XCIgb25DbGljaz17b25DbG9zZX0+XG4gICAgICAgICAgICBKb2luXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Qb3BvdmVyQ29udGVudD5cbiAgICA8L1BvcG92ZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiUG9wb3ZlciIsIlBvcG92ZXJDb250ZW50IiwiUG9wb3ZlclRyaWdnZXIiLCJJbWFnZSIsIlRlYW1Qb3BvdmVyIiwib3BlbiIsIm9uQ2xvc2UiLCJub2RlIiwicG9zaXRpb24iLCJvbk9wZW5DaGFuZ2UiLCJhc0NoaWxkIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJsZWZ0IiwieCIsInRvcCIsInkiLCJzcmMiLCJpbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwibGFiZWwiLCJoNCIsInNwYW4iLCJtZW1iZXJzIiwidG9Mb2NhbGVTdHJpbmciLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJ0eXBlIiwidmFyaWFudCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/team-popover.tsx\n"));

/***/ })

});