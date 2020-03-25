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
/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources */ "./src/resources.ts");



/**
 * Engine is the main object of the game engine.
 * Engine consist of a group of different components which manage different tasks.
 * Each component is a lego piece, and the engine is the glue which binds them together.
 * Once the document is ready, Engine will initialize each component added
 * into it, call the preloader method, execute the game creation function
 * and then start executing the game loop.
 */
class Engine extends _components__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(params, resources = []) {
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
        this.add('resources', _resources__WEBPACK_IMPORTED_MODULE_2__["Resources"], { resources: resources });
        this.init();
        // this.utils = new Utils();
    }
    params() {
        return ['canvas', 'width', 'height'];
    }
    preload() {
        _debug__WEBPACK_IMPORTED_MODULE_1__["Debug"].group('Preloading Resources');
        const loaders = this.get('resources').loaders();
        Promise.all(loaders)
            .then(data => {
            console.info(data);
        }, () => {
            _debug__WEBPACK_IMPORTED_MODULE_1__["Debug"].error('Error loading resources');
        });
        _debug__WEBPACK_IMPORTED_MODULE_1__["Debug"].groupEnd();
    }
    init() {
        this.preload();
        super.init();
        // this.update();
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
const resources = [
    {
        name: 'sprite1',
        type: 'image',
        url: './resources/test1.png'
    }, {
        name: 'sprite2',
        type: 'image',
        url: './resources/test2.png'
    }
];
const engine = new _engine__WEBPACK_IMPORTED_MODULE_0__["Engine"]({
    name: 'engine',
    canvas: 'canvas',
    width: 100,
    height: 100
}, resources);


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
    /**
     * The params is used as validation of the arguments pased in the constructor.
     * Params should return an array with the string names of all the keys which should be
     * present during the construction of an gameObject. This will only happen if the debug
     * mode is activated.
     */
    params() {
        return [];
    }
    config() {
        return {};
    }
    init() { }
    constructor(params) {
        _debug__WEBPACK_IMPORTED_MODULE_0__["Debug"].validateParams(this.constructor.name, params, this.params());
        Object.assign(this, params);
        const config = this.config();
        for (const key in config) {
            if (typeof this[key] === "undefined") {
                this[key] = config[key];
            }
        }
    }
}


/***/ }),

/***/ "./src/resources.ts":
/*!**************************!*\
  !*** ./src/resources.ts ***!
  \**************************/
/*! exports provided: Resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resources", function() { return Resources; });
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debug */ "./src/debug.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./src/components.ts");
/**
 * A RecourceItem is a media object like image, audio. It is used by the Resources class
 * during the preload phase of the engine loading.
 */


class ResourceItem {
    constructor(params) {
        _debug__WEBPACK_IMPORTED_MODULE_0__["Debug"].validateParams('Resources.add', params, ["url", "type", "name"]);
        Object.assign(this, params);
        this.buffer = {};
        this.item = {};
        this.loader = new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.responseType = "blob";
            request.onload = () => {
                if (request.status >= 200 && request.status < 400) {
                    this.buffer = request.response;
                    this.item = new Image();
                    this.item.src = window.URL.createObjectURL(request.response);
                    _debug__WEBPACK_IMPORTED_MODULE_0__["Debug"].info(`Success loading ${this.name}`);
                    resolve(1);
                }
                else {
                    _debug__WEBPACK_IMPORTED_MODULE_0__["Debug"].error(`Error loading ${this.name}`);
                    reject(0);
                }
            };
            request.onerror = () => {
                _debug__WEBPACK_IMPORTED_MODULE_0__["Debug"].error(`Error loading ${this.name}`);
                reject(0);
            };
            request.open('GET', this.url, true);
            request.send();
        });
    }
    load() {
    }
}
/**
 * Resources component is set of the images and audio resources of the game.
 * It handles adding and getting the resources by a name and also the preload phase of the engine loading.
 */
class Resources extends _components__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(params) {
        super(params);
        this.items = new Map();
        for (const resource of this.resources) {
            this.add(resource);
        }
    }
    init() {
        super.init();
    }
    add(params) {
        // resources will be always overrided if existed before, problem in the future?
        this.items.set(params.name, new ResourceItem(params));
    }
    get(name) {
        return this.items[name].item;
    }
    loaders() {
        return Array.from(this.items.values()).map(item => item.loader);
    }
    remove(name) {
        this.items.delete(name);
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlYnVnLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbnRpbmV0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzb3VyY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFBd0I7QUFFbUI7QUFFWDtBQUVoQzs7Ozs7Ozs7Ozs7R0FXRztBQUNJLE1BQU0sU0FBVSxTQUFRLCtDQUFNO0lBT3BDLFlBQVksTUFBYztRQUN6QixLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDZixDQUFDO0lBTk0sTUFBTTtRQUNaLE9BQU8sQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQU1EOztPQUVHO0lBQ0ksSUFBSTtRQUNWLDRDQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksY0FBYyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVEOztPQUVHO0lBQ0ksSUFBSSxLQUFXLENBQUM7SUFFdkI7O09BRUc7SUFDSSxJQUFJLEtBQVcsQ0FBQztDQUV2Qjs7Ozs7Ozs7Ozs7OztBQzlDRDtBQUFBO0FBQUEsb0JBQW9CO0FBQ3BCOzs7Ozs7OztHQVFHO0FBQ0ksTUFBTSxLQUFLO0lBRVYsTUFBTSxDQUFDLE1BQU07UUFDbkIsT0FBTyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU0sTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFlO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFDaEMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBZTtRQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQUUsT0FBTztTQUFFO1FBQ2hDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxPQUFPLEVBQUUsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ00sTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFlO1FBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFDaEMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLE9BQU8sRUFBRSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFTSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQWU7UUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUFFLE9BQU87U0FBRTtRQUNoQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQWU7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUFFLE9BQU87U0FBRTtRQUNoQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbkIsSUFBSSxNQUFNLENBQUMscUJBQXFCLENBQUMsRUFBRTtZQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3pCO2FBQU07WUFDTixPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0YsQ0FBQztJQUVNLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBWTtRQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQUUsT0FBTztTQUFFO1FBQ2hDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxRQUFRO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFDaEMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBWSxFQUFFLE1BQVcsRUFBRSxRQUFhO1FBQ3BFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFDaEMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFDOUMsSUFBSSxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQy9CLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLCtDQUErQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN4RjtRQUNELEtBQUssTUFBTSxHQUFHLElBQUksUUFBUSxFQUFFO1lBQzNCLElBQUksT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssV0FBVyxFQUFFO2dCQUN2QyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxpQkFBaUIsR0FBRyxzQkFBc0IsQ0FBQyxDQUFDO2FBQy9EO1NBQ0Q7SUFDRixDQUFDO0NBRUQ7Ozs7Ozs7Ozs7Ozs7QUMzRUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUVUO0FBQ2tCO0FBRWxEOzs7Ozs7O0dBT0c7QUFDSSxNQUFNLE1BQU8sU0FBUSxxREFBUztJQVVqQyxZQUFZLE1BQWMsRUFBRSxZQUF3QixFQUFFO1FBQ2xELEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQVVYLFdBQU0sR0FBRyxHQUFHLEVBQUU7WUFDakIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ1osSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ1osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsQ0FBQztRQWRHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsb0RBQVMsRUFBRSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLDRCQUE0QjtJQUNoQyxDQUFDO0lBYk0sTUFBTTtRQUNULE9BQU8sQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFvQk0sT0FBTztRQUNWLDRDQUFLLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDcEMsTUFBTSxPQUFPLEdBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQzthQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNULE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsQ0FBQyxFQUFFLEdBQUcsRUFBRTtZQUNKLDRDQUFLLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsNENBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRU0sSUFBSTtRQUNQLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNiLGlCQUFpQjtJQUNyQixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQThCRTtJQUNGOzs7OztPQUtHO0lBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7TUFnQkU7SUFFSSxHQUFHLENBQUMsSUFBWSxFQUFFLFNBQTJCLEVBQUUsU0FBaUIsRUFBRTtRQUNyRSxJQUFJLDRDQUFLLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDaEIsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDM0IsNENBQUssQ0FBQyxLQUFLLENBQUMsYUFBYSxJQUFJLHFCQUFxQixDQUFDLENBQUM7YUFDdkQ7U0FDSjtRQUNELE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ25CLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLE1BQU0sUUFBUSxHQUFHLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNwQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVNLEdBQUcsQ0FBQyxJQUFZO1FBQ25CLElBQUksNENBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzVCLDRDQUFLLENBQUMsS0FBSyxDQUFDLGFBQWEsSUFBSSxtQkFBbUIsQ0FBQyxDQUFDO2FBQ3JEO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSxJQUFJO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixLQUFLLE1BQU0sU0FBUyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDckMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQUVNLElBQUk7UUFDUDs7O1dBR0c7SUFDUCxDQUFDO0lBRU0sU0FBUztRQUNaLElBQUksQ0FBQyw0Q0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ2pCLE9BQU87U0FDVjtRQUNEOztrRUFFMEQ7SUFDOUQsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDL0pEO0FBQUE7QUFBa0M7QUFFbEMsTUFBTSxTQUFTLEdBQUc7SUFDZCxPQUFPLEVBQUUsU0FBUztDQUNyQixDQUFDO0FBQ0Y7Ozs7OztFQU1FO0FBRUYsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ3BDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUV0QyxNQUFNLFNBQVMsR0FBRztJQUNkO1FBQ0ksSUFBSSxFQUFFLFNBQVM7UUFDZixJQUFJLEVBQUUsT0FBTztRQUNiLEdBQUcsRUFBRSx1QkFBdUI7S0FDL0IsRUFBRTtRQUNDLElBQUksRUFBRSxTQUFTO1FBQ2YsSUFBSSxFQUFFLE9BQU87UUFDYixHQUFHLEVBQUUsdUJBQXVCO0tBQy9CO0NBQ0osQ0FBQztBQUNGLE1BQU0sTUFBTSxHQUFHLElBQUksOENBQU0sQ0FBQztJQUN0QixJQUFJLEVBQUUsUUFBUTtJQUNkLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEtBQUssRUFBRSxHQUFHO0lBQ1YsTUFBTSxFQUFFLEdBQUc7Q0FDZCxFQUFFLFNBQVMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDaENkO0FBQUE7QUFBQTtBQUFnQztBQU1oQzs7Ozs7Ozs7R0FRRztBQUNJLE1BQU0sTUFBTTtJQUNmOzs7OztPQUtHO0lBQ0ksTUFBTTtRQUNULE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUNNLE1BQU07UUFDVCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFDTSxJQUFJLEtBQVcsQ0FBQztJQUV2QixZQUFZLE1BQWM7UUFDdEIsNENBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM3QixLQUFLLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBRTtZQUN0QixJQUFJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFdBQVcsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMzQjtTQUNKO0lBQ0wsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDeENEO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztHQUdHO0FBRTZCO0FBQ1M7QUFRekMsTUFBTSxZQUFZO0lBUWpCLFlBQVksTUFBZ0I7UUFDM0IsNENBQUssQ0FBQyxjQUFjLENBQUMsZUFBZSxFQUFFLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN2RSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNYLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUMxQyxNQUFNLE9BQU8sR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1lBQzlCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO2dCQUNsQixJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO29CQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUM3RCw0Q0FBSyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7b0JBQzNDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDZDtxQkFBTTtvQkFDSCw0Q0FBSyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7b0JBQzFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDYjtZQUNMLENBQUMsQ0FBQztZQUNGLE9BQU8sQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFO2dCQUNuQiw0Q0FBSyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQzFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNkLENBQUMsQ0FBQztZQUNGLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDcEMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVELElBQUk7SUFFSixDQUFDO0NBRUQ7QUFDRDs7O0dBR0c7QUFDSSxNQUFNLFNBQVUsU0FBUSxxREFBUztJQUl2QyxZQUFZLE1BQU07UUFDakIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ1IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssTUFBTSxRQUFRLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3RCO0lBQ1IsQ0FBQztJQUVNLElBQUk7UUFDSixLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFcEIsQ0FBQztJQUVNLEdBQUcsQ0FBQyxNQUFnQjtRQUMxQiwrRUFBK0U7UUFDL0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTSxHQUFHLENBQUMsSUFBWTtRQUN0QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFFTSxPQUFPO1FBQ1YsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ25FLENBQUM7SUFDRyxNQUFNLENBQUMsSUFBWTtRQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0QiLCJmaWxlIjoiZ2VudGluZXRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZ2VudGluZXRzLnRzXCIpO1xuIiwiLyogZXhwb3J0ZWQgQ29tcG9uZW50ICovXHJcblxyXG5pbXBvcnQgeyBQYXJhbXMsIEVudGl0eSB9IGZyb20gXCIuL29iamVjdHNcIjtcclxuaW1wb3J0IHsgRW5naW5lIH0gZnJvbSBcIi4vZW5naW5lXCI7XHJcbmltcG9ydCB7IERlYnVnIH0gZnJvbSBcIi4vZGVidWdcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGlzIGEgYmFzZSBjbGFzcyBvZiB0aGUgY29tcG9uZW50IG9mIHRoZSBlbmdpbmUsXHJcbiAqIENvbXBvbmVudHMgYXJlIHNpbmdsZSBpbnN0YW5jZSBwaWVjZXMgb2YgdGhlIGVuZ2luZS5cclxuICogVGhlIGVuZ2luZSBjb25zaXN0IG9mIG11bHRpcGxlIGNvbXBvbmVudHMgd2hpY2ggcGVyZm9ybSB2YXJpb3VzIHRhc2tzLlxyXG4gKiBTb21lIENvbXBvbmVudHMgZm9ybSBwYXJ0IG9mIHRoZSBjb3JlIG9mIHRoZSBFbmdpbmUsIG90aGVycyBjb3VsZFxyXG4gKiBiZSBhZGRlZCBhcyBuZWVkIGF0IHJ1bnRpbWUuXHJcbiAqIFdoZW4gdGhlIEVuZ2luZSBpcyByZWFkeSwgaXQgd2lsbCBjcmVhdGUgdGhlIGluc3RhbmNlIG9mIHRoZSBjb21wb25lbnQgYW5kIHBhc3MgaXRzZWxmIGFzIHRoZSBlbmdpbmUgcGFyYW1ldGVyLlxyXG4gKiBFYWNoIENvbXBvbmVudCBpbnN0YW5jZSBoYXMgYWNjZXNzIHRvIHRoZSBlbmdpbmVcclxuICogVGhlIGVuZ2luZSBpcyB0aGUgcmVzcG9uc2FibGUgZm9yIGNhbGxpbmcgbmV3IENvbXBvbmVudCwgdGhpcyBjb25zdHJ1Y3RvciBzaG91bGRuJ3QgYmUgY2FsbGVkIGluIHRoZSBnYW1lIGNvZGVcclxuICogQHBhcmFtIHtvYmplY3R9IHBhcmFtcyBPYmplY3QgbGl0ZXJhbCB3aXRoIHBhcmFtZXRlcnMgcGFzc2VkIHRvIHRoZSBjb21wb25lbnQgY29uc3RydWN0ZWRcclxuICogQHBhcmFtIHtvYmplY3R9IGVuZ2luZSBUaGUgaW5zdGFuY2Ugb2YgdGhlIGVuZ2luZSwgdGhpcyB3aWxsIGJlIHBhc3NlZCBieSB0aGUgZW5naW5lXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgRW50aXR5IHtcclxuICAgIHB1YmxpYyBlbmdpbmU6IEVuZ2luZTtcclxuXHRwcml2YXRlIG5hbWU6IHN0cmluZztcclxuXHRwdWJsaWMgcGFyYW1zKCk6IHN0cmluZ1tdIHtcclxuXHRcdHJldHVybiBbJ25hbWUnLCAnZW5naW5lJ107XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3RvcihwYXJhbXM6IFBhcmFtcykge1xyXG5cdFx0c3VwZXIocGFyYW1zKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIE1ldGhvZCBjYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBiZWVuIGFkZGVkIHRvIHRoZSBlbmdpbmUgYW5kIGlzIHJlYWR5XHJcblx0ICovXHJcblx0cHVibGljIGluaXQoKTogdm9pZCB7XHJcblx0XHREZWJ1Zy5zdWNjZXNzKGAke3RoaXMubmFtZX0gaW5pdGlhbGl6ZWRgKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIE1ldGhvZCBjYWxsZWQgZWFjaCBjeWNsZSBvZiB0aGUgZW5naW5lIGdhbWUgbG9vcFxyXG5cdCAqL1xyXG5cdHB1YmxpYyBtb3ZlKCk6IHZvaWQgeyB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIE1ldGhvZCBjYWxsZWQgZWFjaCBjeWNsZSBvZiB0aGUgZW5naW5lIGdhbWUgbG9vcFxyXG5cdCAqL1xyXG5cdHB1YmxpYyBkcmF3KCk6IHZvaWQgeyB9XHJcblxyXG59XHJcbiIsIi8qIGV4cG9ydGVkIERlYnVnICovXHJcbi8qKlxyXG4gKiBDbGFzcyB3aXRoIHN0YXRpYyBtZXRob2RzIHRvIGZhY2lsaXRhdGUgdGhlIG1lc3NhZ2VzIG9uIHRoZSBqYXZhc2NyaXB0IGNvbnNvbGUuXHJcbiAqIEFsbCB0aGUgbWV0aG9kcyBvZiBEZWJ1ZyBjbGFzcyB3aWxsIG9ubHkgcnVuIGlmIHRoZSBkZWJ1ZyBtb2RlIGlzIG9uLlxyXG4gKiBUbyBhY3RpdmF0ZSB0aGUgZGVidWcgbW9kZSwgZGVjbGFyZSBhIGdsb2JhbCB2YXJpYWJsZSBiZWZvcmUgaW5pdGlhbGl6aW5nIHRoZSBlbmdpbmVcclxuICogd2l0aCB0aGUgbmFtZTogR0VOR0lORV9ERUJVR19NT0RFID0gdHJ1ZS5cclxuICogSWYgdGhlIGRlYnVnIG1vZGUgaXMgb2ZmLCBubyBtZXNzYWdlcyB3b3VsZCBiZSBzZW50IHRvIHRoZSBjb25zb2xlLlxyXG4gKiBXaGlsZSBkZXZlbG9waW5nIHlvdXIgcHJvamVjdCwgaXRzIHJlY29tZW5kZWQgdG8gaGF2ZSB0aGUgZGVidWcgbW9kZSBvbiB0byBnZXRcclxuICogc29tZSBtZXNzYWdlcyBvZiB0aGUgc3RhdGUgb2YgdGhlIGVuZ2luZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBEZWJ1ZyB7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgYWN0aXZlKCk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIHdpbmRvd1snR0VOR0lORV9ERUJVR19NT0RFJ107XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGxvZyhtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuXHRcdGlmICghRGVidWcuYWN0aXZlKCkpIHsgcmV0dXJuOyB9XHJcblx0XHRjb25zb2xlLnRyYWNlKCk7XHJcblx0XHRjb25zb2xlLmxvZyhtZXNzYWdlKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgaW5mbyhtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuXHRcdGlmICghRGVidWcuYWN0aXZlKCkpIHsgcmV0dXJuOyB9XHJcblx0XHRjb25zb2xlLmluZm8oYCVjJHttZXNzYWdlfWAsICdjb2xvcjogYmx1ZScpO1xyXG5cdH1cclxuXHRwdWJsaWMgc3RhdGljIHN1Y2Nlc3MobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcblx0XHRpZiAoIURlYnVnLmFjdGl2ZSgpKSB7IHJldHVybjsgfVxyXG5cdFx0Y29uc29sZS5pbmZvKGAlYyR7bWVzc2FnZX1gLCAnY29sb3I6IGdyZWVuJyk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIHdhcm4obWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcblx0XHRpZiAoIURlYnVnLmFjdGl2ZSgpKSB7IHJldHVybjsgfVxyXG5cdFx0Y29uc29sZS53YXJuKG1lc3NhZ2UpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBlcnJvcihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuXHRcdGlmICghRGVidWcuYWN0aXZlKCkpIHsgcmV0dXJuOyB9XHJcblx0XHRjb25zb2xlLmdyb3VwRW5kKCk7XHJcblx0XHRpZiAod2luZG93WydHRU5HSU5FX0RFQlVHX1RIUk9XJ10pIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihtZXNzYWdlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ3JvdXAobmFtZTogc3RyaW5nKTogdm9pZCB7XHJcblx0XHRpZiAoIURlYnVnLmFjdGl2ZSgpKSB7IHJldHVybjsgfVxyXG5cdFx0Y29uc29sZS5ncm91cENvbGxhcHNlZChuYW1lKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ3JvdXBFbmQoKSB7XHJcblx0XHRpZiAoIURlYnVnLmFjdGl2ZSgpKSB7IHJldHVybjsgfVxyXG5cdFx0Y29uc29sZS5ncm91cEVuZCgpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVmFsaWRhdGVzIHRoYXQgdGhlIG9iamVjdCBsaXRlcmFsIG9mIHRoZSBjb25zdHJ1Y3RvclxyXG5cdCAqIGhhcyB0aGUgZWxlbWVudHMgb2YgdGhlIHJlcXVpcmVkIGFycmF5XHJcblx0ICogQHBhcmFtICB7b2JqZWN0fSBwYXJhbXMgICBUaGUgY29uc3RydWN0b3IgYXJndW1lbnRcclxuXHQgKiBAcGFyYW0gIHthcnJheX0gcmVxdWlyZWQgVGhlIGxpc3Qgb2YgcmVxdWlyZWQga2V5c1xyXG5cdCAqL1xyXG5cdHB1YmxpYyBzdGF0aWMgdmFsaWRhdGVQYXJhbXMobmFtZTogc3RyaW5nLCBwYXJhbXM6IGFueSwgcmVxdWlyZWQ6IGFueSk6IHZvaWQge1xyXG5cdFx0aWYgKCFEZWJ1Zy5hY3RpdmUoKSkgeyByZXR1cm47IH1cclxuXHRcdGlmICghcmVxdWlyZWQgfHwgIXJlcXVpcmVkLmxlbmd0aCkgeyByZXR1cm47IH1cclxuXHRcdGlmIChyZXF1aXJlZC5sZW5ndGggJiYgIXBhcmFtcykge1xyXG5cdFx0XHREZWJ1Zy53YXJuKGAke25hbWV9IHJlcXVpcmVzIHRoaXMgbWVtYmVycyBpbiB0aGUgY29uc3RydWN0b3I6IHske3JlcXVpcmVkLmpvaW4oJywnKX19YCk7XHJcblx0XHR9XHJcblx0XHRmb3IgKGNvbnN0IGtleSBvZiByZXF1aXJlZCkge1xyXG5cdFx0XHRpZiAodHlwZW9mIHBhcmFtc1trZXldID09PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRcdFx0RGVidWcuZXJyb3IoYCR7bmFtZX0gcmVxdWlyZXMgb2YgXCIke2tleX1cIiBpbiB0aGUgY29uc3RydWN0b3JgKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgUGFyYW1zIH0gZnJvbSAnLi9vYmplY3RzJztcclxuaW1wb3J0IHsgRGVidWcgfSBmcm9tICcuL2RlYnVnJztcclxuaW1wb3J0IHsgUmVzb3VyY2VzLCBSZXNvdXJjZSB9IGZyb20gJy4vcmVzb3VyY2VzJztcclxuXHJcbi8qKlxyXG4gKiBFbmdpbmUgaXMgdGhlIG1haW4gb2JqZWN0IG9mIHRoZSBnYW1lIGVuZ2luZS5cclxuICogRW5naW5lIGNvbnNpc3Qgb2YgYSBncm91cCBvZiBkaWZmZXJlbnQgY29tcG9uZW50cyB3aGljaCBtYW5hZ2UgZGlmZmVyZW50IHRhc2tzLlxyXG4gKiBFYWNoIGNvbXBvbmVudCBpcyBhIGxlZ28gcGllY2UsIGFuZCB0aGUgZW5naW5lIGlzIHRoZSBnbHVlIHdoaWNoIGJpbmRzIHRoZW0gdG9nZXRoZXIuXHJcbiAqIE9uY2UgdGhlIGRvY3VtZW50IGlzIHJlYWR5LCBFbmdpbmUgd2lsbCBpbml0aWFsaXplIGVhY2ggY29tcG9uZW50IGFkZGVkXHJcbiAqIGludG8gaXQsIGNhbGwgdGhlIHByZWxvYWRlciBtZXRob2QsIGV4ZWN1dGUgdGhlIGdhbWUgY3JlYXRpb24gZnVuY3Rpb25cclxuICogYW5kIHRoZW4gc3RhcnQgZXhlY3V0aW5nIHRoZSBnYW1lIGxvb3AuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRW5naW5lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBwdWJsaWMgeDogbnVtYmVyO1xyXG4gICAgcHVibGljIHk6IG51bWJlcjtcclxuICAgIHB1YmxpYyBjb21wb25lbnRzOiBNYXA8c3RyaW5nLCBDb21wb25lbnQ+O1xyXG5cclxuICAgIHB1YmxpYyBwYXJhbXMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBbJ2NhbnZhcycsICd3aWR0aCcsICdoZWlnaHQnXTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6IFBhcmFtcywgcmVzb3VyY2VzOiBSZXNvdXJjZVtdID0gW10pIHtcclxuICAgICAgICBzdXBlcihwYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuZW5naW5lID0gdGhpcztcclxuICAgICAgICB0aGlzLnggPSAwO1xyXG4gICAgICAgIHRoaXMueSA9IDA7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMuYWRkKCdyZXNvdXJjZXMnLCBSZXNvdXJjZXMsIHsgcmVzb3VyY2VzOiByZXNvdXJjZXMgfSk7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgLy8gdGhpcy51dGlscyA9IG5ldyBVdGlscygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUgPSAoKSA9PiAge1xyXG4gICAgICAgIHRoaXMubW92ZSgpO1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgICAgIHRoaXMuZGVidWdJbmZvKCk7XHJcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHByZWxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgRGVidWcuZ3JvdXAoJ1ByZWxvYWRpbmcgUmVzb3VyY2VzJyk7XHJcbiAgICAgICAgY29uc3QgbG9hZGVycyA9ICh0aGlzLmdldCgncmVzb3VyY2VzJykgYXMgUmVzb3VyY2VzKS5sb2FkZXJzKCk7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwobG9hZGVycylcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oZGF0YSk7XHJcbiAgICAgICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgIERlYnVnLmVycm9yKCdFcnJvciBsb2FkaW5nIHJlc291cmNlcycpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIERlYnVnLmdyb3VwRW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wcmVsb2FkKCk7XHJcbiAgICAgICAgc3VwZXIuaW5pdCgpO1xyXG4gICAgICAgIC8vIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgIHB1YmxpYyBpbml0KCkge1xyXG4gICAgICAgIERlYnVnLmdyb3VwKCdFbmdpbmUgbG9hZGVkIGNvbXBvbmVudHMnKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudChcIlJlc291cmNlc1wiLCBSZXNvdXJjZXMpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KFwiQ2FtZXJhXCIsIENhbWVyYSwge1xyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICB3aWR0aDogdGhpcy53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KFwiSW5wdXRcIiwgSW5wdXQpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KFwiVGltZVwiLCBUaW1lKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudChcIlNvdW5kXCIsIFNvdW5kKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudChcIkRpc3BsYXlcIiwgQ2FudmFzRGlzcGxheSwge1xyXG4gICAgICAgICAgICBpZDogJ2NhbnZhcycsXHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoXCJTdGFnZVwiLCBTdGFnZSk7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoXCJFdmVudHNcIiwgRXZlbnRzKTtcclxuICAgICAgICBEZWJ1Zy5ncm91cEVuZCgpO1xyXG4gICAgICAgIHRoaXMudGltZSA9IHRoaXMuY29tcG9uZW50LlRpbWU7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5ID0gdGhpcy5jb21wb25lbnQuRGlzcGxheTtcclxuICAgICAgICB0aGlzLnN0YWdlID0gdGhpcy5jb21wb25lbnQuU3RhZ2U7XHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMgPSB0aGlzLmNvbXBvbmVudC5SZXNvdXJjZXM7XHJcbiAgICAgICAgdGhpcy5zb3VuZCA9IHRoaXMuY29tcG9uZW50LlNvdW5kO1xyXG4gICAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLmNvbXBvbmVudC5JbnB1dDtcclxuICAgIH1cclxuICAgICovXHJcbiAgICAvKipcclxuICAgICAqIFN0YXRpYyBmdW5jdGlvbiB0byByZXBsYWNlIHRoZSB3aW5kb3dzLm9ubG9hZCBtZXRob2QuXHJcbiAgICAgKiBPbmNlIHRoZSB3aW5kb3cgaXMgcmVhZHksIGVuZ2luZSB3aWxsIGluaXRpYWxpemUgaXRzIGNvbXBvbmVudHMsIGV4ZWN1dGVcclxuICAgICAqIHRoZSBwcmVsb2FkZXIgYW5kIHdoZW4gcHJlbG9hZGVyIGxvYWRlZCBhbGwgdGhlIHJlc291cmNlcywgY3JlYXRlIHRoZSBnYW1lXHJcbiAgICAgKiBhbmQgZXhlY3V0ZSB0aGUgZ2FtZWxvb3AuXHJcbiAgICAgKi9cclxuXHJcbiAgICAgLypcclxuICAgIHN0YXRpYyBjcmVhdGUocGFyYW1zKSB7XHJcbiAgICAgICAgRGVidWcudmFsaWRhdGVQYXJhbXMoJ0VuZ2luZS5jcmVhdGUnLCBwYXJhbXMsIFtcImNhbnZhc1wiLCBcIndpZHRoXCIsIFwiaGVpZ2h0XCIsIFwicHJlbG9hZFwiLCBcImdhbWVcIl0pO1xyXG4gICAgICAgIChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgbGV0IGVuZ2luZSA9IG5ldyBFbmdpbmUoe1xyXG4gICAgICAgICAgICAgICAgY2FudmFzOiBwYXJhbXMuY2FudmFzLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHBhcmFtcy53aWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogcGFyYW1zLmhlaWdodFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGVuZ2luZS5pbml0KCk7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMucHJlbG9hZChlbmdpbmUpO1xyXG4gICAgICAgICAgICAgICAgZW5naW5lLnJlc291cmNlcy5wcmVsb2FkKHBhcmFtcy5nYW1lKTsgLy8gaW1wb3J0YW50OiBwcmVsb2FkIG9uIGNvbXBsZXRlIGNhbGxzIGdhbWUgZnVuY3Rpb25cclxuICAgICAgICAgICAgICAgIGVuZ2luZS5nYW1lTG9vcCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KSgpO1xyXG4gICAgfSovXHJcblxyXG4gICAgcHVibGljIGFkZChuYW1lOiBzdHJpbmcsIGNvbXBvbmVudDogdHlwZW9mIENvbXBvbmVudCwgcGFyYW1zOiBQYXJhbXMgPSB7fSk6IHZvaWQge1xyXG4gICAgICAgIGlmIChEZWJ1Zy5hY3RpdmUoKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb21wb25lbnRzLmhhcyhuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgRGVidWcuZXJyb3IoYENvbXBvbmVudCAke25hbWV9IGlzIGFscmVhZHkgZGVmaW5lZGApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcmFtcy5uYW1lID0gbmFtZTtcclxuICAgICAgICBwYXJhbXMuZW5naW5lID0gdGhpcztcclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBjb21wb25lbnQocGFyYW1zKTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuc2V0KG5hbWUsIGluc3RhbmNlKTtcclxuICAgICAgICBpbnN0YW5jZS5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldChuYW1lOiBzdHJpbmcpOiBDb21wb25lbnQge1xyXG4gICAgICAgIGlmIChEZWJ1Zy5hY3RpdmUoKSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY29tcG9uZW50cy5oYXMobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIERlYnVnLmVycm9yKGBDb21wb25lbnQgJHtuYW1lfSBpcyBub3QgcmVnaXN0cmVkYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50cy5nZXQobmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vdmUoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ21vdmUnKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiB0aGlzLmNvbXBvbmVudHMpIHtcclxuICAgICAgICAgICAgY29tcG9uZW50WzFdLm1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoKTogdm9pZCB7XHJcbiAgICAgICAgLyp0aGlzLmRpc3BsYXkuY2xlYXIoKTtcclxuICAgICAgICBmb3IgKGxldCBjb21wb25lbnQgb2YgdGhpcy5jb21wb25lbnRzKSB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudC5kcmF3KCk7XHJcbiAgICAgICAgfSovXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlYnVnSW5mbygpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIURlYnVnLmFjdGl2ZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogdGhpcy5kaXNwbGF5LmZpbGxUZXh0KCh0aGlzLnRpbWUudGltZSkudG9GaXhlZCgyKSwgMjAsIDIwKTtcclxuICAgICAgICB0aGlzLmRpc3BsYXkuZmlsbFRleHQoKHRoaXMudGltZS5kZWx0YVRpbWUpLnRvRml4ZWQoNCksIDIwLCA0MCk7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5LmZpbGxUZXh0KHRoaXMudGltZS5mcHMudG9GaXhlZCgyKSwgMjAsIDYwKTsqL1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEVuZ2luZSB9IGZyb20gXCIuL2VuZ2luZVwiO1xyXG5cclxuY29uc3QgZ2VudGluZXRzID0ge1xyXG4gICAgdmVyc2lvbjogJzEuMC4wLjAnXHJcbn07XHJcbi8qXHJcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgd2luZG93WydnZW50aW5ldHMnXSA9IGdlbnRpbmV0cztcclxufSBlbHNlIHtcclxuICAgIGV4cG9ydHMuZ2VudGluZXRzID0gZ2VudGluZXRzO1xyXG59XHJcbiovXHJcblxyXG53aW5kb3dbJ0dFTkdJTkVfREVCVUdfTU9ERSddID0gdHJ1ZTtcclxud2luZG93WydHRU5HSU5FX0RFQlVHX1RIUk9XJ10gPSBmYWxzZTtcclxuXHJcbmNvbnN0IHJlc291cmNlcyA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnc3ByaXRlMScsXHJcbiAgICAgICAgdHlwZTogJ2ltYWdlJyxcclxuICAgICAgICB1cmw6ICcuL3Jlc291cmNlcy90ZXN0MS5wbmcnXHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogJ3Nwcml0ZTInLFxyXG4gICAgICAgIHR5cGU6ICdpbWFnZScsXHJcbiAgICAgICAgdXJsOiAnLi9yZXNvdXJjZXMvdGVzdDIucG5nJ1xyXG4gICAgfVxyXG5dO1xyXG5jb25zdCBlbmdpbmUgPSBuZXcgRW5naW5lKHtcclxuICAgIG5hbWU6ICdlbmdpbmUnLFxyXG4gICAgY2FudmFzOiAnY2FudmFzJyxcclxuICAgIHdpZHRoOiAxMDAsXHJcbiAgICBoZWlnaHQ6IDEwMFxyXG59LCByZXNvdXJjZXMpO1xyXG4iLCJpbXBvcnQgeyBEZWJ1ZyB9IGZyb20gJy4vZGVidWcnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYXJhbXMge1xyXG4gICAgW25hbWU6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEJhc2UgT2JqZWN0IG9mIG1vc3RseSBhbGwgdGhlIGNsYXNzZXMgb2YgdGhlIGVuZ2luZS5cclxuICogSXQgY3JlYXRlcyBhIHN0cnVjdHVyZSBzbyB0aGF0IHdoZW4gaW5zdGFuY2VzIG9mIG9iamVjdHMgYXJlIGNyZWF0ZWQsXHJcbiAqIHRoZSBwYXJhbWV0ZXJzIGFyZSBwYXNzZWQgYXMgb2JqZWN0IGxpdGVyYWxzLlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBsZXQgbyA9IG5ldyBHYW1lT2JqZWN0KHt4OiAwLCB5OiAwfSk7XHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRW50aXR5IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHBhcmFtcyBpcyB1c2VkIGFzIHZhbGlkYXRpb24gb2YgdGhlIGFyZ3VtZW50cyBwYXNlZCBpbiB0aGUgY29uc3RydWN0b3IuXHJcbiAgICAgKiBQYXJhbXMgc2hvdWxkIHJldHVybiBhbiBhcnJheSB3aXRoIHRoZSBzdHJpbmcgbmFtZXMgb2YgYWxsIHRoZSBrZXlzIHdoaWNoIHNob3VsZCBiZVxyXG4gICAgICogcHJlc2VudCBkdXJpbmcgdGhlIGNvbnN0cnVjdGlvbiBvZiBhbiBnYW1lT2JqZWN0LiBUaGlzIHdpbGwgb25seSBoYXBwZW4gaWYgdGhlIGRlYnVnXHJcbiAgICAgKiBtb2RlIGlzIGFjdGl2YXRlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHBhcmFtcygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGNvbmZpZygpOiBvYmplY3Qge1xyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBpbml0KCk6IHZvaWQgeyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiBQYXJhbXMpIHtcclxuICAgICAgICBEZWJ1Zy52YWxpZGF0ZVBhcmFtcyh0aGlzLmNvbnN0cnVjdG9yLm5hbWUsIHBhcmFtcywgdGhpcy5wYXJhbXMoKSk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBwYXJhbXMpO1xyXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnKCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY29uZmlnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1trZXldID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBjb25maWdba2V5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogQSBSZWNvdXJjZUl0ZW0gaXMgYSBtZWRpYSBvYmplY3QgbGlrZSBpbWFnZSwgYXVkaW8uIEl0IGlzIHVzZWQgYnkgdGhlIFJlc291cmNlcyBjbGFzc1xyXG4gKiBkdXJpbmcgdGhlIHByZWxvYWQgcGhhc2Ugb2YgdGhlIGVuZ2luZSBsb2FkaW5nLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IERlYnVnIH0gZnJvbSAnLi9kZWJ1Zyc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlc291cmNlIHtcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgdHlwZTogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5jbGFzcyBSZXNvdXJjZUl0ZW0ge1xyXG4gICAgcHVibGljIGJ1ZmZlcjogYW55O1xyXG4gICAgcHVibGljIGl0ZW06IGFueTtcclxuICAgIHB1YmxpYyB1cmw6IHN0cmluZztcclxuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGxvYWRlcjogUHJvbWlzZTxudW1iZXI+O1xyXG5cclxuXHRjb25zdHJ1Y3RvcihwYXJhbXM6IFJlc291cmNlKSB7XHJcblx0XHREZWJ1Zy52YWxpZGF0ZVBhcmFtcygnUmVzb3VyY2VzLmFkZCcsIHBhcmFtcywgW1widXJsXCIsIFwidHlwZVwiLCBcIm5hbWVcIl0pO1xyXG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBwYXJhbXMpO1xyXG5cdFx0dGhpcy5idWZmZXIgPSB7fTtcclxuICAgICAgICB0aGlzLml0ZW0gPSB7fTtcclxuICAgICAgICB0aGlzLmxvYWRlciA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IFwiYmxvYlwiO1xyXG4gICAgICAgICAgICByZXF1ZXN0Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA+PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgPCA0MDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1ZmZlciAgPSByZXF1ZXN0LnJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbS5zcmMgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChyZXF1ZXN0LnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICBEZWJ1Zy5pbmZvKGBTdWNjZXNzIGxvYWRpbmcgJHt0aGlzLm5hbWV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgxKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRGVidWcuZXJyb3IoYEVycm9yIGxvYWRpbmcgJHt0aGlzLm5hbWV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBEZWJ1Zy5lcnJvcihgRXJyb3IgbG9hZGluZyAke3RoaXMubmFtZX1gKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdCgwKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVxdWVzdC5vcGVuKCdHRVQnLCB0aGlzLnVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHJlcXVlc3Quc2VuZCgpO1xyXG4gICAgICAgIH0pO1xyXG5cdH1cclxuXHJcblx0bG9hZCgpIHtcclxuXHJcblx0fVxyXG5cclxufVxyXG4vKipcclxuICogUmVzb3VyY2VzIGNvbXBvbmVudCBpcyBzZXQgb2YgdGhlIGltYWdlcyBhbmQgYXVkaW8gcmVzb3VyY2VzIG9mIHRoZSBnYW1lLlxyXG4gKiBJdCBoYW5kbGVzIGFkZGluZyBhbmQgZ2V0dGluZyB0aGUgcmVzb3VyY2VzIGJ5IGEgbmFtZSBhbmQgYWxzbyB0aGUgcHJlbG9hZCBwaGFzZSBvZiB0aGUgZW5naW5lIGxvYWRpbmcuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUmVzb3VyY2VzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBpdGVtczogTWFwPHN0cmluZywgUmVzb3VyY2VJdGVtPjtcclxuICAgIHB1YmxpYyByZXNvdXJjZXM6IFJlc291cmNlW107XHJcblxyXG5cdGNvbnN0cnVjdG9yKHBhcmFtcykge1xyXG5cdFx0c3VwZXIocGFyYW1zKTtcclxuICAgICAgICB0aGlzLml0ZW1zID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIGZvciAoY29uc3QgcmVzb3VyY2Ugb2YgdGhpcy5yZXNvdXJjZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGQocmVzb3VyY2UpO1xyXG4gICAgICAgIH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBpbml0KCkge1xyXG4gICAgICAgIHN1cGVyLmluaXQoKTtcclxuXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYWRkKHBhcmFtczogUmVzb3VyY2UpIHtcclxuXHRcdC8vIHJlc291cmNlcyB3aWxsIGJlIGFsd2F5cyBvdmVycmlkZWQgaWYgZXhpc3RlZCBiZWZvcmUsIHByb2JsZW0gaW4gdGhlIGZ1dHVyZT9cclxuXHRcdHRoaXMuaXRlbXMuc2V0KHBhcmFtcy5uYW1lLCBuZXcgUmVzb3VyY2VJdGVtKHBhcmFtcykpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldChuYW1lOiBzdHJpbmcpIHtcclxuXHRcdHJldHVybiB0aGlzLml0ZW1zW25hbWVdLml0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRlcnMoKTogUHJvbWlzZTxudW1iZXI+W10ge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuaXRlbXMudmFsdWVzKCkpLm1hcChpdGVtID0+IGl0ZW0ubG9hZGVyKVxyXG4gICAgfVxyXG5cdHB1YmxpYyByZW1vdmUobmFtZTogc3RyaW5nKSB7XHJcblx0ICAgIHRoaXMuaXRlbXMuZGVsZXRlKG5hbWUpO1xyXG5cdH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9