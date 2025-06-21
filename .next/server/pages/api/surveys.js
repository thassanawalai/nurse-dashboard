"use strict";
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
exports.id = "pages/api/surveys";
exports.ids = ["pages/api/surveys"];
exports.modules = {

/***/ "(api-node)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dbConnect)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nconst MONGODB_DB = process.env.MONGODB_DB; // เพิ่มถ้าต้องการระบุชื่อ database\nif (!MONGODB_URI) throw new Error('Please define MONGODB_URI in .env.local');\nlet cached = global.mongo || {\n    conn: null,\n    promise: null\n};\nasync function dbConnect() {\n    if (cached.conn) return cached.conn;\n    if (!cached.promise) {\n        cached.promise = mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(MONGODB_URI, {\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        });\n    }\n    const client = await cached.promise;\n    cached.conn = MONGODB_DB ? client.db(MONGODB_DB) : client.db();\n    return cached.conn;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL2xpYi9tb25nb2RiLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzQztBQUV0QyxNQUFNQyxjQUFjQyxRQUFRQyxHQUFHLENBQUNGLFdBQVc7QUFDM0MsTUFBTUcsYUFBYUYsUUFBUUMsR0FBRyxDQUFDQyxVQUFVLEVBQUUsbUNBQW1DO0FBRTlFLElBQUksQ0FBQ0gsYUFBYSxNQUFNLElBQUlJLE1BQU07QUFFbEMsSUFBSUMsU0FBU0MsT0FBT0MsS0FBSyxJQUFJO0lBQUVDLE1BQU07SUFBTUMsU0FBUztBQUFLO0FBRTFDLGVBQWVDO0lBQzVCLElBQUlMLE9BQU9HLElBQUksRUFBRSxPQUFPSCxPQUFPRyxJQUFJO0lBQ25DLElBQUksQ0FBQ0gsT0FBT0ksT0FBTyxFQUFFO1FBQ25CSixPQUFPSSxPQUFPLEdBQUdWLGdEQUFXQSxDQUFDWSxPQUFPLENBQUNYLGFBQWE7WUFDaERZLGlCQUFpQjtZQUNqQkMsb0JBQW9CO1FBQ3RCO0lBQ0Y7SUFDQSxNQUFNQyxTQUFTLE1BQU1ULE9BQU9JLE9BQU87SUFDbkNKLE9BQU9HLElBQUksR0FBR0wsYUFBYVcsT0FBT0MsRUFBRSxDQUFDWixjQUFjVyxPQUFPQyxFQUFFO0lBQzVELE9BQU9WLE9BQU9HLElBQUk7QUFDcEIiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTVNJSVxcT25lRHJpdmVcXERlc2t0b3BcXHJlc3VsdHdlYlxcbnVyc2UtZGFzaGJvYXJkXFxsaWJcXG1vbmdvZGIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJztcblxuY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcbmNvbnN0IE1PTkdPREJfREIgPSBwcm9jZXNzLmVudi5NT05HT0RCX0RCOyAvLyDguYDguJ7guLTguYjguKHguJbguYnguLLguJXguYnguK3guIfguIHguLLguKPguKPguLDguJrguLjguIrguLfguYjguK0gZGF0YWJhc2VcblxuaWYgKCFNT05HT0RCX1VSSSkgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgZGVmaW5lIE1PTkdPREJfVVJJIGluIC5lbnYubG9jYWwnKTtcblxubGV0IGNhY2hlZCA9IGdsb2JhbC5tb25nbyB8fCB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCkge1xuICBpZiAoY2FjaGVkLmNvbm4pIHJldHVybiBjYWNoZWQuY29ubjtcbiAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xuICAgIGNhY2hlZC5wcm9taXNlID0gTW9uZ29DbGllbnQuY29ubmVjdChNT05HT0RCX1VSSSwge1xuICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgIH0pO1xuICB9XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNhY2hlZC5wcm9taXNlO1xuICBjYWNoZWQuY29ubiA9IE1PTkdPREJfREIgPyBjbGllbnQuZGIoTU9OR09EQl9EQikgOiBjbGllbnQuZGIoKTtcbiAgcmV0dXJuIGNhY2hlZC5jb25uO1xufVxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9EQiIsIkVycm9yIiwiY2FjaGVkIiwiZ2xvYmFsIiwibW9uZ28iLCJjb25uIiwicHJvbWlzZSIsImRiQ29ubmVjdCIsImNvbm5lY3QiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJjbGllbnQiLCJkYiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api-node)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fsurveys&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Csurveys.js&middlewareConfigBase64=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fsurveys&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Csurveys.js&middlewareConfigBase64=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages-api/module.compiled */ \"(api-node)/./node_modules/next/dist/server/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(api-node)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api-node)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_surveys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\surveys.js */ \"(api-node)/./pages/api/surveys.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_surveys_js__WEBPACK_IMPORTED_MODULE_3__, 'default'));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_surveys_js__WEBPACK_IMPORTED_MODULE_3__, 'config');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/surveys\",\n        pathname: \"/api/surveys\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    userland: _pages_api_surveys_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2luZGV4LmpzP2tpbmQ9UEFHRVNfQVBJJnBhZ2U9JTJGYXBpJTJGc3VydmV5cyZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTVDYXBpJTVDc3VydmV5cy5qcyZtaWRkbGV3YXJlQ29uZmlnQmFzZTY0PWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDRTtBQUMxRDtBQUNxRDtBQUNyRDtBQUNBLGlFQUFlLHdFQUFLLENBQUMsa0RBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sZUFBZSx3RUFBSyxDQUFDLGtEQUFRO0FBQ3BDO0FBQ08sd0JBQXdCLHlHQUFtQjtBQUNsRDtBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzQVBJUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL3BhZ2VzLWFwaS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vcGFnZXNcXFxcYXBpXFxcXHN1cnZleXMuanNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgJ2RlZmF1bHQnKTtcbi8vIFJlLWV4cG9ydCBjb25maWcuXG5leHBvcnQgY29uc3QgY29uZmlnID0gaG9pc3QodXNlcmxhbmQsICdjb25maWcnKTtcbi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IFBhZ2VzQVBJUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLlBBR0VTX0FQSSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3N1cnZleXNcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9zdXJ2ZXlzXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogJycsXG4gICAgICAgIGZpbGVuYW1lOiAnJ1xuICAgIH0sXG4gICAgdXNlcmxhbmRcbn0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdlcy1hcGkuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fsurveys&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Csurveys.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api-node)/./pages/api/surveys.js":
/*!******************************!*\
  !*** ./pages/api/surveys.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/mongodb */ \"(api-node)/./lib/mongodb.js\");\n\nasync function handler(req, res) {\n    const db = await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const collection = db.collection('surveys');\n    if (req.method === 'GET') {\n        const surveys = await collection.find({}).toArray();\n        res.status(200).json(surveys);\n    } else {\n        res.status(405).json({\n            message: 'Method not allowed'\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL3BhZ2VzL2FwaS9zdXJ2ZXlzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBDO0FBRTNCLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUM1QyxNQUFNQyxLQUFLLE1BQU1KLHdEQUFTQTtJQUMxQixNQUFNSyxhQUFhRCxHQUFHQyxVQUFVLENBQUM7SUFFakMsSUFBSUgsSUFBSUksTUFBTSxLQUFLLE9BQU87UUFDeEIsTUFBTUMsVUFBVSxNQUFNRixXQUFXRyxJQUFJLENBQUMsQ0FBQyxHQUFHQyxPQUFPO1FBQ2pETixJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDSjtJQUN2QixPQUFPO1FBQ0xKLElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztRQUFxQjtJQUN2RDtBQUNGIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXE1TSUlcXE9uZURyaXZlXFxEZXNrdG9wXFxyZXN1bHR3ZWJcXG51cnNlLWRhc2hib2FyZFxccGFnZXNcXGFwaVxcc3VydmV5cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGJDb25uZWN0IGZyb20gJy4uLy4uL2xpYi9tb25nb2RiJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCBkYiA9IGF3YWl0IGRiQ29ubmVjdCgpO1xuICBjb25zdCBjb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignc3VydmV5cycpO1xuXG4gIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xuICAgIGNvbnN0IHN1cnZleXMgPSBhd2FpdCBjb2xsZWN0aW9uLmZpbmQoe30pLnRvQXJyYXkoKTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihzdXJ2ZXlzKTtcbiAgfSBlbHNlIHtcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6ICdNZXRob2Qgbm90IGFsbG93ZWQnIH0pO1xuICB9XG59Il0sIm5hbWVzIjpbImRiQ29ubmVjdCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJkYiIsImNvbGxlY3Rpb24iLCJtZXRob2QiLCJzdXJ2ZXlzIiwiZmluZCIsInRvQXJyYXkiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api-node)/./pages/api/surveys.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fsurveys&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Csurveys.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();