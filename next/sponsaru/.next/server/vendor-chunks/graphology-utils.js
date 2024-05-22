/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/graphology-utils";
exports.ids = ["vendor-chunks/graphology-utils"];
exports.modules = {

/***/ "(ssr)/./node_modules/graphology-utils/defaults.js":
/*!***************************************************!*\
  !*** ./node_modules/graphology-utils/defaults.js ***!
  \***************************************************/
/***/ ((module) => {

eval("/**\n * Graphology Defaults\n * ====================\n *\n * Helper function used throughout the standard lib to resolve defaults.\n */\nfunction isLeaf(o) {\n  return (\n    !o ||\n    typeof o !== 'object' ||\n    typeof o === 'function' ||\n    Array.isArray(o) ||\n    o instanceof Set ||\n    o instanceof Map ||\n    o instanceof RegExp ||\n    o instanceof Date\n  );\n}\n\nfunction resolveDefaults(target, defaults) {\n  target = target || {};\n\n  var output = {};\n\n  for (var k in defaults) {\n    var existing = target[k];\n    var def = defaults[k];\n\n    // Recursion\n    if (!isLeaf(def)) {\n      output[k] = resolveDefaults(existing, def);\n\n      continue;\n    }\n\n    // Leaf\n    if (existing === undefined) {\n      output[k] = def;\n    } else {\n      output[k] = existing;\n    }\n  }\n\n  return output;\n}\n\nmodule.exports = resolveDefaults;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZ3JhcGhvbG9neS11dGlscy9kZWZhdWx0cy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BvbnNhcnUvLi9ub2RlX21vZHVsZXMvZ3JhcGhvbG9neS11dGlscy9kZWZhdWx0cy5qcz83YzkyIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogR3JhcGhvbG9neSBEZWZhdWx0c1xuICogPT09PT09PT09PT09PT09PT09PT1cbiAqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdXNlZCB0aHJvdWdob3V0IHRoZSBzdGFuZGFyZCBsaWIgdG8gcmVzb2x2ZSBkZWZhdWx0cy5cbiAqL1xuZnVuY3Rpb24gaXNMZWFmKG8pIHtcbiAgcmV0dXJuIChcbiAgICAhbyB8fFxuICAgIHR5cGVvZiBvICE9PSAnb2JqZWN0JyB8fFxuICAgIHR5cGVvZiBvID09PSAnZnVuY3Rpb24nIHx8XG4gICAgQXJyYXkuaXNBcnJheShvKSB8fFxuICAgIG8gaW5zdGFuY2VvZiBTZXQgfHxcbiAgICBvIGluc3RhbmNlb2YgTWFwIHx8XG4gICAgbyBpbnN0YW5jZW9mIFJlZ0V4cCB8fFxuICAgIG8gaW5zdGFuY2VvZiBEYXRlXG4gICk7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEZWZhdWx0cyh0YXJnZXQsIGRlZmF1bHRzKSB7XG4gIHRhcmdldCA9IHRhcmdldCB8fCB7fTtcblxuICB2YXIgb3V0cHV0ID0ge307XG5cbiAgZm9yICh2YXIgayBpbiBkZWZhdWx0cykge1xuICAgIHZhciBleGlzdGluZyA9IHRhcmdldFtrXTtcbiAgICB2YXIgZGVmID0gZGVmYXVsdHNba107XG5cbiAgICAvLyBSZWN1cnNpb25cbiAgICBpZiAoIWlzTGVhZihkZWYpKSB7XG4gICAgICBvdXRwdXRba10gPSByZXNvbHZlRGVmYXVsdHMoZXhpc3RpbmcsIGRlZik7XG5cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIExlYWZcbiAgICBpZiAoZXhpc3RpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgb3V0cHV0W2tdID0gZGVmO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXRba10gPSBleGlzdGluZztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb3V0cHV0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlc29sdmVEZWZhdWx0cztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/graphology-utils/defaults.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/graphology-utils/is-graph-constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/graphology-utils/is-graph-constructor.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("/**\n * Graphology isGraphConstructor\n * ==============================\n *\n * Very simple function aiming at ensuring the given variable is a\n * graphology constructor.\n */\n\n/**\n * Checking the value is a graphology constructor.\n *\n * @param  {any}     value - Target value.\n * @return {boolean}\n */\nmodule.exports = function isGraphConstructor(value) {\n  return (\n    value !== null &&\n    typeof value === 'function' &&\n    typeof value.prototype === 'object' &&\n    typeof value.prototype.addUndirectedEdgeWithKey === 'function' &&\n    typeof value.prototype.dropNode === 'function'\n  );\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZ3JhcGhvbG9neS11dGlscy9pcy1ncmFwaC1jb25zdHJ1Y3Rvci5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFNBQVM7QUFDckIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BvbnNhcnUvLi9ub2RlX21vZHVsZXMvZ3JhcGhvbG9neS11dGlscy9pcy1ncmFwaC1jb25zdHJ1Y3Rvci5qcz81ZjlhIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogR3JhcGhvbG9neSBpc0dyYXBoQ29uc3RydWN0b3JcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICpcbiAqIFZlcnkgc2ltcGxlIGZ1bmN0aW9uIGFpbWluZyBhdCBlbnN1cmluZyB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgYVxuICogZ3JhcGhvbG9neSBjb25zdHJ1Y3Rvci5cbiAqL1xuXG4vKipcbiAqIENoZWNraW5nIHRoZSB2YWx1ZSBpcyBhIGdyYXBob2xvZ3kgY29uc3RydWN0b3IuXG4gKlxuICogQHBhcmFtICB7YW55fSAgICAgdmFsdWUgLSBUYXJnZXQgdmFsdWUuXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzR3JhcGhDb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgIHZhbHVlICE9PSBudWxsICYmXG4gICAgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIHZhbHVlLnByb3RvdHlwZSA9PT0gJ29iamVjdCcgJiZcbiAgICB0eXBlb2YgdmFsdWUucHJvdG90eXBlLmFkZFVuZGlyZWN0ZWRFZGdlV2l0aEtleSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiB2YWx1ZS5wcm90b3R5cGUuZHJvcE5vZGUgPT09ICdmdW5jdGlvbidcbiAgKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/graphology-utils/is-graph-constructor.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/graphology-utils/is-graph.js":
/*!***************************************************!*\
  !*** ./node_modules/graphology-utils/is-graph.js ***!
  \***************************************************/
/***/ ((module) => {

eval("/**\n * Graphology isGraph\n * ===================\n *\n * Very simple function aiming at ensuring the given variable is a\n * graphology instance.\n */\n\n/**\n * Checking the value is a graphology instance.\n *\n * @param  {any}     value - Target value.\n * @return {boolean}\n */\nmodule.exports = function isGraph(value) {\n  return (\n    value !== null &&\n    typeof value === 'object' &&\n    typeof value.addUndirectedEdgeWithKey === 'function' &&\n    typeof value.dropNode === 'function' &&\n    typeof value.multi === 'boolean'\n  );\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZ3JhcGhvbG9neS11dGlscy9pcy1ncmFwaC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFNBQVM7QUFDckIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BvbnNhcnUvLi9ub2RlX21vZHVsZXMvZ3JhcGhvbG9neS11dGlscy9pcy1ncmFwaC5qcz8wZTA3Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogR3JhcGhvbG9neSBpc0dyYXBoXG4gKiA9PT09PT09PT09PT09PT09PT09XG4gKlxuICogVmVyeSBzaW1wbGUgZnVuY3Rpb24gYWltaW5nIGF0IGVuc3VyaW5nIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBhXG4gKiBncmFwaG9sb2d5IGluc3RhbmNlLlxuICovXG5cbi8qKlxuICogQ2hlY2tpbmcgdGhlIHZhbHVlIGlzIGEgZ3JhcGhvbG9neSBpbnN0YW5jZS5cbiAqXG4gKiBAcGFyYW0gIHthbnl9ICAgICB2YWx1ZSAtIFRhcmdldCB2YWx1ZS5cbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNHcmFwaCh2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgIHZhbHVlICE9PSBudWxsICYmXG4gICAgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuICAgIHR5cGVvZiB2YWx1ZS5hZGRVbmRpcmVjdGVkRWRnZVdpdGhLZXkgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgdmFsdWUuZHJvcE5vZGUgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgdmFsdWUubXVsdGkgPT09ICdib29sZWFuJ1xuICApO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/graphology-utils/is-graph.js\n");

/***/ })

};
;