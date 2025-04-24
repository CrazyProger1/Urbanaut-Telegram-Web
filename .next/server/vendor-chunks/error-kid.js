"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/error-kid";
exports.ids = ["vendor-chunks/error-kid"];
exports.modules = {

/***/ "(rsc)/./node_modules/error-kid/dist/index.js":
/*!**********************************************!*\
  !*** ./node_modules/error-kid/dist/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   errorClass: () => (/* binding */ d),\n/* harmony export */   errorClassWithData: () => (/* binding */ m),\n/* harmony export */   isErrorOfKind: () => (/* binding */ i)\n/* harmony export */ });\nvar f = Object.defineProperty;\nvar u = (t, r, n) => r in t ? f(t, r, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[r] = n;\nvar c = (t, r, n) => u(t, typeof r != \"symbol\" ? r + \"\" : r, n);\nfunction i(t) {\n  return (r) => r instanceof t;\n}\nfunction d(t, r) {\n  r || (r = []);\n  class n extends Error {\n    constructor(...e) {\n      const o = typeof r == \"function\" ? r(...e) : typeof r == \"string\" ? [r] : r || [];\n      super(...o), this.name = t;\n    }\n  }\n  return Object.defineProperty(n, \"name\", { value: t }), [n, i(n)];\n}\nfunction m(t, r, n) {\n  class s extends d(t, n)[0] {\n    constructor(...a) {\n      super(...a);\n      c(this, \"data\");\n      this.data = r(...a);\n    }\n  }\n  return Object.defineProperty(s, \"name\", { value: t }), [s, i(s)];\n}\n\n//# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZXJyb3Ita2lkL2Rpc3QvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQSx3Q0FBd0MsMERBQTBEO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxVQUFVO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxVQUFVO0FBQ3REO0FBS0U7QUFDRiIsInNvdXJjZXMiOlsiRDpcXFByb2dyYW1taW5nXFxCdXNpbmVzc1xcVXJiYW5hdXRcXHdlYlxcbm9kZV9tb2R1bGVzXFxlcnJvci1raWRcXGRpc3RcXGluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBmID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIHUgPSAodCwgciwgbikgPT4gciBpbiB0ID8gZih0LCByLCB7IGVudW1lcmFibGU6ICEwLCBjb25maWd1cmFibGU6ICEwLCB3cml0YWJsZTogITAsIHZhbHVlOiBuIH0pIDogdFtyXSA9IG47XG52YXIgYyA9ICh0LCByLCBuKSA9PiB1KHQsIHR5cGVvZiByICE9IFwic3ltYm9sXCIgPyByICsgXCJcIiA6IHIsIG4pO1xuZnVuY3Rpb24gaSh0KSB7XG4gIHJldHVybiAocikgPT4gciBpbnN0YW5jZW9mIHQ7XG59XG5mdW5jdGlvbiBkKHQsIHIpIHtcbiAgciB8fCAociA9IFtdKTtcbiAgY2xhc3MgbiBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvciguLi5lKSB7XG4gICAgICBjb25zdCBvID0gdHlwZW9mIHIgPT0gXCJmdW5jdGlvblwiID8gciguLi5lKSA6IHR5cGVvZiByID09IFwic3RyaW5nXCIgPyBbcl0gOiByIHx8IFtdO1xuICAgICAgc3VwZXIoLi4ubyksIHRoaXMubmFtZSA9IHQ7XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkobiwgXCJuYW1lXCIsIHsgdmFsdWU6IHQgfSksIFtuLCBpKG4pXTtcbn1cbmZ1bmN0aW9uIG0odCwgciwgbikge1xuICBjbGFzcyBzIGV4dGVuZHMgZCh0LCBuKVswXSB7XG4gICAgY29uc3RydWN0b3IoLi4uYSkge1xuICAgICAgc3VwZXIoLi4uYSk7XG4gICAgICBjKHRoaXMsIFwiZGF0YVwiKTtcbiAgICAgIHRoaXMuZGF0YSA9IHIoLi4uYSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocywgXCJuYW1lXCIsIHsgdmFsdWU6IHQgfSksIFtzLCBpKHMpXTtcbn1cbmV4cG9ydCB7XG4gIGQgYXMgZXJyb3JDbGFzcyxcbiAgbSBhcyBlcnJvckNsYXNzV2l0aERhdGEsXG4gIGkgYXMgaXNFcnJvck9mS2luZFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/error-kid/dist/index.js\n");

/***/ })

};
;