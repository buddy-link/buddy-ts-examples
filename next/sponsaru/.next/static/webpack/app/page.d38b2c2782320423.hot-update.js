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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _ui_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/dialog */ \"(app-pages-browser)/./src/components/ui/dialog.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _go_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./go-animation */ \"(app-pages-browser)/./src/components/go-animation.tsx\");\n/* harmony import */ var _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @radix-ui/react-dialog */ \"(app-pages-browser)/./node_modules/@radix-ui/react-dialog/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst sections = [\n    {\n        title: \"Teams\",\n        description: \"Join teams to combine your point totals on the Team Leaderboards. Make your own team or join existing ones, it’s your choice!\"\n    },\n    {\n        title: \"Quests\",\n        description: \"Complete quests to increase personal and team points.\"\n    },\n    {\n        title: \"Leaderboards\",\n        description: \"Points count individually and for the team you joined. Rank high on the leaderboards for bragging rights and more!\"\n    }\n];\nconst HowToPlayDialog = ()=>{\n    _s();\n    const [openDialog, setOpenDialog] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [openAnimation, setOpenAnimation] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setOpenDialog(true);\n    }, []);\n    const onClose = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{\n        setOpenDialog(false);\n        setOpenAnimation(true);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            !openDialog && openAnimation && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_go_animation__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                open: openAnimation\n            }, void 0, false, {\n                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/how-to-play-dialog.tsx\",\n                lineNumber: 49,\n                columnNumber: 40\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.Dialog, {\n                open: openDialog,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogTrigger, {\n                        asChild: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                            type: \"button\",\n                            variant: \"primary\",\n                            className: \"text-white gap-2 px-6 py-4\",\n                            onClick: ()=>{\n                                setOpenDialog(true);\n                            },\n                            children: \"How to Play\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/how-to-play-dialog.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/how-to-play-dialog.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_5__.DialogOverlay, {\n                        onClick: onClose\n                    }, void 0, false, {\n                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/how-to-play-dialog.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogClose, {\n                        onClick: onClose\n                    }, void 0, false, {\n                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/how-to-play-dialog.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogContent, {\n                        className: \"max-w-screen-sm\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogHeader, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogTitle, {\n                                    className: \"font-bold text-5xl\",\n                                    children: \"How to Play\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/how-to-play-dialog.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/how-to-play-dialog.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, undefined),\n                            sections.map((section, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"text-lg font-bold text-primary-dark\",\n                                            children: section.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/how-to-play-dialog.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-[#C38B88]\",\n                                            children: section.description\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/how-to-play-dialog.tsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/how-to-play-dialog.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, undefined)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogFooter, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"items-center justify-center w-full flex\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogClose, {\n                                        asChild: true,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                            variant: \"primary\",\n                                            onClick: onClose,\n                                            children: \"Start Playing!\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/how-to-play-dialog.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/how-to-play-dialog.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/how-to-play-dialog.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/how-to-play-dialog.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/how-to-play-dialog.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/how-to-play-dialog.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(HowToPlayDialog, \"NZq+qKNUcIXYmxLgUH5GrPJ6668=\");\n_c = HowToPlayDialog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HowToPlayDialog);\nvar _c;\n$RefreshReg$(_c, \"HowToPlayDialog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2hvdy10by1wbGF5LWRpYWxvZy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVxQztBQVNoQjtBQUNvQztBQUNoQjtBQUNjO0FBRXZELE1BQU1hLFdBQVc7SUFDZjtRQUNFQyxPQUFPO1FBQ1BDLGFBQ0U7SUFDSjtJQUNBO1FBQ0VELE9BQU87UUFDUEMsYUFBYTtJQUNmO0lBQ0E7UUFDRUQsT0FBTztRQUNQQyxhQUNFO0lBQ0o7Q0FDRDtBQUVELE1BQU1DLGtCQUFrQjs7SUFDdEIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdSLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1MsZUFBZUMsaUJBQWlCLEdBQUdWLCtDQUFRQSxDQUFDO0lBRW5ERCxnREFBU0EsQ0FBQztRQUNSUyxjQUFjO0lBQ2hCLEdBQUcsRUFBRTtJQUVMLE1BQU1HLFVBQVViLGtEQUFXQSxDQUFDO1FBQzFCVSxjQUFjO1FBQ2RFLGlCQUFpQjtJQUNuQixHQUFHLEVBQUU7SUFFTCxxQkFDRTs7WUFDRyxDQUFDSCxjQUFjRSwrQkFBaUIsOERBQUNSLHFEQUFXQTtnQkFBQ1csTUFBTUg7Ozs7OzswQkFDcEQsOERBQUNsQiw4Q0FBTUE7Z0JBQUNxQixNQUFNTDs7a0NBQ1osOERBQUNWLHFEQUFhQTt3QkFBQ2dCLE9BQU87a0NBQ3BCLDRFQUFDdkIsOENBQU1BOzRCQUNMd0IsTUFBSzs0QkFDTEMsU0FBUTs0QkFDUkMsV0FBVTs0QkFDVkMsU0FBUztnQ0FDUFQsY0FBYzs0QkFDaEI7c0NBQ0Q7Ozs7Ozs7Ozs7O2tDQUtILDhEQUFDTixpRUFBYUE7d0JBQUNlLFNBQVNOOzs7Ozs7a0NBQ3hCLDhEQUFDbkIsbURBQVdBO3dCQUFDeUIsU0FBU047Ozs7OztrQ0FFdEIsOERBQUNsQixxREFBYUE7d0JBQUN1QixXQUFVOzswQ0FDdkIsOERBQUNyQixvREFBWUE7MENBQ1gsNEVBQUNDLG1EQUFXQTtvQ0FBQ29CLFdBQVU7OENBQXFCOzs7Ozs7Ozs7Ozs0QkFHN0NiLFNBQVNlLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFDdEIsOERBQUNDO29DQUFnQkwsV0FBVTs7c0RBQ3pCLDhEQUFDTTs0Q0FBR04sV0FBWTtzREFBdUNHLFFBQVFmLEtBQUs7Ozs7OztzREFDcEUsOERBQUNtQjs0Q0FBRVAsV0FBVTtzREFBa0JHLFFBQVFkLFdBQVc7Ozs7Ozs7bUNBRjFDZTs7Ozs7MENBTVosOERBQUMxQixvREFBWUE7MENBQ1gsNEVBQUMyQjtvQ0FBSUwsV0FBVTs4Q0FDYiw0RUFBQ3hCLG1EQUFXQTt3Q0FBQ3FCLE9BQU87a0RBQ2xCLDRFQUFDdkIsOENBQU1BOzRDQUFDeUIsU0FBUTs0Q0FBVUUsU0FBU047c0RBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVTVEO0dBMURNTDtLQUFBQTtBQTRETiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9ob3ctdG8tcGxheS1kaWFsb2cudHN4PzY4YWIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL3VpL2J1dHRvbic7XG5pbXBvcnQge1xuICBEaWFsb2csXG4gIERpYWxvZ0Nsb3NlLFxuICBEaWFsb2dDb250ZW50LFxuICBEaWFsb2dGb290ZXIsXG4gIERpYWxvZ0hlYWRlcixcbiAgRGlhbG9nVGl0bGUsXG4gIERpYWxvZ1RyaWdnZXIsXG59IGZyb20gJy4vdWkvZGlhbG9nJztcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEdvQW5pbWF0aW9uIGZyb20gJy4vZ28tYW5pbWF0aW9uJztcbmltcG9ydCB7IERpYWxvZ092ZXJsYXkgfSBmcm9tICdAcmFkaXgtdWkvcmVhY3QtZGlhbG9nJztcblxuY29uc3Qgc2VjdGlvbnMgPSBbXG4gIHtcbiAgICB0aXRsZTogJ1RlYW1zJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdKb2luIHRlYW1zIHRvIGNvbWJpbmUgeW91ciBwb2ludCB0b3RhbHMgb24gdGhlIFRlYW0gTGVhZGVyYm9hcmRzLiBNYWtlIHlvdXIgb3duIHRlYW0gb3Igam9pbiBleGlzdGluZyBvbmVzLCBpdOKAmXMgeW91ciBjaG9pY2UhJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnUXVlc3RzJyxcbiAgICBkZXNjcmlwdGlvbjogJ0NvbXBsZXRlIHF1ZXN0cyB0byBpbmNyZWFzZSBwZXJzb25hbCBhbmQgdGVhbSBwb2ludHMuJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnTGVhZGVyYm9hcmRzJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdQb2ludHMgY291bnQgaW5kaXZpZHVhbGx5IGFuZCBmb3IgdGhlIHRlYW0geW91IGpvaW5lZC4gUmFuayBoaWdoIG9uIHRoZSBsZWFkZXJib2FyZHMgZm9yIGJyYWdnaW5nIHJpZ2h0cyBhbmQgbW9yZSEnLFxuICB9LFxuXTtcblxuY29uc3QgSG93VG9QbGF5RGlhbG9nID0gKCkgPT4ge1xuICBjb25zdCBbb3BlbkRpYWxvZywgc2V0T3BlbkRpYWxvZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtvcGVuQW5pbWF0aW9uLCBzZXRPcGVuQW5pbWF0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE9wZW5EaWFsb2codHJ1ZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBvbkNsb3NlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldE9wZW5EaWFsb2coZmFsc2UpO1xuICAgIHNldE9wZW5BbmltYXRpb24odHJ1ZSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7IW9wZW5EaWFsb2cgJiYgb3BlbkFuaW1hdGlvbiAmJiA8R29BbmltYXRpb24gb3Blbj17b3BlbkFuaW1hdGlvbn0gLz59XG4gICAgICA8RGlhbG9nIG9wZW49e29wZW5EaWFsb2d9PlxuICAgICAgICA8RGlhbG9nVHJpZ2dlciBhc0NoaWxkPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBnYXAtMiBweC02IHB5LTRcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRPcGVuRGlhbG9nKHRydWUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBIb3cgdG8gUGxheVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0RpYWxvZ1RyaWdnZXI+XG5cbiAgICAgICAgPERpYWxvZ092ZXJsYXkgb25DbGljaz17b25DbG9zZX0gLz5cbiAgICAgICAgPERpYWxvZ0Nsb3NlIG9uQ2xpY2s9e29uQ2xvc2V9IC8+XG5cbiAgICAgICAgPERpYWxvZ0NvbnRlbnQgY2xhc3NOYW1lPVwibWF4LXctc2NyZWVuLXNtXCI+XG4gICAgICAgICAgPERpYWxvZ0hlYWRlcj5cbiAgICAgICAgICAgIDxEaWFsb2dUaXRsZSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC01eGxcIj5Ib3cgdG8gUGxheTwvRGlhbG9nVGl0bGU+XG4gICAgICAgICAgPC9EaWFsb2dIZWFkZXI+XG5cbiAgICAgICAgICB7c2VjdGlvbnMubWFwKChzZWN0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e2B0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LXByaW1hcnktZGFya2B9PntzZWN0aW9uLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWyNDMzhCODhdXCI+e3NlY3Rpb24uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG5cbiAgICAgICAgICA8RGlhbG9nRm9vdGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIGZsZXhcIj5cbiAgICAgICAgICAgICAgPERpYWxvZ0Nsb3NlIGFzQ2hpbGQ+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e29uQ2xvc2V9PlxuICAgICAgICAgICAgICAgICAgU3RhcnQgUGxheWluZyFcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9EaWFsb2dDbG9zZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRGlhbG9nRm9vdGVyPlxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICA8L0RpYWxvZz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvd1RvUGxheURpYWxvZztcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJEaWFsb2ciLCJEaWFsb2dDbG9zZSIsIkRpYWxvZ0NvbnRlbnQiLCJEaWFsb2dGb290ZXIiLCJEaWFsb2dIZWFkZXIiLCJEaWFsb2dUaXRsZSIsIkRpYWxvZ1RyaWdnZXIiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiR29BbmltYXRpb24iLCJEaWFsb2dPdmVybGF5Iiwic2VjdGlvbnMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiSG93VG9QbGF5RGlhbG9nIiwib3BlbkRpYWxvZyIsInNldE9wZW5EaWFsb2ciLCJvcGVuQW5pbWF0aW9uIiwic2V0T3BlbkFuaW1hdGlvbiIsIm9uQ2xvc2UiLCJvcGVuIiwiYXNDaGlsZCIsInR5cGUiLCJ2YXJpYW50IiwiY2xhc3NOYW1lIiwib25DbGljayIsIm1hcCIsInNlY3Rpb24iLCJpbmRleCIsImRpdiIsImgzIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/how-to-play-dialog.tsx\n"));

/***/ })

});