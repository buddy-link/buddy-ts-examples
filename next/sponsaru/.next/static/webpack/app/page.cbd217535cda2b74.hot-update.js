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

/***/ "(app-pages-browser)/./src/components/how-to-play-dialog.tsx":
/*!***********************************************!*\
  !*** ./src/components/how-to-play-dialog.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _ui_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/dialog */ \"(app-pages-browser)/./src/components/ui/dialog.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _go_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./go-animation */ \"(app-pages-browser)/./src/components/go-animation.tsx\");\n/* harmony import */ var _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @radix-ui/react-dialog */ \"(app-pages-browser)/./node_modules/@radix-ui/react-dialog/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst sections = [\n    {\n        title: \"Teams\",\n        description: \"Join teams to combine your point totals on the Team Leaderboards. Make your own team or join existing ones, it’s your choice!\"\n    },\n    {\n        title: \"Quests\",\n        description: \"Complete quests to increase personal and team points.\"\n    },\n    {\n        title: \"Leaderboards\",\n        description: \"Points count individually and for the team you joined. Rank high on the leaderboards for bragging rights and more!\"\n    }\n];\nconst HowToPlayDialog = ()=>{\n    _s();\n    const [openDialog, setOpenDialog] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [openAnimation, setOpenAnimation] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setOpenDialog(true);\n    }, []);\n    const onClose = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{\n        setOpenDialog((prev)=>!prev);\n        setOpenAnimation(true);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            !openDialog && openAnimation && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_go_animation__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                open: openAnimation\n            }, void 0, false, {\n                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/how-to-play-dialog.tsx\",\n                lineNumber: 49,\n                columnNumber: 40\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.Dialog, {\n                open: openDialog,\n                onOpenChange: setOpenDialog,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogTrigger, {\n                        asChild: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                            type: \"button\",\n                            variant: \"primary\",\n                            className: \"text-white gap-2 px-6 py-4\",\n                            onClick: ()=>{\n                                setOpenDialog(true);\n                            },\n                            children: \"How to Play\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/how-to-play-dialog.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/how-to-play-dialog.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_5__.DialogOverlay, {\n                        onClick: onClose\n                    }, void 0, false, {\n                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/how-to-play-dialog.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogClose, {\n                        onClick: onClose\n                    }, void 0, false, {\n                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/how-to-play-dialog.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogContent, {\n                        className: \"max-w-screen-sm\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogHeader, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogTitle, {\n                                    className: \"font-bold text-5xl\",\n                                    children: \"How to Play\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/how-to-play-dialog.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/how-to-play-dialog.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, undefined),\n                            sections.map((section, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"text-lg font-bold text-primary-dark\",\n                                            children: section.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/how-to-play-dialog.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-[#C38B88]\",\n                                            children: section.description\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/how-to-play-dialog.tsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/how-to-play-dialog.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, undefined)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogFooter, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"items-center justify-center w-full flex\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogClose, {\n                                        asChild: true,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                            variant: \"primary\",\n                                            onClick: onClose,\n                                            children: \"Start Playing!\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/how-to-play-dialog.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/how-to-play-dialog.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/how-to-play-dialog.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/how-to-play-dialog.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/how-to-play-dialog.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/how-to-play-dialog.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(HowToPlayDialog, \"NZq+qKNUcIXYmxLgUH5GrPJ6668=\");\n_c = HowToPlayDialog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HowToPlayDialog);\nvar _c;\n$RefreshReg$(_c, \"HowToPlayDialog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2hvdy10by1wbGF5LWRpYWxvZy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVxQztBQVNoQjtBQUNvQztBQUNoQjtBQUNjO0FBRXZELE1BQU1hLFdBQVc7SUFDZjtRQUNFQyxPQUFPO1FBQ1BDLGFBQ0U7SUFDSjtJQUNBO1FBQ0VELE9BQU87UUFDUEMsYUFBYTtJQUNmO0lBQ0E7UUFDRUQsT0FBTztRQUNQQyxhQUNFO0lBQ0o7Q0FDRDtBQUVELE1BQU1DLGtCQUFrQjs7SUFDdEIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdSLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1MsZUFBZUMsaUJBQWlCLEdBQUdWLCtDQUFRQSxDQUFDO0lBRW5ERCxnREFBU0EsQ0FBQztRQUNSUyxjQUFjO0lBQ2hCLEdBQUcsRUFBRTtJQUVMLE1BQU1HLFVBQVViLGtEQUFXQSxDQUFDO1FBQzFCVSxjQUFjLENBQUNJLE9BQVMsQ0FBQ0E7UUFDekJGLGlCQUFpQjtJQUNuQixHQUFHLEVBQUU7SUFFTCxxQkFDRTs7WUFDRyxDQUFDSCxjQUFjRSwrQkFBaUIsOERBQUNSLHFEQUFXQTtnQkFBQ1ksTUFBTUo7Ozs7OzswQkFDcEQsOERBQUNsQiw4Q0FBTUE7Z0JBQUNzQixNQUFNTjtnQkFBWU8sY0FBY047O2tDQUN0Qyw4REFBQ1gscURBQWFBO3dCQUFDa0IsT0FBTztrQ0FDcEIsNEVBQUN6Qiw4Q0FBTUE7NEJBQ0wwQixNQUFLOzRCQUNMQyxTQUFROzRCQUNSQyxXQUFVOzRCQUNWQyxTQUFTO2dDQUNQWCxjQUFjOzRCQUNoQjtzQ0FDRDs7Ozs7Ozs7Ozs7a0NBS0gsOERBQUNOLGlFQUFhQTt3QkFBQ2lCLFNBQVNSOzs7Ozs7a0NBQ3hCLDhEQUFDbkIsbURBQVdBO3dCQUFDMkIsU0FBU1I7Ozs7OztrQ0FFdEIsOERBQUNsQixxREFBYUE7d0JBQUN5QixXQUFVOzswQ0FDdkIsOERBQUN2QixvREFBWUE7MENBQ1gsNEVBQUNDLG1EQUFXQTtvQ0FBQ3NCLFdBQVU7OENBQXFCOzs7Ozs7Ozs7Ozs0QkFHN0NmLFNBQVNpQixHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQ3RCLDhEQUFDQztvQ0FBZ0JMLFdBQVU7O3NEQUN6Qiw4REFBQ007NENBQUdOLFdBQVk7c0RBQXVDRyxRQUFRakIsS0FBSzs7Ozs7O3NEQUNwRSw4REFBQ3FCOzRDQUFFUCxXQUFVO3NEQUFrQkcsUUFBUWhCLFdBQVc7Ozs7Ozs7bUNBRjFDaUI7Ozs7OzBDQU1aLDhEQUFDNUIsb0RBQVlBOzBDQUNYLDRFQUFDNkI7b0NBQUlMLFdBQVU7OENBQ2IsNEVBQUMxQixtREFBV0E7d0NBQUN1QixPQUFPO2tEQUNsQiw0RUFBQ3pCLDhDQUFNQTs0Q0FBQzJCLFNBQVE7NENBQVVFLFNBQVNSO3NEQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVU1RDtHQTFETUw7S0FBQUE7QUE0RE4sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG93LXRvLXBsYXktZGlhbG9nLnRzeD82OGFiIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi91aS9idXR0b24nO1xuaW1wb3J0IHtcbiAgRGlhbG9nLFxuICBEaWFsb2dDbG9zZSxcbiAgRGlhbG9nQ29udGVudCxcbiAgRGlhbG9nRm9vdGVyLFxuICBEaWFsb2dIZWFkZXIsXG4gIERpYWxvZ1RpdGxlLFxuICBEaWFsb2dUcmlnZ2VyLFxufSBmcm9tICcuL3VpL2RpYWxvZyc7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBHb0FuaW1hdGlvbiBmcm9tICcuL2dvLWFuaW1hdGlvbic7XG5pbXBvcnQgeyBEaWFsb2dPdmVybGF5IH0gZnJvbSAnQHJhZGl4LXVpL3JlYWN0LWRpYWxvZyc7XG5cbmNvbnN0IHNlY3Rpb25zID0gW1xuICB7XG4gICAgdGl0bGU6ICdUZWFtcycsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnSm9pbiB0ZWFtcyB0byBjb21iaW5lIHlvdXIgcG9pbnQgdG90YWxzIG9uIHRoZSBUZWFtIExlYWRlcmJvYXJkcy4gTWFrZSB5b3VyIG93biB0ZWFtIG9yIGpvaW4gZXhpc3Rpbmcgb25lcywgaXTigJlzIHlvdXIgY2hvaWNlIScsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1F1ZXN0cycsXG4gICAgZGVzY3JpcHRpb246ICdDb21wbGV0ZSBxdWVzdHMgdG8gaW5jcmVhc2UgcGVyc29uYWwgYW5kIHRlYW0gcG9pbnRzLicsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0xlYWRlcmJvYXJkcycsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnUG9pbnRzIGNvdW50IGluZGl2aWR1YWxseSBhbmQgZm9yIHRoZSB0ZWFtIHlvdSBqb2luZWQuIFJhbmsgaGlnaCBvbiB0aGUgbGVhZGVyYm9hcmRzIGZvciBicmFnZ2luZyByaWdodHMgYW5kIG1vcmUhJyxcbiAgfSxcbl07XG5cbmNvbnN0IEhvd1RvUGxheURpYWxvZyA9ICgpID0+IHtcbiAgY29uc3QgW29wZW5EaWFsb2csIHNldE9wZW5EaWFsb2ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbb3BlbkFuaW1hdGlvbiwgc2V0T3BlbkFuaW1hdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRPcGVuRGlhbG9nKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25DbG9zZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRPcGVuRGlhbG9nKChwcmV2KSA9PiAhcHJldik7XG4gICAgc2V0T3BlbkFuaW1hdGlvbih0cnVlKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHshb3BlbkRpYWxvZyAmJiBvcGVuQW5pbWF0aW9uICYmIDxHb0FuaW1hdGlvbiBvcGVuPXtvcGVuQW5pbWF0aW9ufSAvPn1cbiAgICAgIDxEaWFsb2cgb3Blbj17b3BlbkRpYWxvZ30gb25PcGVuQ2hhbmdlPXtzZXRPcGVuRGlhbG9nfT5cbiAgICAgICAgPERpYWxvZ1RyaWdnZXIgYXNDaGlsZD5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZ2FwLTIgcHgtNiBweS00XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0T3BlbkRpYWxvZyh0cnVlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgSG93IHRvIFBsYXlcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9EaWFsb2dUcmlnZ2VyPlxuXG4gICAgICAgIDxEaWFsb2dPdmVybGF5IG9uQ2xpY2s9e29uQ2xvc2V9IC8+XG4gICAgICAgIDxEaWFsb2dDbG9zZSBvbkNsaWNrPXtvbkNsb3NlfSAvPlxuXG4gICAgICAgIDxEaWFsb2dDb250ZW50IGNsYXNzTmFtZT1cIm1heC13LXNjcmVlbi1zbVwiPlxuICAgICAgICAgIDxEaWFsb2dIZWFkZXI+XG4gICAgICAgICAgICA8RGlhbG9nVGl0bGUgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtNXhsXCI+SG93IHRvIFBsYXk8L0RpYWxvZ1RpdGxlPlxuICAgICAgICAgIDwvRGlhbG9nSGVhZGVyPlxuXG4gICAgICAgICAge3NlY3Rpb25zLm1hcCgoc2VjdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtgdGV4dC1sZyBmb250LWJvbGQgdGV4dC1wcmltYXJ5LWRhcmtgfT57c2VjdGlvbi50aXRsZX08L2gzPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsjQzM4Qjg4XVwiPntzZWN0aW9uLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuXG4gICAgICAgICAgPERpYWxvZ0Zvb3Rlcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBmbGV4XCI+XG4gICAgICAgICAgICAgIDxEaWFsb2dDbG9zZSBhc0NoaWxkPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXtvbkNsb3NlfT5cbiAgICAgICAgICAgICAgICAgIFN0YXJ0IFBsYXlpbmchXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvRGlhbG9nQ2xvc2U+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0RpYWxvZ0Zvb3Rlcj5cbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgPC9EaWFsb2c+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb3dUb1BsYXlEaWFsb2c7XG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiRGlhbG9nIiwiRGlhbG9nQ2xvc2UiLCJEaWFsb2dDb250ZW50IiwiRGlhbG9nRm9vdGVyIiwiRGlhbG9nSGVhZGVyIiwiRGlhbG9nVGl0bGUiLCJEaWFsb2dUcmlnZ2VyIiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkdvQW5pbWF0aW9uIiwiRGlhbG9nT3ZlcmxheSIsInNlY3Rpb25zIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkhvd1RvUGxheURpYWxvZyIsIm9wZW5EaWFsb2ciLCJzZXRPcGVuRGlhbG9nIiwib3BlbkFuaW1hdGlvbiIsInNldE9wZW5BbmltYXRpb24iLCJvbkNsb3NlIiwicHJldiIsIm9wZW4iLCJvbk9wZW5DaGFuZ2UiLCJhc0NoaWxkIiwidHlwZSIsInZhcmlhbnQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwibWFwIiwic2VjdGlvbiIsImluZGV4IiwiZGl2IiwiaDMiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/how-to-play-dialog.tsx\n"));

/***/ })

});