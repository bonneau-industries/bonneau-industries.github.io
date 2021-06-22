(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/pkg/heracles_lib.js":
/*!*********************************!*\
  !*** ./src/pkg/heracles_lib.js ***!
  \*********************************/
/*! exports provided: formatMoney, bench, __wbindgen_string_new */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _heracles_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heracles_lib_bg.wasm */ \"./src/pkg/heracles_lib_bg.wasm\");\n/* harmony import */ var _heracles_lib_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heracles_lib_bg.js */ \"./src/pkg/heracles_lib_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"formatMoney\", function() { return _heracles_lib_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"formatMoney\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"bench\", function() { return _heracles_lib_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"bench\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return _heracles_lib_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_string_new\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/pkg/heracles_lib.js?");

/***/ }),

/***/ "./src/pkg/heracles_lib_bg.js":
/*!************************************!*\
  !*** ./src/pkg/heracles_lib_bg.js ***!
  \************************************/
/*! exports provided: formatMoney, bench, __wbindgen_string_new */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(TextDecoder, module, TextEncoder) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatMoney\", function() { return formatMoney; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bench\", function() { return bench; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony import */ var _heracles_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heracles_lib_bg.wasm */ \"./src/pkg/heracles_lib_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _heracles_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_heracles_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nfunction getObject(idx) { return heap[idx]; }\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n/**\n* @param {string} input\n* @returns {any}\n*/\nfunction formatMoney(input) {\n    var ptr0 = passStringToWasm0(input, _heracles_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _heracles_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    var ret = _heracles_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"formatMoney\"](ptr0, len0);\n    return takeObject(ret);\n}\n\n/**\n* @returns {any}\n*/\nfunction bench() {\n    var ret = _heracles_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"bench\"]();\n    return takeObject(ret);\n}\n\nfunction __wbindgen_string_new(arg0, arg1) {\n    var ret = getStringFromWasm0(arg0, arg1);\n    return addHeapObject(ret);\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ \"./node_modules/text-encoding/index.js\")[\"TextDecoder\"], __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module), __webpack_require__(/*! text-encoding */ \"./node_modules/text-encoding/index.js\")[\"TextEncoder\"]))\n\n//# sourceURL=webpack:///./src/pkg/heracles_lib_bg.js?");

/***/ }),

/***/ "./src/pkg/heracles_lib_bg.wasm":
/*!**************************************!*\
  !*** ./src/pkg/heracles_lib_bg.wasm ***!
  \**************************************/
/*! exports provided: memory, formatMoney, bench, __wbindgen_malloc, __wbindgen_realloc */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./heracles_lib_bg.js */ \"./src/pkg/heracles_lib_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./src/pkg/heracles_lib_bg.wasm?");

/***/ })

}]);