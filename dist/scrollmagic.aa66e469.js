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
})({"js/scrollmagic.js":[function(require,module,exports) {
gsap.registerPlugin(ScrollTrigger); //------------ Intro ------------ //
// Mobile version

function detectmob() {
  if (window.innerWidth <= 800) {
    return true;
  } else {
    return false;
  }
}

if (!detectmob()) {
  // scrollTrigger for desktop
  gsap.to('#reveal', {
    scrollTrigger: {
      trigger: '#fade-trigger',
      start: "top 87%",
      end: "bottom 87%",
      // markers: true,
      toggleActions: "play none reverse none"
    },
    x: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  });
} else {
  // scrollTrigger for mobile
  gsap.to('#reveal', {
    scrollTrigger: {
      trigger: '#fade-trigger',
      start: "top 87%",
      end: "bottom 87%",
      endTrigger: ".intro-sticky",
      // markers: true,
      toggleActions: "play none reverse none"
    },
    x: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  });
} // ------------ Hero ------------ //


gsap.utils.toArray('.hero-wrapper').forEach(function (section) {
  var elems = section.querySelectorAll('#appear'); // Set starting params for sections

  gsap.set(elems, {
    opacity: 0,
    duration: 0,
    ease: 'power3.out',
    overwrite: 'auto'
  });
  ScrollTrigger.create({
    trigger: '#appear-trigger',
    start: '250px bottom',
    end: 'bottom bottom',
    endTrigger: '#appear-end-trigger',
    markers: true,
    onEnter: function onEnter() {
      return gsap.to(elems, {
        opacity: 1,
        duration: 0,
        stagger: 0.75
      });
    },
    onLeave: function onLeave() {
      return gsap.to(elems, {
        opacity: 0,
        duration: 0.75
      });
    },
    onEnterBack: function onEnterBack() {
      return gsap.to(elems, {
        opacity: 1,
        duration: 0,
        stagger: -0.75
      });
    },
    onLeaveBack: function onLeaveBack() {
      return gsap.to(elems, {
        opacity: 0,
        duration: 0.5
      });
    }
  });
}); // ------------ Horizontal ------------ //

var hcontainer = document.querySelector(".horizontal-container");
gsap.to(hcontainer, {
  x: function x() {
    return -(hcontainer.scrollWidth - document.documentElement.clientWidth) + "px";
  },
  ease: "none",
  scrollTrigger: {
    trigger: hcontainer,
    invalidateOnRefresh: true,
    pin: true,
    // markers: true,
    scrub: 1,
    end: function end() {
      return "+=" + (hcontainer.offsetWidth - innerWidth) / 1.5;
    }
  }
}); // ------------ Ending ------------ //
// Mobile version

function detectmob() {
  if (window.innerWidth <= 800) {
    return true;
  } else {
    return false;
  }
}

if (!detectmob()) {
  // scrollTrigger for desktop
  var endingtl = gsap.timeline({
    scrollTrigger: {
      trigger: '.ending-section',
      start: "center 51%",
      end: "center 51%",
      // markers: true,
      toggleActions: "play none reset none"
    }
  });
  endingtl.to('#ending', {
    backgroundPosition: '0 30px',
    opacity: 1,
    duration: 0.1,
    ease: 'power3.out',
    stagger: 0.5
  }).to('.ending-text:nth-of-type(2)', {
    transform: 'skewX(-20deg)'
  }, "-=0.9").to('.container__left', {
    fontSize: '1.25em',
    color: '#fafafa',
    ease: 'power3.out'
  }).to('.name span', {
    opacity: 1,
    duration: 0.5,
    ease: 'power3.out'
  }, "+=1");
} else {
  // scrollTrigger for mobile
  var _endingtl = gsap.timeline({
    scrollTrigger: {
      trigger: '.ending-section',
      start: "center 50%",
      end: "center 50%",
      // markers: true,
      toggleActions: "play none reset none"
    }
  });

  _endingtl.to('#ending', {
    backgroundPosition: '0 30px',
    opacity: 1,
    duration: 0.1,
    ease: 'power3.out',
    stagger: 0.5
  }).to('.ending-text:nth-of-type(2)', {
    transform: 'skewX(-20deg)'
  }, "-=0.9").to('.name span', {
    opacity: 1,
    duration: 0.5,
    ease: 'power3.out'
  });
}
},{}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53767" + '/');

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
      console.log('[parcel] ??? Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] ????  ' + data.error.message + '\n' + data.error.stack);
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
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">????</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
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
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/scrollmagic.js"], null)
//# sourceMappingURL=/scrollmagic.aa66e469.js.map