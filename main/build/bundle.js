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

var d1 = document.getElementById('output_area');
var text_write = /** @class */ (function () {
    function text_write(inputs) {
        this.output_text = inputs + "\r";
    }
    text_write.prototype.output = function () {
        console.log(this.output_text);
        d1.insertAdjacentHTML('afterend', this.output_text);
    };
    return text_write;
}());
var hx;
(function (hx) {
    hx[hx["h2"] = 0] = "h2";
    hx[hx["h3"] = 1] = "h3";
    hx[hx["h4"] = 2] = "h4";
    hx[hx["h5"] = 3] = "h5";
})(hx || (hx = {}));
var hxs = ["\\．", "\\((\\d+)\\)", "[①-⑩]+", "・+"];
var EventName = /** @class */ (function () {
    function EventName() {
    }
    EventName.LOAD = "load";
    EventName.CLICK = "click";
    EventName.MOUSE_MOVE = "mousemove";
    EventName.ON_MouseUp = "onMouseOut";
    return EventName;
}());
var add_tags = function (splited) {
    var add_tag_text;
    splited.forEach(function (text) {
        if (text.match(hxs[hx.h2]) != null) {
            add_tag_text += "<h2>" + text + "</h2>";
        }
        else if (text.match(hxs[hx.h3]) != null) {
            add_tag_text += "<h3>" + text + "</h3>";
        }
        else if (text.match(hxs[hx.h4]) != null) {
            add_tag_text += "<h4>" + text + "</h4>";
        }
        else {
            add_tag_text += text + "\r";
        }
        // }else if(text.match(hxs[hx.h5])!=null){
        //   text="<h5>"+text+"</h5>";
        // }
    });
    return add_tag_text;
};
var doc = document.getElementById('wordbutton');
doc.addEventListener(EventName.CLICK, function () {
    var input_text = document.getElementById("q_area").value;
    var splited_text = input_text.split(/\r\n|\r|\n/);
    var test = ["1.", "(1)", "①", "・1"];
    var t = new text_write(add_tags(splited_text));
    t.output();
});
var sepa = document.getElementById('sepabutton');
sepa.addEventListener(EventName.CLICK, function () {
    var input_text = document.getElementById("q_area").value;
    var splited_text = input_text.split(/。/);
    // console.log(splited_text);
    console.log(separate_text(splited_text));
    d1.insertAdjacentHTML('afterend', separate_text(splited_text));
    // document.write(separate_text(splited_text))
});
var clear = document.getElementById('clearbutton');
clear.addEventListener(EventName.CLICK, function () {
    var area_text = document.getElementById("q_area");
    area_text.value = "";
});
var sentence_block = /** @class */ (function () {
    function sentence_block() {
        this.document = "<h2> </h2>\n";
        this.break_mark = "\n\n";
        this.block = ["\n"];
        this.htag = "<h2> </h2>";
    }
    sentence_block.prototype.spush = function (s) {
        this.block.push(s);
        if (this.block.length % 3 == 0) {
            this.block.push("。" + this.break_mark);
            this.document = this.block.join("");
        }
        else if (this.block.length % 7 == 0) {
            console.log(this.block.length);
            this.block.push(this.break_mark);
            this.block.push(this.htag);
            this.block.push(this.break_mark);
        }
    };
    return sentence_block;
}());
var separate_text = function (result) {
    var sb = new sentence_block();
    result.forEach(function (sentence) { sb.spush(sentence); });
    return sb.htag + sb.document;
};
var tasks;
(function (tasks) {
    tasks[tasks["hero"] = 0] = "hero";
    tasks[tasks["break"] = 1] = "break";
    tasks[tasks["marking"] = 2] = "marking";
    tasks[tasks["photo"] = 3] = "photo";
    tasks[tasks["category"] = 4] = "category";
})(tasks || (tasks = {}));
var notifications = /** @class */ (function () {
    function notifications() {
        this.notification = document.getElementById("done_notification");
    }
    notifications.prototype.in_visible = function () {
        var style = this.notification.style;
        style.visibility = 'hidden';
        var checks = document.getElementsByName("done");
        checks[string_index[tasks.hero]].checked = false;
        checks[string_index[tasks.break]].checked = false;
        checks[string_index[tasks.marking]].checked = false;
        checks[string_index[tasks.photo]].checked = false;
        checks[string_index[tasks.category]].checked = false;
    };
    notifications.prototype.visible = function () {
        var style = this.notification.style;
        style.visibility = 'visible';
    };
    return notifications;
}());
var delete_notification = document.getElementById('delete-button');
delete_notification.addEventListener(EventName.CLICK, function () {
    var dn = new notifications();
    dn.in_visible();
});
var string_index = ['0', '1', '2', '3', '4', '5'];
var task_d = document.getElementById('task_done');
task_d.addEventListener(EventName.CLICK, function () {
    var checks = document.getElementsByName("done");
    console.log(checks[string_index[tasks.hero]].checked);
    if (checks[string_index[tasks.hero]].checked == true && checks[string_index[tasks.break]].checked == true && checks[string_index[tasks.marking]].checked == true
        && checks[string_index[tasks.photo]].checked == true && checks[string_index[tasks.category]].checked == true) {
        var an = new notifications();
        an.visible();
    }
});
// var filename_ex="url".match(".+/(.+?)$")[1]
// var filename_ex="url".match(".+/(.+?)\.[a-z]+$")[1]


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map