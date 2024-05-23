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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphology__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphology */ \"(app-pages-browser)/./node_modules/graphology/dist/graphology.umd.min.js\");\n/* harmony import */ var graphology__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphology__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var graphology_generators_random_clusters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphology-generators/random/clusters */ \"(app-pages-browser)/./node_modules/graphology-generators/random/clusters.js\");\n/* harmony import */ var graphology_generators_random_clusters__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphology_generators_random_clusters__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var graphology_layout_circlepack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphology-layout/circlepack */ \"(app-pages-browser)/./node_modules/graphology-layout/circlepack.js\");\n/* harmony import */ var graphology_layout_circlepack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphology_layout_circlepack__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! seedrandom */ \"(app-pages-browser)/./node_modules/seedrandom/index.js\");\n/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(seedrandom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var sigma__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sigma */ \"(app-pages-browser)/./node_modules/sigma/dist/sigma.esm.js\");\n/* harmony import */ var sigma_rendering__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sigma/rendering */ \"(app-pages-browser)/./node_modules/sigma/rendering/dist/sigma-rendering.esm.js\");\n/* harmony import */ var _sigma_node_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sigma/node-image */ \"(app-pages-browser)/./node_modules/@sigma/node-image/dist/sigma-node-image.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst SoloGraph2 = (param)=>{\n    let { args } = param;\n    _s();\n    const drawNodes = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((node, ctx)=>{\n        ctx.save();\n        ctx.beginPath();\n        const radius = 4.1 * 1.4;\n        var _node_x, _node_y;\n        ctx.arc((_node_x = node === null || node === void 0 ? void 0 : node.x) !== null && _node_x !== void 0 ? _node_x : 0, (_node_y = node === null || node === void 0 ? void 0 : node.y) !== null && _node_y !== void 0 ? _node_y : 0, radius, 0, 2 * Math.PI, true);\n        ctx.fill();\n        const img = new Image();\n        img.src = \"/logo.webp\";\n        const size = radius * 10;\n        var _node_x1, _node_y1;\n        ctx.drawImage(img, ((_node_x1 = node === null || node === void 0 ? void 0 : node.x) !== null && _node_x1 !== void 0 ? _node_x1 : 0) - size / 2, ((_node_y1 = node === null || node === void 0 ? void 0 : node.y) !== null && _node_y1 !== void 0 ? _node_y1 : 0) - size / 2, size, size);\n        ctx.restore();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const rng = seedrandom__WEBPACK_IMPORTED_MODULE_5___default()(\"sigma\");\n        const state = {\n            ...args\n        };\n        // 1. Generate a graph:\n        const graph = graphology_generators_random_clusters__WEBPACK_IMPORTED_MODULE_3___default()((graphology__WEBPACK_IMPORTED_MODULE_2___default()), {\n            ...state,\n            rng\n        });\n        graphology_layout_circlepack__WEBPACK_IMPORTED_MODULE_4___default().assign(graph, {\n            hierarchyAttributes: [\n                \"cluster\"\n            ]\n        });\n        const colors = {};\n        for(let i = 0; i < +state.clusters; i++){\n            colors[i] = \"#\" + Math.floor(rng() * 16777215).toString(16);\n        }\n        let i = 0;\n        graph.forEachNode((node, param)=>{\n            let { cluster } = param;\n            graph.mergeNodeAttributes(node, {\n                size: graph.degree(node) / 3,\n                label: \"Node n\\xb0\".concat(++i, \", in cluster n\\xb0\").concat(cluster),\n                color: colors[cluster + \"\"]\n            });\n        });\n        // 2. Render the graph:\n        const container = document.getElementById(\"solo-container\");\n        const renderer = new sigma__WEBPACK_IMPORTED_MODULE_7__[\"default\"](graph, container, {\n            defaultEdgeColor: \"rgba(0,0,0,0)\",\n            defaultEdgeType: state.edgesRenderer,\n            edgeProgramClasses: {\n                \"edges-default\": sigma_rendering__WEBPACK_IMPORTED_MODULE_6__.EdgeRectangleProgram,\n                \"edges-fast\": sigma_rendering__WEBPACK_IMPORTED_MODULE_6__.EdgeLineProgram\n            },\n            defaultNodeType: \"image\",\n            nodeProgramClasses: {\n                image: _sigma_node_image__WEBPACK_IMPORTED_MODULE_8__.NodeImageProgram\n            }\n        });\n        // Cheap trick: tilt the camera a bit to make labels more readable:\n        renderer.getCamera().setState({\n            angle: 0.2\n        });\n        // Cleanup function to remove event listeners\n        return ()=>{\n            renderer.kill();\n        };\n    }, [\n        args\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"solo-container\",\n            className: \"bg-white rounded-xl\",\n            style: {\n                width: \"100%\",\n                height: \"80vh\"\n            }\n        }, void 0, false, {\n            fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/solo-graph2.tsx\",\n            lineNumber: 91,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/rafael/work/buddy-link/buddy-ts-examples/next/sponsaru/src/components/solo-graph2.tsx\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SoloGraph2, \"mn1hePJBVhJWa/30De3wMmtwuXc=\");\n_c = SoloGraph2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SoloGraph2);\nvar _c;\n$RefreshReg$(_c, \"SoloGraph2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3NvbG8tZ3JhcGgyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUErQztBQUNoQjtBQUM4QjtBQUVQO0FBQ2xCO0FBQ1Y7QUFDOEM7QUFFbkI7QUFXckQsTUFBTVUsYUFBd0M7UUFBQyxFQUFFQyxJQUFJLEVBQUU7O0lBQ3JELE1BQU1DLFlBQVlaLGtEQUFXQSxDQUFDLENBQUNhLE1BQVlDO1FBQ3pDQSxJQUFJQyxJQUFJO1FBQ1JELElBQUlFLFNBQVM7UUFDYixNQUFNQyxTQUFTLE1BQU07WUFDYkosU0FBY0E7UUFBdEJDLElBQUlJLEdBQUcsQ0FBQ0wsQ0FBQUEsVUFBQUEsaUJBQUFBLDJCQUFBQSxLQUFNTSxDQUFDLGNBQVBOLHFCQUFBQSxVQUFXLEdBQUdBLENBQUFBLFVBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTU8sQ0FBQyxjQUFQUCxxQkFBQUEsVUFBVyxHQUFHSSxRQUFRLEdBQUcsSUFBSUksS0FBS0MsRUFBRSxFQUFFO1FBRTVEUixJQUFJUyxJQUFJO1FBRVIsTUFBTUMsTUFBTSxJQUFJQztRQUNoQkQsSUFBSUUsR0FBRyxHQUFHO1FBQ1YsTUFBTUMsT0FBT1YsU0FBUztZQUNGSixVQUEyQkE7UUFBL0NDLElBQUljLFNBQVMsQ0FBQ0osS0FBSyxDQUFDWCxDQUFBQSxXQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU1NLENBQUMsY0FBUE4sc0JBQUFBLFdBQVcsS0FBS2MsT0FBTyxHQUFHLENBQUNkLENBQUFBLFdBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTU8sQ0FBQyxjQUFQUCxzQkFBQUEsV0FBVyxLQUFLYyxPQUFPLEdBQUdBLE1BQU1BO1FBQy9FYixJQUFJZSxPQUFPO0lBQ2IsR0FBRyxFQUFFO0lBRUw1QixnREFBU0EsQ0FBQztRQUNSLE1BQU02QixNQUFNekIsaURBQVVBLENBQUM7UUFDdkIsTUFBTTBCLFFBQVE7WUFDWixHQUFHcEIsSUFBSTtRQUNUO1FBRUEsdUJBQXVCO1FBQ3ZCLE1BQU1xQixRQUFRN0IsNEVBQVFBLENBQUNELG1EQUFLQSxFQUFFO1lBQUUsR0FBRzZCLEtBQUs7WUFBRUQ7UUFBSTtRQUM5QzFCLDBFQUFpQixDQUFDNEIsT0FBTztZQUN2QkUscUJBQXFCO2dCQUFDO2FBQVU7UUFDbEM7UUFFQSxNQUFNQyxTQUFpQyxDQUFDO1FBQ3hDLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJLENBQUNMLE1BQU01QixRQUFRLEVBQUVpQyxJQUFLO1lBQ3hDRCxNQUFNLENBQUNDLEVBQUUsR0FBRyxNQUFNZixLQUFLZ0IsS0FBSyxDQUFDUCxRQUFRLFVBQVVRLFFBQVEsQ0FBQztRQUMxRDtRQUVBLElBQUlGLElBQUk7UUFDUkosTUFBTU8sV0FBVyxDQUFDLENBQUMxQjtnQkFBTSxFQUFFMkIsT0FBTyxFQUFFO1lBQ2xDUixNQUFNUyxtQkFBbUIsQ0FBQzVCLE1BQU07Z0JBQzlCYyxNQUFNSyxNQUFNVSxNQUFNLENBQUM3QixRQUFRO2dCQUMzQjhCLE9BQU8sYUFBK0JILE9BQXJCLEVBQUVKLEdBQUUsc0JBQXlCLE9BQVJJO2dCQUN0Q0ksT0FBT1QsTUFBTSxDQUFDSyxVQUFVLEdBQUc7WUFDN0I7UUFDRjtRQUVBLHVCQUF1QjtRQUN2QixNQUFNSyxZQUFZQyxTQUFTQyxjQUFjLENBQUM7UUFDMUMsTUFBTUMsV0FBVyxJQUFJMUMsNkNBQUtBLENBQUMwQixPQUFPYSxXQUFXO1lBQzNDSSxrQkFBa0I7WUFDbEJDLGlCQUFpQm5CLE1BQU1vQixhQUFhO1lBQ3BDQyxvQkFBb0I7Z0JBQ2xCLGlCQUFpQjVDLGlFQUFvQkE7Z0JBQ3JDLGNBQWNELDREQUFlQTtZQUMvQjtZQUNBOEMsaUJBQWlCO1lBQ2pCQyxvQkFBb0I7Z0JBQ2xCQyxPQUFPOUMsK0RBQWdCQTtZQUN6QjtRQUNGO1FBRUEsbUVBQW1FO1FBQ25FdUMsU0FBU1EsU0FBUyxHQUFHQyxRQUFRLENBQUM7WUFDNUJDLE9BQU87UUFDVDtRQUVBLDZDQUE2QztRQUM3QyxPQUFPO1lBQ0xWLFNBQVNXLElBQUk7UUFDZjtJQUNGLEdBQUc7UUFBQ2hEO0tBQUs7SUFFVCxxQkFDRSw4REFBQ2lEO2tCQUNDLDRFQUFDQTtZQUFJQyxJQUFHO1lBQWlCQyxXQUFVO1lBQXNCQyxPQUFPO2dCQUFFQyxPQUFPO2dCQUFRQyxRQUFRO1lBQU87Ozs7Ozs7Ozs7O0FBR3RHO0dBekVNdkQ7S0FBQUE7QUEyRU4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc29sby1ncmFwaDIudHN4PzczMDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBHcmFwaCBmcm9tICdncmFwaG9sb2d5JztcbmltcG9ydCBjbHVzdGVycyBmcm9tICdncmFwaG9sb2d5LWdlbmVyYXRvcnMvcmFuZG9tL2NsdXN0ZXJzJztcblxuaW1wb3J0IGNpcmNsZXBhY2sgZnJvbSAnZ3JhcGhvbG9neS1sYXlvdXQvY2lyY2xlcGFjayc7XG5pbXBvcnQgc2VlZHJhbmRvbSBmcm9tICdzZWVkcmFuZG9tJztcbmltcG9ydCBTaWdtYSBmcm9tICdzaWdtYSc7XG5pbXBvcnQgeyBFZGdlTGluZVByb2dyYW0sIEVkZ2VSZWN0YW5nbGVQcm9ncmFtIH0gZnJvbSAnc2lnbWEvcmVuZGVyaW5nJztcbmltcG9ydCB7IE5vZGUgfSBmcm9tICcuL3NvbG8tZ3JhcGgnO1xuaW1wb3J0IHsgTm9kZUltYWdlUHJvZ3JhbSB9IGZyb20gJ0BzaWdtYS9ub2RlLWltYWdlJztcblxuaW50ZXJmYWNlIFNvbG9HcmFwaDJQcm9wcyB7XG4gIGFyZ3M6IHtcbiAgICBjbHVzdGVyczogbnVtYmVyO1xuICAgIGVkZ2VzUmVuZGVyZXI6IHN0cmluZztcbiAgICBzaXplOiBudW1iZXI7XG4gICAgb3JkZXI6IG51bWJlcjtcbiAgfTtcbn1cblxuY29uc3QgU29sb0dyYXBoMjogUmVhY3QuRkM8U29sb0dyYXBoMlByb3BzPiA9ICh7IGFyZ3MgfSkgPT4ge1xuICBjb25zdCBkcmF3Tm9kZXMgPSB1c2VDYWxsYmFjaygobm9kZTogTm9kZSwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHtcbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjb25zdCByYWRpdXMgPSA0LjEgKiAxLjQ7XG4gICAgY3R4LmFyYyhub2RlPy54ID8/IDAsIG5vZGU/LnkgPz8gMCwgcmFkaXVzLCAwLCAyICogTWF0aC5QSSwgdHJ1ZSk7XG5cbiAgICBjdHguZmlsbCgpO1xuXG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9ICcvbG9nby53ZWJwJztcbiAgICBjb25zdCBzaXplID0gcmFkaXVzICogMTA7XG4gICAgY3R4LmRyYXdJbWFnZShpbWcsIChub2RlPy54ID8/IDApIC0gc2l6ZSAvIDIsIChub2RlPy55ID8/IDApIC0gc2l6ZSAvIDIsIHNpemUsIHNpemUpO1xuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHJuZyA9IHNlZWRyYW5kb20oJ3NpZ21hJyk7XG4gICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAuLi5hcmdzLFxuICAgIH07XG5cbiAgICAvLyAxLiBHZW5lcmF0ZSBhIGdyYXBoOlxuICAgIGNvbnN0IGdyYXBoID0gY2x1c3RlcnMoR3JhcGgsIHsgLi4uc3RhdGUsIHJuZyB9KTtcbiAgICBjaXJjbGVwYWNrLmFzc2lnbihncmFwaCwge1xuICAgICAgaGllcmFyY2h5QXR0cmlidXRlczogWydjbHVzdGVyJ10sXG4gICAgfSk7XG5cbiAgICBjb25zdCBjb2xvcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8ICtzdGF0ZS5jbHVzdGVyczsgaSsrKSB7XG4gICAgICBjb2xvcnNbaV0gPSAnIycgKyBNYXRoLmZsb29yKHJuZygpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KTtcbiAgICB9XG5cbiAgICBsZXQgaSA9IDA7XG4gICAgZ3JhcGguZm9yRWFjaE5vZGUoKG5vZGUsIHsgY2x1c3RlciB9KSA9PiB7XG4gICAgICBncmFwaC5tZXJnZU5vZGVBdHRyaWJ1dGVzKG5vZGUsIHtcbiAgICAgICAgc2l6ZTogZ3JhcGguZGVncmVlKG5vZGUpIC8gMyxcbiAgICAgICAgbGFiZWw6IGBOb2RlIG7CsCR7KytpfSwgaW4gY2x1c3RlciBuwrAke2NsdXN0ZXJ9YCxcbiAgICAgICAgY29sb3I6IGNvbG9yc1tjbHVzdGVyICsgJyddLFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyAyLiBSZW5kZXIgdGhlIGdyYXBoOlxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb2xvLWNvbnRhaW5lcicpIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFNpZ21hKGdyYXBoLCBjb250YWluZXIsIHtcbiAgICAgIGRlZmF1bHRFZGdlQ29sb3I6ICdyZ2JhKDAsMCwwLDApJyxcbiAgICAgIGRlZmF1bHRFZGdlVHlwZTogc3RhdGUuZWRnZXNSZW5kZXJlcixcbiAgICAgIGVkZ2VQcm9ncmFtQ2xhc3Nlczoge1xuICAgICAgICAnZWRnZXMtZGVmYXVsdCc6IEVkZ2VSZWN0YW5nbGVQcm9ncmFtLFxuICAgICAgICAnZWRnZXMtZmFzdCc6IEVkZ2VMaW5lUHJvZ3JhbSxcbiAgICAgIH0sXG4gICAgICBkZWZhdWx0Tm9kZVR5cGU6ICdpbWFnZScsXG4gICAgICBub2RlUHJvZ3JhbUNsYXNzZXM6IHtcbiAgICAgICAgaW1hZ2U6IE5vZGVJbWFnZVByb2dyYW0sXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgLy8gQ2hlYXAgdHJpY2s6IHRpbHQgdGhlIGNhbWVyYSBhIGJpdCB0byBtYWtlIGxhYmVscyBtb3JlIHJlYWRhYmxlOlxuICAgIHJlbmRlcmVyLmdldENhbWVyYSgpLnNldFN0YXRlKHtcbiAgICAgIGFuZ2xlOiAwLjIsXG4gICAgfSk7XG5cbiAgICAvLyBDbGVhbnVwIGZ1bmN0aW9uIHRvIHJlbW92ZSBldmVudCBsaXN0ZW5lcnNcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcmVuZGVyZXIua2lsbCgpO1xuICAgIH07XG4gIH0sIFthcmdzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBpZD1cInNvbG8tY29udGFpbmVyXCIgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC14bFwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzgwdmgnIH19PjwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU29sb0dyYXBoMjtcbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsIkdyYXBoIiwiY2x1c3RlcnMiLCJjaXJjbGVwYWNrIiwic2VlZHJhbmRvbSIsIlNpZ21hIiwiRWRnZUxpbmVQcm9ncmFtIiwiRWRnZVJlY3RhbmdsZVByb2dyYW0iLCJOb2RlSW1hZ2VQcm9ncmFtIiwiU29sb0dyYXBoMiIsImFyZ3MiLCJkcmF3Tm9kZXMiLCJub2RlIiwiY3R4Iiwic2F2ZSIsImJlZ2luUGF0aCIsInJhZGl1cyIsImFyYyIsIngiLCJ5IiwiTWF0aCIsIlBJIiwiZmlsbCIsImltZyIsIkltYWdlIiwic3JjIiwic2l6ZSIsImRyYXdJbWFnZSIsInJlc3RvcmUiLCJybmciLCJzdGF0ZSIsImdyYXBoIiwiYXNzaWduIiwiaGllcmFyY2h5QXR0cmlidXRlcyIsImNvbG9ycyIsImkiLCJmbG9vciIsInRvU3RyaW5nIiwiZm9yRWFjaE5vZGUiLCJjbHVzdGVyIiwibWVyZ2VOb2RlQXR0cmlidXRlcyIsImRlZ3JlZSIsImxhYmVsIiwiY29sb3IiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyZXIiLCJkZWZhdWx0RWRnZUNvbG9yIiwiZGVmYXVsdEVkZ2VUeXBlIiwiZWRnZXNSZW5kZXJlciIsImVkZ2VQcm9ncmFtQ2xhc3NlcyIsImRlZmF1bHROb2RlVHlwZSIsIm5vZGVQcm9ncmFtQ2xhc3NlcyIsImltYWdlIiwiZ2V0Q2FtZXJhIiwic2V0U3RhdGUiLCJhbmdsZSIsImtpbGwiLCJkaXYiLCJpZCIsImNsYXNzTmFtZSIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/solo-graph2.tsx\n"));

/***/ })

});