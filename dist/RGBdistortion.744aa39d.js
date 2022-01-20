// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/lib/three.min.js":[function(require,module,exports) {
var define;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e299) { throw _e299; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e300) { didErr = true; err = _e300; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).THREE = {});
}(this, function (t) {
  "use strict";

  var _Lh;

  var e = "127",
      n = 100,
      i = 300,
      r = 301,
      s = 302,
      a = 303,
      o = 304,
      l = 306,
      c = 307,
      h = 1e3,
      u = 1001,
      d = 1002,
      p = 1003,
      f = 1004,
      m = 1005,
      g = 1006,
      v = 1007,
      y = 1008,
      x = 1009,
      _ = 1012,
      b = 1014,
      w = 1015,
      M = 1016,
      S = 1020,
      T = 1022,
      E = 1023,
      A = 1026,
      L = 1027,
      R = 33776,
      C = 33777,
      P = 33778,
      D = 33779,
      I = 35840,
      N = 35841,
      B = 35842,
      O = 35843,
      z = 37492,
      F = 37496,
      H = 2300,
      U = 2301,
      G = 2302,
      k = 2400,
      V = 2401,
      W = 2402,
      j = 2500,
      q = 2501,
      X = 3e3,
      Y = 3001,
      Z = 3007,
      J = 3002,
      Q = 3004,
      K = 3005,
      $ = 3006,
      tt = 7680,
      et = 35044,
      nt = 35048,
      it = "300 es";

  function rt() {}

  Object.assign(rt.prototype, {
    addEventListener: function addEventListener(t, e) {
      void 0 === this._listeners && (this._listeners = {});
      var n = this._listeners;
      void 0 === n[t] && (n[t] = []), -1 === n[t].indexOf(e) && n[t].push(e);
    },
    hasEventListener: function hasEventListener(t, e) {
      if (void 0 === this._listeners) return !1;
      var n = this._listeners;
      return void 0 !== n[t] && -1 !== n[t].indexOf(e);
    },
    removeEventListener: function removeEventListener(t, e) {
      if (void 0 === this._listeners) return;
      var n = this._listeners[t];

      if (void 0 !== n) {
        var _t2 = n.indexOf(e);

        -1 !== _t2 && n.splice(_t2, 1);
      }
    },
    dispatchEvent: function dispatchEvent(t) {
      if (void 0 === this._listeners) return;
      var e = this._listeners[t.type];

      if (void 0 !== e) {
        t.target = this;

        var _n2 = e.slice(0);

        for (var _e2 = 0, _i2 = _n2.length; _e2 < _i2; _e2++) {
          _n2[_e2].call(this, t);
        }

        t.target = null;
      }
    }
  });
  var st = [];

  for (var _t3 = 0; _t3 < 256; _t3++) {
    st[_t3] = (_t3 < 16 ? "0" : "") + _t3.toString(16);
  }

  var at = 1234567;
  var ot = {
    DEG2RAD: Math.PI / 180,
    RAD2DEG: 180 / Math.PI,
    generateUUID: function generateUUID() {
      var t = 4294967295 * Math.random() | 0,
          e = 4294967295 * Math.random() | 0,
          n = 4294967295 * Math.random() | 0,
          i = 4294967295 * Math.random() | 0;
      return (st[255 & t] + st[t >> 8 & 255] + st[t >> 16 & 255] + st[t >> 24 & 255] + "-" + st[255 & e] + st[e >> 8 & 255] + "-" + st[e >> 16 & 15 | 64] + st[e >> 24 & 255] + "-" + st[63 & n | 128] + st[n >> 8 & 255] + "-" + st[n >> 16 & 255] + st[n >> 24 & 255] + st[255 & i] + st[i >> 8 & 255] + st[i >> 16 & 255] + st[i >> 24 & 255]).toUpperCase();
    },
    clamp: function clamp(t, e, n) {
      return Math.max(e, Math.min(n, t));
    },
    euclideanModulo: function euclideanModulo(t, e) {
      return (t % e + e) % e;
    },
    mapLinear: function mapLinear(t, e, n, i, r) {
      return i + (t - e) * (r - i) / (n - e);
    },
    inverseLerp: function inverseLerp(t, e, n) {
      return t !== e ? (n - t) / (e - t) : 0;
    },
    lerp: function lerp(t, e, n) {
      return (1 - n) * t + n * e;
    },
    damp: function damp(t, e, n, i) {
      return ot.lerp(t, e, 1 - Math.exp(-n * i));
    },
    pingpong: function pingpong(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      return e - Math.abs(ot.euclideanModulo(t, 2 * e) - e);
    },
    smoothstep: function smoothstep(t, e, n) {
      return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * (3 - 2 * t);
    },
    smootherstep: function smootherstep(t, e, n) {
      return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * t * (t * (6 * t - 15) + 10);
    },
    randInt: function randInt(t, e) {
      return t + Math.floor(Math.random() * (e - t + 1));
    },
    randFloat: function randFloat(t, e) {
      return t + Math.random() * (e - t);
    },
    randFloatSpread: function randFloatSpread(t) {
      return t * (.5 - Math.random());
    },
    seededRandom: function seededRandom(t) {
      return void 0 !== t && (at = t % 2147483647), at = 16807 * at % 2147483647, (at - 1) / 2147483646;
    },
    degToRad: function degToRad(t) {
      return t * ot.DEG2RAD;
    },
    radToDeg: function radToDeg(t) {
      return t * ot.RAD2DEG;
    },
    isPowerOfTwo: function isPowerOfTwo(t) {
      return 0 == (t & t - 1) && 0 !== t;
    },
    ceilPowerOfTwo: function ceilPowerOfTwo(t) {
      return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2));
    },
    floorPowerOfTwo: function floorPowerOfTwo(t) {
      return Math.pow(2, Math.floor(Math.log(t) / Math.LN2));
    },
    setQuaternionFromProperEuler: function setQuaternionFromProperEuler(t, e, n, i, r) {
      var s = Math.cos,
          a = Math.sin,
          o = s(n / 2),
          l = a(n / 2),
          c = s((e + i) / 2),
          h = a((e + i) / 2),
          u = s((e - i) / 2),
          d = a((e - i) / 2),
          p = s((i - e) / 2),
          f = a((i - e) / 2);

      switch (r) {
        case "XYX":
          t.set(o * h, l * u, l * d, o * c);
          break;

        case "YZY":
          t.set(l * d, o * h, l * u, o * c);
          break;

        case "ZXZ":
          t.set(l * u, l * d, o * h, o * c);
          break;

        case "XZX":
          t.set(o * h, l * f, l * p, o * c);
          break;

        case "YXY":
          t.set(l * p, o * h, l * f, o * c);
          break;

        case "ZYZ":
          t.set(l * f, l * p, o * h, o * c);
          break;

        default:
          console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r);
      }
    }
  };

  var lt = /*#__PURE__*/function () {
    function lt() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      _classCallCheck(this, lt);

      this.x = t, this.y = e;
    }

    _createClass(lt, [{
      key: "width",
      get: function get() {
        return this.x;
      },
      set: function set(t) {
        this.x = t;
      }
    }, {
      key: "height",
      get: function get() {
        return this.y;
      },
      set: function set(t) {
        this.y = t;
      }
    }, {
      key: "set",
      value: function set(t, e) {
        return this.x = t, this.y = e, this;
      }
    }, {
      key: "setScalar",
      value: function setScalar(t) {
        return this.x = t, this.y = t, this;
      }
    }, {
      key: "setX",
      value: function setX(t) {
        return this.x = t, this;
      }
    }, {
      key: "setY",
      value: function setY(t) {
        return this.y = t, this;
      }
    }, {
      key: "setComponent",
      value: function setComponent(t, e) {
        switch (t) {
          case 0:
            this.x = e;
            break;

          case 1:
            this.y = e;
            break;

          default:
            throw new Error("index is out of range: " + t);
        }

        return this;
      }
    }, {
      key: "getComponent",
      value: function getComponent(t) {
        switch (t) {
          case 0:
            return this.x;

          case 1:
            return this.y;

          default:
            throw new Error("index is out of range: " + t);
        }
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor(this.x, this.y);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this.x = t.x, this.y = t.y, this;
      }
    }, {
      key: "add",
      value: function add(t, e) {
        return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this);
      }
    }, {
      key: "addScalar",
      value: function addScalar(t) {
        return this.x += t, this.y += t, this;
      }
    }, {
      key: "addVectors",
      value: function addVectors(t, e) {
        return this.x = t.x + e.x, this.y = t.y + e.y, this;
      }
    }, {
      key: "addScaledVector",
      value: function addScaledVector(t, e) {
        return this.x += t.x * e, this.y += t.y * e, this;
      }
    }, {
      key: "sub",
      value: function sub(t, e) {
        return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this);
      }
    }, {
      key: "subScalar",
      value: function subScalar(t) {
        return this.x -= t, this.y -= t, this;
      }
    }, {
      key: "subVectors",
      value: function subVectors(t, e) {
        return this.x = t.x - e.x, this.y = t.y - e.y, this;
      }
    }, {
      key: "multiply",
      value: function multiply(t) {
        return this.x *= t.x, this.y *= t.y, this;
      }
    }, {
      key: "multiplyScalar",
      value: function multiplyScalar(t) {
        return this.x *= t, this.y *= t, this;
      }
    }, {
      key: "divide",
      value: function divide(t) {
        return this.x /= t.x, this.y /= t.y, this;
      }
    }, {
      key: "divideScalar",
      value: function divideScalar(t) {
        return this.multiplyScalar(1 / t);
      }
    }, {
      key: "applyMatrix3",
      value: function applyMatrix3(t) {
        var e = this.x,
            n = this.y,
            i = t.elements;
        return this.x = i[0] * e + i[3] * n + i[6], this.y = i[1] * e + i[4] * n + i[7], this;
      }
    }, {
      key: "min",
      value: function min(t) {
        return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
      }
    }, {
      key: "max",
      value: function max(t) {
        return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
      }
    }, {
      key: "clamp",
      value: function clamp(t, e) {
        return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this;
      }
    }, {
      key: "clampScalar",
      value: function clampScalar(t, e) {
        return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this;
      }
    }, {
      key: "clampLength",
      value: function clampLength(t, e) {
        var n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
      }
    }, {
      key: "floor",
      value: function floor() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
      }
    }, {
      key: "ceil",
      value: function ceil() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
      }
    }, {
      key: "round",
      value: function round() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
      }
    }, {
      key: "roundToZero",
      value: function roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
      }
    }, {
      key: "negate",
      value: function negate() {
        return this.x = -this.x, this.y = -this.y, this;
      }
    }, {
      key: "dot",
      value: function dot(t) {
        return this.x * t.x + this.y * t.y;
      }
    }, {
      key: "cross",
      value: function cross(t) {
        return this.x * t.y - this.y * t.x;
      }
    }, {
      key: "lengthSq",
      value: function lengthSq() {
        return this.x * this.x + this.y * this.y;
      }
    }, {
      key: "length",
      value: function length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      }
    }, {
      key: "manhattanLength",
      value: function manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y);
      }
    }, {
      key: "normalize",
      value: function normalize() {
        return this.divideScalar(this.length() || 1);
      }
    }, {
      key: "angle",
      value: function angle() {
        return Math.atan2(-this.y, -this.x) + Math.PI;
      }
    }, {
      key: "distanceTo",
      value: function distanceTo(t) {
        return Math.sqrt(this.distanceToSquared(t));
      }
    }, {
      key: "distanceToSquared",
      value: function distanceToSquared(t) {
        var e = this.x - t.x,
            n = this.y - t.y;
        return e * e + n * n;
      }
    }, {
      key: "manhattanDistanceTo",
      value: function manhattanDistanceTo(t) {
        return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
      }
    }, {
      key: "setLength",
      value: function setLength(t) {
        return this.normalize().multiplyScalar(t);
      }
    }, {
      key: "lerp",
      value: function lerp(t, e) {
        return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this;
      }
    }, {
      key: "lerpVectors",
      value: function lerpVectors(t, e, n) {
        return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this;
      }
    }, {
      key: "equals",
      value: function equals(t) {
        return t.x === this.x && t.y === this.y;
      }
    }, {
      key: "fromArray",
      value: function fromArray(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return this.x = t[e], this.y = t[e + 1], this;
      }
    }, {
      key: "toArray",
      value: function toArray() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return t[e] = this.x, t[e + 1] = this.y, t;
      }
    }, {
      key: "fromBufferAttribute",
      value: function fromBufferAttribute(t, e, n) {
        return void 0 !== n && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this;
      }
    }, {
      key: "rotateAround",
      value: function rotateAround(t, e) {
        var n = Math.cos(e),
            i = Math.sin(e),
            r = this.x - t.x,
            s = this.y - t.y;
        return this.x = r * n - s * i + t.x, this.y = r * i + s * n + t.y, this;
      }
    }, {
      key: "random",
      value: function random() {
        return this.x = Math.random(), this.y = Math.random(), this;
      }
    }]);

    return lt;
  }();

  lt.prototype.isVector2 = !0;

  var ct = /*#__PURE__*/function () {
    function ct() {
      _classCallCheck(this, ct);

      this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.");
    }

    _createClass(ct, [{
      key: "set",
      value: function set(t, e, n, i, r, s, a, o, l) {
        var c = this.elements;
        return c[0] = t, c[1] = i, c[2] = a, c[3] = e, c[4] = r, c[5] = o, c[6] = n, c[7] = s, c[8] = l, this;
      }
    }, {
      key: "identity",
      value: function identity() {
        return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        var e = this.elements,
            n = t.elements;
        return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this;
      }
    }, {
      key: "extractBasis",
      value: function extractBasis(t, e, n) {
        return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
      }
    }, {
      key: "setFromMatrix4",
      value: function setFromMatrix4(t) {
        var e = t.elements;
        return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this;
      }
    }, {
      key: "multiply",
      value: function multiply(t) {
        return this.multiplyMatrices(this, t);
      }
    }, {
      key: "premultiply",
      value: function premultiply(t) {
        return this.multiplyMatrices(t, this);
      }
    }, {
      key: "multiplyMatrices",
      value: function multiplyMatrices(t, e) {
        var n = t.elements,
            i = e.elements,
            r = this.elements,
            s = n[0],
            a = n[3],
            o = n[6],
            l = n[1],
            c = n[4],
            h = n[7],
            u = n[2],
            d = n[5],
            p = n[8],
            f = i[0],
            m = i[3],
            g = i[6],
            v = i[1],
            y = i[4],
            x = i[7],
            _ = i[2],
            b = i[5],
            w = i[8];
        return r[0] = s * f + a * v + o * _, r[3] = s * m + a * y + o * b, r[6] = s * g + a * x + o * w, r[1] = l * f + c * v + h * _, r[4] = l * m + c * y + h * b, r[7] = l * g + c * x + h * w, r[2] = u * f + d * v + p * _, r[5] = u * m + d * y + p * b, r[8] = u * g + d * x + p * w, this;
      }
    }, {
      key: "multiplyScalar",
      value: function multiplyScalar(t) {
        var e = this.elements;
        return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
      }
    }, {
      key: "determinant",
      value: function determinant() {
        var t = this.elements,
            e = t[0],
            n = t[1],
            i = t[2],
            r = t[3],
            s = t[4],
            a = t[5],
            o = t[6],
            l = t[7],
            c = t[8];
        return e * s * c - e * a * l - n * r * c + n * a * o + i * r * l - i * s * o;
      }
    }, {
      key: "invert",
      value: function invert() {
        var t = this.elements,
            e = t[0],
            n = t[1],
            i = t[2],
            r = t[3],
            s = t[4],
            a = t[5],
            o = t[6],
            l = t[7],
            c = t[8],
            h = c * s - a * l,
            u = a * o - c * r,
            d = l * r - s * o,
            p = e * h + n * u + i * d;
        if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
        var f = 1 / p;
        return t[0] = h * f, t[1] = (i * l - c * n) * f, t[2] = (a * n - i * s) * f, t[3] = u * f, t[4] = (c * e - i * o) * f, t[5] = (i * r - a * e) * f, t[6] = d * f, t[7] = (n * o - l * e) * f, t[8] = (s * e - n * r) * f, this;
      }
    }, {
      key: "transpose",
      value: function transpose() {
        var t;
        var e = this.elements;
        return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this;
      }
    }, {
      key: "getNormalMatrix",
      value: function getNormalMatrix(t) {
        return this.setFromMatrix4(t).invert().transpose();
      }
    }, {
      key: "transposeIntoArray",
      value: function transposeIntoArray(t) {
        var e = this.elements;
        return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this;
      }
    }, {
      key: "setUvTransform",
      value: function setUvTransform(t, e, n, i, r, s, a) {
        var o = Math.cos(r),
            l = Math.sin(r);
        return this.set(n * o, n * l, -n * (o * s + l * a) + s + t, -i * l, i * o, -i * (-l * s + o * a) + a + e, 0, 0, 1), this;
      }
    }, {
      key: "scale",
      value: function scale(t, e) {
        var n = this.elements;
        return n[0] *= t, n[3] *= t, n[6] *= t, n[1] *= e, n[4] *= e, n[7] *= e, this;
      }
    }, {
      key: "rotate",
      value: function rotate(t) {
        var e = Math.cos(t),
            n = Math.sin(t),
            i = this.elements,
            r = i[0],
            s = i[3],
            a = i[6],
            o = i[1],
            l = i[4],
            c = i[7];
        return i[0] = e * r + n * o, i[3] = e * s + n * l, i[6] = e * a + n * c, i[1] = -n * r + e * o, i[4] = -n * s + e * l, i[7] = -n * a + e * c, this;
      }
    }, {
      key: "translate",
      value: function translate(t, e) {
        var n = this.elements;
        return n[0] += t * n[2], n[3] += t * n[5], n[6] += t * n[8], n[1] += e * n[2], n[4] += e * n[5], n[7] += e * n[8], this;
      }
    }, {
      key: "equals",
      value: function equals(t) {
        var e = this.elements,
            n = t.elements;

        for (var _t4 = 0; _t4 < 9; _t4++) {
          if (e[_t4] !== n[_t4]) return !1;
        }

        return !0;
      }
    }, {
      key: "fromArray",
      value: function fromArray(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        for (var _n3 = 0; _n3 < 9; _n3++) {
          this.elements[_n3] = t[_n3 + e];
        }

        return this;
      }
    }, {
      key: "toArray",
      value: function toArray() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var n = this.elements;
        return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().fromArray(this.elements);
      }
    }]);

    return ct;
  }();

  var ht;
  ct.prototype.isMatrix3 = !0;
  var ut = {
    getDataURL: function getDataURL(t) {
      if (/^data:/i.test(t.src)) return t.src;
      if ("undefined" == typeof HTMLCanvasElement) return t.src;
      var e;
      if (t instanceof HTMLCanvasElement) e = t;else {
        void 0 === ht && (ht = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), ht.width = t.width, ht.height = t.height;

        var _n4 = ht.getContext("2d");

        t instanceof ImageData ? _n4.putImageData(t, 0, 0) : _n4.drawImage(t, 0, 0, t.width, t.height), e = ht;
      }
      return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), e.toDataURL("image/jpeg", .6)) : e.toDataURL("image/png");
    }
  };
  var dt = 0;

  var pt = /*#__PURE__*/function (_rt) {
    _inherits(pt, _rt);

    var _super = _createSuper(pt);

    function pt() {
      var _this;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : pt.DEFAULT_IMAGE;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : pt.DEFAULT_MAPPING;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1001;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1001;
      var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1006;
      var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1008;
      var a = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1023;
      var o = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1009;
      var l = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 1;
      var c = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 3e3;

      _classCallCheck(this, pt);

      _this = _super.call(this), Object.defineProperty(_assertThisInitialized(_this), "id", {
        value: dt++
      }), _this.uuid = ot.generateUUID(), _this.name = "", _this.image = t, _this.mipmaps = [], _this.mapping = e, _this.wrapS = n, _this.wrapT = i, _this.magFilter = r, _this.minFilter = s, _this.anisotropy = l, _this.format = a, _this.internalFormat = null, _this.type = o, _this.offset = new lt(0, 0), _this.repeat = new lt(1, 1), _this.center = new lt(0, 0), _this.rotation = 0, _this.matrixAutoUpdate = !0, _this.matrix = new ct(), _this.generateMipmaps = !0, _this.premultiplyAlpha = !1, _this.flipY = !0, _this.unpackAlignment = 4, _this.encoding = c, _this.version = 0, _this.onUpdate = null;
      return _this;
    }

    _createClass(pt, [{
      key: "updateMatrix",
      value: function updateMatrix() {
        this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this.name = t.name, this.image = t.image, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this;
      }
    }, {
      key: "toJSON",
      value: function toJSON(t) {
        var e = void 0 === t || "string" == typeof t;
        if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
        var n = {
          metadata: {
            version: 4.5,
            type: "Texture",
            generator: "Texture.toJSON"
          },
          uuid: this.uuid,
          name: this.name,
          mapping: this.mapping,
          repeat: [this.repeat.x, this.repeat.y],
          offset: [this.offset.x, this.offset.y],
          center: [this.center.x, this.center.y],
          rotation: this.rotation,
          wrap: [this.wrapS, this.wrapT],
          format: this.format,
          type: this.type,
          encoding: this.encoding,
          minFilter: this.minFilter,
          magFilter: this.magFilter,
          anisotropy: this.anisotropy,
          flipY: this.flipY,
          premultiplyAlpha: this.premultiplyAlpha,
          unpackAlignment: this.unpackAlignment
        };

        if (void 0 !== this.image) {
          var _i3 = this.image;

          if (void 0 === _i3.uuid && (_i3.uuid = ot.generateUUID()), !e && void 0 === t.images[_i3.uuid]) {
            var _e3;

            if (Array.isArray(_i3)) {
              _e3 = [];

              for (var _t5 = 0, _n5 = _i3.length; _t5 < _n5; _t5++) {
                _i3[_t5].isDataTexture ? _e3.push(ft(_i3[_t5].image)) : _e3.push(ft(_i3[_t5]));
              }
            } else _e3 = ft(_i3);

            t.images[_i3.uuid] = {
              uuid: _i3.uuid,
              url: _e3
            };
          }

          n.image = _i3.uuid;
        }

        return e || (t.textures[this.uuid] = n), n;
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this.dispatchEvent({
          type: "dispose"
        });
      }
    }, {
      key: "transformUv",
      value: function transformUv(t) {
        if (this.mapping !== i) return t;
        if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
          case h:
            t.x = t.x - Math.floor(t.x);
            break;

          case u:
            t.x = t.x < 0 ? 0 : 1;
            break;

          case d:
            1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
        }
        if (t.y < 0 || t.y > 1) switch (this.wrapT) {
          case h:
            t.y = t.y - Math.floor(t.y);
            break;

          case u:
            t.y = t.y < 0 ? 0 : 1;
            break;

          case d:
            1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
        }
        return this.flipY && (t.y = 1 - t.y), t;
      }
    }, {
      key: "needsUpdate",
      set: function set(t) {
        !0 === t && this.version++;
      }
    }]);

    return pt;
  }(rt);

  function ft(t) {
    return "undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap ? ut.getDataURL(t) : t.data ? {
      data: Array.prototype.slice.call(t.data),
      width: t.width,
      height: t.height,
      type: t.data.constructor.name
    } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
  }

  pt.DEFAULT_IMAGE = void 0, pt.DEFAULT_MAPPING = i, pt.prototype.isTexture = !0;

  var mt = /*#__PURE__*/function () {
    function mt() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

      _classCallCheck(this, mt);

      this.x = t, this.y = e, this.z = n, this.w = i;
    }

    _createClass(mt, [{
      key: "width",
      get: function get() {
        return this.z;
      },
      set: function set(t) {
        this.z = t;
      }
    }, {
      key: "height",
      get: function get() {
        return this.w;
      },
      set: function set(t) {
        this.w = t;
      }
    }, {
      key: "set",
      value: function set(t, e, n, i) {
        return this.x = t, this.y = e, this.z = n, this.w = i, this;
      }
    }, {
      key: "setScalar",
      value: function setScalar(t) {
        return this.x = t, this.y = t, this.z = t, this.w = t, this;
      }
    }, {
      key: "setX",
      value: function setX(t) {
        return this.x = t, this;
      }
    }, {
      key: "setY",
      value: function setY(t) {
        return this.y = t, this;
      }
    }, {
      key: "setZ",
      value: function setZ(t) {
        return this.z = t, this;
      }
    }, {
      key: "setW",
      value: function setW(t) {
        return this.w = t, this;
      }
    }, {
      key: "setComponent",
      value: function setComponent(t, e) {
        switch (t) {
          case 0:
            this.x = e;
            break;

          case 1:
            this.y = e;
            break;

          case 2:
            this.z = e;
            break;

          case 3:
            this.w = e;
            break;

          default:
            throw new Error("index is out of range: " + t);
        }

        return this;
      }
    }, {
      key: "getComponent",
      value: function getComponent(t) {
        switch (t) {
          case 0:
            return this.x;

          case 1:
            return this.y;

          case 2:
            return this.z;

          case 3:
            return this.w;

          default:
            throw new Error("index is out of range: " + t);
        }
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor(this.x, this.y, this.z, this.w);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this;
      }
    }, {
      key: "add",
      value: function add(t, e) {
        return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this);
      }
    }, {
      key: "addScalar",
      value: function addScalar(t) {
        return this.x += t, this.y += t, this.z += t, this.w += t, this;
      }
    }, {
      key: "addVectors",
      value: function addVectors(t, e) {
        return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this;
      }
    }, {
      key: "addScaledVector",
      value: function addScaledVector(t, e) {
        return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this;
      }
    }, {
      key: "sub",
      value: function sub(t, e) {
        return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this);
      }
    }, {
      key: "subScalar",
      value: function subScalar(t) {
        return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
      }
    }, {
      key: "subVectors",
      value: function subVectors(t, e) {
        return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this;
      }
    }, {
      key: "multiply",
      value: function multiply(t) {
        return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this;
      }
    }, {
      key: "multiplyScalar",
      value: function multiplyScalar(t) {
        return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
      }
    }, {
      key: "applyMatrix4",
      value: function applyMatrix4(t) {
        var e = this.x,
            n = this.y,
            i = this.z,
            r = this.w,
            s = t.elements;
        return this.x = s[0] * e + s[4] * n + s[8] * i + s[12] * r, this.y = s[1] * e + s[5] * n + s[9] * i + s[13] * r, this.z = s[2] * e + s[6] * n + s[10] * i + s[14] * r, this.w = s[3] * e + s[7] * n + s[11] * i + s[15] * r, this;
      }
    }, {
      key: "divideScalar",
      value: function divideScalar(t) {
        return this.multiplyScalar(1 / t);
      }
    }, {
      key: "setAxisAngleFromQuaternion",
      value: function setAxisAngleFromQuaternion(t) {
        this.w = 2 * Math.acos(t.w);
        var e = Math.sqrt(1 - t.w * t.w);
        return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this;
      }
    }, {
      key: "setAxisAngleFromRotationMatrix",
      value: function setAxisAngleFromRotationMatrix(t) {
        var e, n, i, r;
        var s = .01,
            a = .1,
            o = t.elements,
            l = o[0],
            c = o[4],
            h = o[8],
            u = o[1],
            d = o[5],
            p = o[9],
            f = o[2],
            m = o[6],
            g = o[10];

        if (Math.abs(c - u) < s && Math.abs(h - f) < s && Math.abs(p - m) < s) {
          if (Math.abs(c + u) < a && Math.abs(h + f) < a && Math.abs(p + m) < a && Math.abs(l + d + g - 3) < a) return this.set(1, 0, 0, 0), this;
          e = Math.PI;

          var _t6 = (l + 1) / 2,
              _o2 = (d + 1) / 2,
              _v = (g + 1) / 2,
              _y = (c + u) / 4,
              _x = (h + f) / 4,
              _2 = (p + m) / 4;

          return _t6 > _o2 && _t6 > _v ? _t6 < s ? (n = 0, i = .707106781, r = .707106781) : (n = Math.sqrt(_t6), i = _y / n, r = _x / n) : _o2 > _v ? _o2 < s ? (n = .707106781, i = 0, r = .707106781) : (i = Math.sqrt(_o2), n = _y / i, r = _2 / i) : _v < s ? (n = .707106781, i = .707106781, r = 0) : (r = Math.sqrt(_v), n = _x / r, i = _2 / r), this.set(n, i, r, e), this;
        }

        var v = Math.sqrt((m - p) * (m - p) + (h - f) * (h - f) + (u - c) * (u - c));
        return Math.abs(v) < .001 && (v = 1), this.x = (m - p) / v, this.y = (h - f) / v, this.z = (u - c) / v, this.w = Math.acos((l + d + g - 1) / 2), this;
      }
    }, {
      key: "min",
      value: function min(t) {
        return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
      }
    }, {
      key: "max",
      value: function max(t) {
        return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
      }
    }, {
      key: "clamp",
      value: function clamp(t, e) {
        return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this;
      }
    }, {
      key: "clampScalar",
      value: function clampScalar(t, e) {
        return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this;
      }
    }, {
      key: "clampLength",
      value: function clampLength(t, e) {
        var n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
      }
    }, {
      key: "floor",
      value: function floor() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
      }
    }, {
      key: "ceil",
      value: function ceil() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
      }
    }, {
      key: "round",
      value: function round() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
      }
    }, {
      key: "roundToZero",
      value: function roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this;
      }
    }, {
      key: "negate",
      value: function negate() {
        return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
      }
    }, {
      key: "dot",
      value: function dot(t) {
        return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
      }
    }, {
      key: "lengthSq",
      value: function lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
      }
    }, {
      key: "length",
      value: function length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
      }
    }, {
      key: "manhattanLength",
      value: function manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
      }
    }, {
      key: "normalize",
      value: function normalize() {
        return this.divideScalar(this.length() || 1);
      }
    }, {
      key: "setLength",
      value: function setLength(t) {
        return this.normalize().multiplyScalar(t);
      }
    }, {
      key: "lerp",
      value: function lerp(t, e) {
        return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this;
      }
    }, {
      key: "lerpVectors",
      value: function lerpVectors(t, e, n) {
        return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this.w = t.w + (e.w - t.w) * n, this;
      }
    }, {
      key: "equals",
      value: function equals(t) {
        return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
      }
    }, {
      key: "fromArray",
      value: function fromArray(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this;
      }
    }, {
      key: "toArray",
      value: function toArray() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t;
      }
    }, {
      key: "fromBufferAttribute",
      value: function fromBufferAttribute(t, e, n) {
        return void 0 !== n && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this;
      }
    }, {
      key: "random",
      value: function random() {
        return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
      }
    }]);

    return mt;
  }();

  mt.prototype.isVector4 = !0;

  var gt = /*#__PURE__*/function (_rt2) {
    _inherits(gt, _rt2);

    var _super2 = _createSuper(gt);

    function gt(t, e, n) {
      var _this2;

      _classCallCheck(this, gt);

      _this2 = _super2.call(this), _this2.width = t, _this2.height = e, _this2.depth = 1, _this2.scissor = new mt(0, 0, t, e), _this2.scissorTest = !1, _this2.viewport = new mt(0, 0, t, e), n = n || {}, _this2.texture = new pt(void 0, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), _this2.texture.image = {}, _this2.texture.image.width = t, _this2.texture.image.height = e, _this2.texture.image.depth = 1, _this2.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps, _this2.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : g, _this2.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer, _this2.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer, _this2.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null;
      return _this2;
    }

    _createClass(gt, [{
      key: "setTexture",
      value: function setTexture(t) {
        t.image = {
          width: this.width,
          height: this.height,
          depth: this.depth
        }, this.texture = t;
      }
    }, {
      key: "setSize",
      value: function setSize(t, e) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        this.width === t && this.height === e && this.depth === n || (this.width = t, this.height = e, this.depth = n, this.texture.image.width = t, this.texture.image.height = e, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e);
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this.width = t.width, this.height = t.height, this.depth = t.depth, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.depthTexture = t.depthTexture, this;
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this.dispatchEvent({
          type: "dispose"
        });
      }
    }]);

    return gt;
  }(rt);

  gt.prototype.isWebGLRenderTarget = !0;

  var vt = /*#__PURE__*/function (_gt) {
    _inherits(vt, _gt);

    var _super3 = _createSuper(vt);

    function vt(t, e, n) {
      var _this3;

      _classCallCheck(this, vt);

      _this3 = _super3.call(this, t, e, n), _this3.samples = 4;
      return _this3;
    }

    _createClass(vt, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(vt.prototype), "copy", this).call(this, t), this.samples = t.samples, this;
      }
    }]);

    return vt;
  }(gt);

  vt.prototype.isWebGLMultisampleRenderTarget = !0;

  var yt = /*#__PURE__*/function () {
    function yt() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

      _classCallCheck(this, yt);

      this._x = t, this._y = e, this._z = n, this._w = i;
    }

    _createClass(yt, [{
      key: "x",
      get: function get() {
        return this._x;
      },
      set: function set(t) {
        this._x = t, this._onChangeCallback();
      }
    }, {
      key: "y",
      get: function get() {
        return this._y;
      },
      set: function set(t) {
        this._y = t, this._onChangeCallback();
      }
    }, {
      key: "z",
      get: function get() {
        return this._z;
      },
      set: function set(t) {
        this._z = t, this._onChangeCallback();
      }
    }, {
      key: "w",
      get: function get() {
        return this._w;
      },
      set: function set(t) {
        this._w = t, this._onChangeCallback();
      }
    }, {
      key: "set",
      value: function set(t, e, n, i) {
        return this._x = t, this._y = e, this._z = n, this._w = i, this._onChangeCallback(), this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor(this._x, this._y, this._z, this._w);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
      }
    }, {
      key: "setFromEuler",
      value: function setFromEuler(t, e) {
        if (!t || !t.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
        var n = t._x,
            i = t._y,
            r = t._z,
            s = t._order,
            a = Math.cos,
            o = Math.sin,
            l = a(n / 2),
            c = a(i / 2),
            h = a(r / 2),
            u = o(n / 2),
            d = o(i / 2),
            p = o(r / 2);

        switch (s) {
          case "XYZ":
            this._x = u * c * h + l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h - u * d * p;
            break;

          case "YXZ":
            this._x = u * c * h + l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h + u * d * p;
            break;

          case "ZXY":
            this._x = u * c * h - l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h - u * d * p;
            break;

          case "ZYX":
            this._x = u * c * h - l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h + u * d * p;
            break;

          case "YZX":
            this._x = u * c * h + l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h - u * d * p;
            break;

          case "XZY":
            this._x = u * c * h - l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h + u * d * p;
            break;

          default:
            console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + s);
        }

        return !1 !== e && this._onChangeCallback(), this;
      }
    }, {
      key: "setFromAxisAngle",
      value: function setFromAxisAngle(t, e) {
        var n = e / 2,
            i = Math.sin(n);
        return this._x = t.x * i, this._y = t.y * i, this._z = t.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
      }
    }, {
      key: "setFromRotationMatrix",
      value: function setFromRotationMatrix(t) {
        var e = t.elements,
            n = e[0],
            i = e[4],
            r = e[8],
            s = e[1],
            a = e[5],
            o = e[9],
            l = e[2],
            c = e[6],
            h = e[10],
            u = n + a + h;

        if (u > 0) {
          var _t7 = .5 / Math.sqrt(u + 1);

          this._w = .25 / _t7, this._x = (c - o) * _t7, this._y = (r - l) * _t7, this._z = (s - i) * _t7;
        } else if (n > a && n > h) {
          var _t8 = 2 * Math.sqrt(1 + n - a - h);

          this._w = (c - o) / _t8, this._x = .25 * _t8, this._y = (i + s) / _t8, this._z = (r + l) / _t8;
        } else if (a > h) {
          var _t9 = 2 * Math.sqrt(1 + a - n - h);

          this._w = (r - l) / _t9, this._x = (i + s) / _t9, this._y = .25 * _t9, this._z = (o + c) / _t9;
        } else {
          var _t10 = 2 * Math.sqrt(1 + h - n - a);

          this._w = (s - i) / _t10, this._x = (r + l) / _t10, this._y = (o + c) / _t10, this._z = .25 * _t10;
        }

        return this._onChangeCallback(), this;
      }
    }, {
      key: "setFromUnitVectors",
      value: function setFromUnitVectors(t, e) {
        var n = t.dot(e) + 1;
        return n < Number.EPSILON ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize();
      }
    }, {
      key: "angleTo",
      value: function angleTo(t) {
        return 2 * Math.acos(Math.abs(ot.clamp(this.dot(t), -1, 1)));
      }
    }, {
      key: "rotateTowards",
      value: function rotateTowards(t, e) {
        var n = this.angleTo(t);
        if (0 === n) return this;
        var i = Math.min(1, e / n);
        return this.slerp(t, i), this;
      }
    }, {
      key: "identity",
      value: function identity() {
        return this.set(0, 0, 0, 1);
      }
    }, {
      key: "invert",
      value: function invert() {
        return this.conjugate();
      }
    }, {
      key: "conjugate",
      value: function conjugate() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
      }
    }, {
      key: "dot",
      value: function dot(t) {
        return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
      }
    }, {
      key: "lengthSq",
      value: function lengthSq() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
      }
    }, {
      key: "length",
      value: function length() {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
      }
    }, {
      key: "normalize",
      value: function normalize() {
        var t = this.length();
        return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this;
      }
    }, {
      key: "multiply",
      value: function multiply(t, e) {
        return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t);
      }
    }, {
      key: "premultiply",
      value: function premultiply(t) {
        return this.multiplyQuaternions(t, this);
      }
    }, {
      key: "multiplyQuaternions",
      value: function multiplyQuaternions(t, e) {
        var n = t._x,
            i = t._y,
            r = t._z,
            s = t._w,
            a = e._x,
            o = e._y,
            l = e._z,
            c = e._w;
        return this._x = n * c + s * a + i * l - r * o, this._y = i * c + s * o + r * a - n * l, this._z = r * c + s * l + n * o - i * a, this._w = s * c - n * a - i * o - r * l, this._onChangeCallback(), this;
      }
    }, {
      key: "slerp",
      value: function slerp(t, e) {
        if (0 === e) return this;
        if (1 === e) return this.copy(t);
        var n = this._x,
            i = this._y,
            r = this._z,
            s = this._w;
        var a = s * t._w + n * t._x + i * t._y + r * t._z;
        if (a < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, a = -a) : this.copy(t), a >= 1) return this._w = s, this._x = n, this._y = i, this._z = r, this;
        var o = 1 - a * a;

        if (o <= Number.EPSILON) {
          var _t11 = 1 - e;

          return this._w = _t11 * s + e * this._w, this._x = _t11 * n + e * this._x, this._y = _t11 * i + e * this._y, this._z = _t11 * r + e * this._z, this.normalize(), this._onChangeCallback(), this;
        }

        var l = Math.sqrt(o),
            c = Math.atan2(l, a),
            h = Math.sin((1 - e) * c) / l,
            u = Math.sin(e * c) / l;
        return this._w = s * h + this._w * u, this._x = n * h + this._x * u, this._y = i * h + this._y * u, this._z = r * h + this._z * u, this._onChangeCallback(), this;
      }
    }, {
      key: "slerpQuaternions",
      value: function slerpQuaternions(t, e, n) {
        this.copy(t).slerp(e, n);
      }
    }, {
      key: "equals",
      value: function equals(t) {
        return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
      }
    }, {
      key: "fromArray",
      value: function fromArray(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this;
      }
    }, {
      key: "toArray",
      value: function toArray() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t;
      }
    }, {
      key: "fromBufferAttribute",
      value: function fromBufferAttribute(t, e) {
        return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this;
      }
    }, {
      key: "_onChange",
      value: function _onChange(t) {
        return this._onChangeCallback = t, this;
      }
    }, {
      key: "_onChangeCallback",
      value: function _onChangeCallback() {}
    }], [{
      key: "slerp",
      value: function slerp(t, e, n, i) {
        return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."), n.slerpQuaternions(t, e, i);
      }
    }, {
      key: "slerpFlat",
      value: function slerpFlat(t, e, n, i, r, s, a) {
        var o = n[i + 0],
            l = n[i + 1],
            c = n[i + 2],
            h = n[i + 3];
        var u = r[s + 0],
            d = r[s + 1],
            p = r[s + 2],
            f = r[s + 3];
        if (0 === a) return t[e + 0] = o, t[e + 1] = l, t[e + 2] = c, void (t[e + 3] = h);
        if (1 === a) return t[e + 0] = u, t[e + 1] = d, t[e + 2] = p, void (t[e + 3] = f);

        if (h !== f || o !== u || l !== d || c !== p) {
          var _t12 = 1 - a;

          var _e4 = o * u + l * d + c * p + h * f,
              _n6 = _e4 >= 0 ? 1 : -1,
              _i4 = 1 - _e4 * _e4;

          if (_i4 > Number.EPSILON) {
            var _r3 = Math.sqrt(_i4),
                _s2 = Math.atan2(_r3, _e4 * _n6);

            _t12 = Math.sin(_t12 * _s2) / _r3, a = Math.sin(a * _s2) / _r3;
          }

          var _r2 = a * _n6;

          if (o = o * _t12 + u * _r2, l = l * _t12 + d * _r2, c = c * _t12 + p * _r2, h = h * _t12 + f * _r2, _t12 === 1 - a) {
            var _t13 = 1 / Math.sqrt(o * o + l * l + c * c + h * h);

            o *= _t13, l *= _t13, c *= _t13, h *= _t13;
          }
        }

        t[e] = o, t[e + 1] = l, t[e + 2] = c, t[e + 3] = h;
      }
    }, {
      key: "multiplyQuaternionsFlat",
      value: function multiplyQuaternionsFlat(t, e, n, i, r, s) {
        var a = n[i],
            o = n[i + 1],
            l = n[i + 2],
            c = n[i + 3],
            h = r[s],
            u = r[s + 1],
            d = r[s + 2],
            p = r[s + 3];
        return t[e] = a * p + c * h + o * d - l * u, t[e + 1] = o * p + c * u + l * h - a * d, t[e + 2] = l * p + c * d + a * u - o * h, t[e + 3] = c * p - a * h - o * u - l * d, t;
      }
    }]);

    return yt;
  }();

  yt.prototype.isQuaternion = !0;

  var xt = /*#__PURE__*/function () {
    function xt() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      _classCallCheck(this, xt);

      this.x = t, this.y = e, this.z = n;
    }

    _createClass(xt, [{
      key: "set",
      value: function set(t, e, n) {
        return void 0 === n && (n = this.z), this.x = t, this.y = e, this.z = n, this;
      }
    }, {
      key: "setScalar",
      value: function setScalar(t) {
        return this.x = t, this.y = t, this.z = t, this;
      }
    }, {
      key: "setX",
      value: function setX(t) {
        return this.x = t, this;
      }
    }, {
      key: "setY",
      value: function setY(t) {
        return this.y = t, this;
      }
    }, {
      key: "setZ",
      value: function setZ(t) {
        return this.z = t, this;
      }
    }, {
      key: "setComponent",
      value: function setComponent(t, e) {
        switch (t) {
          case 0:
            this.x = e;
            break;

          case 1:
            this.y = e;
            break;

          case 2:
            this.z = e;
            break;

          default:
            throw new Error("index is out of range: " + t);
        }

        return this;
      }
    }, {
      key: "getComponent",
      value: function getComponent(t) {
        switch (t) {
          case 0:
            return this.x;

          case 1:
            return this.y;

          case 2:
            return this.z;

          default:
            throw new Error("index is out of range: " + t);
        }
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor(this.x, this.y, this.z);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this.x = t.x, this.y = t.y, this.z = t.z, this;
      }
    }, {
      key: "add",
      value: function add(t, e) {
        return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this);
      }
    }, {
      key: "addScalar",
      value: function addScalar(t) {
        return this.x += t, this.y += t, this.z += t, this;
      }
    }, {
      key: "addVectors",
      value: function addVectors(t, e) {
        return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this;
      }
    }, {
      key: "addScaledVector",
      value: function addScaledVector(t, e) {
        return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this;
      }
    }, {
      key: "sub",
      value: function sub(t, e) {
        return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this);
      }
    }, {
      key: "subScalar",
      value: function subScalar(t) {
        return this.x -= t, this.y -= t, this.z -= t, this;
      }
    }, {
      key: "subVectors",
      value: function subVectors(t, e) {
        return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this;
      }
    }, {
      key: "multiply",
      value: function multiply(t, e) {
        return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(t, e)) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this);
      }
    }, {
      key: "multiplyScalar",
      value: function multiplyScalar(t) {
        return this.x *= t, this.y *= t, this.z *= t, this;
      }
    }, {
      key: "multiplyVectors",
      value: function multiplyVectors(t, e) {
        return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this;
      }
    }, {
      key: "applyEuler",
      value: function applyEuler(t) {
        return t && t.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(bt.setFromEuler(t));
      }
    }, {
      key: "applyAxisAngle",
      value: function applyAxisAngle(t, e) {
        return this.applyQuaternion(bt.setFromAxisAngle(t, e));
      }
    }, {
      key: "applyMatrix3",
      value: function applyMatrix3(t) {
        var e = this.x,
            n = this.y,
            i = this.z,
            r = t.elements;
        return this.x = r[0] * e + r[3] * n + r[6] * i, this.y = r[1] * e + r[4] * n + r[7] * i, this.z = r[2] * e + r[5] * n + r[8] * i, this;
      }
    }, {
      key: "applyNormalMatrix",
      value: function applyNormalMatrix(t) {
        return this.applyMatrix3(t).normalize();
      }
    }, {
      key: "applyMatrix4",
      value: function applyMatrix4(t) {
        var e = this.x,
            n = this.y,
            i = this.z,
            r = t.elements,
            s = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
        return this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * s, this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * s, this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * s, this;
      }
    }, {
      key: "applyQuaternion",
      value: function applyQuaternion(t) {
        var e = this.x,
            n = this.y,
            i = this.z,
            r = t.x,
            s = t.y,
            a = t.z,
            o = t.w,
            l = o * e + s * i - a * n,
            c = o * n + a * e - r * i,
            h = o * i + r * n - s * e,
            u = -r * e - s * n - a * i;
        return this.x = l * o + u * -r + c * -a - h * -s, this.y = c * o + u * -s + h * -r - l * -a, this.z = h * o + u * -a + l * -s - c * -r, this;
      }
    }, {
      key: "project",
      value: function project(t) {
        return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
      }
    }, {
      key: "unproject",
      value: function unproject(t) {
        return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
      }
    }, {
      key: "transformDirection",
      value: function transformDirection(t) {
        var e = this.x,
            n = this.y,
            i = this.z,
            r = t.elements;
        return this.x = r[0] * e + r[4] * n + r[8] * i, this.y = r[1] * e + r[5] * n + r[9] * i, this.z = r[2] * e + r[6] * n + r[10] * i, this.normalize();
      }
    }, {
      key: "divide",
      value: function divide(t) {
        return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
      }
    }, {
      key: "divideScalar",
      value: function divideScalar(t) {
        return this.multiplyScalar(1 / t);
      }
    }, {
      key: "min",
      value: function min(t) {
        return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
      }
    }, {
      key: "max",
      value: function max(t) {
        return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
      }
    }, {
      key: "clamp",
      value: function clamp(t, e) {
        return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this;
      }
    }, {
      key: "clampScalar",
      value: function clampScalar(t, e) {
        return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this;
      }
    }, {
      key: "clampLength",
      value: function clampLength(t, e) {
        var n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
      }
    }, {
      key: "floor",
      value: function floor() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
      }
    }, {
      key: "ceil",
      value: function ceil() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
      }
    }, {
      key: "round",
      value: function round() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
      }
    }, {
      key: "roundToZero",
      value: function roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
      }
    }, {
      key: "negate",
      value: function negate() {
        return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
      }
    }, {
      key: "dot",
      value: function dot(t) {
        return this.x * t.x + this.y * t.y + this.z * t.z;
      }
    }, {
      key: "lengthSq",
      value: function lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z;
      }
    }, {
      key: "length",
      value: function length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
      }
    }, {
      key: "manhattanLength",
      value: function manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
      }
    }, {
      key: "normalize",
      value: function normalize() {
        return this.divideScalar(this.length() || 1);
      }
    }, {
      key: "setLength",
      value: function setLength(t) {
        return this.normalize().multiplyScalar(t);
      }
    }, {
      key: "lerp",
      value: function lerp(t, e) {
        return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this;
      }
    }, {
      key: "lerpVectors",
      value: function lerpVectors(t, e, n) {
        return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this;
      }
    }, {
      key: "cross",
      value: function cross(t, e) {
        return void 0 !== e ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(t, e)) : this.crossVectors(this, t);
      }
    }, {
      key: "crossVectors",
      value: function crossVectors(t, e) {
        var n = t.x,
            i = t.y,
            r = t.z,
            s = e.x,
            a = e.y,
            o = e.z;
        return this.x = i * o - r * a, this.y = r * s - n * o, this.z = n * a - i * s, this;
      }
    }, {
      key: "projectOnVector",
      value: function projectOnVector(t) {
        var e = t.lengthSq();
        if (0 === e) return this.set(0, 0, 0);
        var n = t.dot(this) / e;
        return this.copy(t).multiplyScalar(n);
      }
    }, {
      key: "projectOnPlane",
      value: function projectOnPlane(t) {
        return _t.copy(this).projectOnVector(t), this.sub(_t);
      }
    }, {
      key: "reflect",
      value: function reflect(t) {
        return this.sub(_t.copy(t).multiplyScalar(2 * this.dot(t)));
      }
    }, {
      key: "angleTo",
      value: function angleTo(t) {
        var e = Math.sqrt(this.lengthSq() * t.lengthSq());
        if (0 === e) return Math.PI / 2;
        var n = this.dot(t) / e;
        return Math.acos(ot.clamp(n, -1, 1));
      }
    }, {
      key: "distanceTo",
      value: function distanceTo(t) {
        return Math.sqrt(this.distanceToSquared(t));
      }
    }, {
      key: "distanceToSquared",
      value: function distanceToSquared(t) {
        var e = this.x - t.x,
            n = this.y - t.y,
            i = this.z - t.z;
        return e * e + n * n + i * i;
      }
    }, {
      key: "manhattanDistanceTo",
      value: function manhattanDistanceTo(t) {
        return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
      }
    }, {
      key: "setFromSpherical",
      value: function setFromSpherical(t) {
        return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
      }
    }, {
      key: "setFromSphericalCoords",
      value: function setFromSphericalCoords(t, e, n) {
        var i = Math.sin(e) * t;
        return this.x = i * Math.sin(n), this.y = Math.cos(e) * t, this.z = i * Math.cos(n), this;
      }
    }, {
      key: "setFromCylindrical",
      value: function setFromCylindrical(t) {
        return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
      }
    }, {
      key: "setFromCylindricalCoords",
      value: function setFromCylindricalCoords(t, e, n) {
        return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this;
      }
    }, {
      key: "setFromMatrixPosition",
      value: function setFromMatrixPosition(t) {
        var e = t.elements;
        return this.x = e[12], this.y = e[13], this.z = e[14], this;
      }
    }, {
      key: "setFromMatrixScale",
      value: function setFromMatrixScale(t) {
        var e = this.setFromMatrixColumn(t, 0).length(),
            n = this.setFromMatrixColumn(t, 1).length(),
            i = this.setFromMatrixColumn(t, 2).length();
        return this.x = e, this.y = n, this.z = i, this;
      }
    }, {
      key: "setFromMatrixColumn",
      value: function setFromMatrixColumn(t, e) {
        return this.fromArray(t.elements, 4 * e);
      }
    }, {
      key: "setFromMatrix3Column",
      value: function setFromMatrix3Column(t, e) {
        return this.fromArray(t.elements, 3 * e);
      }
    }, {
      key: "equals",
      value: function equals(t) {
        return t.x === this.x && t.y === this.y && t.z === this.z;
      }
    }, {
      key: "fromArray",
      value: function fromArray(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this;
      }
    }, {
      key: "toArray",
      value: function toArray() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t;
      }
    }, {
      key: "fromBufferAttribute",
      value: function fromBufferAttribute(t, e, n) {
        return void 0 !== n && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this;
      }
    }, {
      key: "random",
      value: function random() {
        return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
      }
    }]);

    return xt;
  }();

  xt.prototype.isVector3 = !0;

  var _t = new xt(),
      bt = new yt();

  var wt = /*#__PURE__*/function () {
    function wt() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new xt(1 / 0, 1 / 0, 1 / 0);
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new xt(-1 / 0, -1 / 0, -1 / 0);

      _classCallCheck(this, wt);

      this.min = t, this.max = e;
    }

    _createClass(wt, [{
      key: "set",
      value: function set(t, e) {
        return this.min.copy(t), this.max.copy(e), this;
      }
    }, {
      key: "setFromArray",
      value: function setFromArray(t) {
        var e = 1 / 0,
            n = 1 / 0,
            i = 1 / 0,
            r = -1 / 0,
            s = -1 / 0,
            a = -1 / 0;

        for (var _o3 = 0, _l2 = t.length; _o3 < _l2; _o3 += 3) {
          var _l3 = t[_o3],
              _c2 = t[_o3 + 1],
              _h2 = t[_o3 + 2];
          _l3 < e && (e = _l3), _c2 < n && (n = _c2), _h2 < i && (i = _h2), _l3 > r && (r = _l3), _c2 > s && (s = _c2), _h2 > a && (a = _h2);
        }

        return this.min.set(e, n, i), this.max.set(r, s, a), this;
      }
    }, {
      key: "setFromBufferAttribute",
      value: function setFromBufferAttribute(t) {
        var e = 1 / 0,
            n = 1 / 0,
            i = 1 / 0,
            r = -1 / 0,
            s = -1 / 0,
            a = -1 / 0;

        for (var _o4 = 0, _l4 = t.count; _o4 < _l4; _o4++) {
          var _l5 = t.getX(_o4),
              _c3 = t.getY(_o4),
              _h3 = t.getZ(_o4);

          _l5 < e && (e = _l5), _c3 < n && (n = _c3), _h3 < i && (i = _h3), _l5 > r && (r = _l5), _c3 > s && (s = _c3), _h3 > a && (a = _h3);
        }

        return this.min.set(e, n, i), this.max.set(r, s, a), this;
      }
    }, {
      key: "setFromPoints",
      value: function setFromPoints(t) {
        this.makeEmpty();

        for (var _e5 = 0, _n7 = t.length; _e5 < _n7; _e5++) {
          this.expandByPoint(t[_e5]);
        }

        return this;
      }
    }, {
      key: "setFromCenterAndSize",
      value: function setFromCenterAndSize(t, e) {
        var n = St.copy(e).multiplyScalar(.5);
        return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
      }
    }, {
      key: "setFromObject",
      value: function setFromObject(t) {
        return this.makeEmpty(), this.expandByObject(t);
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this.min.copy(t.min), this.max.copy(t.max), this;
      }
    }, {
      key: "makeEmpty",
      value: function makeEmpty() {
        return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
      }
    }, {
      key: "isEmpty",
      value: function isEmpty() {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
      }
    }, {
      key: "getCenter",
      value: function getCenter(t) {
        return void 0 === t && (console.warn("THREE.Box3: .getCenter() target is now required"), t = new xt()), this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5);
      }
    }, {
      key: "getSize",
      value: function getSize(t) {
        return void 0 === t && (console.warn("THREE.Box3: .getSize() target is now required"), t = new xt()), this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
      }
    }, {
      key: "expandByPoint",
      value: function expandByPoint(t) {
        return this.min.min(t), this.max.max(t), this;
      }
    }, {
      key: "expandByVector",
      value: function expandByVector(t) {
        return this.min.sub(t), this.max.add(t), this;
      }
    }, {
      key: "expandByScalar",
      value: function expandByScalar(t) {
        return this.min.addScalar(-t), this.max.addScalar(t), this;
      }
    }, {
      key: "expandByObject",
      value: function expandByObject(t) {
        t.updateWorldMatrix(!1, !1);
        var e = t.geometry;
        void 0 !== e && (null === e.boundingBox && e.computeBoundingBox(), Tt.copy(e.boundingBox), Tt.applyMatrix4(t.matrixWorld), this.union(Tt));
        var n = t.children;

        for (var _t14 = 0, _e6 = n.length; _t14 < _e6; _t14++) {
          this.expandByObject(n[_t14]);
        }

        return this;
      }
    }, {
      key: "containsPoint",
      value: function containsPoint(t) {
        return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z);
      }
    }, {
      key: "containsBox",
      value: function containsBox(t) {
        return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
      }
    }, {
      key: "getParameter",
      value: function getParameter(t, e) {
        return void 0 === e && (console.warn("THREE.Box3: .getParameter() target is now required"), e = new xt()), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z));
      }
    }, {
      key: "intersectsBox",
      value: function intersectsBox(t) {
        return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z);
      }
    }, {
      key: "intersectsSphere",
      value: function intersectsSphere(t) {
        return this.clampPoint(t.center, St), St.distanceToSquared(t.center) <= t.radius * t.radius;
      }
    }, {
      key: "intersectsPlane",
      value: function intersectsPlane(t) {
        var e, n;
        return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant;
      }
    }, {
      key: "intersectsTriangle",
      value: function intersectsTriangle(t) {
        if (this.isEmpty()) return !1;
        this.getCenter(Dt), It.subVectors(this.max, Dt), Et.subVectors(t.a, Dt), At.subVectors(t.b, Dt), Lt.subVectors(t.c, Dt), Rt.subVectors(At, Et), Ct.subVectors(Lt, At), Pt.subVectors(Et, Lt);
        var e = [0, -Rt.z, Rt.y, 0, -Ct.z, Ct.y, 0, -Pt.z, Pt.y, Rt.z, 0, -Rt.x, Ct.z, 0, -Ct.x, Pt.z, 0, -Pt.x, -Rt.y, Rt.x, 0, -Ct.y, Ct.x, 0, -Pt.y, Pt.x, 0];
        return !!Ot(e, Et, At, Lt, It) && (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!Ot(e, Et, At, Lt, It) && (Nt.crossVectors(Rt, Ct), e = [Nt.x, Nt.y, Nt.z], Ot(e, Et, At, Lt, It)));
      }
    }, {
      key: "clampPoint",
      value: function clampPoint(t, e) {
        return void 0 === e && (console.warn("THREE.Box3: .clampPoint() target is now required"), e = new xt()), e.copy(t).clamp(this.min, this.max);
      }
    }, {
      key: "distanceToPoint",
      value: function distanceToPoint(t) {
        return St.copy(t).clamp(this.min, this.max).sub(t).length();
      }
    }, {
      key: "getBoundingSphere",
      value: function getBoundingSphere(t) {
        return void 0 === t && console.error("THREE.Box3: .getBoundingSphere() target is now required"), this.getCenter(t.center), t.radius = .5 * this.getSize(St).length(), t;
      }
    }, {
      key: "intersect",
      value: function intersect(t) {
        return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
      }
    }, {
      key: "union",
      value: function union(t) {
        return this.min.min(t.min), this.max.max(t.max), this;
      }
    }, {
      key: "applyMatrix4",
      value: function applyMatrix4(t) {
        return this.isEmpty() || (Mt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), Mt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), Mt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), Mt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), Mt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), Mt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), Mt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), Mt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(Mt)), this;
      }
    }, {
      key: "translate",
      value: function translate(t) {
        return this.min.add(t), this.max.add(t), this;
      }
    }, {
      key: "equals",
      value: function equals(t) {
        return t.min.equals(this.min) && t.max.equals(this.max);
      }
    }]);

    return wt;
  }();

  wt.prototype.isBox3 = !0;
  var Mt = [new xt(), new xt(), new xt(), new xt(), new xt(), new xt(), new xt(), new xt()],
      St = new xt(),
      Tt = new wt(),
      Et = new xt(),
      At = new xt(),
      Lt = new xt(),
      Rt = new xt(),
      Ct = new xt(),
      Pt = new xt(),
      Dt = new xt(),
      It = new xt(),
      Nt = new xt(),
      Bt = new xt();

  function Ot(t, e, n, i, r) {
    for (var _s3 = 0, _a2 = t.length - 3; _s3 <= _a2; _s3 += 3) {
      Bt.fromArray(t, _s3);

      var _a3 = r.x * Math.abs(Bt.x) + r.y * Math.abs(Bt.y) + r.z * Math.abs(Bt.z),
          _o5 = e.dot(Bt),
          _l6 = n.dot(Bt),
          _c4 = i.dot(Bt);

      if (Math.max(-Math.max(_o5, _l6, _c4), Math.min(_o5, _l6, _c4)) > _a3) return !1;
    }

    return !0;
  }

  var zt = new wt(),
      Ft = new xt(),
      Ht = new xt(),
      Ut = new xt();

  var Gt = /*#__PURE__*/function () {
    function Gt() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new xt();
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

      _classCallCheck(this, Gt);

      this.center = t, this.radius = e;
    }

    _createClass(Gt, [{
      key: "set",
      value: function set(t, e) {
        return this.center.copy(t), this.radius = e, this;
      }
    }, {
      key: "setFromPoints",
      value: function setFromPoints(t, e) {
        var n = this.center;
        void 0 !== e ? n.copy(e) : zt.setFromPoints(t).getCenter(n);
        var i = 0;

        for (var _e7 = 0, _r4 = t.length; _e7 < _r4; _e7++) {
          i = Math.max(i, n.distanceToSquared(t[_e7]));
        }

        return this.radius = Math.sqrt(i), this;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this.center.copy(t.center), this.radius = t.radius, this;
      }
    }, {
      key: "isEmpty",
      value: function isEmpty() {
        return this.radius < 0;
      }
    }, {
      key: "makeEmpty",
      value: function makeEmpty() {
        return this.center.set(0, 0, 0), this.radius = -1, this;
      }
    }, {
      key: "containsPoint",
      value: function containsPoint(t) {
        return t.distanceToSquared(this.center) <= this.radius * this.radius;
      }
    }, {
      key: "distanceToPoint",
      value: function distanceToPoint(t) {
        return t.distanceTo(this.center) - this.radius;
      }
    }, {
      key: "intersectsSphere",
      value: function intersectsSphere(t) {
        var e = this.radius + t.radius;
        return t.center.distanceToSquared(this.center) <= e * e;
      }
    }, {
      key: "intersectsBox",
      value: function intersectsBox(t) {
        return t.intersectsSphere(this);
      }
    }, {
      key: "intersectsPlane",
      value: function intersectsPlane(t) {
        return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
      }
    }, {
      key: "clampPoint",
      value: function clampPoint(t, e) {
        var n = this.center.distanceToSquared(t);
        return void 0 === e && (console.warn("THREE.Sphere: .clampPoint() target is now required"), e = new xt()), e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
      }
    }, {
      key: "getBoundingBox",
      value: function getBoundingBox(t) {
        return void 0 === t && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"), t = new wt()), this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
      }
    }, {
      key: "applyMatrix4",
      value: function applyMatrix4(t) {
        return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this;
      }
    }, {
      key: "translate",
      value: function translate(t) {
        return this.center.add(t), this;
      }
    }, {
      key: "expandByPoint",
      value: function expandByPoint(t) {
        Ut.subVectors(t, this.center);
        var e = Ut.lengthSq();

        if (e > this.radius * this.radius) {
          var _t15 = Math.sqrt(e),
              _n8 = .5 * (_t15 - this.radius);

          this.center.add(Ut.multiplyScalar(_n8 / _t15)), this.radius += _n8;
        }

        return this;
      }
    }, {
      key: "union",
      value: function union(t) {
        return Ht.subVectors(t.center, this.center).normalize().multiplyScalar(t.radius), this.expandByPoint(Ft.copy(t.center).add(Ht)), this.expandByPoint(Ft.copy(t.center).sub(Ht)), this;
      }
    }, {
      key: "equals",
      value: function equals(t) {
        return t.center.equals(this.center) && t.radius === this.radius;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }]);

    return Gt;
  }();

  var kt = new xt(),
      Vt = new xt(),
      Wt = new xt(),
      jt = new xt(),
      qt = new xt(),
      Xt = new xt(),
      Yt = new xt();

  var Zt = /*#__PURE__*/function () {
    function Zt() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new xt();
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new xt(0, 0, -1);

      _classCallCheck(this, Zt);

      this.origin = t, this.direction = e;
    }

    _createClass(Zt, [{
      key: "set",
      value: function set(t, e) {
        return this.origin.copy(t), this.direction.copy(e), this;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
      }
    }, {
      key: "at",
      value: function at(t, e) {
        return void 0 === e && (console.warn("THREE.Ray: .at() target is now required"), e = new xt()), e.copy(this.direction).multiplyScalar(t).add(this.origin);
      }
    }, {
      key: "lookAt",
      value: function lookAt(t) {
        return this.direction.copy(t).sub(this.origin).normalize(), this;
      }
    }, {
      key: "recast",
      value: function recast(t) {
        return this.origin.copy(this.at(t, kt)), this;
      }
    }, {
      key: "closestPointToPoint",
      value: function closestPointToPoint(t, e) {
        void 0 === e && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"), e = new xt()), e.subVectors(t, this.origin);
        var n = e.dot(this.direction);
        return n < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(n).add(this.origin);
      }
    }, {
      key: "distanceToPoint",
      value: function distanceToPoint(t) {
        return Math.sqrt(this.distanceSqToPoint(t));
      }
    }, {
      key: "distanceSqToPoint",
      value: function distanceSqToPoint(t) {
        var e = kt.subVectors(t, this.origin).dot(this.direction);
        return e < 0 ? this.origin.distanceToSquared(t) : (kt.copy(this.direction).multiplyScalar(e).add(this.origin), kt.distanceToSquared(t));
      }
    }, {
      key: "distanceSqToSegment",
      value: function distanceSqToSegment(t, e, n, i) {
        Vt.copy(t).add(e).multiplyScalar(.5), Wt.copy(e).sub(t).normalize(), jt.copy(this.origin).sub(Vt);
        var r = .5 * t.distanceTo(e),
            s = -this.direction.dot(Wt),
            a = jt.dot(this.direction),
            o = -jt.dot(Wt),
            l = jt.lengthSq(),
            c = Math.abs(1 - s * s);
        var h, u, d, p;
        if (c > 0) {
          if (h = s * o - a, u = s * a - o, p = r * c, h >= 0) {
            if (u >= -p) {
              if (u <= p) {
                var _t16 = 1 / c;

                h *= _t16, u *= _t16, d = h * (h + s * u + 2 * a) + u * (s * h + u + 2 * o) + l;
              } else u = r, h = Math.max(0, -(s * u + a)), d = -h * h + u * (u + 2 * o) + l;
            } else u = -r, h = Math.max(0, -(s * u + a)), d = -h * h + u * (u + 2 * o) + l;
          } else u <= -p ? (h = Math.max(0, -(-s * r + a)), u = h > 0 ? -r : Math.min(Math.max(-r, -o), r), d = -h * h + u * (u + 2 * o) + l) : u <= p ? (h = 0, u = Math.min(Math.max(-r, -o), r), d = u * (u + 2 * o) + l) : (h = Math.max(0, -(s * r + a)), u = h > 0 ? r : Math.min(Math.max(-r, -o), r), d = -h * h + u * (u + 2 * o) + l);
        } else u = s > 0 ? -r : r, h = Math.max(0, -(s * u + a)), d = -h * h + u * (u + 2 * o) + l;
        return n && n.copy(this.direction).multiplyScalar(h).add(this.origin), i && i.copy(Wt).multiplyScalar(u).add(Vt), d;
      }
    }, {
      key: "intersectSphere",
      value: function intersectSphere(t, e) {
        kt.subVectors(t.center, this.origin);
        var n = kt.dot(this.direction),
            i = kt.dot(kt) - n * n,
            r = t.radius * t.radius;
        if (i > r) return null;
        var s = Math.sqrt(r - i),
            a = n - s,
            o = n + s;
        return a < 0 && o < 0 ? null : a < 0 ? this.at(o, e) : this.at(a, e);
      }
    }, {
      key: "intersectsSphere",
      value: function intersectsSphere(t) {
        return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
      }
    }, {
      key: "distanceToPlane",
      value: function distanceToPlane(t) {
        var e = t.normal.dot(this.direction);
        if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
        var n = -(this.origin.dot(t.normal) + t.constant) / e;
        return n >= 0 ? n : null;
      }
    }, {
      key: "intersectPlane",
      value: function intersectPlane(t, e) {
        var n = this.distanceToPlane(t);
        return null === n ? null : this.at(n, e);
      }
    }, {
      key: "intersectsPlane",
      value: function intersectsPlane(t) {
        var e = t.distanceToPoint(this.origin);
        if (0 === e) return !0;
        return t.normal.dot(this.direction) * e < 0;
      }
    }, {
      key: "intersectBox",
      value: function intersectBox(t, e) {
        var n, i, r, s, a, o;
        var l = 1 / this.direction.x,
            c = 1 / this.direction.y,
            h = 1 / this.direction.z,
            u = this.origin;
        return l >= 0 ? (n = (t.min.x - u.x) * l, i = (t.max.x - u.x) * l) : (n = (t.max.x - u.x) * l, i = (t.min.x - u.x) * l), c >= 0 ? (r = (t.min.y - u.y) * c, s = (t.max.y - u.y) * c) : (r = (t.max.y - u.y) * c, s = (t.min.y - u.y) * c), n > s || r > i ? null : ((r > n || n != n) && (n = r), (s < i || i != i) && (i = s), h >= 0 ? (a = (t.min.z - u.z) * h, o = (t.max.z - u.z) * h) : (a = (t.max.z - u.z) * h, o = (t.min.z - u.z) * h), n > o || a > i ? null : ((a > n || n != n) && (n = a), (o < i || i != i) && (i = o), i < 0 ? null : this.at(n >= 0 ? n : i, e)));
      }
    }, {
      key: "intersectsBox",
      value: function intersectsBox(t) {
        return null !== this.intersectBox(t, kt);
      }
    }, {
      key: "intersectTriangle",
      value: function intersectTriangle(t, e, n, i, r) {
        qt.subVectors(e, t), Xt.subVectors(n, t), Yt.crossVectors(qt, Xt);
        var s,
            a = this.direction.dot(Yt);

        if (a > 0) {
          if (i) return null;
          s = 1;
        } else {
          if (!(a < 0)) return null;
          s = -1, a = -a;
        }

        jt.subVectors(this.origin, t);
        var o = s * this.direction.dot(Xt.crossVectors(jt, Xt));
        if (o < 0) return null;
        var l = s * this.direction.dot(qt.cross(jt));
        if (l < 0) return null;
        if (o + l > a) return null;
        var c = -s * jt.dot(Yt);
        return c < 0 ? null : this.at(c / a, r);
      }
    }, {
      key: "applyMatrix4",
      value: function applyMatrix4(t) {
        return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this;
      }
    }, {
      key: "equals",
      value: function equals(t) {
        return t.origin.equals(this.origin) && t.direction.equals(this.direction);
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }]);

    return Zt;
  }();

  var Jt = /*#__PURE__*/function () {
    function Jt() {
      _classCallCheck(this, Jt);

      this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.");
    }

    _createClass(Jt, [{
      key: "set",
      value: function set(t, e, n, i, r, s, a, o, l, c, h, u, d, p, f, m) {
        var g = this.elements;
        return g[0] = t, g[4] = e, g[8] = n, g[12] = i, g[1] = r, g[5] = s, g[9] = a, g[13] = o, g[2] = l, g[6] = c, g[10] = h, g[14] = u, g[3] = d, g[7] = p, g[11] = f, g[15] = m, this;
      }
    }, {
      key: "identity",
      value: function identity() {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new Jt().fromArray(this.elements);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        var e = this.elements,
            n = t.elements;
        return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this;
      }
    }, {
      key: "copyPosition",
      value: function copyPosition(t) {
        var e = this.elements,
            n = t.elements;
        return e[12] = n[12], e[13] = n[13], e[14] = n[14], this;
      }
    }, {
      key: "setFromMatrix3",
      value: function setFromMatrix3(t) {
        var e = t.elements;
        return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this;
      }
    }, {
      key: "extractBasis",
      value: function extractBasis(t, e, n) {
        return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
      }
    }, {
      key: "makeBasis",
      value: function makeBasis(t, e, n) {
        return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1), this;
      }
    }, {
      key: "extractRotation",
      value: function extractRotation(t) {
        var e = this.elements,
            n = t.elements,
            i = 1 / Qt.setFromMatrixColumn(t, 0).length(),
            r = 1 / Qt.setFromMatrixColumn(t, 1).length(),
            s = 1 / Qt.setFromMatrixColumn(t, 2).length();
        return e[0] = n[0] * i, e[1] = n[1] * i, e[2] = n[2] * i, e[3] = 0, e[4] = n[4] * r, e[5] = n[5] * r, e[6] = n[6] * r, e[7] = 0, e[8] = n[8] * s, e[9] = n[9] * s, e[10] = n[10] * s, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
      }
    }, {
      key: "makeRotationFromEuler",
      value: function makeRotationFromEuler(t) {
        t && t.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
        var e = this.elements,
            n = t.x,
            i = t.y,
            r = t.z,
            s = Math.cos(n),
            a = Math.sin(n),
            o = Math.cos(i),
            l = Math.sin(i),
            c = Math.cos(r),
            h = Math.sin(r);

        if ("XYZ" === t.order) {
          var _t17 = s * c,
              _n9 = s * h,
              _i5 = a * c,
              _r5 = a * h;

          e[0] = o * c, e[4] = -o * h, e[8] = l, e[1] = _n9 + _i5 * l, e[5] = _t17 - _r5 * l, e[9] = -a * o, e[2] = _r5 - _t17 * l, e[6] = _i5 + _n9 * l, e[10] = s * o;
        } else if ("YXZ" === t.order) {
          var _t18 = o * c,
              _n10 = o * h,
              _i6 = l * c,
              _r6 = l * h;

          e[0] = _t18 + _r6 * a, e[4] = _i6 * a - _n10, e[8] = s * l, e[1] = s * h, e[5] = s * c, e[9] = -a, e[2] = _n10 * a - _i6, e[6] = _r6 + _t18 * a, e[10] = s * o;
        } else if ("ZXY" === t.order) {
          var _t19 = o * c,
              _n11 = o * h,
              _i7 = l * c,
              _r7 = l * h;

          e[0] = _t19 - _r7 * a, e[4] = -s * h, e[8] = _i7 + _n11 * a, e[1] = _n11 + _i7 * a, e[5] = s * c, e[9] = _r7 - _t19 * a, e[2] = -s * l, e[6] = a, e[10] = s * o;
        } else if ("ZYX" === t.order) {
          var _t20 = s * c,
              _n12 = s * h,
              _i8 = a * c,
              _r8 = a * h;

          e[0] = o * c, e[4] = _i8 * l - _n12, e[8] = _t20 * l + _r8, e[1] = o * h, e[5] = _r8 * l + _t20, e[9] = _n12 * l - _i8, e[2] = -l, e[6] = a * o, e[10] = s * o;
        } else if ("YZX" === t.order) {
          var _t21 = s * o,
              _n13 = s * l,
              _i9 = a * o,
              _r9 = a * l;

          e[0] = o * c, e[4] = _r9 - _t21 * h, e[8] = _i9 * h + _n13, e[1] = h, e[5] = s * c, e[9] = -a * c, e[2] = -l * c, e[6] = _n13 * h + _i9, e[10] = _t21 - _r9 * h;
        } else if ("XZY" === t.order) {
          var _t22 = s * o,
              _n14 = s * l,
              _i10 = a * o,
              _r10 = a * l;

          e[0] = o * c, e[4] = -h, e[8] = l * c, e[1] = _t22 * h + _r10, e[5] = s * c, e[9] = _n14 * h - _i10, e[2] = _i10 * h - _n14, e[6] = a * c, e[10] = _r10 * h + _t22;
        }

        return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
      }
    }, {
      key: "makeRotationFromQuaternion",
      value: function makeRotationFromQuaternion(t) {
        return this.compose($t, t, te);
      }
    }, {
      key: "lookAt",
      value: function lookAt(t, e, n) {
        var i = this.elements;
        return ie.subVectors(t, e), 0 === ie.lengthSq() && (ie.z = 1), ie.normalize(), ee.crossVectors(n, ie), 0 === ee.lengthSq() && (1 === Math.abs(n.z) ? ie.x += 1e-4 : ie.z += 1e-4, ie.normalize(), ee.crossVectors(n, ie)), ee.normalize(), ne.crossVectors(ie, ee), i[0] = ee.x, i[4] = ne.x, i[8] = ie.x, i[1] = ee.y, i[5] = ne.y, i[9] = ie.y, i[2] = ee.z, i[6] = ne.z, i[10] = ie.z, this;
      }
    }, {
      key: "multiply",
      value: function multiply(t, e) {
        return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t);
      }
    }, {
      key: "premultiply",
      value: function premultiply(t) {
        return this.multiplyMatrices(t, this);
      }
    }, {
      key: "multiplyMatrices",
      value: function multiplyMatrices(t, e) {
        var n = t.elements,
            i = e.elements,
            r = this.elements,
            s = n[0],
            a = n[4],
            o = n[8],
            l = n[12],
            c = n[1],
            h = n[5],
            u = n[9],
            d = n[13],
            p = n[2],
            f = n[6],
            m = n[10],
            g = n[14],
            v = n[3],
            y = n[7],
            x = n[11],
            _ = n[15],
            b = i[0],
            w = i[4],
            M = i[8],
            S = i[12],
            T = i[1],
            E = i[5],
            A = i[9],
            L = i[13],
            R = i[2],
            C = i[6],
            P = i[10],
            D = i[14],
            I = i[3],
            N = i[7],
            B = i[11],
            O = i[15];
        return r[0] = s * b + a * T + o * R + l * I, r[4] = s * w + a * E + o * C + l * N, r[8] = s * M + a * A + o * P + l * B, r[12] = s * S + a * L + o * D + l * O, r[1] = c * b + h * T + u * R + d * I, r[5] = c * w + h * E + u * C + d * N, r[9] = c * M + h * A + u * P + d * B, r[13] = c * S + h * L + u * D + d * O, r[2] = p * b + f * T + m * R + g * I, r[6] = p * w + f * E + m * C + g * N, r[10] = p * M + f * A + m * P + g * B, r[14] = p * S + f * L + m * D + g * O, r[3] = v * b + y * T + x * R + _ * I, r[7] = v * w + y * E + x * C + _ * N, r[11] = v * M + y * A + x * P + _ * B, r[15] = v * S + y * L + x * D + _ * O, this;
      }
    }, {
      key: "multiplyScalar",
      value: function multiplyScalar(t) {
        var e = this.elements;
        return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
      }
    }, {
      key: "determinant",
      value: function determinant() {
        var t = this.elements,
            e = t[0],
            n = t[4],
            i = t[8],
            r = t[12],
            s = t[1],
            a = t[5],
            o = t[9],
            l = t[13],
            c = t[2],
            h = t[6],
            u = t[10],
            d = t[14];
        return t[3] * (+r * o * h - i * l * h - r * a * u + n * l * u + i * a * d - n * o * d) + t[7] * (+e * o * d - e * l * u + r * s * u - i * s * d + i * l * c - r * o * c) + t[11] * (+e * l * h - e * a * d - r * s * h + n * s * d + r * a * c - n * l * c) + t[15] * (-i * a * c - e * o * h + e * a * u + i * s * h - n * s * u + n * o * c);
      }
    }, {
      key: "transpose",
      value: function transpose() {
        var t = this.elements;
        var e;
        return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this;
      }
    }, {
      key: "setPosition",
      value: function setPosition(t, e, n) {
        var i = this.elements;
        return t.isVector3 ? (i[12] = t.x, i[13] = t.y, i[14] = t.z) : (i[12] = t, i[13] = e, i[14] = n), this;
      }
    }, {
      key: "invert",
      value: function invert() {
        var t = this.elements,
            e = t[0],
            n = t[1],
            i = t[2],
            r = t[3],
            s = t[4],
            a = t[5],
            o = t[6],
            l = t[7],
            c = t[8],
            h = t[9],
            u = t[10],
            d = t[11],
            p = t[12],
            f = t[13],
            m = t[14],
            g = t[15],
            v = h * m * l - f * u * l + f * o * d - a * m * d - h * o * g + a * u * g,
            y = p * u * l - c * m * l - p * o * d + s * m * d + c * o * g - s * u * g,
            x = c * f * l - p * h * l + p * a * d - s * f * d - c * a * g + s * h * g,
            _ = p * h * o - c * f * o - p * a * u + s * f * u + c * a * m - s * h * m,
            b = e * v + n * y + i * x + r * _;

        if (0 === b) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        var w = 1 / b;
        return t[0] = v * w, t[1] = (f * u * r - h * m * r - f * i * d + n * m * d + h * i * g - n * u * g) * w, t[2] = (a * m * r - f * o * r + f * i * l - n * m * l - a * i * g + n * o * g) * w, t[3] = (h * o * r - a * u * r - h * i * l + n * u * l + a * i * d - n * o * d) * w, t[4] = y * w, t[5] = (c * m * r - p * u * r + p * i * d - e * m * d - c * i * g + e * u * g) * w, t[6] = (p * o * r - s * m * r - p * i * l + e * m * l + s * i * g - e * o * g) * w, t[7] = (s * u * r - c * o * r + c * i * l - e * u * l - s * i * d + e * o * d) * w, t[8] = x * w, t[9] = (p * h * r - c * f * r - p * n * d + e * f * d + c * n * g - e * h * g) * w, t[10] = (s * f * r - p * a * r + p * n * l - e * f * l - s * n * g + e * a * g) * w, t[11] = (c * a * r - s * h * r - c * n * l + e * h * l + s * n * d - e * a * d) * w, t[12] = _ * w, t[13] = (c * f * i - p * h * i + p * n * u - e * f * u - c * n * m + e * h * m) * w, t[14] = (p * a * i - s * f * i - p * n * o + e * f * o + s * n * m - e * a * m) * w, t[15] = (s * h * i - c * a * i + c * n * o - e * h * o - s * n * u + e * a * u) * w, this;
      }
    }, {
      key: "scale",
      value: function scale(t) {
        var e = this.elements,
            n = t.x,
            i = t.y,
            r = t.z;
        return e[0] *= n, e[4] *= i, e[8] *= r, e[1] *= n, e[5] *= i, e[9] *= r, e[2] *= n, e[6] *= i, e[10] *= r, e[3] *= n, e[7] *= i, e[11] *= r, this;
      }
    }, {
      key: "getMaxScaleOnAxis",
      value: function getMaxScaleOnAxis() {
        var t = this.elements,
            e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
            n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
            i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
        return Math.sqrt(Math.max(e, n, i));
      }
    }, {
      key: "makeTranslation",
      value: function makeTranslation(t, e, n) {
        return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this;
      }
    }, {
      key: "makeRotationX",
      value: function makeRotationX(t) {
        var e = Math.cos(t),
            n = Math.sin(t);
        return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this;
      }
    }, {
      key: "makeRotationY",
      value: function makeRotationY(t) {
        var e = Math.cos(t),
            n = Math.sin(t);
        return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this;
      }
    }, {
      key: "makeRotationZ",
      value: function makeRotationZ(t) {
        var e = Math.cos(t),
            n = Math.sin(t);
        return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
      }
    }, {
      key: "makeRotationAxis",
      value: function makeRotationAxis(t, e) {
        var n = Math.cos(e),
            i = Math.sin(e),
            r = 1 - n,
            s = t.x,
            a = t.y,
            o = t.z,
            l = r * s,
            c = r * a;
        return this.set(l * s + n, l * a - i * o, l * o + i * a, 0, l * a + i * o, c * a + n, c * o - i * s, 0, l * o - i * a, c * o + i * s, r * o * o + n, 0, 0, 0, 0, 1), this;
      }
    }, {
      key: "makeScale",
      value: function makeScale(t, e, n) {
        return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
      }
    }, {
      key: "makeShear",
      value: function makeShear(t, e, n) {
        return this.set(1, e, n, 0, t, 1, n, 0, t, e, 1, 0, 0, 0, 0, 1), this;
      }
    }, {
      key: "compose",
      value: function compose(t, e, n) {
        var i = this.elements,
            r = e._x,
            s = e._y,
            a = e._z,
            o = e._w,
            l = r + r,
            c = s + s,
            h = a + a,
            u = r * l,
            d = r * c,
            p = r * h,
            f = s * c,
            m = s * h,
            g = a * h,
            v = o * l,
            y = o * c,
            x = o * h,
            _ = n.x,
            b = n.y,
            w = n.z;
        return i[0] = (1 - (f + g)) * _, i[1] = (d + x) * _, i[2] = (p - y) * _, i[3] = 0, i[4] = (d - x) * b, i[5] = (1 - (u + g)) * b, i[6] = (m + v) * b, i[7] = 0, i[8] = (p + y) * w, i[9] = (m - v) * w, i[10] = (1 - (u + f)) * w, i[11] = 0, i[12] = t.x, i[13] = t.y, i[14] = t.z, i[15] = 1, this;
      }
    }, {
      key: "decompose",
      value: function decompose(t, e, n) {
        var i = this.elements;
        var r = Qt.set(i[0], i[1], i[2]).length();
        var s = Qt.set(i[4], i[5], i[6]).length(),
            a = Qt.set(i[8], i[9], i[10]).length();
        this.determinant() < 0 && (r = -r), t.x = i[12], t.y = i[13], t.z = i[14], Kt.copy(this);
        var o = 1 / r,
            l = 1 / s,
            c = 1 / a;
        return Kt.elements[0] *= o, Kt.elements[1] *= o, Kt.elements[2] *= o, Kt.elements[4] *= l, Kt.elements[5] *= l, Kt.elements[6] *= l, Kt.elements[8] *= c, Kt.elements[9] *= c, Kt.elements[10] *= c, e.setFromRotationMatrix(Kt), n.x = r, n.y = s, n.z = a, this;
      }
    }, {
      key: "makePerspective",
      value: function makePerspective(t, e, n, i, r, s) {
        void 0 === s && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
        var a = this.elements,
            o = 2 * r / (e - t),
            l = 2 * r / (n - i),
            c = (e + t) / (e - t),
            h = (n + i) / (n - i),
            u = -(s + r) / (s - r),
            d = -2 * s * r / (s - r);
        return a[0] = o, a[4] = 0, a[8] = c, a[12] = 0, a[1] = 0, a[5] = l, a[9] = h, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = u, a[14] = d, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this;
      }
    }, {
      key: "makeOrthographic",
      value: function makeOrthographic(t, e, n, i, r, s) {
        var a = this.elements,
            o = 1 / (e - t),
            l = 1 / (n - i),
            c = 1 / (s - r),
            h = (e + t) * o,
            u = (n + i) * l,
            d = (s + r) * c;
        return a[0] = 2 * o, a[4] = 0, a[8] = 0, a[12] = -h, a[1] = 0, a[5] = 2 * l, a[9] = 0, a[13] = -u, a[2] = 0, a[6] = 0, a[10] = -2 * c, a[14] = -d, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this;
      }
    }, {
      key: "equals",
      value: function equals(t) {
        var e = this.elements,
            n = t.elements;

        for (var _t23 = 0; _t23 < 16; _t23++) {
          if (e[_t23] !== n[_t23]) return !1;
        }

        return !0;
      }
    }, {
      key: "fromArray",
      value: function fromArray(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        for (var _n15 = 0; _n15 < 16; _n15++) {
          this.elements[_n15] = t[_n15 + e];
        }

        return this;
      }
    }, {
      key: "toArray",
      value: function toArray() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var n = this.elements;
        return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t;
      }
    }]);

    return Jt;
  }();

  Jt.prototype.isMatrix4 = !0;
  var Qt = new xt(),
      Kt = new Jt(),
      $t = new xt(0, 0, 0),
      te = new xt(1, 1, 1),
      ee = new xt(),
      ne = new xt(),
      ie = new xt(),
      re = new Jt(),
      se = new yt();

  var ae = /*#__PURE__*/function () {
    function ae() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ae.DefaultOrder;

      _classCallCheck(this, ae);

      this._x = t, this._y = e, this._z = n, this._order = i;
    }

    _createClass(ae, [{
      key: "x",
      get: function get() {
        return this._x;
      },
      set: function set(t) {
        this._x = t, this._onChangeCallback();
      }
    }, {
      key: "y",
      get: function get() {
        return this._y;
      },
      set: function set(t) {
        this._y = t, this._onChangeCallback();
      }
    }, {
      key: "z",
      get: function get() {
        return this._z;
      },
      set: function set(t) {
        this._z = t, this._onChangeCallback();
      }
    }, {
      key: "order",
      get: function get() {
        return this._order;
      },
      set: function set(t) {
        this._order = t, this._onChangeCallback();
      }
    }, {
      key: "set",
      value: function set(t, e, n, i) {
        return this._x = t, this._y = e, this._z = n, this._order = i || this._order, this._onChangeCallback(), this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor(this._x, this._y, this._z, this._order);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
      }
    }, {
      key: "setFromRotationMatrix",
      value: function setFromRotationMatrix(t, e, n) {
        var i = ot.clamp,
            r = t.elements,
            s = r[0],
            a = r[4],
            o = r[8],
            l = r[1],
            c = r[5],
            h = r[9],
            u = r[2],
            d = r[6],
            p = r[10];

        switch (e = e || this._order) {
          case "XYZ":
            this._y = Math.asin(i(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-h, p), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(d, c), this._z = 0);
            break;

          case "YXZ":
            this._x = Math.asin(-i(h, -1, 1)), Math.abs(h) < .9999999 ? (this._y = Math.atan2(o, p), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, s), this._z = 0);
            break;

          case "ZXY":
            this._x = Math.asin(i(d, -1, 1)), Math.abs(d) < .9999999 ? (this._y = Math.atan2(-u, p), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, s));
            break;

          case "ZYX":
            this._y = Math.asin(-i(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(d, p), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-a, c));
            break;

          case "YZX":
            this._z = Math.asin(i(l, -1, 1)), Math.abs(l) < .9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-u, s)) : (this._x = 0, this._y = Math.atan2(o, p));
            break;

          case "XZY":
            this._z = Math.asin(-i(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-h, p), this._y = 0);
            break;

          default:
            console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
        }

        return this._order = e, !1 !== n && this._onChangeCallback(), this;
      }
    }, {
      key: "setFromQuaternion",
      value: function setFromQuaternion(t, e, n) {
        return re.makeRotationFromQuaternion(t), this.setFromRotationMatrix(re, e, n);
      }
    }, {
      key: "setFromVector3",
      value: function setFromVector3(t, e) {
        return this.set(t.x, t.y, t.z, e || this._order);
      }
    }, {
      key: "reorder",
      value: function reorder(t) {
        return se.setFromEuler(this), this.setFromQuaternion(se, t);
      }
    }, {
      key: "equals",
      value: function equals(t) {
        return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
      }
    }, {
      key: "fromArray",
      value: function fromArray(t) {
        return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this._onChangeCallback(), this;
      }
    }, {
      key: "toArray",
      value: function toArray() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t;
      }
    }, {
      key: "toVector3",
      value: function toVector3(t) {
        return t ? t.set(this._x, this._y, this._z) : new xt(this._x, this._y, this._z);
      }
    }, {
      key: "_onChange",
      value: function _onChange(t) {
        return this._onChangeCallback = t, this;
      }
    }, {
      key: "_onChangeCallback",
      value: function _onChangeCallback() {}
    }]);

    return ae;
  }();

  ae.prototype.isEuler = !0, ae.DefaultOrder = "XYZ", ae.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];

  var oe = /*#__PURE__*/function () {
    function oe() {
      _classCallCheck(this, oe);

      this.mask = 1;
    }

    _createClass(oe, [{
      key: "set",
      value: function set(t) {
        this.mask = 1 << t | 0;
      }
    }, {
      key: "enable",
      value: function enable(t) {
        this.mask |= 1 << t | 0;
      }
    }, {
      key: "enableAll",
      value: function enableAll() {
        this.mask = -1;
      }
    }, {
      key: "toggle",
      value: function toggle(t) {
        this.mask ^= 1 << t | 0;
      }
    }, {
      key: "disable",
      value: function disable(t) {
        this.mask &= ~(1 << t | 0);
      }
    }, {
      key: "disableAll",
      value: function disableAll() {
        this.mask = 0;
      }
    }, {
      key: "test",
      value: function test(t) {
        return 0 != (this.mask & t.mask);
      }
    }]);

    return oe;
  }();

  var le = 0;
  var ce = new xt(),
      he = new yt(),
      ue = new Jt(),
      de = new xt(),
      pe = new xt(),
      fe = new xt(),
      me = new yt(),
      ge = new xt(1, 0, 0),
      ve = new xt(0, 1, 0),
      ye = new xt(0, 0, 1),
      xe = {
    type: "added"
  },
      _e = {
    type: "removed"
  };

  function be() {
    Object.defineProperty(this, "id", {
      value: le++
    }), this.uuid = ot.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = be.DefaultUp.clone();
    var t = new xt(),
        e = new ae(),
        n = new yt(),
        i = new xt(1, 1, 1);
    e._onChange(function () {
      n.setFromEuler(e, !1);
    }), n._onChange(function () {
      e.setFromQuaternion(n, void 0, !1);
    }), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      modelViewMatrix: {
        value: new Jt()
      },
      normalMatrix: {
        value: new ct()
      }
    }), this.matrix = new Jt(), this.matrixWorld = new Jt(), this.matrixAutoUpdate = be.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new oe(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }

  be.DefaultUp = new xt(0, 1, 0), be.DefaultMatrixAutoUpdate = !0, be.prototype = Object.assign(Object.create(rt.prototype), {
    constructor: be,
    isObject3D: !0,
    onBeforeRender: function onBeforeRender() {},
    onAfterRender: function onAfterRender() {},
    applyMatrix4: function applyMatrix4(t) {
      this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
    },
    applyQuaternion: function applyQuaternion(t) {
      return this.quaternion.premultiply(t), this;
    },
    setRotationFromAxisAngle: function setRotationFromAxisAngle(t, e) {
      this.quaternion.setFromAxisAngle(t, e);
    },
    setRotationFromEuler: function setRotationFromEuler(t) {
      this.quaternion.setFromEuler(t, !0);
    },
    setRotationFromMatrix: function setRotationFromMatrix(t) {
      this.quaternion.setFromRotationMatrix(t);
    },
    setRotationFromQuaternion: function setRotationFromQuaternion(t) {
      this.quaternion.copy(t);
    },
    rotateOnAxis: function rotateOnAxis(t, e) {
      return he.setFromAxisAngle(t, e), this.quaternion.multiply(he), this;
    },
    rotateOnWorldAxis: function rotateOnWorldAxis(t, e) {
      return he.setFromAxisAngle(t, e), this.quaternion.premultiply(he), this;
    },
    rotateX: function rotateX(t) {
      return this.rotateOnAxis(ge, t);
    },
    rotateY: function rotateY(t) {
      return this.rotateOnAxis(ve, t);
    },
    rotateZ: function rotateZ(t) {
      return this.rotateOnAxis(ye, t);
    },
    translateOnAxis: function translateOnAxis(t, e) {
      return ce.copy(t).applyQuaternion(this.quaternion), this.position.add(ce.multiplyScalar(e)), this;
    },
    translateX: function translateX(t) {
      return this.translateOnAxis(ge, t);
    },
    translateY: function translateY(t) {
      return this.translateOnAxis(ve, t);
    },
    translateZ: function translateZ(t) {
      return this.translateOnAxis(ye, t);
    },
    localToWorld: function localToWorld(t) {
      return t.applyMatrix4(this.matrixWorld);
    },
    worldToLocal: function worldToLocal(t) {
      return t.applyMatrix4(ue.copy(this.matrixWorld).invert());
    },
    lookAt: function lookAt(t, e, n) {
      t.isVector3 ? de.copy(t) : de.set(t, e, n);
      var i = this.parent;
      this.updateWorldMatrix(!0, !1), pe.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? ue.lookAt(pe, de, this.up) : ue.lookAt(de, pe, this.up), this.quaternion.setFromRotationMatrix(ue), i && (ue.extractRotation(i.matrixWorld), he.setFromRotationMatrix(ue), this.quaternion.premultiply(he.invert()));
    },
    add: function add(t) {
      if (arguments.length > 1) {
        for (var _t24 = 0; _t24 < arguments.length; _t24++) {
          this.add(arguments[_t24]);
        }

        return this;
      }

      return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t), t.parent = this, this.children.push(t), t.dispatchEvent(xe)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
    },
    remove: function remove(t) {
      if (arguments.length > 1) {
        for (var _t25 = 0; _t25 < arguments.length; _t25++) {
          this.remove(arguments[_t25]);
        }

        return this;
      }

      var e = this.children.indexOf(t);
      return -1 !== e && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(_e)), this;
    },
    clear: function clear() {
      for (var _t26 = 0; _t26 < this.children.length; _t26++) {
        var _e8 = this.children[_t26];
        _e8.parent = null, _e8.dispatchEvent(_e);
      }

      return this.children.length = 0, this;
    },
    attach: function attach(t) {
      return this.updateWorldMatrix(!0, !1), ue.copy(this.matrixWorld).invert(), null !== t.parent && (t.parent.updateWorldMatrix(!0, !1), ue.multiply(t.parent.matrixWorld)), t.applyMatrix4(ue), this.add(t), t.updateWorldMatrix(!1, !0), this;
    },
    getObjectById: function getObjectById(t) {
      return this.getObjectByProperty("id", t);
    },
    getObjectByName: function getObjectByName(t) {
      return this.getObjectByProperty("name", t);
    },
    getObjectByProperty: function getObjectByProperty(t, e) {
      if (this[t] === e) return this;

      for (var _n16 = 0, _i11 = this.children.length; _n16 < _i11; _n16++) {
        var _i12 = this.children[_n16].getObjectByProperty(t, e);

        if (void 0 !== _i12) return _i12;
      }
    },
    getWorldPosition: function getWorldPosition(t) {
      return void 0 === t && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"), t = new xt()), this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld);
    },
    getWorldQuaternion: function getWorldQuaternion(t) {
      return void 0 === t && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"), t = new yt()), this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(pe, t, fe), t;
    },
    getWorldScale: function getWorldScale(t) {
      return void 0 === t && (console.warn("THREE.Object3D: .getWorldScale() target is now required"), t = new xt()), this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(pe, me, t), t;
    },
    getWorldDirection: function getWorldDirection(t) {
      void 0 === t && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"), t = new xt()), this.updateWorldMatrix(!0, !1);
      var e = this.matrixWorld.elements;
      return t.set(e[8], e[9], e[10]).normalize();
    },
    raycast: function raycast() {},
    traverse: function traverse(t) {
      t(this);
      var e = this.children;

      for (var _n17 = 0, _i13 = e.length; _n17 < _i13; _n17++) {
        e[_n17].traverse(t);
      }
    },
    traverseVisible: function traverseVisible(t) {
      if (!1 === this.visible) return;
      t(this);
      var e = this.children;

      for (var _n18 = 0, _i14 = e.length; _n18 < _i14; _n18++) {
        e[_n18].traverseVisible(t);
      }
    },
    traverseAncestors: function traverseAncestors(t) {
      var e = this.parent;
      null !== e && (t(e), e.traverseAncestors(t));
    },
    updateMatrix: function updateMatrix() {
      this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
    },
    updateMatrixWorld: function updateMatrixWorld(t) {
      this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
      var e = this.children;

      for (var _n19 = 0, _i15 = e.length; _n19 < _i15; _n19++) {
        e[_n19].updateMatrixWorld(t);
      }
    },
    updateWorldMatrix: function updateWorldMatrix(t, e) {
      var n = this.parent;

      if (!0 === t && null !== n && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === e) {
        var _t27 = this.children;

        for (var _e9 = 0, _n20 = _t27.length; _e9 < _n20; _e9++) {
          _t27[_e9].updateWorldMatrix(!1, !0);
        }
      }
    },
    toJSON: function toJSON(t) {
      var e = void 0 === t || "string" == typeof t,
          n = {};
      e && (t = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {}
      }, n.metadata = {
        version: 4.5,
        type: "Object",
        generator: "Object3D.toJSON"
      });
      var i = {};

      function r(e, n) {
        return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)), n.uuid;
      }

      if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), !0 === this.castShadow && (i.castShadow = !0), !0 === this.receiveShadow && (i.receiveShadow = !0), !1 === this.visible && (i.visible = !1), !1 === this.frustumCulled && (i.frustumCulled = !1), 0 !== this.renderOrder && (i.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), null !== this.instanceColor && (i.instanceColor = this.instanceColor.toJSON())), this.isMesh || this.isLine || this.isPoints) {
        i.geometry = r(t.geometries, this.geometry);
        var _e10 = this.geometry.parameters;

        if (void 0 !== _e10 && void 0 !== _e10.shapes) {
          var _n21 = _e10.shapes;
          if (Array.isArray(_n21)) for (var _e11 = 0, _i16 = _n21.length; _e11 < _i16; _e11++) {
            var _i17 = _n21[_e11];
            r(t.shapes, _i17);
          } else r(t.shapes, _n21);
        }
      }

      if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (r(t.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), void 0 !== this.material) if (Array.isArray(this.material)) {
        var _e12 = [];

        for (var _n22 = 0, _i18 = this.material.length; _n22 < _i18; _n22++) {
          _e12.push(r(t.materials, this.material[_n22]));
        }

        i.material = _e12;
      } else i.material = r(t.materials, this.material);

      if (this.children.length > 0) {
        i.children = [];

        for (var _e13 = 0; _e13 < this.children.length; _e13++) {
          i.children.push(this.children[_e13].toJSON(t).object);
        }
      }

      if (this.animations.length > 0) {
        i.animations = [];

        for (var _e14 = 0; _e14 < this.animations.length; _e14++) {
          var _n23 = this.animations[_e14];
          i.animations.push(r(t.animations, _n23));
        }
      }

      if (e) {
        var _e15 = s(t.geometries),
            _i19 = s(t.materials),
            _r11 = s(t.textures),
            _a4 = s(t.images),
            _o6 = s(t.shapes),
            _l7 = s(t.skeletons),
            _c5 = s(t.animations);

        _e15.length > 0 && (n.geometries = _e15), _i19.length > 0 && (n.materials = _i19), _r11.length > 0 && (n.textures = _r11), _a4.length > 0 && (n.images = _a4), _o6.length > 0 && (n.shapes = _o6), _l7.length > 0 && (n.skeletons = _l7), _c5.length > 0 && (n.animations = _c5);
      }

      return n.object = i, n;

      function s(t) {
        var e = [];

        for (var _n24 in t) {
          var _i20 = t[_n24];
          delete _i20.metadata, e.push(_i20);
        }

        return e;
      }
    },
    clone: function clone(t) {
      return new this.constructor().copy(this, t);
    },
    copy: function copy(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
      if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e) for (var _e16 = 0; _e16 < t.children.length; _e16++) {
        var _n25 = t.children[_e16];
        this.add(_n25.clone());
      }
      return this;
    }
  });
  var we = new xt(),
      Me = new xt(),
      Se = new ct();

  var Te = /*#__PURE__*/function () {
    function Te() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new xt(1, 0, 0);
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      _classCallCheck(this, Te);

      this.normal = t, this.constant = e;
    }

    _createClass(Te, [{
      key: "set",
      value: function set(t, e) {
        return this.normal.copy(t), this.constant = e, this;
      }
    }, {
      key: "setComponents",
      value: function setComponents(t, e, n, i) {
        return this.normal.set(t, e, n), this.constant = i, this;
      }
    }, {
      key: "setFromNormalAndCoplanarPoint",
      value: function setFromNormalAndCoplanarPoint(t, e) {
        return this.normal.copy(t), this.constant = -e.dot(this.normal), this;
      }
    }, {
      key: "setFromCoplanarPoints",
      value: function setFromCoplanarPoints(t, e, n) {
        var i = we.subVectors(n, e).cross(Me.subVectors(t, e)).normalize();
        return this.setFromNormalAndCoplanarPoint(i, t), this;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this.normal.copy(t.normal), this.constant = t.constant, this;
      }
    }, {
      key: "normalize",
      value: function normalize() {
        var t = 1 / this.normal.length();
        return this.normal.multiplyScalar(t), this.constant *= t, this;
      }
    }, {
      key: "negate",
      value: function negate() {
        return this.constant *= -1, this.normal.negate(), this;
      }
    }, {
      key: "distanceToPoint",
      value: function distanceToPoint(t) {
        return this.normal.dot(t) + this.constant;
      }
    }, {
      key: "distanceToSphere",
      value: function distanceToSphere(t) {
        return this.distanceToPoint(t.center) - t.radius;
      }
    }, {
      key: "projectPoint",
      value: function projectPoint(t, e) {
        return void 0 === e && (console.warn("THREE.Plane: .projectPoint() target is now required"), e = new xt()), e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t);
      }
    }, {
      key: "intersectLine",
      value: function intersectLine(t, e) {
        void 0 === e && (console.warn("THREE.Plane: .intersectLine() target is now required"), e = new xt());
        var n = t.delta(we),
            i = this.normal.dot(n);
        if (0 === i) return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : null;
        var r = -(t.start.dot(this.normal) + this.constant) / i;
        return r < 0 || r > 1 ? null : e.copy(n).multiplyScalar(r).add(t.start);
      }
    }, {
      key: "intersectsLine",
      value: function intersectsLine(t) {
        var e = this.distanceToPoint(t.start),
            n = this.distanceToPoint(t.end);
        return e < 0 && n > 0 || n < 0 && e > 0;
      }
    }, {
      key: "intersectsBox",
      value: function intersectsBox(t) {
        return t.intersectsPlane(this);
      }
    }, {
      key: "intersectsSphere",
      value: function intersectsSphere(t) {
        return t.intersectsPlane(this);
      }
    }, {
      key: "coplanarPoint",
      value: function coplanarPoint(t) {
        return void 0 === t && (console.warn("THREE.Plane: .coplanarPoint() target is now required"), t = new xt()), t.copy(this.normal).multiplyScalar(-this.constant);
      }
    }, {
      key: "applyMatrix4",
      value: function applyMatrix4(t, e) {
        var n = e || Se.getNormalMatrix(t),
            i = this.coplanarPoint(we).applyMatrix4(t),
            r = this.normal.applyMatrix3(n).normalize();
        return this.constant = -i.dot(r), this;
      }
    }, {
      key: "translate",
      value: function translate(t) {
        return this.constant -= t.dot(this.normal), this;
      }
    }, {
      key: "equals",
      value: function equals(t) {
        return t.normal.equals(this.normal) && t.constant === this.constant;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }]);

    return Te;
  }();

  Te.prototype.isPlane = !0;
  var Ee = new xt(),
      Ae = new xt(),
      Le = new xt(),
      Re = new xt(),
      Ce = new xt(),
      Pe = new xt(),
      De = new xt(),
      Ie = new xt(),
      Ne = new xt(),
      Be = new xt();

  var Oe = /*#__PURE__*/function () {
    function Oe() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new xt();
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new xt();
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new xt();

      _classCallCheck(this, Oe);

      this.a = t, this.b = e, this.c = n;
    }

    _createClass(Oe, [{
      key: "set",
      value: function set(t, e, n) {
        return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
      }
    }, {
      key: "setFromPointsAndIndices",
      value: function setFromPointsAndIndices(t, e, n, i) {
        return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
      }
    }, {
      key: "getArea",
      value: function getArea() {
        return Ee.subVectors(this.c, this.b), Ae.subVectors(this.a, this.b), .5 * Ee.cross(Ae).length();
      }
    }, {
      key: "getMidpoint",
      value: function getMidpoint(t) {
        return void 0 === t && (console.warn("THREE.Triangle: .getMidpoint() target is now required"), t = new xt()), t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
      }
    }, {
      key: "getNormal",
      value: function getNormal(t) {
        return Oe.getNormal(this.a, this.b, this.c, t);
      }
    }, {
      key: "getPlane",
      value: function getPlane(t) {
        return void 0 === t && (console.warn("THREE.Triangle: .getPlane() target is now required"), t = new Te()), t.setFromCoplanarPoints(this.a, this.b, this.c);
      }
    }, {
      key: "getBarycoord",
      value: function getBarycoord(t, e) {
        return Oe.getBarycoord(t, this.a, this.b, this.c, e);
      }
    }, {
      key: "getUV",
      value: function getUV(t, e, n, i, r) {
        return Oe.getUV(t, this.a, this.b, this.c, e, n, i, r);
      }
    }, {
      key: "containsPoint",
      value: function containsPoint(t) {
        return Oe.containsPoint(t, this.a, this.b, this.c);
      }
    }, {
      key: "isFrontFacing",
      value: function isFrontFacing(t) {
        return Oe.isFrontFacing(this.a, this.b, this.c, t);
      }
    }, {
      key: "intersectsBox",
      value: function intersectsBox(t) {
        return t.intersectsTriangle(this);
      }
    }, {
      key: "closestPointToPoint",
      value: function closestPointToPoint(t, e) {
        void 0 === e && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"), e = new xt());
        var n = this.a,
            i = this.b,
            r = this.c;
        var s, a;
        Ce.subVectors(i, n), Pe.subVectors(r, n), Ie.subVectors(t, n);
        var o = Ce.dot(Ie),
            l = Pe.dot(Ie);
        if (o <= 0 && l <= 0) return e.copy(n);
        Ne.subVectors(t, i);
        var c = Ce.dot(Ne),
            h = Pe.dot(Ne);
        if (c >= 0 && h <= c) return e.copy(i);
        var u = o * h - c * l;
        if (u <= 0 && o >= 0 && c <= 0) return s = o / (o - c), e.copy(n).addScaledVector(Ce, s);
        Be.subVectors(t, r);
        var d = Ce.dot(Be),
            p = Pe.dot(Be);
        if (p >= 0 && d <= p) return e.copy(r);
        var f = d * l - o * p;
        if (f <= 0 && l >= 0 && p <= 0) return a = l / (l - p), e.copy(n).addScaledVector(Pe, a);
        var m = c * p - d * h;
        if (m <= 0 && h - c >= 0 && d - p >= 0) return De.subVectors(r, i), a = (h - c) / (h - c + (d - p)), e.copy(i).addScaledVector(De, a);
        var g = 1 / (m + f + u);
        return s = f * g, a = u * g, e.copy(n).addScaledVector(Ce, s).addScaledVector(Pe, a);
      }
    }, {
      key: "equals",
      value: function equals(t) {
        return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
      }
    }], [{
      key: "getNormal",
      value: function getNormal(t, e, n, i) {
        void 0 === i && (console.warn("THREE.Triangle: .getNormal() target is now required"), i = new xt()), i.subVectors(n, e), Ee.subVectors(t, e), i.cross(Ee);
        var r = i.lengthSq();
        return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
      }
    }, {
      key: "getBarycoord",
      value: function getBarycoord(t, e, n, i, r) {
        Ee.subVectors(i, e), Ae.subVectors(n, e), Le.subVectors(t, e);
        var s = Ee.dot(Ee),
            a = Ee.dot(Ae),
            o = Ee.dot(Le),
            l = Ae.dot(Ae),
            c = Ae.dot(Le),
            h = s * l - a * a;
        if (void 0 === r && (console.warn("THREE.Triangle: .getBarycoord() target is now required"), r = new xt()), 0 === h) return r.set(-2, -1, -1);
        var u = 1 / h,
            d = (l * o - a * c) * u,
            p = (s * c - a * o) * u;
        return r.set(1 - d - p, p, d);
      }
    }, {
      key: "containsPoint",
      value: function containsPoint(t, e, n, i) {
        return this.getBarycoord(t, e, n, i, Re), Re.x >= 0 && Re.y >= 0 && Re.x + Re.y <= 1;
      }
    }, {
      key: "getUV",
      value: function getUV(t, e, n, i, r, s, a, o) {
        return this.getBarycoord(t, e, n, i, Re), o.set(0, 0), o.addScaledVector(r, Re.x), o.addScaledVector(s, Re.y), o.addScaledVector(a, Re.z), o;
      }
    }, {
      key: "isFrontFacing",
      value: function isFrontFacing(t, e, n, i) {
        return Ee.subVectors(n, e), Ae.subVectors(t, e), Ee.cross(Ae).dot(i) < 0;
      }
    }]);

    return Oe;
  }();

  var ze = 0;

  function Fe() {
    Object.defineProperty(this, "id", {
      value: ze++
    }), this.uuid = ot.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = n, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = tt, this.stencilZFail = tt, this.stencilZPass = tt, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0;
  }

  Fe.prototype = Object.assign(Object.create(rt.prototype), {
    constructor: Fe,
    isMaterial: !0,
    onBeforeCompile: function onBeforeCompile() {},
    customProgramCacheKey: function customProgramCacheKey() {
      return this.onBeforeCompile.toString();
    },
    setValues: function setValues(t) {
      if (void 0 !== t) for (var _e17 in t) {
        var _n26 = t[_e17];

        if (void 0 === _n26) {
          console.warn("THREE.Material: '" + _e17 + "' parameter is undefined.");
          continue;
        }

        if ("shading" === _e17) {
          console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === _n26;
          continue;
        }

        var _i21 = this[_e17];
        void 0 !== _i21 ? _i21 && _i21.isColor ? _i21.set(_n26) : _i21 && _i21.isVector3 && _n26 && _n26.isVector3 ? _i21.copy(_n26) : this[_e17] = _n26 : console.warn("THREE." + this.type + ": '" + _e17 + "' is not a property of this material.");
      }
    },
    toJSON: function toJSON(t) {
      var e = void 0 === t || "string" == typeof t;
      e && (t = {
        textures: {},
        images: {}
      });
      var n = {
        metadata: {
          version: 4.5,
          type: "Material",
          generator: "Material.toJSON"
        }
      };

      function i(t) {
        var e = [];

        for (var _n27 in t) {
          var _i22 = t[_n27];
          delete _i22.metadata, e.push(_i22);
        }

        return e;
      }

      if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), void 0 !== this.roughness && (n.roughness = this.roughness), void 0 !== this.metalness && (n.metalness = this.metalness), this.sheen && this.sheen.isColor && (n.sheen = this.sheen.getHex()), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), void 0 !== this.shininess && (n.shininess = this.shininess), void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, n.reflectivity = this.reflectivity, n.refractionRatio = this.refractionRatio, void 0 !== this.combine && (n.combine = this.combine), void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity)), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), void 0 !== this.size && (n.size = this.size), null !== this.shadowSide && (n.shadowSide = this.shadowSide), void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (n.blending = this.blending), 0 !== this.side && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), !0 === this.transparent && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation && 0 !== this.rotation && (n.rotation = this.rotation), !0 === this.polygonOffset && (n.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth), void 0 !== this.dashSize && (n.dashSize = this.dashSize), void 0 !== this.gapSize && (n.gapSize = this.gapSize), void 0 !== this.scale && (n.scale = this.scale), !0 === this.dithering && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), !0 === this.alphaToCoverage && (n.alphaToCoverage = this.alphaToCoverage), !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin), !0 === this.morphTargets && (n.morphTargets = !0), !0 === this.morphNormals && (n.morphNormals = !0), !0 === this.skinning && (n.skinning = !0), !0 === this.flatShading && (n.flatShading = this.flatShading), !1 === this.visible && (n.visible = !1), !1 === this.toneMapped && (n.toneMapped = !1), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), e) {
        var _e18 = i(t.textures),
            _r12 = i(t.images);

        _e18.length > 0 && (n.textures = _e18), _r12.length > 0 && (n.images = _r12);
      }

      return n;
    },
    clone: function clone() {
      return new this.constructor().copy(this);
    },
    copy: function copy(t) {
      this.name = t.name, this.fog = t.fog, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
      var e = t.clippingPlanes;
      var n = null;

      if (null !== e) {
        var _t28 = e.length;
        n = new Array(_t28);

        for (var _i23 = 0; _i23 !== _t28; ++_i23) {
          n[_i23] = e[_i23].clone();
        }
      }

      return this.clippingPlanes = n, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this;
    },
    dispose: function dispose() {
      this.dispatchEvent({
        type: "dispose"
      });
    }
  }), Object.defineProperty(Fe.prototype, "needsUpdate", {
    set: function set(t) {
      !0 === t && this.version++;
    }
  });
  var He = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  },
      Ue = {
    h: 0,
    s: 0,
    l: 0
  },
      Ge = {
    h: 0,
    s: 0,
    l: 0
  };

  function ke(t, e, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t;
  }

  function Ve(t) {
    return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4);
  }

  function We(t) {
    return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055;
  }

  var je = /*#__PURE__*/function () {
    function je(t, e, n) {
      _classCallCheck(this, je);

      return void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n);
    }

    _createClass(je, [{
      key: "set",
      value: function set(t) {
        return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this;
      }
    }, {
      key: "setScalar",
      value: function setScalar(t) {
        return this.r = t, this.g = t, this.b = t, this;
      }
    }, {
      key: "setHex",
      value: function setHex(t) {
        return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, this;
      }
    }, {
      key: "setRGB",
      value: function setRGB(t, e, n) {
        return this.r = t, this.g = e, this.b = n, this;
      }
    }, {
      key: "setHSL",
      value: function setHSL(t, e, n) {
        if (t = ot.euclideanModulo(t, 1), e = ot.clamp(e, 0, 1), n = ot.clamp(n, 0, 1), 0 === e) this.r = this.g = this.b = n;else {
          var _i24 = n <= .5 ? n * (1 + e) : n + e - n * e,
              _r13 = 2 * n - _i24;

          this.r = ke(_r13, _i24, t + 1 / 3), this.g = ke(_r13, _i24, t), this.b = ke(_r13, _i24, t - 1 / 3);
        }
        return this;
      }
    }, {
      key: "setStyle",
      value: function setStyle(t) {
        function e(e) {
          void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.");
        }

        var n;

        if (n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)) {
          var _t29;

          var _i25 = n[1],
              _r14 = n[2];

          switch (_i25) {
            case "rgb":
            case "rgba":
              if (_t29 = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(_r14)) return this.r = Math.min(255, parseInt(_t29[1], 10)) / 255, this.g = Math.min(255, parseInt(_t29[2], 10)) / 255, this.b = Math.min(255, parseInt(_t29[3], 10)) / 255, e(_t29[4]), this;
              if (_t29 = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(_r14)) return this.r = Math.min(100, parseInt(_t29[1], 10)) / 100, this.g = Math.min(100, parseInt(_t29[2], 10)) / 100, this.b = Math.min(100, parseInt(_t29[3], 10)) / 100, e(_t29[4]), this;
              break;

            case "hsl":
            case "hsla":
              if (_t29 = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(_r14)) {
                var _n28 = parseFloat(_t29[1]) / 360,
                    _i26 = parseInt(_t29[2], 10) / 100,
                    _r15 = parseInt(_t29[3], 10) / 100;

                return e(_t29[4]), this.setHSL(_n28, _i26, _r15);
              }

          }
        } else if (n = /^\#([A-Fa-f\d]+)$/.exec(t)) {
          var _t30 = n[1],
              _e19 = _t30.length;
          if (3 === _e19) return this.r = parseInt(_t30.charAt(0) + _t30.charAt(0), 16) / 255, this.g = parseInt(_t30.charAt(1) + _t30.charAt(1), 16) / 255, this.b = parseInt(_t30.charAt(2) + _t30.charAt(2), 16) / 255, this;
          if (6 === _e19) return this.r = parseInt(_t30.charAt(0) + _t30.charAt(1), 16) / 255, this.g = parseInt(_t30.charAt(2) + _t30.charAt(3), 16) / 255, this.b = parseInt(_t30.charAt(4) + _t30.charAt(5), 16) / 255, this;
        }

        return t && t.length > 0 ? this.setColorName(t) : this;
      }
    }, {
      key: "setColorName",
      value: function setColorName(t) {
        var e = He[t];
        return void 0 !== e ? this.setHex(e) : console.warn("THREE.Color: Unknown color " + t), this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor(this.r, this.g, this.b);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this.r = t.r, this.g = t.g, this.b = t.b, this;
      }
    }, {
      key: "copyGammaToLinear",
      value: function copyGammaToLinear(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
        return this.r = Math.pow(t.r, e), this.g = Math.pow(t.g, e), this.b = Math.pow(t.b, e), this;
      }
    }, {
      key: "copyLinearToGamma",
      value: function copyLinearToGamma(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
        var n = e > 0 ? 1 / e : 1;
        return this.r = Math.pow(t.r, n), this.g = Math.pow(t.g, n), this.b = Math.pow(t.b, n), this;
      }
    }, {
      key: "convertGammaToLinear",
      value: function convertGammaToLinear(t) {
        return this.copyGammaToLinear(this, t), this;
      }
    }, {
      key: "convertLinearToGamma",
      value: function convertLinearToGamma(t) {
        return this.copyLinearToGamma(this, t), this;
      }
    }, {
      key: "copySRGBToLinear",
      value: function copySRGBToLinear(t) {
        return this.r = Ve(t.r), this.g = Ve(t.g), this.b = Ve(t.b), this;
      }
    }, {
      key: "copyLinearToSRGB",
      value: function copyLinearToSRGB(t) {
        return this.r = We(t.r), this.g = We(t.g), this.b = We(t.b), this;
      }
    }, {
      key: "convertSRGBToLinear",
      value: function convertSRGBToLinear() {
        return this.copySRGBToLinear(this), this;
      }
    }, {
      key: "convertLinearToSRGB",
      value: function convertLinearToSRGB() {
        return this.copyLinearToSRGB(this), this;
      }
    }, {
      key: "getHex",
      value: function getHex() {
        return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0;
      }
    }, {
      key: "getHexString",
      value: function getHexString() {
        return ("000000" + this.getHex().toString(16)).slice(-6);
      }
    }, {
      key: "getHSL",
      value: function getHSL(t) {
        void 0 === t && (console.warn("THREE.Color: .getHSL() target is now required"), t = {
          h: 0,
          s: 0,
          l: 0
        });
        var e = this.r,
            n = this.g,
            i = this.b,
            r = Math.max(e, n, i),
            s = Math.min(e, n, i);
        var a, o;
        var l = (s + r) / 2;
        if (s === r) a = 0, o = 0;else {
          var _t31 = r - s;

          switch (o = l <= .5 ? _t31 / (r + s) : _t31 / (2 - r - s), r) {
            case e:
              a = (n - i) / _t31 + (n < i ? 6 : 0);
              break;

            case n:
              a = (i - e) / _t31 + 2;
              break;

            case i:
              a = (e - n) / _t31 + 4;
          }

          a /= 6;
        }
        return t.h = a, t.s = o, t.l = l, t;
      }
    }, {
      key: "getStyle",
      value: function getStyle() {
        return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")";
      }
    }, {
      key: "offsetHSL",
      value: function offsetHSL(t, e, n) {
        return this.getHSL(Ue), Ue.h += t, Ue.s += e, Ue.l += n, this.setHSL(Ue.h, Ue.s, Ue.l), this;
      }
    }, {
      key: "add",
      value: function add(t) {
        return this.r += t.r, this.g += t.g, this.b += t.b, this;
      }
    }, {
      key: "addColors",
      value: function addColors(t, e) {
        return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this;
      }
    }, {
      key: "addScalar",
      value: function addScalar(t) {
        return this.r += t, this.g += t, this.b += t, this;
      }
    }, {
      key: "sub",
      value: function sub(t) {
        return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this;
      }
    }, {
      key: "multiply",
      value: function multiply(t) {
        return this.r *= t.r, this.g *= t.g, this.b *= t.b, this;
      }
    }, {
      key: "multiplyScalar",
      value: function multiplyScalar(t) {
        return this.r *= t, this.g *= t, this.b *= t, this;
      }
    }, {
      key: "lerp",
      value: function lerp(t, e) {
        return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this;
      }
    }, {
      key: "lerpColors",
      value: function lerpColors(t, e, n) {
        return this.r = t.r + (e.r - t.r) * n, this.g = t.g + (e.g - t.g) * n, this.b = t.b + (e.b - t.b) * n, this;
      }
    }, {
      key: "lerpHSL",
      value: function lerpHSL(t, e) {
        this.getHSL(Ue), t.getHSL(Ge);
        var n = ot.lerp(Ue.h, Ge.h, e),
            i = ot.lerp(Ue.s, Ge.s, e),
            r = ot.lerp(Ue.l, Ge.l, e);
        return this.setHSL(n, i, r), this;
      }
    }, {
      key: "equals",
      value: function equals(t) {
        return t.r === this.r && t.g === this.g && t.b === this.b;
      }
    }, {
      key: "fromArray",
      value: function fromArray(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this;
      }
    }, {
      key: "toArray",
      value: function toArray() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t;
      }
    }, {
      key: "fromBufferAttribute",
      value: function fromBufferAttribute(t, e) {
        return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), !0 === t.normalized && (this.r /= 255, this.g /= 255, this.b /= 255), this;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return this.getHex();
      }
    }]);

    return je;
  }();

  je.NAMES = He, je.prototype.isColor = !0, je.prototype.r = 1, je.prototype.g = 1, je.prototype.b = 1;

  var qe = /*#__PURE__*/function (_Fe) {
    _inherits(qe, _Fe);

    var _super4 = _createSuper(qe);

    function qe(t) {
      var _this4;

      _classCallCheck(this, qe);

      _this4 = _super4.call(this), _this4.type = "MeshBasicMaterial", _this4.color = new je(16777215), _this4.map = null, _this4.lightMap = null, _this4.lightMapIntensity = 1, _this4.aoMap = null, _this4.aoMapIntensity = 1, _this4.specularMap = null, _this4.alphaMap = null, _this4.envMap = null, _this4.combine = 0, _this4.reflectivity = 1, _this4.refractionRatio = .98, _this4.wireframe = !1, _this4.wireframeLinewidth = 1, _this4.wireframeLinecap = "round", _this4.wireframeLinejoin = "round", _this4.skinning = !1, _this4.morphTargets = !1, _this4.setValues(t);
      return _this4;
    }

    _createClass(qe, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(qe.prototype), "copy", this).call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this;
      }
    }]);

    return qe;
  }(Fe);

  qe.prototype.isMeshBasicMaterial = !0;
  var Xe = new xt(),
      Ye = new lt();

  function Ze(t, e, n) {
    if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = !0 === n, this.usage = et, this.updateRange = {
      offset: 0,
      count: -1
    }, this.version = 0;
  }

  function Je(t, e, n) {
    Ze.call(this, new Int8Array(t), e, n);
  }

  function Qe(t, e, n) {
    Ze.call(this, new Uint8Array(t), e, n);
  }

  function Ke(t, e, n) {
    Ze.call(this, new Uint8ClampedArray(t), e, n);
  }

  function $e(t, e, n) {
    Ze.call(this, new Int16Array(t), e, n);
  }

  function tn(t, e, n) {
    Ze.call(this, new Uint16Array(t), e, n);
  }

  function en(t, e, n) {
    Ze.call(this, new Int32Array(t), e, n);
  }

  function nn(t, e, n) {
    Ze.call(this, new Uint32Array(t), e, n);
  }

  function rn(t, e, n) {
    Ze.call(this, new Uint16Array(t), e, n);
  }

  function sn(t, e, n) {
    Ze.call(this, new Float32Array(t), e, n);
  }

  function an(t, e, n) {
    Ze.call(this, new Float64Array(t), e, n);
  }

  function on(t) {
    if (0 === t.length) return -1 / 0;
    var e = t[0];

    for (var _n29 = 1, _i27 = t.length; _n29 < _i27; ++_n29) {
      t[_n29] > e && (e = t[_n29]);
    }

    return e;
  }

  Object.defineProperty(Ze.prototype, "needsUpdate", {
    set: function set(t) {
      !0 === t && this.version++;
    }
  }), Object.assign(Ze.prototype, {
    isBufferAttribute: !0,
    onUploadCallback: function onUploadCallback() {},
    setUsage: function setUsage(t) {
      return this.usage = t, this;
    },
    copy: function copy(t) {
      return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this;
    },
    copyAt: function copyAt(t, e, n) {
      t *= this.itemSize, n *= e.itemSize;

      for (var _i28 = 0, _r16 = this.itemSize; _i28 < _r16; _i28++) {
        this.array[t + _i28] = e.array[n + _i28];
      }

      return this;
    },
    copyArray: function copyArray(t) {
      return this.array.set(t), this;
    },
    copyColorsArray: function copyColorsArray(t) {
      var e = this.array;
      var n = 0;

      for (var _i29 = 0, _r17 = t.length; _i29 < _r17; _i29++) {
        var _r18 = t[_i29];
        void 0 === _r18 && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", _i29), _r18 = new je()), e[n++] = _r18.r, e[n++] = _r18.g, e[n++] = _r18.b;
      }

      return this;
    },
    copyVector2sArray: function copyVector2sArray(t) {
      var e = this.array;
      var n = 0;

      for (var _i30 = 0, _r19 = t.length; _i30 < _r19; _i30++) {
        var _r20 = t[_i30];
        void 0 === _r20 && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", _i30), _r20 = new lt()), e[n++] = _r20.x, e[n++] = _r20.y;
      }

      return this;
    },
    copyVector3sArray: function copyVector3sArray(t) {
      var e = this.array;
      var n = 0;

      for (var _i31 = 0, _r21 = t.length; _i31 < _r21; _i31++) {
        var _r22 = t[_i31];
        void 0 === _r22 && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", _i31), _r22 = new xt()), e[n++] = _r22.x, e[n++] = _r22.y, e[n++] = _r22.z;
      }

      return this;
    },
    copyVector4sArray: function copyVector4sArray(t) {
      var e = this.array;
      var n = 0;

      for (var _i32 = 0, _r23 = t.length; _i32 < _r23; _i32++) {
        var _r24 = t[_i32];
        void 0 === _r24 && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", _i32), _r24 = new mt()), e[n++] = _r24.x, e[n++] = _r24.y, e[n++] = _r24.z, e[n++] = _r24.w;
      }

      return this;
    },
    applyMatrix3: function applyMatrix3(t) {
      if (2 === this.itemSize) for (var _e20 = 0, _n30 = this.count; _e20 < _n30; _e20++) {
        Ye.fromBufferAttribute(this, _e20), Ye.applyMatrix3(t), this.setXY(_e20, Ye.x, Ye.y);
      } else if (3 === this.itemSize) for (var _e21 = 0, _n31 = this.count; _e21 < _n31; _e21++) {
        Xe.fromBufferAttribute(this, _e21), Xe.applyMatrix3(t), this.setXYZ(_e21, Xe.x, Xe.y, Xe.z);
      }
      return this;
    },
    applyMatrix4: function applyMatrix4(t) {
      for (var _e22 = 0, _n32 = this.count; _e22 < _n32; _e22++) {
        Xe.x = this.getX(_e22), Xe.y = this.getY(_e22), Xe.z = this.getZ(_e22), Xe.applyMatrix4(t), this.setXYZ(_e22, Xe.x, Xe.y, Xe.z);
      }

      return this;
    },
    applyNormalMatrix: function applyNormalMatrix(t) {
      for (var _e23 = 0, _n33 = this.count; _e23 < _n33; _e23++) {
        Xe.x = this.getX(_e23), Xe.y = this.getY(_e23), Xe.z = this.getZ(_e23), Xe.applyNormalMatrix(t), this.setXYZ(_e23, Xe.x, Xe.y, Xe.z);
      }

      return this;
    },
    transformDirection: function transformDirection(t) {
      for (var _e24 = 0, _n34 = this.count; _e24 < _n34; _e24++) {
        Xe.x = this.getX(_e24), Xe.y = this.getY(_e24), Xe.z = this.getZ(_e24), Xe.transformDirection(t), this.setXYZ(_e24, Xe.x, Xe.y, Xe.z);
      }

      return this;
    },
    set: function set(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return this.array.set(t, e), this;
    },
    getX: function getX(t) {
      return this.array[t * this.itemSize];
    },
    setX: function setX(t, e) {
      return this.array[t * this.itemSize] = e, this;
    },
    getY: function getY(t) {
      return this.array[t * this.itemSize + 1];
    },
    setY: function setY(t, e) {
      return this.array[t * this.itemSize + 1] = e, this;
    },
    getZ: function getZ(t) {
      return this.array[t * this.itemSize + 2];
    },
    setZ: function setZ(t, e) {
      return this.array[t * this.itemSize + 2] = e, this;
    },
    getW: function getW(t) {
      return this.array[t * this.itemSize + 3];
    },
    setW: function setW(t, e) {
      return this.array[t * this.itemSize + 3] = e, this;
    },
    setXY: function setXY(t, e, n) {
      return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this;
    },
    setXYZ: function setXYZ(t, e, n, i) {
      return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this;
    },
    setXYZW: function setXYZW(t, e, n, i, r) {
      return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this.array[t + 3] = r, this;
    },
    onUpload: function onUpload(t) {
      return this.onUploadCallback = t, this;
    },
    clone: function clone() {
      return new this.constructor(this.array, this.itemSize).copy(this);
    },
    toJSON: function toJSON() {
      var t = {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: Array.prototype.slice.call(this.array),
        normalized: this.normalized
      };
      return "" !== this.name && (t.name = this.name), this.usage !== et && (t.usage = this.usage), 0 === this.updateRange.offset && -1 === this.updateRange.count || (t.updateRange = this.updateRange), t;
    }
  }), Je.prototype = Object.create(Ze.prototype), Je.prototype.constructor = Je, Qe.prototype = Object.create(Ze.prototype), Qe.prototype.constructor = Qe, Ke.prototype = Object.create(Ze.prototype), Ke.prototype.constructor = Ke, $e.prototype = Object.create(Ze.prototype), $e.prototype.constructor = $e, tn.prototype = Object.create(Ze.prototype), tn.prototype.constructor = tn, en.prototype = Object.create(Ze.prototype), en.prototype.constructor = en, nn.prototype = Object.create(Ze.prototype), nn.prototype.constructor = nn, rn.prototype = Object.create(Ze.prototype), rn.prototype.constructor = rn, rn.prototype.isFloat16BufferAttribute = !0, sn.prototype = Object.create(Ze.prototype), sn.prototype.constructor = sn, an.prototype = Object.create(Ze.prototype), an.prototype.constructor = an;
  var ln = {
    Int8Array: Int8Array,
    Uint8Array: Uint8Array,
    Uint8ClampedArray: Uint8ClampedArray,
    Int16Array: Int16Array,
    Uint16Array: Uint16Array,
    Int32Array: Int32Array,
    Uint32Array: Uint32Array,
    Float32Array: Float32Array,
    Float64Array: Float64Array
  };

  function cn(t, e) {
    return new ln[t](e);
  }

  var hn = 0;
  var un = new Jt(),
      dn = new be(),
      pn = new xt(),
      fn = new wt(),
      mn = new wt(),
      gn = new xt();

  function vn() {
    Object.defineProperty(this, "id", {
      value: hn++
    }), this.uuid = ot.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
      start: 0,
      count: 1 / 0
    }, this.userData = {};
  }

  vn.prototype = Object.assign(Object.create(rt.prototype), {
    constructor: vn,
    isBufferGeometry: !0,
    getIndex: function getIndex() {
      return this.index;
    },
    setIndex: function setIndex(t) {
      return Array.isArray(t) ? this.index = new (on(t) > 65535 ? nn : tn)(t, 1) : this.index = t, this;
    },
    getAttribute: function getAttribute(t) {
      return this.attributes[t];
    },
    setAttribute: function setAttribute(t, e) {
      return this.attributes[t] = e, this;
    },
    deleteAttribute: function deleteAttribute(t) {
      return delete this.attributes[t], this;
    },
    hasAttribute: function hasAttribute(t) {
      return void 0 !== this.attributes[t];
    },
    addGroup: function addGroup(t, e) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      this.groups.push({
        start: t,
        count: e,
        materialIndex: n
      });
    },
    clearGroups: function clearGroups() {
      this.groups = [];
    },
    setDrawRange: function setDrawRange(t, e) {
      this.drawRange.start = t, this.drawRange.count = e;
    },
    applyMatrix4: function applyMatrix4(t) {
      var e = this.attributes.position;
      void 0 !== e && (e.applyMatrix4(t), e.needsUpdate = !0);
      var n = this.attributes.normal;

      if (void 0 !== n) {
        var _e25 = new ct().getNormalMatrix(t);

        n.applyNormalMatrix(_e25), n.needsUpdate = !0;
      }

      var i = this.attributes.tangent;
      return void 0 !== i && (i.transformDirection(t), i.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this;
    },
    rotateX: function rotateX(t) {
      return un.makeRotationX(t), this.applyMatrix4(un), this;
    },
    rotateY: function rotateY(t) {
      return un.makeRotationY(t), this.applyMatrix4(un), this;
    },
    rotateZ: function rotateZ(t) {
      return un.makeRotationZ(t), this.applyMatrix4(un), this;
    },
    translate: function translate(t, e, n) {
      return un.makeTranslation(t, e, n), this.applyMatrix4(un), this;
    },
    scale: function scale(t, e, n) {
      return un.makeScale(t, e, n), this.applyMatrix4(un), this;
    },
    lookAt: function lookAt(t) {
      return dn.lookAt(t), dn.updateMatrix(), this.applyMatrix4(dn.matrix), this;
    },
    center: function center() {
      return this.computeBoundingBox(), this.boundingBox.getCenter(pn).negate(), this.translate(pn.x, pn.y, pn.z), this;
    },
    setFromPoints: function setFromPoints(t) {
      var e = [];

      for (var _n35 = 0, _i33 = t.length; _n35 < _i33; _n35++) {
        var _i34 = t[_n35];
        e.push(_i34.x, _i34.y, _i34.z || 0);
      }

      return this.setAttribute("position", new sn(e, 3)), this;
    },
    computeBoundingBox: function computeBoundingBox() {
      null === this.boundingBox && (this.boundingBox = new wt());
      var t = this.attributes.position,
          e = this.morphAttributes.position;
      if (t && t.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingBox.set(new xt(-1 / 0, -1 / 0, -1 / 0), new xt(1 / 0, 1 / 0, 1 / 0));

      if (void 0 !== t) {
        if (this.boundingBox.setFromBufferAttribute(t), e) for (var _t32 = 0, _n36 = e.length; _t32 < _n36; _t32++) {
          var _n37 = e[_t32];
          fn.setFromBufferAttribute(_n37), this.morphTargetsRelative ? (gn.addVectors(this.boundingBox.min, fn.min), this.boundingBox.expandByPoint(gn), gn.addVectors(this.boundingBox.max, fn.max), this.boundingBox.expandByPoint(gn)) : (this.boundingBox.expandByPoint(fn.min), this.boundingBox.expandByPoint(fn.max));
        }
      } else this.boundingBox.makeEmpty();

      (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
    },
    computeBoundingSphere: function computeBoundingSphere() {
      null === this.boundingSphere && (this.boundingSphere = new Gt());
      var t = this.attributes.position,
          e = this.morphAttributes.position;
      if (t && t.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingSphere.set(new xt(), 1 / 0);

      if (t) {
        var _n38 = this.boundingSphere.center;
        if (fn.setFromBufferAttribute(t), e) for (var _t33 = 0, _n39 = e.length; _t33 < _n39; _t33++) {
          var _n40 = e[_t33];
          mn.setFromBufferAttribute(_n40), this.morphTargetsRelative ? (gn.addVectors(fn.min, mn.min), fn.expandByPoint(gn), gn.addVectors(fn.max, mn.max), fn.expandByPoint(gn)) : (fn.expandByPoint(mn.min), fn.expandByPoint(mn.max));
        }
        fn.getCenter(_n38);
        var _i35 = 0;

        for (var _e26 = 0, _r25 = t.count; _e26 < _r25; _e26++) {
          gn.fromBufferAttribute(t, _e26), _i35 = Math.max(_i35, _n38.distanceToSquared(gn));
        }

        if (e) for (var _r26 = 0, _s4 = e.length; _r26 < _s4; _r26++) {
          var _s5 = e[_r26],
              _a5 = this.morphTargetsRelative;

          for (var _e27 = 0, _r27 = _s5.count; _e27 < _r27; _e27++) {
            gn.fromBufferAttribute(_s5, _e27), _a5 && (pn.fromBufferAttribute(t, _e27), gn.add(pn)), _i35 = Math.max(_i35, _n38.distanceToSquared(gn));
          }
        }
        this.boundingSphere.radius = Math.sqrt(_i35), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
      }
    },
    computeFaceNormals: function computeFaceNormals() {},
    computeTangents: function computeTangents() {
      var t = this.index,
          e = this.attributes;
      if (null === t || void 0 === e.position || void 0 === e.normal || void 0 === e.uv) return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      var n = t.array,
          i = e.position.array,
          r = e.normal.array,
          s = e.uv.array,
          a = i.length / 3;
      void 0 === e.tangent && this.setAttribute("tangent", new Ze(new Float32Array(4 * a), 4));
      var o = e.tangent.array,
          l = [],
          c = [];

      for (var _t34 = 0; _t34 < a; _t34++) {
        l[_t34] = new xt(), c[_t34] = new xt();
      }

      var h = new xt(),
          u = new xt(),
          d = new xt(),
          p = new lt(),
          f = new lt(),
          m = new lt(),
          g = new xt(),
          v = new xt();

      function y(t, e, n) {
        h.fromArray(i, 3 * t), u.fromArray(i, 3 * e), d.fromArray(i, 3 * n), p.fromArray(s, 2 * t), f.fromArray(s, 2 * e), m.fromArray(s, 2 * n), u.sub(h), d.sub(h), f.sub(p), m.sub(p);
        var r = 1 / (f.x * m.y - m.x * f.y);
        isFinite(r) && (g.copy(u).multiplyScalar(m.y).addScaledVector(d, -f.y).multiplyScalar(r), v.copy(d).multiplyScalar(f.x).addScaledVector(u, -m.x).multiplyScalar(r), l[t].add(g), l[e].add(g), l[n].add(g), c[t].add(v), c[e].add(v), c[n].add(v));
      }

      var x = this.groups;
      0 === x.length && (x = [{
        start: 0,
        count: n.length
      }]);

      for (var _t35 = 0, _e28 = x.length; _t35 < _e28; ++_t35) {
        var _e29 = x[_t35],
            _i36 = _e29.start;

        for (var _t36 = _i36, _r28 = _i36 + _e29.count; _t36 < _r28; _t36 += 3) {
          y(n[_t36 + 0], n[_t36 + 1], n[_t36 + 2]);
        }
      }

      var _ = new xt(),
          b = new xt(),
          w = new xt(),
          M = new xt();

      function S(t) {
        w.fromArray(r, 3 * t), M.copy(w);
        var e = l[t];
        _.copy(e), _.sub(w.multiplyScalar(w.dot(e))).normalize(), b.crossVectors(M, e);
        var n = b.dot(c[t]) < 0 ? -1 : 1;
        o[4 * t] = _.x, o[4 * t + 1] = _.y, o[4 * t + 2] = _.z, o[4 * t + 3] = n;
      }

      for (var _t37 = 0, _e30 = x.length; _t37 < _e30; ++_t37) {
        var _e31 = x[_t37],
            _i37 = _e31.start;

        for (var _t38 = _i37, _r29 = _i37 + _e31.count; _t38 < _r29; _t38 += 3) {
          S(n[_t38 + 0]), S(n[_t38 + 1]), S(n[_t38 + 2]);
        }
      }
    },
    computeVertexNormals: function computeVertexNormals() {
      var t = this.index,
          e = this.getAttribute("position");

      if (void 0 !== e) {
        var _n41 = this.getAttribute("normal");

        if (void 0 === _n41) _n41 = new Ze(new Float32Array(3 * e.count), 3), this.setAttribute("normal", _n41);else for (var _t39 = 0, _e32 = _n41.count; _t39 < _e32; _t39++) {
          _n41.setXYZ(_t39, 0, 0, 0);
        }

        var _i38 = new xt(),
            _r30 = new xt(),
            _s6 = new xt(),
            _a6 = new xt(),
            _o7 = new xt(),
            _l8 = new xt(),
            _c6 = new xt(),
            _h4 = new xt();

        if (t) for (var _u = 0, _d = t.count; _u < _d; _u += 3) {
          var _d2 = t.getX(_u + 0),
              _p = t.getX(_u + 1),
              _f = t.getX(_u + 2);

          _i38.fromBufferAttribute(e, _d2), _r30.fromBufferAttribute(e, _p), _s6.fromBufferAttribute(e, _f), _c6.subVectors(_s6, _r30), _h4.subVectors(_i38, _r30), _c6.cross(_h4), _a6.fromBufferAttribute(_n41, _d2), _o7.fromBufferAttribute(_n41, _p), _l8.fromBufferAttribute(_n41, _f), _a6.add(_c6), _o7.add(_c6), _l8.add(_c6), _n41.setXYZ(_d2, _a6.x, _a6.y, _a6.z), _n41.setXYZ(_p, _o7.x, _o7.y, _o7.z), _n41.setXYZ(_f, _l8.x, _l8.y, _l8.z);
        } else for (var _t40 = 0, _a7 = e.count; _t40 < _a7; _t40 += 3) {
          _i38.fromBufferAttribute(e, _t40 + 0), _r30.fromBufferAttribute(e, _t40 + 1), _s6.fromBufferAttribute(e, _t40 + 2), _c6.subVectors(_s6, _r30), _h4.subVectors(_i38, _r30), _c6.cross(_h4), _n41.setXYZ(_t40 + 0, _c6.x, _c6.y, _c6.z), _n41.setXYZ(_t40 + 1, _c6.x, _c6.y, _c6.z), _n41.setXYZ(_t40 + 2, _c6.x, _c6.y, _c6.z);
        }
        this.normalizeNormals(), _n41.needsUpdate = !0;
      }
    },
    merge: function merge(t, e) {
      if (!t || !t.isBufferGeometry) return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t);
      void 0 === e && (e = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
      var n = this.attributes;

      for (var _i39 in n) {
        if (void 0 === t.attributes[_i39]) continue;

        var _r31 = n[_i39].array,
            _s7 = t.attributes[_i39],
            _a8 = _s7.array,
            _o8 = _s7.itemSize * e,
            _l9 = Math.min(_a8.length, _r31.length - _o8);

        for (var _t41 = 0, _e33 = _o8; _t41 < _l9; _t41++, _e33++) {
          _r31[_e33] = _a8[_t41];
        }
      }

      return this;
    },
    normalizeNormals: function normalizeNormals() {
      var t = this.attributes.normal;

      for (var _e34 = 0, _n42 = t.count; _e34 < _n42; _e34++) {
        gn.fromBufferAttribute(t, _e34), gn.normalize(), t.setXYZ(_e34, gn.x, gn.y, gn.z);
      }
    },
    toNonIndexed: function toNonIndexed() {
      function t(t, e) {
        var n = t.array,
            i = t.itemSize,
            r = t.normalized,
            s = new n.constructor(e.length * i);
        var a = 0,
            o = 0;

        for (var _t42 = 0, _r32 = e.length; _t42 < _r32; _t42++) {
          a = e[_t42] * i;

          for (var _t43 = 0; _t43 < i; _t43++) {
            s[o++] = n[a++];
          }
        }

        return new Ze(s, i, r);
      }

      if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
      var e = new vn(),
          n = this.index.array,
          i = this.attributes;

      for (var _r33 in i) {
        var _s8 = t(i[_r33], n);

        e.setAttribute(_r33, _s8);
      }

      var r = this.morphAttributes;

      for (var _i40 in r) {
        var _s9 = [],
            _a9 = r[_i40];

        for (var _e35 = 0, _i41 = _a9.length; _e35 < _i41; _e35++) {
          var _i42 = t(_a9[_e35], n);

          _s9.push(_i42);
        }

        e.morphAttributes[_i40] = _s9;
      }

      e.morphTargetsRelative = this.morphTargetsRelative;
      var s = this.groups;

      for (var _t44 = 0, _n43 = s.length; _t44 < _n43; _t44++) {
        var _n44 = s[_t44];
        e.addGroup(_n44.start, _n44.count, _n44.materialIndex);
      }

      return e;
    },
    toJSON: function toJSON() {
      var t = {
        metadata: {
          version: 4.5,
          type: "BufferGeometry",
          generator: "BufferGeometry.toJSON"
        }
      };

      if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), void 0 !== this.parameters) {
        var _e36 = this.parameters;

        for (var _n45 in _e36) {
          void 0 !== _e36[_n45] && (t[_n45] = _e36[_n45]);
        }

        return t;
      }

      t.data = {
        attributes: {}
      };
      var e = this.index;
      null !== e && (t.data.index = {
        type: e.array.constructor.name,
        array: Array.prototype.slice.call(e.array)
      });
      var n = this.attributes;

      for (var _e37 in n) {
        var _i43 = n[_e37];
        t.data.attributes[_e37] = _i43.toJSON(t.data);
      }

      var i = {};
      var r = !1;

      for (var _e38 in this.morphAttributes) {
        var _n46 = this.morphAttributes[_e38],
            _s10 = [];

        for (var _e39 = 0, _i44 = _n46.length; _e39 < _i44; _e39++) {
          var _i45 = _n46[_e39];

          _s10.push(_i45.toJSON(t.data));
        }

        _s10.length > 0 && (i[_e38] = _s10, r = !0);
      }

      r && (t.data.morphAttributes = i, t.data.morphTargetsRelative = this.morphTargetsRelative);
      var s = this.groups;
      s.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(s)));
      var a = this.boundingSphere;
      return null !== a && (t.data.boundingSphere = {
        center: a.center.toArray(),
        radius: a.radius
      }), t;
    },
    clone: function clone() {
      return new vn().copy(this);
    },
    copy: function copy(t) {
      this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
      var e = {};
      this.name = t.name;
      var n = t.index;
      null !== n && this.setIndex(n.clone(e));
      var i = t.attributes;

      for (var _t45 in i) {
        var _n47 = i[_t45];
        this.setAttribute(_t45, _n47.clone(e));
      }

      var r = t.morphAttributes;

      for (var _t46 in r) {
        var _n48 = [],
            _i46 = r[_t46];

        for (var _t47 = 0, _r34 = _i46.length; _t47 < _r34; _t47++) {
          _n48.push(_i46[_t47].clone(e));
        }

        this.morphAttributes[_t46] = _n48;
      }

      this.morphTargetsRelative = t.morphTargetsRelative;
      var s = t.groups;

      for (var _t48 = 0, _e40 = s.length; _t48 < _e40; _t48++) {
        var _e41 = s[_t48];
        this.addGroup(_e41.start, _e41.count, _e41.materialIndex);
      }

      var a = t.boundingBox;
      null !== a && (this.boundingBox = a.clone());
      var o = t.boundingSphere;
      return null !== o && (this.boundingSphere = o.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this;
    },
    dispose: function dispose() {
      this.dispatchEvent({
        type: "dispose"
      });
    }
  });

  var yn = new Jt(),
      xn = new Zt(),
      _n = new Gt(),
      bn = new xt(),
      wn = new xt(),
      Mn = new xt(),
      Sn = new xt(),
      Tn = new xt(),
      En = new xt(),
      An = new xt(),
      Ln = new xt(),
      Rn = new xt(),
      Cn = new lt(),
      Pn = new lt(),
      Dn = new lt(),
      In = new xt(),
      Nn = new xt();

  function Bn() {
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new vn();
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new qe();
    be.call(this), this.type = "Mesh", this.geometry = t, this.material = e, this.updateMorphTargets();
  }

  function On(t, e, n, i, r, s, a, o, l, c, h, u) {
    bn.fromBufferAttribute(r, c), wn.fromBufferAttribute(r, h), Mn.fromBufferAttribute(r, u);
    var d = t.morphTargetInfluences;

    if (e.morphTargets && s && d) {
      An.set(0, 0, 0), Ln.set(0, 0, 0), Rn.set(0, 0, 0);

      for (var _t49 = 0, _e42 = s.length; _t49 < _e42; _t49++) {
        var _e43 = d[_t49],
            _n49 = s[_t49];
        0 !== _e43 && (Sn.fromBufferAttribute(_n49, c), Tn.fromBufferAttribute(_n49, h), En.fromBufferAttribute(_n49, u), a ? (An.addScaledVector(Sn, _e43), Ln.addScaledVector(Tn, _e43), Rn.addScaledVector(En, _e43)) : (An.addScaledVector(Sn.sub(bn), _e43), Ln.addScaledVector(Tn.sub(wn), _e43), Rn.addScaledVector(En.sub(Mn), _e43)));
      }

      bn.add(An), wn.add(Ln), Mn.add(Rn);
    }

    t.isSkinnedMesh && e.skinning && (t.boneTransform(c, bn), t.boneTransform(h, wn), t.boneTransform(u, Mn));

    var p = function (t, e, n, i, r, s, a, o) {
      var l;
      if (l = 1 === e.side ? i.intersectTriangle(a, s, r, !0, o) : i.intersectTriangle(r, s, a, 2 !== e.side, o), null === l) return null;
      Nn.copy(o), Nn.applyMatrix4(t.matrixWorld);
      var c = n.ray.origin.distanceTo(Nn);
      return c < n.near || c > n.far ? null : {
        distance: c,
        point: Nn.clone(),
        object: t
      };
    }(t, e, n, i, bn, wn, Mn, In);

    if (p) {
      o && (Cn.fromBufferAttribute(o, c), Pn.fromBufferAttribute(o, h), Dn.fromBufferAttribute(o, u), p.uv = Oe.getUV(In, bn, wn, Mn, Cn, Pn, Dn, new lt())), l && (Cn.fromBufferAttribute(l, c), Pn.fromBufferAttribute(l, h), Dn.fromBufferAttribute(l, u), p.uv2 = Oe.getUV(In, bn, wn, Mn, Cn, Pn, Dn, new lt()));
      var _t50 = {
        a: c,
        b: h,
        c: u,
        normal: new xt(),
        materialIndex: 0
      };
      Oe.getNormal(bn, wn, Mn, _t50.normal), p.face = _t50;
    }

    return p;
  }

  Bn.prototype = Object.assign(Object.create(be.prototype), {
    constructor: Bn,
    isMesh: !0,
    copy: function copy(t) {
      return be.prototype.copy.call(this, t), void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = t.material, this.geometry = t.geometry, this;
    },
    updateMorphTargets: function updateMorphTargets() {
      var t = this.geometry;

      if (t.isBufferGeometry) {
        var _e44 = t.morphAttributes,
            _n50 = Object.keys(_e44);

        if (_n50.length > 0) {
          var _t51 = _e44[_n50[0]];

          if (void 0 !== _t51) {
            this.morphTargetInfluences = [], this.morphTargetDictionary = {};

            for (var _e45 = 0, _n51 = _t51.length; _e45 < _n51; _e45++) {
              var _n52 = _t51[_e45].name || String(_e45);

              this.morphTargetInfluences.push(0), this.morphTargetDictionary[_n52] = _e45;
            }
          }
        }
      } else {
        var _e46 = t.morphTargets;
        void 0 !== _e46 && _e46.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
      }
    },
    raycast: function raycast(t, e) {
      var n = this.geometry,
          i = this.material,
          r = this.matrixWorld;
      if (void 0 === i) return;
      if (null === n.boundingSphere && n.computeBoundingSphere(), _n.copy(n.boundingSphere), _n.applyMatrix4(r), !1 === t.ray.intersectsSphere(_n)) return;
      if (yn.copy(r).invert(), xn.copy(t.ray).applyMatrix4(yn), null !== n.boundingBox && !1 === xn.intersectsBox(n.boundingBox)) return;
      var s;

      if (n.isBufferGeometry) {
        var _r35 = n.index,
            _a10 = n.attributes.position,
            _o9 = n.morphAttributes.position,
            _l10 = n.morphTargetsRelative,
            _c7 = n.attributes.uv,
            _h5 = n.attributes.uv2,
            _u2 = n.groups,
            _d3 = n.drawRange;
        if (null !== _r35) {
          if (Array.isArray(i)) for (var _n53 = 0, _p2 = _u2.length; _n53 < _p2; _n53++) {
            var _p3 = _u2[_n53],
                _f2 = i[_p3.materialIndex];

            for (var _n54 = Math.max(_p3.start, _d3.start), _i47 = Math.min(_p3.start + _p3.count, _d3.start + _d3.count); _n54 < _i47; _n54 += 3) {
              var _i48 = _r35.getX(_n54),
                  _u3 = _r35.getX(_n54 + 1),
                  _d4 = _r35.getX(_n54 + 2);

              s = On(this, _f2, t, xn, _a10, _o9, _l10, _c7, _h5, _i48, _u3, _d4), s && (s.faceIndex = Math.floor(_n54 / 3), s.face.materialIndex = _p3.materialIndex, e.push(s));
            }
          } else {
            for (var _n55 = Math.max(0, _d3.start), _u4 = Math.min(_r35.count, _d3.start + _d3.count); _n55 < _u4; _n55 += 3) {
              var _u5 = _r35.getX(_n55),
                  _d5 = _r35.getX(_n55 + 1),
                  _p4 = _r35.getX(_n55 + 2);

              s = On(this, i, t, xn, _a10, _o9, _l10, _c7, _h5, _u5, _d5, _p4), s && (s.faceIndex = Math.floor(_n55 / 3), e.push(s));
            }
          }
        } else if (void 0 !== _a10) if (Array.isArray(i)) for (var _n56 = 0, _r36 = _u2.length; _n56 < _r36; _n56++) {
          var _r37 = _u2[_n56],
              _p5 = i[_r37.materialIndex];

          for (var _n57 = Math.max(_r37.start, _d3.start), _i49 = Math.min(_r37.start + _r37.count, _d3.start + _d3.count); _n57 < _i49; _n57 += 3) {
            s = On(this, _p5, t, xn, _a10, _o9, _l10, _c7, _h5, _n57, _n57 + 1, _n57 + 2), s && (s.faceIndex = Math.floor(_n57 / 3), s.face.materialIndex = _r37.materialIndex, e.push(s));
          }
        } else {
          for (var _n58 = Math.max(0, _d3.start), _r38 = Math.min(_a10.count, _d3.start + _d3.count); _n58 < _r38; _n58 += 3) {
            s = On(this, i, t, xn, _a10, _o9, _l10, _c7, _h5, _n58, _n58 + 1, _n58 + 2), s && (s.faceIndex = Math.floor(_n58 / 3), e.push(s));
          }
        }
      } else n.isGeometry && console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
    }
  });

  var zn = /*#__PURE__*/function (_vn) {
    _inherits(zn, _vn);

    var _super5 = _createSuper(zn);

    function zn() {
      var _this5;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
      var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;

      _classCallCheck(this, zn);

      _this5 = _super5.call(this), _this5.type = "BoxGeometry", _this5.parameters = {
        width: t,
        height: e,
        depth: n,
        widthSegments: i,
        heightSegments: r,
        depthSegments: s
      };

      var a = _assertThisInitialized(_this5);

      i = Math.floor(i), r = Math.floor(r), s = Math.floor(s);
      var o = [],
          l = [],
          c = [],
          h = [];
      var u = 0,
          d = 0;

      function p(t, e, n, i, r, s, p, f, m, g, v) {
        var y = s / m,
            x = p / g,
            _ = s / 2,
            b = p / 2,
            w = f / 2,
            M = m + 1,
            S = g + 1;

        var T = 0,
            E = 0;
        var A = new xt();

        for (var _s11 = 0; _s11 < S; _s11++) {
          var _a11 = _s11 * x - b;

          for (var _o10 = 0; _o10 < M; _o10++) {
            var _u6 = _o10 * y - _;

            A[t] = _u6 * i, A[e] = _a11 * r, A[n] = w, l.push(A.x, A.y, A.z), A[t] = 0, A[e] = 0, A[n] = f > 0 ? 1 : -1, c.push(A.x, A.y, A.z), h.push(_o10 / m), h.push(1 - _s11 / g), T += 1;
          }
        }

        for (var _t52 = 0; _t52 < g; _t52++) {
          for (var _e47 = 0; _e47 < m; _e47++) {
            var _n59 = u + _e47 + M * _t52,
                _i50 = u + _e47 + M * (_t52 + 1),
                _r39 = u + (_e47 + 1) + M * (_t52 + 1),
                _s12 = u + (_e47 + 1) + M * _t52;

            o.push(_n59, _i50, _s12), o.push(_i50, _r39, _s12), E += 6;
          }
        }

        a.addGroup(d, E, v), d += E, u += T;
      }

      p("z", "y", "x", -1, -1, n, e, t, s, r, 0), p("z", "y", "x", 1, -1, n, e, -t, s, r, 1), p("x", "z", "y", 1, 1, t, n, e, i, s, 2), p("x", "z", "y", 1, -1, t, n, -e, i, s, 3), p("x", "y", "z", 1, -1, t, e, n, i, r, 4), p("x", "y", "z", -1, -1, t, e, -n, i, r, 5), _this5.setIndex(o), _this5.setAttribute("position", new sn(l, 3)), _this5.setAttribute("normal", new sn(c, 3)), _this5.setAttribute("uv", new sn(h, 2));
      return _this5;
    }

    return zn;
  }(vn);

  function Fn(t) {
    var e = {};

    for (var _n60 in t) {
      e[_n60] = {};

      for (var _i51 in t[_n60]) {
        var _r40 = t[_n60][_i51];
        _r40 && (_r40.isColor || _r40.isMatrix3 || _r40.isMatrix4 || _r40.isVector2 || _r40.isVector3 || _r40.isVector4 || _r40.isTexture || _r40.isQuaternion) ? e[_n60][_i51] = _r40.clone() : Array.isArray(_r40) ? e[_n60][_i51] = _r40.slice() : e[_n60][_i51] = _r40;
      }
    }

    return e;
  }

  function Hn(t) {
    var e = {};

    for (var _n61 = 0; _n61 < t.length; _n61++) {
      var _i52 = Fn(t[_n61]);

      for (var _t53 in _i52) {
        e[_t53] = _i52[_t53];
      }
    }

    return e;
  }

  var Un = {
    clone: Fn,
    merge: Hn
  };

  function Gn(t) {
    Fe.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
      derivatives: !1,
      fragDepth: !1,
      drawBuffers: !1,
      shaderTextureLOD: !1
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv2: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(t));
  }

  function kn() {
    be.call(this), this.type = "Camera", this.matrixWorldInverse = new Jt(), this.projectionMatrix = new Jt(), this.projectionMatrixInverse = new Jt();
  }

  function Vn() {
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : .1;
    var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2e3;
    kn.call(this), this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }

  Gn.prototype = Object.create(Fe.prototype), Gn.prototype.constructor = Gn, Gn.prototype.isShaderMaterial = !0, Gn.prototype.copy = function (t) {
    return Fe.prototype.copy.call(this, t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = Fn(t.uniforms), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.lights = t.lights, this.clipping = t.clipping, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this;
  }, Gn.prototype.toJSON = function (t) {
    var e = Fe.prototype.toJSON.call(this, t);
    e.glslVersion = this.glslVersion, e.uniforms = {};

    for (var _n62 in this.uniforms) {
      var _i53 = this.uniforms[_n62].value;
      _i53 && _i53.isTexture ? e.uniforms[_n62] = {
        type: "t",
        value: _i53.toJSON(t).uuid
      } : _i53 && _i53.isColor ? e.uniforms[_n62] = {
        type: "c",
        value: _i53.getHex()
      } : _i53 && _i53.isVector2 ? e.uniforms[_n62] = {
        type: "v2",
        value: _i53.toArray()
      } : _i53 && _i53.isVector3 ? e.uniforms[_n62] = {
        type: "v3",
        value: _i53.toArray()
      } : _i53 && _i53.isVector4 ? e.uniforms[_n62] = {
        type: "v4",
        value: _i53.toArray()
      } : _i53 && _i53.isMatrix3 ? e.uniforms[_n62] = {
        type: "m3",
        value: _i53.toArray()
      } : _i53 && _i53.isMatrix4 ? e.uniforms[_n62] = {
        type: "m4",
        value: _i53.toArray()
      } : e.uniforms[_n62] = {
        value: _i53
      };
    }

    Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader;
    var n = {};

    for (var _t54 in this.extensions) {
      !0 === this.extensions[_t54] && (n[_t54] = !0);
    }

    return Object.keys(n).length > 0 && (e.extensions = n), e;
  }, kn.prototype = Object.assign(Object.create(be.prototype), {
    constructor: kn,
    isCamera: !0,
    copy: function copy(t, e) {
      return be.prototype.copy.call(this, t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this;
    },
    getWorldDirection: function getWorldDirection(t) {
      void 0 === t && (console.warn("THREE.Camera: .getWorldDirection() target is now required"), t = new xt()), this.updateWorldMatrix(!0, !1);
      var e = this.matrixWorld.elements;
      return t.set(-e[8], -e[9], -e[10]).normalize();
    },
    updateMatrixWorld: function updateMatrixWorld(t) {
      be.prototype.updateMatrixWorld.call(this, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
    },
    updateWorldMatrix: function updateWorldMatrix(t, e) {
      be.prototype.updateWorldMatrix.call(this, t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
    },
    clone: function clone() {
      return new this.constructor().copy(this);
    }
  }), Vn.prototype = Object.assign(Object.create(kn.prototype), {
    constructor: Vn,
    isPerspectiveCamera: !0,
    copy: function copy(t, e) {
      return kn.prototype.copy.call(this, t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this;
    },
    setFocalLength: function setFocalLength(t) {
      var e = .5 * this.getFilmHeight() / t;
      this.fov = 2 * ot.RAD2DEG * Math.atan(e), this.updateProjectionMatrix();
    },
    getFocalLength: function getFocalLength() {
      var t = Math.tan(.5 * ot.DEG2RAD * this.fov);
      return .5 * this.getFilmHeight() / t;
    },
    getEffectiveFOV: function getEffectiveFOV() {
      return 2 * ot.RAD2DEG * Math.atan(Math.tan(.5 * ot.DEG2RAD * this.fov) / this.zoom);
    },
    getFilmWidth: function getFilmWidth() {
      return this.filmGauge * Math.min(this.aspect, 1);
    },
    getFilmHeight: function getFilmHeight() {
      return this.filmGauge / Math.max(this.aspect, 1);
    },
    setViewOffset: function setViewOffset(t, e, n, i, r, s) {
      this.aspect = t / e, null === this.view && (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix();
    },
    clearViewOffset: function clearViewOffset() {
      null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix();
    },
    updateProjectionMatrix: function updateProjectionMatrix() {
      var t = this.near;
      var e = t * Math.tan(.5 * ot.DEG2RAD * this.fov) / this.zoom,
          n = 2 * e,
          i = this.aspect * n,
          r = -.5 * i;
      var s = this.view;

      if (null !== this.view && this.view.enabled) {
        var _t55 = s.fullWidth,
            _a12 = s.fullHeight;
        r += s.offsetX * i / _t55, e -= s.offsetY * n / _a12, i *= s.width / _t55, n *= s.height / _a12;
      }

      var a = this.filmOffset;
      0 !== a && (r += t * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, e, e - n, t, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    },
    toJSON: function toJSON(t) {
      var e = be.prototype.toJSON.call(this, t);
      return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
    }
  });
  var Wn = 90;

  var jn = /*#__PURE__*/function (_be) {
    _inherits(jn, _be);

    var _super6 = _createSuper(jn);

    function jn(t, e, n) {
      var _this6;

      _classCallCheck(this, jn);

      if (_this6 = _super6.call(this), _this6.type = "CubeCamera", !0 !== n.isWebGLCubeRenderTarget) return _possibleConstructorReturn(_this6, void console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter."));
      _this6.renderTarget = n;
      var i = new Vn(Wn, 1, t, e);
      i.layers = _this6.layers, i.up.set(0, -1, 0), i.lookAt(new xt(1, 0, 0)), _this6.add(i);
      var r = new Vn(Wn, 1, t, e);
      r.layers = _this6.layers, r.up.set(0, -1, 0), r.lookAt(new xt(-1, 0, 0)), _this6.add(r);
      var s = new Vn(Wn, 1, t, e);
      s.layers = _this6.layers, s.up.set(0, 0, 1), s.lookAt(new xt(0, 1, 0)), _this6.add(s);
      var a = new Vn(Wn, 1, t, e);
      a.layers = _this6.layers, a.up.set(0, 0, -1), a.lookAt(new xt(0, -1, 0)), _this6.add(a);
      var o = new Vn(Wn, 1, t, e);
      o.layers = _this6.layers, o.up.set(0, -1, 0), o.lookAt(new xt(0, 0, 1)), _this6.add(o);
      var l = new Vn(Wn, 1, t, e);
      l.layers = _this6.layers, l.up.set(0, -1, 0), l.lookAt(new xt(0, 0, -1)), _this6.add(l);
      return _possibleConstructorReturn(_this6);
    }

    _createClass(jn, [{
      key: "update",
      value: function update(t, e) {
        null === this.parent && this.updateMatrixWorld();

        var n = this.renderTarget,
            _this$children = _slicedToArray(this.children, 6),
            i = _this$children[0],
            r = _this$children[1],
            s = _this$children[2],
            a = _this$children[3],
            o = _this$children[4],
            l = _this$children[5],
            c = t.xr.enabled,
            h = t.getRenderTarget();

        t.xr.enabled = !1;
        var u = n.texture.generateMipmaps;
        n.texture.generateMipmaps = !1, t.setRenderTarget(n, 0), t.render(e, i), t.setRenderTarget(n, 1), t.render(e, r), t.setRenderTarget(n, 2), t.render(e, s), t.setRenderTarget(n, 3), t.render(e, a), t.setRenderTarget(n, 4), t.render(e, o), n.texture.generateMipmaps = u, t.setRenderTarget(n, 5), t.render(e, l), t.setRenderTarget(h), t.xr.enabled = c;
      }
    }]);

    return jn;
  }(be);

  var qn = /*#__PURE__*/function (_pt) {
    _inherits(qn, _pt);

    var _super7 = _createSuper(qn);

    function qn(t, e, n, i, s, a, o, l, c, h) {
      var _this7;

      _classCallCheck(this, qn);

      _this7 = _super7.call(this, t = void 0 !== t ? t : [], e = void 0 !== e ? e : r, n, i, s, a, o = void 0 !== o ? o : T, l, c, h), _this7._needsFlipEnvMap = !0, _this7.flipY = !1;
      return _this7;
    }

    _createClass(qn, [{
      key: "images",
      get: function get() {
        return this.image;
      },
      set: function set(t) {
        this.image = t;
      }
    }]);

    return qn;
  }(pt);

  qn.prototype.isCubeTexture = !0;

  var Xn = /*#__PURE__*/function (_gt2) {
    _inherits(Xn, _gt2);

    var _super8 = _createSuper(Xn);

    function Xn(t, e, n) {
      var _this8;

      _classCallCheck(this, Xn);

      Number.isInteger(e) && (console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"), e = n), _this8 = _super8.call(this, t, t, e), e = e || {}, _this8.texture = new qn(void 0, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.encoding), _this8.texture.generateMipmaps = void 0 !== e.generateMipmaps && e.generateMipmaps, _this8.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : g, _this8.texture._needsFlipEnvMap = !1;
      return _this8;
    }

    _createClass(Xn, [{
      key: "fromEquirectangularTexture",
      value: function fromEquirectangularTexture(t, e) {
        this.texture.type = e.type, this.texture.format = E, this.texture.encoding = e.encoding, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
        var n = {
          uniforms: {
            tEquirect: {
              value: null
            }
          },
          vertexShader: "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",
          fragmentShader: "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t"
        },
            i = new zn(5, 5, 5),
            r = new Gn({
          name: "CubemapFromEquirect",
          uniforms: Fn(n.uniforms),
          vertexShader: n.vertexShader,
          fragmentShader: n.fragmentShader,
          side: 1,
          blending: 0
        });
        r.uniforms.tEquirect.value = e;
        var s = new Bn(i, r),
            a = e.minFilter;
        e.minFilter === y && (e.minFilter = g);
        return new jn(1, 10, this).update(t, s), e.minFilter = a, s.geometry.dispose(), s.material.dispose(), this;
      }
    }, {
      key: "clear",
      value: function clear(t, e, n, i) {
        var r = t.getRenderTarget();

        for (var _r41 = 0; _r41 < 6; _r41++) {
          t.setRenderTarget(this, _r41), t.clear(e, n, i);
        }

        t.setRenderTarget(r);
      }
    }]);

    return Xn;
  }(gt);

  Xn.prototype.isWebGLCubeRenderTarget = !0;

  var Yn = /*#__PURE__*/function (_pt2) {
    _inherits(Yn, _pt2);

    var _super9 = _createSuper(Yn);

    function Yn(t, e, n, i, r, s, a, o, l, c, h, u) {
      var _this9;

      _classCallCheck(this, Yn);

      _this9 = _super9.call(this, null, s, a, o, l, c, i, r, h, u), _this9.image = {
        data: t || null,
        width: e || 1,
        height: n || 1
      }, _this9.magFilter = void 0 !== l ? l : p, _this9.minFilter = void 0 !== c ? c : p, _this9.generateMipmaps = !1, _this9.flipY = !1, _this9.unpackAlignment = 1, _this9.needsUpdate = !0;
      return _this9;
    }

    return Yn;
  }(pt);

  Yn.prototype.isDataTexture = !0;
  var Zn = new Gt(),
      Jn = new xt();

  var Qn = /*#__PURE__*/function () {
    function Qn() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Te();
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Te();
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Te();
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new Te();
      var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : new Te();
      var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : new Te();

      _classCallCheck(this, Qn);

      this.planes = [t, e, n, i, r, s];
    }

    _createClass(Qn, [{
      key: "set",
      value: function set(t, e, n, i, r, s) {
        var a = this.planes;
        return a[0].copy(t), a[1].copy(e), a[2].copy(n), a[3].copy(i), a[4].copy(r), a[5].copy(s), this;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        var e = this.planes;

        for (var _n63 = 0; _n63 < 6; _n63++) {
          e[_n63].copy(t.planes[_n63]);
        }

        return this;
      }
    }, {
      key: "setFromProjectionMatrix",
      value: function setFromProjectionMatrix(t) {
        var e = this.planes,
            n = t.elements,
            i = n[0],
            r = n[1],
            s = n[2],
            a = n[3],
            o = n[4],
            l = n[5],
            c = n[6],
            h = n[7],
            u = n[8],
            d = n[9],
            p = n[10],
            f = n[11],
            m = n[12],
            g = n[13],
            v = n[14],
            y = n[15];
        return e[0].setComponents(a - i, h - o, f - u, y - m).normalize(), e[1].setComponents(a + i, h + o, f + u, y + m).normalize(), e[2].setComponents(a + r, h + l, f + d, y + g).normalize(), e[3].setComponents(a - r, h - l, f - d, y - g).normalize(), e[4].setComponents(a - s, h - c, f - p, y - v).normalize(), e[5].setComponents(a + s, h + c, f + p, y + v).normalize(), this;
      }
    }, {
      key: "intersectsObject",
      value: function intersectsObject(t) {
        var e = t.geometry;
        return null === e.boundingSphere && e.computeBoundingSphere(), Zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld), this.intersectsSphere(Zn);
      }
    }, {
      key: "intersectsSprite",
      value: function intersectsSprite(t) {
        return Zn.center.set(0, 0, 0), Zn.radius = .7071067811865476, Zn.applyMatrix4(t.matrixWorld), this.intersectsSphere(Zn);
      }
    }, {
      key: "intersectsSphere",
      value: function intersectsSphere(t) {
        var e = this.planes,
            n = t.center,
            i = -t.radius;

        for (var _t56 = 0; _t56 < 6; _t56++) {
          if (e[_t56].distanceToPoint(n) < i) return !1;
        }

        return !0;
      }
    }, {
      key: "intersectsBox",
      value: function intersectsBox(t) {
        var e = this.planes;

        for (var _n64 = 0; _n64 < 6; _n64++) {
          var _i54 = e[_n64];
          if (Jn.x = _i54.normal.x > 0 ? t.max.x : t.min.x, Jn.y = _i54.normal.y > 0 ? t.max.y : t.min.y, Jn.z = _i54.normal.z > 0 ? t.max.z : t.min.z, _i54.distanceToPoint(Jn) < 0) return !1;
        }

        return !0;
      }
    }, {
      key: "containsPoint",
      value: function containsPoint(t) {
        var e = this.planes;

        for (var _n65 = 0; _n65 < 6; _n65++) {
          if (e[_n65].distanceToPoint(t) < 0) return !1;
        }

        return !0;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }]);

    return Qn;
  }();

  function Kn() {
    var t = null,
        e = !1,
        n = null,
        i = null;

    function r(e, s) {
      n(e, s), i = t.requestAnimationFrame(r);
    }

    return {
      start: function start() {
        !0 !== e && null !== n && (i = t.requestAnimationFrame(r), e = !0);
      },
      stop: function stop() {
        t.cancelAnimationFrame(i), e = !1;
      },
      setAnimationLoop: function setAnimationLoop(t) {
        n = t;
      },
      setContext: function setContext(e) {
        t = e;
      }
    };
  }

  function $n(t, e) {
    var n = e.isWebGL2,
        i = new WeakMap();
    return {
      get: function get(t) {
        return t.isInterleavedBufferAttribute && (t = t.data), i.get(t);
      },
      remove: function remove(e) {
        e.isInterleavedBufferAttribute && (e = e.data);
        var n = i.get(e);
        n && (t.deleteBuffer(n.buffer), i.delete(e));
      },
      update: function update(e, r) {
        if (e.isGLBufferAttribute) {
          var _t57 = i.get(e);

          return void ((!_t57 || _t57.version < e.version) && i.set(e, {
            buffer: e.buffer,
            type: e.type,
            bytesPerElement: e.elementSize,
            version: e.version
          }));
        }

        e.isInterleavedBufferAttribute && (e = e.data);
        var s = i.get(e);
        void 0 === s ? i.set(e, function (e, i) {
          var r = e.array,
              s = e.usage,
              a = t.createBuffer();
          t.bindBuffer(i, a), t.bufferData(i, r, s), e.onUploadCallback();
          var o = 5126;
          return r instanceof Float32Array ? o = 5126 : r instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : r instanceof Uint16Array ? e.isFloat16BufferAttribute ? n ? o = 5131 : console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.") : o = 5123 : r instanceof Int16Array ? o = 5122 : r instanceof Uint32Array ? o = 5125 : r instanceof Int32Array ? o = 5124 : r instanceof Int8Array ? o = 5120 : r instanceof Uint8Array && (o = 5121), {
            buffer: a,
            type: o,
            bytesPerElement: r.BYTES_PER_ELEMENT,
            version: e.version
          };
        }(e, r)) : s.version < e.version && (!function (e, i, r) {
          var s = i.array,
              a = i.updateRange;
          t.bindBuffer(r, e), -1 === a.count ? t.bufferSubData(r, 0, s) : (n ? t.bufferSubData(r, a.offset * s.BYTES_PER_ELEMENT, s, a.offset, a.count) : t.bufferSubData(r, a.offset * s.BYTES_PER_ELEMENT, s.subarray(a.offset, a.offset + a.count)), a.count = -1);
        }(s.buffer, e, r), s.version = e.version);
      }
    };
  }

  var ti = /*#__PURE__*/function (_vn2) {
    _inherits(ti, _vn2);

    var _super10 = _createSuper(ti);

    function ti() {
      var _this10;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

      _classCallCheck(this, ti);

      _this10 = _super10.call(this), _this10.type = "PlaneGeometry", _this10.parameters = {
        width: t,
        height: e,
        widthSegments: n,
        heightSegments: i
      };
      var r = t / 2,
          s = e / 2,
          a = Math.floor(n),
          o = Math.floor(i),
          l = a + 1,
          c = o + 1,
          h = t / a,
          u = e / o,
          d = [],
          p = [],
          f = [],
          m = [];

      for (var _t58 = 0; _t58 < c; _t58++) {
        var _e48 = _t58 * u - s;

        for (var _n66 = 0; _n66 < l; _n66++) {
          var _i55 = _n66 * h - r;

          p.push(_i55, -_e48, 0), f.push(0, 0, 1), m.push(_n66 / a), m.push(1 - _t58 / o);
        }
      }

      for (var _t59 = 0; _t59 < o; _t59++) {
        for (var _e49 = 0; _e49 < a; _e49++) {
          var _n67 = _e49 + l * _t59,
              _i56 = _e49 + l * (_t59 + 1),
              _r42 = _e49 + 1 + l * (_t59 + 1),
              _s13 = _e49 + 1 + l * _t59;

          d.push(_n67, _i56, _s13), d.push(_i56, _r42, _s13);
        }
      }

      _this10.setIndex(d), _this10.setAttribute("position", new sn(p, 3)), _this10.setAttribute("normal", new sn(f, 3)), _this10.setAttribute("uv", new sn(m, 2));
      return _this10;
    }

    return ti;
  }(vn);

  var ei = {
    alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
    alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
    alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",
    aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",
    aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
    begin_vertex: "vec3 transformed = vec3( position );",
    beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
    bsdfs: "vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif",
    bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
    clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
    clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
    clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
    clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
    color_fragment: "#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif",
    color_pars_fragment: "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif",
    color_pars_vertex: "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif",
    color_vertex: "#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif",
    common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}",
    cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_maxMipLevel 8.0\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_maxTileSize 256.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\tfloat texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );\n\t\tvec2 f = fract( uv );\n\t\tuv += 0.5 - f;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tif ( mipInt < cubeUV_maxMipLevel ) {\n\t\t\tuv.y += 2.0 * cubeUV_maxTileSize;\n\t\t}\n\t\tuv.y += filterInt * 2.0 * cubeUV_minTileSize;\n\t\tuv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );\n\t\tuv *= texelSize;\n\t\tvec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x += texelSize;\n\t\tvec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.y += texelSize;\n\t\tvec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x -= texelSize;\n\t\tvec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tvec3 tm = mix( tl, tr, f.x );\n\t\tvec3 bm = mix( bl, br, f.x );\n\t\treturn mix( tm, bm, f.y );\n\t}\n\t#define r0 1.0\n\t#define v0 0.339\n\t#define m0 - 2.0\n\t#define r1 0.8\n\t#define v1 0.276\n\t#define m1 - 1.0\n\t#define r4 0.4\n\t#define v4 0.046\n\t#define m4 2.0\n\t#define r5 0.305\n\t#define v5 0.016\n\t#define m5 3.0\n\t#define r6 0.21\n\t#define v6 0.0038\n\t#define m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= r1 ) {\n\t\t\tmip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n\t\t} else if ( roughness >= r4 ) {\n\t\t\tmip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n\t\t} else if ( roughness >= r5 ) {\n\t\t\tmip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n\t\t} else if ( roughness >= r6 ) {\n\t\t\tmip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",
    defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
    displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
    displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
    emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
    emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
    encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
    encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = clamp( floor( D ) / 255.0, 0.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value ) {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",
    envmap_fragment: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\tenvColor = envMapTexelToLinear( envColor );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
    envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
    envmap_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
    envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
    envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",
    envmap_vertex: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
    fog_vertex: "#ifdef USE_FOG\n\tfogDepth = - mvPosition.z;\n#endif",
    fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",
    fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
    fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
    gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn texture2D( gradientMap, coord ).rgb;\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}",
    lightmap_fragment: "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\treflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n#endif",
    lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
    lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry );\n#ifdef DOUBLE_SIDED\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );\n#endif\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif",
    lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",
    lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
    lights_toon_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)",
    lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
    lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
    lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif",
    lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat specularRoughness;\n\tvec3 specularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(\t\t0, 1,\t\t0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
    lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
    lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif",
    lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
    logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
    logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
    logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
    logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
    map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",
    map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
    map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
    map_particle_pars_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
    metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
    metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
    morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n#endif",
    morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifndef USE_MORPHNORMALS\n\t\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\t\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
    morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",
    normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * faceDirection;\n\t\t\tbitangent = bitangent * faceDirection;\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
    normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
    normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n\t\treturn normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n\t}\n#endif",
    clearcoat_normal_fragment_begin: "#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
    clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n\t#endif\n#endif",
    clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
    packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
    premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
    project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
    dithering_fragment: "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
    dithering_pars_fragment: "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
    roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
    roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
    shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t\tf.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t\tf.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
    shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
    shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif",
    shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
    skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
    skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",
    skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
    skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
    specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
    specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
    tonemapping_fragment: "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
    tonemapping_pars_fragment: "#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(\t1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,\t1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,\t1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
    transmissionmap_fragment: "#ifdef USE_TRANSMISSIONMAP\n\ttotalTransmission *= texture2D( transmissionMap, vUv ).r;\n#endif",
    transmissionmap_pars_fragment: "#ifdef USE_TRANSMISSIONMAP\n\tuniform sampler2D transmissionMap;\n#endif",
    uv_pars_fragment: "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",
    uv_pars_vertex: "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",
    uv_vertex: "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
    uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
    uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",
    uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
    worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
    background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
    background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
    cube_frag: "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
    cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
    depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
    depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
    distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
    distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
    equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
    equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
    linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
    linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
    meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
    meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
    meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSMISSION\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSMISSION\n\tuniform float transmission;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <transmissionmap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#ifdef TRANSMISSION\n\t\tfloat totalTransmission = transmission;\n\t#endif\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <transmissionmap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSMISSION\n\t\tdiffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
    normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
    points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
    points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
    shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
    shadow_vert: "#include <common>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
    sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}"
  },
      ni = {
    common: {
      diffuse: {
        value: new je(15658734)
      },
      opacity: {
        value: 1
      },
      map: {
        value: null
      },
      uvTransform: {
        value: new ct()
      },
      uv2Transform: {
        value: new ct()
      },
      alphaMap: {
        value: null
      }
    },
    specularmap: {
      specularMap: {
        value: null
      }
    },
    envmap: {
      envMap: {
        value: null
      },
      flipEnvMap: {
        value: -1
      },
      reflectivity: {
        value: 1
      },
      refractionRatio: {
        value: .98
      },
      maxMipLevel: {
        value: 0
      }
    },
    aomap: {
      aoMap: {
        value: null
      },
      aoMapIntensity: {
        value: 1
      }
    },
    lightmap: {
      lightMap: {
        value: null
      },
      lightMapIntensity: {
        value: 1
      }
    },
    emissivemap: {
      emissiveMap: {
        value: null
      }
    },
    bumpmap: {
      bumpMap: {
        value: null
      },
      bumpScale: {
        value: 1
      }
    },
    normalmap: {
      normalMap: {
        value: null
      },
      normalScale: {
        value: new lt(1, 1)
      }
    },
    displacementmap: {
      displacementMap: {
        value: null
      },
      displacementScale: {
        value: 1
      },
      displacementBias: {
        value: 0
      }
    },
    roughnessmap: {
      roughnessMap: {
        value: null
      }
    },
    metalnessmap: {
      metalnessMap: {
        value: null
      }
    },
    gradientmap: {
      gradientMap: {
        value: null
      }
    },
    fog: {
      fogDensity: {
        value: 25e-5
      },
      fogNear: {
        value: 1
      },
      fogFar: {
        value: 2e3
      },
      fogColor: {
        value: new je(16777215)
      }
    },
    lights: {
      ambientLightColor: {
        value: []
      },
      lightProbe: {
        value: []
      },
      directionalLights: {
        value: [],
        properties: {
          direction: {},
          color: {}
        }
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {}
        }
      },
      directionalShadowMap: {
        value: []
      },
      directionalShadowMatrix: {
        value: []
      },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {}
        }
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {}
        }
      },
      spotShadowMap: {
        value: []
      },
      spotShadowMatrix: {
        value: []
      },
      pointLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          decay: {},
          distance: {}
        }
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {}
        }
      },
      pointShadowMap: {
        value: []
      },
      pointShadowMatrix: {
        value: []
      },
      hemisphereLights: {
        value: [],
        properties: {
          direction: {},
          skyColor: {},
          groundColor: {}
        }
      },
      rectAreaLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          width: {},
          height: {}
        }
      },
      ltc_1: {
        value: null
      },
      ltc_2: {
        value: null
      }
    },
    points: {
      diffuse: {
        value: new je(15658734)
      },
      opacity: {
        value: 1
      },
      size: {
        value: 1
      },
      scale: {
        value: 1
      },
      map: {
        value: null
      },
      alphaMap: {
        value: null
      },
      uvTransform: {
        value: new ct()
      }
    },
    sprite: {
      diffuse: {
        value: new je(15658734)
      },
      opacity: {
        value: 1
      },
      center: {
        value: new lt(.5, .5)
      },
      rotation: {
        value: 0
      },
      map: {
        value: null
      },
      alphaMap: {
        value: null
      },
      uvTransform: {
        value: new ct()
      }
    }
  },
      ii = {
    basic: {
      uniforms: Hn([ni.common, ni.specularmap, ni.envmap, ni.aomap, ni.lightmap, ni.fog]),
      vertexShader: ei.meshbasic_vert,
      fragmentShader: ei.meshbasic_frag
    },
    lambert: {
      uniforms: Hn([ni.common, ni.specularmap, ni.envmap, ni.aomap, ni.lightmap, ni.emissivemap, ni.fog, ni.lights, {
        emissive: {
          value: new je(0)
        }
      }]),
      vertexShader: ei.meshlambert_vert,
      fragmentShader: ei.meshlambert_frag
    },
    phong: {
      uniforms: Hn([ni.common, ni.specularmap, ni.envmap, ni.aomap, ni.lightmap, ni.emissivemap, ni.bumpmap, ni.normalmap, ni.displacementmap, ni.fog, ni.lights, {
        emissive: {
          value: new je(0)
        },
        specular: {
          value: new je(1118481)
        },
        shininess: {
          value: 30
        }
      }]),
      vertexShader: ei.meshphong_vert,
      fragmentShader: ei.meshphong_frag
    },
    standard: {
      uniforms: Hn([ni.common, ni.envmap, ni.aomap, ni.lightmap, ni.emissivemap, ni.bumpmap, ni.normalmap, ni.displacementmap, ni.roughnessmap, ni.metalnessmap, ni.fog, ni.lights, {
        emissive: {
          value: new je(0)
        },
        roughness: {
          value: 1
        },
        metalness: {
          value: 0
        },
        envMapIntensity: {
          value: 1
        }
      }]),
      vertexShader: ei.meshphysical_vert,
      fragmentShader: ei.meshphysical_frag
    },
    toon: {
      uniforms: Hn([ni.common, ni.aomap, ni.lightmap, ni.emissivemap, ni.bumpmap, ni.normalmap, ni.displacementmap, ni.gradientmap, ni.fog, ni.lights, {
        emissive: {
          value: new je(0)
        }
      }]),
      vertexShader: ei.meshtoon_vert,
      fragmentShader: ei.meshtoon_frag
    },
    matcap: {
      uniforms: Hn([ni.common, ni.bumpmap, ni.normalmap, ni.displacementmap, ni.fog, {
        matcap: {
          value: null
        }
      }]),
      vertexShader: ei.meshmatcap_vert,
      fragmentShader: ei.meshmatcap_frag
    },
    points: {
      uniforms: Hn([ni.points, ni.fog]),
      vertexShader: ei.points_vert,
      fragmentShader: ei.points_frag
    },
    dashed: {
      uniforms: Hn([ni.common, ni.fog, {
        scale: {
          value: 1
        },
        dashSize: {
          value: 1
        },
        totalSize: {
          value: 2
        }
      }]),
      vertexShader: ei.linedashed_vert,
      fragmentShader: ei.linedashed_frag
    },
    depth: {
      uniforms: Hn([ni.common, ni.displacementmap]),
      vertexShader: ei.depth_vert,
      fragmentShader: ei.depth_frag
    },
    normal: {
      uniforms: Hn([ni.common, ni.bumpmap, ni.normalmap, ni.displacementmap, {
        opacity: {
          value: 1
        }
      }]),
      vertexShader: ei.normal_vert,
      fragmentShader: ei.normal_frag
    },
    sprite: {
      uniforms: Hn([ni.sprite, ni.fog]),
      vertexShader: ei.sprite_vert,
      fragmentShader: ei.sprite_frag
    },
    background: {
      uniforms: {
        uvTransform: {
          value: new ct()
        },
        t2D: {
          value: null
        }
      },
      vertexShader: ei.background_vert,
      fragmentShader: ei.background_frag
    },
    cube: {
      uniforms: Hn([ni.envmap, {
        opacity: {
          value: 1
        }
      }]),
      vertexShader: ei.cube_vert,
      fragmentShader: ei.cube_frag
    },
    equirect: {
      uniforms: {
        tEquirect: {
          value: null
        }
      },
      vertexShader: ei.equirect_vert,
      fragmentShader: ei.equirect_frag
    },
    distanceRGBA: {
      uniforms: Hn([ni.common, ni.displacementmap, {
        referencePosition: {
          value: new xt()
        },
        nearDistance: {
          value: 1
        },
        farDistance: {
          value: 1e3
        }
      }]),
      vertexShader: ei.distanceRGBA_vert,
      fragmentShader: ei.distanceRGBA_frag
    },
    shadow: {
      uniforms: Hn([ni.lights, ni.fog, {
        color: {
          value: new je(0)
        },
        opacity: {
          value: 1
        }
      }]),
      vertexShader: ei.shadow_vert,
      fragmentShader: ei.shadow_frag
    }
  };

  function ri(t, e, n, i, r) {
    var s = new je(0);
    var a,
        o,
        c = 0,
        h = null,
        u = 0,
        d = null;

    function p(t, e) {
      n.buffers.color.setClear(t.r, t.g, t.b, e, r);
    }

    return {
      getClearColor: function getClearColor() {
        return s;
      },
      setClearColor: function setClearColor(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        s.set(t), c = e, p(s, c);
      },
      getClearAlpha: function getClearAlpha() {
        return c;
      },
      setClearAlpha: function setClearAlpha(t) {
        c = t, p(s, c);
      },
      render: function render(n, r, f, m) {
        var g = !0 === r.isScene ? r.background : null;
        g && g.isTexture && (g = e.get(g));
        var v = t.xr,
            y = v.getSession && v.getSession();
        y && "additive" === y.environmentBlendMode && (g = null), null === g ? p(s, c) : g && g.isColor && (p(g, 1), m = !0), (t.autoClear || m) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), g && (g.isCubeTexture || g.mapping === l) ? (void 0 === o && (o = new Bn(new zn(1, 1, 1), new Gn({
          name: "BackgroundCubeMaterial",
          uniforms: Fn(ii.cube.uniforms),
          vertexShader: ii.cube.vertexShader,
          fragmentShader: ii.cube.fragmentShader,
          side: 1,
          depthTest: !1,
          depthWrite: !1,
          fog: !1
        })), o.geometry.deleteAttribute("normal"), o.geometry.deleteAttribute("uv"), o.onBeforeRender = function (t, e, n) {
          this.matrixWorld.copyPosition(n.matrixWorld);
        }, Object.defineProperty(o.material, "envMap", {
          get: function get() {
            return this.uniforms.envMap.value;
          }
        }), i.update(o)), o.material.uniforms.envMap.value = g, o.material.uniforms.flipEnvMap.value = g.isCubeTexture && g._needsFlipEnvMap ? -1 : 1, h === g && u === g.version && d === t.toneMapping || (o.material.needsUpdate = !0, h = g, u = g.version, d = t.toneMapping), n.unshift(o, o.geometry, o.material, 0, 0, null)) : g && g.isTexture && (void 0 === a && (a = new Bn(new ti(2, 2), new Gn({
          name: "BackgroundMaterial",
          uniforms: Fn(ii.background.uniforms),
          vertexShader: ii.background.vertexShader,
          fragmentShader: ii.background.fragmentShader,
          side: 0,
          depthTest: !1,
          depthWrite: !1,
          fog: !1
        })), a.geometry.deleteAttribute("normal"), Object.defineProperty(a.material, "map", {
          get: function get() {
            return this.uniforms.t2D.value;
          }
        }), i.update(a)), a.material.uniforms.t2D.value = g, !0 === g.matrixAutoUpdate && g.updateMatrix(), a.material.uniforms.uvTransform.value.copy(g.matrix), h === g && u === g.version && d === t.toneMapping || (a.material.needsUpdate = !0, h = g, u = g.version, d = t.toneMapping), n.unshift(a, a.geometry, a.material, 0, 0, null));
      }
    };
  }

  function si(t, e, n, i) {
    var r = t.getParameter(34921),
        s = i.isWebGL2 ? null : e.get("OES_vertex_array_object"),
        a = i.isWebGL2 || null !== s,
        o = {},
        l = d(null);
    var c = l;

    function h(e) {
      return i.isWebGL2 ? t.bindVertexArray(e) : s.bindVertexArrayOES(e);
    }

    function u(e) {
      return i.isWebGL2 ? t.deleteVertexArray(e) : s.deleteVertexArrayOES(e);
    }

    function d(t) {
      var e = [],
          n = [],
          i = [];

      for (var _t60 = 0; _t60 < r; _t60++) {
        e[_t60] = 0, n[_t60] = 0, i[_t60] = 0;
      }

      return {
        geometry: null,
        program: null,
        wireframe: !1,
        newAttributes: e,
        enabledAttributes: n,
        attributeDivisors: i,
        object: t,
        attributes: {},
        index: null
      };
    }

    function p() {
      var t = c.newAttributes;

      for (var _e50 = 0, _n68 = t.length; _e50 < _n68; _e50++) {
        t[_e50] = 0;
      }
    }

    function f(t) {
      m(t, 0);
    }

    function m(n, r) {
      var s = c.newAttributes,
          a = c.enabledAttributes,
          o = c.attributeDivisors;

      if (s[n] = 1, 0 === a[n] && (t.enableVertexAttribArray(n), a[n] = 1), o[n] !== r) {
        (i.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n, r), o[n] = r;
      }
    }

    function g() {
      var e = c.newAttributes,
          n = c.enabledAttributes;

      for (var _i57 = 0, _r43 = n.length; _i57 < _r43; _i57++) {
        n[_i57] !== e[_i57] && (t.disableVertexAttribArray(_i57), n[_i57] = 0);
      }
    }

    function v(e, n, r, s, a, o) {
      !0 !== i.isWebGL2 || 5124 !== r && 5125 !== r ? t.vertexAttribPointer(e, n, r, s, a, o) : t.vertexAttribIPointer(e, n, r, a, o);
    }

    function y() {
      x(), c !== l && (c = l, h(c.object));
    }

    function x() {
      l.geometry = null, l.program = null, l.wireframe = !1;
    }

    return {
      setup: function setup(r, l, u, y, x) {
        var _ = !1;

        if (a) {
          var _e51 = function (e, n, r) {
            var a = !0 === r.wireframe;
            var l = o[e.id];
            void 0 === l && (l = {}, o[e.id] = l);
            var c = l[n.id];
            void 0 === c && (c = {}, l[n.id] = c);
            var h = c[a];
            void 0 === h && (h = d(i.isWebGL2 ? t.createVertexArray() : s.createVertexArrayOES()), c[a] = h);
            return h;
          }(y, u, l);

          c !== _e51 && (c = _e51, h(c.object)), _ = function (t, e) {
            var n = c.attributes,
                i = t.attributes;
            var r = 0;

            for (var _t61 in i) {
              var _e52 = n[_t61],
                  _s14 = i[_t61];
              if (void 0 === _e52) return !0;
              if (_e52.attribute !== _s14) return !0;
              if (_e52.data !== _s14.data) return !0;
              r++;
            }

            return c.attributesNum !== r || c.index !== e;
          }(y, x), _ && function (t, e) {
            var n = {},
                i = t.attributes;
            var r = 0;

            for (var _t62 in i) {
              var _e53 = i[_t62],
                  _s15 = {};
              _s15.attribute = _e53, _e53.data && (_s15.data = _e53.data), n[_t62] = _s15, r++;
            }

            c.attributes = n, c.attributesNum = r, c.index = e;
          }(y, x);
        } else {
          var _t63 = !0 === l.wireframe;

          c.geometry === y.id && c.program === u.id && c.wireframe === _t63 || (c.geometry = y.id, c.program = u.id, c.wireframe = _t63, _ = !0);
        }

        !0 === r.isInstancedMesh && (_ = !0), null !== x && n.update(x, 34963), _ && (!function (r, s, a, o) {
          if (!1 === i.isWebGL2 && (r.isInstancedMesh || o.isInstancedBufferGeometry) && null === e.get("ANGLE_instanced_arrays")) return;
          p();
          var l = o.attributes,
              c = a.getAttributes(),
              h = s.defaultAttributeValues;

          for (var _e54 in c) {
            var _i58 = c[_e54];

            if (_i58 >= 0) {
              var _s16 = l[_e54];

              if (void 0 !== _s16) {
                var _e55 = _s16.normalized,
                    _r44 = _s16.itemSize,
                    _a13 = n.get(_s16);

                if (void 0 === _a13) continue;
                var _l11 = _a13.buffer,
                    _c8 = _a13.type,
                    _h6 = _a13.bytesPerElement;

                if (_s16.isInterleavedBufferAttribute) {
                  var _n69 = _s16.data,
                      _a14 = _n69.stride,
                      _u7 = _s16.offset;
                  _n69 && _n69.isInstancedInterleavedBuffer ? (m(_i58, _n69.meshPerAttribute), void 0 === o._maxInstanceCount && (o._maxInstanceCount = _n69.meshPerAttribute * _n69.count)) : f(_i58), t.bindBuffer(34962, _l11), v(_i58, _r44, _c8, _e55, _a14 * _h6, _u7 * _h6);
                } else _s16.isInstancedBufferAttribute ? (m(_i58, _s16.meshPerAttribute), void 0 === o._maxInstanceCount && (o._maxInstanceCount = _s16.meshPerAttribute * _s16.count)) : f(_i58), t.bindBuffer(34962, _l11), v(_i58, _r44, _c8, _e55, 0, 0);
              } else if ("instanceMatrix" === _e54) {
                var _e56 = n.get(r.instanceMatrix);

                if (void 0 === _e56) continue;
                var _s17 = _e56.buffer,
                    _a15 = _e56.type;
                m(_i58 + 0, 1), m(_i58 + 1, 1), m(_i58 + 2, 1), m(_i58 + 3, 1), t.bindBuffer(34962, _s17), t.vertexAttribPointer(_i58 + 0, 4, _a15, !1, 64, 0), t.vertexAttribPointer(_i58 + 1, 4, _a15, !1, 64, 16), t.vertexAttribPointer(_i58 + 2, 4, _a15, !1, 64, 32), t.vertexAttribPointer(_i58 + 3, 4, _a15, !1, 64, 48);
              } else if ("instanceColor" === _e54) {
                var _e57 = n.get(r.instanceColor);

                if (void 0 === _e57) continue;
                var _s18 = _e57.buffer,
                    _a16 = _e57.type;
                m(_i58, 1), t.bindBuffer(34962, _s18), t.vertexAttribPointer(_i58, 3, _a16, !1, 12, 0);
              } else if (void 0 !== h) {
                var _n70 = h[_e54];
                if (void 0 !== _n70) switch (_n70.length) {
                  case 2:
                    t.vertexAttrib2fv(_i58, _n70);
                    break;

                  case 3:
                    t.vertexAttrib3fv(_i58, _n70);
                    break;

                  case 4:
                    t.vertexAttrib4fv(_i58, _n70);
                    break;

                  default:
                    t.vertexAttrib1fv(_i58, _n70);
                }
              }
            }
          }

          g();
        }(r, l, u, y), null !== x && t.bindBuffer(34963, n.get(x).buffer));
      },
      reset: y,
      resetDefaultState: x,
      dispose: function dispose() {
        y();

        for (var _t64 in o) {
          var _e58 = o[_t64];

          for (var _t65 in _e58) {
            var _n71 = _e58[_t65];

            for (var _t66 in _n71) {
              u(_n71[_t66].object), delete _n71[_t66];
            }

            delete _e58[_t65];
          }

          delete o[_t64];
        }
      },
      releaseStatesOfGeometry: function releaseStatesOfGeometry(t) {
        if (void 0 === o[t.id]) return;
        var e = o[t.id];

        for (var _t67 in e) {
          var _n72 = e[_t67];

          for (var _t68 in _n72) {
            u(_n72[_t68].object), delete _n72[_t68];
          }

          delete e[_t67];
        }

        delete o[t.id];
      },
      releaseStatesOfProgram: function releaseStatesOfProgram(t) {
        for (var _e59 in o) {
          var _n73 = o[_e59];
          if (void 0 === _n73[t.id]) continue;
          var _i59 = _n73[t.id];

          for (var _t69 in _i59) {
            u(_i59[_t69].object), delete _i59[_t69];
          }

          delete _n73[t.id];
        }
      },
      initAttributes: p,
      enableAttribute: f,
      disableUnusedAttributes: g
    };
  }

  function ai(t, e, n, i) {
    var r = i.isWebGL2;
    var s;
    this.setMode = function (t) {
      s = t;
    }, this.render = function (e, i) {
      t.drawArrays(s, e, i), n.update(i, s, 1);
    }, this.renderInstances = function (i, a, o) {
      if (0 === o) return;
      var l, c;
      if (r) l = t, c = "drawArraysInstanced";else if (l = e.get("ANGLE_instanced_arrays"), c = "drawArraysInstancedANGLE", null === l) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      l[c](s, i, a, o), n.update(a, s, o);
    };
  }

  function oi(t, e, n) {
    var i;

    function r(e) {
      if ("highp" === e) {
        if (t.getShaderPrecisionFormat(35633, 36338).precision > 0 && t.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
        e = "mediump";
      }

      return "mediump" === e && t.getShaderPrecisionFormat(35633, 36337).precision > 0 && t.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
    }

    var s = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext || "undefined" != typeof WebGL2ComputeRenderingContext && t instanceof WebGL2ComputeRenderingContext;
    var a = void 0 !== n.precision ? n.precision : "highp";
    var o = r(a);
    o !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", o, "instead."), a = o);
    var l = !0 === n.logarithmicDepthBuffer,
        c = t.getParameter(34930),
        h = t.getParameter(35660),
        u = t.getParameter(3379),
        d = t.getParameter(34076),
        p = t.getParameter(34921),
        f = t.getParameter(36347),
        m = t.getParameter(36348),
        g = t.getParameter(36349),
        v = h > 0,
        y = s || e.has("OES_texture_float");
    return {
      isWebGL2: s,
      getMaxAnisotropy: function getMaxAnisotropy() {
        if (void 0 !== i) return i;

        if (!0 === e.has("EXT_texture_filter_anisotropic")) {
          var _n74 = e.get("EXT_texture_filter_anisotropic");

          i = t.getParameter(_n74.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
        } else i = 0;

        return i;
      },
      getMaxPrecision: r,
      precision: a,
      logarithmicDepthBuffer: l,
      maxTextures: c,
      maxVertexTextures: h,
      maxTextureSize: u,
      maxCubemapSize: d,
      maxAttributes: p,
      maxVertexUniforms: f,
      maxVaryings: m,
      maxFragmentUniforms: g,
      vertexTextures: v,
      floatFragmentTextures: y,
      floatVertexTextures: v && y,
      maxSamples: s ? t.getParameter(36183) : 0
    };
  }

  function li(t) {
    var e = this;
    var n = null,
        i = 0,
        r = !1,
        s = !1;
    var a = new Te(),
        o = new ct(),
        l = {
      value: null,
      needsUpdate: !1
    };

    function c() {
      l.value !== n && (l.value = n, l.needsUpdate = i > 0), e.numPlanes = i, e.numIntersection = 0;
    }

    function h(t, n, i, r) {
      var s = null !== t ? t.length : 0;
      var c = null;

      if (0 !== s) {
        if (c = l.value, !0 !== r || null === c) {
          var _e60 = i + 4 * s,
              _r45 = n.matrixWorldInverse;

          o.getNormalMatrix(_r45), (null === c || c.length < _e60) && (c = new Float32Array(_e60));

          for (var _e61 = 0, _n75 = i; _e61 !== s; ++_e61, _n75 += 4) {
            a.copy(t[_e61]).applyMatrix4(_r45, o), a.normal.toArray(c, _n75), c[_n75 + 3] = a.constant;
          }
        }

        l.value = c, l.needsUpdate = !0;
      }

      return e.numPlanes = s, e.numIntersection = 0, c;
    }

    this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function (t, e, s) {
      var a = 0 !== t.length || e || 0 !== i || r;
      return r = e, n = h(t, s, 0), i = t.length, a;
    }, this.beginShadows = function () {
      s = !0, h(null);
    }, this.endShadows = function () {
      s = !1, c();
    }, this.setState = function (e, a, o) {
      var u = e.clippingPlanes,
          d = e.clipIntersection,
          p = e.clipShadows,
          f = t.get(e);
      if (!r || null === u || 0 === u.length || s && !p) s ? h(null) : c();else {
        var _t70 = s ? 0 : i,
            _e62 = 4 * _t70;

        var _r46 = f.clippingState || null;

        l.value = _r46, _r46 = h(u, a, _e62, o);

        for (var _t71 = 0; _t71 !== _e62; ++_t71) {
          _r46[_t71] = n[_t71];
        }

        f.clippingState = _r46, this.numIntersection = d ? this.numPlanes : 0, this.numPlanes += _t70;
      }
    };
  }

  function ci(t) {
    var e = new WeakMap();

    function n(t, e) {
      return e === a ? t.mapping = r : e === o && (t.mapping = s), t;
    }

    function i(t) {
      var n = t.target;
      n.removeEventListener("dispose", i);
      var r = e.get(n);
      void 0 !== r && (e.delete(n), r.dispose());
    }

    return {
      get: function get(r) {
        if (r && r.isTexture) {
          var _s19 = r.mapping;

          if (_s19 === a || _s19 === o) {
            if (e.has(r)) {
              return n(e.get(r).texture, r.mapping);
            }

            {
              var _s20 = r.image;

              if (_s20 && _s20.height > 0) {
                var _a17 = t.getRenderTarget(),
                    _o11 = new Xn(_s20.height / 2);

                return _o11.fromEquirectangularTexture(t, r), e.set(r, _o11), t.setRenderTarget(_a17), r.addEventListener("dispose", i), n(_o11.texture, r.mapping);
              }

              return null;
            }
          }
        }

        return r;
      },
      dispose: function dispose() {
        e = new WeakMap();
      }
    };
  }

  function hi(t) {
    var e = {};

    function n(n) {
      if (void 0 !== e[n]) return e[n];
      var i;

      switch (n) {
        case "WEBGL_depth_texture":
          i = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
          break;

        case "EXT_texture_filter_anisotropic":
          i = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
          break;

        case "WEBGL_compressed_texture_s3tc":
          i = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
          break;

        case "WEBGL_compressed_texture_pvrtc":
          i = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
          break;

        default:
          i = t.getExtension(n);
      }

      return e[n] = i, i;
    }

    return {
      has: function has(t) {
        return null !== n(t);
      },
      init: function init(t) {
        t.isWebGL2 ? n("EXT_color_buffer_float") : (n("WEBGL_depth_texture"), n("OES_texture_float"), n("OES_texture_half_float"), n("OES_texture_half_float_linear"), n("OES_standard_derivatives"), n("OES_element_index_uint"), n("OES_vertex_array_object"), n("ANGLE_instanced_arrays")), n("OES_texture_float_linear"), n("EXT_color_buffer_half_float");
      },
      get: function get(t) {
        var e = n(t);
        return null === e && console.warn("THREE.WebGLRenderer: " + t + " extension not supported."), e;
      }
    };
  }

  function ui(t, e, n, i) {
    var r = {},
        s = new WeakMap();

    function a(t) {
      var o = t.target;
      null !== o.index && e.remove(o.index);

      for (var _t72 in o.attributes) {
        e.remove(o.attributes[_t72]);
      }

      o.removeEventListener("dispose", a), delete r[o.id];
      var l = s.get(o);
      l && (e.remove(l), s.delete(o)), i.releaseStatesOfGeometry(o), !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount, n.memory.geometries--;
    }

    function o(t) {
      var n = [],
          i = t.index,
          r = t.attributes.position;
      var a = 0;

      if (null !== i) {
        var _t73 = i.array;
        a = i.version;

        for (var _e63 = 0, _i60 = _t73.length; _e63 < _i60; _e63 += 3) {
          var _i61 = _t73[_e63 + 0],
              _r47 = _t73[_e63 + 1],
              _s21 = _t73[_e63 + 2];
          n.push(_i61, _r47, _r47, _s21, _s21, _i61);
        }
      } else {
        var _t74 = r.array;
        a = r.version;

        for (var _e64 = 0, _i62 = _t74.length / 3 - 1; _e64 < _i62; _e64 += 3) {
          var _t75 = _e64 + 0,
              _i63 = _e64 + 1,
              _r48 = _e64 + 2;

          n.push(_t75, _i63, _i63, _r48, _r48, _t75);
        }
      }

      var o = new (on(n) > 65535 ? nn : tn)(n, 1);
      o.version = a;
      var l = s.get(t);
      l && e.remove(l), s.set(t, o);
    }

    return {
      get: function get(t, e) {
        return !0 === r[e.id] || (e.addEventListener("dispose", a), r[e.id] = !0, n.memory.geometries++), e;
      },
      update: function update(t) {
        var n = t.attributes;

        for (var _t76 in n) {
          e.update(n[_t76], 34962);
        }

        var i = t.morphAttributes;

        for (var _t77 in i) {
          var _n76 = i[_t77];

          for (var _t78 = 0, _i64 = _n76.length; _t78 < _i64; _t78++) {
            e.update(_n76[_t78], 34962);
          }
        }
      },
      getWireframeAttribute: function getWireframeAttribute(t) {
        var e = s.get(t);

        if (e) {
          var _n77 = t.index;
          null !== _n77 && e.version < _n77.version && o(t);
        } else o(t);

        return s.get(t);
      }
    };
  }

  function di(t, e, n, i) {
    var r = i.isWebGL2;
    var s, a, o;
    this.setMode = function (t) {
      s = t;
    }, this.setIndex = function (t) {
      a = t.type, o = t.bytesPerElement;
    }, this.render = function (e, i) {
      t.drawElements(s, i, a, e * o), n.update(i, s, 1);
    }, this.renderInstances = function (i, l, c) {
      if (0 === c) return;
      var h, u;
      if (r) h = t, u = "drawElementsInstanced";else if (h = e.get("ANGLE_instanced_arrays"), u = "drawElementsInstancedANGLE", null === h) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      h[u](s, l, a, i * o, c), n.update(l, s, c);
    };
  }

  function pi(t) {
    var e = {
      frame: 0,
      calls: 0,
      triangles: 0,
      points: 0,
      lines: 0
    };
    return {
      memory: {
        geometries: 0,
        textures: 0
      },
      render: e,
      programs: null,
      autoReset: !0,
      reset: function reset() {
        e.frame++, e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0;
      },
      update: function update(t, n, i) {
        switch (e.calls++, n) {
          case 4:
            e.triangles += i * (t / 3);
            break;

          case 1:
            e.lines += i * (t / 2);
            break;

          case 3:
            e.lines += i * (t - 1);
            break;

          case 2:
            e.lines += i * t;
            break;

          case 0:
            e.points += i * t;
            break;

          default:
            console.error("THREE.WebGLInfo: Unknown draw mode:", n);
        }
      }
    };
  }

  function fi(t, e) {
    return t[0] - e[0];
  }

  function mi(t, e) {
    return Math.abs(e[1]) - Math.abs(t[1]);
  }

  function gi(t) {
    var e = {},
        n = new Float32Array(8),
        i = [];

    for (var _t79 = 0; _t79 < 8; _t79++) {
      i[_t79] = [_t79, 0];
    }

    return {
      update: function update(r, s, a, o) {
        var l = r.morphTargetInfluences,
            c = void 0 === l ? 0 : l.length;
        var h = e[s.id];

        if (void 0 === h) {
          h = [];

          for (var _t80 = 0; _t80 < c; _t80++) {
            h[_t80] = [_t80, 0];
          }

          e[s.id] = h;
        }

        for (var _t81 = 0; _t81 < c; _t81++) {
          var _e65 = h[_t81];
          _e65[0] = _t81, _e65[1] = l[_t81];
        }

        h.sort(mi);

        for (var _t82 = 0; _t82 < 8; _t82++) {
          _t82 < c && h[_t82][1] ? (i[_t82][0] = h[_t82][0], i[_t82][1] = h[_t82][1]) : (i[_t82][0] = Number.MAX_SAFE_INTEGER, i[_t82][1] = 0);
        }

        i.sort(fi);
        var u = a.morphTargets && s.morphAttributes.position,
            d = a.morphNormals && s.morphAttributes.normal;
        var p = 0;

        for (var _t83 = 0; _t83 < 8; _t83++) {
          var _e66 = i[_t83],
              _r49 = _e66[0],
              _a18 = _e66[1];
          _r49 !== Number.MAX_SAFE_INTEGER && _a18 ? (u && s.getAttribute("morphTarget" + _t83) !== u[_r49] && s.setAttribute("morphTarget" + _t83, u[_r49]), d && s.getAttribute("morphNormal" + _t83) !== d[_r49] && s.setAttribute("morphNormal" + _t83, d[_r49]), n[_t83] = _a18, p += _a18) : (u && !0 === s.hasAttribute("morphTarget" + _t83) && s.deleteAttribute("morphTarget" + _t83), d && !0 === s.hasAttribute("morphNormal" + _t83) && s.deleteAttribute("morphNormal" + _t83), n[_t83] = 0);
        }

        var f = s.morphTargetsRelative ? 1 : 1 - p;
        o.getUniforms().setValue(t, "morphTargetBaseInfluence", f), o.getUniforms().setValue(t, "morphTargetInfluences", n);
      }
    };
  }

  function vi(t, e, n, i) {
    var r = new WeakMap();

    function s(t) {
      var e = t.target;
      e.removeEventListener("dispose", s), n.remove(e.instanceMatrix), null !== e.instanceColor && n.remove(e.instanceColor);
    }

    return {
      update: function update(t) {
        var a = i.render.frame,
            o = t.geometry,
            l = e.get(t, o);
        return r.get(l) !== a && (e.update(l), r.set(l, a)), t.isInstancedMesh && (!1 === t.hasEventListener("dispose", s) && t.addEventListener("dispose", s), n.update(t.instanceMatrix, 34962), null !== t.instanceColor && n.update(t.instanceColor, 34962)), l;
      },
      dispose: function dispose() {
        r = new WeakMap();
      }
    };
  }

  ii.physical = {
    uniforms: Hn([ii.standard.uniforms, {
      clearcoat: {
        value: 0
      },
      clearcoatMap: {
        value: null
      },
      clearcoatRoughness: {
        value: 0
      },
      clearcoatRoughnessMap: {
        value: null
      },
      clearcoatNormalScale: {
        value: new lt(1, 1)
      },
      clearcoatNormalMap: {
        value: null
      },
      sheen: {
        value: new je(0)
      },
      transmission: {
        value: 0
      },
      transmissionMap: {
        value: null
      }
    }]),
    vertexShader: ei.meshphysical_vert,
    fragmentShader: ei.meshphysical_frag
  };

  var yi = /*#__PURE__*/function (_pt3) {
    _inherits(yi, _pt3);

    var _super11 = _createSuper(yi);

    function yi() {
      var _this11;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

      _classCallCheck(this, yi);

      _this11 = _super11.call(this, null), _this11.image = {
        data: t,
        width: e,
        height: n,
        depth: i
      }, _this11.magFilter = p, _this11.minFilter = p, _this11.wrapR = u, _this11.generateMipmaps = !1, _this11.flipY = !1, _this11.needsUpdate = !0;
      return _this11;
    }

    return yi;
  }(pt);

  yi.prototype.isDataTexture2DArray = !0;

  var xi = /*#__PURE__*/function (_pt4) {
    _inherits(xi, _pt4);

    var _super12 = _createSuper(xi);

    function xi() {
      var _this12;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

      _classCallCheck(this, xi);

      _this12 = _super12.call(this, null), _this12.image = {
        data: t,
        width: e,
        height: n,
        depth: i
      }, _this12.magFilter = p, _this12.minFilter = p, _this12.wrapR = u, _this12.generateMipmaps = !1, _this12.flipY = !1, _this12.needsUpdate = !0;
      return _this12;
    }

    return xi;
  }(pt);

  xi.prototype.isDataTexture3D = !0;

  var _i = new pt(),
      bi = new yi(),
      wi = new xi(),
      Mi = new qn(),
      Si = [],
      Ti = [],
      Ei = new Float32Array(16),
      Ai = new Float32Array(9),
      Li = new Float32Array(4);

  function Ri(t, e, n) {
    var i = t[0];
    if (i <= 0 || i > 0) return t;
    var r = e * n;
    var s = Si[r];

    if (void 0 === s && (s = new Float32Array(r), Si[r] = s), 0 !== e) {
      i.toArray(s, 0);

      for (var _i65 = 1, _r50 = 0; _i65 !== e; ++_i65) {
        _r50 += n, t[_i65].toArray(s, _r50);
      }
    }

    return s;
  }

  function Ci(t, e) {
    if (t.length !== e.length) return !1;

    for (var _n78 = 0, _i66 = t.length; _n78 < _i66; _n78++) {
      if (t[_n78] !== e[_n78]) return !1;
    }

    return !0;
  }

  function Pi(t, e) {
    for (var _n79 = 0, _i67 = e.length; _n79 < _i67; _n79++) {
      t[_n79] = e[_n79];
    }
  }

  function Di(t, e) {
    var n = Ti[e];
    void 0 === n && (n = new Int32Array(e), Ti[e] = n);

    for (var _i68 = 0; _i68 !== e; ++_i68) {
      n[_i68] = t.allocateTextureUnit();
    }

    return n;
  }

  function Ii(t, e) {
    var n = this.cache;
    n[0] !== e && (t.uniform1f(this.addr, e), n[0] = e);
  }

  function Ni(t, e) {
    var n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y || (t.uniform2f(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y);else {
      if (Ci(n, e)) return;
      t.uniform2fv(this.addr, e), Pi(n, e);
    }
  }

  function Bi(t, e) {
    var n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z);else if (void 0 !== e.r) n[0] === e.r && n[1] === e.g && n[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b), n[0] = e.r, n[1] = e.g, n[2] = e.b);else {
      if (Ci(n, e)) return;
      t.uniform3fv(this.addr, e), Pi(n, e);
    }
  }

  function Oi(t, e) {
    var n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w);else {
      if (Ci(n, e)) return;
      t.uniform4fv(this.addr, e), Pi(n, e);
    }
  }

  function zi(t, e) {
    var n = this.cache,
        i = e.elements;

    if (void 0 === i) {
      if (Ci(n, e)) return;
      t.uniformMatrix2fv(this.addr, !1, e), Pi(n, e);
    } else {
      if (Ci(n, i)) return;
      Li.set(i), t.uniformMatrix2fv(this.addr, !1, Li), Pi(n, i);
    }
  }

  function Fi(t, e) {
    var n = this.cache,
        i = e.elements;

    if (void 0 === i) {
      if (Ci(n, e)) return;
      t.uniformMatrix3fv(this.addr, !1, e), Pi(n, e);
    } else {
      if (Ci(n, i)) return;
      Ai.set(i), t.uniformMatrix3fv(this.addr, !1, Ai), Pi(n, i);
    }
  }

  function Hi(t, e) {
    var n = this.cache,
        i = e.elements;

    if (void 0 === i) {
      if (Ci(n, e)) return;
      t.uniformMatrix4fv(this.addr, !1, e), Pi(n, e);
    } else {
      if (Ci(n, i)) return;
      Ei.set(i), t.uniformMatrix4fv(this.addr, !1, Ei), Pi(n, i);
    }
  }

  function Ui(t, e) {
    var n = this.cache;
    n[0] !== e && (t.uniform1i(this.addr, e), n[0] = e);
  }

  function Gi(t, e) {
    var n = this.cache;
    Ci(n, e) || (t.uniform2iv(this.addr, e), Pi(n, e));
  }

  function ki(t, e) {
    var n = this.cache;
    Ci(n, e) || (t.uniform3iv(this.addr, e), Pi(n, e));
  }

  function Vi(t, e) {
    var n = this.cache;
    Ci(n, e) || (t.uniform4iv(this.addr, e), Pi(n, e));
  }

  function Wi(t, e) {
    var n = this.cache;
    n[0] !== e && (t.uniform1ui(this.addr, e), n[0] = e);
  }

  function ji(t, e) {
    var n = this.cache;
    Ci(n, e) || (t.uniform2uiv(this.addr, e), Pi(n, e));
  }

  function qi(t, e) {
    var n = this.cache;
    Ci(n, e) || (t.uniform3uiv(this.addr, e), Pi(n, e));
  }

  function Xi(t, e) {
    var n = this.cache;
    Ci(n, e) || (t.uniform4uiv(this.addr, e), Pi(n, e));
  }

  function Yi(t, e, n) {
    var i = this.cache,
        r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.safeSetTexture2D(e || _i, r);
  }

  function Zi(t, e, n) {
    var i = this.cache,
        r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture3D(e || wi, r);
  }

  function Ji(t, e, n) {
    var i = this.cache,
        r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.safeSetTextureCube(e || Mi, r);
  }

  function Qi(t, e, n) {
    var i = this.cache,
        r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture2DArray(e || bi, r);
  }

  function Ki(t, e) {
    t.uniform1fv(this.addr, e);
  }

  function $i(t, e) {
    var n = Ri(e, this.size, 2);
    t.uniform2fv(this.addr, n);
  }

  function tr(t, e) {
    var n = Ri(e, this.size, 3);
    t.uniform3fv(this.addr, n);
  }

  function er(t, e) {
    var n = Ri(e, this.size, 4);
    t.uniform4fv(this.addr, n);
  }

  function nr(t, e) {
    var n = Ri(e, this.size, 4);
    t.uniformMatrix2fv(this.addr, !1, n);
  }

  function ir(t, e) {
    var n = Ri(e, this.size, 9);
    t.uniformMatrix3fv(this.addr, !1, n);
  }

  function rr(t, e) {
    var n = Ri(e, this.size, 16);
    t.uniformMatrix4fv(this.addr, !1, n);
  }

  function sr(t, e) {
    t.uniform1iv(this.addr, e);
  }

  function ar(t, e) {
    t.uniform2iv(this.addr, e);
  }

  function or(t, e) {
    t.uniform3iv(this.addr, e);
  }

  function lr(t, e) {
    t.uniform4iv(this.addr, e);
  }

  function cr(t, e) {
    t.uniform1uiv(this.addr, e);
  }

  function hr(t, e) {
    t.uniform2uiv(this.addr, e);
  }

  function ur(t, e) {
    t.uniform3uiv(this.addr, e);
  }

  function dr(t, e) {
    t.uniform4uiv(this.addr, e);
  }

  function pr(t, e, n) {
    var i = e.length,
        r = Di(n, i);
    t.uniform1iv(this.addr, r);

    for (var _t84 = 0; _t84 !== i; ++_t84) {
      n.safeSetTexture2D(e[_t84] || _i, r[_t84]);
    }
  }

  function fr(t, e, n) {
    var i = e.length,
        r = Di(n, i);
    t.uniform1iv(this.addr, r);

    for (var _t85 = 0; _t85 !== i; ++_t85) {
      n.safeSetTextureCube(e[_t85] || Mi, r[_t85]);
    }
  }

  function mr(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.setValue = function (t) {
      switch (t) {
        case 5126:
          return Ii;

        case 35664:
          return Ni;

        case 35665:
          return Bi;

        case 35666:
          return Oi;

        case 35674:
          return zi;

        case 35675:
          return Fi;

        case 35676:
          return Hi;

        case 5124:
        case 35670:
          return Ui;

        case 35667:
        case 35671:
          return Gi;

        case 35668:
        case 35672:
          return ki;

        case 35669:
        case 35673:
          return Vi;

        case 5125:
          return Wi;

        case 36294:
          return ji;

        case 36295:
          return qi;

        case 36296:
          return Xi;

        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
          return Yi;

        case 35679:
        case 36299:
        case 36307:
          return Zi;

        case 35680:
        case 36300:
        case 36308:
        case 36293:
          return Ji;

        case 36289:
        case 36303:
        case 36311:
        case 36292:
          return Qi;
      }
    }(e.type);
  }

  function gr(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.size = e.size, this.setValue = function (t) {
      switch (t) {
        case 5126:
          return Ki;

        case 35664:
          return $i;

        case 35665:
          return tr;

        case 35666:
          return er;

        case 35674:
          return nr;

        case 35675:
          return ir;

        case 35676:
          return rr;

        case 5124:
        case 35670:
          return sr;

        case 35667:
        case 35671:
          return ar;

        case 35668:
        case 35672:
          return or;

        case 35669:
        case 35673:
          return lr;

        case 5125:
          return cr;

        case 36294:
          return hr;

        case 36295:
          return ur;

        case 36296:
          return dr;

        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
          return pr;

        case 35680:
        case 36300:
        case 36308:
        case 36293:
          return fr;
      }
    }(e.type);
  }

  function vr(t) {
    this.id = t, this.seq = [], this.map = {};
  }

  gr.prototype.updateCache = function (t) {
    var e = this.cache;
    t instanceof Float32Array && e.length !== t.length && (this.cache = new Float32Array(t.length)), Pi(e, t);
  }, vr.prototype.setValue = function (t, e, n) {
    var i = this.seq;

    for (var _r51 = 0, _s22 = i.length; _r51 !== _s22; ++_r51) {
      var _s23 = i[_r51];

      _s23.setValue(t, e[_s23.id], n);
    }
  };
  var yr = /(\w+)(\])?(\[|\.)?/g;

  function xr(t, e) {
    t.seq.push(e), t.map[e.id] = e;
  }

  function _r(t, e, n) {
    var i = t.name,
        r = i.length;

    for (yr.lastIndex = 0;;) {
      var _s24 = yr.exec(i),
          _a19 = yr.lastIndex;

      var _o12 = _s24[1];

      var _l12 = "]" === _s24[2],
          _c9 = _s24[3];

      if (_l12 && (_o12 |= 0), void 0 === _c9 || "[" === _c9 && _a19 + 2 === r) {
        xr(n, void 0 === _c9 ? new mr(_o12, t, e) : new gr(_o12, t, e));
        break;
      }

      {
        var _t86 = n.map[_o12];
        void 0 === _t86 && (_t86 = new vr(_o12), xr(n, _t86)), n = _t86;
      }
    }
  }

  function br(t, e) {
    this.seq = [], this.map = {};
    var n = t.getProgramParameter(e, 35718);

    for (var _i69 = 0; _i69 < n; ++_i69) {
      var _n80 = t.getActiveUniform(e, _i69);

      _r(_n80, t.getUniformLocation(e, _n80.name), this);
    }
  }

  function wr(t, e, n) {
    var i = t.createShader(e);
    return t.shaderSource(i, n), t.compileShader(i), i;
  }

  br.prototype.setValue = function (t, e, n, i) {
    var r = this.map[e];
    void 0 !== r && r.setValue(t, n, i);
  }, br.prototype.setOptional = function (t, e, n) {
    var i = e[n];
    void 0 !== i && this.setValue(t, n, i);
  }, br.upload = function (t, e, n, i) {
    for (var _r52 = 0, _s25 = e.length; _r52 !== _s25; ++_r52) {
      var _s26 = e[_r52],
          _a20 = n[_s26.id];
      !1 !== _a20.needsUpdate && _s26.setValue(t, _a20.value, i);
    }
  }, br.seqWithValue = function (t, e) {
    var n = [];

    for (var _i70 = 0, _r53 = t.length; _i70 !== _r53; ++_i70) {
      var _r54 = t[_i70];
      _r54.id in e && n.push(_r54);
    }

    return n;
  };
  var Mr = 0;

  function Sr(t) {
    switch (t) {
      case X:
        return ["Linear", "( value )"];

      case Y:
        return ["sRGB", "( value )"];

      case J:
        return ["RGBE", "( value )"];

      case Q:
        return ["RGBM", "( value, 7.0 )"];

      case K:
        return ["RGBM", "( value, 16.0 )"];

      case $:
        return ["RGBD", "( value, 256.0 )"];

      case Z:
        return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];

      case 3003:
        return ["LogLuv", "( value )"];

      default:
        return console.warn("THREE.WebGLProgram: Unsupported encoding:", t), ["Linear", "( value )"];
    }
  }

  function Tr(t, e, n) {
    var i = t.getShaderParameter(e, 35713),
        r = t.getShaderInfoLog(e).trim();
    if (i && "" === r) return "";
    return "THREE.WebGLShader: gl.getShaderInfoLog() " + n + "\n" + r + function (t) {
      var e = t.split("\n");

      for (var _t87 = 0; _t87 < e.length; _t87++) {
        e[_t87] = _t87 + 1 + ": " + e[_t87];
      }

      return e.join("\n");
    }(t.getShaderSource(e));
  }

  function Er(t, e) {
    var n = Sr(e);
    return "vec4 " + t + "( vec4 value ) { return " + n[0] + "ToLinear" + n[1] + "; }";
  }

  function Ar(t, e) {
    var n = Sr(e);
    return "vec4 " + t + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }";
  }

  function Lr(t, e) {
    var n;

    switch (e) {
      case 1:
        n = "Linear";
        break;

      case 2:
        n = "Reinhard";
        break;

      case 3:
        n = "OptimizedCineon";
        break;

      case 4:
        n = "ACESFilmic";
        break;

      case 5:
        n = "Custom";
        break;

      default:
        console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), n = "Linear";
    }

    return "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }";
  }

  function Rr(t) {
    return "" !== t;
  }

  function Cr(t, e) {
    return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
  }

  function Pr(t, e) {
    return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
  }

  var Dr = /^[ \t]*#include +<([\w\d./]+)>/gm;

  function Ir(t) {
    return t.replace(Dr, Nr);
  }

  function Nr(t, e) {
    var n = ei[e];
    if (void 0 === n) throw new Error("Can not resolve #include <" + e + ">");
    return Ir(n);
  }

  var Br = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
      Or = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;

  function zr(t) {
    return t.replace(Or, Hr).replace(Br, Fr);
  }

  function Fr(t, e, n, i) {
    return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), Hr(t, e, n, i);
  }

  function Hr(t, e, n, i) {
    var r = "";

    for (var _t88 = parseInt(e); _t88 < parseInt(n); _t88++) {
      r += i.replace(/\[\s*i\s*\]/g, "[ " + _t88 + " ]").replace(/UNROLLED_LOOP_INDEX/g, _t88);
    }

    return r;
  }

  function Ur(t) {
    var e = "precision " + t.precision + " float;\nprecision " + t.precision + " int;";
    return "highp" === t.precision ? e += "\n#define HIGH_PRECISION" : "mediump" === t.precision ? e += "\n#define MEDIUM_PRECISION" : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"), e;
  }

  function Gr(t, e, n, i) {
    var a = t.getContext(),
        o = n.defines;
    var h = n.vertexShader,
        u = n.fragmentShader;

    var d = function (t) {
      var e = "SHADOWMAP_TYPE_BASIC";
      return 1 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF" : 2 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === t.shadowMapType && (e = "SHADOWMAP_TYPE_VSM"), e;
    }(n),
        p = function (t) {
      var e = "ENVMAP_TYPE_CUBE";
      if (t.envMap) switch (t.envMapMode) {
        case r:
        case s:
          e = "ENVMAP_TYPE_CUBE";
          break;

        case l:
        case c:
          e = "ENVMAP_TYPE_CUBE_UV";
      }
      return e;
    }(n),
        f = function (t) {
      var e = "ENVMAP_MODE_REFLECTION";
      if (t.envMap) switch (t.envMapMode) {
        case s:
        case c:
          e = "ENVMAP_MODE_REFRACTION";
      }
      return e;
    }(n),
        m = function (t) {
      var e = "ENVMAP_BLENDING_NONE";
      if (t.envMap) switch (t.combine) {
        case 0:
          e = "ENVMAP_BLENDING_MULTIPLY";
          break;

        case 1:
          e = "ENVMAP_BLENDING_MIX";
          break;

        case 2:
          e = "ENVMAP_BLENDING_ADD";
      }
      return e;
    }(n),
        g = t.gammaFactor > 0 ? t.gammaFactor : 1,
        v = n.isWebGL2 ? "" : function (t) {
      return [t.extensionDerivatives || t.envMapCubeUV || t.bumpMap || t.tangentSpaceNormalMap || t.clearcoatNormalMap || t.flatShading || "physical" === t.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (t.extensionFragDepth || t.logarithmicDepthBuffer) && t.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", t.extensionDrawBuffers && t.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (t.extensionShaderTextureLOD || t.envMap) && t.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Rr).join("\n");
    }(n),
        y = function (t) {
      var e = [];

      for (var _n81 in t) {
        var _i71 = t[_n81];
        !1 !== _i71 && e.push("#define " + _n81 + " " + _i71);
      }

      return e.join("\n");
    }(o),
        x = a.createProgram();

    var _,
        b,
        w = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";

    n.isRawShaderMaterial ? (_ = [y].filter(Rr).join("\n"), _.length > 0 && (_ += "\n"), b = [v, y].filter(Rr).join("\n"), b.length > 0 && (b += "\n")) : (_ = [Ur(n), "#define SHADER_NAME " + n.shaderName, y, n.instancing ? "#define USE_INSTANCING" : "", n.instancingColor ? "#define USE_INSTANCING_COLOR" : "", n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + g, "#define MAX_BONES " + n.maxBones, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + f : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.displacementMap && n.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.useVertexTexture ? "#define BONE_TEXTURE" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && !1 === n.flatShading ? "#define USE_MORPHNORMALS" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + d : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "\tattribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "\tattribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "\tattribute vec4 color;", "#elif defined( USE_COLOR )", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(Rr).join("\n"), b = [v, Ur(n), "#define SHADER_NAME " + n.shaderName, y, n.alphaTest ? "#define ALPHATEST " + n.alphaTest + (n.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + g, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.matcap ? "#define USE_MATCAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + p : "", n.envMap ? "#define " + f : "", n.envMap ? "#define " + m : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.sheen ? "#define USE_SHEEN" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.gradientMap ? "#define USE_GRADIENTMAP" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + d : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", (n.extensionShaderTextureLOD || n.envMap) && n.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", 0 !== n.toneMapping ? "#define TONE_MAPPING" : "", 0 !== n.toneMapping ? ei.tonemapping_pars_fragment : "", 0 !== n.toneMapping ? Lr("toneMapping", n.toneMapping) : "", n.dithering ? "#define DITHERING" : "", ei.encodings_pars_fragment, n.map ? Er("mapTexelToLinear", n.mapEncoding) : "", n.matcap ? Er("matcapTexelToLinear", n.matcapEncoding) : "", n.envMap ? Er("envMapTexelToLinear", n.envMapEncoding) : "", n.emissiveMap ? Er("emissiveMapTexelToLinear", n.emissiveMapEncoding) : "", n.lightMap ? Er("lightMapTexelToLinear", n.lightMapEncoding) : "", Ar("linearToOutputTexel", n.outputEncoding), n.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(Rr).join("\n")), h = Ir(h), h = Cr(h, n), h = Pr(h, n), u = Ir(u), u = Cr(u, n), u = Pr(u, n), h = zr(h), u = zr(u), n.isWebGL2 && !0 !== n.isRawShaderMaterial && (w = "#version 300 es\n", _ = ["#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + _, b = ["#define varying in", n.glslVersion === it ? "" : "out highp vec4 pc_fragColor;", n.glslVersion === it ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + b);
    var M = w + b + u,
        S = wr(a, 35633, w + _ + h),
        T = wr(a, 35632, M);

    if (a.attachShader(x, S), a.attachShader(x, T), void 0 !== n.index0AttributeName ? a.bindAttribLocation(x, 0, n.index0AttributeName) : !0 === n.morphTargets && a.bindAttribLocation(x, 0, "position"), a.linkProgram(x), t.debug.checkShaderErrors) {
      var _t89 = a.getProgramInfoLog(x).trim(),
          _e67 = a.getShaderInfoLog(S).trim(),
          _n82 = a.getShaderInfoLog(T).trim();

      var _i72 = !0,
          _r55 = !0;

      if (!1 === a.getProgramParameter(x, 35714)) {
        _i72 = !1;

        var _e68 = Tr(a, S, "vertex"),
            _n83 = Tr(a, T, "fragment");

        console.error("THREE.WebGLProgram: shader error: ", a.getError(), "35715", a.getProgramParameter(x, 35715), "gl.getProgramInfoLog", _t89, _e68, _n83);
      } else "" !== _t89 ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", _t89) : "" !== _e67 && "" !== _n82 || (_r55 = !1);

      _r55 && (this.diagnostics = {
        runnable: _i72,
        programLog: _t89,
        vertexShader: {
          log: _e67,
          prefix: _
        },
        fragmentShader: {
          log: _n82,
          prefix: b
        }
      });
    }

    var E, A;
    return a.deleteShader(S), a.deleteShader(T), this.getUniforms = function () {
      return void 0 === E && (E = new br(a, x)), E;
    }, this.getAttributes = function () {
      return void 0 === A && (A = function (t, e) {
        var n = {},
            i = t.getProgramParameter(e, 35721);

        for (var _r56 = 0; _r56 < i; _r56++) {
          var _i73 = t.getActiveAttrib(e, _r56).name;
          n[_i73] = t.getAttribLocation(e, _i73);
        }

        return n;
      }(a, x)), A;
    }, this.destroy = function () {
      i.releaseStatesOfProgram(this), a.deleteProgram(x), this.program = void 0;
    }, this.name = n.shaderName, this.id = Mr++, this.cacheKey = e, this.usedTimes = 1, this.program = x, this.vertexShader = S, this.fragmentShader = T, this;
  }

  function kr(t, e, n, i, r, s) {
    var a = [],
        o = i.isWebGL2,
        h = i.logarithmicDepthBuffer,
        u = i.floatVertexTextures,
        d = i.maxVertexUniforms,
        p = i.vertexTextures;
    var f = i.precision;
    var m = {
      MeshDepthMaterial: "depth",
      MeshDistanceMaterial: "distanceRGBA",
      MeshNormalMaterial: "normal",
      MeshBasicMaterial: "basic",
      MeshLambertMaterial: "lambert",
      MeshPhongMaterial: "phong",
      MeshToonMaterial: "toon",
      MeshStandardMaterial: "physical",
      MeshPhysicalMaterial: "physical",
      MeshMatcapMaterial: "matcap",
      LineBasicMaterial: "basic",
      LineDashedMaterial: "dashed",
      PointsMaterial: "points",
      ShadowMaterial: "shadow",
      SpriteMaterial: "sprite"
    },
        g = ["precision", "isWebGL2", "supportsVertexTextures", "outputEncoding", "instancing", "instancingColor", "map", "mapEncoding", "matcap", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "envMapCubeUV", "lightMap", "lightMapEncoding", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "tangentSpaceNormalMap", "clearcoatMap", "clearcoatRoughnessMap", "clearcoatNormalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "vertexAlphas", "vertexTangents", "vertexUvs", "uvsVertexOnly", "fog", "useFog", "fogExp2", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "numDirLightShadows", "numPointLightShadows", "numSpotLightShadows", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering", "sheen", "transmissionMap"];

    function v(t) {
      var e;
      return t && t.isTexture ? e = t.encoding : t && t.isWebGLRenderTarget ? (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), e = t.texture.encoding) : e = X, e;
    }

    return {
      getParameters: function getParameters(r, a, g, y, x) {
        var _ = y.fog,
            b = r.isMeshStandardMaterial ? y.environment : null,
            w = e.get(r.envMap || b),
            M = m[r.type],
            S = x.isSkinnedMesh ? function (t) {
          var e = t.skeleton.bones;
          if (u) return 1024;
          {
            var _t90 = d,
                _n84 = Math.floor((_t90 - 20) / 4),
                _i74 = Math.min(_n84, e.length);

            return _i74 < e.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + e.length + " bones. This GPU supports " + _i74 + "."), 0) : _i74;
          }
        }(x) : 0;
        var T, E;

        if (null !== r.precision && (f = i.getMaxPrecision(r.precision), f !== r.precision && console.warn("THREE.WebGLProgram.getParameters:", r.precision, "not supported, using", f, "instead.")), M) {
          var _t91 = ii[M];
          T = _t91.vertexShader, E = _t91.fragmentShader;
        } else T = r.vertexShader, E = r.fragmentShader;

        var A = t.getRenderTarget();
        return {
          isWebGL2: o,
          shaderID: M,
          shaderName: r.type,
          vertexShader: T,
          fragmentShader: E,
          defines: r.defines,
          isRawShaderMaterial: !0 === r.isRawShaderMaterial,
          glslVersion: r.glslVersion,
          precision: f,
          instancing: !0 === x.isInstancedMesh,
          instancingColor: !0 === x.isInstancedMesh && null !== x.instanceColor,
          supportsVertexTextures: p,
          outputEncoding: null !== A ? v(A.texture) : t.outputEncoding,
          map: !!r.map,
          mapEncoding: v(r.map),
          matcap: !!r.matcap,
          matcapEncoding: v(r.matcap),
          envMap: !!w,
          envMapMode: w && w.mapping,
          envMapEncoding: v(w),
          envMapCubeUV: !!w && (w.mapping === l || w.mapping === c),
          lightMap: !!r.lightMap,
          lightMapEncoding: v(r.lightMap),
          aoMap: !!r.aoMap,
          emissiveMap: !!r.emissiveMap,
          emissiveMapEncoding: v(r.emissiveMap),
          bumpMap: !!r.bumpMap,
          normalMap: !!r.normalMap,
          objectSpaceNormalMap: 1 === r.normalMapType,
          tangentSpaceNormalMap: 0 === r.normalMapType,
          clearcoatMap: !!r.clearcoatMap,
          clearcoatRoughnessMap: !!r.clearcoatRoughnessMap,
          clearcoatNormalMap: !!r.clearcoatNormalMap,
          displacementMap: !!r.displacementMap,
          roughnessMap: !!r.roughnessMap,
          metalnessMap: !!r.metalnessMap,
          specularMap: !!r.specularMap,
          alphaMap: !!r.alphaMap,
          gradientMap: !!r.gradientMap,
          sheen: !!r.sheen,
          transmissionMap: !!r.transmissionMap,
          combine: r.combine,
          vertexTangents: r.normalMap && r.vertexTangents,
          vertexColors: r.vertexColors,
          vertexAlphas: !0 === r.vertexColors && x.geometry.attributes.color && 4 === x.geometry.attributes.color.itemSize,
          vertexUvs: !!(r.map || r.bumpMap || r.normalMap || r.specularMap || r.alphaMap || r.emissiveMap || r.roughnessMap || r.metalnessMap || r.clearcoatMap || r.clearcoatRoughnessMap || r.clearcoatNormalMap || r.displacementMap || r.transmissionMap),
          uvsVertexOnly: !(r.map || r.bumpMap || r.normalMap || r.specularMap || r.alphaMap || r.emissiveMap || r.roughnessMap || r.metalnessMap || r.clearcoatNormalMap || r.transmissionMap || !r.displacementMap),
          fog: !!_,
          useFog: r.fog,
          fogExp2: _ && _.isFogExp2,
          flatShading: !!r.flatShading,
          sizeAttenuation: r.sizeAttenuation,
          logarithmicDepthBuffer: h,
          skinning: r.skinning && S > 0,
          maxBones: S,
          useVertexTexture: u,
          morphTargets: r.morphTargets,
          morphNormals: r.morphNormals,
          numDirLights: a.directional.length,
          numPointLights: a.point.length,
          numSpotLights: a.spot.length,
          numRectAreaLights: a.rectArea.length,
          numHemiLights: a.hemi.length,
          numDirLightShadows: a.directionalShadowMap.length,
          numPointLightShadows: a.pointShadowMap.length,
          numSpotLightShadows: a.spotShadowMap.length,
          numClippingPlanes: s.numPlanes,
          numClipIntersection: s.numIntersection,
          dithering: r.dithering,
          shadowMapEnabled: t.shadowMap.enabled && g.length > 0,
          shadowMapType: t.shadowMap.type,
          toneMapping: r.toneMapped ? t.toneMapping : 0,
          physicallyCorrectLights: t.physicallyCorrectLights,
          premultipliedAlpha: r.premultipliedAlpha,
          alphaTest: r.alphaTest,
          doubleSided: 2 === r.side,
          flipSided: 1 === r.side,
          depthPacking: void 0 !== r.depthPacking && r.depthPacking,
          index0AttributeName: r.index0AttributeName,
          extensionDerivatives: r.extensions && r.extensions.derivatives,
          extensionFragDepth: r.extensions && r.extensions.fragDepth,
          extensionDrawBuffers: r.extensions && r.extensions.drawBuffers,
          extensionShaderTextureLOD: r.extensions && r.extensions.shaderTextureLOD,
          rendererExtensionFragDepth: o || n.has("EXT_frag_depth"),
          rendererExtensionDrawBuffers: o || n.has("WEBGL_draw_buffers"),
          rendererExtensionShaderTextureLod: o || n.has("EXT_shader_texture_lod"),
          customProgramCacheKey: r.customProgramCacheKey()
        };
      },
      getProgramCacheKey: function getProgramCacheKey(e) {
        var n = [];
        if (e.shaderID ? n.push(e.shaderID) : (n.push(e.fragmentShader), n.push(e.vertexShader)), void 0 !== e.defines) for (var _t92 in e.defines) {
          n.push(_t92), n.push(e.defines[_t92]);
        }

        if (!1 === e.isRawShaderMaterial) {
          for (var _t93 = 0; _t93 < g.length; _t93++) {
            n.push(e[g[_t93]]);
          }

          n.push(t.outputEncoding), n.push(t.gammaFactor);
        }

        return n.push(e.customProgramCacheKey), n.join();
      },
      getUniforms: function getUniforms(t) {
        var e = m[t.type];
        var n;

        if (e) {
          var _t94 = ii[e];
          n = Un.clone(_t94.uniforms);
        } else n = t.uniforms;

        return n;
      },
      acquireProgram: function acquireProgram(e, n) {
        var i;

        for (var _t95 = 0, _e69 = a.length; _t95 < _e69; _t95++) {
          var _e70 = a[_t95];

          if (_e70.cacheKey === n) {
            i = _e70, ++i.usedTimes;
            break;
          }
        }

        return void 0 === i && (i = new Gr(t, n, e, r), a.push(i)), i;
      },
      releaseProgram: function releaseProgram(t) {
        if (0 == --t.usedTimes) {
          var _e71 = a.indexOf(t);

          a[_e71] = a[a.length - 1], a.pop(), t.destroy();
        }
      },
      programs: a
    };
  }

  function Vr() {
    var t = new WeakMap();
    return {
      get: function get(e) {
        var n = t.get(e);
        return void 0 === n && (n = {}, t.set(e, n)), n;
      },
      remove: function remove(e) {
        t.delete(e);
      },
      update: function update(e, n, i) {
        t.get(e)[n] = i;
      },
      dispose: function dispose() {
        t = new WeakMap();
      }
    };
  }

  function Wr(t, e) {
    return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program !== e.program ? t.program.id - e.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id;
  }

  function jr(t, e) {
    return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id;
  }

  function qr(t) {
    var e = [];
    var n = 0;
    var i = [],
        r = [],
        s = {
      id: -1
    };

    function a(i, r, a, o, l, c) {
      var h = e[n];
      var u = t.get(a);
      return void 0 === h ? (h = {
        id: i.id,
        object: i,
        geometry: r,
        material: a,
        program: u.program || s,
        groupOrder: o,
        renderOrder: i.renderOrder,
        z: l,
        group: c
      }, e[n] = h) : (h.id = i.id, h.object = i, h.geometry = r, h.material = a, h.program = u.program || s, h.groupOrder = o, h.renderOrder = i.renderOrder, h.z = l, h.group = c), n++, h;
    }

    return {
      opaque: i,
      transparent: r,
      init: function init() {
        n = 0, i.length = 0, r.length = 0;
      },
      push: function push(t, e, n, s, o, l) {
        var c = a(t, e, n, s, o, l);
        (!0 === n.transparent ? r : i).push(c);
      },
      unshift: function unshift(t, e, n, s, o, l) {
        var c = a(t, e, n, s, o, l);
        (!0 === n.transparent ? r : i).unshift(c);
      },
      finish: function finish() {
        for (var _t96 = n, _i75 = e.length; _t96 < _i75; _t96++) {
          var _n85 = e[_t96];
          if (null === _n85.id) break;
          _n85.id = null, _n85.object = null, _n85.geometry = null, _n85.material = null, _n85.program = null, _n85.group = null;
        }
      },
      sort: function sort(t, e) {
        i.length > 1 && i.sort(t || Wr), r.length > 1 && r.sort(e || jr);
      }
    };
  }

  function Xr(t) {
    var e = new WeakMap();
    return {
      get: function get(n, i) {
        var r;
        return !1 === e.has(n) ? (r = new qr(t), e.set(n, [r])) : i >= e.get(n).length ? (r = new qr(t), e.get(n).push(r)) : r = e.get(n)[i], r;
      },
      dispose: function dispose() {
        e = new WeakMap();
      }
    };
  }

  function Yr() {
    var t = {};
    return {
      get: function get(e) {
        if (void 0 !== t[e.id]) return t[e.id];
        var n;

        switch (e.type) {
          case "DirectionalLight":
            n = {
              direction: new xt(),
              color: new je()
            };
            break;

          case "SpotLight":
            n = {
              position: new xt(),
              direction: new xt(),
              color: new je(),
              distance: 0,
              coneCos: 0,
              penumbraCos: 0,
              decay: 0
            };
            break;

          case "PointLight":
            n = {
              position: new xt(),
              color: new je(),
              distance: 0,
              decay: 0
            };
            break;

          case "HemisphereLight":
            n = {
              direction: new xt(),
              skyColor: new je(),
              groundColor: new je()
            };
            break;

          case "RectAreaLight":
            n = {
              color: new je(),
              position: new xt(),
              halfWidth: new xt(),
              halfHeight: new xt()
            };
        }

        return t[e.id] = n, n;
      }
    };
  }

  var Zr = 0;

  function Jr(t, e) {
    return (e.castShadow ? 1 : 0) - (t.castShadow ? 1 : 0);
  }

  function Qr(t, e) {
    var n = new Yr(),
        i = function () {
      var t = {};
      return {
        get: function get(e) {
          if (void 0 !== t[e.id]) return t[e.id];
          var n;

          switch (e.type) {
            case "DirectionalLight":
            case "SpotLight":
              n = {
                shadowBias: 0,
                shadowNormalBias: 0,
                shadowRadius: 1,
                shadowMapSize: new lt()
              };
              break;

            case "PointLight":
              n = {
                shadowBias: 0,
                shadowNormalBias: 0,
                shadowRadius: 1,
                shadowMapSize: new lt(),
                shadowCameraNear: 1,
                shadowCameraFar: 1e3
              };
          }

          return t[e.id] = n, n;
        }
      };
    }(),
        r = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotShadow: [],
      spotShadowMap: [],
      spotShadowMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: []
    };

    for (var _t97 = 0; _t97 < 9; _t97++) {
      r.probe.push(new xt());
    }

    var s = new xt(),
        a = new Jt(),
        o = new Jt();
    return {
      setup: function setup(s) {
        var a = 0,
            o = 0,
            l = 0;

        for (var _t98 = 0; _t98 < 9; _t98++) {
          r.probe[_t98].set(0, 0, 0);
        }

        var c = 0,
            h = 0,
            u = 0,
            d = 0,
            p = 0,
            f = 0,
            m = 0,
            g = 0;
        s.sort(Jr);

        for (var _t99 = 0, _e72 = s.length; _t99 < _e72; _t99++) {
          var _e73 = s[_t99],
              _v2 = _e73.color,
              _y2 = _e73.intensity,
              _x2 = _e73.distance,
              _3 = _e73.shadow && _e73.shadow.map ? _e73.shadow.map.texture : null;

          if (_e73.isAmbientLight) a += _v2.r * _y2, o += _v2.g * _y2, l += _v2.b * _y2;else if (_e73.isLightProbe) for (var _t100 = 0; _t100 < 9; _t100++) {
            r.probe[_t100].addScaledVector(_e73.sh.coefficients[_t100], _y2);
          } else if (_e73.isDirectionalLight) {
            var _t101 = n.get(_e73);

            if (_t101.color.copy(_e73.color).multiplyScalar(_e73.intensity), _e73.castShadow) {
              var _t102 = _e73.shadow,
                  _n86 = i.get(_e73);

              _n86.shadowBias = _t102.bias, _n86.shadowNormalBias = _t102.normalBias, _n86.shadowRadius = _t102.radius, _n86.shadowMapSize = _t102.mapSize, r.directionalShadow[c] = _n86, r.directionalShadowMap[c] = _3, r.directionalShadowMatrix[c] = _e73.shadow.matrix, f++;
            }

            r.directional[c] = _t101, c++;
          } else if (_e73.isSpotLight) {
            var _t103 = n.get(_e73);

            if (_t103.position.setFromMatrixPosition(_e73.matrixWorld), _t103.color.copy(_v2).multiplyScalar(_y2), _t103.distance = _x2, _t103.coneCos = Math.cos(_e73.angle), _t103.penumbraCos = Math.cos(_e73.angle * (1 - _e73.penumbra)), _t103.decay = _e73.decay, _e73.castShadow) {
              var _t104 = _e73.shadow,
                  _n87 = i.get(_e73);

              _n87.shadowBias = _t104.bias, _n87.shadowNormalBias = _t104.normalBias, _n87.shadowRadius = _t104.radius, _n87.shadowMapSize = _t104.mapSize, r.spotShadow[u] = _n87, r.spotShadowMap[u] = _3, r.spotShadowMatrix[u] = _e73.shadow.matrix, g++;
            }

            r.spot[u] = _t103, u++;
          } else if (_e73.isRectAreaLight) {
            var _t105 = n.get(_e73);

            _t105.color.copy(_v2).multiplyScalar(_y2), _t105.halfWidth.set(.5 * _e73.width, 0, 0), _t105.halfHeight.set(0, .5 * _e73.height, 0), r.rectArea[d] = _t105, d++;
          } else if (_e73.isPointLight) {
            var _t106 = n.get(_e73);

            if (_t106.color.copy(_e73.color).multiplyScalar(_e73.intensity), _t106.distance = _e73.distance, _t106.decay = _e73.decay, _e73.castShadow) {
              var _t107 = _e73.shadow,
                  _n88 = i.get(_e73);

              _n88.shadowBias = _t107.bias, _n88.shadowNormalBias = _t107.normalBias, _n88.shadowRadius = _t107.radius, _n88.shadowMapSize = _t107.mapSize, _n88.shadowCameraNear = _t107.camera.near, _n88.shadowCameraFar = _t107.camera.far, r.pointShadow[h] = _n88, r.pointShadowMap[h] = _3, r.pointShadowMatrix[h] = _e73.shadow.matrix, m++;
            }

            r.point[h] = _t106, h++;
          } else if (_e73.isHemisphereLight) {
            var _t108 = n.get(_e73);

            _t108.skyColor.copy(_e73.color).multiplyScalar(_y2), _t108.groundColor.copy(_e73.groundColor).multiplyScalar(_y2), r.hemi[p] = _t108, p++;
          }
        }

        d > 0 && (e.isWebGL2 || !0 === t.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = ni.LTC_FLOAT_1, r.rectAreaLTC2 = ni.LTC_FLOAT_2) : !0 === t.has("OES_texture_half_float_linear") ? (r.rectAreaLTC1 = ni.LTC_HALF_1, r.rectAreaLTC2 = ni.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), r.ambient[0] = a, r.ambient[1] = o, r.ambient[2] = l;
        var v = r.hash;
        v.directionalLength === c && v.pointLength === h && v.spotLength === u && v.rectAreaLength === d && v.hemiLength === p && v.numDirectionalShadows === f && v.numPointShadows === m && v.numSpotShadows === g || (r.directional.length = c, r.spot.length = u, r.rectArea.length = d, r.point.length = h, r.hemi.length = p, r.directionalShadow.length = f, r.directionalShadowMap.length = f, r.pointShadow.length = m, r.pointShadowMap.length = m, r.spotShadow.length = g, r.spotShadowMap.length = g, r.directionalShadowMatrix.length = f, r.pointShadowMatrix.length = m, r.spotShadowMatrix.length = g, v.directionalLength = c, v.pointLength = h, v.spotLength = u, v.rectAreaLength = d, v.hemiLength = p, v.numDirectionalShadows = f, v.numPointShadows = m, v.numSpotShadows = g, r.version = Zr++);
      },
      setupView: function setupView(t, e) {
        var n = 0,
            i = 0,
            l = 0,
            c = 0,
            h = 0;
        var u = e.matrixWorldInverse;

        for (var _e74 = 0, _d6 = t.length; _e74 < _d6; _e74++) {
          var _d7 = t[_e74];

          if (_d7.isDirectionalLight) {
            var _t109 = r.directional[n];
            _t109.direction.setFromMatrixPosition(_d7.matrixWorld), s.setFromMatrixPosition(_d7.target.matrixWorld), _t109.direction.sub(s), _t109.direction.transformDirection(u), n++;
          } else if (_d7.isSpotLight) {
            var _t110 = r.spot[l];
            _t110.position.setFromMatrixPosition(_d7.matrixWorld), _t110.position.applyMatrix4(u), _t110.direction.setFromMatrixPosition(_d7.matrixWorld), s.setFromMatrixPosition(_d7.target.matrixWorld), _t110.direction.sub(s), _t110.direction.transformDirection(u), l++;
          } else if (_d7.isRectAreaLight) {
            var _t111 = r.rectArea[c];
            _t111.position.setFromMatrixPosition(_d7.matrixWorld), _t111.position.applyMatrix4(u), o.identity(), a.copy(_d7.matrixWorld), a.premultiply(u), o.extractRotation(a), _t111.halfWidth.set(.5 * _d7.width, 0, 0), _t111.halfHeight.set(0, .5 * _d7.height, 0), _t111.halfWidth.applyMatrix4(o), _t111.halfHeight.applyMatrix4(o), c++;
          } else if (_d7.isPointLight) {
            var _t112 = r.point[i];
            _t112.position.setFromMatrixPosition(_d7.matrixWorld), _t112.position.applyMatrix4(u), i++;
          } else if (_d7.isHemisphereLight) {
            var _t113 = r.hemi[h];
            _t113.direction.setFromMatrixPosition(_d7.matrixWorld), _t113.direction.transformDirection(u), _t113.direction.normalize(), h++;
          }
        }
      },
      state: r
    };
  }

  function Kr(t, e) {
    var n = new Qr(t, e),
        i = [],
        r = [];
    return {
      init: function init() {
        i.length = 0, r.length = 0;
      },
      state: {
        lightsArray: i,
        shadowsArray: r,
        lights: n
      },
      setupLights: function setupLights() {
        n.setup(i);
      },
      setupLightsView: function setupLightsView(t) {
        n.setupView(i, t);
      },
      pushLight: function pushLight(t) {
        i.push(t);
      },
      pushShadow: function pushShadow(t) {
        r.push(t);
      }
    };
  }

  function $r(t, e) {
    var n = new WeakMap();
    return {
      get: function get(i) {
        var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var s;
        return !1 === n.has(i) ? (s = new Kr(t, e), n.set(i, [s])) : r >= n.get(i).length ? (s = new Kr(t, e), n.get(i).push(s)) : s = n.get(i)[r], s;
      },
      dispose: function dispose() {
        n = new WeakMap();
      }
    };
  }

  var ts = /*#__PURE__*/function (_Fe2) {
    _inherits(ts, _Fe2);

    var _super13 = _createSuper(ts);

    function ts(t) {
      var _this13;

      _classCallCheck(this, ts);

      _this13 = _super13.call(this), _this13.type = "MeshDepthMaterial", _this13.depthPacking = 3200, _this13.skinning = !1, _this13.morphTargets = !1, _this13.map = null, _this13.alphaMap = null, _this13.displacementMap = null, _this13.displacementScale = 1, _this13.displacementBias = 0, _this13.wireframe = !1, _this13.wireframeLinewidth = 1, _this13.fog = !1, _this13.setValues(t);
      return _this13;
    }

    _createClass(ts, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(ts.prototype), "copy", this).call(this, t), this.depthPacking = t.depthPacking, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this;
      }
    }]);

    return ts;
  }(Fe);

  ts.prototype.isMeshDepthMaterial = !0;

  var es = /*#__PURE__*/function (_Fe3) {
    _inherits(es, _Fe3);

    var _super14 = _createSuper(es);

    function es(t) {
      var _this14;

      _classCallCheck(this, es);

      _this14 = _super14.call(this), _this14.type = "MeshDistanceMaterial", _this14.referencePosition = new xt(), _this14.nearDistance = 1, _this14.farDistance = 1e3, _this14.skinning = !1, _this14.morphTargets = !1, _this14.map = null, _this14.alphaMap = null, _this14.displacementMap = null, _this14.displacementScale = 1, _this14.displacementBias = 0, _this14.fog = !1, _this14.setValues(t);
      return _this14;
    }

    _createClass(es, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(es.prototype), "copy", this).call(this, t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this;
      }
    }]);

    return es;
  }(Fe);

  es.prototype.isMeshDistanceMaterial = !0;

  function ns(t, e, n) {
    var i = new Qn();
    var r = new lt(),
        s = new lt(),
        a = new mt(),
        o = [],
        l = [],
        c = {},
        h = n.maxTextureSize,
        u = {
      0: 1,
      1: 0,
      2: 2
    },
        d = new Gn({
      defines: {
        SAMPLE_RATE: 2 / 8,
        HALF_SAMPLE_RATE: 1 / 8
      },
      uniforms: {
        shadow_pass: {
          value: null
        },
        resolution: {
          value: new lt()
        },
        radius: {
          value: 4
        }
      },
      vertexShader: "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
      fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );\n\tfor ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean * HALF_SAMPLE_RATE;\n\tsquared_mean = squared_mean * HALF_SAMPLE_RATE;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"
    }),
        f = d.clone();
    f.defines.HORIZONTAL_PASS = 1;
    var m = new vn();
    m.setAttribute("position", new Ze(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
    var v = new Bn(m, d),
        y = this;

    function x(n, i) {
      var r = e.update(v);
      d.uniforms.shadow_pass.value = n.map.texture, d.uniforms.resolution.value = n.mapSize, d.uniforms.radius.value = n.radius, t.setRenderTarget(n.mapPass), t.clear(), t.renderBufferDirect(i, null, r, d, v, null), f.uniforms.shadow_pass.value = n.mapPass.texture, f.uniforms.resolution.value = n.mapSize, f.uniforms.radius.value = n.radius, t.setRenderTarget(n.map), t.clear(), t.renderBufferDirect(i, null, r, f, v, null);
    }

    function _(t, e, n) {
      var i = t << 0 | e << 1 | n << 2;
      var r = o[i];
      return void 0 === r && (r = new ts({
        depthPacking: 3201,
        morphTargets: t,
        skinning: e
      }), o[i] = r), r;
    }

    function b(t, e, n) {
      var i = t << 0 | e << 1 | n << 2;
      var r = l[i];
      return void 0 === r && (r = new es({
        morphTargets: t,
        skinning: e
      }), l[i] = r), r;
    }

    function w(e, n, i, r, s, a, o) {
      var l = null,
          h = _,
          d = e.customDepthMaterial;

      if (!0 === r.isPointLight && (h = b, d = e.customDistanceMaterial), void 0 === d) {
        var _t114 = !1;

        !0 === i.morphTargets && (_t114 = n.morphAttributes && n.morphAttributes.position && n.morphAttributes.position.length > 0);

        var _r57 = !1;

        !0 === e.isSkinnedMesh && (!0 === i.skinning ? _r57 = !0 : console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", e));
        l = h(_t114, _r57, !0 === e.isInstancedMesh);
      } else l = d;

      if (t.localClippingEnabled && !0 === i.clipShadows && 0 !== i.clippingPlanes.length) {
        var _t115 = l.uuid,
            _e75 = i.uuid;
        var _n89 = c[_t115];
        void 0 === _n89 && (_n89 = {}, c[_t115] = _n89);
        var _r58 = _n89[_e75];
        void 0 === _r58 && (_r58 = l.clone(), _n89[_e75] = _r58), l = _r58;
      }

      return l.visible = i.visible, l.wireframe = i.wireframe, l.side = 3 === o ? null !== i.shadowSide ? i.shadowSide : i.side : null !== i.shadowSide ? i.shadowSide : u[i.side], l.clipShadows = i.clipShadows, l.clippingPlanes = i.clippingPlanes, l.clipIntersection = i.clipIntersection, l.wireframeLinewidth = i.wireframeLinewidth, l.linewidth = i.linewidth, !0 === r.isPointLight && !0 === l.isMeshDistanceMaterial && (l.referencePosition.setFromMatrixPosition(r.matrixWorld), l.nearDistance = s, l.farDistance = a), l;
    }

    function M(n, r, s, a, o) {
      if (!1 === n.visible) return;

      if (n.layers.test(r.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && 3 === o) && (!n.frustumCulled || i.intersectsObject(n))) {
        n.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse, n.matrixWorld);

        var _i76 = e.update(n),
            _r59 = n.material;

        if (Array.isArray(_r59)) {
          var _e76 = _i76.groups;

          for (var _l13 = 0, _c10 = _e76.length; _l13 < _c10; _l13++) {
            var _c11 = _e76[_l13],
                _h7 = _r59[_c11.materialIndex];

            if (_h7 && _h7.visible) {
              var _e77 = w(n, _i76, _h7, a, s.near, s.far, o);

              t.renderBufferDirect(s, null, _i76, _e77, n, _c11);
            }
          }
        } else if (_r59.visible) {
          var _e78 = w(n, _i76, _r59, a, s.near, s.far, o);

          t.renderBufferDirect(s, null, _i76, _e78, n, null);
        }
      }

      var l = n.children;

      for (var _t116 = 0, _e79 = l.length; _t116 < _e79; _t116++) {
        M(l[_t116], r, s, a, o);
      }
    }

    this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.render = function (e, n, o) {
      if (!1 === y.enabled) return;
      if (!1 === y.autoUpdate && !1 === y.needsUpdate) return;
      if (0 === e.length) return;
      var l = t.getRenderTarget(),
          c = t.getActiveCubeFace(),
          u = t.getActiveMipmapLevel(),
          d = t.state;
      d.setBlending(0), d.buffers.color.setClear(1, 1, 1, 1), d.buffers.depth.setTest(!0), d.setScissorTest(!1);

      for (var _l14 = 0, _c12 = e.length; _l14 < _c12; _l14++) {
        var _c13 = e[_l14],
            _u8 = _c13.shadow;

        if (void 0 === _u8) {
          console.warn("THREE.WebGLShadowMap:", _c13, "has no shadow.");
          continue;
        }

        if (!1 === _u8.autoUpdate && !1 === _u8.needsUpdate) continue;
        r.copy(_u8.mapSize);

        var _f3 = _u8.getFrameExtents();

        if (r.multiply(_f3), s.copy(_u8.mapSize), (r.x > h || r.y > h) && (r.x > h && (s.x = Math.floor(h / _f3.x), r.x = s.x * _f3.x, _u8.mapSize.x = s.x), r.y > h && (s.y = Math.floor(h / _f3.y), r.y = s.y * _f3.y, _u8.mapSize.y = s.y)), null === _u8.map && !_u8.isPointLightShadow && 3 === this.type) {
          var _t117 = {
            minFilter: g,
            magFilter: g,
            format: E
          };
          _u8.map = new gt(r.x, r.y, _t117), _u8.map.texture.name = _c13.name + ".shadowMap", _u8.mapPass = new gt(r.x, r.y, _t117), _u8.camera.updateProjectionMatrix();
        }

        if (null === _u8.map) {
          var _t118 = {
            minFilter: p,
            magFilter: p,
            format: E
          };
          _u8.map = new gt(r.x, r.y, _t118), _u8.map.texture.name = _c13.name + ".shadowMap", _u8.camera.updateProjectionMatrix();
        }

        t.setRenderTarget(_u8.map), t.clear();

        var _m = _u8.getViewportCount();

        for (var _t119 = 0; _t119 < _m; _t119++) {
          var _e80 = _u8.getViewport(_t119);

          a.set(s.x * _e80.x, s.y * _e80.y, s.x * _e80.z, s.y * _e80.w), d.viewport(a), _u8.updateMatrices(_c13, _t119), i = _u8.getFrustum(), M(n, o, _u8.camera, _c13, this.type);
        }

        _u8.isPointLightShadow || 3 !== this.type || x(_u8, o), _u8.needsUpdate = !1;
      }

      y.needsUpdate = !1, t.setRenderTarget(l, c, u);
    };
  }

  function is(t, e, i) {
    var _F;

    var r = i.isWebGL2;
    var s = new function () {
      var e = !1;
      var n = new mt();
      var i = null;
      var r = new mt(0, 0, 0, 0);
      return {
        setMask: function setMask(n) {
          i === n || e || (t.colorMask(n, n, n, n), i = n);
        },
        setLocked: function setLocked(t) {
          e = t;
        },
        setClear: function setClear(e, i, s, a, o) {
          !0 === o && (e *= a, i *= a, s *= a), n.set(e, i, s, a), !1 === r.equals(n) && (t.clearColor(e, i, s, a), r.copy(n));
        },
        reset: function reset() {
          e = !1, i = null, r.set(-1, 0, 0, 0);
        }
      };
    }(),
        a = new function () {
      var e = !1,
          n = null,
          i = null,
          r = null;
      return {
        setTest: function setTest(t) {
          t ? O(2929) : z(2929);
        },
        setMask: function setMask(i) {
          n === i || e || (t.depthMask(i), n = i);
        },
        setFunc: function setFunc(e) {
          if (i !== e) {
            if (e) switch (e) {
              case 0:
                t.depthFunc(512);
                break;

              case 1:
                t.depthFunc(519);
                break;

              case 2:
                t.depthFunc(513);
                break;

              case 3:
                t.depthFunc(515);
                break;

              case 4:
                t.depthFunc(514);
                break;

              case 5:
                t.depthFunc(518);
                break;

              case 6:
                t.depthFunc(516);
                break;

              case 7:
                t.depthFunc(517);
                break;

              default:
                t.depthFunc(515);
            } else t.depthFunc(515);
            i = e;
          }
        },
        setLocked: function setLocked(t) {
          e = t;
        },
        setClear: function setClear(e) {
          r !== e && (t.clearDepth(e), r = e);
        },
        reset: function reset() {
          e = !1, n = null, i = null, r = null;
        }
      };
    }(),
        o = new function () {
      var e = !1,
          n = null,
          i = null,
          r = null,
          s = null,
          a = null,
          o = null,
          l = null,
          c = null;
      return {
        setTest: function setTest(t) {
          e || (t ? O(2960) : z(2960));
        },
        setMask: function setMask(i) {
          n === i || e || (t.stencilMask(i), n = i);
        },
        setFunc: function setFunc(e, n, a) {
          i === e && r === n && s === a || (t.stencilFunc(e, n, a), i = e, r = n, s = a);
        },
        setOp: function setOp(e, n, i) {
          a === e && o === n && l === i || (t.stencilOp(e, n, i), a = e, o = n, l = i);
        },
        setLocked: function setLocked(t) {
          e = t;
        },
        setClear: function setClear(e) {
          c !== e && (t.clearStencil(e), c = e);
        },
        reset: function reset() {
          e = !1, n = null, i = null, r = null, s = null, a = null, o = null, l = null, c = null;
        }
      };
    }();

    var l = {},
        c = null,
        h = {},
        u = null,
        d = !1,
        p = null,
        f = null,
        m = null,
        g = null,
        v = null,
        y = null,
        x = null,
        _ = !1,
        b = null,
        w = null,
        M = null,
        S = null,
        T = null;

    var E = t.getParameter(35661);
    var A = !1,
        L = 0;
    var R = t.getParameter(7938);
    -1 !== R.indexOf("WebGL") ? (L = parseFloat(/^WebGL (\d)/.exec(R)[1]), A = L >= 1) : -1 !== R.indexOf("OpenGL ES") && (L = parseFloat(/^OpenGL ES (\d)/.exec(R)[1]), A = L >= 2);
    var C = null,
        P = {};
    var D = new mt(0, 0, t.canvas.width, t.canvas.height),
        I = new mt(0, 0, t.canvas.width, t.canvas.height);

    function N(e, n, i) {
      var r = new Uint8Array(4),
          s = t.createTexture();
      t.bindTexture(e, s), t.texParameteri(e, 10241, 9728), t.texParameteri(e, 10240, 9728);

      for (var _e81 = 0; _e81 < i; _e81++) {
        t.texImage2D(n + _e81, 0, 6408, 1, 1, 0, 6408, 5121, r);
      }

      return s;
    }

    var B = {};

    function O(e) {
      !0 !== l[e] && (t.enable(e), l[e] = !0);
    }

    function z(e) {
      !1 !== l[e] && (t.disable(e), l[e] = !1);
    }

    B[3553] = N(3553, 3553, 1), B[34067] = N(34067, 34069, 6), s.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), O(2929), a.setFunc(3), G(!1), k(1), O(2884), U(0);
    var F = (_F = {}, _defineProperty(_F, n, 32774), _defineProperty(_F, 101, 32778), _defineProperty(_F, 102, 32779), _F);
    if (r) F[103] = 32775, F[104] = 32776;else {
      var _t120 = e.get("EXT_blend_minmax");

      null !== _t120 && (F[103] = _t120.MIN_EXT, F[104] = _t120.MAX_EXT);
    }
    var H = {
      200: 0,
      201: 1,
      202: 768,
      204: 770,
      210: 776,
      208: 774,
      206: 772,
      203: 769,
      205: 771,
      209: 775,
      207: 773
    };

    function U(e, i, r, s, a, o, l, c) {
      if (0 !== e) {
        if (!1 === d && (O(3042), d = !0), 5 === e) a = a || i, o = o || r, l = l || s, i === f && a === v || (t.blendEquationSeparate(F[i], F[a]), f = i, v = a), r === m && s === g && o === y && l === x || (t.blendFuncSeparate(H[r], H[s], H[o], H[l]), m = r, g = s, y = o, x = l), p = e, _ = null;else if (e !== p || c !== _) {
          if (f === n && v === n || (t.blendEquation(32774), f = n, v = n), c) switch (e) {
            case 1:
              t.blendFuncSeparate(1, 771, 1, 771);
              break;

            case 2:
              t.blendFunc(1, 1);
              break;

            case 3:
              t.blendFuncSeparate(0, 0, 769, 771);
              break;

            case 4:
              t.blendFuncSeparate(0, 768, 0, 770);
              break;

            default:
              console.error("THREE.WebGLState: Invalid blending: ", e);
          } else switch (e) {
            case 1:
              t.blendFuncSeparate(770, 771, 1, 771);
              break;

            case 2:
              t.blendFunc(770, 1);
              break;

            case 3:
              t.blendFunc(0, 769);
              break;

            case 4:
              t.blendFunc(0, 768);
              break;

            default:
              console.error("THREE.WebGLState: Invalid blending: ", e);
          }
          m = null, g = null, y = null, x = null, p = e, _ = c;
        }
      } else !0 === d && (z(3042), d = !1);
    }

    function G(e) {
      b !== e && (e ? t.frontFace(2304) : t.frontFace(2305), b = e);
    }

    function k(e) {
      0 !== e ? (O(2884), e !== w && (1 === e ? t.cullFace(1029) : 2 === e ? t.cullFace(1028) : t.cullFace(1032))) : z(2884), w = e;
    }

    function V(e, n, i) {
      e ? (O(32823), S === n && T === i || (t.polygonOffset(n, i), S = n, T = i)) : z(32823);
    }

    function W(e) {
      void 0 === e && (e = 33984 + E - 1), C !== e && (t.activeTexture(e), C = e);
    }

    return {
      buffers: {
        color: s,
        depth: a,
        stencil: o
      },
      enable: O,
      disable: z,
      bindFramebuffer: function bindFramebuffer(e, n) {
        null === n && null !== c && (n = c), h[e] !== n && (t.bindFramebuffer(e, n), h[e] = n);
      },
      bindXRFramebuffer: function bindXRFramebuffer(e) {
        e !== c && (t.bindFramebuffer(36160, e), c = e);
      },
      useProgram: function useProgram(e) {
        return u !== e && (t.useProgram(e), u = e, !0);
      },
      setBlending: U,
      setMaterial: function setMaterial(t, e) {
        2 === t.side ? z(2884) : O(2884);
        var n = 1 === t.side;
        e && (n = !n), G(n), 1 === t.blending && !1 === t.transparent ? U(0) : U(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha), a.setFunc(t.depthFunc), a.setTest(t.depthTest), a.setMask(t.depthWrite), s.setMask(t.colorWrite);
        var i = t.stencilWrite;
        o.setTest(i), i && (o.setMask(t.stencilWriteMask), o.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask), o.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)), V(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits), !0 === t.alphaToCoverage ? O(32926) : z(32926);
      },
      setFlipSided: G,
      setCullFace: k,
      setLineWidth: function setLineWidth(e) {
        e !== M && (A && t.lineWidth(e), M = e);
      },
      setPolygonOffset: V,
      setScissorTest: function setScissorTest(t) {
        t ? O(3089) : z(3089);
      },
      activeTexture: W,
      bindTexture: function bindTexture(e, n) {
        null === C && W();
        var i = P[C];
        void 0 === i && (i = {
          type: void 0,
          texture: void 0
        }, P[C] = i), i.type === e && i.texture === n || (t.bindTexture(e, n || B[e]), i.type = e, i.texture = n);
      },
      unbindTexture: function unbindTexture() {
        var e = P[C];
        void 0 !== e && void 0 !== e.type && (t.bindTexture(e.type, null), e.type = void 0, e.texture = void 0);
      },
      compressedTexImage2D: function compressedTexImage2D() {
        try {
          t.compressedTexImage2D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      texImage2D: function texImage2D() {
        try {
          t.texImage2D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      texImage3D: function texImage3D() {
        try {
          t.texImage3D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      scissor: function scissor(e) {
        !1 === D.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), D.copy(e));
      },
      viewport: function viewport(e) {
        !1 === I.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), I.copy(e));
      },
      reset: function reset() {
        t.disable(3042), t.disable(2884), t.disable(2929), t.disable(32823), t.disable(3089), t.disable(2960), t.disable(32926), t.blendEquation(32774), t.blendFunc(1, 0), t.blendFuncSeparate(1, 0, 1, 0), t.colorMask(!0, !0, !0, !0), t.clearColor(0, 0, 0, 0), t.depthMask(!0), t.depthFunc(513), t.clearDepth(1), t.stencilMask(4294967295), t.stencilFunc(519, 0, 4294967295), t.stencilOp(7680, 7680, 7680), t.clearStencil(0), t.cullFace(1029), t.frontFace(2305), t.polygonOffset(0, 0), t.activeTexture(33984), t.bindFramebuffer(36160, null), !0 === r && (t.bindFramebuffer(36009, null), t.bindFramebuffer(36008, null)), t.useProgram(null), t.lineWidth(1), t.scissor(0, 0, t.canvas.width, t.canvas.height), t.viewport(0, 0, t.canvas.width, t.canvas.height), l = {}, C = null, P = {}, c = null, h = {}, u = null, d = !1, p = null, f = null, m = null, g = null, v = null, y = null, x = null, _ = !1, b = null, w = null, M = null, S = null, T = null, D.set(0, 0, t.canvas.width, t.canvas.height), I.set(0, 0, t.canvas.width, t.canvas.height), s.reset(), a.reset(), o.reset();
      }
    };
  }

  function rs(t, e, n, i, r, s, a) {
    var _j, _q;

    var o = r.isWebGL2,
        l = r.maxTextures,
        c = r.maxCubemapSize,
        x = r.maxTextureSize,
        R = r.maxSamples,
        C = new WeakMap();
    var P,
        D = !1;

    try {
      D = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d");
    } catch (t) {}

    function I(t, e) {
      return D ? new OffscreenCanvas(t, e) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
    }

    function N(t, e, n, i) {
      var r = 1;

      if ((t.width > i || t.height > i) && (r = i / Math.max(t.width, t.height)), r < 1 || !0 === e) {
        if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
          var _i77 = e ? ot.floorPowerOfTwo : Math.floor,
              _s27 = _i77(r * t.width),
              _a21 = _i77(r * t.height);

          void 0 === P && (P = I(_s27, _a21));

          var _o13 = n ? I(_s27, _a21) : P;

          _o13.width = _s27, _o13.height = _a21;
          return _o13.getContext("2d").drawImage(t, 0, 0, _s27, _a21), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t.width + "x" + t.height + ") to (" + _s27 + "x" + _a21 + ")."), _o13;
        }

        return "data" in t && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t.width + "x" + t.height + ")."), t;
      }

      return t;
    }

    function B(t) {
      return ot.isPowerOfTwo(t.width) && ot.isPowerOfTwo(t.height);
    }

    function O(t, e) {
      return t.generateMipmaps && e && t.minFilter !== p && t.minFilter !== g;
    }

    function z(e, n, r, s) {
      t.generateMipmap(e);
      i.get(n).__maxMipLevel = Math.log2(Math.max(r, s));
    }

    function F(n, i, r) {
      if (!1 === o) return i;

      if (null !== n) {
        if (void 0 !== t[n]) return t[n];
        console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'");
      }

      var s = i;
      return 6403 === i && (5126 === r && (s = 33326), 5131 === r && (s = 33325), 5121 === r && (s = 33321)), 6407 === i && (5126 === r && (s = 34837), 5131 === r && (s = 34843), 5121 === r && (s = 32849)), 6408 === i && (5126 === r && (s = 34836), 5131 === r && (s = 34842), 5121 === r && (s = 32856)), 33325 !== s && 33326 !== s && 34842 !== s && 34836 !== s || e.get("EXT_color_buffer_float"), s;
    }

    function H(t) {
      return t === p || t === f || t === m ? 9728 : 9729;
    }

    function U(e) {
      var n = e.target;
      n.removeEventListener("dispose", U), function (e) {
        var n = i.get(e);
        if (void 0 === n.__webglInit) return;
        t.deleteTexture(n.__webglTexture), i.remove(e);
      }(n), n.isVideoTexture && C.delete(n), a.memory.textures--;
    }

    function G(e) {
      var n = e.target;
      n.removeEventListener("dispose", G), function (e) {
        var n = e.texture,
            r = i.get(e),
            s = i.get(n);
        if (!e) return;
        void 0 !== s.__webglTexture && t.deleteTexture(s.__webglTexture);
        e.depthTexture && e.depthTexture.dispose();
        if (e.isWebGLCubeRenderTarget) for (var _e82 = 0; _e82 < 6; _e82++) {
          t.deleteFramebuffer(r.__webglFramebuffer[_e82]), r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer[_e82]);
        } else t.deleteFramebuffer(r.__webglFramebuffer), r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer), r.__webglMultisampledFramebuffer && t.deleteFramebuffer(r.__webglMultisampledFramebuffer), r.__webglColorRenderbuffer && t.deleteRenderbuffer(r.__webglColorRenderbuffer), r.__webglDepthRenderbuffer && t.deleteRenderbuffer(r.__webglDepthRenderbuffer);
        i.remove(n), i.remove(e);
      }(n), a.memory.textures--;
    }

    var k = 0;

    function V(t, e) {
      var r = i.get(t);

      if (t.isVideoTexture && function (t) {
        var e = a.render.frame;
        C.get(t) !== e && (C.set(t, e), t.update());
      }(t), t.version > 0 && r.__version !== t.version) {
        var _n90 = t.image;
        if (void 0 === _n90) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else {
          if (!1 !== _n90.complete) return void Z(r, t, e);
          console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
        }
      }

      n.activeTexture(33984 + e), n.bindTexture(3553, r.__webglTexture);
    }

    function W(e, r) {
      var a = i.get(e);
      e.version > 0 && a.__version !== e.version ? function (e, i, r) {
        if (6 !== i.image.length) return;
        Y(e, i), n.activeTexture(33984 + r), n.bindTexture(34067, e.__webglTexture), t.pixelStorei(37440, i.flipY), t.pixelStorei(37441, i.premultiplyAlpha), t.pixelStorei(3317, i.unpackAlignment), t.pixelStorei(37443, 0);
        var a = i && (i.isCompressedTexture || i.image[0].isCompressedTexture),
            l = i.image[0] && i.image[0].isDataTexture,
            h = [];

        for (var _t121 = 0; _t121 < 6; _t121++) {
          h[_t121] = a || l ? l ? i.image[_t121].image : i.image[_t121] : N(i.image[_t121], !1, !0, c);
        }

        var u = h[0],
            d = B(u) || o,
            p = s.convert(i.format),
            f = s.convert(i.type),
            m = F(i.internalFormat, p, f);
        var g;

        if (X(34067, i, d), a) {
          for (var _t122 = 0; _t122 < 6; _t122++) {
            g = h[_t122].mipmaps;

            for (var _e83 = 0; _e83 < g.length; _e83++) {
              var _r60 = g[_e83];
              i.format !== E && i.format !== T ? null !== p ? n.compressedTexImage2D(34069 + _t122, _e83, m, _r60.width, _r60.height, 0, _r60.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : n.texImage2D(34069 + _t122, _e83, m, _r60.width, _r60.height, 0, p, f, _r60.data);
            }
          }

          e.__maxMipLevel = g.length - 1;
        } else {
          g = i.mipmaps;

          for (var _t123 = 0; _t123 < 6; _t123++) {
            if (l) {
              n.texImage2D(34069 + _t123, 0, m, h[_t123].width, h[_t123].height, 0, p, f, h[_t123].data);

              for (var _e84 = 0; _e84 < g.length; _e84++) {
                var _i78 = g[_e84].image[_t123].image;
                n.texImage2D(34069 + _t123, _e84 + 1, m, _i78.width, _i78.height, 0, p, f, _i78.data);
              }
            } else {
              n.texImage2D(34069 + _t123, 0, m, p, f, h[_t123]);

              for (var _e85 = 0; _e85 < g.length; _e85++) {
                var _i79 = g[_e85];
                n.texImage2D(34069 + _t123, _e85 + 1, m, p, f, _i79.image[_t123]);
              }
            }
          }

          e.__maxMipLevel = g.length;
        }

        O(i, d) && z(34067, i, u.width, u.height);
        e.__version = i.version, i.onUpdate && i.onUpdate(i);
      }(a, e, r) : (n.activeTexture(33984 + r), n.bindTexture(34067, a.__webglTexture));
    }

    var j = (_j = {}, _defineProperty(_j, h, 10497), _defineProperty(_j, u, 33071), _defineProperty(_j, d, 33648), _j),
        q = (_q = {}, _defineProperty(_q, p, 9728), _defineProperty(_q, f, 9984), _defineProperty(_q, m, 9986), _defineProperty(_q, g, 9729), _defineProperty(_q, v, 9985), _defineProperty(_q, y, 9987), _q);

    function X(n, s, a) {
      if (a ? (t.texParameteri(n, 10242, j[s.wrapS]), t.texParameteri(n, 10243, j[s.wrapT]), 32879 !== n && 35866 !== n || t.texParameteri(n, 32882, j[s.wrapR]), t.texParameteri(n, 10240, q[s.magFilter]), t.texParameteri(n, 10241, q[s.minFilter])) : (t.texParameteri(n, 10242, 33071), t.texParameteri(n, 10243, 33071), 32879 !== n && 35866 !== n || t.texParameteri(n, 32882, 33071), s.wrapS === u && s.wrapT === u || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), t.texParameteri(n, 10240, H(s.magFilter)), t.texParameteri(n, 10241, H(s.minFilter)), s.minFilter !== p && s.minFilter !== g && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), !0 === e.has("EXT_texture_filter_anisotropic")) {
        var _a22 = e.get("EXT_texture_filter_anisotropic");

        if (s.type === w && !1 === e.has("OES_texture_float_linear")) return;
        if (!1 === o && s.type === M && !1 === e.has("OES_texture_half_float_linear")) return;
        (s.anisotropy > 1 || i.get(s).__currentAnisotropy) && (t.texParameterf(n, _a22.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(s.anisotropy, r.getMaxAnisotropy())), i.get(s).__currentAnisotropy = s.anisotropy);
      }
    }

    function Y(e, n) {
      void 0 === e.__webglInit && (e.__webglInit = !0, n.addEventListener("dispose", U), e.__webglTexture = t.createTexture(), a.memory.textures++);
    }

    function Z(e, i, r) {
      var a = 3553;
      i.isDataTexture2DArray && (a = 35866), i.isDataTexture3D && (a = 32879), Y(e, i), n.activeTexture(33984 + r), n.bindTexture(a, e.__webglTexture), t.pixelStorei(37440, i.flipY), t.pixelStorei(37441, i.premultiplyAlpha), t.pixelStorei(3317, i.unpackAlignment), t.pixelStorei(37443, 0);

      var l = function (t) {
        return !o && (t.wrapS !== u || t.wrapT !== u || t.minFilter !== p && t.minFilter !== g);
      }(i) && !1 === B(i.image),
          c = N(i.image, l, !1, x),
          h = B(c) || o,
          d = s.convert(i.format);

      var f,
          m = s.convert(i.type),
          v = F(i.internalFormat, d, m);
      X(a, i, h);
      var y = i.mipmaps;
      if (i.isDepthTexture) v = 6402, o ? v = i.type === w ? 36012 : i.type === b ? 33190 : i.type === S ? 35056 : 33189 : i.type === w && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), i.format === A && 6402 === v && i.type !== _ && i.type !== b && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), i.type = _, m = s.convert(i.type)), i.format === L && 6402 === v && (v = 34041, i.type !== S && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), i.type = S, m = s.convert(i.type))), n.texImage2D(3553, 0, v, c.width, c.height, 0, d, m, null);else if (i.isDataTexture) {
        if (y.length > 0 && h) {
          for (var _t124 = 0, _e86 = y.length; _t124 < _e86; _t124++) {
            f = y[_t124], n.texImage2D(3553, _t124, v, f.width, f.height, 0, d, m, f.data);
          }

          i.generateMipmaps = !1, e.__maxMipLevel = y.length - 1;
        } else n.texImage2D(3553, 0, v, c.width, c.height, 0, d, m, c.data), e.__maxMipLevel = 0;
      } else if (i.isCompressedTexture) {
        for (var _t125 = 0, _e87 = y.length; _t125 < _e87; _t125++) {
          f = y[_t125], i.format !== E && i.format !== T ? null !== d ? n.compressedTexImage2D(3553, _t125, v, f.width, f.height, 0, f.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : n.texImage2D(3553, _t125, v, f.width, f.height, 0, d, m, f.data);
        }

        e.__maxMipLevel = y.length - 1;
      } else if (i.isDataTexture2DArray) n.texImage3D(35866, 0, v, c.width, c.height, c.depth, 0, d, m, c.data), e.__maxMipLevel = 0;else if (i.isDataTexture3D) n.texImage3D(32879, 0, v, c.width, c.height, c.depth, 0, d, m, c.data), e.__maxMipLevel = 0;else if (y.length > 0 && h) {
        for (var _t126 = 0, _e88 = y.length; _t126 < _e88; _t126++) {
          f = y[_t126], n.texImage2D(3553, _t126, v, d, m, f);
        }

        i.generateMipmaps = !1, e.__maxMipLevel = y.length - 1;
      } else n.texImage2D(3553, 0, v, d, m, c), e.__maxMipLevel = 0;
      O(i, h) && z(a, i, c.width, c.height), e.__version = i.version, i.onUpdate && i.onUpdate(i);
    }

    function J(e, r, a, o) {
      var l = r.texture,
          c = s.convert(l.format),
          h = s.convert(l.type),
          u = F(l.internalFormat, c, h);
      32879 === o || 35866 === o ? n.texImage3D(o, 0, u, r.width, r.height, r.depth, 0, c, h, null) : n.texImage2D(o, 0, u, r.width, r.height, 0, c, h, null), n.bindFramebuffer(36160, e), t.framebufferTexture2D(36160, a, o, i.get(l).__webglTexture, 0), n.bindFramebuffer(36160, null);
    }

    function Q(e, n, i) {
      if (t.bindRenderbuffer(36161, e), n.depthBuffer && !n.stencilBuffer) {
        var _r61 = 33189;

        if (i) {
          var _e89 = n.depthTexture;
          _e89 && _e89.isDepthTexture && (_e89.type === w ? _r61 = 36012 : _e89.type === b && (_r61 = 33190));

          var _i80 = $(n);

          t.renderbufferStorageMultisample(36161, _i80, _r61, n.width, n.height);
        } else t.renderbufferStorage(36161, _r61, n.width, n.height);

        t.framebufferRenderbuffer(36160, 36096, 36161, e);
      } else if (n.depthBuffer && n.stencilBuffer) {
        if (i) {
          var _e90 = $(n);

          t.renderbufferStorageMultisample(36161, _e90, 35056, n.width, n.height);
        } else t.renderbufferStorage(36161, 34041, n.width, n.height);

        t.framebufferRenderbuffer(36160, 33306, 36161, e);
      } else {
        var _e91 = n.texture,
            _r62 = s.convert(_e91.format),
            _a23 = s.convert(_e91.type),
            _o14 = F(_e91.internalFormat, _r62, _a23);

        if (i) {
          var _e92 = $(n);

          t.renderbufferStorageMultisample(36161, _e92, _o14, n.width, n.height);
        } else t.renderbufferStorage(36161, _o14, n.width, n.height);
      }

      t.bindRenderbuffer(36161, null);
    }

    function K(e) {
      var r = i.get(e),
          s = !0 === e.isWebGLCubeRenderTarget;

      if (e.depthTexture) {
        if (s) throw new Error("target.depthTexture not supported in Cube render targets");
        !function (e, r) {
          if (r && r.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
          if (n.bindFramebuffer(36160, e), !r.depthTexture || !r.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
          i.get(r.depthTexture).__webglTexture && r.depthTexture.image.width === r.width && r.depthTexture.image.height === r.height || (r.depthTexture.image.width = r.width, r.depthTexture.image.height = r.height, r.depthTexture.needsUpdate = !0), V(r.depthTexture, 0);

          var s = i.get(r.depthTexture).__webglTexture;

          if (r.depthTexture.format === A) t.framebufferTexture2D(36160, 36096, 3553, s, 0);else {
            if (r.depthTexture.format !== L) throw new Error("Unknown depthTexture format");
            t.framebufferTexture2D(36160, 33306, 3553, s, 0);
          }
        }(r.__webglFramebuffer, e);
      } else if (s) {
        r.__webglDepthbuffer = [];

        for (var _i81 = 0; _i81 < 6; _i81++) {
          n.bindFramebuffer(36160, r.__webglFramebuffer[_i81]), r.__webglDepthbuffer[_i81] = t.createRenderbuffer(), Q(r.__webglDepthbuffer[_i81], e, !1);
        }
      } else n.bindFramebuffer(36160, r.__webglFramebuffer), r.__webglDepthbuffer = t.createRenderbuffer(), Q(r.__webglDepthbuffer, e, !1);

      n.bindFramebuffer(36160, null);
    }

    function $(t) {
      return o && t.isWebGLMultisampleRenderTarget ? Math.min(R, t.samples) : 0;
    }

    var tt = !1,
        et = !1;
    this.allocateTextureUnit = function () {
      var t = k;
      return t >= l && console.warn("THREE.WebGLTextures: Trying to use " + t + " texture units while this GPU supports only " + l), k += 1, t;
    }, this.resetTextureUnits = function () {
      k = 0;
    }, this.setTexture2D = V, this.setTexture2DArray = function (t, e) {
      var r = i.get(t);
      t.version > 0 && r.__version !== t.version ? Z(r, t, e) : (n.activeTexture(33984 + e), n.bindTexture(35866, r.__webglTexture));
    }, this.setTexture3D = function (t, e) {
      var r = i.get(t);
      t.version > 0 && r.__version !== t.version ? Z(r, t, e) : (n.activeTexture(33984 + e), n.bindTexture(32879, r.__webglTexture));
    }, this.setTextureCube = W, this.setupRenderTarget = function (e) {
      var r = e.texture,
          l = i.get(e),
          c = i.get(r);
      e.addEventListener("dispose", G), c.__webglTexture = t.createTexture(), c.__version = r.version, a.memory.textures++;
      var h = !0 === e.isWebGLCubeRenderTarget,
          u = !0 === e.isWebGLMultisampleRenderTarget,
          d = r.isDataTexture3D || r.isDataTexture2DArray,
          p = B(e) || o;

      if (!o || r.format !== T || r.type !== w && r.type !== M || (r.format = E, console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")), h) {
        l.__webglFramebuffer = [];

        for (var _e93 = 0; _e93 < 6; _e93++) {
          l.__webglFramebuffer[_e93] = t.createFramebuffer();
        }
      } else if (l.__webglFramebuffer = t.createFramebuffer(), u) if (o) {
        l.__webglMultisampledFramebuffer = t.createFramebuffer(), l.__webglColorRenderbuffer = t.createRenderbuffer(), t.bindRenderbuffer(36161, l.__webglColorRenderbuffer);

        var _i82 = s.convert(r.format),
            _a24 = s.convert(r.type),
            _o15 = F(r.internalFormat, _i82, _a24),
            _c14 = $(e);

        t.renderbufferStorageMultisample(36161, _c14, _o15, e.width, e.height), n.bindFramebuffer(36160, l.__webglMultisampledFramebuffer), t.framebufferRenderbuffer(36160, 36064, 36161, l.__webglColorRenderbuffer), t.bindRenderbuffer(36161, null), e.depthBuffer && (l.__webglDepthRenderbuffer = t.createRenderbuffer(), Q(l.__webglDepthRenderbuffer, e, !0)), n.bindFramebuffer(36160, null);
      } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");

      if (h) {
        n.bindTexture(34067, c.__webglTexture), X(34067, r, p);

        for (var _t127 = 0; _t127 < 6; _t127++) {
          J(l.__webglFramebuffer[_t127], e, 36064, 34069 + _t127);
        }

        O(r, p) && z(34067, r, e.width, e.height), n.bindTexture(34067, null);
      } else {
        var _t128 = 3553;
        if (d) if (o) {
          _t128 = r.isDataTexture3D ? 32879 : 35866;
        } else console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.");
        n.bindTexture(_t128, c.__webglTexture), X(_t128, r, p), J(l.__webglFramebuffer, e, 36064, _t128), O(r, p) && z(3553, r, e.width, e.height), n.bindTexture(3553, null);
      }

      e.depthBuffer && K(e);
    }, this.updateRenderTargetMipmap = function (t) {
      var e = t.texture;

      if (O(e, B(t) || o)) {
        var _r63 = t.isWebGLCubeRenderTarget ? 34067 : 3553,
            _s28 = i.get(e).__webglTexture;

        n.bindTexture(_r63, _s28), z(_r63, e, t.width, t.height), n.bindTexture(_r63, null);
      }
    }, this.updateMultisampleRenderTarget = function (e) {
      if (e.isWebGLMultisampleRenderTarget) if (o) {
        var _r64 = i.get(e);

        n.bindFramebuffer(36008, _r64.__webglMultisampledFramebuffer), n.bindFramebuffer(36009, _r64.__webglFramebuffer);
        var _s29 = e.width,
            _a25 = e.height;
        var _o16 = 16384;
        e.depthBuffer && (_o16 |= 256), e.stencilBuffer && (_o16 |= 1024), t.blitFramebuffer(0, 0, _s29, _a25, 0, 0, _s29, _a25, _o16, 9728), n.bindFramebuffer(36160, _r64.__webglMultisampledFramebuffer);
      } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
    }, this.safeSetTexture2D = function (t, e) {
      t && t.isWebGLRenderTarget && (!1 === tt && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."), tt = !0), t = t.texture), V(t, e);
    }, this.safeSetTextureCube = function (t, e) {
      t && t.isWebGLCubeRenderTarget && (!1 === et && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), et = !0), t = t.texture), W(t, e);
    };
  }

  function ss(t, e, n) {
    var i = n.isWebGL2;
    return {
      convert: function convert(t) {
        var n;
        if (t === x) return 5121;
        if (1017 === t) return 32819;
        if (1018 === t) return 32820;
        if (1019 === t) return 33635;
        if (1010 === t) return 5120;
        if (1011 === t) return 5122;
        if (t === _) return 5123;
        if (1013 === t) return 5124;
        if (t === b) return 5125;
        if (t === w) return 5126;
        if (t === M) return i ? 5131 : (n = e.get("OES_texture_half_float"), null !== n ? n.HALF_FLOAT_OES : null);
        if (1021 === t) return 6406;
        if (t === T) return 6407;
        if (t === E) return 6408;
        if (1024 === t) return 6409;
        if (1025 === t) return 6410;
        if (t === A) return 6402;
        if (t === L) return 34041;
        if (1028 === t) return 6403;
        if (1029 === t) return 36244;
        if (1030 === t) return 33319;
        if (1031 === t) return 33320;
        if (1032 === t) return 36248;
        if (1033 === t) return 36249;

        if (t === R || t === C || t === P || t === D) {
          if (n = e.get("WEBGL_compressed_texture_s3tc"), null === n) return null;
          if (t === R) return n.COMPRESSED_RGB_S3TC_DXT1_EXT;
          if (t === C) return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;
          if (t === P) return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;
          if (t === D) return n.COMPRESSED_RGBA_S3TC_DXT5_EXT;
        }

        if (t === I || t === N || t === B || t === O) {
          if (n = e.get("WEBGL_compressed_texture_pvrtc"), null === n) return null;
          if (t === I) return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
          if (t === N) return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
          if (t === B) return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
          if (t === O) return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
        }

        if (36196 === t) return n = e.get("WEBGL_compressed_texture_etc1"), null !== n ? n.COMPRESSED_RGB_ETC1_WEBGL : null;

        if ((t === z || t === F) && (n = e.get("WEBGL_compressed_texture_etc"), null !== n)) {
          if (t === z) return n.COMPRESSED_RGB8_ETC2;
          if (t === F) return n.COMPRESSED_RGBA8_ETC2_EAC;
        }

        return 37808 === t || 37809 === t || 37810 === t || 37811 === t || 37812 === t || 37813 === t || 37814 === t || 37815 === t || 37816 === t || 37817 === t || 37818 === t || 37819 === t || 37820 === t || 37821 === t || 37840 === t || 37841 === t || 37842 === t || 37843 === t || 37844 === t || 37845 === t || 37846 === t || 37847 === t || 37848 === t || 37849 === t || 37850 === t || 37851 === t || 37852 === t || 37853 === t ? (n = e.get("WEBGL_compressed_texture_astc"), null !== n ? t : null) : 36492 === t ? (n = e.get("EXT_texture_compression_bptc"), null !== n ? t : null) : t === S ? i ? 34042 : (n = e.get("WEBGL_depth_texture"), null !== n ? n.UNSIGNED_INT_24_8_WEBGL : null) : void 0;
      }
    };
  }

  var as = /*#__PURE__*/function (_Vn) {
    _inherits(as, _Vn);

    var _super15 = _createSuper(as);

    function as() {
      var _this15;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      _classCallCheck(this, as);

      _this15 = _super15.call(this), _this15.cameras = t;
      return _this15;
    }

    return as;
  }(Vn);

  as.prototype.isArrayCamera = !0;

  var os = /*#__PURE__*/function (_be2) {
    _inherits(os, _be2);

    var _super16 = _createSuper(os);

    function os() {
      var _this16;

      _classCallCheck(this, os);

      _this16 = _super16.call(this), _this16.type = "Group";
      return _this16;
    }

    return os;
  }(be);

  function ls() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }

  function cs(t, e) {
    var n = this,
        i = t.state;
    var r = null,
        s = 1,
        a = null,
        o = "local-floor",
        l = null;
    var c = [],
        h = new Map(),
        u = new Vn();
    u.layers.enable(1), u.viewport = new mt();
    var d = new Vn();
    d.layers.enable(2), d.viewport = new mt();
    var p = [u, d],
        f = new as();
    f.layers.enable(1), f.layers.enable(2);
    var m = null,
        g = null;

    function v(t) {
      var e = h.get(t.inputSource);
      e && e.dispatchEvent({
        type: t.type,
        data: t.inputSource
      });
    }

    function y() {
      h.forEach(function (t, e) {
        t.disconnect(e);
      }), h.clear(), m = null, g = null, i.bindXRFramebuffer(null), t.setRenderTarget(t.getRenderTarget()), S.stop(), n.isPresenting = !1, n.dispatchEvent({
        type: "sessionend"
      });
    }

    function x(t) {
      var e = r.inputSources;

      for (var _t129 = 0; _t129 < c.length; _t129++) {
        h.set(e[_t129], c[_t129]);
      }

      for (var _e94 = 0; _e94 < t.removed.length; _e94++) {
        var _n91 = t.removed[_e94],
            _i83 = h.get(_n91);

        _i83 && (_i83.dispatchEvent({
          type: "disconnected",
          data: _n91
        }), h.delete(_n91));
      }

      for (var _e95 = 0; _e95 < t.added.length; _e95++) {
        var _n92 = t.added[_e95],
            _i84 = h.get(_n92);

        _i84 && _i84.dispatchEvent({
          type: "connected",
          data: _n92
        });
      }
    }

    this.enabled = !1, this.isPresenting = !1, this.getController = function (t) {
      var e = c[t];
      return void 0 === e && (e = new ls(), c[t] = e), e.getTargetRaySpace();
    }, this.getControllerGrip = function (t) {
      var e = c[t];
      return void 0 === e && (e = new ls(), c[t] = e), e.getGripSpace();
    }, this.getHand = function (t) {
      var e = c[t];
      return void 0 === e && (e = new ls(), c[t] = e), e.getHandSpace();
    }, this.setFramebufferScaleFactor = function (t) {
      s = t, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function (t) {
      o = t, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function () {
      return a;
    }, this.getSession = function () {
      return r;
    }, this.setSession = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(t) {
        var _t130, _i85, _l15;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(r = t, null !== r)) {
                  _context.next = 16;
                  break;
                }

                r.addEventListener("select", v), r.addEventListener("selectstart", v), r.addEventListener("selectend", v), r.addEventListener("squeeze", v), r.addEventListener("squeezestart", v), r.addEventListener("squeezeend", v), r.addEventListener("end", y), r.addEventListener("inputsourceschange", x);
                _t130 = e.getContextAttributes();
                _context.t0 = !0 !== _t130.xrCompatible;

                if (!_context.t0) {
                  _context.next = 7;
                  break;
                }

                _context.next = 7;
                return e.makeXRCompatible();

              case 7:
                _i85 = {
                  antialias: _t130.antialias,
                  alpha: _t130.alpha,
                  depth: _t130.depth,
                  stencil: _t130.stencil,
                  framebufferScaleFactor: s
                }, _l15 = new XRWebGLLayer(r, e, _i85);
                r.updateRenderState({
                  baseLayer: _l15
                });
                _context.next = 11;
                return r.requestReferenceSpace(o);

              case 11:
                a = _context.sent;
                S.setContext(r);
                S.start();
                n.isPresenting = !0;
                n.dispatchEvent({
                  type: "sessionstart"
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x3) {
        return _ref.apply(this, arguments);
      };
    }();

    var _ = new xt(),
        b = new xt();

    function w(t, e) {
      null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix), t.matrixWorldInverse.copy(t.matrixWorld).invert();
    }

    this.getCamera = function (t) {
      f.near = d.near = u.near = t.near, f.far = d.far = u.far = t.far, m === f.near && g === f.far || (r.updateRenderState({
        depthNear: f.near,
        depthFar: f.far
      }), m = f.near, g = f.far);
      var e = t.parent,
          n = f.cameras;
      w(f, e);

      for (var _t131 = 0; _t131 < n.length; _t131++) {
        w(n[_t131], e);
      }

      t.matrixWorld.copy(f.matrixWorld), t.matrix.copy(f.matrix), t.matrix.decompose(t.position, t.quaternion, t.scale);
      var i = t.children;

      for (var _t132 = 0, _e96 = i.length; _t132 < _e96; _t132++) {
        i[_t132].updateMatrixWorld(!0);
      }

      return 2 === n.length ? function (t, e, n) {
        _.setFromMatrixPosition(e.matrixWorld), b.setFromMatrixPosition(n.matrixWorld);

        var i = _.distanceTo(b),
            r = e.projectionMatrix.elements,
            s = n.projectionMatrix.elements,
            a = r[14] / (r[10] - 1),
            o = r[14] / (r[10] + 1),
            l = (r[9] + 1) / r[5],
            c = (r[9] - 1) / r[5],
            h = (r[8] - 1) / r[0],
            u = (s[8] + 1) / s[0],
            d = a * h,
            p = a * u,
            f = i / (-h + u),
            m = f * -h;

        e.matrixWorld.decompose(t.position, t.quaternion, t.scale), t.translateX(m), t.translateZ(f), t.matrixWorld.compose(t.position, t.quaternion, t.scale), t.matrixWorldInverse.copy(t.matrixWorld).invert();
        var g = a + f,
            v = o + f,
            y = d - m,
            x = p + (i - m),
            w = l * o / v * g,
            M = c * o / v * g;
        t.projectionMatrix.makePerspective(y, x, w, M, g, v);
      }(f, u, d) : f.projectionMatrix.copy(u.projectionMatrix), f;
    };

    var M = null;
    var S = new Kn();
    S.setAnimationLoop(function (t, e) {
      if (l = e.getViewerPose(a), null !== l) {
        var _t133 = l.views,
            _e97 = r.renderState.baseLayer;
        i.bindXRFramebuffer(_e97.framebuffer);

        var _n93 = !1;

        _t133.length !== f.cameras.length && (f.cameras.length = 0, _n93 = !0);

        for (var _i86 = 0; _i86 < _t133.length; _i86++) {
          var _r65 = _t133[_i86],
              _s30 = _e97.getViewport(_r65),
              _a26 = p[_i86];

          _a26.matrix.fromArray(_r65.transform.matrix), _a26.projectionMatrix.fromArray(_r65.projectionMatrix), _a26.viewport.set(_s30.x, _s30.y, _s30.width, _s30.height), 0 === _i86 && f.matrix.copy(_a26.matrix), !0 === _n93 && f.cameras.push(_a26);
        }
      }

      var n = r.inputSources;

      for (var _t134 = 0; _t134 < c.length; _t134++) {
        var _i87 = c[_t134],
            _r66 = n[_t134];

        _i87.update(_r66, e, a);
      }

      M && M(t, e);
    }), this.setAnimationLoop = function (t) {
      M = t;
    }, this.dispose = function () {};
  }

  function hs(t) {
    function e(e, n) {
      e.opacity.value = n.opacity, n.color && e.diffuse.value.copy(n.color), n.emissive && e.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity), n.map && (e.map.value = n.map), n.alphaMap && (e.alphaMap.value = n.alphaMap), n.specularMap && (e.specularMap.value = n.specularMap);
      var i = t.get(n).envMap;

      if (i) {
        e.envMap.value = i, e.flipEnvMap.value = i.isCubeTexture && i._needsFlipEnvMap ? -1 : 1, e.reflectivity.value = n.reflectivity, e.refractionRatio.value = n.refractionRatio;

        var _r67 = t.get(i).__maxMipLevel;

        void 0 !== _r67 && (e.maxMipLevel.value = _r67);
      }

      var r, s;
      n.lightMap && (e.lightMap.value = n.lightMap, e.lightMapIntensity.value = n.lightMapIntensity), n.aoMap && (e.aoMap.value = n.aoMap, e.aoMapIntensity.value = n.aoMapIntensity), n.map ? r = n.map : n.specularMap ? r = n.specularMap : n.displacementMap ? r = n.displacementMap : n.normalMap ? r = n.normalMap : n.bumpMap ? r = n.bumpMap : n.roughnessMap ? r = n.roughnessMap : n.metalnessMap ? r = n.metalnessMap : n.alphaMap ? r = n.alphaMap : n.emissiveMap ? r = n.emissiveMap : n.clearcoatMap ? r = n.clearcoatMap : n.clearcoatNormalMap ? r = n.clearcoatNormalMap : n.clearcoatRoughnessMap && (r = n.clearcoatRoughnessMap), void 0 !== r && (r.isWebGLRenderTarget && (r = r.texture), !0 === r.matrixAutoUpdate && r.updateMatrix(), e.uvTransform.value.copy(r.matrix)), n.aoMap ? s = n.aoMap : n.lightMap && (s = n.lightMap), void 0 !== s && (s.isWebGLRenderTarget && (s = s.texture), !0 === s.matrixAutoUpdate && s.updateMatrix(), e.uv2Transform.value.copy(s.matrix));
    }

    function n(e, n) {
      e.roughness.value = n.roughness, e.metalness.value = n.metalness, n.roughnessMap && (e.roughnessMap.value = n.roughnessMap), n.metalnessMap && (e.metalnessMap.value = n.metalnessMap), n.emissiveMap && (e.emissiveMap.value = n.emissiveMap), n.bumpMap && (e.bumpMap.value = n.bumpMap, e.bumpScale.value = n.bumpScale, 1 === n.side && (e.bumpScale.value *= -1)), n.normalMap && (e.normalMap.value = n.normalMap, e.normalScale.value.copy(n.normalScale), 1 === n.side && e.normalScale.value.negate()), n.displacementMap && (e.displacementMap.value = n.displacementMap, e.displacementScale.value = n.displacementScale, e.displacementBias.value = n.displacementBias);
      t.get(n).envMap && (e.envMapIntensity.value = n.envMapIntensity);
    }

    return {
      refreshFogUniforms: function refreshFogUniforms(t, e) {
        t.fogColor.value.copy(e.color), e.isFog ? (t.fogNear.value = e.near, t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density);
      },
      refreshMaterialUniforms: function refreshMaterialUniforms(t, i, r, s) {
        i.isMeshBasicMaterial ? e(t, i) : i.isMeshLambertMaterial ? (e(t, i), function (t, e) {
          e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
        }(t, i)) : i.isMeshToonMaterial ? (e(t, i), function (t, e) {
          e.gradientMap && (t.gradientMap.value = e.gradientMap);
          e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
          e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1));
          e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
          e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
        }(t, i)) : i.isMeshPhongMaterial ? (e(t, i), function (t, e) {
          t.specular.value.copy(e.specular), t.shininess.value = Math.max(e.shininess, 1e-4), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
          e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1));
          e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
          e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
        }(t, i)) : i.isMeshStandardMaterial ? (e(t, i), i.isMeshPhysicalMaterial ? function (t, e) {
          n(t, e), t.reflectivity.value = e.reflectivity, t.clearcoat.value = e.clearcoat, t.clearcoatRoughness.value = e.clearcoatRoughness, e.sheen && t.sheen.value.copy(e.sheen);
          e.clearcoatMap && (t.clearcoatMap.value = e.clearcoatMap);
          e.clearcoatRoughnessMap && (t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap);
          e.clearcoatNormalMap && (t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale), t.clearcoatNormalMap.value = e.clearcoatNormalMap, 1 === e.side && t.clearcoatNormalScale.value.negate());
          t.transmission.value = e.transmission, e.transmissionMap && (t.transmissionMap.value = e.transmissionMap);
        }(t, i) : n(t, i)) : i.isMeshMatcapMaterial ? (e(t, i), function (t, e) {
          e.matcap && (t.matcap.value = e.matcap);
          e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1));
          e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
          e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
        }(t, i)) : i.isMeshDepthMaterial ? (e(t, i), function (t, e) {
          e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
        }(t, i)) : i.isMeshDistanceMaterial ? (e(t, i), function (t, e) {
          e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
          t.referencePosition.value.copy(e.referencePosition), t.nearDistance.value = e.nearDistance, t.farDistance.value = e.farDistance;
        }(t, i)) : i.isMeshNormalMaterial ? (e(t, i), function (t, e) {
          e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1));
          e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
          e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
        }(t, i)) : i.isLineBasicMaterial ? (function (t, e) {
          t.diffuse.value.copy(e.color), t.opacity.value = e.opacity;
        }(t, i), i.isLineDashedMaterial && function (t, e) {
          t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale;
        }(t, i)) : i.isPointsMaterial ? function (t, e, n, i) {
          t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.size.value = e.size * n, t.scale.value = .5 * i, e.map && (t.map.value = e.map);
          e.alphaMap && (t.alphaMap.value = e.alphaMap);
          var r;
          e.map ? r = e.map : e.alphaMap && (r = e.alphaMap);
          void 0 !== r && (!0 === r.matrixAutoUpdate && r.updateMatrix(), t.uvTransform.value.copy(r.matrix));
        }(t, i, r, s) : i.isSpriteMaterial ? function (t, e) {
          t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.rotation.value = e.rotation, e.map && (t.map.value = e.map);
          e.alphaMap && (t.alphaMap.value = e.alphaMap);
          var n;
          e.map ? n = e.map : e.alphaMap && (n = e.alphaMap);
          void 0 !== n && (!0 === n.matrixAutoUpdate && n.updateMatrix(), t.uvTransform.value.copy(n.matrix));
        }(t, i) : i.isShadowMaterial ? (t.color.value.copy(i.color), t.opacity.value = i.opacity) : i.isShaderMaterial && (i.uniformsNeedUpdate = !1);
      }
    };
  }

  function us(t) {
    var e = void 0 !== (t = t || {}).canvas ? t.canvas : function () {
      var t = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
      return t.style.display = "block", t;
    }(),
        n = void 0 !== t.context ? t.context : null,
        i = void 0 !== t.alpha && t.alpha,
        r = void 0 === t.depth || t.depth,
        s = void 0 === t.stencil || t.stencil,
        a = void 0 !== t.antialias && t.antialias,
        o = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
        l = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
        c = void 0 !== t.powerPreference ? t.powerPreference : "default",
        h = void 0 !== t.failIfMajorPerformanceCaveat && t.failIfMajorPerformanceCaveat;
    var u = null,
        d = null;
    var p = [],
        f = [];
    this.domElement = e, this.debug = {
      checkShaderErrors: !0
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.outputEncoding = X, this.physicallyCorrectLights = !1, this.toneMapping = 0, this.toneMappingExposure = 1;
    var m = this;
    var g = !1,
        v = 0,
        y = 0,
        _ = null,
        b = -1,
        S = null;
    var T = new mt(),
        A = new mt();
    var L = null,
        R = e.width,
        C = e.height,
        P = 1,
        D = null,
        I = null;
    var N = new mt(0, 0, R, C),
        B = new mt(0, 0, R, C);
    var O = !1;
    var z = new Qn();
    var F = !1,
        H = !1;
    var U = new Jt(),
        G = new xt(),
        k = {
      background: null,
      fog: null,
      environment: null,
      overrideMaterial: null,
      isScene: !0
    };

    function V() {
      return null === _ ? P : 1;
    }

    var W,
        j,
        q,
        Y,
        Z,
        J,
        Q,
        K,
        $,
        tt,
        et,
        nt,
        it,
        rt,
        st,
        at,
        ct,
        ht,
        ut,
        dt,
        pt,
        ft,
        gt = n;

    function vt(t, n) {
      for (var _i88 = 0; _i88 < t.length; _i88++) {
        var _r68 = t[_i88],
            _s31 = e.getContext(_r68, n);

        if (null !== _s31) return _s31;
      }

      return null;
    }

    try {
      var _t135 = {
        alpha: i,
        depth: r,
        stencil: s,
        antialias: a,
        premultipliedAlpha: o,
        preserveDrawingBuffer: l,
        powerPreference: c,
        failIfMajorPerformanceCaveat: h
      };

      if (e.addEventListener("webglcontextlost", bt, !1), e.addEventListener("webglcontextrestored", wt, !1), null === gt) {
        var _e98 = ["webgl2", "webgl", "experimental-webgl"];
        if (!0 === m.isWebGL1Renderer && _e98.shift(), gt = vt(_e98, _t135), null === gt) throw vt(_e98) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }

      void 0 === gt.getShaderPrecisionFormat && (gt.getShaderPrecisionFormat = function () {
        return {
          rangeMin: 1,
          rangeMax: 1,
          precision: 1
        };
      });
    } catch (t) {
      throw console.error("THREE.WebGLRenderer: " + t.message), t;
    }

    function yt() {
      W = new hi(gt), j = new oi(gt, W, t), W.init(j), pt = new ss(gt, W, j), q = new is(gt, W, j), Y = new pi(gt), Z = new Vr(), J = new rs(gt, W, q, Z, j, pt, Y), Q = new ci(m), K = new $n(gt, j), ft = new si(gt, W, K, j), $ = new ui(gt, K, Y, ft), tt = new vi(gt, $, K, Y), ht = new gi(gt), st = new li(Z), et = new kr(m, Q, W, j, ft, st), nt = new hs(Z), it = new Xr(Z), rt = new $r(W, j), ct = new ri(m, Q, q, tt, o), at = new ns(m, tt, j), ut = new ai(gt, W, Y, j), dt = new di(gt, W, Y, j), Y.programs = et.programs, m.capabilities = j, m.extensions = W, m.properties = Z, m.renderLists = it, m.shadowMap = at, m.state = q, m.info = Y;
    }

    yt();

    var _t = new cs(m, gt);

    function bt(t) {
      t.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), g = !0;
    }

    function wt() {
      console.log("THREE.WebGLRenderer: Context Restored."), g = !1;
      var t = Y.autoReset,
          e = at.enabled,
          n = at.autoUpdate,
          i = at.needsUpdate,
          r = at.type;
      yt(), Y.autoReset = t, at.enabled = e, at.autoUpdate = n, at.needsUpdate = i, at.type = r;
    }

    function Mt(t) {
      var e = t.target;
      e.removeEventListener("dispose", Mt), function (t) {
        (function (t) {
          var e = Z.get(t).programs;
          void 0 !== e && e.forEach(function (t) {
            et.releaseProgram(t);
          });
        })(t), Z.remove(t);
      }(e);
    }

    this.xr = _t, this.getContext = function () {
      return gt;
    }, this.getContextAttributes = function () {
      return gt.getContextAttributes();
    }, this.forceContextLoss = function () {
      var t = W.get("WEBGL_lose_context");
      t && t.loseContext();
    }, this.forceContextRestore = function () {
      var t = W.get("WEBGL_lose_context");
      t && t.restoreContext();
    }, this.getPixelRatio = function () {
      return P;
    }, this.setPixelRatio = function (t) {
      void 0 !== t && (P = t, this.setSize(R, C, !1));
    }, this.getSize = function (t) {
      return void 0 === t && (console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"), t = new lt()), t.set(R, C);
    }, this.setSize = function (t, n, i) {
      _t.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (R = t, C = n, e.width = Math.floor(t * P), e.height = Math.floor(n * P), !1 !== i && (e.style.width = t + "px", e.style.height = n + "px"), this.setViewport(0, 0, t, n));
    }, this.getDrawingBufferSize = function (t) {
      return void 0 === t && (console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"), t = new lt()), t.set(R * P, C * P).floor();
    }, this.setDrawingBufferSize = function (t, n, i) {
      R = t, C = n, P = i, e.width = Math.floor(t * i), e.height = Math.floor(n * i), this.setViewport(0, 0, t, n);
    }, this.getCurrentViewport = function (t) {
      return void 0 === t && (console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"), t = new mt()), t.copy(T);
    }, this.getViewport = function (t) {
      return t.copy(N);
    }, this.setViewport = function (t, e, n, i) {
      t.isVector4 ? N.set(t.x, t.y, t.z, t.w) : N.set(t, e, n, i), q.viewport(T.copy(N).multiplyScalar(P).floor());
    }, this.getScissor = function (t) {
      return t.copy(B);
    }, this.setScissor = function (t, e, n, i) {
      t.isVector4 ? B.set(t.x, t.y, t.z, t.w) : B.set(t, e, n, i), q.scissor(A.copy(B).multiplyScalar(P).floor());
    }, this.getScissorTest = function () {
      return O;
    }, this.setScissorTest = function (t) {
      q.setScissorTest(O = t);
    }, this.setOpaqueSort = function (t) {
      D = t;
    }, this.setTransparentSort = function (t) {
      I = t;
    }, this.getClearColor = function (t) {
      return void 0 === t && (console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"), t = new je()), t.copy(ct.getClearColor());
    }, this.setClearColor = function () {
      ct.setClearColor.apply(ct, arguments);
    }, this.getClearAlpha = function () {
      return ct.getClearAlpha();
    }, this.setClearAlpha = function () {
      ct.setClearAlpha.apply(ct, arguments);
    }, this.clear = function (t, e, n) {
      var i = 0;
      (void 0 === t || t) && (i |= 16384), (void 0 === e || e) && (i |= 256), (void 0 === n || n) && (i |= 1024), gt.clear(i);
    }, this.clearColor = function () {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function () {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function () {
      this.clear(!1, !1, !0);
    }, this.dispose = function () {
      e.removeEventListener("webglcontextlost", bt, !1), e.removeEventListener("webglcontextrestored", wt, !1), it.dispose(), rt.dispose(), Z.dispose(), Q.dispose(), tt.dispose(), ft.dispose(), _t.dispose(), _t.removeEventListener("sessionstart", Tt), _t.removeEventListener("sessionend", Et), At.stop();
    }, this.renderBufferImmediate = function (t, e) {
      ft.initAttributes();
      var n = Z.get(t);
      t.hasPositions && !n.position && (n.position = gt.createBuffer()), t.hasNormals && !n.normal && (n.normal = gt.createBuffer()), t.hasUvs && !n.uv && (n.uv = gt.createBuffer()), t.hasColors && !n.color && (n.color = gt.createBuffer());
      var i = e.getAttributes();
      t.hasPositions && (gt.bindBuffer(34962, n.position), gt.bufferData(34962, t.positionArray, 35048), ft.enableAttribute(i.position), gt.vertexAttribPointer(i.position, 3, 5126, !1, 0, 0)), t.hasNormals && (gt.bindBuffer(34962, n.normal), gt.bufferData(34962, t.normalArray, 35048), ft.enableAttribute(i.normal), gt.vertexAttribPointer(i.normal, 3, 5126, !1, 0, 0)), t.hasUvs && (gt.bindBuffer(34962, n.uv), gt.bufferData(34962, t.uvArray, 35048), ft.enableAttribute(i.uv), gt.vertexAttribPointer(i.uv, 2, 5126, !1, 0, 0)), t.hasColors && (gt.bindBuffer(34962, n.color), gt.bufferData(34962, t.colorArray, 35048), ft.enableAttribute(i.color), gt.vertexAttribPointer(i.color, 3, 5126, !1, 0, 0)), ft.disableUnusedAttributes(), gt.drawArrays(4, 0, t.count), t.count = 0;
    }, this.renderBufferDirect = function (t, e, n, i, r, s) {
      null === e && (e = k);
      var a = r.isMesh && r.matrixWorld.determinant() < 0,
          o = It(t, e, i, r);
      q.setMaterial(i, a);
      var l = n.index;
      var c = n.attributes.position;

      if (null === l) {
        if (void 0 === c || 0 === c.count) return;
      } else if (0 === l.count) return;

      var h,
          u = 1;
      !0 === i.wireframe && (l = $.getWireframeAttribute(n), u = 2), (i.morphTargets || i.morphNormals) && ht.update(r, n, i, o), ft.setup(r, i, o, n, l);
      var d = ut;
      null !== l && (h = K.get(l), d = dt, d.setIndex(h));

      var p = null !== l ? l.count : c.count,
          f = n.drawRange.start * u,
          m = n.drawRange.count * u,
          g = null !== s ? s.start * u : 0,
          v = null !== s ? s.count * u : 1 / 0,
          y = Math.max(f, g),
          x = Math.min(p, f + m, g + v) - 1,
          _ = Math.max(0, x - y + 1);

      if (0 !== _) {
        if (r.isMesh) !0 === i.wireframe ? (q.setLineWidth(i.wireframeLinewidth * V()), d.setMode(1)) : d.setMode(4);else if (r.isLine) {
          var _t136 = i.linewidth;
          void 0 === _t136 && (_t136 = 1), q.setLineWidth(_t136 * V()), r.isLineSegments ? d.setMode(1) : r.isLineLoop ? d.setMode(2) : d.setMode(3);
        } else r.isPoints ? d.setMode(0) : r.isSprite && d.setMode(4);
        if (r.isInstancedMesh) d.renderInstances(y, _, r.count);else if (n.isInstancedBufferGeometry) {
          var _t137 = Math.min(n.instanceCount, n._maxInstanceCount);

          d.renderInstances(y, _, _t137);
        } else d.render(y, _);
      }
    }, this.compile = function (t, e) {
      d = rt.get(t), d.init(), t.traverseVisible(function (t) {
        t.isLight && t.layers.test(e.layers) && (d.pushLight(t), t.castShadow && d.pushShadow(t));
      }), d.setupLights(), t.traverse(function (e) {
        var n = e.material;
        if (n) if (Array.isArray(n)) for (var _i89 = 0; _i89 < n.length; _i89++) {
          Pt(n[_i89], t, e);
        } else Pt(n, t, e);
      });
    };
    var St = null;

    function Tt() {
      At.stop();
    }

    function Et() {
      At.start();
    }

    var At = new Kn();

    function Lt(t, e, n, i) {
      if (!1 === t.visible) return;
      if (t.layers.test(e.layers)) if (t.isGroup) n = t.renderOrder;else if (t.isLOD) !0 === t.autoUpdate && t.update(e);else if (t.isLight) d.pushLight(t), t.castShadow && d.pushShadow(t);else if (t.isSprite) {
        if (!t.frustumCulled || z.intersectsSprite(t)) {
          i && G.setFromMatrixPosition(t.matrixWorld).applyMatrix4(U);

          var _e99 = tt.update(t),
              _r69 = t.material;

          _r69.visible && u.push(t, _e99, _r69, n, G.z, null);
        }
      } else if (t.isImmediateRenderObject) i && G.setFromMatrixPosition(t.matrixWorld).applyMatrix4(U), u.push(t, null, t.material, n, G.z, null);else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.frame !== Y.render.frame && (t.skeleton.update(), t.skeleton.frame = Y.render.frame), !t.frustumCulled || z.intersectsObject(t))) {
        i && G.setFromMatrixPosition(t.matrixWorld).applyMatrix4(U);

        var _e100 = tt.update(t),
            _r70 = t.material;

        if (Array.isArray(_r70)) {
          var _i90 = _e100.groups;

          for (var _s32 = 0, _a27 = _i90.length; _s32 < _a27; _s32++) {
            var _a28 = _i90[_s32],
                _o17 = _r70[_a28.materialIndex];
            _o17 && _o17.visible && u.push(t, _e100, _o17, n, G.z, _a28);
          }
        } else _r70.visible && u.push(t, _e100, _r70, n, G.z, null);
      }
      var r = t.children;

      for (var _t138 = 0, _s33 = r.length; _t138 < _s33; _t138++) {
        Lt(r[_t138], e, n, i);
      }
    }

    function Rt(t, e, n) {
      var i = !0 === e.isScene ? e.overrideMaterial : null;

      for (var _r71 = 0, _s34 = t.length; _r71 < _s34; _r71++) {
        var _s35 = t[_r71],
            _a29 = _s35.object,
            _o18 = _s35.geometry,
            _l16 = null === i ? _s35.material : i,
            _c15 = _s35.group;

        if (n.isArrayCamera) {
          var _t139 = n.cameras;

          for (var _n94 = 0, _i91 = _t139.length; _n94 < _i91; _n94++) {
            var _i92 = _t139[_n94];
            _a29.layers.test(_i92.layers) && (q.viewport(T.copy(_i92.viewport)), d.setupLightsView(_i92), Ct(_a29, e, _i92, _o18, _l16, _c15));
          }
        } else Ct(_a29, e, n, _o18, _l16, _c15);
      }
    }

    function Ct(t, e, n, i, r, s) {
      if (t.onBeforeRender(m, e, n, i, r, s), t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), t.isImmediateRenderObject) {
        var _i93 = It(n, e, r, t);

        q.setMaterial(r), ft.reset(), function (t, e) {
          t.render(function (t) {
            m.renderBufferImmediate(t, e);
          });
        }(t, _i93);
      } else m.renderBufferDirect(n, e, i, r, t, s);

      t.onAfterRender(m, e, n, i, r, s);
    }

    function Pt(t, e, n) {
      !0 !== e.isScene && (e = k);
      var i = Z.get(t),
          r = d.state.lights,
          s = d.state.shadowsArray,
          a = r.state.version,
          o = et.getParameters(t, r.state, s, e, n),
          l = et.getProgramCacheKey(o);
      var c = i.programs;
      i.environment = t.isMeshStandardMaterial ? e.environment : null, i.fog = e.fog, i.envMap = Q.get(t.envMap || i.environment), void 0 === c && (t.addEventListener("dispose", Mt), c = new Map(), i.programs = c);
      var h = c.get(l);

      if (void 0 !== h) {
        if (i.currentProgram === h && i.lightsStateVersion === a) return Dt(t, o), h;
      } else o.uniforms = et.getUniforms(t), t.onBeforeCompile(o, m), h = et.acquireProgram(o, l), c.set(l, h), i.uniforms = o.uniforms;

      var u = i.uniforms;
      (t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (u.clippingPlanes = st.uniform), Dt(t, o), i.needsLights = function (t) {
        return t.isMeshLambertMaterial || t.isMeshToonMaterial || t.isMeshPhongMaterial || t.isMeshStandardMaterial || t.isShadowMaterial || t.isShaderMaterial && !0 === t.lights;
      }(t), i.lightsStateVersion = a, i.needsLights && (u.ambientLightColor.value = r.state.ambient, u.lightProbe.value = r.state.probe, u.directionalLights.value = r.state.directional, u.directionalLightShadows.value = r.state.directionalShadow, u.spotLights.value = r.state.spot, u.spotLightShadows.value = r.state.spotShadow, u.rectAreaLights.value = r.state.rectArea, u.ltc_1.value = r.state.rectAreaLTC1, u.ltc_2.value = r.state.rectAreaLTC2, u.pointLights.value = r.state.point, u.pointLightShadows.value = r.state.pointShadow, u.hemisphereLights.value = r.state.hemi, u.directionalShadowMap.value = r.state.directionalShadowMap, u.directionalShadowMatrix.value = r.state.directionalShadowMatrix, u.spotShadowMap.value = r.state.spotShadowMap, u.spotShadowMatrix.value = r.state.spotShadowMatrix, u.pointShadowMap.value = r.state.pointShadowMap, u.pointShadowMatrix.value = r.state.pointShadowMatrix);
      var p = h.getUniforms(),
          f = br.seqWithValue(p.seq, u);
      return i.currentProgram = h, i.uniformsList = f, h;
    }

    function Dt(t, e) {
      var n = Z.get(t);
      n.outputEncoding = e.outputEncoding, n.instancing = e.instancing, n.numClippingPlanes = e.numClippingPlanes, n.numIntersection = e.numClipIntersection, n.vertexAlphas = e.vertexAlphas;
    }

    function It(t, e, n, i) {
      !0 !== e.isScene && (e = k), J.resetTextureUnits();
      var r = e.fog,
          s = n.isMeshStandardMaterial ? e.environment : null,
          a = null === _ ? m.outputEncoding : _.texture.encoding,
          o = Q.get(n.envMap || s),
          l = !0 === n.vertexColors && i.geometry.attributes.color && 4 === i.geometry.attributes.color.itemSize,
          c = Z.get(n),
          h = d.state.lights;

      if (!0 === F && (!0 === H || t !== S)) {
        var _e101 = t === S && n.id === b;

        st.setState(n, t, _e101);
      }

      var u = !1;
      n.version === c.__version ? c.needsLights && c.lightsStateVersion !== h.state.version || c.outputEncoding !== a || i.isInstancedMesh && !1 === c.instancing ? u = !0 : i.isInstancedMesh || !0 !== c.instancing ? c.envMap !== o || n.fog && c.fog !== r ? u = !0 : void 0 === c.numClippingPlanes || c.numClippingPlanes === st.numPlanes && c.numIntersection === st.numIntersection ? c.vertexAlphas !== l && (u = !0) : u = !0 : u = !0 : (u = !0, c.__version = n.version);
      var p = c.currentProgram;
      !0 === u && (p = Pt(n, e, i));
      var f = !1,
          g = !1,
          v = !1;
      var y = p.getUniforms(),
          x = c.uniforms;

      if (q.useProgram(p.program) && (f = !0, g = !0, v = !0), n.id !== b && (b = n.id, g = !0), f || S !== t) {
        if (y.setValue(gt, "projectionMatrix", t.projectionMatrix), j.logarithmicDepthBuffer && y.setValue(gt, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), S !== t && (S = t, g = !0, v = !0), n.isShaderMaterial || n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshStandardMaterial || n.envMap) {
          var _e102 = y.map.cameraPosition;
          void 0 !== _e102 && _e102.setValue(gt, G.setFromMatrixPosition(t.matrixWorld));
        }

        (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial) && y.setValue(gt, "isOrthographic", !0 === t.isOrthographicCamera), (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial || n.isShadowMaterial || n.skinning) && y.setValue(gt, "viewMatrix", t.matrixWorldInverse);
      }

      if (n.skinning) {
        y.setOptional(gt, i, "bindMatrix"), y.setOptional(gt, i, "bindMatrixInverse");
        var _t140 = i.skeleton;

        if (_t140) {
          var _e103 = _t140.bones;

          if (j.floatVertexTextures) {
            if (null === _t140.boneTexture) {
              var _n95 = Math.sqrt(4 * _e103.length);

              _n95 = ot.ceilPowerOfTwo(_n95), _n95 = Math.max(_n95, 4);

              var _i94 = new Float32Array(_n95 * _n95 * 4);

              _i94.set(_t140.boneMatrices);

              var _r72 = new Yn(_i94, _n95, _n95, E, w);

              _t140.boneMatrices = _i94, _t140.boneTexture = _r72, _t140.boneTextureSize = _n95;
            }

            y.setValue(gt, "boneTexture", _t140.boneTexture, J), y.setValue(gt, "boneTextureSize", _t140.boneTextureSize);
          } else y.setOptional(gt, _t140, "boneMatrices");
        }
      }

      var M, T;
      return (g || c.receiveShadow !== i.receiveShadow) && (c.receiveShadow = i.receiveShadow, y.setValue(gt, "receiveShadow", i.receiveShadow)), g && (y.setValue(gt, "toneMappingExposure", m.toneMappingExposure), c.needsLights && (T = v, (M = x).ambientLightColor.needsUpdate = T, M.lightProbe.needsUpdate = T, M.directionalLights.needsUpdate = T, M.directionalLightShadows.needsUpdate = T, M.pointLights.needsUpdate = T, M.pointLightShadows.needsUpdate = T, M.spotLights.needsUpdate = T, M.spotLightShadows.needsUpdate = T, M.rectAreaLights.needsUpdate = T, M.hemisphereLights.needsUpdate = T), r && n.fog && nt.refreshFogUniforms(x, r), nt.refreshMaterialUniforms(x, n, P, C), br.upload(gt, c.uniformsList, x, J)), n.isShaderMaterial && !0 === n.uniformsNeedUpdate && (br.upload(gt, c.uniformsList, x, J), n.uniformsNeedUpdate = !1), n.isSpriteMaterial && y.setValue(gt, "center", i.center), y.setValue(gt, "modelViewMatrix", i.modelViewMatrix), y.setValue(gt, "normalMatrix", i.normalMatrix), y.setValue(gt, "modelMatrix", i.matrixWorld), p;
    }

    At.setAnimationLoop(function (t) {
      St && St(t);
    }), "undefined" != typeof window && At.setContext(window), this.setAnimationLoop = function (t) {
      St = t, _t.setAnimationLoop(t), null === t ? At.stop() : At.start();
    }, _t.addEventListener("sessionstart", Tt), _t.addEventListener("sessionend", Et), this.render = function (t, e) {
      var n, i;
      if (void 0 !== arguments[2] && (console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."), n = arguments[2]), void 0 !== arguments[3] && (console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."), i = arguments[3]), void 0 !== e && !0 !== e.isCamera) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
      if (!0 === g) return;
      !0 === t.autoUpdate && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), !0 === _t.enabled && !0 === _t.isPresenting && (e = _t.getCamera(e)), !0 === t.isScene && t.onBeforeRender(m, t, e, n || _), d = rt.get(t, f.length), d.init(), f.push(d), U.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), z.setFromProjectionMatrix(U), H = this.localClippingEnabled, F = st.init(this.clippingPlanes, H, e), u = it.get(t, p.length), u.init(), p.push(u), Lt(t, e, 0, m.sortObjects), u.finish(), !0 === m.sortObjects && u.sort(D, I), !0 === F && st.beginShadows();
      var r = d.state.shadowsArray;
      at.render(r, t, e), d.setupLights(), d.setupLightsView(e), !0 === F && st.endShadows(), !0 === this.info.autoReset && this.info.reset(), void 0 !== n && this.setRenderTarget(n), ct.render(u, t, e, i);
      var s = u.opaque,
          a = u.transparent;
      s.length > 0 && Rt(s, t, e), a.length > 0 && Rt(a, t, e), null !== _ && (J.updateRenderTargetMipmap(_), J.updateMultisampleRenderTarget(_)), !0 === t.isScene && t.onAfterRender(m, t, e), q.buffers.depth.setTest(!0), q.buffers.depth.setMask(!0), q.buffers.color.setMask(!0), q.setPolygonOffset(!1), ft.resetDefaultState(), b = -1, S = null, f.pop(), d = f.length > 0 ? f[f.length - 1] : null, p.pop(), u = p.length > 0 ? p[p.length - 1] : null;
    }, this.getActiveCubeFace = function () {
      return v;
    }, this.getActiveMipmapLevel = function () {
      return y;
    }, this.getRenderTarget = function () {
      return _;
    }, this.setRenderTarget = function (t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      _ = t, v = e, y = n, t && void 0 === Z.get(t).__webglFramebuffer && J.setupRenderTarget(t);
      var i = null,
          r = !1,
          s = !1;

      if (t) {
        var _n96 = t.texture;
        (_n96.isDataTexture3D || _n96.isDataTexture2DArray) && (s = !0);

        var _a30 = Z.get(t).__webglFramebuffer;

        t.isWebGLCubeRenderTarget ? (i = _a30[e], r = !0) : i = t.isWebGLMultisampleRenderTarget ? Z.get(t).__webglMultisampledFramebuffer : _a30, T.copy(t.viewport), A.copy(t.scissor), L = t.scissorTest;
      } else T.copy(N).multiplyScalar(P).floor(), A.copy(B).multiplyScalar(P).floor(), L = O;

      if (q.bindFramebuffer(36160, i), q.viewport(T), q.scissor(A), q.setScissorTest(L), r) {
        var _i95 = Z.get(t.texture);

        gt.framebufferTexture2D(36160, 36064, 34069 + e, _i95.__webglTexture, n);
      } else if (s) {
        var _i96 = Z.get(t.texture),
            _r73 = e || 0;

        gt.framebufferTextureLayer(36160, 36064, _i96.__webglTexture, n || 0, _r73);
      }
    }, this.readRenderTargetPixels = function (t, e, n, i, r, s, a) {
      if (!t || !t.isWebGLRenderTarget) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");

      var o = Z.get(t).__webglFramebuffer;

      if (t.isWebGLCubeRenderTarget && void 0 !== a && (o = o[a]), o) {
        q.bindFramebuffer(36160, o);

        try {
          var _a31 = t.texture,
              _o19 = _a31.format,
              _l17 = _a31.type;
          if (_o19 !== E && pt.convert(_o19) !== gt.getParameter(35739)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");

          var _c16 = _l17 === M && (W.has("EXT_color_buffer_half_float") || j.isWebGL2 && W.has("EXT_color_buffer_float"));

          if (!(_l17 === x || pt.convert(_l17) === gt.getParameter(35738) || _l17 === w && (j.isWebGL2 || W.has("OES_texture_float") || W.has("WEBGL_color_buffer_float")) || _c16)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
          36053 === gt.checkFramebufferStatus(36160) ? e >= 0 && e <= t.width - i && n >= 0 && n <= t.height - r && gt.readPixels(e, n, i, r, pt.convert(_o19), pt.convert(_l17), s) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.");
        } finally {
          var _t141 = null !== _ ? Z.get(_).__webglFramebuffer : null;

          q.bindFramebuffer(36160, _t141);
        }
      }
    }, this.copyFramebufferToTexture = function (t, e) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var i = Math.pow(2, -n),
          r = Math.floor(e.image.width * i),
          s = Math.floor(e.image.height * i),
          a = pt.convert(e.format);
      J.setTexture2D(e, 0), gt.copyTexImage2D(3553, n, a, t.x, t.y, r, s, 0), q.unbindTexture();
    }, this.copyTextureToTexture = function (t, e, n) {
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var r = e.image.width,
          s = e.image.height,
          a = pt.convert(n.format),
          o = pt.convert(n.type);
      J.setTexture2D(n, 0), gt.pixelStorei(37440, n.flipY), gt.pixelStorei(37441, n.premultiplyAlpha), gt.pixelStorei(3317, n.unpackAlignment), e.isDataTexture ? gt.texSubImage2D(3553, i, t.x, t.y, r, s, a, o, e.image.data) : e.isCompressedTexture ? gt.compressedTexSubImage2D(3553, i, t.x, t.y, e.mipmaps[0].width, e.mipmaps[0].height, a, e.mipmaps[0].data) : gt.texSubImage2D(3553, i, t.x, t.y, a, o, e.image), 0 === i && n.generateMipmaps && gt.generateMipmap(3553), q.unbindTexture();
    }, this.copyTextureToTexture3D = function (t, e, n, i) {
      var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      if (m.isWebGL1Renderer) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
      var _n$image = n.image,
          s = _n$image.width,
          a = _n$image.height,
          o = _n$image.data,
          l = pt.convert(i.format),
          c = pt.convert(i.type);
      var h;
      if (i.isDataTexture3D) J.setTexture3D(i, 0), h = 32879;else {
        if (!i.isDataTexture2DArray) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        J.setTexture2DArray(i, 0), h = 35866;
      }
      gt.pixelStorei(37440, i.flipY), gt.pixelStorei(37441, i.premultiplyAlpha), gt.pixelStorei(3317, i.unpackAlignment);
      var u = gt.getParameter(3314),
          d = gt.getParameter(32878),
          p = gt.getParameter(3316),
          f = gt.getParameter(3315),
          g = gt.getParameter(32877);
      gt.pixelStorei(3314, s), gt.pixelStorei(32878, a), gt.pixelStorei(3316, t.min.x), gt.pixelStorei(3315, t.min.y), gt.pixelStorei(32877, t.min.z), gt.texSubImage3D(h, r, e.x, e.y, e.z, t.max.x - t.min.x + 1, t.max.y - t.min.y + 1, t.max.z - t.min.z + 1, l, c, o), gt.pixelStorei(3314, u), gt.pixelStorei(32878, d), gt.pixelStorei(3316, p), gt.pixelStorei(3315, f), gt.pixelStorei(32877, g), 0 === r && i.generateMipmaps && gt.generateMipmap(h), q.unbindTexture();
    }, this.initTexture = function (t) {
      J.setTexture2D(t, 0), q.unbindTexture();
    }, this.resetState = function () {
      v = 0, y = 0, _ = null, q.reset(), ft.reset();
    }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
      detail: this
    }));
  }

  os.prototype.isGroup = !0, Object.assign(ls.prototype, {
    constructor: ls,
    getHandSpace: function getHandSpace() {
      return null === this._hand && (this._hand = new os(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {
        pinching: !1
      }), this._hand;
    },
    getTargetRaySpace: function getTargetRaySpace() {
      return null === this._targetRay && (this._targetRay = new os(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1), this._targetRay;
    },
    getGripSpace: function getGripSpace() {
      return null === this._grip && (this._grip = new os(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1), this._grip;
    },
    dispatchEvent: function dispatchEvent(t) {
      return null !== this._targetRay && this._targetRay.dispatchEvent(t), null !== this._grip && this._grip.dispatchEvent(t), null !== this._hand && this._hand.dispatchEvent(t), this;
    },
    disconnect: function disconnect(t) {
      return this.dispatchEvent({
        type: "disconnected",
        data: t
      }), null !== this._targetRay && (this._targetRay.visible = !1), null !== this._grip && (this._grip.visible = !1), null !== this._hand && (this._hand.visible = !1), this;
    },
    update: function update(t, e, n) {
      var i = null,
          r = null,
          s = null;
      var a = this._targetRay,
          o = this._grip,
          l = this._hand;
      if (t && "visible-blurred" !== e.session.visibilityState) if (null !== a && (i = e.getPose(t.targetRaySpace, n), null !== i && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale))), l && t.hand) {
        s = !0;

        var _iterator = _createForOfIteratorHelper(t.hand.values()),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _i98 = _step.value;

            var _t142 = e.getJointPose(_i98, n);

            if (void 0 === l.joints[_i98.jointName]) {
              var _t143 = new os();

              _t143.matrixAutoUpdate = !1, _t143.visible = !1, l.joints[_i98.jointName] = _t143, l.add(_t143);
            }

            var _r75 = l.joints[_i98.jointName];
            null !== _t142 && (_r75.matrix.fromArray(_t142.transform.matrix), _r75.matrix.decompose(_r75.position, _r75.rotation, _r75.scale), _r75.jointRadius = _t142.radius), _r75.visible = null !== _t142;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var _i97 = l.joints["index-finger-tip"],
            _r74 = l.joints["thumb-tip"],
            _a32 = _i97.position.distanceTo(_r74.position),
            _o20 = .02,
            _c17 = .005;

        l.inputState.pinching && _a32 > _o20 + _c17 ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: t.handedness,
          target: this
        })) : !l.inputState.pinching && _a32 <= _o20 - _c17 && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: t.handedness,
          target: this
        }));
      } else null !== o && t.gripSpace && (r = e.getPose(t.gripSpace, n), null !== r && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale)));
      return null !== a && (a.visible = null !== i), null !== o && (o.visible = null !== r), null !== l && (l.visible = null !== s), this;
    }
  }), Object.assign(cs.prototype, rt.prototype);

  var ds = /*#__PURE__*/function (_us) {
    _inherits(ds, _us);

    var _super17 = _createSuper(ds);

    function ds() {
      _classCallCheck(this, ds);

      return _super17.apply(this, arguments);
    }

    return ds;
  }(us);

  ds.prototype.isWebGL1Renderer = !0;

  var ps = /*#__PURE__*/function () {
    function ps(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 25e-5;

      _classCallCheck(this, ps);

      this.name = "", this.color = new je(t), this.density = e;
    }

    _createClass(ps, [{
      key: "clone",
      value: function clone() {
        return new ps(this.color, this.density);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          type: "FogExp2",
          color: this.color.getHex(),
          density: this.density
        };
      }
    }]);

    return ps;
  }();

  ps.prototype.isFogExp2 = !0;

  var fs = /*#__PURE__*/function () {
    function fs(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1e3;

      _classCallCheck(this, fs);

      this.name = "", this.color = new je(t), this.near = e, this.far = n;
    }

    _createClass(fs, [{
      key: "clone",
      value: function clone() {
        return new fs(this.color, this.near, this.far);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          type: "Fog",
          color: this.color.getHex(),
          near: this.near,
          far: this.far
        };
      }
    }]);

    return fs;
  }();

  fs.prototype.isFog = !0;

  var ms = /*#__PURE__*/function (_be3) {
    _inherits(ms, _be3);

    var _super18 = _createSuper(ms);

    function ms() {
      var _this17;

      _classCallCheck(this, ms);

      _this17 = _super18.call(this), _this17.type = "Scene", _this17.background = null, _this17.environment = null, _this17.fog = null, _this17.overrideMaterial = null, _this17.autoUpdate = !0, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
        detail: _assertThisInitialized(_this17)
      }));
      return _this17;
    }

    _createClass(ms, [{
      key: "copy",
      value: function copy(t, e) {
        return _get(_getPrototypeOf(ms.prototype), "copy", this).call(this, t, e), null !== t.background && (this.background = t.background.clone()), null !== t.environment && (this.environment = t.environment.clone()), null !== t.fog && (this.fog = t.fog.clone()), null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.autoUpdate = t.autoUpdate, this.matrixAutoUpdate = t.matrixAutoUpdate, this;
      }
    }, {
      key: "toJSON",
      value: function toJSON(t) {
        var e = _get(_getPrototypeOf(ms.prototype), "toJSON", this).call(this, t);

        return null !== this.background && (e.object.background = this.background.toJSON(t)), null !== this.environment && (e.object.environment = this.environment.toJSON(t)), null !== this.fog && (e.object.fog = this.fog.toJSON()), e;
      }
    }]);

    return ms;
  }(be);

  function gs(t, e) {
    this.array = t, this.stride = e, this.count = void 0 !== t ? t.length / e : 0, this.usage = et, this.updateRange = {
      offset: 0,
      count: -1
    }, this.version = 0, this.uuid = ot.generateUUID();
  }

  ms.prototype.isScene = !0, Object.defineProperty(gs.prototype, "needsUpdate", {
    set: function set(t) {
      !0 === t && this.version++;
    }
  }), Object.assign(gs.prototype, {
    isInterleavedBuffer: !0,
    onUploadCallback: function onUploadCallback() {},
    setUsage: function setUsage(t) {
      return this.usage = t, this;
    },
    copy: function copy(t) {
      return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.usage = t.usage, this;
    },
    copyAt: function copyAt(t, e, n) {
      t *= this.stride, n *= e.stride;

      for (var _i99 = 0, _r76 = this.stride; _i99 < _r76; _i99++) {
        this.array[t + _i99] = e.array[n + _i99];
      }

      return this;
    },
    set: function set(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return this.array.set(t, e), this;
    },
    clone: function clone(t) {
      void 0 === t.arrayBuffers && (t.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = ot.generateUUID()), void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
      var e = new gs(new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]), this.stride);
      return e.setUsage(this.usage), e;
    },
    onUpload: function onUpload(t) {
      return this.onUploadCallback = t, this;
    },
    toJSON: function toJSON(t) {
      return void 0 === t.arrayBuffers && (t.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = ot.generateUUID()), void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer))), {
        uuid: this.uuid,
        buffer: this.array.buffer._uuid,
        type: this.array.constructor.name,
        stride: this.stride
      };
    }
  });
  var vs = new xt();

  function ys(t, e, n, i) {
    this.name = "", this.data = t, this.itemSize = e, this.offset = n, this.normalized = !0 === i;
  }

  Object.defineProperties(ys.prototype, {
    count: {
      get: function get() {
        return this.data.count;
      }
    },
    array: {
      get: function get() {
        return this.data.array;
      }
    },
    needsUpdate: {
      set: function set(t) {
        this.data.needsUpdate = t;
      }
    }
  }), Object.assign(ys.prototype, {
    isInterleavedBufferAttribute: !0,
    applyMatrix4: function applyMatrix4(t) {
      for (var _e104 = 0, _n97 = this.data.count; _e104 < _n97; _e104++) {
        vs.x = this.getX(_e104), vs.y = this.getY(_e104), vs.z = this.getZ(_e104), vs.applyMatrix4(t), this.setXYZ(_e104, vs.x, vs.y, vs.z);
      }

      return this;
    },
    applyNormalMatrix: function applyNormalMatrix(t) {
      for (var _e105 = 0, _n98 = this.count; _e105 < _n98; _e105++) {
        vs.x = this.getX(_e105), vs.y = this.getY(_e105), vs.z = this.getZ(_e105), vs.applyNormalMatrix(t), this.setXYZ(_e105, vs.x, vs.y, vs.z);
      }

      return this;
    },
    transformDirection: function transformDirection(t) {
      for (var _e106 = 0, _n99 = this.count; _e106 < _n99; _e106++) {
        vs.x = this.getX(_e106), vs.y = this.getY(_e106), vs.z = this.getZ(_e106), vs.transformDirection(t), this.setXYZ(_e106, vs.x, vs.y, vs.z);
      }

      return this;
    },
    setX: function setX(t, e) {
      return this.data.array[t * this.data.stride + this.offset] = e, this;
    },
    setY: function setY(t, e) {
      return this.data.array[t * this.data.stride + this.offset + 1] = e, this;
    },
    setZ: function setZ(t, e) {
      return this.data.array[t * this.data.stride + this.offset + 2] = e, this;
    },
    setW: function setW(t, e) {
      return this.data.array[t * this.data.stride + this.offset + 3] = e, this;
    },
    getX: function getX(t) {
      return this.data.array[t * this.data.stride + this.offset];
    },
    getY: function getY(t) {
      return this.data.array[t * this.data.stride + this.offset + 1];
    },
    getZ: function getZ(t) {
      return this.data.array[t * this.data.stride + this.offset + 2];
    },
    getW: function getW(t) {
      return this.data.array[t * this.data.stride + this.offset + 3];
    },
    setXY: function setXY(t, e, n) {
      return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this;
    },
    setXYZ: function setXYZ(t, e, n, i) {
      return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this;
    },
    setXYZW: function setXYZW(t, e, n, i, r) {
      return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this.data.array[t + 3] = r, this;
    },
    clone: function clone(t) {
      if (void 0 === t) {
        console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");
        var _t144 = [];

        for (var _e107 = 0; _e107 < this.count; _e107++) {
          var _n100 = _e107 * this.data.stride + this.offset;

          for (var _e108 = 0; _e108 < this.itemSize; _e108++) {
            _t144.push(this.data.array[_n100 + _e108]);
          }
        }

        return new Ze(new this.array.constructor(_t144), this.itemSize, this.normalized);
      }

      return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}), void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new ys(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
    },
    toJSON: function toJSON(t) {
      if (void 0 === t) {
        console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");
        var _t145 = [];

        for (var _e109 = 0; _e109 < this.count; _e109++) {
          var _n101 = _e109 * this.data.stride + this.offset;

          for (var _e110 = 0; _e110 < this.itemSize; _e110++) {
            _t145.push(this.data.array[_n101 + _e110]);
          }
        }

        return {
          itemSize: this.itemSize,
          type: this.array.constructor.name,
          array: _t145,
          normalized: this.normalized
        };
      }

      return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}), void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
    }
  });

  var xs = /*#__PURE__*/function (_Fe4) {
    _inherits(xs, _Fe4);

    var _super19 = _createSuper(xs);

    function xs(t) {
      var _this18;

      _classCallCheck(this, xs);

      _this18 = _super19.call(this), _this18.type = "SpriteMaterial", _this18.color = new je(16777215), _this18.map = null, _this18.alphaMap = null, _this18.rotation = 0, _this18.sizeAttenuation = !0, _this18.transparent = !0, _this18.setValues(t);
      return _this18;
    }

    _createClass(xs, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(xs.prototype), "copy", this).call(this, t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.rotation = t.rotation, this.sizeAttenuation = t.sizeAttenuation, this;
      }
    }]);

    return xs;
  }(Fe);

  var _s;

  xs.prototype.isSpriteMaterial = !0;
  var bs = new xt(),
      ws = new xt(),
      Ms = new xt(),
      Ss = new lt(),
      Ts = new lt(),
      Es = new Jt(),
      As = new xt(),
      Ls = new xt(),
      Rs = new xt(),
      Cs = new lt(),
      Ps = new lt(),
      Ds = new lt();

  var Is = /*#__PURE__*/function (_be4) {
    _inherits(Is, _be4);

    var _super20 = _createSuper(Is);

    function Is(t) {
      var _this19;

      _classCallCheck(this, Is);

      if (_this19 = _super20.call(this), _this19.type = "Sprite", void 0 === _s) {
        _s = new vn();

        var _t146 = new gs(new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]), 5);

        _s.setIndex([0, 1, 2, 0, 2, 3]), _s.setAttribute("position", new ys(_t146, 3, 0, !1)), _s.setAttribute("uv", new ys(_t146, 2, 3, !1));
      }

      _this19.geometry = _s, _this19.material = void 0 !== t ? t : new xs(), _this19.center = new lt(.5, .5);
      return _possibleConstructorReturn(_this19);
    }

    _createClass(Is, [{
      key: "raycast",
      value: function raycast(t, e) {
        null === t.camera && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), ws.setFromMatrixScale(this.matrixWorld), Es.copy(t.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse, this.matrixWorld), Ms.setFromMatrixPosition(this.modelViewMatrix), t.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && ws.multiplyScalar(-Ms.z);
        var n = this.material.rotation;
        var i, r;
        0 !== n && (r = Math.cos(n), i = Math.sin(n));
        var s = this.center;
        Ns(As.set(-.5, -.5, 0), Ms, s, ws, i, r), Ns(Ls.set(.5, -.5, 0), Ms, s, ws, i, r), Ns(Rs.set(.5, .5, 0), Ms, s, ws, i, r), Cs.set(0, 0), Ps.set(1, 0), Ds.set(1, 1);
        var a = t.ray.intersectTriangle(As, Ls, Rs, !1, bs);
        if (null === a && (Ns(Ls.set(-.5, .5, 0), Ms, s, ws, i, r), Ps.set(0, 1), a = t.ray.intersectTriangle(As, Rs, Ls, !1, bs), null === a)) return;
        var o = t.ray.origin.distanceTo(bs);
        o < t.near || o > t.far || e.push({
          distance: o,
          point: bs.clone(),
          uv: Oe.getUV(bs, As, Ls, Rs, Cs, Ps, Ds, new lt()),
          face: null,
          object: this
        });
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(Is.prototype), "copy", this).call(this, t), void 0 !== t.center && this.center.copy(t.center), this.material = t.material, this;
      }
    }]);

    return Is;
  }(be);

  function Ns(t, e, n, i, r, s) {
    Ss.subVectors(t, n).addScalar(.5).multiply(i), void 0 !== r ? (Ts.x = s * Ss.x - r * Ss.y, Ts.y = r * Ss.x + s * Ss.y) : Ts.copy(Ss), t.copy(e), t.x += Ts.x, t.y += Ts.y, t.applyMatrix4(Es);
  }

  Is.prototype.isSprite = !0;
  var Bs = new xt(),
      Os = new xt();

  var zs = /*#__PURE__*/function (_be5) {
    _inherits(zs, _be5);

    var _super21 = _createSuper(zs);

    function zs() {
      var _this20;

      _classCallCheck(this, zs);

      _this20 = _super21.call(this), _this20._currentLevel = 0, _this20.type = "LOD", Object.defineProperties(_assertThisInitialized(_this20), {
        levels: {
          enumerable: !0,
          value: []
        },
        isLOD: {
          value: !0
        }
      }), _this20.autoUpdate = !0;
      return _this20;
    }

    _createClass(zs, [{
      key: "copy",
      value: function copy(t) {
        _get(_getPrototypeOf(zs.prototype), "copy", this).call(this, t, !1);

        var e = t.levels;

        for (var _t147 = 0, _n102 = e.length; _t147 < _n102; _t147++) {
          var _n103 = e[_t147];
          this.addLevel(_n103.object.clone(), _n103.distance);
        }

        return this.autoUpdate = t.autoUpdate, this;
      }
    }, {
      key: "addLevel",
      value: function addLevel(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        e = Math.abs(e);
        var n = this.levels;
        var i;

        for (i = 0; i < n.length && !(e < n[i].distance); i++) {
          ;
        }

        return n.splice(i, 0, {
          distance: e,
          object: t
        }), this.add(t), this;
      }
    }, {
      key: "getCurrentLevel",
      value: function getCurrentLevel() {
        return this._currentLevel;
      }
    }, {
      key: "getObjectForDistance",
      value: function getObjectForDistance(t) {
        var e = this.levels;

        if (e.length > 0) {
          var _n104, _i100;

          for (_n104 = 1, _i100 = e.length; _n104 < _i100 && !(t < e[_n104].distance); _n104++) {
            ;
          }

          return e[_n104 - 1].object;
        }

        return null;
      }
    }, {
      key: "raycast",
      value: function raycast(t, e) {
        if (this.levels.length > 0) {
          Bs.setFromMatrixPosition(this.matrixWorld);

          var _n105 = t.ray.origin.distanceTo(Bs);

          this.getObjectForDistance(_n105).raycast(t, e);
        }
      }
    }, {
      key: "update",
      value: function update(t) {
        var e = this.levels;

        if (e.length > 1) {
          Bs.setFromMatrixPosition(t.matrixWorld), Os.setFromMatrixPosition(this.matrixWorld);

          var _n106 = Bs.distanceTo(Os) / t.zoom;

          var _i101, _r77;

          for (e[0].object.visible = !0, _i101 = 1, _r77 = e.length; _i101 < _r77 && _n106 >= e[_i101].distance; _i101++) {
            e[_i101 - 1].object.visible = !1, e[_i101].object.visible = !0;
          }

          for (this._currentLevel = _i101 - 1; _i101 < _r77; _i101++) {
            e[_i101].object.visible = !1;
          }
        }
      }
    }, {
      key: "toJSON",
      value: function toJSON(t) {
        var e = _get(_getPrototypeOf(zs.prototype), "toJSON", this).call(this, t);

        !1 === this.autoUpdate && (e.object.autoUpdate = !1), e.object.levels = [];
        var n = this.levels;

        for (var _t148 = 0, _i102 = n.length; _t148 < _i102; _t148++) {
          var _i103 = n[_t148];
          e.object.levels.push({
            object: _i103.object.uuid,
            distance: _i103.distance
          });
        }

        return e;
      }
    }]);

    return zs;
  }(be);

  var Fs = new xt(),
      Hs = new mt(),
      Us = new mt(),
      Gs = new xt(),
      ks = new Jt();

  function Vs(t, e) {
    Bn.call(this, t, e), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new Jt(), this.bindMatrixInverse = new Jt();
  }

  function Ws() {
    be.call(this), this.type = "Bone";
  }

  Vs.prototype = Object.assign(Object.create(Bn.prototype), {
    constructor: Vs,
    isSkinnedMesh: !0,
    copy: function copy(t) {
      return Bn.prototype.copy.call(this, t), this.bindMode = t.bindMode, this.bindMatrix.copy(t.bindMatrix), this.bindMatrixInverse.copy(t.bindMatrixInverse), this.skeleton = t.skeleton, this;
    },
    bind: function bind(t, e) {
      this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.copy(e).invert();
    },
    pose: function pose() {
      this.skeleton.pose();
    },
    normalizeSkinWeights: function normalizeSkinWeights() {
      var t = new mt(),
          e = this.geometry.attributes.skinWeight;

      for (var _n107 = 0, _i104 = e.count; _n107 < _i104; _n107++) {
        t.x = e.getX(_n107), t.y = e.getY(_n107), t.z = e.getZ(_n107), t.w = e.getW(_n107);

        var _i105 = 1 / t.manhattanLength();

        _i105 !== 1 / 0 ? t.multiplyScalar(_i105) : t.set(1, 0, 0, 0), e.setXYZW(_n107, t.x, t.y, t.z, t.w);
      }
    },
    updateMatrixWorld: function updateMatrixWorld(t) {
      Bn.prototype.updateMatrixWorld.call(this, t), "attached" === this.bindMode ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : "detached" === this.bindMode ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
    },
    boneTransform: function boneTransform(t, e) {
      var n = this.skeleton,
          i = this.geometry;
      Hs.fromBufferAttribute(i.attributes.skinIndex, t), Us.fromBufferAttribute(i.attributes.skinWeight, t), Fs.fromBufferAttribute(i.attributes.position, t).applyMatrix4(this.bindMatrix), e.set(0, 0, 0);

      for (var _t149 = 0; _t149 < 4; _t149++) {
        var _i106 = Us.getComponent(_t149);

        if (0 !== _i106) {
          var _r78 = Hs.getComponent(_t149);

          ks.multiplyMatrices(n.bones[_r78].matrixWorld, n.boneInverses[_r78]), e.addScaledVector(Gs.copy(Fs).applyMatrix4(ks), _i106);
        }
      }

      return e.applyMatrix4(this.bindMatrixInverse);
    }
  }), Ws.prototype = Object.assign(Object.create(be.prototype), {
    constructor: Ws,
    isBone: !0
  });
  var js = new Jt(),
      qs = new Jt();

  var Xs = /*#__PURE__*/function () {
    function Xs() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      _classCallCheck(this, Xs);

      this.uuid = ot.generateUUID(), this.bones = t.slice(0), this.boneInverses = e, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.frame = -1, this.init();
    }

    _createClass(Xs, [{
      key: "init",
      value: function init() {
        var t = this.bones,
            e = this.boneInverses;
        if (this.boneMatrices = new Float32Array(16 * t.length), 0 === e.length) this.calculateInverses();else if (t.length !== e.length) {
          console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];

          for (var _t150 = 0, _e111 = this.bones.length; _t150 < _e111; _t150++) {
            this.boneInverses.push(new Jt());
          }
        }
      }
    }, {
      key: "calculateInverses",
      value: function calculateInverses() {
        this.boneInverses.length = 0;

        for (var _t151 = 0, _e112 = this.bones.length; _t151 < _e112; _t151++) {
          var _e113 = new Jt();

          this.bones[_t151] && _e113.copy(this.bones[_t151].matrixWorld).invert(), this.boneInverses.push(_e113);
        }
      }
    }, {
      key: "pose",
      value: function pose() {
        for (var _t152 = 0, _e114 = this.bones.length; _t152 < _e114; _t152++) {
          var _e115 = this.bones[_t152];
          _e115 && _e115.matrixWorld.copy(this.boneInverses[_t152]).invert();
        }

        for (var _t153 = 0, _e116 = this.bones.length; _t153 < _e116; _t153++) {
          var _e117 = this.bones[_t153];
          _e117 && (_e117.parent && _e117.parent.isBone ? (_e117.matrix.copy(_e117.parent.matrixWorld).invert(), _e117.matrix.multiply(_e117.matrixWorld)) : _e117.matrix.copy(_e117.matrixWorld), _e117.matrix.decompose(_e117.position, _e117.quaternion, _e117.scale));
        }
      }
    }, {
      key: "update",
      value: function update() {
        var t = this.bones,
            e = this.boneInverses,
            n = this.boneMatrices,
            i = this.boneTexture;

        for (var _i107 = 0, _r79 = t.length; _i107 < _r79; _i107++) {
          var _r80 = t[_i107] ? t[_i107].matrixWorld : qs;

          js.multiplyMatrices(_r80, e[_i107]), js.toArray(n, 16 * _i107);
        }

        null !== i && (i.needsUpdate = !0);
      }
    }, {
      key: "clone",
      value: function clone() {
        return new Xs(this.bones, this.boneInverses);
      }
    }, {
      key: "getBoneByName",
      value: function getBoneByName(t) {
        for (var _e118 = 0, _n108 = this.bones.length; _e118 < _n108; _e118++) {
          var _n109 = this.bones[_e118];
          if (_n109.name === t) return _n109;
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        null !== this.boneTexture && (this.boneTexture.dispose(), this.boneTexture = null);
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(t, e) {
        this.uuid = t.uuid;

        for (var _n110 = 0, _i108 = t.bones.length; _n110 < _i108; _n110++) {
          var _i109 = t.bones[_n110];
          var _r81 = e[_i109];
          void 0 === _r81 && (console.warn("THREE.Skeleton: No bone found with UUID:", _i109), _r81 = new Ws()), this.bones.push(_r81), this.boneInverses.push(new Jt().fromArray(t.boneInverses[_n110]));
        }

        return this.init(), this;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var t = {
          metadata: {
            version: 4.5,
            type: "Skeleton",
            generator: "Skeleton.toJSON"
          },
          bones: [],
          boneInverses: []
        };
        t.uuid = this.uuid;
        var e = this.bones,
            n = this.boneInverses;

        for (var _i110 = 0, _r82 = e.length; _i110 < _r82; _i110++) {
          var _r83 = e[_i110];
          t.bones.push(_r83.uuid);
          var _s36 = n[_i110];
          t.boneInverses.push(_s36.toArray());
        }

        return t;
      }
    }]);

    return Xs;
  }();

  var Ys = new Jt(),
      Zs = new Jt(),
      Js = [],
      Qs = new Bn();

  function Ks(t, e, n) {
    Bn.call(this, t, e), this.instanceMatrix = new Ze(new Float32Array(16 * n), 16), this.instanceColor = null, this.count = n, this.frustumCulled = !1;
  }

  Ks.prototype = Object.assign(Object.create(Bn.prototype), {
    constructor: Ks,
    isInstancedMesh: !0,
    copy: function copy(t) {
      return Bn.prototype.copy.call(this, t), this.instanceMatrix.copy(t.instanceMatrix), null !== t.instanceColor && (this.instanceColor = t.instanceColor.clone()), this.count = t.count, this;
    },
    getColorAt: function getColorAt(t, e) {
      e.fromArray(this.instanceColor.array, 3 * t);
    },
    getMatrixAt: function getMatrixAt(t, e) {
      e.fromArray(this.instanceMatrix.array, 16 * t);
    },
    raycast: function raycast(t, e) {
      var n = this.matrixWorld,
          i = this.count;
      if (Qs.geometry = this.geometry, Qs.material = this.material, void 0 !== Qs.material) for (var _r84 = 0; _r84 < i; _r84++) {
        this.getMatrixAt(_r84, Ys), Zs.multiplyMatrices(n, Ys), Qs.matrixWorld = Zs, Qs.raycast(t, Js);

        for (var _t154 = 0, _n111 = Js.length; _t154 < _n111; _t154++) {
          var _n112 = Js[_t154];
          _n112.instanceId = _r84, _n112.object = this, e.push(_n112);
        }

        Js.length = 0;
      }
    },
    setColorAt: function setColorAt(t, e) {
      null === this.instanceColor && (this.instanceColor = new Ze(new Float32Array(3 * this.count), 3)), e.toArray(this.instanceColor.array, 3 * t);
    },
    setMatrixAt: function setMatrixAt(t, e) {
      e.toArray(this.instanceMatrix.array, 16 * t);
    },
    updateMorphTargets: function updateMorphTargets() {},
    dispose: function dispose() {
      this.dispatchEvent({
        type: "dispose"
      });
    }
  });

  var $s = /*#__PURE__*/function (_Fe5) {
    _inherits($s, _Fe5);

    var _super22 = _createSuper($s);

    function $s(t) {
      var _this21;

      _classCallCheck(this, $s);

      _this21 = _super22.call(this), _this21.type = "LineBasicMaterial", _this21.color = new je(16777215), _this21.linewidth = 1, _this21.linecap = "round", _this21.linejoin = "round", _this21.morphTargets = !1, _this21.setValues(t);
      return _this21;
    }

    _createClass($s, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf($s.prototype), "copy", this).call(this, t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.morphTargets = t.morphTargets, this;
      }
    }]);

    return $s;
  }(Fe);

  $s.prototype.isLineBasicMaterial = !0;
  var ta = new xt(),
      ea = new xt(),
      na = new Jt(),
      ia = new Zt(),
      ra = new Gt();

  function sa() {
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new vn();
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new $s();
    be.call(this), this.type = "Line", this.geometry = t, this.material = e, this.updateMorphTargets();
  }

  sa.prototype = Object.assign(Object.create(be.prototype), {
    constructor: sa,
    isLine: !0,
    copy: function copy(t) {
      return be.prototype.copy.call(this, t), this.material = t.material, this.geometry = t.geometry, this;
    },
    computeLineDistances: function computeLineDistances() {
      var t = this.geometry;
      if (t.isBufferGeometry) {
        if (null === t.index) {
          var _e119 = t.attributes.position,
              _n113 = [0];

          for (var _t155 = 1, _i111 = _e119.count; _t155 < _i111; _t155++) {
            ta.fromBufferAttribute(_e119, _t155 - 1), ea.fromBufferAttribute(_e119, _t155), _n113[_t155] = _n113[_t155 - 1], _n113[_t155] += ta.distanceTo(ea);
          }

          t.setAttribute("lineDistance", new sn(_n113, 1));
        } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      } else t.isGeometry && console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
      return this;
    },
    raycast: function raycast(t, e) {
      var n = this.geometry,
          i = this.matrixWorld,
          r = t.params.Line.threshold,
          s = n.drawRange;
      if (null === n.boundingSphere && n.computeBoundingSphere(), ra.copy(n.boundingSphere), ra.applyMatrix4(i), ra.radius += r, !1 === t.ray.intersectsSphere(ra)) return;
      na.copy(i).invert(), ia.copy(t.ray).applyMatrix4(na);
      var a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
          o = a * a,
          l = new xt(),
          c = new xt(),
          h = new xt(),
          u = new xt(),
          d = this.isLineSegments ? 2 : 1;

      if (n.isBufferGeometry) {
        var _i112 = n.index,
            _r85 = n.attributes.position;

        if (null !== _i112) {
          for (var _n114 = Math.max(0, s.start), _a33 = Math.min(_i112.count, s.start + s.count) - 1; _n114 < _a33; _n114 += d) {
            var _s37 = _i112.getX(_n114),
                _a34 = _i112.getX(_n114 + 1);

            l.fromBufferAttribute(_r85, _s37), c.fromBufferAttribute(_r85, _a34);
            if (ia.distanceSqToSegment(l, c, u, h) > o) continue;
            u.applyMatrix4(this.matrixWorld);

            var _d8 = t.ray.origin.distanceTo(u);

            _d8 < t.near || _d8 > t.far || e.push({
              distance: _d8,
              point: h.clone().applyMatrix4(this.matrixWorld),
              index: _n114,
              face: null,
              faceIndex: null,
              object: this
            });
          }
        } else {
          for (var _n115 = Math.max(0, s.start), _i113 = Math.min(_r85.count, s.start + s.count) - 1; _n115 < _i113; _n115 += d) {
            l.fromBufferAttribute(_r85, _n115), c.fromBufferAttribute(_r85, _n115 + 1);
            if (ia.distanceSqToSegment(l, c, u, h) > o) continue;
            u.applyMatrix4(this.matrixWorld);

            var _i114 = t.ray.origin.distanceTo(u);

            _i114 < t.near || _i114 > t.far || e.push({
              distance: _i114,
              point: h.clone().applyMatrix4(this.matrixWorld),
              index: _n115,
              face: null,
              faceIndex: null,
              object: this
            });
          }
        }
      } else n.isGeometry && console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
    },
    updateMorphTargets: function updateMorphTargets() {
      var t = this.geometry;

      if (t.isBufferGeometry) {
        var _e120 = t.morphAttributes,
            _n116 = Object.keys(_e120);

        if (_n116.length > 0) {
          var _t156 = _e120[_n116[0]];

          if (void 0 !== _t156) {
            this.morphTargetInfluences = [], this.morphTargetDictionary = {};

            for (var _e121 = 0, _n117 = _t156.length; _e121 < _n117; _e121++) {
              var _n118 = _t156[_e121].name || String(_e121);

              this.morphTargetInfluences.push(0), this.morphTargetDictionary[_n118] = _e121;
            }
          }
        }
      } else {
        var _e122 = t.morphTargets;
        void 0 !== _e122 && _e122.length > 0 && console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
      }
    }
  });
  var aa = new xt(),
      oa = new xt();

  function la(t, e) {
    sa.call(this, t, e), this.type = "LineSegments";
  }

  la.prototype = Object.assign(Object.create(sa.prototype), {
    constructor: la,
    isLineSegments: !0,
    computeLineDistances: function computeLineDistances() {
      var t = this.geometry;
      if (t.isBufferGeometry) {
        if (null === t.index) {
          var _e123 = t.attributes.position,
              _n119 = [];

          for (var _t157 = 0, _i115 = _e123.count; _t157 < _i115; _t157 += 2) {
            aa.fromBufferAttribute(_e123, _t157), oa.fromBufferAttribute(_e123, _t157 + 1), _n119[_t157] = 0 === _t157 ? 0 : _n119[_t157 - 1], _n119[_t157 + 1] = _n119[_t157] + aa.distanceTo(oa);
          }

          t.setAttribute("lineDistance", new sn(_n119, 1));
        } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      } else t.isGeometry && console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
      return this;
    }
  });

  var ca = /*#__PURE__*/function (_sa) {
    _inherits(ca, _sa);

    var _super23 = _createSuper(ca);

    function ca(t, e) {
      var _this22;

      _classCallCheck(this, ca);

      _this22 = _super23.call(this, t, e), _this22.type = "LineLoop";
      return _this22;
    }

    return ca;
  }(sa);

  ca.prototype.isLineLoop = !0;

  var ha = /*#__PURE__*/function (_Fe6) {
    _inherits(ha, _Fe6);

    var _super24 = _createSuper(ha);

    function ha(t) {
      var _this23;

      _classCallCheck(this, ha);

      _this23 = _super24.call(this), _this23.type = "PointsMaterial", _this23.color = new je(16777215), _this23.map = null, _this23.alphaMap = null, _this23.size = 1, _this23.sizeAttenuation = !0, _this23.morphTargets = !1, _this23.setValues(t);
      return _this23;
    }

    _createClass(ha, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(ha.prototype), "copy", this).call(this, t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.morphTargets = t.morphTargets, this;
      }
    }]);

    return ha;
  }(Fe);

  ha.prototype.isPointsMaterial = !0;
  var ua = new Jt(),
      da = new Zt(),
      pa = new Gt(),
      fa = new xt();

  function ma() {
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new vn();
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new ha();
    be.call(this), this.type = "Points", this.geometry = t, this.material = e, this.updateMorphTargets();
  }

  function ga(t, e, n, i, r, s, a) {
    var o = da.distanceSqToPoint(t);

    if (o < n) {
      var _n120 = new xt();

      da.closestPointToPoint(t, _n120), _n120.applyMatrix4(i);

      var _l18 = r.ray.origin.distanceTo(_n120);

      if (_l18 < r.near || _l18 > r.far) return;
      s.push({
        distance: _l18,
        distanceToRay: Math.sqrt(o),
        point: _n120,
        index: e,
        face: null,
        object: a
      });
    }
  }

  ma.prototype = Object.assign(Object.create(be.prototype), {
    constructor: ma,
    isPoints: !0,
    copy: function copy(t) {
      return be.prototype.copy.call(this, t), this.material = t.material, this.geometry = t.geometry, this;
    },
    raycast: function raycast(t, e) {
      var n = this.geometry,
          i = this.matrixWorld,
          r = t.params.Points.threshold,
          s = n.drawRange;
      if (null === n.boundingSphere && n.computeBoundingSphere(), pa.copy(n.boundingSphere), pa.applyMatrix4(i), pa.radius += r, !1 === t.ray.intersectsSphere(pa)) return;
      ua.copy(i).invert(), da.copy(t.ray).applyMatrix4(ua);
      var a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
          o = a * a;

      if (n.isBufferGeometry) {
        var _r86 = n.index,
            _a35 = n.attributes.position;

        if (null !== _r86) {
          for (var _n121 = Math.max(0, s.start), _l19 = Math.min(_r86.count, s.start + s.count); _n121 < _l19; _n121++) {
            var _s38 = _r86.getX(_n121);

            fa.fromBufferAttribute(_a35, _s38), ga(fa, _s38, o, i, t, e, this);
          }
        } else {
          for (var _n122 = Math.max(0, s.start), _r87 = Math.min(_a35.count, s.start + s.count); _n122 < _r87; _n122++) {
            fa.fromBufferAttribute(_a35, _n122), ga(fa, _n122, o, i, t, e, this);
          }
        }
      } else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
    },
    updateMorphTargets: function updateMorphTargets() {
      var t = this.geometry;

      if (t.isBufferGeometry) {
        var _e124 = t.morphAttributes,
            _n123 = Object.keys(_e124);

        if (_n123.length > 0) {
          var _t158 = _e124[_n123[0]];

          if (void 0 !== _t158) {
            this.morphTargetInfluences = [], this.morphTargetDictionary = {};

            for (var _e125 = 0, _n124 = _t158.length; _e125 < _n124; _e125++) {
              var _n125 = _t158[_e125].name || String(_e125);

              this.morphTargetInfluences.push(0), this.morphTargetDictionary[_n125] = _e125;
            }
          }
        }
      } else {
        var _e126 = t.morphTargets;
        void 0 !== _e126 && _e126.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
      }
    }
  });

  var va = /*#__PURE__*/function (_pt5) {
    _inherits(va, _pt5);

    var _super25 = _createSuper(va);

    function va(t, e, n, i, r, s, a, o, l) {
      var _this24;

      _classCallCheck(this, va);

      _this24 = _super25.call(this, t, e, n, i, r, s, a, o, l), _this24.format = void 0 !== a ? a : T, _this24.minFilter = void 0 !== s ? s : g, _this24.magFilter = void 0 !== r ? r : g, _this24.generateMipmaps = !1;

      var c = _assertThisInitialized(_this24);

      "requestVideoFrameCallback" in t && t.requestVideoFrameCallback(function e() {
        c.needsUpdate = !0, t.requestVideoFrameCallback(e);
      });
      return _this24;
    }

    _createClass(va, [{
      key: "clone",
      value: function clone() {
        return new this.constructor(this.image).copy(this);
      }
    }, {
      key: "update",
      value: function update() {
        var t = this.image;
        !1 === "requestVideoFrameCallback" in t && t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0);
      }
    }]);

    return va;
  }(pt);

  va.prototype.isVideoTexture = !0;

  var ya = /*#__PURE__*/function (_pt6) {
    _inherits(ya, _pt6);

    var _super26 = _createSuper(ya);

    function ya(t, e, n, i, r, s, a, o, l, c, h, u) {
      var _this25;

      _classCallCheck(this, ya);

      _this25 = _super26.call(this, null, s, a, o, l, c, i, r, h, u), _this25.image = {
        width: e,
        height: n
      }, _this25.mipmaps = t, _this25.flipY = !1, _this25.generateMipmaps = !1;
      return _this25;
    }

    return ya;
  }(pt);

  ya.prototype.isCompressedTexture = !0;

  var xa = /*#__PURE__*/function (_pt7) {
    _inherits(xa, _pt7);

    var _super27 = _createSuper(xa);

    function xa(t, e, n, i, r, s, a, o, l) {
      var _this26;

      _classCallCheck(this, xa);

      _this26 = _super27.call(this, t, e, n, i, r, s, a, o, l), _this26.needsUpdate = !0;
      return _this26;
    }

    return xa;
  }(pt);

  xa.prototype.isCanvasTexture = !0;

  var _a = /*#__PURE__*/function (_pt8) {
    _inherits(_a, _pt8);

    var _super28 = _createSuper(_a);

    function _a(t, e, n, i, r, s, a, o, l, c) {
      var _this27;

      _classCallCheck(this, _a);

      if ((c = void 0 !== c ? c : A) !== A && c !== L) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
      void 0 === n && c === A && (n = _), void 0 === n && c === L && (n = S), _this27 = _super28.call(this, null, i, r, s, a, o, c, n, l), _this27.image = {
        width: t,
        height: e
      }, _this27.magFilter = void 0 !== a ? a : p, _this27.minFilter = void 0 !== o ? o : p, _this27.flipY = !1, _this27.generateMipmaps = !1;
      return _this27;
    }

    return _a;
  }(pt);

  _a.prototype.isDepthTexture = !0;

  var ba = /*#__PURE__*/function (_vn3) {
    _inherits(ba, _vn3);

    var _super29 = _createSuper(ba);

    function ba() {
      var _this28;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2 * Math.PI;

      _classCallCheck(this, ba);

      _this28 = _super29.call(this), _this28.type = "CircleGeometry", _this28.parameters = {
        radius: t,
        segments: e,
        thetaStart: n,
        thetaLength: i
      }, e = Math.max(3, e);
      var r = [],
          s = [],
          a = [],
          o = [],
          l = new xt(),
          c = new lt();
      s.push(0, 0, 0), a.push(0, 0, 1), o.push(.5, .5);

      for (var _r88 = 0, _h8 = 3; _r88 <= e; _r88++, _h8 += 3) {
        var _u9 = n + _r88 / e * i;

        l.x = t * Math.cos(_u9), l.y = t * Math.sin(_u9), s.push(l.x, l.y, l.z), a.push(0, 0, 1), c.x = (s[_h8] / t + 1) / 2, c.y = (s[_h8 + 1] / t + 1) / 2, o.push(c.x, c.y);
      }

      for (var _t159 = 1; _t159 <= e; _t159++) {
        r.push(_t159, _t159 + 1, 0);
      }

      _this28.setIndex(r), _this28.setAttribute("position", new sn(s, 3)), _this28.setAttribute("normal", new sn(a, 3)), _this28.setAttribute("uv", new sn(o, 2));
      return _this28;
    }

    return ba;
  }(vn);

  var wa = /*#__PURE__*/function (_vn4) {
    _inherits(wa, _vn4);

    var _super30 = _createSuper(wa);

    function wa() {
      var _this29;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 8;
      var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
      var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !1;
      var a = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
      var o = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 2 * Math.PI;

      _classCallCheck(this, wa);

      _this29 = _super30.call(this), _this29.type = "CylinderGeometry", _this29.parameters = {
        radiusTop: t,
        radiusBottom: e,
        height: n,
        radialSegments: i,
        heightSegments: r,
        openEnded: s,
        thetaStart: a,
        thetaLength: o
      };

      var l = _assertThisInitialized(_this29);

      i = Math.floor(i), r = Math.floor(r);
      var c = [],
          h = [],
          u = [],
          d = [];
      var p = 0;
      var f = [],
          m = n / 2;
      var g = 0;

      function v(n) {
        var r = p,
            s = new lt(),
            f = new xt();
        var v = 0;
        var y = !0 === n ? t : e,
            x = !0 === n ? 1 : -1;

        for (var _t160 = 1; _t160 <= i; _t160++) {
          h.push(0, m * x, 0), u.push(0, x, 0), d.push(.5, .5), p++;
        }

        var _ = p;

        for (var _t161 = 0; _t161 <= i; _t161++) {
          var _e127 = _t161 / i * o + a,
              _n126 = Math.cos(_e127),
              _r89 = Math.sin(_e127);

          f.x = y * _r89, f.y = m * x, f.z = y * _n126, h.push(f.x, f.y, f.z), u.push(0, x, 0), s.x = .5 * _n126 + .5, s.y = .5 * _r89 * x + .5, d.push(s.x, s.y), p++;
        }

        for (var _t162 = 0; _t162 < i; _t162++) {
          var _e128 = r + _t162,
              _i116 = _ + _t162;

          !0 === n ? c.push(_i116, _i116 + 1, _e128) : c.push(_i116 + 1, _i116, _e128), v += 3;
        }

        l.addGroup(g, v, !0 === n ? 1 : 2), g += v;
      }

      !function () {
        var s = new xt(),
            v = new xt();
        var y = 0;
        var x = (e - t) / n;

        for (var _l20 = 0; _l20 <= r; _l20++) {
          var _c18 = [],
              _g = _l20 / r,
              _y3 = _g * (e - t) + t;

          for (var _t163 = 0; _t163 <= i; _t163++) {
            var _e129 = _t163 / i,
                _r90 = _e129 * o + a,
                _l21 = Math.sin(_r90),
                _f4 = Math.cos(_r90);

            v.x = _y3 * _l21, v.y = -_g * n + m, v.z = _y3 * _f4, h.push(v.x, v.y, v.z), s.set(_l21, x, _f4).normalize(), u.push(s.x, s.y, s.z), d.push(_e129, 1 - _g), _c18.push(p++);
          }

          f.push(_c18);
        }

        for (var _t164 = 0; _t164 < i; _t164++) {
          for (var _e130 = 0; _e130 < r; _e130++) {
            var _n127 = f[_e130][_t164],
                _i117 = f[_e130 + 1][_t164],
                _r91 = f[_e130 + 1][_t164 + 1],
                _s39 = f[_e130][_t164 + 1];
            c.push(_n127, _i117, _s39), c.push(_i117, _r91, _s39), y += 6;
          }
        }

        l.addGroup(g, y, 0), g += y;
      }(), !1 === s && (t > 0 && v(!0), e > 0 && v(!1)), _this29.setIndex(c), _this29.setAttribute("position", new sn(h, 3)), _this29.setAttribute("normal", new sn(u, 3)), _this29.setAttribute("uv", new sn(d, 2));
      return _this29;
    }

    return wa;
  }(vn);

  var Ma = /*#__PURE__*/function (_wa) {
    _inherits(Ma, _wa);

    var _super31 = _createSuper(Ma);

    function Ma() {
      var _this30;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 8;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
      var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      var a = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 2 * Math.PI;

      _classCallCheck(this, Ma);

      _this30 = _super31.call(this, 0, t, e, n, i, r, s, a), _this30.type = "ConeGeometry", _this30.parameters = {
        radius: t,
        height: e,
        radialSegments: n,
        heightSegments: i,
        openEnded: r,
        thetaStart: s,
        thetaLength: a
      };
      return _this30;
    }

    return Ma;
  }(wa);

  var Sa = /*#__PURE__*/function (_vn5) {
    _inherits(Sa, _vn5);

    var _super32 = _createSuper(Sa);

    function Sa(t, e) {
      var _this31;

      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

      _classCallCheck(this, Sa);

      _this31 = _super32.call(this), _this31.type = "PolyhedronGeometry", _this31.parameters = {
        vertices: t,
        indices: e,
        radius: n,
        detail: i
      };
      var r = [],
          s = [];

      function a(t, e, n, i) {
        var r = i + 1,
            s = [];

        for (var _i118 = 0; _i118 <= r; _i118++) {
          s[_i118] = [];

          var _a36 = t.clone().lerp(n, _i118 / r),
              _o21 = e.clone().lerp(n, _i118 / r),
              _l22 = r - _i118;

          for (var _t165 = 0; _t165 <= _l22; _t165++) {
            s[_i118][_t165] = 0 === _t165 && _i118 === r ? _a36 : _a36.clone().lerp(_o21, _t165 / _l22);
          }
        }

        for (var _t166 = 0; _t166 < r; _t166++) {
          for (var _e131 = 0; _e131 < 2 * (r - _t166) - 1; _e131++) {
            var _n128 = Math.floor(_e131 / 2);

            _e131 % 2 == 0 ? (o(s[_t166][_n128 + 1]), o(s[_t166 + 1][_n128]), o(s[_t166][_n128])) : (o(s[_t166][_n128 + 1]), o(s[_t166 + 1][_n128 + 1]), o(s[_t166 + 1][_n128]));
          }
        }
      }

      function o(t) {
        r.push(t.x, t.y, t.z);
      }

      function l(e, n) {
        var i = 3 * e;
        n.x = t[i + 0], n.y = t[i + 1], n.z = t[i + 2];
      }

      function c(t, e, n, i) {
        i < 0 && 1 === t.x && (s[e] = t.x - 1), 0 === n.x && 0 === n.z && (s[e] = i / 2 / Math.PI + .5);
      }

      function h(t) {
        return Math.atan2(t.z, -t.x);
      }

      !function (t) {
        var n = new xt(),
            i = new xt(),
            r = new xt();

        for (var _s40 = 0; _s40 < e.length; _s40 += 3) {
          l(e[_s40 + 0], n), l(e[_s40 + 1], i), l(e[_s40 + 2], r), a(n, i, r, t);
        }
      }(i), function (t) {
        var e = new xt();

        for (var _n129 = 0; _n129 < r.length; _n129 += 3) {
          e.x = r[_n129 + 0], e.y = r[_n129 + 1], e.z = r[_n129 + 2], e.normalize().multiplyScalar(t), r[_n129 + 0] = e.x, r[_n129 + 1] = e.y, r[_n129 + 2] = e.z;
        }
      }(n), function () {
        var t = new xt();

        for (var _n130 = 0; _n130 < r.length; _n130 += 3) {
          t.x = r[_n130 + 0], t.y = r[_n130 + 1], t.z = r[_n130 + 2];

          var _i119 = h(t) / 2 / Math.PI + .5,
              _a37 = (e = t, Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z)) / Math.PI + .5);

          s.push(_i119, 1 - _a37);
        }

        var e;
        (function () {
          var t = new xt(),
              e = new xt(),
              n = new xt(),
              i = new xt(),
              a = new lt(),
              o = new lt(),
              l = new lt();

          for (var _u10 = 0, _d9 = 0; _u10 < r.length; _u10 += 9, _d9 += 6) {
            t.set(r[_u10 + 0], r[_u10 + 1], r[_u10 + 2]), e.set(r[_u10 + 3], r[_u10 + 4], r[_u10 + 5]), n.set(r[_u10 + 6], r[_u10 + 7], r[_u10 + 8]), a.set(s[_d9 + 0], s[_d9 + 1]), o.set(s[_d9 + 2], s[_d9 + 3]), l.set(s[_d9 + 4], s[_d9 + 5]), i.copy(t).add(e).add(n).divideScalar(3);

            var _p6 = h(i);

            c(a, _d9 + 0, t, _p6), c(o, _d9 + 2, e, _p6), c(l, _d9 + 4, n, _p6);
          }
        })(), function () {
          for (var _t167 = 0; _t167 < s.length; _t167 += 6) {
            var _e132 = s[_t167 + 0],
                _n131 = s[_t167 + 2],
                _i120 = s[_t167 + 4],
                _r92 = Math.max(_e132, _n131, _i120),
                _a38 = Math.min(_e132, _n131, _i120);

            _r92 > .9 && _a38 < .1 && (_e132 < .2 && (s[_t167 + 0] += 1), _n131 < .2 && (s[_t167 + 2] += 1), _i120 < .2 && (s[_t167 + 4] += 1));
          }
        }();
      }(), _this31.setAttribute("position", new sn(r, 3)), _this31.setAttribute("normal", new sn(r.slice(), 3)), _this31.setAttribute("uv", new sn(s, 2)), 0 === i ? _this31.computeVertexNormals() : _this31.normalizeNormals();
      return _this31;
    }

    return Sa;
  }(vn);

  var Ta = /*#__PURE__*/function (_Sa) {
    _inherits(Ta, _Sa);

    var _super33 = _createSuper(Ta);

    function Ta() {
      var _this32;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      _classCallCheck(this, Ta);

      var n = (1 + Math.sqrt(5)) / 2,
          i = 1 / n;
      _this32 = _super33.call(this, [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, 0, -n, 0, -i, n, 0, -i, -n, 0, i, n, 0, i], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], t, e), _this32.type = "DodecahedronGeometry", _this32.parameters = {
        radius: t,
        detail: e
      };
      return _this32;
    }

    return Ta;
  }(Sa);

  var Ea = new xt(),
      Aa = new xt(),
      La = new xt(),
      Ra = new Oe();

  var Ca = /*#__PURE__*/function (_vn6) {
    _inherits(Ca, _vn6);

    var _super34 = _createSuper(Ca);

    function Ca(t, e) {
      var _this33;

      _classCallCheck(this, Ca);

      if (_this33 = _super34.call(this), _this33.type = "EdgesGeometry", _this33.parameters = {
        thresholdAngle: e
      }, e = void 0 !== e ? e : 1, !0 === t.isGeometry) return _possibleConstructorReturn(_this33, void console.error("THREE.EdgesGeometry no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."));
      var n = Math.pow(10, 4),
          i = Math.cos(ot.DEG2RAD * e),
          r = t.getIndex(),
          s = t.getAttribute("position"),
          a = r ? r.count : s.count,
          o = [0, 0, 0],
          l = ["a", "b", "c"],
          c = new Array(3),
          h = {},
          u = [];

      for (var _t168 = 0; _t168 < a; _t168 += 3) {
        r ? (o[0] = r.getX(_t168), o[1] = r.getX(_t168 + 1), o[2] = r.getX(_t168 + 2)) : (o[0] = _t168, o[1] = _t168 + 1, o[2] = _t168 + 2);
        var _e133 = Ra.a,
            _a39 = Ra.b,
            _d10 = Ra.c;
        if (_e133.fromBufferAttribute(s, o[0]), _a39.fromBufferAttribute(s, o[1]), _d10.fromBufferAttribute(s, o[2]), Ra.getNormal(La), c[0] = "".concat(Math.round(_e133.x * n), ",").concat(Math.round(_e133.y * n), ",").concat(Math.round(_e133.z * n)), c[1] = "".concat(Math.round(_a39.x * n), ",").concat(Math.round(_a39.y * n), ",").concat(Math.round(_a39.z * n)), c[2] = "".concat(Math.round(_d10.x * n), ",").concat(Math.round(_d10.y * n), ",").concat(Math.round(_d10.z * n)), c[0] !== c[1] && c[1] !== c[2] && c[2] !== c[0]) for (var _t169 = 0; _t169 < 3; _t169++) {
          var _e134 = (_t169 + 1) % 3,
              _n132 = c[_t169],
              _r93 = c[_e134],
              _s41 = Ra[l[_t169]],
              _a40 = Ra[l[_e134]],
              _d11 = "".concat(_n132, "_").concat(_r93),
              _p7 = "".concat(_r93, "_").concat(_n132);

          _p7 in h && h[_p7] ? (La.dot(h[_p7].normal) <= i && (u.push(_s41.x, _s41.y, _s41.z), u.push(_a40.x, _a40.y, _a40.z)), h[_p7] = null) : _d11 in h || (h[_d11] = {
            index0: o[_t169],
            index1: o[_e134],
            normal: La.clone()
          });
        }
      }

      for (var _t170 in h) {
        if (h[_t170]) {
          var _h$_t = h[_t170],
              _e135 = _h$_t.index0,
              _n133 = _h$_t.index1;
          Ea.fromBufferAttribute(s, _e135), Aa.fromBufferAttribute(s, _n133), u.push(Ea.x, Ea.y, Ea.z), u.push(Aa.x, Aa.y, Aa.z);
        }
      }

      _this33.setAttribute("position", new sn(u, 3));

      return _possibleConstructorReturn(_this33);
    }

    return Ca;
  }(vn);

  var Pa = function Pa(t, e, n) {
    n = n || 2;
    var i = e && e.length,
        r = i ? e[0] * n : t.length;
    var s = Da(t, 0, r, n, !0);
    var a = [];
    if (!s || s.next === s.prev) return a;
    var o, l, c, h, u, d, p;

    if (i && (s = function (t, e, n, i) {
      var r = [];
      var s, a, o, l, c;

      for (s = 0, a = e.length; s < a; s++) {
        o = e[s] * i, l = s < a - 1 ? e[s + 1] * i : t.length, c = Da(t, o, l, i, !1), c === c.next && (c.steiner = !0), r.push(Va(c));
      }

      for (r.sort(Ha), s = 0; s < r.length; s++) {
        Ua(r[s], n), n = Ia(n, n.next);
      }

      return n;
    }(t, e, s, n)), t.length > 80 * n) {
      o = c = t[0], l = h = t[1];

      for (var _e136 = n; _e136 < r; _e136 += n) {
        u = t[_e136], d = t[_e136 + 1], u < o && (o = u), d < l && (l = d), u > c && (c = u), d > h && (h = d);
      }

      p = Math.max(c - o, h - l), p = 0 !== p ? 1 / p : 0;
    }

    return Na(s, a, n, o, l, p), a;
  };

  function Da(t, e, n, i, r) {
    var s, a;
    if (r === function (t, e, n, i) {
      var r = 0;

      for (var _s42 = e, _a41 = n - i; _s42 < n; _s42 += i) {
        r += (t[_a41] - t[_s42]) * (t[_s42 + 1] + t[_a41 + 1]), _a41 = _s42;
      }

      return r;
    }(t, e, n, i) > 0) for (s = e; s < n; s += i) {
      a = $a(s, t[s], t[s + 1], a);
    } else for (s = n - i; s >= e; s -= i) {
      a = $a(s, t[s], t[s + 1], a);
    }
    return a && Xa(a, a.next) && (to(a), a = a.next), a;
  }

  function Ia(t, e) {
    if (!t) return t;
    e || (e = t);
    var n,
        i = t;

    do {
      if (n = !1, i.steiner || !Xa(i, i.next) && 0 !== qa(i.prev, i, i.next)) i = i.next;else {
        if (to(i), i = e = i.prev, i === i.next) break;
        n = !0;
      }
    } while (n || i !== e);

    return e;
  }

  function Na(t, e, n, i, r, s, a) {
    if (!t) return;
    !a && s && function (t, e, n, i) {
      var r = t;

      do {
        null === r.z && (r.z = ka(r.x, r.y, e, n, i)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next;
      } while (r !== t);

      r.prevZ.nextZ = null, r.prevZ = null, function (t) {
        var e,
            n,
            i,
            r,
            s,
            a,
            o,
            l,
            c = 1;

        do {
          for (n = t, t = null, s = null, a = 0; n;) {
            for (a++, i = n, o = 0, e = 0; e < c && (o++, i = i.nextZ, i); e++) {
              ;
            }

            for (l = c; o > 0 || l > 0 && i;) {
              0 !== o && (0 === l || !i || n.z <= i.z) ? (r = n, n = n.nextZ, o--) : (r = i, i = i.nextZ, l--), s ? s.nextZ = r : t = r, r.prevZ = s, s = r;
            }

            n = i;
          }

          s.nextZ = null, c *= 2;
        } while (a > 1);
      }(r);
    }(t, i, r, s);
    var o,
        l,
        c = t;

    for (; t.prev !== t.next;) {
      if (o = t.prev, l = t.next, s ? Oa(t, i, r, s) : Ba(t)) e.push(o.i / n), e.push(t.i / n), e.push(l.i / n), to(t), t = l.next, c = l.next;else if ((t = l) === c) {
        a ? 1 === a ? Na(t = za(Ia(t), e, n), e, n, i, r, s, 2) : 2 === a && Fa(t, e, n, i, r, s) : Na(Ia(t), e, n, i, r, s, 1);
        break;
      }
    }
  }

  function Ba(t) {
    var e = t.prev,
        n = t,
        i = t.next;
    if (qa(e, n, i) >= 0) return !1;
    var r = t.next.next;

    for (; r !== t.prev;) {
      if (Wa(e.x, e.y, n.x, n.y, i.x, i.y, r.x, r.y) && qa(r.prev, r, r.next) >= 0) return !1;
      r = r.next;
    }

    return !0;
  }

  function Oa(t, e, n, i) {
    var r = t.prev,
        s = t,
        a = t.next;
    if (qa(r, s, a) >= 0) return !1;
    var o = r.x < s.x ? r.x < a.x ? r.x : a.x : s.x < a.x ? s.x : a.x,
        l = r.y < s.y ? r.y < a.y ? r.y : a.y : s.y < a.y ? s.y : a.y,
        c = r.x > s.x ? r.x > a.x ? r.x : a.x : s.x > a.x ? s.x : a.x,
        h = r.y > s.y ? r.y > a.y ? r.y : a.y : s.y > a.y ? s.y : a.y,
        u = ka(o, l, e, n, i),
        d = ka(c, h, e, n, i);
    var p = t.prevZ,
        f = t.nextZ;

    for (; p && p.z >= u && f && f.z <= d;) {
      if (p !== t.prev && p !== t.next && Wa(r.x, r.y, s.x, s.y, a.x, a.y, p.x, p.y) && qa(p.prev, p, p.next) >= 0) return !1;
      if (p = p.prevZ, f !== t.prev && f !== t.next && Wa(r.x, r.y, s.x, s.y, a.x, a.y, f.x, f.y) && qa(f.prev, f, f.next) >= 0) return !1;
      f = f.nextZ;
    }

    for (; p && p.z >= u;) {
      if (p !== t.prev && p !== t.next && Wa(r.x, r.y, s.x, s.y, a.x, a.y, p.x, p.y) && qa(p.prev, p, p.next) >= 0) return !1;
      p = p.prevZ;
    }

    for (; f && f.z <= d;) {
      if (f !== t.prev && f !== t.next && Wa(r.x, r.y, s.x, s.y, a.x, a.y, f.x, f.y) && qa(f.prev, f, f.next) >= 0) return !1;
      f = f.nextZ;
    }

    return !0;
  }

  function za(t, e, n) {
    var i = t;

    do {
      var _r94 = i.prev,
          _s43 = i.next.next;
      !Xa(_r94, _s43) && Ya(_r94, i, i.next, _s43) && Qa(_r94, _s43) && Qa(_s43, _r94) && (e.push(_r94.i / n), e.push(i.i / n), e.push(_s43.i / n), to(i), to(i.next), i = t = _s43), i = i.next;
    } while (i !== t);

    return Ia(i);
  }

  function Fa(t, e, n, i, r, s) {
    var a = t;

    do {
      var _t171 = a.next.next;

      for (; _t171 !== a.prev;) {
        if (a.i !== _t171.i && ja(a, _t171)) {
          var _o22 = Ka(a, _t171);

          return a = Ia(a, a.next), _o22 = Ia(_o22, _o22.next), Na(a, e, n, i, r, s), void Na(_o22, e, n, i, r, s);
        }

        _t171 = _t171.next;
      }

      a = a.next;
    } while (a !== t);
  }

  function Ha(t, e) {
    return t.x - e.x;
  }

  function Ua(t, e) {
    if (e = function (t, e) {
      var n = e;
      var i = t.x,
          r = t.y;
      var s,
          a = -1 / 0;

      do {
        if (r <= n.y && r >= n.next.y && n.next.y !== n.y) {
          var _t172 = n.x + (r - n.y) * (n.next.x - n.x) / (n.next.y - n.y);

          if (_t172 <= i && _t172 > a) {
            if (a = _t172, _t172 === i) {
              if (r === n.y) return n;
              if (r === n.next.y) return n.next;
            }

            s = n.x < n.next.x ? n : n.next;
          }
        }

        n = n.next;
      } while (n !== e);

      if (!s) return null;
      if (i === a) return s;
      var o = s,
          l = s.x,
          c = s.y;
      var h,
          u = 1 / 0;
      n = s;

      do {
        i >= n.x && n.x >= l && i !== n.x && Wa(r < c ? i : a, r, l, c, r < c ? a : i, r, n.x, n.y) && (h = Math.abs(r - n.y) / (i - n.x), Qa(n, t) && (h < u || h === u && (n.x > s.x || n.x === s.x && Ga(s, n))) && (s = n, u = h)), n = n.next;
      } while (n !== o);

      return s;
    }(t, e)) {
      var _n134 = Ka(e, t);

      Ia(e, e.next), Ia(_n134, _n134.next);
    }
  }

  function Ga(t, e) {
    return qa(t.prev, t, e.prev) < 0 && qa(e.next, t, t.next) < 0;
  }

  function ka(t, e, n, i, r) {
    return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - n) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - i) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1;
  }

  function Va(t) {
    var e = t,
        n = t;

    do {
      (e.x < n.x || e.x === n.x && e.y < n.y) && (n = e), e = e.next;
    } while (e !== t);

    return n;
  }

  function Wa(t, e, n, i, r, s, a, o) {
    return (r - a) * (e - o) - (t - a) * (s - o) >= 0 && (t - a) * (i - o) - (n - a) * (e - o) >= 0 && (n - a) * (s - o) - (r - a) * (i - o) >= 0;
  }

  function ja(t, e) {
    return t.next.i !== e.i && t.prev.i !== e.i && !function (t, e) {
      var n = t;

      do {
        if (n.i !== t.i && n.next.i !== t.i && n.i !== e.i && n.next.i !== e.i && Ya(n, n.next, t, e)) return !0;
        n = n.next;
      } while (n !== t);

      return !1;
    }(t, e) && (Qa(t, e) && Qa(e, t) && function (t, e) {
      var n = t,
          i = !1;
      var r = (t.x + e.x) / 2,
          s = (t.y + e.y) / 2;

      do {
        n.y > s != n.next.y > s && n.next.y !== n.y && r < (n.next.x - n.x) * (s - n.y) / (n.next.y - n.y) + n.x && (i = !i), n = n.next;
      } while (n !== t);

      return i;
    }(t, e) && (qa(t.prev, t, e.prev) || qa(t, e.prev, e)) || Xa(t, e) && qa(t.prev, t, t.next) > 0 && qa(e.prev, e, e.next) > 0);
  }

  function qa(t, e, n) {
    return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
  }

  function Xa(t, e) {
    return t.x === e.x && t.y === e.y;
  }

  function Ya(t, e, n, i) {
    var r = Ja(qa(t, e, n)),
        s = Ja(qa(t, e, i)),
        a = Ja(qa(n, i, t)),
        o = Ja(qa(n, i, e));
    return r !== s && a !== o || !(0 !== r || !Za(t, n, e)) || !(0 !== s || !Za(t, i, e)) || !(0 !== a || !Za(n, t, i)) || !(0 !== o || !Za(n, e, i));
  }

  function Za(t, e, n) {
    return e.x <= Math.max(t.x, n.x) && e.x >= Math.min(t.x, n.x) && e.y <= Math.max(t.y, n.y) && e.y >= Math.min(t.y, n.y);
  }

  function Ja(t) {
    return t > 0 ? 1 : t < 0 ? -1 : 0;
  }

  function Qa(t, e) {
    return qa(t.prev, t, t.next) < 0 ? qa(t, e, t.next) >= 0 && qa(t, t.prev, e) >= 0 : qa(t, e, t.prev) < 0 || qa(t, t.next, e) < 0;
  }

  function Ka(t, e) {
    var n = new eo(t.i, t.x, t.y),
        i = new eo(e.i, e.x, e.y),
        r = t.next,
        s = e.prev;
    return t.next = e, e.prev = t, n.next = r, r.prev = n, i.next = n, n.prev = i, s.next = i, i.prev = s, i;
  }

  function $a(t, e, n, i) {
    var r = new eo(t, e, n);
    return i ? (r.next = i.next, r.prev = i, i.next.prev = r, i.next = r) : (r.prev = r, r.next = r), r;
  }

  function to(t) {
    t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ);
  }

  function eo(t, e, n) {
    this.i = t, this.x = e, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1;
  }

  var no = {
    area: function area(t) {
      var e = t.length;
      var n = 0;

      for (var _i121 = e - 1, _r95 = 0; _r95 < e; _i121 = _r95++) {
        n += t[_i121].x * t[_r95].y - t[_r95].x * t[_i121].y;
      }

      return .5 * n;
    },
    isClockWise: function isClockWise(t) {
      return no.area(t) < 0;
    },
    triangulateShape: function triangulateShape(t, e) {
      var n = [],
          i = [],
          r = [];
      io(t), ro(n, t);
      var s = t.length;
      e.forEach(io);

      for (var _t173 = 0; _t173 < e.length; _t173++) {
        i.push(s), s += e[_t173].length, ro(n, e[_t173]);
      }

      var a = Pa(n, i);

      for (var _t174 = 0; _t174 < a.length; _t174 += 3) {
        r.push(a.slice(_t174, _t174 + 3));
      }

      return r;
    }
  };

  function io(t) {
    var e = t.length;
    e > 2 && t[e - 1].equals(t[0]) && t.pop();
  }

  function ro(t, e) {
    for (var _n135 = 0; _n135 < e.length; _n135++) {
      t.push(e[_n135].x), t.push(e[_n135].y);
    }
  }

  var so = /*#__PURE__*/function (_vn7) {
    _inherits(so, _vn7);

    var _super35 = _createSuper(so);

    function so(t, e) {
      var _this34;

      _classCallCheck(this, so);

      _this34 = _super35.call(this), _this34.type = "ExtrudeGeometry", _this34.parameters = {
        shapes: t,
        options: e
      }, t = Array.isArray(t) ? t : [t];

      var n = _assertThisInitialized(_this34),
          i = [],
          r = [];

      for (var _e137 = 0, _n136 = t.length; _e137 < _n136; _e137++) {
        s(t[_e137]);
      }

      function s(t) {
        var s = [],
            a = void 0 !== e.curveSegments ? e.curveSegments : 12,
            o = void 0 !== e.steps ? e.steps : 1;
        var l = void 0 !== e.depth ? e.depth : 100,
            c = void 0 === e.bevelEnabled || e.bevelEnabled,
            h = void 0 !== e.bevelThickness ? e.bevelThickness : 6,
            u = void 0 !== e.bevelSize ? e.bevelSize : h - 2,
            d = void 0 !== e.bevelOffset ? e.bevelOffset : 0,
            p = void 0 !== e.bevelSegments ? e.bevelSegments : 3;
        var f = e.extrudePath,
            m = void 0 !== e.UVGenerator ? e.UVGenerator : ao;
        void 0 !== e.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), l = e.amount);

        var g,
            v,
            y,
            x,
            _,
            b = !1;

        f && (g = f.getSpacedPoints(o), b = !0, c = !1, v = f.computeFrenetFrames(o, !1), y = new xt(), x = new xt(), _ = new xt()), c || (p = 0, h = 0, u = 0, d = 0);
        var w = t.extractPoints(a);
        var M = w.shape;
        var S = w.holes;

        if (!no.isClockWise(M)) {
          M = M.reverse();

          for (var _t175 = 0, _e138 = S.length; _t175 < _e138; _t175++) {
            var _e139 = S[_t175];
            no.isClockWise(_e139) && (S[_t175] = _e139.reverse());
          }
        }

        var T = no.triangulateShape(M, S),
            E = M;

        for (var _t176 = 0, _e140 = S.length; _t176 < _e140; _t176++) {
          var _e141 = S[_t176];
          M = M.concat(_e141);
        }

        function A(t, e, n) {
          return e || console.error("THREE.ExtrudeGeometry: vec does not exist"), e.clone().multiplyScalar(n).add(t);
        }

        var L = M.length,
            R = T.length;

        function C(t, e, n) {
          var i, r, s;
          var a = t.x - e.x,
              o = t.y - e.y,
              l = n.x - t.x,
              c = n.y - t.y,
              h = a * a + o * o,
              u = a * c - o * l;

          if (Math.abs(u) > Number.EPSILON) {
            var _u11 = Math.sqrt(h),
                _d12 = Math.sqrt(l * l + c * c),
                _p8 = e.x - o / _u11,
                _f5 = e.y + a / _u11,
                _m2 = ((n.x - c / _d12 - _p8) * c - (n.y + l / _d12 - _f5) * l) / (a * c - o * l);

            i = _p8 + a * _m2 - t.x, r = _f5 + o * _m2 - t.y;

            var _g2 = i * i + r * r;

            if (_g2 <= 2) return new lt(i, r);
            s = Math.sqrt(_g2 / 2);
          } else {
            var _t177 = !1;

            a > Number.EPSILON ? l > Number.EPSILON && (_t177 = !0) : a < -Number.EPSILON ? l < -Number.EPSILON && (_t177 = !0) : Math.sign(o) === Math.sign(c) && (_t177 = !0), _t177 ? (i = -o, r = a, s = Math.sqrt(h)) : (i = a, r = o, s = Math.sqrt(h / 2));
          }

          return new lt(i / s, r / s);
        }

        var P = [];

        for (var _t178 = 0, _e142 = E.length, _n137 = _e142 - 1, _i122 = _t178 + 1; _t178 < _e142; _t178++, _n137++, _i122++) {
          _n137 === _e142 && (_n137 = 0), _i122 === _e142 && (_i122 = 0), P[_t178] = C(E[_t178], E[_n137], E[_i122]);
        }

        var D = [];
        var I,
            N = P.concat();

        for (var _t179 = 0, _e143 = S.length; _t179 < _e143; _t179++) {
          var _e144 = S[_t179];
          I = [];

          for (var _t180 = 0, _n138 = _e144.length, _i123 = _n138 - 1, _r96 = _t180 + 1; _t180 < _n138; _t180++, _i123++, _r96++) {
            _i123 === _n138 && (_i123 = 0), _r96 === _n138 && (_r96 = 0), I[_t180] = C(_e144[_t180], _e144[_i123], _e144[_r96]);
          }

          D.push(I), N = N.concat(I);
        }

        for (var _t181 = 0; _t181 < p; _t181++) {
          var _e145 = _t181 / p,
              _n139 = h * Math.cos(_e145 * Math.PI / 2),
              _i124 = u * Math.sin(_e145 * Math.PI / 2) + d;

          for (var _t182 = 0, _e146 = E.length; _t182 < _e146; _t182++) {
            var _e147 = A(E[_t182], P[_t182], _i124);

            z(_e147.x, _e147.y, -_n139);
          }

          for (var _t183 = 0, _e148 = S.length; _t183 < _e148; _t183++) {
            var _e149 = S[_t183];
            I = D[_t183];

            for (var _t184 = 0, _r97 = _e149.length; _t184 < _r97; _t184++) {
              var _r98 = A(_e149[_t184], I[_t184], _i124);

              z(_r98.x, _r98.y, -_n139);
            }
          }
        }

        var B = u + d;

        for (var _t185 = 0; _t185 < L; _t185++) {
          var _e150 = c ? A(M[_t185], N[_t185], B) : M[_t185];

          b ? (x.copy(v.normals[0]).multiplyScalar(_e150.x), y.copy(v.binormals[0]).multiplyScalar(_e150.y), _.copy(g[0]).add(x).add(y), z(_.x, _.y, _.z)) : z(_e150.x, _e150.y, 0);
        }

        for (var _t186 = 1; _t186 <= o; _t186++) {
          for (var _e151 = 0; _e151 < L; _e151++) {
            var _n140 = c ? A(M[_e151], N[_e151], B) : M[_e151];

            b ? (x.copy(v.normals[_t186]).multiplyScalar(_n140.x), y.copy(v.binormals[_t186]).multiplyScalar(_n140.y), _.copy(g[_t186]).add(x).add(y), z(_.x, _.y, _.z)) : z(_n140.x, _n140.y, l / o * _t186);
          }
        }

        for (var _t187 = p - 1; _t187 >= 0; _t187--) {
          var _e152 = _t187 / p,
              _n141 = h * Math.cos(_e152 * Math.PI / 2),
              _i125 = u * Math.sin(_e152 * Math.PI / 2) + d;

          for (var _t188 = 0, _e153 = E.length; _t188 < _e153; _t188++) {
            var _e154 = A(E[_t188], P[_t188], _i125);

            z(_e154.x, _e154.y, l + _n141);
          }

          for (var _t189 = 0, _e155 = S.length; _t189 < _e155; _t189++) {
            var _e156 = S[_t189];
            I = D[_t189];

            for (var _t190 = 0, _r99 = _e156.length; _t190 < _r99; _t190++) {
              var _r100 = A(_e156[_t190], I[_t190], _i125);

              b ? z(_r100.x, _r100.y + g[o - 1].y, g[o - 1].x + _n141) : z(_r100.x, _r100.y, l + _n141);
            }
          }
        }

        function O(t, e) {
          var n = t.length;

          for (; --n >= 0;) {
            var _i126 = n;

            var _r101 = n - 1;

            _r101 < 0 && (_r101 = t.length - 1);

            for (var _t191 = 0, _n142 = o + 2 * p; _t191 < _n142; _t191++) {
              var _n143 = L * _t191,
                  _s44 = L * (_t191 + 1);

              H(e + _i126 + _n143, e + _r101 + _n143, e + _r101 + _s44, e + _i126 + _s44);
            }
          }
        }

        function z(t, e, n) {
          s.push(t), s.push(e), s.push(n);
        }

        function F(t, e, r) {
          U(t), U(e), U(r);
          var s = i.length / 3,
              a = m.generateTopUV(n, i, s - 3, s - 2, s - 1);
          G(a[0]), G(a[1]), G(a[2]);
        }

        function H(t, e, r, s) {
          U(t), U(e), U(s), U(e), U(r), U(s);
          var a = i.length / 3,
              o = m.generateSideWallUV(n, i, a - 6, a - 3, a - 2, a - 1);
          G(o[0]), G(o[1]), G(o[3]), G(o[1]), G(o[2]), G(o[3]);
        }

        function U(t) {
          i.push(s[3 * t + 0]), i.push(s[3 * t + 1]), i.push(s[3 * t + 2]);
        }

        function G(t) {
          r.push(t.x), r.push(t.y);
        }

        !function () {
          var t = i.length / 3;

          if (c) {
            var _t192 = 0,
                _e157 = L * _t192;

            for (var _t193 = 0; _t193 < R; _t193++) {
              var _n144 = T[_t193];
              F(_n144[2] + _e157, _n144[1] + _e157, _n144[0] + _e157);
            }

            _t192 = o + 2 * p, _e157 = L * _t192;

            for (var _t194 = 0; _t194 < R; _t194++) {
              var _n145 = T[_t194];
              F(_n145[0] + _e157, _n145[1] + _e157, _n145[2] + _e157);
            }
          } else {
            for (var _t195 = 0; _t195 < R; _t195++) {
              var _e158 = T[_t195];
              F(_e158[2], _e158[1], _e158[0]);
            }

            for (var _t196 = 0; _t196 < R; _t196++) {
              var _e159 = T[_t196];
              F(_e159[0] + L * o, _e159[1] + L * o, _e159[2] + L * o);
            }
          }

          n.addGroup(t, i.length / 3 - t, 0);
        }(), function () {
          var t = i.length / 3;
          var e = 0;
          O(E, e), e += E.length;

          for (var _t197 = 0, _n146 = S.length; _t197 < _n146; _t197++) {
            var _n147 = S[_t197];
            O(_n147, e), e += _n147.length;
          }

          n.addGroup(t, i.length / 3 - t, 1);
        }();
      }

      _this34.setAttribute("position", new sn(i, 3)), _this34.setAttribute("uv", new sn(r, 2)), _this34.computeVertexNormals();
      return _this34;
    }

    _createClass(so, [{
      key: "toJSON",
      value: function toJSON() {
        var t = vn.prototype.toJSON.call(this);
        return function (t, e, n) {
          if (n.shapes = [], Array.isArray(t)) for (var _e160 = 0, _i127 = t.length; _e160 < _i127; _e160++) {
            var _i128 = t[_e160];
            n.shapes.push(_i128.uuid);
          } else n.shapes.push(t.uuid);
          void 0 !== e.extrudePath && (n.options.extrudePath = e.extrudePath.toJSON());
          return n;
        }(this.parameters.shapes, this.parameters.options, t);
      }
    }]);

    return so;
  }(vn);

  var ao = {
    generateTopUV: function generateTopUV(t, e, n, i, r) {
      var s = e[3 * n],
          a = e[3 * n + 1],
          o = e[3 * i],
          l = e[3 * i + 1],
          c = e[3 * r],
          h = e[3 * r + 1];
      return [new lt(s, a), new lt(o, l), new lt(c, h)];
    },
    generateSideWallUV: function generateSideWallUV(t, e, n, i, r, s) {
      var a = e[3 * n],
          o = e[3 * n + 1],
          l = e[3 * n + 2],
          c = e[3 * i],
          h = e[3 * i + 1],
          u = e[3 * i + 2],
          d = e[3 * r],
          p = e[3 * r + 1],
          f = e[3 * r + 2],
          m = e[3 * s],
          g = e[3 * s + 1],
          v = e[3 * s + 2];
      return Math.abs(o - h) < .01 ? [new lt(a, 1 - l), new lt(c, 1 - u), new lt(d, 1 - f), new lt(m, 1 - v)] : [new lt(o, 1 - l), new lt(h, 1 - u), new lt(p, 1 - f), new lt(g, 1 - v)];
    }
  };

  var oo = /*#__PURE__*/function (_Sa2) {
    _inherits(oo, _Sa2);

    var _super36 = _createSuper(oo);

    function oo() {
      var _this35;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      _classCallCheck(this, oo);

      var n = (1 + Math.sqrt(5)) / 2;
      _this35 = _super36.call(this, [-1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, 0, 0, -1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, n, 0, -1, n, 0, 1, -n, 0, -1, -n, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], t, e), _this35.type = "IcosahedronGeometry", _this35.parameters = {
        radius: t,
        detail: e
      };
      return _this35;
    }

    return oo;
  }(Sa);

  var lo = /*#__PURE__*/function (_vn8) {
    _inherits(lo, _vn8);

    var _super37 = _createSuper(lo);

    function lo(t) {
      var _this36;

      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 12;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2 * Math.PI;

      _classCallCheck(this, lo);

      _this36 = _super37.call(this), _this36.type = "LatheGeometry", _this36.parameters = {
        points: t,
        segments: e,
        phiStart: n,
        phiLength: i
      }, e = Math.floor(e), i = ot.clamp(i, 0, 2 * Math.PI);
      var r = [],
          s = [],
          a = [],
          o = 1 / e,
          l = new xt(),
          c = new lt();

      for (var _r102 = 0; _r102 <= e; _r102++) {
        var _h9 = n + _r102 * o * i,
            _u12 = Math.sin(_h9),
            _d13 = Math.cos(_h9);

        for (var _n148 = 0; _n148 <= t.length - 1; _n148++) {
          l.x = t[_n148].x * _u12, l.y = t[_n148].y, l.z = t[_n148].x * _d13, s.push(l.x, l.y, l.z), c.x = _r102 / e, c.y = _n148 / (t.length - 1), a.push(c.x, c.y);
        }
      }

      for (var _n149 = 0; _n149 < e; _n149++) {
        for (var _e161 = 0; _e161 < t.length - 1; _e161++) {
          var _i129 = _e161 + _n149 * t.length,
              _s45 = _i129,
              _a42 = _i129 + t.length,
              _o23 = _i129 + t.length + 1,
              _l23 = _i129 + 1;

          r.push(_s45, _a42, _l23), r.push(_a42, _o23, _l23);
        }
      }

      if (_this36.setIndex(r), _this36.setAttribute("position", new sn(s, 3)), _this36.setAttribute("uv", new sn(a, 2)), _this36.computeVertexNormals(), i === 2 * Math.PI) {
        var _n150 = _this36.attributes.normal.array,
            _i130 = new xt(),
            _r103 = new xt(),
            _s46 = new xt(),
            _a43 = e * t.length * 3;

        for (var _e162 = 0, _o24 = 0; _e162 < t.length; _e162++, _o24 += 3) {
          _i130.x = _n150[_o24 + 0], _i130.y = _n150[_o24 + 1], _i130.z = _n150[_o24 + 2], _r103.x = _n150[_a43 + _o24 + 0], _r103.y = _n150[_a43 + _o24 + 1], _r103.z = _n150[_a43 + _o24 + 2], _s46.addVectors(_i130, _r103).normalize(), _n150[_o24 + 0] = _n150[_a43 + _o24 + 0] = _s46.x, _n150[_o24 + 1] = _n150[_a43 + _o24 + 1] = _s46.y, _n150[_o24 + 2] = _n150[_a43 + _o24 + 2] = _s46.z;
        }
      }

      return _this36;
    }

    return lo;
  }(vn);

  var co = /*#__PURE__*/function (_Sa3) {
    _inherits(co, _Sa3);

    var _super38 = _createSuper(co);

    function co() {
      var _this37;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      _classCallCheck(this, co);

      _this37 = _super38.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], t, e), _this37.type = "OctahedronGeometry", _this37.parameters = {
        radius: t,
        detail: e
      };
      return _this37;
    }

    return co;
  }(Sa);

  function ho(t, e, n) {
    vn.call(this), this.type = "ParametricGeometry", this.parameters = {
      func: t,
      slices: e,
      stacks: n
    };
    var i = [],
        r = [],
        s = [],
        a = [],
        o = 1e-5,
        l = new xt(),
        c = new xt(),
        h = new xt(),
        u = new xt(),
        d = new xt();
    t.length < 3 && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
    var p = e + 1;

    for (var _i131 = 0; _i131 <= n; _i131++) {
      var _p9 = _i131 / n;

      for (var _n151 = 0; _n151 <= e; _n151++) {
        var _i132 = _n151 / e;

        t(_i132, _p9, c), r.push(c.x, c.y, c.z), _i132 - o >= 0 ? (t(_i132 - o, _p9, h), u.subVectors(c, h)) : (t(_i132 + o, _p9, h), u.subVectors(h, c)), _p9 - o >= 0 ? (t(_i132, _p9 - o, h), d.subVectors(c, h)) : (t(_i132, _p9 + o, h), d.subVectors(h, c)), l.crossVectors(u, d).normalize(), s.push(l.x, l.y, l.z), a.push(_i132, _p9);
      }
    }

    for (var _t198 = 0; _t198 < n; _t198++) {
      for (var _n152 = 0; _n152 < e; _n152++) {
        var _e163 = _t198 * p + _n152,
            _r104 = _t198 * p + _n152 + 1,
            _s47 = (_t198 + 1) * p + _n152 + 1,
            _a44 = (_t198 + 1) * p + _n152;

        i.push(_e163, _r104, _a44), i.push(_r104, _s47, _a44);
      }
    }

    this.setIndex(i), this.setAttribute("position", new sn(r, 3)), this.setAttribute("normal", new sn(s, 3)), this.setAttribute("uv", new sn(a, 2));
  }

  ho.prototype = Object.create(vn.prototype), ho.prototype.constructor = ho;

  var uo = /*#__PURE__*/function (_vn9) {
    _inherits(uo, _vn9);

    var _super39 = _createSuper(uo);

    function uo() {
      var _this38;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : .5;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 8;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 2 * Math.PI;

      _classCallCheck(this, uo);

      _this38 = _super39.call(this), _this38.type = "RingGeometry", _this38.parameters = {
        innerRadius: t,
        outerRadius: e,
        thetaSegments: n,
        phiSegments: i,
        thetaStart: r,
        thetaLength: s
      }, n = Math.max(3, n);
      var a = [],
          o = [],
          l = [],
          c = [];
      var h = t;
      var u = (e - t) / (i = Math.max(1, i)),
          d = new xt(),
          p = new lt();

      for (var _t199 = 0; _t199 <= i; _t199++) {
        for (var _t200 = 0; _t200 <= n; _t200++) {
          var _i133 = r + _t200 / n * s;

          d.x = h * Math.cos(_i133), d.y = h * Math.sin(_i133), o.push(d.x, d.y, d.z), l.push(0, 0, 1), p.x = (d.x / e + 1) / 2, p.y = (d.y / e + 1) / 2, c.push(p.x, p.y);
        }

        h += u;
      }

      for (var _t201 = 0; _t201 < i; _t201++) {
        var _e164 = _t201 * (n + 1);

        for (var _t202 = 0; _t202 < n; _t202++) {
          var _i134 = _t202 + _e164,
              _r105 = _i134,
              _s48 = _i134 + n + 1,
              _o25 = _i134 + n + 2,
              _l24 = _i134 + 1;

          a.push(_r105, _s48, _l24), a.push(_s48, _o25, _l24);
        }
      }

      _this38.setIndex(a), _this38.setAttribute("position", new sn(o, 3)), _this38.setAttribute("normal", new sn(l, 3)), _this38.setAttribute("uv", new sn(c, 2));
      return _this38;
    }

    return uo;
  }(vn);

  var po = /*#__PURE__*/function (_vn10) {
    _inherits(po, _vn10);

    var _super40 = _createSuper(po);

    function po(t) {
      var _this39;

      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 12;

      _classCallCheck(this, po);

      _this39 = _super40.call(this), _this39.type = "ShapeGeometry", _this39.parameters = {
        shapes: t,
        curveSegments: e
      };
      var n = [],
          i = [],
          r = [],
          s = [];
      var a = 0,
          o = 0;
      if (!1 === Array.isArray(t)) l(t);else for (var _e165 = 0; _e165 < t.length; _e165++) {
        l(t[_e165]), _this39.addGroup(a, o, _e165), a += o, o = 0;
      }

      function l(t) {
        var a = i.length / 3,
            l = t.extractPoints(e);
        var c = l.shape;
        var h = l.holes;
        !1 === no.isClockWise(c) && (c = c.reverse());

        for (var _t203 = 0, _e166 = h.length; _t203 < _e166; _t203++) {
          var _e167 = h[_t203];
          !0 === no.isClockWise(_e167) && (h[_t203] = _e167.reverse());
        }

        var u = no.triangulateShape(c, h);

        for (var _t204 = 0, _e168 = h.length; _t204 < _e168; _t204++) {
          var _e169 = h[_t204];
          c = c.concat(_e169);
        }

        for (var _t205 = 0, _e170 = c.length; _t205 < _e170; _t205++) {
          var _e171 = c[_t205];
          i.push(_e171.x, _e171.y, 0), r.push(0, 0, 1), s.push(_e171.x, _e171.y);
        }

        for (var _t206 = 0, _e172 = u.length; _t206 < _e172; _t206++) {
          var _e173 = u[_t206],
              _i135 = _e173[0] + a,
              _r106 = _e173[1] + a,
              _s49 = _e173[2] + a;

          n.push(_i135, _r106, _s49), o += 3;
        }
      }

      _this39.setIndex(n), _this39.setAttribute("position", new sn(i, 3)), _this39.setAttribute("normal", new sn(r, 3)), _this39.setAttribute("uv", new sn(s, 2));
      return _this39;
    }

    _createClass(po, [{
      key: "toJSON",
      value: function toJSON() {
        var t = vn.prototype.toJSON.call(this);
        return function (t, e) {
          if (e.shapes = [], Array.isArray(t)) for (var _n153 = 0, _i136 = t.length; _n153 < _i136; _n153++) {
            var _i137 = t[_n153];
            e.shapes.push(_i137.uuid);
          } else e.shapes.push(t.uuid);
          return e;
        }(this.parameters.shapes, t);
      }
    }]);

    return po;
  }(vn);

  var fo = /*#__PURE__*/function (_vn11) {
    _inherits(fo, _vn11);

    var _super41 = _createSuper(fo);

    function fo() {
      var _this40;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 6;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 2 * Math.PI;
      var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      var a = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : Math.PI;

      _classCallCheck(this, fo);

      _this40 = _super41.call(this), _this40.type = "SphereGeometry", _this40.parameters = {
        radius: t,
        widthSegments: e,
        heightSegments: n,
        phiStart: i,
        phiLength: r,
        thetaStart: s,
        thetaLength: a
      }, e = Math.max(3, Math.floor(e)), n = Math.max(2, Math.floor(n));
      var o = Math.min(s + a, Math.PI);
      var l = 0;
      var c = [],
          h = new xt(),
          u = new xt(),
          d = [],
          p = [],
          f = [],
          m = [];

      for (var _d14 = 0; _d14 <= n; _d14++) {
        var _g3 = [],
            _v3 = _d14 / n;

        var _y4 = 0;
        0 == _d14 && 0 == s ? _y4 = .5 / e : _d14 == n && o == Math.PI && (_y4 = -.5 / e);

        for (var _n154 = 0; _n154 <= e; _n154++) {
          var _o26 = _n154 / e;

          h.x = -t * Math.cos(i + _o26 * r) * Math.sin(s + _v3 * a), h.y = t * Math.cos(s + _v3 * a), h.z = t * Math.sin(i + _o26 * r) * Math.sin(s + _v3 * a), p.push(h.x, h.y, h.z), u.copy(h).normalize(), f.push(u.x, u.y, u.z), m.push(_o26 + _y4, 1 - _v3), _g3.push(l++);
        }

        c.push(_g3);
      }

      for (var _t207 = 0; _t207 < n; _t207++) {
        for (var _i138 = 0; _i138 < e; _i138++) {
          var _e174 = c[_t207][_i138 + 1],
              _r107 = c[_t207][_i138],
              _a45 = c[_t207 + 1][_i138],
              _l25 = c[_t207 + 1][_i138 + 1];
          (0 !== _t207 || s > 0) && d.push(_e174, _r107, _l25), (_t207 !== n - 1 || o < Math.PI) && d.push(_r107, _a45, _l25);
        }
      }

      _this40.setIndex(d), _this40.setAttribute("position", new sn(p, 3)), _this40.setAttribute("normal", new sn(f, 3)), _this40.setAttribute("uv", new sn(m, 2));
      return _this40;
    }

    return fo;
  }(vn);

  var mo = /*#__PURE__*/function (_Sa4) {
    _inherits(mo, _Sa4);

    var _super42 = _createSuper(mo);

    function mo() {
      var _this41;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      _classCallCheck(this, mo);

      _this41 = _super42.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], t, e), _this41.type = "TetrahedronGeometry", _this41.parameters = {
        radius: t,
        detail: e
      };
      return _this41;
    }

    return mo;
  }(Sa);

  var go = /*#__PURE__*/function (_so) {
    _inherits(go, _so);

    var _super43 = _createSuper(go);

    function go(t) {
      var _this42;

      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, go);

      var n = e.font;
      if (!n || !n.isFont) return _possibleConstructorReturn(_this42, (console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new vn()));
      var i = n.generateShapes(t, e.size);
      e.depth = void 0 !== e.height ? e.height : 50, void 0 === e.bevelThickness && (e.bevelThickness = 10), void 0 === e.bevelSize && (e.bevelSize = 8), void 0 === e.bevelEnabled && (e.bevelEnabled = !1), _this42 = _super43.call(this, i, e), _this42.type = "TextGeometry";
      return _this42;
    }

    return go;
  }(so);

  var vo = /*#__PURE__*/function (_vn12) {
    _inherits(vo, _vn12);

    var _super44 = _createSuper(vo);

    function vo() {
      var _this43;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : .4;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 8;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 6;
      var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 2 * Math.PI;

      _classCallCheck(this, vo);

      _this43 = _super44.call(this), _this43.type = "TorusGeometry", _this43.parameters = {
        radius: t,
        tube: e,
        radialSegments: n,
        tubularSegments: i,
        arc: r
      }, n = Math.floor(n), i = Math.floor(i);
      var s = [],
          a = [],
          o = [],
          l = [],
          c = new xt(),
          h = new xt(),
          u = new xt();

      for (var _s50 = 0; _s50 <= n; _s50++) {
        for (var _d15 = 0; _d15 <= i; _d15++) {
          var _p10 = _d15 / i * r,
              _f6 = _s50 / n * Math.PI * 2;

          h.x = (t + e * Math.cos(_f6)) * Math.cos(_p10), h.y = (t + e * Math.cos(_f6)) * Math.sin(_p10), h.z = e * Math.sin(_f6), a.push(h.x, h.y, h.z), c.x = t * Math.cos(_p10), c.y = t * Math.sin(_p10), u.subVectors(h, c).normalize(), o.push(u.x, u.y, u.z), l.push(_d15 / i), l.push(_s50 / n);
        }
      }

      for (var _t208 = 1; _t208 <= n; _t208++) {
        for (var _e175 = 1; _e175 <= i; _e175++) {
          var _n155 = (i + 1) * _t208 + _e175 - 1,
              _r108 = (i + 1) * (_t208 - 1) + _e175 - 1,
              _a46 = (i + 1) * (_t208 - 1) + _e175,
              _o27 = (i + 1) * _t208 + _e175;

          s.push(_n155, _r108, _o27), s.push(_r108, _a46, _o27);
        }
      }

      _this43.setIndex(s), _this43.setAttribute("position", new sn(a, 3)), _this43.setAttribute("normal", new sn(o, 3)), _this43.setAttribute("uv", new sn(l, 2));
      return _this43;
    }

    return vo;
  }(vn);

  var yo = /*#__PURE__*/function (_vn13) {
    _inherits(yo, _vn13);

    var _super45 = _createSuper(yo);

    function yo() {
      var _this44;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : .4;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 64;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 8;
      var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 2;
      var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 3;

      _classCallCheck(this, yo);

      _this44 = _super45.call(this), _this44.type = "TorusKnotGeometry", _this44.parameters = {
        radius: t,
        tube: e,
        tubularSegments: n,
        radialSegments: i,
        p: r,
        q: s
      }, n = Math.floor(n), i = Math.floor(i);
      var a = [],
          o = [],
          l = [],
          c = [],
          h = new xt(),
          u = new xt(),
          d = new xt(),
          p = new xt(),
          f = new xt(),
          m = new xt(),
          g = new xt();

      for (var _a47 = 0; _a47 <= n; ++_a47) {
        var _y5 = _a47 / n * r * Math.PI * 2;

        v(_y5, r, s, t, d), v(_y5 + .01, r, s, t, p), m.subVectors(p, d), g.addVectors(p, d), f.crossVectors(m, g), g.crossVectors(f, m), f.normalize(), g.normalize();

        for (var _t209 = 0; _t209 <= i; ++_t209) {
          var _r109 = _t209 / i * Math.PI * 2,
              _s51 = -e * Math.cos(_r109),
              _p11 = e * Math.sin(_r109);

          h.x = d.x + (_s51 * g.x + _p11 * f.x), h.y = d.y + (_s51 * g.y + _p11 * f.y), h.z = d.z + (_s51 * g.z + _p11 * f.z), o.push(h.x, h.y, h.z), u.subVectors(h, d).normalize(), l.push(u.x, u.y, u.z), c.push(_a47 / n), c.push(_t209 / i);
        }
      }

      for (var _t210 = 1; _t210 <= n; _t210++) {
        for (var _e176 = 1; _e176 <= i; _e176++) {
          var _n156 = (i + 1) * (_t210 - 1) + (_e176 - 1),
              _r110 = (i + 1) * _t210 + (_e176 - 1),
              _s52 = (i + 1) * _t210 + _e176,
              _o28 = (i + 1) * (_t210 - 1) + _e176;

          a.push(_n156, _r110, _o28), a.push(_r110, _s52, _o28);
        }
      }

      function v(t, e, n, i, r) {
        var s = Math.cos(t),
            a = Math.sin(t),
            o = n / e * t,
            l = Math.cos(o);
        r.x = i * (2 + l) * .5 * s, r.y = i * (2 + l) * a * .5, r.z = i * Math.sin(o) * .5;
      }

      _this44.setIndex(a), _this44.setAttribute("position", new sn(o, 3)), _this44.setAttribute("normal", new sn(l, 3)), _this44.setAttribute("uv", new sn(c, 2));
      return _this44;
    }

    return yo;
  }(vn);

  var xo = /*#__PURE__*/function (_vn14) {
    _inherits(xo, _vn14);

    var _super46 = _createSuper(xo);

    function xo(t) {
      var _this45;

      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 64;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 8;
      var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;

      _classCallCheck(this, xo);

      _this45 = _super46.call(this), _this45.type = "TubeGeometry", _this45.parameters = {
        path: t,
        tubularSegments: e,
        radius: n,
        radialSegments: i,
        closed: r
      };
      var s = t.computeFrenetFrames(e, r);
      _this45.tangents = s.tangents, _this45.normals = s.normals, _this45.binormals = s.binormals;
      var a = new xt(),
          o = new xt(),
          l = new lt();
      var c = new xt();
      var h = [],
          u = [],
          d = [],
          p = [];

      function f(r) {
        c = t.getPointAt(r / e, c);
        var l = s.normals[r],
            d = s.binormals[r];

        for (var _t211 = 0; _t211 <= i; _t211++) {
          var _e177 = _t211 / i * Math.PI * 2,
              _r111 = Math.sin(_e177),
              _s53 = -Math.cos(_e177);

          o.x = _s53 * l.x + _r111 * d.x, o.y = _s53 * l.y + _r111 * d.y, o.z = _s53 * l.z + _r111 * d.z, o.normalize(), u.push(o.x, o.y, o.z), a.x = c.x + n * o.x, a.y = c.y + n * o.y, a.z = c.z + n * o.z, h.push(a.x, a.y, a.z);
        }
      }

      !function () {
        for (var _t212 = 0; _t212 < e; _t212++) {
          f(_t212);
        }

        f(!1 === r ? e : 0), function () {
          for (var _t213 = 0; _t213 <= e; _t213++) {
            for (var _n157 = 0; _n157 <= i; _n157++) {
              l.x = _t213 / e, l.y = _n157 / i, d.push(l.x, l.y);
            }
          }
        }(), function () {
          for (var _t214 = 1; _t214 <= e; _t214++) {
            for (var _e178 = 1; _e178 <= i; _e178++) {
              var _n158 = (i + 1) * (_t214 - 1) + (_e178 - 1),
                  _r112 = (i + 1) * _t214 + (_e178 - 1),
                  _s54 = (i + 1) * _t214 + _e178,
                  _a48 = (i + 1) * (_t214 - 1) + _e178;

              p.push(_n158, _r112, _a48), p.push(_r112, _s54, _a48);
            }
          }
        }();
      }(), _this45.setIndex(p), _this45.setAttribute("position", new sn(h, 3)), _this45.setAttribute("normal", new sn(u, 3)), _this45.setAttribute("uv", new sn(d, 2));
      return _this45;
    }

    _createClass(xo, [{
      key: "toJSON",
      value: function toJSON() {
        var t = vn.prototype.toJSON.call(this);
        return t.path = this.parameters.path.toJSON(), t;
      }
    }]);

    return xo;
  }(vn);

  var _o = /*#__PURE__*/function (_vn15) {
    _inherits(_o, _vn15);

    var _super47 = _createSuper(_o);

    function _o(t) {
      var _this46;

      _classCallCheck(this, _o);

      if (_this46 = _super47.call(this), _this46.type = "WireframeGeometry", !0 === t.isGeometry) return _possibleConstructorReturn(_this46, void console.error("THREE.WireframeGeometry no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."));
      var e = [],
          n = [0, 0],
          i = {},
          r = new xt();

      if (null !== t.index) {
        var _s55 = t.attributes.position,
            _a49 = t.index;
        var _o29 = t.groups;
        0 === _o29.length && (_o29 = [{
          start: 0,
          count: _a49.count,
          materialIndex: 0
        }]);

        for (var _t215 = 0, _e179 = _o29.length; _t215 < _e179; ++_t215) {
          var _e180 = _o29[_t215],
              _r113 = _e180.start;

          for (var _t216 = _r113, _s56 = _r113 + _e180.count; _t216 < _s56; _t216 += 3) {
            for (var _e181 = 0; _e181 < 3; _e181++) {
              var _r114 = _a49.getX(_t216 + _e181),
                  _s57 = _a49.getX(_t216 + (_e181 + 1) % 3);

              n[0] = Math.min(_r114, _s57), n[1] = Math.max(_r114, _s57);

              var _o30 = n[0] + "," + n[1];

              void 0 === i[_o30] && (i[_o30] = {
                index1: n[0],
                index2: n[1]
              });
            }
          }
        }

        for (var _t217 in i) {
          var _n159 = i[_t217];
          r.fromBufferAttribute(_s55, _n159.index1), e.push(r.x, r.y, r.z), r.fromBufferAttribute(_s55, _n159.index2), e.push(r.x, r.y, r.z);
        }
      } else {
        var _n160 = t.attributes.position;

        for (var _t218 = 0, _i139 = _n160.count / 3; _t218 < _i139; _t218++) {
          for (var _i140 = 0; _i140 < 3; _i140++) {
            var _s58 = 3 * _t218 + _i140;

            r.fromBufferAttribute(_n160, _s58), e.push(r.x, r.y, r.z);

            var _a50 = 3 * _t218 + (_i140 + 1) % 3;

            r.fromBufferAttribute(_n160, _a50), e.push(r.x, r.y, r.z);
          }
        }
      }

      _this46.setAttribute("position", new sn(e, 3));

      return _possibleConstructorReturn(_this46);
    }

    return _o;
  }(vn);

  var bo = Object.freeze({
    __proto__: null,
    BoxGeometry: zn,
    BoxBufferGeometry: zn,
    CircleGeometry: ba,
    CircleBufferGeometry: ba,
    ConeGeometry: Ma,
    ConeBufferGeometry: Ma,
    CylinderGeometry: wa,
    CylinderBufferGeometry: wa,
    DodecahedronGeometry: Ta,
    DodecahedronBufferGeometry: Ta,
    EdgesGeometry: Ca,
    ExtrudeGeometry: so,
    ExtrudeBufferGeometry: so,
    IcosahedronGeometry: oo,
    IcosahedronBufferGeometry: oo,
    LatheGeometry: lo,
    LatheBufferGeometry: lo,
    OctahedronGeometry: co,
    OctahedronBufferGeometry: co,
    ParametricGeometry: ho,
    ParametricBufferGeometry: ho,
    PlaneGeometry: ti,
    PlaneBufferGeometry: ti,
    PolyhedronGeometry: Sa,
    PolyhedronBufferGeometry: Sa,
    RingGeometry: uo,
    RingBufferGeometry: uo,
    ShapeGeometry: po,
    ShapeBufferGeometry: po,
    SphereGeometry: fo,
    SphereBufferGeometry: fo,
    TetrahedronGeometry: mo,
    TetrahedronBufferGeometry: mo,
    TextGeometry: go,
    TextBufferGeometry: go,
    TorusGeometry: vo,
    TorusBufferGeometry: vo,
    TorusKnotGeometry: yo,
    TorusKnotBufferGeometry: yo,
    TubeGeometry: xo,
    TubeBufferGeometry: xo,
    WireframeGeometry: _o
  });

  var wo = /*#__PURE__*/function (_Fe7) {
    _inherits(wo, _Fe7);

    var _super48 = _createSuper(wo);

    function wo(t) {
      var _this47;

      _classCallCheck(this, wo);

      _this47 = _super48.call(this), _this47.type = "ShadowMaterial", _this47.color = new je(0), _this47.transparent = !0, _this47.setValues(t);
      return _this47;
    }

    _createClass(wo, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(wo.prototype), "copy", this).call(this, t), this.color.copy(t.color), this;
      }
    }]);

    return wo;
  }(Fe);

  wo.prototype.isShadowMaterial = !0;

  var Mo = /*#__PURE__*/function (_Gn) {
    _inherits(Mo, _Gn);

    var _super49 = _createSuper(Mo);

    function Mo(t) {
      var _this48;

      _classCallCheck(this, Mo);

      _this48 = _super49.call(this, t), _this48.type = "RawShaderMaterial";
      return _this48;
    }

    return Mo;
  }(Gn);

  function So(t) {
    Fe.call(this), this.defines = {
      STANDARD: ""
    }, this.type = "MeshStandardMaterial", this.color = new je(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new je(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new lt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.flatShading = !1, this.vertexTangents = !1, this.setValues(t);
  }

  function To(t) {
    So.call(this), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.clearcoat = 0, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new lt(1, 1), this.clearcoatNormalMap = null, this.reflectivity = .5, Object.defineProperty(this, "ior", {
      get: function get() {
        return (1 + .4 * this.reflectivity) / (1 - .4 * this.reflectivity);
      },
      set: function set(t) {
        this.reflectivity = ot.clamp(2.5 * (t - 1) / (t + 1), 0, 1);
      }
    }), this.sheen = null, this.transmission = 0, this.transmissionMap = null, this.setValues(t);
  }

  Mo.prototype.isRawShaderMaterial = !0, So.prototype = Object.create(Fe.prototype), So.prototype.constructor = So, So.prototype.isMeshStandardMaterial = !0, So.prototype.copy = function (t) {
    return Fe.prototype.copy.call(this, t), this.defines = {
      STANDARD: ""
    }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.flatShading = t.flatShading, this.vertexTangents = t.vertexTangents, this;
  }, To.prototype = Object.create(So.prototype), To.prototype.constructor = To, To.prototype.isMeshPhysicalMaterial = !0, To.prototype.copy = function (t) {
    return So.prototype.copy.call(this, t), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.clearcoat = t.clearcoat, this.clearcoatMap = t.clearcoatMap, this.clearcoatRoughness = t.clearcoatRoughness, this.clearcoatRoughnessMap = t.clearcoatRoughnessMap, this.clearcoatNormalMap = t.clearcoatNormalMap, this.clearcoatNormalScale.copy(t.clearcoatNormalScale), this.reflectivity = t.reflectivity, t.sheen ? this.sheen = (this.sheen || new je()).copy(t.sheen) : this.sheen = null, this.transmission = t.transmission, this.transmissionMap = t.transmissionMap, this;
  };

  var Eo = /*#__PURE__*/function (_Fe8) {
    _inherits(Eo, _Fe8);

    var _super50 = _createSuper(Eo);

    function Eo(t) {
      var _this49;

      _classCallCheck(this, Eo);

      _this49 = _super50.call(this), _this49.type = "MeshPhongMaterial", _this49.color = new je(16777215), _this49.specular = new je(1118481), _this49.shininess = 30, _this49.map = null, _this49.lightMap = null, _this49.lightMapIntensity = 1, _this49.aoMap = null, _this49.aoMapIntensity = 1, _this49.emissive = new je(0), _this49.emissiveIntensity = 1, _this49.emissiveMap = null, _this49.bumpMap = null, _this49.bumpScale = 1, _this49.normalMap = null, _this49.normalMapType = 0, _this49.normalScale = new lt(1, 1), _this49.displacementMap = null, _this49.displacementScale = 1, _this49.displacementBias = 0, _this49.specularMap = null, _this49.alphaMap = null, _this49.envMap = null, _this49.combine = 0, _this49.reflectivity = 1, _this49.refractionRatio = .98, _this49.wireframe = !1, _this49.wireframeLinewidth = 1, _this49.wireframeLinecap = "round", _this49.wireframeLinejoin = "round", _this49.skinning = !1, _this49.morphTargets = !1, _this49.morphNormals = !1, _this49.flatShading = !1, _this49.setValues(t);
      return _this49;
    }

    _createClass(Eo, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(Eo.prototype), "copy", this).call(this, t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.flatShading = t.flatShading, this;
      }
    }]);

    return Eo;
  }(Fe);

  Eo.prototype.isMeshPhongMaterial = !0;

  var Ao = /*#__PURE__*/function (_Fe9) {
    _inherits(Ao, _Fe9);

    var _super51 = _createSuper(Ao);

    function Ao(t) {
      var _this50;

      _classCallCheck(this, Ao);

      _this50 = _super51.call(this), _this50.defines = {
        TOON: ""
      }, _this50.type = "MeshToonMaterial", _this50.color = new je(16777215), _this50.map = null, _this50.gradientMap = null, _this50.lightMap = null, _this50.lightMapIntensity = 1, _this50.aoMap = null, _this50.aoMapIntensity = 1, _this50.emissive = new je(0), _this50.emissiveIntensity = 1, _this50.emissiveMap = null, _this50.bumpMap = null, _this50.bumpScale = 1, _this50.normalMap = null, _this50.normalMapType = 0, _this50.normalScale = new lt(1, 1), _this50.displacementMap = null, _this50.displacementScale = 1, _this50.displacementBias = 0, _this50.alphaMap = null, _this50.wireframe = !1, _this50.wireframeLinewidth = 1, _this50.wireframeLinecap = "round", _this50.wireframeLinejoin = "round", _this50.skinning = !1, _this50.morphTargets = !1, _this50.morphNormals = !1, _this50.setValues(t);
      return _this50;
    }

    _createClass(Ao, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(Ao.prototype), "copy", this).call(this, t), this.color.copy(t.color), this.map = t.map, this.gradientMap = t.gradientMap, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this;
      }
    }]);

    return Ao;
  }(Fe);

  Ao.prototype.isMeshToonMaterial = !0;

  var Lo = /*#__PURE__*/function (_Fe10) {
    _inherits(Lo, _Fe10);

    var _super52 = _createSuper(Lo);

    function Lo(t) {
      var _this51;

      _classCallCheck(this, Lo);

      _this51 = _super52.call(this), _this51.type = "MeshNormalMaterial", _this51.bumpMap = null, _this51.bumpScale = 1, _this51.normalMap = null, _this51.normalMapType = 0, _this51.normalScale = new lt(1, 1), _this51.displacementMap = null, _this51.displacementScale = 1, _this51.displacementBias = 0, _this51.wireframe = !1, _this51.wireframeLinewidth = 1, _this51.fog = !1, _this51.skinning = !1, _this51.morphTargets = !1, _this51.morphNormals = !1, _this51.flatShading = !1, _this51.setValues(t);
      return _this51;
    }

    _createClass(Lo, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(Lo.prototype), "copy", this).call(this, t), this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.flatShading = t.flatShading, this;
      }
    }]);

    return Lo;
  }(Fe);

  Lo.prototype.isMeshNormalMaterial = !0;

  var Ro = /*#__PURE__*/function (_Fe11) {
    _inherits(Ro, _Fe11);

    var _super53 = _createSuper(Ro);

    function Ro(t) {
      var _this52;

      _classCallCheck(this, Ro);

      _this52 = _super53.call(this), _this52.type = "MeshLambertMaterial", _this52.color = new je(16777215), _this52.map = null, _this52.lightMap = null, _this52.lightMapIntensity = 1, _this52.aoMap = null, _this52.aoMapIntensity = 1, _this52.emissive = new je(0), _this52.emissiveIntensity = 1, _this52.emissiveMap = null, _this52.specularMap = null, _this52.alphaMap = null, _this52.envMap = null, _this52.combine = 0, _this52.reflectivity = 1, _this52.refractionRatio = .98, _this52.wireframe = !1, _this52.wireframeLinewidth = 1, _this52.wireframeLinecap = "round", _this52.wireframeLinejoin = "round", _this52.skinning = !1, _this52.morphTargets = !1, _this52.morphNormals = !1, _this52.setValues(t);
      return _this52;
    }

    _createClass(Ro, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(Ro.prototype), "copy", this).call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this;
      }
    }]);

    return Ro;
  }(Fe);

  Ro.prototype.isMeshLambertMaterial = !0;

  var Co = /*#__PURE__*/function (_Fe12) {
    _inherits(Co, _Fe12);

    var _super54 = _createSuper(Co);

    function Co(t) {
      var _this53;

      _classCallCheck(this, Co);

      _this53 = _super54.call(this), _this53.defines = {
        MATCAP: ""
      }, _this53.type = "MeshMatcapMaterial", _this53.color = new je(16777215), _this53.matcap = null, _this53.map = null, _this53.bumpMap = null, _this53.bumpScale = 1, _this53.normalMap = null, _this53.normalMapType = 0, _this53.normalScale = new lt(1, 1), _this53.displacementMap = null, _this53.displacementScale = 1, _this53.displacementBias = 0, _this53.alphaMap = null, _this53.skinning = !1, _this53.morphTargets = !1, _this53.morphNormals = !1, _this53.flatShading = !1, _this53.setValues(t);
      return _this53;
    }

    _createClass(Co, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(Co.prototype), "copy", this).call(this, t), this.defines = {
          MATCAP: ""
        }, this.color.copy(t.color), this.matcap = t.matcap, this.map = t.map, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.flatShading = t.flatShading, this;
      }
    }]);

    return Co;
  }(Fe);

  Co.prototype.isMeshMatcapMaterial = !0;

  var Po = /*#__PURE__*/function (_$s) {
    _inherits(Po, _$s);

    var _super55 = _createSuper(Po);

    function Po(t) {
      var _this54;

      _classCallCheck(this, Po);

      _this54 = _super55.call(this), _this54.type = "LineDashedMaterial", _this54.scale = 1, _this54.dashSize = 3, _this54.gapSize = 1, _this54.setValues(t);
      return _this54;
    }

    _createClass(Po, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(Po.prototype), "copy", this).call(this, t), this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this;
      }
    }]);

    return Po;
  }($s);

  Po.prototype.isLineDashedMaterial = !0;
  var Do = Object.freeze({
    __proto__: null,
    ShadowMaterial: wo,
    SpriteMaterial: xs,
    RawShaderMaterial: Mo,
    ShaderMaterial: Gn,
    PointsMaterial: ha,
    MeshPhysicalMaterial: To,
    MeshStandardMaterial: So,
    MeshPhongMaterial: Eo,
    MeshToonMaterial: Ao,
    MeshNormalMaterial: Lo,
    MeshLambertMaterial: Ro,
    MeshDepthMaterial: ts,
    MeshDistanceMaterial: es,
    MeshBasicMaterial: qe,
    MeshMatcapMaterial: Co,
    LineDashedMaterial: Po,
    LineBasicMaterial: $s,
    Material: Fe
  });
  var Io = {
    arraySlice: function arraySlice(t, e, n) {
      return Io.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== n ? n : t.length)) : t.slice(e, n);
    },
    convertArray: function convertArray(t, e, n) {
      return !t || !n && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t);
    },
    isTypedArray: function isTypedArray(t) {
      return ArrayBuffer.isView(t) && !(t instanceof DataView);
    },
    getKeyframeOrder: function getKeyframeOrder(t) {
      var e = t.length,
          n = new Array(e);

      for (var _t219 = 0; _t219 !== e; ++_t219) {
        n[_t219] = _t219;
      }

      return n.sort(function (e, n) {
        return t[e] - t[n];
      }), n;
    },
    sortedArray: function sortedArray(t, e, n) {
      var i = t.length,
          r = new t.constructor(i);

      for (var _s59 = 0, _a51 = 0; _a51 !== i; ++_s59) {
        var _i141 = n[_s59] * e;

        for (var _n161 = 0; _n161 !== e; ++_n161) {
          r[_a51++] = t[_i141 + _n161];
        }
      }

      return r;
    },
    flattenJSON: function flattenJSON(t, e, n, i) {
      var r = 1,
          s = t[0];

      for (; void 0 !== s && void 0 === s[i];) {
        s = t[r++];
      }

      if (void 0 === s) return;
      var a = s[i];
      if (void 0 !== a) if (Array.isArray(a)) do {
        a = s[i], void 0 !== a && (e.push(s.time), n.push.apply(n, a)), s = t[r++];
      } while (void 0 !== s);else if (void 0 !== a.toArray) do {
        a = s[i], void 0 !== a && (e.push(s.time), a.toArray(n, n.length)), s = t[r++];
      } while (void 0 !== s);else do {
        a = s[i], void 0 !== a && (e.push(s.time), n.push(a)), s = t[r++];
      } while (void 0 !== s);
    },
    subclip: function subclip(t, e, n, i) {
      var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 30;
      var s = t.clone();
      s.name = e;
      var a = [];

      for (var _t220 = 0; _t220 < s.tracks.length; ++_t220) {
        var _e182 = s.tracks[_t220],
            _o31 = _e182.getValueSize(),
            _l26 = [],
            _c19 = [];

        for (var _t221 = 0; _t221 < _e182.times.length; ++_t221) {
          var _s60 = _e182.times[_t221] * r;

          if (!(_s60 < n || _s60 >= i)) {
            _l26.push(_e182.times[_t221]);

            for (var _n162 = 0; _n162 < _o31; ++_n162) {
              _c19.push(_e182.values[_t221 * _o31 + _n162]);
            }
          }
        }

        0 !== _l26.length && (_e182.times = Io.convertArray(_l26, _e182.times.constructor), _e182.values = Io.convertArray(_c19, _e182.values.constructor), a.push(_e182));
      }

      s.tracks = a;
      var o = 1 / 0;

      for (var _t222 = 0; _t222 < s.tracks.length; ++_t222) {
        o > s.tracks[_t222].times[0] && (o = s.tracks[_t222].times[0]);
      }

      for (var _t223 = 0; _t223 < s.tracks.length; ++_t223) {
        s.tracks[_t223].shift(-1 * o);
      }

      return s.resetDuration(), s;
    },
    makeClipAdditive: function makeClipAdditive(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 30;
      i <= 0 && (i = 30);
      var r = n.tracks.length,
          s = e / i;

      var _loop = function _loop(_e183) {
        var i = n.tracks[_e183],
            r = i.ValueTypeName;
        if ("bool" === r || "string" === r) return "continue";
        var a = t.tracks.find(function (t) {
          return t.name === i.name && t.ValueTypeName === r;
        });
        if (void 0 === a) return "continue";
        var o = 0;
        var l = i.getValueSize();
        i.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (o = l / 3);
        var c = 0;
        var h = a.getValueSize();
        a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (c = h / 3);
        var u = i.times.length - 1;
        var d = void 0;

        if (s <= i.times[0]) {
          var _t224 = o,
              _e184 = l - o;

          d = Io.arraySlice(i.values, _t224, _e184);
        } else if (s >= i.times[u]) {
          var _t225 = u * l + o,
              _e185 = _t225 + l - o;

          d = Io.arraySlice(i.values, _t225, _e185);
        } else {
          var _t226 = i.createInterpolant(),
              _e186 = o,
              _n163 = l - o;

          _t226.evaluate(s), d = Io.arraySlice(_t226.resultBuffer, _e186, _n163);
        }

        if ("quaternion" === r) {
          new yt().fromArray(d).normalize().conjugate().toArray(d);
        }

        var p = a.times.length;

        for (var _t227 = 0; _t227 < p; ++_t227) {
          var _e187 = _t227 * h + c;

          if ("quaternion" === r) yt.multiplyQuaternionsFlat(a.values, _e187, d, 0, a.values, _e187);else {
            var _t228 = h - 2 * c;

            for (var _n164 = 0; _n164 < _t228; ++_n164) {
              a.values[_e187 + _n164] -= d[_n164];
            }
          }
        }
      };

      for (var _e183 = 0; _e183 < r; ++_e183) {
        var _ret = _loop(_e183);

        if (_ret === "continue") continue;
      }

      return t.blendMode = q, t;
    }
  };

  function No(t, e, n, i) {
    this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== i ? i : new e.constructor(n), this.sampleValues = e, this.valueSize = n;
  }

  function Bo(t, e, n, i) {
    No.call(this, t, e, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0;
  }

  function Oo(t, e, n, i) {
    No.call(this, t, e, n, i);
  }

  function zo(t, e, n, i) {
    No.call(this, t, e, n, i);
  }

  Object.assign(No.prototype, {
    evaluate: function evaluate(t) {
      var e = this.parameterPositions;
      var n = this._cachedIndex,
          i = e[n],
          r = e[n - 1];

      t: {
        e: {
          var _s61;

          n: {
            i: if (!(t < i)) {
              for (var _s62 = n + 2;;) {
                if (void 0 === i) {
                  if (t < r) break i;
                  return n = e.length, this._cachedIndex = n, this.afterEnd_(n - 1, t, r);
                }

                if (n === _s62) break;
                if (r = i, i = e[++n], t < i) break e;
              }

              _s61 = e.length;
              break n;
            }

            if (t >= r) break t;
            {
              var _a52 = e[1];
              t < _a52 && (n = 2, r = _a52);

              for (var _s63 = n - 2;;) {
                if (void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, t, i);
                if (n === _s63) break;
                if (i = r, r = e[--n - 1], t >= r) break e;
              }

              _s61 = n, n = 0;
            }
          }

          for (; n < _s61;) {
            var _i142 = n + _s61 >>> 1;

            t < e[_i142] ? _s61 = _i142 : n = _i142 + 1;
          }

          if (i = e[n], r = e[n - 1], void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, t, i);
          if (void 0 === i) return n = e.length, this._cachedIndex = n, this.afterEnd_(n - 1, r, t);
        }

        this._cachedIndex = n, this.intervalChanged_(n, r, i);
      }

      return this.interpolate_(n, r, t, i);
    },
    settings: null,
    DefaultSettings_: {},
    getSettings_: function getSettings_() {
      return this.settings || this.DefaultSettings_;
    },
    copySampleValue_: function copySampleValue_(t) {
      var e = this.resultBuffer,
          n = this.sampleValues,
          i = this.valueSize,
          r = t * i;

      for (var _t229 = 0; _t229 !== i; ++_t229) {
        e[_t229] = n[r + _t229];
      }

      return e;
    },
    interpolate_: function interpolate_() {
      throw new Error("call to abstract method");
    },
    intervalChanged_: function intervalChanged_() {}
  }), Object.assign(No.prototype, {
    beforeStart_: No.prototype.copySampleValue_,
    afterEnd_: No.prototype.copySampleValue_
  }), Bo.prototype = Object.assign(Object.create(No.prototype), {
    constructor: Bo,
    DefaultSettings_: {
      endingStart: k,
      endingEnd: k
    },
    intervalChanged_: function intervalChanged_(t, e, n) {
      var i = this.parameterPositions;
      var r = t - 2,
          s = t + 1,
          a = i[r],
          o = i[s];
      if (void 0 === a) switch (this.getSettings_().endingStart) {
        case V:
          r = t, a = 2 * e - n;
          break;

        case W:
          r = i.length - 2, a = e + i[r] - i[r + 1];
          break;

        default:
          r = t, a = n;
      }
      if (void 0 === o) switch (this.getSettings_().endingEnd) {
        case V:
          s = t, o = 2 * n - e;
          break;

        case W:
          s = 1, o = n + i[1] - i[0];
          break;

        default:
          s = t - 1, o = e;
      }
      var l = .5 * (n - e),
          c = this.valueSize;
      this._weightPrev = l / (e - a), this._weightNext = l / (o - n), this._offsetPrev = r * c, this._offsetNext = s * c;
    },
    interpolate_: function interpolate_(t, e, n, i) {
      var r = this.resultBuffer,
          s = this.sampleValues,
          a = this.valueSize,
          o = t * a,
          l = o - a,
          c = this._offsetPrev,
          h = this._offsetNext,
          u = this._weightPrev,
          d = this._weightNext,
          p = (n - e) / (i - e),
          f = p * p,
          m = f * p,
          g = -u * m + 2 * u * f - u * p,
          v = (1 + u) * m + (-1.5 - 2 * u) * f + (-.5 + u) * p + 1,
          y = (-1 - d) * m + (1.5 + d) * f + .5 * p,
          x = d * m - d * f;

      for (var _t230 = 0; _t230 !== a; ++_t230) {
        r[_t230] = g * s[c + _t230] + v * s[l + _t230] + y * s[o + _t230] + x * s[h + _t230];
      }

      return r;
    }
  }), Oo.prototype = Object.assign(Object.create(No.prototype), {
    constructor: Oo,
    interpolate_: function interpolate_(t, e, n, i) {
      var r = this.resultBuffer,
          s = this.sampleValues,
          a = this.valueSize,
          o = t * a,
          l = o - a,
          c = (n - e) / (i - e),
          h = 1 - c;

      for (var _t231 = 0; _t231 !== a; ++_t231) {
        r[_t231] = s[l + _t231] * h + s[o + _t231] * c;
      }

      return r;
    }
  }), zo.prototype = Object.assign(Object.create(No.prototype), {
    constructor: zo,
    interpolate_: function interpolate_(t) {
      return this.copySampleValue_(t - 1);
    }
  });

  var Fo = /*#__PURE__*/function () {
    function Fo(t, e, n, i) {
      _classCallCheck(this, Fo);

      if (void 0 === t) throw new Error("THREE.KeyframeTrack: track name is undefined");
      if (void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
      this.name = t, this.times = Io.convertArray(e, this.TimeBufferType), this.values = Io.convertArray(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
    }

    _createClass(Fo, [{
      key: "InterpolantFactoryMethodDiscrete",
      value: function InterpolantFactoryMethodDiscrete(t) {
        return new zo(this.times, this.values, this.getValueSize(), t);
      }
    }, {
      key: "InterpolantFactoryMethodLinear",
      value: function InterpolantFactoryMethodLinear(t) {
        return new Oo(this.times, this.values, this.getValueSize(), t);
      }
    }, {
      key: "InterpolantFactoryMethodSmooth",
      value: function InterpolantFactoryMethodSmooth(t) {
        return new Bo(this.times, this.values, this.getValueSize(), t);
      }
    }, {
      key: "setInterpolation",
      value: function setInterpolation(t) {
        var e;

        switch (t) {
          case H:
            e = this.InterpolantFactoryMethodDiscrete;
            break;

          case U:
            e = this.InterpolantFactoryMethodLinear;
            break;

          case G:
            e = this.InterpolantFactoryMethodSmooth;
        }

        if (void 0 === e) {
          var _e188 = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;

          if (void 0 === this.createInterpolant) {
            if (t === this.DefaultInterpolation) throw new Error(_e188);
            this.setInterpolation(this.DefaultInterpolation);
          }

          return console.warn("THREE.KeyframeTrack:", _e188), this;
        }

        return this.createInterpolant = e, this;
      }
    }, {
      key: "getInterpolation",
      value: function getInterpolation() {
        switch (this.createInterpolant) {
          case this.InterpolantFactoryMethodDiscrete:
            return H;

          case this.InterpolantFactoryMethodLinear:
            return U;

          case this.InterpolantFactoryMethodSmooth:
            return G;
        }
      }
    }, {
      key: "getValueSize",
      value: function getValueSize() {
        return this.values.length / this.times.length;
      }
    }, {
      key: "shift",
      value: function shift(t) {
        if (0 !== t) {
          var _e189 = this.times;

          for (var _n165 = 0, _i143 = _e189.length; _n165 !== _i143; ++_n165) {
            _e189[_n165] += t;
          }
        }

        return this;
      }
    }, {
      key: "scale",
      value: function scale(t) {
        if (1 !== t) {
          var _e190 = this.times;

          for (var _n166 = 0, _i144 = _e190.length; _n166 !== _i144; ++_n166) {
            _e190[_n166] *= t;
          }
        }

        return this;
      }
    }, {
      key: "trim",
      value: function trim(t, e) {
        var n = this.times,
            i = n.length;
        var r = 0,
            s = i - 1;

        for (; r !== i && n[r] < t;) {
          ++r;
        }

        for (; -1 !== s && n[s] > e;) {
          --s;
        }

        if (++s, 0 !== r || s !== i) {
          r >= s && (s = Math.max(s, 1), r = s - 1);

          var _t232 = this.getValueSize();

          this.times = Io.arraySlice(n, r, s), this.values = Io.arraySlice(this.values, r * _t232, s * _t232);
        }

        return this;
      }
    }, {
      key: "validate",
      value: function validate() {
        var t = !0;
        var e = this.getValueSize();
        e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t = !1);
        var n = this.times,
            i = this.values,
            r = n.length;
        0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), t = !1);
        var s = null;

        for (var _e191 = 0; _e191 !== r; _e191++) {
          var _i145 = n[_e191];

          if ("number" == typeof _i145 && isNaN(_i145)) {
            console.error("THREE.KeyframeTrack: Time is not a valid number.", this, _e191, _i145), t = !1;
            break;
          }

          if (null !== s && s > _i145) {
            console.error("THREE.KeyframeTrack: Out of order keys.", this, _e191, _i145, s), t = !1;
            break;
          }

          s = _i145;
        }

        if (void 0 !== i && Io.isTypedArray(i)) for (var _e192 = 0, _n167 = i.length; _e192 !== _n167; ++_e192) {
          var _n168 = i[_e192];

          if (isNaN(_n168)) {
            console.error("THREE.KeyframeTrack: Value is not a valid number.", this, _e192, _n168), t = !1;
            break;
          }
        }
        return t;
      }
    }, {
      key: "optimize",
      value: function optimize() {
        var t = Io.arraySlice(this.times),
            e = Io.arraySlice(this.values),
            n = this.getValueSize(),
            i = this.getInterpolation() === G,
            r = t.length - 1;
        var s = 1;

        for (var _a53 = 1; _a53 < r; ++_a53) {
          var _r115 = !1;

          var _o32 = t[_a53];
          if (_o32 !== t[_a53 + 1] && (1 !== _a53 || _o32 !== t[0])) if (i) _r115 = !0;else {
            var _t233 = _a53 * n,
                _i146 = _t233 - n,
                _s64 = _t233 + n;

            for (var _a54 = 0; _a54 !== n; ++_a54) {
              var _n169 = e[_t233 + _a54];

              if (_n169 !== e[_i146 + _a54] || _n169 !== e[_s64 + _a54]) {
                _r115 = !0;
                break;
              }
            }
          }

          if (_r115) {
            if (_a53 !== s) {
              t[s] = t[_a53];

              var _i147 = _a53 * n,
                  _r116 = s * n;

              for (var _t234 = 0; _t234 !== n; ++_t234) {
                e[_r116 + _t234] = e[_i147 + _t234];
              }
            }

            ++s;
          }
        }

        if (r > 0) {
          t[s] = t[r];

          for (var _t235 = r * n, _i148 = s * n, _a55 = 0; _a55 !== n; ++_a55) {
            e[_i148 + _a55] = e[_t235 + _a55];
          }

          ++s;
        }

        return s !== t.length ? (this.times = Io.arraySlice(t, 0, s), this.values = Io.arraySlice(e, 0, s * n)) : (this.times = t, this.values = e), this;
      }
    }, {
      key: "clone",
      value: function clone() {
        var t = Io.arraySlice(this.times, 0),
            e = Io.arraySlice(this.values, 0),
            n = new (0, this.constructor)(this.name, t, e);
        return n.createInterpolant = this.createInterpolant, n;
      }
    }], [{
      key: "toJSON",
      value: function toJSON(t) {
        var e = t.constructor;
        var n;
        if (e.toJSON !== this.toJSON) n = e.toJSON(t);else {
          n = {
            name: t.name,
            times: Io.convertArray(t.times, Array),
            values: Io.convertArray(t.values, Array)
          };

          var _e193 = t.getInterpolation();

          _e193 !== t.DefaultInterpolation && (n.interpolation = _e193);
        }
        return n.type = t.ValueTypeName, n;
      }
    }]);

    return Fo;
  }();

  Fo.prototype.TimeBufferType = Float32Array, Fo.prototype.ValueBufferType = Float32Array, Fo.prototype.DefaultInterpolation = U;

  var Ho = /*#__PURE__*/function (_Fo) {
    _inherits(Ho, _Fo);

    var _super56 = _createSuper(Ho);

    function Ho() {
      _classCallCheck(this, Ho);

      return _super56.apply(this, arguments);
    }

    return Ho;
  }(Fo);

  Ho.prototype.ValueTypeName = "bool", Ho.prototype.ValueBufferType = Array, Ho.prototype.DefaultInterpolation = H, Ho.prototype.InterpolantFactoryMethodLinear = void 0, Ho.prototype.InterpolantFactoryMethodSmooth = void 0;

  var Uo = /*#__PURE__*/function (_Fo2) {
    _inherits(Uo, _Fo2);

    var _super57 = _createSuper(Uo);

    function Uo() {
      _classCallCheck(this, Uo);

      return _super57.apply(this, arguments);
    }

    return Uo;
  }(Fo);

  Uo.prototype.ValueTypeName = "color";

  var Go = /*#__PURE__*/function (_Fo3) {
    _inherits(Go, _Fo3);

    var _super58 = _createSuper(Go);

    function Go() {
      _classCallCheck(this, Go);

      return _super58.apply(this, arguments);
    }

    return Go;
  }(Fo);

  function ko(t, e, n, i) {
    No.call(this, t, e, n, i);
  }

  Go.prototype.ValueTypeName = "number", ko.prototype = Object.assign(Object.create(No.prototype), {
    constructor: ko,
    interpolate_: function interpolate_(t, e, n, i) {
      var r = this.resultBuffer,
          s = this.sampleValues,
          a = this.valueSize,
          o = (n - e) / (i - e);
      var l = t * a;

      for (var _t236 = l + a; l !== _t236; l += 4) {
        yt.slerpFlat(r, 0, s, l - a, s, l, o);
      }

      return r;
    }
  });

  var Vo = /*#__PURE__*/function (_Fo4) {
    _inherits(Vo, _Fo4);

    var _super59 = _createSuper(Vo);

    function Vo() {
      _classCallCheck(this, Vo);

      return _super59.apply(this, arguments);
    }

    _createClass(Vo, [{
      key: "InterpolantFactoryMethodLinear",
      value: function InterpolantFactoryMethodLinear(t) {
        return new ko(this.times, this.values, this.getValueSize(), t);
      }
    }]);

    return Vo;
  }(Fo);

  Vo.prototype.ValueTypeName = "quaternion", Vo.prototype.DefaultInterpolation = U, Vo.prototype.InterpolantFactoryMethodSmooth = void 0;

  var Wo = /*#__PURE__*/function (_Fo5) {
    _inherits(Wo, _Fo5);

    var _super60 = _createSuper(Wo);

    function Wo() {
      _classCallCheck(this, Wo);

      return _super60.apply(this, arguments);
    }

    return Wo;
  }(Fo);

  Wo.prototype.ValueTypeName = "string", Wo.prototype.ValueBufferType = Array, Wo.prototype.DefaultInterpolation = H, Wo.prototype.InterpolantFactoryMethodLinear = void 0, Wo.prototype.InterpolantFactoryMethodSmooth = void 0;

  var jo = /*#__PURE__*/function (_Fo6) {
    _inherits(jo, _Fo6);

    var _super61 = _createSuper(jo);

    function jo() {
      _classCallCheck(this, jo);

      return _super61.apply(this, arguments);
    }

    return jo;
  }(Fo);

  jo.prototype.ValueTypeName = "vector";

  var qo = /*#__PURE__*/function () {
    function qo(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
      var n = arguments.length > 2 ? arguments[2] : undefined;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2500;

      _classCallCheck(this, qo);

      this.name = t, this.tracks = n, this.duration = e, this.blendMode = i, this.uuid = ot.generateUUID(), this.duration < 0 && this.resetDuration();
    }

    _createClass(qo, [{
      key: "resetDuration",
      value: function resetDuration() {
        var t = 0;

        for (var _e194 = 0, _n170 = this.tracks.length; _e194 !== _n170; ++_e194) {
          var _n171 = this.tracks[_e194];
          t = Math.max(t, _n171.times[_n171.times.length - 1]);
        }

        return this.duration = t, this;
      }
    }, {
      key: "trim",
      value: function trim() {
        for (var _t237 = 0; _t237 < this.tracks.length; _t237++) {
          this.tracks[_t237].trim(0, this.duration);
        }

        return this;
      }
    }, {
      key: "validate",
      value: function validate() {
        var t = !0;

        for (var _e195 = 0; _e195 < this.tracks.length; _e195++) {
          t = t && this.tracks[_e195].validate();
        }

        return t;
      }
    }, {
      key: "optimize",
      value: function optimize() {
        for (var _t238 = 0; _t238 < this.tracks.length; _t238++) {
          this.tracks[_t238].optimize();
        }

        return this;
      }
    }, {
      key: "clone",
      value: function clone() {
        var t = [];

        for (var _e196 = 0; _e196 < this.tracks.length; _e196++) {
          t.push(this.tracks[_e196].clone());
        }

        return new this.constructor(this.name, this.duration, t, this.blendMode);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return this.constructor.toJSON(this);
      }
    }], [{
      key: "parse",
      value: function parse(t) {
        var e = [],
            n = t.tracks,
            i = 1 / (t.fps || 1);

        for (var _t239 = 0, _r117 = n.length; _t239 !== _r117; ++_t239) {
          e.push(Xo(n[_t239]).scale(i));
        }

        var r = new this(t.name, t.duration, e, t.blendMode);
        return r.uuid = t.uuid, r;
      }
    }, {
      key: "toJSON",
      value: function toJSON(t) {
        var e = [],
            n = t.tracks,
            i = {
          name: t.name,
          duration: t.duration,
          tracks: e,
          uuid: t.uuid,
          blendMode: t.blendMode
        };

        for (var _t240 = 0, _i149 = n.length; _t240 !== _i149; ++_t240) {
          e.push(Fo.toJSON(n[_t240]));
        }

        return i;
      }
    }, {
      key: "CreateFromMorphTargetSequence",
      value: function CreateFromMorphTargetSequence(t, e, n, i) {
        var r = e.length,
            s = [];

        for (var _t241 = 0; _t241 < r; _t241++) {
          var _a56 = [],
              _o33 = [];
          _a56.push((_t241 + r - 1) % r, _t241, (_t241 + 1) % r), _o33.push(0, 1, 0);

          var _l27 = Io.getKeyframeOrder(_a56);

          _a56 = Io.sortedArray(_a56, 1, _l27), _o33 = Io.sortedArray(_o33, 1, _l27), i || 0 !== _a56[0] || (_a56.push(r), _o33.push(_o33[0])), s.push(new Go(".morphTargetInfluences[" + e[_t241].name + "]", _a56, _o33).scale(1 / n));
        }

        return new this(t, -1, s);
      }
    }, {
      key: "findByName",
      value: function findByName(t, e) {
        var n = t;

        if (!Array.isArray(t)) {
          var _e197 = t;
          n = _e197.geometry && _e197.geometry.animations || _e197.animations;
        }

        for (var _t242 = 0; _t242 < n.length; _t242++) {
          if (n[_t242].name === e) return n[_t242];
        }

        return null;
      }
    }, {
      key: "CreateClipsFromMorphTargetSequences",
      value: function CreateClipsFromMorphTargetSequences(t, e, n) {
        var i = {},
            r = /^([\w-]*?)([\d]+)$/;

        for (var _e198 = 0, _n172 = t.length; _e198 < _n172; _e198++) {
          var _n173 = t[_e198],
              _s65 = _n173.name.match(r);

          if (_s65 && _s65.length > 1) {
            var _t243 = _s65[1];
            var _e199 = i[_t243];
            _e199 || (i[_t243] = _e199 = []), _e199.push(_n173);
          }
        }

        var s = [];

        for (var _t244 in i) {
          s.push(this.CreateFromMorphTargetSequence(_t244, i[_t244], e, n));
        }

        return s;
      }
    }, {
      key: "parseAnimation",
      value: function parseAnimation(t, e) {
        if (!t) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;

        var n = function n(t, e, _n174, i, r) {
          if (0 !== _n174.length) {
            var _s66 = [],
                _a57 = [];
            Io.flattenJSON(_n174, _s66, _a57, i), 0 !== _s66.length && r.push(new t(e, _s66, _a57));
          }
        },
            i = [],
            r = t.name || "default",
            s = t.fps || 30,
            a = t.blendMode;

        var o = t.length || -1;
        var l = t.hierarchy || [];

        for (var _t245 = 0; _t245 < l.length; _t245++) {
          var _r118 = l[_t245].keys;
          if (_r118 && 0 !== _r118.length) if (_r118[0].morphTargets) {
            var _t246 = {};

            var _e200 = void 0;

            for (_e200 = 0; _e200 < _r118.length; _e200++) {
              if (_r118[_e200].morphTargets) for (var _n175 = 0; _n175 < _r118[_e200].morphTargets.length; _n175++) {
                _t246[_r118[_e200].morphTargets[_n175]] = -1;
              }
            }

            for (var _n176 in _t246) {
              var _t247 = [],
                  _s67 = [];

              for (var _i150 = 0; _i150 !== _r118[_e200].morphTargets.length; ++_i150) {
                var _i151 = _r118[_e200];
                _t247.push(_i151.time), _s67.push(_i151.morphTarget === _n176 ? 1 : 0);
              }

              i.push(new Go(".morphTargetInfluence[" + _n176 + "]", _t247, _s67));
            }

            o = _t246.length * (s || 1);
          } else {
            var _s68 = ".bones[" + e[_t245].name + "]";

            n(jo, _s68 + ".position", _r118, "pos", i), n(Vo, _s68 + ".quaternion", _r118, "rot", i), n(jo, _s68 + ".scale", _r118, "scl", i);
          }
        }

        if (0 === i.length) return null;
        return new this(r, o, i, a);
      }
    }]);

    return qo;
  }();

  function Xo(t) {
    if (void 0 === t.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");

    var e = function (t) {
      switch (t.toLowerCase()) {
        case "scalar":
        case "double":
        case "float":
        case "number":
        case "integer":
          return Go;

        case "vector":
        case "vector2":
        case "vector3":
        case "vector4":
          return jo;

        case "color":
          return Uo;

        case "quaternion":
          return Vo;

        case "bool":
        case "boolean":
          return Ho;

        case "string":
          return Wo;
      }

      throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t);
    }(t.type);

    if (void 0 === t.times) {
      var _e201 = [],
          _n177 = [];
      Io.flattenJSON(t.keys, _e201, _n177, "value"), t.times = _e201, t.values = _n177;
    }

    return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation);
  }

  var Yo = {
    enabled: !1,
    files: {},
    add: function add(t, e) {
      !1 !== this.enabled && (this.files[t] = e);
    },
    get: function get(t) {
      if (!1 !== this.enabled) return this.files[t];
    },
    remove: function remove(t) {
      delete this.files[t];
    },
    clear: function clear() {
      this.files = {};
    }
  };

  function Zo(t, e, n) {
    var i = this;
    var r,
        s = !1,
        a = 0,
        o = 0;
    var l = [];
    this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = n, this.itemStart = function (t) {
      o++, !1 === s && void 0 !== i.onStart && i.onStart(t, a, o), s = !0;
    }, this.itemEnd = function (t) {
      a++, void 0 !== i.onProgress && i.onProgress(t, a, o), a === o && (s = !1, void 0 !== i.onLoad && i.onLoad());
    }, this.itemError = function (t) {
      void 0 !== i.onError && i.onError(t);
    }, this.resolveURL = function (t) {
      return r ? r(t) : t;
    }, this.setURLModifier = function (t) {
      return r = t, this;
    }, this.addHandler = function (t, e) {
      return l.push(t, e), this;
    }, this.removeHandler = function (t) {
      var e = l.indexOf(t);
      return -1 !== e && l.splice(e, 2), this;
    }, this.getHandler = function (t) {
      for (var _e202 = 0, _n178 = l.length; _e202 < _n178; _e202 += 2) {
        var _n179 = l[_e202],
            _i152 = l[_e202 + 1];
        if (_n179.global && (_n179.lastIndex = 0), _n179.test(t)) return _i152;
      }

      return null;
    };
  }

  var Jo = new Zo();

  function Qo(t) {
    this.manager = void 0 !== t ? t : Jo, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }

  Object.assign(Qo.prototype, {
    load: function load() {},
    loadAsync: function loadAsync(t, e) {
      var n = this;
      return new Promise(function (i, r) {
        n.load(t, i, e, r);
      });
    },
    parse: function parse() {},
    setCrossOrigin: function setCrossOrigin(t) {
      return this.crossOrigin = t, this;
    },
    setWithCredentials: function setWithCredentials(t) {
      return this.withCredentials = t, this;
    },
    setPath: function setPath(t) {
      return this.path = t, this;
    },
    setResourcePath: function setResourcePath(t) {
      return this.resourcePath = t, this;
    },
    setRequestHeader: function setRequestHeader(t) {
      return this.requestHeader = t, this;
    }
  });
  var Ko = {};

  function $o(t) {
    Qo.call(this, t);
  }

  $o.prototype = Object.assign(Object.create(Qo.prototype), {
    constructor: $o,
    load: function load(t, e, n, i) {
      void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
      var r = this,
          s = Yo.get(t);
      if (void 0 !== s) return r.manager.itemStart(t), setTimeout(function () {
        e && e(s), r.manager.itemEnd(t);
      }, 0), s;
      if (void 0 !== Ko[t]) return void Ko[t].push({
        onLoad: e,
        onProgress: n,
        onError: i
      });
      var a = t.match(/^data:(.*?)(;base64)?,(.*)$/);
      var o;

      if (a) {
        var _n180 = a[1],
            _s69 = !!a[2];

        var _o34 = a[3];
        _o34 = decodeURIComponent(_o34), _s69 && (_o34 = atob(_o34));

        try {
          var _i153;

          var _s70 = (this.responseType || "").toLowerCase();

          switch (_s70) {
            case "arraybuffer":
            case "blob":
              var _t248 = new Uint8Array(_o34.length);

              for (var _e204 = 0; _e204 < _o34.length; _e204++) {
                _t248[_e204] = _o34.charCodeAt(_e204);
              }

              _i153 = "blob" === _s70 ? new Blob([_t248.buffer], {
                type: _n180
              }) : _t248.buffer;
              break;

            case "document":
              var _e203 = new DOMParser();

              _i153 = _e203.parseFromString(_o34, _n180);
              break;

            case "json":
              _i153 = JSON.parse(_o34);
              break;

            default:
              _i153 = _o34;
          }

          setTimeout(function () {
            e && e(_i153), r.manager.itemEnd(t);
          }, 0);
        } catch (e) {
          setTimeout(function () {
            i && i(e), r.manager.itemError(t), r.manager.itemEnd(t);
          }, 0);
        }
      } else {
        Ko[t] = [], Ko[t].push({
          onLoad: e,
          onProgress: n,
          onError: i
        }), o = new XMLHttpRequest(), o.open("GET", t, !0), o.addEventListener("load", function (e) {
          var n = this.response,
              i = Ko[t];

          if (delete Ko[t], 200 === this.status || 0 === this.status) {
            0 === this.status && console.warn("THREE.FileLoader: HTTP Status 0 received."), Yo.add(t, n);

            for (var _t249 = 0, _e205 = i.length; _t249 < _e205; _t249++) {
              var _e206 = i[_t249];
              _e206.onLoad && _e206.onLoad(n);
            }

            r.manager.itemEnd(t);
          } else {
            for (var _t250 = 0, _n181 = i.length; _t250 < _n181; _t250++) {
              var _n182 = i[_t250];
              _n182.onError && _n182.onError(e);
            }

            r.manager.itemError(t), r.manager.itemEnd(t);
          }
        }, !1), o.addEventListener("progress", function (e) {
          var n = Ko[t];

          for (var _t251 = 0, _i154 = n.length; _t251 < _i154; _t251++) {
            var _i155 = n[_t251];
            _i155.onProgress && _i155.onProgress(e);
          }
        }, !1), o.addEventListener("error", function (e) {
          var n = Ko[t];
          delete Ko[t];

          for (var _t252 = 0, _i156 = n.length; _t252 < _i156; _t252++) {
            var _i157 = n[_t252];
            _i157.onError && _i157.onError(e);
          }

          r.manager.itemError(t), r.manager.itemEnd(t);
        }, !1), o.addEventListener("abort", function (e) {
          var n = Ko[t];
          delete Ko[t];

          for (var _t253 = 0, _i158 = n.length; _t253 < _i158; _t253++) {
            var _i159 = n[_t253];
            _i159.onError && _i159.onError(e);
          }

          r.manager.itemError(t), r.manager.itemEnd(t);
        }, !1), void 0 !== this.responseType && (o.responseType = this.responseType), void 0 !== this.withCredentials && (o.withCredentials = this.withCredentials), o.overrideMimeType && o.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain");

        for (var _t254 in this.requestHeader) {
          o.setRequestHeader(_t254, this.requestHeader[_t254]);
        }

        o.send(null);
      }

      return r.manager.itemStart(t), o;
    },
    setResponseType: function setResponseType(t) {
      return this.responseType = t, this;
    },
    setMimeType: function setMimeType(t) {
      return this.mimeType = t, this;
    }
  });

  function tl(t) {
    Qo.call(this, t);
  }

  tl.prototype = Object.assign(Object.create(Qo.prototype), {
    constructor: tl,
    load: function load(t, e, n, i) {
      var r = this,
          s = [],
          a = new ya(),
          o = new $o(this.manager);
      o.setPath(this.path), o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setWithCredentials(r.withCredentials);
      var l = 0;

      function c(c) {
        o.load(t[c], function (t) {
          var n = r.parse(t, !0);
          s[c] = {
            width: n.width,
            height: n.height,
            format: n.format,
            mipmaps: n.mipmaps
          }, l += 1, 6 === l && (1 === n.mipmapCount && (a.minFilter = g), a.image = s, a.format = n.format, a.needsUpdate = !0, e && e(a));
        }, n, i);
      }

      if (Array.isArray(t)) for (var _e207 = 0, _n183 = t.length; _e207 < _n183; ++_e207) {
        c(_e207);
      } else o.load(t, function (t) {
        var n = r.parse(t, !0);

        if (n.isCubemap) {
          var _t255 = n.mipmaps.length / n.mipmapCount;

          for (var _e208 = 0; _e208 < _t255; _e208++) {
            s[_e208] = {
              mipmaps: []
            };

            for (var _t256 = 0; _t256 < n.mipmapCount; _t256++) {
              s[_e208].mipmaps.push(n.mipmaps[_e208 * n.mipmapCount + _t256]), s[_e208].format = n.format, s[_e208].width = n.width, s[_e208].height = n.height;
            }
          }

          a.image = s;
        } else a.image.width = n.width, a.image.height = n.height, a.mipmaps = n.mipmaps;

        1 === n.mipmapCount && (a.minFilter = g), a.format = n.format, a.needsUpdate = !0, e && e(a);
      }, n, i);
      return a;
    }
  });

  var el = /*#__PURE__*/function (_Qo) {
    _inherits(el, _Qo);

    var _super62 = _createSuper(el);

    function el(t) {
      _classCallCheck(this, el);

      return _super62.call(this, t);
    }

    _createClass(el, [{
      key: "load",
      value: function load(t, e, n, i) {
        void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
        var r = this,
            s = Yo.get(t);
        if (void 0 !== s) return r.manager.itemStart(t), setTimeout(function () {
          e && e(s), r.manager.itemEnd(t);
        }, 0), s;
        var a = document.createElementNS("http://www.w3.org/1999/xhtml", "img");

        function o() {
          a.removeEventListener("load", o, !1), a.removeEventListener("error", l, !1), Yo.add(t, this), e && e(this), r.manager.itemEnd(t);
        }

        function l(e) {
          a.removeEventListener("load", o, !1), a.removeEventListener("error", l, !1), i && i(e), r.manager.itemError(t), r.manager.itemEnd(t);
        }

        return a.addEventListener("load", o, !1), a.addEventListener("error", l, !1), "data:" !== t.substr(0, 5) && void 0 !== this.crossOrigin && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(t), a.src = t, a;
      }
    }]);

    return el;
  }(Qo);

  var nl = /*#__PURE__*/function (_Qo2) {
    _inherits(nl, _Qo2);

    var _super63 = _createSuper(nl);

    function nl(t) {
      _classCallCheck(this, nl);

      return _super63.call(this, t);
    }

    _createClass(nl, [{
      key: "load",
      value: function load(t, e, n, i) {
        var r = new qn(),
            s = new el(this.manager);
        s.setCrossOrigin(this.crossOrigin), s.setPath(this.path);
        var a = 0;

        function o(n) {
          s.load(t[n], function (t) {
            r.images[n] = t, a++, 6 === a && (r.needsUpdate = !0, e && e(r));
          }, void 0, i);
        }

        for (var _e209 = 0; _e209 < t.length; ++_e209) {
          o(_e209);
        }

        return r;
      }
    }]);

    return nl;
  }(Qo);

  function il(t) {
    Qo.call(this, t);
  }

  function rl(t) {
    Qo.call(this, t);
  }

  function sl() {
    this.type = "Curve", this.arcLengthDivisions = 200;
  }

  il.prototype = Object.assign(Object.create(Qo.prototype), {
    constructor: il,
    load: function load(t, e, n, i) {
      var r = this,
          s = new Yn(),
          a = new $o(this.manager);
      return a.setResponseType("arraybuffer"), a.setRequestHeader(this.requestHeader), a.setPath(this.path), a.setWithCredentials(r.withCredentials), a.load(t, function (t) {
        var n = r.parse(t);
        n && (void 0 !== n.image ? s.image = n.image : void 0 !== n.data && (s.image.width = n.width, s.image.height = n.height, s.image.data = n.data), s.wrapS = void 0 !== n.wrapS ? n.wrapS : u, s.wrapT = void 0 !== n.wrapT ? n.wrapT : u, s.magFilter = void 0 !== n.magFilter ? n.magFilter : g, s.minFilter = void 0 !== n.minFilter ? n.minFilter : g, s.anisotropy = void 0 !== n.anisotropy ? n.anisotropy : 1, void 0 !== n.encoding && (s.encoding = n.encoding), void 0 !== n.flipY && (s.flipY = n.flipY), void 0 !== n.format && (s.format = n.format), void 0 !== n.type && (s.type = n.type), void 0 !== n.mipmaps && (s.mipmaps = n.mipmaps, s.minFilter = y), 1 === n.mipmapCount && (s.minFilter = g), void 0 !== n.generateMipmaps && (s.generateMipmaps = n.generateMipmaps), s.needsUpdate = !0, e && e(s, n));
      }, n, i), s;
    }
  }), rl.prototype = Object.assign(Object.create(Qo.prototype), {
    constructor: rl,
    load: function load(t, e, n, i) {
      var r = new pt(),
          s = new el(this.manager);
      return s.setCrossOrigin(this.crossOrigin), s.setPath(this.path), s.load(t, function (n) {
        r.image = n;
        var i = t.search(/\.jpe?g($|\?)/i) > 0 || 0 === t.search(/^data\:image\/jpeg/);
        r.format = i ? T : E, r.needsUpdate = !0, void 0 !== e && e(r);
      }, n, i), r;
    }
  }), Object.assign(sl.prototype, {
    getPoint: function getPoint() {
      return console.warn("THREE.Curve: .getPoint() not implemented."), null;
    },
    getPointAt: function getPointAt(t, e) {
      var n = this.getUtoTmapping(t);
      return this.getPoint(n, e);
    },
    getPoints: function getPoints() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
      var e = [];

      for (var _n184 = 0; _n184 <= t; _n184++) {
        e.push(this.getPoint(_n184 / t));
      }

      return e;
    },
    getSpacedPoints: function getSpacedPoints() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
      var e = [];

      for (var _n185 = 0; _n185 <= t; _n185++) {
        e.push(this.getPointAt(_n185 / t));
      }

      return e;
    },
    getLength: function getLength() {
      var t = this.getLengths();
      return t[t.length - 1];
    },
    getLengths: function getLengths(t) {
      if (void 0 === t && (t = this.arcLengthDivisions), this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
      this.needsUpdate = !1;
      var e = [];
      var n,
          i = this.getPoint(0),
          r = 0;
      e.push(0);

      for (var _s71 = 1; _s71 <= t; _s71++) {
        n = this.getPoint(_s71 / t), r += n.distanceTo(i), e.push(r), i = n;
      }

      return this.cacheArcLengths = e, e;
    },
    updateArcLengths: function updateArcLengths() {
      this.needsUpdate = !0, this.getLengths();
    },
    getUtoTmapping: function getUtoTmapping(t, e) {
      var n = this.getLengths();
      var i = 0;
      var r = n.length;
      var s;
      s = e || t * n[r - 1];
      var a,
          o = 0,
          l = r - 1;

      for (; o <= l;) {
        if (i = Math.floor(o + (l - o) / 2), a = n[i] - s, a < 0) o = i + 1;else {
          if (!(a > 0)) {
            l = i;
            break;
          }

          l = i - 1;
        }
      }

      if (i = l, n[i] === s) return i / (r - 1);
      var c = n[i];
      return (i + (s - c) / (n[i + 1] - c)) / (r - 1);
    },
    getTangent: function getTangent(t, e) {
      var n = 1e-4;
      var i = t - n,
          r = t + n;
      i < 0 && (i = 0), r > 1 && (r = 1);
      var s = this.getPoint(i),
          a = this.getPoint(r),
          o = e || (s.isVector2 ? new lt() : new xt());
      return o.copy(a).sub(s).normalize(), o;
    },
    getTangentAt: function getTangentAt(t, e) {
      var n = this.getUtoTmapping(t);
      return this.getTangent(n, e);
    },
    computeFrenetFrames: function computeFrenetFrames(t, e) {
      var n = new xt(),
          i = [],
          r = [],
          s = [],
          a = new xt(),
          o = new Jt();

      for (var _e210 = 0; _e210 <= t; _e210++) {
        var _n186 = _e210 / t;

        i[_e210] = this.getTangentAt(_n186, new xt()), i[_e210].normalize();
      }

      r[0] = new xt(), s[0] = new xt();
      var l = Number.MAX_VALUE;
      var c = Math.abs(i[0].x),
          h = Math.abs(i[0].y),
          u = Math.abs(i[0].z);
      c <= l && (l = c, n.set(1, 0, 0)), h <= l && (l = h, n.set(0, 1, 0)), u <= l && n.set(0, 0, 1), a.crossVectors(i[0], n).normalize(), r[0].crossVectors(i[0], a), s[0].crossVectors(i[0], r[0]);

      for (var _e211 = 1; _e211 <= t; _e211++) {
        if (r[_e211] = r[_e211 - 1].clone(), s[_e211] = s[_e211 - 1].clone(), a.crossVectors(i[_e211 - 1], i[_e211]), a.length() > Number.EPSILON) {
          a.normalize();

          var _t257 = Math.acos(ot.clamp(i[_e211 - 1].dot(i[_e211]), -1, 1));

          r[_e211].applyMatrix4(o.makeRotationAxis(a, _t257));
        }

        s[_e211].crossVectors(i[_e211], r[_e211]);
      }

      if (!0 === e) {
        var _e212 = Math.acos(ot.clamp(r[0].dot(r[t]), -1, 1));

        _e212 /= t, i[0].dot(a.crossVectors(r[0], r[t])) > 0 && (_e212 = -_e212);

        for (var _n187 = 1; _n187 <= t; _n187++) {
          r[_n187].applyMatrix4(o.makeRotationAxis(i[_n187], _e212 * _n187)), s[_n187].crossVectors(i[_n187], r[_n187]);
        }
      }

      return {
        tangents: i,
        normals: r,
        binormals: s
      };
    },
    clone: function clone() {
      return new this.constructor().copy(this);
    },
    copy: function copy(t) {
      return this.arcLengthDivisions = t.arcLengthDivisions, this;
    },
    toJSON: function toJSON() {
      var t = {
        metadata: {
          version: 4.5,
          type: "Curve",
          generator: "Curve.toJSON"
        }
      };
      return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t;
    },
    fromJSON: function fromJSON(t) {
      return this.arcLengthDivisions = t.arcLengthDivisions, this;
    }
  });

  var al = /*#__PURE__*/function (_sl) {
    _inherits(al, _sl);

    var _super64 = _createSuper(al);

    function al() {
      var _this55;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 2 * Math.PI;
      var a = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : !1;
      var o = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;

      _classCallCheck(this, al);

      _this55 = _super64.call(this), _this55.type = "EllipseCurve", _this55.aX = t, _this55.aY = e, _this55.xRadius = n, _this55.yRadius = i, _this55.aStartAngle = r, _this55.aEndAngle = s, _this55.aClockwise = a, _this55.aRotation = o;
      return _this55;
    }

    _createClass(al, [{
      key: "getPoint",
      value: function getPoint(t, e) {
        var n = e || new lt(),
            i = 2 * Math.PI;
        var r = this.aEndAngle - this.aStartAngle;
        var s = Math.abs(r) < Number.EPSILON;

        for (; r < 0;) {
          r += i;
        }

        for (; r > i;) {
          r -= i;
        }

        r < Number.EPSILON && (r = s ? 0 : i), !0 !== this.aClockwise || s || (r === i ? r = -i : r -= i);
        var a = this.aStartAngle + t * r;
        var o = this.aX + this.xRadius * Math.cos(a),
            l = this.aY + this.yRadius * Math.sin(a);

        if (0 !== this.aRotation) {
          var _t258 = Math.cos(this.aRotation),
              _e213 = Math.sin(this.aRotation),
              _n188 = o - this.aX,
              _i160 = l - this.aY;

          o = _n188 * _t258 - _i160 * _e213 + this.aX, l = _n188 * _e213 + _i160 * _t258 + this.aY;
        }

        return n.set(o, l);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(al.prototype), "copy", this).call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var t = _get(_getPrototypeOf(al.prototype), "toJSON", this).call(this);

        return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t;
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(t) {
        return _get(_getPrototypeOf(al.prototype), "fromJSON", this).call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this;
      }
    }]);

    return al;
  }(sl);

  al.prototype.isEllipseCurve = !0;

  var ol = /*#__PURE__*/function (_al) {
    _inherits(ol, _al);

    var _super65 = _createSuper(ol);

    function ol(t, e, n, i, r, s) {
      var _this56;

      _classCallCheck(this, ol);

      _this56 = _super65.call(this, t, e, n, n, i, r, s), _this56.type = "ArcCurve";
      return _this56;
    }

    return ol;
  }(al);

  function ll() {
    var t = 0,
        e = 0,
        n = 0,
        i = 0;

    function r(r, s, a, o) {
      t = r, e = a, n = -3 * r + 3 * s - 2 * a - o, i = 2 * r - 2 * s + a + o;
    }

    return {
      initCatmullRom: function initCatmullRom(t, e, n, i, s) {
        r(e, n, s * (n - t), s * (i - e));
      },
      initNonuniformCatmullRom: function initNonuniformCatmullRom(t, e, n, i, s, a, o) {
        var l = (e - t) / s - (n - t) / (s + a) + (n - e) / a,
            c = (n - e) / a - (i - e) / (a + o) + (i - n) / o;
        l *= a, c *= a, r(e, n, l, c);
      },
      calc: function calc(r) {
        var s = r * r;
        return t + e * r + n * s + i * (s * r);
      }
    };
  }

  ol.prototype.isArcCurve = !0;
  var cl = new xt(),
      hl = new ll(),
      ul = new ll(),
      dl = new ll();

  var pl = /*#__PURE__*/function (_sl2) {
    _inherits(pl, _sl2);

    var _super66 = _createSuper(pl);

    function pl() {
      var _this57;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "centripetal";
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : .5;

      _classCallCheck(this, pl);

      _this57 = _super66.call(this), _this57.type = "CatmullRomCurve3", _this57.points = t, _this57.closed = e, _this57.curveType = n, _this57.tension = i;
      return _this57;
    }

    _createClass(pl, [{
      key: "getPoint",
      value: function getPoint(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new xt();
        var n = e,
            i = this.points,
            r = i.length,
            s = (r - (this.closed ? 0 : 1)) * t;
        var a,
            o,
            l = Math.floor(s),
            c = s - l;
        this.closed ? l += l > 0 ? 0 : (Math.floor(Math.abs(l) / r) + 1) * r : 0 === c && l === r - 1 && (l = r - 2, c = 1), this.closed || l > 0 ? a = i[(l - 1) % r] : (cl.subVectors(i[0], i[1]).add(i[0]), a = cl);
        var h = i[l % r],
            u = i[(l + 1) % r];

        if (this.closed || l + 2 < r ? o = i[(l + 2) % r] : (cl.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), o = cl), "centripetal" === this.curveType || "chordal" === this.curveType) {
          var _t259 = "chordal" === this.curveType ? .5 : .25;

          var _e214 = Math.pow(a.distanceToSquared(h), _t259),
              _n189 = Math.pow(h.distanceToSquared(u), _t259),
              _i161 = Math.pow(u.distanceToSquared(o), _t259);

          _n189 < 1e-4 && (_n189 = 1), _e214 < 1e-4 && (_e214 = _n189), _i161 < 1e-4 && (_i161 = _n189), hl.initNonuniformCatmullRom(a.x, h.x, u.x, o.x, _e214, _n189, _i161), ul.initNonuniformCatmullRom(a.y, h.y, u.y, o.y, _e214, _n189, _i161), dl.initNonuniformCatmullRom(a.z, h.z, u.z, o.z, _e214, _n189, _i161);
        } else "catmullrom" === this.curveType && (hl.initCatmullRom(a.x, h.x, u.x, o.x, this.tension), ul.initCatmullRom(a.y, h.y, u.y, o.y, this.tension), dl.initCatmullRom(a.z, h.z, u.z, o.z, this.tension));

        return n.set(hl.calc(c), ul.calc(c), dl.calc(c)), n;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        _get(_getPrototypeOf(pl.prototype), "copy", this).call(this, t), this.points = [];

        for (var _e215 = 0, _n190 = t.points.length; _e215 < _n190; _e215++) {
          var _n191 = t.points[_e215];
          this.points.push(_n191.clone());
        }

        return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var t = _get(_getPrototypeOf(pl.prototype), "toJSON", this).call(this);

        t.points = [];

        for (var _e216 = 0, _n192 = this.points.length; _e216 < _n192; _e216++) {
          var _n193 = this.points[_e216];
          t.points.push(_n193.toArray());
        }

        return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t;
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(t) {
        _get(_getPrototypeOf(pl.prototype), "fromJSON", this).call(this, t), this.points = [];

        for (var _e217 = 0, _n194 = t.points.length; _e217 < _n194; _e217++) {
          var _n195 = t.points[_e217];
          this.points.push(new xt().fromArray(_n195));
        }

        return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this;
      }
    }]);

    return pl;
  }(sl);

  function fl(t, e, n, i, r) {
    var s = .5 * (i - e),
        a = .5 * (r - n),
        o = t * t;
    return (2 * n - 2 * i + s + a) * (t * o) + (-3 * n + 3 * i - 2 * s - a) * o + s * t + n;
  }

  function ml(t, e, n, i) {
    return function (t, e) {
      var n = 1 - t;
      return n * n * e;
    }(t, e) + function (t, e) {
      return 2 * (1 - t) * t * e;
    }(t, n) + function (t, e) {
      return t * t * e;
    }(t, i);
  }

  function gl(t, e, n, i, r) {
    return function (t, e) {
      var n = 1 - t;
      return n * n * n * e;
    }(t, e) + function (t, e) {
      var n = 1 - t;
      return 3 * n * n * t * e;
    }(t, n) + function (t, e) {
      return 3 * (1 - t) * t * t * e;
    }(t, i) + function (t, e) {
      return t * t * t * e;
    }(t, r);
  }

  pl.prototype.isCatmullRomCurve3 = !0;

  var vl = /*#__PURE__*/function (_sl3) {
    _inherits(vl, _sl3);

    var _super67 = _createSuper(vl);

    function vl() {
      var _this58;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new lt();
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new lt();
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new lt();
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new lt();

      _classCallCheck(this, vl);

      _this58 = _super67.call(this), _this58.type = "CubicBezierCurve", _this58.v0 = t, _this58.v1 = e, _this58.v2 = n, _this58.v3 = i;
      return _this58;
    }

    _createClass(vl, [{
      key: "getPoint",
      value: function getPoint(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new lt();
        var n = e,
            i = this.v0,
            r = this.v1,
            s = this.v2,
            a = this.v3;
        return n.set(gl(t, i.x, r.x, s.x, a.x), gl(t, i.y, r.y, s.y, a.y)), n;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(vl.prototype), "copy", this).call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var t = _get(_getPrototypeOf(vl.prototype), "toJSON", this).call(this);

        return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t;
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(t) {
        return _get(_getPrototypeOf(vl.prototype), "fromJSON", this).call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this;
      }
    }]);

    return vl;
  }(sl);

  vl.prototype.isCubicBezierCurve = !0;

  var yl = /*#__PURE__*/function (_sl4) {
    _inherits(yl, _sl4);

    var _super68 = _createSuper(yl);

    function yl() {
      var _this59;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new xt();
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new xt();
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new xt();
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new xt();

      _classCallCheck(this, yl);

      _this59 = _super68.call(this), _this59.type = "CubicBezierCurve3", _this59.v0 = t, _this59.v1 = e, _this59.v2 = n, _this59.v3 = i;
      return _this59;
    }

    _createClass(yl, [{
      key: "getPoint",
      value: function getPoint(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new xt();
        var n = e,
            i = this.v0,
            r = this.v1,
            s = this.v2,
            a = this.v3;
        return n.set(gl(t, i.x, r.x, s.x, a.x), gl(t, i.y, r.y, s.y, a.y), gl(t, i.z, r.z, s.z, a.z)), n;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(yl.prototype), "copy", this).call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var t = _get(_getPrototypeOf(yl.prototype), "toJSON", this).call(this);

        return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t;
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(t) {
        return _get(_getPrototypeOf(yl.prototype), "fromJSON", this).call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this;
      }
    }]);

    return yl;
  }(sl);

  yl.prototype.isCubicBezierCurve3 = !0;

  var xl = /*#__PURE__*/function (_sl5) {
    _inherits(xl, _sl5);

    var _super69 = _createSuper(xl);

    function xl() {
      var _this60;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new lt();
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new lt();

      _classCallCheck(this, xl);

      _this60 = _super69.call(this), _this60.type = "LineCurve", _this60.v1 = t, _this60.v2 = e;
      return _this60;
    }

    _createClass(xl, [{
      key: "getPoint",
      value: function getPoint(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new lt();
        var n = e;
        return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n;
      }
    }, {
      key: "getPointAt",
      value: function getPointAt(t, e) {
        return this.getPoint(t, e);
      }
    }, {
      key: "getTangent",
      value: function getTangent(t, e) {
        var n = e || new lt();
        return n.copy(this.v2).sub(this.v1).normalize(), n;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(xl.prototype), "copy", this).call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var t = _get(_getPrototypeOf(xl.prototype), "toJSON", this).call(this);

        return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(t) {
        return _get(_getPrototypeOf(xl.prototype), "fromJSON", this).call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
      }
    }]);

    return xl;
  }(sl);

  xl.prototype.isLineCurve = !0;

  var _l = /*#__PURE__*/function (_sl6) {
    _inherits(_l, _sl6);

    var _super70 = _createSuper(_l);

    function _l() {
      var _this61;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new xt();
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new xt();

      _classCallCheck(this, _l);

      _this61 = _super70.call(this), _this61.type = "LineCurve3", _this61.isLineCurve3 = !0, _this61.v1 = t, _this61.v2 = e;
      return _this61;
    }

    _createClass(_l, [{
      key: "getPoint",
      value: function getPoint(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new xt();
        var n = e;
        return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n;
      }
    }, {
      key: "getPointAt",
      value: function getPointAt(t, e) {
        return this.getPoint(t, e);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(_l.prototype), "copy", this).call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var t = _get(_getPrototypeOf(_l.prototype), "toJSON", this).call(this);

        return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(t) {
        return _get(_getPrototypeOf(_l.prototype), "fromJSON", this).call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
      }
    }]);

    return _l;
  }(sl);

  var bl = /*#__PURE__*/function (_sl7) {
    _inherits(bl, _sl7);

    var _super71 = _createSuper(bl);

    function bl() {
      var _this62;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new lt();
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new lt();
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new lt();

      _classCallCheck(this, bl);

      _this62 = _super71.call(this), _this62.type = "QuadraticBezierCurve", _this62.v0 = t, _this62.v1 = e, _this62.v2 = n;
      return _this62;
    }

    _createClass(bl, [{
      key: "getPoint",
      value: function getPoint(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new lt();
        var n = e,
            i = this.v0,
            r = this.v1,
            s = this.v2;
        return n.set(ml(t, i.x, r.x, s.x), ml(t, i.y, r.y, s.y)), n;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(bl.prototype), "copy", this).call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var t = _get(_getPrototypeOf(bl.prototype), "toJSON", this).call(this);

        return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(t) {
        return _get(_getPrototypeOf(bl.prototype), "fromJSON", this).call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
      }
    }]);

    return bl;
  }(sl);

  bl.prototype.isQuadraticBezierCurve = !0;

  var wl = /*#__PURE__*/function (_sl8) {
    _inherits(wl, _sl8);

    var _super72 = _createSuper(wl);

    function wl() {
      var _this63;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new xt();
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new xt();
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new xt();

      _classCallCheck(this, wl);

      _this63 = _super72.call(this), _this63.type = "QuadraticBezierCurve3", _this63.v0 = t, _this63.v1 = e, _this63.v2 = n;
      return _this63;
    }

    _createClass(wl, [{
      key: "getPoint",
      value: function getPoint(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new xt();
        var n = e,
            i = this.v0,
            r = this.v1,
            s = this.v2;
        return n.set(ml(t, i.x, r.x, s.x), ml(t, i.y, r.y, s.y), ml(t, i.z, r.z, s.z)), n;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(wl.prototype), "copy", this).call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var t = _get(_getPrototypeOf(wl.prototype), "toJSON", this).call(this);

        return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(t) {
        return _get(_getPrototypeOf(wl.prototype), "fromJSON", this).call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
      }
    }]);

    return wl;
  }(sl);

  wl.prototype.isQuadraticBezierCurve3 = !0;

  var Ml = /*#__PURE__*/function (_sl9) {
    _inherits(Ml, _sl9);

    var _super73 = _createSuper(Ml);

    function Ml() {
      var _this64;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      _classCallCheck(this, Ml);

      _this64 = _super73.call(this), _this64.type = "SplineCurve", _this64.points = t;
      return _this64;
    }

    _createClass(Ml, [{
      key: "getPoint",
      value: function getPoint(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new lt();
        var n = e,
            i = this.points,
            r = (i.length - 1) * t,
            s = Math.floor(r),
            a = r - s,
            o = i[0 === s ? s : s - 1],
            l = i[s],
            c = i[s > i.length - 2 ? i.length - 1 : s + 1],
            h = i[s > i.length - 3 ? i.length - 1 : s + 2];
        return n.set(fl(a, o.x, l.x, c.x, h.x), fl(a, o.y, l.y, c.y, h.y)), n;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        _get(_getPrototypeOf(Ml.prototype), "copy", this).call(this, t), this.points = [];

        for (var _e218 = 0, _n196 = t.points.length; _e218 < _n196; _e218++) {
          var _n197 = t.points[_e218];
          this.points.push(_n197.clone());
        }

        return this;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var t = _get(_getPrototypeOf(Ml.prototype), "toJSON", this).call(this);

        t.points = [];

        for (var _e219 = 0, _n198 = this.points.length; _e219 < _n198; _e219++) {
          var _n199 = this.points[_e219];
          t.points.push(_n199.toArray());
        }

        return t;
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(t) {
        _get(_getPrototypeOf(Ml.prototype), "fromJSON", this).call(this, t), this.points = [];

        for (var _e220 = 0, _n200 = t.points.length; _e220 < _n200; _e220++) {
          var _n201 = t.points[_e220];
          this.points.push(new lt().fromArray(_n201));
        }

        return this;
      }
    }]);

    return Ml;
  }(sl);

  Ml.prototype.isSplineCurve = !0;
  var Sl = Object.freeze({
    __proto__: null,
    ArcCurve: ol,
    CatmullRomCurve3: pl,
    CubicBezierCurve: vl,
    CubicBezierCurve3: yl,
    EllipseCurve: al,
    LineCurve: xl,
    LineCurve3: _l,
    QuadraticBezierCurve: bl,
    QuadraticBezierCurve3: wl,
    SplineCurve: Ml
  });

  var Tl = /*#__PURE__*/function (_sl10) {
    _inherits(Tl, _sl10);

    var _super74 = _createSuper(Tl);

    function Tl() {
      var _this65;

      _classCallCheck(this, Tl);

      _this65 = _super74.call(this), _this65.type = "CurvePath", _this65.curves = [], _this65.autoClose = !1;
      return _this65;
    }

    _createClass(Tl, [{
      key: "add",
      value: function add(t) {
        this.curves.push(t);
      }
    }, {
      key: "closePath",
      value: function closePath() {
        var t = this.curves[0].getPoint(0),
            e = this.curves[this.curves.length - 1].getPoint(1);
        t.equals(e) || this.curves.push(new xl(e, t));
      }
    }, {
      key: "getPoint",
      value: function getPoint(t) {
        var e = t * this.getLength(),
            n = this.getCurveLengths();
        var i = 0;

        for (; i < n.length;) {
          if (n[i] >= e) {
            var _t260 = n[i] - e,
                _r119 = this.curves[i],
                _s72 = _r119.getLength(),
                _a58 = 0 === _s72 ? 0 : 1 - _t260 / _s72;

            return _r119.getPointAt(_a58);
          }

          i++;
        }

        return null;
      }
    }, {
      key: "getLength",
      value: function getLength() {
        var t = this.getCurveLengths();
        return t[t.length - 1];
      }
    }, {
      key: "updateArcLengths",
      value: function updateArcLengths() {
        this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths();
      }
    }, {
      key: "getCurveLengths",
      value: function getCurveLengths() {
        if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
        var t = [];
        var e = 0;

        for (var _n202 = 0, _i162 = this.curves.length; _n202 < _i162; _n202++) {
          e += this.curves[_n202].getLength(), t.push(e);
        }

        return this.cacheLengths = t, t;
      }
    }, {
      key: "getSpacedPoints",
      value: function getSpacedPoints() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 40;
        var e = [];

        for (var _n203 = 0; _n203 <= t; _n203++) {
          e.push(this.getPoint(_n203 / t));
        }

        return this.autoClose && e.push(e[0]), e;
      }
    }, {
      key: "getPoints",
      value: function getPoints() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;
        var e = [];
        var n;

        for (var _i163 = 0, _r120 = this.curves; _i163 < _r120.length; _i163++) {
          var _s73 = _r120[_i163],
              _a59 = _s73 && _s73.isEllipseCurve ? 2 * t : _s73 && (_s73.isLineCurve || _s73.isLineCurve3) ? 1 : _s73 && _s73.isSplineCurve ? t * _s73.points.length : t,
              _o35 = _s73.getPoints(_a59);

          for (var _t261 = 0; _t261 < _o35.length; _t261++) {
            var _i164 = _o35[_t261];
            n && n.equals(_i164) || (e.push(_i164), n = _i164);
          }
        }

        return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        _get(_getPrototypeOf(Tl.prototype), "copy", this).call(this, t), this.curves = [];

        for (var _e221 = 0, _n204 = t.curves.length; _e221 < _n204; _e221++) {
          var _n205 = t.curves[_e221];
          this.curves.push(_n205.clone());
        }

        return this.autoClose = t.autoClose, this;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var t = _get(_getPrototypeOf(Tl.prototype), "toJSON", this).call(this);

        t.autoClose = this.autoClose, t.curves = [];

        for (var _e222 = 0, _n206 = this.curves.length; _e222 < _n206; _e222++) {
          var _n207 = this.curves[_e222];
          t.curves.push(_n207.toJSON());
        }

        return t;
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(t) {
        _get(_getPrototypeOf(Tl.prototype), "fromJSON", this).call(this, t), this.autoClose = t.autoClose, this.curves = [];

        for (var _e223 = 0, _n208 = t.curves.length; _e223 < _n208; _e223++) {
          var _n209 = t.curves[_e223];
          this.curves.push(new Sl[_n209.type]().fromJSON(_n209));
        }

        return this;
      }
    }]);

    return Tl;
  }(sl);

  var El = /*#__PURE__*/function (_Tl) {
    _inherits(El, _Tl);

    var _super75 = _createSuper(El);

    function El(t) {
      var _this66;

      _classCallCheck(this, El);

      _this66 = _super75.call(this), _this66.type = "Path", _this66.currentPoint = new lt(), t && _this66.setFromPoints(t);
      return _this66;
    }

    _createClass(El, [{
      key: "setFromPoints",
      value: function setFromPoints(t) {
        this.moveTo(t[0].x, t[0].y);

        for (var _e224 = 1, _n210 = t.length; _e224 < _n210; _e224++) {
          this.lineTo(t[_e224].x, t[_e224].y);
        }

        return this;
      }
    }, {
      key: "moveTo",
      value: function moveTo(t, e) {
        return this.currentPoint.set(t, e), this;
      }
    }, {
      key: "lineTo",
      value: function lineTo(t, e) {
        var n = new xl(this.currentPoint.clone(), new lt(t, e));
        return this.curves.push(n), this.currentPoint.set(t, e), this;
      }
    }, {
      key: "quadraticCurveTo",
      value: function quadraticCurveTo(t, e, n, i) {
        var r = new bl(this.currentPoint.clone(), new lt(t, e), new lt(n, i));
        return this.curves.push(r), this.currentPoint.set(n, i), this;
      }
    }, {
      key: "bezierCurveTo",
      value: function bezierCurveTo(t, e, n, i, r, s) {
        var a = new vl(this.currentPoint.clone(), new lt(t, e), new lt(n, i), new lt(r, s));
        return this.curves.push(a), this.currentPoint.set(r, s), this;
      }
    }, {
      key: "splineThru",
      value: function splineThru(t) {
        var e = [this.currentPoint.clone()].concat(t),
            n = new Ml(e);
        return this.curves.push(n), this.currentPoint.copy(t[t.length - 1]), this;
      }
    }, {
      key: "arc",
      value: function arc(t, e, n, i, r, s) {
        var a = this.currentPoint.x,
            o = this.currentPoint.y;
        return this.absarc(t + a, e + o, n, i, r, s), this;
      }
    }, {
      key: "absarc",
      value: function absarc(t, e, n, i, r, s) {
        return this.absellipse(t, e, n, n, i, r, s), this;
      }
    }, {
      key: "ellipse",
      value: function ellipse(t, e, n, i, r, s, a, o) {
        var l = this.currentPoint.x,
            c = this.currentPoint.y;
        return this.absellipse(t + l, e + c, n, i, r, s, a, o), this;
      }
    }, {
      key: "absellipse",
      value: function absellipse(t, e, n, i, r, s, a, o) {
        var l = new al(t, e, n, i, r, s, a, o);

        if (this.curves.length > 0) {
          var _t262 = l.getPoint(0);

          _t262.equals(this.currentPoint) || this.lineTo(_t262.x, _t262.y);
        }

        this.curves.push(l);
        var c = l.getPoint(1);
        return this.currentPoint.copy(c), this;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(El.prototype), "copy", this).call(this, t), this.currentPoint.copy(t.currentPoint), this;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var t = _get(_getPrototypeOf(El.prototype), "toJSON", this).call(this);

        return t.currentPoint = this.currentPoint.toArray(), t;
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(t) {
        return _get(_getPrototypeOf(El.prototype), "fromJSON", this).call(this, t), this.currentPoint.fromArray(t.currentPoint), this;
      }
    }]);

    return El;
  }(Tl);

  var Al = /*#__PURE__*/function (_El) {
    _inherits(Al, _El);

    var _super76 = _createSuper(Al);

    function Al(t) {
      var _this67;

      _classCallCheck(this, Al);

      _this67 = _super76.call(this, t), _this67.uuid = ot.generateUUID(), _this67.type = "Shape", _this67.holes = [];
      return _this67;
    }

    _createClass(Al, [{
      key: "getPointsHoles",
      value: function getPointsHoles(t) {
        var e = [];

        for (var _n211 = 0, _i165 = this.holes.length; _n211 < _i165; _n211++) {
          e[_n211] = this.holes[_n211].getPoints(t);
        }

        return e;
      }
    }, {
      key: "extractPoints",
      value: function extractPoints(t) {
        return {
          shape: this.getPoints(t),
          holes: this.getPointsHoles(t)
        };
      }
    }, {
      key: "copy",
      value: function copy(t) {
        _get(_getPrototypeOf(Al.prototype), "copy", this).call(this, t), this.holes = [];

        for (var _e225 = 0, _n212 = t.holes.length; _e225 < _n212; _e225++) {
          var _n213 = t.holes[_e225];
          this.holes.push(_n213.clone());
        }

        return this;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var t = _get(_getPrototypeOf(Al.prototype), "toJSON", this).call(this);

        t.uuid = this.uuid, t.holes = [];

        for (var _e226 = 0, _n214 = this.holes.length; _e226 < _n214; _e226++) {
          var _n215 = this.holes[_e226];
          t.holes.push(_n215.toJSON());
        }

        return t;
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(t) {
        _get(_getPrototypeOf(Al.prototype), "fromJSON", this).call(this, t), this.uuid = t.uuid, this.holes = [];

        for (var _e227 = 0, _n216 = t.holes.length; _e227 < _n216; _e227++) {
          var _n217 = t.holes[_e227];
          this.holes.push(new El().fromJSON(_n217));
        }

        return this;
      }
    }]);

    return Al;
  }(El);

  var Ll = /*#__PURE__*/function (_be6) {
    _inherits(Ll, _be6);

    var _super77 = _createSuper(Ll);

    function Ll(t) {
      var _this68;

      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      _classCallCheck(this, Ll);

      _this68 = _super77.call(this), _this68.type = "Light", _this68.color = new je(t), _this68.intensity = e;
      return _this68;
    }

    _createClass(Ll, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(Ll.prototype), "copy", this).call(this, t), this.color.copy(t.color), this.intensity = t.intensity, this;
      }
    }, {
      key: "toJSON",
      value: function toJSON(t) {
        var e = _get(_getPrototypeOf(Ll.prototype), "toJSON", this).call(this, t);

        return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()), e;
      }
    }]);

    return Ll;
  }(be);

  Ll.prototype.isLight = !0;

  var Rl = /*#__PURE__*/function (_Ll) {
    _inherits(Rl, _Ll);

    var _super78 = _createSuper(Rl);

    function Rl(t, e, n) {
      var _this69;

      _classCallCheck(this, Rl);

      _this69 = _super78.call(this, t, n), _this69.type = "HemisphereLight", _this69.position.copy(be.DefaultUp), _this69.updateMatrix(), _this69.groundColor = new je(e);
      return _this69;
    }

    _createClass(Rl, [{
      key: "copy",
      value: function copy(t) {
        return Ll.prototype.copy.call(this, t), this.groundColor.copy(t.groundColor), this;
      }
    }]);

    return Rl;
  }(Ll);

  Rl.prototype.isHemisphereLight = !0;
  var Cl = new Jt(),
      Pl = new xt(),
      Dl = new xt();

  var Il = /*#__PURE__*/function () {
    function Il(t) {
      _classCallCheck(this, Il);

      this.camera = t, this.bias = 0, this.normalBias = 0, this.radius = 1, this.mapSize = new lt(512, 512), this.map = null, this.mapPass = null, this.matrix = new Jt(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Qn(), this._frameExtents = new lt(1, 1), this._viewportCount = 1, this._viewports = [new mt(0, 0, 1, 1)];
    }

    _createClass(Il, [{
      key: "getViewportCount",
      value: function getViewportCount() {
        return this._viewportCount;
      }
    }, {
      key: "getFrustum",
      value: function getFrustum() {
        return this._frustum;
      }
    }, {
      key: "updateMatrices",
      value: function updateMatrices(t) {
        var e = this.camera,
            n = this.matrix;
        Pl.setFromMatrixPosition(t.matrixWorld), e.position.copy(Pl), Dl.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(Dl), e.updateMatrixWorld(), Cl.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Cl), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(e.projectionMatrix), n.multiply(e.matrixWorldInverse);
      }
    }, {
      key: "getViewport",
      value: function getViewport(t) {
        return this._viewports[t];
      }
    }, {
      key: "getFrameExtents",
      value: function getFrameExtents() {
        return this._frameExtents;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var t = {};
        return 0 !== this.bias && (t.bias = this.bias), 0 !== this.normalBias && (t.normalBias = this.normalBias), 1 !== this.radius && (t.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t;
      }
    }]);

    return Il;
  }();

  var Nl = /*#__PURE__*/function (_Il) {
    _inherits(Nl, _Il);

    var _super79 = _createSuper(Nl);

    function Nl() {
      var _this70;

      _classCallCheck(this, Nl);

      _this70 = _super79.call(this, new Vn(50, 1, .5, 500)), _this70.focus = 1;
      return _this70;
    }

    _createClass(Nl, [{
      key: "updateMatrices",
      value: function updateMatrices(t) {
        var e = this.camera,
            n = 2 * ot.RAD2DEG * t.angle * this.focus,
            i = this.mapSize.width / this.mapSize.height,
            r = t.distance || e.far;
        n === e.fov && i === e.aspect && r === e.far || (e.fov = n, e.aspect = i, e.far = r, e.updateProjectionMatrix()), _get(_getPrototypeOf(Nl.prototype), "updateMatrices", this).call(this, t);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(Nl.prototype), "copy", this).call(this, t), this.focus = t.focus, this;
      }
    }]);

    return Nl;
  }(Il);

  Nl.prototype.isSpotLightShadow = !0;

  var Bl = /*#__PURE__*/function (_Ll2) {
    _inherits(Bl, _Ll2);

    var _super80 = _createSuper(Bl);

    function Bl(t, e) {
      var _this71;

      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Math.PI / 3;
      var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;

      _classCallCheck(this, Bl);

      _this71 = _super80.call(this, t, e), _this71.type = "SpotLight", _this71.position.copy(be.DefaultUp), _this71.updateMatrix(), _this71.target = new be(), _this71.distance = n, _this71.angle = i, _this71.penumbra = r, _this71.decay = s, _this71.shadow = new Nl();
      return _this71;
    }

    _createClass(Bl, [{
      key: "power",
      get: function get() {
        return this.intensity * Math.PI;
      },
      set: function set(t) {
        this.intensity = t / Math.PI;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(Bl.prototype), "copy", this).call(this, t), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this;
      }
    }]);

    return Bl;
  }(Ll);

  Bl.prototype.isSpotLight = !0;
  var Ol = new Jt(),
      zl = new xt(),
      Fl = new xt();

  var Hl = /*#__PURE__*/function (_Il2) {
    _inherits(Hl, _Il2);

    var _super81 = _createSuper(Hl);

    function Hl() {
      var _this72;

      _classCallCheck(this, Hl);

      _this72 = _super81.call(this, new Vn(90, 1, .5, 500)), _this72._frameExtents = new lt(4, 2), _this72._viewportCount = 6, _this72._viewports = [new mt(2, 1, 1, 1), new mt(0, 1, 1, 1), new mt(3, 1, 1, 1), new mt(1, 1, 1, 1), new mt(3, 0, 1, 1), new mt(1, 0, 1, 1)], _this72._cubeDirections = [new xt(1, 0, 0), new xt(-1, 0, 0), new xt(0, 0, 1), new xt(0, 0, -1), new xt(0, 1, 0), new xt(0, -1, 0)], _this72._cubeUps = [new xt(0, 1, 0), new xt(0, 1, 0), new xt(0, 1, 0), new xt(0, 1, 0), new xt(0, 0, 1), new xt(0, 0, -1)];
      return _this72;
    }

    _createClass(Hl, [{
      key: "updateMatrices",
      value: function updateMatrices(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var n = this.camera,
            i = this.matrix,
            r = t.distance || n.far;
        r !== n.far && (n.far = r, n.updateProjectionMatrix()), zl.setFromMatrixPosition(t.matrixWorld), n.position.copy(zl), Fl.copy(n.position), Fl.add(this._cubeDirections[e]), n.up.copy(this._cubeUps[e]), n.lookAt(Fl), n.updateMatrixWorld(), i.makeTranslation(-zl.x, -zl.y, -zl.z), Ol.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Ol);
      }
    }]);

    return Hl;
  }(Il);

  Hl.prototype.isPointLightShadow = !0;

  var Ul = /*#__PURE__*/function (_Ll3) {
    _inherits(Ul, _Ll3);

    var _super82 = _createSuper(Ul);

    function Ul(t, e) {
      var _this73;

      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

      _classCallCheck(this, Ul);

      _this73 = _super82.call(this, t, e), _this73.type = "PointLight", _this73.distance = n, _this73.decay = i, _this73.shadow = new Hl();
      return _this73;
    }

    _createClass(Ul, [{
      key: "power",
      get: function get() {
        return 4 * this.intensity * Math.PI;
      },
      set: function set(t) {
        this.intensity = t / (4 * Math.PI);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(Ul.prototype), "copy", this).call(this, t), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this;
      }
    }]);

    return Ul;
  }(Ll);

  Ul.prototype.isPointLight = !0;

  var Gl = /*#__PURE__*/function (_kn) {
    _inherits(Gl, _kn);

    var _super83 = _createSuper(Gl);

    function Gl() {
      var _this74;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : -1;
      var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : .1;
      var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 2e3;

      _classCallCheck(this, Gl);

      _this74 = _super83.call(this), _this74.type = "OrthographicCamera", _this74.zoom = 1, _this74.view = null, _this74.left = t, _this74.right = e, _this74.top = n, _this74.bottom = i, _this74.near = r, _this74.far = s, _this74.updateProjectionMatrix();
      return _this74;
    }

    _createClass(Gl, [{
      key: "copy",
      value: function copy(t, e) {
        return _get(_getPrototypeOf(Gl.prototype), "copy", this).call(this, t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this;
      }
    }, {
      key: "setViewOffset",
      value: function setViewOffset(t, e, n, i, r, s) {
        null === this.view && (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1
        }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix();
      }
    }, {
      key: "clearViewOffset",
      value: function clearViewOffset() {
        null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix();
      }
    }, {
      key: "updateProjectionMatrix",
      value: function updateProjectionMatrix() {
        var t = (this.right - this.left) / (2 * this.zoom),
            e = (this.top - this.bottom) / (2 * this.zoom),
            n = (this.right + this.left) / 2,
            i = (this.top + this.bottom) / 2;
        var r = n - t,
            s = n + t,
            a = i + e,
            o = i - e;

        if (null !== this.view && this.view.enabled) {
          var _t263 = (this.right - this.left) / this.view.fullWidth / this.zoom,
              _e228 = (this.top - this.bottom) / this.view.fullHeight / this.zoom;

          r += _t263 * this.view.offsetX, s = r + _t263 * this.view.width, a -= _e228 * this.view.offsetY, o = a - _e228 * this.view.height;
        }

        this.projectionMatrix.makeOrthographic(r, s, a, o, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
      }
    }, {
      key: "toJSON",
      value: function toJSON(t) {
        var e = be.prototype.toJSON.call(this, t);
        return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e;
      }
    }]);

    return Gl;
  }(kn);

  Gl.prototype.isOrthographicCamera = !0;

  var kl = /*#__PURE__*/function (_Il3) {
    _inherits(kl, _Il3);

    var _super84 = _createSuper(kl);

    function kl() {
      _classCallCheck(this, kl);

      return _super84.call(this, new Gl(-5, 5, 5, -5, .5, 500));
    }

    return kl;
  }(Il);

  kl.prototype.isDirectionalLightShadow = !0;

  var Vl = /*#__PURE__*/function (_Ll4) {
    _inherits(Vl, _Ll4);

    var _super85 = _createSuper(Vl);

    function Vl(t, e) {
      var _this75;

      _classCallCheck(this, Vl);

      _this75 = _super85.call(this, t, e), _this75.type = "DirectionalLight", _this75.position.copy(be.DefaultUp), _this75.updateMatrix(), _this75.target = new be(), _this75.shadow = new kl();
      return _this75;
    }

    _createClass(Vl, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(Vl.prototype), "copy", this).call(this, t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this;
      }
    }]);

    return Vl;
  }(Ll);

  Vl.prototype.isDirectionalLight = !0;

  var Wl = /*#__PURE__*/function (_Ll5) {
    _inherits(Wl, _Ll5);

    var _super86 = _createSuper(Wl);

    function Wl(t, e) {
      var _this76;

      _classCallCheck(this, Wl);

      _this76 = _super86.call(this, t, e), _this76.type = "AmbientLight";
      return _this76;
    }

    return Wl;
  }(Ll);

  Wl.prototype.isAmbientLight = !0;

  var jl = /*#__PURE__*/function (_Ll6) {
    _inherits(jl, _Ll6);

    var _super87 = _createSuper(jl);

    function jl(t, e) {
      var _this77;

      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;

      _classCallCheck(this, jl);

      _this77 = _super87.call(this, t, e), _this77.type = "RectAreaLight", _this77.width = n, _this77.height = i;
      return _this77;
    }

    _createClass(jl, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(jl.prototype), "copy", this).call(this, t), this.width = t.width, this.height = t.height, this;
      }
    }, {
      key: "toJSON",
      value: function toJSON(t) {
        var e = _get(_getPrototypeOf(jl.prototype), "toJSON", this).call(this, t);

        return e.object.width = this.width, e.object.height = this.height, e;
      }
    }]);

    return jl;
  }(Ll);

  jl.prototype.isRectAreaLight = !0;

  var ql = /*#__PURE__*/function () {
    function ql() {
      _classCallCheck(this, ql);

      this.coefficients = [];

      for (var _t264 = 0; _t264 < 9; _t264++) {
        this.coefficients.push(new xt());
      }
    }

    _createClass(ql, [{
      key: "set",
      value: function set(t) {
        for (var _e229 = 0; _e229 < 9; _e229++) {
          this.coefficients[_e229].copy(t[_e229]);
        }

        return this;
      }
    }, {
      key: "zero",
      value: function zero() {
        for (var _t265 = 0; _t265 < 9; _t265++) {
          this.coefficients[_t265].set(0, 0, 0);
        }

        return this;
      }
    }, {
      key: "getAt",
      value: function getAt(t, e) {
        var n = t.x,
            i = t.y,
            r = t.z,
            s = this.coefficients;
        return e.copy(s[0]).multiplyScalar(.282095), e.addScaledVector(s[1], .488603 * i), e.addScaledVector(s[2], .488603 * r), e.addScaledVector(s[3], .488603 * n), e.addScaledVector(s[4], n * i * 1.092548), e.addScaledVector(s[5], i * r * 1.092548), e.addScaledVector(s[6], .315392 * (3 * r * r - 1)), e.addScaledVector(s[7], n * r * 1.092548), e.addScaledVector(s[8], .546274 * (n * n - i * i)), e;
      }
    }, {
      key: "getIrradianceAt",
      value: function getIrradianceAt(t, e) {
        var n = t.x,
            i = t.y,
            r = t.z,
            s = this.coefficients;
        return e.copy(s[0]).multiplyScalar(.886227), e.addScaledVector(s[1], 1.023328 * i), e.addScaledVector(s[2], 1.023328 * r), e.addScaledVector(s[3], 1.023328 * n), e.addScaledVector(s[4], .858086 * n * i), e.addScaledVector(s[5], .858086 * i * r), e.addScaledVector(s[6], .743125 * r * r - .247708), e.addScaledVector(s[7], .858086 * n * r), e.addScaledVector(s[8], .429043 * (n * n - i * i)), e;
      }
    }, {
      key: "add",
      value: function add(t) {
        for (var _e230 = 0; _e230 < 9; _e230++) {
          this.coefficients[_e230].add(t.coefficients[_e230]);
        }

        return this;
      }
    }, {
      key: "addScaledSH",
      value: function addScaledSH(t, e) {
        for (var _n218 = 0; _n218 < 9; _n218++) {
          this.coefficients[_n218].addScaledVector(t.coefficients[_n218], e);
        }

        return this;
      }
    }, {
      key: "scale",
      value: function scale(t) {
        for (var _e231 = 0; _e231 < 9; _e231++) {
          this.coefficients[_e231].multiplyScalar(t);
        }

        return this;
      }
    }, {
      key: "lerp",
      value: function lerp(t, e) {
        for (var _n219 = 0; _n219 < 9; _n219++) {
          this.coefficients[_n219].lerp(t.coefficients[_n219], e);
        }

        return this;
      }
    }, {
      key: "equals",
      value: function equals(t) {
        for (var _e232 = 0; _e232 < 9; _e232++) {
          if (!this.coefficients[_e232].equals(t.coefficients[_e232])) return !1;
        }

        return !0;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this.set(t.coefficients);
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }, {
      key: "fromArray",
      value: function fromArray(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var n = this.coefficients;

        for (var _i166 = 0; _i166 < 9; _i166++) {
          n[_i166].fromArray(t, e + 3 * _i166);
        }

        return this;
      }
    }, {
      key: "toArray",
      value: function toArray() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var n = this.coefficients;

        for (var _i167 = 0; _i167 < 9; _i167++) {
          n[_i167].toArray(t, e + 3 * _i167);
        }

        return t;
      }
    }], [{
      key: "getBasisAt",
      value: function getBasisAt(t, e) {
        var n = t.x,
            i = t.y,
            r = t.z;
        e[0] = .282095, e[1] = .488603 * i, e[2] = .488603 * r, e[3] = .488603 * n, e[4] = 1.092548 * n * i, e[5] = 1.092548 * i * r, e[6] = .315392 * (3 * r * r - 1), e[7] = 1.092548 * n * r, e[8] = .546274 * (n * n - i * i);
      }
    }]);

    return ql;
  }();

  ql.prototype.isSphericalHarmonics3 = !0;

  var Xl = /*#__PURE__*/function (_Ll7) {
    _inherits(Xl, _Ll7);

    var _super88 = _createSuper(Xl);

    function Xl() {
      var _this78;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new ql();
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      _classCallCheck(this, Xl);

      _this78 = _super88.call(this, void 0, e), _this78.sh = t;
      return _this78;
    }

    _createClass(Xl, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(Xl.prototype), "copy", this).call(this, t), this.sh.copy(t.sh), this;
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(t) {
        return this.intensity = t.intensity, this.sh.fromArray(t.sh), this;
      }
    }, {
      key: "toJSON",
      value: function toJSON(t) {
        var e = _get(_getPrototypeOf(Xl.prototype), "toJSON", this).call(this, t);

        return e.object.sh = this.sh.toArray(), e;
      }
    }]);

    return Xl;
  }(Ll);

  Xl.prototype.isLightProbe = !0;

  var Yl = /*#__PURE__*/function (_Qo3) {
    _inherits(Yl, _Qo3);

    var _super89 = _createSuper(Yl);

    function Yl(t) {
      var _this79;

      _classCallCheck(this, Yl);

      _this79 = _super89.call(this, t), _this79.textures = {};
      return _this79;
    }

    _createClass(Yl, [{
      key: "load",
      value: function load(t, e, n, i) {
        var r = this,
            s = new $o(r.manager);
        s.setPath(r.path), s.setRequestHeader(r.requestHeader), s.setWithCredentials(r.withCredentials), s.load(t, function (n) {
          try {
            e(r.parse(JSON.parse(n)));
          } catch (e) {
            i ? i(e) : console.error(e), r.manager.itemError(t);
          }
        }, n, i);
      }
    }, {
      key: "parse",
      value: function parse(t) {
        var e = this.textures;

        function n(t) {
          return void 0 === e[t] && console.warn("THREE.MaterialLoader: Undefined texture", t), e[t];
        }

        var i = new Do[t.type]();
        if (void 0 !== t.uuid && (i.uuid = t.uuid), void 0 !== t.name && (i.name = t.name), void 0 !== t.color && void 0 !== i.color && i.color.setHex(t.color), void 0 !== t.roughness && (i.roughness = t.roughness), void 0 !== t.metalness && (i.metalness = t.metalness), void 0 !== t.sheen && (i.sheen = new je().setHex(t.sheen)), void 0 !== t.emissive && void 0 !== i.emissive && i.emissive.setHex(t.emissive), void 0 !== t.specular && void 0 !== i.specular && i.specular.setHex(t.specular), void 0 !== t.shininess && (i.shininess = t.shininess), void 0 !== t.clearcoat && (i.clearcoat = t.clearcoat), void 0 !== t.clearcoatRoughness && (i.clearcoatRoughness = t.clearcoatRoughness), void 0 !== t.fog && (i.fog = t.fog), void 0 !== t.flatShading && (i.flatShading = t.flatShading), void 0 !== t.blending && (i.blending = t.blending), void 0 !== t.combine && (i.combine = t.combine), void 0 !== t.side && (i.side = t.side), void 0 !== t.shadowSide && (i.shadowSide = t.shadowSide), void 0 !== t.opacity && (i.opacity = t.opacity), void 0 !== t.transparent && (i.transparent = t.transparent), void 0 !== t.alphaTest && (i.alphaTest = t.alphaTest), void 0 !== t.depthTest && (i.depthTest = t.depthTest), void 0 !== t.depthWrite && (i.depthWrite = t.depthWrite), void 0 !== t.colorWrite && (i.colorWrite = t.colorWrite), void 0 !== t.stencilWrite && (i.stencilWrite = t.stencilWrite), void 0 !== t.stencilWriteMask && (i.stencilWriteMask = t.stencilWriteMask), void 0 !== t.stencilFunc && (i.stencilFunc = t.stencilFunc), void 0 !== t.stencilRef && (i.stencilRef = t.stencilRef), void 0 !== t.stencilFuncMask && (i.stencilFuncMask = t.stencilFuncMask), void 0 !== t.stencilFail && (i.stencilFail = t.stencilFail), void 0 !== t.stencilZFail && (i.stencilZFail = t.stencilZFail), void 0 !== t.stencilZPass && (i.stencilZPass = t.stencilZPass), void 0 !== t.wireframe && (i.wireframe = t.wireframe), void 0 !== t.wireframeLinewidth && (i.wireframeLinewidth = t.wireframeLinewidth), void 0 !== t.wireframeLinecap && (i.wireframeLinecap = t.wireframeLinecap), void 0 !== t.wireframeLinejoin && (i.wireframeLinejoin = t.wireframeLinejoin), void 0 !== t.rotation && (i.rotation = t.rotation), 1 !== t.linewidth && (i.linewidth = t.linewidth), void 0 !== t.dashSize && (i.dashSize = t.dashSize), void 0 !== t.gapSize && (i.gapSize = t.gapSize), void 0 !== t.scale && (i.scale = t.scale), void 0 !== t.polygonOffset && (i.polygonOffset = t.polygonOffset), void 0 !== t.polygonOffsetFactor && (i.polygonOffsetFactor = t.polygonOffsetFactor), void 0 !== t.polygonOffsetUnits && (i.polygonOffsetUnits = t.polygonOffsetUnits), void 0 !== t.skinning && (i.skinning = t.skinning), void 0 !== t.morphTargets && (i.morphTargets = t.morphTargets), void 0 !== t.morphNormals && (i.morphNormals = t.morphNormals), void 0 !== t.dithering && (i.dithering = t.dithering), void 0 !== t.alphaToCoverage && (i.alphaToCoverage = t.alphaToCoverage), void 0 !== t.premultipliedAlpha && (i.premultipliedAlpha = t.premultipliedAlpha), void 0 !== t.vertexTangents && (i.vertexTangents = t.vertexTangents), void 0 !== t.visible && (i.visible = t.visible), void 0 !== t.toneMapped && (i.toneMapped = t.toneMapped), void 0 !== t.userData && (i.userData = t.userData), void 0 !== t.vertexColors && ("number" == typeof t.vertexColors ? i.vertexColors = t.vertexColors > 0 : i.vertexColors = t.vertexColors), void 0 !== t.uniforms) for (var _e233 in t.uniforms) {
          var _r121 = t.uniforms[_e233];

          switch (i.uniforms[_e233] = {}, _r121.type) {
            case "t":
              i.uniforms[_e233].value = n(_r121.value);
              break;

            case "c":
              i.uniforms[_e233].value = new je().setHex(_r121.value);
              break;

            case "v2":
              i.uniforms[_e233].value = new lt().fromArray(_r121.value);
              break;

            case "v3":
              i.uniforms[_e233].value = new xt().fromArray(_r121.value);
              break;

            case "v4":
              i.uniforms[_e233].value = new mt().fromArray(_r121.value);
              break;

            case "m3":
              i.uniforms[_e233].value = new ct().fromArray(_r121.value);
              break;

            case "m4":
              i.uniforms[_e233].value = new Jt().fromArray(_r121.value);
              break;

            default:
              i.uniforms[_e233].value = _r121.value;
          }
        }
        if (void 0 !== t.defines && (i.defines = t.defines), void 0 !== t.vertexShader && (i.vertexShader = t.vertexShader), void 0 !== t.fragmentShader && (i.fragmentShader = t.fragmentShader), void 0 !== t.extensions) for (var _e234 in t.extensions) {
          i.extensions[_e234] = t.extensions[_e234];
        }

        if (void 0 !== t.shading && (i.flatShading = 1 === t.shading), void 0 !== t.size && (i.size = t.size), void 0 !== t.sizeAttenuation && (i.sizeAttenuation = t.sizeAttenuation), void 0 !== t.map && (i.map = n(t.map)), void 0 !== t.matcap && (i.matcap = n(t.matcap)), void 0 !== t.alphaMap && (i.alphaMap = n(t.alphaMap)), void 0 !== t.bumpMap && (i.bumpMap = n(t.bumpMap)), void 0 !== t.bumpScale && (i.bumpScale = t.bumpScale), void 0 !== t.normalMap && (i.normalMap = n(t.normalMap)), void 0 !== t.normalMapType && (i.normalMapType = t.normalMapType), void 0 !== t.normalScale) {
          var _e235 = t.normalScale;
          !1 === Array.isArray(_e235) && (_e235 = [_e235, _e235]), i.normalScale = new lt().fromArray(_e235);
        }

        return void 0 !== t.displacementMap && (i.displacementMap = n(t.displacementMap)), void 0 !== t.displacementScale && (i.displacementScale = t.displacementScale), void 0 !== t.displacementBias && (i.displacementBias = t.displacementBias), void 0 !== t.roughnessMap && (i.roughnessMap = n(t.roughnessMap)), void 0 !== t.metalnessMap && (i.metalnessMap = n(t.metalnessMap)), void 0 !== t.emissiveMap && (i.emissiveMap = n(t.emissiveMap)), void 0 !== t.emissiveIntensity && (i.emissiveIntensity = t.emissiveIntensity), void 0 !== t.specularMap && (i.specularMap = n(t.specularMap)), void 0 !== t.envMap && (i.envMap = n(t.envMap)), void 0 !== t.envMapIntensity && (i.envMapIntensity = t.envMapIntensity), void 0 !== t.reflectivity && (i.reflectivity = t.reflectivity), void 0 !== t.refractionRatio && (i.refractionRatio = t.refractionRatio), void 0 !== t.lightMap && (i.lightMap = n(t.lightMap)), void 0 !== t.lightMapIntensity && (i.lightMapIntensity = t.lightMapIntensity), void 0 !== t.aoMap && (i.aoMap = n(t.aoMap)), void 0 !== t.aoMapIntensity && (i.aoMapIntensity = t.aoMapIntensity), void 0 !== t.gradientMap && (i.gradientMap = n(t.gradientMap)), void 0 !== t.clearcoatMap && (i.clearcoatMap = n(t.clearcoatMap)), void 0 !== t.clearcoatRoughnessMap && (i.clearcoatRoughnessMap = n(t.clearcoatRoughnessMap)), void 0 !== t.clearcoatNormalMap && (i.clearcoatNormalMap = n(t.clearcoatNormalMap)), void 0 !== t.clearcoatNormalScale && (i.clearcoatNormalScale = new lt().fromArray(t.clearcoatNormalScale)), void 0 !== t.transmission && (i.transmission = t.transmission), void 0 !== t.transmissionMap && (i.transmissionMap = n(t.transmissionMap)), i;
      }
    }, {
      key: "setTextures",
      value: function setTextures(t) {
        return this.textures = t, this;
      }
    }]);

    return Yl;
  }(Qo);

  var Zl = {
    decodeText: function decodeText(t) {
      if ("undefined" != typeof TextDecoder) return new TextDecoder().decode(t);
      var e = "";

      for (var _n220 = 0, _i168 = t.length; _n220 < _i168; _n220++) {
        e += String.fromCharCode(t[_n220]);
      }

      try {
        return decodeURIComponent(escape(e));
      } catch (t) {
        return e;
      }
    },
    extractUrlBase: function extractUrlBase(t) {
      var e = t.lastIndexOf("/");
      return -1 === e ? "./" : t.substr(0, e + 1);
    }
  };

  function Jl() {
    vn.call(this), this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0;
  }

  function Ql(t, e, n, i) {
    "number" == typeof n && (i = n, n = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), Ze.call(this, t, e, n), this.meshPerAttribute = i || 1;
  }

  Jl.prototype = Object.assign(Object.create(vn.prototype), {
    constructor: Jl,
    isInstancedBufferGeometry: !0,
    copy: function copy(t) {
      return vn.prototype.copy.call(this, t), this.instanceCount = t.instanceCount, this;
    },
    clone: function clone() {
      return new this.constructor().copy(this);
    },
    toJSON: function toJSON() {
      var t = vn.prototype.toJSON.call(this);
      return t.instanceCount = this.instanceCount, t.isInstancedBufferGeometry = !0, t;
    }
  }), Ql.prototype = Object.assign(Object.create(Ze.prototype), {
    constructor: Ql,
    isInstancedBufferAttribute: !0,
    copy: function copy(t) {
      return Ze.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this;
    },
    toJSON: function toJSON() {
      var t = Ze.prototype.toJSON.call(this);
      return t.meshPerAttribute = this.meshPerAttribute, t.isInstancedBufferAttribute = !0, t;
    }
  });

  var Kl = /*#__PURE__*/function (_Qo4) {
    _inherits(Kl, _Qo4);

    var _super90 = _createSuper(Kl);

    function Kl(t) {
      _classCallCheck(this, Kl);

      return _super90.call(this, t);
    }

    _createClass(Kl, [{
      key: "load",
      value: function load(t, e, n, i) {
        var r = this,
            s = new $o(r.manager);
        s.setPath(r.path), s.setRequestHeader(r.requestHeader), s.setWithCredentials(r.withCredentials), s.load(t, function (n) {
          try {
            e(r.parse(JSON.parse(n)));
          } catch (e) {
            i ? i(e) : console.error(e), r.manager.itemError(t);
          }
        }, n, i);
      }
    }, {
      key: "parse",
      value: function parse(t) {
        var e = {},
            n = {};

        function i(t, i) {
          if (void 0 !== e[i]) return e[i];

          var r = t.interleavedBuffers[i],
              s = function (t, e) {
            if (void 0 !== n[e]) return n[e];
            var i = t.arrayBuffers[e],
                r = new Uint32Array(i).buffer;
            return n[e] = r, r;
          }(t, r.buffer),
              a = new gs(cn(r.type, s), r.stride);

          return a.uuid = r.uuid, e[i] = a, a;
        }

        var r = t.isInstancedBufferGeometry ? new Jl() : new vn(),
            s = t.data.index;

        if (void 0 !== s) {
          var _t266 = cn(s.type, s.array);

          r.setIndex(new Ze(_t266, 1));
        }

        var a = t.data.attributes;

        for (var _e236 in a) {
          var _n221 = a[_e236];

          var _s74 = void 0;

          if (_n221.isInterleavedBufferAttribute) {
            _s74 = new ys(i(t.data, _n221.data), _n221.itemSize, _n221.offset, _n221.normalized);
          } else {
            var _t267 = cn(_n221.type, _n221.array);

            _s74 = new (_n221.isInstancedBufferAttribute ? Ql : Ze)(_t267, _n221.itemSize, _n221.normalized);
          }

          void 0 !== _n221.name && (_s74.name = _n221.name), void 0 !== _n221.usage && _s74.setUsage(_n221.usage), void 0 !== _n221.updateRange && (_s74.updateRange.offset = _n221.updateRange.offset, _s74.updateRange.count = _n221.updateRange.count), r.setAttribute(_e236, _s74);
        }

        var o = t.data.morphAttributes;
        if (o) for (var _e237 in o) {
          var _n222 = o[_e237],
              _s75 = [];

          for (var _e238 = 0, _r122 = _n222.length; _e238 < _r122; _e238++) {
            var _r123 = _n222[_e238];

            var _a60 = void 0;

            if (_r123.isInterleavedBufferAttribute) {
              _a60 = new ys(i(t.data, _r123.data), _r123.itemSize, _r123.offset, _r123.normalized);
            } else {
              _a60 = new Ze(cn(_r123.type, _r123.array), _r123.itemSize, _r123.normalized);
            }

            void 0 !== _r123.name && (_a60.name = _r123.name), _s75.push(_a60);
          }

          r.morphAttributes[_e237] = _s75;
        }
        t.data.morphTargetsRelative && (r.morphTargetsRelative = !0);
        var l = t.data.groups || t.data.drawcalls || t.data.offsets;
        if (void 0 !== l) for (var _t268 = 0, _e239 = l.length; _t268 !== _e239; ++_t268) {
          var _e240 = l[_t268];
          r.addGroup(_e240.start, _e240.count, _e240.materialIndex);
        }
        var c = t.data.boundingSphere;

        if (void 0 !== c) {
          var _t269 = new xt();

          void 0 !== c.center && _t269.fromArray(c.center), r.boundingSphere = new Gt(_t269, c.radius);
        }

        return t.name && (r.name = t.name), t.userData && (r.userData = t.userData), r;
      }
    }]);

    return Kl;
  }(Qo);

  var $l = {
    UVMapping: i,
    CubeReflectionMapping: r,
    CubeRefractionMapping: s,
    EquirectangularReflectionMapping: a,
    EquirectangularRefractionMapping: o,
    CubeUVReflectionMapping: l,
    CubeUVRefractionMapping: c
  },
      tc = {
    RepeatWrapping: h,
    ClampToEdgeWrapping: u,
    MirroredRepeatWrapping: d
  },
      ec = {
    NearestFilter: p,
    NearestMipmapNearestFilter: f,
    NearestMipmapLinearFilter: m,
    LinearFilter: g,
    LinearMipmapNearestFilter: v,
    LinearMipmapLinearFilter: y
  };

  function nc(t) {
    "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), Qo.call(this, t), this.options = {
      premultiplyAlpha: "none"
    };
  }

  nc.prototype = Object.assign(Object.create(Qo.prototype), {
    constructor: nc,
    isImageBitmapLoader: !0,
    setOptions: function setOptions(t) {
      return this.options = t, this;
    },
    load: function load(t, e, n, i) {
      void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
      var r = this,
          s = Yo.get(t);
      if (void 0 !== s) return r.manager.itemStart(t), setTimeout(function () {
        e && e(s), r.manager.itemEnd(t);
      }, 0), s;
      var a = {};
      a.credentials = "anonymous" === this.crossOrigin ? "same-origin" : "include", a.headers = this.requestHeader, fetch(t, a).then(function (t) {
        return t.blob();
      }).then(function (t) {
        return createImageBitmap(t, Object.assign(r.options, {
          colorSpaceConversion: "none"
        }));
      }).then(function (n) {
        Yo.add(t, n), e && e(n), r.manager.itemEnd(t);
      }).catch(function (e) {
        i && i(e), r.manager.itemError(t), r.manager.itemEnd(t);
      }), r.manager.itemStart(t);
    }
  });

  var ic = /*#__PURE__*/function () {
    function ic() {
      _classCallCheck(this, ic);

      this.type = "ShapePath", this.color = new je(), this.subPaths = [], this.currentPath = null;
    }

    _createClass(ic, [{
      key: "moveTo",
      value: function moveTo(t, e) {
        return this.currentPath = new El(), this.subPaths.push(this.currentPath), this.currentPath.moveTo(t, e), this;
      }
    }, {
      key: "lineTo",
      value: function lineTo(t, e) {
        return this.currentPath.lineTo(t, e), this;
      }
    }, {
      key: "quadraticCurveTo",
      value: function quadraticCurveTo(t, e, n, i) {
        return this.currentPath.quadraticCurveTo(t, e, n, i), this;
      }
    }, {
      key: "bezierCurveTo",
      value: function bezierCurveTo(t, e, n, i, r, s) {
        return this.currentPath.bezierCurveTo(t, e, n, i, r, s), this;
      }
    }, {
      key: "splineThru",
      value: function splineThru(t) {
        return this.currentPath.splineThru(t), this;
      }
    }, {
      key: "toShapes",
      value: function toShapes(t, e) {
        function n(t) {
          var e = [];

          for (var _n223 = 0, _i169 = t.length; _n223 < _i169; _n223++) {
            var _i170 = t[_n223],
                _r124 = new Al();

            _r124.curves = _i170.curves, e.push(_r124);
          }

          return e;
        }

        function i(t, e) {
          var n = e.length;
          var i = !1;

          for (var _r125 = n - 1, _s76 = 0; _s76 < n; _r125 = _s76++) {
            var _n224 = e[_r125],
                _a61 = e[_s76],
                _o36 = _a61.x - _n224.x,
                _l28 = _a61.y - _n224.y;

            if (Math.abs(_l28) > Number.EPSILON) {
              if (_l28 < 0 && (_n224 = e[_s76], _o36 = -_o36, _a61 = e[_r125], _l28 = -_l28), t.y < _n224.y || t.y > _a61.y) continue;

              if (t.y === _n224.y) {
                if (t.x === _n224.x) return !0;
              } else {
                var _e241 = _l28 * (t.x - _n224.x) - _o36 * (t.y - _n224.y);

                if (0 === _e241) return !0;
                if (_e241 < 0) continue;
                i = !i;
              }
            } else {
              if (t.y !== _n224.y) continue;
              if (_a61.x <= t.x && t.x <= _n224.x || _n224.x <= t.x && t.x <= _a61.x) return !0;
            }
          }

          return i;
        }

        var r = no.isClockWise,
            s = this.subPaths;
        if (0 === s.length) return [];
        if (!0 === e) return n(s);
        var a, o, l;
        var c = [];
        if (1 === s.length) return o = s[0], l = new Al(), l.curves = o.curves, c.push(l), c;
        var h = !r(s[0].getPoints());
        h = t ? !h : h;
        var u = [],
            d = [];
        var p,
            f,
            m = [],
            g = 0;
        d[g] = void 0, m[g] = [];

        for (var _e242 = 0, _n225 = s.length; _e242 < _n225; _e242++) {
          o = s[_e242], p = o.getPoints(), a = r(p), a = t ? !a : a, a ? (!h && d[g] && g++, d[g] = {
            s: new Al(),
            p: p
          }, d[g].s.curves = o.curves, h && g++, m[g] = []) : m[g].push({
            h: o,
            p: p[0]
          });
        }

        if (!d[0]) return n(s);

        if (d.length > 1) {
          var _t270 = !1;

          var _e243 = [];

          for (var _t271 = 0, _e244 = d.length; _t271 < _e244; _t271++) {
            u[_t271] = [];
          }

          for (var _n226 = 0, _r126 = d.length; _n226 < _r126; _n226++) {
            var _r127 = m[_n226];

            for (var _s77 = 0; _s77 < _r127.length; _s77++) {
              var _a62 = _r127[_s77];

              var _o37 = !0;

              for (var _r128 = 0; _r128 < d.length; _r128++) {
                i(_a62.p, d[_r128].p) && (_n226 !== _r128 && _e243.push({
                  froms: _n226,
                  tos: _r128,
                  hole: _s77
                }), _o37 ? (_o37 = !1, u[_r128].push(_a62)) : _t270 = !0);
              }

              _o37 && u[_n226].push(_a62);
            }
          }

          _e243.length > 0 && (_t270 || (m = u));
        }

        for (var _t272 = 0, _e245 = d.length; _t272 < _e245; _t272++) {
          l = d[_t272].s, c.push(l), f = m[_t272];

          for (var _t273 = 0, _e246 = f.length; _t273 < _e246; _t273++) {
            l.holes.push(f[_t273].h);
          }
        }

        return c;
      }
    }]);

    return ic;
  }();

  var rc = /*#__PURE__*/function () {
    function rc(t) {
      _classCallCheck(this, rc);

      this.type = "Font", this.data = t;
    }

    _createClass(rc, [{
      key: "generateShapes",
      value: function generateShapes(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

        var n = [],
            i = function (t, e, n) {
          var i = Array.from(t),
              r = e / n.resolution,
              s = (n.boundingBox.yMax - n.boundingBox.yMin + n.underlineThickness) * r,
              a = [];
          var o = 0,
              l = 0;

          for (var _t274 = 0; _t274 < i.length; _t274++) {
            var _e247 = i[_t274];
            if ("\n" === _e247) o = 0, l -= s;else {
              var _t275 = sc(_e247, r, o, l, n);

              o += _t275.offsetX, a.push(_t275.path);
            }
          }

          return a;
        }(t, e, this.data);

        for (var _t276 = 0, _e248 = i.length; _t276 < _e248; _t276++) {
          Array.prototype.push.apply(n, i[_t276].toShapes());
        }

        return n;
      }
    }]);

    return rc;
  }();

  function sc(t, e, n, i, r) {
    var s = r.glyphs[t] || r.glyphs["?"];
    if (!s) return void console.error('THREE.Font: character "' + t + '" does not exists in font family ' + r.familyName + ".");
    var a = new ic();
    var o, l, c, h, u, d, p, f;

    if (s.o) {
      var _t277 = s._cachedOutline || (s._cachedOutline = s.o.split(" "));

      for (var _r129 = 0, _s78 = _t277.length; _r129 < _s78;) {
        switch (_t277[_r129++]) {
          case "m":
            o = _t277[_r129++] * e + n, l = _t277[_r129++] * e + i, a.moveTo(o, l);
            break;

          case "l":
            o = _t277[_r129++] * e + n, l = _t277[_r129++] * e + i, a.lineTo(o, l);
            break;

          case "q":
            c = _t277[_r129++] * e + n, h = _t277[_r129++] * e + i, u = _t277[_r129++] * e + n, d = _t277[_r129++] * e + i, a.quadraticCurveTo(u, d, c, h);
            break;

          case "b":
            c = _t277[_r129++] * e + n, h = _t277[_r129++] * e + i, u = _t277[_r129++] * e + n, d = _t277[_r129++] * e + i, p = _t277[_r129++] * e + n, f = _t277[_r129++] * e + i, a.bezierCurveTo(u, d, p, f, c, h);
        }
      }
    }

    return {
      offsetX: s.ha * e,
      path: a
    };
  }

  rc.prototype.isFont = !0;
  var ac;
  var oc = {
    getContext: function getContext() {
      return void 0 === ac && (ac = new (window.AudioContext || window.webkitAudioContext)()), ac;
    },
    setContext: function setContext(t) {
      ac = t;
    }
  };

  var lc = /*#__PURE__*/function (_Qo5) {
    _inherits(lc, _Qo5);

    var _super91 = _createSuper(lc);

    function lc(t) {
      _classCallCheck(this, lc);

      return _super91.call(this, t);
    }

    _createClass(lc, [{
      key: "load",
      value: function load(t, e, n, i) {
        var r = this,
            s = new $o(this.manager);
        s.setResponseType("arraybuffer"), s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(t, function (n) {
          try {
            var _t278 = n.slice(0);

            oc.getContext().decodeAudioData(_t278, function (t) {
              e(t);
            });
          } catch (e) {
            i ? i(e) : console.error(e), r.manager.itemError(t);
          }
        }, n, i);
      }
    }]);

    return lc;
  }(Qo);

  var cc = /*#__PURE__*/function (_Xl) {
    _inherits(cc, _Xl);

    var _super92 = _createSuper(cc);

    function cc(t, e) {
      var _this80;

      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

      _classCallCheck(this, cc);

      _this80 = _super92.call(this, void 0, n);
      var i = new je().set(t),
          r = new je().set(e),
          s = new xt(i.r, i.g, i.b),
          a = new xt(r.r, r.g, r.b),
          o = Math.sqrt(Math.PI),
          l = o * Math.sqrt(.75);
      _this80.sh.coefficients[0].copy(s).add(a).multiplyScalar(o), _this80.sh.coefficients[1].copy(s).sub(a).multiplyScalar(l);
      return _this80;
    }

    return cc;
  }(Xl);

  cc.prototype.isHemisphereLightProbe = !0;

  var hc = /*#__PURE__*/function (_Xl2) {
    _inherits(hc, _Xl2);

    var _super93 = _createSuper(hc);

    function hc(t) {
      var _this81;

      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      _classCallCheck(this, hc);

      _this81 = _super93.call(this, void 0, e);
      var n = new je().set(t);

      _this81.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI));

      return _this81;
    }

    return hc;
  }(Xl);

  hc.prototype.isAmbientLightProbe = !0;
  var uc = new Jt(),
      dc = new Jt();

  var pc = /*#__PURE__*/function () {
    function pc(t) {
      _classCallCheck(this, pc);

      this.autoStart = void 0 === t || t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
    }

    _createClass(pc, [{
      key: "start",
      value: function start() {
        this.startTime = fc(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
      }
    }, {
      key: "stop",
      value: function stop() {
        this.getElapsedTime(), this.running = !1, this.autoStart = !1;
      }
    }, {
      key: "getElapsedTime",
      value: function getElapsedTime() {
        return this.getDelta(), this.elapsedTime;
      }
    }, {
      key: "getDelta",
      value: function getDelta() {
        var t = 0;
        if (this.autoStart && !this.running) return this.start(), 0;

        if (this.running) {
          var _e249 = fc();

          t = (_e249 - this.oldTime) / 1e3, this.oldTime = _e249, this.elapsedTime += t;
        }

        return t;
      }
    }]);

    return pc;
  }();

  function fc() {
    return ("undefined" == typeof performance ? Date : performance).now();
  }

  var mc = new xt(),
      gc = new yt(),
      vc = new xt(),
      yc = new xt();

  var xc = /*#__PURE__*/function (_be7) {
    _inherits(xc, _be7);

    var _super94 = _createSuper(xc);

    function xc(t) {
      var _this82;

      _classCallCheck(this, xc);

      _this82 = _super94.call(this), _this82.type = "Audio", _this82.listener = t, _this82.context = t.context, _this82.gain = _this82.context.createGain(), _this82.gain.connect(t.getInput()), _this82.autoplay = !1, _this82.buffer = null, _this82.detune = 0, _this82.loop = !1, _this82.loopStart = 0, _this82.loopEnd = 0, _this82.offset = 0, _this82.duration = void 0, _this82.playbackRate = 1, _this82.isPlaying = !1, _this82.hasPlaybackControl = !0, _this82.source = null, _this82.sourceType = "empty", _this82._startedAt = 0, _this82._progress = 0, _this82._connected = !1, _this82.filters = [];
      return _this82;
    }

    _createClass(xc, [{
      key: "getOutput",
      value: function getOutput() {
        return this.gain;
      }
    }, {
      key: "setNodeSource",
      value: function setNodeSource(t) {
        return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t, this.connect(), this;
      }
    }, {
      key: "setMediaElementSource",
      value: function setMediaElementSource(t) {
        return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(t), this.connect(), this;
      }
    }, {
      key: "setMediaStreamSource",
      value: function setMediaStreamSource(t) {
        return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(t), this.connect(), this;
      }
    }, {
      key: "setBuffer",
      value: function setBuffer(t) {
        return this.buffer = t, this.sourceType = "buffer", this.autoplay && this.play(), this;
      }
    }, {
      key: "play",
      value: function play() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        if (!0 === this.isPlaying) return void console.warn("THREE.Audio: Audio is already playing.");
        if (!1 === this.hasPlaybackControl) return void console.warn("THREE.Audio: this Audio has no playback control.");
        this._startedAt = this.context.currentTime + t;
        var e = this.context.createBufferSource();
        return e.buffer = this.buffer, e.loop = this.loop, e.loopStart = this.loopStart, e.loopEnd = this.loopEnd, e.onended = this.onEnded.bind(this), e.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = e, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect();
      }
    }, {
      key: "pause",
      value: function pause() {
        if (!1 !== this.hasPlaybackControl) return !0 === this.isPlaying && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, !0 === this.loop && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = !1), this;
        console.warn("THREE.Audio: this Audio has no playback control.");
      }
    }, {
      key: "stop",
      value: function stop() {
        if (!1 !== this.hasPlaybackControl) return this._progress = 0, this.source.stop(), this.source.onended = null, this.isPlaying = !1, this;
        console.warn("THREE.Audio: this Audio has no playback control.");
      }
    }, {
      key: "connect",
      value: function connect() {
        if (this.filters.length > 0) {
          this.source.connect(this.filters[0]);

          for (var _t279 = 1, _e250 = this.filters.length; _t279 < _e250; _t279++) {
            this.filters[_t279 - 1].connect(this.filters[_t279]);
          }

          this.filters[this.filters.length - 1].connect(this.getOutput());
        } else this.source.connect(this.getOutput());

        return this._connected = !0, this;
      }
    }, {
      key: "disconnect",
      value: function disconnect() {
        if (this.filters.length > 0) {
          this.source.disconnect(this.filters[0]);

          for (var _t280 = 1, _e251 = this.filters.length; _t280 < _e251; _t280++) {
            this.filters[_t280 - 1].disconnect(this.filters[_t280]);
          }

          this.filters[this.filters.length - 1].disconnect(this.getOutput());
        } else this.source.disconnect(this.getOutput());

        return this._connected = !1, this;
      }
    }, {
      key: "getFilters",
      value: function getFilters() {
        return this.filters;
      }
    }, {
      key: "setFilters",
      value: function setFilters(t) {
        return t || (t = []), !0 === this._connected ? (this.disconnect(), this.filters = t.slice(), this.connect()) : this.filters = t.slice(), this;
      }
    }, {
      key: "setDetune",
      value: function setDetune(t) {
        if (this.detune = t, void 0 !== this.source.detune) return !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this;
      }
    }, {
      key: "getDetune",
      value: function getDetune() {
        return this.detune;
      }
    }, {
      key: "getFilter",
      value: function getFilter() {
        return this.getFilters()[0];
      }
    }, {
      key: "setFilter",
      value: function setFilter(t) {
        return this.setFilters(t ? [t] : []);
      }
    }, {
      key: "setPlaybackRate",
      value: function setPlaybackRate(t) {
        if (!1 !== this.hasPlaybackControl) return this.playbackRate = t, !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this;
        console.warn("THREE.Audio: this Audio has no playback control.");
      }
    }, {
      key: "getPlaybackRate",
      value: function getPlaybackRate() {
        return this.playbackRate;
      }
    }, {
      key: "onEnded",
      value: function onEnded() {
        this.isPlaying = !1;
      }
    }, {
      key: "getLoop",
      value: function getLoop() {
        return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop;
      }
    }, {
      key: "setLoop",
      value: function setLoop(t) {
        if (!1 !== this.hasPlaybackControl) return this.loop = t, !0 === this.isPlaying && (this.source.loop = this.loop), this;
        console.warn("THREE.Audio: this Audio has no playback control.");
      }
    }, {
      key: "setLoopStart",
      value: function setLoopStart(t) {
        return this.loopStart = t, this;
      }
    }, {
      key: "setLoopEnd",
      value: function setLoopEnd(t) {
        return this.loopEnd = t, this;
      }
    }, {
      key: "getVolume",
      value: function getVolume() {
        return this.gain.gain.value;
      }
    }, {
      key: "setVolume",
      value: function setVolume(t) {
        return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this;
      }
    }]);

    return xc;
  }(be);

  var _c = new xt(),
      bc = new yt(),
      wc = new xt(),
      Mc = new xt();

  var Sc = /*#__PURE__*/function () {
    function Sc(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2048;

      _classCallCheck(this, Sc);

      this.analyser = t.context.createAnalyser(), this.analyser.fftSize = e, this.data = new Uint8Array(this.analyser.frequencyBinCount), t.getOutput().connect(this.analyser);
    }

    _createClass(Sc, [{
      key: "getFrequencyData",
      value: function getFrequencyData() {
        return this.analyser.getByteFrequencyData(this.data), this.data;
      }
    }, {
      key: "getAverageFrequency",
      value: function getAverageFrequency() {
        var t = 0;
        var e = this.getFrequencyData();

        for (var _n227 = 0; _n227 < e.length; _n227++) {
          t += e[_n227];
        }

        return t / e.length;
      }
    }]);

    return Sc;
  }();

  var Tc = /*#__PURE__*/function () {
    function Tc(t, e, n) {
      _classCallCheck(this, Tc);

      var i, r, s;

      switch (this.binding = t, this.valueSize = n, e) {
        case "quaternion":
          i = this._slerp, r = this._slerpAdditive, s = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(6 * n), this._workIndex = 5;
          break;

        case "string":
        case "bool":
          i = this._select, r = this._select, s = this._setAdditiveIdentityOther, this.buffer = new Array(5 * n);
          break;

        default:
          i = this._lerp, r = this._lerpAdditive, s = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(5 * n);
      }

      this._mixBufferRegion = i, this._mixBufferRegionAdditive = r, this._setIdentity = s, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
    }

    _createClass(Tc, [{
      key: "accumulate",
      value: function accumulate(t, e) {
        var n = this.buffer,
            i = this.valueSize,
            r = t * i + i;
        var s = this.cumulativeWeight;

        if (0 === s) {
          for (var _t281 = 0; _t281 !== i; ++_t281) {
            n[r + _t281] = n[_t281];
          }

          s = e;
        } else {
          s += e;

          var _t282 = e / s;

          this._mixBufferRegion(n, r, 0, _t282, i);
        }

        this.cumulativeWeight = s;
      }
    }, {
      key: "accumulateAdditive",
      value: function accumulateAdditive(t) {
        var e = this.buffer,
            n = this.valueSize,
            i = n * this._addIndex;
        0 === this.cumulativeWeightAdditive && this._setIdentity(), this._mixBufferRegionAdditive(e, i, 0, t, n), this.cumulativeWeightAdditive += t;
      }
    }, {
      key: "apply",
      value: function apply(t) {
        var e = this.valueSize,
            n = this.buffer,
            i = t * e + e,
            r = this.cumulativeWeight,
            s = this.cumulativeWeightAdditive,
            a = this.binding;

        if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, r < 1) {
          var _t283 = e * this._origIndex;

          this._mixBufferRegion(n, i, _t283, 1 - r, e);
        }

        s > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * e, 1, e);

        for (var _t284 = e, _r130 = e + e; _t284 !== _r130; ++_t284) {
          if (n[_t284] !== n[_t284 + e]) {
            a.setValue(n, i);
            break;
          }
        }
      }
    }, {
      key: "saveOriginalState",
      value: function saveOriginalState() {
        var t = this.binding,
            e = this.buffer,
            n = this.valueSize,
            i = n * this._origIndex;
        t.getValue(e, i);

        for (var _t285 = n, _r131 = i; _t285 !== _r131; ++_t285) {
          e[_t285] = e[i + _t285 % n];
        }

        this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0;
      }
    }, {
      key: "restoreOriginalState",
      value: function restoreOriginalState() {
        var t = 3 * this.valueSize;
        this.binding.setValue(this.buffer, t);
      }
    }, {
      key: "_setAdditiveIdentityNumeric",
      value: function _setAdditiveIdentityNumeric() {
        var t = this._addIndex * this.valueSize,
            e = t + this.valueSize;

        for (var _n228 = t; _n228 < e; _n228++) {
          this.buffer[_n228] = 0;
        }
      }
    }, {
      key: "_setAdditiveIdentityQuaternion",
      value: function _setAdditiveIdentityQuaternion() {
        this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1;
      }
    }, {
      key: "_setAdditiveIdentityOther",
      value: function _setAdditiveIdentityOther() {
        var t = this._origIndex * this.valueSize,
            e = this._addIndex * this.valueSize;

        for (var _n229 = 0; _n229 < this.valueSize; _n229++) {
          this.buffer[e + _n229] = this.buffer[t + _n229];
        }
      }
    }, {
      key: "_select",
      value: function _select(t, e, n, i, r) {
        if (i >= .5) for (var _i171 = 0; _i171 !== r; ++_i171) {
          t[e + _i171] = t[n + _i171];
        }
      }
    }, {
      key: "_slerp",
      value: function _slerp(t, e, n, i) {
        yt.slerpFlat(t, e, t, e, t, n, i);
      }
    }, {
      key: "_slerpAdditive",
      value: function _slerpAdditive(t, e, n, i, r) {
        var s = this._workIndex * r;
        yt.multiplyQuaternionsFlat(t, s, t, e, t, n), yt.slerpFlat(t, e, t, e, t, s, i);
      }
    }, {
      key: "_lerp",
      value: function _lerp(t, e, n, i, r) {
        var s = 1 - i;

        for (var _a63 = 0; _a63 !== r; ++_a63) {
          var _r132 = e + _a63;

          t[_r132] = t[_r132] * s + t[n + _a63] * i;
        }
      }
    }, {
      key: "_lerpAdditive",
      value: function _lerpAdditive(t, e, n, i, r) {
        for (var _s79 = 0; _s79 !== r; ++_s79) {
          var _r133 = e + _s79;

          t[_r133] = t[_r133] + t[n + _s79] * i;
        }
      }
    }]);

    return Tc;
  }();

  var Ec = "\\[\\]\\.:\\/",
      Ac = new RegExp("[\\[\\]\\.:\\/]", "g"),
      Lc = "[^\\[\\]\\.:\\/]",
      Rc = "[^" + Ec.replace("\\.", "") + "]",
      Cc = /((?:WC+[\/:])*)/.source.replace("WC", Lc),
      Pc = /(WCOD+)?/.source.replace("WCOD", Rc),
      Dc = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Lc),
      Ic = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Lc),
      Nc = new RegExp("^" + Cc + Pc + Dc + Ic + "$"),
      Bc = ["material", "materials", "bones"];

  function Oc(t, e, n) {
    var i = n || zc.parseTrackName(e);
    this._targetGroup = t, this._bindings = t.subscribe_(e, i);
  }

  function zc(t, e, n) {
    this.path = e, this.parsedPath = n || zc.parseTrackName(e), this.node = zc.findNode(t, this.parsedPath.nodeName) || t, this.rootNode = t;
  }

  Object.assign(Oc.prototype, {
    getValue: function getValue(t, e) {
      this.bind();
      var n = this._targetGroup.nCachedObjects_,
          i = this._bindings[n];
      void 0 !== i && i.getValue(t, e);
    },
    setValue: function setValue(t, e) {
      var n = this._bindings;

      for (var _i172 = this._targetGroup.nCachedObjects_, _r134 = n.length; _i172 !== _r134; ++_i172) {
        n[_i172].setValue(t, e);
      }
    },
    bind: function bind() {
      var t = this._bindings;

      for (var _e252 = this._targetGroup.nCachedObjects_, _n230 = t.length; _e252 !== _n230; ++_e252) {
        t[_e252].bind();
      }
    },
    unbind: function unbind() {
      var t = this._bindings;

      for (var _e253 = this._targetGroup.nCachedObjects_, _n231 = t.length; _e253 !== _n231; ++_e253) {
        t[_e253].unbind();
      }
    }
  }), Object.assign(zc, {
    Composite: Oc,
    create: function create(t, e, n) {
      return t && t.isAnimationObjectGroup ? new zc.Composite(t, e, n) : new zc(t, e, n);
    },
    sanitizeNodeName: function sanitizeNodeName(t) {
      return t.replace(/\s/g, "_").replace(Ac, "");
    },
    parseTrackName: function parseTrackName(t) {
      var e = Nc.exec(t);
      if (!e) throw new Error("PropertyBinding: Cannot parse trackName: " + t);
      var n = {
        nodeName: e[2],
        objectName: e[3],
        objectIndex: e[4],
        propertyName: e[5],
        propertyIndex: e[6]
      },
          i = n.nodeName && n.nodeName.lastIndexOf(".");

      if (void 0 !== i && -1 !== i) {
        var _t286 = n.nodeName.substring(i + 1);

        -1 !== Bc.indexOf(_t286) && (n.nodeName = n.nodeName.substring(0, i), n.objectName = _t286);
      }

      if (null === n.propertyName || 0 === n.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
      return n;
    },
    findNode: function findNode(t, e) {
      if (!e || "" === e || "." === e || -1 === e || e === t.name || e === t.uuid) return t;

      if (t.skeleton) {
        var _n232 = t.skeleton.getBoneByName(e);

        if (void 0 !== _n232) return _n232;
      }

      if (t.children) {
        var _n233 = function _n233(t) {
          for (var _i174 = 0; _i174 < t.length; _i174++) {
            var _r135 = t[_i174];
            if (_r135.name === e || _r135.uuid === e) return _r135;

            var _s80 = _n233(_r135.children);

            if (_s80) return _s80;
          }

          return null;
        },
            _i173 = _n233(t.children);

        if (_i173) return _i173;
      }

      return null;
    }
  }), Object.assign(zc.prototype, {
    _getValue_unavailable: function _getValue_unavailable() {},
    _setValue_unavailable: function _setValue_unavailable() {},
    BindingType: {
      Direct: 0,
      EntireArray: 1,
      ArrayElement: 2,
      HasFromToArray: 3
    },
    Versioning: {
      None: 0,
      NeedsUpdate: 1,
      MatrixWorldNeedsUpdate: 2
    },
    GetterByBindingType: [function (t, e) {
      t[e] = this.node[this.propertyName];
    }, function (t, e) {
      var n = this.resolvedProperty;

      for (var _i175 = 0, _r136 = n.length; _i175 !== _r136; ++_i175) {
        t[e++] = n[_i175];
      }
    }, function (t, e) {
      t[e] = this.resolvedProperty[this.propertyIndex];
    }, function (t, e) {
      this.resolvedProperty.toArray(t, e);
    }],
    SetterByBindingTypeAndVersioning: [[function (t, e) {
      this.targetObject[this.propertyName] = t[e];
    }, function (t, e) {
      this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0;
    }, function (t, e) {
      this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0;
    }], [function (t, e) {
      var n = this.resolvedProperty;

      for (var _i176 = 0, _r137 = n.length; _i176 !== _r137; ++_i176) {
        n[_i176] = t[e++];
      }
    }, function (t, e) {
      var n = this.resolvedProperty;

      for (var _i177 = 0, _r138 = n.length; _i177 !== _r138; ++_i177) {
        n[_i177] = t[e++];
      }

      this.targetObject.needsUpdate = !0;
    }, function (t, e) {
      var n = this.resolvedProperty;

      for (var _i178 = 0, _r139 = n.length; _i178 !== _r139; ++_i178) {
        n[_i178] = t[e++];
      }

      this.targetObject.matrixWorldNeedsUpdate = !0;
    }], [function (t, e) {
      this.resolvedProperty[this.propertyIndex] = t[e];
    }, function (t, e) {
      this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0;
    }, function (t, e) {
      this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0;
    }], [function (t, e) {
      this.resolvedProperty.fromArray(t, e);
    }, function (t, e) {
      this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0;
    }, function (t, e) {
      this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0;
    }]],
    getValue: function getValue(t, e) {
      this.bind(), this.getValue(t, e);
    },
    setValue: function setValue(t, e) {
      this.bind(), this.setValue(t, e);
    },
    bind: function bind() {
      var t = this.node;
      var e = this.parsedPath,
          n = e.objectName,
          i = e.propertyName;
      var r = e.propertyIndex;
      if (t || (t = zc.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) return void console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");

      if (n) {
        var _i179 = e.objectIndex;

        switch (n) {
          case "materials":
            if (!t.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            if (!t.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            t = t.material.materials;
            break;

          case "bones":
            if (!t.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            t = t.skeleton.bones;

            for (var _e254 = 0; _e254 < t.length; _e254++) {
              if (t[_e254].name === _i179) {
                _i179 = _e254;
                break;
              }
            }

            break;

          default:
            if (void 0 === t[n]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            t = t[n];
        }

        if (void 0 !== _i179) {
          if (void 0 === t[_i179]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
          t = t[_i179];
        }
      }

      var s = t[i];

      if (void 0 === s) {
        var _n234 = e.nodeName;
        return void console.error("THREE.PropertyBinding: Trying to update property for track: " + _n234 + "." + i + " but it wasn't found.", t);
      }

      var a = this.Versioning.None;
      this.targetObject = t, void 0 !== t.needsUpdate ? a = this.Versioning.NeedsUpdate : void 0 !== t.matrixWorldNeedsUpdate && (a = this.Versioning.MatrixWorldNeedsUpdate);
      var o = this.BindingType.Direct;

      if (void 0 !== r) {
        if ("morphTargetInfluences" === i) {
          if (!t.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          if (!t.geometry.isBufferGeometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.", this);
          if (!t.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          void 0 !== t.morphTargetDictionary[r] && (r = t.morphTargetDictionary[r]);
        }

        o = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r;
      } else void 0 !== s.fromArray && void 0 !== s.toArray ? (o = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (o = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = i;

      this.getValue = this.GetterByBindingType[o], this.setValue = this.SetterByBindingTypeAndVersioning[o][a];
    },
    unbind: function unbind() {
      this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
    }
  }), Object.assign(zc.prototype, {
    _getValue_unbound: zc.prototype.getValue,
    _setValue_unbound: zc.prototype.setValue
  });

  var Fc = /*#__PURE__*/function () {
    function Fc() {
      _classCallCheck(this, Fc);

      this.uuid = ot.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
      var t = {};
      this._indicesByUUID = t;

      for (var _e255 = 0, _n235 = arguments.length; _e255 !== _n235; ++_e255) {
        t[arguments[_e255].uuid] = _e255;
      }

      this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
      var e = this;
      this.stats = {
        objects: {
          get total() {
            return e._objects.length;
          },

          get inUse() {
            return this.total - e.nCachedObjects_;
          }

        },

        get bindingsPerObject() {
          return e._bindings.length;
        }

      };
    }

    _createClass(Fc, [{
      key: "add",
      value: function add() {
        var t = this._objects,
            e = this._indicesByUUID,
            n = this._paths,
            i = this._parsedPaths,
            r = this._bindings,
            s = r.length;
        var a,
            o = t.length,
            l = this.nCachedObjects_;

        for (var _c20 = 0, _h10 = arguments.length; _c20 !== _h10; ++_c20) {
          var _h11 = arguments[_c20],
              _u13 = _h11.uuid;
          var _d16 = e[_u13];

          if (void 0 === _d16) {
            _d16 = o++, e[_u13] = _d16, t.push(_h11);

            for (var _t287 = 0, _e256 = s; _t287 !== _e256; ++_t287) {
              r[_t287].push(new zc(_h11, n[_t287], i[_t287]));
            }
          } else if (_d16 < l) {
            a = t[_d16];

            var _o38 = --l,
                _c21 = t[_o38];

            e[_c21.uuid] = _d16, t[_d16] = _c21, e[_u13] = _o38, t[_o38] = _h11;

            for (var _t288 = 0, _e257 = s; _t288 !== _e257; ++_t288) {
              var _e258 = r[_t288],
                  _s81 = _e258[_o38];
              var _a64 = _e258[_d16];
              _e258[_d16] = _s81, void 0 === _a64 && (_a64 = new zc(_h11, n[_t288], i[_t288])), _e258[_o38] = _a64;
            }
          } else t[_d16] !== a && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.");
        }

        this.nCachedObjects_ = l;
      }
    }, {
      key: "remove",
      value: function remove() {
        var t = this._objects,
            e = this._indicesByUUID,
            n = this._bindings,
            i = n.length;
        var r = this.nCachedObjects_;

        for (var _s82 = 0, _a65 = arguments.length; _s82 !== _a65; ++_s82) {
          var _a66 = arguments[_s82],
              _o39 = _a66.uuid,
              _l29 = e[_o39];

          if (void 0 !== _l29 && _l29 >= r) {
            var _s83 = r++,
                _c22 = t[_s83];

            e[_c22.uuid] = _l29, t[_l29] = _c22, e[_o39] = _s83, t[_s83] = _a66;

            for (var _t289 = 0, _e259 = i; _t289 !== _e259; ++_t289) {
              var _e260 = n[_t289],
                  _i180 = _e260[_s83],
                  _r140 = _e260[_l29];
              _e260[_l29] = _i180, _e260[_s83] = _r140;
            }
          }
        }

        this.nCachedObjects_ = r;
      }
    }, {
      key: "uncache",
      value: function uncache() {
        var t = this._objects,
            e = this._indicesByUUID,
            n = this._bindings,
            i = n.length;
        var r = this.nCachedObjects_,
            s = t.length;

        for (var _a67 = 0, _o40 = arguments.length; _a67 !== _o40; ++_a67) {
          var _o41 = arguments[_a67].uuid,
              _l30 = e[_o41];
          if (void 0 !== _l30) if (delete e[_o41], _l30 < r) {
            var _a68 = --r,
                _o42 = t[_a68],
                _c23 = --s,
                _h12 = t[_c23];

            e[_o42.uuid] = _l30, t[_l30] = _o42, e[_h12.uuid] = _a68, t[_a68] = _h12, t.pop();

            for (var _t290 = 0, _e261 = i; _t290 !== _e261; ++_t290) {
              var _e262 = n[_t290],
                  _i181 = _e262[_a68],
                  _r141 = _e262[_c23];
              _e262[_l30] = _i181, _e262[_a68] = _r141, _e262.pop();
            }
          } else {
            var _r142 = --s,
                _a69 = t[_r142];

            _r142 > 0 && (e[_a69.uuid] = _l30), t[_l30] = _a69, t.pop();

            for (var _t291 = 0, _e263 = i; _t291 !== _e263; ++_t291) {
              var _e264 = n[_t291];
              _e264[_l30] = _e264[_r142], _e264.pop();
            }
          }
        }

        this.nCachedObjects_ = r;
      }
    }, {
      key: "subscribe_",
      value: function subscribe_(t, e) {
        var n = this._bindingsIndicesByPath;
        var i = n[t];
        var r = this._bindings;
        if (void 0 !== i) return r[i];
        var s = this._paths,
            a = this._parsedPaths,
            o = this._objects,
            l = o.length,
            c = this.nCachedObjects_,
            h = new Array(l);
        i = r.length, n[t] = i, s.push(t), a.push(e), r.push(h);

        for (var _n236 = c, _i182 = o.length; _n236 !== _i182; ++_n236) {
          var _i183 = o[_n236];
          h[_n236] = new zc(_i183, t, e);
        }

        return h;
      }
    }, {
      key: "unsubscribe_",
      value: function unsubscribe_(t) {
        var e = this._bindingsIndicesByPath,
            n = e[t];

        if (void 0 !== n) {
          var _i184 = this._paths,
              _r143 = this._parsedPaths,
              _s84 = this._bindings,
              _a70 = _s84.length - 1,
              _o43 = _s84[_a70];

          e[t[_a70]] = n, _s84[n] = _o43, _s84.pop(), _r143[n] = _r143[_a70], _r143.pop(), _i184[n] = _i184[_a70], _i184.pop();
        }
      }
    }]);

    return Fc;
  }();

  Fc.prototype.isAnimationObjectGroup = !0;

  var Hc = /*#__PURE__*/function () {
    function Hc(t, e) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : e.blendMode;

      _classCallCheck(this, Hc);

      this._mixer = t, this._clip = e, this._localRoot = n, this.blendMode = i;
      var r = e.tracks,
          s = r.length,
          a = new Array(s),
          o = {
        endingStart: k,
        endingEnd: k
      };

      for (var _t292 = 0; _t292 !== s; ++_t292) {
        var _e265 = r[_t292].createInterpolant(null);

        a[_t292] = _e265, _e265.settings = o;
      }

      this._interpolantSettings = o, this._interpolants = a, this._propertyBindings = new Array(s), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = 2201, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0;
    }

    _createClass(Hc, [{
      key: "play",
      value: function play() {
        return this._mixer._activateAction(this), this;
      }
    }, {
      key: "stop",
      value: function stop() {
        return this._mixer._deactivateAction(this), this.reset();
      }
    }, {
      key: "reset",
      value: function reset() {
        return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping();
      }
    }, {
      key: "isRunning",
      value: function isRunning() {
        return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this);
      }
    }, {
      key: "isScheduled",
      value: function isScheduled() {
        return this._mixer._isActiveAction(this);
      }
    }, {
      key: "startAt",
      value: function startAt(t) {
        return this._startTime = t, this;
      }
    }, {
      key: "setLoop",
      value: function setLoop(t, e) {
        return this.loop = t, this.repetitions = e, this;
      }
    }, {
      key: "setEffectiveWeight",
      value: function setEffectiveWeight(t) {
        return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading();
      }
    }, {
      key: "getEffectiveWeight",
      value: function getEffectiveWeight() {
        return this._effectiveWeight;
      }
    }, {
      key: "fadeIn",
      value: function fadeIn(t) {
        return this._scheduleFading(t, 0, 1);
      }
    }, {
      key: "fadeOut",
      value: function fadeOut(t) {
        return this._scheduleFading(t, 1, 0);
      }
    }, {
      key: "crossFadeFrom",
      value: function crossFadeFrom(t, e, n) {
        if (t.fadeOut(e), this.fadeIn(e), n) {
          var _n237 = this._clip.duration,
              _i185 = t._clip.duration,
              _r144 = _i185 / _n237,
              _s85 = _n237 / _i185;

          t.warp(1, _r144, e), this.warp(_s85, 1, e);
        }

        return this;
      }
    }, {
      key: "crossFadeTo",
      value: function crossFadeTo(t, e, n) {
        return t.crossFadeFrom(this, e, n);
      }
    }, {
      key: "stopFading",
      value: function stopFading() {
        var t = this._weightInterpolant;
        return null !== t && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this;
      }
    }, {
      key: "setEffectiveTimeScale",
      value: function setEffectiveTimeScale(t) {
        return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping();
      }
    }, {
      key: "getEffectiveTimeScale",
      value: function getEffectiveTimeScale() {
        return this._effectiveTimeScale;
      }
    }, {
      key: "setDuration",
      value: function setDuration(t) {
        return this.timeScale = this._clip.duration / t, this.stopWarping();
      }
    }, {
      key: "syncWith",
      value: function syncWith(t) {
        return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping();
      }
    }, {
      key: "halt",
      value: function halt(t) {
        return this.warp(this._effectiveTimeScale, 0, t);
      }
    }, {
      key: "warp",
      value: function warp(t, e, n) {
        var i = this._mixer,
            r = i.time,
            s = this.timeScale;
        var a = this._timeScaleInterpolant;
        null === a && (a = i._lendControlInterpolant(), this._timeScaleInterpolant = a);
        var o = a.parameterPositions,
            l = a.sampleValues;
        return o[0] = r, o[1] = r + n, l[0] = t / s, l[1] = e / s, this;
      }
    }, {
      key: "stopWarping",
      value: function stopWarping() {
        var t = this._timeScaleInterpolant;
        return null !== t && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this;
      }
    }, {
      key: "getMixer",
      value: function getMixer() {
        return this._mixer;
      }
    }, {
      key: "getClip",
      value: function getClip() {
        return this._clip;
      }
    }, {
      key: "getRoot",
      value: function getRoot() {
        return this._localRoot || this._mixer._root;
      }
    }, {
      key: "_update",
      value: function _update(t, e, n, i) {
        if (!this.enabled) return void this._updateWeight(t);
        var r = this._startTime;

        if (null !== r) {
          var _i186 = (t - r) * n;

          if (_i186 < 0 || 0 === n) return;
          this._startTime = null, e = n * _i186;
        }

        e *= this._updateTimeScale(t);

        var s = this._updateTime(e),
            a = this._updateWeight(t);

        if (a > 0) {
          var _t293 = this._interpolants,
              _e266 = this._propertyBindings;

          switch (this.blendMode) {
            case q:
              for (var _n238 = 0, _i187 = _t293.length; _n238 !== _i187; ++_n238) {
                _t293[_n238].evaluate(s), _e266[_n238].accumulateAdditive(a);
              }

              break;

            case j:
            default:
              for (var _n239 = 0, _r145 = _t293.length; _n239 !== _r145; ++_n239) {
                _t293[_n239].evaluate(s), _e266[_n239].accumulate(i, a);
              }

          }
        }
      }
    }, {
      key: "_updateWeight",
      value: function _updateWeight(t) {
        var e = 0;

        if (this.enabled) {
          e = this.weight;
          var _n240 = this._weightInterpolant;

          if (null !== _n240) {
            var _i188 = _n240.evaluate(t)[0];

            e *= _i188, t > _n240.parameterPositions[1] && (this.stopFading(), 0 === _i188 && (this.enabled = !1));
          }
        }

        return this._effectiveWeight = e, e;
      }
    }, {
      key: "_updateTimeScale",
      value: function _updateTimeScale(t) {
        var e = 0;

        if (!this.paused) {
          e = this.timeScale;
          var _n241 = this._timeScaleInterpolant;

          if (null !== _n241) {
            e *= _n241.evaluate(t)[0], t > _n241.parameterPositions[1] && (this.stopWarping(), 0 === e ? this.paused = !0 : this.timeScale = e);
          }
        }

        return this._effectiveTimeScale = e, e;
      }
    }, {
      key: "_updateTime",
      value: function _updateTime(t) {
        var e = this._clip.duration,
            n = this.loop;
        var i = this.time + t,
            r = this._loopCount;
        var s = 2202 === n;
        if (0 === t) return -1 === r ? i : s && 1 == (1 & r) ? e - i : i;

        if (2200 === n) {
          -1 === r && (this._loopCount = 0, this._setEndings(!0, !0, !1));

          t: {
            if (i >= e) i = e;else {
              if (!(i < 0)) {
                this.time = i;
                break t;
              }

              i = 0;
            }
            this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = i, this._mixer.dispatchEvent({
              type: "finished",
              action: this,
              direction: t < 0 ? -1 : 1
            });
          }
        } else {
          if (-1 === r && (t >= 0 ? (r = 0, this._setEndings(!0, 0 === this.repetitions, s)) : this._setEndings(0 === this.repetitions, !0, s)), i >= e || i < 0) {
            var _n242 = Math.floor(i / e);

            i -= e * _n242, r += Math.abs(_n242);

            var _a71 = this.repetitions - r;

            if (_a71 <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, i = t > 0 ? e : 0, this.time = i, this._mixer.dispatchEvent({
              type: "finished",
              action: this,
              direction: t > 0 ? 1 : -1
            });else {
              if (1 === _a71) {
                var _e267 = t < 0;

                this._setEndings(_e267, !_e267, s);
              } else this._setEndings(!1, !1, s);

              this._loopCount = r, this.time = i, this._mixer.dispatchEvent({
                type: "loop",
                action: this,
                loopDelta: _n242
              });
            }
          } else this.time = i;

          if (s && 1 == (1 & r)) return e - i;
        }

        return i;
      }
    }, {
      key: "_setEndings",
      value: function _setEndings(t, e, n) {
        var i = this._interpolantSettings;
        n ? (i.endingStart = V, i.endingEnd = V) : (i.endingStart = t ? this.zeroSlopeAtStart ? V : k : W, i.endingEnd = e ? this.zeroSlopeAtEnd ? V : k : W);
      }
    }, {
      key: "_scheduleFading",
      value: function _scheduleFading(t, e, n) {
        var i = this._mixer,
            r = i.time;
        var s = this._weightInterpolant;
        null === s && (s = i._lendControlInterpolant(), this._weightInterpolant = s);
        var a = s.parameterPositions,
            o = s.sampleValues;
        return a[0] = r, o[0] = e, a[1] = r + t, o[1] = n, this;
      }
    }]);

    return Hc;
  }();

  var Uc = /*#__PURE__*/function (_rt3) {
    _inherits(Uc, _rt3);

    var _super95 = _createSuper(Uc);

    function Uc(t) {
      var _this83;

      _classCallCheck(this, Uc);

      _this83 = _super95.call(this), _this83._root = t, _this83._initMemoryManager(), _this83._accuIndex = 0, _this83.time = 0, _this83.timeScale = 1;
      return _this83;
    }

    _createClass(Uc, [{
      key: "_bindAction",
      value: function _bindAction(t, e) {
        var n = t._localRoot || this._root,
            i = t._clip.tracks,
            r = i.length,
            s = t._propertyBindings,
            a = t._interpolants,
            o = n.uuid,
            l = this._bindingsByRootAndName;
        var c = l[o];
        void 0 === c && (c = {}, l[o] = c);

        for (var _t294 = 0; _t294 !== r; ++_t294) {
          var _r146 = i[_t294],
              _l31 = _r146.name;
          var _h13 = c[_l31];
          if (void 0 !== _h13) s[_t294] = _h13;else {
            if (_h13 = s[_t294], void 0 !== _h13) {
              null === _h13._cacheIndex && (++_h13.referenceCount, this._addInactiveBinding(_h13, o, _l31));
              continue;
            }

            var _i189 = e && e._propertyBindings[_t294].binding.parsedPath;

            _h13 = new Tc(zc.create(n, _l31, _i189), _r146.ValueTypeName, _r146.getValueSize()), ++_h13.referenceCount, this._addInactiveBinding(_h13, o, _l31), s[_t294] = _h13;
          }
          a[_t294].resultBuffer = _h13.buffer;
        }
      }
    }, {
      key: "_activateAction",
      value: function _activateAction(t) {
        if (!this._isActiveAction(t)) {
          if (null === t._cacheIndex) {
            var _e269 = (t._localRoot || this._root).uuid,
                _n243 = t._clip.uuid,
                _i190 = this._actionsByClip[_n243];
            this._bindAction(t, _i190 && _i190.knownActions[0]), this._addInactiveAction(t, _n243, _e269);
          }

          var _e268 = t._propertyBindings;

          for (var _t295 = 0, _n244 = _e268.length; _t295 !== _n244; ++_t295) {
            var _n245 = _e268[_t295];
            0 == _n245.useCount++ && (this._lendBinding(_n245), _n245.saveOriginalState());
          }

          this._lendAction(t);
        }
      }
    }, {
      key: "_deactivateAction",
      value: function _deactivateAction(t) {
        if (this._isActiveAction(t)) {
          var _e270 = t._propertyBindings;

          for (var _t296 = 0, _n246 = _e270.length; _t296 !== _n246; ++_t296) {
            var _n247 = _e270[_t296];
            0 == --_n247.useCount && (_n247.restoreOriginalState(), this._takeBackBinding(_n247));
          }

          this._takeBackAction(t);
        }
      }
    }, {
      key: "_initMemoryManager",
      value: function _initMemoryManager() {
        this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
        var t = this;
        this.stats = {
          actions: {
            get total() {
              return t._actions.length;
            },

            get inUse() {
              return t._nActiveActions;
            }

          },
          bindings: {
            get total() {
              return t._bindings.length;
            },

            get inUse() {
              return t._nActiveBindings;
            }

          },
          controlInterpolants: {
            get total() {
              return t._controlInterpolants.length;
            },

            get inUse() {
              return t._nActiveControlInterpolants;
            }

          }
        };
      }
    }, {
      key: "_isActiveAction",
      value: function _isActiveAction(t) {
        var e = t._cacheIndex;
        return null !== e && e < this._nActiveActions;
      }
    }, {
      key: "_addInactiveAction",
      value: function _addInactiveAction(t, e, n) {
        var i = this._actions,
            r = this._actionsByClip;
        var s = r[e];
        if (void 0 === s) s = {
          knownActions: [t],
          actionByRoot: {}
        }, t._byClipCacheIndex = 0, r[e] = s;else {
          var _e271 = s.knownActions;
          t._byClipCacheIndex = _e271.length, _e271.push(t);
        }
        t._cacheIndex = i.length, i.push(t), s.actionByRoot[n] = t;
      }
    }, {
      key: "_removeInactiveAction",
      value: function _removeInactiveAction(t) {
        var e = this._actions,
            n = e[e.length - 1],
            i = t._cacheIndex;
        n._cacheIndex = i, e[i] = n, e.pop(), t._cacheIndex = null;
        var r = t._clip.uuid,
            s = this._actionsByClip,
            a = s[r],
            o = a.knownActions,
            l = o[o.length - 1],
            c = t._byClipCacheIndex;
        l._byClipCacheIndex = c, o[c] = l, o.pop(), t._byClipCacheIndex = null;
        delete a.actionByRoot[(t._localRoot || this._root).uuid], 0 === o.length && delete s[r], this._removeInactiveBindingsForAction(t);
      }
    }, {
      key: "_removeInactiveBindingsForAction",
      value: function _removeInactiveBindingsForAction(t) {
        var e = t._propertyBindings;

        for (var _t297 = 0, _n248 = e.length; _t297 !== _n248; ++_t297) {
          var _n249 = e[_t297];
          0 == --_n249.referenceCount && this._removeInactiveBinding(_n249);
        }
      }
    }, {
      key: "_lendAction",
      value: function _lendAction(t) {
        var e = this._actions,
            n = t._cacheIndex,
            i = this._nActiveActions++,
            r = e[i];
        t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r;
      }
    }, {
      key: "_takeBackAction",
      value: function _takeBackAction(t) {
        var e = this._actions,
            n = t._cacheIndex,
            i = --this._nActiveActions,
            r = e[i];
        t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r;
      }
    }, {
      key: "_addInactiveBinding",
      value: function _addInactiveBinding(t, e, n) {
        var i = this._bindingsByRootAndName,
            r = this._bindings;
        var s = i[e];
        void 0 === s && (s = {}, i[e] = s), s[n] = t, t._cacheIndex = r.length, r.push(t);
      }
    }, {
      key: "_removeInactiveBinding",
      value: function _removeInactiveBinding(t) {
        var e = this._bindings,
            n = t.binding,
            i = n.rootNode.uuid,
            r = n.path,
            s = this._bindingsByRootAndName,
            a = s[i],
            o = e[e.length - 1],
            l = t._cacheIndex;
        o._cacheIndex = l, e[l] = o, e.pop(), delete a[r], 0 === Object.keys(a).length && delete s[i];
      }
    }, {
      key: "_lendBinding",
      value: function _lendBinding(t) {
        var e = this._bindings,
            n = t._cacheIndex,
            i = this._nActiveBindings++,
            r = e[i];
        t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r;
      }
    }, {
      key: "_takeBackBinding",
      value: function _takeBackBinding(t) {
        var e = this._bindings,
            n = t._cacheIndex,
            i = --this._nActiveBindings,
            r = e[i];
        t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r;
      }
    }, {
      key: "_lendControlInterpolant",
      value: function _lendControlInterpolant() {
        var t = this._controlInterpolants,
            e = this._nActiveControlInterpolants++;
        var n = t[e];
        return void 0 === n && (n = new Oo(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer), n.__cacheIndex = e, t[e] = n), n;
      }
    }, {
      key: "_takeBackControlInterpolant",
      value: function _takeBackControlInterpolant(t) {
        var e = this._controlInterpolants,
            n = t.__cacheIndex,
            i = --this._nActiveControlInterpolants,
            r = e[i];
        t.__cacheIndex = i, e[i] = t, r.__cacheIndex = n, e[n] = r;
      }
    }, {
      key: "clipAction",
      value: function clipAction(t, e, n) {
        var i = e || this._root,
            r = i.uuid;
        var s = "string" == typeof t ? qo.findByName(i, t) : t;
        var a = null !== s ? s.uuid : t,
            o = this._actionsByClip[a];
        var l = null;

        if (void 0 === n && (n = null !== s ? s.blendMode : j), void 0 !== o) {
          var _t298 = o.actionByRoot[r];
          if (void 0 !== _t298 && _t298.blendMode === n) return _t298;
          l = o.knownActions[0], null === s && (s = l._clip);
        }

        if (null === s) return null;
        var c = new Hc(this, s, e, n);
        return this._bindAction(c, l), this._addInactiveAction(c, a, r), c;
      }
    }, {
      key: "existingAction",
      value: function existingAction(t, e) {
        var n = e || this._root,
            i = n.uuid,
            r = "string" == typeof t ? qo.findByName(n, t) : t,
            s = r ? r.uuid : t,
            a = this._actionsByClip[s];
        return void 0 !== a && a.actionByRoot[i] || null;
      }
    }, {
      key: "stopAllAction",
      value: function stopAllAction() {
        var t = this._actions;

        for (var _e272 = this._nActiveActions - 1; _e272 >= 0; --_e272) {
          t[_e272].stop();
        }

        return this;
      }
    }, {
      key: "update",
      value: function update(t) {
        t *= this.timeScale;
        var e = this._actions,
            n = this._nActiveActions,
            i = this.time += t,
            r = Math.sign(t),
            s = this._accuIndex ^= 1;

        for (var _a72 = 0; _a72 !== n; ++_a72) {
          e[_a72]._update(i, t, r, s);
        }

        var a = this._bindings,
            o = this._nActiveBindings;

        for (var _t299 = 0; _t299 !== o; ++_t299) {
          a[_t299].apply(s);
        }

        return this;
      }
    }, {
      key: "setTime",
      value: function setTime(t) {
        this.time = 0;

        for (var _t300 = 0; _t300 < this._actions.length; _t300++) {
          this._actions[_t300].time = 0;
        }

        return this.update(t);
      }
    }, {
      key: "getRoot",
      value: function getRoot() {
        return this._root;
      }
    }, {
      key: "uncacheClip",
      value: function uncacheClip(t) {
        var e = this._actions,
            n = t.uuid,
            i = this._actionsByClip,
            r = i[n];

        if (void 0 !== r) {
          var _t301 = r.knownActions;

          for (var _n250 = 0, _i191 = _t301.length; _n250 !== _i191; ++_n250) {
            var _i192 = _t301[_n250];

            this._deactivateAction(_i192);

            var _r147 = _i192._cacheIndex,
                _s86 = e[e.length - 1];
            _i192._cacheIndex = null, _i192._byClipCacheIndex = null, _s86._cacheIndex = _r147, e[_r147] = _s86, e.pop(), this._removeInactiveBindingsForAction(_i192);
          }

          delete i[n];
        }
      }
    }, {
      key: "uncacheRoot",
      value: function uncacheRoot(t) {
        var e = t.uuid,
            n = this._actionsByClip;

        for (var _t302 in n) {
          var _i193 = n[_t302].actionByRoot[e];
          void 0 !== _i193 && (this._deactivateAction(_i193), this._removeInactiveAction(_i193));
        }

        var i = this._bindingsByRootAndName[e];
        if (void 0 !== i) for (var _t303 in i) {
          var _e273 = i[_t303];
          _e273.restoreOriginalState(), this._removeInactiveBinding(_e273);
        }
      }
    }, {
      key: "uncacheAction",
      value: function uncacheAction(t, e) {
        var n = this.existingAction(t, e);
        null !== n && (this._deactivateAction(n), this._removeInactiveAction(n));
      }
    }]);

    return Uc;
  }(rt);

  Uc.prototype._controlInterpolantsResultBuffer = new Float32Array(1);

  var Gc = /*#__PURE__*/function () {
    function Gc(t) {
      _classCallCheck(this, Gc);

      "string" == typeof t && (console.warn("THREE.Uniform: Type parameter is no longer needed."), t = arguments[1]), this.value = t;
    }

    _createClass(Gc, [{
      key: "clone",
      value: function clone() {
        return new Gc(void 0 === this.value.clone ? this.value : this.value.clone());
      }
    }]);

    return Gc;
  }();

  function kc(t, e, n) {
    gs.call(this, t, e), this.meshPerAttribute = n || 1;
  }

  function Vc(t, e, n, i, r) {
    this.buffer = t, this.type = e, this.itemSize = n, this.elementSize = i, this.count = r, this.version = 0;
  }

  function Wc(t, e) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1 / 0;
    this.ray = new Zt(t, e), this.near = n, this.far = i, this.camera = null, this.layers = new oe(), this.params = {
      Mesh: {},
      Line: {
        threshold: 1
      },
      LOD: {},
      Points: {
        threshold: 1
      },
      Sprite: {}
    }, Object.defineProperties(this.params, {
      PointCloud: {
        get: function get() {
          return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points;
        }
      }
    });
  }

  function jc(t, e) {
    return t.distance - e.distance;
  }

  function qc(t, e, n, i) {
    if (t.layers.test(e.layers) && t.raycast(e, n), !0 === i) {
      var _i194 = t.children;

      for (var _t304 = 0, _r148 = _i194.length; _t304 < _r148; _t304++) {
        qc(_i194[_t304], e, n, !0);
      }
    }
  }

  kc.prototype = Object.assign(Object.create(gs.prototype), {
    constructor: kc,
    isInstancedInterleavedBuffer: !0,
    copy: function copy(t) {
      return gs.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this;
    },
    clone: function clone(t) {
      var e = gs.prototype.clone.call(this, t);
      return e.meshPerAttribute = this.meshPerAttribute, e;
    },
    toJSON: function toJSON(t) {
      var e = gs.prototype.toJSON.call(this, t);
      return e.isInstancedInterleavedBuffer = !0, e.meshPerAttribute = this.meshPerAttribute, e;
    }
  }), Object.defineProperty(Vc.prototype, "needsUpdate", {
    set: function set(t) {
      !0 === t && this.version++;
    }
  }), Object.assign(Vc.prototype, {
    isGLBufferAttribute: !0,
    setBuffer: function setBuffer(t) {
      return this.buffer = t, this;
    },
    setType: function setType(t, e) {
      return this.type = t, this.elementSize = e, this;
    },
    setItemSize: function setItemSize(t) {
      return this.itemSize = t, this;
    },
    setCount: function setCount(t) {
      return this.count = t, this;
    }
  }), Object.assign(Wc.prototype, {
    set: function set(t, e) {
      this.ray.set(t, e);
    },
    setFromCamera: function setFromCamera(t, e) {
      e && e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize(), this.camera = e) : e && e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld), this.camera = e) : console.error("THREE.Raycaster: Unsupported camera type: " + e.type);
    },
    intersectObject: function intersectObject(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      return qc(t, this, n, e), n.sort(jc), n;
    },
    intersectObjects: function intersectObjects(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

      for (var _i195 = 0, _r149 = t.length; _i195 < _r149; _i195++) {
        qc(t[_i195], this, n, e);
      }

      return n.sort(jc), n;
    }
  });
  var Xc = new lt();

  var Yc = /*#__PURE__*/function () {
    function Yc() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new lt(1 / 0, 1 / 0);
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new lt(-1 / 0, -1 / 0);

      _classCallCheck(this, Yc);

      this.min = t, this.max = e;
    }

    _createClass(Yc, [{
      key: "set",
      value: function set(t, e) {
        return this.min.copy(t), this.max.copy(e), this;
      }
    }, {
      key: "setFromPoints",
      value: function setFromPoints(t) {
        this.makeEmpty();

        for (var _e274 = 0, _n251 = t.length; _e274 < _n251; _e274++) {
          this.expandByPoint(t[_e274]);
        }

        return this;
      }
    }, {
      key: "setFromCenterAndSize",
      value: function setFromCenterAndSize(t, e) {
        var n = Xc.copy(e).multiplyScalar(.5);
        return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this.min.copy(t.min), this.max.copy(t.max), this;
      }
    }, {
      key: "makeEmpty",
      value: function makeEmpty() {
        return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this;
      }
    }, {
      key: "isEmpty",
      value: function isEmpty() {
        return this.max.x < this.min.x || this.max.y < this.min.y;
      }
    }, {
      key: "getCenter",
      value: function getCenter(t) {
        return void 0 === t && (console.warn("THREE.Box2: .getCenter() target is now required"), t = new lt()), this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5);
      }
    }, {
      key: "getSize",
      value: function getSize(t) {
        return void 0 === t && (console.warn("THREE.Box2: .getSize() target is now required"), t = new lt()), this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min);
      }
    }, {
      key: "expandByPoint",
      value: function expandByPoint(t) {
        return this.min.min(t), this.max.max(t), this;
      }
    }, {
      key: "expandByVector",
      value: function expandByVector(t) {
        return this.min.sub(t), this.max.add(t), this;
      }
    }, {
      key: "expandByScalar",
      value: function expandByScalar(t) {
        return this.min.addScalar(-t), this.max.addScalar(t), this;
      }
    }, {
      key: "containsPoint",
      value: function containsPoint(t) {
        return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y);
      }
    }, {
      key: "containsBox",
      value: function containsBox(t) {
        return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y;
      }
    }, {
      key: "getParameter",
      value: function getParameter(t, e) {
        return void 0 === e && (console.warn("THREE.Box2: .getParameter() target is now required"), e = new lt()), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y));
      }
    }, {
      key: "intersectsBox",
      value: function intersectsBox(t) {
        return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y);
      }
    }, {
      key: "clampPoint",
      value: function clampPoint(t, e) {
        return void 0 === e && (console.warn("THREE.Box2: .clampPoint() target is now required"), e = new lt()), e.copy(t).clamp(this.min, this.max);
      }
    }, {
      key: "distanceToPoint",
      value: function distanceToPoint(t) {
        return Xc.copy(t).clamp(this.min, this.max).sub(t).length();
      }
    }, {
      key: "intersect",
      value: function intersect(t) {
        return this.min.max(t.min), this.max.min(t.max), this;
      }
    }, {
      key: "union",
      value: function union(t) {
        return this.min.min(t.min), this.max.max(t.max), this;
      }
    }, {
      key: "translate",
      value: function translate(t) {
        return this.min.add(t), this.max.add(t), this;
      }
    }, {
      key: "equals",
      value: function equals(t) {
        return t.min.equals(this.min) && t.max.equals(this.max);
      }
    }]);

    return Yc;
  }();

  Yc.prototype.isBox2 = !0;
  var Zc = new xt(),
      Jc = new xt();

  var Qc = /*#__PURE__*/function () {
    function Qc() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new xt();
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new xt();

      _classCallCheck(this, Qc);

      this.start = t, this.end = e;
    }

    _createClass(Qc, [{
      key: "set",
      value: function set(t, e) {
        return this.start.copy(t), this.end.copy(e), this;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this.start.copy(t.start), this.end.copy(t.end), this;
      }
    }, {
      key: "getCenter",
      value: function getCenter(t) {
        return void 0 === t && (console.warn("THREE.Line3: .getCenter() target is now required"), t = new xt()), t.addVectors(this.start, this.end).multiplyScalar(.5);
      }
    }, {
      key: "delta",
      value: function delta(t) {
        return void 0 === t && (console.warn("THREE.Line3: .delta() target is now required"), t = new xt()), t.subVectors(this.end, this.start);
      }
    }, {
      key: "distanceSq",
      value: function distanceSq() {
        return this.start.distanceToSquared(this.end);
      }
    }, {
      key: "distance",
      value: function distance() {
        return this.start.distanceTo(this.end);
      }
    }, {
      key: "at",
      value: function at(t, e) {
        return void 0 === e && (console.warn("THREE.Line3: .at() target is now required"), e = new xt()), this.delta(e).multiplyScalar(t).add(this.start);
      }
    }, {
      key: "closestPointToPointParameter",
      value: function closestPointToPointParameter(t, e) {
        Zc.subVectors(t, this.start), Jc.subVectors(this.end, this.start);
        var n = Jc.dot(Jc);
        var i = Jc.dot(Zc) / n;
        return e && (i = ot.clamp(i, 0, 1)), i;
      }
    }, {
      key: "closestPointToPoint",
      value: function closestPointToPoint(t, e, n) {
        var i = this.closestPointToPointParameter(t, e);
        return void 0 === n && (console.warn("THREE.Line3: .closestPointToPoint() target is now required"), n = new xt()), this.delta(n).multiplyScalar(i).add(this.start);
      }
    }, {
      key: "applyMatrix4",
      value: function applyMatrix4(t) {
        return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this;
      }
    }, {
      key: "equals",
      value: function equals(t) {
        return t.start.equals(this.start) && t.end.equals(this.end);
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }]);

    return Qc;
  }();

  function Kc(t) {
    be.call(this), this.material = t, this.render = function () {}, this.hasPositions = !1, this.hasNormals = !1, this.hasColors = !1, this.hasUvs = !1, this.positionArray = null, this.normalArray = null, this.colorArray = null, this.uvArray = null, this.count = 0;
  }

  Kc.prototype = Object.create(be.prototype), Kc.prototype.constructor = Kc, Kc.prototype.isImmediateRenderObject = !0;
  var $c = new xt();
  var th = new xt(),
      eh = new Jt(),
      nh = new Jt();

  var ih = /*#__PURE__*/function (_la) {
    _inherits(ih, _la);

    var _super96 = _createSuper(ih);

    function ih(t) {
      var _this84;

      _classCallCheck(this, ih);

      var e = rh(t),
          n = new vn(),
          i = [],
          r = [],
          s = new je(0, 0, 1),
          a = new je(0, 1, 0);

      for (var _t305 = 0; _t305 < e.length; _t305++) {
        var _n252 = e[_t305];
        _n252.parent && _n252.parent.isBone && (i.push(0, 0, 0), i.push(0, 0, 0), r.push(s.r, s.g, s.b), r.push(a.r, a.g, a.b));
      }

      n.setAttribute("position", new sn(i, 3)), n.setAttribute("color", new sn(r, 3));
      _this84 = _super96.call(this, n, new $s({
        vertexColors: !0,
        depthTest: !1,
        depthWrite: !1,
        toneMapped: !1,
        transparent: !0
      })), _this84.type = "SkeletonHelper", _this84.isSkeletonHelper = !0, _this84.root = t, _this84.bones = e, _this84.matrix = t.matrixWorld, _this84.matrixAutoUpdate = !1;
      return _this84;
    }

    _createClass(ih, [{
      key: "updateMatrixWorld",
      value: function updateMatrixWorld(t) {
        var e = this.bones,
            n = this.geometry,
            i = n.getAttribute("position");
        nh.copy(this.root.matrixWorld).invert();

        for (var _t306 = 0, _n253 = 0; _t306 < e.length; _t306++) {
          var _r150 = e[_t306];
          _r150.parent && _r150.parent.isBone && (eh.multiplyMatrices(nh, _r150.matrixWorld), th.setFromMatrixPosition(eh), i.setXYZ(_n253, th.x, th.y, th.z), eh.multiplyMatrices(nh, _r150.parent.matrixWorld), th.setFromMatrixPosition(eh), i.setXYZ(_n253 + 1, th.x, th.y, th.z), _n253 += 2);
        }

        n.getAttribute("position").needsUpdate = !0, _get(_getPrototypeOf(ih.prototype), "updateMatrixWorld", this).call(this, t);
      }
    }]);

    return ih;
  }(la);

  function rh(t) {
    var e = [];
    t && t.isBone && e.push(t);

    for (var _n254 = 0; _n254 < t.children.length; _n254++) {
      e.push.apply(e, rh(t.children[_n254]));
    }

    return e;
  }

  var sh = new xt(),
      ah = new je(),
      oh = new je();

  var lh = /*#__PURE__*/function (_la2) {
    _inherits(lh, _la2);

    var _super97 = _createSuper(lh);

    function lh() {
      var _this85;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4473924;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 8947848;

      _classCallCheck(this, lh);

      n = new je(n), i = new je(i);
      var r = e / 2,
          s = t / e,
          a = t / 2,
          o = [],
          l = [];

      for (var _t307 = 0, _c24 = 0, _h14 = -a; _t307 <= e; _t307++, _h14 += s) {
        o.push(-a, 0, _h14, a, 0, _h14), o.push(_h14, 0, -a, _h14, 0, a);

        var _e275 = _t307 === r ? n : i;

        _e275.toArray(l, _c24), _c24 += 3, _e275.toArray(l, _c24), _c24 += 3, _e275.toArray(l, _c24), _c24 += 3, _e275.toArray(l, _c24), _c24 += 3;
      }

      var c = new vn();
      c.setAttribute("position", new sn(o, 3)), c.setAttribute("color", new sn(l, 3));
      _this85 = _super97.call(this, c, new $s({
        vertexColors: !0,
        toneMapped: !1
      })), _this85.type = "GridHelper";
      return _this85;
    }

    return lh;
  }(la);

  var ch = new xt(),
      hh = new xt(),
      uh = new xt();
  var dh = new xt(),
      ph = new kn();

  function fh(t, e, n, i, r, s, a) {
    dh.set(r, s, a).unproject(i);
    var o = e[t];

    if (void 0 !== o) {
      var _t308 = n.getAttribute("position");

      for (var _e276 = 0, _n255 = o.length; _e276 < _n255; _e276++) {
        _t308.setXYZ(o[_e276], dh.x, dh.y, dh.z);
      }
    }
  }

  var mh = new wt();

  var gh = /*#__PURE__*/function (_la3) {
    _inherits(gh, _la3);

    var _super98 = _createSuper(gh);

    function gh(t) {
      var _this86;

      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16776960;

      _classCallCheck(this, gh);

      var n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
          i = new Float32Array(24),
          r = new vn();
      r.setIndex(new Ze(n, 1)), r.setAttribute("position", new Ze(i, 3)), _this86 = _super98.call(this, r, new $s({
        color: e,
        toneMapped: !1
      })), _this86.object = t, _this86.type = "BoxHelper", _this86.matrixAutoUpdate = !1, _this86.update();
      return _this86;
    }

    _createClass(gh, [{
      key: "update",
      value: function update(t) {
        if (void 0 !== t && console.warn("THREE.BoxHelper: .update() has no longer arguments."), void 0 !== this.object && mh.setFromObject(this.object), mh.isEmpty()) return;
        var e = mh.min,
            n = mh.max,
            i = this.geometry.attributes.position,
            r = i.array;
        r[0] = n.x, r[1] = n.y, r[2] = n.z, r[3] = e.x, r[4] = n.y, r[5] = n.z, r[6] = e.x, r[7] = e.y, r[8] = n.z, r[9] = n.x, r[10] = e.y, r[11] = n.z, r[12] = n.x, r[13] = n.y, r[14] = e.z, r[15] = e.x, r[16] = n.y, r[17] = e.z, r[18] = e.x, r[19] = e.y, r[20] = e.z, r[21] = n.x, r[22] = e.y, r[23] = e.z, i.needsUpdate = !0, this.geometry.computeBoundingSphere();
      }
    }, {
      key: "setFromObject",
      value: function setFromObject(t) {
        return this.object = t, this.update(), this;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return la.prototype.copy.call(this, t), this.object = t.object, this;
      }
    }]);

    return gh;
  }(la);

  var vh = new xt();
  var yh, xh;

  var _h = /*#__PURE__*/function (_la4) {
    _inherits(_h, _la4);

    var _super99 = _createSuper(_h);

    function _h() {
      var _this87;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      _classCallCheck(this, _h);

      var e = [0, 0, 0, t, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t],
          n = new vn();
      n.setAttribute("position", new sn(e, 3)), n.setAttribute("color", new sn([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1], 3));
      _this87 = _super99.call(this, n, new $s({
        vertexColors: !0,
        toneMapped: !1
      })), _this87.type = "AxesHelper";
      return _this87;
    }

    return _h;
  }(la);

  var bh = new Float32Array(1),
      wh = new Int32Array(bh.buffer),
      Mh = {
    toHalfFloat: function toHalfFloat(t) {
      bh[0] = t;
      var e = wh[0];
      var n = e >> 16 & 32768,
          i = e >> 12 & 2047;
      var r = e >> 23 & 255;
      return r < 103 ? n : r > 142 ? (n |= 31744, n |= (255 == r ? 0 : 1) && 8388607 & e, n) : r < 113 ? (i |= 2048, n |= (i >> 114 - r) + (i >> 113 - r & 1), n) : (n |= r - 112 << 10 | i >> 1, n += 1 & i, n);
    }
  },
      Sh = Math.pow(2, 8),
      Th = [.125, .215, .35, .446, .526, .582],
      Eh = 5 + Th.length,
      Ah = 20,
      Lh = (_Lh = {}, _defineProperty(_Lh, X, 0), _defineProperty(_Lh, Y, 1), _defineProperty(_Lh, J, 2), _defineProperty(_Lh, Q, 3), _defineProperty(_Lh, K, 4), _defineProperty(_Lh, $, 5), _defineProperty(_Lh, Z, 6), _Lh),
      Rh = new qe({
    side: 1,
    depthWrite: !1,
    depthTest: !1
  }),
      Ch = new Bn(new zn(), Rh),
      Ph = new Gl(),
      _kh = kh(),
      Dh = _kh._lodPlanes,
      Ih = _kh._sizeLods,
      Nh = _kh._sigmas,
      Bh = new je();

  var Oh = null;
  var zh = (1 + Math.sqrt(5)) / 2,
      Fh = 1 / zh,
      Hh = [new xt(1, 1, 1), new xt(-1, 1, 1), new xt(1, 1, -1), new xt(-1, 1, -1), new xt(0, zh, Fh), new xt(0, zh, -Fh), new xt(Fh, 0, zh), new xt(-Fh, 0, zh), new xt(zh, Fh, 0), new xt(-zh, Fh, 0)];

  function Uh(t) {
    var e = Math.max(t.r, t.g, t.b),
        n = Math.min(Math.max(Math.ceil(Math.log2(e)), -128), 127);
    t.multiplyScalar(Math.pow(2, -n));
    return (n + 128) / 255;
  }

  function Gh(t) {
    return void 0 !== t && t.type === x && (t.encoding === X || t.encoding === Y || t.encoding === Z);
  }

  function kh() {
    var t = [],
        e = [],
        n = [];
    var i = 8;

    for (var _r151 = 0; _r151 < Eh; _r151++) {
      var _s87 = Math.pow(2, i);

      e.push(_s87);

      var _a73 = 1 / _s87;

      _r151 > 4 ? _a73 = Th[_r151 - 8 + 4 - 1] : 0 == _r151 && (_a73 = 0), n.push(_a73);

      var _o44 = 1 / (_s87 - 1),
          _l32 = -_o44 / 2,
          _c25 = 1 + _o44 / 2,
          _h15 = [_l32, _l32, _c25, _l32, _c25, _c25, _l32, _l32, _c25, _c25, _l32, _c25],
          _u14 = 6,
          _d17 = 6,
          _p12 = 3,
          _f7 = 2,
          _m3 = 1,
          _g4 = new Float32Array(_p12 * _d17 * _u14),
          _v4 = new Float32Array(_f7 * _d17 * _u14),
          _y6 = new Float32Array(_m3 * _d17 * _u14);

      for (var _t309 = 0; _t309 < _u14; _t309++) {
        var _e277 = _t309 % 3 * 2 / 3 - 1,
            _n256 = _t309 > 2 ? 0 : -1,
            _i196 = [_e277, _n256, 0, _e277 + 2 / 3, _n256, 0, _e277 + 2 / 3, _n256 + 1, 0, _e277, _n256, 0, _e277 + 2 / 3, _n256 + 1, 0, _e277, _n256 + 1, 0];

        _g4.set(_i196, _p12 * _d17 * _t309), _v4.set(_h15, _f7 * _d17 * _t309);
        var _r152 = [_t309, _t309, _t309, _t309, _t309, _t309];

        _y6.set(_r152, _m3 * _d17 * _t309);
      }

      var _x4 = new vn();

      _x4.setAttribute("position", new Ze(_g4, _p12)), _x4.setAttribute("uv", new Ze(_v4, _f7)), _x4.setAttribute("faceIndex", new Ze(_y6, _m3)), t.push(_x4), i > 4 && i--;
    }

    return {
      _lodPlanes: t,
      _sizeLods: e,
      _sigmas: n
    };
  }

  function Vh(t) {
    var e = new gt(3 * Sh, 3 * Sh, t);
    return e.texture.mapping = l, e.texture.name = "PMREM.cubeUv", e.scissorTest = !0, e;
  }

  function Wh(t, e, n, i, r) {
    t.viewport.set(e, n, i, r), t.scissor.set(e, n, i, r);
  }

  function jh() {
    var t = new lt(1, 1);
    return new Mo({
      name: "EquirectangularToCubeUV",
      uniforms: {
        envMap: {
          value: null
        },
        texelSize: {
          value: t
        },
        inputEncoding: {
          value: Lh[3e3]
        },
        outputEncoding: {
          value: Lh[3e3]
        }
      },
      vertexShader: Xh(),
      fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform vec2 texelSize;\n\n\t\t\t".concat(Yh(), "\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tvec2 f = fract( uv / texelSize - 0.5 );\n\t\t\t\tuv -= f * texelSize;\n\t\t\t\tvec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.x += texelSize.x;\n\t\t\t\tvec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.y += texelSize.y;\n\t\t\t\tvec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.x -= texelSize.x;\n\t\t\t\tvec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\n\t\t\t\tvec3 tm = mix( tl, tr, f.x );\n\t\t\t\tvec3 bm = mix( bl, br, f.x );\n\t\t\t\tgl_FragColor.rgb = mix( tm, bm, f.y );\n\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t"),
      blending: 0,
      depthTest: !1,
      depthWrite: !1
    });
  }

  function qh() {
    return new Mo({
      name: "CubemapToCubeUV",
      uniforms: {
        envMap: {
          value: null
        },
        inputEncoding: {
          value: Lh[3e3]
        },
        outputEncoding: {
          value: Lh[3e3]
        }
      },
      vertexShader: Xh(),
      fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\t".concat(Yh(), "\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t"),
      blending: 0,
      depthTest: !1,
      depthWrite: !1
    });
  }

  function Xh() {
    return "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute vec3 position;\n\t\tattribute vec2 uv;\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t";
  }

  function Yh() {
    return "\n\n\t\tuniform int inputEncoding;\n\t\tuniform int outputEncoding;\n\n\t\t#include <encodings_pars_fragment>\n\n\t\tvec4 inputTexelToLinear( vec4 value ) {\n\n\t\t\tif ( inputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( inputEncoding == 1 ) {\n\n\t\t\t\treturn sRGBToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 2 ) {\n\n\t\t\t\treturn RGBEToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 3 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 7.0 );\n\n\t\t\t} else if ( inputEncoding == 4 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 16.0 );\n\n\t\t\t} else if ( inputEncoding == 5 ) {\n\n\t\t\t\treturn RGBDToLinear( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn GammaToLinear( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 linearToOutputTexel( vec4 value ) {\n\n\t\t\tif ( outputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( outputEncoding == 1 ) {\n\n\t\t\t\treturn LinearTosRGB( value );\n\n\t\t\t} else if ( outputEncoding == 2 ) {\n\n\t\t\t\treturn LinearToRGBE( value );\n\n\t\t\t} else if ( outputEncoding == 3 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 7.0 );\n\n\t\t\t} else if ( outputEncoding == 4 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 16.0 );\n\n\t\t\t} else if ( outputEncoding == 5 ) {\n\n\t\t\t\treturn LinearToRGBD( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn LinearToGamma( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 envMapTexelToLinear( vec4 color ) {\n\n\t\t\treturn inputTexelToLinear( color );\n\n\t\t}\n\t";
  }

  sl.create = function (t, e) {
    return console.log("THREE.Curve.create() has been deprecated"), t.prototype = Object.create(sl.prototype), t.prototype.constructor = t, t.prototype.getPoint = e, t;
  }, El.prototype.fromPoints = function (t) {
    return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(t);
  }, lh.prototype.setColors = function () {
    console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.");
  }, ih.prototype.update = function () {
    console.error("THREE.SkeletonHelper: update() no longer needs to be called.");
  }, Qo.prototype.extractUrlBase = function (t) {
    return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), Zl.extractUrlBase(t);
  }, Qo.Handlers = {
    add: function add() {
      console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.");
    },
    get: function get() {
      console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.");
    }
  }, Yc.prototype.center = function (t) {
    return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(t);
  }, Yc.prototype.empty = function () {
    return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty();
  }, Yc.prototype.isIntersectionBox = function (t) {
    return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t);
  }, Yc.prototype.size = function (t) {
    return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(t);
  }, wt.prototype.center = function (t) {
    return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(t);
  }, wt.prototype.empty = function () {
    return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty();
  }, wt.prototype.isIntersectionBox = function (t) {
    return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t);
  }, wt.prototype.isIntersectionSphere = function (t) {
    return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t);
  }, wt.prototype.size = function (t) {
    return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(t);
  }, Gt.prototype.empty = function () {
    return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."), this.isEmpty();
  }, Qn.prototype.setFromMatrix = function (t) {
    return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."), this.setFromProjectionMatrix(t);
  }, Qc.prototype.center = function (t) {
    return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."), this.getCenter(t);
  }, ot.random16 = function () {
    return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."), Math.random();
  }, ot.nearestPowerOfTwo = function (t) {
    return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."), ot.floorPowerOfTwo(t);
  }, ot.nextPowerOfTwo = function (t) {
    return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."), ot.ceilPowerOfTwo(t);
  }, ct.prototype.flattenToArrayOffset = function (t, e) {
    return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e);
  }, ct.prototype.multiplyVector3 = function (t) {
    return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), t.applyMatrix3(this);
  }, ct.prototype.multiplyVector3Array = function () {
    console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.");
  }, ct.prototype.applyToBufferAttribute = function (t) {
    return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."), t.applyMatrix3(this);
  }, ct.prototype.applyToVector3Array = function () {
    console.error("THREE.Matrix3: .applyToVector3Array() has been removed.");
  }, ct.prototype.getInverse = function (t) {
    return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(t).invert();
  }, Jt.prototype.extractPosition = function (t) {
    return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(t);
  }, Jt.prototype.flattenToArrayOffset = function (t, e) {
    return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e);
  }, Jt.prototype.getPosition = function () {
    return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), new xt().setFromMatrixColumn(this, 3);
  }, Jt.prototype.setRotationFromQuaternion = function (t) {
    return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(t);
  }, Jt.prototype.multiplyToArray = function () {
    console.warn("THREE.Matrix4: .multiplyToArray() has been removed.");
  }, Jt.prototype.multiplyVector3 = function (t) {
    return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this);
  }, Jt.prototype.multiplyVector4 = function (t) {
    return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this);
  }, Jt.prototype.multiplyVector3Array = function () {
    console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.");
  }, Jt.prototype.rotateAxis = function (t) {
    console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), t.transformDirection(this);
  }, Jt.prototype.crossVector = function (t) {
    return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this);
  }, Jt.prototype.translate = function () {
    console.error("THREE.Matrix4: .translate() has been removed.");
  }, Jt.prototype.rotateX = function () {
    console.error("THREE.Matrix4: .rotateX() has been removed.");
  }, Jt.prototype.rotateY = function () {
    console.error("THREE.Matrix4: .rotateY() has been removed.");
  }, Jt.prototype.rotateZ = function () {
    console.error("THREE.Matrix4: .rotateZ() has been removed.");
  }, Jt.prototype.rotateByAxis = function () {
    console.error("THREE.Matrix4: .rotateByAxis() has been removed.");
  }, Jt.prototype.applyToBufferAttribute = function (t) {
    return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."), t.applyMatrix4(this);
  }, Jt.prototype.applyToVector3Array = function () {
    console.error("THREE.Matrix4: .applyToVector3Array() has been removed.");
  }, Jt.prototype.makeFrustum = function (t, e, n, i, r, s) {
    return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(t, e, i, n, r, s);
  }, Jt.prototype.getInverse = function (t) {
    return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(t).invert();
  }, Te.prototype.isIntersectionLine = function (t) {
    return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(t);
  }, yt.prototype.multiplyVector3 = function (t) {
    return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), t.applyQuaternion(this);
  }, yt.prototype.inverse = function () {
    return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."), this.invert();
  }, Zt.prototype.isIntersectionBox = function (t) {
    return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t);
  }, Zt.prototype.isIntersectionPlane = function (t) {
    return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(t);
  }, Zt.prototype.isIntersectionSphere = function (t) {
    return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t);
  }, Oe.prototype.area = function () {
    return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea();
  }, Oe.prototype.barycoordFromPoint = function (t, e) {
    return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(t, e);
  }, Oe.prototype.midpoint = function (t) {
    return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(t);
  }, Oe.prototypenormal = function (t) {
    return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(t);
  }, Oe.prototype.plane = function (t) {
    return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(t);
  }, Oe.barycoordFromPoint = function (t, e, n, i, r) {
    return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), Oe.getBarycoord(t, e, n, i, r);
  }, Oe.normal = function (t, e, n, i) {
    return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), Oe.getNormal(t, e, n, i);
  }, Al.prototype.extractAllPoints = function (t) {
    return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(t);
  }, Al.prototype.extrude = function (t) {
    return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new so(this, t);
  }, Al.prototype.makeGeometry = function (t) {
    return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new po(this, t);
  }, lt.prototype.fromAttribute = function (t, e, n) {
    return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n);
  }, lt.prototype.distanceToManhattan = function (t) {
    return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t);
  }, lt.prototype.lengthManhattan = function () {
    return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
  }, xt.prototype.setEulerFromRotationMatrix = function () {
    console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.");
  }, xt.prototype.setEulerFromQuaternion = function () {
    console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.");
  }, xt.prototype.getPositionFromMatrix = function (t) {
    return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(t);
  }, xt.prototype.getScaleFromMatrix = function (t) {
    return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(t);
  }, xt.prototype.getColumnFromMatrix = function (t, e) {
    return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, t);
  }, xt.prototype.applyProjection = function (t) {
    return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(t);
  }, xt.prototype.fromAttribute = function (t, e, n) {
    return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n);
  }, xt.prototype.distanceToManhattan = function (t) {
    return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t);
  }, xt.prototype.lengthManhattan = function () {
    return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
  }, mt.prototype.fromAttribute = function (t, e, n) {
    return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n);
  }, mt.prototype.lengthManhattan = function () {
    return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
  }, be.prototype.getChildByName = function (t) {
    return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(t);
  }, be.prototype.renderDepth = function () {
    console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.");
  }, be.prototype.translate = function (t, e) {
    return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(e, t);
  }, be.prototype.getWorldRotation = function () {
    console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.");
  }, be.prototype.applyMatrix = function (t) {
    return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(t);
  }, Object.defineProperties(be.prototype, {
    eulerOrder: {
      get: function get() {
        return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order;
      },
      set: function set(t) {
        console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = t;
      }
    },
    useQuaternion: {
      get: function get() {
        console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
      },
      set: function set() {
        console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
      }
    }
  }), Bn.prototype.setDrawMode = function () {
    console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");
  }, Object.defineProperties(Bn.prototype, {
    drawMode: {
      get: function get() {
        return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."), 0;
      },
      set: function set() {
        console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");
      }
    }
  }), Vs.prototype.initBones = function () {
    console.error("THREE.SkinnedMesh: initBones() has been removed.");
  }, Object.defineProperty(sl.prototype, "__arcLengthDivisions", {
    get: function get() {
      return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions;
    },
    set: function set(t) {
      console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions = t;
    }
  }), Vn.prototype.setLens = function (t, e) {
    console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), void 0 !== e && (this.filmGauge = e), this.setFocalLength(t);
  }, Object.defineProperties(Ll.prototype, {
    onlyShadow: {
      set: function set() {
        console.warn("THREE.Light: .onlyShadow has been removed.");
      }
    },
    shadowCameraFov: {
      set: function set(t) {
        console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = t;
      }
    },
    shadowCameraLeft: {
      set: function set(t) {
        console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = t;
      }
    },
    shadowCameraRight: {
      set: function set(t) {
        console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = t;
      }
    },
    shadowCameraTop: {
      set: function set(t) {
        console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = t;
      }
    },
    shadowCameraBottom: {
      set: function set(t) {
        console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = t;
      }
    },
    shadowCameraNear: {
      set: function set(t) {
        console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = t;
      }
    },
    shadowCameraFar: {
      set: function set(t) {
        console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = t;
      }
    },
    shadowCameraVisible: {
      set: function set() {
        console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.");
      }
    },
    shadowBias: {
      set: function set(t) {
        console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = t;
      }
    },
    shadowDarkness: {
      set: function set() {
        console.warn("THREE.Light: .shadowDarkness has been removed.");
      }
    },
    shadowMapWidth: {
      set: function set(t) {
        console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = t;
      }
    },
    shadowMapHeight: {
      set: function set(t) {
        console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = t;
      }
    }
  }), Object.defineProperties(Ze.prototype, {
    length: {
      get: function get() {
        return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length;
      }
    },
    dynamic: {
      get: function get() {
        return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.usage === nt;
      },
      set: function set() {
        console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.setUsage(nt);
      }
    }
  }), Ze.prototype.setDynamic = function (t) {
    return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(!0 === t ? nt : et), this;
  }, Ze.prototype.copyIndicesArray = function () {
    console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.");
  }, Ze.prototype.setArray = function () {
    console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
  }, vn.prototype.addIndex = function (t) {
    console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(t);
  }, vn.prototype.addAttribute = function (t, e) {
    return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."), e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute ? "index" === t ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(e), this) : this.setAttribute(t, e) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.setAttribute(t, new Ze(arguments[1], arguments[2])));
  }, vn.prototype.addDrawCall = function (t, e, n) {
    void 0 !== n && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(t, e);
  }, vn.prototype.clearDrawCalls = function () {
    console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups();
  }, vn.prototype.computeOffsets = function () {
    console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.");
  }, vn.prototype.removeAttribute = function (t) {
    return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."), this.deleteAttribute(t);
  }, vn.prototype.applyMatrix = function (t) {
    return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(t);
  }, Object.defineProperties(vn.prototype, {
    drawcalls: {
      get: function get() {
        return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups;
      }
    },
    offsets: {
      get: function get() {
        return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups;
      }
    }
  }), Object.defineProperties(Jl.prototype, {
    maxInstancedCount: {
      get: function get() {
        return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."), this.instanceCount;
      },
      set: function set(t) {
        console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."), this.instanceCount = t;
      }
    }
  }), Object.defineProperties(Wc.prototype, {
    linePrecision: {
      get: function get() {
        return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."), this.params.Line.threshold;
      },
      set: function set(t) {
        console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."), this.params.Line.threshold = t;
      }
    }
  }), Object.defineProperties(gs.prototype, {
    dynamic: {
      get: function get() {
        return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."), this.usage === nt;
      },
      set: function set(t) {
        console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."), this.setUsage(t);
      }
    }
  }), gs.prototype.setDynamic = function (t) {
    return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(!0 === t ? nt : et), this;
  }, gs.prototype.setArray = function () {
    console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
  }, so.prototype.getArrays = function () {
    console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.");
  }, so.prototype.addShapeList = function () {
    console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.");
  }, so.prototype.addShape = function () {
    console.error("THREE.ExtrudeGeometry: .addShape() has been removed.");
  }, ms.prototype.dispose = function () {
    console.error("THREE.Scene: .dispose() has been removed.");
  }, Gc.prototype.onUpdate = function () {
    return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this;
  }, Object.defineProperties(Fe.prototype, {
    wrapAround: {
      get: function get() {
        console.warn("THREE.Material: .wrapAround has been removed.");
      },
      set: function set() {
        console.warn("THREE.Material: .wrapAround has been removed.");
      }
    },
    overdraw: {
      get: function get() {
        console.warn("THREE.Material: .overdraw has been removed.");
      },
      set: function set() {
        console.warn("THREE.Material: .overdraw has been removed.");
      }
    },
    wrapRGB: {
      get: function get() {
        return console.warn("THREE.Material: .wrapRGB has been removed."), new je();
      }
    },
    shading: {
      get: function get() {
        console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.");
      },
      set: function set(t) {
        console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === t;
      }
    },
    stencilMask: {
      get: function get() {
        return console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask;
      },
      set: function set(t) {
        console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask = t;
      }
    }
  }), Object.defineProperties(To.prototype, {
    transparency: {
      get: function get() {
        return console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."), this.transmission;
      },
      set: function set(t) {
        console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."), this.transmission = t;
      }
    }
  }), Object.defineProperties(Gn.prototype, {
    derivatives: {
      get: function get() {
        return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives;
      },
      set: function set(t) {
        console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = t;
      }
    }
  }), us.prototype.clearTarget = function (t, e, n, i) {
    console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(t), this.clear(e, n, i);
  }, us.prototype.animate = function (t) {
    console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(t);
  }, us.prototype.getCurrentRenderTarget = function () {
    return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget();
  }, us.prototype.getMaxAnisotropy = function () {
    return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy();
  }, us.prototype.getPrecision = function () {
    return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision;
  }, us.prototype.resetGLState = function () {
    return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset();
  }, us.prototype.supportsFloatTextures = function () {
    return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float");
  }, us.prototype.supportsHalfFloatTextures = function () {
    return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float");
  }, us.prototype.supportsStandardDerivatives = function () {
    return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives");
  }, us.prototype.supportsCompressedTextureS3TC = function () {
    return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc");
  }, us.prototype.supportsCompressedTexturePVRTC = function () {
    return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc");
  }, us.prototype.supportsBlendMinMax = function () {
    return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax");
  }, us.prototype.supportsVertexTextures = function () {
    return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures;
  }, us.prototype.supportsInstancedArrays = function () {
    return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays");
  }, us.prototype.enableScissorTest = function (t) {
    console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(t);
  }, us.prototype.initMaterial = function () {
    console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");
  }, us.prototype.addPrePlugin = function () {
    console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");
  }, us.prototype.addPostPlugin = function () {
    console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");
  }, us.prototype.updateShadowMap = function () {
    console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.");
  }, us.prototype.setFaceCulling = function () {
    console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.");
  }, us.prototype.allocTextureUnit = function () {
    console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.");
  }, us.prototype.setTexture = function () {
    console.warn("THREE.WebGLRenderer: .setTexture() has been removed.");
  }, us.prototype.setTexture2D = function () {
    console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.");
  }, us.prototype.setTextureCube = function () {
    console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.");
  }, us.prototype.getActiveMipMapLevel = function () {
    return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."), this.getActiveMipmapLevel();
  }, Object.defineProperties(us.prototype, {
    shadowMapEnabled: {
      get: function get() {
        return this.shadowMap.enabled;
      },
      set: function set(t) {
        console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = t;
      }
    },
    shadowMapType: {
      get: function get() {
        return this.shadowMap.type;
      },
      set: function set(t) {
        console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = t;
      }
    },
    shadowMapCullFace: {
      get: function get() {
        console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
      },
      set: function set() {
        console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
      }
    },
    context: {
      get: function get() {
        return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."), this.getContext();
      }
    },
    vr: {
      get: function get() {
        return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"), this.xr;
      }
    },
    gammaInput: {
      get: function get() {
        return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."), !1;
      },
      set: function set() {
        console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.");
      }
    },
    gammaOutput: {
      get: function get() {
        return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), !1;
      },
      set: function set(t) {
        console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), this.outputEncoding = !0 === t ? Y : X;
      }
    },
    toneMappingWhitePoint: {
      get: function get() {
        return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."), 1;
      },
      set: function set() {
        console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.");
      }
    }
  }), Object.defineProperties(ns.prototype, {
    cullFace: {
      get: function get() {
        console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
      },
      set: function set() {
        console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
      }
    },
    renderReverseSided: {
      get: function get() {
        console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");
      },
      set: function set() {
        console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");
      }
    },
    renderSingleSided: {
      get: function get() {
        console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");
      },
      set: function set() {
        console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");
      }
    }
  }), Object.defineProperties(gt.prototype, {
    wrapS: {
      get: function get() {
        return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS;
      },
      set: function set(t) {
        console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = t;
      }
    },
    wrapT: {
      get: function get() {
        return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT;
      },
      set: function set(t) {
        console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = t;
      }
    },
    magFilter: {
      get: function get() {
        return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter;
      },
      set: function set(t) {
        console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = t;
      }
    },
    minFilter: {
      get: function get() {
        return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter;
      },
      set: function set(t) {
        console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = t;
      }
    },
    anisotropy: {
      get: function get() {
        return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy;
      },
      set: function set(t) {
        console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = t;
      }
    },
    offset: {
      get: function get() {
        return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset;
      },
      set: function set(t) {
        console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = t;
      }
    },
    repeat: {
      get: function get() {
        return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat;
      },
      set: function set(t) {
        console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = t;
      }
    },
    format: {
      get: function get() {
        return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format;
      },
      set: function set(t) {
        console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = t;
      }
    },
    type: {
      get: function get() {
        return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type;
      },
      set: function set(t) {
        console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = t;
      }
    },
    generateMipmaps: {
      get: function get() {
        return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps;
      },
      set: function set(t) {
        console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = t;
      }
    }
  }), xc.prototype.load = function (t) {
    console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
    var e = this;
    return new lc().load(t, function (t) {
      e.setBuffer(t);
    }), this;
  }, Sc.prototype.getData = function () {
    return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this.getFrequencyData();
  }, jn.prototype.updateCubeMap = function (t, e) {
    return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(t, e);
  }, jn.prototype.clear = function (t, e, n, i) {
    return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."), this.renderTarget.clear(t, e, n, i);
  }, ut.crossOrigin = void 0, ut.loadTexture = function (t, e, n, i) {
    console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
    var r = new rl();
    r.setCrossOrigin(this.crossOrigin);
    var s = r.load(t, n, void 0, i);
    return e && (s.mapping = e), s;
  }, ut.loadTextureCube = function (t, e, n, i) {
    console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
    var r = new nl();
    r.setCrossOrigin(this.crossOrigin);
    var s = r.load(t, n, void 0, i);
    return e && (s.mapping = e), s;
  }, ut.loadCompressedTexture = function () {
    console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.");
  }, ut.loadCompressedTextureCube = function () {
    console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.");
  };
  var Zh = {
    createMultiMaterialObject: function createMultiMaterialObject() {
      console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js");
    },
    detach: function detach() {
      console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js");
    },
    attach: function attach() {
      console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js");
    }
  };
  "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
    detail: {
      revision: e
    }
  })), "undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = e), t.ACESFilmicToneMapping = 4, t.AddEquation = n, t.AddOperation = 2, t.AdditiveAnimationBlendMode = q, t.AdditiveBlending = 2, t.AlphaFormat = 1021, t.AlwaysDepth = 1, t.AlwaysStencilFunc = 519, t.AmbientLight = Wl, t.AmbientLightProbe = hc, t.AnimationClip = qo, t.AnimationLoader = /*#__PURE__*/function (_Qo6) {
    _inherits(_class, _Qo6);

    var _super100 = _createSuper(_class);

    function _class(t) {
      _classCallCheck(this, _class);

      return _super100.call(this, t);
    }

    _createClass(_class, [{
      key: "load",
      value: function load(t, e, n, i) {
        var r = this,
            s = new $o(this.manager);
        s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(t, function (n) {
          try {
            e(r.parse(JSON.parse(n)));
          } catch (e) {
            i ? i(e) : console.error(e), r.manager.itemError(t);
          }
        }, n, i);
      }
    }, {
      key: "parse",
      value: function parse(t) {
        var e = [];

        for (var _n257 = 0; _n257 < t.length; _n257++) {
          var _i197 = qo.parse(t[_n257]);

          e.push(_i197);
        }

        return e;
      }
    }]);

    return _class;
  }(Qo), t.AnimationMixer = Uc, t.AnimationObjectGroup = Fc, t.AnimationUtils = Io, t.ArcCurve = ol, t.ArrayCamera = as, t.ArrowHelper = /*#__PURE__*/function (_be8) {
    _inherits(_class2, _be8);

    var _super101 = _createSuper(_class2);

    function _class2() {
      var _this88;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new xt(0, 0, 1);
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new xt(0, 0, 0);
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 16776960;
      var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : .2 * n;
      var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : .2 * r;

      _classCallCheck(this, _class2);

      _this88 = _super101.call(this), _this88.type = "ArrowHelper", void 0 === yh && (yh = new vn(), yh.setAttribute("position", new sn([0, 0, 0, 0, 1, 0], 3)), xh = new wa(0, .5, 1, 5, 1), xh.translate(0, -.5, 0)), _this88.position.copy(e), _this88.line = new sa(yh, new $s({
        color: i,
        toneMapped: !1
      })), _this88.line.matrixAutoUpdate = !1, _this88.add(_this88.line), _this88.cone = new Bn(xh, new qe({
        color: i,
        toneMapped: !1
      })), _this88.cone.matrixAutoUpdate = !1, _this88.add(_this88.cone), _this88.setDirection(t), _this88.setLength(n, r, s);
      return _this88;
    }

    _createClass(_class2, [{
      key: "setDirection",
      value: function setDirection(t) {
        if (t.y > .99999) this.quaternion.set(0, 0, 0, 1);else if (t.y < -.99999) this.quaternion.set(1, 0, 0, 0);else {
          vh.set(t.z, 0, -t.x).normalize();

          var _e278 = Math.acos(t.y);

          this.quaternion.setFromAxisAngle(vh, _e278);
        }
      }
    }, {
      key: "setLength",
      value: function setLength(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : .2 * t;
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : .2 * e;
        this.line.scale.set(1, Math.max(1e-4, t - e), 1), this.line.updateMatrix(), this.cone.scale.set(n, e, n), this.cone.position.y = t, this.cone.updateMatrix();
      }
    }, {
      key: "setColor",
      value: function setColor(t) {
        this.line.material.color.set(t), this.cone.material.color.set(t);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(_class2.prototype), "copy", this).call(this, t, !1), this.line.copy(t.line), this.cone.copy(t.cone), this;
      }
    }]);

    return _class2;
  }(be), t.Audio = xc, t.AudioAnalyser = Sc, t.AudioContext = oc, t.AudioListener = /*#__PURE__*/function (_be9) {
    _inherits(_class3, _be9);

    var _super102 = _createSuper(_class3);

    function _class3() {
      var _this89;

      _classCallCheck(this, _class3);

      _this89 = _super102.call(this), _this89.type = "AudioListener", _this89.context = oc.getContext(), _this89.gain = _this89.context.createGain(), _this89.gain.connect(_this89.context.destination), _this89.filter = null, _this89.timeDelta = 0, _this89._clock = new pc();
      return _this89;
    }

    _createClass(_class3, [{
      key: "getInput",
      value: function getInput() {
        return this.gain;
      }
    }, {
      key: "removeFilter",
      value: function removeFilter() {
        return null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this;
      }
    }, {
      key: "getFilter",
      value: function getFilter() {
        return this.filter;
      }
    }, {
      key: "setFilter",
      value: function setFilter(t) {
        return null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = t, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this;
      }
    }, {
      key: "getMasterVolume",
      value: function getMasterVolume() {
        return this.gain.gain.value;
      }
    }, {
      key: "setMasterVolume",
      value: function setMasterVolume(t) {
        return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this;
      }
    }, {
      key: "updateMatrixWorld",
      value: function updateMatrixWorld(t) {
        _get(_getPrototypeOf(_class3.prototype), "updateMatrixWorld", this).call(this, t);

        var e = this.context.listener,
            n = this.up;

        if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(mc, gc, vc), yc.set(0, 0, -1).applyQuaternion(gc), e.positionX) {
          var _t310 = this.context.currentTime + this.timeDelta;

          e.positionX.linearRampToValueAtTime(mc.x, _t310), e.positionY.linearRampToValueAtTime(mc.y, _t310), e.positionZ.linearRampToValueAtTime(mc.z, _t310), e.forwardX.linearRampToValueAtTime(yc.x, _t310), e.forwardY.linearRampToValueAtTime(yc.y, _t310), e.forwardZ.linearRampToValueAtTime(yc.z, _t310), e.upX.linearRampToValueAtTime(n.x, _t310), e.upY.linearRampToValueAtTime(n.y, _t310), e.upZ.linearRampToValueAtTime(n.z, _t310);
        } else e.setPosition(mc.x, mc.y, mc.z), e.setOrientation(yc.x, yc.y, yc.z, n.x, n.y, n.z);
      }
    }]);

    return _class3;
  }(be), t.AudioLoader = lc, t.AxesHelper = _h, t.AxisHelper = function (t) {
    return console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."), new _h(t);
  }, t.BackSide = 1, t.BasicDepthPacking = 3200, t.BasicShadowMap = 0, t.BinaryTextureLoader = function (t) {
    return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."), new il(t);
  }, t.Bone = Ws, t.BooleanKeyframeTrack = Ho, t.BoundingBoxHelper = function (t, e) {
    return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."), new gh(t, e);
  }, t.Box2 = Yc, t.Box3 = wt, t.Box3Helper = /*#__PURE__*/function (_la5) {
    _inherits(_class4, _la5);

    var _super103 = _createSuper(_class4);

    function _class4(t) {
      var _this90;

      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16776960;

      _classCallCheck(this, _class4);

      var n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
          i = new vn();
      i.setIndex(new Ze(n, 1)), i.setAttribute("position", new sn([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], 3)), _this90 = _super103.call(this, i, new $s({
        color: e,
        toneMapped: !1
      })), _this90.box = t, _this90.type = "Box3Helper", _this90.geometry.computeBoundingSphere();
      return _this90;
    }

    _createClass(_class4, [{
      key: "updateMatrixWorld",
      value: function updateMatrixWorld(t) {
        var e = this.box;
        e.isEmpty() || (e.getCenter(this.position), e.getSize(this.scale), this.scale.multiplyScalar(.5), _get(_getPrototypeOf(_class4.prototype), "updateMatrixWorld", this).call(this, t));
      }
    }]);

    return _class4;
  }(la), t.BoxBufferGeometry = zn, t.BoxGeometry = zn, t.BoxHelper = gh, t.BufferAttribute = Ze, t.BufferGeometry = vn, t.BufferGeometryLoader = Kl, t.ByteType = 1010, t.Cache = Yo, t.Camera = kn, t.CameraHelper = /*#__PURE__*/function (_la6) {
    _inherits(_class5, _la6);

    var _super104 = _createSuper(_class5);

    function _class5(t) {
      var _this91;

      _classCallCheck(this, _class5);

      var e = new vn(),
          n = new $s({
        color: 16777215,
        vertexColors: !0,
        toneMapped: !1
      }),
          i = [],
          r = [],
          s = {},
          a = new je(16755200),
          o = new je(16711680),
          l = new je(43775),
          c = new je(16777215),
          h = new je(3355443);

      function u(t, e, n) {
        d(t, n), d(e, n);
      }

      function d(t, e) {
        i.push(0, 0, 0), r.push(e.r, e.g, e.b), void 0 === s[t] && (s[t] = []), s[t].push(i.length / 3 - 1);
      }

      u("n1", "n2", a), u("n2", "n4", a), u("n4", "n3", a), u("n3", "n1", a), u("f1", "f2", a), u("f2", "f4", a), u("f4", "f3", a), u("f3", "f1", a), u("n1", "f1", a), u("n2", "f2", a), u("n3", "f3", a), u("n4", "f4", a), u("p", "n1", o), u("p", "n2", o), u("p", "n3", o), u("p", "n4", o), u("u1", "u2", l), u("u2", "u3", l), u("u3", "u1", l), u("c", "t", c), u("p", "c", h), u("cn1", "cn2", h), u("cn3", "cn4", h), u("cf1", "cf2", h), u("cf3", "cf4", h), e.setAttribute("position", new sn(i, 3)), e.setAttribute("color", new sn(r, 3)), _this91 = _super104.call(this, e, n), _this91.type = "CameraHelper", _this91.camera = t, _this91.camera.updateProjectionMatrix && _this91.camera.updateProjectionMatrix(), _this91.matrix = t.matrixWorld, _this91.matrixAutoUpdate = !1, _this91.pointMap = s, _this91.update();
      return _this91;
    }

    _createClass(_class5, [{
      key: "update",
      value: function update() {
        var t = this.geometry,
            e = this.pointMap;
        ph.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse), fh("c", e, t, ph, 0, 0, -1), fh("t", e, t, ph, 0, 0, 1), fh("n1", e, t, ph, -1, -1, -1), fh("n2", e, t, ph, 1, -1, -1), fh("n3", e, t, ph, -1, 1, -1), fh("n4", e, t, ph, 1, 1, -1), fh("f1", e, t, ph, -1, -1, 1), fh("f2", e, t, ph, 1, -1, 1), fh("f3", e, t, ph, -1, 1, 1), fh("f4", e, t, ph, 1, 1, 1), fh("u1", e, t, ph, .7, 1.1, -1), fh("u2", e, t, ph, -.7, 1.1, -1), fh("u3", e, t, ph, 0, 2, -1), fh("cf1", e, t, ph, -1, 0, 1), fh("cf2", e, t, ph, 1, 0, 1), fh("cf3", e, t, ph, 0, -1, 1), fh("cf4", e, t, ph, 0, 1, 1), fh("cn1", e, t, ph, -1, 0, -1), fh("cn2", e, t, ph, 1, 0, -1), fh("cn3", e, t, ph, 0, -1, -1), fh("cn4", e, t, ph, 0, 1, -1), t.getAttribute("position").needsUpdate = !0;
      }
    }]);

    return _class5;
  }(la), t.CanvasRenderer = function () {
    console.error("THREE.CanvasRenderer has been removed");
  }, t.CanvasTexture = xa, t.CatmullRomCurve3 = pl, t.CineonToneMapping = 3, t.CircleBufferGeometry = ba, t.CircleGeometry = ba, t.ClampToEdgeWrapping = u, t.Clock = pc, t.Color = je, t.ColorKeyframeTrack = Uo, t.CompressedTexture = ya, t.CompressedTextureLoader = tl, t.ConeBufferGeometry = Ma, t.ConeGeometry = Ma, t.CubeCamera = jn, t.CubeReflectionMapping = r, t.CubeRefractionMapping = s, t.CubeTexture = qn, t.CubeTextureLoader = nl, t.CubeUVReflectionMapping = l, t.CubeUVRefractionMapping = c, t.CubicBezierCurve = vl, t.CubicBezierCurve3 = yl, t.CubicInterpolant = Bo, t.CullFaceBack = 1, t.CullFaceFront = 2, t.CullFaceFrontBack = 3, t.CullFaceNone = 0, t.Curve = sl, t.CurvePath = Tl, t.CustomBlending = 5, t.CustomToneMapping = 5, t.CylinderBufferGeometry = wa, t.CylinderGeometry = wa, t.Cylindrical = /*#__PURE__*/function () {
    function _class6() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      _classCallCheck(this, _class6);

      return this.radius = t, this.theta = e, this.y = n, this;
    }

    _createClass(_class6, [{
      key: "set",
      value: function set(t, e, n) {
        return this.radius = t, this.theta = e, this.y = n, this;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this.radius = t.radius, this.theta = t.theta, this.y = t.y, this;
      }
    }, {
      key: "setFromVector3",
      value: function setFromVector3(t) {
        return this.setFromCartesianCoords(t.x, t.y, t.z);
      }
    }, {
      key: "setFromCartesianCoords",
      value: function setFromCartesianCoords(t, e, n) {
        return this.radius = Math.sqrt(t * t + n * n), this.theta = Math.atan2(t, n), this.y = e, this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }]);

    return _class6;
  }(), t.DataTexture = Yn, t.DataTexture2DArray = yi, t.DataTexture3D = xi, t.DataTextureLoader = il, t.DataUtils = Mh, t.DecrementStencilOp = 7683, t.DecrementWrapStencilOp = 34056, t.DefaultLoadingManager = Jo, t.DepthFormat = A, t.DepthStencilFormat = L, t.DepthTexture = _a, t.DirectionalLight = Vl, t.DirectionalLightHelper = /*#__PURE__*/function (_be10) {
    _inherits(_class7, _be10);

    var _super105 = _createSuper(_class7);

    function _class7(t, e, n) {
      var _this92;

      _classCallCheck(this, _class7);

      _this92 = _super105.call(this), _this92.light = t, _this92.light.updateMatrixWorld(), _this92.matrix = t.matrixWorld, _this92.matrixAutoUpdate = !1, _this92.color = n, void 0 === e && (e = 1);
      var i = new vn();
      i.setAttribute("position", new sn([-e, e, 0, e, e, 0, e, -e, 0, -e, -e, 0, -e, e, 0], 3));
      var r = new $s({
        fog: !1,
        toneMapped: !1
      });
      _this92.lightPlane = new sa(i, r), _this92.add(_this92.lightPlane), i = new vn(), i.setAttribute("position", new sn([0, 0, 0, 0, 0, 1], 3)), _this92.targetLine = new sa(i, r), _this92.add(_this92.targetLine), _this92.update();
      return _this92;
    }

    _createClass(_class7, [{
      key: "dispose",
      value: function dispose() {
        this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose();
      }
    }, {
      key: "update",
      value: function update() {
        ch.setFromMatrixPosition(this.light.matrixWorld), hh.setFromMatrixPosition(this.light.target.matrixWorld), uh.subVectors(hh, ch), this.lightPlane.lookAt(hh), void 0 !== this.color ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(hh), this.targetLine.scale.z = uh.length();
      }
    }]);

    return _class7;
  }(be), t.DiscreteInterpolant = zo, t.DodecahedronBufferGeometry = Ta, t.DodecahedronGeometry = Ta, t.DoubleSide = 2, t.DstAlphaFactor = 206, t.DstColorFactor = 208, t.DynamicBufferAttribute = function (t, e) {
    return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setUsage( THREE.DynamicDrawUsage ) instead."), new Ze(t, e).setUsage(nt);
  }, t.DynamicCopyUsage = 35050, t.DynamicDrawUsage = nt, t.DynamicReadUsage = 35049, t.EdgesGeometry = Ca, t.EdgesHelper = function (t, e) {
    return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."), new la(new Ca(t.geometry), new $s({
      color: void 0 !== e ? e : 16777215
    }));
  }, t.EllipseCurve = al, t.EqualDepth = 4, t.EqualStencilFunc = 514, t.EquirectangularReflectionMapping = a, t.EquirectangularRefractionMapping = o, t.Euler = ae, t.EventDispatcher = rt, t.ExtrudeBufferGeometry = so, t.ExtrudeGeometry = so, t.FaceColors = 1, t.FileLoader = $o, t.FlatShading = 1, t.Float16BufferAttribute = rn, t.Float32Attribute = function (t, e) {
    return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."), new sn(t, e);
  }, t.Float32BufferAttribute = sn, t.Float64Attribute = function (t, e) {
    return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."), new an(t, e);
  }, t.Float64BufferAttribute = an, t.FloatType = w, t.Fog = fs, t.FogExp2 = ps, t.Font = rc, t.FontLoader = /*#__PURE__*/function (_Qo7) {
    _inherits(_class8, _Qo7);

    var _super106 = _createSuper(_class8);

    function _class8(t) {
      _classCallCheck(this, _class8);

      return _super106.call(this, t);
    }

    _createClass(_class8, [{
      key: "load",
      value: function load(t, e, n, i) {
        var r = this,
            s = new $o(this.manager);
        s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(r.withCredentials), s.load(t, function (t) {
          var n;

          try {
            n = JSON.parse(t);
          } catch (e) {
            console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), n = JSON.parse(t.substring(65, t.length - 2));
          }

          var i = r.parse(n);
          e && e(i);
        }, n, i);
      }
    }, {
      key: "parse",
      value: function parse(t) {
        return new rc(t);
      }
    }]);

    return _class8;
  }(Qo), t.FrontSide = 0, t.Frustum = Qn, t.GLBufferAttribute = Vc, t.GLSL1 = "100", t.GLSL3 = it, t.GammaEncoding = Z, t.GreaterDepth = 6, t.GreaterEqualDepth = 5, t.GreaterEqualStencilFunc = 518, t.GreaterStencilFunc = 516, t.GridHelper = lh, t.Group = os, t.HalfFloatType = M, t.HemisphereLight = Rl, t.HemisphereLightHelper = /*#__PURE__*/function (_be11) {
    _inherits(_class9, _be11);

    var _super107 = _createSuper(_class9);

    function _class9(t, e, n) {
      var _this93;

      _classCallCheck(this, _class9);

      _this93 = _super107.call(this), _this93.light = t, _this93.light.updateMatrixWorld(), _this93.matrix = t.matrixWorld, _this93.matrixAutoUpdate = !1, _this93.color = n;
      var i = new co(e);
      i.rotateY(.5 * Math.PI), _this93.material = new qe({
        wireframe: !0,
        fog: !1,
        toneMapped: !1
      }), void 0 === _this93.color && (_this93.material.vertexColors = !0);
      var r = i.getAttribute("position"),
          s = new Float32Array(3 * r.count);
      i.setAttribute("color", new Ze(s, 3)), _this93.add(new Bn(i, _this93.material)), _this93.update();
      return _this93;
    }

    _createClass(_class9, [{
      key: "dispose",
      value: function dispose() {
        this.children[0].geometry.dispose(), this.children[0].material.dispose();
      }
    }, {
      key: "update",
      value: function update() {
        var t = this.children[0];
        if (void 0 !== this.color) this.material.color.set(this.color);else {
          var _e279 = t.geometry.getAttribute("color");

          ah.copy(this.light.color), oh.copy(this.light.groundColor);

          for (var _t311 = 0, _n258 = _e279.count; _t311 < _n258; _t311++) {
            var _i198 = _t311 < _n258 / 2 ? ah : oh;

            _e279.setXYZ(_t311, _i198.r, _i198.g, _i198.b);
          }

          _e279.needsUpdate = !0;
        }
        t.lookAt(sh.setFromMatrixPosition(this.light.matrixWorld).negate());
      }
    }]);

    return _class9;
  }(be), t.HemisphereLightProbe = cc, t.IcosahedronBufferGeometry = oo, t.IcosahedronGeometry = oo, t.ImageBitmapLoader = nc, t.ImageLoader = el, t.ImageUtils = ut, t.ImmediateRenderObject = Kc, t.IncrementStencilOp = 7682, t.IncrementWrapStencilOp = 34055, t.InstancedBufferAttribute = Ql, t.InstancedBufferGeometry = Jl, t.InstancedInterleavedBuffer = kc, t.InstancedMesh = Ks, t.Int16Attribute = function (t, e) {
    return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."), new $e(t, e);
  }, t.Int16BufferAttribute = $e, t.Int32Attribute = function (t, e) {
    return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."), new en(t, e);
  }, t.Int32BufferAttribute = en, t.Int8Attribute = function (t, e) {
    return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."), new Je(t, e);
  }, t.Int8BufferAttribute = Je, t.IntType = 1013, t.InterleavedBuffer = gs, t.InterleavedBufferAttribute = ys, t.Interpolant = No, t.InterpolateDiscrete = H, t.InterpolateLinear = U, t.InterpolateSmooth = G, t.InvertStencilOp = 5386, t.JSONLoader = function () {
    console.error("THREE.JSONLoader has been removed.");
  }, t.KeepStencilOp = tt, t.KeyframeTrack = Fo, t.LOD = zs, t.LatheBufferGeometry = lo, t.LatheGeometry = lo, t.Layers = oe, t.LensFlare = function () {
    console.error("THREE.LensFlare has been moved to /examples/jsm/objects/Lensflare.js");
  }, t.LessDepth = 2, t.LessEqualDepth = 3, t.LessEqualStencilFunc = 515, t.LessStencilFunc = 513, t.Light = Ll, t.LightProbe = Xl, t.Line = sa, t.Line3 = Qc, t.LineBasicMaterial = $s, t.LineCurve = xl, t.LineCurve3 = _l, t.LineDashedMaterial = Po, t.LineLoop = ca, t.LinePieces = 1, t.LineSegments = la, t.LineStrip = 0, t.LinearEncoding = X, t.LinearFilter = g, t.LinearInterpolant = Oo, t.LinearMipMapLinearFilter = 1008, t.LinearMipMapNearestFilter = 1007, t.LinearMipmapLinearFilter = y, t.LinearMipmapNearestFilter = v, t.LinearToneMapping = 1, t.Loader = Qo, t.LoaderUtils = Zl, t.LoadingManager = Zo, t.LogLuvEncoding = 3003, t.LoopOnce = 2200, t.LoopPingPong = 2202, t.LoopRepeat = 2201, t.LuminanceAlphaFormat = 1025, t.LuminanceFormat = 1024, t.MOUSE = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2
  }, t.Material = Fe, t.MaterialLoader = Yl, t.Math = ot, t.MathUtils = ot, t.Matrix3 = ct, t.Matrix4 = Jt, t.MaxEquation = 104, t.Mesh = Bn, t.MeshBasicMaterial = qe, t.MeshDepthMaterial = ts, t.MeshDistanceMaterial = es, t.MeshFaceMaterial = function (t) {
    return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."), t;
  }, t.MeshLambertMaterial = Ro, t.MeshMatcapMaterial = Co, t.MeshNormalMaterial = Lo, t.MeshPhongMaterial = Eo, t.MeshPhysicalMaterial = To, t.MeshStandardMaterial = So, t.MeshToonMaterial = Ao, t.MinEquation = 103, t.MirroredRepeatWrapping = d, t.MixOperation = 1, t.MultiMaterial = function () {
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return console.warn("THREE.MultiMaterial has been removed. Use an Array instead."), t.isMultiMaterial = !0, t.materials = t, t.clone = function () {
      return t.slice();
    }, t;
  }, t.MultiplyBlending = 4, t.MultiplyOperation = 0, t.NearestFilter = p, t.NearestMipMapLinearFilter = 1005, t.NearestMipMapNearestFilter = 1004, t.NearestMipmapLinearFilter = m, t.NearestMipmapNearestFilter = f, t.NeverDepth = 0, t.NeverStencilFunc = 512, t.NoBlending = 0, t.NoColors = 0, t.NoToneMapping = 0, t.NormalAnimationBlendMode = j, t.NormalBlending = 1, t.NotEqualDepth = 7, t.NotEqualStencilFunc = 517, t.NumberKeyframeTrack = Go, t.Object3D = be, t.ObjectLoader = /*#__PURE__*/function (_Qo8) {
    _inherits(_class10, _Qo8);

    var _super108 = _createSuper(_class10);

    function _class10(t) {
      _classCallCheck(this, _class10);

      return _super108.call(this, t);
    }

    _createClass(_class10, [{
      key: "load",
      value: function load(t, e, n, i) {
        var r = this,
            s = "" === this.path ? Zl.extractUrlBase(t) : this.path;
        this.resourcePath = this.resourcePath || s;
        var a = new $o(this.manager);
        a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(t, function (n) {
          var s = null;

          try {
            s = JSON.parse(n);
          } catch (e) {
            return void 0 !== i && i(e), void console.error("THREE:ObjectLoader: Can't parse " + t + ".", e.message);
          }

          var a = s.metadata;
          void 0 !== a && void 0 !== a.type && "geometry" !== a.type.toLowerCase() ? r.parse(s, e) : console.error("THREE.ObjectLoader: Can't load " + t);
        }, n, i);
      }
    }, {
      key: "parse",
      value: function parse(t, e) {
        var n = this.parseAnimations(t.animations),
            i = this.parseShapes(t.shapes),
            r = this.parseGeometries(t.geometries, i),
            s = this.parseImages(t.images, function () {
          void 0 !== e && e(l);
        }),
            a = this.parseTextures(t.textures, s),
            o = this.parseMaterials(t.materials, a),
            l = this.parseObject(t.object, r, o, n),
            c = this.parseSkeletons(t.skeletons, l);

        if (this.bindSkeletons(l, c), void 0 !== e) {
          var _t312 = !1;

          for (var _e280 in s) {
            if (s[_e280] instanceof HTMLImageElement) {
              _t312 = !0;
              break;
            }
          }

          !1 === _t312 && e(l);
        }

        return l;
      }
    }, {
      key: "parseShapes",
      value: function parseShapes(t) {
        var e = {};
        if (void 0 !== t) for (var _n259 = 0, _i199 = t.length; _n259 < _i199; _n259++) {
          var _i200 = new Al().fromJSON(t[_n259]);

          e[_i200.uuid] = _i200;
        }
        return e;
      }
    }, {
      key: "parseSkeletons",
      value: function parseSkeletons(t, e) {
        var n = {},
            i = {};
        if (e.traverse(function (t) {
          t.isBone && (i[t.uuid] = t);
        }), void 0 !== t) for (var _e281 = 0, _r153 = t.length; _e281 < _r153; _e281++) {
          var _r154 = new Xs().fromJSON(t[_e281], i);

          n[_r154.uuid] = _r154;
        }
        return n;
      }
    }, {
      key: "parseGeometries",
      value: function parseGeometries(t, e) {
        var n = {};
        var i;

        if (void 0 !== t) {
          var _r155 = new Kl();

          for (var _s88 = 0, _a74 = t.length; _s88 < _a74; _s88++) {
            var _a75 = void 0;

            var _o45 = t[_s88];

            switch (_o45.type) {
              case "PlaneGeometry":
              case "PlaneBufferGeometry":
                _a75 = new bo[_o45.type](_o45.width, _o45.height, _o45.widthSegments, _o45.heightSegments);
                break;

              case "BoxGeometry":
              case "BoxBufferGeometry":
                _a75 = new bo[_o45.type](_o45.width, _o45.height, _o45.depth, _o45.widthSegments, _o45.heightSegments, _o45.depthSegments);
                break;

              case "CircleGeometry":
              case "CircleBufferGeometry":
                _a75 = new bo[_o45.type](_o45.radius, _o45.segments, _o45.thetaStart, _o45.thetaLength);
                break;

              case "CylinderGeometry":
              case "CylinderBufferGeometry":
                _a75 = new bo[_o45.type](_o45.radiusTop, _o45.radiusBottom, _o45.height, _o45.radialSegments, _o45.heightSegments, _o45.openEnded, _o45.thetaStart, _o45.thetaLength);
                break;

              case "ConeGeometry":
              case "ConeBufferGeometry":
                _a75 = new bo[_o45.type](_o45.radius, _o45.height, _o45.radialSegments, _o45.heightSegments, _o45.openEnded, _o45.thetaStart, _o45.thetaLength);
                break;

              case "SphereGeometry":
              case "SphereBufferGeometry":
                _a75 = new bo[_o45.type](_o45.radius, _o45.widthSegments, _o45.heightSegments, _o45.phiStart, _o45.phiLength, _o45.thetaStart, _o45.thetaLength);
                break;

              case "DodecahedronGeometry":
              case "DodecahedronBufferGeometry":
              case "IcosahedronGeometry":
              case "IcosahedronBufferGeometry":
              case "OctahedronGeometry":
              case "OctahedronBufferGeometry":
              case "TetrahedronGeometry":
              case "TetrahedronBufferGeometry":
                _a75 = new bo[_o45.type](_o45.radius, _o45.detail);
                break;

              case "RingGeometry":
              case "RingBufferGeometry":
                _a75 = new bo[_o45.type](_o45.innerRadius, _o45.outerRadius, _o45.thetaSegments, _o45.phiSegments, _o45.thetaStart, _o45.thetaLength);
                break;

              case "TorusGeometry":
              case "TorusBufferGeometry":
                _a75 = new bo[_o45.type](_o45.radius, _o45.tube, _o45.radialSegments, _o45.tubularSegments, _o45.arc);
                break;

              case "TorusKnotGeometry":
              case "TorusKnotBufferGeometry":
                _a75 = new bo[_o45.type](_o45.radius, _o45.tube, _o45.tubularSegments, _o45.radialSegments, _o45.p, _o45.q);
                break;

              case "TubeGeometry":
              case "TubeBufferGeometry":
                _a75 = new bo[_o45.type](new Sl[_o45.path.type]().fromJSON(_o45.path), _o45.tubularSegments, _o45.radius, _o45.radialSegments, _o45.closed);
                break;

              case "LatheGeometry":
              case "LatheBufferGeometry":
                _a75 = new bo[_o45.type](_o45.points, _o45.segments, _o45.phiStart, _o45.phiLength);
                break;

              case "PolyhedronGeometry":
              case "PolyhedronBufferGeometry":
                _a75 = new bo[_o45.type](_o45.vertices, _o45.indices, _o45.radius, _o45.details);
                break;

              case "ShapeGeometry":
              case "ShapeBufferGeometry":
                i = [];

                for (var _t314 = 0, _n260 = _o45.shapes.length; _t314 < _n260; _t314++) {
                  var _n261 = e[_o45.shapes[_t314]];
                  i.push(_n261);
                }

                _a75 = new bo[_o45.type](i, _o45.curveSegments);
                break;

              case "ExtrudeGeometry":
              case "ExtrudeBufferGeometry":
                i = [];

                for (var _t315 = 0, _n262 = _o45.shapes.length; _t315 < _n262; _t315++) {
                  var _n263 = e[_o45.shapes[_t315]];
                  i.push(_n263);
                }

                var _t313 = _o45.options.extrudePath;
                void 0 !== _t313 && (_o45.options.extrudePath = new Sl[_t313.type]().fromJSON(_t313)), _a75 = new bo[_o45.type](i, _o45.options);
                break;

              case "BufferGeometry":
              case "InstancedBufferGeometry":
                _a75 = _r155.parse(_o45);
                break;

              case "Geometry":
                console.error('THREE.ObjectLoader: Loading "Geometry" is not supported anymore.');
                break;

              default:
                console.warn('THREE.ObjectLoader: Unsupported geometry type "' + _o45.type + '"');
                continue;
            }

            _a75.uuid = _o45.uuid, void 0 !== _o45.name && (_a75.name = _o45.name), !0 === _a75.isBufferGeometry && void 0 !== _o45.userData && (_a75.userData = _o45.userData), n[_o45.uuid] = _a75;
          }
        }

        return n;
      }
    }, {
      key: "parseMaterials",
      value: function parseMaterials(t, e) {
        var n = {},
            i = {};

        if (void 0 !== t) {
          var _r156 = new Yl();

          _r156.setTextures(e);

          for (var _e282 = 0, _s89 = t.length; _e282 < _s89; _e282++) {
            var _s90 = t[_e282];

            if ("MultiMaterial" === _s90.type) {
              var _t316 = [];

              for (var _e283 = 0; _e283 < _s90.materials.length; _e283++) {
                var _i201 = _s90.materials[_e283];
                void 0 === n[_i201.uuid] && (n[_i201.uuid] = _r156.parse(_i201)), _t316.push(n[_i201.uuid]);
              }

              i[_s90.uuid] = _t316;
            } else void 0 === n[_s90.uuid] && (n[_s90.uuid] = _r156.parse(_s90)), i[_s90.uuid] = n[_s90.uuid];
          }
        }

        return i;
      }
    }, {
      key: "parseAnimations",
      value: function parseAnimations(t) {
        var e = {};
        if (void 0 !== t) for (var _n264 = 0; _n264 < t.length; _n264++) {
          var _i202 = t[_n264],
              _r157 = qo.parse(_i202);

          e[_r157.uuid] = _r157;
        }
        return e;
      }
    }, {
      key: "parseImages",
      value: function parseImages(t, e) {
        var n = this,
            i = {};
        var r;

        function s(t) {
          if ("string" == typeof t) {
            var _e284 = t;
            return function (t) {
              return n.manager.itemStart(t), r.load(t, function () {
                n.manager.itemEnd(t);
              }, void 0, function () {
                n.manager.itemError(t), n.manager.itemEnd(t);
              });
            }(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(_e284) ? _e284 : n.resourcePath + _e284);
          }

          return t.data ? {
            data: cn(t.type, t.data),
            width: t.width,
            height: t.height
          } : null;
        }

        if (void 0 !== t && t.length > 0) {
          var _n265 = new Zo(e);

          r = new el(_n265), r.setCrossOrigin(this.crossOrigin);

          for (var _e285 = 0, _n266 = t.length; _e285 < _n266; _e285++) {
            var _n267 = t[_e285],
                _r158 = _n267.url;

            if (Array.isArray(_r158)) {
              i[_n267.uuid] = [];

              for (var _t317 = 0, _e286 = _r158.length; _t317 < _e286; _t317++) {
                var _e287 = s(_r158[_t317]);

                null !== _e287 && (_e287 instanceof HTMLImageElement ? i[_n267.uuid].push(_e287) : i[_n267.uuid].push(new Yn(_e287.data, _e287.width, _e287.height)));
              }
            } else {
              var _t318 = s(_n267.url);

              null !== _t318 && (i[_n267.uuid] = _t318);
            }
          }
        }

        return i;
      }
    }, {
      key: "parseTextures",
      value: function parseTextures(t, e) {
        function n(t, e) {
          return "number" == typeof t ? t : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", t), e[t]);
        }

        var i = {};
        if (void 0 !== t) for (var _r159 = 0, _s91 = t.length; _r159 < _s91; _r159++) {
          var _s92 = t[_r159];

          var _a76 = void 0;

          void 0 === _s92.image && console.warn('THREE.ObjectLoader: No "image" specified for', _s92.uuid), void 0 === e[_s92.image] && console.warn("THREE.ObjectLoader: Undefined image", _s92.image);
          var _o46 = e[_s92.image];
          Array.isArray(_o46) ? (_a76 = new qn(_o46), 6 === _o46.length && (_a76.needsUpdate = !0)) : (_a76 = _o46 && _o46.data ? new Yn(_o46.data, _o46.width, _o46.height) : new pt(_o46), _o46 && (_a76.needsUpdate = !0)), _a76.uuid = _s92.uuid, void 0 !== _s92.name && (_a76.name = _s92.name), void 0 !== _s92.mapping && (_a76.mapping = n(_s92.mapping, $l)), void 0 !== _s92.offset && _a76.offset.fromArray(_s92.offset), void 0 !== _s92.repeat && _a76.repeat.fromArray(_s92.repeat), void 0 !== _s92.center && _a76.center.fromArray(_s92.center), void 0 !== _s92.rotation && (_a76.rotation = _s92.rotation), void 0 !== _s92.wrap && (_a76.wrapS = n(_s92.wrap[0], tc), _a76.wrapT = n(_s92.wrap[1], tc)), void 0 !== _s92.format && (_a76.format = _s92.format), void 0 !== _s92.type && (_a76.type = _s92.type), void 0 !== _s92.encoding && (_a76.encoding = _s92.encoding), void 0 !== _s92.minFilter && (_a76.minFilter = n(_s92.minFilter, ec)), void 0 !== _s92.magFilter && (_a76.magFilter = n(_s92.magFilter, ec)), void 0 !== _s92.anisotropy && (_a76.anisotropy = _s92.anisotropy), void 0 !== _s92.flipY && (_a76.flipY = _s92.flipY), void 0 !== _s92.premultiplyAlpha && (_a76.premultiplyAlpha = _s92.premultiplyAlpha), void 0 !== _s92.unpackAlignment && (_a76.unpackAlignment = _s92.unpackAlignment), i[_s92.uuid] = _a76;
        }
        return i;
      }
    }, {
      key: "parseObject",
      value: function parseObject(t, e, n, i) {
        var r, s, a;

        function o(t) {
          return void 0 === e[t] && console.warn("THREE.ObjectLoader: Undefined geometry", t), e[t];
        }

        function l(t) {
          if (void 0 !== t) {
            if (Array.isArray(t)) {
              var _e288 = [];

              for (var _i203 = 0, _r160 = t.length; _i203 < _r160; _i203++) {
                var _r161 = t[_i203];
                void 0 === n[_r161] && console.warn("THREE.ObjectLoader: Undefined material", _r161), _e288.push(n[_r161]);
              }

              return _e288;
            }

            return void 0 === n[t] && console.warn("THREE.ObjectLoader: Undefined material", t), n[t];
          }
        }

        switch (t.type) {
          case "Scene":
            r = new ms(), void 0 !== t.background && Number.isInteger(t.background) && (r.background = new je(t.background)), void 0 !== t.fog && ("Fog" === t.fog.type ? r.fog = new fs(t.fog.color, t.fog.near, t.fog.far) : "FogExp2" === t.fog.type && (r.fog = new ps(t.fog.color, t.fog.density)));
            break;

          case "PerspectiveCamera":
            r = new Vn(t.fov, t.aspect, t.near, t.far), void 0 !== t.focus && (r.focus = t.focus), void 0 !== t.zoom && (r.zoom = t.zoom), void 0 !== t.filmGauge && (r.filmGauge = t.filmGauge), void 0 !== t.filmOffset && (r.filmOffset = t.filmOffset), void 0 !== t.view && (r.view = Object.assign({}, t.view));
            break;

          case "OrthographicCamera":
            r = new Gl(t.left, t.right, t.top, t.bottom, t.near, t.far), void 0 !== t.zoom && (r.zoom = t.zoom), void 0 !== t.view && (r.view = Object.assign({}, t.view));
            break;

          case "AmbientLight":
            r = new Wl(t.color, t.intensity);
            break;

          case "DirectionalLight":
            r = new Vl(t.color, t.intensity);
            break;

          case "PointLight":
            r = new Ul(t.color, t.intensity, t.distance, t.decay);
            break;

          case "RectAreaLight":
            r = new jl(t.color, t.intensity, t.width, t.height);
            break;

          case "SpotLight":
            r = new Bl(t.color, t.intensity, t.distance, t.angle, t.penumbra, t.decay);
            break;

          case "HemisphereLight":
            r = new Rl(t.color, t.groundColor, t.intensity);
            break;

          case "LightProbe":
            r = new Xl().fromJSON(t);
            break;

          case "SkinnedMesh":
            s = o(t.geometry), a = l(t.material), r = new Vs(s, a), void 0 !== t.bindMode && (r.bindMode = t.bindMode), void 0 !== t.bindMatrix && r.bindMatrix.fromArray(t.bindMatrix), void 0 !== t.skeleton && (r.skeleton = t.skeleton);
            break;

          case "Mesh":
            s = o(t.geometry), a = l(t.material), r = new Bn(s, a);
            break;

          case "InstancedMesh":
            s = o(t.geometry), a = l(t.material);
            var _e289 = t.count,
                _n268 = t.instanceMatrix,
                _i204 = t.instanceColor;
            r = new Ks(s, a, _e289), r.instanceMatrix = new Ze(new Float32Array(_n268.array), 16), void 0 !== _i204 && (r.instanceColor = new Ze(new Float32Array(_i204.array), _i204.itemSize));
            break;

          case "LOD":
            r = new zs();
            break;

          case "Line":
            r = new sa(o(t.geometry), l(t.material));
            break;

          case "LineLoop":
            r = new ca(o(t.geometry), l(t.material));
            break;

          case "LineSegments":
            r = new la(o(t.geometry), l(t.material));
            break;

          case "PointCloud":
          case "Points":
            r = new ma(o(t.geometry), l(t.material));
            break;

          case "Sprite":
            r = new Is(l(t.material));
            break;

          case "Group":
            r = new os();
            break;

          case "Bone":
            r = new Ws();
            break;

          default:
            r = new be();
        }

        if (r.uuid = t.uuid, void 0 !== t.name && (r.name = t.name), void 0 !== t.matrix ? (r.matrix.fromArray(t.matrix), void 0 !== t.matrixAutoUpdate && (r.matrixAutoUpdate = t.matrixAutoUpdate), r.matrixAutoUpdate && r.matrix.decompose(r.position, r.quaternion, r.scale)) : (void 0 !== t.position && r.position.fromArray(t.position), void 0 !== t.rotation && r.rotation.fromArray(t.rotation), void 0 !== t.quaternion && r.quaternion.fromArray(t.quaternion), void 0 !== t.scale && r.scale.fromArray(t.scale)), void 0 !== t.castShadow && (r.castShadow = t.castShadow), void 0 !== t.receiveShadow && (r.receiveShadow = t.receiveShadow), t.shadow && (void 0 !== t.shadow.bias && (r.shadow.bias = t.shadow.bias), void 0 !== t.shadow.normalBias && (r.shadow.normalBias = t.shadow.normalBias), void 0 !== t.shadow.radius && (r.shadow.radius = t.shadow.radius), void 0 !== t.shadow.mapSize && r.shadow.mapSize.fromArray(t.shadow.mapSize), void 0 !== t.shadow.camera && (r.shadow.camera = this.parseObject(t.shadow.camera))), void 0 !== t.visible && (r.visible = t.visible), void 0 !== t.frustumCulled && (r.frustumCulled = t.frustumCulled), void 0 !== t.renderOrder && (r.renderOrder = t.renderOrder), void 0 !== t.userData && (r.userData = t.userData), void 0 !== t.layers && (r.layers.mask = t.layers), void 0 !== t.children) {
          var _s93 = t.children;

          for (var _t319 = 0; _t319 < _s93.length; _t319++) {
            r.add(this.parseObject(_s93[_t319], e, n, i));
          }
        }

        if (void 0 !== t.animations) {
          var _e290 = t.animations;

          for (var _t320 = 0; _t320 < _e290.length; _t320++) {
            var _n269 = _e290[_t320];
            r.animations.push(i[_n269]);
          }
        }

        if ("LOD" === t.type) {
          void 0 !== t.autoUpdate && (r.autoUpdate = t.autoUpdate);
          var _e291 = t.levels;

          for (var _t321 = 0; _t321 < _e291.length; _t321++) {
            var _n270 = _e291[_t321],
                _i205 = r.getObjectByProperty("uuid", _n270.object);

            void 0 !== _i205 && r.addLevel(_i205, _n270.distance);
          }
        }

        return r;
      }
    }, {
      key: "bindSkeletons",
      value: function bindSkeletons(t, e) {
        0 !== Object.keys(e).length && t.traverse(function (t) {
          if (!0 === t.isSkinnedMesh && void 0 !== t.skeleton) {
            var _n271 = e[t.skeleton];
            void 0 === _n271 ? console.warn("THREE.ObjectLoader: No skeleton found with UUID:", t.skeleton) : t.bind(_n271, t.bindMatrix);
          }
        });
      }
    }, {
      key: "setTexturePath",
      value: function setTexturePath(t) {
        return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."), this.setResourcePath(t);
      }
    }]);

    return _class10;
  }(Qo), t.ObjectSpaceNormalMap = 1, t.OctahedronBufferGeometry = co, t.OctahedronGeometry = co, t.OneFactor = 201, t.OneMinusDstAlphaFactor = 207, t.OneMinusDstColorFactor = 209, t.OneMinusSrcAlphaFactor = 205, t.OneMinusSrcColorFactor = 203, t.OrthographicCamera = Gl, t.PCFShadowMap = 1, t.PCFSoftShadowMap = 2, t.PMREMGenerator = /*#__PURE__*/function () {
    function _class11(t) {
      _classCallCheck(this, _class11);

      this._renderer = t, this._pingPongRenderTarget = null, this._blurMaterial = function (t) {
        var e = new Float32Array(t),
            n = new xt(0, 1, 0);
        return new Mo({
          name: "SphericalGaussianBlur",
          defines: {
            n: t
          },
          uniforms: {
            envMap: {
              value: null
            },
            samples: {
              value: 1
            },
            weights: {
              value: e
            },
            latitudinal: {
              value: !1
            },
            dTheta: {
              value: 0
            },
            mipInt: {
              value: 0
            },
            poleAxis: {
              value: n
            },
            inputEncoding: {
              value: Lh[3e3]
            },
            outputEncoding: {
              value: Lh[3e3]
            }
          },
          vertexShader: Xh(),
          fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t".concat(Yh(), "\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t"),
          blending: 0,
          depthTest: !1,
          depthWrite: !1
        });
      }(Ah), this._equirectShader = null, this._cubemapShader = null, this._compileMaterial(this._blurMaterial);
    }

    _createClass(_class11, [{
      key: "fromScene",
      value: function fromScene(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : .1;
        var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
        Oh = this._renderer.getRenderTarget();

        var r = this._allocateTargets();

        return this._sceneToCubeUV(t, n, i, r), e > 0 && this._blur(r, 0, 0, e), this._applyPMREM(r), this._cleanup(r), r;
      }
    }, {
      key: "fromEquirectangular",
      value: function fromEquirectangular(t) {
        return this._fromTexture(t);
      }
    }, {
      key: "fromCubemap",
      value: function fromCubemap(t) {
        return this._fromTexture(t);
      }
    }, {
      key: "compileCubemapShader",
      value: function compileCubemapShader() {
        null === this._cubemapShader && (this._cubemapShader = qh(), this._compileMaterial(this._cubemapShader));
      }
    }, {
      key: "compileEquirectangularShader",
      value: function compileEquirectangularShader() {
        null === this._equirectShader && (this._equirectShader = jh(), this._compileMaterial(this._equirectShader));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._blurMaterial.dispose(), null !== this._cubemapShader && this._cubemapShader.dispose(), null !== this._equirectShader && this._equirectShader.dispose();

        for (var _t322 = 0; _t322 < Dh.length; _t322++) {
          Dh[_t322].dispose();
        }
      }
    }, {
      key: "_cleanup",
      value: function _cleanup(t) {
        this._pingPongRenderTarget.dispose(), this._renderer.setRenderTarget(Oh), t.scissorTest = !1, Wh(t, 0, 0, t.width, t.height);
      }
    }, {
      key: "_fromTexture",
      value: function _fromTexture(t) {
        Oh = this._renderer.getRenderTarget();

        var e = this._allocateTargets(t);

        return this._textureToCubeUV(t, e), this._applyPMREM(e), this._cleanup(e), e;
      }
    }, {
      key: "_allocateTargets",
      value: function _allocateTargets(t) {
        var e = {
          magFilter: p,
          minFilter: p,
          generateMipmaps: !1,
          type: x,
          format: 1023,
          encoding: Gh(t) ? t.encoding : J,
          depthBuffer: !1
        },
            n = Vh(e);
        return n.depthBuffer = !t, this._pingPongRenderTarget = Vh(e), n;
      }
    }, {
      key: "_compileMaterial",
      value: function _compileMaterial(t) {
        var e = new Bn(Dh[0], t);

        this._renderer.compile(e, Ph);
      }
    }, {
      key: "_sceneToCubeUV",
      value: function _sceneToCubeUV(t, e, n, i) {
        var r = new Vn(90, 1, e, n),
            s = [1, -1, 1, 1, 1, 1],
            a = [1, 1, 1, -1, -1, -1],
            o = this._renderer,
            l = o.autoClear,
            c = o.outputEncoding,
            h = o.toneMapping;
        o.getClearColor(Bh), o.toneMapping = 0, o.outputEncoding = X, o.autoClear = !1;
        var u = !1;
        var d = t.background;

        if (d) {
          if (d.isColor) {
            Rh.color.copy(d).convertSRGBToLinear(), t.background = null;

            var _e292 = Uh(Rh.color);

            Rh.opacity = _e292, u = !0;
          }
        } else {
          Rh.color.copy(Bh).convertSRGBToLinear();

          var _t323 = Uh(Rh.color);

          Rh.opacity = _t323, u = !0;
        }

        for (var _e293 = 0; _e293 < 6; _e293++) {
          var _n272 = _e293 % 3;

          0 == _n272 ? (r.up.set(0, s[_e293], 0), r.lookAt(a[_e293], 0, 0)) : 1 == _n272 ? (r.up.set(0, 0, s[_e293]), r.lookAt(0, a[_e293], 0)) : (r.up.set(0, s[_e293], 0), r.lookAt(0, 0, a[_e293])), Wh(i, _n272 * Sh, _e293 > 2 ? Sh : 0, Sh, Sh), o.setRenderTarget(i), u && o.render(Ch, r), o.render(t, r);
        }

        o.toneMapping = h, o.outputEncoding = c, o.autoClear = l;
      }
    }, {
      key: "_textureToCubeUV",
      value: function _textureToCubeUV(t, e) {
        var n = this._renderer;
        t.isCubeTexture ? null == this._cubemapShader && (this._cubemapShader = qh()) : null == this._equirectShader && (this._equirectShader = jh());
        var i = t.isCubeTexture ? this._cubemapShader : this._equirectShader,
            r = new Bn(Dh[0], i),
            s = i.uniforms;
        s.envMap.value = t, t.isCubeTexture || s.texelSize.value.set(1 / t.image.width, 1 / t.image.height), s.inputEncoding.value = Lh[t.encoding], s.outputEncoding.value = Lh[e.texture.encoding], Wh(e, 0, 0, 3 * Sh, 2 * Sh), n.setRenderTarget(e), n.render(r, Ph);
      }
    }, {
      key: "_applyPMREM",
      value: function _applyPMREM(t) {
        var e = this._renderer,
            n = e.autoClear;
        e.autoClear = !1;

        for (var _e294 = 1; _e294 < Eh; _e294++) {
          var _n273 = Math.sqrt(Nh[_e294] * Nh[_e294] - Nh[_e294 - 1] * Nh[_e294 - 1]),
              _i206 = Hh[(_e294 - 1) % Hh.length];

          this._blur(t, _e294 - 1, _e294, _n273, _i206);
        }

        e.autoClear = n;
      }
    }, {
      key: "_blur",
      value: function _blur(t, e, n, i, r) {
        var s = this._pingPongRenderTarget;
        this._halfBlur(t, s, e, n, i, "latitudinal", r), this._halfBlur(s, t, n, n, i, "longitudinal", r);
      }
    }, {
      key: "_halfBlur",
      value: function _halfBlur(t, e, n, i, r, s, a) {
        var o = this._renderer,
            l = this._blurMaterial;
        "latitudinal" !== s && "longitudinal" !== s && console.error("blur direction must be either latitudinal or longitudinal!");
        var c = new Bn(Dh[i], l),
            h = l.uniforms,
            u = Ih[n] - 1,
            d = isFinite(r) ? Math.PI / (2 * u) : 2 * Math.PI / 39,
            p = r / d,
            f = isFinite(r) ? 1 + Math.floor(3 * p) : Ah;
        f > Ah && console.warn("sigmaRadians, ".concat(r, ", is too large and will clip, as it requested ").concat(f, " samples when the maximum is set to 20"));
        var m = [];
        var g = 0;

        for (var _t324 = 0; _t324 < Ah; ++_t324) {
          var _e295 = _t324 / p,
              _n274 = Math.exp(-_e295 * _e295 / 2);

          m.push(_n274), 0 == _t324 ? g += _n274 : _t324 < f && (g += 2 * _n274);
        }

        for (var _t325 = 0; _t325 < m.length; _t325++) {
          m[_t325] = m[_t325] / g;
        }

        h.envMap.value = t.texture, h.samples.value = f, h.weights.value = m, h.latitudinal.value = "latitudinal" === s, a && (h.poleAxis.value = a), h.dTheta.value = d, h.mipInt.value = 8 - n, h.inputEncoding.value = Lh[t.texture.encoding], h.outputEncoding.value = Lh[t.texture.encoding];
        var v = Ih[i];
        Wh(e, 3 * Math.max(0, Sh - 2 * v), (0 === i ? 0 : 2 * Sh) + 2 * v * (i > 4 ? i - 8 + 4 : 0), 3 * v, 2 * v), o.setRenderTarget(e), o.render(c, Ph);
      }
    }]);

    return _class11;
  }(), t.ParametricBufferGeometry = ho, t.ParametricGeometry = ho, t.Particle = function (t) {
    return console.warn("THREE.Particle has been renamed to THREE.Sprite."), new Is(t);
  }, t.ParticleBasicMaterial = function (t) {
    return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."), new ha(t);
  }, t.ParticleSystem = function (t, e) {
    return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."), new ma(t, e);
  }, t.ParticleSystemMaterial = function (t) {
    return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."), new ha(t);
  }, t.Path = El, t.PerspectiveCamera = Vn, t.Plane = Te, t.PlaneBufferGeometry = ti, t.PlaneGeometry = ti, t.PlaneHelper = /*#__PURE__*/function (_sa2) {
    _inherits(_class12, _sa2);

    var _super109 = _createSuper(_class12);

    function _class12(t) {
      var _this94;

      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 16776960;

      _classCallCheck(this, _class12);

      var i = n,
          r = new vn();
      r.setAttribute("position", new sn([1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0], 3)), r.computeBoundingSphere(), _this94 = _super109.call(this, r, new $s({
        color: i,
        toneMapped: !1
      })), _this94.type = "PlaneHelper", _this94.plane = t, _this94.size = e;
      var s = new vn();
      s.setAttribute("position", new sn([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1], 3)), s.computeBoundingSphere(), _this94.add(new Bn(s, new qe({
        color: i,
        opacity: .2,
        transparent: !0,
        depthWrite: !1,
        toneMapped: !1
      })));
      return _this94;
    }

    _createClass(_class12, [{
      key: "updateMatrixWorld",
      value: function updateMatrixWorld(t) {
        var e = -this.plane.constant;
        Math.abs(e) < 1e-8 && (e = 1e-8), this.scale.set(.5 * this.size, .5 * this.size, e), this.children[0].material.side = e < 0 ? 1 : 0, this.lookAt(this.plane.normal), _get(_getPrototypeOf(_class12.prototype), "updateMatrixWorld", this).call(this, t);
      }
    }]);

    return _class12;
  }(sa), t.PointCloud = function (t, e) {
    return console.warn("THREE.PointCloud has been renamed to THREE.Points."), new ma(t, e);
  }, t.PointCloudMaterial = function (t) {
    return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."), new ha(t);
  }, t.PointLight = Ul, t.PointLightHelper = /*#__PURE__*/function (_Bn) {
    _inherits(_class13, _Bn);

    var _super110 = _createSuper(_class13);

    function _class13(t, e, n) {
      var _this95;

      _classCallCheck(this, _class13);

      _this95 = _super110.call(this, new fo(e, 4, 2), new qe({
        wireframe: !0,
        fog: !1,
        toneMapped: !1
      })), _this95.light = t, _this95.light.updateMatrixWorld(), _this95.color = n, _this95.type = "PointLightHelper", _this95.matrix = _this95.light.matrixWorld, _this95.matrixAutoUpdate = !1, _this95.update();
      return _this95;
    }

    _createClass(_class13, [{
      key: "dispose",
      value: function dispose() {
        this.geometry.dispose(), this.material.dispose();
      }
    }, {
      key: "update",
      value: function update() {
        void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color);
      }
    }]);

    return _class13;
  }(Bn), t.Points = ma, t.PointsMaterial = ha, t.PolarGridHelper = /*#__PURE__*/function (_la7) {
    _inherits(_class14, _la7);

    var _super111 = _createSuper(_class14);

    function _class14() {
      var _this96;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 8;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 64;
      var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 4473924;
      var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 8947848;

      _classCallCheck(this, _class14);

      r = new je(r), s = new je(s);
      var a = [],
          o = [];

      for (var _n275 = 0; _n275 <= e; _n275++) {
        var _i207 = _n275 / e * (2 * Math.PI),
            _l33 = Math.sin(_i207) * t,
            _c26 = Math.cos(_i207) * t;

        a.push(0, 0, 0), a.push(_l33, 0, _c26);

        var _h16 = 1 & _n275 ? r : s;

        o.push(_h16.r, _h16.g, _h16.b), o.push(_h16.r, _h16.g, _h16.b);
      }

      for (var _e296 = 0; _e296 <= n; _e296++) {
        var _l34 = 1 & _e296 ? r : s,
            _c27 = t - t / n * _e296;

        for (var _t326 = 0; _t326 < i; _t326++) {
          var _e297 = _t326 / i * (2 * Math.PI),
              _n276 = Math.sin(_e297) * _c27,
              _r162 = Math.cos(_e297) * _c27;

          a.push(_n276, 0, _r162), o.push(_l34.r, _l34.g, _l34.b), _e297 = (_t326 + 1) / i * (2 * Math.PI), _n276 = Math.sin(_e297) * _c27, _r162 = Math.cos(_e297) * _c27, a.push(_n276, 0, _r162), o.push(_l34.r, _l34.g, _l34.b);
        }
      }

      var l = new vn();
      l.setAttribute("position", new sn(a, 3)), l.setAttribute("color", new sn(o, 3));
      _this96 = _super111.call(this, l, new $s({
        vertexColors: !0,
        toneMapped: !1
      })), _this96.type = "PolarGridHelper";
      return _this96;
    }

    return _class14;
  }(la), t.PolyhedronBufferGeometry = Sa, t.PolyhedronGeometry = Sa, t.PositionalAudio = /*#__PURE__*/function (_xc) {
    _inherits(_class15, _xc);

    var _super112 = _createSuper(_class15);

    function _class15(t) {
      var _this97;

      _classCallCheck(this, _class15);

      _this97 = _super112.call(this, t), _this97.panner = _this97.context.createPanner(), _this97.panner.panningModel = "HRTF", _this97.panner.connect(_this97.gain);
      return _this97;
    }

    _createClass(_class15, [{
      key: "getOutput",
      value: function getOutput() {
        return this.panner;
      }
    }, {
      key: "getRefDistance",
      value: function getRefDistance() {
        return this.panner.refDistance;
      }
    }, {
      key: "setRefDistance",
      value: function setRefDistance(t) {
        return this.panner.refDistance = t, this;
      }
    }, {
      key: "getRolloffFactor",
      value: function getRolloffFactor() {
        return this.panner.rolloffFactor;
      }
    }, {
      key: "setRolloffFactor",
      value: function setRolloffFactor(t) {
        return this.panner.rolloffFactor = t, this;
      }
    }, {
      key: "getDistanceModel",
      value: function getDistanceModel() {
        return this.panner.distanceModel;
      }
    }, {
      key: "setDistanceModel",
      value: function setDistanceModel(t) {
        return this.panner.distanceModel = t, this;
      }
    }, {
      key: "getMaxDistance",
      value: function getMaxDistance() {
        return this.panner.maxDistance;
      }
    }, {
      key: "setMaxDistance",
      value: function setMaxDistance(t) {
        return this.panner.maxDistance = t, this;
      }
    }, {
      key: "setDirectionalCone",
      value: function setDirectionalCone(t, e, n) {
        return this.panner.coneInnerAngle = t, this.panner.coneOuterAngle = e, this.panner.coneOuterGain = n, this;
      }
    }, {
      key: "updateMatrixWorld",
      value: function updateMatrixWorld(t) {
        if (_get(_getPrototypeOf(_class15.prototype), "updateMatrixWorld", this).call(this, t), !0 === this.hasPlaybackControl && !1 === this.isPlaying) return;
        this.matrixWorld.decompose(_c, bc, wc), Mc.set(0, 0, 1).applyQuaternion(bc);
        var e = this.panner;

        if (e.positionX) {
          var _t327 = this.context.currentTime + this.listener.timeDelta;

          e.positionX.linearRampToValueAtTime(_c.x, _t327), e.positionY.linearRampToValueAtTime(_c.y, _t327), e.positionZ.linearRampToValueAtTime(_c.z, _t327), e.orientationX.linearRampToValueAtTime(Mc.x, _t327), e.orientationY.linearRampToValueAtTime(Mc.y, _t327), e.orientationZ.linearRampToValueAtTime(Mc.z, _t327);
        } else e.setPosition(_c.x, _c.y, _c.z), e.setOrientation(Mc.x, Mc.y, Mc.z);
      }
    }]);

    return _class15;
  }(xc), t.PropertyBinding = zc, t.PropertyMixer = Tc, t.QuadraticBezierCurve = bl, t.QuadraticBezierCurve3 = wl, t.Quaternion = yt, t.QuaternionKeyframeTrack = Vo, t.QuaternionLinearInterpolant = ko, t.REVISION = e, t.RGBADepthPacking = 3201, t.RGBAFormat = E, t.RGBAIntegerFormat = 1033, t.RGBA_ASTC_10x10_Format = 37819, t.RGBA_ASTC_10x5_Format = 37816, t.RGBA_ASTC_10x6_Format = 37817, t.RGBA_ASTC_10x8_Format = 37818, t.RGBA_ASTC_12x10_Format = 37820, t.RGBA_ASTC_12x12_Format = 37821, t.RGBA_ASTC_4x4_Format = 37808, t.RGBA_ASTC_5x4_Format = 37809, t.RGBA_ASTC_5x5_Format = 37810, t.RGBA_ASTC_6x5_Format = 37811, t.RGBA_ASTC_6x6_Format = 37812, t.RGBA_ASTC_8x5_Format = 37813, t.RGBA_ASTC_8x6_Format = 37814, t.RGBA_ASTC_8x8_Format = 37815, t.RGBA_BPTC_Format = 36492, t.RGBA_ETC2_EAC_Format = F, t.RGBA_PVRTC_2BPPV1_Format = O, t.RGBA_PVRTC_4BPPV1_Format = B, t.RGBA_S3TC_DXT1_Format = C, t.RGBA_S3TC_DXT3_Format = P, t.RGBA_S3TC_DXT5_Format = D, t.RGBDEncoding = $, t.RGBEEncoding = J, t.RGBEFormat = 1023, t.RGBFormat = T, t.RGBIntegerFormat = 1032, t.RGBM16Encoding = K, t.RGBM7Encoding = Q, t.RGB_ETC1_Format = 36196, t.RGB_ETC2_Format = z, t.RGB_PVRTC_2BPPV1_Format = N, t.RGB_PVRTC_4BPPV1_Format = I, t.RGB_S3TC_DXT1_Format = R, t.RGFormat = 1030, t.RGIntegerFormat = 1031, t.RawShaderMaterial = Mo, t.Ray = Zt, t.Raycaster = Wc, t.RectAreaLight = jl, t.RedFormat = 1028, t.RedIntegerFormat = 1029, t.ReinhardToneMapping = 2, t.RepeatWrapping = h, t.ReplaceStencilOp = 7681, t.ReverseSubtractEquation = 102, t.RingBufferGeometry = uo, t.RingGeometry = uo, t.SRGB8_ALPHA8_ASTC_10x10_Format = 37851, t.SRGB8_ALPHA8_ASTC_10x5_Format = 37848, t.SRGB8_ALPHA8_ASTC_10x6_Format = 37849, t.SRGB8_ALPHA8_ASTC_10x8_Format = 37850, t.SRGB8_ALPHA8_ASTC_12x10_Format = 37852, t.SRGB8_ALPHA8_ASTC_12x12_Format = 37853, t.SRGB8_ALPHA8_ASTC_4x4_Format = 37840, t.SRGB8_ALPHA8_ASTC_5x4_Format = 37841, t.SRGB8_ALPHA8_ASTC_5x5_Format = 37842, t.SRGB8_ALPHA8_ASTC_6x5_Format = 37843, t.SRGB8_ALPHA8_ASTC_6x6_Format = 37844, t.SRGB8_ALPHA8_ASTC_8x5_Format = 37845, t.SRGB8_ALPHA8_ASTC_8x6_Format = 37846, t.SRGB8_ALPHA8_ASTC_8x8_Format = 37847, t.Scene = ms, t.SceneUtils = Zh, t.ShaderChunk = ei, t.ShaderLib = ii, t.ShaderMaterial = Gn, t.ShadowMaterial = wo, t.Shape = Al, t.ShapeBufferGeometry = po, t.ShapeGeometry = po, t.ShapePath = ic, t.ShapeUtils = no, t.ShortType = 1011, t.Skeleton = Xs, t.SkeletonHelper = ih, t.SkinnedMesh = Vs, t.SmoothShading = 2, t.Sphere = Gt, t.SphereBufferGeometry = fo, t.SphereGeometry = fo, t.Spherical = /*#__PURE__*/function () {
    function _class16() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      _classCallCheck(this, _class16);

      return this.radius = t, this.phi = e, this.theta = n, this;
    }

    _createClass(_class16, [{
      key: "set",
      value: function set(t, e, n) {
        return this.radius = t, this.phi = e, this.theta = n, this;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this;
      }
    }, {
      key: "makeSafe",
      value: function makeSafe() {
        var t = 1e-6;
        return this.phi = Math.max(t, Math.min(Math.PI - t, this.phi)), this;
      }
    }, {
      key: "setFromVector3",
      value: function setFromVector3(t) {
        return this.setFromCartesianCoords(t.x, t.y, t.z);
      }
    }, {
      key: "setFromCartesianCoords",
      value: function setFromCartesianCoords(t, e, n) {
        return this.radius = Math.sqrt(t * t + e * e + n * n), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, n), this.phi = Math.acos(ot.clamp(e / this.radius, -1, 1))), this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }]);

    return _class16;
  }(), t.SphericalHarmonics3 = ql, t.SplineCurve = Ml, t.SpotLight = Bl, t.SpotLightHelper = /*#__PURE__*/function (_be12) {
    _inherits(_class17, _be12);

    var _super113 = _createSuper(_class17);

    function _class17(t, e) {
      var _this98;

      _classCallCheck(this, _class17);

      _this98 = _super113.call(this), _this98.light = t, _this98.light.updateMatrixWorld(), _this98.matrix = t.matrixWorld, _this98.matrixAutoUpdate = !1, _this98.color = e;
      var n = new vn(),
          i = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1];

      for (var _t328 = 0, _e298 = 1, _n277 = 32; _t328 < _n277; _t328++, _e298++) {
        var _r163 = _t328 / _n277 * Math.PI * 2,
            _s94 = _e298 / _n277 * Math.PI * 2;

        i.push(Math.cos(_r163), Math.sin(_r163), 1, Math.cos(_s94), Math.sin(_s94), 1);
      }

      n.setAttribute("position", new sn(i, 3));
      var r = new $s({
        fog: !1,
        toneMapped: !1
      });
      _this98.cone = new la(n, r), _this98.add(_this98.cone), _this98.update();
      return _this98;
    }

    _createClass(_class17, [{
      key: "dispose",
      value: function dispose() {
        this.cone.geometry.dispose(), this.cone.material.dispose();
      }
    }, {
      key: "update",
      value: function update() {
        this.light.updateMatrixWorld();
        var t = this.light.distance ? this.light.distance : 1e3,
            e = t * Math.tan(this.light.angle);
        this.cone.scale.set(e, e, t), $c.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt($c), void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color);
      }
    }]);

    return _class17;
  }(be), t.Sprite = Is, t.SpriteMaterial = xs, t.SrcAlphaFactor = 204, t.SrcAlphaSaturateFactor = 210, t.SrcColorFactor = 202, t.StaticCopyUsage = 35046, t.StaticDrawUsage = et, t.StaticReadUsage = 35045, t.StereoCamera = /*#__PURE__*/function () {
    function _class18() {
      _classCallCheck(this, _class18);

      this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new Vn(), this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new Vn(), this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1, this._cache = {
        focus: null,
        fov: null,
        aspect: null,
        near: null,
        far: null,
        zoom: null,
        eyeSep: null
      };
    }

    _createClass(_class18, [{
      key: "update",
      value: function update(t) {
        var e = this._cache;

        if (e.focus !== t.focus || e.fov !== t.fov || e.aspect !== t.aspect * this.aspect || e.near !== t.near || e.far !== t.far || e.zoom !== t.zoom || e.eyeSep !== this.eyeSep) {
          e.focus = t.focus, e.fov = t.fov, e.aspect = t.aspect * this.aspect, e.near = t.near, e.far = t.far, e.zoom = t.zoom, e.eyeSep = this.eyeSep;

          var _n278 = t.projectionMatrix.clone(),
              _i208 = e.eyeSep / 2,
              _r164 = _i208 * e.near / e.focus,
              _s95 = e.near * Math.tan(ot.DEG2RAD * e.fov * .5) / e.zoom;

          var _a77, _o47;

          dc.elements[12] = -_i208, uc.elements[12] = _i208, _a77 = -_s95 * e.aspect + _r164, _o47 = _s95 * e.aspect + _r164, _n278.elements[0] = 2 * e.near / (_o47 - _a77), _n278.elements[8] = (_o47 + _a77) / (_o47 - _a77), this.cameraL.projectionMatrix.copy(_n278), _a77 = -_s95 * e.aspect - _r164, _o47 = _s95 * e.aspect - _r164, _n278.elements[0] = 2 * e.near / (_o47 - _a77), _n278.elements[8] = (_o47 + _a77) / (_o47 - _a77), this.cameraR.projectionMatrix.copy(_n278);
        }

        this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(dc), this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(uc);
      }
    }]);

    return _class18;
  }(), t.StreamCopyUsage = 35042, t.StreamDrawUsage = 35040, t.StreamReadUsage = 35041, t.StringKeyframeTrack = Wo, t.SubtractEquation = 101, t.SubtractiveBlending = 3, t.TOUCH = {
    ROTATE: 0,
    PAN: 1,
    DOLLY_PAN: 2,
    DOLLY_ROTATE: 3
  }, t.TangentSpaceNormalMap = 0, t.TetrahedronBufferGeometry = mo, t.TetrahedronGeometry = mo, t.TextBufferGeometry = go, t.TextGeometry = go, t.Texture = pt, t.TextureLoader = rl, t.TorusBufferGeometry = vo, t.TorusGeometry = vo, t.TorusKnotBufferGeometry = yo, t.TorusKnotGeometry = yo, t.Triangle = Oe, t.TriangleFanDrawMode = 2, t.TriangleStripDrawMode = 1, t.TrianglesDrawMode = 0, t.TubeBufferGeometry = xo, t.TubeGeometry = xo, t.UVMapping = i, t.Uint16Attribute = function (t, e) {
    return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."), new tn(t, e);
  }, t.Uint16BufferAttribute = tn, t.Uint32Attribute = function (t, e) {
    return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."), new nn(t, e);
  }, t.Uint32BufferAttribute = nn, t.Uint8Attribute = function (t, e) {
    return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."), new Qe(t, e);
  }, t.Uint8BufferAttribute = Qe, t.Uint8ClampedAttribute = function (t, e) {
    return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."), new Ke(t, e);
  }, t.Uint8ClampedBufferAttribute = Ke, t.Uniform = Gc, t.UniformsLib = ni, t.UniformsUtils = Un, t.UnsignedByteType = x, t.UnsignedInt248Type = S, t.UnsignedIntType = b, t.UnsignedShort4444Type = 1017, t.UnsignedShort5551Type = 1018, t.UnsignedShort565Type = 1019, t.UnsignedShortType = _, t.VSMShadowMap = 3, t.Vector2 = lt, t.Vector3 = xt, t.Vector4 = mt, t.VectorKeyframeTrack = jo, t.Vertex = function (t, e, n) {
    return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."), new xt(t, e, n);
  }, t.VertexColors = 2, t.VideoTexture = va, t.WebGL1Renderer = ds, t.WebGLCubeRenderTarget = Xn, t.WebGLMultisampleRenderTarget = vt, t.WebGLRenderTarget = gt, t.WebGLRenderTargetCube = function (t, e, n) {
    return console.warn("THREE.WebGLRenderTargetCube( width, height, options ) is now WebGLCubeRenderTarget( size, options )."), new Xn(t, n);
  }, t.WebGLRenderer = us, t.WebGLUtils = ss, t.WireframeGeometry = _o, t.WireframeHelper = function (t, e) {
    return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."), new la(new _o(t.geometry), new $s({
      color: void 0 !== e ? e : 16777215
    }));
  }, t.WrapAroundEnding = W, t.XHRLoader = function (t) {
    return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."), new $o(t);
  }, t.ZeroCurvatureEnding = k, t.ZeroFactor = 200, t.ZeroSlopeEnding = V, t.ZeroStencilOp = 0, t.sRGBEncoding = Y, Object.defineProperty(t, "__esModule", {
    value: !0
  });
});
},{}],"js/shaders/vertexShader.glsl":[function(require,module,exports) {
module.exports = "#define GLSLIFY 1\nuniform sampler2D uTexture;\nuniform vec2 uOffset;\nvarying vec2 vUv;\n\n#define M_PI 3.1415926535897932384626433832795\n\nvec3 deformationCurve(vec3 position, vec2 uv, vec2 offset) {\n   position.x = position.x + (cos(uv.y * M_PI) * offset.x);\n   position.y = position.y + (cos(uv.x * M_PI) * offset.y);\n   return position;\n}\n\nvoid main() {\n   vUv = uv;\n   vec3 newPosition = deformationCurve(position, uv, uOffset);\n   gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );\n}";
},{}],"js/shaders/fragmentShader.glsl":[function(require,module,exports) {
module.exports = "#define GLSLIFY 1\nuniform sampler2D uTexture;\nuniform float uAlpha;\nuniform vec2 uOffset;\nvarying vec2 vUv;\n\nvec3 rgbShift(sampler2D textureImage, vec2 uv, vec2 offset) {\n   float r = texture2D(textureImage,uv + offset).r;\n   vec2 gb = texture2D(textureImage,uv).gb;\n   return vec3(r,gb);\n }\n\nvoid main() {\n   vec3 color = rgbShift(uTexture,vUv,uOffset);\n   gl_FragColor = vec4(color,uAlpha);\n }";
},{}],"js/RGBdistortion.js":[function(require,module,exports) {
"use strict";

var THREE = _interopRequireWildcard(require("./lib/three.min.js"));

var _vertexShader = _interopRequireDefault(require("./shaders/vertexShader.glsl"));

var _fragmentShader = _interopRequireDefault(require("./shaders/fragmentShader.glsl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function detectmob() {
  if (window.innerWidth <= 800) {
    return true;
  } else {
    return false;
  }
}

if (!detectmob()) {
  // Wrapping the whole thing for mobile disabling
  var scrollable = document.querySelector('.horizontal-container');
  var current = 0;
  var target = 0;
  var ease = 0.03; // Linear inetepolation used for smooth scrolling and image offset uniform adjustment

  function lerp(start, end, t) {
    return start * (1 - t) + end * t;
  } // init function triggered on page load to set the body height to enable scrolling and EffectCanvas initialised


  function init() {
    document.body.style.height = "".concat(scrollable.getBoundingClientRect().height, "px");
  } // translate the scrollable div using the lerp function for the smooth scrolling effect.


  function smoothScroll() {
    target = window.scrollY;
    current = lerp(current, target, ease);
    scrollable.style.transform = "0, translate3d(".concat(-current, "px, 0)");
  }

  var EffectCanvas = /*#__PURE__*/function () {
    function EffectCanvas() {
      _classCallCheck(this, EffectCanvas);

      this.container = document.querySelector('main');
      this.images = _toConsumableArray(document.querySelectorAll('.project-img'));
      this.meshItems = []; // Used to store all meshes we will be creating.

      this.setupCamera();
      this.createMeshItems();
      this.render();
    } // Getter function used to get screen dimensions used for the camera and mesh materials


    _createClass(EffectCanvas, [{
      key: "viewport",
      get: function get() {
        var width = window.innerWidth;
        var height = window.innerHeight;
        var aspectRatio = width / height;
        return {
          width: width,
          height: height,
          aspectRatio: aspectRatio
        };
      }
    }, {
      key: "setupCamera",
      value: function setupCamera() {
        window.addEventListener('resize', this.onWindowResize.bind(this), false); // Create new scene

        this.scene = new THREE.Scene(); // Initialize perspective camera

        var perspective = 1000;
        var fov = 180 * (2 * Math.atan(window.innerHeight / 2 / perspective)) / Math.PI; // see fov image for a picture breakdown of this fov setting.

        this.camera = new THREE.PerspectiveCamera(fov, this.viewport.aspectRatio, 1, 1000);
        this.camera.position.set(0, 0, perspective); // set the camera position on the z axis.
        // renderer

        this.renderer = new THREE.WebGL1Renderer({
          antialias: true,
          alpha: true
        });
        this.renderer.setSize(this.viewport.width, this.viewport.height); // uses the getter viewport function above to set size of canvas / renderer

        this.renderer.setPixelRatio(window.devicePixelRatio); // Import to ensure image textures do not appear blurred.

        this.container.appendChild(this.renderer.domElement); // append the canvas to the main element
      }
    }, {
      key: "onWindowResize",
      value: function onWindowResize() {
        init();
        this.camera.aspect = this.viewport.aspectRatio; // readjust the aspect ratio.

        this.camera.updateProjectionMatrix(); // Used to recalulate projection dimensions.

        this.renderer.setSize(this.viewport.width, this.viewport.height);
      }
    }, {
      key: "createMeshItems",
      value: function createMeshItems() {
        var _this = this;

        // Loop thorugh all images and create new MeshItem instances. Push these instances to the meshItems array.
        this.images.forEach(function (image) {
          var meshItem = new MeshItem(image, _this.scene);

          _this.meshItems.push(meshItem);
        });
      } // Animate smoothscroll and meshes. Repeatedly called using requestanimationdrame

    }, {
      key: "render",
      value: function render() {
        smoothScroll();

        for (var i = 0; i < this.meshItems.length; i++) {
          this.meshItems[i].render();
        }

        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.render.bind(this));
      }
    }]);

    return EffectCanvas;
  }();

  var MeshItem = /*#__PURE__*/function () {
    // Pass in the scene as we will be adding meshes to this scene.
    function MeshItem(element, scene) {
      _classCallCheck(this, MeshItem);

      this.element = element;
      this.scene = scene;
      this.offset = new THREE.Vector2(0, 0); // Positions of mesh on screen. Will be updated below.

      this.sizes = new THREE.Vector2(0, 0); //Size of mesh on screen. Will be updated below.

      this.createMesh();
    }

    _createClass(MeshItem, [{
      key: "getDimensions",
      value: function getDimensions() {
        var _this$element$getBoun = this.element.getBoundingClientRect(),
            width = _this$element$getBoun.width,
            height = _this$element$getBoun.height,
            top = _this$element$getBoun.top,
            left = _this$element$getBoun.left;

        this.sizes.set(width, height);
        this.offset.set(left - window.innerWidth / 2 + width / 2, -top + window.innerHeight / 2 - height / 2);
      }
    }, {
      key: "createMesh",
      value: function createMesh() {
        this.geometry = new THREE.PlaneBufferGeometry(1, 1, 120, 120);
        this.imageTexture = new THREE.TextureLoader().load(this.element.src);
        this.uniforms = {
          uTexture: {
            //texture data
            value: this.imageTexture
          },
          uOffset: {
            //distortion strength
            value: new THREE.Vector2(0.0, 0.0)
          },
          uAlpha: {
            //opacity
            value: 1
          }
        };
        this.material = new THREE.ShaderMaterial({
          uniforms: this.uniforms,
          vertexShader: _vertexShader.default,
          fragmentShader: _fragmentShader.default,
          transparent: true,
          wireframe: true,
          side: THREE.DoubleSide
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.getDimensions(); // set offsetand sizes for placement on the scene

        this.mesh.position.set(this.offset.x, this.offset.y, 0);
        this.mesh.scale.set(this.sizes.x, this.sizes.y, 1);
        this.scene.add(this.mesh);
      }
    }, {
      key: "render",
      value: function render() {
        // this function is repeatidly called for each instance in the aboce 
        this.getDimensions();
        this.mesh.position.set(this.offset.x, this.offset.y, 0);
        this.mesh.scale.set(this.sizes.x, this.sizes.y, 1);
        this.uniforms.uOffset.value.set(this.offset.x * 0.0, -(target - current) * 0.0001);
      }
    }]);

    return MeshItem;
  }();

  init();
  new EffectCanvas();
}
},{"./lib/three.min.js":"js/lib/three.min.js","./shaders/vertexShader.glsl":"js/shaders/vertexShader.glsl","./shaders/fragmentShader.glsl":"js/shaders/fragmentShader.glsl"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59164" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/RGBdistortion.js"], null)
//# sourceMappingURL=/RGBdistortion.744aa39d.js.map