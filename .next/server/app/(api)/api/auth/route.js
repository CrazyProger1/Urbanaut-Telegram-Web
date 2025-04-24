/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/(api)/api/auth/route";
exports.ids = ["app/(api)/api/auth/route"];
exports.modules = {

/***/ "(rsc)/./messages lazy recursive ^\\.\\/.*\\.json$":
/*!********************************************************!*\
  !*** ./messages/ lazy ^\.\/.*\.json$ namespace object ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en.json": [
		"(rsc)/./messages/en.json",
		"_rsc_messages_en_json"
	],
	"./uk.json": [
		"(rsc)/./messages/uk.json",
		"_rsc_messages_uk_json"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "(rsc)/./messages lazy recursive ^\\.\\/.*\\.json$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2F(api)%2Fapi%2Fauth%2Froute&page=%2F(api)%2Fapi%2Fauth%2Froute&appPaths=&pagePath=private-next-app-dir%2F(api)%2Fapi%2Fauth%2Froute.ts&appDir=D%3A%5CProgramming%5CBusiness%5CUrbanaut%5Cweb%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProgramming%5CBusiness%5CUrbanaut%5Cweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2F(api)%2Fapi%2Fauth%2Froute&page=%2F(api)%2Fapi%2Fauth%2Froute&appPaths=&pagePath=private-next-app-dir%2F(api)%2Fapi%2Fauth%2Froute.ts&appDir=D%3A%5CProgramming%5CBusiness%5CUrbanaut%5Cweb%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProgramming%5CBusiness%5CUrbanaut%5Cweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_Programming_Business_Urbanaut_web_src_app_api_api_auth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/(api)/api/auth/route.ts */ \"(rsc)/./src/app/(api)/api/auth/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/(api)/api/auth/route\",\n        pathname: \"/api/auth\",\n        filename: \"route\",\n        bundlePath: \"app/(api)/api/auth/route\"\n    },\n    resolvedPagePath: \"D:\\\\Programming\\\\Business\\\\Urbanaut\\\\web\\\\src\\\\app\\\\(api)\\\\api\\\\auth\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_Programming_Business_Urbanaut_web_src_app_api_api_auth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkYoYXBpKSUyRmFwaSUyRmF1dGglMkZyb3V0ZSZwYWdlPSUyRihhcGkpJTJGYXBpJTJGYXV0aCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRihhcGkpJTJGYXBpJTJGYXV0aCUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDUHJvZ3JhbW1pbmclNUNCdXNpbmVzcyU1Q1VyYmFuYXV0JTVDd2ViJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1EJTNBJTVDUHJvZ3JhbW1pbmclNUNCdXNpbmVzcyU1Q1VyYmFuYXV0JTVDd2ViJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUM4QjtBQUMzRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRDpcXFxcUHJvZ3JhbW1pbmdcXFxcQnVzaW5lc3NcXFxcVXJiYW5hdXRcXFxcd2ViXFxcXHNyY1xcXFxhcHBcXFxcKGFwaSlcXFxcYXBpXFxcXGF1dGhcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvKGFwaSkvYXBpL2F1dGgvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwLyhhcGkpL2FwaS9hdXRoL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRDpcXFxcUHJvZ3JhbW1pbmdcXFxcQnVzaW5lc3NcXFxcVXJiYW5hdXRcXFxcd2ViXFxcXHNyY1xcXFxhcHBcXFxcKGFwaSlcXFxcYXBpXFxcXGF1dGhcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2F(api)%2Fapi%2Fauth%2Froute&page=%2F(api)%2Fapi%2Fauth%2Froute&appPaths=&pagePath=private-next-app-dir%2F(api)%2Fapi%2Fauth%2Froute.ts&appDir=D%3A%5CProgramming%5CBusiness%5CUrbanaut%5Cweb%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProgramming%5CBusiness%5CUrbanaut%5Cweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22D%3A%5C%5CProgramming%5C%5CBusiness%5C%5CUrbanaut%5C%5Cweb%5C%5Cnode_modules%5C%5Cnext-intl%5C%5Cdist%5C%5Cesm%5C%5Cnavigation%5C%5Cshared%5C%5CBaseLink.js%22%2C%22ids%22%3A%5B%22default%22%5D%7D&modules=%7B%22request%22%3A%22D%3A%5C%5CProgramming%5C%5CBusiness%5C%5CUrbanaut%5C%5Cweb%5C%5Cnode_modules%5C%5Cnext-intl%5C%5Cdist%5C%5Cesm%5C%5Cnavigation%5C%5Cshared%5C%5CLegacyBaseLink.js%22%2C%22ids%22%3A%5B%22default%22%5D%7D&server=true!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22D%3A%5C%5CProgramming%5C%5CBusiness%5C%5CUrbanaut%5C%5Cweb%5C%5Cnode_modules%5C%5Cnext-intl%5C%5Cdist%5C%5Cesm%5C%5Cnavigation%5C%5Cshared%5C%5CBaseLink.js%22%2C%22ids%22%3A%5B%22default%22%5D%7D&modules=%7B%22request%22%3A%22D%3A%5C%5CProgramming%5C%5CBusiness%5C%5CUrbanaut%5C%5Cweb%5C%5Cnode_modules%5C%5Cnext-intl%5C%5Cdist%5C%5Cesm%5C%5Cnavigation%5C%5Cshared%5C%5CLegacyBaseLink.js%22%2C%22ids%22%3A%5B%22default%22%5D%7D&server=true! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./node_modules/next-intl/dist/esm/navigation/shared/BaseLink.js */ \"(rsc)/./node_modules/next-intl/dist/esm/navigation/shared/BaseLink.js\"));\n;\nPromise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./node_modules/next-intl/dist/esm/navigation/shared/LegacyBaseLink.js */ \"(rsc)/./node_modules/next-intl/dist/esm/navigation/shared/LegacyBaseLink.js\"));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWZsaWdodC1jbGllbnQtZW50cnktbG9hZGVyLmpzP21vZHVsZXM9JTdCJTIycmVxdWVzdCUyMiUzQSUyMkQlM0ElNUMlNUNQcm9ncmFtbWluZyU1QyU1Q0J1c2luZXNzJTVDJTVDVXJiYW5hdXQlNUMlNUN3ZWIlNUMlNUNub2RlX21vZHVsZXMlNUMlNUNuZXh0LWludGwlNUMlNUNkaXN0JTVDJTVDZXNtJTVDJTVDbmF2aWdhdGlvbiU1QyU1Q3NoYXJlZCU1QyU1Q0Jhc2VMaW5rLmpzJTIyJTJDJTIyaWRzJTIyJTNBJTVCJTIyZGVmYXVsdCUyMiU1RCU3RCZtb2R1bGVzPSU3QiUyMnJlcXVlc3QlMjIlM0ElMjJEJTNBJTVDJTVDUHJvZ3JhbW1pbmclNUMlNUNCdXNpbmVzcyU1QyU1Q1VyYmFuYXV0JTVDJTVDd2ViJTVDJTVDbm9kZV9tb2R1bGVzJTVDJTVDbmV4dC1pbnRsJTVDJTVDZGlzdCU1QyU1Q2VzbSU1QyU1Q25hdmlnYXRpb24lNUMlNUNzaGFyZWQlNUMlNUNMZWdhY3lCYXNlTGluay5qcyUyMiUyQyUyMmlkcyUyMiUzQSU1QiUyMmRlZmF1bHQlMjIlNUQlN0Qmc2VydmVyPXRydWUhIiwibWFwcGluZ3MiOiJBQUFBLDBPQUErSztBQUMvSztBQUNBLHNQQUFxTCIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiLCB3ZWJwYWNrRXhwb3J0czogW1wiZGVmYXVsdFwiXSAqLyBcIkQ6XFxcXFByb2dyYW1taW5nXFxcXEJ1c2luZXNzXFxcXFVyYmFuYXV0XFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcbmV4dC1pbnRsXFxcXGRpc3RcXFxcZXNtXFxcXG5hdmlnYXRpb25cXFxcc2hhcmVkXFxcXEJhc2VMaW5rLmpzXCIpO1xuO1xuaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIsIHdlYnBhY2tFeHBvcnRzOiBbXCJkZWZhdWx0XCJdICovIFwiRDpcXFxcUHJvZ3JhbW1pbmdcXFxcQnVzaW5lc3NcXFxcVXJiYW5hdXRcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFxuZXh0LWludGxcXFxcZGlzdFxcXFxlc21cXFxcbmF2aWdhdGlvblxcXFxzaGFyZWRcXFxcTGVnYWN5QmFzZUxpbmsuanNcIik7XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22D%3A%5C%5CProgramming%5C%5CBusiness%5C%5CUrbanaut%5C%5Cweb%5C%5Cnode_modules%5C%5Cnext-intl%5C%5Cdist%5C%5Cesm%5C%5Cnavigation%5C%5Cshared%5C%5CBaseLink.js%22%2C%22ids%22%3A%5B%22default%22%5D%7D&modules=%7B%22request%22%3A%22D%3A%5C%5CProgramming%5C%5CBusiness%5C%5CUrbanaut%5C%5Cweb%5C%5Cnode_modules%5C%5Cnext-intl%5C%5Cdist%5C%5Cesm%5C%5Cnavigation%5C%5Cshared%5C%5CLegacyBaseLink.js%22%2C%22ids%22%3A%5B%22default%22%5D%7D&server=true!\n");

/***/ }),

/***/ "(rsc)/./src/app/(api)/api/auth/route.ts":
/*!*****************************************!*\
  !*** ./src/app/(api)/api/auth/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _telegram_apps_init_data_node__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telegram-apps/init-data-node */ \"(rsc)/./node_modules/@telegram-apps/init-data-node/dist/entries/node.js\");\n/* harmony import */ var _config_telegram__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/telegram */ \"(rsc)/./src/config/telegram.ts\");\n/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/auth */ \"(rsc)/./src/helpers/auth.ts\");\n/* harmony import */ var _services_api_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/api/users */ \"(rsc)/./src/services/api/users.ts\");\n\n\n\n\n\nasync function POST(request) {\n    try {\n        const { initData } = await request.json();\n        if (!initData) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"No initData provided\"\n            }, {\n                status: 400\n            });\n        }\n        (0,_telegram_apps_init_data_node__WEBPACK_IMPORTED_MODULE_4__.validate)(initData, _config_telegram__WEBPACK_IMPORTED_MODULE_1__.TELEGRAM_BOT_TOKEN, {\n            expiresIn: 3600\n        });\n        const params = new URLSearchParams(initData);\n        const userRaw = params.get(\"user\");\n        if (!userRaw) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Invalid initData\"\n            }, {\n                status: 400\n            });\n        }\n        const telegramUser = JSON.parse(userRaw);\n        await (0,_helpers_auth__WEBPACK_IMPORTED_MODULE_2__.setSession)({\n            initData: initData,\n            user: telegramUser\n        });\n        const { success, ...apiUser } = await (0,_services_api_users__WEBPACK_IMPORTED_MODULE_3__.getUser)(telegramUser.id);\n        if (!success) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Failed to get user from API\"\n            }, {\n                status: 400\n            });\n        }\n        const mergedUser = {\n            ...apiUser,\n            ...telegramUser\n        };\n        console.log(\"User authenticated: \", mergedUser);\n        await (0,_helpers_auth__WEBPACK_IMPORTED_MODULE_2__.setSession)({\n            initData: initData,\n            user: mergedUser\n        }, _config_telegram__WEBPACK_IMPORTED_MODULE_1__.TELEGRAM_INITDATA_LIFETIME_SECONDS);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            user: mergedUser\n        });\n    } catch (error) {\n        console.error(\"Validation error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Authentication failed\"\n        }, {\n            status: 401\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwLyhhcGkpL2FwaS9hdXRoL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF3RDtBQUNDO0FBSTlCO0FBQ2lCO0FBQ0c7QUFFeEMsZUFBZU0sS0FBS0MsT0FBb0I7SUFDN0MsSUFBSTtRQUNGLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUcsTUFBTUQsUUFBUUUsSUFBSTtRQUN2QyxJQUFJLENBQUNELFVBQVU7WUFDYixPQUFPUixxREFBWUEsQ0FBQ1MsSUFBSSxDQUN0QjtnQkFBRUMsT0FBTztZQUF1QixHQUNoQztnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUFWLHVFQUFRQSxDQUFDTyxVQUFVTixnRUFBa0JBLEVBQUc7WUFBRVUsV0FBVztRQUFLO1FBRTFELE1BQU1DLFNBQVMsSUFBSUMsZ0JBQWdCTjtRQUNuQyxNQUFNTyxVQUFVRixPQUFPRyxHQUFHLENBQUM7UUFDM0IsSUFBSSxDQUFDRCxTQUFTO1lBQ1osT0FBT2YscURBQVlBLENBQUNTLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUFtQixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDeEU7UUFFQSxNQUFNTSxlQUFlQyxLQUFLQyxLQUFLLENBQUNKO1FBRWhDLE1BQU1YLHlEQUFVQSxDQUFDO1lBQUVJLFVBQVVBO1lBQVVZLE1BQU1IO1FBQWE7UUFFMUQsTUFBTSxFQUFFSSxPQUFPLEVBQUUsR0FBR0MsU0FBUyxHQUFHLE1BQU1qQiw0REFBT0EsQ0FBQ1ksYUFBYU0sRUFBRTtRQUM3RCxJQUFJLENBQUNGLFNBQVM7WUFDWixPQUFPckIscURBQVlBLENBQUNTLElBQUksQ0FDdEI7Z0JBQUVDLE9BQU87WUFBOEIsR0FDdkM7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUNBLE1BQU1hLGFBQWE7WUFBRSxHQUFHRixPQUFPO1lBQUUsR0FBR0wsWUFBWTtRQUFDO1FBRWpEUSxRQUFRQyxHQUFHLENBQUMsd0JBQXdCRjtRQUVwQyxNQUFNcEIseURBQVVBLENBQ2Q7WUFBRUksVUFBVUE7WUFBVVksTUFBTUk7UUFBVyxHQUN2Q3JCLGdGQUFrQ0E7UUFHcEMsT0FBT0gscURBQVlBLENBQUNTLElBQUksQ0FBQztZQUFFVyxNQUFNSTtRQUFXO0lBQzlDLEVBQUUsT0FBT2QsT0FBTztRQUNkZSxRQUFRZixLQUFLLENBQUMscUJBQXFCQTtRQUNuQyxPQUFPVixxREFBWUEsQ0FBQ1MsSUFBSSxDQUN0QjtZQUFFQyxPQUFPO1FBQXdCLEdBQ2pDO1lBQUVDLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJEOlxcUHJvZ3JhbW1pbmdcXEJ1c2luZXNzXFxVcmJhbmF1dFxcd2ViXFxzcmNcXGFwcFxcKGFwaSlcXGFwaVxcYXV0aFxccm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IHsgdmFsaWRhdGUgfSBmcm9tIFwiQHRlbGVncmFtLWFwcHMvaW5pdC1kYXRhLW5vZGVcIjtcbmltcG9ydCB7XG4gIFRFTEVHUkFNX0JPVF9UT0tFTixcbiAgVEVMRUdSQU1fSU5JVERBVEFfTElGRVRJTUVfU0VDT05EUyxcbn0gZnJvbSBcIkAvY29uZmlnL3RlbGVncmFtXCI7XG5pbXBvcnQgeyBzZXRTZXNzaW9uIH0gZnJvbSBcIkAvaGVscGVycy9hdXRoXCI7XG5pbXBvcnQgeyBnZXRVc2VyIH0gZnJvbSBcIkAvc2VydmljZXMvYXBpL3VzZXJzXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBpbml0RGF0YSB9ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gICAgaWYgKCFpbml0RGF0YSkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7IGVycm9yOiBcIk5vIGluaXREYXRhIHByb3ZpZGVkXCIgfSxcbiAgICAgICAgeyBzdGF0dXM6IDQwMCB9LFxuICAgICAgKTtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZShpbml0RGF0YSwgVEVMRUdSQU1fQk9UX1RPS0VOISwgeyBleHBpcmVzSW46IDM2MDAgfSk7XG5cbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGluaXREYXRhKTtcbiAgICBjb25zdCB1c2VyUmF3ID0gcGFyYW1zLmdldChcInVzZXJcIik7XG4gICAgaWYgKCF1c2VyUmF3KSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJJbnZhbGlkIGluaXREYXRhXCIgfSwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgICB9XG5cbiAgICBjb25zdCB0ZWxlZ3JhbVVzZXIgPSBKU09OLnBhcnNlKHVzZXJSYXcpO1xuXG4gICAgYXdhaXQgc2V0U2Vzc2lvbih7IGluaXREYXRhOiBpbml0RGF0YSwgdXNlcjogdGVsZWdyYW1Vc2VyIH0pO1xuXG4gICAgY29uc3QgeyBzdWNjZXNzLCAuLi5hcGlVc2VyIH0gPSBhd2FpdCBnZXRVc2VyKHRlbGVncmFtVXNlci5pZCk7XG4gICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGdldCB1c2VyIGZyb20gQVBJXCIgfSxcbiAgICAgICAgeyBzdGF0dXM6IDQwMCB9LFxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3QgbWVyZ2VkVXNlciA9IHsgLi4uYXBpVXNlciwgLi4udGVsZWdyYW1Vc2VyIH07XG5cbiAgICBjb25zb2xlLmxvZyhcIlVzZXIgYXV0aGVudGljYXRlZDogXCIsIG1lcmdlZFVzZXIpO1xuXG4gICAgYXdhaXQgc2V0U2Vzc2lvbihcbiAgICAgIHsgaW5pdERhdGE6IGluaXREYXRhLCB1c2VyOiBtZXJnZWRVc2VyIH0sXG4gICAgICBURUxFR1JBTV9JTklUREFUQV9MSUZFVElNRV9TRUNPTkRTLFxuICAgICk7XG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyB1c2VyOiBtZXJnZWRVc2VyIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJWYWxpZGF0aW9uIGVycm9yOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBlcnJvcjogXCJBdXRoZW50aWNhdGlvbiBmYWlsZWRcIiB9LFxuICAgICAgeyBzdGF0dXM6IDQwMSB9LFxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJ2YWxpZGF0ZSIsIlRFTEVHUkFNX0JPVF9UT0tFTiIsIlRFTEVHUkFNX0lOSVREQVRBX0xJRkVUSU1FX1NFQ09ORFMiLCJzZXRTZXNzaW9uIiwiZ2V0VXNlciIsIlBPU1QiLCJyZXF1ZXN0IiwiaW5pdERhdGEiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJleHBpcmVzSW4iLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJ1c2VyUmF3IiwiZ2V0IiwidGVsZWdyYW1Vc2VyIiwiSlNPTiIsInBhcnNlIiwidXNlciIsInN1Y2Nlc3MiLCJhcGlVc2VyIiwiaWQiLCJtZXJnZWRVc2VyIiwiY29uc29sZSIsImxvZyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/(api)/api/auth/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/config/api.ts":
/*!***************************!*\
  !*** ./src/config/api.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   API_ENDPOINTS: () => (/* binding */ API_ENDPOINTS),\n/* harmony export */   API_URL: () => (/* binding */ API_URL),\n/* harmony export */   API_VERSION: () => (/* binding */ API_VERSION)\n/* harmony export */ });\nconst API_VERSION = \"v1\";\nconst API_URL = process.env.API_URL || `https://api.urbanaut.club/api/${API_VERSION}/`;\nconst API_ENDPOINTS = {\n    USER: `${API_URL}users/:id/`,\n    SETTINGS: `${API_URL}settings/`\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvY29uZmlnL2FwaS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxNQUFNQSxjQUFjLEtBQUs7QUFDekIsTUFBTUMsVUFDWEMsUUFBUUMsR0FBRyxDQUFDRixPQUFPLElBQUksQ0FBQyw4QkFBOEIsRUFBRUQsWUFBWSxDQUFDLENBQUMsQ0FBQztBQUVsRSxNQUFNSSxnQkFBZ0I7SUFDM0JDLE1BQU0sR0FBR0osUUFBUSxVQUFVLENBQUM7SUFDNUJLLFVBQVUsR0FBR0wsUUFBUSxTQUFTLENBQUM7QUFDakMsRUFBRSIsInNvdXJjZXMiOlsiRDpcXFByb2dyYW1taW5nXFxCdXNpbmVzc1xcVXJiYW5hdXRcXHdlYlxcc3JjXFxjb25maWdcXGFwaS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQVBJX1ZFUlNJT04gPSBcInYxXCI7XG5leHBvcnQgY29uc3QgQVBJX1VSTCA9XG4gIHByb2Nlc3MuZW52LkFQSV9VUkwgfHwgYGh0dHBzOi8vYXBpLnVyYmFuYXV0LmNsdWIvYXBpLyR7QVBJX1ZFUlNJT059L2A7XG5cbmV4cG9ydCBjb25zdCBBUElfRU5EUE9JTlRTID0ge1xuICBVU0VSOiBgJHtBUElfVVJMfXVzZXJzLzppZC9gLFxuICBTRVRUSU5HUzogYCR7QVBJX1VSTH1zZXR0aW5ncy9gLFxufTtcbiJdLCJuYW1lcyI6WyJBUElfVkVSU0lPTiIsIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiQVBJX0VORFBPSU5UUyIsIlVTRVIiLCJTRVRUSU5HUyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/config/api.ts\n");

/***/ }),

/***/ "(rsc)/./src/config/telegram.ts":
/*!********************************!*\
  !*** ./src/config/telegram.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   INITDATA_FALLBACK: () => (/* binding */ INITDATA_FALLBACK),\n/* harmony export */   TELEGRAM_BOT_TOKEN: () => (/* binding */ TELEGRAM_BOT_TOKEN),\n/* harmony export */   TELEGRAM_INITDATA_LIFETIME_SECONDS: () => (/* binding */ TELEGRAM_INITDATA_LIFETIME_SECONDS),\n/* harmony export */   TON_MANIFEST_URL: () => (/* binding */ TON_MANIFEST_URL)\n/* harmony export */ });\nconst TON_MANIFEST_URL = \"https://urbanaut.club/manifests/tonconnect-manifest.json\";\nconst TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;\nconst TELEGRAM_INITDATA_LIFETIME_SECONDS = 60 * 60 * 24;\nconst INITDATA_FALLBACK = \"query_id=AAGBipYvAAAAAIGKli_1WXSx&user=%7B%22id%22%3A798395009%2C%22first_name%22%3A%22Nikolay%22%2C%22last_name%22%3A%22Hetman%22%2C%22username%22%3A%22crazyproger1%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FlPc5Wj2Du4A7oGsBpeyxMPXVWI-WJCntsNjLMSXoR1A.svg%22%7D&auth_date=1745439370&signature=7WOPaKmDWZulT9fomWuci6nlhd9w_4ZDfEpwrR1mWzG2ep_TTEdavkQV9QzfkNIzHLxzOjc-k1GaE5TJwGj2Aw&hash=0d2cd5ed3fcaf38175ea525458979ae1709b1c62b2d0a67d59ae24e7a0f2a831\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvY29uZmlnL3RlbGVncmFtLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxNQUFNQSxtQkFDWCwyREFBMkQ7QUFFdEQsTUFBTUMscUJBQXFCQyxRQUFRQyxHQUFHLENBQUNGLGtCQUFrQixDQUFDO0FBQzFELE1BQU1HLHFDQUFxQyxLQUFLLEtBQUssR0FBRztBQUV4RCxNQUFNQyxvQkFDWCxrakJBQWtqQiIsInNvdXJjZXMiOlsiRDpcXFByb2dyYW1taW5nXFxCdXNpbmVzc1xcVXJiYW5hdXRcXHdlYlxcc3JjXFxjb25maWdcXHRlbGVncmFtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBUT05fTUFOSUZFU1RfVVJMID1cbiAgXCJodHRwczovL3VyYmFuYXV0LmNsdWIvbWFuaWZlc3RzL3RvbmNvbm5lY3QtbWFuaWZlc3QuanNvblwiO1xuXG5leHBvcnQgY29uc3QgVEVMRUdSQU1fQk9UX1RPS0VOID0gcHJvY2Vzcy5lbnYuVEVMRUdSQU1fQk9UX1RPS0VOO1xuZXhwb3J0IGNvbnN0IFRFTEVHUkFNX0lOSVREQVRBX0xJRkVUSU1FX1NFQ09ORFMgPSA2MCAqIDYwICogMjQ7XG5cbmV4cG9ydCBjb25zdCBJTklUREFUQV9GQUxMQkFDSyA9XG4gIFwicXVlcnlfaWQ9QUFHQmlwWXZBQUFBQUlHS2xpXzFXWFN4JnVzZXI9JTdCJTIyaWQlMjIlM0E3OTgzOTUwMDklMkMlMjJmaXJzdF9uYW1lJTIyJTNBJTIyTmlrb2xheSUyMiUyQyUyMmxhc3RfbmFtZSUyMiUzQSUyMkhldG1hbiUyMiUyQyUyMnVzZXJuYW1lJTIyJTNBJTIyY3Jhenlwcm9nZXIxJTIyJTJDJTIybGFuZ3VhZ2VfY29kZSUyMiUzQSUyMnJ1JTIyJTJDJTIyYWxsb3dzX3dyaXRlX3RvX3BtJTIyJTNBdHJ1ZSUyQyUyMnBob3RvX3VybCUyMiUzQSUyMmh0dHBzJTNBJTVDJTJGJTVDJTJGdC5tZSU1QyUyRmklNUMlMkZ1c2VycGljJTVDJTJGMzIwJTVDJTJGbFBjNVdqMkR1NEE3b0dzQnBleXhNUFhWV0ktV0pDbnRzTmpMTVNYb1IxQS5zdmclMjIlN0QmYXV0aF9kYXRlPTE3NDU0MzkzNzAmc2lnbmF0dXJlPTdXT1BhS21EV1p1bFQ5Zm9tV3VjaTZubGhkOXdfNFpEZkVwd3JSMW1XekcyZXBfVFRFZGF2a1FWOVF6ZmtOSXpITHh6T2pjLWsxR2FFNVRKd0dqMkF3Jmhhc2g9MGQyY2Q1ZWQzZmNhZjM4MTc1ZWE1MjU0NTg5NzlhZTE3MDliMWM2MmIyZDBhNjdkNTlhZTI0ZTdhMGYyYTgzMVwiO1xuIl0sIm5hbWVzIjpbIlRPTl9NQU5JRkVTVF9VUkwiLCJURUxFR1JBTV9CT1RfVE9LRU4iLCJwcm9jZXNzIiwiZW52IiwiVEVMRUdSQU1fSU5JVERBVEFfTElGRVRJTUVfU0VDT05EUyIsIklOSVREQVRBX0ZBTExCQUNLIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/config/telegram.ts\n");

/***/ }),

/***/ "(rsc)/./src/helpers/auth.ts":
/*!*****************************!*\
  !*** ./src/helpers/auth.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getSession: () => (/* binding */ getSession),\n/* harmony export */   setSession: () => (/* binding */ setSession)\n/* harmony export */ });\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n\nconst setSession = async (session, exp = 3600)=>{\n    const cookieStore = await (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)();\n    cookieStore.set({\n        name: \"initData\",\n        value: session.initData,\n        httpOnly: true,\n        maxAge: exp,\n        sameSite: \"strict\",\n        secure: \"development\" === \"production\"\n    });\n    cookieStore.set({\n        name: \"userData\",\n        value: JSON.stringify(session.user),\n        httpOnly: true,\n        maxAge: exp,\n        sameSite: \"strict\",\n        secure: \"development\" === \"production\"\n    });\n};\nconst getSession = async ()=>{\n    const cookieStore = await (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)();\n    const initData = cookieStore.get(\"initData\");\n    const userData = cookieStore.get(\"userData\");\n    if (!userData || !initData) return null;\n    return {\n        initData: initData.value,\n        user: JSON.parse(userData.value)\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvaGVscGVycy9hdXRoLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF1QztBQUdoQyxNQUFNQyxhQUFhLE9BQU9DLFNBQWtCQyxNQUFjLElBQUk7SUFDbkUsTUFBTUMsY0FBYyxNQUFNSixxREFBT0E7SUFDakNJLFlBQVlDLEdBQUcsQ0FBQztRQUNkQyxNQUFNO1FBQ05DLE9BQU9MLFFBQVFNLFFBQVE7UUFDdkJDLFVBQVU7UUFDVkMsUUFBUVA7UUFDUlEsVUFBVTtRQUNWQyxRQUFRQyxrQkFBeUI7SUFDbkM7SUFDQVQsWUFBWUMsR0FBRyxDQUFDO1FBQ2RDLE1BQU07UUFDTkMsT0FBT08sS0FBS0MsU0FBUyxDQUFDYixRQUFRYyxJQUFJO1FBQ2xDUCxVQUFVO1FBQ1ZDLFFBQVFQO1FBQ1JRLFVBQVU7UUFDVkMsUUFBUUMsa0JBQXlCO0lBQ25DO0FBQ0YsRUFBRTtBQUVLLE1BQU1JLGFBQWE7SUFDeEIsTUFBTWIsY0FBYyxNQUFNSixxREFBT0E7SUFDakMsTUFBTVEsV0FBV0osWUFBWWMsR0FBRyxDQUFDO0lBQ2pDLE1BQU1DLFdBQVdmLFlBQVljLEdBQUcsQ0FBQztJQUNqQyxJQUFJLENBQUNDLFlBQVksQ0FBQ1gsVUFBVSxPQUFPO0lBQ25DLE9BQU87UUFDTEEsVUFBVUEsU0FBU0QsS0FBSztRQUN4QlMsTUFBTUYsS0FBS00sS0FBSyxDQUFDRCxTQUFTWixLQUFLO0lBQ2pDO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsiRDpcXFByb2dyYW1taW5nXFxCdXNpbmVzc1xcVXJiYW5hdXRcXHdlYlxcc3JjXFxoZWxwZXJzXFxhdXRoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvb2tpZXMgfSBmcm9tIFwibmV4dC9oZWFkZXJzXCI7XG5pbXBvcnQgeyBTZXNzaW9uIH0gZnJvbSBcIkAvdHlwZXMvdXNlcnNcIjtcblxuZXhwb3J0IGNvbnN0IHNldFNlc3Npb24gPSBhc3luYyAoc2Vzc2lvbjogU2Vzc2lvbiwgZXhwOiBudW1iZXIgPSAzNjAwKSA9PiB7XG4gIGNvbnN0IGNvb2tpZVN0b3JlID0gYXdhaXQgY29va2llcygpO1xuICBjb29raWVTdG9yZS5zZXQoe1xuICAgIG5hbWU6IFwiaW5pdERhdGFcIixcbiAgICB2YWx1ZTogc2Vzc2lvbi5pbml0RGF0YSxcbiAgICBodHRwT25seTogdHJ1ZSxcbiAgICBtYXhBZ2U6IGV4cCxcbiAgICBzYW1lU2l0ZTogXCJzdHJpY3RcIixcbiAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIixcbiAgfSk7XG4gIGNvb2tpZVN0b3JlLnNldCh7XG4gICAgbmFtZTogXCJ1c2VyRGF0YVwiLFxuICAgIHZhbHVlOiBKU09OLnN0cmluZ2lmeShzZXNzaW9uLnVzZXIpLFxuICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgIG1heEFnZTogZXhwLFxuICAgIHNhbWVTaXRlOiBcInN0cmljdFwiLFxuICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZXNzaW9uID0gYXN5bmMgKCk6IFByb21pc2U8U2Vzc2lvbiB8IG51bGw+ID0+IHtcbiAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKCk7XG4gIGNvbnN0IGluaXREYXRhID0gY29va2llU3RvcmUuZ2V0KFwiaW5pdERhdGFcIik7XG4gIGNvbnN0IHVzZXJEYXRhID0gY29va2llU3RvcmUuZ2V0KFwidXNlckRhdGFcIik7XG4gIGlmICghdXNlckRhdGEgfHwgIWluaXREYXRhKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIHtcbiAgICBpbml0RGF0YTogaW5pdERhdGEudmFsdWUsXG4gICAgdXNlcjogSlNPTi5wYXJzZSh1c2VyRGF0YS52YWx1ZSksXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbImNvb2tpZXMiLCJzZXRTZXNzaW9uIiwic2Vzc2lvbiIsImV4cCIsImNvb2tpZVN0b3JlIiwic2V0IiwibmFtZSIsInZhbHVlIiwiaW5pdERhdGEiLCJodHRwT25seSIsIm1heEFnZSIsInNhbWVTaXRlIiwic2VjdXJlIiwicHJvY2VzcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VyIiwiZ2V0U2Vzc2lvbiIsImdldCIsInVzZXJEYXRhIiwicGFyc2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/helpers/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/i18n/request.ts":
/*!*****************************!*\
  !*** ./src/i18n/request.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_intl_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-intl/server */ \"(rsc)/./node_modules/next-intl/dist/esm/server/react-server/getRequestConfig.js\");\n/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routing */ \"(rsc)/./src/i18n/routing.ts\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_intl_server__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(async ({ requestLocale })=>{\n    let locale = await requestLocale;\n    if (!locale || !_routing__WEBPACK_IMPORTED_MODULE_0__.routing.locales.includes(locale)) {\n        locale = _routing__WEBPACK_IMPORTED_MODULE_0__.routing.defaultLocale;\n    }\n    return {\n        locale,\n        messages: (await __webpack_require__(\"(rsc)/./messages lazy recursive ^\\\\.\\\\/.*\\\\.json$\")(`./${locale}.json`)).default\n    };\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvaTE4bi9yZXF1ZXN0LnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvRDtBQUNSO0FBRTVDLGlFQUFlQSw0REFBZ0JBLENBQUMsT0FBTyxFQUFFRSxhQUFhLEVBQUU7SUFDdEQsSUFBSUMsU0FBUyxNQUFNRDtJQUVuQixJQUFJLENBQUNDLFVBQVUsQ0FBQ0YsNkNBQU9BLENBQUNHLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDRixTQUFtQjtRQUMxREEsU0FBU0YsNkNBQU9BLENBQUNLLGFBQWE7SUFDaEM7SUFFQSxPQUFPO1FBQ0xIO1FBQ0FJLFVBQVUsQ0FBQyxNQUFNLHlFQUFPLEdBQWdCLEVBQUVKLE9BQU8sTUFBTSxHQUFHSyxPQUFPO0lBQ25FO0FBQ0YsRUFBRSxFQUFDIiwic291cmNlcyI6WyJEOlxcUHJvZ3JhbW1pbmdcXEJ1c2luZXNzXFxVcmJhbmF1dFxcd2ViXFxzcmNcXGkxOG5cXHJlcXVlc3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UmVxdWVzdENvbmZpZyB9IGZyb20gXCJuZXh0LWludGwvc2VydmVyXCI7XG5pbXBvcnQgeyByb3V0aW5nLCBMb2NhbGUgfSBmcm9tIFwiLi9yb3V0aW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGdldFJlcXVlc3RDb25maWcoYXN5bmMgKHsgcmVxdWVzdExvY2FsZSB9KSA9PiB7XG4gIGxldCBsb2NhbGUgPSBhd2FpdCByZXF1ZXN0TG9jYWxlO1xuXG4gIGlmICghbG9jYWxlIHx8ICFyb3V0aW5nLmxvY2FsZXMuaW5jbHVkZXMobG9jYWxlIGFzIExvY2FsZSkpIHtcbiAgICBsb2NhbGUgPSByb3V0aW5nLmRlZmF1bHRMb2NhbGU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxvY2FsZSxcbiAgICBtZXNzYWdlczogKGF3YWl0IGltcG9ydChgLi4vLi4vbWVzc2FnZXMvJHtsb2NhbGV9Lmpzb25gKSkuZGVmYXVsdCxcbiAgfTtcbn0pO1xuIl0sIm5hbWVzIjpbImdldFJlcXVlc3RDb25maWciLCJyb3V0aW5nIiwicmVxdWVzdExvY2FsZSIsImxvY2FsZSIsImxvY2FsZXMiLCJpbmNsdWRlcyIsImRlZmF1bHRMb2NhbGUiLCJtZXNzYWdlcyIsImRlZmF1bHQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/i18n/request.ts\n");

/***/ }),

/***/ "(rsc)/./src/i18n/routing.ts":
/*!*****************************!*\
  !*** ./src/i18n/routing.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Link: () => (/* binding */ Link),\n/* harmony export */   getPathname: () => (/* binding */ getPathname),\n/* harmony export */   redirect: () => (/* binding */ redirect),\n/* harmony export */   routing: () => (/* binding */ routing),\n/* harmony export */   usePathname: () => (/* binding */ usePathname),\n/* harmony export */   useRouter: () => (/* binding */ useRouter)\n/* harmony export */ });\n/* harmony import */ var next_intl_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-intl/routing */ \"(rsc)/./node_modules/next-intl/dist/development/routing.js\");\n/* harmony import */ var next_intl_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-intl/navigation */ \"(rsc)/./node_modules/next-intl/dist/esm/navigation/react-server/createNavigation.js\");\n\n\nconst routing = (0,next_intl_routing__WEBPACK_IMPORTED_MODULE_0__.defineRouting)({\n    locales: [\n        \"en\",\n        \"uk\"\n    ],\n    defaultLocale: \"en\"\n});\nconst { Link, redirect, usePathname, useRouter, getPathname } = (0,next_intl_navigation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(routing);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvaTE4bi9yb3V0aW5nLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ007QUFHakQsTUFBTUUsVUFBVUYsZ0VBQWFBLENBQUM7SUFDbkNHLFNBQVM7UUFBQztRQUFNO0tBQUs7SUFDckJDLGVBQWU7QUFDakIsR0FBRztBQUVJLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLFdBQVcsRUFBRUMsU0FBUyxFQUFFQyxXQUFXLEVBQUUsR0FDbEVSLGdFQUFnQkEsQ0FBQ0MsU0FBUyIsInNvdXJjZXMiOlsiRDpcXFByb2dyYW1taW5nXFxCdXNpbmVzc1xcVXJiYW5hdXRcXHdlYlxcc3JjXFxpMThuXFxyb3V0aW5nLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZmluZVJvdXRpbmcgfSBmcm9tIFwibmV4dC1pbnRsL3JvdXRpbmdcIjtcbmltcG9ydCB7IGNyZWF0ZU5hdmlnYXRpb24gfSBmcm9tIFwibmV4dC1pbnRsL25hdmlnYXRpb25cIjtcblxuZXhwb3J0IHR5cGUgTG9jYWxlID0gXCJlblwiIHwgXCJ1a1wiO1xuZXhwb3J0IGNvbnN0IHJvdXRpbmcgPSBkZWZpbmVSb3V0aW5nKHtcbiAgbG9jYWxlczogW1wiZW5cIiwgXCJ1a1wiXSxcbiAgZGVmYXVsdExvY2FsZTogXCJlblwiLFxufSk7XG5cbmV4cG9ydCBjb25zdCB7IExpbmssIHJlZGlyZWN0LCB1c2VQYXRobmFtZSwgdXNlUm91dGVyLCBnZXRQYXRobmFtZSB9ID1cbiAgY3JlYXRlTmF2aWdhdGlvbihyb3V0aW5nKTtcbiJdLCJuYW1lcyI6WyJkZWZpbmVSb3V0aW5nIiwiY3JlYXRlTmF2aWdhdGlvbiIsInJvdXRpbmciLCJsb2NhbGVzIiwiZGVmYXVsdExvY2FsZSIsIkxpbmsiLCJyZWRpcmVjdCIsInVzZVBhdGhuYW1lIiwidXNlUm91dGVyIiwiZ2V0UGF0aG5hbWUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/i18n/routing.ts\n");

/***/ }),

/***/ "(rsc)/./src/services/api/api.ts":
/*!*********************************!*\
  !*** ./src/services/api/api.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   axios: () => (/* binding */ axios)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(rsc)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_intl_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-intl/server */ \"(rsc)/./node_modules/next-intl/dist/esm/server/react-server/getLocale.js\");\n/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config/api */ \"(rsc)/./src/config/api.ts\");\n/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers/auth */ \"(rsc)/./src/helpers/auth.ts\");\n\n\n\n\nconst axios = axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create({\n    baseURL: _config_api__WEBPACK_IMPORTED_MODULE_0__.API_URL\n});\naxios.interceptors.request.use(async (config)=>{\n    const session = await (0,_helpers_auth__WEBPACK_IMPORTED_MODULE_1__.getSession)();\n    if (session) {\n        config.headers.Authorization = `tma ${encodeURIComponent(session.initData)}`;\n    }\n    return config;\n}, (error)=>{\n    return Promise.reject(error);\n});\naxios.interceptors.request.use(async (config)=>{\n    config.headers[\"Accept-Language\"] = await (0,next_intl_server__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    return config;\n}, (error)=>{\n    return Promise.reject(error);\n});\naxios.interceptors.request.use((config)=>{\n    config.headers[\"Content-Type\"] = \"application/json\";\n    return config;\n}, (error)=>{\n    return Promise.reject(error);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvc2VydmljZXMvYXBpL2FwaS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF1QjtBQUVzQjtBQUNOO0FBQ0s7QUFFckMsTUFBTUksUUFBUUosNkNBQUVBLENBQUNLLE1BQU0sQ0FBQztJQUM3QkMsU0FBU0osZ0RBQU9BO0FBQ2xCLEdBQUc7QUFFSEUsTUFBTUcsWUFBWSxDQUFDQyxPQUFPLENBQUNDLEdBQUcsQ0FDNUIsT0FBT0M7SUFDTCxNQUFNQyxVQUFVLE1BQU1SLHlEQUFVQTtJQUVoQyxJQUFJUSxTQUFTO1FBQ1hELE9BQU9FLE9BQU8sQ0FBQ0MsYUFBYSxHQUFHLENBQUMsSUFBSSxFQUFFQyxtQkFBbUJILFFBQVFJLFFBQVEsR0FBRztJQUM5RTtJQUVBLE9BQU9MO0FBQ1QsR0FDQSxDQUFDTTtJQUNDLE9BQU9DLFFBQVFDLE1BQU0sQ0FBQ0Y7QUFDeEI7QUFHRlosTUFBTUcsWUFBWSxDQUFDQyxPQUFPLENBQUNDLEdBQUcsQ0FDNUIsT0FBT0M7SUFDTEEsT0FBT0UsT0FBTyxDQUFDLGtCQUFrQixHQUFHLE1BQU1YLDREQUFTQTtJQUVuRCxPQUFPUztBQUNULEdBQ0EsQ0FBQ007SUFDQyxPQUFPQyxRQUFRQyxNQUFNLENBQUNGO0FBQ3hCO0FBR0ZaLE1BQU1HLFlBQVksQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLENBQzVCLENBQUNDO0lBQ0NBLE9BQU9FLE9BQU8sQ0FBQyxlQUFlLEdBQUc7SUFDakMsT0FBT0Y7QUFDVCxHQUNBLENBQUNNO0lBQ0MsT0FBT0MsUUFBUUMsTUFBTSxDQUFDRjtBQUN4QiIsInNvdXJjZXMiOlsiRDpcXFByb2dyYW1taW5nXFxCdXNpbmVzc1xcVXJiYW5hdXRcXHdlYlxcc3JjXFxzZXJ2aWNlc1xcYXBpXFxhcGkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4IGZyb20gXCJheGlvc1wiO1xuXG5pbXBvcnQgeyBnZXRMb2NhbGUgfSBmcm9tIFwibmV4dC1pbnRsL3NlcnZlclwiO1xuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gXCJAL2NvbmZpZy9hcGlcIjtcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwiQC9oZWxwZXJzL2F1dGhcIjtcblxuZXhwb3J0IGNvbnN0IGF4aW9zID0gYXguY3JlYXRlKHtcbiAgYmFzZVVSTDogQVBJX1VSTCxcbn0pO1xuXG5heGlvcy5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoXG4gIGFzeW5jIChjb25maWcpID0+IHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpO1xuXG4gICAgaWYgKHNlc3Npb24pIHtcbiAgICAgIGNvbmZpZy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgdG1hICR7ZW5jb2RlVVJJQ29tcG9uZW50KHNlc3Npb24uaW5pdERhdGEpfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfSxcbiAgKGVycm9yKSA9PiB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgfSxcbik7XG5cbmF4aW9zLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShcbiAgYXN5bmMgKGNvbmZpZykgPT4ge1xuICAgIGNvbmZpZy5oZWFkZXJzW1wiQWNjZXB0LUxhbmd1YWdlXCJdID0gYXdhaXQgZ2V0TG9jYWxlKCk7XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9LFxuICAoZXJyb3IpID0+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICB9LFxuKTtcblxuYXhpb3MuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKFxuICAoY29uZmlnKSA9PiB7XG4gICAgY29uZmlnLmhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIjtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9LFxuICAoZXJyb3IpID0+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICB9LFxuKTtcbiJdLCJuYW1lcyI6WyJheCIsImdldExvY2FsZSIsIkFQSV9VUkwiLCJnZXRTZXNzaW9uIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsInNlc3Npb24iLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImVuY29kZVVSSUNvbXBvbmVudCIsImluaXREYXRhIiwiZXJyb3IiLCJQcm9taXNlIiwicmVqZWN0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/services/api/api.ts\n");

/***/ }),

/***/ "(rsc)/./src/services/api/users.ts":
/*!***********************************!*\
  !*** ./src/services/api/users.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUser: () => (/* binding */ getUser)\n/* harmony export */ });\n/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config/api */ \"(rsc)/./src/config/api.ts\");\n/* harmony import */ var _services_api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/api/api */ \"(rsc)/./src/services/api/api.ts\");\n\n\nconst getUser = async (id)=>{\n    try {\n        const url = `${_config_api__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.USER.replace(\":id\", id.toString())}`;\n        const response = await _services_api_api__WEBPACK_IMPORTED_MODULE_1__.axios.get(url);\n        return {\n            success: response.status === 200,\n            ...response.data\n        };\n    } catch (error) {\n        console.error(\"Error fetching:\", error);\n        return {\n            success: false\n        };\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvc2VydmljZXMvYXBpL3VzZXJzLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUNGO0FBTXBDLE1BQU1FLFVBQVUsT0FBT0M7SUFDNUIsSUFBSTtRQUNGLE1BQU1DLE1BQU0sR0FBR0osc0RBQWFBLENBQUNLLElBQUksQ0FBQ0MsT0FBTyxDQUFDLE9BQU9ILEdBQUdJLFFBQVEsS0FBSztRQUNqRSxNQUFNQyxXQUFXLE1BQU1QLG9EQUFLQSxDQUFDUSxHQUFHLENBQUNMO1FBRWpDLE9BQU87WUFDTE0sU0FBU0YsU0FBU0csTUFBTSxLQUFLO1lBQzdCLEdBQUdILFNBQVNJLElBQUk7UUFDbEI7SUFDRixFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLG1CQUFtQkE7UUFDakMsT0FBTztZQUNMSCxTQUFTO1FBQ1g7SUFDRjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIkQ6XFxQcm9ncmFtbWluZ1xcQnVzaW5lc3NcXFVyYmFuYXV0XFx3ZWJcXHNyY1xcc2VydmljZXNcXGFwaVxcdXNlcnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBJX0VORFBPSU5UUyB9IGZyb20gXCJAL2NvbmZpZy9hcGlcIjtcbmltcG9ydCB7IGF4aW9zIH0gZnJvbSBcIkAvc2VydmljZXMvYXBpL2FwaVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJAL3R5cGVzL3VzZXJzXCI7XG5pbXBvcnQgeyBTdWNjZXNzZnVsUmVzcG9uc2UgfSBmcm9tIFwiQC90eXBlcy9hcGlcIjtcblxudHlwZSBVc2VyUmVzcG9uc2UgPSBTdWNjZXNzZnVsUmVzcG9uc2UgJiBVc2VyO1xuXG5leHBvcnQgY29uc3QgZ2V0VXNlciA9IGFzeW5jIChpZDogbnVtYmVyKTogUHJvbWlzZTxVc2VyUmVzcG9uc2U+ID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1cmwgPSBgJHtBUElfRU5EUE9JTlRTLlVTRVIucmVwbGFjZShcIjppZFwiLCBpZC50b1N0cmluZygpKX1gO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogcmVzcG9uc2Uuc3RhdHVzID09PSAyMDAsXG4gICAgICAuLi5yZXNwb25zZS5kYXRhLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgIH0gYXMgVXNlclJlc3BvbnNlO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbIkFQSV9FTkRQT0lOVFMiLCJheGlvcyIsImdldFVzZXIiLCJpZCIsInVybCIsIlVTRVIiLCJyZXBsYWNlIiwidG9TdHJpbmciLCJyZXNwb25zZSIsImdldCIsInN1Y2Nlc3MiLCJzdGF0dXMiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/services/api/users.ts\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22D%3A%5C%5CProgramming%5C%5CBusiness%5C%5CUrbanaut%5C%5Cweb%5C%5Cnode_modules%5C%5Cnext-intl%5C%5Cdist%5C%5Cesm%5C%5Cnavigation%5C%5Cshared%5C%5CBaseLink.js%22%2C%22ids%22%3A%5B%22default%22%5D%7D&modules=%7B%22request%22%3A%22D%3A%5C%5CProgramming%5C%5CBusiness%5C%5CUrbanaut%5C%5Cweb%5C%5Cnode_modules%5C%5Cnext-intl%5C%5Cdist%5C%5Cesm%5C%5Cnavigation%5C%5Cshared%5C%5CLegacyBaseLink.js%22%2C%22ids%22%3A%5B%22default%22%5D%7D&server=true!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22D%3A%5C%5CProgramming%5C%5CBusiness%5C%5CUrbanaut%5C%5Cweb%5C%5Cnode_modules%5C%5Cnext-intl%5C%5Cdist%5C%5Cesm%5C%5Cnavigation%5C%5Cshared%5C%5CBaseLink.js%22%2C%22ids%22%3A%5B%22default%22%5D%7D&modules=%7B%22request%22%3A%22D%3A%5C%5CProgramming%5C%5CBusiness%5C%5CUrbanaut%5C%5Cweb%5C%5Cnode_modules%5C%5Cnext-intl%5C%5Cdist%5C%5Cesm%5C%5Cnavigation%5C%5Cshared%5C%5CLegacyBaseLink.js%22%2C%22ids%22%3A%5B%22default%22%5D%7D&server=true! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./node_modules/next-intl/dist/esm/navigation/shared/BaseLink.js */ \"(ssr)/./node_modules/next-intl/dist/esm/navigation/shared/BaseLink.js\"));\n;\nPromise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./node_modules/next-intl/dist/esm/navigation/shared/LegacyBaseLink.js */ \"(ssr)/./node_modules/next-intl/dist/esm/navigation/shared/LegacyBaseLink.js\"));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWZsaWdodC1jbGllbnQtZW50cnktbG9hZGVyLmpzP21vZHVsZXM9JTdCJTIycmVxdWVzdCUyMiUzQSUyMkQlM0ElNUMlNUNQcm9ncmFtbWluZyU1QyU1Q0J1c2luZXNzJTVDJTVDVXJiYW5hdXQlNUMlNUN3ZWIlNUMlNUNub2RlX21vZHVsZXMlNUMlNUNuZXh0LWludGwlNUMlNUNkaXN0JTVDJTVDZXNtJTVDJTVDbmF2aWdhdGlvbiU1QyU1Q3NoYXJlZCU1QyU1Q0Jhc2VMaW5rLmpzJTIyJTJDJTIyaWRzJTIyJTNBJTVCJTIyZGVmYXVsdCUyMiU1RCU3RCZtb2R1bGVzPSU3QiUyMnJlcXVlc3QlMjIlM0ElMjJEJTNBJTVDJTVDUHJvZ3JhbW1pbmclNUMlNUNCdXNpbmVzcyU1QyU1Q1VyYmFuYXV0JTVDJTVDd2ViJTVDJTVDbm9kZV9tb2R1bGVzJTVDJTVDbmV4dC1pbnRsJTVDJTVDZGlzdCU1QyU1Q2VzbSU1QyU1Q25hdmlnYXRpb24lNUMlNUNzaGFyZWQlNUMlNUNMZWdhY3lCYXNlTGluay5qcyUyMiUyQyUyMmlkcyUyMiUzQSU1QiUyMmRlZmF1bHQlMjIlNUQlN0Qmc2VydmVyPXRydWUhIiwibWFwcGluZ3MiOiJBQUFBLDBPQUErSztBQUMvSztBQUNBLHNQQUFxTCIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiLCB3ZWJwYWNrRXhwb3J0czogW1wiZGVmYXVsdFwiXSAqLyBcIkQ6XFxcXFByb2dyYW1taW5nXFxcXEJ1c2luZXNzXFxcXFVyYmFuYXV0XFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcbmV4dC1pbnRsXFxcXGRpc3RcXFxcZXNtXFxcXG5hdmlnYXRpb25cXFxcc2hhcmVkXFxcXEJhc2VMaW5rLmpzXCIpO1xuO1xuaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIsIHdlYnBhY2tFeHBvcnRzOiBbXCJkZWZhdWx0XCJdICovIFwiRDpcXFxcUHJvZ3JhbW1pbmdcXFxcQnVzaW5lc3NcXFxcVXJiYW5hdXRcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFxuZXh0LWludGxcXFxcZGlzdFxcXFxlc21cXFxcbmF2aWdhdGlvblxcXFxzaGFyZWRcXFxcTGVnYWN5QmFzZUxpbmsuanNcIik7XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22D%3A%5C%5CProgramming%5C%5CBusiness%5C%5CUrbanaut%5C%5Cweb%5C%5Cnode_modules%5C%5Cnext-intl%5C%5Cdist%5C%5Cesm%5C%5Cnavigation%5C%5Cshared%5C%5CBaseLink.js%22%2C%22ids%22%3A%5B%22default%22%5D%7D&modules=%7B%22request%22%3A%22D%3A%5C%5CProgramming%5C%5CBusiness%5C%5CUrbanaut%5C%5Cweb%5C%5Cnode_modules%5C%5Cnext-intl%5C%5Cdist%5C%5Cesm%5C%5Cnavigation%5C%5Cshared%5C%5CLegacyBaseLink.js%22%2C%22ids%22%3A%5B%22default%22%5D%7D&server=true!\n");

/***/ }),

/***/ "../app-render/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/server/app-render/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/action-async-storage.external.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:crypto");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/@formatjs","vendor-chunks/mime-db","vendor-chunks/axios","vendor-chunks/@telegram-apps","vendor-chunks/use-intl","vendor-chunks/next-intl","vendor-chunks/intl-messageformat","vendor-chunks/tslib","vendor-chunks/follow-redirects","vendor-chunks/debug","vendor-chunks/form-data","vendor-chunks/asynckit","vendor-chunks/combined-stream","vendor-chunks/mime-types","vendor-chunks/proxy-from-env","vendor-chunks/ms","vendor-chunks/supports-color","vendor-chunks/delayed-stream","vendor-chunks/has-flag","vendor-chunks/error-kid"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2F(api)%2Fapi%2Fauth%2Froute&page=%2F(api)%2Fapi%2Fauth%2Froute&appPaths=&pagePath=private-next-app-dir%2F(api)%2Fapi%2Fauth%2Froute.ts&appDir=D%3A%5CProgramming%5CBusiness%5CUrbanaut%5Cweb%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProgramming%5CBusiness%5CUrbanaut%5Cweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();