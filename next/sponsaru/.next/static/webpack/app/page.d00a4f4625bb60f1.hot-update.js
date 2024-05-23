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

/***/ "(app-pages-browser)/./src/components/solo-graph2.tsx":
/*!****************************************!*\
  !*** ./src/components/solo-graph2.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphology__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphology */ \"(app-pages-browser)/./node_modules/graphology/dist/graphology.umd.min.js\");\n/* harmony import */ var graphology__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphology__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var graphology_generators_random_clusters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphology-generators/random/clusters */ \"(app-pages-browser)/./node_modules/graphology-generators/random/clusters.js\");\n/* harmony import */ var graphology_generators_random_clusters__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphology_generators_random_clusters__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var graphology_layout_circlepack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphology-layout/circlepack */ \"(app-pages-browser)/./node_modules/graphology-layout/circlepack.js\");\n/* harmony import */ var graphology_layout_circlepack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphology_layout_circlepack__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! seedrandom */ \"(app-pages-browser)/./node_modules/seedrandom/index.js\");\n/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(seedrandom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var sigma__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sigma */ \"(app-pages-browser)/./node_modules/sigma/dist/sigma.esm.js\");\n/* harmony import */ var sigma_rendering__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sigma/rendering */ \"(app-pages-browser)/./node_modules/sigma/rendering/dist/sigma-rendering.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst SoloGraph2 = (param)=>{\n    let { args } = param;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const rng = seedrandom__WEBPACK_IMPORTED_MODULE_5___default()(\"sigma\");\n        const state = {\n            ...args\n        };\n        // 1. Generate a graph:\n        const graph = graphology_generators_random_clusters__WEBPACK_IMPORTED_MODULE_3___default()((graphology__WEBPACK_IMPORTED_MODULE_2___default()), {\n            ...state,\n            rng\n        });\n        graphology_layout_circlepack__WEBPACK_IMPORTED_MODULE_4___default().assign(graph, {\n            hierarchyAttributes: [\n                \"cluster\"\n            ]\n        });\n        const colors = {};\n        for(let i = 0; i < +state.clusters; i++){\n            colors[i] = \"#\" + Math.floor(rng() * 16777215).toString(16);\n        }\n        let i = 0;\n        graph.forEachNode((node, param)=>{\n            let { cluster } = param;\n            graph.mergeNodeAttributes(node, {\n                size: graph.degree(node) / 3,\n                label: \"Node n\\xb0\".concat(++i, \", in cluster n\\xb0\").concat(cluster),\n                color: colors[cluster + \"\"]\n            });\n        });\n        // 2. Render the graph:\n        const container = document.getElementById(\"solo-container\");\n        const renderer = new sigma__WEBPACK_IMPORTED_MODULE_7__[\"default\"](graph, container, {\n            defaultEdgeColor: \"rgba(0,0,0,0)\",\n            defaultEdgeType: state.edgesRenderer,\n            edgeProgramClasses: {\n                \"edges-default\": sigma_rendering__WEBPACK_IMPORTED_MODULE_6__.EdgeRectangleProgram,\n                \"edges-fast\": sigma_rendering__WEBPACK_IMPORTED_MODULE_6__.EdgeLineProgram\n            }\n        });\n        // Cheap trick: tilt the camera a bit to make labels more readable:\n        renderer.getCamera().setState({\n            angle: 0.2\n        });\n        // Cleanup function to remove event listeners\n        return ()=>{\n            renderer.kill();\n        };\n    }, [\n        args\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"solo-container\",\n            className: \"bg-white rounded-xl\",\n            style: {\n                width: \"100%\",\n                height: \"80vh\"\n            }\n        }, void 0, false, {\n            fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/solo-graph2.tsx\",\n            lineNumber: 66,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/solo-graph2.tsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SoloGraph2, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = SoloGraph2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SoloGraph2);\nvar _c;\n$RefreshReg$(_c, \"SoloGraph2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3NvbG8tZ3JhcGgyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ0g7QUFDOEI7QUFFUDtBQUNsQjtBQUNWO0FBQzhDO0FBTXhFLE1BQU1RLGFBQXdDO1FBQUMsRUFBRUMsSUFBSSxFQUFFOztJQUNyRFQsZ0RBQVNBLENBQUM7UUFDUixNQUFNVSxNQUFNTixpREFBVUEsQ0FBQztRQUN2QixNQUFNTyxRQUFRO1lBQ1osR0FBR0YsSUFBSTtRQUNUO1FBRUEsdUJBQXVCO1FBQ3ZCLE1BQU1HLFFBQVFWLDRFQUFRQSxDQUFDRCxtREFBS0EsRUFBRTtZQUFFLEdBQUdVLEtBQUs7WUFBRUQ7UUFBSTtRQUM5Q1AsMEVBQWlCLENBQUNTLE9BQU87WUFDdkJFLHFCQUFxQjtnQkFBQzthQUFVO1FBQ2xDO1FBRUEsTUFBTUMsU0FBaUMsQ0FBQztRQUN4QyxJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSSxDQUFDTCxNQUFNVCxRQUFRLEVBQUVjLElBQUs7WUFDeENELE1BQU0sQ0FBQ0MsRUFBRSxHQUFHLE1BQU1DLEtBQUtDLEtBQUssQ0FBQ1IsUUFBUSxVQUFVUyxRQUFRLENBQUM7UUFDMUQ7UUFFQSxJQUFJSCxJQUFJO1FBQ1JKLE1BQU1RLFdBQVcsQ0FBQyxDQUFDQztnQkFBTSxFQUFFQyxPQUFPLEVBQUU7WUFDbENWLE1BQU1XLG1CQUFtQixDQUFDRixNQUFNO2dCQUM5QkcsTUFBTVosTUFBTWEsTUFBTSxDQUFDSixRQUFRO2dCQUMzQkssT0FBTyxhQUErQkosT0FBckIsRUFBRU4sR0FBRSxzQkFBeUIsT0FBUk07Z0JBQ3RDSyxPQUFPWixNQUFNLENBQUNPLFVBQVUsR0FBRztZQUM3QjtRQUNGO1FBRUEsdUJBQXVCO1FBQ3ZCLE1BQU1NLFlBQVlDLFNBQVNDLGNBQWMsQ0FBQztRQUMxQyxNQUFNQyxXQUFXLElBQUkxQiw2Q0FBS0EsQ0FBQ08sT0FBT2dCLFdBQVc7WUFDM0NJLGtCQUFrQjtZQUNsQkMsaUJBQWlCdEIsTUFBTXVCLGFBQWE7WUFFcENDLG9CQUFvQjtnQkFDbEIsaUJBQWlCNUIsaUVBQW9CQTtnQkFDckMsY0FBY0QsNERBQWVBO1lBQy9CO1FBQ0Y7UUFFQSxtRUFBbUU7UUFDbkV5QixTQUFTSyxTQUFTLEdBQUdDLFFBQVEsQ0FBQztZQUM1QkMsT0FBTztRQUNUO1FBRUEsNkNBQTZDO1FBQzdDLE9BQU87WUFDTFAsU0FBU1EsSUFBSTtRQUNmO0lBQ0YsR0FBRztRQUFDOUI7S0FBSztJQUVULHFCQUNFLDhEQUFDK0I7a0JBQ0MsNEVBQUNBO1lBQUlDLElBQUc7WUFBaUJDLFdBQVU7WUFBc0JDLE9BQU87Z0JBQUVDLE9BQU87Z0JBQVFDLFFBQVE7WUFBTzs7Ozs7Ozs7Ozs7QUFHdEc7R0F2RE1yQztLQUFBQTtBQXlETiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zb2xvLWdyYXBoMi50c3g/NzMwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgR3JhcGggZnJvbSAnZ3JhcGhvbG9neSc7XG5pbXBvcnQgY2x1c3RlcnMgZnJvbSAnZ3JhcGhvbG9neS1nZW5lcmF0b3JzL3JhbmRvbS9jbHVzdGVycyc7XG5cbmltcG9ydCBjaXJjbGVwYWNrIGZyb20gJ2dyYXBob2xvZ3ktbGF5b3V0L2NpcmNsZXBhY2snO1xuaW1wb3J0IHNlZWRyYW5kb20gZnJvbSAnc2VlZHJhbmRvbSc7XG5pbXBvcnQgU2lnbWEgZnJvbSAnc2lnbWEnO1xuaW1wb3J0IHsgRWRnZUxpbmVQcm9ncmFtLCBFZGdlUmVjdGFuZ2xlUHJvZ3JhbSB9IGZyb20gJ3NpZ21hL3JlbmRlcmluZyc7XG5cbmludGVyZmFjZSBTb2xvR3JhcGgyUHJvcHMge1xuICBhcmdzOiB0eXBlb2YgREVGQVVMVF9BUkdTO1xufVxuXG5jb25zdCBTb2xvR3JhcGgyOiBSZWFjdC5GQzxTb2xvR3JhcGgyUHJvcHM+ID0gKHsgYXJncyB9KSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgcm5nID0gc2VlZHJhbmRvbSgnc2lnbWEnKTtcbiAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgIC4uLmFyZ3MsXG4gICAgfTtcblxuICAgIC8vIDEuIEdlbmVyYXRlIGEgZ3JhcGg6XG4gICAgY29uc3QgZ3JhcGggPSBjbHVzdGVycyhHcmFwaCwgeyAuLi5zdGF0ZSwgcm5nIH0pO1xuICAgIGNpcmNsZXBhY2suYXNzaWduKGdyYXBoLCB7XG4gICAgICBoaWVyYXJjaHlBdHRyaWJ1dGVzOiBbJ2NsdXN0ZXInXSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbG9yczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgK3N0YXRlLmNsdXN0ZXJzOyBpKyspIHtcbiAgICAgIGNvbG9yc1tpXSA9ICcjJyArIE1hdGguZmxvb3Iocm5nKCkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpO1xuICAgIH1cblxuICAgIGxldCBpID0gMDtcbiAgICBncmFwaC5mb3JFYWNoTm9kZSgobm9kZSwgeyBjbHVzdGVyIH0pID0+IHtcbiAgICAgIGdyYXBoLm1lcmdlTm9kZUF0dHJpYnV0ZXMobm9kZSwge1xuICAgICAgICBzaXplOiBncmFwaC5kZWdyZWUobm9kZSkgLyAzLFxuICAgICAgICBsYWJlbDogYE5vZGUgbsKwJHsrK2l9LCBpbiBjbHVzdGVyIG7CsCR7Y2x1c3Rlcn1gLFxuICAgICAgICBjb2xvcjogY29sb3JzW2NsdXN0ZXIgKyAnJ10sXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIDIuIFJlbmRlciB0aGUgZ3JhcGg6XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NvbG8tY29udGFpbmVyJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgU2lnbWEoZ3JhcGgsIGNvbnRhaW5lciwge1xuICAgICAgZGVmYXVsdEVkZ2VDb2xvcjogJ3JnYmEoMCwwLDAsMCknLFxuICAgICAgZGVmYXVsdEVkZ2VUeXBlOiBzdGF0ZS5lZGdlc1JlbmRlcmVyLFxuXG4gICAgICBlZGdlUHJvZ3JhbUNsYXNzZXM6IHtcbiAgICAgICAgJ2VkZ2VzLWRlZmF1bHQnOiBFZGdlUmVjdGFuZ2xlUHJvZ3JhbSxcbiAgICAgICAgJ2VkZ2VzLWZhc3QnOiBFZGdlTGluZVByb2dyYW0sXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgLy8gQ2hlYXAgdHJpY2s6IHRpbHQgdGhlIGNhbWVyYSBhIGJpdCB0byBtYWtlIGxhYmVscyBtb3JlIHJlYWRhYmxlOlxuICAgIHJlbmRlcmVyLmdldENhbWVyYSgpLnNldFN0YXRlKHtcbiAgICAgIGFuZ2xlOiAwLjIsXG4gICAgfSk7XG5cbiAgICAvLyBDbGVhbnVwIGZ1bmN0aW9uIHRvIHJlbW92ZSBldmVudCBsaXN0ZW5lcnNcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcmVuZGVyZXIua2lsbCgpO1xuICAgIH07XG4gIH0sIFthcmdzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBpZD1cInNvbG8tY29udGFpbmVyXCIgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC14bFwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzgwdmgnIH19PjwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU29sb0dyYXBoMjtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJHcmFwaCIsImNsdXN0ZXJzIiwiY2lyY2xlcGFjayIsInNlZWRyYW5kb20iLCJTaWdtYSIsIkVkZ2VMaW5lUHJvZ3JhbSIsIkVkZ2VSZWN0YW5nbGVQcm9ncmFtIiwiU29sb0dyYXBoMiIsImFyZ3MiLCJybmciLCJzdGF0ZSIsImdyYXBoIiwiYXNzaWduIiwiaGllcmFyY2h5QXR0cmlidXRlcyIsImNvbG9ycyIsImkiLCJNYXRoIiwiZmxvb3IiLCJ0b1N0cmluZyIsImZvckVhY2hOb2RlIiwibm9kZSIsImNsdXN0ZXIiLCJtZXJnZU5vZGVBdHRyaWJ1dGVzIiwic2l6ZSIsImRlZ3JlZSIsImxhYmVsIiwiY29sb3IiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyZXIiLCJkZWZhdWx0RWRnZUNvbG9yIiwiZGVmYXVsdEVkZ2VUeXBlIiwiZWRnZXNSZW5kZXJlciIsImVkZ2VQcm9ncmFtQ2xhc3NlcyIsImdldENhbWVyYSIsInNldFN0YXRlIiwiYW5nbGUiLCJraWxsIiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/solo-graph2.tsx\n"));

/***/ })

});