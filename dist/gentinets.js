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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/gentinets.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components.ts":
/*!***************************!*\
  !*** ./src/components.ts ***!
  \***************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects */ "./src/objects.ts");
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debug */ "./src/debug.ts");
/* exported Component */


/**
 * This is a base class of the component of the engine,
 * Components are single instance pieces of the engine.
 * The engine consist of multiple components which perform various tasks.
 * Some Components form part of the core of the Engine, others could
 * be added as need at runtime.
 * When the Engine is ready, it will create the instance of the component and pass itself as the engine parameter.
 * Each Component instance has access to the engine
 * The engine is the responsable for calling new Component, this constructor shouldn't be called in the game code
 * @param {object} params Object literal with parameters passed to the component constructed
 * @param {object} engine The instance of the engine, this will be passed by the engine
 */
class Component extends _objects__WEBPACK_IMPORTED_MODULE_0__["Entity"] {
    constructor(params) {
        super(params);
    }
    params() {
        return ['name', 'engine'];
    }
    /**
     * Method called when the component has been added to the engine and is ready
     */
    init() {
        _debug__WEBPACK_IMPORTED_MODULE_1__["Debug"].success(`${this.name} initialized`);
    }
    /**
     * Method called each cycle of the engine game loop
     */
    move() { }
    /**
     * Method called each cycle of the engine game loop
     */
    draw() { }
}


/***/ }),

/***/ "./src/debug.ts":
/*!**********************!*\
  !*** ./src/debug.ts ***!
  \**********************/
/*! exports provided: Debug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Debug", function() { return Debug; });
/* exported Debug */
/**
 * Class with static methods to facilitate the messages on the javascript console.
 * All the methods of Debug class will only run if the debug mode is on.
 * To activate the debug mode, declare a global variable before initializing the engine
 * with the name: GENGINE_DEBUG_MODE = true.
 * If the debug mode is off, no messages would be sent to the console.
 * While developing your project, its recomended to have the debug mode on to get
 * some messages of the state of the engine.
 */
class Debug {
    static active() {
        return window['GENGINE_DEBUG_MODE'];
    }
    static log(message) {
        if (!Debug.active()) {
            return;
        }
        console.trace();
        console.log(message);
    }
    static info(message) {
        if (!Debug.active()) {
            return;
        }
        console.info(`%c${message}`, 'color: blue');
    }
    static success(message) {
        if (!Debug.active()) {
            return;
        }
        console.info(`%c${message}`, 'color: green');
    }
    static warn(message) {
        if (!Debug.active()) {
            return;
        }
        console.warn(message);
    }
    static error(message) {
        if (!Debug.active()) {
            return;
        }
        console.groupEnd();
        if (window['GENGINE_DEBUG_THROW']) {
            throw new Error(message);
        }
        else {
            console.error(message);
        }
    }
    static group(name) {
        if (!Debug.active()) {
            return;
        }
        console.groupCollapsed(name);
    }
    static groupEnd() {
        if (!Debug.active()) {
            return;
        }
        console.groupEnd();
    }
    /**
     * Validates that the object literal of the constructor
     * has the elements of the required array
     * @param  {object} params   The constructor argument
     * @param  {array} required The list of required keys
     */
    static validateParams(name, params, required) {
        if (!Debug.active()) {
            return;
        }
        if (!required || !required.length) {
            return;
        }
        if (required.length && !params) {
            Debug.warn(`${name} requires this members in the constructor: {${required.join(',')}}`);
        }
        for (const key of required) {
            if (typeof params[key] === "undefined") {
                Debug.error(`${name} requires of "${key}" in the constructor`);
            }
        }
    }
}


/***/ }),

/***/ "./src/engine.ts":
/*!***********************!*\
  !*** ./src/engine.ts ***!
  \***********************/
/*! exports provided: Engine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Engine", function() { return Engine; });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/components.ts");
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debug */ "./src/debug.ts");


/**
 * Engine is the main object of the game engine.
 * Engine consist of a group of different components which manage different tasks.
 * Each component is a lego piece, and the engine is the glue which binds them together.
 * Once the document is ready, Engine will initialize each component added
 * into it, call the preloader method, execute the game creation function
 * and then start executing the game loop.
 */
class Engine extends _components__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(params) {
        super(params);
        this.update = () => {
            this.move();
            this.draw();
            this.debugInfo();
            window.requestAnimationFrame(this.update);
        };
        this.engine = this;
        this.x = 0;
        this.y = 0;
        this.components = new Map();
        // this.utils = new Utils();
    }
    params() {
        return ['canvas', 'width', 'height'];
    }
    init() {
        super.init();
        this.update();
    }
    /*
    public init() {
        Debug.group('Engine loaded components');
        this.addComponent("Resources", Resources);
        this.addComponent("Camera", Camera, {
            x: 0,
            y: 0,
            width: this.width,
            height: this.height
        });
        this.addComponent("Input", Input);
        this.addComponent("Time", Time);
        this.addComponent("Sound", Sound);
        this.addComponent("Display", CanvasDisplay, {
            id: 'canvas',
            x: 0,
            y: 0,
            width: this.width,
            height: this.height
        });
        this.addComponent("Stage", Stage);
        this.addComponent("Events", Events);
        Debug.groupEnd();
        this.time = this.component.Time;
        this.display = this.component.Display;
        this.stage = this.component.Stage;
        this.resources = this.component.Resources;
        this.sound = this.component.Sound;
        this.input = this.component.Input;
    }
    */
    /**
     * Static function to replace the windows.onload method.
     * Once the window is ready, engine will initialize its components, execute
     * the preloader and when preloader loaded all the resources, create the game
     * and execute the gameloop.
     */
    /*
   static create(params) {
       Debug.validateParams('Engine.create', params, ["canvas", "width", "height", "preload", "game"]);
       (function() {
           let engine = new Engine({
               canvas: params.canvas,
               width: params.width,
               height: params.height
           });
           window.addEventListener('load', function() {
               engine.init();
               params.preload(engine);
               engine.resources.preload(params.game); // important: preload on complete calls game function
               engine.gameLoop();
           });
       })();
   }*/
    add(name, component, params = {}) {
        if (_debug__WEBPACK_IMPORTED_MODULE_1__["Debug"].active()) {
            if (this.components.has(name)) {
                _debug__WEBPACK_IMPORTED_MODULE_1__["Debug"].error(`Component ${name} is already defined`);
            }
        }
        params.name = name;
        params.engine = this;
        const instance = new component(params);
        this.components.set(name, instance);
        instance.init();
    }
    get(name) {
        if (_debug__WEBPACK_IMPORTED_MODULE_1__["Debug"].active()) {
            if (!this.components.has(name)) {
                _debug__WEBPACK_IMPORTED_MODULE_1__["Debug"].error(`Component ${name} is not registred`);
            }
        }
        return this.components.get(name);
    }
    move() {
        console.log('move');
        for (const component of this.components) {
            component[1].move();
        }
    }
    draw() {
        /*this.display.clear();
        for (let component of this.components) {
            component.draw();
        }*/
    }
    debugInfo() {
        if (!_debug__WEBPACK_IMPORTED_MODULE_1__["Debug"].active()) {
            return;
        }
        /* this.display.fillText((this.time.time).toFixed(2), 20, 20);
        this.display.fillText((this.time.deltaTime).toFixed(4), 20, 40);
        this.display.fillText(this.time.fps.toFixed(2), 20, 60);*/
    }
}


/***/ }),

/***/ "./src/gentinets.ts":
/*!**************************!*\
  !*** ./src/gentinets.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine */ "./src/engine.ts");

const gentinets = {
    version: '1.0.0.0'
};
/*
if (typeof window !== 'undefined') {
    window['gentinets'] = gentinets;
} else {
    exports.gentinets = gentinets;
}
*/
window['GENGINE_DEBUG_MODE'] = true;
window['GENGINE_DEBUG_THROW'] = false;
const engine = new _engine__WEBPACK_IMPORTED_MODULE_0__["Engine"]({
    name: 'engine',
    canvas: 'canvas',
    width: 100,
    height: 100
});
engine.init();


/***/ }),

/***/ "./src/objects.ts":
/*!************************!*\
  !*** ./src/objects.ts ***!
  \************************/
/*! exports provided: Entity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entity", function() { return Entity; });
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debug */ "./src/debug.ts");

/**
 * Base Object of mostly all the classes of the engine.
 * It creates a structure so that when instances of objects are created,
 * the parameters are passed as object literals.
 *
 * @example
 * let o = new GameObject({x: 0, y: 0});
 *
 */
class Entity {
    constructor(params) {
        this.config = () => ({});
        _debug__WEBPACK_IMPORTED_MODULE_0__["Debug"].validateParams(this.constructor.name, params, this.params());
        console.log(this.params());
        Object.assign(this, params);
        const config = this.config();
        for (const key in config) {
            if (typeof this[key] === "undefined") {
                this[key] = config[key];
            }
        }
    }
    params() {
        return [];
    }
    init() { }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlYnVnLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbnRpbmV0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBQXdCO0FBRW9CO0FBRVo7QUFFaEM7Ozs7Ozs7Ozs7O0dBV0c7QUFDSSxNQUFNLFNBQVUsU0FBUSwrQ0FBTTtJQU9wQyxZQUFZLE1BQWU7UUFDMUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQU5NLE1BQU07UUFDWixPQUFPLENBQUMsTUFBTSxF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RyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzNCO1NBQ0o7SUFDTCxDQUFDO0lBaEJNLE1BQU07UUFDVCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFTSxJQUFJLEtBQVcsQ0FBQztDQWExQiIsImZpbGUiOiJnZW50aW5ldHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9nZW50aW5ldHMudHNcIik7XG4iLCIvKiBleHBvcnRlZCBDb21wb25lbnQgKi9cclxuXHJcbmltcG9ydCB7IElQYXJhbXMsIEVudGl0eSB9IGZyb20gXCIuL29iamVjdHNcIjtcclxuaW1wb3J0IHsgRW5naW5lIH0gZnJvbSBcIi4vZW5naW5lXCI7XHJcbmltcG9ydCB7IERlYnVnIH0gZnJvbSBcIi4vZGVidWdcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGlzIGEgYmFzZSBjbGFzcyBvZiB0aGUgY29tcG9uZW50IG9mIHRoZSBlbmdpbmUsXHJcbiAqIENvbXBvbmVudHMgYXJlIHNpbmdsZSBpbnN0YW5jZSBwaWVjZXMgb2YgdGhlIGVuZ2luZS5cclxuICogVGhlIGVuZ2luZSBjb25zaXN0IG9mIG11bHRpcGxlIGNvbXBvbmVudHMgd2hpY2ggcGVyZm9ybSB2YXJpb3VzIHRhc2tzLlxyXG4gKiBTb21lIENvbXBvbmVudHMgZm9ybSBwYXJ0IG9mIHRoZSBjb3JlIG9mIHRoZSBFbmdpbmUsIG90aGVycyBjb3VsZFxyXG4gKiBiZSBhZGRlZCBhcyBuZWVkIGF0IHJ1bnRpbWUuXHJcbiAqIFdoZW4gdGhlIEVuZ2luZSBpcyByZWFkeSwgaXQgd2lsbCBjcmVhdGUgdGhlIGluc3RhbmNlIG9mIHRoZSBjb21wb25lbnQgYW5kIHBhc3MgaXRzZWxmIGFzIHRoZSBlbmdpbmUgcGFyYW1ldGVyLlxyXG4gKiBFYWNoIENvbXBvbmVudCBpbnN0YW5jZSBoYXMgYWNjZXNzIHRvIHRoZSBlbmdpbmVcclxuICogVGhlIGVuZ2luZSBpcyB0aGUgcmVzcG9uc2FibGUgZm9yIGNhbGxpbmcgbmV3IENvbXBvbmVudCwgdGhpcyBjb25zdHJ1Y3RvciBzaG91bGRuJ3QgYmUgY2FsbGVkIGluIHRoZSBnYW1lIGNvZGVcclxuICogQHBhcmFtIHtvYmplY3R9IHBhcmFtcyBPYmplY3QgbGl0ZXJhbCB3aXRoIHBhcmFtZXRlcnMgcGFzc2VkIHRvIHRoZSBjb21wb25lbnQgY29uc3RydWN0ZWRcclxuICogQHBhcmFtIHtvYmplY3R9IGVuZ2luZSBUaGUgaW5zdGFuY2Ugb2YgdGhlIGVuZ2luZSwgdGhpcyB3aWxsIGJlIHBhc3NlZCBieSB0aGUgZW5naW5lXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgRW50aXR5IHtcclxuICAgIHB1YmxpYyBlbmdpbmU6IEVuZ2luZTtcclxuXHRwcml2YXRlIG5hbWU6IHN0cmluZztcclxuXHRwdWJsaWMgcGFyYW1zKCk6IHN0cmluZ1tdIHtcclxuXHRcdHJldHVybiBbJ25hbWUnLCAnZW5naW5lJ107XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3RvcihwYXJhbXM6IElQYXJhbXMpIHtcclxuXHRcdHN1cGVyKHBhcmFtcyk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBNZXRob2QgY2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBhZGRlZCB0byB0aGUgZW5naW5lIGFuZCBpcyByZWFkeVxyXG5cdCAqL1xyXG5cdHB1YmxpYyBpbml0KCk6IHZvaWQge1xyXG5cdFx0RGVidWcuc3VjY2VzcyhgJHt0aGlzLm5hbWV9IGluaXRpYWxpemVkYCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBNZXRob2QgY2FsbGVkIGVhY2ggY3ljbGUgb2YgdGhlIGVuZ2luZSBnYW1lIGxvb3BcclxuXHQgKi9cclxuXHRwdWJsaWMgbW92ZSgpOiB2b2lkIHsgfVxyXG5cclxuXHQvKipcclxuXHQgKiBNZXRob2QgY2FsbGVkIGVhY2ggY3ljbGUgb2YgdGhlIGVuZ2luZSBnYW1lIGxvb3BcclxuXHQgKi9cclxuXHRwdWJsaWMgZHJhdygpOiB2b2lkIHsgfVxyXG5cclxufVxyXG4iLCIvKiBleHBvcnRlZCBEZWJ1ZyAqL1xyXG4vKipcclxuICogQ2xhc3Mgd2l0aCBzdGF0aWMgbWV0aG9kcyB0byBmYWNpbGl0YXRlIHRoZSBtZXNzYWdlcyBvbiB0aGUgamF2YXNjcmlwdCBjb25zb2xlLlxyXG4gKiBBbGwgdGhlIG1ldGhvZHMgb2YgRGVidWcgY2xhc3Mgd2lsbCBvbmx5IHJ1biBpZiB0aGUgZGVidWcgbW9kZSBpcyBvbi5cclxuICogVG8gYWN0aXZhdGUgdGhlIGRlYnVnIG1vZGUsIGRlY2xhcmUgYSBnbG9iYWwgdmFyaWFibGUgYmVmb3JlIGluaXRpYWxpemluZyB0aGUgZW5naW5lXHJcbiAqIHdpdGggdGhlIG5hbWU6IEdFTkdJTkVfREVCVUdfTU9ERSA9IHRydWUuXHJcbiAqIElmIHRoZSBkZWJ1ZyBtb2RlIGlzIG9mZiwgbm8gbWVzc2FnZXMgd291bGQgYmUgc2VudCB0byB0aGUgY29uc29sZS5cclxuICogV2hpbGUgZGV2ZWxvcGluZyB5b3VyIHByb2plY3QsIGl0cyByZWNvbWVuZGVkIHRvIGhhdmUgdGhlIGRlYnVnIG1vZGUgb24gdG8gZ2V0XHJcbiAqIHNvbWUgbWVzc2FnZXMgb2YgdGhlIHN0YXRlIG9mIHRoZSBlbmdpbmUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRGVidWcge1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGFjdGl2ZSgpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiB3aW5kb3dbJ0dFTkdJTkVfREVCVUdfTU9ERSddO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBsb2cobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcblx0XHRpZiAoIURlYnVnLmFjdGl2ZSgpKSB7IHJldHVybjsgfVxyXG5cdFx0Y29uc29sZS50cmFjZSgpO1xyXG5cdFx0Y29uc29sZS5sb2cobWVzc2FnZSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGluZm8obWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcblx0XHRpZiAoIURlYnVnLmFjdGl2ZSgpKSB7IHJldHVybjsgfVxyXG5cdFx0Y29uc29sZS5pbmZvKGAlYyR7bWVzc2FnZX1gLCAnY29sb3I6IGJsdWUnKTtcclxuXHR9XHJcblx0cHVibGljIHN0YXRpYyBzdWNjZXNzKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG5cdFx0aWYgKCFEZWJ1Zy5hY3RpdmUoKSkgeyByZXR1cm47IH1cclxuXHRcdGNvbnNvbGUuaW5mbyhgJWMke21lc3NhZ2V9YCwgJ2NvbG9yOiBncmVlbicpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyB3YXJuKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG5cdFx0aWYgKCFEZWJ1Zy5hY3RpdmUoKSkgeyByZXR1cm47IH1cclxuXHRcdGNvbnNvbGUud2FybihtZXNzYWdlKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZXJyb3IobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcblx0XHRpZiAoIURlYnVnLmFjdGl2ZSgpKSB7IHJldHVybjsgfVxyXG5cdFx0Y29uc29sZS5ncm91cEVuZCgpO1xyXG5cdFx0aWYgKHdpbmRvd1snR0VOR0lORV9ERUJVR19USFJPVyddKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGdyb3VwKG5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG5cdFx0aWYgKCFEZWJ1Zy5hY3RpdmUoKSkgeyByZXR1cm47IH1cclxuXHRcdGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQobmFtZSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGdyb3VwRW5kKCkge1xyXG5cdFx0aWYgKCFEZWJ1Zy5hY3RpdmUoKSkgeyByZXR1cm47IH1cclxuXHRcdGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFZhbGlkYXRlcyB0aGF0IHRoZSBvYmplY3QgbGl0ZXJhbCBvZiB0aGUgY29uc3RydWN0b3JcclxuXHQgKiBoYXMgdGhlIGVsZW1lbnRzIG9mIHRoZSByZXF1aXJlZCBhcnJheVxyXG5cdCAqIEBwYXJhbSAge29iamVjdH0gcGFyYW1zICAgVGhlIGNvbnN0cnVjdG9yIGFyZ3VtZW50XHJcblx0ICogQHBhcmFtICB7YXJyYXl9IHJlcXVpcmVkIFRoZSBsaXN0IG9mIHJlcXVpcmVkIGtleXNcclxuXHQgKi9cclxuXHRwdWJsaWMgc3RhdGljIHZhbGlkYXRlUGFyYW1zKG5hbWU6IHN0cmluZywgcGFyYW1zOiBhbnksIHJlcXVpcmVkOiBhbnkpOiB2b2lkIHtcclxuXHRcdGlmICghRGVidWcuYWN0aXZlKCkpIHsgcmV0dXJuOyB9XHJcblx0XHRpZiAoIXJlcXVpcmVkIHx8ICFyZXF1aXJlZC5sZW5ndGgpIHsgcmV0dXJuOyB9XHJcblx0XHRpZiAocmVxdWlyZWQubGVuZ3RoICYmICFwYXJhbXMpIHtcclxuXHRcdFx0RGVidWcud2FybihgJHtuYW1lfSByZXF1aXJlcyB0aGlzIG1lbWJlcnMgaW4gdGhlIGNvbnN0cnVjdG9yOiB7JHtyZXF1aXJlZC5qb2luKCcsJyl9fWApO1xyXG5cdFx0fVxyXG5cdFx0Zm9yIChjb25zdCBrZXkgb2YgcmVxdWlyZWQpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBwYXJhbXNba2V5XSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG5cdFx0XHRcdERlYnVnLmVycm9yKGAke25hbWV9IHJlcXVpcmVzIG9mIFwiJHtrZXl9XCIgaW4gdGhlIGNvbnN0cnVjdG9yYCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IElQYXJhbXMgfSBmcm9tICcuL29iamVjdHMnO1xyXG5pbXBvcnQgeyBEZWJ1ZyB9IGZyb20gJy4vZGVidWcnO1xyXG5cclxuLyoqXHJcbiAqIEVuZ2luZSBpcyB0aGUgbWFpbiBvYmplY3Qgb2YgdGhlIGdhbWUgZW5naW5lLlxyXG4gKiBFbmdpbmUgY29uc2lzdCBvZiBhIGdyb3VwIG9mIGRpZmZlcmVudCBjb21wb25lbnRzIHdoaWNoIG1hbmFnZSBkaWZmZXJlbnQgdGFza3MuXHJcbiAqIEVhY2ggY29tcG9uZW50IGlzIGEgbGVnbyBwaWVjZSwgYW5kIHRoZSBlbmdpbmUgaXMgdGhlIGdsdWUgd2hpY2ggYmluZHMgdGhlbSB0b2dldGhlci5cclxuICogT25jZSB0aGUgZG9jdW1lbnQgaXMgcmVhZHksIEVuZ2luZSB3aWxsIGluaXRpYWxpemUgZWFjaCBjb21wb25lbnQgYWRkZWRcclxuICogaW50byBpdCwgY2FsbCB0aGUgcHJlbG9hZGVyIG1ldGhvZCwgZXhlY3V0ZSB0aGUgZ2FtZSBjcmVhdGlvbiBmdW5jdGlvblxyXG4gKiBhbmQgdGhlbiBzdGFydCBleGVjdXRpbmcgdGhlIGdhbWUgbG9vcC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBFbmdpbmUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHB1YmxpYyB4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgeTogbnVtYmVyO1xyXG4gICAgcHVibGljIGNvbXBvbmVudHM6IE1hcDxzdHJpbmcsIENvbXBvbmVudD47XHJcblxyXG4gICAgcHVibGljIHBhcmFtcygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIFsnY2FudmFzJywgJ3dpZHRoJywgJ2hlaWdodCddO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczogSVBhcmFtcykge1xyXG4gICAgICAgIHN1cGVyKHBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMueCA9IDA7XHJcbiAgICAgICAgdGhpcy55ID0gMDtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgLy8gdGhpcy51dGlscyA9IG5ldyBVdGlscygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUgPSAoKSA9PiAge1xyXG4gICAgICAgIHRoaXMubW92ZSgpO1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgICAgIHRoaXMuZGVidWdJbmZvKCk7XHJcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgIHB1YmxpYyBpbml0KCkge1xyXG4gICAgICAgIERlYnVnLmdyb3VwKCdFbmdpbmUgbG9hZGVkIGNvbXBvbmVudHMnKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudChcIlJlc291cmNlc1wiLCBSZXNvdXJjZXMpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KFwiQ2FtZXJhXCIsIENhbWVyYSwge1xyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICB3aWR0aDogdGhpcy53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KFwiSW5wdXRcIiwgSW5wdXQpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KFwiVGltZVwiLCBUaW1lKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudChcIlNvdW5kXCIsIFNvdW5kKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudChcIkRpc3BsYXlcIiwgQ2FudmFzRGlzcGxheSwge1xyXG4gICAgICAgICAgICBpZDogJ2NhbnZhcycsXHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoXCJTdGFnZVwiLCBTdGFnZSk7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoXCJFdmVudHNcIiwgRXZlbnRzKTtcclxuICAgICAgICBEZWJ1Zy5ncm91cEVuZCgpO1xyXG4gICAgICAgIHRoaXMudGltZSA9IHRoaXMuY29tcG9uZW50LlRpbWU7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5ID0gdGhpcy5jb21wb25lbnQuRGlzcGxheTtcclxuICAgICAgICB0aGlzLnN0YWdlID0gdGhpcy5jb21wb25lbnQuU3RhZ2U7XHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMgPSB0aGlzLmNvbXBvbmVudC5SZXNvdXJjZXM7XHJcbiAgICAgICAgdGhpcy5zb3VuZCA9IHRoaXMuY29tcG9uZW50LlNvdW5kO1xyXG4gICAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLmNvbXBvbmVudC5JbnB1dDtcclxuICAgIH1cclxuICAgICovXHJcbiAgICAvKipcclxuICAgICAqIFN0YXRpYyBmdW5jdGlvbiB0byByZXBsYWNlIHRoZSB3aW5kb3dzLm9ubG9hZCBtZXRob2QuXHJcbiAgICAgKiBPbmNlIHRoZSB3aW5kb3cgaXMgcmVhZHksIGVuZ2luZSB3aWxsIGluaXRpYWxpemUgaXRzIGNvbXBvbmVudHMsIGV4ZWN1dGVcclxuICAgICAqIHRoZSBwcmVsb2FkZXIgYW5kIHdoZW4gcHJlbG9hZGVyIGxvYWRlZCBhbGwgdGhlIHJlc291cmNlcywgY3JlYXRlIHRoZSBnYW1lXHJcbiAgICAgKiBhbmQgZXhlY3V0ZSB0aGUgZ2FtZWxvb3AuXHJcbiAgICAgKi9cclxuXHJcbiAgICAgLypcclxuICAgIHN0YXRpYyBjcmVhdGUocGFyYW1zKSB7XHJcbiAgICAgICAgRGVidWcudmFsaWRhdGVQYXJhbXMoJ0VuZ2luZS5jcmVhdGUnLCBwYXJhbXMsIFtcImNhbnZhc1wiLCBcIndpZHRoXCIsIFwiaGVpZ2h0XCIsIFwicHJlbG9hZFwiLCBcImdhbWVcIl0pO1xyXG4gICAgICAgIChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgbGV0IGVuZ2luZSA9IG5ldyBFbmdpbmUoe1xyXG4gICAgICAgICAgICAgICAgY2FudmFzOiBwYXJhbXMuY2FudmFzLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHBhcmFtcy53aWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogcGFyYW1zLmhlaWdodFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGVuZ2luZS5pbml0KCk7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMucHJlbG9hZChlbmdpbmUpO1xyXG4gICAgICAgICAgICAgICAgZW5naW5lLnJlc291cmNlcy5wcmVsb2FkKHBhcmFtcy5nYW1lKTsgLy8gaW1wb3J0YW50OiBwcmVsb2FkIG9uIGNvbXBsZXRlIGNhbGxzIGdhbWUgZnVuY3Rpb25cclxuICAgICAgICAgICAgICAgIGVuZ2luZS5nYW1lTG9vcCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KSgpO1xyXG4gICAgfSovXHJcblxyXG4gICAgcHVibGljIGFkZChuYW1lOiBzdHJpbmcsIGNvbXBvbmVudDogdHlwZW9mIENvbXBvbmVudCwgcGFyYW1zOiBJUGFyYW1zID0ge30pOiB2b2lkIHtcclxuICAgICAgICBpZiAoRGVidWcuYWN0aXZlKCkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50cy5oYXMobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIERlYnVnLmVycm9yKGBDb21wb25lbnQgJHtuYW1lfSBpcyBhbHJlYWR5IGRlZmluZWRgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJhbXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgcGFyYW1zLmVuZ2luZSA9IHRoaXM7XHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgY29tcG9uZW50KHBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLnNldChuYW1lLCBpbnN0YW5jZSk7XHJcbiAgICAgICAgaW5zdGFuY2UuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQobmFtZTogc3RyaW5nKTogQ29tcG9uZW50IHtcclxuICAgICAgICBpZiAoRGVidWcuYWN0aXZlKCkpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNvbXBvbmVudHMuaGFzKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBEZWJ1Zy5lcnJvcihgQ29tcG9uZW50ICR7bmFtZX0gaXMgbm90IHJlZ2lzdHJlZGApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHMuZ2V0KG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3ZlKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdtb3ZlJyk7XHJcbiAgICAgICAgZm9yIChjb25zdCBjb21wb25lbnQgb2YgdGhpcy5jb21wb25lbnRzKSB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudFsxXS5tb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KCk6IHZvaWQge1xyXG4gICAgICAgIC8qdGhpcy5kaXNwbGF5LmNsZWFyKCk7XHJcbiAgICAgICAgZm9yIChsZXQgY29tcG9uZW50IG9mIHRoaXMuY29tcG9uZW50cykge1xyXG4gICAgICAgICAgICBjb21wb25lbnQuZHJhdygpO1xyXG4gICAgICAgIH0qL1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWJ1Z0luZm8oKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFEZWJ1Zy5hY3RpdmUoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIHRoaXMuZGlzcGxheS5maWxsVGV4dCgodGhpcy50aW1lLnRpbWUpLnRvRml4ZWQoMiksIDIwLCAyMCk7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5LmZpbGxUZXh0KCh0aGlzLnRpbWUuZGVsdGFUaW1lKS50b0ZpeGVkKDQpLCAyMCwgNDApO1xyXG4gICAgICAgIHRoaXMuZGlzcGxheS5maWxsVGV4dCh0aGlzLnRpbWUuZnBzLnRvRml4ZWQoMiksIDIwLCA2MCk7Ki9cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBFbmdpbmUgfSBmcm9tIFwiLi9lbmdpbmVcIjtcclxuXHJcbmNvbnN0IGdlbnRpbmV0cyA9IHtcclxuICAgIHZlcnNpb246ICcxLjAuMC4wJ1xyXG59O1xyXG4vKlxyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHdpbmRvd1snZ2VudGluZXRzJ10gPSBnZW50aW5ldHM7XHJcbn0gZWxzZSB7XHJcbiAgICBleHBvcnRzLmdlbnRpbmV0cyA9IGdlbnRpbmV0cztcclxufVxyXG4qL1xyXG5cclxud2luZG93WydHRU5HSU5FX0RFQlVHX01PREUnXSA9IHRydWU7XHJcbndpbmRvd1snR0VOR0lORV9ERUJVR19USFJPVyddID0gZmFsc2U7XHJcblxyXG5jb25zdCBlbmdpbmUgPSBuZXcgRW5naW5lKHtcclxuICAgIG5hbWU6ICdlbmdpbmUnLFxyXG4gICAgY2FudmFzOiAnY2FudmFzJyxcclxuICAgIHdpZHRoOiAxMDAsXHJcbiAgICBoZWlnaHQ6IDEwMFxyXG59KTtcclxuZW5naW5lLmluaXQoKTtcclxuIiwiaW1wb3J0IHsgRGVidWcgfSBmcm9tICcuL2RlYnVnJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcmFtcyB7XHJcbiAgICBbbmFtZTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb25zdHJ1Y3RhYmxlIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHBhcmFtcyBpcyB1c2VkIGFzIHZhbGlkYXRpb24gb2YgdGhlIGFyZ3VtZW50cyBwYXNlZCBpbiB0aGUgY29uc3RydWN0b3IuXHJcbiAgICAgKiBQYXJhbXMgc2hvdWxkIHJldHVybiBhbiBhcnJheSB3aXRoIHRoZSBzdHJpbmcgbmFtZXMgb2YgYWxsIHRoZSBrZXlzIHdoaWNoIHNob3VsZCBiZVxyXG4gICAgICogcHJlc2VudCBkdXJpbmcgdGhlIGNvbnN0cnVjdGlvbiBvZiBhbiBnYW1lT2JqZWN0LiBUaGlzIHdpbGwgb25seSBoYXBwZW4gaWYgdGhlIGRlYnVnXHJcbiAgICAgKiBtb2RlIGlzIGFjdGl2YXRlZC5cclxuICAgICAqL1xyXG4gICAgcGFyYW1zKCk6IHN0cmluZ1tdO1xyXG4gICAgY29uZmlnKCk6IElQYXJhbXM7XHJcbiAgICBpbml0KCk6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBCYXNlIE9iamVjdCBvZiBtb3N0bHkgYWxsIHRoZSBjbGFzc2VzIG9mIHRoZSBlbmdpbmUuXHJcbiAqIEl0IGNyZWF0ZXMgYSBzdHJ1Y3R1cmUgc28gdGhhdCB3aGVuIGluc3RhbmNlcyBvZiBvYmplY3RzIGFyZSBjcmVhdGVkLFxyXG4gKiB0aGUgcGFyYW1ldGVycyBhcmUgcGFzc2VkIGFzIG9iamVjdCBsaXRlcmFscy5cclxuICpcclxuICogQGV4YW1wbGVcclxuICogbGV0IG8gPSBuZXcgR2FtZU9iamVjdCh7eDogMCwgeTogMH0pO1xyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEVudGl0eSBpbXBsZW1lbnRzIElDb25zdHJ1Y3RhYmxlIHtcclxuXHJcbiAgICBwdWJsaWMgcGFyYW1zKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY29uZmlnID0gKCkgPT4gKHt9KTtcclxuICAgIHB1YmxpYyBpbml0KCk6IHZvaWQgeyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiBJUGFyYW1zKSB7XHJcbiAgICAgICAgRGVidWcudmFsaWRhdGVQYXJhbXModGhpcy5jb25zdHJ1Y3Rvci5uYW1lLCBwYXJhbXMsIHRoaXMucGFyYW1zKCkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGFyYW1zKCkpO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgcGFyYW1zKTtcclxuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZygpO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGNvbmZpZykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNba2V5XSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gY29uZmlnW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==