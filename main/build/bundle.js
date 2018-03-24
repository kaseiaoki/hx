/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var output_text = "";
var index = 1;
var hx;
(function (hx) {
    hx[hx["h2"] = 0] = "h2";
    hx[hx["h3"] = 1] = "h3";
    hx[hx["h4"] = 2] = "h4";
    hx[hx["h5"] = 3] = "h5";
})(hx || (hx = {}));
var hxs = ["\\.", "\\((\\d+)\\)", "[①-⑩]+", "・+"];
var EventName = /** @class */ (function () {
    function EventName() {
    }
    EventName.LOAD = "load";
    EventName.CLICK = "click";
    EventName.MOUSE_MOVE = "mousemove";
    return EventName;
}());
var doc = document.getElementById('wordbutton');
doc.addEventListener(EventName.CLICK, function () {
    console.log("hogehoge");
    var input_text = document.getElementById("q_area").value;
    var splited_text = input_text.split(/\r\n|\r|\n/);
    var test = ["1.", "(1)", "①", "・1"];
    splited_text.forEach(function (text) {
        if (text.match(hxs[hx.h2]) != null) {
            text = "<h2>" + text + "</h2>";
        }
        else if (text.match(hxs[hx.h3]) != null) {
            text = "<h3>" + text + "</h3>";
        }
        else if (text.match(hxs[hx.h4]) != null) {
            text = "<h4>" + text + "</h4>";
        }
        else if (text.match(hxs[hx.h5]) != null) {
            text = "<h5>" + text + "</h5>";
        }
        output_text += text + "\r";
    });
    console.log(output_text);
});


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map