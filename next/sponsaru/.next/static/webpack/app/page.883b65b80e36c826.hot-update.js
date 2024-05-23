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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphology__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphology */ \"(app-pages-browser)/./node_modules/graphology/dist/graphology.umd.min.js\");\n/* harmony import */ var graphology__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphology__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var graphology_generators_random_clusters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphology-generators/random/clusters */ \"(app-pages-browser)/./node_modules/graphology-generators/random/clusters.js\");\n/* harmony import */ var graphology_generators_random_clusters__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphology_generators_random_clusters__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var graphology_layout_circlepack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphology-layout/circlepack */ \"(app-pages-browser)/./node_modules/graphology-layout/circlepack.js\");\n/* harmony import */ var graphology_layout_circlepack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphology_layout_circlepack__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! seedrandom */ \"(app-pages-browser)/./node_modules/seedrandom/index.js\");\n/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(seedrandom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var sigma__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sigma */ \"(app-pages-browser)/./node_modules/sigma/dist/sigma.esm.js\");\n/* harmony import */ var sigma_rendering__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sigma/rendering */ \"(app-pages-browser)/./node_modules/sigma/rendering/dist/sigma-rendering.esm.js\");\n/* harmony import */ var _sigma_node_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sigma/node-image */ \"(app-pages-browser)/./node_modules/@sigma/node-image/dist/sigma-node-image.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst SoloGraph2 = (param)=>{\n    let { args } = param;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const rng = seedrandom__WEBPACK_IMPORTED_MODULE_5___default()(\"sigma\");\n        const state = {\n            ...args\n        };\n        // 1. Generate a graph:\n        const graph = graphology_generators_random_clusters__WEBPACK_IMPORTED_MODULE_3___default()((graphology__WEBPACK_IMPORTED_MODULE_2___default()), {\n            ...state,\n            rng\n        });\n        graphology_layout_circlepack__WEBPACK_IMPORTED_MODULE_4___default().assign(graph, {\n            hierarchyAttributes: [\n                \"cluster\"\n            ]\n        });\n        const colors = {};\n        for(let i = 0; i < +state.clusters; i++){\n            colors[i] = \"#\" + Math.floor(rng() * 16777215).toString(16);\n        }\n        let i = 0;\n        graph.forEachNode((node, param)=>{\n            let { cluster } = param;\n            graph.mergeNodeAttributes(node, {\n                size: i * 5,\n                color: colors[cluster + \"\"],\n                image: \"/logo.webp\",\n                hiddenLabel: \"Node n\\xb0\".concat(++i, \", in cluster n\\xb0\").concat(cluster),\n                originalLabel: \"Node n\\xb0\".concat(++i, \", in cluster n\\xb0\").concat(cluster)\n            });\n        });\n        // 2. Render the graph:\n        const container = document.getElementById(\"solo-container\");\n        const renderer = new sigma__WEBPACK_IMPORTED_MODULE_7__[\"default\"](graph, container, {\n            defaultEdgeColor: \"rgba(0,0,0,0)\",\n            defaultEdgeType: state.edgesRenderer,\n            edgeProgramClasses: {\n                \"edges-default\": sigma_rendering__WEBPACK_IMPORTED_MODULE_6__.EdgeRectangleProgram,\n                \"edges-fast\": sigma_rendering__WEBPACK_IMPORTED_MODULE_6__.EdgeLineProgram\n            },\n            edgeLabelWeight: \"bold\",\n            defaultNodeType: \"image\",\n            nodeProgramClasses: {\n                image: _sigma_node_image__WEBPACK_IMPORTED_MODULE_8__.NodeImageProgram\n            }\n        });\n        // Cheap trick: tilt the camera a bit to make labels more readable:\n        renderer.getCamera().setState({\n            angle: 0.2\n        });\n        renderer.on(\"enterNode\", (param)=>{\n            let { node } = param;\n            graph.setNodeAttribute(node, \"label\", graph.getNodeAttribute(node, \"originalLabel\"));\n        });\n        // renderer.on('clickNode', ({ node, event }) => {\n        //   onNodeClick(graph, node, event);\n        // });\n        renderer.on(\"leaveNode\", (param)=>{\n            let { node } = param;\n            graph.removeNodeAttribute(node, \"label\");\n        });\n        // Cleanup function to remove event listeners\n        return ()=>{\n            renderer.kill();\n        };\n    }, [\n        args\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"solo-container\",\n            className: \"bg-white rounded-xl\",\n            style: {\n                width: \"100%\",\n                height: \"80vh\"\n            }\n        }, void 0, false, {\n            fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/solo-graph2.tsx\",\n            lineNumber: 93,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/solo-graph2.tsx\",\n        lineNumber: 92,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SoloGraph2, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = SoloGraph2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SoloGraph2);\nvar _c;\n$RefreshReg$(_c, \"SoloGraph2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3NvbG8tZ3JhcGgyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUErQztBQUNoQjtBQUM4QjtBQUVQO0FBQ2xCO0FBQ1Y7QUFDOEM7QUFFbkI7QUFXckQsTUFBTVMsYUFBd0M7UUFBQyxFQUFFQyxJQUFJLEVBQUU7O0lBQ3JEVixnREFBU0EsQ0FBQztRQUNSLE1BQU1XLE1BQU1QLGlEQUFVQSxDQUFDO1FBQ3ZCLE1BQU1RLFFBQVE7WUFDWixHQUFHRixJQUFJO1FBQ1Q7UUFFQSx1QkFBdUI7UUFDdkIsTUFBTUcsUUFBUVgsNEVBQVFBLENBQUNELG1EQUFLQSxFQUFFO1lBQUUsR0FBR1csS0FBSztZQUFFRDtRQUFJO1FBQzlDUiwwRUFBaUIsQ0FBQ1UsT0FBTztZQUN2QkUscUJBQXFCO2dCQUFDO2FBQVU7UUFDbEM7UUFFQSxNQUFNQyxTQUFpQyxDQUFDO1FBQ3hDLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJLENBQUNMLE1BQU1WLFFBQVEsRUFBRWUsSUFBSztZQUN4Q0QsTUFBTSxDQUFDQyxFQUFFLEdBQUcsTUFBTUMsS0FBS0MsS0FBSyxDQUFDUixRQUFRLFVBQVVTLFFBQVEsQ0FBQztRQUMxRDtRQUVBLElBQUlILElBQUk7UUFDUkosTUFBTVEsV0FBVyxDQUFDLENBQUNDO2dCQUFNLEVBQUVDLE9BQU8sRUFBRTtZQUNsQ1YsTUFBTVcsbUJBQW1CLENBQUNGLE1BQU07Z0JBQzlCRyxNQUFNUixJQUFJO2dCQUVWUyxPQUFPVixNQUFNLENBQUNPLFVBQVUsR0FBRztnQkFDM0JJLE9BQU87Z0JBQ1BDLGFBQWEsYUFBK0JMLE9BQXJCLEVBQUVOLEdBQUUsc0JBQXlCLE9BQVJNO2dCQUM1Q00sZUFBZSxhQUErQk4sT0FBckIsRUFBRU4sR0FBRSxzQkFBeUIsT0FBUk07WUFDaEQ7UUFDRjtRQUVBLHVCQUF1QjtRQUN2QixNQUFNTyxZQUFZQyxTQUFTQyxjQUFjLENBQUM7UUFDMUMsTUFBTUMsV0FBVyxJQUFJNUIsNkNBQUtBLENBQUNRLE9BQU9pQixXQUFXO1lBQzNDSSxrQkFBa0I7WUFDbEJDLGlCQUFpQnZCLE1BQU13QixhQUFhO1lBQ3BDQyxvQkFBb0I7Z0JBQ2xCLGlCQUFpQjlCLGlFQUFvQkE7Z0JBQ3JDLGNBQWNELDREQUFlQTtZQUMvQjtZQUNBZ0MsaUJBQWlCO1lBQ2pCQyxpQkFBaUI7WUFFakJDLG9CQUFvQjtnQkFDbEJiLE9BQU9uQiwrREFBZ0JBO1lBQ3pCO1FBQ0Y7UUFFQSxtRUFBbUU7UUFDbkV5QixTQUFTUSxTQUFTLEdBQUdDLFFBQVEsQ0FBQztZQUM1QkMsT0FBTztRQUNUO1FBRUFWLFNBQVNXLEVBQUUsQ0FBQyxhQUFhO2dCQUFDLEVBQUV0QixJQUFJLEVBQUU7WUFDaENULE1BQU1nQyxnQkFBZ0IsQ0FBQ3ZCLE1BQU0sU0FBU1QsTUFBTWlDLGdCQUFnQixDQUFDeEIsTUFBTTtRQUNyRTtRQUVBLGtEQUFrRDtRQUNsRCxxQ0FBcUM7UUFDckMsTUFBTTtRQUVOVyxTQUFTVyxFQUFFLENBQUMsYUFBYTtnQkFBQyxFQUFFdEIsSUFBSSxFQUFFO1lBQ2hDVCxNQUFNa0MsbUJBQW1CLENBQUN6QixNQUFNO1FBQ2xDO1FBRUEsNkNBQTZDO1FBQzdDLE9BQU87WUFDTFcsU0FBU2UsSUFBSTtRQUNmO0lBQ0YsR0FBRztRQUFDdEM7S0FBSztJQUVULHFCQUNFLDhEQUFDdUM7a0JBQ0MsNEVBQUNBO1lBQUlDLElBQUc7WUFBaUJDLFdBQVU7WUFBc0JDLE9BQU87Z0JBQUVDLE9BQU87Z0JBQVFDLFFBQVE7WUFBTzs7Ozs7Ozs7Ozs7QUFHdEc7R0EzRU03QztLQUFBQTtBQTZFTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zb2xvLWdyYXBoMi50c3g/NzMwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEdyYXBoIGZyb20gJ2dyYXBob2xvZ3knO1xuaW1wb3J0IGNsdXN0ZXJzIGZyb20gJ2dyYXBob2xvZ3ktZ2VuZXJhdG9ycy9yYW5kb20vY2x1c3RlcnMnO1xuXG5pbXBvcnQgY2lyY2xlcGFjayBmcm9tICdncmFwaG9sb2d5LWxheW91dC9jaXJjbGVwYWNrJztcbmltcG9ydCBzZWVkcmFuZG9tIGZyb20gJ3NlZWRyYW5kb20nO1xuaW1wb3J0IFNpZ21hIGZyb20gJ3NpZ21hJztcbmltcG9ydCB7IEVkZ2VMaW5lUHJvZ3JhbSwgRWRnZVJlY3RhbmdsZVByb2dyYW0gfSBmcm9tICdzaWdtYS9yZW5kZXJpbmcnO1xuaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4vc29sby1ncmFwaCc7XG5pbXBvcnQgeyBOb2RlSW1hZ2VQcm9ncmFtIH0gZnJvbSAnQHNpZ21hL25vZGUtaW1hZ2UnO1xuXG5pbnRlcmZhY2UgU29sb0dyYXBoMlByb3BzIHtcbiAgYXJnczoge1xuICAgIGNsdXN0ZXJzOiBudW1iZXI7XG4gICAgZWRnZXNSZW5kZXJlcjogc3RyaW5nO1xuICAgIHNpemU6IG51bWJlcjtcbiAgICBvcmRlcjogbnVtYmVyO1xuICB9O1xufVxuXG5jb25zdCBTb2xvR3JhcGgyOiBSZWFjdC5GQzxTb2xvR3JhcGgyUHJvcHM+ID0gKHsgYXJncyB9KSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgcm5nID0gc2VlZHJhbmRvbSgnc2lnbWEnKTtcbiAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgIC4uLmFyZ3MsXG4gICAgfTtcblxuICAgIC8vIDEuIEdlbmVyYXRlIGEgZ3JhcGg6XG4gICAgY29uc3QgZ3JhcGggPSBjbHVzdGVycyhHcmFwaCwgeyAuLi5zdGF0ZSwgcm5nIH0pO1xuICAgIGNpcmNsZXBhY2suYXNzaWduKGdyYXBoLCB7XG4gICAgICBoaWVyYXJjaHlBdHRyaWJ1dGVzOiBbJ2NsdXN0ZXInXSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbG9yczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgK3N0YXRlLmNsdXN0ZXJzOyBpKyspIHtcbiAgICAgIGNvbG9yc1tpXSA9ICcjJyArIE1hdGguZmxvb3Iocm5nKCkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpO1xuICAgIH1cblxuICAgIGxldCBpID0gMDtcbiAgICBncmFwaC5mb3JFYWNoTm9kZSgobm9kZSwgeyBjbHVzdGVyIH0pID0+IHtcbiAgICAgIGdyYXBoLm1lcmdlTm9kZUF0dHJpYnV0ZXMobm9kZSwge1xuICAgICAgICBzaXplOiBpICogNSxcblxuICAgICAgICBjb2xvcjogY29sb3JzW2NsdXN0ZXIgKyAnJ10sXG4gICAgICAgIGltYWdlOiAnL2xvZ28ud2VicCcsXG4gICAgICAgIGhpZGRlbkxhYmVsOiBgTm9kZSBuwrAkeysraX0sIGluIGNsdXN0ZXIgbsKwJHtjbHVzdGVyfWAsXG4gICAgICAgIG9yaWdpbmFsTGFiZWw6IGBOb2RlIG7CsCR7KytpfSwgaW4gY2x1c3RlciBuwrAke2NsdXN0ZXJ9YCxcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gMi4gUmVuZGVyIHRoZSBncmFwaDpcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc29sby1jb250YWluZXInKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCByZW5kZXJlciA9IG5ldyBTaWdtYShncmFwaCwgY29udGFpbmVyLCB7XG4gICAgICBkZWZhdWx0RWRnZUNvbG9yOiAncmdiYSgwLDAsMCwwKScsXG4gICAgICBkZWZhdWx0RWRnZVR5cGU6IHN0YXRlLmVkZ2VzUmVuZGVyZXIsXG4gICAgICBlZGdlUHJvZ3JhbUNsYXNzZXM6IHtcbiAgICAgICAgJ2VkZ2VzLWRlZmF1bHQnOiBFZGdlUmVjdGFuZ2xlUHJvZ3JhbSxcbiAgICAgICAgJ2VkZ2VzLWZhc3QnOiBFZGdlTGluZVByb2dyYW0sXG4gICAgICB9LFxuICAgICAgZWRnZUxhYmVsV2VpZ2h0OiAnYm9sZCcsXG4gICAgICBkZWZhdWx0Tm9kZVR5cGU6ICdpbWFnZScsXG5cbiAgICAgIG5vZGVQcm9ncmFtQ2xhc3Nlczoge1xuICAgICAgICBpbWFnZTogTm9kZUltYWdlUHJvZ3JhbSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAvLyBDaGVhcCB0cmljazogdGlsdCB0aGUgY2FtZXJhIGEgYml0IHRvIG1ha2UgbGFiZWxzIG1vcmUgcmVhZGFibGU6XG4gICAgcmVuZGVyZXIuZ2V0Q2FtZXJhKCkuc2V0U3RhdGUoe1xuICAgICAgYW5nbGU6IDAuMixcbiAgICB9KTtcblxuICAgIHJlbmRlcmVyLm9uKCdlbnRlck5vZGUnLCAoeyBub2RlIH0pID0+IHtcbiAgICAgIGdyYXBoLnNldE5vZGVBdHRyaWJ1dGUobm9kZSwgJ2xhYmVsJywgZ3JhcGguZ2V0Tm9kZUF0dHJpYnV0ZShub2RlLCAnb3JpZ2luYWxMYWJlbCcpKTtcbiAgICB9KTtcblxuICAgIC8vIHJlbmRlcmVyLm9uKCdjbGlja05vZGUnLCAoeyBub2RlLCBldmVudCB9KSA9PiB7XG4gICAgLy8gICBvbk5vZGVDbGljayhncmFwaCwgbm9kZSwgZXZlbnQpO1xuICAgIC8vIH0pO1xuXG4gICAgcmVuZGVyZXIub24oJ2xlYXZlTm9kZScsICh7IG5vZGUgfSkgPT4ge1xuICAgICAgZ3JhcGgucmVtb3ZlTm9kZUF0dHJpYnV0ZShub2RlLCAnbGFiZWwnKTtcbiAgICB9KTtcblxuICAgIC8vIENsZWFudXAgZnVuY3Rpb24gdG8gcmVtb3ZlIGV2ZW50IGxpc3RlbmVyc1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByZW5kZXJlci5raWxsKCk7XG4gICAgfTtcbiAgfSwgW2FyZ3NdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGlkPVwic29sby1jb250YWluZXJcIiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLXhsXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnODB2aCcgfX0+PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTb2xvR3JhcGgyO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIkdyYXBoIiwiY2x1c3RlcnMiLCJjaXJjbGVwYWNrIiwic2VlZHJhbmRvbSIsIlNpZ21hIiwiRWRnZUxpbmVQcm9ncmFtIiwiRWRnZVJlY3RhbmdsZVByb2dyYW0iLCJOb2RlSW1hZ2VQcm9ncmFtIiwiU29sb0dyYXBoMiIsImFyZ3MiLCJybmciLCJzdGF0ZSIsImdyYXBoIiwiYXNzaWduIiwiaGllcmFyY2h5QXR0cmlidXRlcyIsImNvbG9ycyIsImkiLCJNYXRoIiwiZmxvb3IiLCJ0b1N0cmluZyIsImZvckVhY2hOb2RlIiwibm9kZSIsImNsdXN0ZXIiLCJtZXJnZU5vZGVBdHRyaWJ1dGVzIiwic2l6ZSIsImNvbG9yIiwiaW1hZ2UiLCJoaWRkZW5MYWJlbCIsIm9yaWdpbmFsTGFiZWwiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyZXIiLCJkZWZhdWx0RWRnZUNvbG9yIiwiZGVmYXVsdEVkZ2VUeXBlIiwiZWRnZXNSZW5kZXJlciIsImVkZ2VQcm9ncmFtQ2xhc3NlcyIsImVkZ2VMYWJlbFdlaWdodCIsImRlZmF1bHROb2RlVHlwZSIsIm5vZGVQcm9ncmFtQ2xhc3NlcyIsImdldENhbWVyYSIsInNldFN0YXRlIiwiYW5nbGUiLCJvbiIsInNldE5vZGVBdHRyaWJ1dGUiLCJnZXROb2RlQXR0cmlidXRlIiwicmVtb3ZlTm9kZUF0dHJpYnV0ZSIsImtpbGwiLCJkaXYiLCJpZCIsImNsYXNzTmFtZSIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/solo-graph2.tsx\n"));

/***/ })

});