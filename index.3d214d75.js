// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"iKiqL":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0a8ecb283d214d75";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bB7Pu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _vue = require("vue");
var _appVue = require("./App.vue");
var _appVueDefault = parcelHelpers.interopDefault(_appVue);
var _vCalendar = require("v-calendar");
var _vCalendarDefault = parcelHelpers.interopDefault(_vCalendar);
var _styleCss = require("v-calendar/dist/style.css");
const app = _vue.createApp(_appVueDefault.default);
app.use(_vCalendarDefault.default, {
    locales: {
        dv: {
        }
    }
}).mount("#app");

},{"vue":"gzxs9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./App.vue":"4ECQH","v-calendar":"9PkU7","v-calendar/dist/style.css":"4Aqh1"}],"gzxs9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "compile", ()=>compile
);
var _runtimeDom = require("@vue/runtime-dom");
parcelHelpers.exportAll(_runtimeDom, exports);
function initDev() {
    _runtimeDom.initCustomFormatter();
}
initDev();
const compile = ()=>{
    _runtimeDom.warn(`Runtime compilation is not supported in this build of Vue.` + ` Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`);
};

},{"@vue/runtime-dom":"9wNvI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9wNvI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Transition", ()=>Transition
);
parcelHelpers.export(exports, "TransitionGroup", ()=>TransitionGroup
);
parcelHelpers.export(exports, "VueElement", ()=>VueElement
);
parcelHelpers.export(exports, "createApp", ()=>createApp
);
parcelHelpers.export(exports, "createSSRApp", ()=>createSSRApp
);
parcelHelpers.export(exports, "defineCustomElement", ()=>defineCustomElement
);
parcelHelpers.export(exports, "defineSSRCustomElement", ()=>defineSSRCustomElement
);
parcelHelpers.export(exports, "hydrate", ()=>hydrate
);
parcelHelpers.export(exports, "initDirectivesForSSR", ()=>initDirectivesForSSR
);
parcelHelpers.export(exports, "render", ()=>render
);
parcelHelpers.export(exports, "useCssModule", ()=>useCssModule
);
parcelHelpers.export(exports, "useCssVars", ()=>useCssVars
);
parcelHelpers.export(exports, "vModelCheckbox", ()=>vModelCheckbox
);
parcelHelpers.export(exports, "vModelDynamic", ()=>vModelDynamic
);
parcelHelpers.export(exports, "vModelRadio", ()=>vModelRadio
);
parcelHelpers.export(exports, "vModelSelect", ()=>vModelSelect
);
parcelHelpers.export(exports, "vModelText", ()=>vModelText
);
parcelHelpers.export(exports, "vShow", ()=>vShow
);
parcelHelpers.export(exports, "withKeys", ()=>withKeys
);
parcelHelpers.export(exports, "withModifiers", ()=>withModifiers
);
var _runtimeCore = require("@vue/runtime-core");
var _shared = require("@vue/shared");
parcelHelpers.exportAll(_runtimeCore, exports);
const svgNS = 'http://www.w3.org/2000/svg';
const doc = typeof document !== 'undefined' ? document : null;
const templateContainer = doc && doc.createElement('template');
const nodeOps = {
    insert: (child, parent, anchor)=>{
        parent.insertBefore(child, anchor || null);
    },
    remove: (child)=>{
        const parent = child.parentNode;
        if (parent) parent.removeChild(child);
    },
    createElement: (tag, isSVG, is, props)=>{
        const el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? {
            is
        } : undefined);
        if (tag === 'select' && props && props.multiple != null) el.setAttribute('multiple', props.multiple);
        return el;
    },
    createText: (text)=>doc.createTextNode(text)
    ,
    createComment: (text)=>doc.createComment(text)
    ,
    setText: (node, text)=>{
        node.nodeValue = text;
    },
    setElementText: (el, text)=>{
        el.textContent = text;
    },
    parentNode: (node)=>node.parentNode
    ,
    nextSibling: (node)=>node.nextSibling
    ,
    querySelector: (selector)=>doc.querySelector(selector)
    ,
    setScopeId (el, id) {
        el.setAttribute(id, '');
    },
    cloneNode (el) {
        const cloned = el.cloneNode(true);
        // #3072
        // - in `patchDOMProp`, we store the actual value in the `el._value` property.
        // - normally, elements using `:value` bindings will not be hoisted, but if
        //   the bound value is a constant, e.g. `:value="true"` - they do get
        //   hoisted.
        // - in production, hoisted nodes are cloned when subsequent inserts, but
        //   cloneNode() does not copy the custom property we attached.
        // - This may need to account for other custom DOM properties we attach to
        //   elements in addition to `_value` in the future.
        if (`_value` in el) cloned._value = el._value;
        return cloned;
    },
    // __UNSAFE__
    // Reason: innerHTML.
    // Static content here can only come from compiled templates.
    // As long as the user only uses trusted templates, this is safe.
    insertStaticContent (content, parent, anchor, isSVG, start, end) {
        // <parent> before | first ... last | anchor </parent>
        const before = anchor ? anchor.previousSibling : parent.lastChild;
        // #5308 can only take cached path if:
        // - has a single root node
        // - nextSibling info is still available
        if (start && (start === end || start.nextSibling)) // cached
        while(true){
            parent.insertBefore(start.cloneNode(true), anchor);
            if (start === end || !(start = start.nextSibling)) break;
        }
        else {
            // fresh insert
            templateContainer.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
            const template = templateContainer.content;
            if (isSVG) {
                // remove outer svg wrapper
                const wrapper = template.firstChild;
                while(wrapper.firstChild)template.appendChild(wrapper.firstChild);
                template.removeChild(wrapper);
            }
            parent.insertBefore(template, anchor);
        }
        return [
            // first
            before ? before.nextSibling : parent.firstChild,
            // last
            anchor ? anchor.previousSibling : parent.lastChild
        ];
    }
};
// compiler should normalize class + :class bindings on the same element
// into a single binding ['staticClass', dynamic]
function patchClass(el, value, isSVG) {
    // directly setting className should be faster than setAttribute in theory
    // if this is an element during a transition, take the temporary transition
    // classes into account.
    const transitionClasses = el._vtc;
    if (transitionClasses) value = (value ? [
        value,
        ...transitionClasses
    ] : [
        ...transitionClasses
    ]).join(' ');
    if (value == null) el.removeAttribute('class');
    else if (isSVG) el.setAttribute('class', value);
    else el.className = value;
}
function patchStyle(el, prev, next) {
    const style = el.style;
    const isCssString = _shared.isString(next);
    if (next && !isCssString) {
        for(const key in next)setStyle(style, key, next[key]);
        if (prev && !_shared.isString(prev)) {
            for(const key in prev)if (next[key] == null) setStyle(style, key, '');
        }
    } else {
        const currentDisplay = style.display;
        if (isCssString) {
            if (prev !== next) style.cssText = next;
        } else if (prev) el.removeAttribute('style');
        // indicates that the `display` of the element is controlled by `v-show`,
        // so we always keep the current `display` value regardless of the `style`
        // value, thus handing over control to `v-show`.
        if ('_vod' in el) style.display = currentDisplay;
    }
}
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
    if (_shared.isArray(val)) val.forEach((v)=>setStyle(style, name, v)
    );
    else if (name.startsWith('--')) // custom property definition
    style.setProperty(name, val);
    else {
        const prefixed = autoPrefix(style, name);
        if (importantRE.test(val)) // !important
        style.setProperty(_shared.hyphenate(prefixed), val.replace(importantRE, ''), 'important');
        else style[prefixed] = val;
    }
}
const prefixes = [
    'Webkit',
    'Moz',
    'ms'
];
const prefixCache = {
};
function autoPrefix(style, rawName) {
    const cached = prefixCache[rawName];
    if (cached) return cached;
    let name = _runtimeCore.camelize(rawName);
    if (name !== 'filter' && name in style) return prefixCache[rawName] = name;
    name = _shared.capitalize(name);
    for(let i = 0; i < prefixes.length; i++){
        const prefixed = prefixes[i] + name;
        if (prefixed in style) return prefixCache[rawName] = prefixed;
    }
    return rawName;
}
const xlinkNS = 'http://www.w3.org/1999/xlink';
function patchAttr(el, key, value, isSVG, instance) {
    if (isSVG && key.startsWith('xlink:')) {
        if (value == null) el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
        else el.setAttributeNS(xlinkNS, key, value);
    } else {
        // note we are only checking boolean attributes that don't have a
        // corresponding dom prop of the same name here.
        const isBoolean = _shared.isSpecialBooleanAttr(key);
        if (value == null || isBoolean && !_shared.includeBooleanAttr(value)) el.removeAttribute(key);
        else el.setAttribute(key, isBoolean ? '' : value);
    }
}
// __UNSAFE__
// functions. The user is responsible for using them with only trusted content.
function patchDOMProp(el, key, value, // the following args are passed only due to potential innerHTML/textContent
// overriding existing VNodes, in which case the old tree must be properly
// unmounted.
prevChildren, parentComponent, parentSuspense, unmountChildren) {
    if (key === 'innerHTML' || key === 'textContent') {
        if (prevChildren) unmountChildren(prevChildren, parentComponent, parentSuspense);
        el[key] = value == null ? '' : value;
        return;
    }
    if (key === 'value' && el.tagName !== 'PROGRESS' && // custom elements may use _value internally
    !el.tagName.includes('-')) {
        // store value as _value as well since
        // non-string values will be stringified.
        el._value = value;
        const newValue = value == null ? '' : value;
        if (el.value !== newValue || // #4956: always set for OPTION elements because its value falls back to
        // textContent if no value attribute is present. And setting .value for
        // OPTION has no side effect
        el.tagName === 'OPTION') el.value = newValue;
        if (value == null) el.removeAttribute(key);
        return;
    }
    if (value === '' || value == null) {
        const type = typeof el[key];
        if (type === 'boolean') {
            // e.g. <select multiple> compiles to { multiple: '' }
            el[key] = _shared.includeBooleanAttr(value);
            return;
        } else if (value == null && type === 'string') {
            // e.g. <div :id="null">
            el[key] = '';
            el.removeAttribute(key);
            return;
        } else if (type === 'number') {
            // e.g. <img :width="null">
            // the value of some IDL attr must be greater than 0, e.g. input.size = 0 -> error
            try {
                el[key] = 0;
            } catch (_a) {
            }
            el.removeAttribute(key);
            return;
        }
    }
    // some properties perform value validation and throw
    try {
        el[key] = value;
    } catch (e) {
        _runtimeCore.warn(`Failed setting prop "${key}" on <${el.tagName.toLowerCase()}>: ` + `value ${value} is invalid.`, e);
    }
}
// Async edge case fix requires storing an event listener's attach timestamp.
let _getNow = Date.now;
let skipTimestampCheck = false;
if (typeof window !== 'undefined') {
    // Determine what event timestamp the browser is using. Annoyingly, the
    // timestamp can either be hi-res (relative to page load) or low-res
    // (relative to UNIX epoch), so in order to compare time we have to use the
    // same timestamp type when saving the flush timestamp.
    if (_getNow() > document.createEvent('Event').timeStamp) // if the low-res timestamp which is bigger than the event timestamp
    // (which is evaluated AFTER) it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listeners as well.
    _getNow = ()=>performance.now()
    ;
    // #3485: Firefox <= 53 has incorrect Event.timeStamp implementation
    // and does not fire microtasks in between event propagation, so safe to exclude.
    const ffMatch = navigator.userAgent.match(/firefox\/(\d+)/i);
    skipTimestampCheck = !!(ffMatch && Number(ffMatch[1]) <= 53);
}
// To avoid the overhead of repeatedly calling performance.now(), we cache
// and use the same timestamp for all event listeners attached in the same tick.
let cachedNow = 0;
const p = Promise.resolve();
const reset = ()=>{
    cachedNow = 0;
};
const getNow = ()=>cachedNow || (p.then(reset), cachedNow = _getNow())
;
function addEventListener(el, event, handler, options) {
    el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
    el.removeEventListener(event, handler, options);
}
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
    // vei = vue event invokers
    const invokers = el._vei || (el._vei = {
    });
    const existingInvoker = invokers[rawName];
    if (nextValue && existingInvoker) // patch
    existingInvoker.value = nextValue;
    else {
        const [name, options] = parseName(rawName);
        if (nextValue) {
            // add
            const invoker = invokers[rawName] = createInvoker(nextValue, instance);
            addEventListener(el, name, invoker, options);
        } else if (existingInvoker) {
            // remove
            removeEventListener(el, name, existingInvoker, options);
            invokers[rawName] = undefined;
        }
    }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
    let options;
    if (optionsModifierRE.test(name)) {
        options = {
        };
        let m;
        while(m = name.match(optionsModifierRE)){
            name = name.slice(0, name.length - m[0].length);
            options[m[0].toLowerCase()] = true;
        }
    }
    return [
        _shared.hyphenate(name.slice(2)),
        options
    ];
}
function createInvoker(initialValue, instance) {
    const invoker = (e)=>{
        // async edge case #6566: inner click event triggers patch, event handler
        // attached to outer element during patch, and triggered again. This
        // happens because browsers fire microtask ticks between event propagation.
        // the solution is simple: we save the timestamp when a handler is attached,
        // and the handler would only fire if the event passed to it was fired
        // AFTER it was attached.
        const timeStamp = e.timeStamp || _getNow();
        if (skipTimestampCheck || timeStamp >= invoker.attached - 1) _runtimeCore.callWithAsyncErrorHandling(patchStopImmediatePropagation(e, invoker.value), instance, 5 /* NATIVE_EVENT_HANDLER */ , [
            e
        ]);
    };
    invoker.value = initialValue;
    invoker.attached = getNow();
    return invoker;
}
function patchStopImmediatePropagation(e1, value) {
    if (_shared.isArray(value)) {
        const originalStop = e1.stopImmediatePropagation;
        e1.stopImmediatePropagation = ()=>{
            originalStop.call(e1);
            e1._stopped = true;
        };
        return value.map((fn)=>(e)=>!e._stopped && fn && fn(e)
        );
    } else return value;
}
const nativeOnRE = /^on[a-z]/;
const patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren)=>{
    if (key === 'class') patchClass(el, nextValue, isSVG);
    else if (key === 'style') patchStyle(el, prevValue, nextValue);
    else if (_shared.isOn(key)) // ignore v-model listeners
    {
        if (!_shared.isModelListener(key)) patchEvent(el, key, prevValue, nextValue, parentComponent);
    } else if (key[0] === '.' ? (key = key.slice(1), true) : key[0] === '^' ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
    else {
        // special case for <input v-model type="checkbox"> with
        // :true-value & :false-value
        // store value as dom properties since non-string values will be
        // stringified.
        if (key === 'true-value') el._trueValue = nextValue;
        else if (key === 'false-value') el._falseValue = nextValue;
        patchAttr(el, key, nextValue, isSVG);
    }
};
function shouldSetAsProp(el, key, value, isSVG) {
    if (isSVG) {
        // most keys must be set as attribute on svg elements to work
        // ...except innerHTML & textContent
        if (key === 'innerHTML' || key === 'textContent') return true;
        // or native onclick with function values
        if (key in el && nativeOnRE.test(key) && _shared.isFunction(value)) return true;
        return false;
    }
    // spellcheck and draggable are numerated attrs, however their
    // corresponding DOM properties are actually booleans - this leads to
    // setting it with a string "false" value leading it to be coerced to
    // `true`, so we need to always treat them as attributes.
    // Note that `contentEditable` doesn't have this problem: its DOM
    // property is also enumerated string values.
    if (key === 'spellcheck' || key === 'draggable') return false;
    // #1787, #2840 form property on form elements is readonly and must be set as
    // attribute.
    if (key === 'form') return false;
    // #1526 <input list> must be set as attribute
    if (key === 'list' && el.tagName === 'INPUT') return false;
    // #2766 <textarea type> must be set as attribute
    if (key === 'type' && el.tagName === 'TEXTAREA') return false;
    // native onclick with string value, must be set as attribute
    if (nativeOnRE.test(key) && _shared.isString(value)) return false;
    return key in el;
}
function defineCustomElement(options, hydate) {
    const Comp = _runtimeCore.defineComponent(options);
    class VueCustomElement extends VueElement {
        constructor(initialProps){
            super(Comp, initialProps, hydate);
        }
    }
    VueCustomElement.def = Comp;
    return VueCustomElement;
}
const defineSSRCustomElement = (options)=>{
    // @ts-ignore
    return defineCustomElement(options, hydrate);
};
const BaseClass = typeof HTMLElement !== 'undefined' ? HTMLElement : class {
};
class VueElement extends BaseClass {
    constructor(_def, _props = {
    }, hydrate1){
        super();
        this._def = _def;
        this._props = _props;
        /**
         * @internal
         */ this._instance = null;
        this._connected = false;
        this._resolved = false;
        this._numberProps = null;
        if (this.shadowRoot && hydrate1) hydrate1(this._createVNode(), this.shadowRoot);
        else {
            if (this.shadowRoot) _runtimeCore.warn(`Custom element has pre-rendered declarative shadow root but is not ` + `defined as hydratable. Use \`defineSSRCustomElement\`.`);
            this.attachShadow({
                mode: 'open'
            });
        }
    }
    connectedCallback() {
        this._connected = true;
        if (!this._instance) this._resolveDef();
    }
    disconnectedCallback() {
        this._connected = false;
        _runtimeCore.nextTick(()=>{
            if (!this._connected) {
                render(null, this.shadowRoot);
                this._instance = null;
            }
        });
    }
    /**
     * resolve inner component definition (handle possible async component)
     */ _resolveDef() {
        if (this._resolved) return;
        this._resolved = true;
        // set initial attrs
        for(let i = 0; i < this.attributes.length; i++)this._setAttr(this.attributes[i].name);
        // watch future attr changes
        new MutationObserver((mutations)=>{
            for (const m of mutations)this._setAttr(m.attributeName);
        }).observe(this, {
            attributes: true
        });
        const resolve = (def)=>{
            const { props , styles  } = def;
            const hasOptions = !_shared.isArray(props);
            const rawKeys = props ? hasOptions ? Object.keys(props) : props : [];
            // cast Number-type props set before resolve
            let numberProps;
            if (hasOptions) for(const key in this._props){
                const opt = props[key];
                if (opt === Number || opt && opt.type === Number) {
                    this._props[key] = _shared.toNumber(this._props[key]);
                    (numberProps || (numberProps = Object.create(null)))[key] = true;
                }
            }
            this._numberProps = numberProps;
            // check if there are props set pre-upgrade or connect
            for (const key1 of Object.keys(this))if (key1[0] !== '_') this._setProp(key1, this[key1], true, false);
            // defining getter/setters on prototype
            for (const key2 of rawKeys.map(_shared.camelize))Object.defineProperty(this, key2, {
                get () {
                    return this._getProp(key2);
                },
                set (val) {
                    this._setProp(key2, val);
                }
            });
            // apply CSS
            this._applyStyles(styles);
            // initial render
            this._update();
        };
        const asyncDef = this._def.__asyncLoader;
        if (asyncDef) asyncDef().then(resolve);
        else resolve(this._def);
    }
    _setAttr(key) {
        let value = this.getAttribute(key);
        if (this._numberProps && this._numberProps[key]) value = _shared.toNumber(value);
        this._setProp(_shared.camelize(key), value, false);
    }
    /**
     * @internal
     */ _getProp(key) {
        return this._props[key];
    }
    /**
     * @internal
     */ _setProp(key, val, shouldReflect = true, shouldUpdate = true) {
        if (val !== this._props[key]) {
            this._props[key] = val;
            if (shouldUpdate && this._instance) this._update();
            // reflect
            if (shouldReflect) {
                if (val === true) this.setAttribute(_shared.hyphenate(key), '');
                else if (typeof val === 'string' || typeof val === 'number') this.setAttribute(_shared.hyphenate(key), val + '');
                else if (!val) this.removeAttribute(_shared.hyphenate(key));
            }
        }
    }
    _update() {
        render(this._createVNode(), this.shadowRoot);
    }
    _createVNode() {
        const vnode = _runtimeCore.createVNode(this._def, _shared.extend({
        }, this._props));
        if (!this._instance) vnode.ce = (instance)=>{
            this._instance = instance;
            instance.isCE = true;
            instance.ceReload = (newStyles)=>{
                // always reset styles
                if (this._styles) {
                    this._styles.forEach((s)=>this.shadowRoot.removeChild(s)
                    );
                    this._styles.length = 0;
                }
                this._applyStyles(newStyles);
                // if this is an async component, ceReload is called from the inner
                // component so no need to reload the async wrapper
                if (!this._def.__asyncLoader) {
                    // reload
                    this._instance = null;
                    this._update();
                }
            };
            // intercept emit
            instance.emit = (event, ...args)=>{
                this.dispatchEvent(new CustomEvent(event, {
                    detail: args
                }));
            };
            // locate nearest Vue custom element parent for provide/inject
            let parent = this;
            while(parent = parent && (parent.parentNode || parent.host))if (parent instanceof VueElement) {
                instance.parent = parent._instance;
                break;
            }
        };
        return vnode;
    }
    _applyStyles(styles) {
        if (styles) styles.forEach((css)=>{
            const s = document.createElement('style');
            s.textContent = css;
            this.shadowRoot.appendChild(s);
            (this._styles || (this._styles = [])).push(s);
        });
    }
}
function useCssModule(name = '$style') {
    /* istanbul ignore else */ {
        const instance = _runtimeCore.getCurrentInstance();
        if (!instance) {
            _runtimeCore.warn(`useCssModule must be called inside setup()`);
            return _shared.EMPTY_OBJ;
        }
        const modules = instance.type.__cssModules;
        if (!modules) {
            _runtimeCore.warn(`Current instance does not have CSS modules injected.`);
            return _shared.EMPTY_OBJ;
        }
        const mod = modules[name];
        if (!mod) {
            _runtimeCore.warn(`Current instance does not have CSS module named "${name}".`);
            return _shared.EMPTY_OBJ;
        }
        return mod;
    }
}
/**
 * Runtime helper for SFC's CSS variable injection feature.
 * @private
 */ function useCssVars(getter) {
    const instance = _runtimeCore.getCurrentInstance();
    /* istanbul ignore next */ if (!instance) {
        _runtimeCore.warn(`useCssVars is called without current active component instance.`);
        return;
    }
    const setVars = ()=>setVarsOnVNode(instance.subTree, getter(instance.proxy))
    ;
    _runtimeCore.watchPostEffect(setVars);
    _runtimeCore.onMounted(()=>{
        const ob = new MutationObserver(setVars);
        ob.observe(instance.subTree.el.parentNode, {
            childList: true
        });
        _runtimeCore.onUnmounted(()=>ob.disconnect()
        );
    });
}
function setVarsOnVNode(vnode, vars) {
    if (vnode.shapeFlag & 128 /* SUSPENSE */ ) {
        const suspense = vnode.suspense;
        vnode = suspense.activeBranch;
        if (suspense.pendingBranch && !suspense.isHydrating) suspense.effects.push(()=>{
            setVarsOnVNode(suspense.activeBranch, vars);
        });
    }
    // drill down HOCs until it's a non-component vnode
    while(vnode.component)vnode = vnode.component.subTree;
    if (vnode.shapeFlag & 1 /* ELEMENT */  && vnode.el) setVarsOnNode(vnode.el, vars);
    else if (vnode.type === _runtimeCore.Fragment) vnode.children.forEach((c)=>setVarsOnVNode(c, vars)
    );
    else if (vnode.type === _runtimeCore.Static) {
        let { el , anchor  } = vnode;
        while(el){
            setVarsOnNode(el, vars);
            if (el === anchor) break;
            el = el.nextSibling;
        }
    }
}
function setVarsOnNode(el, vars) {
    if (el.nodeType === 1) {
        const style = el.style;
        for(const key in vars)style.setProperty(`--${key}`, vars[key]);
    }
}
const TRANSITION = 'transition';
const ANIMATION = 'animation';
// DOM Transition is a higher-order-component based on the platform-agnostic
// base Transition component, with DOM-specific logic.
const Transition = (props, { slots  })=>_runtimeCore.h(_runtimeCore.BaseTransition, resolveTransitionProps(props), slots)
;
Transition.displayName = 'Transition';
const DOMTransitionPropsValidators = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: true
    },
    duration: [
        String,
        Number,
        Object
    ],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
const TransitionPropsValidators = Transition.props = /*#__PURE__*/ _shared.extend({
}, _runtimeCore.BaseTransition.props, DOMTransitionPropsValidators);
/**
 * #3227 Incoming hooks may be merged into arrays when wrapping Transition
 * with custom HOCs.
 */ const callHook = (hook, args = [])=>{
    if (_shared.isArray(hook)) hook.forEach((h)=>h(...args)
    );
    else if (hook) hook(...args);
};
/**
 * Check if a hook expects a callback (2nd arg), which means the user
 * intends to explicitly control the end of the transition.
 */ const hasExplicitCallback = (hook)=>{
    return hook ? _shared.isArray(hook) ? hook.some((h)=>h.length > 1
    ) : hook.length > 1 : false;
};
function resolveTransitionProps(rawProps) {
    const baseProps = {
    };
    for(const key in rawProps)if (!(key in DOMTransitionPropsValidators)) baseProps[key] = rawProps[key];
    if (rawProps.css === false) return baseProps;
    const { name ='v' , type , duration , enterFromClass =`${name}-enter-from` , enterActiveClass =`${name}-enter-active` , enterToClass =`${name}-enter-to` , appearFromClass =enterFromClass , appearActiveClass =enterActiveClass , appearToClass =enterToClass , leaveFromClass =`${name}-leave-from` , leaveActiveClass =`${name}-leave-active` , leaveToClass =`${name}-leave-to`  } = rawProps;
    const durations = normalizeDuration(duration);
    const enterDuration = durations && durations[0];
    const leaveDuration = durations && durations[1];
    const { onBeforeEnter , onEnter , onEnterCancelled , onLeave , onLeaveCancelled , onBeforeAppear =onBeforeEnter , onAppear =onEnter , onAppearCancelled =onEnterCancelled  } = baseProps;
    const finishEnter = (el, isAppear, done)=>{
        removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
        removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
        done && done();
    };
    const finishLeave = (el, done)=>{
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
        done && done();
    };
    const makeEnterHook = (isAppear)=>{
        return (el, done)=>{
            const hook = isAppear ? onAppear : onEnter;
            const resolve = ()=>finishEnter(el, isAppear, done)
            ;
            callHook(hook, [
                el,
                resolve
            ]);
            nextFrame(()=>{
                removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
                addTransitionClass(el, isAppear ? appearToClass : enterToClass);
                if (!hasExplicitCallback(hook)) whenTransitionEnds(el, type, enterDuration, resolve);
            });
        };
    };
    return _shared.extend(baseProps, {
        onBeforeEnter (el) {
            callHook(onBeforeEnter, [
                el
            ]);
            addTransitionClass(el, enterFromClass);
            addTransitionClass(el, enterActiveClass);
        },
        onBeforeAppear (el) {
            callHook(onBeforeAppear, [
                el
            ]);
            addTransitionClass(el, appearFromClass);
            addTransitionClass(el, appearActiveClass);
        },
        onEnter: makeEnterHook(false),
        onAppear: makeEnterHook(true),
        onLeave (el, done) {
            const resolve = ()=>finishLeave(el, done)
            ;
            addTransitionClass(el, leaveFromClass);
            // force reflow so *-leave-from classes immediately take effect (#2593)
            forceReflow();
            addTransitionClass(el, leaveActiveClass);
            nextFrame(()=>{
                removeTransitionClass(el, leaveFromClass);
                addTransitionClass(el, leaveToClass);
                if (!hasExplicitCallback(onLeave)) whenTransitionEnds(el, type, leaveDuration, resolve);
            });
            callHook(onLeave, [
                el,
                resolve
            ]);
        },
        onEnterCancelled (el) {
            finishEnter(el, false);
            callHook(onEnterCancelled, [
                el
            ]);
        },
        onAppearCancelled (el) {
            finishEnter(el, true);
            callHook(onAppearCancelled, [
                el
            ]);
        },
        onLeaveCancelled (el) {
            finishLeave(el);
            callHook(onLeaveCancelled, [
                el
            ]);
        }
    });
}
function normalizeDuration(duration) {
    if (duration == null) return null;
    else if (_shared.isObject(duration)) return [
        NumberOf(duration.enter),
        NumberOf(duration.leave)
    ];
    else {
        const n = NumberOf(duration);
        return [
            n,
            n
        ];
    }
}
function NumberOf(val) {
    const res = _shared.toNumber(val);
    validateDuration(res);
    return res;
}
function validateDuration(val) {
    if (typeof val !== 'number') _runtimeCore.warn(`<transition> explicit duration is not a valid number - ` + `got ${JSON.stringify(val)}.`);
    else if (isNaN(val)) _runtimeCore.warn(`<transition> explicit duration is NaN - ` + 'the duration expression might be incorrect.');
}
function addTransitionClass(el, cls) {
    cls.split(/\s+/).forEach((c)=>c && el.classList.add(c)
    );
    (el._vtc || (el._vtc = new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
    cls.split(/\s+/).forEach((c)=>c && el.classList.remove(c)
    );
    const { _vtc  } = el;
    if (_vtc) {
        _vtc.delete(cls);
        if (!_vtc.size) el._vtc = undefined;
    }
}
function nextFrame(cb) {
    requestAnimationFrame(()=>{
        requestAnimationFrame(cb);
    });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
    const id = el._endId = ++endId;
    const resolveIfNotStale = ()=>{
        if (id === el._endId) resolve();
    };
    if (explicitTimeout) return setTimeout(resolveIfNotStale, explicitTimeout);
    const { type , timeout , propCount  } = getTransitionInfo(el, expectedType);
    if (!type) return resolve();
    const endEvent = type + 'end';
    let ended = 0;
    const end = ()=>{
        el.removeEventListener(endEvent, onEnd);
        resolveIfNotStale();
    };
    const onEnd = (e)=>{
        if (e.target === el && ++ended >= propCount) end();
    };
    setTimeout(()=>{
        if (ended < propCount) end();
    }, timeout + 1);
    el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
    const styles = window.getComputedStyle(el);
    // JSDOM may return undefined for transition properties
    const getStyleProperties = (key)=>(styles[key] || '').split(', ')
    ;
    const transitionDelays = getStyleProperties(TRANSITION + 'Delay');
    const transitionDurations = getStyleProperties(TRANSITION + 'Duration');
    const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    const animationDelays = getStyleProperties(ANIMATION + 'Delay');
    const animationDurations = getStyleProperties(ANIMATION + 'Duration');
    const animationTimeout = getTimeout(animationDelays, animationDurations);
    let type = null;
    let timeout = 0;
    let propCount = 0;
    /* istanbul ignore if */ if (expectedType === TRANSITION) {
        if (transitionTimeout > 0) {
            type = TRANSITION;
            timeout = transitionTimeout;
            propCount = transitionDurations.length;
        }
    } else if (expectedType === ANIMATION) {
        if (animationTimeout > 0) {
            type = ANIMATION;
            timeout = animationTimeout;
            propCount = animationDurations.length;
        }
    } else {
        timeout = Math.max(transitionTimeout, animationTimeout);
        type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
        propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
    }
    const hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(styles[TRANSITION + 'Property']);
    return {
        type,
        timeout,
        propCount,
        hasTransform
    };
}
function getTimeout(delays, durations) {
    while(delays.length < durations.length)delays = delays.concat(delays);
    return Math.max(...durations.map((d, i)=>toMs(d) + toMs(delays[i])
    ));
}
// Old versions of Chromium (below 61.0.3163.100) formats floating pointer
// numbers in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down
// (i.e. acting as a floor function) causing unexpected behaviors
function toMs(s) {
    return Number(s.slice(0, -1).replace(',', '.')) * 1000;
}
// synchronously force layout to put elements into a certain state
function forceReflow() {
    return document.body.offsetHeight;
}
const positionMap = new WeakMap();
const newPositionMap = new WeakMap();
const TransitionGroupImpl = {
    name: 'TransitionGroup',
    props: /*#__PURE__*/ _shared.extend({
    }, TransitionPropsValidators, {
        tag: String,
        moveClass: String
    }),
    setup (props, { slots  }) {
        const instance = _runtimeCore.getCurrentInstance();
        const state = _runtimeCore.useTransitionState();
        let prevChildren;
        let children;
        _runtimeCore.onUpdated(()=>{
            // children is guaranteed to exist after initial render
            if (!prevChildren.length) return;
            const moveClass = props.moveClass || `${props.name || 'v'}-move`;
            if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) return;
            // we divide the work into three loops to avoid mixing DOM reads and writes
            // in each iteration - which helps prevent layout thrashing.
            prevChildren.forEach(callPendingCbs);
            prevChildren.forEach(recordPosition);
            const movedChildren = prevChildren.filter(applyTranslation);
            // force reflow to put everything in position
            forceReflow();
            movedChildren.forEach((c)=>{
                const el = c.el;
                const style = el.style;
                addTransitionClass(el, moveClass);
                style.transform = style.webkitTransform = style.transitionDuration = '';
                const cb = el._moveCb = (e)=>{
                    if (e && e.target !== el) return;
                    if (!e || /transform$/.test(e.propertyName)) {
                        el.removeEventListener('transitionend', cb);
                        el._moveCb = null;
                        removeTransitionClass(el, moveClass);
                    }
                };
                el.addEventListener('transitionend', cb);
            });
        });
        return ()=>{
            const rawProps = _runtimeCore.toRaw(props);
            const cssTransitionProps = resolveTransitionProps(rawProps);
            let tag = rawProps.tag || _runtimeCore.Fragment;
            prevChildren = children;
            children = slots.default ? _runtimeCore.getTransitionRawChildren(slots.default()) : [];
            for(let i = 0; i < children.length; i++){
                const child = children[i];
                if (child.key != null) _runtimeCore.setTransitionHooks(child, _runtimeCore.resolveTransitionHooks(child, cssTransitionProps, state, instance));
                else _runtimeCore.warn(`<TransitionGroup> children must be keyed.`);
            }
            if (prevChildren) for(let i1 = 0; i1 < prevChildren.length; i1++){
                const child = prevChildren[i1];
                _runtimeCore.setTransitionHooks(child, _runtimeCore.resolveTransitionHooks(child, cssTransitionProps, state, instance));
                positionMap.set(child, child.el.getBoundingClientRect());
            }
            return _runtimeCore.createVNode(tag, null, children);
        };
    }
};
const TransitionGroup = TransitionGroupImpl;
function callPendingCbs(c) {
    const el = c.el;
    if (el._moveCb) el._moveCb();
    if (el._enterCb) el._enterCb();
}
function recordPosition(c) {
    newPositionMap.set(c, c.el.getBoundingClientRect());
}
function applyTranslation(c) {
    const oldPos = positionMap.get(c);
    const newPos = newPositionMap.get(c);
    const dx = oldPos.left - newPos.left;
    const dy = oldPos.top - newPos.top;
    if (dx || dy) {
        const s = c.el.style;
        s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
        s.transitionDuration = '0s';
        return c;
    }
}
function hasCSSTransform(el, root, moveClass) {
    // Detect whether an element with the move class applied has
    // CSS transitions. Since the element may be inside an entering
    // transition at this very moment, we make a clone of it and remove
    // all other transition classes applied to ensure only the move class
    // is applied.
    const clone = el.cloneNode();
    if (el._vtc) el._vtc.forEach((cls)=>{
        cls.split(/\s+/).forEach((c)=>c && clone.classList.remove(c)
        );
    });
    moveClass.split(/\s+/).forEach((c)=>c && clone.classList.add(c)
    );
    clone.style.display = 'none';
    const container = root.nodeType === 1 ? root : root.parentNode;
    container.appendChild(clone);
    const { hasTransform  } = getTransitionInfo(clone);
    container.removeChild(clone);
    return hasTransform;
}
const getModelAssigner = (vnode)=>{
    const fn = vnode.props['onUpdate:modelValue'];
    return _shared.isArray(fn) ? (value)=>_shared.invokeArrayFns(fn, value)
     : fn;
};
function onCompositionStart(e) {
    e.target.composing = true;
}
function onCompositionEnd(e) {
    const target = e.target;
    if (target.composing) {
        target.composing = false;
        trigger(target, 'input');
    }
}
function trigger(el, type) {
    const e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
}
// We are exporting the v-model runtime directly as vnode hooks so that it can
// be tree-shaken in case v-model is never used.
const vModelText = {
    created (el, { modifiers: { lazy , trim , number  }  }, vnode) {
        el._assign = getModelAssigner(vnode);
        const castToNumber = number || vnode.props && vnode.props.type === 'number';
        addEventListener(el, lazy ? 'change' : 'input', (e)=>{
            if (e.target.composing) return;
            let domValue = el.value;
            if (trim) domValue = domValue.trim();
            else if (castToNumber) domValue = _shared.toNumber(domValue);
            el._assign(domValue);
        });
        if (trim) addEventListener(el, 'change', ()=>{
            el.value = el.value.trim();
        });
        if (!lazy) {
            addEventListener(el, 'compositionstart', onCompositionStart);
            addEventListener(el, 'compositionend', onCompositionEnd);
            // Safari < 10.2 & UIWebView doesn't fire compositionend when
            // switching focus before confirming composition choice
            // this also fixes the issue where some browsers e.g. iOS Chrome
            // fires "change" instead of "input" on autocomplete.
            addEventListener(el, 'change', onCompositionEnd);
        }
    },
    // set value on mounted so it's after min/max for type="range"
    mounted (el, { value  }) {
        el.value = value == null ? '' : value;
    },
    beforeUpdate (el, { value , modifiers: { lazy , trim , number  }  }, vnode) {
        el._assign = getModelAssigner(vnode);
        // avoid clearing unresolved text. #2302
        if (el.composing) return;
        if (document.activeElement === el) {
            if (lazy) return;
            if (trim && el.value.trim() === value) return;
            if ((number || el.type === 'number') && _shared.toNumber(el.value) === value) return;
        }
        const newValue = value == null ? '' : value;
        if (el.value !== newValue) el.value = newValue;
    }
};
const vModelCheckbox = {
    // #4096 array checkboxes need to be deep traversed
    deep: true,
    created (el, _, vnode) {
        el._assign = getModelAssigner(vnode);
        addEventListener(el, 'change', ()=>{
            const modelValue = el._modelValue;
            const elementValue = getValue(el);
            const checked = el.checked;
            const assign = el._assign;
            if (_shared.isArray(modelValue)) {
                const index = _shared.looseIndexOf(modelValue, elementValue);
                const found = index !== -1;
                if (checked && !found) assign(modelValue.concat(elementValue));
                else if (!checked && found) {
                    const filtered = [
                        ...modelValue
                    ];
                    filtered.splice(index, 1);
                    assign(filtered);
                }
            } else if (_shared.isSet(modelValue)) {
                const cloned = new Set(modelValue);
                if (checked) cloned.add(elementValue);
                else cloned.delete(elementValue);
                assign(cloned);
            } else assign(getCheckboxValue(el, checked));
        });
    },
    // set initial checked on mount to wait for true-value/false-value
    mounted: setChecked,
    beforeUpdate (el, binding, vnode) {
        el._assign = getModelAssigner(vnode);
        setChecked(el, binding, vnode);
    }
};
function setChecked(el, { value , oldValue  }, vnode) {
    el._modelValue = value;
    if (_shared.isArray(value)) el.checked = _shared.looseIndexOf(value, vnode.props.value) > -1;
    else if (_shared.isSet(value)) el.checked = value.has(vnode.props.value);
    else if (value !== oldValue) el.checked = _shared.looseEqual(value, getCheckboxValue(el, true));
}
const vModelRadio = {
    created (el, { value  }, vnode) {
        el.checked = _shared.looseEqual(value, vnode.props.value);
        el._assign = getModelAssigner(vnode);
        addEventListener(el, 'change', ()=>{
            el._assign(getValue(el));
        });
    },
    beforeUpdate (el, { value , oldValue  }, vnode) {
        el._assign = getModelAssigner(vnode);
        if (value !== oldValue) el.checked = _shared.looseEqual(value, vnode.props.value);
    }
};
const vModelSelect = {
    // <select multiple> value need to be deep traversed
    deep: true,
    created (el, { value , modifiers: { number  }  }, vnode) {
        const isSetModel = _shared.isSet(value);
        addEventListener(el, 'change', ()=>{
            const selectedVal = Array.prototype.filter.call(el.options, (o)=>o.selected
            ).map((o)=>number ? _shared.toNumber(getValue(o)) : getValue(o)
            );
            el._assign(el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]);
        });
        el._assign = getModelAssigner(vnode);
    },
    // set value in mounted & updated because <select> relies on its children
    // <option>s.
    mounted (el, { value  }) {
        setSelected(el, value);
    },
    beforeUpdate (el, _binding, vnode) {
        el._assign = getModelAssigner(vnode);
    },
    updated (el, { value  }) {
        setSelected(el, value);
    }
};
function setSelected(el, value) {
    const isMultiple = el.multiple;
    if (isMultiple && !_shared.isArray(value) && !_shared.isSet(value)) {
        _runtimeCore.warn(`<select multiple v-model> expects an Array or Set value for its binding, ` + `but got ${Object.prototype.toString.call(value).slice(8, -1)}.`);
        return;
    }
    for(let i = 0, l = el.options.length; i < l; i++){
        const option = el.options[i];
        const optionValue = getValue(option);
        if (isMultiple) {
            if (_shared.isArray(value)) option.selected = _shared.looseIndexOf(value, optionValue) > -1;
            else option.selected = value.has(optionValue);
        } else if (_shared.looseEqual(getValue(option), value)) {
            if (el.selectedIndex !== i) el.selectedIndex = i;
            return;
        }
    }
    if (!isMultiple && el.selectedIndex !== -1) el.selectedIndex = -1;
}
// retrieve raw value set via :value bindings
function getValue(el) {
    return '_value' in el ? el._value : el.value;
}
// retrieve raw value for true-value and false-value set via :true-value or :false-value bindings
function getCheckboxValue(el, checked) {
    const key = checked ? '_trueValue' : '_falseValue';
    return key in el ? el[key] : checked;
}
const vModelDynamic = {
    created (el, binding, vnode) {
        callModelHook(el, binding, vnode, null, 'created');
    },
    mounted (el, binding, vnode) {
        callModelHook(el, binding, vnode, null, 'mounted');
    },
    beforeUpdate (el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, 'beforeUpdate');
    },
    updated (el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, 'updated');
    }
};
function callModelHook(el, binding, vnode, prevVNode, hook) {
    let modelToUse;
    switch(el.tagName){
        case 'SELECT':
            modelToUse = vModelSelect;
            break;
        case 'TEXTAREA':
            modelToUse = vModelText;
            break;
        default:
            switch(vnode.props && vnode.props.type){
                case 'checkbox':
                    modelToUse = vModelCheckbox;
                    break;
                case 'radio':
                    modelToUse = vModelRadio;
                    break;
                default:
                    modelToUse = vModelText;
            }
    }
    const fn = modelToUse[hook];
    fn && fn(el, binding, vnode, prevVNode);
}
// SSR vnode transforms, only used when user includes client-oriented render
// function in SSR
function initVModelForSSR() {
    vModelText.getSSRProps = ({ value  })=>({
            value
        })
    ;
    vModelRadio.getSSRProps = ({ value  }, vnode)=>{
        if (vnode.props && _shared.looseEqual(vnode.props.value, value)) return {
            checked: true
        };
    };
    vModelCheckbox.getSSRProps = ({ value  }, vnode)=>{
        if (_shared.isArray(value)) {
            if (vnode.props && _shared.looseIndexOf(value, vnode.props.value) > -1) return {
                checked: true
            };
        } else if (_shared.isSet(value)) {
            if (vnode.props && value.has(vnode.props.value)) return {
                checked: true
            };
        } else if (value) return {
            checked: true
        };
    };
}
const systemModifiers = [
    'ctrl',
    'shift',
    'alt',
    'meta'
];
const modifierGuards = {
    stop: (e)=>e.stopPropagation()
    ,
    prevent: (e)=>e.preventDefault()
    ,
    self: (e)=>e.target !== e.currentTarget
    ,
    ctrl: (e)=>!e.ctrlKey
    ,
    shift: (e)=>!e.shiftKey
    ,
    alt: (e)=>!e.altKey
    ,
    meta: (e)=>!e.metaKey
    ,
    left: (e)=>'button' in e && e.button !== 0
    ,
    middle: (e)=>'button' in e && e.button !== 1
    ,
    right: (e)=>'button' in e && e.button !== 2
    ,
    exact: (e, modifiers)=>systemModifiers.some((m)=>e[`${m}Key`] && !modifiers.includes(m)
        )
};
/**
 * @private
 */ const withModifiers = (fn, modifiers)=>{
    return (event, ...args)=>{
        for(let i = 0; i < modifiers.length; i++){
            const guard = modifierGuards[modifiers[i]];
            if (guard && guard(event, modifiers)) return;
        }
        return fn(event, ...args);
    };
};
// Kept for 2.x compat.
// Note: IE11 compat for `spacebar` and `del` is removed for now.
const keyNames = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace'
};
/**
 * @private
 */ const withKeys = (fn, modifiers)=>{
    return (event)=>{
        if (!('key' in event)) return;
        const eventKey = _shared.hyphenate(event.key);
        if (modifiers.some((k)=>k === eventKey || keyNames[k] === eventKey
        )) return fn(event);
    };
};
const vShow = {
    beforeMount (el, { value  }, { transition  }) {
        el._vod = el.style.display === 'none' ? '' : el.style.display;
        if (transition && value) transition.beforeEnter(el);
        else setDisplay(el, value);
    },
    mounted (el, { value  }, { transition  }) {
        if (transition && value) transition.enter(el);
    },
    updated (el, { value , oldValue  }, { transition  }) {
        if (!value === !oldValue) return;
        if (transition) {
            if (value) {
                transition.beforeEnter(el);
                setDisplay(el, true);
                transition.enter(el);
            } else transition.leave(el, ()=>{
                setDisplay(el, false);
            });
        } else setDisplay(el, value);
    },
    beforeUnmount (el, { value  }) {
        setDisplay(el, value);
    }
};
function setDisplay(el, value) {
    el.style.display = value ? el._vod : 'none';
}
// SSR vnode transforms, only used when user includes client-oriented render
// function in SSR
function initVShowForSSR() {
    vShow.getSSRProps = ({ value  })=>{
        if (!value) return {
            style: {
                display: 'none'
            }
        };
    };
}
const rendererOptions = _shared.extend({
    patchProp
}, nodeOps);
// lazy create the renderer - this makes core renderer logic tree-shakable
// in case the user only imports reactivity utilities from Vue.
let renderer;
let enabledHydration = false;
function ensureRenderer() {
    return renderer || (renderer = _runtimeCore.createRenderer(rendererOptions));
}
function ensureHydrationRenderer() {
    renderer = enabledHydration ? renderer : _runtimeCore.createHydrationRenderer(rendererOptions);
    enabledHydration = true;
    return renderer;
}
// use explicit type casts here to avoid import() calls in rolled-up d.ts
const render = (...args)=>{
    ensureRenderer().render(...args);
};
const hydrate = (...args)=>{
    ensureHydrationRenderer().hydrate(...args);
};
const createApp = (...args)=>{
    const app = ensureRenderer().createApp(...args);
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
    const { mount  } = app;
    app.mount = (containerOrSelector)=>{
        const container = normalizeContainer(containerOrSelector);
        if (!container) return;
        const component = app._component;
        if (!_shared.isFunction(component) && !component.render && !component.template) // __UNSAFE__
        // Reason: potential execution of JS expressions in in-DOM template.
        // The user must make sure the in-DOM template is trusted. If it's
        // rendered by the server, the template should not contain any user data.
        component.template = container.innerHTML;
        // clear content before mounting
        container.innerHTML = '';
        const proxy = mount(container, false, container instanceof SVGElement);
        if (container instanceof Element) {
            container.removeAttribute('v-cloak');
            container.setAttribute('data-v-app', '');
        }
        return proxy;
    };
    return app;
};
const createSSRApp = (...args)=>{
    const app = ensureHydrationRenderer().createApp(...args);
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
    const { mount  } = app;
    app.mount = (containerOrSelector)=>{
        const container = normalizeContainer(containerOrSelector);
        if (container) return mount(container, true, container instanceof SVGElement);
    };
    return app;
};
function injectNativeTagCheck(app) {
    // Inject `isNativeTag`
    // this is used for component name validation (dev only)
    Object.defineProperty(app.config, 'isNativeTag', {
        value: (tag)=>_shared.isHTMLTag(tag) || _shared.isSVGTag(tag)
        ,
        writable: false
    });
}
// dev only
function injectCompilerOptionsCheck(app) {
    if (_runtimeCore.isRuntimeOnly()) {
        const isCustomElement = app.config.isCustomElement;
        Object.defineProperty(app.config, 'isCustomElement', {
            get () {
                return isCustomElement;
            },
            set () {
                _runtimeCore.warn(`The \`isCustomElement\` config option is deprecated. Use ` + `\`compilerOptions.isCustomElement\` instead.`);
            }
        });
        const compilerOptions = app.config.compilerOptions;
        const msg = `The \`compilerOptions\` config option is only respected when using ` + `a build of Vue.js that includes the runtime compiler (aka "full build"). ` + `Since you are using the runtime-only build, \`compilerOptions\` ` + `must be passed to \`@vue/compiler-dom\` in the build setup instead.\n` + `- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.\n` + `- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n` + `- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom`;
        Object.defineProperty(app.config, 'compilerOptions', {
            get () {
                _runtimeCore.warn(msg);
                return compilerOptions;
            },
            set () {
                _runtimeCore.warn(msg);
            }
        });
    }
}
function normalizeContainer(container) {
    if (_shared.isString(container)) {
        const res = document.querySelector(container);
        if (!res) _runtimeCore.warn(`Failed to mount app: mount target selector "${container}" returned null.`);
        return res;
    }
    if (window.ShadowRoot && container instanceof window.ShadowRoot && container.mode === 'closed') _runtimeCore.warn(`mounting on a ShadowRoot with \`{mode: "closed"}\` may lead to unpredictable bugs`);
    return container;
}
let ssrDirectiveInitialized = false;
/**
 * @internal
 */ const initDirectivesForSSR = ()=>{
    if (!ssrDirectiveInitialized) {
        ssrDirectiveInitialized = true;
        initVModelForSSR();
        initVShowForSSR();
    }
};

},{"@vue/runtime-core":"lmqBl","@vue/shared":"3SM3y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lmqBl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EffectScope", ()=>_reactivity.EffectScope
);
parcelHelpers.export(exports, "ReactiveEffect", ()=>_reactivity.ReactiveEffect
);
parcelHelpers.export(exports, "customRef", ()=>_reactivity.customRef
);
parcelHelpers.export(exports, "effect", ()=>_reactivity.effect
);
parcelHelpers.export(exports, "effectScope", ()=>_reactivity.effectScope
);
parcelHelpers.export(exports, "getCurrentScope", ()=>_reactivity.getCurrentScope
);
parcelHelpers.export(exports, "isProxy", ()=>_reactivity.isProxy
);
parcelHelpers.export(exports, "isReactive", ()=>_reactivity.isReactive
);
parcelHelpers.export(exports, "isReadonly", ()=>_reactivity.isReadonly
);
parcelHelpers.export(exports, "isRef", ()=>_reactivity.isRef
);
parcelHelpers.export(exports, "isShallow", ()=>_reactivity.isShallow
);
parcelHelpers.export(exports, "markRaw", ()=>_reactivity.markRaw
);
parcelHelpers.export(exports, "onScopeDispose", ()=>_reactivity.onScopeDispose
);
parcelHelpers.export(exports, "proxyRefs", ()=>_reactivity.proxyRefs
);
parcelHelpers.export(exports, "reactive", ()=>_reactivity.reactive
);
parcelHelpers.export(exports, "readonly", ()=>_reactivity.readonly
);
parcelHelpers.export(exports, "ref", ()=>_reactivity.ref
);
parcelHelpers.export(exports, "shallowReactive", ()=>_reactivity.shallowReactive
);
parcelHelpers.export(exports, "shallowReadonly", ()=>_reactivity.shallowReadonly
);
parcelHelpers.export(exports, "shallowRef", ()=>_reactivity.shallowRef
);
parcelHelpers.export(exports, "stop", ()=>_reactivity.stop
);
parcelHelpers.export(exports, "toRaw", ()=>_reactivity.toRaw
);
parcelHelpers.export(exports, "toRef", ()=>_reactivity.toRef
);
parcelHelpers.export(exports, "toRefs", ()=>_reactivity.toRefs
);
parcelHelpers.export(exports, "triggerRef", ()=>_reactivity.triggerRef
);
parcelHelpers.export(exports, "unref", ()=>_reactivity.unref
);
parcelHelpers.export(exports, "camelize", ()=>_shared.camelize
);
parcelHelpers.export(exports, "capitalize", ()=>_shared.capitalize
);
parcelHelpers.export(exports, "normalizeClass", ()=>_shared.normalizeClass
);
parcelHelpers.export(exports, "normalizeProps", ()=>_shared.normalizeProps
);
parcelHelpers.export(exports, "normalizeStyle", ()=>_shared.normalizeStyle
);
parcelHelpers.export(exports, "toDisplayString", ()=>_shared.toDisplayString
);
parcelHelpers.export(exports, "toHandlerKey", ()=>_shared.toHandlerKey
);
parcelHelpers.export(exports, "BaseTransition", ()=>BaseTransition
);
parcelHelpers.export(exports, "Comment", ()=>Comment
);
parcelHelpers.export(exports, "Fragment", ()=>Fragment
);
parcelHelpers.export(exports, "KeepAlive", ()=>KeepAlive
);
parcelHelpers.export(exports, "Static", ()=>Static
);
parcelHelpers.export(exports, "Suspense", ()=>Suspense
);
parcelHelpers.export(exports, "Teleport", ()=>Teleport
);
parcelHelpers.export(exports, "Text", ()=>Text
);
parcelHelpers.export(exports, "callWithAsyncErrorHandling", ()=>callWithAsyncErrorHandling
);
parcelHelpers.export(exports, "callWithErrorHandling", ()=>callWithErrorHandling
);
parcelHelpers.export(exports, "cloneVNode", ()=>cloneVNode
);
parcelHelpers.export(exports, "compatUtils", ()=>compatUtils
);
parcelHelpers.export(exports, "computed", ()=>computed
);
parcelHelpers.export(exports, "createBlock", ()=>createBlock
);
parcelHelpers.export(exports, "createCommentVNode", ()=>createCommentVNode
);
parcelHelpers.export(exports, "createElementBlock", ()=>createElementBlock
);
parcelHelpers.export(exports, "createElementVNode", ()=>createBaseVNode
);
parcelHelpers.export(exports, "createHydrationRenderer", ()=>createHydrationRenderer
);
parcelHelpers.export(exports, "createPropsRestProxy", ()=>createPropsRestProxy
);
parcelHelpers.export(exports, "createRenderer", ()=>createRenderer
);
parcelHelpers.export(exports, "createSlots", ()=>createSlots
);
parcelHelpers.export(exports, "createStaticVNode", ()=>createStaticVNode
);
parcelHelpers.export(exports, "createTextVNode", ()=>createTextVNode
);
parcelHelpers.export(exports, "createVNode", ()=>createVNode
);
parcelHelpers.export(exports, "defineAsyncComponent", ()=>defineAsyncComponent
);
parcelHelpers.export(exports, "defineComponent", ()=>defineComponent
);
parcelHelpers.export(exports, "defineEmits", ()=>defineEmits
);
parcelHelpers.export(exports, "defineExpose", ()=>defineExpose
);
parcelHelpers.export(exports, "defineProps", ()=>defineProps
);
parcelHelpers.export(exports, "devtools", ()=>devtools
);
parcelHelpers.export(exports, "getCurrentInstance", ()=>getCurrentInstance
);
parcelHelpers.export(exports, "getTransitionRawChildren", ()=>getTransitionRawChildren
);
parcelHelpers.export(exports, "guardReactiveProps", ()=>guardReactiveProps
);
parcelHelpers.export(exports, "h", ()=>h
);
parcelHelpers.export(exports, "handleError", ()=>handleError
);
parcelHelpers.export(exports, "initCustomFormatter", ()=>initCustomFormatter
);
parcelHelpers.export(exports, "inject", ()=>inject
);
parcelHelpers.export(exports, "isMemoSame", ()=>isMemoSame
);
parcelHelpers.export(exports, "isRuntimeOnly", ()=>isRuntimeOnly
);
parcelHelpers.export(exports, "isVNode", ()=>isVNode
);
parcelHelpers.export(exports, "mergeDefaults", ()=>mergeDefaults
);
parcelHelpers.export(exports, "mergeProps", ()=>mergeProps
);
parcelHelpers.export(exports, "nextTick", ()=>nextTick
);
parcelHelpers.export(exports, "onActivated", ()=>onActivated
);
parcelHelpers.export(exports, "onBeforeMount", ()=>onBeforeMount
);
parcelHelpers.export(exports, "onBeforeUnmount", ()=>onBeforeUnmount
);
parcelHelpers.export(exports, "onBeforeUpdate", ()=>onBeforeUpdate
);
parcelHelpers.export(exports, "onDeactivated", ()=>onDeactivated
);
parcelHelpers.export(exports, "onErrorCaptured", ()=>onErrorCaptured
);
parcelHelpers.export(exports, "onMounted", ()=>onMounted
);
parcelHelpers.export(exports, "onRenderTracked", ()=>onRenderTracked
);
parcelHelpers.export(exports, "onRenderTriggered", ()=>onRenderTriggered
);
parcelHelpers.export(exports, "onServerPrefetch", ()=>onServerPrefetch
);
parcelHelpers.export(exports, "onUnmounted", ()=>onUnmounted
);
parcelHelpers.export(exports, "onUpdated", ()=>onUpdated
);
parcelHelpers.export(exports, "openBlock", ()=>openBlock
);
parcelHelpers.export(exports, "popScopeId", ()=>popScopeId
);
parcelHelpers.export(exports, "provide", ()=>provide
);
parcelHelpers.export(exports, "pushScopeId", ()=>pushScopeId
);
parcelHelpers.export(exports, "queuePostFlushCb", ()=>queuePostFlushCb
);
parcelHelpers.export(exports, "registerRuntimeCompiler", ()=>registerRuntimeCompiler
);
parcelHelpers.export(exports, "renderList", ()=>renderList
);
parcelHelpers.export(exports, "renderSlot", ()=>renderSlot
);
parcelHelpers.export(exports, "resolveComponent", ()=>resolveComponent
);
parcelHelpers.export(exports, "resolveDirective", ()=>resolveDirective
);
parcelHelpers.export(exports, "resolveDynamicComponent", ()=>resolveDynamicComponent
);
parcelHelpers.export(exports, "resolveFilter", ()=>resolveFilter
);
parcelHelpers.export(exports, "resolveTransitionHooks", ()=>resolveTransitionHooks
);
parcelHelpers.export(exports, "setBlockTracking", ()=>setBlockTracking
);
parcelHelpers.export(exports, "setDevtoolsHook", ()=>setDevtoolsHook
);
parcelHelpers.export(exports, "setTransitionHooks", ()=>setTransitionHooks
);
parcelHelpers.export(exports, "ssrContextKey", ()=>ssrContextKey
);
parcelHelpers.export(exports, "ssrUtils", ()=>ssrUtils
);
parcelHelpers.export(exports, "toHandlers", ()=>toHandlers
);
parcelHelpers.export(exports, "transformVNodeArgs", ()=>transformVNodeArgs
);
parcelHelpers.export(exports, "useAttrs", ()=>useAttrs
);
parcelHelpers.export(exports, "useSSRContext", ()=>useSSRContext
);
parcelHelpers.export(exports, "useSlots", ()=>useSlots
);
parcelHelpers.export(exports, "useTransitionState", ()=>useTransitionState
);
parcelHelpers.export(exports, "version", ()=>version
);
parcelHelpers.export(exports, "warn", ()=>warn
);
parcelHelpers.export(exports, "watch", ()=>watch
);
parcelHelpers.export(exports, "watchEffect", ()=>watchEffect
);
parcelHelpers.export(exports, "watchPostEffect", ()=>watchPostEffect
);
parcelHelpers.export(exports, "watchSyncEffect", ()=>watchSyncEffect
);
parcelHelpers.export(exports, "withAsyncContext", ()=>withAsyncContext
);
parcelHelpers.export(exports, "withCtx", ()=>withCtx
);
parcelHelpers.export(exports, "withDefaults", ()=>withDefaults
);
parcelHelpers.export(exports, "withDirectives", ()=>withDirectives
);
parcelHelpers.export(exports, "withMemo", ()=>withMemo
);
parcelHelpers.export(exports, "withScopeId", ()=>withScopeId
);
var _reactivity = require("@vue/reactivity");
var _shared = require("@vue/shared");
const stack = [];
function pushWarningContext(vnode) {
    stack.push(vnode);
}
function popWarningContext() {
    stack.pop();
}
function warn(msg, ...args) {
    // avoid props formatting or warn handler tracking deps that might be mutated
    // during patch, leading to infinite recursion.
    _reactivity.pauseTracking();
    const instance = stack.length ? stack[stack.length - 1].component : null;
    const appWarnHandler = instance && instance.appContext.config.warnHandler;
    const trace = getComponentTrace();
    if (appWarnHandler) callWithErrorHandling(appWarnHandler, instance, 11 /* APP_WARN_HANDLER */ , [
        msg + args.join(''),
        instance && instance.proxy,
        trace.map(({ vnode  })=>`at <${formatComponentName(instance, vnode.type)}>`
        ).join('\n'),
        trace
    ]);
    else {
        const warnArgs = [
            `[Vue warn]: ${msg}`,
            ...args
        ];
        /* istanbul ignore if */ if (trace.length && // avoid spamming console during tests
        true) warnArgs.push(`\n`, ...formatTrace(trace));
        console.warn(...warnArgs);
    }
    _reactivity.resetTracking();
}
function getComponentTrace() {
    let currentVNode = stack[stack.length - 1];
    if (!currentVNode) return [];
    // we can't just use the stack because it will be incomplete during updates
    // that did not start from the root. Re-construct the parent chain using
    // instance parent pointers.
    const normalizedStack = [];
    while(currentVNode){
        const last = normalizedStack[0];
        if (last && last.vnode === currentVNode) last.recurseCount++;
        else normalizedStack.push({
            vnode: currentVNode,
            recurseCount: 0
        });
        const parentInstance = currentVNode.component && currentVNode.component.parent;
        currentVNode = parentInstance && parentInstance.vnode;
    }
    return normalizedStack;
}
/* istanbul ignore next */ function formatTrace(trace) {
    const logs = [];
    trace.forEach((entry, i)=>{
        logs.push(...i === 0 ? [] : [
            `\n`
        ], ...formatTraceEntry(entry));
    });
    return logs;
}
function formatTraceEntry({ vnode , recurseCount  }) {
    const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
    const isRoot = vnode.component ? vnode.component.parent == null : false;
    const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
    const close = `>` + postfix;
    return vnode.props ? [
        open,
        ...formatProps(vnode.props),
        close
    ] : [
        open + close
    ];
}
/* istanbul ignore next */ function formatProps(props) {
    const res = [];
    const keys = Object.keys(props);
    keys.slice(0, 3).forEach((key)=>{
        res.push(...formatProp(key, props[key]));
    });
    if (keys.length > 3) res.push(` ...`);
    return res;
}
/* istanbul ignore next */ function formatProp(key, value, raw) {
    if (_shared.isString(value)) {
        value = JSON.stringify(value);
        return raw ? value : [
            `${key}=${value}`
        ];
    } else if (typeof value === 'number' || typeof value === 'boolean' || value == null) return raw ? value : [
        `${key}=${value}`
    ];
    else if (_reactivity.isRef(value)) {
        value = formatProp(key, _reactivity.toRaw(value.value), true);
        return raw ? value : [
            `${key}=Ref<`,
            value,
            `>`
        ];
    } else if (_shared.isFunction(value)) return [
        `${key}=fn${value.name ? `<${value.name}>` : ``}`
    ];
    else {
        value = _reactivity.toRaw(value);
        return raw ? value : [
            `${key}=`,
            value
        ];
    }
}
const ErrorTypeStrings = {
    ["sp" /* SERVER_PREFETCH */ ]: 'serverPrefetch hook',
    ["bc" /* BEFORE_CREATE */ ]: 'beforeCreate hook',
    ["c" /* CREATED */ ]: 'created hook',
    ["bm" /* BEFORE_MOUNT */ ]: 'beforeMount hook',
    ["m" /* MOUNTED */ ]: 'mounted hook',
    ["bu" /* BEFORE_UPDATE */ ]: 'beforeUpdate hook',
    ["u" /* UPDATED */ ]: 'updated',
    ["bum" /* BEFORE_UNMOUNT */ ]: 'beforeUnmount hook',
    ["um" /* UNMOUNTED */ ]: 'unmounted hook',
    ["a" /* ACTIVATED */ ]: 'activated hook',
    ["da" /* DEACTIVATED */ ]: 'deactivated hook',
    ["ec" /* ERROR_CAPTURED */ ]: 'errorCaptured hook',
    ["rtc" /* RENDER_TRACKED */ ]: 'renderTracked hook',
    ["rtg" /* RENDER_TRIGGERED */ ]: 'renderTriggered hook',
    [0 /* SETUP_FUNCTION */ ]: 'setup function',
    [1 /* RENDER_FUNCTION */ ]: 'render function',
    [2 /* WATCH_GETTER */ ]: 'watcher getter',
    [3 /* WATCH_CALLBACK */ ]: 'watcher callback',
    [4 /* WATCH_CLEANUP */ ]: 'watcher cleanup function',
    [5 /* NATIVE_EVENT_HANDLER */ ]: 'native event handler',
    [6 /* COMPONENT_EVENT_HANDLER */ ]: 'component event handler',
    [7 /* VNODE_HOOK */ ]: 'vnode hook',
    [8 /* DIRECTIVE_HOOK */ ]: 'directive hook',
    [9 /* TRANSITION_HOOK */ ]: 'transition hook',
    [10 /* APP_ERROR_HANDLER */ ]: 'app errorHandler',
    [11 /* APP_WARN_HANDLER */ ]: 'app warnHandler',
    [12 /* FUNCTION_REF */ ]: 'ref function',
    [13 /* ASYNC_COMPONENT_LOADER */ ]: 'async component loader',
    [14 /* SCHEDULER */ ]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function callWithErrorHandling(fn, instance, type, args) {
    let res;
    try {
        res = args ? fn(...args) : fn();
    } catch (err) {
        handleError(err, instance, type);
    }
    return res;
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
    if (_shared.isFunction(fn)) {
        const res = callWithErrorHandling(fn, instance, type, args);
        if (res && _shared.isPromise(res)) res.catch((err)=>{
            handleError(err, instance, type);
        });
        return res;
    }
    const values = [];
    for(let i = 0; i < fn.length; i++)values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
    return values;
}
function handleError(err, instance, type, throwInDev = true) {
    const contextVNode = instance ? instance.vnode : null;
    if (instance) {
        let cur = instance.parent;
        // the exposed instance is the render proxy to keep it consistent with 2.x
        const exposedInstance = instance.proxy;
        // in production the hook receives only the error code
        const errorInfo = ErrorTypeStrings[type];
        while(cur){
            const errorCapturedHooks = cur.ec;
            if (errorCapturedHooks) for(let i = 0; i < errorCapturedHooks.length; i++){
                if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) return;
            }
            cur = cur.parent;
        }
        // app-level handling
        const appErrorHandler = instance.appContext.config.errorHandler;
        if (appErrorHandler) {
            callWithErrorHandling(appErrorHandler, null, 10 /* APP_ERROR_HANDLER */ , [
                err,
                exposedInstance,
                errorInfo
            ]);
            return;
        }
    }
    logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
    {
        const info = ErrorTypeStrings[type];
        if (contextVNode) pushWarningContext(contextVNode);
        warn(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
        if (contextVNode) popWarningContext();
        // crash in dev by default so it's more noticeable
        if (throwInDev) throw err;
        else console.error(err);
    }
}
let isFlushing = false;
let isFlushPending = false;
const queue = [];
let flushIndex = 0;
const pendingPreFlushCbs = [];
let activePreFlushCbs = null;
let preFlushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = Promise.resolve();
let currentFlushPromise = null;
let currentPreFlushParentJob = null;
const RECURSION_LIMIT = 100;
function nextTick(fn) {
    const p = currentFlushPromise || resolvedPromise;
    return fn ? p.then(this ? fn.bind(this) : fn) : p;
}
// #2768
// Use binary-search to find a suitable position in the queue,
// so that the queue maintains the increasing order of job's id,
// which can prevent the job from being skipped and also can avoid repeated patching.
function findInsertionIndex(id) {
    // the start index should be `flushIndex + 1`
    let start = flushIndex + 1;
    let end = queue.length;
    while(start < end){
        const middle = start + end >>> 1;
        const middleJobId = getId(queue[middle]);
        middleJobId < id ? start = middle + 1 : end = middle;
    }
    return start;
}
function queueJob(job) {
    // the dedupe search uses the startIndex argument of Array.includes()
    // by default the search index includes the current job that is being run
    // so it cannot recursively trigger itself again.
    // if the job is a watch() callback, the search will start with a +1 index to
    // allow it recursively trigger itself - it is the user's responsibility to
    // ensure it doesn't end up in an infinite loop.
    if ((!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) && job !== currentPreFlushParentJob) {
        if (job.id == null) queue.push(job);
        else queue.splice(findInsertionIndex(job.id), 0, job);
        queueFlush();
    }
}
function queueFlush() {
    if (!isFlushing && !isFlushPending) {
        isFlushPending = true;
        currentFlushPromise = resolvedPromise.then(flushJobs);
    }
}
function invalidateJob(job) {
    const i = queue.indexOf(job);
    if (i > flushIndex) queue.splice(i, 1);
}
function queueCb(cb, activeQueue, pendingQueue, index) {
    if (!_shared.isArray(cb)) {
        if (!activeQueue || !activeQueue.includes(cb, cb.allowRecurse ? index + 1 : index)) pendingQueue.push(cb);
    } else // if cb is an array, it is a component lifecycle hook which can only be
    // triggered by a job, which is already deduped in the main queue, so
    // we can skip duplicate check here to improve perf
    pendingQueue.push(...cb);
    queueFlush();
}
function queuePreFlushCb(cb) {
    queueCb(cb, activePreFlushCbs, pendingPreFlushCbs, preFlushIndex);
}
function queuePostFlushCb(cb) {
    queueCb(cb, activePostFlushCbs, pendingPostFlushCbs, postFlushIndex);
}
function flushPreFlushCbs(seen, parentJob = null) {
    if (pendingPreFlushCbs.length) {
        currentPreFlushParentJob = parentJob;
        activePreFlushCbs = [
            ...new Set(pendingPreFlushCbs)
        ];
        pendingPreFlushCbs.length = 0;
        seen = seen || new Map();
        for(preFlushIndex = 0; preFlushIndex < activePreFlushCbs.length; preFlushIndex++){
            if (checkRecursiveUpdates(seen, activePreFlushCbs[preFlushIndex])) continue;
            activePreFlushCbs[preFlushIndex]();
        }
        activePreFlushCbs = null;
        preFlushIndex = 0;
        currentPreFlushParentJob = null;
        // recursively flush until it drains
        flushPreFlushCbs(seen, parentJob);
    }
}
function flushPostFlushCbs(seen) {
    if (pendingPostFlushCbs.length) {
        const deduped = [
            ...new Set(pendingPostFlushCbs)
        ];
        pendingPostFlushCbs.length = 0;
        // #1947 already has active queue, nested flushPostFlushCbs call
        if (activePostFlushCbs) {
            activePostFlushCbs.push(...deduped);
            return;
        }
        activePostFlushCbs = deduped;
        seen = seen || new Map();
        activePostFlushCbs.sort((a, b)=>getId(a) - getId(b)
        );
        for(postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++){
            if (checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex])) continue;
            activePostFlushCbs[postFlushIndex]();
        }
        activePostFlushCbs = null;
        postFlushIndex = 0;
    }
}
const getId = (job)=>job.id == null ? Infinity : job.id
;
function flushJobs(seen) {
    isFlushPending = false;
    isFlushing = true;
    seen = seen || new Map();
    flushPreFlushCbs(seen);
    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child so its render effect will have smaller
    //    priority number)
    // 2. If a component is unmounted during a parent component's update,
    //    its update can be skipped.
    queue.sort((a, b)=>getId(a) - getId(b)
    );
    // conditional usage of checkRecursiveUpdate must be determined out of
    // try ... catch block since Rollup by default de-optimizes treeshaking
    // inside try-catch. This can leave all warning code unshaked. Although
    // they would get eventually shaken by a minifier like terser, some minifiers
    // would fail to do that (e.g. https://github.com/evanw/esbuild/issues/1610)
    const check = (job)=>checkRecursiveUpdates(seen, job)
    ;
    try {
        for(flushIndex = 0; flushIndex < queue.length; flushIndex++){
            const job = queue[flushIndex];
            if (job && job.active !== false) {
                if (check(job)) continue;
                // console.log(`running:`, job.id)
                callWithErrorHandling(job, null, 14 /* SCHEDULER */ );
            }
        }
    } finally{
        flushIndex = 0;
        queue.length = 0;
        flushPostFlushCbs(seen);
        isFlushing = false;
        currentFlushPromise = null;
        // some postFlushCb queued jobs!
        // keep flushing until it drains.
        if (queue.length || pendingPreFlushCbs.length || pendingPostFlushCbs.length) flushJobs(seen);
    }
}
function checkRecursiveUpdates(seen, fn) {
    if (!seen.has(fn)) seen.set(fn, 1);
    else {
        const count = seen.get(fn);
        if (count > RECURSION_LIMIT) {
            const instance = fn.ownerInstance;
            const componentName = instance && getComponentName(instance.type);
            warn(`Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. ` + `This means you have a reactive effect that is mutating its own ` + `dependencies and thus recursively triggering itself. Possible sources ` + `include component template, render function, updated hook or ` + `watcher source function.`);
            return true;
        } else seen.set(fn, count + 1);
    }
}
/* eslint-disable no-restricted-globals */ let isHmrUpdating = false;
const hmrDirtyComponents = new Set();
_shared.getGlobalThis().__VUE_HMR_RUNTIME__ = {
    createRecord: tryWrap(createRecord),
    rerender: tryWrap(rerender),
    reload: tryWrap(reload)
};
const map = new Map();
function registerHMR(instance) {
    const id = instance.type.__hmrId;
    let record = map.get(id);
    if (!record) {
        createRecord(id, instance.type);
        record = map.get(id);
    }
    record.instances.add(instance);
}
function unregisterHMR(instance) {
    map.get(instance.type.__hmrId).instances.delete(instance);
}
function createRecord(id, initialDef) {
    if (map.has(id)) return false;
    map.set(id, {
        initialDef: normalizeClassComponent(initialDef),
        instances: new Set()
    });
    return true;
}
function normalizeClassComponent(component) {
    return isClassComponent(component) ? component.__vccOpts : component;
}
function rerender(id, newRender) {
    const record = map.get(id);
    if (!record) return;
    // update initial record (for not-yet-rendered component)
    record.initialDef.render = newRender;
    [
        ...record.instances
    ].forEach((instance)=>{
        if (newRender) {
            instance.render = newRender;
            normalizeClassComponent(instance.type).render = newRender;
        }
        instance.renderCache = [];
        // this flag forces child components with slot content to update
        isHmrUpdating = true;
        instance.update();
        isHmrUpdating = false;
    });
}
function reload(id, newComp) {
    const record = map.get(id);
    if (!record) return;
    newComp = normalizeClassComponent(newComp);
    // update initial def (for not-yet-rendered components)
    updateComponentDef(record.initialDef, newComp);
    // create a snapshot which avoids the set being mutated during updates
    const instances = [
        ...record.instances
    ];
    for (const instance1 of instances){
        const oldComp = normalizeClassComponent(instance1.type);
        if (!hmrDirtyComponents.has(oldComp)) {
            // 1. Update existing comp definition to match new one
            if (oldComp !== record.initialDef) updateComponentDef(oldComp, newComp);
            // 2. mark definition dirty. This forces the renderer to replace the
            // component on patch.
            hmrDirtyComponents.add(oldComp);
        }
        // 3. invalidate options resolution cache
        instance1.appContext.optionsCache.delete(instance1.type);
        // 4. actually update
        if (instance1.ceReload) {
            // custom element
            hmrDirtyComponents.add(oldComp);
            instance1.ceReload(newComp.styles);
            hmrDirtyComponents.delete(oldComp);
        } else if (instance1.parent) {
            // 4. Force the parent instance to re-render. This will cause all updated
            // components to be unmounted and re-mounted. Queue the update so that we
            // don't end up forcing the same parent to re-render multiple times.
            queueJob(instance1.parent.update);
            // instance is the inner component of an async custom element
            // invoke to reset styles
            if (instance1.parent.type.__asyncLoader && instance1.parent.ceReload) instance1.parent.ceReload(newComp.styles);
        } else if (instance1.appContext.reload) // root instance mounted via createApp() has a reload method
        instance1.appContext.reload();
        else if (typeof window !== 'undefined') // root instance inside tree created via raw render(). Force reload.
        window.location.reload();
        else console.warn('[HMR] Root or manually mounted instance modified. Full reload required.');
    }
    // 5. make sure to cleanup dirty hmr components after update
    queuePostFlushCb(()=>{
        for (const instance of instances)hmrDirtyComponents.delete(normalizeClassComponent(instance.type));
    });
}
function updateComponentDef(oldComp, newComp) {
    _shared.extend(oldComp, newComp);
    for(const key in oldComp)if (key !== '__file' && !(key in newComp)) delete oldComp[key];
}
function tryWrap(fn) {
    return (id, arg)=>{
        try {
            return fn(id, arg);
        } catch (e) {
            console.error(e);
            console.warn(`[HMR] Something went wrong during Vue component hot-reload. ` + `Full reload required.`);
        }
    };
}
let devtools;
let buffer = [];
let devtoolsNotInstalled = false;
function emit(event, ...args) {
    if (devtools) devtools.emit(event, ...args);
    else if (!devtoolsNotInstalled) buffer.push({
        event,
        args
    });
}
function setDevtoolsHook(hook, target) {
    var _a, _b;
    devtools = hook;
    if (devtools) {
        devtools.enabled = true;
        buffer.forEach(({ event , args  })=>devtools.emit(event, ...args)
        );
        buffer = [];
    } else if (// handle late devtools injection - only do this if we are in an actual
    // browser environment to avoid the timer handle stalling test runner exit
    // (#4815)
    // eslint-disable-next-line no-restricted-globals
    typeof window !== 'undefined' && // some envs mock window but not fully
    window.HTMLElement && // also exclude jsdom
    !((_b = (_a = window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent) === null || _b === void 0 ? void 0 : _b.includes('jsdom'))) {
        const replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
        replay.push((newHook)=>{
            setDevtoolsHook(newHook, target);
        });
        // clear buffer after 3s - the user probably doesn't have devtools installed
        // at all, and keeping the buffer will cause memory leaks (#4738)
        setTimeout(()=>{
            if (!devtools) {
                target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
                devtoolsNotInstalled = true;
                buffer = [];
            }
        }, 3000);
    } else {
        // non-browser env, assume not installed
        devtoolsNotInstalled = true;
        buffer = [];
    }
}
function devtoolsInitApp(app, version1) {
    emit("app:init" /* APP_INIT */ , app, version1, {
        Fragment,
        Text,
        Comment,
        Static
    });
}
function devtoolsUnmountApp(app) {
    emit("app:unmount" /* APP_UNMOUNT */ , app);
}
const devtoolsComponentAdded = /*#__PURE__*/ createDevtoolsComponentHook("component:added" /* COMPONENT_ADDED */ );
const devtoolsComponentUpdated = /*#__PURE__*/ createDevtoolsComponentHook("component:updated" /* COMPONENT_UPDATED */ );
const devtoolsComponentRemoved = /*#__PURE__*/ createDevtoolsComponentHook("component:removed" /* COMPONENT_REMOVED */ );
function createDevtoolsComponentHook(hook) {
    return (component)=>{
        emit(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : undefined, component);
    };
}
const devtoolsPerfStart = /*#__PURE__*/ createDevtoolsPerformanceHook("perf:start" /* PERFORMANCE_START */ );
const devtoolsPerfEnd = /*#__PURE__*/ createDevtoolsPerformanceHook("perf:end" /* PERFORMANCE_END */ );
function createDevtoolsPerformanceHook(hook) {
    return (component, type, time)=>{
        emit(hook, component.appContext.app, component.uid, component, type, time);
    };
}
function devtoolsComponentEmit(component, event, params) {
    emit("component:emit" /* COMPONENT_EMIT */ , component.appContext.app, component, event, params);
}
function emit$1(instance, event, ...rawArgs) {
    const props = instance.vnode.props || _shared.EMPTY_OBJ;
    {
        const { emitsOptions , propsOptions: [propsOptions]  } = instance;
        if (emitsOptions) {
            if (!(event in emitsOptions) && true) {
                if (!propsOptions || !(_shared.toHandlerKey(event) in propsOptions)) warn(`Component emitted event "${event}" but it is neither declared in ` + `the emits option nor as an "${_shared.toHandlerKey(event)}" prop.`);
            } else {
                const validator = emitsOptions[event];
                if (_shared.isFunction(validator)) {
                    const isValid = validator(...rawArgs);
                    if (!isValid) warn(`Invalid event arguments: event validation failed for event "${event}".`);
                }
            }
        }
    }
    let args = rawArgs;
    const isModelListener = event.startsWith('update:');
    // for v-model update:xxx events, apply modifiers on args
    const modelArg = isModelListener && event.slice(7);
    if (modelArg && modelArg in props) {
        const modifiersKey = `${modelArg === 'modelValue' ? 'model' : modelArg}Modifiers`;
        const { number , trim  } = props[modifiersKey] || _shared.EMPTY_OBJ;
        if (trim) args = rawArgs.map((a)=>a.trim()
        );
        else if (number) args = rawArgs.map(_shared.toNumber);
    }
    devtoolsComponentEmit(instance, event, args);
    {
        const lowerCaseEvent = event.toLowerCase();
        if (lowerCaseEvent !== event && props[_shared.toHandlerKey(lowerCaseEvent)]) warn(`Event "${lowerCaseEvent}" is emitted in component ` + `${formatComponentName(instance, instance.type)} but the handler is registered for "${event}". ` + `Note that HTML attributes are case-insensitive and you cannot use ` + `v-on to listen to camelCase events when using in-DOM templates. ` + `You should probably use "${_shared.hyphenate(event)}" instead of "${event}".`);
    }
    let handlerName;
    let handler = props[handlerName = _shared.toHandlerKey(event)] || // also try camelCase event handler (#2249)
    props[handlerName = _shared.toHandlerKey(_shared.camelize(event))];
    // for v-model update:xxx events, also trigger kebab-case equivalent
    // for props passed via kebab-case
    if (!handler && isModelListener) handler = props[handlerName = _shared.toHandlerKey(_shared.hyphenate(event))];
    if (handler) callWithAsyncErrorHandling(handler, instance, 6 /* COMPONENT_EVENT_HANDLER */ , args);
    const onceHandler = props[handlerName + `Once`];
    if (onceHandler) {
        if (!instance.emitted) instance.emitted = {
        };
        else if (instance.emitted[handlerName]) return;
        instance.emitted[handlerName] = true;
        callWithAsyncErrorHandling(onceHandler, instance, 6 /* COMPONENT_EVENT_HANDLER */ , args);
    }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.emitsCache;
    const cached = cache.get(comp);
    if (cached !== undefined) return cached;
    const raw1 = comp.emits;
    let normalized = {
    };
    // apply mixin/extends props
    let hasExtends = false;
    if (__VUE_OPTIONS_API__ && !_shared.isFunction(comp)) {
        const extendEmits = (raw)=>{
            const normalizedFromExtend = normalizeEmitsOptions(raw, appContext, true);
            if (normalizedFromExtend) {
                hasExtends = true;
                _shared.extend(normalized, normalizedFromExtend);
            }
        };
        if (!asMixin && appContext.mixins.length) appContext.mixins.forEach(extendEmits);
        if (comp.extends) extendEmits(comp.extends);
        if (comp.mixins) comp.mixins.forEach(extendEmits);
    }
    if (!raw1 && !hasExtends) {
        cache.set(comp, null);
        return null;
    }
    if (_shared.isArray(raw1)) raw1.forEach((key)=>normalized[key] = null
    );
    else _shared.extend(normalized, raw1);
    cache.set(comp, normalized);
    return normalized;
}
// Check if an incoming prop key is a declared emit event listener.
// e.g. With `emits: { click: null }`, props named `onClick` and `onclick` are
// both considered matched listeners.
function isEmitListener(options, key) {
    if (!options || !_shared.isOn(key)) return false;
    key = key.slice(2).replace(/Once$/, '');
    return _shared.hasOwn(options, key[0].toLowerCase() + key.slice(1)) || _shared.hasOwn(options, _shared.hyphenate(key)) || _shared.hasOwn(options, key);
}
/**
 * mark the current rendering instance for asset resolution (e.g.
 * resolveComponent, resolveDirective) during render
 */ let currentRenderingInstance = null;
let currentScopeId = null;
/**
 * Note: rendering calls maybe nested. The function returns the parent rendering
 * instance if present, which should be restored after the render is done:
 *
 * ```js
 * const prev = setCurrentRenderingInstance(i)
 * // ...render
 * setCurrentRenderingInstance(prev)
 * ```
 */ function setCurrentRenderingInstance(instance) {
    const prev = currentRenderingInstance;
    currentRenderingInstance = instance;
    currentScopeId = instance && instance.type.__scopeId || null;
    return prev;
}
/**
 * Set scope id when creating hoisted vnodes.
 * @private compiler helper
 */ function pushScopeId(id) {
    currentScopeId = id;
}
/**
 * Technically we no longer need this after 3.0.8 but we need to keep the same
 * API for backwards compat w/ code generated by compilers.
 * @private
 */ function popScopeId() {
    currentScopeId = null;
}
/**
 * Only for backwards compat
 * @private
 */ const withScopeId = (_id)=>withCtx
;
/**
 * Wrap a slot function to memoize current rendering instance
 * @private compiler helper
 */ function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot // false only
) {
    if (!ctx) return fn;
    // already normalized
    if (fn._n) return fn;
    const renderFnWithContext = (...args)=>{
        // If a user calls a compiled slot inside a template expression (#1745), it
        // can mess up block tracking, so by default we disable block tracking and
        // force bail out when invoking a compiled slot (indicated by the ._d flag).
        // This isn't necessary if rendering a compiled `<slot>`, so we flip the
        // ._d flag off when invoking the wrapped fn inside `renderSlot`.
        if (renderFnWithContext._d) setBlockTracking(-1);
        const prevInstance = setCurrentRenderingInstance(ctx);
        const res = fn(...args);
        setCurrentRenderingInstance(prevInstance);
        if (renderFnWithContext._d) setBlockTracking(1);
        devtoolsComponentUpdated(ctx);
        return res;
    };
    // mark normalized to avoid duplicated wrapping
    renderFnWithContext._n = true;
    // mark this as compiled by default
    // this is used in vnode.ts -> normalizeChildren() to set the slot
    // rendering flag.
    renderFnWithContext._c = true;
    // disable block tracking by default
    renderFnWithContext._d = true;
    return renderFnWithContext;
}
/**
 * dev only flag to track whether $attrs was used during render.
 * If $attrs was used during render then the warning for failed attrs
 * fallthrough can be suppressed.
 */ let accessedAttrs = false;
function markAttrsAccessed() {
    accessedAttrs = true;
}
function renderComponentRoot(instance) {
    const { type: Component , vnode , proxy , withProxy , props , propsOptions: [propsOptions] , slots , attrs , emit: emit1 , render , renderCache , data , setupState , ctx , inheritAttrs  } = instance;
    let result;
    let fallthroughAttrs;
    const prev = setCurrentRenderingInstance(instance);
    accessedAttrs = false;
    try {
        if (vnode.shapeFlag & 4 /* STATEFUL_COMPONENT */ ) {
            // withProxy is a proxy with a different `has` trap only for
            // runtime-compiled render functions using `with` block.
            const proxyToUse = withProxy || proxy;
            result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
            fallthroughAttrs = attrs;
        } else {
            // functional
            const render = Component;
            // in dev, mark attrs accessed if optional props (attrs === props)
            if (attrs === props) markAttrsAccessed();
            result = normalizeVNode(render.length > 1 ? render(props, {
                get attrs () {
                    markAttrsAccessed();
                    return attrs;
                },
                slots,
                emit: emit1
            }) : render(props, null));
            fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
        }
    } catch (err) {
        blockStack.length = 0;
        handleError(err, instance, 1 /* RENDER_FUNCTION */ );
        result = createVNode(Comment);
    }
    // attr merging
    // in dev mode, comments are preserved, and it's possible for a template
    // to have comments along side the root element which makes it a fragment
    let root = result;
    let setRoot = undefined;
    if (result.patchFlag > 0 && result.patchFlag & 2048 /* DEV_ROOT_FRAGMENT */ ) [root, setRoot] = getChildRoot(result);
    if (fallthroughAttrs && inheritAttrs !== false) {
        const keys = Object.keys(fallthroughAttrs);
        const { shapeFlag  } = root;
        if (keys.length) {
            if (shapeFlag & 7 /* COMPONENT */ ) {
                if (propsOptions && keys.some(_shared.isModelListener)) // If a v-model listener (onUpdate:xxx) has a corresponding declared
                // prop, it indicates this component expects to handle v-model and
                // it should not fallthrough.
                // related: #1543, #1643, #1989
                fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
                root = cloneVNode(root, fallthroughAttrs);
            } else if (!accessedAttrs && root.type !== Comment) {
                const allAttrs = Object.keys(attrs);
                const eventAttrs = [];
                const extraAttrs = [];
                for(let i = 0, l = allAttrs.length; i < l; i++){
                    const key = allAttrs[i];
                    if (_shared.isOn(key)) // ignore v-model handlers when they fail to fallthrough
                    {
                        if (!_shared.isModelListener(key)) // remove `on`, lowercase first letter to reflect event casing
                        // accurately
                        eventAttrs.push(key[2].toLowerCase() + key.slice(3));
                    } else extraAttrs.push(key);
                }
                if (extraAttrs.length) warn(`Extraneous non-props attributes (` + `${extraAttrs.join(', ')}) ` + `were passed to component but could not be automatically inherited ` + `because component renders fragment or text root nodes.`);
                if (eventAttrs.length) warn(`Extraneous non-emits event listeners (` + `${eventAttrs.join(', ')}) ` + `were passed to component but could not be automatically inherited ` + `because component renders fragment or text root nodes. ` + `If the listener is intended to be a component custom event listener only, ` + `declare it using the "emits" option.`);
            }
        }
    }
    // inherit directives
    if (vnode.dirs) {
        if (!isElementRoot(root)) warn(`Runtime directive used on component with non-element root node. ` + `The directives will not function as intended.`);
        root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
    }
    // inherit transition data
    if (vnode.transition) {
        if (!isElementRoot(root)) warn(`Component inside <Transition> renders non-element root node ` + `that cannot be animated.`);
        root.transition = vnode.transition;
    }
    if (setRoot) setRoot(root);
    else result = root;
    setCurrentRenderingInstance(prev);
    return result;
}
/**
 * dev only
 * In dev mode, template root level comments are rendered, which turns the
 * template into a fragment root, but we need to locate the single element
 * root for attrs and scope id processing.
 */ const getChildRoot = (vnode)=>{
    const rawChildren = vnode.children;
    const dynamicChildren = vnode.dynamicChildren;
    const childRoot = filterSingleRoot(rawChildren);
    if (!childRoot) return [
        vnode,
        undefined
    ];
    const index = rawChildren.indexOf(childRoot);
    const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
    const setRoot = (updatedRoot)=>{
        rawChildren[index] = updatedRoot;
        if (dynamicChildren) {
            if (dynamicIndex > -1) dynamicChildren[dynamicIndex] = updatedRoot;
            else if (updatedRoot.patchFlag > 0) vnode.dynamicChildren = [
                ...dynamicChildren,
                updatedRoot
            ];
        }
    };
    return [
        normalizeVNode(childRoot),
        setRoot
    ];
};
function filterSingleRoot(children) {
    let singleRoot;
    for(let i = 0; i < children.length; i++){
        const child = children[i];
        if (isVNode(child)) // ignore user comment
        {
            if (child.type !== Comment || child.children === 'v-if') {
                if (singleRoot) // has more than 1 non-comment child, return now
                return;
                else singleRoot = child;
            }
        } else return;
    }
    return singleRoot;
}
const getFunctionalFallthrough = (attrs)=>{
    let res;
    for(const key in attrs)if (key === 'class' || key === 'style' || _shared.isOn(key)) (res || (res = {
    }))[key] = attrs[key];
    return res;
};
const filterModelListeners = (attrs, props)=>{
    const res = {
    };
    for(const key in attrs)if (!_shared.isModelListener(key) || !(key.slice(9) in props)) res[key] = attrs[key];
    return res;
};
const isElementRoot = (vnode)=>{
    return vnode.shapeFlag & 7 /* ELEMENT */  || vnode.type === Comment // potential v-if branch switch
    ;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
    const { props: prevProps , children: prevChildren , component  } = prevVNode;
    const { props: nextProps , children: nextChildren , patchFlag  } = nextVNode;
    const emits = component.emitsOptions;
    // Parent component's render function was hot-updated. Since this may have
    // caused the child component's slots content to have changed, we need to
    // force the child to update as well.
    if ((prevChildren || nextChildren) && isHmrUpdating) return true;
    // force child update for runtime directive or transition on component vnode.
    if (nextVNode.dirs || nextVNode.transition) return true;
    if (optimized && patchFlag >= 0) {
        if (patchFlag & 1024 /* DYNAMIC_SLOTS */ ) // slot content that references values that might have changed,
        // e.g. in a v-for
        return true;
        if (patchFlag & 16 /* FULL_PROPS */ ) {
            if (!prevProps) return !!nextProps;
            // presence of this flag indicates props are always non-null
            return hasPropsChanged(prevProps, nextProps, emits);
        } else if (patchFlag & 8 /* PROPS */ ) {
            const dynamicProps = nextVNode.dynamicProps;
            for(let i = 0; i < dynamicProps.length; i++){
                const key = dynamicProps[i];
                if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) return true;
            }
        }
    } else {
        // this path is only taken by manually written render functions
        // so presence of any children leads to a forced update
        if (prevChildren || nextChildren) {
            if (!nextChildren || !nextChildren.$stable) return true;
        }
        if (prevProps === nextProps) return false;
        if (!prevProps) return !!nextProps;
        if (!nextProps) return true;
        return hasPropsChanged(prevProps, nextProps, emits);
    }
    return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
    const nextKeys = Object.keys(nextProps);
    if (nextKeys.length !== Object.keys(prevProps).length) return true;
    for(let i = 0; i < nextKeys.length; i++){
        const key = nextKeys[i];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) return true;
    }
    return false;
}
function updateHOCHostEl({ vnode , parent  }, el // HostNode
) {
    while(parent && parent.subTree === vnode){
        (vnode = parent.vnode).el = el;
        parent = parent.parent;
    }
}
const isSuspense = (type)=>type.__isSuspense
;
// Suspense exposes a component-like API, and is treated like a component
// in the compiler, but internally it's a special built-in type that hooks
// directly into the renderer.
const SuspenseImpl = {
    name: 'Suspense',
    // In order to make Suspense tree-shakable, we need to avoid importing it
    // directly in the renderer. The renderer checks for the __isSuspense flag
    // on a vnode's type and calls the `process` method, passing in renderer
    // internals.
    __isSuspense: true,
    process (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, // platform-specific impl passed from renderer
    rendererInternals) {
        if (n1 == null) mountSuspense(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals);
        else patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, rendererInternals);
    },
    hydrate: hydrateSuspense,
    create: createSuspenseBoundary,
    normalize: normalizeSuspenseChildren
};
// Force-casted public typing for h and TSX props inference
const Suspense = SuspenseImpl;
function triggerEvent(vnode, name) {
    const eventListener = vnode.props && vnode.props[name];
    if (_shared.isFunction(eventListener)) eventListener();
}
function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals) {
    const { p: patch , o: { createElement  }  } = rendererInternals;
    const hiddenContainer = createElement('div');
    const suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals);
    // start mounting the content subtree in an off-dom container
    patch(null, suspense.pendingBranch = vnode.ssContent, hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds);
    // now check if we have encountered any async deps
    if (suspense.deps > 0) {
        // has async
        // invoke @fallback event
        triggerEvent(vnode, 'onPending');
        triggerEvent(vnode, 'onFallback');
        // mount the fallback tree
        patch(null, vnode.ssFallback, container, anchor, parentComponent, null, isSVG, slotScopeIds);
        setActiveBranch(suspense, vnode.ssFallback);
    } else // Suspense has no async deps. Just resolve.
    suspense.resolve();
}
function patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, { p: patch , um: unmount , o: { createElement  }  }) {
    const suspense = n2.suspense = n1.suspense;
    suspense.vnode = n2;
    n2.el = n1.el;
    const newBranch = n2.ssContent;
    const newFallback = n2.ssFallback;
    const { activeBranch , pendingBranch , isInFallback , isHydrating  } = suspense;
    if (pendingBranch) {
        suspense.pendingBranch = newBranch;
        if (isSameVNodeType(newBranch, pendingBranch)) {
            // same root type but content may have changed.
            patch(pendingBranch, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
            if (suspense.deps <= 0) suspense.resolve();
            else if (isInFallback) {
                patch(activeBranch, newFallback, container, anchor, parentComponent, null, isSVG, slotScopeIds, optimized);
                setActiveBranch(suspense, newFallback);
            }
        } else {
            // toggled before pending tree is resolved
            suspense.pendingId++;
            if (isHydrating) {
                // if toggled before hydration is finished, the current DOM tree is
                // no longer valid. set it as the active branch so it will be unmounted
                // when resolved
                suspense.isHydrating = false;
                suspense.activeBranch = pendingBranch;
            } else unmount(pendingBranch, parentComponent, suspense);
            // increment pending ID. this is used to invalidate async callbacks
            // reset suspense state
            suspense.deps = 0;
            // discard effects from pending branch
            suspense.effects.length = 0;
            // discard previous container
            suspense.hiddenContainer = createElement('div');
            if (isInFallback) {
                // already in fallback state
                patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
                if (suspense.deps <= 0) suspense.resolve();
                else {
                    patch(activeBranch, newFallback, container, anchor, parentComponent, null, isSVG, slotScopeIds, optimized);
                    setActiveBranch(suspense, newFallback);
                }
            } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
                // toggled "back" to current active branch
                patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized);
                // force resolve
                suspense.resolve(true);
            } else {
                // switched to a 3rd branch
                patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
                if (suspense.deps <= 0) suspense.resolve();
            }
        }
    } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
        // root did not change, just normal patch
        patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized);
        setActiveBranch(suspense, newBranch);
    } else {
        // root node toggled
        // invoke @pending event
        triggerEvent(n2, 'onPending');
        // mount pending branch in off-dom container
        suspense.pendingBranch = newBranch;
        suspense.pendingId++;
        patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
        if (suspense.deps <= 0) // incoming branch has no async deps, resolve now.
        suspense.resolve();
        else {
            const { timeout , pendingId  } = suspense;
            if (timeout > 0) setTimeout(()=>{
                if (suspense.pendingId === pendingId) suspense.fallback(newFallback);
            }, timeout);
            else if (timeout === 0) suspense.fallback(newFallback);
        }
    }
}
let hasWarned = false;
function createSuspenseBoundary(vnode1, parent1, parentComponent1, container1, hiddenContainer, anchor1, isSVG1, slotScopeIds, optimized, rendererInternals, isHydrating = false) {
    /* istanbul ignore if */ if (!hasWarned) {
        hasWarned = true;
        // @ts-ignore `console.info` cannot be null error
        console[console.info ? 'info' : 'log'](`<Suspense> is an experimental feature and its API will likely change.`);
    }
    const { p: patch , m: move , um: unmount , n: next , o: { parentNode , remove  }  } = rendererInternals;
    const timeout = _shared.toNumber(vnode1.props && vnode1.props.timeout);
    const suspense = {
        vnode: vnode1,
        parent: parent1,
        parentComponent: parentComponent1,
        isSVG: isSVG1,
        container: container1,
        hiddenContainer,
        anchor: anchor1,
        deps: 0,
        pendingId: 0,
        timeout: typeof timeout === 'number' ? timeout : -1,
        activeBranch: null,
        pendingBranch: null,
        isInFallback: true,
        isHydrating,
        isUnmounted: false,
        effects: [],
        resolve (resume = false) {
            if (!resume && !suspense.pendingBranch) throw new Error(`suspense.resolve() is called without a pending branch.`);
            if (suspense.isUnmounted) throw new Error(`suspense.resolve() is called on an already unmounted suspense boundary.`);
            const { vnode , activeBranch , pendingBranch , pendingId , effects , parentComponent , container  } = suspense;
            if (suspense.isHydrating) suspense.isHydrating = false;
            else if (!resume) {
                const delayEnter = activeBranch && pendingBranch.transition && pendingBranch.transition.mode === 'out-in';
                if (delayEnter) activeBranch.transition.afterLeave = ()=>{
                    if (pendingId === suspense.pendingId) move(pendingBranch, container, anchor, 0 /* ENTER */ );
                };
                // this is initial anchor on mount
                let { anchor  } = suspense;
                // unmount current active tree
                if (activeBranch) {
                    // if the fallback tree was mounted, it may have been moved
                    // as part of a parent suspense. get the latest anchor for insertion
                    anchor = next(activeBranch);
                    unmount(activeBranch, parentComponent, suspense, true);
                }
                if (!delayEnter) // move content from off-dom container to actual container
                move(pendingBranch, container, anchor, 0 /* ENTER */ );
            }
            setActiveBranch(suspense, pendingBranch);
            suspense.pendingBranch = null;
            suspense.isInFallback = false;
            // flush buffered effects
            // check if there is a pending parent suspense
            let parent = suspense.parent;
            let hasUnresolvedAncestor = false;
            while(parent){
                if (parent.pendingBranch) {
                    // found a pending parent suspense, merge buffered post jobs
                    // into that parent
                    parent.effects.push(...effects);
                    hasUnresolvedAncestor = true;
                    break;
                }
                parent = parent.parent;
            }
            // no pending parent suspense, flush all jobs
            if (!hasUnresolvedAncestor) queuePostFlushCb(effects);
            suspense.effects = [];
            // invoke @resolve event
            triggerEvent(vnode, 'onResolve');
        },
        fallback (fallbackVNode) {
            if (!suspense.pendingBranch) return;
            const { vnode , activeBranch , parentComponent , container , isSVG  } = suspense;
            // invoke @fallback event
            triggerEvent(vnode, 'onFallback');
            const anchor = next(activeBranch);
            const mountFallback = ()=>{
                if (!suspense.isInFallback) return;
                // mount the fallback tree
                patch(null, fallbackVNode, container, anchor, parentComponent, null, isSVG, slotScopeIds, optimized);
                setActiveBranch(suspense, fallbackVNode);
            };
            const delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === 'out-in';
            if (delayEnter) activeBranch.transition.afterLeave = mountFallback;
            suspense.isInFallback = true;
            // unmount current active branch
            unmount(activeBranch, parentComponent, null, true // shouldRemove
            );
            if (!delayEnter) mountFallback();
        },
        move (container, anchor, type) {
            suspense.activeBranch && move(suspense.activeBranch, container, anchor, type);
            suspense.container = container;
        },
        next () {
            return suspense.activeBranch && next(suspense.activeBranch);
        },
        registerDep (instance, setupRenderEffect) {
            const isInPendingSuspense = !!suspense.pendingBranch;
            if (isInPendingSuspense) suspense.deps++;
            const hydratedEl = instance.vnode.el;
            instance.asyncDep.catch((err)=>{
                handleError(err, instance, 0 /* SETUP_FUNCTION */ );
            }).then((asyncSetupResult)=>{
                // retry when the setup() promise resolves.
                // component may have been unmounted before resolve.
                if (instance.isUnmounted || suspense.isUnmounted || suspense.pendingId !== instance.suspenseId) return;
                // retry from this component
                instance.asyncResolved = true;
                const { vnode  } = instance;
                pushWarningContext(vnode);
                handleSetupResult(instance, asyncSetupResult, false);
                if (hydratedEl) // vnode may have been replaced if an update happened before the
                // async dep is resolved.
                vnode.el = hydratedEl;
                const placeholder = !hydratedEl && instance.subTree.el;
                setupRenderEffect(instance, vnode, // component may have been moved before resolve.
                // if this is not a hydration, instance.subTree will be the comment
                // placeholder.
                parentNode(hydratedEl || instance.subTree.el), // anchor will not be used if this is hydration, so only need to
                // consider the comment placeholder case.
                hydratedEl ? null : next(instance.subTree), suspense, isSVG1, optimized);
                if (placeholder) remove(placeholder);
                updateHOCHostEl(instance, vnode.el);
                popWarningContext();
                // only decrease deps count if suspense is not already resolved
                if (isInPendingSuspense && --suspense.deps === 0) suspense.resolve();
            });
        },
        unmount (parentSuspense, doRemove) {
            suspense.isUnmounted = true;
            if (suspense.activeBranch) unmount(suspense.activeBranch, parentComponent1, parentSuspense, doRemove);
            if (suspense.pendingBranch) unmount(suspense.pendingBranch, parentComponent1, parentSuspense, doRemove);
        }
    };
    return suspense;
}
function hydrateSuspense(node, vnode, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals, hydrateNode) {
    /* eslint-disable no-restricted-globals */ const suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, node.parentNode, document.createElement('div'), null, isSVG, slotScopeIds, optimized, rendererInternals, true);
    // there are two possible scenarios for server-rendered suspense:
    // - success: ssr content should be fully resolved
    // - failure: ssr content should be the fallback branch.
    // however, on the client we don't really know if it has failed or not
    // attempt to hydrate the DOM assuming it has succeeded, but we still
    // need to construct a suspense boundary first
    const result = hydrateNode(node, suspense.pendingBranch = vnode.ssContent, parentComponent, suspense, slotScopeIds, optimized);
    if (suspense.deps === 0) suspense.resolve();
    return result;
/* eslint-enable no-restricted-globals */ }
function normalizeSuspenseChildren(vnode) {
    const { shapeFlag , children  } = vnode;
    const isSlotChildren = shapeFlag & 32 /* SLOTS_CHILDREN */ ;
    vnode.ssContent = normalizeSuspenseSlot(isSlotChildren ? children.default : children);
    vnode.ssFallback = isSlotChildren ? normalizeSuspenseSlot(children.fallback) : createVNode(Comment);
}
function normalizeSuspenseSlot(s) {
    let block;
    if (_shared.isFunction(s)) {
        const trackBlock = isBlockTreeEnabled && s._c;
        if (trackBlock) {
            // disableTracking: false
            // allow block tracking for compiled slots
            // (see ./componentRenderContext.ts)
            s._d = false;
            openBlock();
        }
        s = s();
        if (trackBlock) {
            s._d = true;
            block = currentBlock;
            closeBlock();
        }
    }
    if (_shared.isArray(s)) {
        const singleChild = filterSingleRoot(s);
        if (!singleChild) warn(`<Suspense> slots expect a single root node.`);
        s = singleChild;
    }
    s = normalizeVNode(s);
    if (block && !s.dynamicChildren) s.dynamicChildren = block.filter((c)=>c !== s
    );
    return s;
}
function queueEffectWithSuspense(fn, suspense) {
    if (suspense && suspense.pendingBranch) {
        if (_shared.isArray(fn)) suspense.effects.push(...fn);
        else suspense.effects.push(fn);
    } else queuePostFlushCb(fn);
}
function setActiveBranch(suspense, branch) {
    suspense.activeBranch = branch;
    const { vnode , parentComponent  } = suspense;
    const el = vnode.el = branch.el;
    // in case suspense is the root node of a component,
    // recursively update the HOC el
    if (parentComponent && parentComponent.subTree === vnode) {
        parentComponent.vnode.el = el;
        updateHOCHostEl(parentComponent, el);
    }
}
function provide(key, value) {
    if (!currentInstance) warn(`provide() can only be used inside setup().`);
    else {
        let provides = currentInstance.provides;
        // by default an instance inherits its parent's provides object
        // but when it needs to provide values of its own, it creates its
        // own provides object using parent provides object as prototype.
        // this way in `inject` we can simply look up injections from direct
        // parent and let the prototype chain do the work.
        const parentProvides = currentInstance.parent && currentInstance.parent.provides;
        if (parentProvides === provides) provides = currentInstance.provides = Object.create(parentProvides);
        // TS doesn't allow symbol as index type
        provides[key] = value;
    }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
    // fallback to `currentRenderingInstance` so that this can be called in
    // a functional component
    const instance = currentInstance || currentRenderingInstance;
    if (instance) {
        // #2400
        // to support `app.use` plugins,
        // fallback to appContext's `provides` if the instance is at root
        const provides = instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides;
        if (provides && key in provides) // TS doesn't allow symbol as index type
        return provides[key];
        else if (arguments.length > 1) return treatDefaultAsFactory && _shared.isFunction(defaultValue) ? defaultValue.call(instance.proxy) : defaultValue;
        else warn(`injection "${String(key)}" not found.`);
    } else warn(`inject() can only be used inside setup() or functional components.`);
}
// Simple effect.
function watchEffect(effect, options) {
    return doWatch(effect, null, options);
}
function watchPostEffect(effect, options) {
    return doWatch(effect, null, Object.assign(options || {
    }, {
        flush: 'post'
    }));
}
function watchSyncEffect(effect, options) {
    return doWatch(effect, null, Object.assign(options || {
    }, {
        flush: 'sync'
    }));
}
// initial value for watchers to trigger on undefined initial values
const INITIAL_WATCHER_VALUE = {
};
// implementation
function watch(source, cb, options) {
    if (!_shared.isFunction(cb)) warn(`\`watch(fn, options?)\` signature has been moved to a separate API. ` + `Use \`watchEffect(fn, options?)\` instead. \`watch\` now only ` + `supports \`watch(source, cb, options?) signature.`);
    return doWatch(source, cb, options);
}
function doWatch(source, cb, { immediate , deep , flush , onTrack , onTrigger  } = _shared.EMPTY_OBJ) {
    if (!cb) {
        if (immediate !== undefined) warn(`watch() "immediate" option is only respected when using the ` + `watch(source, callback, options?) signature.`);
        if (deep !== undefined) warn(`watch() "deep" option is only respected when using the ` + `watch(source, callback, options?) signature.`);
    }
    const warnInvalidSource = (s)=>{
        warn(`Invalid watch source: `, s, `A watch source can only be a getter/effect function, a ref, ` + `a reactive object, or an array of these types.`);
    };
    const instance = currentInstance;
    let getter;
    let forceTrigger = false;
    let isMultiSource = false;
    if (_reactivity.isRef(source)) {
        getter = ()=>source.value
        ;
        forceTrigger = _reactivity.isShallow(source);
    } else if (_reactivity.isReactive(source)) {
        getter = ()=>source
        ;
        deep = true;
    } else if (_shared.isArray(source)) {
        isMultiSource = true;
        forceTrigger = source.some(_reactivity.isReactive);
        getter = ()=>source.map((s)=>{
                if (_reactivity.isRef(s)) return s.value;
                else if (_reactivity.isReactive(s)) return traverse(s);
                else if (_shared.isFunction(s)) return callWithErrorHandling(s, instance, 2 /* WATCH_GETTER */ );
                else warnInvalidSource(s);
            })
        ;
    } else if (_shared.isFunction(source)) {
        if (cb) // getter with cb
        getter = ()=>callWithErrorHandling(source, instance, 2 /* WATCH_GETTER */ )
        ;
        else // no cb -> simple effect
        getter = ()=>{
            if (instance && instance.isUnmounted) return;
            if (cleanup) cleanup();
            return callWithAsyncErrorHandling(source, instance, 3 /* WATCH_CALLBACK */ , [
                onCleanup
            ]);
        };
    } else {
        getter = _shared.NOOP;
        warnInvalidSource(source);
    }
    if (cb && deep) {
        const baseGetter = getter;
        getter = ()=>traverse(baseGetter())
        ;
    }
    let cleanup;
    let onCleanup = (fn)=>{
        cleanup = effect.onStop = ()=>{
            callWithErrorHandling(fn, instance, 4 /* WATCH_CLEANUP */ );
        };
    };
    // in SSR there is no need to setup an actual effect, and it should be noop
    // unless it's eager
    if (isInSSRComponentSetup) {
        // we will also not call the invalidate callback (+ runner is not set up)
        onCleanup = _shared.NOOP;
        if (!cb) getter();
        else if (immediate) callWithAsyncErrorHandling(cb, instance, 3 /* WATCH_CALLBACK */ , [
            getter(),
            isMultiSource ? [] : undefined,
            onCleanup
        ]);
        return _shared.NOOP;
    }
    let oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;
    const job = ()=>{
        if (!effect.active) return;
        if (cb) {
            // watch(source, cb)
            const newValue = effect.run();
            if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i)=>_shared.hasChanged(v, oldValue[i])
            ) : _shared.hasChanged(newValue, oldValue)) || false) {
                // cleanup before running cb again
                if (cleanup) cleanup();
                callWithAsyncErrorHandling(cb, instance, 3 /* WATCH_CALLBACK */ , [
                    newValue,
                    // pass undefined as the old value when it's changed for the first time
                    oldValue === INITIAL_WATCHER_VALUE ? undefined : oldValue,
                    onCleanup
                ]);
                oldValue = newValue;
            }
        } else // watchEffect
        effect.run();
    };
    // important: mark the job as a watcher callback so that scheduler knows
    // it is allowed to self-trigger (#1727)
    job.allowRecurse = !!cb;
    let scheduler;
    if (flush === 'sync') scheduler = job; // the scheduler function gets called directly
    else if (flush === 'post') scheduler = ()=>queuePostRenderEffect(job, instance && instance.suspense)
    ;
    else // default: 'pre'
    scheduler = ()=>{
        if (!instance || instance.isMounted) queuePreFlushCb(job);
        else // with 'pre' option, the first call must happen before
        // the component is mounted so it is called synchronously.
        job();
    };
    const effect = new _reactivity.ReactiveEffect(getter, scheduler);
    effect.onTrack = onTrack;
    effect.onTrigger = onTrigger;
    // initial run
    if (cb) {
        if (immediate) job();
        else oldValue = effect.run();
    } else if (flush === 'post') queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense);
    else effect.run();
    return ()=>{
        effect.stop();
        if (instance && instance.scope) _shared.remove(instance.scope.effects, effect);
    };
}
// this.$watch
function instanceWatch(source, value, options) {
    const publicThis = this.proxy;
    const getter = _shared.isString(source) ? source.includes('.') ? createPathGetter(publicThis, source) : ()=>publicThis[source]
     : source.bind(publicThis, publicThis);
    let cb;
    if (_shared.isFunction(value)) cb = value;
    else {
        cb = value.handler;
        options = value;
    }
    const cur = currentInstance;
    setCurrentInstance(this);
    const res = doWatch(getter, cb.bind(publicThis), options);
    if (cur) setCurrentInstance(cur);
    else unsetCurrentInstance();
    return res;
}
function createPathGetter(ctx, path) {
    const segments = path.split('.');
    return ()=>{
        let cur = ctx;
        for(let i = 0; i < segments.length && cur; i++)cur = cur[segments[i]];
        return cur;
    };
}
function traverse(value, seen) {
    if (!_shared.isObject(value) || value["__v_skip" /* SKIP */ ]) return value;
    seen = seen || new Set();
    if (seen.has(value)) return value;
    seen.add(value);
    if (_reactivity.isRef(value)) traverse(value.value, seen);
    else if (_shared.isArray(value)) for(let i = 0; i < value.length; i++)traverse(value[i], seen);
    else if (_shared.isSet(value) || _shared.isMap(value)) value.forEach((v)=>{
        traverse(v, seen);
    });
    else if (_shared.isPlainObject(value)) for(const key in value)traverse(value[key], seen);
    return value;
}
function useTransitionState() {
    const state = {
        isMounted: false,
        isLeaving: false,
        isUnmounting: false,
        leavingVNodes: new Map()
    };
    onMounted(()=>{
        state.isMounted = true;
    });
    onBeforeUnmount(()=>{
        state.isUnmounting = true;
    });
    return state;
}
const TransitionHookValidator = [
    Function,
    Array
];
const BaseTransitionImpl = {
    name: `BaseTransition`,
    props: {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        // enter
        onBeforeEnter: TransitionHookValidator,
        onEnter: TransitionHookValidator,
        onAfterEnter: TransitionHookValidator,
        onEnterCancelled: TransitionHookValidator,
        // leave
        onBeforeLeave: TransitionHookValidator,
        onLeave: TransitionHookValidator,
        onAfterLeave: TransitionHookValidator,
        onLeaveCancelled: TransitionHookValidator,
        // appear
        onBeforeAppear: TransitionHookValidator,
        onAppear: TransitionHookValidator,
        onAfterAppear: TransitionHookValidator,
        onAppearCancelled: TransitionHookValidator
    },
    setup (props, { slots  }) {
        const instance = getCurrentInstance();
        const state = useTransitionState();
        let prevTransitionKey;
        return ()=>{
            const children = slots.default && getTransitionRawChildren(slots.default(), true);
            if (!children || !children.length) return;
            // warn multiple elements
            if (children.length > 1) warn("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
            // there's no need to track reactivity for these props so use the raw
            // props for a bit better perf
            const rawProps = _reactivity.toRaw(props);
            const { mode  } = rawProps;
            // check mode
            if (mode && mode !== 'in-out' && mode !== 'out-in' && mode !== 'default') warn(`invalid <transition> mode: ${mode}`);
            // at this point children has a guaranteed length of 1.
            const child = children[0];
            if (state.isLeaving) return emptyPlaceholder(child);
            // in the case of <transition><keep-alive/></transition>, we need to
            // compare the type of the kept-alive children.
            const innerChild = getKeepAliveChild(child);
            if (!innerChild) return emptyPlaceholder(child);
            const enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
            setTransitionHooks(innerChild, enterHooks);
            const oldChild = instance.subTree;
            const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
            let transitionKeyChanged = false;
            const { getTransitionKey  } = innerChild.type;
            if (getTransitionKey) {
                const key = getTransitionKey();
                if (prevTransitionKey === undefined) prevTransitionKey = key;
                else if (key !== prevTransitionKey) {
                    prevTransitionKey = key;
                    transitionKeyChanged = true;
                }
            }
            // handle mode
            if (oldInnerChild && oldInnerChild.type !== Comment && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
                const leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
                // update old tree's hooks in case of dynamic transition
                setTransitionHooks(oldInnerChild, leavingHooks);
                // switching between different views
                if (mode === 'out-in') {
                    state.isLeaving = true;
                    // return placeholder node and queue update when leave finishes
                    leavingHooks.afterLeave = ()=>{
                        state.isLeaving = false;
                        instance.update();
                    };
                    return emptyPlaceholder(child);
                } else if (mode === 'in-out' && innerChild.type !== Comment) leavingHooks.delayLeave = (el, earlyRemove, delayedLeave)=>{
                    const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
                    leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
                    // early removal callback
                    el._leaveCb = ()=>{
                        earlyRemove();
                        el._leaveCb = undefined;
                        delete enterHooks.delayedLeave;
                    };
                    enterHooks.delayedLeave = delayedLeave;
                };
            }
            return child;
        };
    }
};
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
    const { leavingVNodes  } = state;
    let leavingVNodesCache = leavingVNodes.get(vnode.type);
    if (!leavingVNodesCache) {
        leavingVNodesCache = Object.create(null);
        leavingVNodes.set(vnode.type, leavingVNodesCache);
    }
    return leavingVNodesCache;
}
// The transition hooks are attached to the vnode as vnode.transition
// and will be called at appropriate timing in the renderer.
function resolveTransitionHooks(vnode2, props, state, instance) {
    const { appear , mode , persisted =false , onBeforeEnter , onEnter , onAfterEnter , onEnterCancelled , onBeforeLeave , onLeave , onAfterLeave , onLeaveCancelled , onBeforeAppear , onAppear , onAfterAppear , onAppearCancelled  } = props;
    const key = String(vnode2.key);
    const leavingVNodesCache = getLeavingNodesForType(state, vnode2);
    const callHook1 = (hook, args)=>{
        hook && callWithAsyncErrorHandling(hook, instance, 9 /* TRANSITION_HOOK */ , args);
    };
    const hooks = {
        mode,
        persisted,
        beforeEnter (el) {
            let hook = onBeforeEnter;
            if (!state.isMounted) {
                if (appear) hook = onBeforeAppear || onBeforeEnter;
                else return;
            }
            // for same element (v-show)
            if (el._leaveCb) el._leaveCb(true);
            // for toggled element with same key (v-if)
            const leavingVNode = leavingVNodesCache[key];
            if (leavingVNode && isSameVNodeType(vnode2, leavingVNode) && leavingVNode.el._leaveCb) // force early removal (not cancelled)
            leavingVNode.el._leaveCb();
            callHook1(hook, [
                el
            ]);
        },
        enter (el) {
            let hook = onEnter;
            let afterHook = onAfterEnter;
            let cancelHook = onEnterCancelled;
            if (!state.isMounted) {
                if (appear) {
                    hook = onAppear || onEnter;
                    afterHook = onAfterAppear || onAfterEnter;
                    cancelHook = onAppearCancelled || onEnterCancelled;
                } else return;
            }
            let called = false;
            const done = el._enterCb = (cancelled)=>{
                if (called) return;
                called = true;
                if (cancelled) callHook1(cancelHook, [
                    el
                ]);
                else callHook1(afterHook, [
                    el
                ]);
                if (hooks.delayedLeave) hooks.delayedLeave();
                el._enterCb = undefined;
            };
            if (hook) {
                hook(el, done);
                if (hook.length <= 1) done();
            } else done();
        },
        leave (el, remove) {
            const key = String(vnode2.key);
            if (el._enterCb) el._enterCb(true);
            if (state.isUnmounting) return remove();
            callHook1(onBeforeLeave, [
                el
            ]);
            let called = false;
            const done = el._leaveCb = (cancelled)=>{
                if (called) return;
                called = true;
                remove();
                if (cancelled) callHook1(onLeaveCancelled, [
                    el
                ]);
                else callHook1(onAfterLeave, [
                    el
                ]);
                el._leaveCb = undefined;
                if (leavingVNodesCache[key] === vnode2) delete leavingVNodesCache[key];
            };
            leavingVNodesCache[key] = vnode2;
            if (onLeave) {
                onLeave(el, done);
                if (onLeave.length <= 1) done();
            } else done();
        },
        clone (vnode) {
            return resolveTransitionHooks(vnode, props, state, instance);
        }
    };
    return hooks;
}
// the placeholder really only handles one special case: KeepAlive
// in the case of a KeepAlive in a leave phase we need to return a KeepAlive
// placeholder with empty content to avoid the KeepAlive instance from being
// unmounted.
function emptyPlaceholder(vnode) {
    if (isKeepAlive(vnode)) {
        vnode = cloneVNode(vnode);
        vnode.children = null;
        return vnode;
    }
}
function getKeepAliveChild(vnode) {
    return isKeepAlive(vnode) ? vnode.children ? vnode.children[0] : undefined : vnode;
}
function setTransitionHooks(vnode, hooks) {
    if (vnode.shapeFlag & 6 /* COMPONENT */  && vnode.component) setTransitionHooks(vnode.component.subTree, hooks);
    else if (vnode.shapeFlag & 128 /* SUSPENSE */ ) {
        vnode.ssContent.transition = hooks.clone(vnode.ssContent);
        vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
    } else vnode.transition = hooks;
}
function getTransitionRawChildren(children, keepComment = false) {
    let ret = [];
    let keyedFragmentCount = 0;
    for(let i = 0; i < children.length; i++){
        const child = children[i];
        // handle fragment children case, e.g. v-for
        if (child.type === Fragment) {
            if (child.patchFlag & 128 /* KEYED_FRAGMENT */ ) keyedFragmentCount++;
            ret = ret.concat(getTransitionRawChildren(child.children, keepComment));
        } else if (keepComment || child.type !== Comment) ret.push(child);
    }
    // #1126 if a transition children list contains multiple sub fragments, these
    // fragments will be merged into a flat children array. Since each v-for
    // fragment may contain different static bindings inside, we need to de-op
    // these children to force full diffs to ensure correct behavior.
    if (keyedFragmentCount > 1) for(let i1 = 0; i1 < ret.length; i1++)ret[i1].patchFlag = -2 /* BAIL */ ;
    return ret;
}
// implementation, close to no-op
function defineComponent(options) {
    return _shared.isFunction(options) ? {
        setup: options,
        name: options.name
    } : options;
}
const isAsyncWrapper = (i)=>!!i.type.__asyncLoader
;
function defineAsyncComponent(source) {
    if (_shared.isFunction(source)) source = {
        loader: source
    };
    const { loader , loadingComponent , errorComponent , delay =200 , timeout , suspensible =true , onError: userOnError  } = source;
    let pendingRequest = null;
    let resolvedComp;
    let retries = 0;
    const retry = ()=>{
        retries++;
        pendingRequest = null;
        return load();
    };
    const load = ()=>{
        let thisRequest;
        return pendingRequest || (thisRequest = pendingRequest = loader().catch((err)=>{
            err = err instanceof Error ? err : new Error(String(err));
            if (userOnError) return new Promise((resolve1, reject)=>{
                const userRetry = ()=>resolve1(retry())
                ;
                const userFail = ()=>reject(err)
                ;
                userOnError(err, userRetry, userFail, retries + 1);
            });
            else throw err;
        }).then((comp)=>{
            if (thisRequest !== pendingRequest && pendingRequest) return pendingRequest;
            if (!comp) warn(`Async component loader resolved to undefined. ` + `If you are using retry(), make sure to return its return value.`);
            // interop module default
            if (comp && (comp.__esModule || comp[Symbol.toStringTag] === 'Module')) comp = comp.default;
            if (comp && !_shared.isObject(comp) && !_shared.isFunction(comp)) throw new Error(`Invalid async component load result: ${comp}`);
            resolvedComp = comp;
            return comp;
        }));
    };
    return defineComponent({
        name: 'AsyncComponentWrapper',
        __asyncLoader: load,
        get __asyncResolved () {
            return resolvedComp;
        },
        setup () {
            const instance = currentInstance;
            // already resolved
            if (resolvedComp) return ()=>createInnerComp(resolvedComp, instance)
            ;
            const onError = (err)=>{
                pendingRequest = null;
                handleError(err, instance, 13 /* ASYNC_COMPONENT_LOADER */ , !errorComponent /* do not throw in dev if user provided error component */ );
            };
            // suspense-controlled or SSR.
            if (suspensible && instance.suspense || isInSSRComponentSetup) return load().then((comp)=>{
                return ()=>createInnerComp(comp, instance)
                ;
            }).catch((err)=>{
                onError(err);
                return ()=>errorComponent ? createVNode(errorComponent, {
                        error: err
                    }) : null
                ;
            });
            const loaded = _reactivity.ref(false);
            const error = _reactivity.ref();
            const delayed = _reactivity.ref(!!delay);
            if (delay) setTimeout(()=>{
                delayed.value = false;
            }, delay);
            if (timeout != null) setTimeout(()=>{
                if (!loaded.value && !error.value) {
                    const err = new Error(`Async component timed out after ${timeout}ms.`);
                    onError(err);
                    error.value = err;
                }
            }, timeout);
            load().then(()=>{
                loaded.value = true;
                if (instance.parent && isKeepAlive(instance.parent.vnode)) // parent is keep-alive, force update so the loaded component's
                // name is taken into account
                queueJob(instance.parent.update);
            }).catch((err)=>{
                onError(err);
                error.value = err;
            });
            return ()=>{
                if (loaded.value && resolvedComp) return createInnerComp(resolvedComp, instance);
                else if (error.value && errorComponent) return createVNode(errorComponent, {
                    error: error.value
                });
                else if (loadingComponent && !delayed.value) return createVNode(loadingComponent);
            };
        }
    });
}
function createInnerComp(comp, { vnode: { ref , props , children  }  }) {
    const vnode = createVNode(comp, props, children);
    // ensure inner component inherits the async wrapper's ref owner
    vnode.ref = ref;
    return vnode;
}
const isKeepAlive = (vnode)=>vnode.type.__isKeepAlive
;
const KeepAliveImpl = {
    name: `KeepAlive`,
    // Marker for special handling inside the renderer. We are not using a ===
    // check directly on KeepAlive in the renderer, because importing it directly
    // would prevent it from being tree-shaken.
    __isKeepAlive: true,
    props: {
        include: [
            String,
            RegExp,
            Array
        ],
        exclude: [
            String,
            RegExp,
            Array
        ],
        max: [
            String,
            Number
        ]
    },
    setup (props, { slots  }) {
        const instance2 = getCurrentInstance();
        // KeepAlive communicates with the instantiated renderer via the
        // ctx where the renderer passes in its internals,
        // and the KeepAlive instance exposes activate/deactivate implementations.
        // The whole point of this is to avoid importing KeepAlive directly in the
        // renderer to facilitate tree-shaking.
        const sharedContext = instance2.ctx;
        // if the internal renderer is not registered, it indicates that this is server-side rendering,
        // for KeepAlive, we just need to render its children
        if (!sharedContext.renderer) return slots.default;
        const cache = new Map();
        const keys = new Set();
        let current = null;
        instance2.__v_cache = cache;
        const parentSuspense = instance2.suspense;
        const { renderer: { p: patch , m: move , um: _unmount , o: { createElement  }  }  } = sharedContext;
        const storageContainer = createElement('div');
        sharedContext.activate = (vnode, container, anchor, isSVG, optimized)=>{
            const instance = vnode.component;
            move(vnode, container, anchor, 0 /* ENTER */ , parentSuspense);
            // in case props have changed
            patch(instance.vnode, vnode, container, anchor, instance, parentSuspense, isSVG, vnode.slotScopeIds, optimized);
            queuePostRenderEffect(()=>{
                instance.isDeactivated = false;
                if (instance.a) _shared.invokeArrayFns(instance.a);
                const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
                if (vnodeHook) invokeVNodeHook(vnodeHook, instance.parent, vnode);
            }, parentSuspense);
            // Update components tree
            devtoolsComponentAdded(instance);
        };
        sharedContext.deactivate = (vnode)=>{
            const instance = vnode.component;
            move(vnode, storageContainer, null, 1 /* LEAVE */ , parentSuspense);
            queuePostRenderEffect(()=>{
                if (instance.da) _shared.invokeArrayFns(instance.da);
                const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
                if (vnodeHook) invokeVNodeHook(vnodeHook, instance.parent, vnode);
                instance.isDeactivated = true;
            }, parentSuspense);
            // Update components tree
            devtoolsComponentAdded(instance);
        };
        function unmount(vnode) {
            // reset the shapeFlag so it can be properly unmounted
            resetShapeFlag(vnode);
            _unmount(vnode, instance2, parentSuspense, true);
        }
        function pruneCache(filter) {
            cache.forEach((vnode, key)=>{
                const name = getComponentName(vnode.type);
                if (name && (!filter || !filter(name))) pruneCacheEntry(key);
            });
        }
        function pruneCacheEntry(key) {
            const cached = cache.get(key);
            if (!current || cached.type !== current.type) unmount(cached);
            else if (current) // current active instance should no longer be kept-alive.
            // we can't unmount it now but it might be later, so reset its flag now.
            resetShapeFlag(current);
            cache.delete(key);
            keys.delete(key);
        }
        // prune cache on include/exclude prop change
        watch(()=>[
                props.include,
                props.exclude
            ]
        , ([include, exclude])=>{
            include && pruneCache((name)=>matches(include, name)
            );
            exclude && pruneCache((name)=>!matches(exclude, name)
            );
        }, // prune post-render after `current` has been updated
        {
            flush: 'post',
            deep: true
        });
        // cache sub tree after render
        let pendingCacheKey = null;
        const cacheSubtree = ()=>{
            // fix #1621, the pendingCacheKey could be 0
            if (pendingCacheKey != null) cache.set(pendingCacheKey, getInnerChild(instance2.subTree));
        };
        onMounted(cacheSubtree);
        onUpdated(cacheSubtree);
        onBeforeUnmount(()=>{
            cache.forEach((cached)=>{
                const { subTree , suspense  } = instance2;
                const vnode = getInnerChild(subTree);
                if (cached.type === vnode.type) {
                    // current instance will be unmounted as part of keep-alive's unmount
                    resetShapeFlag(vnode);
                    // but invoke its deactivated hook here
                    const da = vnode.component.da;
                    da && queuePostRenderEffect(da, suspense);
                    return;
                }
                unmount(cached);
            });
        });
        return ()=>{
            pendingCacheKey = null;
            if (!slots.default) return null;
            const children = slots.default();
            const rawVNode = children[0];
            if (children.length > 1) {
                warn(`KeepAlive should contain exactly one component child.`);
                current = null;
                return children;
            } else if (!isVNode(rawVNode) || !(rawVNode.shapeFlag & 4 /* STATEFUL_COMPONENT */ ) && !(rawVNode.shapeFlag & 128 /* SUSPENSE */ )) {
                current = null;
                return rawVNode;
            }
            let vnode = getInnerChild(rawVNode);
            const comp = vnode.type;
            // for async components, name check should be based in its loaded
            // inner component if available
            const name = getComponentName(isAsyncWrapper(vnode) ? vnode.type.__asyncResolved || {
            } : comp);
            const { include , exclude , max  } = props;
            if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
                current = vnode;
                return rawVNode;
            }
            const key = vnode.key == null ? comp : vnode.key;
            const cachedVNode = cache.get(key);
            // clone vnode if it's reused because we are going to mutate it
            if (vnode.el) {
                vnode = cloneVNode(vnode);
                if (rawVNode.shapeFlag & 128 /* SUSPENSE */ ) rawVNode.ssContent = vnode;
            }
            // #1513 it's possible for the returned vnode to be cloned due to attr
            // fallthrough or scopeId, so the vnode here may not be the final vnode
            // that is mounted. Instead of caching it directly, we store the pending
            // key and cache `instance.subTree` (the normalized vnode) in
            // beforeMount/beforeUpdate hooks.
            pendingCacheKey = key;
            if (cachedVNode) {
                // copy over mounted state
                vnode.el = cachedVNode.el;
                vnode.component = cachedVNode.component;
                if (vnode.transition) // recursively update transition hooks on subTree
                setTransitionHooks(vnode, vnode.transition);
                // avoid vnode being mounted as fresh
                vnode.shapeFlag |= 512 /* COMPONENT_KEPT_ALIVE */ ;
                // make this key the freshest
                keys.delete(key);
                keys.add(key);
            } else {
                keys.add(key);
                // prune oldest entry
                if (max && keys.size > parseInt(max, 10)) pruneCacheEntry(keys.values().next().value);
            }
            // avoid vnode being unmounted
            vnode.shapeFlag |= 256 /* COMPONENT_SHOULD_KEEP_ALIVE */ ;
            current = vnode;
            return rawVNode;
        };
    }
};
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
const KeepAlive = KeepAliveImpl;
function matches(pattern, name) {
    if (_shared.isArray(pattern)) return pattern.some((p)=>matches(p, name)
    );
    else if (_shared.isString(pattern)) return pattern.split(',').includes(name);
    else if (pattern.test) return pattern.test(name);
    /* istanbul ignore next */ return false;
}
function onActivated(hook, target) {
    registerKeepAliveHook(hook, "a" /* ACTIVATED */ , target);
}
function onDeactivated(hook, target) {
    registerKeepAliveHook(hook, "da" /* DEACTIVATED */ , target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
    // cache the deactivate branch check wrapper for injected hooks so the same
    // hook can be properly deduped by the scheduler. "__wdc" stands for "with
    // deactivation check".
    const wrappedHook = hook.__wdc || (hook.__wdc = ()=>{
        // only fire the hook if the target instance is NOT in a deactivated branch.
        let current = target;
        while(current){
            if (current.isDeactivated) return;
            current = current.parent;
        }
        return hook();
    });
    injectHook(type, wrappedHook, target);
    // In addition to registering it on the target instance, we walk up the parent
    // chain and register it on all ancestor instances that are keep-alive roots.
    // This avoids the need to walk the entire component tree when invoking these
    // hooks, and more importantly, avoids the need to track child components in
    // arrays.
    if (target) {
        let current = target.parent;
        while(current && current.parent){
            if (isKeepAlive(current.parent.vnode)) injectToKeepAliveRoot(wrappedHook, type, target, current);
            current = current.parent;
        }
    }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
    // injectHook wraps the original for error handling, so make sure to remove
    // the wrapped version.
    const injected = injectHook(type, hook, keepAliveRoot, true);
    onUnmounted(()=>{
        _shared.remove(keepAliveRoot[type], injected);
    }, target);
}
function resetShapeFlag(vnode) {
    let shapeFlag = vnode.shapeFlag;
    if (shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */ ) shapeFlag -= 256 /* COMPONENT_SHOULD_KEEP_ALIVE */ ;
    if (shapeFlag & 512 /* COMPONENT_KEPT_ALIVE */ ) shapeFlag -= 512 /* COMPONENT_KEPT_ALIVE */ ;
    vnode.shapeFlag = shapeFlag;
}
function getInnerChild(vnode) {
    return vnode.shapeFlag & 128 /* SUSPENSE */  ? vnode.ssContent : vnode;
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
    if (target) {
        const hooks = target[type] || (target[type] = []);
        // cache the error handling wrapper for injected hooks so the same hook
        // can be properly deduped by the scheduler. "__weh" stands for "with error
        // handling".
        const wrappedHook = hook.__weh || (hook.__weh = (...args)=>{
            if (target.isUnmounted) return;
            // disable tracking inside all lifecycle hooks
            // since they can potentially be called inside effects.
            _reactivity.pauseTracking();
            // Set currentInstance during hook invocation.
            // This assumes the hook does not synchronously trigger other hooks, which
            // can only be false when the user does something really funky.
            setCurrentInstance(target);
            const res = callWithAsyncErrorHandling(hook, target, type, args);
            unsetCurrentInstance();
            _reactivity.resetTracking();
            return res;
        });
        if (prepend) hooks.unshift(wrappedHook);
        else hooks.push(wrappedHook);
        return wrappedHook;
    } else {
        const apiName = _shared.toHandlerKey(ErrorTypeStrings[type].replace(/ hook$/, ''));
        warn(`${apiName} is called when there is no active component instance to be ` + `associated with. ` + `Lifecycle injection APIs can only be used during execution of setup().` + (` If you are using async setup(), make sure to register lifecycle ` + `hooks before the first await statement.`));
    }
}
const createHook = (lifecycle)=>(hook, target = currentInstance)=>// post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
        (!isInSSRComponentSetup || lifecycle === "sp" /* SERVER_PREFETCH */ ) && injectHook(lifecycle, hook, target)
;
const onBeforeMount = createHook("bm" /* BEFORE_MOUNT */ );
const onMounted = createHook("m" /* MOUNTED */ );
const onBeforeUpdate = createHook("bu" /* BEFORE_UPDATE */ );
const onUpdated = createHook("u" /* UPDATED */ );
const onBeforeUnmount = createHook("bum" /* BEFORE_UNMOUNT */ );
const onUnmounted = createHook("um" /* UNMOUNTED */ );
const onServerPrefetch = createHook("sp" /* SERVER_PREFETCH */ );
const onRenderTriggered = createHook("rtg" /* RENDER_TRIGGERED */ );
const onRenderTracked = createHook("rtc" /* RENDER_TRACKED */ );
function onErrorCaptured(hook, target = currentInstance) {
    injectHook("ec" /* ERROR_CAPTURED */ , hook, target);
}
function createDuplicateChecker() {
    const cache = Object.create(null);
    return (type, key)=>{
        if (cache[key]) warn(`${type} property "${key}" is already defined in ${cache[key]}.`);
        else cache[key] = type;
    };
}
let shouldCacheAccess = true;
function applyOptions(instance) {
    const options = resolveMergedOptions(instance);
    const publicThis = instance.proxy;
    const ctx = instance.ctx;
    // do not cache property access on public proxy during state initialization
    shouldCacheAccess = false;
    // call beforeCreate first before accessing other options since
    // the hook may mutate resolved options (#2791)
    if (options.beforeCreate) callHook(options.beforeCreate, instance, "bc" /* BEFORE_CREATE */ );
    const { // state
    data: dataOptions , computed: computedOptions , methods , watch: watchOptions , provide: provideOptions , inject: injectOptions , // lifecycle
    created , beforeMount , mounted , beforeUpdate , updated , activated , deactivated , beforeDestroy , beforeUnmount , destroyed , unmounted , render , renderTracked , renderTriggered , errorCaptured , serverPrefetch , // public API
    expose , inheritAttrs , // assets
    components , directives , filters  } = options;
    const checkDuplicateProperties = createDuplicateChecker();
    {
        const [propsOptions] = instance.propsOptions;
        if (propsOptions) for(const key in propsOptions)checkDuplicateProperties("Props" /* PROPS */ , key);
    }
    // options initialization order (to be consistent with Vue 2):
    // - props (already done outside of this function)
    // - inject
    // - methods
    // - data (deferred since it relies on `this` access)
    // - computed
    // - watch (deferred since it relies on `this` access)
    if (injectOptions) resolveInjections(injectOptions, ctx, checkDuplicateProperties, instance.appContext.config.unwrapInjectedRef);
    if (methods) for(const key3 in methods){
        const methodHandler = methods[key3];
        if (_shared.isFunction(methodHandler)) {
            Object.defineProperty(ctx, key3, {
                value: methodHandler.bind(publicThis),
                configurable: true,
                enumerable: true,
                writable: true
            });
            checkDuplicateProperties("Methods" /* METHODS */ , key3);
        } else warn(`Method "${key3}" has type "${typeof methodHandler}" in the component definition. ` + `Did you reference the function correctly?`);
    }
    if (dataOptions) {
        if (!_shared.isFunction(dataOptions)) warn(`The data option must be a function. ` + `Plain object usage is no longer supported.`);
        const data = dataOptions.call(publicThis, publicThis);
        if (_shared.isPromise(data)) warn(`data() returned a Promise - note data() cannot be async; If you ` + `intend to perform data fetching before component renders, use ` + `async setup() + <Suspense>.`);
        if (!_shared.isObject(data)) warn(`data() should return an object.`);
        else {
            instance.data = _reactivity.reactive(data);
            for(const key in data){
                checkDuplicateProperties("Data" /* DATA */ , key);
                // expose data on ctx during dev
                if (key[0] !== '$' && key[0] !== '_') Object.defineProperty(ctx, key, {
                    configurable: true,
                    enumerable: true,
                    get: ()=>data[key]
                    ,
                    set: _shared.NOOP
                });
            }
        }
    }
    // state initialization complete at this point - start caching access
    shouldCacheAccess = true;
    if (computedOptions) for(const key1 in computedOptions){
        const opt = computedOptions[key1];
        const get = _shared.isFunction(opt) ? opt.bind(publicThis, publicThis) : _shared.isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : _shared.NOOP;
        if (get === _shared.NOOP) warn(`Computed property "${key1}" has no getter.`);
        const set = !_shared.isFunction(opt) && _shared.isFunction(opt.set) ? opt.set.bind(publicThis) : ()=>{
            warn(`Write operation failed: computed property "${key1}" is readonly.`);
        };
        const c = computed({
            get,
            set
        });
        Object.defineProperty(ctx, key1, {
            enumerable: true,
            configurable: true,
            get: ()=>c.value
            ,
            set: (v)=>c.value = v
        });
        checkDuplicateProperties("Computed" /* COMPUTED */ , key1);
    }
    if (watchOptions) for(const key2 in watchOptions)createWatcher(watchOptions[key2], ctx, publicThis, key2);
    if (provideOptions) {
        const provides = _shared.isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
        Reflect.ownKeys(provides).forEach((key)=>{
            provide(key, provides[key]);
        });
    }
    if (created) callHook(created, instance, "c" /* CREATED */ );
    function registerLifecycleHook(register, hook) {
        if (_shared.isArray(hook)) hook.forEach((_hook)=>register(_hook.bind(publicThis))
        );
        else if (hook) register(hook.bind(publicThis));
    }
    registerLifecycleHook(onBeforeMount, beforeMount);
    registerLifecycleHook(onMounted, mounted);
    registerLifecycleHook(onBeforeUpdate, beforeUpdate);
    registerLifecycleHook(onUpdated, updated);
    registerLifecycleHook(onActivated, activated);
    registerLifecycleHook(onDeactivated, deactivated);
    registerLifecycleHook(onErrorCaptured, errorCaptured);
    registerLifecycleHook(onRenderTracked, renderTracked);
    registerLifecycleHook(onRenderTriggered, renderTriggered);
    registerLifecycleHook(onBeforeUnmount, beforeUnmount);
    registerLifecycleHook(onUnmounted, unmounted);
    registerLifecycleHook(onServerPrefetch, serverPrefetch);
    if (_shared.isArray(expose)) {
        if (expose.length) {
            const exposed = instance.exposed || (instance.exposed = {
            });
            expose.forEach((key)=>{
                Object.defineProperty(exposed, key, {
                    get: ()=>publicThis[key]
                    ,
                    set: (val)=>publicThis[key] = val
                });
            });
        } else if (!instance.exposed) instance.exposed = {
        };
    }
    // options that are handled when creating the instance but also need to be
    // applied from mixins
    if (render && instance.render === _shared.NOOP) instance.render = render;
    if (inheritAttrs != null) instance.inheritAttrs = inheritAttrs;
    // asset options.
    if (components) instance.components = components;
    if (directives) instance.directives = directives;
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = _shared.NOOP, unwrapRef = false) {
    if (_shared.isArray(injectOptions)) injectOptions = normalizeInject(injectOptions);
    for(const key in injectOptions){
        const opt = injectOptions[key];
        let injected;
        if (_shared.isObject(opt)) {
            if ('default' in opt) injected = inject(opt.from || key, opt.default, true);
            else injected = inject(opt.from || key);
        } else injected = inject(opt);
        if (_reactivity.isRef(injected)) {
            // TODO remove the check in 3.3
            if (unwrapRef) Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: ()=>injected.value
                ,
                set: (v)=>injected.value = v
            });
            else {
                warn(`injected property "${key}" is a ref and will be auto-unwrapped ` + `and no longer needs \`.value\` in the next minor release. ` + `To opt-in to the new behavior now, ` + `set \`app.config.unwrapInjectedRef = true\` (this config is ` + `temporary and will not be needed in the future.)`);
                ctx[key] = injected;
            }
        } else ctx[key] = injected;
        checkDuplicateProperties("Inject" /* INJECT */ , key);
    }
}
function callHook(hook, instance, type) {
    callWithAsyncErrorHandling(_shared.isArray(hook) ? hook.map((h1)=>h1.bind(instance.proxy)
    ) : hook.bind(instance.proxy), instance, type);
}
function createWatcher(raw, ctx, publicThis, key) {
    const getter = key.includes('.') ? createPathGetter(publicThis, key) : ()=>publicThis[key]
    ;
    if (_shared.isString(raw)) {
        const handler = ctx[raw];
        if (_shared.isFunction(handler)) watch(getter, handler);
        else warn(`Invalid watch handler specified by key "${raw}"`, handler);
    } else if (_shared.isFunction(raw)) watch(getter, raw.bind(publicThis));
    else if (_shared.isObject(raw)) {
        if (_shared.isArray(raw)) raw.forEach((r)=>createWatcher(r, ctx, publicThis, key)
        );
        else {
            const handler = _shared.isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
            if (_shared.isFunction(handler)) watch(getter, handler, raw);
            else warn(`Invalid watch handler specified by key "${raw.handler}"`, handler);
        }
    } else warn(`Invalid watch option: "${key}"`, raw);
}
/**
 * Resolve merged options and cache it on the component.
 * This is done only once per-component since the merging does not involve
 * instances.
 */ function resolveMergedOptions(instance) {
    const base = instance.type;
    const { mixins , extends: extendsOptions  } = base;
    const { mixins: globalMixins , optionsCache: cache , config: { optionMergeStrategies  }  } = instance.appContext;
    const cached = cache.get(base);
    let resolved;
    if (cached) resolved = cached;
    else if (!globalMixins.length && !mixins && !extendsOptions) resolved = base;
    else {
        resolved = {
        };
        if (globalMixins.length) globalMixins.forEach((m)=>mergeOptions(resolved, m, optionMergeStrategies, true)
        );
        mergeOptions(resolved, base, optionMergeStrategies);
    }
    cache.set(base, resolved);
    return resolved;
}
function mergeOptions(to, from, strats, asMixin = false) {
    const { mixins , extends: extendsOptions  } = from;
    if (extendsOptions) mergeOptions(to, extendsOptions, strats, true);
    if (mixins) mixins.forEach((m)=>mergeOptions(to, m, strats, true)
    );
    for(const key in from)if (asMixin && key === 'expose') warn(`"expose" option is ignored when declared in mixins or extends. ` + `It should only be declared in the base component itself.`);
    else {
        const strat = internalOptionMergeStrats[key] || strats && strats[key];
        to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
    return to;
}
const internalOptionMergeStrats = {
    data: mergeDataFn,
    props: mergeObjectOptions,
    emits: mergeObjectOptions,
    // objects
    methods: mergeObjectOptions,
    computed: mergeObjectOptions,
    // lifecycle
    beforeCreate: mergeAsArray,
    created: mergeAsArray,
    beforeMount: mergeAsArray,
    mounted: mergeAsArray,
    beforeUpdate: mergeAsArray,
    updated: mergeAsArray,
    beforeDestroy: mergeAsArray,
    beforeUnmount: mergeAsArray,
    destroyed: mergeAsArray,
    unmounted: mergeAsArray,
    activated: mergeAsArray,
    deactivated: mergeAsArray,
    errorCaptured: mergeAsArray,
    serverPrefetch: mergeAsArray,
    // assets
    components: mergeObjectOptions,
    directives: mergeObjectOptions,
    // watch
    watch: mergeWatchOptions,
    // provide / inject
    provide: mergeDataFn,
    inject: mergeInject
};
function mergeDataFn(to, from) {
    if (!from) return to;
    if (!to) return from;
    return function mergedDataFn() {
        return _shared.extend(_shared.isFunction(to) ? to.call(this, this) : to, _shared.isFunction(from) ? from.call(this, this) : from);
    };
}
function mergeInject(to, from) {
    return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
    if (_shared.isArray(raw)) {
        const res = {
        };
        for(let i = 0; i < raw.length; i++)res[raw[i]] = raw[i];
        return res;
    }
    return raw;
}
function mergeAsArray(to, from) {
    return to ? [
        ...new Set([].concat(to, from))
    ] : from;
}
function mergeObjectOptions(to, from) {
    return to ? _shared.extend(_shared.extend(Object.create(null), to), from) : from;
}
function mergeWatchOptions(to, from) {
    if (!to) return from;
    if (!from) return to;
    const merged = _shared.extend(Object.create(null), to);
    for(const key in from)merged[key] = mergeAsArray(to[key], from[key]);
    return merged;
}
function initProps(instance, rawProps, isStateful, isSSR = false) {
    const props = {
    };
    const attrs = {
    };
    _shared.def(attrs, InternalObjectKey, 1);
    instance.propsDefaults = Object.create(null);
    setFullProps(instance, rawProps, props, attrs);
    // ensure all declared prop keys are present
    for(const key in instance.propsOptions[0])if (!(key in props)) props[key] = undefined;
    validateProps(rawProps || {
    }, props, instance);
    if (isStateful) // stateful
    instance.props = isSSR ? props : _reactivity.shallowReactive(props);
    else if (!instance.type.props) // functional w/ optional props, props === attrs
    instance.props = attrs;
    else // functional w/ declared props
    instance.props = props;
    instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
    const { props , attrs , vnode: { patchFlag  }  } = instance;
    const rawCurrentProps = _reactivity.toRaw(props);
    const [options] = instance.propsOptions;
    let hasAttrsChanged = false;
    if (// always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(instance.type.__hmrId || instance.parent && instance.parent.type.__hmrId) && (optimized || patchFlag > 0) && !(patchFlag & 16 /* FULL_PROPS */ )) {
        if (patchFlag & 8 /* PROPS */ ) {
            // Compiler-generated props & no keys change, just set the updated
            // the props.
            const propsToUpdate = instance.vnode.dynamicProps;
            for(let i = 0; i < propsToUpdate.length; i++){
                let key = propsToUpdate[i];
                // PROPS flag guarantees rawProps to be non-null
                const value = rawProps[key];
                if (options) {
                    // attr / props separation was done on init and will be consistent
                    // in this code path, so just check if attrs have it.
                    if (_shared.hasOwn(attrs, key)) {
                        if (value !== attrs[key]) {
                            attrs[key] = value;
                            hasAttrsChanged = true;
                        }
                    } else {
                        const camelizedKey = _shared.camelize(key);
                        props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false);
                    }
                } else if (value !== attrs[key]) {
                    attrs[key] = value;
                    hasAttrsChanged = true;
                }
            }
        }
    } else {
        // full props update.
        if (setFullProps(instance, rawProps, props, attrs)) hasAttrsChanged = true;
        // in case of dynamic props, check if we need to delete keys from
        // the props object
        let kebabKey;
        for(const key in rawCurrentProps)if (!rawProps || !_shared.hasOwn(rawProps, key) && ((kebabKey = _shared.hyphenate(key)) === key || !_shared.hasOwn(rawProps, kebabKey))) {
            if (options) {
                if (rawPrevProps && (rawPrevProps[key] !== undefined || // for kebab-case
                rawPrevProps[kebabKey] !== undefined)) props[key] = resolvePropValue(options, rawCurrentProps, key, undefined, instance, true);
            } else delete props[key];
        }
        // in the case of functional component w/o props declaration, props and
        // attrs point to the same object so it should already have been updated.
        if (attrs !== rawCurrentProps) {
            for(const key in attrs)if (!rawProps || !_shared.hasOwn(rawProps, key) && true) {
                delete attrs[key];
                hasAttrsChanged = true;
            }
        }
    }
    // trigger updates for $attrs in case it's used in component slots
    if (hasAttrsChanged) _reactivity.trigger(instance, "set" /* SET */ , '$attrs');
    validateProps(rawProps || {
    }, props, instance);
}
function setFullProps(instance, rawProps, props, attrs) {
    const [options, needCastKeys] = instance.propsOptions;
    let hasAttrsChanged = false;
    let rawCastValues;
    if (rawProps) for(let key in rawProps){
        // key, ref are reserved and never passed down
        if (_shared.isReservedProp(key)) continue;
        const value = rawProps[key];
        // prop option names are camelized during normalization, so to support
        // kebab -> camel conversion here we need to camelize the key.
        let camelKey;
        if (options && _shared.hasOwn(options, camelKey = _shared.camelize(key))) {
            if (!needCastKeys || !needCastKeys.includes(camelKey)) props[camelKey] = value;
            else (rawCastValues || (rawCastValues = {
            }))[camelKey] = value;
        } else if (!isEmitListener(instance.emitsOptions, key)) {
            if (!(key in attrs) || value !== attrs[key]) {
                attrs[key] = value;
                hasAttrsChanged = true;
            }
        }
    }
    if (needCastKeys) {
        const rawCurrentProps = _reactivity.toRaw(props);
        const castValues = rawCastValues || _shared.EMPTY_OBJ;
        for(let i = 0; i < needCastKeys.length; i++){
            const key = needCastKeys[i];
            props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !_shared.hasOwn(castValues, key));
        }
    }
    return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
    const opt = options[key];
    if (opt != null) {
        const hasDefault = _shared.hasOwn(opt, 'default');
        // default values
        if (hasDefault && value === undefined) {
            const defaultValue = opt.default;
            if (opt.type !== Function && _shared.isFunction(defaultValue)) {
                const { propsDefaults  } = instance;
                if (key in propsDefaults) value = propsDefaults[key];
                else {
                    setCurrentInstance(instance);
                    value = propsDefaults[key] = defaultValue.call(null, props);
                    unsetCurrentInstance();
                }
            } else value = defaultValue;
        }
        // boolean casting
        if (opt[0 /* shouldCast */ ]) {
            if (isAbsent && !hasDefault) value = false;
            else if (opt[1 /* shouldCastTrue */ ] && (value === '' || value === _shared.hyphenate(key))) value = true;
        }
    }
    return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.propsCache;
    const cached = cache.get(comp);
    if (cached) return cached;
    const raw2 = comp.props;
    const normalized = {
    };
    const needCastKeys = [];
    // apply mixin/extends props
    let hasExtends = false;
    if (__VUE_OPTIONS_API__ && !_shared.isFunction(comp)) {
        const extendProps = (raw)=>{
            hasExtends = true;
            const [props, keys] = normalizePropsOptions(raw, appContext, true);
            _shared.extend(normalized, props);
            if (keys) needCastKeys.push(...keys);
        };
        if (!asMixin && appContext.mixins.length) appContext.mixins.forEach(extendProps);
        if (comp.extends) extendProps(comp.extends);
        if (comp.mixins) comp.mixins.forEach(extendProps);
    }
    if (!raw2 && !hasExtends) {
        cache.set(comp, _shared.EMPTY_ARR);
        return _shared.EMPTY_ARR;
    }
    if (_shared.isArray(raw2)) for(let i = 0; i < raw2.length; i++){
        if (!_shared.isString(raw2[i])) warn(`props must be strings when using array syntax.`, raw2[i]);
        const normalizedKey = _shared.camelize(raw2[i]);
        if (validatePropName(normalizedKey)) normalized[normalizedKey] = _shared.EMPTY_OBJ;
    }
    else if (raw2) {
        if (!_shared.isObject(raw2)) warn(`invalid props options`, raw2);
        for(const key in raw2){
            const normalizedKey = _shared.camelize(key);
            if (validatePropName(normalizedKey)) {
                const opt = raw2[key];
                const prop = normalized[normalizedKey] = _shared.isArray(opt) || _shared.isFunction(opt) ? {
                    type: opt
                } : opt;
                if (prop) {
                    const booleanIndex = getTypeIndex(Boolean, prop.type);
                    const stringIndex = getTypeIndex(String, prop.type);
                    prop[0 /* shouldCast */ ] = booleanIndex > -1;
                    prop[1 /* shouldCastTrue */ ] = stringIndex < 0 || booleanIndex < stringIndex;
                    // if the prop needs boolean casting or default value
                    if (booleanIndex > -1 || _shared.hasOwn(prop, 'default')) needCastKeys.push(normalizedKey);
                }
            }
        }
    }
    const res = [
        normalized,
        needCastKeys
    ];
    cache.set(comp, res);
    return res;
}
function validatePropName(key) {
    if (key[0] !== '$') return true;
    else warn(`Invalid prop name: "${key}" is a reserved property.`);
    return false;
}
// use function string name to check type constructors
// so that it works across vms / iframes.
function getType(ctor) {
    const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : ctor === null ? 'null' : '';
}
function isSameType(a, b) {
    return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
    if (_shared.isArray(expectedTypes)) return expectedTypes.findIndex((t)=>isSameType(t, type)
    );
    else if (_shared.isFunction(expectedTypes)) return isSameType(expectedTypes, type) ? 0 : -1;
    return -1;
}
/**
 * dev only
 */ function validateProps(rawProps, props, instance) {
    const resolvedValues = _reactivity.toRaw(props);
    const options = instance.propsOptions[0];
    for(const key in options){
        let opt = options[key];
        if (opt == null) continue;
        validateProp(key, resolvedValues[key], opt, !_shared.hasOwn(rawProps, key) && !_shared.hasOwn(rawProps, _shared.hyphenate(key)));
    }
}
/**
 * dev only
 */ function validateProp(name, value, prop, isAbsent) {
    const { type , required , validator  } = prop;
    // required!
    if (required && isAbsent) {
        warn('Missing required prop: "' + name + '"');
        return;
    }
    // missing but optional
    if (value == null && !prop.required) return;
    // type check
    if (type != null && type !== true) {
        let isValid = false;
        const types = _shared.isArray(type) ? type : [
            type
        ];
        const expectedTypes = [];
        // value is valid as long as one of the specified types match
        for(let i = 0; i < types.length && !isValid; i++){
            const { valid , expectedType  } = assertType(value, types[i]);
            expectedTypes.push(expectedType || '');
            isValid = valid;
        }
        if (!isValid) {
            warn(getInvalidTypeMessage(name, value, expectedTypes));
            return;
        }
    }
    // custom validator
    if (validator && !validator(value)) warn('Invalid prop: custom validator check failed for prop "' + name + '".');
}
const isSimpleType = /*#__PURE__*/ _shared.makeMap('String,Number,Boolean,Function,Symbol,BigInt');
/**
 * dev only
 */ function assertType(value, type) {
    let valid;
    const expectedType = getType(type);
    if (isSimpleType(expectedType)) {
        const t = typeof value;
        valid = t === expectedType.toLowerCase();
        // for primitive wrapper objects
        if (!valid && t === 'object') valid = value instanceof type;
    } else if (expectedType === 'Object') valid = _shared.isObject(value);
    else if (expectedType === 'Array') valid = _shared.isArray(value);
    else if (expectedType === 'null') valid = value === null;
    else valid = value instanceof type;
    return {
        valid,
        expectedType
    };
}
/**
 * dev only
 */ function getInvalidTypeMessage(name, value, expectedTypes) {
    let message = `Invalid prop: type check failed for prop "${name}".` + ` Expected ${expectedTypes.map(_shared.capitalize).join(' | ')}`;
    const expectedType = expectedTypes[0];
    const receivedType = _shared.toRawType(value);
    const expectedValue = styleValue(value, expectedType);
    const receivedValue = styleValue(value, receivedType);
    // check if we need to specify expected value
    if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) message += ` with value ${expectedValue}`;
    message += `, got ${receivedType} `;
    // check if we need to specify received value
    if (isExplicable(receivedType)) message += `with value ${receivedValue}.`;
    return message;
}
/**
 * dev only
 */ function styleValue(value, type) {
    if (type === 'String') return `"${value}"`;
    else if (type === 'Number') return `${Number(value)}`;
    else return `${value}`;
}
/**
 * dev only
 */ function isExplicable(type) {
    const explicitTypes = [
        'string',
        'number',
        'boolean'
    ];
    return explicitTypes.some((elem)=>type.toLowerCase() === elem
    );
}
/**
 * dev only
 */ function isBoolean(...args) {
    return args.some((elem)=>elem.toLowerCase() === 'boolean'
    );
}
const isInternalKey = (key)=>key[0] === '_' || key === '$stable'
;
const normalizeSlotValue = (value)=>_shared.isArray(value) ? value.map(normalizeVNode) : [
        normalizeVNode(value)
    ]
;
const normalizeSlot = (key, rawSlot, ctx)=>{
    const normalized = withCtx((...args)=>{
        if (currentInstance) warn(`Slot "${key}" invoked outside of the render function: ` + `this will not track dependencies used in the slot. ` + `Invoke the slot function inside the render function instead.`);
        return normalizeSlotValue(rawSlot(...args));
    }, ctx);
    normalized._c = false;
    return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance)=>{
    const ctx = rawSlots._ctx;
    for(const key in rawSlots){
        if (isInternalKey(key)) continue;
        const value = rawSlots[key];
        if (_shared.isFunction(value)) slots[key] = normalizeSlot(key, value, ctx);
        else if (value != null) {
            warn(`Non-function value encountered for slot "${key}". ` + `Prefer function slots for better performance.`);
            const normalized = normalizeSlotValue(value);
            slots[key] = ()=>normalized
            ;
        }
    }
};
const normalizeVNodeSlots = (instance, children)=>{
    if (!isKeepAlive(instance.vnode) && true) warn(`Non-function value encountered for default slot. ` + `Prefer function slots for better performance.`);
    const normalized = normalizeSlotValue(children);
    instance.slots.default = ()=>normalized
    ;
};
const initSlots = (instance, children)=>{
    if (instance.vnode.shapeFlag & 32 /* SLOTS_CHILDREN */ ) {
        const type = children._;
        if (type) {
            // users can get the shallow readonly version of the slots object through `this.$slots`,
            // we should avoid the proxy object polluting the slots of the internal instance
            instance.slots = _reactivity.toRaw(children);
            // make compiler marker non-enumerable
            _shared.def(children, '_', type);
        } else normalizeObjectSlots(children, instance.slots = {
        });
    } else {
        instance.slots = {
        };
        if (children) normalizeVNodeSlots(instance, children);
    }
    _shared.def(instance.slots, InternalObjectKey, 1);
};
const updateSlots = (instance, children, optimized)=>{
    const { vnode , slots  } = instance;
    let needDeletionCheck = true;
    let deletionComparisonTarget = _shared.EMPTY_OBJ;
    if (vnode.shapeFlag & 32 /* SLOTS_CHILDREN */ ) {
        const type = children._;
        if (type) {
            // compiled slots.
            if (isHmrUpdating) // Parent was HMR updated so slot content may have changed.
            // force update slots and mark instance for hmr as well
            _shared.extend(slots, children);
            else if (optimized && type === 1 /* STABLE */ ) // compiled AND stable.
            // no need to update, and skip stale slots removal.
            needDeletionCheck = false;
            else {
                // compiled but dynamic (v-if/v-for on slots) - update slots, but skip
                // normalization.
                _shared.extend(slots, children);
                // #2893
                // when rendering the optimized slots by manually written render function,
                // we need to delete the `slots._` flag if necessary to make subsequent updates reliable,
                // i.e. let the `renderSlot` create the bailed Fragment
                if (!optimized && type === 1 /* STABLE */ ) delete slots._;
            }
        } else {
            needDeletionCheck = !children.$stable;
            normalizeObjectSlots(children, slots);
        }
        deletionComparisonTarget = children;
    } else if (children) {
        // non slot object children (direct value) passed to a component
        normalizeVNodeSlots(instance, children);
        deletionComparisonTarget = {
            default: 1
        };
    }
    // delete stale slots
    if (needDeletionCheck) {
        for(const key in slots)if (!isInternalKey(key) && !(key in deletionComparisonTarget)) delete slots[key];
    }
};
/**
Runtime helper for applying directives to a vnode. Example usage:

const comp = resolveComponent('comp')
const foo = resolveDirective('foo')
const bar = resolveDirective('bar')

return withDirectives(h(comp), [
  [foo, this.x],
  [bar, this.y]
])
*/ function validateDirectiveName(name) {
    if (_shared.isBuiltInDirective(name)) warn('Do not use built-in directive ids as custom directive id: ' + name);
}
/**
 * Adds directives to a VNode.
 */ function withDirectives(vnode, directives) {
    const internalInstance = currentRenderingInstance;
    if (internalInstance === null) {
        warn(`withDirectives can only be used inside render functions.`);
        return vnode;
    }
    const instance = internalInstance.proxy;
    const bindings = vnode.dirs || (vnode.dirs = []);
    for(let i = 0; i < directives.length; i++){
        let [dir, value, arg, modifiers = _shared.EMPTY_OBJ] = directives[i];
        if (_shared.isFunction(dir)) dir = {
            mounted: dir,
            updated: dir
        };
        if (dir.deep) traverse(value);
        bindings.push({
            dir,
            instance,
            value,
            oldValue: void 0,
            arg,
            modifiers
        });
    }
    return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
    const bindings = vnode.dirs;
    const oldBindings = prevVNode && prevVNode.dirs;
    for(let i = 0; i < bindings.length; i++){
        const binding = bindings[i];
        if (oldBindings) binding.oldValue = oldBindings[i].value;
        let hook = binding.dir[name];
        if (hook) {
            // disable tracking inside all lifecycle hooks
            // since they can potentially be called inside effects.
            _reactivity.pauseTracking();
            callWithAsyncErrorHandling(hook, instance, 8 /* DIRECTIVE_HOOK */ , [
                vnode.el,
                binding,
                vnode,
                prevVNode
            ]);
            _reactivity.resetTracking();
        }
    }
}
function createAppContext() {
    return {
        app: null,
        config: {
            isNativeTag: _shared.NO,
            performance: false,
            globalProperties: {
            },
            optionMergeStrategies: {
            },
            errorHandler: undefined,
            warnHandler: undefined,
            compilerOptions: {
            }
        },
        mixins: [],
        components: {
        },
        directives: {
        },
        provides: Object.create(null),
        optionsCache: new WeakMap(),
        propsCache: new WeakMap(),
        emitsCache: new WeakMap()
    };
}
let uid = 0;
function createAppAPI(render, hydrate) {
    return function createApp(rootComponent, rootProps = null) {
        if (rootProps != null && !_shared.isObject(rootProps)) {
            warn(`root props passed to app.mount() must be an object.`);
            rootProps = null;
        }
        const context = createAppContext();
        const installedPlugins = new Set();
        let isMounted = false;
        const app = context.app = {
            _uid: uid++,
            _component: rootComponent,
            _props: rootProps,
            _container: null,
            _context: context,
            _instance: null,
            version,
            get config () {
                return context.config;
            },
            set config (v){
                warn(`app.config cannot be replaced. Modify individual options instead.`);
            },
            use (plugin, ...options) {
                if (installedPlugins.has(plugin)) warn(`Plugin has already been applied to target app.`);
                else if (plugin && _shared.isFunction(plugin.install)) {
                    installedPlugins.add(plugin);
                    plugin.install(app, ...options);
                } else if (_shared.isFunction(plugin)) {
                    installedPlugins.add(plugin);
                    plugin(app, ...options);
                } else warn(`A plugin must either be a function or an object with an "install" ` + `function.`);
                return app;
            },
            mixin (mixin) {
                if (__VUE_OPTIONS_API__) {
                    if (!context.mixins.includes(mixin)) context.mixins.push(mixin);
                    else warn('Mixin has already been applied to target app' + (mixin.name ? `: ${mixin.name}` : ''));
                } else warn('Mixins are only available in builds supporting Options API');
                return app;
            },
            component (name, component) {
                validateComponentName(name, context.config);
                if (!component) return context.components[name];
                if (context.components[name]) warn(`Component "${name}" has already been registered in target app.`);
                context.components[name] = component;
                return app;
            },
            directive (name, directive) {
                validateDirectiveName(name);
                if (!directive) return context.directives[name];
                if (context.directives[name]) warn(`Directive "${name}" has already been registered in target app.`);
                context.directives[name] = directive;
                return app;
            },
            mount (rootContainer, isHydrate, isSVG) {
                if (!isMounted) {
                    const vnode = createVNode(rootComponent, rootProps);
                    // store app context on the root VNode.
                    // this will be set on the root instance on initial mount.
                    vnode.appContext = context;
                    context.reload = ()=>{
                        render(cloneVNode(vnode), rootContainer, isSVG);
                    };
                    if (isHydrate && hydrate) hydrate(vnode, rootContainer);
                    else render(vnode, rootContainer, isSVG);
                    isMounted = true;
                    app._container = rootContainer;
                    rootContainer.__vue_app__ = app;
                    app._instance = vnode.component;
                    devtoolsInitApp(app, version);
                    return getExposeProxy(vnode.component) || vnode.component.proxy;
                } else warn(`App has already been mounted.\n` + `If you want to remount the same app, move your app creation logic ` + `into a factory function and create fresh app instances for each ` + `mount - e.g. \`const createMyApp = () => createApp(App)\``);
            },
            unmount () {
                if (isMounted) {
                    render(null, app._container);
                    app._instance = null;
                    devtoolsUnmountApp(app);
                    delete app._container.__vue_app__;
                } else warn(`Cannot unmount an app that is not mounted.`);
            },
            provide (key, value) {
                if (key in context.provides) warn(`App already provides property with key "${String(key)}". ` + `It will be overwritten with the new value.`);
                // TypeScript doesn't allow symbols as index type
                // https://github.com/Microsoft/TypeScript/issues/24587
                context.provides[key] = value;
                return app;
            }
        };
        return app;
    };
}
/**
 * Function for handling a template ref
 */ function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
    if (_shared.isArray(rawRef)) {
        rawRef.forEach((r, i)=>setRef(r, oldRawRef && (_shared.isArray(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount)
        );
        return;
    }
    if (isAsyncWrapper(vnode) && !isUnmount) // when mounting async components, nothing needs to be done,
    // because the template ref is forwarded to inner component
    return;
    const refValue = vnode.shapeFlag & 4 /* STATEFUL_COMPONENT */  ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
    const value = isUnmount ? null : refValue;
    const { i: owner , r: ref  } = rawRef;
    if (!owner) {
        warn(`Missing ref owner context. ref cannot be used on hoisted vnodes. ` + `A vnode with ref must be created inside the render function.`);
        return;
    }
    const oldRef = oldRawRef && oldRawRef.r;
    const refs = owner.refs === _shared.EMPTY_OBJ ? owner.refs = {
    } : owner.refs;
    const setupState = owner.setupState;
    // dynamic ref changed. unset old ref
    if (oldRef != null && oldRef !== ref) {
        if (_shared.isString(oldRef)) {
            refs[oldRef] = null;
            if (_shared.hasOwn(setupState, oldRef)) setupState[oldRef] = null;
        } else if (_reactivity.isRef(oldRef)) oldRef.value = null;
    }
    if (_shared.isFunction(ref)) callWithErrorHandling(ref, owner, 12 /* FUNCTION_REF */ , [
        value,
        refs
    ]);
    else {
        const _isString = _shared.isString(ref);
        const _isRef = _reactivity.isRef(ref);
        if (_isString || _isRef) {
            const doSet = ()=>{
                if (rawRef.f) {
                    const existing = _isString ? refs[ref] : ref.value;
                    if (isUnmount) _shared.isArray(existing) && _shared.remove(existing, refValue);
                    else {
                        if (!_shared.isArray(existing)) {
                            if (_isString) refs[ref] = [
                                refValue
                            ];
                            else {
                                ref.value = [
                                    refValue
                                ];
                                if (rawRef.k) refs[rawRef.k] = ref.value;
                            }
                        } else if (!existing.includes(refValue)) existing.push(refValue);
                    }
                } else if (_isString) {
                    refs[ref] = value;
                    if (_shared.hasOwn(setupState, ref)) setupState[ref] = value;
                } else if (_reactivity.isRef(ref)) {
                    ref.value = value;
                    if (rawRef.k) refs[rawRef.k] = value;
                } else warn('Invalid template ref type:', ref, `(${typeof ref})`);
            };
            if (value) {
                doSet.id = -1;
                queuePostRenderEffect(doSet, parentSuspense);
            } else doSet();
        } else warn('Invalid template ref type:', ref, `(${typeof ref})`);
    }
}
let hasMismatch = false;
const isSVGContainer = (container)=>/svg/.test(container.namespaceURI) && container.tagName !== 'foreignObject'
;
const isComment = (node)=>node.nodeType === 8 /* COMMENT */ 
;
// Note: hydration is DOM-specific
// But we have to place it in core due to tight coupling with core - splitting
// it out creates a ton of unnecessary complexity.
// Hydration also depends on some renderer internal logic which needs to be
// passed in via arguments.
function createHydrationFunctions(rendererInternals) {
    const { mt: mountComponent , p: patch , o: { patchProp , nextSibling , parentNode , remove , insert , createComment  }  } = rendererInternals;
    const hydrate = (vnode, container)=>{
        if (!container.hasChildNodes()) {
            warn(`Attempting to hydrate existing markup but container is empty. ` + `Performing full mount instead.`);
            patch(null, vnode, container);
            flushPostFlushCbs();
            return;
        }
        hasMismatch = false;
        hydrateNode(container.firstChild, vnode, null, null, null);
        flushPostFlushCbs();
        if (hasMismatch && true) // this error should show up in production
        console.error(`Hydration completed but contains mismatches.`);
    };
    const hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = false)=>{
        const isFragmentStart = isComment(node) && node.data === '[';
        const onMismatch = ()=>handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragmentStart)
        ;
        const { type , ref , shapeFlag  } = vnode;
        const domType = node.nodeType;
        vnode.el = node;
        let nextNode = null;
        switch(type){
            case Text:
                if (domType !== 3 /* TEXT */ ) nextNode = onMismatch();
                else {
                    if (node.data !== vnode.children) {
                        hasMismatch = true;
                        warn(`Hydration text mismatch:` + `\n- Client: ${JSON.stringify(node.data)}` + `\n- Server: ${JSON.stringify(vnode.children)}`);
                        node.data = vnode.children;
                    }
                    nextNode = nextSibling(node);
                }
                break;
            case Comment:
                if (domType !== 8 /* COMMENT */  || isFragmentStart) nextNode = onMismatch();
                else nextNode = nextSibling(node);
                break;
            case Static:
                if (domType !== 1 /* ELEMENT */ ) nextNode = onMismatch();
                else {
                    // determine anchor, adopt content
                    nextNode = node;
                    // if the static vnode has its content stripped during build,
                    // adopt it from the server-rendered HTML.
                    const needToAdoptContent = !vnode.children.length;
                    for(let i = 0; i < vnode.staticCount; i++){
                        if (needToAdoptContent) vnode.children += nextNode.outerHTML;
                        if (i === vnode.staticCount - 1) vnode.anchor = nextNode;
                        nextNode = nextSibling(nextNode);
                    }
                    return nextNode;
                }
                break;
            case Fragment:
                if (!isFragmentStart) nextNode = onMismatch();
                else nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
                break;
            default:
                if (shapeFlag & 1 /* ELEMENT */ ) {
                    if (domType !== 1 /* ELEMENT */  || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) nextNode = onMismatch();
                    else nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
                } else if (shapeFlag & 6 /* COMPONENT */ ) {
                    // when setting up the render effect, if the initial vnode already
                    // has .el set, the component will perform hydration instead of mount
                    // on its sub-tree.
                    vnode.slotScopeIds = slotScopeIds;
                    const container = parentNode(node);
                    mountComponent(vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), optimized);
                    // component may be async, so in the case of fragments we cannot rely
                    // on component's rendered output to determine the end of the fragment
                    // instead, we do a lookahead to find the end anchor node.
                    nextNode = isFragmentStart ? locateClosingAsyncAnchor(node) : nextSibling(node);
                    // #3787
                    // if component is async, it may get moved / unmounted before its
                    // inner component is loaded, so we need to give it a placeholder
                    // vnode that matches its adopted DOM.
                    if (isAsyncWrapper(vnode)) {
                        let subTree;
                        if (isFragmentStart) {
                            subTree = createVNode(Fragment);
                            subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
                        } else subTree = node.nodeType === 3 ? createTextVNode('') : createVNode('div');
                        subTree.el = node;
                        vnode.component.subTree = subTree;
                    }
                } else if (shapeFlag & 64 /* TELEPORT */ ) {
                    if (domType !== 8 /* COMMENT */ ) nextNode = onMismatch();
                    else nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, rendererInternals, hydrateChildren);
                } else if (shapeFlag & 128 /* SUSPENSE */ ) nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, isSVGContainer(parentNode(node)), slotScopeIds, optimized, rendererInternals, hydrateNode);
                else warn('Invalid HostVNode type:', type, `(${typeof type})`);
        }
        if (ref != null) setRef(ref, null, parentSuspense, vnode);
        return nextNode;
    };
    const hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized)=>{
        optimized = optimized || !!vnode.dynamicChildren;
        const { type , props , patchFlag , shapeFlag , dirs  } = vnode;
        // #4006 for form elements with non-string v-model value bindings
        // e.g. <option :value="obj">, <input type="checkbox" :true-value="1">
        const forcePatchValue = type === 'input' && dirs || type === 'option';
        // skip props & children if this is hoisted static nodes
        if (forcePatchValue || patchFlag !== -1 /* HOISTED */ ) {
            if (dirs) invokeDirectiveHook(vnode, null, parentComponent, 'created');
            // props
            if (props) {
                if (forcePatchValue || !optimized || patchFlag & 48 /* HYDRATE_EVENTS */ ) {
                    for(const key in props)if (forcePatchValue && key.endsWith('value') || _shared.isOn(key) && !_shared.isReservedProp(key)) patchProp(el, key, null, props[key], false, undefined, parentComponent);
                } else if (props.onClick) // Fast path for click listeners (which is most often) to avoid
                // iterating through props.
                patchProp(el, 'onClick', null, props.onClick, false, undefined, parentComponent);
            }
            // vnode / directive hooks
            let vnodeHooks;
            if (vnodeHooks = props && props.onVnodeBeforeMount) invokeVNodeHook(vnodeHooks, parentComponent, vnode);
            if (dirs) invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
            if ((vnodeHooks = props && props.onVnodeMounted) || dirs) queueEffectWithSuspense(()=>{
                vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
                dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
            }, parentSuspense);
            // children
            if (shapeFlag & 16 /* ARRAY_CHILDREN */  && // skip if element has innerHTML / textContent
            !(props && (props.innerHTML || props.textContent))) {
                let next = hydrateChildren(el.firstChild, vnode, el, parentComponent, parentSuspense, slotScopeIds, optimized);
                let hasWarned1 = false;
                while(next){
                    hasMismatch = true;
                    if (!hasWarned1) {
                        warn(`Hydration children mismatch in <${vnode.type}>: ` + `server rendered element contains more child nodes than client vdom.`);
                        hasWarned1 = true;
                    }
                    // The SSRed DOM contains more nodes than it should. Remove them.
                    const cur = next;
                    next = next.nextSibling;
                    remove(cur);
                }
            } else if (shapeFlag & 8 /* TEXT_CHILDREN */ ) {
                if (el.textContent !== vnode.children) {
                    hasMismatch = true;
                    warn(`Hydration text content mismatch in <${vnode.type}>:\n` + `- Client: ${el.textContent}\n` + `- Server: ${vnode.children}`);
                    el.textContent = vnode.children;
                }
            }
        }
        return el.nextSibling;
    };
    const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized)=>{
        optimized = optimized || !!parentVNode.dynamicChildren;
        const children = parentVNode.children;
        const l = children.length;
        let hasWarned2 = false;
        for(let i = 0; i < l; i++){
            const vnode = optimized ? children[i] : children[i] = normalizeVNode(children[i]);
            if (node) node = hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
            else if (vnode.type === Text && !vnode.children) continue;
            else {
                hasMismatch = true;
                if (!hasWarned2) {
                    warn(`Hydration children mismatch in <${container.tagName.toLowerCase()}>: ` + `server rendered element contains fewer child nodes than client vdom.`);
                    hasWarned2 = true;
                }
                // the SSRed DOM didn't contain enough nodes. Mount the missing ones.
                patch(null, vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
            }
        }
        return node;
    };
    const hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized)=>{
        const { slotScopeIds: fragmentSlotScopeIds  } = vnode;
        if (fragmentSlotScopeIds) slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
        const container = parentNode(node);
        const next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, slotScopeIds, optimized);
        if (next && isComment(next) && next.data === ']') return nextSibling(vnode.anchor = next);
        else {
            // fragment didn't hydrate successfully, since we didn't get a end anchor
            // back. This should have led to node/children mismatch warnings.
            hasMismatch = true;
            // since the anchor is missing, we need to create one and insert it
            insert(vnode.anchor = createComment(`]`), container, next);
            return next;
        }
    };
    const handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment)=>{
        hasMismatch = true;
        warn(`Hydration node mismatch:\n- Client vnode:`, vnode.type, `\n- Server rendered DOM:`, node, node.nodeType === 3 /* TEXT */  ? `(text)` : isComment(node) && node.data === '[' ? `(start of fragment)` : ``);
        vnode.el = null;
        if (isFragment) {
            // remove excessive fragment nodes
            const end = locateClosingAsyncAnchor(node);
            while(true){
                const next = nextSibling(node);
                if (next && next !== end) remove(next);
                else break;
            }
        }
        const next = nextSibling(node);
        const container = parentNode(node);
        remove(node);
        patch(null, vnode, container, next, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
        return next;
    };
    const locateClosingAsyncAnchor = (node)=>{
        let match = 0;
        while(node){
            node = nextSibling(node);
            if (node && isComment(node)) {
                if (node.data === '[') match++;
                if (node.data === ']') {
                    if (match === 0) return nextSibling(node);
                    else match--;
                }
            }
        }
        return node;
    };
    return [
        hydrate,
        hydrateNode
    ];
}
/* eslint-disable no-restricted-globals */ let supported;
let perf;
function startMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) perf.mark(`vue-${type}-${instance.uid}`);
    devtoolsPerfStart(instance, type, supported ? perf.now() : Date.now());
}
function endMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
        const startTag = `vue-${type}-${instance.uid}`;
        const endTag = startTag + `:end`;
        perf.mark(endTag);
        perf.measure(`<${formatComponentName(instance, instance.type)}> ${type}`, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
    }
    devtoolsPerfEnd(instance, type, supported ? perf.now() : Date.now());
}
function isSupported() {
    if (supported !== undefined) return supported;
    if (typeof window !== 'undefined' && window.performance) {
        supported = true;
        perf = window.performance;
    } else supported = false;
    return supported;
}
/**
 * This is only called in esm-bundler builds.
 * It is called when a renderer is created, in `baseCreateRenderer` so that
 * importing runtime-core is side-effects free.
 *
 * istanbul-ignore-next
 */ function initFeatureFlags() {
    const needWarn = [];
    if (typeof __VUE_OPTIONS_API__ !== 'boolean') {
        needWarn.push(`__VUE_OPTIONS_API__`);
        _shared.getGlobalThis().__VUE_OPTIONS_API__ = true;
    }
    if (typeof __VUE_PROD_DEVTOOLS__ !== 'boolean') {
        needWarn.push(`__VUE_PROD_DEVTOOLS__`);
        _shared.getGlobalThis().__VUE_PROD_DEVTOOLS__ = false;
    }
    if (needWarn.length) {
        const multi = needWarn.length > 1;
        console.warn(`Feature flag${multi ? `s` : ``} ${needWarn.join(', ')} ${multi ? `are` : `is`} not explicitly defined. You are running the esm-bundler build of Vue, ` + `which expects these compile-time feature flags to be globally injected ` + `via the bundler config in order to get better tree-shaking in the ` + `production bundle.\n\n` + `For more details, see https://link.vuejs.org/feature-flags.`);
    }
}
const queuePostRenderEffect = queueEffectWithSuspense;
/**
 * The createRenderer function accepts two generic arguments:
 * HostNode and HostElement, corresponding to Node and Element types in the
 * host environment. For example, for runtime-dom, HostNode would be the DOM
 * `Node` interface and HostElement would be the DOM `Element` interface.
 *
 * Custom renderers can pass in the platform specific types like this:
 *
 * ``` js
 * const { render, createApp } = createRenderer<Node, Element>({
 *   patchProp,
 *   ...nodeOps
 * })
 * ```
 */ function createRenderer(options) {
    return baseCreateRenderer(options);
}
// Separate API for creating hydration-enabled renderer.
// Hydration logic is only used when calling this function, making it
// tree-shakable.
function createHydrationRenderer(options) {
    return baseCreateRenderer(options, createHydrationFunctions);
}
// implementation
function baseCreateRenderer(options, createHydrationFns) {
    initFeatureFlags();
    const target = _shared.getGlobalThis();
    target.__VUE__ = true;
    setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
    const { insert: hostInsert , remove: hostRemove , patchProp: hostPatchProp , createElement: hostCreateElement , createText: hostCreateText , createComment: hostCreateComment , setText: hostSetText , setElementText: hostSetElementText , parentNode: hostParentNode , nextSibling: hostNextSibling , setScopeId: hostSetScopeId = _shared.NOOP , cloneNode: hostCloneNode , insertStaticContent: hostInsertStaticContent  } = options;
    // Note: functions inside this closure should use `const xxx = () => {}`
    // style in order to prevent being inlined by minifiers.
    const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = isHmrUpdating ? false : !!n2.dynamicChildren)=>{
        if (n1 === n2) return;
        // patching & not same type, unmount old tree
        if (n1 && !isSameVNodeType(n1, n2)) {
            anchor = getNextHostNode(n1);
            unmount(n1, parentComponent, parentSuspense, true);
            n1 = null;
        }
        if (n2.patchFlag === -2 /* BAIL */ ) {
            optimized = false;
            n2.dynamicChildren = null;
        }
        const { type , ref , shapeFlag  } = n2;
        switch(type){
            case Text:
                processText(n1, n2, container, anchor);
                break;
            case Comment:
                processCommentNode(n1, n2, container, anchor);
                break;
            case Static:
                if (n1 == null) mountStaticNode(n2, container, anchor, isSVG);
                else patchStaticNode(n1, n2, container, isSVG);
                break;
            case Fragment:
                processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                break;
            default:
                if (shapeFlag & 1 /* ELEMENT */ ) processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                else if (shapeFlag & 6 /* COMPONENT */ ) processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                else if (shapeFlag & 64 /* TELEPORT */ ) type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
                else if (shapeFlag & 128 /* SUSPENSE */ ) type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
                else warn('Invalid VNode type:', type, `(${typeof type})`);
        }
        // set ref
        if (ref != null && parentComponent) setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    };
    const processText = (n1, n2, container, anchor)=>{
        if (n1 == null) hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
        else {
            const el = n2.el = n1.el;
            if (n2.children !== n1.children) hostSetText(el, n2.children);
        }
    };
    const processCommentNode = (n1, n2, container, anchor)=>{
        if (n1 == null) hostInsert(n2.el = hostCreateComment(n2.children || ''), container, anchor);
        else // there's no support for dynamic comments
        n2.el = n1.el;
    };
    const mountStaticNode = (n2, container, anchor, isSVG)=>{
        [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG, n2.el, n2.anchor);
    };
    /**
     * Dev / HMR only
     */ const patchStaticNode = (n1, n2, container, isSVG)=>{
        // static nodes are only patched during dev for HMR
        if (n2.children !== n1.children) {
            const anchor = hostNextSibling(n1.anchor);
            // remove existing
            removeStaticNode(n1);
            [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG);
        } else {
            n2.el = n1.el;
            n2.anchor = n1.anchor;
        }
    };
    const moveStaticNode = ({ el , anchor  }, container, nextSibling)=>{
        let next;
        while(el && el !== anchor){
            next = hostNextSibling(el);
            hostInsert(el, container, nextSibling);
            el = next;
        }
        hostInsert(anchor, container, nextSibling);
    };
    const removeStaticNode = ({ el , anchor  })=>{
        let next;
        while(el && el !== anchor){
            next = hostNextSibling(el);
            hostRemove(el);
            el = next;
        }
        hostRemove(anchor);
    };
    const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)=>{
        isSVG = isSVG || n2.type === 'svg';
        if (n1 == null) mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        else patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    };
    const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)=>{
        let el;
        let vnodeHook;
        const { type , props , shapeFlag , transition , patchFlag , dirs  } = vnode;
        el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props);
        // mount children first, since some props may rely on child content
        // being already rendered, e.g. `<select value>`
        if (shapeFlag & 8 /* TEXT_CHILDREN */ ) hostSetElementText(el, vnode.children);
        else if (shapeFlag & 16 /* ARRAY_CHILDREN */ ) mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== 'foreignObject', slotScopeIds, optimized);
        if (dirs) invokeDirectiveHook(vnode, null, parentComponent, 'created');
        // props
        if (props) {
            for(const key in props)if (key !== 'value' && !_shared.isReservedProp(key)) hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
            /**
                 * Special case for setting value on DOM elements:
                 * - it can be order-sensitive (e.g. should be set *after* min/max, #2325, #4024)
                 * - it needs to be forced (#1471)
                 * #2353 proposes adding another renderer option to configure this, but
                 * the properties affects are so finite it is worth special casing it
                 * here to reduce the complexity. (Special casing it also should not
                 * affect non-DOM renderers)
                 */ if ('value' in props) hostPatchProp(el, 'value', null, props.value);
            if (vnodeHook = props.onVnodeBeforeMount) invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
        // scopeId
        setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
        Object.defineProperty(el, '__vnode', {
            value: vnode,
            enumerable: false
        });
        Object.defineProperty(el, '__vueParentComponent', {
            value: parentComponent,
            enumerable: false
        });
        if (dirs) invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
        // #1583 For inside suspense + suspense not resolved case, enter hook should call when suspense resolved
        // #1689 For inside suspense + suspense resolved case, just call it
        const needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
        if (needCallTransitionHooks) transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) queuePostRenderEffect(()=>{
            vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
            needCallTransitionHooks && transition.enter(el);
            dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
        }, parentSuspense);
    };
    const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent)=>{
        if (scopeId) hostSetScopeId(el, scopeId);
        if (slotScopeIds) for(let i = 0; i < slotScopeIds.length; i++)hostSetScopeId(el, slotScopeIds[i]);
        if (parentComponent) {
            let subTree = parentComponent.subTree;
            if (subTree.patchFlag > 0 && subTree.patchFlag & 2048 /* DEV_ROOT_FRAGMENT */ ) subTree = filterSingleRoot(subTree.children) || subTree;
            if (vnode === subTree) {
                const parentVNode = parentComponent.vnode;
                setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
            }
        }
    };
    const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start = 0)=>{
        for(let i = start; i < children.length; i++){
            const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
            patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
    };
    const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)=>{
        const el = n2.el = n1.el;
        let { patchFlag , dynamicChildren , dirs  } = n2;
        // #1426 take the old vnode's patch flag into account since user may clone a
        // compiler-generated vnode, which de-opts to FULL_PROPS
        patchFlag |= n1.patchFlag & 16 /* FULL_PROPS */ ;
        const oldProps = n1.props || _shared.EMPTY_OBJ;
        const newProps = n2.props || _shared.EMPTY_OBJ;
        let vnodeHook;
        // disable recurse in beforeUpdate hooks
        parentComponent && toggleRecurse(parentComponent, false);
        if (vnodeHook = newProps.onVnodeBeforeUpdate) invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        if (dirs) invokeDirectiveHook(n2, n1, parentComponent, 'beforeUpdate');
        parentComponent && toggleRecurse(parentComponent, true);
        if (isHmrUpdating) {
            // HMR updated, force full diff
            patchFlag = 0;
            optimized = false;
            dynamicChildren = null;
        }
        const areChildrenSVG = isSVG && n2.type !== 'foreignObject';
        if (dynamicChildren) {
            patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);
            if (parentComponent && parentComponent.type.__hmrId) traverseStaticChildren(n1, n2);
        } else if (!optimized) // full diff
        patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
        if (patchFlag > 0) {
            // the presence of a patchFlag means this element's render code was
            // generated by the compiler and can take the fast path.
            // in this path old node and new node are guaranteed to have the same shape
            // (i.e. at the exact same position in the source template)
            if (patchFlag & 16 /* FULL_PROPS */ ) // element props contain dynamic keys, full diff needed
            patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
            else {
                // class
                // this flag is matched when the element has dynamic class bindings.
                if (patchFlag & 2 /* CLASS */ ) {
                    if (oldProps.class !== newProps.class) hostPatchProp(el, 'class', null, newProps.class, isSVG);
                }
                // style
                // this flag is matched when the element has dynamic style bindings
                if (patchFlag & 4 /* STYLE */ ) hostPatchProp(el, 'style', oldProps.style, newProps.style, isSVG);
                // props
                // This flag is matched when the element has dynamic prop/attr bindings
                // other than class and style. The keys of dynamic prop/attrs are saved for
                // faster iteration.
                // Note dynamic keys like :[foo]="bar" will cause this optimization to
                // bail out and go through a full diff because we need to unset the old key
                if (patchFlag & 8 /* PROPS */ ) {
                    // if the flag is present then dynamicProps must be non-null
                    const propsToUpdate = n2.dynamicProps;
                    for(let i = 0; i < propsToUpdate.length; i++){
                        const key = propsToUpdate[i];
                        const prev = oldProps[key];
                        const next = newProps[key];
                        // #1471 force patch value
                        if (next !== prev || key === 'value') hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
                    }
                }
            }
            // text
            // This flag is matched when the element has only dynamic text children.
            if (patchFlag & 1 /* TEXT */ ) {
                if (n1.children !== n2.children) hostSetElementText(el, n2.children);
            }
        } else if (!optimized && dynamicChildren == null) // unoptimized, full diff
        patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
        if ((vnodeHook = newProps.onVnodeUpdated) || dirs) queuePostRenderEffect(()=>{
            vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
            dirs && invokeDirectiveHook(n2, n1, parentComponent, 'updated');
        }, parentSuspense);
    };
    // The fast path for blocks.
    const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds)=>{
        for(let i = 0; i < newChildren.length; i++){
            const oldVNode = oldChildren[i];
            const newVNode = newChildren[i];
            // Determine the container (parent element) for the patch.
            const container = // oldVNode may be an errored async setup() component inside Suspense
            // which will not have a mounted element
            oldVNode.el && (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
            // which also requires the correct parent container
            !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
            oldVNode.shapeFlag & 70 /* TELEPORT */ ) ? hostParentNode(oldVNode.el) : // just pass the block element here to avoid a DOM parentNode call.
            fallbackContainer;
            patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
        }
    };
    const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG)=>{
        if (oldProps !== newProps) {
            for(const key in newProps){
                // empty string is not valid prop
                if (_shared.isReservedProp(key)) continue;
                const next = newProps[key];
                const prev = oldProps[key];
                // defer patching value
                if (next !== prev && key !== 'value') hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
            }
            if (oldProps !== _shared.EMPTY_OBJ) {
                for(const key in oldProps)if (!_shared.isReservedProp(key) && !(key in newProps)) hostPatchProp(el, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
            }
            if ('value' in newProps) hostPatchProp(el, 'value', oldProps.value, newProps.value);
        }
    };
    const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)=>{
        const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText('');
        const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText('');
        let { patchFlag , dynamicChildren , slotScopeIds: fragmentSlotScopeIds  } = n2;
        if (isHmrUpdating) {
            // HMR updated, force full diff
            patchFlag = 0;
            optimized = false;
            dynamicChildren = null;
        }
        // check if this is a slot fragment with :slotted scope ids
        if (fragmentSlotScopeIds) slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
        if (n1 == null) {
            hostInsert(fragmentStartAnchor, container, anchor);
            hostInsert(fragmentEndAnchor, container, anchor);
            // a fragment can only have array children
            // since they are either generated by the compiler, or implicitly created
            // from arrays.
            mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (patchFlag > 0 && patchFlag & 64 /* STABLE_FRAGMENT */  && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
        // of renderSlot() with no valid children
        n1.dynamicChildren) {
            // a stable fragment (template root or <template v-for>) doesn't need to
            // patch children order, but it may contain dynamicChildren.
            patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);
            if (parentComponent && parentComponent.type.__hmrId) traverseStaticChildren(n1, n2);
            else if (// #2080 if the stable fragment has a key, it's a <template v-for> that may
            //  get moved around. Make sure all root level vnodes inherit el.
            // #2134 or if it's a component root, it may also get moved around
            // as the component is being moved.
            n2.key != null || parentComponent && n2 === parentComponent.subTree) traverseStaticChildren(n1, n2, true);
        } else // keyed / unkeyed, or manual fragments.
        // for keyed & unkeyed, since they are compiler generated from v-for,
        // each child is guaranteed to be a block so the fragment will never
        // have dynamicChildren.
        patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    };
    const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)=>{
        n2.slotScopeIds = slotScopeIds;
        if (n1 == null) {
            if (n2.shapeFlag & 512 /* COMPONENT_KEPT_ALIVE */ ) parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
            else mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
        } else updateComponent(n1, n2, optimized);
    };
    const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized)=>{
        const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
        if (instance.type.__hmrId) registerHMR(instance);
        pushWarningContext(initialVNode);
        startMeasure(instance, `mount`);
        // inject renderer internals for keepAlive
        if (isKeepAlive(initialVNode)) instance.ctx.renderer = internals;
        startMeasure(instance, `init`);
        setupComponent(instance);
        endMeasure(instance, `init`);
        // setup() is async. This component relies on async logic to be resolved
        // before proceeding
        if (instance.asyncDep) {
            parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
            // Give it a placeholder if this is not hydration
            // TODO handle self-defined fallback
            if (!initialVNode.el) {
                const placeholder = instance.subTree = createVNode(Comment);
                processCommentNode(null, placeholder, container, anchor);
            }
            return;
        }
        setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
        popWarningContext();
        endMeasure(instance, `mount`);
    };
    const updateComponent = (n1, n2, optimized)=>{
        const instance = n2.component = n1.component;
        if (shouldUpdateComponent(n1, n2, optimized)) {
            if (instance.asyncDep && !instance.asyncResolved) {
                pushWarningContext(n2);
                updateComponentPreRender(instance, n2, optimized);
                popWarningContext();
                return;
            } else {
                // normal update
                instance.next = n2;
                // in case the child component is also queued, remove it to avoid
                // double updating the same child component in the same flush.
                invalidateJob(instance.update);
                // instance.update is the reactive effect.
                instance.update();
            }
        } else {
            // no update needed. just copy over properties
            n2.component = n1.component;
            n2.el = n1.el;
            instance.vnode = n2;
        }
    };
    const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized)=>{
        const componentUpdateFn = ()=>{
            if (!instance.isMounted) {
                let vnodeHook;
                const { el , props  } = initialVNode;
                const { bm , m , parent  } = instance;
                const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
                toggleRecurse(instance, false);
                // beforeMount hook
                if (bm) _shared.invokeArrayFns(bm);
                // onVnodeBeforeMount
                if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) invokeVNodeHook(vnodeHook, parent, initialVNode);
                toggleRecurse(instance, true);
                if (el && hydrateNode) {
                    // vnode has adopted host node - perform hydration instead of mount.
                    const hydrateSubTree = ()=>{
                        startMeasure(instance, `render`);
                        instance.subTree = renderComponentRoot(instance);
                        endMeasure(instance, `render`);
                        startMeasure(instance, `hydrate`);
                        hydrateNode(el, instance.subTree, instance, parentSuspense, null);
                        endMeasure(instance, `hydrate`);
                    };
                    if (isAsyncWrapperVNode) initialVNode.type.__asyncLoader().then(// note: we are moving the render call into an async callback,
                    // which means it won't track dependencies - but it's ok because
                    // a server-rendered async wrapper is already in resolved state
                    // and it will never need to change.
                    ()=>!instance.isUnmounted && hydrateSubTree()
                    );
                    else hydrateSubTree();
                } else {
                    startMeasure(instance, `render`);
                    const subTree = instance.subTree = renderComponentRoot(instance);
                    endMeasure(instance, `render`);
                    startMeasure(instance, `patch`);
                    patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
                    endMeasure(instance, `patch`);
                    initialVNode.el = subTree.el;
                }
                // mounted hook
                if (m) queuePostRenderEffect(m, parentSuspense);
                // onVnodeMounted
                if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
                    const scopedInitialVNode = initialVNode;
                    queuePostRenderEffect(()=>invokeVNodeHook(vnodeHook, parent, scopedInitialVNode)
                    , parentSuspense);
                }
                // activated hook for keep-alive roots.
                // #1742 activated hook must be accessed after first render
                // since the hook may be injected by a child keep-alive
                if (initialVNode.shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */ ) instance.a && queuePostRenderEffect(instance.a, parentSuspense);
                instance.isMounted = true;
                devtoolsComponentAdded(instance);
                // #2458: deference mount-only object parameters to prevent memleaks
                initialVNode = container = anchor = null;
            } else {
                // updateComponent
                // This is triggered by mutation of component's own state (next: null)
                // OR parent calling processComponent (next: VNode)
                let { next , bu , u , parent , vnode  } = instance;
                let originNext = next;
                let vnodeHook;
                pushWarningContext(next || instance.vnode);
                // Disallow component effect recursion during pre-lifecycle hooks.
                toggleRecurse(instance, false);
                if (next) {
                    next.el = vnode.el;
                    updateComponentPreRender(instance, next, optimized);
                } else next = vnode;
                // beforeUpdate hook
                if (bu) _shared.invokeArrayFns(bu);
                // onVnodeBeforeUpdate
                if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) invokeVNodeHook(vnodeHook, parent, next, vnode);
                toggleRecurse(instance, true);
                startMeasure(instance, `render`);
                const nextTree = renderComponentRoot(instance);
                endMeasure(instance, `render`);
                const prevTree = instance.subTree;
                instance.subTree = nextTree;
                startMeasure(instance, `patch`);
                patch(prevTree, nextTree, // parent may have changed if it's in a teleport
                hostParentNode(prevTree.el), // anchor may have changed if it's in a fragment
                getNextHostNode(prevTree), instance, parentSuspense, isSVG);
                endMeasure(instance, `patch`);
                next.el = nextTree.el;
                if (originNext === null) // self-triggered update. In case of HOC, update parent component
                // vnode el. HOC is indicated by parent instance's subTree pointing
                // to child component's vnode
                updateHOCHostEl(instance, nextTree.el);
                // updated hook
                if (u) queuePostRenderEffect(u, parentSuspense);
                // onVnodeUpdated
                if (vnodeHook = next.props && next.props.onVnodeUpdated) queuePostRenderEffect(()=>invokeVNodeHook(vnodeHook, parent, next, vnode)
                , parentSuspense);
                devtoolsComponentUpdated(instance);
                popWarningContext();
            }
        };
        // create reactive effect for rendering
        const effect = instance.effect = new _reactivity.ReactiveEffect(componentUpdateFn, ()=>queueJob(instance.update)
        , instance.scope // track it in component's effect scope
        );
        const update = instance.update = effect.run.bind(effect);
        update.id = instance.uid;
        // allowRecurse
        // #1801, #2043 component render effects should allow recursive updates
        toggleRecurse(instance, true);
        effect.onTrack = instance.rtc ? (e)=>_shared.invokeArrayFns(instance.rtc, e)
         : void 0;
        effect.onTrigger = instance.rtg ? (e)=>_shared.invokeArrayFns(instance.rtg, e)
         : void 0;
        // @ts-ignore (for scheduler)
        update.ownerInstance = instance;
        update();
    };
    const updateComponentPreRender = (instance, nextVNode, optimized)=>{
        nextVNode.component = instance;
        const prevProps = instance.vnode.props;
        instance.vnode = nextVNode;
        instance.next = null;
        updateProps(instance, nextVNode.props, prevProps, optimized);
        updateSlots(instance, nextVNode.children, optimized);
        _reactivity.pauseTracking();
        // props update may have triggered pre-flush watchers.
        // flush them before the render update.
        flushPreFlushCbs(undefined, instance.update);
        _reactivity.resetTracking();
    };
    const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false)=>{
        const c1 = n1 && n1.children;
        const prevShapeFlag = n1 ? n1.shapeFlag : 0;
        const c2 = n2.children;
        const { patchFlag , shapeFlag  } = n2;
        // fast path
        if (patchFlag > 0) {
            if (patchFlag & 128 /* KEYED_FRAGMENT */ ) {
                // this could be either fully-keyed or mixed (some keyed some not)
                // presence of patchFlag means children are guaranteed to be arrays
                patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                return;
            } else if (patchFlag & 256 /* UNKEYED_FRAGMENT */ ) {
                // unkeyed
                patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                return;
            }
        }
        // children has 3 possibilities: text, array or no children.
        if (shapeFlag & 8 /* TEXT_CHILDREN */ ) {
            // text children fast path
            if (prevShapeFlag & 16 /* ARRAY_CHILDREN */ ) unmountChildren(c1, parentComponent, parentSuspense);
            if (c2 !== c1) hostSetElementText(container, c2);
        } else if (prevShapeFlag & 16 /* ARRAY_CHILDREN */ ) {
            // prev children was array
            if (shapeFlag & 16 /* ARRAY_CHILDREN */ ) // two arrays, cannot assume anything, do full diff
            patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            else // no new children, just unmount old
            unmountChildren(c1, parentComponent, parentSuspense, true);
        } else {
            // prev children was text OR null
            // new children is array OR null
            if (prevShapeFlag & 8 /* TEXT_CHILDREN */ ) hostSetElementText(container, '');
            // mount new if array
            if (shapeFlag & 16 /* ARRAY_CHILDREN */ ) mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
    };
    const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)=>{
        c1 = c1 || _shared.EMPTY_ARR;
        c2 = c2 || _shared.EMPTY_ARR;
        const oldLength = c1.length;
        const newLength = c2.length;
        const commonLength = Math.min(oldLength, newLength);
        let i;
        for(i = 0; i < commonLength; i++){
            const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
            patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
        if (oldLength > newLength) // remove old
        unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
        else // mount new
        mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
    };
    // can be all-keyed or mixed
    const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)=>{
        let i = 0;
        const l2 = c2.length;
        let e1 = c1.length - 1; // prev ending index
        let e2 = l2 - 1; // next ending index
        // 1. sync from start
        // (a b) c
        // (a b) d e
        while(i <= e1 && i <= e2){
            const n1 = c1[i];
            const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
            if (isSameVNodeType(n1, n2)) patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            else break;
            i++;
        }
        // 2. sync from end
        // a (b c)
        // d e (b c)
        while(i <= e1 && i <= e2){
            const n1 = c1[e1];
            const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
            if (isSameVNodeType(n1, n2)) patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            else break;
            e1--;
            e2--;
        }
        // 3. common sequence + mount
        // (a b)
        // (a b) c
        // i = 2, e1 = 1, e2 = 2
        // (a b)
        // c (a b)
        // i = 0, e1 = -1, e2 = 0
        if (i > e1) {
            if (i <= e2) {
                const nextPos = e2 + 1;
                const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
                while(i <= e2){
                    patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                    i++;
                }
            }
        } else if (i > e2) while(i <= e1){
            unmount(c1[i], parentComponent, parentSuspense, true);
            i++;
        }
        else {
            const s1 = i; // prev starting index
            const s2 = i; // next starting index
            // 5.1 build key:index map for newChildren
            const keyToNewIndexMap = new Map();
            for(i = s2; i <= e2; i++){
                const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
                if (nextChild.key != null) {
                    if (keyToNewIndexMap.has(nextChild.key)) warn(`Duplicate keys found during update:`, JSON.stringify(nextChild.key), `Make sure keys are unique.`);
                    keyToNewIndexMap.set(nextChild.key, i);
                }
            }
            // 5.2 loop through old children left to be patched and try to patch
            // matching nodes & remove nodes that are no longer present
            let j;
            let patched = 0;
            const toBePatched = e2 - s2 + 1;
            let moved = false;
            // used to track whether any node has moved
            let maxNewIndexSoFar = 0;
            // works as Map<newIndex, oldIndex>
            // Note that oldIndex is offset by +1
            // and oldIndex = 0 is a special value indicating the new node has
            // no corresponding old node.
            // used for determining longest stable subsequence
            const newIndexToOldIndexMap = new Array(toBePatched);
            for(i = 0; i < toBePatched; i++)newIndexToOldIndexMap[i] = 0;
            for(i = s1; i <= e1; i++){
                const prevChild = c1[i];
                if (patched >= toBePatched) {
                    // all new children have been patched so this can only be a removal
                    unmount(prevChild, parentComponent, parentSuspense, true);
                    continue;
                }
                let newIndex;
                if (prevChild.key != null) newIndex = keyToNewIndexMap.get(prevChild.key);
                else {
                    // key-less node, try to locate a key-less node of the same type
                    for(j = s2; j <= e2; j++)if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
                        newIndex = j;
                        break;
                    }
                }
                if (newIndex === undefined) unmount(prevChild, parentComponent, parentSuspense, true);
                else {
                    newIndexToOldIndexMap[newIndex - s2] = i + 1;
                    if (newIndex >= maxNewIndexSoFar) maxNewIndexSoFar = newIndex;
                    else moved = true;
                    patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                    patched++;
                }
            }
            // 5.3 move and mount
            // generate longest stable subsequence only when nodes have moved
            const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : _shared.EMPTY_ARR;
            j = increasingNewIndexSequence.length - 1;
            // looping backwards so that we can use last patched node as anchor
            for(i = toBePatched - 1; i >= 0; i--){
                const nextIndex = s2 + i;
                const nextChild = c2[nextIndex];
                const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
                if (newIndexToOldIndexMap[i] === 0) // mount new
                patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                else if (moved) {
                    // move if:
                    // There is no stable subsequence (e.g. a reverse)
                    // OR current node is not among the stable sequence
                    if (j < 0 || i !== increasingNewIndexSequence[j]) move(nextChild, container, anchor, 2 /* REORDER */ );
                    else j--;
                }
            }
        }
    };
    const move = (vnode, container, anchor, moveType, parentSuspense = null)=>{
        const { el , type , transition , children , shapeFlag  } = vnode;
        if (shapeFlag & 6 /* COMPONENT */ ) {
            move(vnode.component.subTree, container, anchor, moveType);
            return;
        }
        if (shapeFlag & 128 /* SUSPENSE */ ) {
            vnode.suspense.move(container, anchor, moveType);
            return;
        }
        if (shapeFlag & 64 /* TELEPORT */ ) {
            type.move(vnode, container, anchor, internals);
            return;
        }
        if (type === Fragment) {
            hostInsert(el, container, anchor);
            for(let i = 0; i < children.length; i++)move(children[i], container, anchor, moveType);
            hostInsert(vnode.anchor, container, anchor);
            return;
        }
        if (type === Static) {
            moveStaticNode(vnode, container, anchor);
            return;
        }
        // single nodes
        const needTransition = moveType !== 2 /* REORDER */  && shapeFlag & 1 /* ELEMENT */  && transition;
        if (needTransition) {
            if (moveType === 0 /* ENTER */ ) {
                transition.beforeEnter(el);
                hostInsert(el, container, anchor);
                queuePostRenderEffect(()=>transition.enter(el)
                , parentSuspense);
            } else {
                const { leave , delayLeave , afterLeave  } = transition;
                const remove = ()=>hostInsert(el, container, anchor)
                ;
                const performLeave = ()=>{
                    leave(el, ()=>{
                        remove();
                        afterLeave && afterLeave();
                    });
                };
                if (delayLeave) delayLeave(el, remove, performLeave);
                else performLeave();
            }
        } else hostInsert(el, container, anchor);
    };
    const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false)=>{
        const { type , props , ref , children , dynamicChildren , shapeFlag , patchFlag , dirs  } = vnode;
        // unset ref
        if (ref != null) setRef(ref, null, parentSuspense, vnode, true);
        if (shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */ ) {
            parentComponent.ctx.deactivate(vnode);
            return;
        }
        const shouldInvokeDirs = shapeFlag & 1 /* ELEMENT */  && dirs;
        const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
        let vnodeHook;
        if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) invokeVNodeHook(vnodeHook, parentComponent, vnode);
        if (shapeFlag & 6 /* COMPONENT */ ) unmountComponent(vnode.component, parentSuspense, doRemove);
        else {
            if (shapeFlag & 128 /* SUSPENSE */ ) {
                vnode.suspense.unmount(parentSuspense, doRemove);
                return;
            }
            if (shouldInvokeDirs) invokeDirectiveHook(vnode, null, parentComponent, 'beforeUnmount');
            if (shapeFlag & 64 /* TELEPORT */ ) vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
            else if (dynamicChildren && (type !== Fragment || patchFlag > 0 && patchFlag & 64 /* STABLE_FRAGMENT */ )) // fast path for block nodes: only need to unmount dynamic children.
            unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
            else if (type === Fragment && patchFlag & 384 /* UNKEYED_FRAGMENT */  || !optimized && shapeFlag & 16 /* ARRAY_CHILDREN */ ) unmountChildren(children, parentComponent, parentSuspense);
            if (doRemove) remove1(vnode);
        }
        if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) queuePostRenderEffect(()=>{
            vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
            shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, 'unmounted');
        }, parentSuspense);
    };
    const remove1 = (vnode)=>{
        const { type , el , anchor , transition  } = vnode;
        if (type === Fragment) {
            removeFragment(el, anchor);
            return;
        }
        if (type === Static) {
            removeStaticNode(vnode);
            return;
        }
        const performRemove = ()=>{
            hostRemove(el);
            if (transition && !transition.persisted && transition.afterLeave) transition.afterLeave();
        };
        if (vnode.shapeFlag & 1 /* ELEMENT */  && transition && !transition.persisted) {
            const { leave , delayLeave  } = transition;
            const performLeave = ()=>leave(el, performRemove)
            ;
            if (delayLeave) delayLeave(vnode.el, performRemove, performLeave);
            else performLeave();
        } else performRemove();
    };
    const removeFragment = (cur, end)=>{
        // For fragments, directly remove all contained DOM nodes.
        // (fragment child nodes cannot have transition)
        let next;
        while(cur !== end){
            next = hostNextSibling(cur);
            hostRemove(cur);
            cur = next;
        }
        hostRemove(end);
    };
    const unmountComponent = (instance, parentSuspense, doRemove)=>{
        if (instance.type.__hmrId) unregisterHMR(instance);
        const { bum , scope , update , subTree , um  } = instance;
        // beforeUnmount hook
        if (bum) _shared.invokeArrayFns(bum);
        // stop effects in component scope
        scope.stop();
        // update may be null if a component is unmounted before its async
        // setup has resolved.
        if (update) {
            // so that scheduler will no longer invoke it
            update.active = false;
            unmount(subTree, instance, parentSuspense, doRemove);
        }
        // unmounted hook
        if (um) queuePostRenderEffect(um, parentSuspense);
        queuePostRenderEffect(()=>{
            instance.isUnmounted = true;
        }, parentSuspense);
        // A component with async dep inside a pending suspense is unmounted before
        // its async dep resolves. This should remove the dep from the suspense, and
        // cause the suspense to resolve immediately if that was the last dep.
        if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
            parentSuspense.deps--;
            if (parentSuspense.deps === 0) parentSuspense.resolve();
        }
        devtoolsComponentRemoved(instance);
    };
    const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0)=>{
        for(let i = start; i < children.length; i++)unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    };
    const getNextHostNode = (vnode)=>{
        if (vnode.shapeFlag & 6 /* COMPONENT */ ) return getNextHostNode(vnode.component.subTree);
        if (vnode.shapeFlag & 128 /* SUSPENSE */ ) return vnode.suspense.next();
        return hostNextSibling(vnode.anchor || vnode.el);
    };
    const render = (vnode, container, isSVG)=>{
        if (vnode == null) {
            if (container._vnode) unmount(container._vnode, null, null, true);
        } else patch(container._vnode || null, vnode, container, null, null, null, isSVG);
        flushPostFlushCbs();
        container._vnode = vnode;
    };
    const internals = {
        p: patch,
        um: unmount,
        m: move,
        r: remove1,
        mt: mountComponent,
        mc: mountChildren,
        pc: patchChildren,
        pbc: patchBlockChildren,
        n: getNextHostNode,
        o: options
    };
    let hydrate;
    let hydrateNode;
    if (createHydrationFns) [hydrate, hydrateNode] = createHydrationFns(internals);
    return {
        render,
        hydrate,
        createApp: createAppAPI(render, hydrate)
    };
}
function toggleRecurse({ effect , update  }, allowed) {
    effect.allowRecurse = update.allowRecurse = allowed;
}
/**
 * #1156
 * When a component is HMR-enabled, we need to make sure that all static nodes
 * inside a block also inherit the DOM element from the previous tree so that
 * HMR updates (which are full updates) can retrieve the element for patching.
 *
 * #2080
 * Inside keyed `template` fragment static children, if a fragment is moved,
 * the children will always be moved. Therefore, in order to ensure correct move
 * position, el should be inherited from previous nodes.
 */ function traverseStaticChildren(n1, n2, shallow = false) {
    const ch1 = n1.children;
    const ch2 = n2.children;
    if (_shared.isArray(ch1) && _shared.isArray(ch2)) for(let i = 0; i < ch1.length; i++){
        // this is only called in the optimized path so array children are
        // guaranteed to be vnodes
        const c1 = ch1[i];
        let c2 = ch2[i];
        if (c2.shapeFlag & 1 /* ELEMENT */  && !c2.dynamicChildren) {
            if (c2.patchFlag <= 0 || c2.patchFlag === 32 /* HYDRATE_EVENTS */ ) {
                c2 = ch2[i] = cloneIfMounted(ch2[i]);
                c2.el = c1.el;
            }
            if (!shallow) traverseStaticChildren(c1, c2);
        }
        // also inherit for comment nodes, but not placeholders (e.g. v-if which
        // would have received .el during block patch)
        if (c2.type === Comment && !c2.el) c2.el = c1.el;
    }
}
// https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function getSequence(arr) {
    const p = arr.slice();
    const result = [
        0
    ];
    let i, j, u, v, c;
    const len = arr.length;
    for(i = 0; i < len; i++){
        const arrI = arr[i];
        if (arrI !== 0) {
            j = result[result.length - 1];
            if (arr[j] < arrI) {
                p[i] = j;
                result.push(i);
                continue;
            }
            u = 0;
            v = result.length - 1;
            while(u < v){
                c = u + v >> 1;
                if (arr[result[c]] < arrI) u = c + 1;
                else v = c;
            }
            if (arrI < arr[result[u]]) {
                if (u > 0) p[i] = result[u - 1];
                result[u] = i;
            }
        }
    }
    u = result.length;
    v = result[u - 1];
    while(u-- > 0){
        result[u] = v;
        v = p[v];
    }
    return result;
}
const isTeleport = (type)=>type.__isTeleport
;
const isTeleportDisabled = (props)=>props && (props.disabled || props.disabled === '')
;
const isTargetSVG = (target)=>typeof SVGElement !== 'undefined' && target instanceof SVGElement
;
const resolveTarget = (props, select)=>{
    const targetSelector = props && props.to;
    if (_shared.isString(targetSelector)) {
        if (!select) {
            warn(`Current renderer does not support string target for Teleports. ` + `(missing querySelector renderer option)`);
            return null;
        } else {
            const target = select(targetSelector);
            if (!target) warn(`Failed to locate Teleport target with selector "${targetSelector}". ` + `Note the target element must exist before the component is mounted - ` + `i.e. the target cannot be rendered by the component itself, and ` + `ideally should be outside of the entire Vue component tree.`);
            return target;
        }
    } else {
        if (!targetSelector && !isTeleportDisabled(props)) warn(`Invalid Teleport target: ${targetSelector}`);
        return targetSelector;
    }
};
const TeleportImpl = {
    __isTeleport: true,
    process (n1, n2, container2, anchor2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals) {
        const { mc: mountChildren , pc: patchChildren , pbc: patchBlockChildren , o: { insert , querySelector , createText , createComment  }  } = internals;
        const disabled = isTeleportDisabled(n2.props);
        let { shapeFlag , children , dynamicChildren  } = n2;
        // #3302
        // HMR updated, force full diff
        if (isHmrUpdating) {
            optimized = false;
            dynamicChildren = null;
        }
        if (n1 == null) {
            // insert anchors in the main view
            const placeholder = n2.el = createComment('teleport start');
            const mainAnchor = n2.anchor = createComment('teleport end');
            insert(placeholder, container2, anchor2);
            insert(mainAnchor, container2, anchor2);
            const target = n2.target = resolveTarget(n2.props, querySelector);
            const targetAnchor = n2.targetAnchor = createText('');
            if (target) {
                insert(targetAnchor, target);
                // #2652 we could be teleporting from a non-SVG tree into an SVG tree
                isSVG = isSVG || isTargetSVG(target);
            } else if (!disabled) warn('Invalid Teleport target on mount:', target, `(${typeof target})`);
            const mount = (container, anchor)=>{
                // Teleport *always* has Array children. This is enforced in both the
                // compiler and vnode children normalization.
                if (shapeFlag & 16 /* ARRAY_CHILDREN */ ) mountChildren(children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            };
            if (disabled) mount(container2, mainAnchor);
            else if (target) mount(target, targetAnchor);
        } else {
            // update content
            n2.el = n1.el;
            const mainAnchor = n2.anchor = n1.anchor;
            const target = n2.target = n1.target;
            const targetAnchor = n2.targetAnchor = n1.targetAnchor;
            const wasDisabled = isTeleportDisabled(n1.props);
            const currentContainer = wasDisabled ? container2 : target;
            const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
            isSVG = isSVG || isTargetSVG(target);
            if (dynamicChildren) {
                // fast path when the teleport happens to be a block root
                patchBlockChildren(n1.dynamicChildren, dynamicChildren, currentContainer, parentComponent, parentSuspense, isSVG, slotScopeIds);
                // even in block tree mode we need to make sure all root-level nodes
                // in the teleport inherit previous DOM references so that they can
                // be moved in future patches.
                traverseStaticChildren(n1, n2, true);
            } else if (!optimized) patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, false);
            if (disabled) {
                if (!wasDisabled) // enabled -> disabled
                // move into main container
                moveTeleport(n2, container2, mainAnchor, internals, 1 /* TOGGLE */ );
            } else {
                // target changed
                if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
                    const nextTarget = n2.target = resolveTarget(n2.props, querySelector);
                    if (nextTarget) moveTeleport(n2, nextTarget, null, internals, 0 /* TARGET_CHANGE */ );
                    else warn('Invalid Teleport target on update:', target, `(${typeof target})`);
                } else if (wasDisabled) // disabled -> enabled
                // move into teleport target
                moveTeleport(n2, target, targetAnchor, internals, 1 /* TOGGLE */ );
            }
        }
    },
    remove (vnode, parentComponent, parentSuspense, optimized, { um: unmount , o: { remove: hostRemove  }  }, doRemove) {
        const { shapeFlag , children , anchor , targetAnchor , target , props  } = vnode;
        if (target) hostRemove(targetAnchor);
        // an unmounted teleport should always remove its children if not disabled
        if (doRemove || !isTeleportDisabled(props)) {
            hostRemove(anchor);
            if (shapeFlag & 16 /* ARRAY_CHILDREN */ ) for(let i = 0; i < children.length; i++){
                const child = children[i];
                unmount(child, parentComponent, parentSuspense, true, !!child.dynamicChildren);
            }
        }
    },
    move: moveTeleport,
    hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, { o: { insert  } , m: move  }, moveType = 2 /* REORDER */ ) {
    // move target anchor if this is a target change.
    if (moveType === 0 /* TARGET_CHANGE */ ) insert(vnode.targetAnchor, container, parentAnchor);
    const { el , anchor , shapeFlag , children , props  } = vnode;
    const isReorder = moveType === 2 /* REORDER */ ;
    // move main view anchor if this is a re-order.
    if (isReorder) insert(el, container, parentAnchor);
    // if this is a re-order and teleport is enabled (content is in target)
    // do not move children. So the opposite is: only move children if this
    // is not a reorder, or the teleport is disabled
    if (!isReorder || isTeleportDisabled(props)) {
        // Teleport has either Array children or no children.
        if (shapeFlag & 16 /* ARRAY_CHILDREN */ ) for(let i = 0; i < children.length; i++)move(children[i], container, parentAnchor, 2 /* REORDER */ );
    }
    // move main view anchor if this is a re-order.
    if (isReorder) insert(anchor, container, parentAnchor);
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, { o: { nextSibling , parentNode , querySelector  }  }, hydrateChildren) {
    const target = vnode.target = resolveTarget(vnode.props, querySelector);
    if (target) {
        // if multiple teleports rendered to the same target element, we need to
        // pick up from where the last teleport finished instead of the first node
        const targetNode = target._lpa || target.firstChild;
        if (vnode.shapeFlag & 16 /* ARRAY_CHILDREN */ ) {
            if (isTeleportDisabled(vnode.props)) {
                vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, slotScopeIds, optimized);
                vnode.targetAnchor = targetNode;
            } else {
                vnode.anchor = nextSibling(node);
                vnode.targetAnchor = hydrateChildren(targetNode, vnode, target, parentComponent, parentSuspense, slotScopeIds, optimized);
            }
            target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
        }
    }
    return vnode.anchor && nextSibling(vnode.anchor);
}
// Force-casted public typing for h and TSX props inference
const Teleport = TeleportImpl;
const COMPONENTS = 'components';
const DIRECTIVES = 'directives';
/**
 * @private
 */ function resolveComponent(name, maybeSelfReference) {
    return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol();
/**
 * @private
 */ function resolveDynamicComponent(component) {
    if (_shared.isString(component)) return resolveAsset(COMPONENTS, component, false) || component;
    else // invalid types will fallthrough to createVNode and raise warning
    return component || NULL_DYNAMIC_COMPONENT;
}
/**
 * @private
 */ function resolveDirective(name) {
    return resolveAsset(DIRECTIVES, name);
}
// implementation
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
    const instance = currentRenderingInstance || currentInstance;
    if (instance) {
        const Component = instance.type;
        // explicit self name has highest priority
        if (type === COMPONENTS) {
            const selfName = getComponentName(Component);
            if (selfName && (selfName === name || selfName === _shared.camelize(name) || selfName === _shared.capitalize(_shared.camelize(name)))) return Component;
        }
        const res = // local registration
        // check instance[type] first which is resolved for options API
        resolve(instance[type] || Component[type], name) || // global registration
        resolve(instance.appContext[type], name);
        if (!res && maybeSelfReference) // fallback to implicit self-reference
        return Component;
        if (warnMissing && !res) {
            const extra = type === COMPONENTS ? `\nIf this is a native custom element, make sure to exclude it from ` + `component resolution via compilerOptions.isCustomElement.` : ``;
            warn(`Failed to resolve ${type.slice(0, -1)}: ${name}${extra}`);
        }
        return res;
    } else warn(`resolve${_shared.capitalize(type.slice(0, -1))} ` + `can only be used in render() or setup().`);
}
function resolve(registry, name) {
    return registry && (registry[name] || registry[_shared.camelize(name)] || registry[_shared.capitalize(_shared.camelize(name))]);
}
const Fragment = Symbol('Fragment');
const Text = Symbol('Text');
const Comment = Symbol('Comment');
const Static = Symbol('Static');
// Since v-if and v-for are the two possible ways node structure can dynamically
// change, once we consider v-if branches and each v-for fragment a block, we
// can divide a template into nested blocks, and within each block the node
// structure would be stable. This allows us to skip most children diffing
// and only worry about the dynamic nodes (indicated by patch flags).
const blockStack = [];
let currentBlock = null;
/**
 * Open a block.
 * This must be called before `createBlock`. It cannot be part of `createBlock`
 * because the children of the block are evaluated before `createBlock` itself
 * is called. The generated code typically looks like this:
 *
 * ```js
 * function render() {
 *   return (openBlock(),createBlock('div', null, [...]))
 * }
 * ```
 * disableTracking is true when creating a v-for fragment block, since a v-for
 * fragment always diffs its children.
 *
 * @private
 */ function openBlock(disableTracking = false) {
    blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
    blockStack.pop();
    currentBlock = blockStack[blockStack.length - 1] || null;
}
// Whether we should be tracking dynamic child nodes inside a block.
// Only tracks when this value is > 0
// We are not using a simple boolean because this value may need to be
// incremented/decremented by nested usage of v-once (see below)
let isBlockTreeEnabled = 1;
/**
 * Block tracking sometimes needs to be disabled, for example during the
 * creation of a tree that needs to be cached by v-once. The compiler generates
 * code like this:
 *
 * ``` js
 * _cache[1] || (
 *   setBlockTracking(-1),
 *   _cache[1] = createVNode(...),
 *   setBlockTracking(1),
 *   _cache[1]
 * )
 * ```
 *
 * @private
 */ function setBlockTracking(value) {
    isBlockTreeEnabled += value;
}
function setupBlock(vnode) {
    // save current block children on the block vnode
    vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || _shared.EMPTY_ARR : null;
    // close block
    closeBlock();
    // a block is always going to be patched, so track it as a child of its
    // parent block
    if (isBlockTreeEnabled > 0 && currentBlock) currentBlock.push(vnode);
    return vnode;
}
/**
 * @private
 */ function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
    return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true));
}
/**
 * Create a block root vnode. Takes the same exact arguments as `createVNode`.
 * A block root keeps track of dynamic nodes within the block in the
 * `dynamicChildren` array.
 *
 * @private
 */ function createBlock(type, props, children, patchFlag, dynamicProps) {
    return setupBlock(createVNode(type, props, children, patchFlag, dynamicProps, true));
}
function isVNode(value) {
    return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
    if (n2.shapeFlag & 6 /* COMPONENT */  && hmrDirtyComponents.has(n2.type)) // HMR only: if the component has been hot-updated, force a reload.
    return false;
    return n1.type === n2.type && n1.key === n2.key;
}
let vnodeArgsTransformer;
/**
 * Internal API for registering an arguments transform for createVNode
 * used for creating stubs in the test-utils
 * It is *internal* but needs to be exposed for test-utils to pick up proper
 * typings
 */ function transformVNodeArgs(transformer) {
    vnodeArgsTransformer = transformer;
}
const createVNodeWithArgsTransform = (...args)=>{
    return _createVNode(...vnodeArgsTransformer ? vnodeArgsTransformer(args, currentRenderingInstance) : args);
};
const InternalObjectKey = `__vInternal`;
const normalizeKey = ({ key  })=>key != null ? key : null
;
const normalizeRef = ({ ref , ref_key , ref_for  })=>{
    return ref != null ? _shared.isString(ref) || _reactivity.isRef(ref) || _shared.isFunction(ref) ? {
        i: currentRenderingInstance,
        r: ref,
        k: ref_key,
        f: !!ref_for
    } : ref : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1 /* ELEMENT */ , isBlockNode = false, needFullChildrenNormalization = false) {
    const vnode = {
        __v_isVNode: true,
        __v_skip: true,
        type,
        props,
        key: props && normalizeKey(props),
        ref: props && normalizeRef(props),
        scopeId: currentScopeId,
        slotScopeIds: null,
        children,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag,
        patchFlag,
        dynamicProps,
        dynamicChildren: null,
        appContext: null
    };
    if (needFullChildrenNormalization) {
        normalizeChildren(vnode, children);
        // normalize suspense children
        if (shapeFlag & 128 /* SUSPENSE */ ) type.normalize(vnode);
    } else if (children) // compiled element vnode - if children is passed, only possible types are
    // string or Array.
    vnode.shapeFlag |= _shared.isString(children) ? 8 /* TEXT_CHILDREN */  : 16 /* ARRAY_CHILDREN */ ;
    // validate key
    if (vnode.key !== vnode.key) warn(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
    // track vnode for block tree
    if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
    !isBlockNode && // has current parent block
    currentBlock && (vnode.patchFlag > 0 || shapeFlag & 6 /* COMPONENT */ ) && // the EVENTS flag is only for hydration and if it is the only flag, the
    // vnode should not be considered dynamic due to handler caching.
    vnode.patchFlag !== 32 /* HYDRATE_EVENTS */ ) currentBlock.push(vnode);
    return vnode;
}
const createVNode = createVNodeWithArgsTransform;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
    if (!type || type === NULL_DYNAMIC_COMPONENT) {
        if (!type) warn(`Invalid vnode type when creating vnode: ${type}.`);
        type = Comment;
    }
    if (isVNode(type)) {
        // createVNode receiving an existing vnode. This happens in cases like
        // <component :is="vnode"/>
        // #2078 make sure to merge refs during the clone instead of overwriting it
        const cloned = cloneVNode(type, props, true);
        if (children) normalizeChildren(cloned, children);
        return cloned;
    }
    // class component normalization.
    if (isClassComponent(type)) type = type.__vccOpts;
    // class & style normalization.
    if (props) {
        // for reactive or proxy objects, we need to clone it to enable mutation.
        props = guardReactiveProps(props);
        let { class: klass , style  } = props;
        if (klass && !_shared.isString(klass)) props.class = _shared.normalizeClass(klass);
        if (_shared.isObject(style)) {
            // reactive state objects need to be cloned since they are likely to be
            // mutated
            if (_reactivity.isProxy(style) && !_shared.isArray(style)) style = _shared.extend({
            }, style);
            props.style = _shared.normalizeStyle(style);
        }
    }
    // encode the vnode type information into a bitmap
    const shapeFlag = _shared.isString(type) ? 1 /* ELEMENT */  : isSuspense(type) ? 128 /* SUSPENSE */  : isTeleport(type) ? 64 /* TELEPORT */  : _shared.isObject(type) ? 4 /* STATEFUL_COMPONENT */  : _shared.isFunction(type) ? 2 /* FUNCTIONAL_COMPONENT */  : 0;
    if (shapeFlag & 4 /* STATEFUL_COMPONENT */  && _reactivity.isProxy(type)) {
        type = _reactivity.toRaw(type);
        warn(`Vue received a Component which was made a reactive object. This can ` + `lead to unnecessary performance overhead, and should be avoided by ` + `marking the component with \`markRaw\` or using \`shallowRef\` ` + `instead of \`ref\`.`, `\nComponent that was made reactive: `, type);
    }
    return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}
function guardReactiveProps(props) {
    if (!props) return null;
    return _reactivity.isProxy(props) || InternalObjectKey in props ? _shared.extend({
    }, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false) {
    // This is intentionally NOT using spread or extend to avoid the runtime
    // key enumeration cost.
    const { props , ref , patchFlag , children  } = vnode;
    const mergedProps = extraProps ? mergeProps(props || {
    }, extraProps) : props;
    const cloned = {
        __v_isVNode: true,
        __v_skip: true,
        type: vnode.type,
        props: mergedProps,
        key: mergedProps && normalizeKey(mergedProps),
        ref: extraProps && extraProps.ref ? // if the vnode itself already has a ref, cloneVNode will need to merge
        // the refs so the single vnode can be set on multiple refs
        mergeRef && ref ? _shared.isArray(ref) ? ref.concat(normalizeRef(extraProps)) : [
            ref,
            normalizeRef(extraProps)
        ] : normalizeRef(extraProps) : ref,
        scopeId: vnode.scopeId,
        slotScopeIds: vnode.slotScopeIds,
        children: patchFlag === -1 /* HOISTED */  && _shared.isArray(children) ? children.map(deepCloneVNode) : children,
        target: vnode.target,
        targetAnchor: vnode.targetAnchor,
        staticCount: vnode.staticCount,
        shapeFlag: vnode.shapeFlag,
        // if the vnode is cloned with extra props, we can no longer assume its
        // existing patch flag to be reliable and need to add the FULL_PROPS flag.
        // note: preserve flag for fragments since they use the flag for children
        // fast paths only.
        patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 // hoisted node
         ? 16 /* FULL_PROPS */  : patchFlag | 16 /* FULL_PROPS */  : patchFlag,
        dynamicProps: vnode.dynamicProps,
        dynamicChildren: vnode.dynamicChildren,
        appContext: vnode.appContext,
        dirs: vnode.dirs,
        transition: vnode.transition,
        // These should technically only be non-null on mounted VNodes. However,
        // they *should* be copied for kept-alive vnodes. So we just always copy
        // them since them being non-null during a mount doesn't affect the logic as
        // they will simply be overwritten.
        component: vnode.component,
        suspense: vnode.suspense,
        ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
        ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
        el: vnode.el,
        anchor: vnode.anchor
    };
    return cloned;
}
/**
 * Dev only, for HMR of hoisted vnodes reused in v-for
 * https://github.com/vitejs/vite/issues/2022
 */ function deepCloneVNode(vnode) {
    const cloned = cloneVNode(vnode);
    if (_shared.isArray(vnode.children)) cloned.children = vnode.children.map(deepCloneVNode);
    return cloned;
}
/**
 * @private
 */ function createTextVNode(text = ' ', flag = 0) {
    return createVNode(Text, null, text, flag);
}
/**
 * @private
 */ function createStaticVNode(content, numberOfNodes) {
    // A static vnode can contain multiple stringified elements, and the number
    // of elements is necessary for hydration.
    const vnode = createVNode(Static, null, content);
    vnode.staticCount = numberOfNodes;
    return vnode;
}
/**
 * @private
 */ function createCommentVNode(text = '', // when used as the v-else branch, the comment node must be created as a
// block to ensure correct updates.
asBlock = false) {
    return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
    if (child == null || typeof child === 'boolean') // empty placeholder
    return createVNode(Comment);
    else if (_shared.isArray(child)) // fragment
    return createVNode(Fragment, null, // #3666, avoid reference pollution when reusing vnode
    child.slice());
    else if (typeof child === 'object') // already vnode, this should be the most common since compiled templates
    // always produce all-vnode children arrays
    return cloneIfMounted(child);
    else // strings and numbers
    return createVNode(Text, null, String(child));
}
// optimized normalization for template-compiled render fns
function cloneIfMounted(child) {
    return child.el === null || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
    let type = 0;
    const { shapeFlag  } = vnode;
    if (children == null) children = null;
    else if (_shared.isArray(children)) type = 16 /* ARRAY_CHILDREN */ ;
    else if (typeof children === 'object') {
        if (shapeFlag & 65 /* TELEPORT */ ) {
            // Normalize slot to plain children for plain element and Teleport
            const slot = children.default;
            if (slot) {
                // _c marker is added by withCtx() indicating this is a compiled slot
                slot._c && (slot._d = false);
                normalizeChildren(vnode, slot());
                slot._c && (slot._d = true);
            }
            return;
        } else {
            type = 32 /* SLOTS_CHILDREN */ ;
            const slotFlag = children._;
            if (!slotFlag && !(InternalObjectKey in children)) children._ctx = currentRenderingInstance;
            else if (slotFlag === 3 /* FORWARDED */  && currentRenderingInstance) {
                // a child component receives forwarded slots from the parent.
                // its slot type is determined by its parent's slot type.
                if (currentRenderingInstance.slots._ === 1 /* STABLE */ ) children._ = 1 /* STABLE */ ;
                else {
                    children._ = 2 /* DYNAMIC */ ;
                    vnode.patchFlag |= 1024 /* DYNAMIC_SLOTS */ ;
                }
            }
        }
    } else if (_shared.isFunction(children)) {
        children = {
            default: children,
            _ctx: currentRenderingInstance
        };
        type = 32 /* SLOTS_CHILDREN */ ;
    } else {
        children = String(children);
        // force teleport children to array so it can be moved around
        if (shapeFlag & 64 /* TELEPORT */ ) {
            type = 16 /* ARRAY_CHILDREN */ ;
            children = [
                createTextVNode(children)
            ];
        } else type = 8 /* TEXT_CHILDREN */ ;
    }
    vnode.children = children;
    vnode.shapeFlag |= type;
}
function mergeProps(...args) {
    const ret = {
    };
    for(let i = 0; i < args.length; i++){
        const toMerge = args[i];
        for(const key in toMerge){
            if (key === 'class') {
                if (ret.class !== toMerge.class) ret.class = _shared.normalizeClass([
                    ret.class,
                    toMerge.class
                ]);
            } else if (key === 'style') ret.style = _shared.normalizeStyle([
                ret.style,
                toMerge.style
            ]);
            else if (_shared.isOn(key)) {
                const existing = ret[key];
                const incoming = toMerge[key];
                if (incoming && existing !== incoming && !(_shared.isArray(existing) && existing.includes(incoming))) ret[key] = existing ? [].concat(existing, incoming) : incoming;
            } else if (key !== '') ret[key] = toMerge[key];
        }
    }
    return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
    callWithAsyncErrorHandling(hook, instance, 7 /* VNODE_HOOK */ , [
        vnode,
        prevVNode
    ]);
}
/**
 * Actual implementation
 */ function renderList(source, renderItem, cache, index) {
    let ret;
    const cached = cache && cache[index];
    if (_shared.isArray(source) || _shared.isString(source)) {
        ret = new Array(source.length);
        for(let i = 0, l = source.length; i < l; i++)ret[i] = renderItem(source[i], i, undefined, cached && cached[i]);
    } else if (typeof source === 'number') {
        if (!Number.isInteger(source)) {
            warn(`The v-for range expect an integer value but got ${source}.`);
            return [];
        }
        ret = new Array(source);
        for(let i = 0; i < source; i++)ret[i] = renderItem(i + 1, i, undefined, cached && cached[i]);
    } else if (_shared.isObject(source)) {
        if (source[Symbol.iterator]) ret = Array.from(source, (item, i)=>renderItem(item, i, undefined, cached && cached[i])
        );
        else {
            const keys = Object.keys(source);
            ret = new Array(keys.length);
            for(let i = 0, l = keys.length; i < l; i++){
                const key = keys[i];
                ret[i] = renderItem(source[key], key, i, cached && cached[i]);
            }
        }
    } else ret = [];
    if (cache) cache[index] = ret;
    return ret;
}
/**
 * Compiler runtime helper for creating dynamic slots object
 * @private
 */ function createSlots(slots, dynamicSlots) {
    for(let i = 0; i < dynamicSlots.length; i++){
        const slot = dynamicSlots[i];
        // array of dynamic slot generated by <template v-for="..." #[...]>
        if (_shared.isArray(slot)) for(let j = 0; j < slot.length; j++)slots[slot[j].name] = slot[j].fn;
        else if (slot) // conditional single slot generated by <template v-if="..." #foo>
        slots[slot.name] = slot.fn;
    }
    return slots;
}
/**
 * Compiler runtime helper for rendering `<slot/>`
 * @private
 */ function renderSlot(slots, name, props = {
}, // this is not a user-facing function, so the fallback is always generated by
// the compiler and guaranteed to be a function returning an array
fallback, noSlotted) {
    if (currentRenderingInstance.isCE) return createVNode('slot', name === 'default' ? null : {
        name
    }, fallback && fallback());
    let slot = slots[name];
    if (slot && slot.length > 1) {
        warn(`SSR-optimized slot function detected in a non-SSR-optimized render ` + `function. You need to mark this component with $dynamic-slots in the ` + `parent template.`);
        slot = ()=>[]
        ;
    }
    // a compiled slot disables block tracking by default to avoid manual
    // invocation interfering with template-based block tracking, but in
    // `renderSlot` we can be sure that it's template-based so we can force
    // enable it.
    if (slot && slot._c) slot._d = false;
    openBlock();
    const validSlotContent = slot && ensureValidVNode(slot(props));
    const rendered = createBlock(Fragment, {
        key: props.key || `_${name}`
    }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1 /* STABLE */  ? 64 /* STABLE_FRAGMENT */  : -2 /* BAIL */ );
    if (!noSlotted && rendered.scopeId) rendered.slotScopeIds = [
        rendered.scopeId + '-s'
    ];
    if (slot && slot._c) slot._d = true;
    return rendered;
}
function ensureValidVNode(vnodes) {
    return vnodes.some((child)=>{
        if (!isVNode(child)) return true;
        if (child.type === Comment) return false;
        if (child.type === Fragment && !ensureValidVNode(child.children)) return false;
        return true;
    }) ? vnodes : null;
}
/**
 * For prefixing keys in v-on="obj" with "on"
 * @private
 */ function toHandlers(obj) {
    const ret = {
    };
    if (!_shared.isObject(obj)) {
        warn(`v-on with no argument expects an object value.`);
        return ret;
    }
    for(const key in obj)ret[_shared.toHandlerKey(key)] = obj[key];
    return ret;
}
/**
 * #2437 In Vue 3, functional components do not have a public instance proxy but
 * they exist in the internal parent chain. For code that relies on traversing
 * public $parent chains, skip functional ones and go to the parent instead.
 */ const getPublicInstance = (i)=>{
    if (!i) return null;
    if (isStatefulComponent(i)) return getExposeProxy(i) || i.proxy;
    return getPublicInstance(i.parent);
};
const publicPropertiesMap = _shared.extend(Object.create(null), {
    $: (i)=>i
    ,
    $el: (i)=>i.vnode.el
    ,
    $data: (i)=>i.data
    ,
    $props: (i)=>_reactivity.shallowReadonly(i.props)
    ,
    $attrs: (i)=>_reactivity.shallowReadonly(i.attrs)
    ,
    $slots: (i)=>_reactivity.shallowReadonly(i.slots)
    ,
    $refs: (i)=>_reactivity.shallowReadonly(i.refs)
    ,
    $parent: (i)=>getPublicInstance(i.parent)
    ,
    $root: (i)=>getPublicInstance(i.root)
    ,
    $emit: (i)=>i.emit
    ,
    $options: (i)=>__VUE_OPTIONS_API__ ? resolveMergedOptions(i) : i.type
    ,
    $forceUpdate: (i)=>()=>queueJob(i.update)
    ,
    $nextTick: (i)=>nextTick.bind(i.proxy)
    ,
    $watch: (i)=>__VUE_OPTIONS_API__ ? instanceWatch.bind(i) : _shared.NOOP
});
const PublicInstanceProxyHandlers = {
    get ({ _: instance  }, key) {
        const { ctx , setupState , data , props , accessCache , type , appContext  } = instance;
        // for internal formatters to know that this is a Vue instance
        if (key === '__isVue') return true;
        // prioritize <script setup> bindings during dev.
        // this allows even properties that start with _ or $ to be used - so that
        // it aligns with the production behavior where the render fn is inlined and
        // indeed has access to all declared variables.
        if (setupState !== _shared.EMPTY_OBJ && setupState.__isScriptSetup && _shared.hasOwn(setupState, key)) return setupState[key];
        // data / props / ctx
        // This getter gets called for every property access on the render context
        // during render and is a major hotspot. The most expensive part of this
        // is the multiple hasOwn() calls. It's much faster to do a simple property
        // access on a plain object, so we use an accessCache object (with null
        // prototype) to memoize what access type a key corresponds to.
        let normalizedProps;
        if (key[0] !== '$') {
            const n = accessCache[key];
            if (n !== undefined) switch(n){
                case 1 /* SETUP */ :
                    return setupState[key];
                case 2 /* DATA */ :
                    return data[key];
                case 4 /* CONTEXT */ :
                    return ctx[key];
                case 3 /* PROPS */ :
                    return props[key];
            }
            else if (setupState !== _shared.EMPTY_OBJ && _shared.hasOwn(setupState, key)) {
                accessCache[key] = 1 /* SETUP */ ;
                return setupState[key];
            } else if (data !== _shared.EMPTY_OBJ && _shared.hasOwn(data, key)) {
                accessCache[key] = 2 /* DATA */ ;
                return data[key];
            } else if (// only cache other properties when instance has declared (thus stable)
            // props
            (normalizedProps = instance.propsOptions[0]) && _shared.hasOwn(normalizedProps, key)) {
                accessCache[key] = 3 /* PROPS */ ;
                return props[key];
            } else if (ctx !== _shared.EMPTY_OBJ && _shared.hasOwn(ctx, key)) {
                accessCache[key] = 4 /* CONTEXT */ ;
                return ctx[key];
            } else if (!__VUE_OPTIONS_API__ || shouldCacheAccess) accessCache[key] = 0 /* OTHER */ ;
        }
        const publicGetter = publicPropertiesMap[key];
        let cssModule, globalProperties;
        // public $xxx properties
        if (publicGetter) {
            if (key === '$attrs') {
                _reactivity.track(instance, "get" /* GET */ , key);
                markAttrsAccessed();
            }
            return publicGetter(instance);
        } else if (// css module (injected by vue-loader)
        (cssModule = type.__cssModules) && (cssModule = cssModule[key])) return cssModule;
        else if (ctx !== _shared.EMPTY_OBJ && _shared.hasOwn(ctx, key)) {
            // user may set custom properties to `this` that start with `$`
            accessCache[key] = 4 /* CONTEXT */ ;
            return ctx[key];
        } else if (globalProperties = appContext.config.globalProperties, _shared.hasOwn(globalProperties, key)) return globalProperties[key];
        else if (currentRenderingInstance && (!_shared.isString(key) || // #1091 avoid internal isRef/isVNode checks on component instance leading
        // to infinite warning loop
        key.indexOf('__v') !== 0)) {
            if (data !== _shared.EMPTY_OBJ && (key[0] === '$' || key[0] === '_') && _shared.hasOwn(data, key)) warn(`Property ${JSON.stringify(key)} must be accessed via $data because it starts with a reserved ` + `character ("$" or "_") and is not proxied on the render context.`);
            else if (instance === currentRenderingInstance) warn(`Property ${JSON.stringify(key)} was accessed during render ` + `but is not defined on instance.`);
        }
    },
    set ({ _: instance  }, key, value) {
        const { data , setupState , ctx  } = instance;
        if (setupState !== _shared.EMPTY_OBJ && _shared.hasOwn(setupState, key)) setupState[key] = value;
        else if (data !== _shared.EMPTY_OBJ && _shared.hasOwn(data, key)) data[key] = value;
        else if (_shared.hasOwn(instance.props, key)) {
            warn(`Attempting to mutate prop "${key}". Props are readonly.`, instance);
            return false;
        }
        if (key[0] === '$' && key.slice(1) in instance) {
            warn(`Attempting to mutate public property "${key}". ` + `Properties starting with $ are reserved and readonly.`, instance);
            return false;
        } else if (key in instance.appContext.config.globalProperties) Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            value
        });
        else ctx[key] = value;
        return true;
    },
    has ({ _: { data , setupState , accessCache , ctx , appContext , propsOptions  }  }, key) {
        let normalizedProps;
        return !!accessCache[key] || data !== _shared.EMPTY_OBJ && _shared.hasOwn(data, key) || setupState !== _shared.EMPTY_OBJ && _shared.hasOwn(setupState, key) || (normalizedProps = propsOptions[0]) && _shared.hasOwn(normalizedProps, key) || _shared.hasOwn(ctx, key) || _shared.hasOwn(publicPropertiesMap, key) || _shared.hasOwn(appContext.config.globalProperties, key);
    }
};
PublicInstanceProxyHandlers.ownKeys = (target)=>{
    warn(`Avoid app logic that relies on enumerating keys on a component instance. ` + `The keys will be empty in production mode to avoid performance overhead.`);
    return Reflect.ownKeys(target);
};
const RuntimeCompiledPublicInstanceProxyHandlers = /*#__PURE__*/ _shared.extend({
}, PublicInstanceProxyHandlers, {
    get (target, key) {
        // fast path for unscopables when using `with` block
        if (key === Symbol.unscopables) return;
        return PublicInstanceProxyHandlers.get(target, key, target);
    },
    has (_, key) {
        const has = key[0] !== '_' && !_shared.isGloballyWhitelisted(key);
        if (!has && PublicInstanceProxyHandlers.has(_, key)) warn(`Property ${JSON.stringify(key)} should not start with _ which is a reserved prefix for Vue internals.`);
        return has;
    }
});
// dev only
// In dev mode, the proxy target exposes the same properties as seen on `this`
// for easier console inspection. In prod mode it will be an empty object so
// these properties definitions can be skipped.
function createDevRenderContext(instance) {
    const target = {
    };
    // expose internal instance for proxy handlers
    Object.defineProperty(target, `_`, {
        configurable: true,
        enumerable: false,
        get: ()=>instance
    });
    // expose public properties
    Object.keys(publicPropertiesMap).forEach((key)=>{
        Object.defineProperty(target, key, {
            configurable: true,
            enumerable: false,
            get: ()=>publicPropertiesMap[key](instance)
            ,
            // intercepted by the proxy so no need for implementation,
            // but needed to prevent set errors
            set: _shared.NOOP
        });
    });
    return target;
}
// dev only
function exposePropsOnRenderContext(instance) {
    const { ctx , propsOptions: [propsOptions]  } = instance;
    if (propsOptions) Object.keys(propsOptions).forEach((key)=>{
        Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            get: ()=>instance.props[key]
            ,
            set: _shared.NOOP
        });
    });
}
// dev only
function exposeSetupStateOnRenderContext(instance) {
    const { ctx , setupState  } = instance;
    Object.keys(_reactivity.toRaw(setupState)).forEach((key)=>{
        if (!setupState.__isScriptSetup) {
            if (key[0] === '$' || key[0] === '_') {
                warn(`setup() return property ${JSON.stringify(key)} should not start with "$" or "_" ` + `which are reserved prefixes for Vue internals.`);
                return;
            }
            Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: ()=>setupState[key]
                ,
                set: _shared.NOOP
            });
        }
    });
}
const emptyAppContext = createAppContext();
let uid$1 = 0;
function createComponentInstance(vnode, parent, suspense) {
    const type = vnode.type;
    // inherit parent app context - or - if root, adopt from root vnode
    const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
    const instance = {
        uid: uid$1++,
        vnode,
        type,
        parent,
        appContext,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new _reactivity.EffectScope(true),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: parent ? parent.provides : Object.create(appContext.provides),
        accessCache: null,
        renderCache: [],
        // local resovled assets
        components: null,
        directives: null,
        // resolved props and emits options
        propsOptions: normalizePropsOptions(type, appContext),
        emitsOptions: normalizeEmitsOptions(type, appContext),
        // emit
        emit: null,
        emitted: null,
        // props default value
        propsDefaults: _shared.EMPTY_OBJ,
        // inheritAttrs
        inheritAttrs: type.inheritAttrs,
        // state
        ctx: _shared.EMPTY_OBJ,
        data: _shared.EMPTY_OBJ,
        props: _shared.EMPTY_OBJ,
        attrs: _shared.EMPTY_OBJ,
        slots: _shared.EMPTY_OBJ,
        refs: _shared.EMPTY_OBJ,
        setupState: _shared.EMPTY_OBJ,
        setupContext: null,
        // suspense related
        suspense,
        suspenseId: suspense ? suspense.pendingId : 0,
        asyncDep: null,
        asyncResolved: false,
        // lifecycle hooks
        // not using enums here because it results in computed properties
        isMounted: false,
        isUnmounted: false,
        isDeactivated: false,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    instance.ctx = createDevRenderContext(instance);
    instance.root = parent ? parent.root : instance;
    instance.emit = emit$1.bind(null, instance);
    // apply custom element special handling
    if (vnode.ce) vnode.ce(instance);
    return instance;
}
let currentInstance = null;
const getCurrentInstance = ()=>currentInstance || currentRenderingInstance
;
const setCurrentInstance = (instance)=>{
    currentInstance = instance;
    instance.scope.on();
};
const unsetCurrentInstance = ()=>{
    currentInstance && currentInstance.scope.off();
    currentInstance = null;
};
const isBuiltInTag = /*#__PURE__*/ _shared.makeMap('slot,component');
function validateComponentName(name, config) {
    const appIsNativeTag = config.isNativeTag || _shared.NO;
    if (isBuiltInTag(name) || appIsNativeTag(name)) warn('Do not use built-in or reserved HTML elements as component id: ' + name);
}
function isStatefulComponent(instance) {
    return instance.vnode.shapeFlag & 4 /* STATEFUL_COMPONENT */ ;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false) {
    isInSSRComponentSetup = isSSR;
    const { props , children  } = instance.vnode;
    const isStateful = isStatefulComponent(instance);
    initProps(instance, props, isStateful, isSSR);
    initSlots(instance, children);
    const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : undefined;
    isInSSRComponentSetup = false;
    return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
    const Component = instance.type;
    if (Component.name) validateComponentName(Component.name, instance.appContext.config);
    if (Component.components) {
        const names = Object.keys(Component.components);
        for(let i = 0; i < names.length; i++)validateComponentName(names[i], instance.appContext.config);
    }
    if (Component.directives) {
        const names = Object.keys(Component.directives);
        for(let i = 0; i < names.length; i++)validateDirectiveName(names[i]);
    }
    if (Component.compilerOptions && isRuntimeOnly()) warn(`"compilerOptions" is only supported when using a build of Vue that ` + `includes the runtime compiler. Since you are using a runtime-only ` + `build, the options should be passed via your build tool config instead.`);
    // 0. create render proxy property access cache
    instance.accessCache = Object.create(null);
    // 1. create public instance / render proxy
    // also mark it raw so it's never observed
    instance.proxy = _reactivity.markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
    exposePropsOnRenderContext(instance);
    // 2. call setup()
    const { setup  } = Component;
    if (setup) {
        const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
        setCurrentInstance(instance);
        _reactivity.pauseTracking();
        const setupResult = callWithErrorHandling(setup, instance, 0 /* SETUP_FUNCTION */ , [
            _reactivity.shallowReadonly(instance.props),
            setupContext
        ]);
        _reactivity.resetTracking();
        unsetCurrentInstance();
        if (_shared.isPromise(setupResult)) {
            setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
            if (isSSR) // return the promise so server-renderer can wait on it
            return setupResult.then((resolvedResult)=>{
                handleSetupResult(instance, resolvedResult, isSSR);
            }).catch((e)=>{
                handleError(e, instance, 0 /* SETUP_FUNCTION */ );
            });
            else // async setup returned Promise.
            // bail here and wait for re-entry.
            instance.asyncDep = setupResult;
        } else handleSetupResult(instance, setupResult, isSSR);
    } else finishComponentSetup(instance, isSSR);
}
function handleSetupResult(instance, setupResult, isSSR) {
    if (_shared.isFunction(setupResult)) {
        // setup returned an inline render function
        if (instance.type.__ssrInlineRender) // when the function's name is `ssrRender` (compiled by SFC inline mode),
        // set it as ssrRender instead.
        instance.ssrRender = setupResult;
        else instance.render = setupResult;
    } else if (_shared.isObject(setupResult)) {
        if (isVNode(setupResult)) warn(`setup() should not return VNodes directly - ` + `return a render function instead.`);
        instance.devtoolsRawSetupState = setupResult;
        instance.setupState = _reactivity.proxyRefs(setupResult);
        exposeSetupStateOnRenderContext(instance);
    } else if (setupResult !== undefined) warn(`setup() should return an object. Received: ${setupResult === null ? 'null' : typeof setupResult}`);
    finishComponentSetup(instance, isSSR);
}
let compile;
let installWithProxy;
/**
 * For runtime-dom to register the compiler.
 * Note the exported method uses any to avoid d.ts relying on the compiler types.
 */ function registerRuntimeCompiler(_compile) {
    compile = _compile;
    installWithProxy = (i)=>{
        if (i.render._rc) i.withProxy = new Proxy(i.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
    };
}
// dev only
const isRuntimeOnly = ()=>!compile
;
function finishComponentSetup(instance, isSSR, skipOptions) {
    const Component = instance.type;
    // template / render function normalization
    // could be already set when returned from setup()
    if (!instance.render) {
        // only do on-the-fly compile if not in SSR - SSR on-the-fly compilation
        // is done by server-renderer
        if (!isSSR && compile && !Component.render) {
            const template = Component.template;
            if (template) {
                startMeasure(instance, `compile`);
                const { isCustomElement , compilerOptions  } = instance.appContext.config;
                const { delimiters , compilerOptions: componentCompilerOptions  } = Component;
                const finalCompilerOptions = _shared.extend(_shared.extend({
                    isCustomElement,
                    delimiters
                }, compilerOptions), componentCompilerOptions);
                Component.render = compile(template, finalCompilerOptions);
                endMeasure(instance, `compile`);
            }
        }
        instance.render = Component.render || _shared.NOOP;
        // for runtime-compiled render functions using `with` blocks, the render
        // proxy used needs a different `has` handler which is more performant and
        // also only allows a whitelist of globals to fallthrough.
        if (installWithProxy) installWithProxy(instance);
    }
    // support for 2.x options
    if (__VUE_OPTIONS_API__ && true) {
        setCurrentInstance(instance);
        _reactivity.pauseTracking();
        applyOptions(instance);
        _reactivity.resetTracking();
        unsetCurrentInstance();
    }
    // warn missing template/render
    // the runtime compilation of template in SSR is done by server-render
    if (!Component.render && instance.render === _shared.NOOP && !isSSR) {
        /* istanbul ignore if */ if (!compile && Component.template) warn(`Component provided template option but ` + `runtime compilation is not supported in this build of Vue.` + ` Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`);
        else warn(`Component is missing template or render function.`);
    }
}
function createAttrsProxy(instance) {
    return new Proxy(instance.attrs, {
        get (target, key) {
            markAttrsAccessed();
            _reactivity.track(instance, "get" /* GET */ , '$attrs');
            return target[key];
        },
        set () {
            warn(`setupContext.attrs is readonly.`);
            return false;
        },
        deleteProperty () {
            warn(`setupContext.attrs is readonly.`);
            return false;
        }
    });
}
function createSetupContext(instance) {
    const expose = (exposed)=>{
        if (instance.exposed) warn(`expose() should be called only once per setup().`);
        instance.exposed = exposed || {
        };
    };
    let attrs;
    // We use getters in dev in case libs like test-utils overwrite instance
    // properties (overwrites should not be done in prod)
    return Object.freeze({
        get attrs () {
            return attrs || (attrs = createAttrsProxy(instance));
        },
        get slots () {
            return _reactivity.shallowReadonly(instance.slots);
        },
        get emit () {
            return (event, ...args)=>instance.emit(event, ...args)
            ;
        },
        expose
    });
}
function getExposeProxy(instance) {
    if (instance.exposed) return instance.exposeProxy || (instance.exposeProxy = new Proxy(_reactivity.proxyRefs(_reactivity.markRaw(instance.exposed)), {
        get (target, key) {
            if (key in target) return target[key];
            else if (key in publicPropertiesMap) return publicPropertiesMap[key](instance);
        }
    }));
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str)=>str.replace(classifyRE, (c)=>c.toUpperCase()
    ).replace(/[-_]/g, '')
;
function getComponentName(Component) {
    return _shared.isFunction(Component) ? Component.displayName || Component.name : Component.name;
}
/* istanbul ignore next */ function formatComponentName(instance, Component, isRoot = false) {
    let name = getComponentName(Component);
    if (!name && Component.__file) {
        const match = Component.__file.match(/([^/\\]+)\.\w+$/);
        if (match) name = match[1];
    }
    if (!name && instance && instance.parent) {
        // try to infer the name based on reverse resolution
        const inferFromRegistry = (registry)=>{
            for(const key in registry){
                if (registry[key] === Component) return key;
            }
        };
        name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
    }
    return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
    return _shared.isFunction(value) && '__vccOpts' in value;
}
const computed = (getterOrOptions, debugOptions)=>{
    // @ts-ignore
    return _reactivity.computed(getterOrOptions, debugOptions, isInSSRComponentSetup);
};
// dev only
const warnRuntimeUsage = (method)=>warn(`${method}() is a compiler-hint helper that is only usable inside ` + `<script setup> of a single file component. Its arguments should be ` + `compiled away and passing it at runtime has no effect.`)
;
// implementation
function defineProps() {
    warnRuntimeUsage(`defineProps`);
    return null;
}
// implementation
function defineEmits() {
    warnRuntimeUsage(`defineEmits`);
    return null;
}
/**
 * Vue `<script setup>` compiler macro for declaring a component's exposed
 * instance properties when it is accessed by a parent component via template
 * refs.
 *
 * `<script setup>` components are closed by default - i.e. variables inside
 * the `<script setup>` scope is not exposed to parent unless explicitly exposed
 * via `defineExpose`.
 *
 * This is only usable inside `<script setup>`, is compiled away in the
 * output and should **not** be actually called at runtime.
 */ function defineExpose(exposed) {
    warnRuntimeUsage(`defineExpose`);
}
/**
 * Vue `<script setup>` compiler macro for providing props default values when
 * using type-based `defineProps` declaration.
 *
 * Example usage:
 * ```ts
 * withDefaults(defineProps<{
 *   size?: number
 *   labels?: string[]
 * }>(), {
 *   size: 3,
 *   labels: () => ['default label']
 * })
 * ```
 *
 * This is only usable inside `<script setup>`, is compiled away in the output
 * and should **not** be actually called at runtime.
 */ function withDefaults(props, defaults) {
    warnRuntimeUsage(`withDefaults`);
    return null;
}
function useSlots() {
    return getContext().slots;
}
function useAttrs() {
    return getContext().attrs;
}
function getContext() {
    const i = getCurrentInstance();
    if (!i) warn(`useContext() called without active instance.`);
    return i.setupContext || (i.setupContext = createSetupContext(i));
}
/**
 * Runtime helper for merging default declarations. Imported by compiled code
 * only.
 * @internal
 */ function mergeDefaults(raw, defaults) {
    const props = _shared.isArray(raw) ? raw.reduce((normalized, p)=>(normalized[p] = {
        }, normalized)
    , {
    }) : raw;
    for(const key in defaults){
        const opt = props[key];
        if (opt) {
            if (_shared.isArray(opt) || _shared.isFunction(opt)) props[key] = {
                type: opt,
                default: defaults[key]
            };
            else opt.default = defaults[key];
        } else if (opt === null) props[key] = {
            default: defaults[key]
        };
        else warn(`props default key "${key}" has no corresponding declaration.`);
    }
    return props;
}
/**
 * Used to create a proxy for the rest element when destructuring props with
 * defineProps().
 * @internal
 */ function createPropsRestProxy(props, excludedKeys) {
    const ret = {
    };
    for(const key in props)if (!excludedKeys.includes(key)) Object.defineProperty(ret, key, {
        enumerable: true,
        get: ()=>props[key]
    });
    return ret;
}
/**
 * `<script setup>` helper for persisting the current instance context over
 * async/await flows.
 *
 * `@vue/compiler-sfc` converts the following:
 *
 * ```ts
 * const x = await foo()
 * ```
 *
 * into:
 *
 * ```ts
 * let __temp, __restore
 * const x = (([__temp, __restore] = withAsyncContext(() => foo())),__temp=await __temp,__restore(),__temp)
 * ```
 * @internal
 */ function withAsyncContext(getAwaitable) {
    const ctx = getCurrentInstance();
    if (!ctx) warn(`withAsyncContext called without active current instance. ` + `This is likely a bug.`);
    let awaitable = getAwaitable();
    unsetCurrentInstance();
    if (_shared.isPromise(awaitable)) awaitable = awaitable.catch((e)=>{
        setCurrentInstance(ctx);
        throw e;
    });
    return [
        awaitable,
        ()=>setCurrentInstance(ctx)
    ];
}
// Actual implementation
function h(type, propsOrChildren, children) {
    const l = arguments.length;
    if (l === 2) {
        if (_shared.isObject(propsOrChildren) && !_shared.isArray(propsOrChildren)) {
            // single vnode without props
            if (isVNode(propsOrChildren)) return createVNode(type, null, [
                propsOrChildren
            ]);
            // props without children
            return createVNode(type, propsOrChildren);
        } else // omit props
        return createVNode(type, null, propsOrChildren);
    } else {
        if (l > 3) children = Array.prototype.slice.call(arguments, 2);
        else if (l === 3 && isVNode(children)) children = [
            children
        ];
        return createVNode(type, propsOrChildren, children);
    }
}
const ssrContextKey = Symbol(`ssrContext`);
const useSSRContext = ()=>{
    {
        const ctx = inject(ssrContextKey);
        if (!ctx) warn(`Server rendering context not provided. Make sure to only call ` + `useSSRContext() conditionally in the server build.`);
        return ctx;
    }
};
function isShallow(value) {
    return !!(value && value["__v_isShallow" /* IS_SHALLOW */ ]);
}
function initCustomFormatter() {
    /* eslint-disable no-restricted-globals */ if (typeof window === 'undefined') return;
    const vueStyle = {
        style: 'color:#3ba776'
    };
    const numberStyle = {
        style: 'color:#0b1bc9'
    };
    const stringStyle = {
        style: 'color:#b62e24'
    };
    const keywordStyle = {
        style: 'color:#9d288c'
    };
    // custom formatter for Chrome
    // https://www.mattzeunert.com/2016/02/19/custom-chrome-devtools-object-formatters.html
    const formatter = {
        header (obj) {
            // TODO also format ComponentPublicInstance & ctx.slots/attrs in setup
            if (!_shared.isObject(obj)) return null;
            if (obj.__isVue) return [
                'div',
                vueStyle,
                `VueInstance`
            ];
            else if (_reactivity.isRef(obj)) return [
                'div',
                {
                },
                [
                    'span',
                    vueStyle,
                    genRefFlag(obj)
                ],
                '<',
                formatValue(obj.value),
                `>`
            ];
            else if (_reactivity.isReactive(obj)) return [
                'div',
                {
                },
                [
                    'span',
                    vueStyle,
                    isShallow(obj) ? 'ShallowReactive' : 'Reactive'
                ],
                '<',
                formatValue(obj),
                `>${_reactivity.isReadonly(obj) ? ` (readonly)` : ``}`
            ];
            else if (_reactivity.isReadonly(obj)) return [
                'div',
                {
                },
                [
                    'span',
                    vueStyle,
                    isShallow(obj) ? 'ShallowReadonly' : 'Readonly'
                ],
                '<',
                formatValue(obj),
                '>'
            ];
            return null;
        },
        hasBody (obj) {
            return obj && obj.__isVue;
        },
        body (obj) {
            if (obj && obj.__isVue) return [
                'div',
                {
                },
                ...formatInstance(obj.$)
            ];
        }
    };
    function formatInstance(instance) {
        const blocks = [];
        if (instance.type.props && instance.props) blocks.push(createInstanceBlock('props', _reactivity.toRaw(instance.props)));
        if (instance.setupState !== _shared.EMPTY_OBJ) blocks.push(createInstanceBlock('setup', instance.setupState));
        if (instance.data !== _shared.EMPTY_OBJ) blocks.push(createInstanceBlock('data', _reactivity.toRaw(instance.data)));
        const computed1 = extractKeys(instance, 'computed');
        if (computed1) blocks.push(createInstanceBlock('computed', computed1));
        const injected = extractKeys(instance, 'inject');
        if (injected) blocks.push(createInstanceBlock('injected', injected));
        blocks.push([
            'div',
            {
            },
            [
                'span',
                {
                    style: keywordStyle.style + ';opacity:0.66'
                },
                '$ (internal): '
            ],
            [
                'object',
                {
                    object: instance
                }
            ]
        ]);
        return blocks;
    }
    function createInstanceBlock(type, target) {
        target = _shared.extend({
        }, target);
        if (!Object.keys(target).length) return [
            'span',
            {
            }
        ];
        return [
            'div',
            {
                style: 'line-height:1.25em;margin-bottom:0.6em'
            },
            [
                'div',
                {
                    style: 'color:#476582'
                },
                type
            ],
            [
                'div',
                {
                    style: 'padding-left:1.25em'
                },
                ...Object.keys(target).map((key)=>{
                    return [
                        'div',
                        {
                        },
                        [
                            'span',
                            keywordStyle,
                            key + ': '
                        ],
                        formatValue(target[key], false)
                    ];
                })
            ]
        ];
    }
    function formatValue(v, asRaw = true) {
        if (typeof v === 'number') return [
            'span',
            numberStyle,
            v
        ];
        else if (typeof v === 'string') return [
            'span',
            stringStyle,
            JSON.stringify(v)
        ];
        else if (typeof v === 'boolean') return [
            'span',
            keywordStyle,
            v
        ];
        else if (_shared.isObject(v)) return [
            'object',
            {
                object: asRaw ? _reactivity.toRaw(v) : v
            }
        ];
        else return [
            'span',
            stringStyle,
            String(v)
        ];
    }
    function extractKeys(instance, type) {
        const Comp = instance.type;
        if (_shared.isFunction(Comp)) return;
        const extracted = {
        };
        for(const key in instance.ctx)if (isKeyOfType(Comp, key, type)) extracted[key] = instance.ctx[key];
        return extracted;
    }
    function isKeyOfType(Comp, key, type) {
        const opts = Comp[type];
        if (_shared.isArray(opts) && opts.includes(key) || _shared.isObject(opts) && key in opts) return true;
        if (Comp.extends && isKeyOfType(Comp.extends, key, type)) return true;
        if (Comp.mixins && Comp.mixins.some((m)=>isKeyOfType(m, key, type)
        )) return true;
    }
    function genRefFlag(v) {
        if (isShallow(v)) return `ShallowRef`;
        if (v.effect) return `ComputedRef`;
        return `Ref`;
    }
    if (window.devtoolsFormatters) window.devtoolsFormatters.push(formatter);
    else window.devtoolsFormatters = [
        formatter
    ];
}
function withMemo(memo, render, cache, index) {
    const cached = cache[index];
    if (cached && isMemoSame(cached, memo)) return cached;
    const ret = render();
    // shallow clone
    ret.memo = memo.slice();
    return cache[index] = ret;
}
function isMemoSame(cached, memo) {
    const prev = cached.memo;
    if (prev.length != memo.length) return false;
    for(let i = 0; i < prev.length; i++){
        if (prev[i] !== memo[i]) return false;
    }
    // make sure to let parent block track it when returning cached
    if (isBlockTreeEnabled > 0 && currentBlock) currentBlock.push(cached);
    return true;
}
// Core API ------------------------------------------------------------------
const version = "3.2.30";
const _ssrUtils = {
    createComponentInstance,
    setupComponent,
    renderComponentRoot,
    setCurrentRenderingInstance,
    isVNode,
    normalizeVNode
};
/**
 * SSR utils for \@vue/server-renderer. Only exposed in cjs builds.
 * @internal
 */ const ssrUtils = _ssrUtils;
/**
 * @internal only exposed in compat builds
 */ const resolveFilter = null;
/**
 * @internal only exposed in compat builds.
 */ const compatUtils = null;

},{"@vue/reactivity":"d7UXQ","@vue/shared":"3SM3y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d7UXQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EffectScope", ()=>EffectScope
);
parcelHelpers.export(exports, "ITERATE_KEY", ()=>ITERATE_KEY
);
parcelHelpers.export(exports, "ReactiveEffect", ()=>ReactiveEffect
);
parcelHelpers.export(exports, "computed", ()=>computed
);
parcelHelpers.export(exports, "customRef", ()=>customRef
);
parcelHelpers.export(exports, "deferredComputed", ()=>deferredComputed
);
parcelHelpers.export(exports, "effect", ()=>effect
);
parcelHelpers.export(exports, "effectScope", ()=>effectScope
);
parcelHelpers.export(exports, "enableTracking", ()=>enableTracking
);
parcelHelpers.export(exports, "getCurrentScope", ()=>getCurrentScope
);
parcelHelpers.export(exports, "isProxy", ()=>isProxy
);
parcelHelpers.export(exports, "isReactive", ()=>isReactive
);
parcelHelpers.export(exports, "isReadonly", ()=>isReadonly
);
parcelHelpers.export(exports, "isRef", ()=>isRef
);
parcelHelpers.export(exports, "isShallow", ()=>isShallow
);
parcelHelpers.export(exports, "markRaw", ()=>markRaw
);
parcelHelpers.export(exports, "onScopeDispose", ()=>onScopeDispose
);
parcelHelpers.export(exports, "pauseTracking", ()=>pauseTracking
);
parcelHelpers.export(exports, "proxyRefs", ()=>proxyRefs
);
parcelHelpers.export(exports, "reactive", ()=>reactive
);
parcelHelpers.export(exports, "readonly", ()=>readonly
);
parcelHelpers.export(exports, "ref", ()=>ref
);
parcelHelpers.export(exports, "resetTracking", ()=>resetTracking
);
parcelHelpers.export(exports, "shallowReactive", ()=>shallowReactive
);
parcelHelpers.export(exports, "shallowReadonly", ()=>shallowReadonly
);
parcelHelpers.export(exports, "shallowRef", ()=>shallowRef
);
parcelHelpers.export(exports, "stop", ()=>stop
);
parcelHelpers.export(exports, "toRaw", ()=>toRaw
);
parcelHelpers.export(exports, "toRef", ()=>toRef
);
parcelHelpers.export(exports, "toRefs", ()=>toRefs
);
parcelHelpers.export(exports, "track", ()=>track
);
parcelHelpers.export(exports, "trigger", ()=>trigger
);
parcelHelpers.export(exports, "triggerRef", ()=>triggerRef
);
parcelHelpers.export(exports, "unref", ()=>unref
);
var _shared = require("@vue/shared");
function warn(msg, ...args) {
    console.warn(`[Vue warn] ${msg}`, ...args);
}
let activeEffectScope;
class EffectScope {
    constructor(detached = false){
        this.active = true;
        this.effects = [];
        this.cleanups = [];
        if (!detached && activeEffectScope) {
            this.parent = activeEffectScope;
            this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
        }
    }
    run(fn) {
        if (this.active) try {
            activeEffectScope = this;
            return fn();
        } finally{
            activeEffectScope = this.parent;
        }
        else warn(`cannot run an inactive effect scope.`);
    }
    on() {
        activeEffectScope = this;
    }
    off() {
        activeEffectScope = this.parent;
    }
    stop(fromParent) {
        if (this.active) {
            let i, l;
            for(i = 0, l = this.effects.length; i < l; i++)this.effects[i].stop();
            for(i = 0, l = this.cleanups.length; i < l; i++)this.cleanups[i]();
            if (this.scopes) for(i = 0, l = this.scopes.length; i < l; i++)this.scopes[i].stop(true);
            // nested scope, dereference from parent to avoid memory leaks
            if (this.parent && !fromParent) {
                // optimized O(1) removal
                const last = this.parent.scopes.pop();
                if (last && last !== this) {
                    this.parent.scopes[this.index] = last;
                    last.index = this.index;
                }
            }
            this.active = false;
        }
    }
}
function effectScope(detached) {
    return new EffectScope(detached);
}
function recordEffectScope(effect1, scope = activeEffectScope) {
    if (scope && scope.active) scope.effects.push(effect1);
}
function getCurrentScope() {
    return activeEffectScope;
}
function onScopeDispose(fn) {
    if (activeEffectScope) activeEffectScope.cleanups.push(fn);
    else warn(`onScopeDispose() is called when there is no active effect scope` + ` to be associated with.`);
}
const createDep = (effects)=>{
    const dep = new Set(effects);
    dep.w = 0;
    dep.n = 0;
    return dep;
};
const wasTracked = (dep)=>(dep.w & trackOpBit) > 0
;
const newTracked = (dep)=>(dep.n & trackOpBit) > 0
;
const initDepMarkers = ({ deps  })=>{
    if (deps.length) for(let i = 0; i < deps.length; i++)deps[i].w |= trackOpBit; // set was tracked
};
const finalizeDepMarkers = (effect2)=>{
    const { deps  } = effect2;
    if (deps.length) {
        let ptr = 0;
        for(let i = 0; i < deps.length; i++){
            const dep = deps[i];
            if (wasTracked(dep) && !newTracked(dep)) dep.delete(effect2);
            else deps[ptr++] = dep;
            // clear bits
            dep.w &= ~trackOpBit;
            dep.n &= ~trackOpBit;
        }
        deps.length = ptr;
    }
};
const targetMap = new WeakMap();
// The number of effects currently being tracked recursively.
let effectTrackDepth = 0;
let trackOpBit = 1;
/**
 * The bitwise track markers support at most 30 levels of recursion.
 * This value is chosen to enable modern JS engines to use a SMI on all platforms.
 * When recursion depth is greater, fall back to using a full cleanup.
 */ const maxMarkerBits = 30;
let activeEffect;
const ITERATE_KEY = Symbol('iterate');
const MAP_KEY_ITERATE_KEY = Symbol('Map key iterate');
class ReactiveEffect {
    constructor(fn, scheduler1 = null, scope){
        this.fn = fn;
        this.scheduler = scheduler1;
        this.active = true;
        this.deps = [];
        this.parent = undefined;
        recordEffectScope(this, scope);
    }
    run() {
        if (!this.active) return this.fn();
        let parent = activeEffect;
        let lastShouldTrack = shouldTrack;
        while(parent){
            if (parent === this) return;
            parent = parent.parent;
        }
        try {
            this.parent = activeEffect;
            activeEffect = this;
            shouldTrack = true;
            trackOpBit = 1 << ++effectTrackDepth;
            if (effectTrackDepth <= maxMarkerBits) initDepMarkers(this);
            else cleanupEffect(this);
            return this.fn();
        } finally{
            if (effectTrackDepth <= maxMarkerBits) finalizeDepMarkers(this);
            trackOpBit = 1 << --effectTrackDepth;
            activeEffect = this.parent;
            shouldTrack = lastShouldTrack;
            this.parent = undefined;
        }
    }
    stop() {
        if (this.active) {
            cleanupEffect(this);
            if (this.onStop) this.onStop();
            this.active = false;
        }
    }
}
function cleanupEffect(effect3) {
    const { deps  } = effect3;
    if (deps.length) {
        for(let i = 0; i < deps.length; i++)deps[i].delete(effect3);
        deps.length = 0;
    }
}
function effect(fn, options) {
    if (fn.effect) fn = fn.effect.fn;
    const _effect = new ReactiveEffect(fn);
    if (options) {
        _shared.extend(_effect, options);
        if (options.scope) recordEffectScope(_effect, options.scope);
    }
    if (!options || !options.lazy) _effect.run();
    const runner = _effect.run.bind(_effect);
    runner.effect = _effect;
    return runner;
}
function stop(runner) {
    runner.effect.stop();
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
}
function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
}
function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === undefined ? true : last;
}
function track(target, type, key) {
    if (shouldTrack && activeEffect) {
        let depsMap = targetMap.get(target);
        if (!depsMap) targetMap.set(target, depsMap = new Map());
        let dep = depsMap.get(key);
        if (!dep) depsMap.set(key, dep = createDep());
        const eventInfo = {
            effect: activeEffect,
            target,
            type,
            key
        };
        trackEffects(dep, eventInfo);
    }
}
function trackEffects(dep, debuggerEventExtraInfo) {
    let shouldTrack1 = false;
    if (effectTrackDepth <= maxMarkerBits) {
        if (!newTracked(dep)) {
            dep.n |= trackOpBit; // set newly tracked
            shouldTrack1 = !wasTracked(dep);
        }
    } else // Full cleanup mode.
    shouldTrack1 = !dep.has(activeEffect);
    if (shouldTrack1) {
        dep.add(activeEffect);
        activeEffect.deps.push(dep);
        if (activeEffect.onTrack) activeEffect.onTrack(Object.assign({
            effect: activeEffect
        }, debuggerEventExtraInfo));
    }
}
function trigger(target, type, key1, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) // never been tracked
    return;
    let deps = [];
    if (type === "clear" /* CLEAR */ ) // collection being cleared
    // trigger all effects for target
    deps = [
        ...depsMap.values()
    ];
    else if (key1 === 'length' && _shared.isArray(target)) depsMap.forEach((dep, key)=>{
        if (key === 'length' || key >= newValue) deps.push(dep);
    });
    else {
        // schedule runs for SET | ADD | DELETE
        if (key1 !== void 0) deps.push(depsMap.get(key1));
        // also run for iteration key on ADD | DELETE | Map.SET
        switch(type){
            case "add" /* ADD */ :
                if (!_shared.isArray(target)) {
                    deps.push(depsMap.get(ITERATE_KEY));
                    if (_shared.isMap(target)) deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                } else if (_shared.isIntegerKey(key1)) // new index added to array -> length changes
                deps.push(depsMap.get('length'));
                break;
            case "delete" /* DELETE */ :
                if (!_shared.isArray(target)) {
                    deps.push(depsMap.get(ITERATE_KEY));
                    if (_shared.isMap(target)) deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                }
                break;
            case "set" /* SET */ :
                if (_shared.isMap(target)) deps.push(depsMap.get(ITERATE_KEY));
                break;
        }
    }
    const eventInfo = {
        target,
        type,
        key: key1,
        newValue,
        oldValue,
        oldTarget
    };
    if (deps.length === 1) {
        if (deps[0]) triggerEffects(deps[0], eventInfo);
    } else {
        const effects = [];
        for (const dep of deps)if (dep) effects.push(...dep);
        triggerEffects(createDep(effects), eventInfo);
    }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
    // spread into array for stabilization
    for (const effect4 of _shared.isArray(dep) ? dep : [
        ...dep
    ])if (effect4 !== activeEffect || effect4.allowRecurse) {
        if (effect4.onTrigger) effect4.onTrigger(_shared.extend({
            effect: effect4
        }, debuggerEventExtraInfo));
        if (effect4.scheduler) effect4.scheduler();
        else effect4.run();
    }
}
const isNonTrackableKeys = /*#__PURE__*/ _shared.makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key)=>Symbol[key]
).filter(_shared.isSymbol));
const get = /*#__PURE__*/ createGetter();
const shallowGet = /*#__PURE__*/ createGetter(false, true);
const readonlyGet = /*#__PURE__*/ createGetter(true);
const shallowReadonlyGet = /*#__PURE__*/ createGetter(true, true);
const arrayInstrumentations = /*#__PURE__*/ createArrayInstrumentations();
function createArrayInstrumentations() {
    const instrumentations = {
    };
    [
        'includes',
        'indexOf',
        'lastIndexOf'
    ].forEach((key)=>{
        instrumentations[key] = function(...args) {
            const arr = toRaw(this);
            for(let i = 0, l = this.length; i < l; i++)track(arr, "get" /* GET */ , i + '');
            // we run the method using the original args first (which may be reactive)
            const res = arr[key](...args);
            if (res === -1 || res === false) // if that didn't work, run it again using raw values.
            return arr[key](...args.map(toRaw));
            else return res;
        };
    });
    [
        'push',
        'pop',
        'shift',
        'unshift',
        'splice'
    ].forEach((key)=>{
        instrumentations[key] = function(...args) {
            pauseTracking();
            const res = toRaw(this)[key].apply(this, args);
            resetTracking();
            return res;
        };
    });
    return instrumentations;
}
function createGetter(isReadonly1 = false, shallow = false) {
    return function get(target, key, receiver) {
        if (key === "__v_isReactive" /* IS_REACTIVE */ ) return !isReadonly1;
        else if (key === "__v_isReadonly" /* IS_READONLY */ ) return isReadonly1;
        else if (key === "__v_isShallow" /* IS_SHALLOW */ ) return shallow;
        else if (key === "__v_raw" /* RAW */  && receiver === (isReadonly1 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) return target;
        const targetIsArray = _shared.isArray(target);
        if (!isReadonly1 && targetIsArray && _shared.hasOwn(arrayInstrumentations, key)) return Reflect.get(arrayInstrumentations, key, receiver);
        const res = Reflect.get(target, key, receiver);
        if (_shared.isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) return res;
        if (!isReadonly1) track(target, "get" /* GET */ , key);
        if (shallow) return res;
        if (isRef(res)) {
            // ref unwrapping - does not apply for Array + integer key.
            const shouldUnwrap = !targetIsArray || !_shared.isIntegerKey(key);
            return shouldUnwrap ? res.value : res;
        }
        if (_shared.isObject(res)) // Convert returned value into a proxy as well. we do the isObject check
        // here to avoid invalid value warning. Also need to lazy access readonly
        // and reactive here to avoid circular dependency.
        return isReadonly1 ? readonly(res) : reactive(res);
        return res;
    };
}
const set = /*#__PURE__*/ createSetter();
const shallowSet = /*#__PURE__*/ createSetter(true);
function createSetter(shallow = false) {
    return function set(target, key, value, receiver) {
        let oldValue = target[key];
        if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) return false;
        if (!shallow && !isReadonly(value)) {
            if (!isShallow(value)) {
                value = toRaw(value);
                oldValue = toRaw(oldValue);
            }
            if (!_shared.isArray(target) && isRef(oldValue) && !isRef(value)) {
                oldValue.value = value;
                return true;
            }
        }
        const hadKey = _shared.isArray(target) && _shared.isIntegerKey(key) ? Number(key) < target.length : _shared.hasOwn(target, key);
        const result = Reflect.set(target, key, value, receiver);
        // don't trigger if target is something up in the prototype chain of original
        if (target === toRaw(receiver)) {
            if (!hadKey) trigger(target, "add" /* ADD */ , key, value);
            else if (_shared.hasChanged(value, oldValue)) trigger(target, "set" /* SET */ , key, value, oldValue);
        }
        return result;
    };
}
function deleteProperty(target, key) {
    const hadKey = _shared.hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) trigger(target, "delete" /* DELETE */ , key, undefined, oldValue);
    return result;
}
function has(target, key) {
    const result = Reflect.has(target, key);
    if (!_shared.isSymbol(key) || !builtInSymbols.has(key)) track(target, "has" /* HAS */ , key);
    return result;
}
function ownKeys(target) {
    track(target, "iterate" /* ITERATE */ , _shared.isArray(target) ? 'length' : ITERATE_KEY);
    return Reflect.ownKeys(target);
}
const mutableHandlers = {
    get,
    set,
    deleteProperty,
    has,
    ownKeys
};
const readonlyHandlers = {
    get: readonlyGet,
    set (target, key) {
        console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
        return true;
    },
    deleteProperty (target, key) {
        console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
        return true;
    }
};
const shallowReactiveHandlers = /*#__PURE__*/ _shared.extend({
}, mutableHandlers, {
    get: shallowGet,
    set: shallowSet
});
// Props handlers are special in the sense that it should not unwrap top-level
// refs (in order to allow refs to be explicitly passed down), but should
// retain the reactivity of the normal readonly object.
const shallowReadonlyHandlers = /*#__PURE__*/ _shared.extend({
}, readonlyHandlers, {
    get: shallowReadonlyGet
});
const toShallow = (value)=>value
;
const getProto = (v)=>Reflect.getPrototypeOf(v)
;
function get$1(target, key, isReadonly2 = false, isShallow1 = false) {
    // #1772: readonly(reactive(Map)) should return readonly + reactive version
    // of the value
    target = target["__v_raw" /* RAW */ ];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) !isReadonly2 && track(rawTarget, "get" /* GET */ , key);
    !isReadonly2 && track(rawTarget, "get" /* GET */ , rawKey);
    const { has: has1  } = getProto(rawTarget);
    const wrap = isShallow1 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    if (has1.call(rawTarget, key)) return wrap(target.get(key));
    else if (has1.call(rawTarget, rawKey)) return wrap(target.get(rawKey));
    else if (target !== rawTarget) // #3602 readonly(reactive(Map))
    // ensure that the nested reactive `Map` can do tracking for itself
    target.get(key);
}
function has$1(key, isReadonly3 = false) {
    const target = this["__v_raw" /* RAW */ ];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) !isReadonly3 && track(rawTarget, "has" /* HAS */ , key);
    !isReadonly3 && track(rawTarget, "has" /* HAS */ , rawKey);
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly4 = false) {
    target = target["__v_raw" /* RAW */ ];
    !isReadonly4 && track(toRaw(target), "iterate" /* ITERATE */ , ITERATE_KEY);
    return Reflect.get(target, 'size', target);
}
function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
        target.add(value);
        trigger(target, "add" /* ADD */ , value, value);
    }
    return this;
}
function set$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has: has2 , get: get1  } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has2.call(target, key);
    } else checkIdentityKeys(target, has2, key);
    const oldValue = get1.call(target, key);
    target.set(key, value);
    if (!hadKey) trigger(target, "add" /* ADD */ , key, value);
    else if (_shared.hasChanged(value, oldValue)) trigger(target, "set" /* SET */ , key, value, oldValue);
    return this;
}
function deleteEntry(key) {
    const target = toRaw(this);
    const { has: has3 , get: get2  } = getProto(target);
    let hadKey = has3.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has3.call(target, key);
    } else checkIdentityKeys(target, has3, key);
    const oldValue = get2 ? get2.call(target, key) : undefined;
    // forward the operation before queueing reactions
    const result = target.delete(key);
    if (hadKey) trigger(target, "delete" /* DELETE */ , key, undefined, oldValue);
    return result;
}
function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = _shared.isMap(target) ? new Map(target) : new Set(target);
    // forward the operation before queueing reactions
    const result = target.clear();
    if (hadItems) trigger(target, "clear" /* CLEAR */ , undefined, undefined, oldTarget);
    return result;
}
function createForEach(isReadonly5, isShallow2) {
    return function forEach(callback, thisArg) {
        const observed = this;
        const target = observed["__v_raw" /* RAW */ ];
        const rawTarget = toRaw(target);
        const wrap = isShallow2 ? toShallow : isReadonly5 ? toReadonly : toReactive;
        !isReadonly5 && track(rawTarget, "iterate" /* ITERATE */ , ITERATE_KEY);
        return target.forEach((value, key)=>{
            // important: make sure the callback is
            // 1. invoked with the reactive map as `this` and 3rd arg
            // 2. the value received should be a corresponding reactive/readonly.
            return callback.call(thisArg, wrap(value), wrap(key), observed);
        });
    };
}
function createIterableMethod(method, isReadonly6, isShallow3) {
    return function(...args) {
        const target = this["__v_raw" /* RAW */ ];
        const rawTarget = toRaw(target);
        const targetIsMap = _shared.isMap(rawTarget);
        const isPair = method === 'entries' || method === Symbol.iterator && targetIsMap;
        const isKeyOnly = method === 'keys' && targetIsMap;
        const innerIterator = target[method](...args);
        const wrap = isShallow3 ? toShallow : isReadonly6 ? toReadonly : toReactive;
        !isReadonly6 && track(rawTarget, "iterate" /* ITERATE */ , isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
        // return a wrapped iterator which returns observed versions of the
        // values emitted from the real iterator
        return {
            // iterator protocol
            next () {
                const { value , done  } = innerIterator.next();
                return done ? {
                    value,
                    done
                } : {
                    value: isPair ? [
                        wrap(value[0]),
                        wrap(value[1])
                    ] : wrap(value),
                    done
                };
            },
            // iterable protocol
            [Symbol.iterator] () {
                return this;
            }
        };
    };
}
function createReadonlyMethod(type) {
    return function(...args) {
        {
            const key = args[0] ? `on key "${args[0]}" ` : ``;
            console.warn(`${_shared.capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
        }
        return type === "delete" /* DELETE */  ? false : this;
    };
}
function createInstrumentations() {
    const mutableInstrumentations1 = {
        get (key) {
            return get$1(this, key);
        },
        get size () {
            return size(this);
        },
        has: has$1,
        add,
        set: set$1,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, false)
    };
    const shallowInstrumentations1 = {
        get (key) {
            return get$1(this, key, false, true);
        },
        get size () {
            return size(this);
        },
        has: has$1,
        add,
        set: set$1,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, true)
    };
    const readonlyInstrumentations1 = {
        get (key) {
            return get$1(this, key, true);
        },
        get size () {
            return size(this, true);
        },
        has (key) {
            return has$1.call(this, key, true);
        },
        add: createReadonlyMethod("add" /* ADD */ ),
        set: createReadonlyMethod("set" /* SET */ ),
        delete: createReadonlyMethod("delete" /* DELETE */ ),
        clear: createReadonlyMethod("clear" /* CLEAR */ ),
        forEach: createForEach(true, false)
    };
    const shallowReadonlyInstrumentations1 = {
        get (key) {
            return get$1(this, key, true, true);
        },
        get size () {
            return size(this, true);
        },
        has (key) {
            return has$1.call(this, key, true);
        },
        add: createReadonlyMethod("add" /* ADD */ ),
        set: createReadonlyMethod("set" /* SET */ ),
        delete: createReadonlyMethod("delete" /* DELETE */ ),
        clear: createReadonlyMethod("clear" /* CLEAR */ ),
        forEach: createForEach(true, true)
    };
    const iteratorMethods = [
        'keys',
        'values',
        'entries',
        Symbol.iterator
    ];
    iteratorMethods.forEach((method)=>{
        mutableInstrumentations1[method] = createIterableMethod(method, false, false);
        readonlyInstrumentations1[method] = createIterableMethod(method, true, false);
        shallowInstrumentations1[method] = createIterableMethod(method, false, true);
        shallowReadonlyInstrumentations1[method] = createIterableMethod(method, true, true);
    });
    return [
        mutableInstrumentations1,
        readonlyInstrumentations1,
        shallowInstrumentations1,
        shallowReadonlyInstrumentations1
    ];
}
const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* #__PURE__*/ createInstrumentations();
function createInstrumentationGetter(isReadonly7, shallow) {
    const instrumentations = shallow ? isReadonly7 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly7 ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver)=>{
        if (key === "__v_isReactive" /* IS_REACTIVE */ ) return !isReadonly7;
        else if (key === "__v_isReadonly" /* IS_READONLY */ ) return isReadonly7;
        else if (key === "__v_raw" /* RAW */ ) return target;
        return Reflect.get(_shared.hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
}
const mutableCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(true, true)
};
function checkIdentityKeys(target, has4, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has4.call(target, rawKey)) {
        const type = _shared.toRawType(target);
        console.warn(`Reactive ${type} contains both the raw and reactive ` + `versions of the same object${type === `Map` ? ` as keys` : ``}, ` + `which can lead to inconsistencies. ` + `Avoid differentiating between the raw and reactive versions ` + `of an object and only use the reactive version if possible.`);
    }
}
const reactiveMap = new WeakMap();
const shallowReactiveMap = new WeakMap();
const readonlyMap = new WeakMap();
const shallowReadonlyMap = new WeakMap();
function targetTypeMap(rawType) {
    switch(rawType){
        case 'Object':
        case 'Array':
            return 1 /* COMMON */ ;
        case 'Map':
        case 'Set':
        case 'WeakMap':
        case 'WeakSet':
            return 2 /* COLLECTION */ ;
        default:
            return 0 /* INVALID */ ;
    }
}
function getTargetType(value) {
    return value["__v_skip" /* SKIP */ ] || !Object.isExtensible(value) ? 0 /* INVALID */  : targetTypeMap(_shared.toRawType(value));
}
function reactive(target) {
    // if trying to observe a readonly proxy, return the readonly version.
    if (isReadonly(target)) return target;
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
/**
 * Return a shallowly-reactive copy of the original object, where only the root
 * level properties are reactive. It also does not auto-unwrap refs (even at the
 * root level).
 */ function shallowReactive(target) {
    return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
/**
 * Creates a readonly copy of the original object. Note the returned copy is not
 * made reactive, but `readonly` can be called on an already reactive object.
 */ function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
/**
 * Returns a reactive-copy of the original object, where only the root level
 * properties are readonly, and does NOT unwrap refs nor recursively convert
 * returned properties.
 * This is used for creating the props proxy object for stateful components.
 */ function shallowReadonly(target) {
    return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}
function createReactiveObject(target, isReadonly8, baseHandlers, collectionHandlers, proxyMap) {
    if (!_shared.isObject(target)) {
        console.warn(`value cannot be made reactive: ${String(target)}`);
        return target;
    }
    // target is already a Proxy, return it.
    // exception: calling readonly() on a reactive object
    if (target["__v_raw" /* RAW */ ] && !(isReadonly8 && target["__v_isReactive" /* IS_REACTIVE */ ])) return target;
    // target already has corresponding Proxy
    const existingProxy = proxyMap.get(target);
    if (existingProxy) return existingProxy;
    // only a whitelist of value types can be observed.
    const targetType = getTargetType(target);
    if (targetType === 0 /* INVALID */ ) return target;
    const proxy = new Proxy(target, targetType === 2 /* COLLECTION */  ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
}
function isReactive(value) {
    if (isReadonly(value)) return isReactive(value["__v_raw" /* RAW */ ]);
    return !!(value && value["__v_isReactive" /* IS_REACTIVE */ ]);
}
function isReadonly(value) {
    return !!(value && value["__v_isReadonly" /* IS_READONLY */ ]);
}
function isShallow(value) {
    return !!(value && value["__v_isShallow" /* IS_SHALLOW */ ]);
}
function isProxy(value) {
    return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
    const raw = observed && observed["__v_raw" /* RAW */ ];
    return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
    _shared.def(value, "__v_skip" /* SKIP */ , true);
    return value;
}
const toReactive = (value)=>_shared.isObject(value) ? reactive(value) : value
;
const toReadonly = (value)=>_shared.isObject(value) ? readonly(value) : value
;
function trackRefValue(ref1) {
    if (shouldTrack && activeEffect) {
        ref1 = toRaw(ref1);
        trackEffects(ref1.dep || (ref1.dep = createDep()), {
            target: ref1,
            type: "get" /* GET */ ,
            key: 'value'
        });
    }
}
function triggerRefValue(ref2, newVal) {
    ref2 = toRaw(ref2);
    if (ref2.dep) triggerEffects(ref2.dep, {
        target: ref2,
        type: "set" /* SET */ ,
        key: 'value',
        newValue: newVal
    });
}
function isRef(r) {
    return !!(r && r.__v_isRef === true);
}
function ref(value) {
    return createRef(value, false);
}
function shallowRef(value) {
    return createRef(value, true);
}
function createRef(rawValue, shallow) {
    if (isRef(rawValue)) return rawValue;
    return new RefImpl(rawValue, shallow);
}
class RefImpl {
    constructor(value, __v_isShallow){
        this.__v_isShallow = __v_isShallow;
        this.dep = undefined;
        this.__v_isRef = true;
        this._rawValue = __v_isShallow ? value : toRaw(value);
        this._value = __v_isShallow ? value : toReactive(value);
    }
    get value() {
        trackRefValue(this);
        return this._value;
    }
    set value(newVal) {
        newVal = this.__v_isShallow ? newVal : toRaw(newVal);
        if (_shared.hasChanged(newVal, this._rawValue)) {
            this._rawValue = newVal;
            this._value = this.__v_isShallow ? newVal : toReactive(newVal);
            triggerRefValue(this, newVal);
        }
    }
}
function triggerRef(ref3) {
    triggerRefValue(ref3, ref3.value);
}
function unref(ref4) {
    return isRef(ref4) ? ref4.value : ref4;
}
const shallowUnwrapHandlers = {
    get: (target, key, receiver)=>unref(Reflect.get(target, key, receiver))
    ,
    set: (target, key, value, receiver)=>{
        const oldValue = target[key];
        if (isRef(oldValue) && !isRef(value)) {
            oldValue.value = value;
            return true;
        } else return Reflect.set(target, key, value, receiver);
    }
};
function proxyRefs(objectWithRefs) {
    return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
class CustomRefImpl {
    constructor(factory){
        this.dep = undefined;
        this.__v_isRef = true;
        const { get: get3 , set: set1  } = factory(()=>trackRefValue(this)
        , ()=>triggerRefValue(this)
        );
        this._get = get3;
        this._set = set1;
    }
    get value() {
        return this._get();
    }
    set value(newVal) {
        this._set(newVal);
    }
}
function customRef(factory) {
    return new CustomRefImpl(factory);
}
function toRefs(object) {
    if (!isProxy(object)) console.warn(`toRefs() expects a reactive object but received a plain one.`);
    const ret = _shared.isArray(object) ? new Array(object.length) : {
    };
    for(const key in object)ret[key] = toRef(object, key);
    return ret;
}
class ObjectRefImpl {
    constructor(_object, _key, _defaultValue){
        this._object = _object;
        this._key = _key;
        this._defaultValue = _defaultValue;
        this.__v_isRef = true;
    }
    get value() {
        const val = this._object[this._key];
        return val === undefined ? this._defaultValue : val;
    }
    set value(newVal) {
        this._object[this._key] = newVal;
    }
}
function toRef(object, key, defaultValue) {
    const val = object[key];
    return isRef(val) ? val : new ObjectRefImpl(object, key, defaultValue);
}
class ComputedRefImpl {
    constructor(getter, _setter, isReadonly9, isSSR){
        this._setter = _setter;
        this.dep = undefined;
        this.__v_isRef = true;
        this._dirty = true;
        this.effect = new ReactiveEffect(getter, ()=>{
            if (!this._dirty) {
                this._dirty = true;
                triggerRefValue(this);
            }
        });
        this.effect.computed = this;
        this.effect.active = this._cacheable = !isSSR;
        this["__v_isReadonly" /* IS_READONLY */ ] = isReadonly9;
    }
    get value() {
        // the computed ref may get wrapped by other proxies e.g. readonly() #3376
        const self = toRaw(this);
        trackRefValue(self);
        if (self._dirty || !self._cacheable) {
            self._dirty = false;
            self._value = self.effect.run();
        }
        return self._value;
    }
    set value(newValue) {
        this._setter(newValue);
    }
}
function computed(getterOrOptions, debugOptions, isSSR = false) {
    let getter;
    let setter;
    const onlyGetter = _shared.isFunction(getterOrOptions);
    if (onlyGetter) {
        getter = getterOrOptions;
        setter = ()=>{
            console.warn('Write operation failed: computed value is readonly');
        };
    } else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
    }
    const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
    if (debugOptions && !isSSR) {
        cRef.effect.onTrack = debugOptions.onTrack;
        cRef.effect.onTrigger = debugOptions.onTrigger;
    }
    return cRef;
}
var _a;
const tick = Promise.resolve();
const queue = [];
let queued = false;
const scheduler = (fn)=>{
    queue.push(fn);
    if (!queued) {
        queued = true;
        tick.then(flush);
    }
};
const flush = ()=>{
    for(let i = 0; i < queue.length; i++)queue[i]();
    queue.length = 0;
    queued = false;
};
class DeferredComputedRefImpl {
    constructor(getter){
        this.dep = undefined;
        this._dirty = true;
        this.__v_isRef = true;
        this[_a] = true;
        let compareTarget;
        let hasCompareTarget = false;
        let scheduled = false;
        this.effect = new ReactiveEffect(getter, (computedTrigger)=>{
            if (this.dep) {
                if (computedTrigger) {
                    compareTarget = this._value;
                    hasCompareTarget = true;
                } else if (!scheduled) {
                    const valueToCompare = hasCompareTarget ? compareTarget : this._value;
                    scheduled = true;
                    hasCompareTarget = false;
                    scheduler(()=>{
                        if (this.effect.active && this._get() !== valueToCompare) triggerRefValue(this);
                        scheduled = false;
                    });
                }
                // chained upstream computeds are notified synchronously to ensure
                // value invalidation in case of sync access; normal effects are
                // deferred to be triggered in scheduler.
                for (const e of this.dep)if (e.computed instanceof DeferredComputedRefImpl) e.scheduler(true);
            }
            this._dirty = true;
        });
        this.effect.computed = this;
    }
    _get() {
        if (this._dirty) {
            this._dirty = false;
            return this._value = this.effect.run();
        }
        return this._value;
    }
    get value() {
        trackRefValue(this);
        // the computed ref may get wrapped by other proxies e.g. readonly() #3376
        return toRaw(this)._get();
    }
}
_a = "__v_isReadonly" /* IS_READONLY */ ;
function deferredComputed(getter) {
    return new DeferredComputedRefImpl(getter);
}

},{"@vue/shared":"3SM3y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3SM3y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EMPTY_ARR", ()=>EMPTY_ARR
);
parcelHelpers.export(exports, "EMPTY_OBJ", ()=>EMPTY_OBJ
);
parcelHelpers.export(exports, "NO", ()=>NO
);
parcelHelpers.export(exports, "NOOP", ()=>NOOP
);
parcelHelpers.export(exports, "PatchFlagNames", ()=>PatchFlagNames
);
parcelHelpers.export(exports, "camelize", ()=>camelize
);
parcelHelpers.export(exports, "capitalize", ()=>capitalize
);
parcelHelpers.export(exports, "def", ()=>def
);
parcelHelpers.export(exports, "escapeHtml", ()=>escapeHtml
);
parcelHelpers.export(exports, "escapeHtmlComment", ()=>escapeHtmlComment
);
parcelHelpers.export(exports, "extend", ()=>extend
);
parcelHelpers.export(exports, "generateCodeFrame", ()=>generateCodeFrame
);
parcelHelpers.export(exports, "getGlobalThis", ()=>getGlobalThis
);
parcelHelpers.export(exports, "hasChanged", ()=>hasChanged
);
parcelHelpers.export(exports, "hasOwn", ()=>hasOwn
);
parcelHelpers.export(exports, "hyphenate", ()=>hyphenate
);
parcelHelpers.export(exports, "includeBooleanAttr", ()=>includeBooleanAttr
);
parcelHelpers.export(exports, "invokeArrayFns", ()=>invokeArrayFns
);
parcelHelpers.export(exports, "isArray", ()=>isArray
);
parcelHelpers.export(exports, "isBooleanAttr", ()=>isBooleanAttr
);
parcelHelpers.export(exports, "isBuiltInDirective", ()=>isBuiltInDirective
);
parcelHelpers.export(exports, "isDate", ()=>isDate
);
parcelHelpers.export(exports, "isFunction", ()=>isFunction
);
parcelHelpers.export(exports, "isGloballyWhitelisted", ()=>isGloballyWhitelisted
);
parcelHelpers.export(exports, "isHTMLTag", ()=>isHTMLTag
);
parcelHelpers.export(exports, "isIntegerKey", ()=>isIntegerKey
);
parcelHelpers.export(exports, "isKnownHtmlAttr", ()=>isKnownHtmlAttr
);
parcelHelpers.export(exports, "isKnownSvgAttr", ()=>isKnownSvgAttr
);
parcelHelpers.export(exports, "isMap", ()=>isMap
);
parcelHelpers.export(exports, "isModelListener", ()=>isModelListener
);
parcelHelpers.export(exports, "isNoUnitNumericStyleProp", ()=>isNoUnitNumericStyleProp
);
parcelHelpers.export(exports, "isObject", ()=>isObject
);
parcelHelpers.export(exports, "isOn", ()=>isOn
);
parcelHelpers.export(exports, "isPlainObject", ()=>isPlainObject
);
parcelHelpers.export(exports, "isPromise", ()=>isPromise
);
parcelHelpers.export(exports, "isReservedProp", ()=>isReservedProp
);
parcelHelpers.export(exports, "isSSRSafeAttrName", ()=>isSSRSafeAttrName
);
parcelHelpers.export(exports, "isSVGTag", ()=>isSVGTag
);
parcelHelpers.export(exports, "isSet", ()=>isSet
);
parcelHelpers.export(exports, "isSpecialBooleanAttr", ()=>isSpecialBooleanAttr
);
parcelHelpers.export(exports, "isString", ()=>isString
);
parcelHelpers.export(exports, "isSymbol", ()=>isSymbol
);
parcelHelpers.export(exports, "isVoidTag", ()=>isVoidTag
);
parcelHelpers.export(exports, "looseEqual", ()=>looseEqual
);
parcelHelpers.export(exports, "looseIndexOf", ()=>looseIndexOf
);
parcelHelpers.export(exports, "makeMap", ()=>makeMap
);
parcelHelpers.export(exports, "normalizeClass", ()=>normalizeClass
);
parcelHelpers.export(exports, "normalizeProps", ()=>normalizeProps
);
parcelHelpers.export(exports, "normalizeStyle", ()=>normalizeStyle
);
parcelHelpers.export(exports, "objectToString", ()=>objectToString
);
parcelHelpers.export(exports, "parseStringStyle", ()=>parseStringStyle
);
parcelHelpers.export(exports, "propsToAttrMap", ()=>propsToAttrMap
);
parcelHelpers.export(exports, "remove", ()=>remove
);
parcelHelpers.export(exports, "slotFlagsText", ()=>slotFlagsText
);
parcelHelpers.export(exports, "stringifyStyle", ()=>stringifyStyle
);
parcelHelpers.export(exports, "toDisplayString", ()=>toDisplayString
);
parcelHelpers.export(exports, "toHandlerKey", ()=>toHandlerKey
);
parcelHelpers.export(exports, "toNumber", ()=>toNumber
);
parcelHelpers.export(exports, "toRawType", ()=>toRawType
);
parcelHelpers.export(exports, "toTypeString", ()=>toTypeString
);
var global = arguments[3];
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */ function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(',');
    for(let i = 0; i < list.length; i++)map[list[i]] = true;
    return expectsLowerCase ? (val)=>!!map[val.toLowerCase()]
     : (val)=>!!map[val]
    ;
}
/**
 * dev only flag -> name mapping
 */ const PatchFlagNames = {
    [1 /* TEXT */ ]: `TEXT`,
    [2 /* CLASS */ ]: `CLASS`,
    [4 /* STYLE */ ]: `STYLE`,
    [8 /* PROPS */ ]: `PROPS`,
    [16 /* FULL_PROPS */ ]: `FULL_PROPS`,
    [32 /* HYDRATE_EVENTS */ ]: `HYDRATE_EVENTS`,
    [64 /* STABLE_FRAGMENT */ ]: `STABLE_FRAGMENT`,
    [128 /* KEYED_FRAGMENT */ ]: `KEYED_FRAGMENT`,
    [256 /* UNKEYED_FRAGMENT */ ]: `UNKEYED_FRAGMENT`,
    [512 /* NEED_PATCH */ ]: `NEED_PATCH`,
    [1024 /* DYNAMIC_SLOTS */ ]: `DYNAMIC_SLOTS`,
    [2048 /* DEV_ROOT_FRAGMENT */ ]: `DEV_ROOT_FRAGMENT`,
    [-1 /* HOISTED */ ]: `HOISTED`,
    [-2 /* BAIL */ ]: `BAIL`
};
/**
 * Dev only
 */ const slotFlagsText = {
    [1 /* STABLE */ ]: 'STABLE',
    [2 /* DYNAMIC */ ]: 'DYNAMIC',
    [3 /* FORWARDED */ ]: 'FORWARDED'
};
const GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt";
const isGloballyWhitelisted = /*#__PURE__*/ makeMap(GLOBALS_WHITE_LISTED);
const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
    // Split the content into individual lines but capture the newline sequence
    // that separated each line. This is important because the actual sequence is
    // needed to properly take into account the full line length for offset
    // comparison
    let lines = source.split(/(\r?\n)/);
    // Separate the lines and newline sequences into separate arrays for easier referencing
    const newlineSequences = lines.filter((_, idx)=>idx % 2 === 1
    );
    lines = lines.filter((_, idx)=>idx % 2 === 0
    );
    let count = 0;
    const res = [];
    for(let i = 0; i < lines.length; i++){
        count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
        if (count >= start) {
            for(let j = i - range; j <= i + range || end > count; j++){
                if (j < 0 || j >= lines.length) continue;
                const line = j + 1;
                res.push(`${line}${' '.repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
                const lineLength = lines[j].length;
                const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
                if (j === i) {
                    // push underline
                    const pad = start - (count - (lineLength + newLineSeqLength));
                    const length = Math.max(1, end > count ? lineLength - pad : end - start);
                    res.push(`   |  ` + ' '.repeat(pad) + '^'.repeat(length));
                } else if (j > i) {
                    if (end > count) {
                        const length = Math.max(Math.min(end - count, lineLength), 1);
                        res.push(`   |  ` + '^'.repeat(length));
                    }
                    count += lineLength + newLineSeqLength;
                }
            }
            break;
        }
    }
    return res.join('\n');
}
/**
 * On the client we only need to offer special cases for boolean attributes that
 * have different names from their corresponding dom properties:
 * - itemscope -> N/A
 * - allowfullscreen -> allowFullscreen
 * - formnovalidate -> formNoValidate
 * - ismap -> isMap
 * - nomodule -> noModule
 * - novalidate -> noValidate
 * - readonly -> readOnly
 */ const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs);
/**
 * The full list is needed during SSR to produce the correct initial markup.
 */ const isBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,` + `loop,open,required,reversed,scoped,seamless,` + `checked,muted,multiple,selected`);
/**
 * Boolean attributes should be included if the value is truthy or ''.
 * e.g. `<select multiple>` compiles to `{ multiple: '' }`
 */ function includeBooleanAttr(value) {
    return !!value || value === '';
}
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {
};
function isSSRSafeAttrName(name) {
    if (attrValidationCache.hasOwnProperty(name)) return attrValidationCache[name];
    const isUnsafe = unsafeAttrCharRE.test(name);
    if (isUnsafe) console.error(`unsafe attribute name: ${name}`);
    return attrValidationCache[name] = !isUnsafe;
}
const propsToAttrMap = {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv'
};
/**
 * CSS properties that accept plain numbers
 */ const isNoUnitNumericStyleProp = /*#__PURE__*/ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,` + `border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,` + `columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,` + `grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,` + `grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,` + `line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,` + // SVG
`fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,` + `stroke-miterlimit,stroke-opacity,stroke-width`);
/**
 * Known attributes, this is used for stringification of runtime static nodes
 * so that we don't stringify bindings that cannot be set from HTML.
 * Don't also forget to allow `data-*` and `aria-*`!
 * Generated from https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 */ const isKnownHtmlAttr = /*#__PURE__*/ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,` + `autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,` + `border,buffered,capture,challenge,charset,checked,cite,class,code,` + `codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,` + `coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,` + `disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,` + `formaction,formenctype,formmethod,formnovalidate,formtarget,headers,` + `height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,` + `ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,` + `manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,` + `open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,` + `referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,` + `selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,` + `start,step,style,summary,tabindex,target,title,translate,type,usemap,` + `value,width,wrap`);
/**
 * Generated from https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute
 */ const isKnownSvgAttr = /*#__PURE__*/ makeMap(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,` + `arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,` + `baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,` + `clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,` + `color-interpolation-filters,color-profile,color-rendering,` + `contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,` + `descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,` + `dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,` + `fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,` + `font-family,font-size,font-size-adjust,font-stretch,font-style,` + `font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,` + `glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,` + `gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,` + `horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,` + `k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,` + `lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,` + `marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,` + `mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,` + `name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,` + `overflow,overline-position,overline-thickness,panose-1,paint-order,path,` + `pathLength,patternContentUnits,patternTransform,patternUnits,ping,` + `pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,` + `preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,` + `rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,` + `restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,` + `specularConstant,specularExponent,speed,spreadMethod,startOffset,` + `stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,` + `strikethrough-position,strikethrough-thickness,string,stroke,` + `stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,` + `stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,` + `systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,` + `text-decoration,text-rendering,textLength,to,transform,transform-origin,` + `type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,` + `unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,` + `v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,` + `vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,` + `writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,` + `xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,` + `xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`);
function normalizeStyle(value) {
    if (isArray(value)) {
        const res = {
        };
        for(let i = 0; i < value.length; i++){
            const item = value[i];
            const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
            if (normalized) for(const key in normalized)res[key] = normalized[key];
        }
        return res;
    } else if (isString(value)) return value;
    else if (isObject(value)) return value;
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
    const ret = {
    };
    cssText.split(listDelimiterRE).forEach((item)=>{
        if (item) {
            const tmp = item.split(propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return ret;
}
function stringifyStyle(styles) {
    let ret = '';
    if (!styles || isString(styles)) return ret;
    for(const key in styles){
        const value = styles[key];
        const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
        if (isString(value) || typeof value === 'number' && isNoUnitNumericStyleProp(normalizedKey)) // only render valid values
        ret += `${normalizedKey}:${value};`;
    }
    return ret;
}
function normalizeClass(value) {
    let res = '';
    if (isString(value)) res = value;
    else if (isArray(value)) for(let i = 0; i < value.length; i++){
        const normalized = normalizeClass(value[i]);
        if (normalized) res += normalized + ' ';
    }
    else if (isObject(value)) {
        for(const name in value)if (value[name]) res += name + ' ';
    }
    return res.trim();
}
function normalizeProps(props) {
    if (!props) return null;
    let { class: klass , style  } = props;
    if (klass && !isString(klass)) props.class = normalizeClass(klass);
    if (style) props.style = normalizeStyle(style);
    return props;
}
// These tag configs are shared between compiler-dom and runtime-dom, so they
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element
const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
// https://developer.mozilla.org/en-US/docs/Web/SVG/Element
const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const VOID_TAGS = 'area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr';
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */ const isHTMLTag = /*#__PURE__*/ makeMap(HTML_TAGS);
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */ const isSVGTag = /*#__PURE__*/ makeMap(SVG_TAGS);
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */ const isVoidTag = /*#__PURE__*/ makeMap(VOID_TAGS);
const escapeRE = /["'&<>]/;
function escapeHtml(string) {
    const str = '' + string;
    const match = escapeRE.exec(str);
    if (!match) return str;
    let html = '';
    let escaped;
    let index;
    let lastIndex = 0;
    for(index = match.index; index < str.length; index++){
        switch(str.charCodeAt(index)){
            case 34:
                escaped = '&quot;';
                break;
            case 38:
                escaped = '&amp;';
                break;
            case 39:
                escaped = '&#39;';
                break;
            case 60:
                escaped = '&lt;';
                break;
            case 62:
                escaped = '&gt;';
                break;
            default:
                continue;
        }
        if (lastIndex !== index) html += str.slice(lastIndex, index);
        lastIndex = index + 1;
        html += escaped;
    }
    return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
}
// https://www.w3.org/TR/html52/syntax.html#comments
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
    return src.replace(commentStripRE, '');
}
function looseCompareArrays(a, b) {
    if (a.length !== b.length) return false;
    let equal = true;
    for(let i = 0; equal && i < a.length; i++)equal = looseEqual(a[i], b[i]);
    return equal;
}
function looseEqual(a, b) {
    if (a === b) return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);
    if (aValidType || bValidType) return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    aValidType = isArray(a);
    bValidType = isArray(b);
    if (aValidType || bValidType) return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    aValidType = isObject(a);
    bValidType = isObject(b);
    if (aValidType || bValidType) {
        /* istanbul ignore if: this if will probably never be called */ if (!aValidType || !bValidType) return false;
        const aKeysCount = Object.keys(a).length;
        const bKeysCount = Object.keys(b).length;
        if (aKeysCount !== bKeysCount) return false;
        for(const key in a){
            const aHasKey = a.hasOwnProperty(key);
            const bHasKey = b.hasOwnProperty(key);
            if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) return false;
        }
    }
    return String(a) === String(b);
}
function looseIndexOf(arr, val) {
    return arr.findIndex((item)=>looseEqual(item, val)
    );
}
/**
 * For converting {{ interpolation }} values to displayed strings.
 * @private
 */ const toDisplayString = (val)=>{
    return isString(val) ? val : val == null ? '' : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val1)=>{
    // can't use isRef here since @vue/shared has no deps
    if (val1 && val1.__v_isRef) return replacer(_key, val1.value);
    else if (isMap(val1)) return {
        [`Map(${val1.size})`]: [
            ...val1.entries()
        ].reduce((entries, [key, val])=>{
            entries[`${key} =>`] = val;
            return entries;
        }, {
        })
    };
    else if (isSet(val1)) return {
        [`Set(${val1.size})`]: [
            ...val1.values()
        ]
    };
    else if (isObject(val1) && !isArray(val1) && !isPlainObject(val1)) return String(val1);
    return val1;
};
const EMPTY_OBJ = Object.freeze({
});
const EMPTY_ARR = Object.freeze([]);
const NOOP = ()=>{
};
/**
 * Always return false.
 */ const NO = ()=>false
;
const onRE = /^on[^a-z]/;
const isOn = (key)=>onRE.test(key)
;
const isModelListener = (key)=>key.startsWith('onUpdate:')
;
const extend = Object.assign;
const remove = (arr, el)=>{
    const i = arr.indexOf(el);
    if (i > -1) arr.splice(i, 1);
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key)=>hasOwnProperty.call(val, key)
;
const isArray = Array.isArray;
const isMap = (val)=>toTypeString(val) === '[object Map]'
;
const isSet = (val)=>toTypeString(val) === '[object Set]'
;
const isDate = (val)=>val instanceof Date
;
const isFunction = (val)=>typeof val === 'function'
;
const isString = (val)=>typeof val === 'string'
;
const isSymbol = (val)=>typeof val === 'symbol'
;
const isObject = (val)=>val !== null && typeof val === 'object'
;
const isPromise = (val)=>{
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value)=>objectToString.call(value)
;
const toRawType = (value)=>{
    // extract "RawType" from strings like "[object RawType]"
    return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val)=>toTypeString(val) === '[object Object]'
;
const isIntegerKey = (key)=>isString(key) && key !== 'NaN' && key[0] !== '-' && '' + parseInt(key, 10) === key
;
const isReservedProp = /*#__PURE__*/ makeMap(// the leading comma is intentional so empty string "" is also included
",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
const isBuiltInDirective = /*#__PURE__*/ makeMap('bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo');
const cacheStringFunction = (fn)=>{
    const cache = Object.create(null);
    return (str)=>{
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    };
};
const camelizeRE = /-(\w)/g;
/**
 * @private
 */ const camelize = cacheStringFunction((str)=>{
    return str.replace(camelizeRE, (_, c)=>c ? c.toUpperCase() : ''
    );
});
const hyphenateRE = /\B([A-Z])/g;
/**
 * @private
 */ const hyphenate = cacheStringFunction((str)=>str.replace(hyphenateRE, '-$1').toLowerCase()
);
/**
 * @private
 */ const capitalize = cacheStringFunction((str)=>str.charAt(0).toUpperCase() + str.slice(1)
);
/**
 * @private
 */ const toHandlerKey = cacheStringFunction((str)=>str ? `on${capitalize(str)}` : ``
);
// compare whether a value has changed, accounting for NaN.
const hasChanged = (value, oldValue)=>!Object.is(value, oldValue)
;
const invokeArrayFns = (fns, arg)=>{
    for(let i = 0; i < fns.length; i++)fns[i](arg);
};
const def = (obj, key, value)=>{
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        value
    });
};
const toNumber = (val)=>{
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = ()=>{
    return _globalThis || (_globalThis = typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"4ECQH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require('script:./App.vue');
    if (script.__esModule) script = script.default;
    script.render = require('template:./App.vue').render;
    require('custom:./App.vue').default(script);
    script.__scopeId = 'data-v-aa0258';
    script.__file = "E:\\Projects\\Python\\isledovatelska\\App.vue";
};
initialize();
if (module.hot) {
    script.__hmrId = 'aa0258-hmr';
    module.hot.accept(()=>{
        setTimeout(()=>{
            initialize();
            if (!__VUE_HMR_RUNTIME__.createRecord('aa0258-hmr', script)) __VUE_HMR_RUNTIME__.reload('aa0258-hmr', script);
        }, 0);
    });
}
exports.default = script;

},{"script:./App.vue":"d4wAK","template:./App.vue":"fj7Yd","custom:./App.vue":"fm1Mh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d4wAK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    data () {
        return {
            name: "Какая-то хуйня",
            attributes: [
                {
                    key: "День без интернета",
                    highlight: true,
                    dates: new Date("2022-01-30")
                },
                {
                    key: "День безопасного интернета",
                    highlight: true,
                    dates: new Date("2022-02-01")
                },
                {
                    key: "День компьютерщика",
                    highlight: true,
                    dates: new Date("2022-02-14")
                },
                {
                    key: "День оверклокера",
                    highlight: true,
                    dates: new Date("2022-02-28")
                },
                {
                    key: "Деть ИТ-специалистов",
                    highlight: true,
                    dates: new Date("2022-02-28")
                },
                {
                    key: "День свободны слова в интернете",
                    highlight: true,
                    dates: new Date("2022-03-12")
                },
                {
                    key: "День выключения",
                    highlight: true,
                    dates: new Date("2022-03-24")
                },
                {
                    key: "Международный день бекапов",
                    highlight: true,
                    dates: new Date("2022-03-31")
                },
                {
                    key: "Международный день интернета/День веб-мастера",
                    highlight: true,
                    dates: new Date("2022-04-04")
                },
                {
                    key: "День рождения рунета",
                    highlight: true,
                    dates: new Date("2022-04-07")
                },
                {
                    key: "День криптографической службы России",
                    highlight: true,
                    dates: new Date("2022-05-05")
                },
                {
                    key: "Всемирный день информационного сообщества",
                    highlight: true,
                    dates: new Date("2022-05-17")
                },
                {
                    key: "Международный день блогера",
                    highlight: true,
                    dates: new Date("2022-06-14")
                },
                {
                    key: "День системного администратора",
                    highlight: true,
                    dates: new Date("2022-07-29")
                },
                {
                    key: "День тестировщика",
                    highlight: true,
                    dates: new Date("2022-09-09")
                },
                {
                    key: "День рождения смайла",
                    highlight: true,
                    dates: new Date("2022-09-19")
                },
                {
                    key: "День рождения интернета",
                    highlight: true,
                    dates: new Date("2022-10-29")
                },
                {
                    key: "Всемирный день юзабилити",
                    highlight: true,
                    dates: new Date("2022-11-10")
                },
                {
                    key: "Всемирный день информации",
                    highlight: true,
                    dates: new Date("2022-11-26")
                },
                {
                    key: "Международный день защиты информации",
                    highlight: true,
                    dates: new Date("2022-10-30")
                },
                {
                    key: "День рождения отечественной информатики",
                    highlight: true,
                    dates: new Date("2022-12-04")
                }, 
            ]
        };
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fj7Yd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>render
);
var _vue = require("vue");
function render(_ctx, _cache) {
    const _component_v_calendar = _vue.resolveComponent("v-calendar");
    return _vue.openBlock(), _vue.createElementBlock("div", null, [
        _vue.createVNode(_component_v_calendar, {
            value: null,
            attributes: _ctx.attributes,
            columns: _ctx.$screens({
                default: 1,
                lg: 2
            }),
            rows: _ctx.$screens({
                default: 1,
                lg: 2
            }),
            "is-expanded": _ctx.$screens({
                default: true,
                lg: false
            })
        }, null, 8 /* PROPS */ , [
            "attributes",
            "columns",
            "rows",
            "is-expanded"
        ])
    ]);
}
if (module.hot) module.hot.accept(()=>{
    __VUE_HMR_RUNTIME__.rerender('aa0258-hmr', render);
});

},{"vue":"gzxs9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fm1Mh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{
};
exports.default = (script)=>{
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9PkU7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Calendar", ()=>_sfc_main$3
);
parcelHelpers.export(exports, "DatePicker", ()=>_sfc_main
);
parcelHelpers.export(exports, "Popover", ()=>_sfc_main$9
);
parcelHelpers.export(exports, "PopoverRow", ()=>PopoverRow
);
parcelHelpers.export(exports, "Screens", ()=>screensPlugin
);
parcelHelpers.export(exports, "SetupCalendar", ()=>setup
);
parcelHelpers.export(exports, "default", ()=>index
);
var _vue = require("vue");
var _core = require("@popperjs/core");
var global = arguments[3];
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value
;
var __spreadValues = (a, b)=>{
    for(var prop in b || (b = {
    }))if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols) {
        for (var prop of __getOwnPropSymbols(b))if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    }
    return a;
};
var __spreadProps = (a, b)=>__defProps(a, __getOwnPropDescs(b))
;
var __objRest = (source, exclude)=>{
    var target = {
    };
    for(var prop in source)if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0) target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols) {
        for (var prop of __getOwnPropSymbols(source))if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop)) target[prop] = source[prop];
    }
    return target;
};
function toInteger(dirtyNumber) {
    if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) return NaN;
    var number = Number(dirtyNumber);
    if (isNaN(number)) return number;
    return number < 0 ? Math.ceil(number) : Math.floor(number);
}
function requiredArgs(required, args) {
    if (args.length < required) throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
}
function toDate$1(argument) {
    requiredArgs(1, arguments);
    var argStr = Object.prototype.toString.call(argument);
    if (argument instanceof Date || typeof argument === "object" && argStr === "[object Date]") return new Date(argument.getTime());
    else if (typeof argument === "number" || argStr === "[object Number]") return new Date(argument);
    else {
        if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
            console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule");
            console.warn(new Error().stack);
        }
        return new Date(NaN);
    }
}
function addDays(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var date = toDate$1(dirtyDate);
    var amount = toInteger(dirtyAmount);
    if (isNaN(amount)) return new Date(NaN);
    if (!amount) return date;
    date.setDate(date.getDate() + amount);
    return date;
}
function addMonths(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var date = toDate$1(dirtyDate);
    var amount = toInteger(dirtyAmount);
    if (isNaN(amount)) return new Date(NaN);
    if (!amount) return date;
    var dayOfMonth = date.getDate();
    var endOfDesiredMonth = new Date(date.getTime());
    endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
    var daysInMonth = endOfDesiredMonth.getDate();
    if (dayOfMonth >= daysInMonth) return endOfDesiredMonth;
    else {
        date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
        return date;
    }
}
function addYears(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var amount = toInteger(dirtyAmount);
    return addMonths(dirtyDate, amount * 12);
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {
};
var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$8 = freeGlobal || freeSelf || Function("return this")();
var _root = root$8;
var root$7 = _root;
var Symbol$7 = root$7.Symbol;
var _Symbol = Symbol$7;
var Symbol$6 = _Symbol;
var objectProto$h = Object.prototype;
var hasOwnProperty$e = objectProto$h.hasOwnProperty;
var nativeObjectToString$1 = objectProto$h.toString;
var symToStringTag$1 = Symbol$6 ? Symbol$6.toStringTag : void 0;
function getRawTag$1(value) {
    var isOwn = hasOwnProperty$e.call(value, symToStringTag$1), tag = value[symToStringTag$1];
    try {
        value[symToStringTag$1] = void 0;
        var unmasked = true;
    } catch (e) {
    }
    var result = nativeObjectToString$1.call(value);
    if (unmasked) {
        if (isOwn) value[symToStringTag$1] = tag;
        else delete value[symToStringTag$1];
    }
    return result;
}
var _getRawTag = getRawTag$1;
var objectProto$g = Object.prototype;
var nativeObjectToString = objectProto$g.toString;
function objectToString$1(value) {
    return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1;
var Symbol$5 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$5 ? Symbol$5.toStringTag : void 0;
function baseGetTag$a(value) {
    if (value == null) return value === void 0 ? undefinedTag : nullTag;
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var _baseGetTag = baseGetTag$a;
function isObjectLike$d(value) {
    return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$d;
var baseGetTag$9 = _baseGetTag, isObjectLike$c = isObjectLike_1;
var boolTag$4 = "[object Boolean]";
function isBoolean(value) {
    return value === true || value === false || isObjectLike$c(value) && baseGetTag$9(value) == boolTag$4;
}
var isBoolean_1 = isBoolean;
var baseGetTag$8 = _baseGetTag, isObjectLike$b = isObjectLike_1;
var numberTag$4 = "[object Number]";
function isNumber(value) {
    return typeof value == "number" || isObjectLike$b(value) && baseGetTag$8(value) == numberTag$4;
}
var isNumber_1 = isNumber;
var isArray$e = Array.isArray;
var isArray_1 = isArray$e;
var baseGetTag$7 = _baseGetTag, isArray$d = isArray_1, isObjectLike$a = isObjectLike_1;
var stringTag$4 = "[object String]";
function isString(value) {
    return typeof value == "string" || !isArray$d(value) && isObjectLike$a(value) && baseGetTag$7(value) == stringTag$4;
}
var isString_1 = isString;
function isObject$d(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$d;
var baseGetTag$6 = _baseGetTag, isObject$c = isObject_1;
var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$3(value) {
    if (!isObject$c(value)) return false;
    var tag = baseGetTag$6(value);
    return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}
var isFunction_1 = isFunction$3;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
function isLength$3(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}
var isLength_1 = isLength$3;
var isFunction$2 = isFunction_1, isLength$2 = isLength_1;
function isArrayLike$6(value) {
    return value != null && isLength$2(value.length) && !isFunction$2(value);
}
var isArrayLike_1 = isArrayLike$6;
var isArrayLike$5 = isArrayLike_1, isObjectLike$9 = isObjectLike_1;
function isArrayLikeObject$1(value) {
    return isObjectLike$9(value) && isArrayLike$5(value);
}
var isArrayLikeObject_1 = isArrayLikeObject$1;
function isUndefined(value) {
    return value === void 0;
}
var isUndefined_1 = isUndefined;
var baseGetTag$5 = _baseGetTag, isObjectLike$8 = isObjectLike_1;
var dateTag$4 = "[object Date]";
function baseIsDate$1(value) {
    return isObjectLike$8(value) && baseGetTag$5(value) == dateTag$4;
}
var _baseIsDate = baseIsDate$1;
function baseUnary$4(func) {
    return function(value) {
        return func(value);
    };
}
var _baseUnary = baseUnary$4;
var _nodeUtil = {
    exports: {
    }
};
(function(module, exports) {
    var freeGlobal2 = _freeGlobal;
    var freeExports = exports && !exports.nodeType && exports;
    var freeModule = freeExports && true && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal2.process;
    var nodeUtil2 = function() {
        try {
            var types = freeModule && freeModule.require && freeModule.require("util").types;
            if (types) return types;
            return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
    }();
    module.exports = nodeUtil2;
})(_nodeUtil, _nodeUtil.exports);
var baseIsDate = _baseIsDate, baseUnary$3 = _baseUnary, nodeUtil$3 = _nodeUtil.exports;
var nodeIsDate = nodeUtil$3 && nodeUtil$3.isDate;
var isDate$1 = nodeIsDate ? baseUnary$3(nodeIsDate) : baseIsDate;
var isDate_1 = isDate$1;
function baseClamp$1(number, lower, upper) {
    if (number === number) {
        if (upper !== void 0) number = number <= upper ? number : upper;
        if (lower !== void 0) number = number >= lower ? number : lower;
    }
    return number;
}
var _baseClamp = baseClamp$1;
var baseGetTag$4 = _baseGetTag, isObjectLike$7 = isObjectLike_1;
var symbolTag$3 = "[object Symbol]";
function isSymbol$4(value) {
    return typeof value == "symbol" || isObjectLike$7(value) && baseGetTag$4(value) == symbolTag$3;
}
var isSymbol_1 = isSymbol$4;
var isObject$b = isObject_1, isSymbol$3 = isSymbol_1;
var NAN = 0 / 0;
var reTrim = /^\s+|\s+$/g;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber$1(value) {
    if (typeof value == "number") return value;
    if (isSymbol$3(value)) return NAN;
    if (isObject$b(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject$b(other) ? other + "" : other;
    }
    if (typeof value != "string") return value === 0 ? value : +value;
    value = value.replace(reTrim, "");
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var toNumber_1 = toNumber$1;
var baseClamp = _baseClamp, toNumber = toNumber_1;
function clamp(number, lower, upper) {
    if (upper === void 0) {
        upper = lower;
        lower = void 0;
    }
    if (upper !== void 0) {
        upper = toNumber(upper);
        upper = upper === upper ? upper : 0;
    }
    if (lower !== void 0) {
        lower = toNumber(lower);
        lower = lower === lower ? lower : 0;
    }
    return baseClamp(toNumber(number), lower, upper);
}
var clamp_1 = clamp;
var isArray$c = isArray_1, isSymbol$2 = isSymbol_1;
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey$3(value, object) {
    if (isArray$c(value)) return false;
    var type = typeof value;
    if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol$2(value)) return true;
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var _isKey = isKey$3;
var root$6 = _root;
var coreJsData$1 = root$6["__core-js_shared__"];
var _coreJsData = coreJsData$1;
var coreJsData = _coreJsData;
var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked$1(func) {
    return !!maskSrcKey && maskSrcKey in func;
}
var _isMasked = isMasked$1;
var funcProto$2 = Function.prototype;
var funcToString$2 = funcProto$2.toString;
function toSource$2(func) {
    if (func != null) {
        try {
            return funcToString$2.call(func);
        } catch (e) {
        }
        try {
            return func + "";
        } catch (e1) {
        }
    }
    return "";
}
var _toSource = toSource$2;
var isFunction$1 = isFunction_1, isMasked = _isMasked, isObject$a = isObject_1, toSource$1 = _toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto$1 = Function.prototype, objectProto$f = Object.prototype;
var funcToString$1 = funcProto$1.toString;
var hasOwnProperty$d = objectProto$f.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString$1.call(hasOwnProperty$d).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative$1(value) {
    if (!isObject$a(value) || isMasked(value)) return false;
    var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource$1(value));
}
var _baseIsNative = baseIsNative$1;
function getValue$1(object, key) {
    return object == null ? void 0 : object[key];
}
var _getValue = getValue$1;
var baseIsNative = _baseIsNative, getValue = _getValue;
function getNative$7(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : void 0;
}
var _getNative = getNative$7;
var getNative$6 = _getNative;
var nativeCreate$4 = getNative$6(Object, "create");
var _nativeCreate = nativeCreate$4;
var nativeCreate$3 = _nativeCreate;
function hashClear$1() {
    this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {
    };
    this.size = 0;
}
var _hashClear = hashClear$1;
function hashDelete$1(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
}
var _hashDelete = hashDelete$1;
var nativeCreate$2 = _nativeCreate;
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$e = Object.prototype;
var hasOwnProperty$c = objectProto$e.hasOwnProperty;
function hashGet$1(key) {
    var data2 = this.__data__;
    if (nativeCreate$2) {
        var result = data2[key];
        return result === HASH_UNDEFINED$2 ? void 0 : result;
    }
    return hasOwnProperty$c.call(data2, key) ? data2[key] : void 0;
}
var _hashGet = hashGet$1;
var nativeCreate$1 = _nativeCreate;
var objectProto$d = Object.prototype;
var hasOwnProperty$b = objectProto$d.hasOwnProperty;
function hashHas$1(key) {
    var data2 = this.__data__;
    return nativeCreate$1 ? data2[key] !== void 0 : hasOwnProperty$b.call(data2, key);
}
var _hashHas = hashHas$1;
var nativeCreate = _nativeCreate;
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet$1(key, value) {
    var data2 = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data2[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED$1 : value;
    return this;
}
var _hashSet = hashSet$1;
var hashClear = _hashClear, hashDelete = _hashDelete, hashGet = _hashGet, hashHas = _hashHas, hashSet = _hashSet;
function Hash$1(entries) {
    var index2 = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index2 < length){
        var entry = entries[index2];
        this.set(entry[0], entry[1]);
    }
}
Hash$1.prototype.clear = hashClear;
Hash$1.prototype["delete"] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;
var _Hash = Hash$1;
function listCacheClear$1() {
    this.__data__ = [];
    this.size = 0;
}
var _listCacheClear = listCacheClear$1;
function eq$6(value, other) {
    return value === other || value !== value && other !== other;
}
var eq_1 = eq$6;
var eq$5 = eq_1;
function assocIndexOf$4(array, key) {
    var length = array.length;
    while(length--){
        if (eq$5(array[length][0], key)) return length;
    }
    return -1;
}
var _assocIndexOf = assocIndexOf$4;
var assocIndexOf$3 = _assocIndexOf;
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete$1(key) {
    var data2 = this.__data__, index2 = assocIndexOf$3(data2, key);
    if (index2 < 0) return false;
    var lastIndex = data2.length - 1;
    if (index2 == lastIndex) data2.pop();
    else splice.call(data2, index2, 1);
    --this.size;
    return true;
}
var _listCacheDelete = listCacheDelete$1;
var assocIndexOf$2 = _assocIndexOf;
function listCacheGet$1(key) {
    var data2 = this.__data__, index2 = assocIndexOf$2(data2, key);
    return index2 < 0 ? void 0 : data2[index2][1];
}
var _listCacheGet = listCacheGet$1;
var assocIndexOf$1 = _assocIndexOf;
function listCacheHas$1(key) {
    return assocIndexOf$1(this.__data__, key) > -1;
}
var _listCacheHas = listCacheHas$1;
var assocIndexOf = _assocIndexOf;
function listCacheSet$1(key, value) {
    var data2 = this.__data__, index2 = assocIndexOf(data2, key);
    if (index2 < 0) {
        ++this.size;
        data2.push([
            key,
            value
        ]);
    } else data2[index2][1] = value;
    return this;
}
var _listCacheSet = listCacheSet$1;
var listCacheClear = _listCacheClear, listCacheDelete = _listCacheDelete, listCacheGet = _listCacheGet, listCacheHas = _listCacheHas, listCacheSet = _listCacheSet;
function ListCache$4(entries) {
    var index2 = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index2 < length){
        var entry = entries[index2];
        this.set(entry[0], entry[1]);
    }
}
ListCache$4.prototype.clear = listCacheClear;
ListCache$4.prototype["delete"] = listCacheDelete;
ListCache$4.prototype.get = listCacheGet;
ListCache$4.prototype.has = listCacheHas;
ListCache$4.prototype.set = listCacheSet;
var _ListCache = ListCache$4;
var getNative$5 = _getNative, root$5 = _root;
var Map$3 = getNative$5(root$5, "Map");
var _Map = Map$3;
var Hash = _Hash, ListCache$3 = _ListCache, Map$2 = _Map;
function mapCacheClear$1() {
    this.size = 0;
    this.__data__ = {
        "hash": new Hash(),
        "map": new (Map$2 || ListCache$3)(),
        "string": new Hash()
    };
}
var _mapCacheClear = mapCacheClear$1;
function isKeyable$1(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var _isKeyable = isKeyable$1;
var isKeyable = _isKeyable;
function getMapData$4(map2, key) {
    var data2 = map2.__data__;
    return isKeyable(key) ? data2[typeof key == "string" ? "string" : "hash"] : data2.map;
}
var _getMapData = getMapData$4;
var getMapData$3 = _getMapData;
function mapCacheDelete$1(key) {
    var result = getMapData$3(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
}
var _mapCacheDelete = mapCacheDelete$1;
var getMapData$2 = _getMapData;
function mapCacheGet$1(key) {
    return getMapData$2(this, key).get(key);
}
var _mapCacheGet = mapCacheGet$1;
var getMapData$1 = _getMapData;
function mapCacheHas$1(key) {
    return getMapData$1(this, key).has(key);
}
var _mapCacheHas = mapCacheHas$1;
var getMapData = _getMapData;
function mapCacheSet$1(key, value) {
    var data2 = getMapData(this, key), size = data2.size;
    data2.set(key, value);
    this.size += data2.size == size ? 0 : 1;
    return this;
}
var _mapCacheSet = mapCacheSet$1;
var mapCacheClear = _mapCacheClear, mapCacheDelete = _mapCacheDelete, mapCacheGet = _mapCacheGet, mapCacheHas = _mapCacheHas, mapCacheSet = _mapCacheSet;
function MapCache$3(entries) {
    var index2 = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index2 < length){
        var entry = entries[index2];
        this.set(entry[0], entry[1]);
    }
}
MapCache$3.prototype.clear = mapCacheClear;
MapCache$3.prototype["delete"] = mapCacheDelete;
MapCache$3.prototype.get = mapCacheGet;
MapCache$3.prototype.has = mapCacheHas;
MapCache$3.prototype.set = mapCacheSet;
var _MapCache = MapCache$3;
var MapCache$2 = _MapCache;
var FUNC_ERROR_TEXT = "Expected a function";
function memoize$1(func, resolver) {
    if (typeof func != "function" || resolver != null && typeof resolver != "function") throw new TypeError(FUNC_ERROR_TEXT);
    var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) return cache.get(key);
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
    };
    memoized.cache = new (memoize$1.Cache || MapCache$2)();
    return memoized;
}
memoize$1.Cache = MapCache$2;
var memoize_1 = memoize$1;
var memoize = memoize_1;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped$1(func) {
    var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) cache.clear();
        return key;
    });
    var cache = result.cache;
    return result;
}
var _memoizeCapped = memoizeCapped$1;
var memoizeCapped = _memoizeCapped;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath$1 = memoizeCapped(function(string) {
    var result = [];
    if (string.charCodeAt(0) === 46) result.push("");
    string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
    });
    return result;
});
var _stringToPath = stringToPath$1;
function arrayMap$4(array, iteratee) {
    var index2 = -1, length = array == null ? 0 : array.length, result = Array(length);
    while(++index2 < length)result[index2] = iteratee(array[index2], index2, array);
    return result;
}
var _arrayMap = arrayMap$4;
var Symbol$4 = _Symbol, arrayMap$3 = _arrayMap, isArray$b = isArray_1, isSymbol$1 = isSymbol_1;
var INFINITY$1 = 1 / 0;
var symbolProto$2 = Symbol$4 ? Symbol$4.prototype : void 0, symbolToString = symbolProto$2 ? symbolProto$2.toString : void 0;
function baseToString$1(value) {
    if (typeof value == "string") return value;
    if (isArray$b(value)) return arrayMap$3(value, baseToString$1) + "";
    if (isSymbol$1(value)) return symbolToString ? symbolToString.call(value) : "";
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}
var _baseToString = baseToString$1;
var baseToString = _baseToString;
function toString$1(value) {
    return value == null ? "" : baseToString(value);
}
var toString_1 = toString$1;
var isArray$a = isArray_1, isKey$2 = _isKey, stringToPath = _stringToPath, toString = toString_1;
function castPath$6(value, object) {
    if (isArray$a(value)) return value;
    return isKey$2(value, object) ? [
        value
    ] : stringToPath(toString(value));
}
var _castPath = castPath$6;
var isSymbol = isSymbol_1;
var INFINITY = 1 / 0;
function toKey$6(value) {
    if (typeof value == "string" || isSymbol(value)) return value;
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
var _toKey = toKey$6;
var castPath$5 = _castPath, toKey$5 = _toKey;
function baseGet$4(object, path) {
    path = castPath$5(path, object);
    var index2 = 0, length = path.length;
    while(object != null && index2 < length)object = object[toKey$5(path[index2++])];
    return index2 && index2 == length ? object : void 0;
}
var _baseGet = baseGet$4;
var baseGet$3 = _baseGet;
function get$1(object, path, defaultValue) {
    var result = object == null ? void 0 : baseGet$3(object, path);
    return result === void 0 ? defaultValue : result;
}
var get_1 = get$1;
var getNative$4 = _getNative;
var defineProperty$2 = function() {
    try {
        var func = getNative$4(Object, "defineProperty");
        func({
        }, "", {
        });
        return func;
    } catch (e) {
    }
}();
var _defineProperty = defineProperty$2;
var defineProperty$1 = _defineProperty;
function baseAssignValue$4(object, key, value) {
    if (key == "__proto__" && defineProperty$1) defineProperty$1(object, key, {
        "configurable": true,
        "enumerable": true,
        "value": value,
        "writable": true
    });
    else object[key] = value;
}
var _baseAssignValue = baseAssignValue$4;
var baseAssignValue$3 = _baseAssignValue, eq$4 = eq_1;
var objectProto$c = Object.prototype;
var hasOwnProperty$a = objectProto$c.hasOwnProperty;
function assignValue$3(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty$a.call(object, key) && eq$4(objValue, value)) || value === void 0 && !(key in object)) baseAssignValue$3(object, key, value);
}
var _assignValue = assignValue$3;
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex$4(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
var _isIndex = isIndex$4;
var assignValue$2 = _assignValue, castPath$4 = _castPath, isIndex$3 = _isIndex, isObject$9 = isObject_1, toKey$4 = _toKey;
function baseSet$2(object, path, value, customizer) {
    if (!isObject$9(object)) return object;
    path = castPath$4(path, object);
    var index2 = -1, length = path.length, lastIndex = length - 1, nested = object;
    while(nested != null && ++index2 < length){
        var key = toKey$4(path[index2]), newValue = value;
        if (key === "__proto__" || key === "constructor" || key === "prototype") return object;
        if (index2 != lastIndex) {
            var objValue = nested[key];
            newValue = customizer ? customizer(objValue, key, nested) : void 0;
            if (newValue === void 0) newValue = isObject$9(objValue) ? objValue : isIndex$3(path[index2 + 1]) ? [] : {
            };
        }
        assignValue$2(nested, key, newValue);
        nested = nested[key];
    }
    return object;
}
var _baseSet = baseSet$2;
var baseSet$1 = _baseSet;
function set(object, path, value) {
    return object == null ? object : baseSet$1(object, path, value);
}
var set_1 = set;
function createBaseFor$1(fromRight) {
    return function(object, iteratee, keysFunc) {
        var index2 = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
        while(length--){
            var key = props[fromRight ? length : ++index2];
            if (iteratee(iterable[key], key, iterable) === false) break;
        }
        return object;
    };
}
var _createBaseFor = createBaseFor$1;
var createBaseFor = _createBaseFor;
var baseFor$2 = createBaseFor();
var _baseFor = baseFor$2;
function baseTimes$1(n, iteratee) {
    var index2 = -1, result = Array(n);
    while(++index2 < n)result[index2] = iteratee(index2);
    return result;
}
var _baseTimes = baseTimes$1;
var baseGetTag$3 = _baseGetTag, isObjectLike$6 = isObjectLike_1;
var argsTag$3 = "[object Arguments]";
function baseIsArguments$1(value) {
    return isObjectLike$6(value) && baseGetTag$3(value) == argsTag$3;
}
var _baseIsArguments = baseIsArguments$1;
var baseIsArguments = _baseIsArguments, isObjectLike$5 = isObjectLike_1;
var objectProto$b = Object.prototype;
var hasOwnProperty$9 = objectProto$b.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$b.propertyIsEnumerable;
var isArguments$4 = baseIsArguments(function() {
    return arguments;
}()) ? baseIsArguments : function(value) {
    return isObjectLike$5(value) && hasOwnProperty$9.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
var isArguments_1 = isArguments$4;
var isBuffer$4 = {
    exports: {
    }
};
function stubFalse() {
    return false;
}
var stubFalse_1 = stubFalse;
(function(module, exports) {
    var root2 = _root, stubFalse2 = stubFalse_1;
    var freeExports = exports && !exports.nodeType && exports;
    var freeModule = freeExports && true && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root2.Buffer : void 0;
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var isBuffer2 = nativeIsBuffer || stubFalse2;
    module.exports = isBuffer2;
})(isBuffer$4, isBuffer$4.exports);
var baseGetTag$2 = _baseGetTag, isLength$1 = isLength_1, isObjectLike$4 = isObjectLike_1;
var argsTag$2 = "[object Arguments]", arrayTag$2 = "[object Array]", boolTag$3 = "[object Boolean]", dateTag$3 = "[object Date]", errorTag$2 = "[object Error]", funcTag$1 = "[object Function]", mapTag$6 = "[object Map]", numberTag$3 = "[object Number]", objectTag$4 = "[object Object]", regexpTag$3 = "[object RegExp]", setTag$6 = "[object Set]", stringTag$3 = "[object String]", weakMapTag$2 = "[object WeakMap]";
var arrayBufferTag$3 = "[object ArrayBuffer]", dataViewTag$4 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
var typedArrayTags = {
};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$2] = typedArrayTags[arrayBufferTag$3] = typedArrayTags[boolTag$3] = typedArrayTags[dataViewTag$4] = typedArrayTags[dateTag$3] = typedArrayTags[errorTag$2] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$6] = typedArrayTags[numberTag$3] = typedArrayTags[objectTag$4] = typedArrayTags[regexpTag$3] = typedArrayTags[setTag$6] = typedArrayTags[stringTag$3] = typedArrayTags[weakMapTag$2] = false;
function baseIsTypedArray$1(value) {
    return isObjectLike$4(value) && isLength$1(value.length) && !!typedArrayTags[baseGetTag$2(value)];
}
var _baseIsTypedArray = baseIsTypedArray$1;
var baseIsTypedArray = _baseIsTypedArray, baseUnary$2 = _baseUnary, nodeUtil$2 = _nodeUtil.exports;
var nodeIsTypedArray = nodeUtil$2 && nodeUtil$2.isTypedArray;
var isTypedArray$3 = nodeIsTypedArray ? baseUnary$2(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray_1 = isTypedArray$3;
var baseTimes = _baseTimes, isArguments$3 = isArguments_1, isArray$9 = isArray_1, isBuffer$3 = isBuffer$4.exports, isIndex$2 = _isIndex, isTypedArray$2 = isTypedArray_1;
var objectProto$a = Object.prototype;
var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
function arrayLikeKeys$2(value, inherited) {
    var isArr = isArray$9(value), isArg = !isArr && isArguments$3(value), isBuff = !isArr && !isArg && isBuffer$3(value), isType = !isArr && !isArg && !isBuff && isTypedArray$2(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
    for(var key in value)if ((inherited || hasOwnProperty$8.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex$2(key, length)))) result.push(key);
    return result;
}
var _arrayLikeKeys = arrayLikeKeys$2;
var objectProto$9 = Object.prototype;
function isPrototype$3(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$9;
    return value === proto;
}
var _isPrototype = isPrototype$3;
function overArg$2(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
var _overArg = overArg$2;
var overArg$1 = _overArg;
var nativeKeys$1 = overArg$1(Object.keys, Object);
var _nativeKeys = nativeKeys$1;
var isPrototype$2 = _isPrototype, nativeKeys = _nativeKeys;
var objectProto$8 = Object.prototype;
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
function baseKeys$1(object) {
    if (!isPrototype$2(object)) return nativeKeys(object);
    var result = [];
    for(var key in Object(object))if (hasOwnProperty$7.call(object, key) && key != "constructor") result.push(key);
    return result;
}
var _baseKeys = baseKeys$1;
var arrayLikeKeys$1 = _arrayLikeKeys, baseKeys = _baseKeys, isArrayLike$4 = isArrayLike_1;
function keys$6(object) {
    return isArrayLike$4(object) ? arrayLikeKeys$1(object) : baseKeys(object);
}
var keys_1 = keys$6;
var baseFor$1 = _baseFor, keys$5 = keys_1;
function baseForOwn$2(object, iteratee) {
    return object && baseFor$1(object, iteratee, keys$5);
}
var _baseForOwn = baseForOwn$2;
var ListCache$2 = _ListCache;
function stackClear$1() {
    this.__data__ = new ListCache$2();
    this.size = 0;
}
var _stackClear = stackClear$1;
function stackDelete$1(key) {
    var data2 = this.__data__, result = data2["delete"](key);
    this.size = data2.size;
    return result;
}
var _stackDelete = stackDelete$1;
function stackGet$1(key) {
    return this.__data__.get(key);
}
var _stackGet = stackGet$1;
function stackHas$1(key) {
    return this.__data__.has(key);
}
var _stackHas = stackHas$1;
var ListCache$1 = _ListCache, Map$1 = _Map, MapCache$1 = _MapCache;
var LARGE_ARRAY_SIZE = 200;
function stackSet$1(key, value) {
    var data2 = this.__data__;
    if (data2 instanceof ListCache$1) {
        var pairs = data2.__data__;
        if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([
                key,
                value
            ]);
            this.size = ++data2.size;
            return this;
        }
        data2 = this.__data__ = new MapCache$1(pairs);
    }
    data2.set(key, value);
    this.size = data2.size;
    return this;
}
var _stackSet = stackSet$1;
var ListCache = _ListCache, stackClear = _stackClear, stackDelete = _stackDelete, stackGet = _stackGet, stackHas = _stackHas, stackSet = _stackSet;
function Stack$4(entries) {
    var data2 = this.__data__ = new ListCache(entries);
    this.size = data2.size;
}
Stack$4.prototype.clear = stackClear;
Stack$4.prototype["delete"] = stackDelete;
Stack$4.prototype.get = stackGet;
Stack$4.prototype.has = stackHas;
Stack$4.prototype.set = stackSet;
var _Stack = Stack$4;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd$1(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
}
var _setCacheAdd = setCacheAdd$1;
function setCacheHas$1(value) {
    return this.__data__.has(value);
}
var _setCacheHas = setCacheHas$1;
var MapCache = _MapCache, setCacheAdd = _setCacheAdd, setCacheHas = _setCacheHas;
function SetCache$1(values) {
    var index2 = -1, length = values == null ? 0 : values.length;
    this.__data__ = new MapCache();
    while(++index2 < length)this.add(values[index2]);
}
SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
SetCache$1.prototype.has = setCacheHas;
var _SetCache = SetCache$1;
function arraySome$2(array, predicate) {
    var index2 = -1, length = array == null ? 0 : array.length;
    while(++index2 < length){
        if (predicate(array[index2], index2, array)) return true;
    }
    return false;
}
var _arraySome = arraySome$2;
function cacheHas$1(cache, key) {
    return cache.has(key);
}
var _cacheHas = cacheHas$1;
var SetCache = _SetCache, arraySome$1 = _arraySome, cacheHas = _cacheHas;
var COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;
function equalArrays$2(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) return false;
    var arrStacked = stack.get(array);
    var othStacked = stack.get(other);
    if (arrStacked && othStacked) return arrStacked == other && othStacked == array;
    var index2 = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : void 0;
    stack.set(array, other);
    stack.set(other, array);
    while(++index2 < arrLength){
        var arrValue = array[index2], othValue = other[index2];
        if (customizer) var compared = isPartial ? customizer(othValue, arrValue, index2, other, array, stack) : customizer(arrValue, othValue, index2, array, other, stack);
        if (compared !== void 0) {
            if (compared) continue;
            result = false;
            break;
        }
        if (seen) {
            if (!arraySome$1(other, function(othValue2, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) return seen.push(othIndex);
            })) {
                result = false;
                break;
            }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result = false;
            break;
        }
    }
    stack["delete"](array);
    stack["delete"](other);
    return result;
}
var _equalArrays = equalArrays$2;
var root$4 = _root;
var Uint8Array$2 = root$4.Uint8Array;
var _Uint8Array = Uint8Array$2;
function mapToArray$2(map2) {
    var index2 = -1, result = Array(map2.size);
    map2.forEach(function(value, key) {
        result[++index2] = [
            key,
            value
        ];
    });
    return result;
}
var _mapToArray = mapToArray$2;
function setToArray$1(set2) {
    var index2 = -1, result = Array(set2.size);
    set2.forEach(function(value) {
        result[++index2] = value;
    });
    return result;
}
var _setToArray = setToArray$1;
var Symbol$3 = _Symbol, Uint8Array$1 = _Uint8Array, eq$3 = eq_1, equalArrays$1 = _equalArrays, mapToArray$1 = _mapToArray, setToArray = _setToArray;
var COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2;
var boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", errorTag$1 = "[object Error]", mapTag$5 = "[object Map]", numberTag$2 = "[object Number]", regexpTag$2 = "[object RegExp]", setTag$5 = "[object Set]", stringTag$2 = "[object String]", symbolTag$2 = "[object Symbol]";
var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$3 = "[object DataView]";
var symbolProto$1 = Symbol$3 ? Symbol$3.prototype : void 0, symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : void 0;
function equalByTag$1(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch(tag){
        case dataViewTag$3:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) return false;
            object = object.buffer;
            other = other.buffer;
        case arrayBufferTag$2:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) return false;
            return true;
        case boolTag$2:
        case dateTag$2:
        case numberTag$2:
            return eq$3(+object, +other);
        case errorTag$1:
            return object.name == other.name && object.message == other.message;
        case regexpTag$2:
        case stringTag$2:
            return object == other + "";
        case mapTag$5:
            var convert = mapToArray$1;
        case setTag$5:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) return false;
            var stacked = stack.get(object);
            if (stacked) return stacked == other;
            bitmask |= COMPARE_UNORDERED_FLAG$2;
            stack.set(object, other);
            var result = equalArrays$1(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result;
        case symbolTag$2:
            if (symbolValueOf$1) return symbolValueOf$1.call(object) == symbolValueOf$1.call(other);
    }
    return false;
}
var _equalByTag = equalByTag$1;
function arrayPush$3(array, values) {
    var index2 = -1, length = values.length, offset = array.length;
    while(++index2 < length)array[offset + index2] = values[index2];
    return array;
}
var _arrayPush = arrayPush$3;
var arrayPush$2 = _arrayPush, isArray$8 = isArray_1;
function baseGetAllKeys$2(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray$8(object) ? result : arrayPush$2(result, symbolsFunc(object));
}
var _baseGetAllKeys = baseGetAllKeys$2;
function arrayFilter$1(array, predicate) {
    var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while(++index2 < length){
        var value = array[index2];
        if (predicate(value, index2, array)) result[resIndex++] = value;
    }
    return result;
}
var _arrayFilter = arrayFilter$1;
function stubArray$2() {
    return [];
}
var stubArray_1 = stubArray$2;
var arrayFilter = _arrayFilter, stubArray$1 = stubArray_1;
var objectProto$7 = Object.prototype;
var propertyIsEnumerable = objectProto$7.propertyIsEnumerable;
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbols$3 = !nativeGetSymbols$1 ? stubArray$1 : function(object) {
    if (object == null) return [];
    object = Object(object);
    return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
    });
};
var _getSymbols = getSymbols$3;
var baseGetAllKeys$1 = _baseGetAllKeys, getSymbols$2 = _getSymbols, keys$4 = keys_1;
function getAllKeys$2(object) {
    return baseGetAllKeys$1(object, keys$4, getSymbols$2);
}
var _getAllKeys = getAllKeys$2;
var getAllKeys$1 = _getAllKeys;
var COMPARE_PARTIAL_FLAG$3 = 1;
var objectProto$6 = Object.prototype;
var hasOwnProperty$6 = objectProto$6.hasOwnProperty;
function equalObjects$1(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = getAllKeys$1(object), objLength = objProps.length, othProps = getAllKeys$1(other), othLength = othProps.length;
    if (objLength != othLength && !isPartial) return false;
    var index2 = objLength;
    while(index2--){
        var key = objProps[index2];
        if (!(isPartial ? key in other : hasOwnProperty$6.call(other, key))) return false;
    }
    var objStacked = stack.get(object);
    var othStacked = stack.get(other);
    if (objStacked && othStacked) return objStacked == other && othStacked == object;
    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;
    while(++index2 < objLength){
        key = objProps[index2];
        var objValue = object[key], othValue = other[key];
        if (customizer) var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result = false;
            break;
        }
        skipCtor || (skipCtor = key == "constructor");
    }
    if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && "constructor" in object && "constructor" in other && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) result = false;
    }
    stack["delete"](object);
    stack["delete"](other);
    return result;
}
var _equalObjects = equalObjects$1;
var getNative$3 = _getNative, root$3 = _root;
var DataView$1 = getNative$3(root$3, "DataView");
var _DataView = DataView$1;
var getNative$2 = _getNative, root$2 = _root;
var Promise$2 = getNative$2(root$2, "Promise");
var _Promise = Promise$2;
var getNative$1 = _getNative, root$1 = _root;
var Set$2 = getNative$1(root$1, "Set");
var _Set = Set$2;
var getNative = _getNative, root = _root;
var WeakMap$1 = getNative(root, "WeakMap");
var _WeakMap = WeakMap$1;
var DataView = _DataView, Map = _Map, Promise$1 = _Promise, Set$1 = _Set, WeakMap = _WeakMap, baseGetTag$1 = _baseGetTag, toSource = _toSource;
var mapTag$4 = "[object Map]", objectTag$3 = "[object Object]", promiseTag = "[object Promise]", setTag$4 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
var dataViewTag$2 = "[object DataView]";
var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap);
var getTag$5 = baseGetTag$1;
if (DataView && getTag$5(new DataView(new ArrayBuffer(1))) != dataViewTag$2 || Map && getTag$5(new Map()) != mapTag$4 || Promise$1 && getTag$5(Promise$1.resolve()) != promiseTag || Set$1 && getTag$5(new Set$1()) != setTag$4 || WeakMap && getTag$5(new WeakMap()) != weakMapTag$1) getTag$5 = function(value) {
    var result = baseGetTag$1(value), Ctor = result == objectTag$3 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) switch(ctorString){
        case dataViewCtorString:
            return dataViewTag$2;
        case mapCtorString:
            return mapTag$4;
        case promiseCtorString:
            return promiseTag;
        case setCtorString:
            return setTag$4;
        case weakMapCtorString:
            return weakMapTag$1;
    }
    return result;
};
var _getTag = getTag$5;
var Stack$3 = _Stack, equalArrays = _equalArrays, equalByTag = _equalByTag, equalObjects = _equalObjects, getTag$4 = _getTag, isArray$7 = isArray_1, isBuffer$2 = isBuffer$4.exports, isTypedArray$1 = isTypedArray_1;
var COMPARE_PARTIAL_FLAG$2 = 1;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", objectTag$2 = "[object Object]";
var objectProto$5 = Object.prototype;
var hasOwnProperty$5 = objectProto$5.hasOwnProperty;
function baseIsEqualDeep$1(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray$7(object), othIsArr = isArray$7(other), objTag = objIsArr ? arrayTag$1 : getTag$4(object), othTag = othIsArr ? arrayTag$1 : getTag$4(other);
    objTag = objTag == argsTag$1 ? objectTag$2 : objTag;
    othTag = othTag == argsTag$1 ? objectTag$2 : othTag;
    var objIsObj = objTag == objectTag$2, othIsObj = othTag == objectTag$2, isSameTag = objTag == othTag;
    if (isSameTag && isBuffer$2(object)) {
        if (!isBuffer$2(other)) return false;
        objIsArr = true;
        objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
        stack || (stack = new Stack$3());
        return objIsArr || isTypedArray$1(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
        var objIsWrapped = objIsObj && hasOwnProperty$5.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty$5.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack$3());
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
    }
    if (!isSameTag) return false;
    stack || (stack = new Stack$3());
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
var _baseIsEqualDeep = baseIsEqualDeep$1;
var baseIsEqualDeep = _baseIsEqualDeep, isObjectLike$3 = isObjectLike_1;
function baseIsEqual$2(value, other, bitmask, customizer, stack) {
    if (value === other) return true;
    if (value == null || other == null || !isObjectLike$3(value) && !isObjectLike$3(other)) return value !== value && other !== other;
    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual$2, stack);
}
var _baseIsEqual = baseIsEqual$2;
var Stack$2 = _Stack, baseIsEqual$1 = _baseIsEqual;
var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch$1(object, source, matchData, customizer) {
    var index2 = matchData.length, length = index2, noCustomizer = !customizer;
    if (object == null) return !length;
    object = Object(object);
    while(index2--){
        var data2 = matchData[index2];
        if (noCustomizer && data2[2] ? data2[1] !== object[data2[0]] : !(data2[0] in object)) return false;
    }
    while(++index2 < length){
        data2 = matchData[index2];
        var key = data2[0], objValue = object[key], srcValue = data2[1];
        if (noCustomizer && data2[2]) {
            if (objValue === void 0 && !(key in object)) return false;
        } else {
            var stack = new Stack$2();
            if (customizer) var result = customizer(objValue, srcValue, key, object, source, stack);
            if (!(result === void 0 ? baseIsEqual$1(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result)) return false;
        }
    }
    return true;
}
var _baseIsMatch = baseIsMatch$1;
var isObject$8 = isObject_1;
function isStrictComparable$2(value) {
    return value === value && !isObject$8(value);
}
var _isStrictComparable = isStrictComparable$2;
var isStrictComparable$1 = _isStrictComparable, keys$3 = keys_1;
function getMatchData$1(object) {
    var result = keys$3(object), length = result.length;
    while(length--){
        var key = result[length], value = object[key];
        result[length] = [
            key,
            value,
            isStrictComparable$1(value)
        ];
    }
    return result;
}
var _getMatchData = getMatchData$1;
function matchesStrictComparable$2(key, srcValue) {
    return function(object) {
        if (object == null) return false;
        return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
    };
}
var _matchesStrictComparable = matchesStrictComparable$2;
var baseIsMatch = _baseIsMatch, getMatchData = _getMatchData, matchesStrictComparable$1 = _matchesStrictComparable;
function baseMatches$1(source) {
    var matchData = getMatchData(source);
    if (matchData.length == 1 && matchData[0][2]) return matchesStrictComparable$1(matchData[0][0], matchData[0][1]);
    return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
    };
}
var _baseMatches = baseMatches$1;
function baseHasIn$1(object, key) {
    return object != null && key in Object(object);
}
var _baseHasIn = baseHasIn$1;
var castPath$3 = _castPath, isArguments$2 = isArguments_1, isArray$6 = isArray_1, isIndex$1 = _isIndex, isLength = isLength_1, toKey$3 = _toKey;
function hasPath$2(object, path, hasFunc) {
    path = castPath$3(path, object);
    var index2 = -1, length = path.length, result = false;
    while(++index2 < length){
        var key = toKey$3(path[index2]);
        if (!(result = object != null && hasFunc(object, key))) break;
        object = object[key];
    }
    if (result || ++index2 != length) return result;
    length = object == null ? 0 : object.length;
    return !!length && isLength(length) && isIndex$1(key, length) && (isArray$6(object) || isArguments$2(object));
}
var _hasPath = hasPath$2;
var baseHasIn = _baseHasIn, hasPath$1 = _hasPath;
function hasIn$2(object, path) {
    return object != null && hasPath$1(object, path, baseHasIn);
}
var hasIn_1 = hasIn$2;
var baseIsEqual = _baseIsEqual, get = get_1, hasIn$1 = hasIn_1, isKey$1 = _isKey, isStrictComparable = _isStrictComparable, matchesStrictComparable = _matchesStrictComparable, toKey$2 = _toKey;
var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty$1(path, srcValue) {
    if (isKey$1(path) && isStrictComparable(srcValue)) return matchesStrictComparable(toKey$2(path), srcValue);
    return function(object) {
        var objValue = get(object, path);
        return objValue === void 0 && objValue === srcValue ? hasIn$1(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
    };
}
var _baseMatchesProperty = baseMatchesProperty$1;
function identity$3(value) {
    return value;
}
var identity_1 = identity$3;
function baseProperty$1(key) {
    return function(object) {
        return object == null ? void 0 : object[key];
    };
}
var _baseProperty = baseProperty$1;
var baseGet$2 = _baseGet;
function basePropertyDeep$1(path) {
    return function(object) {
        return baseGet$2(object, path);
    };
}
var _basePropertyDeep = basePropertyDeep$1;
var baseProperty = _baseProperty, basePropertyDeep = _basePropertyDeep, isKey = _isKey, toKey$1 = _toKey;
function property$1(path) {
    return isKey(path) ? baseProperty(toKey$1(path)) : basePropertyDeep(path);
}
var property_1 = property$1;
var baseMatches = _baseMatches, baseMatchesProperty = _baseMatchesProperty, identity$2 = identity_1, isArray$5 = isArray_1, property = property_1;
function baseIteratee$3(value) {
    if (typeof value == "function") return value;
    if (value == null) return identity$2;
    if (typeof value == "object") return isArray$5(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
    return property(value);
}
var _baseIteratee = baseIteratee$3;
var baseAssignValue$2 = _baseAssignValue, baseForOwn$1 = _baseForOwn, baseIteratee$2 = _baseIteratee;
function mapValues(object, iteratee) {
    var result = {
    };
    iteratee = baseIteratee$2(iteratee);
    baseForOwn$1(object, function(value, key, object2) {
        baseAssignValue$2(result, key, iteratee(value, key, object2));
    });
    return result;
}
var mapValues_1 = mapValues;
var arrayMap$2 = _arrayMap;
function baseToPairs$1(object, props) {
    return arrayMap$2(props, function(key) {
        return [
            key,
            object[key]
        ];
    });
}
var _baseToPairs = baseToPairs$1;
function setToPairs$1(set2) {
    var index2 = -1, result = Array(set2.size);
    set2.forEach(function(value) {
        result[++index2] = [
            value,
            value
        ];
    });
    return result;
}
var _setToPairs = setToPairs$1;
var baseToPairs = _baseToPairs, getTag$3 = _getTag, mapToArray = _mapToArray, setToPairs = _setToPairs;
var mapTag$3 = "[object Map]", setTag$3 = "[object Set]";
function createToPairs$1(keysFunc) {
    return function(object) {
        var tag = getTag$3(object);
        if (tag == mapTag$3) return mapToArray(object);
        if (tag == setTag$3) return setToPairs(object);
        return baseToPairs(object, keysFunc(object));
    };
}
var _createToPairs = createToPairs$1;
var createToPairs = _createToPairs, keys$2 = keys_1;
var toPairs = createToPairs(keys$2);
var toPairs_1 = toPairs;
function apply$2(func, thisArg, args) {
    switch(args.length){
        case 0:
            return func.call(thisArg);
        case 1:
            return func.call(thisArg, args[0]);
        case 2:
            return func.call(thisArg, args[0], args[1]);
        case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
}
var _apply = apply$2;
var apply$1 = _apply;
var nativeMax = Math.max;
function overRest$2(func, start, transform) {
    start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
    return function() {
        var args = arguments, index2 = -1, length = nativeMax(args.length - start, 0), array = Array(length);
        while(++index2 < length)array[index2] = args[start + index2];
        index2 = -1;
        var otherArgs = Array(start + 1);
        while(++index2 < start)otherArgs[index2] = args[index2];
        otherArgs[start] = transform(array);
        return apply$1(func, this, otherArgs);
    };
}
var _overRest = overRest$2;
function constant$1(value) {
    return function() {
        return value;
    };
}
var constant_1 = constant$1;
var constant = constant_1, defineProperty = _defineProperty, identity$1 = identity_1;
var baseSetToString$1 = !defineProperty ? identity$1 : function(func, string) {
    return defineProperty(func, "toString", {
        "configurable": true,
        "enumerable": false,
        "value": constant(string),
        "writable": true
    });
};
var _baseSetToString = baseSetToString$1;
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut$1(func) {
    var count = 0, lastCalled = 0;
    return function() {
        var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;
        if (remaining > 0) {
            if (++count >= HOT_COUNT) return arguments[0];
        } else count = 0;
        return func.apply(void 0, arguments);
    };
}
var _shortOut = shortOut$1;
var baseSetToString = _baseSetToString, shortOut = _shortOut;
var setToString$2 = shortOut(baseSetToString);
var _setToString = setToString$2;
var identity = identity_1, overRest$1 = _overRest, setToString$1 = _setToString;
function baseRest$3(func, start) {
    return setToString$1(overRest$1(func, start, identity), func + "");
}
var _baseRest = baseRest$3;
var eq$2 = eq_1, isArrayLike$3 = isArrayLike_1, isIndex = _isIndex, isObject$7 = isObject_1;
function isIterateeCall$3(value, index2, object) {
    if (!isObject$7(object)) return false;
    var type = typeof index2;
    if (type == "number" ? isArrayLike$3(object) && isIndex(index2, object.length) : type == "string" && index2 in object) return eq$2(object[index2], value);
    return false;
}
var _isIterateeCall = isIterateeCall$3;
function nativeKeysIn$1(object) {
    var result = [];
    if (object != null) for(var key in Object(object))result.push(key);
    return result;
}
var _nativeKeysIn = nativeKeysIn$1;
var isObject$6 = isObject_1, isPrototype$1 = _isPrototype, nativeKeysIn = _nativeKeysIn;
var objectProto$4 = Object.prototype;
var hasOwnProperty$4 = objectProto$4.hasOwnProperty;
function baseKeysIn$1(object) {
    if (!isObject$6(object)) return nativeKeysIn(object);
    var isProto = isPrototype$1(object), result = [];
    for(var key in object)if (!(key == "constructor" && (isProto || !hasOwnProperty$4.call(object, key)))) result.push(key);
    return result;
}
var _baseKeysIn = baseKeysIn$1;
var arrayLikeKeys = _arrayLikeKeys, baseKeysIn = _baseKeysIn, isArrayLike$2 = isArrayLike_1;
function keysIn$6(object) {
    return isArrayLike$2(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var keysIn_1 = keysIn$6;
var baseRest$2 = _baseRest, eq$1 = eq_1, isIterateeCall$2 = _isIterateeCall, keysIn$5 = keysIn_1;
var objectProto$3 = Object.prototype;
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
var defaults = baseRest$2(function(object, sources) {
    object = Object(object);
    var index2 = -1;
    var length = sources.length;
    var guard = length > 2 ? sources[2] : void 0;
    if (guard && isIterateeCall$2(sources[0], sources[1], guard)) length = 1;
    while(++index2 < length){
        var source = sources[index2];
        var props = keysIn$5(source);
        var propsIndex = -1;
        var propsLength = props.length;
        while(++propsIndex < propsLength){
            var key = props[propsIndex];
            var value = object[key];
            if (value === void 0 || eq$1(value, objectProto$3[key]) && !hasOwnProperty$3.call(object, key)) object[key] = source[key];
        }
    }
    return object;
});
var defaults_1 = defaults;
var baseAssignValue$1 = _baseAssignValue, eq = eq_1;
function assignMergeValue$2(object, key, value) {
    if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) baseAssignValue$1(object, key, value);
}
var _assignMergeValue = assignMergeValue$2;
var _cloneBuffer = {
    exports: {
    }
};
(function(module, exports) {
    var root2 = _root;
    var freeExports = exports && !exports.nodeType && exports;
    var freeModule = freeExports && true && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root2.Buffer : void 0, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
    function cloneBuffer2(buffer, isDeep) {
        if (isDeep) return buffer.slice();
        var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
        buffer.copy(result);
        return result;
    }
    module.exports = cloneBuffer2;
})(_cloneBuffer, _cloneBuffer.exports);
var Uint8Array2 = _Uint8Array;
function cloneArrayBuffer$3(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
    return result;
}
var _cloneArrayBuffer = cloneArrayBuffer$3;
var cloneArrayBuffer$2 = _cloneArrayBuffer;
function cloneTypedArray$2(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer$2(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var _cloneTypedArray = cloneTypedArray$2;
function copyArray$2(source, array) {
    var index2 = -1, length = source.length;
    array || (array = Array(length));
    while(++index2 < length)array[index2] = source[index2];
    return array;
}
var _copyArray = copyArray$2;
var isObject$5 = isObject_1;
var objectCreate = Object.create;
var baseCreate$1 = function() {
    function object() {
    }
    return function(proto) {
        if (!isObject$5(proto)) return {
        };
        if (objectCreate) return objectCreate(proto);
        object.prototype = proto;
        var result = new object();
        object.prototype = void 0;
        return result;
    };
}();
var _baseCreate = baseCreate$1;
var overArg = _overArg;
var getPrototype$3 = overArg(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype$3;
var baseCreate = _baseCreate, getPrototype$2 = _getPrototype, isPrototype = _isPrototype;
function initCloneObject$2(object) {
    return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype$2(object)) : {
    };
}
var _initCloneObject = initCloneObject$2;
var baseGetTag = _baseGetTag, getPrototype$1 = _getPrototype, isObjectLike$2 = isObjectLike_1;
var objectTag$1 = "[object Object]";
var funcProto = Function.prototype, objectProto$2 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject$2(value) {
    if (!isObjectLike$2(value) || baseGetTag(value) != objectTag$1) return false;
    var proto = getPrototype$1(value);
    if (proto === null) return true;
    var Ctor = hasOwnProperty$2.call(proto, "constructor") && proto.constructor;
    return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
var isPlainObject_1 = isPlainObject$2;
function safeGet$2(object, key) {
    if (key === "constructor" && typeof object[key] === "function") return;
    if (key == "__proto__") return;
    return object[key];
}
var _safeGet = safeGet$2;
var assignValue$1 = _assignValue, baseAssignValue = _baseAssignValue;
function copyObject$6(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {
    });
    var index2 = -1, length = props.length;
    while(++index2 < length){
        var key = props[index2];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
        if (newValue === void 0) newValue = source[key];
        if (isNew) baseAssignValue(object, key, newValue);
        else assignValue$1(object, key, newValue);
    }
    return object;
}
var _copyObject = copyObject$6;
var copyObject$5 = _copyObject, keysIn$4 = keysIn_1;
function toPlainObject$1(value) {
    return copyObject$5(value, keysIn$4(value));
}
var toPlainObject_1 = toPlainObject$1;
var assignMergeValue$1 = _assignMergeValue, cloneBuffer$1 = _cloneBuffer.exports, cloneTypedArray$1 = _cloneTypedArray, copyArray$1 = _copyArray, initCloneObject$1 = _initCloneObject, isArguments$1 = isArguments_1, isArray$4 = isArray_1, isArrayLikeObject = isArrayLikeObject_1, isBuffer$1 = isBuffer$4.exports, isFunction = isFunction_1, isObject$4 = isObject_1, isPlainObject$1 = isPlainObject_1, isTypedArray = isTypedArray_1, safeGet$1 = _safeGet, toPlainObject = toPlainObject_1;
function baseMergeDeep$1(object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = safeGet$1(object, key), srcValue = safeGet$1(source, key), stacked = stack.get(srcValue);
    if (stacked) {
        assignMergeValue$1(object, key, stacked);
        return;
    }
    var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
    var isCommon = newValue === void 0;
    if (isCommon) {
        var isArr = isArray$4(srcValue), isBuff = !isArr && isBuffer$1(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
            if (isArray$4(objValue)) newValue = objValue;
            else if (isArrayLikeObject(objValue)) newValue = copyArray$1(objValue);
            else if (isBuff) {
                isCommon = false;
                newValue = cloneBuffer$1(srcValue, true);
            } else if (isTyped) {
                isCommon = false;
                newValue = cloneTypedArray$1(srcValue, true);
            } else newValue = [];
        } else if (isPlainObject$1(srcValue) || isArguments$1(srcValue)) {
            newValue = objValue;
            if (isArguments$1(objValue)) newValue = toPlainObject(objValue);
            else if (!isObject$4(objValue) || isFunction(objValue)) newValue = initCloneObject$1(srcValue);
        } else isCommon = false;
    }
    if (isCommon) {
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack["delete"](srcValue);
    }
    assignMergeValue$1(object, key, newValue);
}
var _baseMergeDeep = baseMergeDeep$1;
var Stack$1 = _Stack, assignMergeValue = _assignMergeValue, baseFor = _baseFor, baseMergeDeep = _baseMergeDeep, isObject$3 = isObject_1, keysIn$3 = keysIn_1, safeGet = _safeGet;
function baseMerge$2(object, source, srcIndex, customizer, stack) {
    if (object === source) return;
    baseFor(source, function(srcValue, key) {
        stack || (stack = new Stack$1());
        if (isObject$3(srcValue)) baseMergeDeep(object, source, key, srcIndex, baseMerge$2, customizer, stack);
        else {
            var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
            if (newValue === void 0) newValue = srcValue;
            assignMergeValue(object, key, newValue);
        }
    }, keysIn$3);
}
var _baseMerge = baseMerge$2;
var baseMerge$1 = _baseMerge, isObject$2 = isObject_1;
function customDefaultsMerge$1(objValue, srcValue, key, object, source, stack) {
    if (isObject$2(objValue) && isObject$2(srcValue)) {
        stack.set(srcValue, objValue);
        baseMerge$1(objValue, srcValue, void 0, customDefaultsMerge$1, stack);
        stack["delete"](srcValue);
    }
    return objValue;
}
var _customDefaultsMerge = customDefaultsMerge$1;
var baseRest$1 = _baseRest, isIterateeCall$1 = _isIterateeCall;
function createAssigner$1(assigner) {
    return baseRest$1(function(object, sources) {
        var index2 = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
        customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
        if (guard && isIterateeCall$1(sources[0], sources[1], guard)) {
            customizer = length < 3 ? void 0 : customizer;
            length = 1;
        }
        object = Object(object);
        while(++index2 < length){
            var source = sources[index2];
            if (source) assigner(object, source, index2, customizer);
        }
        return object;
    });
}
var _createAssigner = createAssigner$1;
var baseMerge = _baseMerge, createAssigner = _createAssigner;
var mergeWith$1 = createAssigner(function(object, source, srcIndex, customizer) {
    baseMerge(object, source, srcIndex, customizer);
});
var mergeWith_1 = mergeWith$1;
var apply = _apply, baseRest = _baseRest, customDefaultsMerge = _customDefaultsMerge, mergeWith = mergeWith_1;
var defaultsDeep = baseRest(function(args) {
    args.push(void 0, customDefaultsMerge);
    return apply(mergeWith, void 0, args);
});
var defaultsDeep_1 = defaultsDeep;
var baseGet$1 = _baseGet, baseSet = _baseSet, castPath$2 = _castPath;
function basePickBy$1(object, paths, predicate) {
    var index2 = -1, length = paths.length, result = {
    };
    while(++index2 < length){
        var path = paths[index2], value = baseGet$1(object, path);
        if (predicate(value, path)) baseSet(result, castPath$2(path, object), value);
    }
    return result;
}
var _basePickBy = basePickBy$1;
var basePickBy = _basePickBy, hasIn = hasIn_1;
function basePick$1(object, paths) {
    return basePickBy(object, paths, function(value, path) {
        return hasIn(object, path);
    });
}
var _basePick = basePick$1;
var Symbol$2 = _Symbol, isArguments = isArguments_1, isArray$3 = isArray_1;
var spreadableSymbol = Symbol$2 ? Symbol$2.isConcatSpreadable : void 0;
function isFlattenable$1(value) {
    return isArray$3(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
var _isFlattenable = isFlattenable$1;
var arrayPush$1 = _arrayPush, isFlattenable = _isFlattenable;
function baseFlatten$1(array, depth, predicate, isStrict, result) {
    var index2 = -1, length = array.length;
    predicate || (predicate = isFlattenable);
    result || (result = []);
    while(++index2 < length){
        var value = array[index2];
        if (depth > 0 && predicate(value)) {
            if (depth > 1) baseFlatten$1(value, depth - 1, predicate, isStrict, result);
            else arrayPush$1(result, value);
        } else if (!isStrict) result[result.length] = value;
    }
    return result;
}
var _baseFlatten = baseFlatten$1;
var baseFlatten = _baseFlatten;
function flatten$1(array) {
    var length = array == null ? 0 : array.length;
    return length ? baseFlatten(array, 1) : [];
}
var flatten_1 = flatten$1;
var flatten = flatten_1, overRest = _overRest, setToString = _setToString;
function flatRest$2(func) {
    return setToString(overRest(func, void 0, flatten), func + "");
}
var _flatRest = flatRest$2;
var basePick = _basePick, flatRest$1 = _flatRest;
var pick = flatRest$1(function(object, paths) {
    return object == null ? {
    } : basePick(object, paths);
});
var pick_1 = pick;
function arrayEach$1(array, iteratee) {
    var index2 = -1, length = array == null ? 0 : array.length;
    while(++index2 < length){
        if (iteratee(array[index2], index2, array) === false) break;
    }
    return array;
}
var _arrayEach = arrayEach$1;
var copyObject$4 = _copyObject, keys$1 = keys_1;
function baseAssign$1(object, source) {
    return object && copyObject$4(source, keys$1(source), object);
}
var _baseAssign = baseAssign$1;
var copyObject$3 = _copyObject, keysIn$2 = keysIn_1;
function baseAssignIn$1(object, source) {
    return object && copyObject$3(source, keysIn$2(source), object);
}
var _baseAssignIn = baseAssignIn$1;
var copyObject$2 = _copyObject, getSymbols$1 = _getSymbols;
function copySymbols$1(source, object) {
    return copyObject$2(source, getSymbols$1(source), object);
}
var _copySymbols = copySymbols$1;
var arrayPush = _arrayPush, getPrototype = _getPrototype, getSymbols = _getSymbols, stubArray = stubArray_1;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn$2 = !nativeGetSymbols ? stubArray : function(object) {
    var result = [];
    while(object){
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
    }
    return result;
};
var _getSymbolsIn = getSymbolsIn$2;
var copyObject$1 = _copyObject, getSymbolsIn$1 = _getSymbolsIn;
function copySymbolsIn$1(source, object) {
    return copyObject$1(source, getSymbolsIn$1(source), object);
}
var _copySymbolsIn = copySymbolsIn$1;
var baseGetAllKeys = _baseGetAllKeys, getSymbolsIn = _getSymbolsIn, keysIn$1 = keysIn_1;
function getAllKeysIn$2(object) {
    return baseGetAllKeys(object, keysIn$1, getSymbolsIn);
}
var _getAllKeysIn = getAllKeysIn$2;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function initCloneArray$1(array) {
    var length = array.length, result = new array.constructor(length);
    if (length && typeof array[0] == "string" && hasOwnProperty$1.call(array, "index")) {
        result.index = array.index;
        result.input = array.input;
    }
    return result;
}
var _initCloneArray = initCloneArray$1;
var cloneArrayBuffer$1 = _cloneArrayBuffer;
function cloneDataView$1(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer$1(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var _cloneDataView = cloneDataView$1;
var reFlags = /\w*$/;
function cloneRegExp$1(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
}
var _cloneRegExp = cloneRegExp$1;
var Symbol$1 = _Symbol;
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function cloneSymbol$1(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {
    };
}
var _cloneSymbol = cloneSymbol$1;
var cloneArrayBuffer = _cloneArrayBuffer, cloneDataView = _cloneDataView, cloneRegExp = _cloneRegExp, cloneSymbol = _cloneSymbol, cloneTypedArray = _cloneTypedArray;
var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag$1(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch(tag){
        case arrayBufferTag$1:
            return cloneArrayBuffer(object);
        case boolTag$1:
        case dateTag$1:
            return new Ctor(+object);
        case dataViewTag$1:
            return cloneDataView(object, isDeep);
        case float32Tag$1:
        case float64Tag$1:
        case int8Tag$1:
        case int16Tag$1:
        case int32Tag$1:
        case uint8Tag$1:
        case uint8ClampedTag$1:
        case uint16Tag$1:
        case uint32Tag$1:
            return cloneTypedArray(object, isDeep);
        case mapTag$2:
            return new Ctor();
        case numberTag$1:
        case stringTag$1:
            return new Ctor(object);
        case regexpTag$1:
            return cloneRegExp(object);
        case setTag$2:
            return new Ctor();
        case symbolTag$1:
            return cloneSymbol(object);
    }
}
var _initCloneByTag = initCloneByTag$1;
var getTag$2 = _getTag, isObjectLike$1 = isObjectLike_1;
var mapTag$1 = "[object Map]";
function baseIsMap$1(value) {
    return isObjectLike$1(value) && getTag$2(value) == mapTag$1;
}
var _baseIsMap = baseIsMap$1;
var baseIsMap = _baseIsMap, baseUnary$1 = _baseUnary, nodeUtil$1 = _nodeUtil.exports;
var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;
var isMap$1 = nodeIsMap ? baseUnary$1(nodeIsMap) : baseIsMap;
var isMap_1 = isMap$1;
var getTag$1 = _getTag, isObjectLike = isObjectLike_1;
var setTag$1 = "[object Set]";
function baseIsSet$1(value) {
    return isObjectLike(value) && getTag$1(value) == setTag$1;
}
var _baseIsSet = baseIsSet$1;
var baseIsSet = _baseIsSet, baseUnary = _baseUnary, nodeUtil = _nodeUtil.exports;
var nodeIsSet = nodeUtil && nodeUtil.isSet;
var isSet$1 = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
var isSet_1 = isSet$1;
var Stack = _Stack, arrayEach = _arrayEach, assignValue = _assignValue, baseAssign = _baseAssign, baseAssignIn = _baseAssignIn, cloneBuffer = _cloneBuffer.exports, copyArray = _copyArray, copySymbols = _copySymbols, copySymbolsIn = _copySymbolsIn, getAllKeys = _getAllKeys, getAllKeysIn$1 = _getAllKeysIn, getTag = _getTag, initCloneArray = _initCloneArray, initCloneByTag = _initCloneByTag, initCloneObject = _initCloneObject, isArray$2 = isArray_1, isBuffer = isBuffer$4.exports, isMap = isMap_1, isObject$1 = isObject_1, isSet = isSet_1, keys = keys_1, keysIn = keysIn_1;
var CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG$1 = 2, CLONE_SYMBOLS_FLAG$1 = 4;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {
};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone$1(value, bitmask, customizer, key, object, stack) {
    var result, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG$1, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
    if (customizer) result = object ? customizer(value, key, object, stack) : customizer(value);
    if (result !== void 0) return result;
    if (!isObject$1(value)) return value;
    var isArr = isArray$2(value);
    if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) return copyArray(value, result);
    } else {
        var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
        if (isBuffer(value)) return cloneBuffer(value, isDeep);
        if (tag == objectTag || tag == argsTag || isFunc && !object) {
            result = isFlat || isFunc ? {
            } : initCloneObject(value);
            if (!isDeep) return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
        } else {
            if (!cloneableTags[tag]) return object ? value : {
            };
            result = initCloneByTag(value, tag, isDeep);
        }
    }
    stack || (stack = new Stack());
    var stacked = stack.get(value);
    if (stacked) return stacked;
    stack.set(value, result);
    if (isSet(value)) value.forEach(function(subValue) {
        result.add(baseClone$1(subValue, bitmask, customizer, subValue, value, stack));
    });
    else if (isMap(value)) value.forEach(function(subValue, key2) {
        result.set(key2, baseClone$1(subValue, bitmask, customizer, key2, value, stack));
    });
    var keysFunc = isFull ? isFlat ? getAllKeysIn$1 : getAllKeys : isFlat ? keysIn : keys;
    var props = isArr ? void 0 : keysFunc(value);
    arrayEach(props || value, function(subValue, key2) {
        if (props) {
            key2 = subValue;
            subValue = value[key2];
        }
        assignValue(result, key2, baseClone$1(subValue, bitmask, customizer, key2, value, stack));
    });
    return result;
}
var _baseClone = baseClone$1;
function last$1(array) {
    var length = array == null ? 0 : array.length;
    return length ? array[length - 1] : void 0;
}
var last_1 = last$1;
function baseSlice$1(array, start, end) {
    var index2 = -1, length = array.length;
    if (start < 0) start = -start > length ? 0 : length + start;
    end = end > length ? length : end;
    if (end < 0) end += length;
    length = start > end ? 0 : end - start >>> 0;
    start >>>= 0;
    var result = Array(length);
    while(++index2 < length)result[index2] = array[index2 + start];
    return result;
}
var _baseSlice = baseSlice$1;
var baseGet = _baseGet, baseSlice = _baseSlice;
function parent$1(object, path) {
    return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}
var _parent = parent$1;
var castPath$1 = _castPath, last = last_1, parent = _parent, toKey = _toKey;
function baseUnset$1(object, path) {
    path = castPath$1(path, object);
    object = parent(object, path);
    return object == null || delete object[toKey(last(path))];
}
var _baseUnset = baseUnset$1;
var isPlainObject = isPlainObject_1;
function customOmitClone$1(value) {
    return isPlainObject(value) ? void 0 : value;
}
var _customOmitClone = customOmitClone$1;
var arrayMap$1 = _arrayMap, baseClone = _baseClone, baseUnset = _baseUnset, castPath = _castPath, copyObject = _copyObject, customOmitClone = _customOmitClone, flatRest = _flatRest, getAllKeysIn = _getAllKeysIn;
var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
var omit = flatRest(function(object, paths) {
    var result = {
    };
    if (object == null) return result;
    var isDeep = false;
    paths = arrayMap$1(paths, function(path) {
        path = castPath(path, object);
        isDeep || (isDeep = path.length > 1);
        return path;
    });
    copyObject(object, getAllKeysIn(object), result);
    if (isDeep) result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
    var length = paths.length;
    while(length--)baseUnset(result, paths[length]);
    return result;
});
var omit_1 = omit;
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseHas$1(object, key) {
    return object != null && hasOwnProperty.call(object, key);
}
var _baseHas = baseHas$1;
var baseHas = _baseHas, hasPath = _hasPath;
function has$1(object, path) {
    return object != null && hasPath(object, path, baseHas);
}
var has_1 = has$1;
var isArrayLike$1 = isArrayLike_1;
function createBaseEach$1(eachFunc, fromRight) {
    return function(collection, iteratee) {
        if (collection == null) return collection;
        if (!isArrayLike$1(collection)) return eachFunc(collection, iteratee);
        var length = collection.length, index2 = fromRight ? length : -1, iterable = Object(collection);
        while(fromRight ? index2-- : ++index2 < length){
            if (iteratee(iterable[index2], index2, iterable) === false) break;
        }
        return collection;
    };
}
var _createBaseEach = createBaseEach$1;
var baseForOwn = _baseForOwn, createBaseEach = _createBaseEach;
var baseEach$2 = createBaseEach(baseForOwn);
var _baseEach = baseEach$2;
var baseEach$1 = _baseEach, isArrayLike = isArrayLike_1;
function baseMap$1(collection, iteratee) {
    var index2 = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
    baseEach$1(collection, function(value, key, collection2) {
        result[++index2] = iteratee(value, key, collection2);
    });
    return result;
}
var _baseMap = baseMap$1;
var arrayMap = _arrayMap, baseIteratee$1 = _baseIteratee, baseMap = _baseMap, isArray$1 = isArray_1;
function map(collection, iteratee) {
    var func = isArray$1(collection) ? arrayMap : baseMap;
    return func(collection, baseIteratee$1(iteratee));
}
var map_1 = map;
function head(array) {
    return array && array.length ? array[0] : void 0;
}
var head_1 = head;
var baseEach = _baseEach;
function baseSome$1(collection, predicate) {
    var result;
    baseEach(collection, function(value, index2, collection2) {
        result = predicate(value, index2, collection2);
        return !result;
    });
    return !!result;
}
var _baseSome = baseSome$1;
var arraySome = _arraySome, baseIteratee = _baseIteratee, baseSome = _baseSome, isArray = isArray_1, isIterateeCall = _isIterateeCall;
function some$1(collection, predicate, guard) {
    var func = isArray(collection) ? arraySome : baseSome;
    if (guard && isIterateeCall(collection, predicate, guard)) predicate = void 0;
    return func(collection, baseIteratee(predicate));
}
var some_1 = some$1;
const getType = (value)=>Object.prototype.toString.call(value).slice(8, -1)
;
const isDate = (value)=>isDate_1(value) && !isNaN(value.getTime())
;
const isObject = (value)=>getType(value) === "Object"
;
const has = has_1;
const hasAny = (obj, props)=>some_1(props, (p)=>has_1(obj, p)
    )
;
const some = some_1;
const pad = (val, len, char = "0")=>{
    val = val !== null && val !== void 0 ? String(val) : "";
    len = len || 2;
    while(val.length < len)val = `${char}${val}`;
    return val;
};
const mergeEvents = (...args)=>{
    const result = {
    };
    args.forEach((e)=>Object.entries(e).forEach(([key, value])=>{
            if (!result[key]) result[key] = value;
            else if (isArrayLikeObject_1(result[key])) result[key].push(value);
            else result[key] = [
                result[key],
                value
            ];
        })
    );
    return result;
};
const pageIsValid = (page)=>!!(page && page.month && page.year)
;
const pageIsBeforePage = (page, comparePage)=>{
    if (!pageIsValid(page) || !pageIsValid(comparePage)) return false;
    if (page.year === comparePage.year) return page.month < comparePage.month;
    return page.year < comparePage.year;
};
const pageIsAfterPage = (page, comparePage)=>{
    if (!pageIsValid(page) || !pageIsValid(comparePage)) return false;
    if (page.year === comparePage.year) return page.month > comparePage.month;
    return page.year > comparePage.year;
};
const pageIsBetweenPages = (page, fromPage, toPage)=>(page || false) && !pageIsBeforePage(page, fromPage) && !pageIsAfterPage(page, toPage)
;
const pageIsEqualToPage = (aPage, bPage)=>{
    if (!aPage && bPage) return false;
    if (aPage && !bPage) return false;
    if (!aPage && !bPage) return true;
    return aPage.month === bPage.month && aPage.year === bPage.year;
};
const addPages = ({ month , year  }, count)=>{
    const incr = count > 0 ? 1 : -1;
    for(let i = 0; i < Math.abs(count); i++){
        month += incr;
        if (month > 12) {
            month = 1;
            year++;
        } else if (month < 1) {
            month = 12;
            year--;
        }
    }
    return {
        month,
        year
    };
};
const pageRangeToArray = (from, to)=>{
    if (!pageIsValid(from) || !pageIsValid(to)) return [];
    const result = [];
    while(!pageIsAfterPage(from, to)){
        result.push(from);
        from = addPages(from, 1);
    }
    return result;
};
function datesAreEqual(a, b) {
    const aIsDate = isDate(a);
    const bIsDate = isDate(b);
    if (!aIsDate && !bIsDate) return true;
    if (aIsDate !== bIsDate) return false;
    return a.getTime() === b.getTime();
}
const arrayHasItems = (array)=>isArrayLikeObject_1(array) && array.length > 0
;
const mixinOptionalProps = (source, target, props)=>{
    const assigned = [];
    props.forEach((p)=>{
        const name = p.name || p.toString();
        const mixin = p.mixin;
        const validate = p.validate;
        if (Object.prototype.hasOwnProperty.call(source, name)) {
            const value = validate ? validate(source[name]) : source[name];
            target[name] = mixin && isObject(value) ? __spreadValues(__spreadValues({
            }, mixin), value) : value;
            assigned.push(name);
        }
    });
    return {
        target,
        assigned: assigned.length ? assigned : null
    };
};
const on = (element, event, handler, opts)=>{
    if (element && event && handler) element.addEventListener(event, handler, opts);
};
const off = (element, event, handler, opts)=>{
    if (element && event) element.removeEventListener(event, handler, opts);
};
const elementContains = (element, child)=>!!element && !!child && (element === child || element.contains(child))
;
const onSpaceOrEnter = (event, handler)=>{
    if (event.key === " " || event.key === "Enter") {
        handler(event);
        event.preventDefault();
    }
};
const createGuid = ()=>{
    function S4() {
        return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
    }
    return `${S4() + S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
};
function hash(str) {
    let hashcode = 0;
    let i = 0;
    let chr;
    if (str.length === 0) return hashcode;
    for(i = 0; i < str.length; i++){
        chr = str.charCodeAt(i);
        hashcode = (hashcode << 5) - hashcode + chr;
        hashcode |= 0;
    }
    return hashcode;
}
var _export_sfc = (sfc, props)=>{
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props)target[key] = val;
    return target;
};
const _sfc_main$a = {
    name: "CustomTransition",
    emits: [
        "before-enter",
        "before-transition",
        "after-enter",
        "after-transition"
    ],
    props: {
        name: String,
        appear: Boolean
    },
    computed: {
        name_ () {
            return `vc-${this.name || "none"}`;
        }
    },
    methods: {
        beforeEnter (el) {
            this.$emit("before-enter", el);
            this.$emit("before-transition", el);
        },
        afterEnter (el) {
            this.$emit("after-enter", el);
            this.$emit("after-transition", el);
        }
    }
};
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return _vue.openBlock(), _vue.createBlock(_vue.Transition, {
        name: $options.name_,
        appear: $props.appear,
        onBeforeEnter: $options.beforeEnter,
        onAfterEnter: $options.afterEnter
    }, {
        default: _vue.withCtx(()=>[
                _vue.renderSlot(_ctx.$slots, "default")
            ]
        ),
        _: 3
    }, 8, [
        "name",
        "appear",
        "onBeforeEnter",
        "onAfterEnter"
    ]);
}
var CustomTransition = /* @__PURE__ */ _export_sfc(_sfc_main$a, [
    [
        "render",
        _sfc_render$5
    ]
]);
const _sfc_main$9 = {
    name: "Popover",
    emits: [
        "before-show",
        "after-show",
        "before-hide",
        "after-hide"
    ],
    render () {
        return _vue.h("div", {
            class: [
                "vc-popover-content-wrapper",
                {
                    "is-interactive": this.isInteractive
                }
            ],
            ref: "popover"
        }, [
            _vue.h(CustomTransition, {
                name: this.transition,
                appear: true,
                "on-before-enter": this.beforeEnter,
                "on-after-enter": this.afterEnter,
                "on-before-leave": this.beforeLeave,
                "on-after-leave": this.afterLeave
            }, {
                default: ()=>this.isVisible ? _vue.h("div", {
                        tabindex: -1,
                        class: [
                            "vc-popover-content",
                            `direction-${this.direction}`,
                            this.contentClass
                        ],
                        style: this.contentStyle
                    }, [
                        this.content,
                        _vue.h("span", {
                            class: [
                                "vc-popover-caret",
                                `direction-${this.direction}`,
                                `align-${this.alignment}`
                            ]
                        })
                    ]) : null
            })
        ]);
    },
    props: {
        id: {
            type: String,
            required: true
        },
        contentClass: String
    },
    data () {
        return {
            ref: null,
            opts: null,
            data: null,
            transition: "slide-fade",
            transitionTranslate: "15px",
            transitionDuration: "0.15s",
            placement: "bottom",
            positionFixed: false,
            modifiers: [],
            isInteractive: false,
            isHovered: false,
            isFocused: false,
            showDelay: 0,
            hideDelay: 110,
            autoHide: false,
            popperEl: null
        };
    },
    computed: {
        content () {
            return isFunction_1(this.$slots.default) && this.$slots.default({
                direction: this.direction,
                alignment: this.alignment,
                data: this.data,
                updateLayout: this.setupPopper,
                hide: (opts)=>this.hide(opts)
            }) || this.$slots.default;
        },
        contentStyle () {
            return {
                "--slide-translate": this.transitionTranslate,
                "--slide-duration": this.transitionDuration
            };
        },
        popperOptions () {
            return {
                placement: this.placement,
                strategy: this.positionFixed ? "fixed" : "absolute",
                modifiers: [
                    {
                        name: "onUpdate",
                        enabled: true,
                        phase: "afterWrite",
                        fn: this.onPopperUpdate
                    },
                    ...this.modifiers || []
                ],
                onFirstUpdate: this.onPopperUpdate
            };
        },
        isVisible () {
            return !!(this.ref && this.content);
        },
        direction () {
            return this.placement && this.placement.split("-")[0] || "bottom";
        },
        alignment () {
            const isLeftRight = this.direction === "left" || this.direction === "right";
            let alignment = this.placement.split("-");
            alignment = alignment.length > 1 ? alignment[1] : "";
            if ([
                "start",
                "top",
                "left"
            ].includes(alignment)) return isLeftRight ? "top" : "left";
            if ([
                "end",
                "bottom",
                "right"
            ].includes(alignment)) return isLeftRight ? "bottom" : "right";
            return isLeftRight ? "middle" : "center";
        }
    },
    watch: {
        opts (val, oldVal) {
            if (oldVal && oldVal.callback) oldVal.callback(__spreadProps(__spreadValues({
            }, oldVal), {
                completed: !val,
                reason: val ? "Overridden by action" : null
            }));
        }
    },
    mounted () {
        this.popoverEl = this.$refs.popover;
        this.addEvents();
    },
    beforeUnmount () {
        this.destroyPopper();
        this.removeEvents();
        this.popoverEl = null;
    },
    methods: {
        addEvents () {
            on(this.popoverEl, "click", this.onClick);
            on(this.popoverEl, "mouseover", this.onMouseOver);
            on(this.popoverEl, "mouseleave", this.onMouseLeave);
            on(this.popoverEl, "focusin", this.onFocusIn);
            on(this.popoverEl, "focusout", this.onFocusOut);
            on(document, "keydown", this.onDocumentKeydown);
            on(document, "click", this.onDocumentClick);
            on(document, "show-popover", this.onDocumentShowPopover);
            on(document, "hide-popover", this.onDocumentHidePopover);
            on(document, "toggle-popover", this.onDocumentTogglePopover);
            on(document, "update-popover", this.onDocumentUpdatePopover);
        },
        removeEvents () {
            off(this.popoverEl, "click", this.onClick);
            off(this.popoverEl, "mouseover", this.onMouseOver);
            off(this.popoverEl, "mouseleave", this.onMouseLeave);
            off(this.popoverEl, "focusin", this.onFocusIn);
            off(this.popoverEl, "focusout", this.onFocusOut);
            off(document, "keydown", this.onDocumentKeydown);
            off(document, "click", this.onDocumentClick);
            off(document, "show-popover", this.onDocumentShowPopover);
            off(document, "hide-popover", this.onDocumentHidePopover);
            off(document, "toggle-popover", this.onDocumentTogglePopover);
            off(document, "update-popover", this.onDocumentUpdatePopover);
        },
        onClick (e) {
            e.stopPropagation();
        },
        onMouseOver () {
            this.isHovered = true;
            if (this.isInteractive) this.show();
        },
        onMouseLeave () {
            this.isHovered = false;
            if (this.autoHide && !this.isFocused && (!this.ref || this.ref !== document.activeElement)) this.hide();
        },
        onFocusIn () {
            this.isFocused = true;
            if (this.isInteractive) this.show();
        },
        onFocusOut (e) {
            if (!e.relatedTarget || !elementContains(this.popoverEl, e.relatedTarget)) {
                this.isFocused = false;
                if (!this.isHovered && this.autoHide) this.hide();
            }
        },
        onDocumentClick (e) {
            if (!this.$refs.popover || !this.ref) return;
            if (elementContains(this.popoverEl, e.target) || elementContains(this.ref, e.target)) return;
            this.hide();
        },
        onDocumentKeydown (e) {
            if (e.key === "Esc" || e.key === "Escape") this.hide();
        },
        onDocumentShowPopover ({ detail  }) {
            if (!detail.id || detail.id !== this.id) return;
            this.show(detail);
        },
        onDocumentHidePopover ({ detail  }) {
            if (!detail.id || detail.id !== this.id) return;
            this.hide(detail);
        },
        onDocumentTogglePopover ({ detail  }) {
            if (!detail.id || detail.id !== this.id) return;
            this.toggle(detail);
        },
        onDocumentUpdatePopover ({ detail  }) {
            if (!detail.id || detail.id !== this.id) return;
            this.update(detail);
        },
        show (opts = {
        }) {
            opts.action = "show";
            const ref = opts.ref || this.ref;
            const delay = opts.showDelay >= 0 ? opts.showDelay : this.showDelay;
            if (!ref) {
                if (opts.callback) opts.callback({
                    completed: false,
                    reason: "Invalid reference element provided"
                });
                return;
            }
            clearTimeout(this.timeout);
            this.opts = opts;
            const fn = ()=>{
                Object.assign(this, omit_1(opts, [
                    "id"
                ]));
                this.setupPopper();
                this.opts = null;
            };
            if (delay > 0) this.timeout = setTimeout(()=>fn()
            , delay);
            else fn();
        },
        hide (opts = {
        }) {
            opts.action = "hide";
            const ref = opts.ref || this.ref;
            const delay = opts.hideDelay >= 0 ? opts.hideDelay : this.hideDelay;
            if (!this.ref || ref !== this.ref) {
                if (opts.callback) opts.callback(__spreadProps(__spreadValues({
                }, opts), {
                    completed: false,
                    reason: this.ref ? "Invalid reference element provided" : "Popover already hidden"
                }));
                return;
            }
            const fn = ()=>{
                this.ref = null;
                this.opts = null;
            };
            clearTimeout(this.timeout);
            this.opts = opts;
            if (delay > 0) this.timeout = setTimeout(fn, delay);
            else fn();
        },
        toggle (opts = {
        }) {
            if (this.isVisible && opts.ref === this.ref) this.hide(opts);
            else this.show(opts);
        },
        update (opts = {
        }) {
            Object.assign(this, omit_1(opts, [
                "id"
            ]));
            this.setupPopper();
        },
        setupPopper () {
            this.$nextTick(()=>{
                if (!this.ref || !this.$refs.popover) return;
                if (this.popper && this.popper.reference !== this.ref) this.destroyPopper();
                if (!this.popper) this.popper = _core.createPopper(this.ref, this.popoverEl, this.popperOptions);
                else this.popper.update();
            });
        },
        onPopperUpdate (args) {
            if (args.placement) this.placement = args.placement;
            else if (args.state) this.placement = args.state.placement;
        },
        beforeEnter (e) {
            this.$emit("before-show", e);
        },
        afterEnter (e) {
            this.$emit("after-show", e);
        },
        beforeLeave (e) {
            this.$emit("before-hide", e);
        },
        afterLeave (e) {
            this.destroyPopper();
            this.$emit("after-hide", e);
        },
        destroyPopper () {
            if (this.popper) {
                this.popper.destroy();
                this.popper = null;
            }
        }
    }
};
const childMixin$1 = {
    inject: [
        "sharedState"
    ],
    computed: {
        masks () {
            return this.sharedState.masks;
        },
        theme () {
            return this.sharedState.theme;
        },
        locale () {
            return this.sharedState.locale;
        },
        dayPopoverId () {
            return this.sharedState.dayPopoverId;
        }
    },
    methods: {
        format (date, mask) {
            return this.locale.format(date, mask);
        },
        pageForDate (date) {
            return this.locale.getDateParts(this.locale.normalizeDate(date));
        }
    }
};
const targetProps = [
    "base",
    "start",
    "end",
    "startEnd"
];
const displayProps = [
    "class",
    "contentClass",
    "style",
    "contentStyle",
    "color",
    "fillMode"
];
const defConfig = {
    color: "blue",
    isDark: false,
    highlight: {
        base: {
            fillMode: "light"
        },
        start: {
            fillMode: "solid"
        },
        end: {
            fillMode: "solid"
        }
    },
    dot: {
        base: {
            fillMode: "solid"
        },
        start: {
            fillMode: "solid"
        },
        end: {
            fillMode: "solid"
        }
    },
    bar: {
        base: {
            fillMode: "solid"
        },
        start: {
            fillMode: "solid"
        },
        end: {
            fillMode: "solid"
        }
    },
    content: {
        base: {
        },
        start: {
        },
        end: {
        }
    }
};
class Theme {
    constructor(config){
        Object.assign(this, defConfig, config);
    }
    normalizeAttr({ config , type  }) {
        let rootColor = this.color;
        let root2 = {
        };
        const normAttr = this[type];
        if (config === true || isString_1(config)) {
            rootColor = isString_1(config) ? config : rootColor;
            root2 = __spreadValues({
            }, normAttr);
        } else if (isObject(config)) {
            if (hasAny(config, targetProps)) root2 = __spreadValues({
            }, config);
            else root2 = {
                base: __spreadValues({
                }, config),
                start: __spreadValues({
                }, config),
                end: __spreadValues({
                }, config)
            };
        } else return null;
        defaults_1(root2, {
            start: root2.startEnd,
            end: root2.startEnd
        }, normAttr);
        toPairs_1(root2).forEach(([targetType, targetConfig])=>{
            let targetColor = rootColor;
            if (targetConfig === true || isString_1(targetConfig)) {
                targetColor = isString_1(targetConfig) ? targetConfig : targetColor;
                root2[targetType] = {
                    color: targetColor
                };
            } else if (isObject(targetConfig)) {
                if (hasAny(targetConfig, displayProps)) root2[targetType] = __spreadValues({
                }, targetConfig);
                else root2[targetType] = {
                };
            }
            if (!has(root2, `${targetType}.color`)) set_1(root2, `${targetType}.color`, targetColor);
        });
        return root2;
    }
    normalizeHighlight(config) {
        const highlight = this.normalizeAttr({
            config,
            type: "highlight"
        });
        toPairs_1(highlight).forEach(([_, targetConfig])=>{
            const c = defaults_1(targetConfig, {
                isDark: this.isDark,
                color: this.color
            });
            targetConfig.style = __spreadValues(__spreadValues({
            }, this.getHighlightBgStyle(c)), targetConfig.style);
            targetConfig.contentStyle = __spreadValues(__spreadValues({
            }, this.getHighlightContentStyle(c)), targetConfig.contentStyle);
        });
        return highlight;
    }
    getHighlightBgStyle({ fillMode , color , isDark  }) {
        switch(fillMode){
            case "outline":
            case "none":
                return {
                    backgroundColor: isDark ? "var(--gray-900)" : "var(--white)",
                    border: "2px solid",
                    borderColor: isDark ? `var(--${color}-200)` : `var(--${color}-700)`,
                    borderRadius: "var(--rounded-full)"
                };
            case "light":
                return {
                    backgroundColor: isDark ? `var(--${color}-800)` : `var(--${color}-200)`,
                    opacity: isDark ? 0.75 : 1,
                    borderRadius: "var(--rounded-full)"
                };
            case "solid":
                return {
                    backgroundColor: isDark ? `var(--${color}-500)` : `var(--${color}-600)`,
                    borderRadius: "var(--rounded-full)"
                };
            default:
                return {
                    borderRadius: "var(--rounded-full)"
                };
        }
    }
    getHighlightContentStyle({ fillMode , color , isDark  }) {
        switch(fillMode){
            case "outline":
            case "none":
                return {
                    fontWeight: "var(--font-bold)",
                    color: isDark ? `var(--${color}-100)` : `var(--${color}-900)`
                };
            case "light":
                return {
                    fontWeight: "var(--font-bold)",
                    color: isDark ? `var(--${color}-100)` : `var(--${color}-900)`
                };
            case "solid":
                return {
                    fontWeight: "var(--font-bold)",
                    color: "var(--white)"
                };
            default:
                return "";
        }
    }
    bgAccentHigh({ color , isDark  }) {
        return {
            backgroundColor: isDark ? `var(--${color}-500)` : `var(--${color}-600)`
        };
    }
    contentAccent({ color , isDark  }) {
        if (!color) return null;
        return {
            fontWeight: "var(--font-bold)",
            color: isDark ? `var(--${color}-100)` : `var(--${color}-900)`
        };
    }
    normalizeDot(config) {
        return this.normalizeNonHighlight("dot", config, this.bgAccentHigh);
    }
    normalizeBar(config) {
        return this.normalizeNonHighlight("bar", config, this.bgAccentHigh);
    }
    normalizeContent(config) {
        return this.normalizeNonHighlight("content", config, this.contentAccent);
    }
    normalizeNonHighlight(type, config, styleFn) {
        const attr = this.normalizeAttr({
            type,
            config
        });
        toPairs_1(attr).forEach(([_, targetConfig])=>{
            defaults_1(targetConfig, {
                isDark: this.isDark,
                color: this.color
            });
            targetConfig.style = __spreadValues(__spreadValues({
            }, styleFn(targetConfig)), targetConfig.style);
        });
        return attr;
    }
}
var MILLISECONDS_IN_MINUTE$2 = 60000;
function getDateMillisecondsPart(date) {
    return date.getTime() % MILLISECONDS_IN_MINUTE$2;
}
function getTimezoneOffsetInMilliseconds(dirtyDate) {
    var date = new Date(dirtyDate.getTime());
    var baseTimezoneOffset = Math.ceil(date.getTimezoneOffset());
    date.setSeconds(0, 0);
    var hasNegativeUTCOffset = baseTimezoneOffset > 0;
    var millisecondsPartOfTimezoneOffset = hasNegativeUTCOffset ? (MILLISECONDS_IN_MINUTE$2 + getDateMillisecondsPart(date)) % MILLISECONDS_IN_MINUTE$2 : getDateMillisecondsPart(date);
    return baseTimezoneOffset * MILLISECONDS_IN_MINUTE$2 + millisecondsPartOfTimezoneOffset;
}
function tzTokenizeDate(date, timeZone) {
    var dtf = getDateTimeFormat(timeZone);
    return dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date);
}
var typeToPos = {
    year: 0,
    month: 1,
    day: 2,
    hour: 3,
    minute: 4,
    second: 5
};
function partsOffset(dtf, date) {
    var formatted = dtf.formatToParts(date);
    var filled = [];
    for(var i = 0; i < formatted.length; i++){
        var pos = typeToPos[formatted[i].type];
        if (pos >= 0) filled[pos] = parseInt(formatted[i].value, 10);
    }
    return filled;
}
function hackyOffset(dtf, date) {
    var formatted = dtf.format(date).replace(/\u200E/g, "");
    var parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted);
    return [
        parsed[3],
        parsed[1],
        parsed[2],
        parsed[4],
        parsed[5],
        parsed[6]
    ];
}
var dtfCache = {
};
function getDateTimeFormat(timeZone) {
    if (!dtfCache[timeZone]) {
        var testDateFormatted = new Intl.DateTimeFormat("en-US", {
            hour12: false,
            timeZone: "America/New_York",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        }).format(new Date("2014-06-25T04:00:00.123Z"));
        var hourCycleSupported = testDateFormatted === "06/25/2014, 00:00:00" || testDateFormatted === "\u200E06\u200E/\u200E25\u200E/\u200E2014\u200E \u200E00\u200E:\u200E00\u200E:\u200E00";
        dtfCache[timeZone] = hourCycleSupported ? new Intl.DateTimeFormat("en-US", {
            hour12: false,
            timeZone,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        }) : new Intl.DateTimeFormat("en-US", {
            hourCycle: "h23",
            timeZone,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
    }
    return dtfCache[timeZone];
}
var MILLISECONDS_IN_HOUR$1 = 3600000;
var MILLISECONDS_IN_MINUTE$1 = 60000;
var patterns$1 = {
    timezone: /([Z+-].*)$/,
    timezoneZ: /^(Z)$/,
    timezoneHH: /^([+-])(\d{2})$/,
    timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/,
    timezoneIANA: /(UTC|(?:[a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?))$/
};
function tzParseTimezone(timezoneString, date) {
    var token2;
    var absoluteOffset;
    token2 = patterns$1.timezoneZ.exec(timezoneString);
    if (token2) return 0;
    var hours;
    token2 = patterns$1.timezoneHH.exec(timezoneString);
    if (token2) {
        hours = parseInt(token2[2], 10);
        if (!validateTimezone()) return NaN;
        absoluteOffset = hours * MILLISECONDS_IN_HOUR$1;
        return token2[1] === "+" ? -absoluteOffset : absoluteOffset;
    }
    token2 = patterns$1.timezoneHHMM.exec(timezoneString);
    if (token2) {
        hours = parseInt(token2[2], 10);
        var minutes = parseInt(token2[3], 10);
        if (!validateTimezone(hours, minutes)) return NaN;
        absoluteOffset = hours * MILLISECONDS_IN_HOUR$1 + minutes * MILLISECONDS_IN_MINUTE$1;
        return token2[1] === "+" ? -absoluteOffset : absoluteOffset;
    }
    token2 = patterns$1.timezoneIANA.exec(timezoneString);
    if (token2) {
        var tokens = tzTokenizeDate(date, timezoneString);
        var asUTC = Date.UTC(tokens[0], tokens[1] - 1, tokens[2], tokens[3], tokens[4], tokens[5]);
        var timestampWithMsZeroed = date.getTime() - date.getTime() % 1000;
        return -(asUTC - timestampWithMsZeroed);
    }
    return 0;
}
function validateTimezone(hours, minutes) {
    if (minutes != null && (minutes < 0 || minutes > 59)) return false;
    return true;
}
var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;
var patterns = {
    dateTimeDelimeter: /[T ]/,
    plainTime: /:/,
    timeZoneDelimeter: /[Z ]/i,
    YY: /^(\d{2})$/,
    YYY: [
        /^([+-]\d{2})$/,
        /^([+-]\d{3})$/,
        /^([+-]\d{4})$/
    ],
    YYYY: /^(\d{4})/,
    YYYYY: [
        /^([+-]\d{4})/,
        /^([+-]\d{5})/,
        /^([+-]\d{6})/
    ],
    MM: /^-(\d{2})$/,
    DDD: /^-?(\d{3})$/,
    MMDD: /^-?(\d{2})-?(\d{2})$/,
    Www: /^-?W(\d{2})$/,
    WwwD: /^-?W(\d{2})-?(\d{1})$/,
    HH: /^(\d{2}([.,]\d*)?)$/,
    HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
    HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
    timezone: /([Z+-].*| UTC|(?:[a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?))$/
};
function toDate(argument, dirtyOptions) {
    if (arguments.length < 1) throw new TypeError("1 argument required, but only " + arguments.length + " present");
    if (argument === null) return new Date(NaN);
    var options = dirtyOptions || {
    };
    var additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : toInteger(options.additionalDigits);
    if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) throw new RangeError("additionalDigits must be 0, 1 or 2");
    if (argument instanceof Date || typeof argument === "object" && Object.prototype.toString.call(argument) === "[object Date]") return new Date(argument.getTime());
    else if (typeof argument === "number" || Object.prototype.toString.call(argument) === "[object Number]") return new Date(argument);
    else if (!(typeof argument === "string" || Object.prototype.toString.call(argument) === "[object String]")) return new Date(NaN);
    var dateStrings = splitDateString(argument);
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    var year = parseYearResult.year;
    var restDateString = parseYearResult.restDateString;
    var date = parseDate(restDateString, year);
    if (isNaN(date)) return new Date(NaN);
    if (date) {
        var timestamp = date.getTime();
        var time = 0;
        var offset;
        if (dateStrings.time) {
            time = parseTime(dateStrings.time);
            if (isNaN(time)) return new Date(NaN);
        }
        if (dateStrings.timezone || options.timeZone) {
            offset = tzParseTimezone(dateStrings.timezone || options.timeZone, new Date(timestamp + time));
            if (isNaN(offset)) return new Date(NaN);
            offset = tzParseTimezone(dateStrings.timezone || options.timeZone, new Date(timestamp + time + offset));
            if (isNaN(offset)) return new Date(NaN);
        } else {
            offset = getTimezoneOffsetInMilliseconds(new Date(timestamp + time));
            offset = getTimezoneOffsetInMilliseconds(new Date(timestamp + time + offset));
        }
        return new Date(timestamp + time + offset);
    } else return new Date(NaN);
}
function splitDateString(dateString) {
    var dateStrings = {
    };
    var array = dateString.split(patterns.dateTimeDelimeter);
    var timeString;
    if (patterns.plainTime.test(array[0])) {
        dateStrings.date = null;
        timeString = array[0];
    } else {
        dateStrings.date = array[0];
        timeString = array[1];
        dateStrings.timezone = array[2];
        if (patterns.timeZoneDelimeter.test(dateStrings.date)) {
            dateStrings.date = dateString.split(patterns.timeZoneDelimeter)[0];
            timeString = dateString.substr(dateStrings.date.length, dateString.length);
        }
    }
    if (timeString) {
        var token2 = patterns.timezone.exec(timeString);
        if (token2) {
            dateStrings.time = timeString.replace(token2[1], "");
            dateStrings.timezone = token2[1];
        } else dateStrings.time = timeString;
    }
    return dateStrings;
}
function parseYear(dateString, additionalDigits) {
    var patternYYY = patterns.YYY[additionalDigits];
    var patternYYYYY = patterns.YYYYY[additionalDigits];
    var token2;
    token2 = patterns.YYYY.exec(dateString) || patternYYYYY.exec(dateString);
    if (token2) {
        var yearString = token2[1];
        return {
            year: parseInt(yearString, 10),
            restDateString: dateString.slice(yearString.length)
        };
    }
    token2 = patterns.YY.exec(dateString) || patternYYY.exec(dateString);
    if (token2) {
        var centuryString = token2[1];
        return {
            year: parseInt(centuryString, 10) * 100,
            restDateString: dateString.slice(centuryString.length)
        };
    }
    return {
        year: null
    };
}
function parseDate(dateString, year) {
    if (year === null) return null;
    var token2;
    var date;
    var month;
    var week;
    if (dateString.length === 0) {
        date = new Date(0);
        date.setUTCFullYear(year);
        return date;
    }
    token2 = patterns.MM.exec(dateString);
    if (token2) {
        date = new Date(0);
        month = parseInt(token2[1], 10) - 1;
        if (!validateDate(year, month)) return new Date(NaN);
        date.setUTCFullYear(year, month);
        return date;
    }
    token2 = patterns.DDD.exec(dateString);
    if (token2) {
        date = new Date(0);
        var dayOfYear = parseInt(token2[1], 10);
        if (!validateDayOfYearDate(year, dayOfYear)) return new Date(NaN);
        date.setUTCFullYear(year, 0, dayOfYear);
        return date;
    }
    token2 = patterns.MMDD.exec(dateString);
    if (token2) {
        date = new Date(0);
        month = parseInt(token2[1], 10) - 1;
        var day = parseInt(token2[2], 10);
        if (!validateDate(year, month, day)) return new Date(NaN);
        date.setUTCFullYear(year, month, day);
        return date;
    }
    token2 = patterns.Www.exec(dateString);
    if (token2) {
        week = parseInt(token2[1], 10) - 1;
        if (!validateWeekDate(year, week)) return new Date(NaN);
        return dayOfISOWeekYear(year, week);
    }
    token2 = patterns.WwwD.exec(dateString);
    if (token2) {
        week = parseInt(token2[1], 10) - 1;
        var dayOfWeek = parseInt(token2[2], 10) - 1;
        if (!validateWeekDate(year, week, dayOfWeek)) return new Date(NaN);
        return dayOfISOWeekYear(year, week, dayOfWeek);
    }
    return null;
}
function parseTime(timeString) {
    var token2;
    var hours;
    var minutes;
    token2 = patterns.HH.exec(timeString);
    if (token2) {
        hours = parseFloat(token2[1].replace(",", "."));
        if (!validateTime(hours)) return NaN;
        return hours % 24 * MILLISECONDS_IN_HOUR;
    }
    token2 = patterns.HHMM.exec(timeString);
    if (token2) {
        hours = parseInt(token2[1], 10);
        minutes = parseFloat(token2[2].replace(",", "."));
        if (!validateTime(hours, minutes)) return NaN;
        return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
    }
    token2 = patterns.HHMMSS.exec(timeString);
    if (token2) {
        hours = parseInt(token2[1], 10);
        minutes = parseInt(token2[2], 10);
        var seconds = parseFloat(token2[3].replace(",", "."));
        if (!validateTime(hours, minutes, seconds)) return NaN;
        return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1000;
    }
    return null;
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
    week = week || 0;
    day = day || 0;
    var date = new Date(0);
    date.setUTCFullYear(isoWeekYear, 0, 4);
    var fourthOfJanuaryDay = date.getUTCDay() || 7;
    var diff = week * 7 + day + 1 - fourthOfJanuaryDay;
    date.setUTCDate(date.getUTCDate() + diff);
    return date;
}
var DAYS_IN_MONTH = [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
];
var DAYS_IN_MONTH_LEAP_YEAR = [
    31,
    29,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
];
function isLeapYearIndex(year) {
    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
    if (month < 0 || month > 11) return false;
    if (date != null) {
        if (date < 1) return false;
        var isLeapYear = isLeapYearIndex(year);
        if (isLeapYear && date > DAYS_IN_MONTH_LEAP_YEAR[month]) return false;
        if (!isLeapYear && date > DAYS_IN_MONTH[month]) return false;
    }
    return true;
}
function validateDayOfYearDate(year, dayOfYear) {
    if (dayOfYear < 1) return false;
    var isLeapYear = isLeapYearIndex(year);
    if (isLeapYear && dayOfYear > 366) return false;
    if (!isLeapYear && dayOfYear > 365) return false;
    return true;
}
function validateWeekDate(year, week, day) {
    if (week < 0 || week > 52) return false;
    if (day != null && (day < 0 || day > 6)) return false;
    return true;
}
function validateTime(hours, minutes, seconds) {
    if (hours != null && (hours < 0 || hours >= 25)) return false;
    if (minutes != null && (minutes < 0 || minutes >= 60)) return false;
    if (seconds != null && (seconds < 0 || seconds >= 60)) return false;
    return true;
}
function startOfWeek(dirtyDate, dirtyOptions) {
    requiredArgs(1, arguments);
    var options = dirtyOptions || {
    };
    var locale = options.locale;
    var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn);
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var date = toDate$1(dirtyDate);
    var day = date.getDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setDate(date.getDate() - diff);
    date.setHours(0, 0, 0, 0);
    return date;
}
function startOfISOWeek(dirtyDate) {
    requiredArgs(1, arguments);
    return startOfWeek(dirtyDate, {
        weekStartsOn: 1
    });
}
function getISOWeekYear(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate$1(dirtyDate);
    var year = date.getFullYear();
    var fourthOfJanuaryOfNextYear = new Date(0);
    fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
    var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
    var fourthOfJanuaryOfThisYear = new Date(0);
    fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
    var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);
    if (date.getTime() >= startOfNextYear.getTime()) return year + 1;
    else if (date.getTime() >= startOfThisYear.getTime()) return year;
    else return year - 1;
}
function startOfISOWeekYear(dirtyDate) {
    requiredArgs(1, arguments);
    var year = getISOWeekYear(dirtyDate);
    var fourthOfJanuary = new Date(0);
    fourthOfJanuary.setFullYear(year, 0, 4);
    fourthOfJanuary.setHours(0, 0, 0, 0);
    var date = startOfISOWeek(fourthOfJanuary);
    return date;
}
var MILLISECONDS_IN_WEEK$2 = 604800000;
function getISOWeek(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate$1(dirtyDate);
    var diff = startOfISOWeek(date).getTime() - startOfISOWeekYear(date).getTime();
    return Math.round(diff / MILLISECONDS_IN_WEEK$2) + 1;
}
function getWeekYear(dirtyDate, dirtyOptions) {
    requiredArgs(1, arguments);
    var date = toDate$1(dirtyDate);
    var year = date.getFullYear();
    var options = dirtyOptions || {
    };
    var locale = options.locale;
    var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var firstWeekOfNextYear = new Date(0);
    firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setHours(0, 0, 0, 0);
    var startOfNextYear = startOfWeek(firstWeekOfNextYear, dirtyOptions);
    var firstWeekOfThisYear = new Date(0);
    firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setHours(0, 0, 0, 0);
    var startOfThisYear = startOfWeek(firstWeekOfThisYear, dirtyOptions);
    if (date.getTime() >= startOfNextYear.getTime()) return year + 1;
    else if (date.getTime() >= startOfThisYear.getTime()) return year;
    else return year - 1;
}
function startOfWeekYear(dirtyDate, dirtyOptions) {
    requiredArgs(1, arguments);
    var options = dirtyOptions || {
    };
    var locale = options.locale;
    var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
    var year = getWeekYear(dirtyDate, dirtyOptions);
    var firstWeek = new Date(0);
    firstWeek.setFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setHours(0, 0, 0, 0);
    var date = startOfWeek(firstWeek, dirtyOptions);
    return date;
}
var MILLISECONDS_IN_WEEK$1 = 604800000;
function getWeek(dirtyDate, options) {
    requiredArgs(1, arguments);
    var date = toDate$1(dirtyDate);
    var diff = startOfWeek(date, options).getTime() - startOfWeekYear(date, options).getTime();
    return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1;
}
var MILLISECONDS_IN_WEEK = 604800000;
function differenceInCalendarWeeks(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
    requiredArgs(2, arguments);
    var startOfWeekLeft = startOfWeek(dirtyDateLeft, dirtyOptions);
    var startOfWeekRight = startOfWeek(dirtyDateRight, dirtyOptions);
    var timestampLeft = startOfWeekLeft.getTime() - getTimezoneOffsetInMilliseconds(startOfWeekLeft);
    var timestampRight = startOfWeekRight.getTime() - getTimezoneOffsetInMilliseconds(startOfWeekRight);
    return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK);
}
function lastDayOfMonth(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate$1(dirtyDate);
    var month = date.getMonth();
    date.setFullYear(date.getFullYear(), month + 1, 0);
    date.setHours(0, 0, 0, 0);
    return date;
}
function startOfMonth(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate$1(dirtyDate);
    date.setDate(1);
    date.setHours(0, 0, 0, 0);
    return date;
}
function getWeeksInMonth(date, options) {
    requiredArgs(1, arguments);
    return differenceInCalendarWeeks(lastDayOfMonth(date), startOfMonth(date), options) + 1;
}
const millisecondsPerDay = 86400000;
class DateInfo {
    constructor(config, { order =0 , locale , isFullDay  } = {
    }){
        this.isDateInfo = true;
        this.order = order;
        this.locale = locale instanceof Locale ? locale : new Locale(locale);
        this.firstDayOfWeek = this.locale.firstDayOfWeek;
        if (!isObject(config)) {
            const date = this.locale.normalizeDate(config);
            if (isFullDay) config = {
                start: date,
                end: date
            };
            else config = {
                startOn: date,
                endOn: date
            };
        }
        let start = null;
        let end = null;
        if (config.start) start = this.locale.normalizeDate(config.start, __spreadProps(__spreadValues({
        }, this.opts), {
            time: "00:00:00"
        }));
        else if (config.startOn) start = this.locale.normalizeDate(config.startOn, this.opts);
        if (config.end) end = this.locale.normalizeDate(config.end, __spreadProps(__spreadValues({
        }, this.opts), {
            time: "23:59:59"
        }));
        else if (config.endOn) end = this.locale.normalizeDate(config.endOn, this.opts);
        if (start && end && start > end) {
            const temp = start;
            start = end;
            end = temp;
        } else if (start && config.span >= 1) end = addDays(start, config.span - 1);
        this.start = start;
        this.startTime = start ? start.getTime() : NaN;
        this.end = end;
        this.endTime = end ? end.getTime() : NaN;
        this.isDate = this.startTime && this.startTime === this.endTime;
        this.isRange = !this.isDate;
        const andOpt = mixinOptionalProps(config, {
        }, DateInfo.patternProps);
        if (andOpt.assigned) this.on = {
            and: andOpt.target
        };
        if (config.on) {
            const or = (isArrayLikeObject_1(config.on) ? config.on : [
                config.on
            ]).map((o)=>{
                if (isFunction_1(o)) return o;
                const opt = mixinOptionalProps(o, {
                }, DateInfo.patternProps);
                return opt.assigned ? opt.target : null;
            }).filter((o)=>o
            );
            if (or.length) this.on = __spreadProps(__spreadValues({
            }, this.on), {
                or
            });
        }
        this.isComplex = !!this.on;
    }
    get opts() {
        return {
            order: this.order,
            locale: this.locale
        };
    }
    toDateInfo(date) {
        return date.isDateInfo ? date : new DateInfo(date, this.opts);
    }
    startOfWeek(date) {
        const day = date.getDay() + 1;
        const daysToAdd = day >= this.firstDayOfWeek ? this.firstDayOfWeek - day : -(7 - (this.firstDayOfWeek - day));
        return addDays(date, daysToAdd);
    }
    diffInDays(d1, d2) {
        return Math.round((d2 - d1) / millisecondsPerDay);
    }
    diffInWeeks(d1, d2) {
        return this.diffInDays(this.startOfWeek(d1), this.startOfWeek(d2));
    }
    diffInYears(d1, d2) {
        return d2.getUTCFullYear() - d1.getUTCFullYear();
    }
    diffInMonths(d1, d2) {
        return this.diffInYears(d1, d2) * 12 + (d2.getMonth() - d1.getMonth());
    }
    static get patterns() {
        return {
            dailyInterval: {
                test: (day, interval, di)=>di.diffInDays(di.start || new Date(), day.date) % interval === 0
            },
            weeklyInterval: {
                test: (day, interval, di)=>di.diffInWeeks(di.start || new Date(), day.date) % interval === 0
            },
            monthlyInterval: {
                test: (day, interval, di)=>di.diffInMonths(di.start || new Date(), day.date) % interval === 0
            },
            yearlyInterval: {
                test: ()=>(day, interval, di)=>di.diffInYears(di.start || new Date(), day.date) % interval === 0
            },
            days: {
                validate: (days)=>isArrayLikeObject_1(days) ? days : [
                        parseInt(days, 10)
                    ]
                ,
                test: (day, days)=>days.includes(day.day) || days.includes(-day.dayFromEnd)
            },
            weekdays: {
                validate: (weekdays2)=>isArrayLikeObject_1(weekdays2) ? weekdays2 : [
                        parseInt(weekdays2, 10)
                    ]
                ,
                test: (day, weekdays2)=>weekdays2.includes(day.weekday)
            },
            ordinalWeekdays: {
                validate: (ordinalWeekdays)=>Object.keys(ordinalWeekdays).reduce((obj, ck)=>{
                        const weekdays2 = ordinalWeekdays[ck];
                        if (!weekdays2) return obj;
                        obj[ck] = isArrayLikeObject_1(weekdays2) ? weekdays2 : [
                            parseInt(weekdays2, 10)
                        ];
                        return obj;
                    }, {
                    })
                ,
                test: (day, ordinalWeekdays)=>Object.keys(ordinalWeekdays).map((k)=>parseInt(k, 10)
                    ).find((k)=>ordinalWeekdays[k].includes(day.weekday) && (k === day.weekdayOrdinal || k === -day.weekdayOrdinalFromEnd)
                    )
            },
            weekends: {
                validate: (config)=>config
                ,
                test: (day)=>day.weekday === 1 || day.weekday === 7
            },
            workweek: {
                validate: (config)=>config
                ,
                test: (day)=>day.weekday >= 2 && day.weekday <= 6
            },
            weeks: {
                validate: (weeks)=>isArrayLikeObject_1(weeks) ? weeks : [
                        parseInt(weeks, 10)
                    ]
                ,
                test: (day, weeks)=>weeks.includes(day.week) || weeks.includes(-day.weekFromEnd)
            },
            months: {
                validate: (months)=>isArrayLikeObject_1(months) ? months : [
                        parseInt(months, 10)
                    ]
                ,
                test: (day, months)=>months.includes(day.month)
            },
            years: {
                validate: (years)=>isArrayLikeObject_1(years) ? years : [
                        parseInt(years, 10)
                    ]
                ,
                test: (day, years)=>years.includes(day.year)
            }
        };
    }
    static get patternProps() {
        return Object.keys(DateInfo.patterns).map((k)=>({
                name: k,
                validate: DateInfo.patterns[k].validate
            })
        );
    }
    static testConfig(config, day, dateInfo) {
        if (isFunction_1(config)) return config(day);
        if (isObject(config)) return Object.keys(config).every((k)=>DateInfo.patterns[k].test(day, config[k], dateInfo)
        );
        return null;
    }
    iterateDatesInRange({ start , end  }, fn) {
        if (!start || !end || !isFunction_1(fn)) return null;
        start = this.locale.normalizeDate(start, __spreadProps(__spreadValues({
        }, this.opts), {
            time: "00:00:00"
        }));
        const state2 = {
            i: 0,
            date: start,
            day: this.locale.getDateParts(start),
            finished: false
        };
        let result = null;
        for(; !state2.finished && state2.date <= end; state2.i++){
            result = fn(state2);
            state2.date = addDays(state2.date, 1);
            state2.day = this.locale.getDateParts(state2.date);
        }
        return result;
    }
    shallowIntersectingRange(other) {
        return this.rangeShallowIntersectingRange(this, this.toDateInfo(other));
    }
    rangeShallowIntersectingRange(date1, date2) {
        if (!this.dateShallowIntersectsDate(date1, date2)) return null;
        const thisRange = date1.toRange();
        const otherRange = date2.toRange();
        let start = null;
        let end = null;
        if (thisRange.start) {
            if (!otherRange.start) start = thisRange.start;
            else start = thisRange.start > otherRange.start ? thisRange.start : otherRange.start;
        } else if (otherRange.start) start = otherRange.start;
        if (thisRange.end) {
            if (!otherRange.end) end = thisRange.end;
            else end = thisRange.end < otherRange.end ? thisRange.end : otherRange.end;
        } else if (otherRange.end) end = otherRange.end;
        return {
            start,
            end
        };
    }
    intersectsDate(other) {
        const date = this.toDateInfo(other);
        if (!this.shallowIntersectsDate(date)) return null;
        if (!this.on) return this;
        const range = this.rangeShallowIntersectingRange(this, date);
        let result = false;
        this.iterateDatesInRange(range, (state2)=>{
            if (this.matchesDay(state2.day)) {
                result = result || date.matchesDay(state2.day);
                state2.finished = result;
            }
        });
        return result;
    }
    shallowIntersectsDate(other) {
        return this.dateShallowIntersectsDate(this, this.toDateInfo(other));
    }
    dateShallowIntersectsDate(date1, date2) {
        if (date1.isDate) return date2.isDate ? date1.startTime === date2.startTime : this.dateShallowIncludesDate(date2, date1);
        if (date2.isDate) return this.dateShallowIncludesDate(date1, date2);
        if (date1.start && date2.end && date1.start > date2.end) return false;
        if (date1.end && date2.start && date1.end < date2.start) return false;
        return true;
    }
    includesDate(other) {
        const date = this.toDateInfo(other);
        if (!this.shallowIncludesDate(date)) return false;
        if (!this.on) return true;
        const range = this.rangeShallowIntersectingRange(this, date);
        let result = true;
        this.iterateDatesInRange(range, (state2)=>{
            if (this.matchesDay(state2.day)) {
                result = result && date.matchesDay(state2.day);
                state2.finished = !result;
            }
        });
        return result;
    }
    shallowIncludesDate(other) {
        return this.dateShallowIncludesDate(this, other.isDate ? other : new DateInfo(other, this.opts));
    }
    dateShallowIncludesDate(date1, date2) {
        if (date1.isDate) {
            if (date2.isDate) return date1.startTime === date2.startTime;
            if (!date2.startTime || !date2.endTime) return false;
            return date1.startTime === date2.startTime && date1.startTime === date2.endTime;
        }
        if (date2.isDate) {
            if (date1.start && date2.start < date1.start) return false;
            if (date1.end && date2.start > date1.end) return false;
            return true;
        }
        if (date1.start && (!date2.start || date2.start < date1.start)) return false;
        if (date1.end && (!date2.end || date2.end > date1.end)) return false;
        return true;
    }
    intersectsDay(day) {
        if (!this.shallowIntersectsDate(day.range)) return null;
        return this.matchesDay(day) ? this : null;
    }
    matchesDay(day) {
        if (!this.on) return true;
        if (this.on.and && !DateInfo.testConfig(this.on.and, day, this)) return false;
        if (this.on.or && !this.on.or.some((or)=>DateInfo.testConfig(or, day, this)
        )) return false;
        return true;
    }
    toRange() {
        return new DateInfo({
            start: this.start,
            end: this.end
        }, this.opts);
    }
    compare(other) {
        if (this.order !== other.order) return this.order - other.order;
        if (this.isDate !== other.isDate) return this.isDate ? 1 : -1;
        if (this.isDate) return 0;
        const diff = this.start - other.start;
        return diff !== 0 ? diff : this.end - other.end;
    }
}
const locales = {
    ar: {
        dow: 7,
        L: "D/\u200FM/\u200FYYYY"
    },
    bg: {
        dow: 2,
        L: "D.MM.YYYY"
    },
    ca: {
        dow: 2,
        L: "DD/MM/YYYY"
    },
    "zh-CN": {
        dow: 2,
        L: "YYYY/MM/DD"
    },
    "zh-TW": {
        dow: 1,
        L: "YYYY/MM/DD"
    },
    hr: {
        dow: 2,
        L: "DD.MM.YYYY"
    },
    cs: {
        dow: 2,
        L: "DD.MM.YYYY"
    },
    da: {
        dow: 2,
        L: "DD.MM.YYYY"
    },
    nl: {
        dow: 2,
        L: "DD-MM-YYYY"
    },
    "en-US": {
        dow: 1,
        L: "MM/DD/YYYY"
    },
    "en-AU": {
        dow: 2,
        L: "DD/MM/YYYY"
    },
    "en-CA": {
        dow: 1,
        L: "YYYY-MM-DD"
    },
    "en-GB": {
        dow: 2,
        L: "DD/MM/YYYY"
    },
    "en-IE": {
        dow: 2,
        L: "DD-MM-YYYY"
    },
    "en-NZ": {
        dow: 2,
        L: "DD/MM/YYYY"
    },
    "en-ZA": {
        dow: 1,
        L: "YYYY/MM/DD"
    },
    eo: {
        dow: 2,
        L: "YYYY-MM-DD"
    },
    et: {
        dow: 2,
        L: "DD.MM.YYYY"
    },
    fi: {
        dow: 2,
        L: "DD.MM.YYYY"
    },
    fr: {
        dow: 2,
        L: "DD/MM/YYYY"
    },
    "fr-CA": {
        dow: 1,
        L: "YYYY-MM-DD"
    },
    "fr-CH": {
        dow: 2,
        L: "DD.MM.YYYY"
    },
    de: {
        dow: 2,
        L: "DD.MM.YYYY"
    },
    he: {
        dow: 1,
        L: "DD.MM.YYYY"
    },
    id: {
        dow: 2,
        L: "DD/MM/YYYY"
    },
    it: {
        dow: 2,
        L: "DD/MM/YYYY"
    },
    ja: {
        dow: 1,
        L: "YYYY\u5E74M\u6708D\u65E5"
    },
    ko: {
        dow: 1,
        L: "YYYY.MM.DD"
    },
    lv: {
        dow: 2,
        L: "DD.MM.YYYY"
    },
    lt: {
        dow: 2,
        L: "DD.MM.YYYY"
    },
    mk: {
        dow: 2,
        L: "D.MM.YYYY"
    },
    nb: {
        dow: 2,
        L: "D. MMMM YYYY"
    },
    nn: {
        dow: 2,
        L: "D. MMMM YYYY"
    },
    pl: {
        dow: 2,
        L: "DD.MM.YYYY"
    },
    pt: {
        dow: 2,
        L: "DD/MM/YYYY"
    },
    ro: {
        dow: 2,
        L: "DD.MM.YYYY"
    },
    ru: {
        dow: 2,
        L: "DD.MM.YYYY"
    },
    sk: {
        dow: 2,
        L: "DD.MM.YYYY"
    },
    "es-ES": {
        dow: 2,
        L: "DD/MM/YYYY"
    },
    "es-MX": {
        dow: 2,
        L: "DD/MM/YYYY"
    },
    sv: {
        dow: 2,
        L: "YYYY-MM-DD"
    },
    th: {
        dow: 1,
        L: "DD/MM/YYYY"
    },
    tr: {
        dow: 2,
        L: "DD.MM.YYYY"
    },
    uk: {
        dow: 2,
        L: "DD.MM.YYYY"
    },
    vi: {
        dow: 2,
        L: "DD/MM/YYYY"
    }
};
locales.en = locales["en-US"];
locales.es = locales["es-ES"];
locales.no = locales.nb;
locales.zh = locales["zh-CN"];
toPairs_1(locales).forEach(([id, { dow , L  }])=>{
    locales[id] = {
        id,
        firstDayOfWeek: dow,
        masks: {
            L
        }
    };
});
const PATCH = {
    DATE_TIME: 1,
    DATE: 2,
    TIME: 3
};
const PATCH_KEYS = {
    1: [
        "year",
        "month",
        "day",
        "hours",
        "minutes",
        "seconds",
        "milliseconds"
    ],
    2: [
        "year",
        "month",
        "day"
    ],
    3: [
        "hours",
        "minutes",
        "seconds",
        "milliseconds"
    ]
};
const token = /d{1,2}|W{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|Z{1,4}|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
const twoDigits = /\d\d?/;
const threeDigits = /\d{3}/;
const fourDigits = /\d{4}/;
const word = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
const literal = /\[([^]*?)\]/gm;
const noop = ()=>{
};
const monthUpdate = (arrName)=>(d, v, l)=>{
        const index2 = l[arrName].indexOf(v.charAt(0).toUpperCase() + v.substring(1).toLowerCase());
        if (~index2) d.month = index2;
    }
;
const maskMacros = [
    "L",
    "iso"
];
const daysInWeek = 7;
const daysInMonths = [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
];
const hourOptions = [
    {
        value: 0,
        label: "00"
    },
    {
        value: 1,
        label: "01"
    },
    {
        value: 2,
        label: "02"
    },
    {
        value: 3,
        label: "03"
    },
    {
        value: 4,
        label: "04"
    },
    {
        value: 5,
        label: "05"
    },
    {
        value: 6,
        label: "06"
    },
    {
        value: 7,
        label: "07"
    },
    {
        value: 8,
        label: "08"
    },
    {
        value: 9,
        label: "09"
    },
    {
        value: 10,
        label: "10"
    },
    {
        value: 11,
        label: "11"
    },
    {
        value: 12,
        label: "12"
    },
    {
        value: 13,
        label: "13"
    },
    {
        value: 14,
        label: "14"
    },
    {
        value: 15,
        label: "15"
    },
    {
        value: 16,
        label: "16"
    },
    {
        value: 17,
        label: "17"
    },
    {
        value: 18,
        label: "18"
    },
    {
        value: 19,
        label: "19"
    },
    {
        value: 20,
        label: "20"
    },
    {
        value: 21,
        label: "21"
    },
    {
        value: 22,
        label: "22"
    },
    {
        value: 23,
        label: "23"
    }
];
const formatFlags = {
    D (d) {
        return d.day;
    },
    DD (d) {
        return pad(d.day);
    },
    Do (d, l) {
        return l.DoFn(d.day);
    },
    d (d) {
        return d.weekday - 1;
    },
    dd (d) {
        return pad(d.weekday - 1);
    },
    W (d, l) {
        return l.dayNamesNarrow[d.weekday - 1];
    },
    WW (d, l) {
        return l.dayNamesShorter[d.weekday - 1];
    },
    WWW (d, l) {
        return l.dayNamesShort[d.weekday - 1];
    },
    WWWW (d, l) {
        return l.dayNames[d.weekday - 1];
    },
    M (d) {
        return d.month;
    },
    MM (d) {
        return pad(d.month);
    },
    MMM (d, l) {
        return l.monthNamesShort[d.month - 1];
    },
    MMMM (d, l) {
        return l.monthNames[d.month - 1];
    },
    YY (d) {
        return String(d.year).substring(2);
    },
    YYYY (d) {
        return pad(d.year, 4);
    },
    h (d) {
        return d.hours % 12 || 12;
    },
    hh (d) {
        return pad(d.hours % 12 || 12);
    },
    H (d) {
        return d.hours;
    },
    HH (d) {
        return pad(d.hours);
    },
    m (d) {
        return d.minutes;
    },
    mm (d) {
        return pad(d.minutes);
    },
    s (d) {
        return d.seconds;
    },
    ss (d) {
        return pad(d.seconds);
    },
    S (d) {
        return Math.round(d.milliseconds / 100);
    },
    SS (d) {
        return pad(Math.round(d.milliseconds / 10), 2);
    },
    SSS (d) {
        return pad(d.milliseconds, 3);
    },
    a (d, l) {
        return d.hours < 12 ? l.amPm[0] : l.amPm[1];
    },
    A (d, l) {
        return d.hours < 12 ? l.amPm[0].toUpperCase() : l.amPm[1].toUpperCase();
    },
    Z () {
        return "Z";
    },
    ZZ (d) {
        const o = d.timezoneOffset;
        return `${o > 0 ? "-" : "+"}${pad(Math.floor(Math.abs(o) / 60), 2)}`;
    },
    ZZZ (d) {
        const o = d.timezoneOffset;
        return `${o > 0 ? "-" : "+"}${pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4)}`;
    },
    ZZZZ (d) {
        const o = d.timezoneOffset;
        return `${o > 0 ? "-" : "+"}${pad(Math.floor(Math.abs(o) / 60), 2)}:${pad(Math.abs(o) % 60, 2)}`;
    }
};
const parseFlags = {
    D: [
        twoDigits,
        (d, v)=>{
            d.day = v;
        }
    ],
    Do: [
        new RegExp(twoDigits.source + word.source),
        (d, v)=>{
            d.day = parseInt(v, 10);
        }
    ],
    d: [
        twoDigits,
        noop
    ],
    W: [
        word,
        noop
    ],
    M: [
        twoDigits,
        (d, v)=>{
            d.month = v - 1;
        }
    ],
    MMM: [
        word,
        monthUpdate("monthNamesShort")
    ],
    MMMM: [
        word,
        monthUpdate("monthNames")
    ],
    YY: [
        twoDigits,
        (d, v)=>{
            const da = new Date();
            const cent = +da.getFullYear().toString().substring(0, 2);
            d.year = `${v > 68 ? cent - 1 : cent}${v}`;
        }
    ],
    YYYY: [
        fourDigits,
        (d, v)=>{
            d.year = v;
        }
    ],
    S: [
        /\d/,
        (d, v)=>{
            d.millisecond = v * 100;
        }
    ],
    SS: [
        /\d{2}/,
        (d, v)=>{
            d.millisecond = v * 10;
        }
    ],
    SSS: [
        threeDigits,
        (d, v)=>{
            d.millisecond = v;
        }
    ],
    h: [
        twoDigits,
        (d, v)=>{
            d.hour = v;
        }
    ],
    m: [
        twoDigits,
        (d, v)=>{
            d.minute = v;
        }
    ],
    s: [
        twoDigits,
        (d, v)=>{
            d.second = v;
        }
    ],
    a: [
        word,
        (d, v, l)=>{
            const val = v.toLowerCase();
            if (val === l.amPm[0]) d.isPm = false;
            else if (val === l.amPm[1]) d.isPm = true;
        }
    ],
    Z: [
        /[^\s]*?[+-]\d\d:?\d\d|[^\s]*?Z?/,
        (d, v)=>{
            if (v === "Z") v = "+00:00";
            const parts = `${v}`.match(/([+-]|\d\d)/gi);
            if (parts) {
                const minutes = +(parts[1] * 60) + parseInt(parts[2], 10);
                d.timezoneOffset = parts[0] === "+" ? minutes : -minutes;
            }
        }
    ]
};
parseFlags.DD = parseFlags.D;
parseFlags.dd = parseFlags.d;
parseFlags.WWWW = parseFlags.WWW = parseFlags.WW = parseFlags.W;
parseFlags.MM = parseFlags.M;
parseFlags.mm = parseFlags.m;
parseFlags.hh = parseFlags.H = parseFlags.HH = parseFlags.h;
parseFlags.ss = parseFlags.s;
parseFlags.A = parseFlags.a;
parseFlags.ZZZZ = parseFlags.ZZZ = parseFlags.ZZ = parseFlags.Z;
function resolveConfig(config, locales2) {
    const detLocale = new Intl.DateTimeFormat().resolvedOptions().locale;
    let id;
    if (isString_1(config)) id = config;
    else if (has(config, "id")) id = config.id;
    id = (id || detLocale).toLowerCase();
    const localeKeys = Object.keys(locales2);
    const validKey = (k)=>localeKeys.find((lk)=>lk.toLowerCase() === k
        )
    ;
    id = validKey(id) || validKey(id.substring(0, 2)) || detLocale;
    const defLocale = __spreadProps(__spreadValues(__spreadValues({
    }, locales2["en-IE"]), locales2[id]), {
        id
    });
    config = isObject(config) ? defaultsDeep_1(config, defLocale) : defLocale;
    return config;
}
class Locale {
    constructor(config, { locales: locales$1 = locales , timezone  } = {
    }){
        const { id , firstDayOfWeek , masks: masks2  } = resolveConfig(config, locales$1);
        this.id = id;
        this.daysInWeek = daysInWeek;
        this.firstDayOfWeek = clamp_1(firstDayOfWeek, 1, daysInWeek);
        this.masks = masks2;
        this.timezone = timezone || void 0;
        this.dayNames = this.getDayNames("long");
        this.dayNamesShort = this.getDayNames("short");
        this.dayNamesShorter = this.dayNamesShort.map((s)=>s.substring(0, 2)
        );
        this.dayNamesNarrow = this.getDayNames("narrow");
        this.monthNames = this.getMonthNames("long");
        this.monthNamesShort = this.getMonthNames("short");
        this.amPm = [
            "am",
            "pm"
        ];
        this.monthData = {
        };
        this.getMonthComps = this.getMonthComps.bind(this);
        this.parse = this.parse.bind(this);
        this.format = this.format.bind(this);
        this.toPage = this.toPage.bind(this);
    }
    format(date, mask) {
        date = this.normalizeDate(date);
        if (!date) return "";
        mask = this.normalizeMasks(mask)[0];
        const literals = [];
        mask = mask.replace(literal, ($0, $1)=>{
            literals.push($1);
            return "??";
        });
        const timezone = /Z$/.test(mask) ? "utc" : this.timezone;
        const dateParts = this.getDateParts(date, timezone);
        mask = mask.replace(token, ($0)=>$0 in formatFlags ? formatFlags[$0](dateParts, this) : $0.slice(1, $0.length - 1)
        );
        return mask.replace(/\?\?/g, ()=>literals.shift()
        );
    }
    parse(dateString, mask) {
        const masks2 = this.normalizeMasks(mask);
        return masks2.map((m)=>{
            if (typeof m !== "string") throw new Error("Invalid mask in fecha.parse");
            let str = dateString;
            if (str.length > 1000) return false;
            let isValid = true;
            const dateInfo = {
            };
            m.replace(token, ($0)=>{
                if (parseFlags[$0]) {
                    const info = parseFlags[$0];
                    const index2 = str.search(info[0]);
                    if (!~index2) isValid = false;
                    else str.replace(info[0], (result)=>{
                        info[1](dateInfo, result, this);
                        str = str.substring(index2 + result.length);
                        return result;
                    });
                }
                return parseFlags[$0] ? "" : $0.slice(1, $0.length - 1);
            });
            if (!isValid) return false;
            const today = new Date();
            if (dateInfo.isPm === true && dateInfo.hour != null && +dateInfo.hour !== 12) dateInfo.hour = +dateInfo.hour + 12;
            else if (dateInfo.isPm === false && +dateInfo.hour === 12) dateInfo.hour = 0;
            let date;
            if (dateInfo.timezoneOffset != null) {
                dateInfo.minute = +(dateInfo.minute || 0) - +dateInfo.timezoneOffset;
                date = new Date(Date.UTC(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0));
            } else date = this.getDateFromParts({
                year: dateInfo.year || today.getFullYear(),
                month: (dateInfo.month || 0) + 1,
                day: dateInfo.day || 1,
                hours: dateInfo.hour || 0,
                minutes: dateInfo.minute || 0,
                seconds: dateInfo.second || 0,
                milliseconds: dateInfo.millisecond || 0
            });
            return date;
        }).find((d)=>d
        ) || new Date(dateString);
    }
    normalizeMasks(masks2) {
        return (arrayHasItems(masks2) && masks2 || [
            isString_1(masks2) && masks2 || "YYYY-MM-DD"
        ]).map((m)=>maskMacros.reduce((prev, curr)=>prev.replace(curr, this.masks[curr] || "")
            , m)
        );
    }
    normalizeDate(d, config = {
    }) {
        let result = null;
        let { type , fillDate  } = config;
        const { mask , patch , time  } = config;
        const auto = type === "auto" || !type;
        if (isNumber_1(d)) {
            type = "number";
            result = new Date(+d);
        } else if (isString_1(d)) {
            type = "string";
            result = d ? this.parse(d, mask || "iso") : null;
        } else if (isObject(d)) {
            type = "object";
            result = this.getDateFromParts(d);
        } else {
            type = "date";
            result = isDate(d) ? new Date(d.getTime()) : null;
        }
        if (result && patch) {
            fillDate = fillDate == null ? new Date() : this.normalizeDate(fillDate);
            const parts = __spreadValues(__spreadValues({
            }, this.getDateParts(fillDate)), pick_1(this.getDateParts(result), PATCH_KEYS[patch]));
            result = this.getDateFromParts(parts);
        }
        if (auto) config.type = type;
        if (result && !isNaN(result.getTime())) {
            if (time) result = this.adjustTimeForDate(result, {
                timeAdjust: time
            });
            return result;
        }
        return null;
    }
    denormalizeDate(date, { type , mask  } = {
    }) {
        switch(type){
            case "number":
                return date ? date.getTime() : NaN;
            case "string":
                return date ? this.format(date, mask || "iso") : "";
            default:
                return date ? new Date(date) : null;
        }
    }
    hourIsValid(hour, validHours, dateParts) {
        if (!validHours) return true;
        if (isArrayLikeObject_1(validHours)) return validHours.includes(hour);
        if (isObject(validHours)) {
            const min = validHours.min || 0;
            const max = validHours.max || 24;
            return min <= hour && max >= hour;
        }
        return validHours(hour, dateParts);
    }
    getHourOptions(validHours, dateParts) {
        return hourOptions.filter((opt)=>this.hourIsValid(opt.value, validHours, dateParts)
        );
    }
    getMinuteOptions(minuteIncrement) {
        const options = [];
        minuteIncrement = minuteIncrement > 0 ? minuteIncrement : 1;
        for(let i = 0; i <= 59; i += minuteIncrement)options.push({
            value: i,
            label: pad(i, 2)
        });
        return options;
    }
    nearestOptionValue(value, options) {
        if (value == null) return value;
        const result = options.reduce((prev, opt)=>{
            if (opt.disabled) return prev;
            if (isNaN(prev)) return opt.value;
            const diffPrev = Math.abs(prev - value);
            const diffCurr = Math.abs(opt.value - value);
            return diffCurr < diffPrev ? opt.value : prev;
        }, NaN);
        return isNaN(result) ? value : result;
    }
    adjustTimeForDate(date, { timeAdjust , validHours , minuteIncrement  }) {
        if (!timeAdjust && !validHours && !minuteIncrement) return date;
        const dateParts = this.getDateParts(date);
        if (timeAdjust) {
            if (timeAdjust === "now") {
                const timeParts = this.getDateParts(new Date());
                dateParts.hours = timeParts.hours;
                dateParts.minutes = timeParts.minutes;
                dateParts.seconds = timeParts.seconds;
                dateParts.milliseconds = timeParts.milliseconds;
            } else {
                const d = new Date(`2000-01-01T${timeAdjust}Z`);
                dateParts.hours = d.getUTCHours();
                dateParts.minutes = d.getUTCMinutes();
                dateParts.seconds = d.getUTCSeconds();
                dateParts.milliseconds = d.getUTCMilliseconds();
            }
        }
        if (validHours) {
            const options = this.getHourOptions(validHours, dateParts);
            dateParts.hours = this.nearestOptionValue(dateParts.hours, options);
        }
        if (minuteIncrement) {
            const options = this.getMinuteOptions(minuteIncrement);
            dateParts.minutes = this.nearestOptionValue(dateParts.minutes, options);
        }
        date = this.getDateFromParts(dateParts);
        return date;
    }
    normalizeDates(dates, opts) {
        opts = opts || {
        };
        opts.locale = this;
        return (isArrayLikeObject_1(dates) ? dates : [
            dates
        ]).map((d)=>d && (d instanceof DateInfo ? d : new DateInfo(d, opts))
        ).filter((d)=>d
        );
    }
    getDateParts(date, timezone = this.timezone) {
        if (!date) return null;
        let tzDate = date;
        if (timezone) {
            const normDate = new Date(date.toLocaleString("en-US", {
                timeZone: timezone
            }));
            normDate.setMilliseconds(date.getMilliseconds());
            const diff = normDate.getTime() - date.getTime();
            tzDate = new Date(date.getTime() + diff);
        }
        const milliseconds = tzDate.getMilliseconds();
        const seconds = tzDate.getSeconds();
        const minutes = tzDate.getMinutes();
        const hours = tzDate.getHours();
        const month = tzDate.getMonth() + 1;
        const year = tzDate.getFullYear();
        const comps = this.getMonthComps(month, year);
        const day = tzDate.getDate();
        const dayFromEnd = comps.days - day + 1;
        const weekday = tzDate.getDay() + 1;
        const weekdayOrdinal = Math.floor((day - 1) / 7 + 1);
        const weekdayOrdinalFromEnd = Math.floor((comps.days - day) / 7 + 1);
        const week = Math.ceil((day + Math.abs(comps.firstWeekday - comps.firstDayOfWeek)) / 7);
        const weekFromEnd = comps.weeks - week + 1;
        const parts = {
            milliseconds,
            seconds,
            minutes,
            hours,
            day,
            dayFromEnd,
            weekday,
            weekdayOrdinal,
            weekdayOrdinalFromEnd,
            week,
            weekFromEnd,
            month,
            year,
            date,
            isValid: true
        };
        parts.timezoneOffset = this.getTimezoneOffset(parts);
        return parts;
    }
    getDateFromParts(parts) {
        if (!parts) return null;
        const d = new Date();
        const { year =d.getFullYear() , month =d.getMonth() + 1 , day =d.getDate() , hours: hrs = 0 , minutes: min = 0 , seconds: sec = 0 , milliseconds: ms = 0  } = parts;
        if (this.timezone) {
            const dateString = `${pad(year, 4)}-${pad(month, 2)}-${pad(day, 2)}T${pad(hrs, 2)}:${pad(min, 2)}:${pad(sec, 2)}.${pad(ms, 3)}`;
            return toDate(dateString, {
                timeZone: this.timezone
            });
        }
        return new Date(year, month - 1, day, hrs, min, sec, ms);
    }
    getTimezoneOffset(parts) {
        const { year: y , month: m , day: d , hours: hrs = 0 , minutes: min = 0 , seconds: sec = 0 , milliseconds: ms = 0  } = parts;
        let date;
        const utcDate = new Date(Date.UTC(y, m - 1, d, hrs, min, sec, ms));
        if (this.timezone) {
            const dateString = `${pad(y, 4)}-${pad(m, 2)}-${pad(d, 2)}T${pad(hrs, 2)}:${pad(min, 2)}:${pad(sec, 2)}.${pad(ms, 3)}`;
            date = toDate(dateString, {
                timeZone: this.timezone
            });
        } else date = new Date(y, m - 1, d, hrs, min, sec, ms);
        return (date - utcDate) / 60000;
    }
    toPage(arg, fromPage) {
        if (isNumber_1(arg)) return addPages(fromPage, arg);
        if (isString_1(arg)) return this.getDateParts(this.normalizeDate(arg));
        if (isDate(arg)) return this.getDateParts(arg);
        if (isObject(arg)) return arg;
        return null;
    }
    getMonthDates(year = 2000) {
        const dates = [];
        for(let i = 0; i < 12; i++)dates.push(new Date(year, i, 15));
        return dates;
    }
    getMonthNames(length) {
        const dtf = new Intl.DateTimeFormat(this.id, {
            month: length,
            timezome: "UTC"
        });
        return this.getMonthDates().map((d)=>dtf.format(d)
        );
    }
    getWeekdayDates(firstDayOfWeek = this.firstDayOfWeek) {
        const dates = [];
        const year = 2020;
        const month = 1;
        const day = 5 + firstDayOfWeek - 1;
        for(let i = 0; i < daysInWeek; i++)dates.push(this.getDateFromParts({
            year,
            month,
            day: day + i,
            hours: 12
        }));
        return dates;
    }
    getDayNames(length) {
        const dtf = new Intl.DateTimeFormat(this.id, {
            weekday: length,
            timeZone: this.timezone
        });
        return this.getWeekdayDates(1).map((d)=>dtf.format(d)
        );
    }
    getMonthComps(month, year) {
        const key = `${month}-${year}`;
        let comps = this.monthData[key];
        if (!comps) {
            const inLeapYear = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
            const firstDayOfMonth = new Date(year, month - 1, 1);
            const firstWeekday = firstDayOfMonth.getDay() + 1;
            const days = month === 2 && inLeapYear ? 29 : daysInMonths[month - 1];
            const weekStartsOn = this.firstDayOfWeek - 1;
            const weeks = getWeeksInMonth(firstDayOfMonth, {
                weekStartsOn
            });
            const weeknumbers = [];
            const isoWeeknumbers = [];
            for(let i = 0; i < weeks; i++){
                const date = addDays(firstDayOfMonth, i * 7);
                weeknumbers.push(getWeek(date, {
                    weekStartsOn
                }));
                isoWeeknumbers.push(getISOWeek(date));
            }
            comps = {
                firstDayOfWeek: this.firstDayOfWeek,
                inLeapYear,
                firstWeekday,
                days,
                weeks,
                month,
                year,
                weeknumbers,
                isoWeeknumbers
            };
            this.monthData[key] = comps;
        }
        return comps;
    }
    getThisMonthComps() {
        const { month , year  } = this.getDateParts(new Date());
        return this.getMonthComps(month, year);
    }
    getPrevMonthComps(month, year) {
        if (month === 1) return this.getMonthComps(12, year - 1);
        return this.getMonthComps(month - 1, year);
    }
    getNextMonthComps(month, year) {
        if (month === 12) return this.getMonthComps(1, year + 1);
        return this.getMonthComps(month + 1, year);
    }
    getDayId(date) {
        return this.format(date, "YYYY-MM-DD");
    }
    getCalendarDays({ weeks , monthComps , prevMonthComps , nextMonthComps  }) {
        const days = [];
        const { firstDayOfWeek , firstWeekday , isoWeeknumbers , weeknumbers  } = monthComps;
        const prevMonthDaysToShow = firstWeekday + (firstWeekday < firstDayOfWeek ? daysInWeek : 0) - firstDayOfWeek;
        let prevMonth = true;
        let thisMonth = false;
        let nextMonth = false;
        const formatter = new Intl.DateTimeFormat(this.id, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });
        let day = prevMonthComps.days - prevMonthDaysToShow + 1;
        let dayFromEnd = prevMonthComps.days - day + 1;
        let weekdayOrdinal = Math.floor((day - 1) / daysInWeek + 1);
        let weekdayOrdinalFromEnd = 1;
        let week = prevMonthComps.weeks;
        let weekFromEnd = 1;
        let month = prevMonthComps.month;
        let year = prevMonthComps.year;
        const today = new Date();
        const todayDay = today.getDate();
        const todayMonth = today.getMonth() + 1;
        const todayYear = today.getFullYear();
        const dft = (y, m, d)=>(hours, minutes, seconds, milliseconds)=>this.normalizeDate({
                    year: y,
                    month: m,
                    day: d,
                    hours,
                    minutes,
                    seconds,
                    milliseconds
                })
        ;
        for(let w = 1; w <= weeks; w++){
            for(let i = 1, weekday = firstDayOfWeek; i <= daysInWeek; i++, weekday += weekday === daysInWeek ? 1 - daysInWeek : 1){
                if (prevMonth && weekday === firstWeekday) {
                    day = 1;
                    dayFromEnd = monthComps.days;
                    weekdayOrdinal = Math.floor((day - 1) / daysInWeek + 1);
                    weekdayOrdinalFromEnd = Math.floor((monthComps.days - day) / daysInWeek + 1);
                    week = 1;
                    weekFromEnd = monthComps.weeks;
                    month = monthComps.month;
                    year = monthComps.year;
                    prevMonth = false;
                    thisMonth = true;
                }
                const dateFromTime = dft(year, month, day);
                const range = {
                    start: dateFromTime(0, 0, 0),
                    end: dateFromTime(23, 59, 59, 999)
                };
                const date = range.start;
                const id = `${pad(year, 4)}-${pad(month, 2)}-${pad(day, 2)}`;
                const weekdayPosition = i;
                const weekdayPositionFromEnd = daysInWeek - i;
                const weeknumber = weeknumbers[w - 1];
                const isoWeeknumber = isoWeeknumbers[w - 1];
                const isToday = day === todayDay && month === todayMonth && year === todayYear;
                const isFirstDay = thisMonth && day === 1;
                const isLastDay = thisMonth && day === monthComps.days;
                const onTop = w === 1;
                const onBottom = w === weeks;
                const onLeft = i === 1;
                const onRight = i === daysInWeek;
                days.push({
                    id,
                    label: day.toString(),
                    ariaLabel: formatter.format(new Date(year, month - 1, day)),
                    day,
                    dayFromEnd,
                    weekday,
                    weekdayPosition,
                    weekdayPositionFromEnd,
                    weekdayOrdinal,
                    weekdayOrdinalFromEnd,
                    week,
                    weekFromEnd,
                    weeknumber,
                    isoWeeknumber,
                    month,
                    year,
                    dateFromTime,
                    date,
                    range,
                    isToday,
                    isFirstDay,
                    isLastDay,
                    inMonth: thisMonth,
                    inPrevMonth: prevMonth,
                    inNextMonth: nextMonth,
                    onTop,
                    onBottom,
                    onLeft,
                    onRight,
                    classes: [
                        `id-${id}`,
                        `day-${day}`,
                        `day-from-end-${dayFromEnd}`,
                        `weekday-${weekday}`,
                        `weekday-position-${weekdayPosition}`,
                        `weekday-ordinal-${weekdayOrdinal}`,
                        `weekday-ordinal-from-end-${weekdayOrdinalFromEnd}`,
                        `week-${week}`,
                        `week-from-end-${weekFromEnd}`,
                        {
                            "is-today": isToday,
                            "is-first-day": isFirstDay,
                            "is-last-day": isLastDay,
                            "in-month": thisMonth,
                            "in-prev-month": prevMonth,
                            "in-next-month": nextMonth,
                            "on-top": onTop,
                            "on-bottom": onBottom,
                            "on-left": onLeft,
                            "on-right": onRight
                        }
                    ]
                });
                if (thisMonth && isLastDay) {
                    thisMonth = false;
                    nextMonth = true;
                    day = 1;
                    dayFromEnd = nextMonthComps.days;
                    weekdayOrdinal = 1;
                    weekdayOrdinalFromEnd = Math.floor((nextMonthComps.days - day) / daysInWeek + 1);
                    week = 1;
                    weekFromEnd = nextMonthComps.weeks;
                    month = nextMonthComps.month;
                    year = nextMonthComps.year;
                } else {
                    day++;
                    dayFromEnd--;
                    weekdayOrdinal = Math.floor((day - 1) / daysInWeek + 1);
                    weekdayOrdinalFromEnd = Math.floor((monthComps.days - day) / daysInWeek + 1);
                }
            }
            week++;
            weekFromEnd--;
        }
        return days;
    }
}
class Attribute {
    constructor({ key , hashcode , highlight , content , dot , bar , popover , dates , excludeDates , excludeMode , customData , order , pinPage  }, theme, locale){
        this.key = isUndefined_1(key) ? createGuid() : key;
        this.hashcode = hashcode;
        this.customData = customData;
        this.order = order || 0;
        this.dateOpts = {
            order,
            locale
        };
        this.pinPage = pinPage;
        if (highlight) this.highlight = theme.normalizeHighlight(highlight);
        if (content) this.content = theme.normalizeContent(content);
        if (dot) this.dot = theme.normalizeDot(dot);
        if (bar) this.bar = theme.normalizeBar(bar);
        if (popover) this.popover = popover;
        this.dates = locale.normalizeDates(dates, this.dateOpts);
        this.hasDates = !!arrayHasItems(this.dates);
        this.excludeDates = locale.normalizeDates(excludeDates, this.dateOpts);
        this.hasExcludeDates = !!arrayHasItems(this.excludeDates);
        this.excludeMode = excludeMode || "intersects";
        if (this.hasExcludeDates && !this.hasDates) {
            this.dates.push(new DateInfo({
            }, this.dateOpts));
            this.hasDates = true;
        }
        this.isComplex = some(this.dates, (d)=>d.isComplex
        );
    }
    intersectsDate(date) {
        date = date instanceof DateInfo ? date : new DateInfo(date, this.dateOpts);
        return !this.excludesDate(date) && (this.dates.find((d)=>d.intersectsDate(date)
        ) || false);
    }
    includesDate(date) {
        date = date instanceof DateInfo ? date : new DateInfo(date, this.dateOpts);
        return !this.excludesDate(date) && (this.dates.find((d)=>d.includesDate(date)
        ) || false);
    }
    excludesDate(date) {
        date = date instanceof DateInfo ? date : new DateInfo(date, this.dateOpts);
        return this.hasExcludeDates && this.excludeDates.find((ed)=>this.excludeMode === "intersects" && ed.intersectsDate(date) || this.excludeMode === "includes" && ed.includesDate(date)
        );
    }
    intersectsDay(day) {
        return !this.excludesDay(day) && (this.dates.find((d)=>d.intersectsDay(day)
        ) || false);
    }
    excludesDay(day) {
        return this.hasExcludeDates && this.excludeDates.find((ed)=>ed.intersectsDay(day)
        );
    }
}
const maxSwipeTime = 300;
const minHorizontalSwipeDistance = 60;
const maxVerticalSwipeDistance = 80;
var touch = {
    maxSwipeTime,
    minHorizontalSwipeDistance,
    maxVerticalSwipeDistance
};
const title = "MMMM YYYY";
const weekdays = "W";
const navMonths = "MMM";
const input = [
    "L",
    "YYYY-MM-DD",
    "YYYY/MM/DD"
];
const inputDateTime = [
    "L h:mm A",
    "YYYY-MM-DD h:mm A",
    "YYYY/MM/DD h:mm A"
];
const inputDateTime24hr = [
    "L HH:mm",
    "YYYY-MM-DD HH:mm",
    "YYYY/MM/DD HH:mm"
];
const inputTime = [
    "h:mm A"
];
const inputTime24hr = [
    "HH:mm"
];
const dayPopover = "WWW, MMM D, YYYY";
const data = [
    "L",
    "YYYY-MM-DD",
    "YYYY/MM/DD"
];
const model = "iso";
const iso = "YYYY-MM-DDTHH:mm:ss.SSSZ";
var masks = {
    title,
    weekdays,
    navMonths,
    input,
    inputDateTime,
    inputDateTime24hr,
    inputTime,
    inputTime24hr,
    dayPopover,
    data,
    model,
    iso
};
const sm = "640px";
const md = "768px";
const lg = "1024px";
const xl = "1280px";
var defaultScreens = {
    sm,
    md,
    lg,
    xl
};
const defaultConfig = {
    componentPrefix: "v",
    color: "blue",
    isDark: false,
    navVisibility: "click",
    titlePosition: "center",
    transition: "slide-h",
    touch,
    masks,
    screens: defaultScreens,
    locales,
    datePicker: {
        updateOnInput: true,
        inputDebounce: 1000,
        popover: {
            visibility: "hover-focus",
            placement: "bottom-start",
            keepVisibleOnInput: false,
            isInteractive: true
        }
    }
};
const state = _vue.reactive(defaultConfig);
const computedLocales = _vue.computed(()=>{
    return mapValues_1(state.locales, (v)=>{
        v.masks = defaultsDeep_1(v.masks, state.masks);
        return v;
    });
});
const getDefault = (path)=>{
    if (window && has(window.__vcalendar__, path)) return get_1(window.__vcalendar__, path);
    return get_1(state, path);
};
const setupDefaults = (app, userDefaults)=>{
    app.config.globalProperties.$VCalendar = state;
    return Object.assign(state, defaultsDeep_1(userDefaults, state));
};
const rootMixin$1 = {
    props: {
        color: {
            type: String,
            default: ()=>getDefault("color")
        },
        isDark: {
            type: Boolean,
            default: ()=>getDefault("isDark")
        },
        firstDayOfWeek: Number,
        masks: Object,
        locale: [
            String,
            Object
        ],
        timezone: String,
        minDate: null,
        maxDate: null,
        minDateExact: null,
        maxDateExact: null,
        disabledDates: null,
        availableDates: null,
        theme: null
    },
    computed: {
        $theme () {
            if (this.theme instanceof Theme) return this.theme;
            return new Theme({
                color: this.color,
                isDark: this.isDark
            });
        },
        $locale () {
            if (this.locale instanceof Locale) return this.locale;
            const config = isObject(this.locale) ? this.locale : {
                id: this.locale,
                firstDayOfWeek: this.firstDayOfWeek,
                masks: this.masks
            };
            return new Locale(config, {
                locales: computedLocales.value,
                timezone: this.timezone
            });
        },
        disabledDates_ () {
            const dates = this.normalizeDates(this.disabledDates);
            const { minDate , minDateExact , maxDate , maxDateExact  } = this;
            if (minDateExact || minDate) {
                const end = minDateExact ? this.normalizeDate(minDateExact) : this.normalizeDate(minDate, {
                    time: "00:00:00"
                });
                dates.push({
                    start: null,
                    end: new Date(end.getTime() - 1000)
                });
            }
            if (maxDateExact || maxDate) {
                const start = maxDateExact ? this.normalizeDate(maxDateExact) : this.normalizeDate(maxDate, {
                    time: "23:59:59"
                });
                dates.push({
                    start: new Date(start.getTime() + 1000),
                    end: null
                });
            }
            return dates;
        },
        availableDates_ () {
            return this.normalizeDates(this.availableDates);
        },
        disabledAttribute () {
            return new Attribute({
                key: "disabled",
                dates: this.disabledDates_,
                excludeDates: this.availableDates_,
                excludeMode: "includes",
                order: 100
            }, this.$theme, this.$locale);
        }
    },
    methods: {
        formatDate (date, mask) {
            return this.$locale ? this.$locale.format(date, mask) : "";
        },
        parseDate (text, mask) {
            if (!this.$locale) return null;
            const value = this.$locale.parse(text, mask);
            return isDate(value) ? value : null;
        },
        normalizeDate (date, config) {
            return this.$locale ? this.$locale.normalizeDate(date, config) : date;
        },
        normalizeDates (dates) {
            return this.$locale.normalizeDates(dates, {
                isFullDay: true
            });
        },
        pageForDate (date) {
            return this.$locale.getDateParts(this.normalizeDate(date));
        },
        pageForThisMonth () {
            return this.pageForDate(new Date());
        }
    }
};
const slotMixin$1 = {
    methods: {
        safeSlot (name, args, def = null) {
            return isFunction_1(this.$slots[name]) ? this.$slots[name](args) : def;
        }
    }
};
const childMixin = childMixin$1;
const rootMixin = rootMixin$1;
const slotMixin = slotMixin$1;
const _sfc_main$8 = {
    name: "PopoverRow",
    mixins: [
        childMixin
    ],
    props: {
        attribute: Object
    },
    computed: {
        indicator () {
            const { highlight , dot , bar , popover  } = this.attribute;
            if (popover && popover.hideIndicator) return null;
            if (highlight) {
                const { color , isDark  } = highlight.start;
                return {
                    style: __spreadProps(__spreadValues({
                    }, this.theme.bgAccentHigh({
                        color,
                        isDark: !isDark
                    })), {
                        width: "10px",
                        height: "5px",
                        borderRadius: "3px"
                    })
                };
            }
            if (dot) {
                const { color , isDark  } = dot.start;
                return {
                    style: __spreadProps(__spreadValues({
                    }, this.theme.bgAccentHigh({
                        color,
                        isDark: !isDark
                    })), {
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%"
                    })
                };
            }
            if (bar) {
                const { color , isDark  } = bar.start;
                return {
                    style: __spreadProps(__spreadValues({
                    }, this.theme.bgAccentHigh({
                        color,
                        isDark: !isDark
                    })), {
                        width: "10px",
                        height: "3px"
                    })
                };
            }
            return null;
        }
    }
};
const _hoisted_1$4 = {
    class: "vc-day-popover-row"
};
const _hoisted_2$4 = {
    key: 0,
    class: "vc-day-popover-row-indicator"
};
const _hoisted_3$3 = {
    class: "vc-day-popover-row-content"
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return _vue.openBlock(), _vue.createElementBlock("div", _hoisted_1$4, [
        $options.indicator ? (_vue.openBlock(), _vue.createElementBlock("div", _hoisted_2$4, [
            _vue.createElementVNode("span", {
                style: _vue.normalizeStyle($options.indicator.style),
                class: _vue.normalizeClass($options.indicator.class)
            }, null, 6)
        ])) : _vue.createCommentVNode("", true),
        _vue.createElementVNode("div", _hoisted_3$3, [
            _vue.renderSlot(_ctx.$slots, "default", {
            }, ()=>[
                    _vue.createTextVNode(_vue.toDisplayString($props.attribute.popover ? $props.attribute.popover.label : "No content provided"), 1)
                ]
            )
        ])
    ]);
}
var PopoverRow = /* @__PURE__ */ _export_sfc(_sfc_main$8, [
    [
        "render",
        _sfc_render$4
    ]
]);
const _defSize = "26px";
const _defViewBox = "0 0 32 32";
const icons = {
    "left-arrow": {
        viewBox: "0 -1 16 34",
        path: "M11.196 10c0 0.143-0.071 0.304-0.179 0.411l-7.018 7.018 7.018 7.018c0.107 0.107 0.179 0.268 0.179 0.411s-0.071 0.304-0.179 0.411l-0.893 0.893c-0.107 0.107-0.268 0.179-0.411 0.179s-0.304-0.071-0.411-0.179l-8.321-8.321c-0.107-0.107-0.179-0.268-0.179-0.411s0.071-0.304 0.179-0.411l8.321-8.321c0.107-0.107 0.268-0.179 0.411-0.179s0.304 0.071 0.411 0.179l0.893 0.893c0.107 0.107 0.179 0.25 0.179 0.411z"
    },
    "right-arrow": {
        viewBox: "-5 -1 16 34",
        path: "M10.625 17.429c0 0.143-0.071 0.304-0.179 0.411l-8.321 8.321c-0.107 0.107-0.268 0.179-0.411 0.179s-0.304-0.071-0.411-0.179l-0.893-0.893c-0.107-0.107-0.179-0.25-0.179-0.411 0-0.143 0.071-0.304 0.179-0.411l7.018-7.018-7.018-7.018c-0.107-0.107-0.179-0.268-0.179-0.411s0.071-0.304 0.179-0.411l0.893-0.893c0.107-0.107 0.268-0.179 0.411-0.179s0.304 0.071 0.411 0.179l8.321 8.321c0.107 0.107 0.179 0.268 0.179 0.411z"
    }
};
const _sfc_main$7 = {
    props: [
        "name"
    ],
    data () {
        return {
            width: _defSize,
            height: _defSize,
            viewBox: _defViewBox,
            path: "",
            isBaseline: false
        };
    },
    mounted () {
        this.updateIcon();
    },
    watch: {
        name () {
            this.updateIcon();
        }
    },
    methods: {
        updateIcon () {
            const icon = icons[this.name];
            if (icon) {
                this.width = icon.width || _defSize;
                this.height = icon.height || _defSize;
                this.viewBox = icon.viewBox;
                this.path = icon.path;
            }
        }
    }
};
const _hoisted_1$3 = [
    "width",
    "height",
    "viewBox"
];
const _hoisted_2$3 = [
    "d"
];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return _vue.openBlock(), _vue.createElementBlock("svg", {
        class: "vc-svg-icon",
        width: $data.width,
        height: $data.height,
        viewBox: $data.viewBox
    }, [
        _vue.createElementVNode("path", {
            d: $data.path
        }, null, 8, _hoisted_2$3)
    ], 8, _hoisted_1$3);
}
var SvgIcon = /* @__PURE__ */ _export_sfc(_sfc_main$7, [
    [
        "render",
        _sfc_render$3
    ]
]);
const _yearGroupCount = 12;
const _sfc_main$6 = {
    name: "CalendarNav",
    emits: [
        "input"
    ],
    components: {
        SvgIcon
    },
    mixins: [
        childMixin
    ],
    props: {
        value: {
            type: Object,
            default: ()=>({
                    month: 0,
                    year: 0
                })
        },
        validator: {
            type: Function,
            default: ()=>()=>true
        }
    },
    data () {
        return {
            monthMode: true,
            yearIndex: 0,
            yearGroupIndex: 0,
            onSpaceOrEnter
        };
    },
    computed: {
        month () {
            return this.value ? this.value.month || 0 : 0;
        },
        year () {
            return this.value ? this.value.year || 0 : 0;
        },
        title () {
            return this.monthMode ? this.yearIndex : `${this.firstYear} - ${this.lastYear}`;
        },
        monthItems () {
            return this.getMonthItems(this.yearIndex);
        },
        yearItems () {
            return this.getYearItems(this.yearGroupIndex);
        },
        prevItemsEnabled () {
            return this.monthMode ? this.prevMonthItemsEnabled : this.prevYearItemsEnabled;
        },
        nextItemsEnabled () {
            return this.monthMode ? this.nextMonthItemsEnabled : this.nextYearItemsEnabled;
        },
        prevMonthItemsEnabled () {
            return this.getMonthItems(this.yearIndex - 1).some((i)=>!i.isDisabled
            );
        },
        nextMonthItemsEnabled () {
            return this.getMonthItems(this.yearIndex + 1).some((i)=>!i.isDisabled
            );
        },
        prevYearItemsEnabled () {
            return this.getYearItems(this.yearGroupIndex - 1).some((i)=>!i.isDisabled
            );
        },
        nextYearItemsEnabled () {
            return this.getYearItems(this.yearGroupIndex + 1).some((i)=>!i.isDisabled
            );
        },
        activeItems () {
            return this.monthMode ? this.monthItems : this.yearItems;
        },
        firstYear () {
            return head_1(this.yearItems.map((i)=>i.year
            ));
        },
        lastYear () {
            return last_1(this.yearItems.map((i)=>i.year
            ));
        }
    },
    watch: {
        year () {
            this.yearIndex = this.year;
        },
        yearIndex (val) {
            this.yearGroupIndex = this.getYearGroupIndex(val);
        },
        value () {
            this.focusFirstItem();
        }
    },
    created () {
        this.yearIndex = this.year;
    },
    mounted () {
        this.focusFirstItem();
    },
    methods: {
        focusFirstItem () {
            this.$nextTick(()=>{
                const focusableEl = this.$refs.navContainer.querySelector(".vc-nav-item:not(.is-disabled)");
                if (focusableEl) focusableEl.focus();
            });
        },
        getItemClasses ({ isActive , isCurrent , isDisabled  }) {
            const classes = [
                "vc-nav-item"
            ];
            if (isActive) classes.push("is-active");
            else if (isCurrent) classes.push("is-current");
            if (isDisabled) classes.push("is-disabled");
            return classes;
        },
        getYearGroupIndex (year) {
            return Math.floor(year / _yearGroupCount);
        },
        getMonthItems (year) {
            const { month: thisMonth , year: thisYear  } = this.pageForDate(new Date());
            return this.locale.getMonthDates().map((d, i)=>{
                const month = i + 1;
                return {
                    month,
                    year,
                    id: `${year}.${pad(month, 2)}`,
                    label: this.locale.format(d, this.masks.navMonths),
                    ariaLabel: this.locale.format(d, "MMMM YYYY"),
                    isActive: month === this.month && year === this.year,
                    isCurrent: month === thisMonth && year === thisYear,
                    isDisabled: !this.validator({
                        month,
                        year
                    }),
                    click: ()=>this.monthClick(month, year)
                };
            });
        },
        getYearItems (yearGroupIndex) {
            const { _ , year: thisYear  } = this.pageForDate(new Date());
            const startYear = yearGroupIndex * _yearGroupCount;
            const endYear = startYear + _yearGroupCount;
            const items = [];
            for(let year = startYear; year < endYear; year += 1){
                let enabled = false;
                for(let month = 1; month < 12; month++){
                    enabled = this.validator({
                        month,
                        year
                    });
                    if (enabled) break;
                }
                items.push({
                    year,
                    id: year,
                    label: year,
                    ariaLabel: year,
                    isActive: year === this.year,
                    isCurrent: year === thisYear,
                    isDisabled: !enabled,
                    click: ()=>this.yearClick(year)
                });
            }
            return items;
        },
        monthClick (month, year) {
            if (this.validator({
                month,
                year
            })) this.$emit("input", {
                month,
                year
            });
        },
        yearClick (year) {
            this.yearIndex = year;
            this.monthMode = true;
            this.focusFirstItem();
        },
        toggleMode () {
            this.monthMode = !this.monthMode;
        },
        movePrev () {
            if (!this.prevItemsEnabled) return;
            if (this.monthMode) this.movePrevYear();
            this.movePrevYearGroup();
        },
        moveNext () {
            if (!this.nextItemsEnabled) return;
            if (this.monthMode) this.moveNextYear();
            this.moveNextYearGroup();
        },
        movePrevYear () {
            this.yearIndex--;
        },
        moveNextYear () {
            this.yearIndex++;
        },
        movePrevYearGroup () {
            this.yearGroupIndex--;
        },
        moveNextYearGroup () {
            this.yearGroupIndex++;
        }
    }
};
const _hoisted_1$2 = {
    class: "vc-nav-container",
    ref: "navContainer"
};
const _hoisted_2$2 = {
    class: "vc-nav-header"
};
const _hoisted_3$2 = [
    "tabindex"
];
const _hoisted_4$2 = [
    "tabindex"
];
const _hoisted_5$1 = {
    class: "vc-nav-items"
};
const _hoisted_6$1 = [
    "data-id",
    "aria-label",
    "tabindex",
    "onClick",
    "onKeydown"
];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_svg_icon = _vue.resolveComponent("svg-icon");
    return _vue.openBlock(), _vue.createElementBlock("div", _hoisted_1$2, [
        _vue.createElementVNode("div", _hoisted_2$2, [
            _vue.createElementVNode("span", {
                role: "button",
                class: _vue.normalizeClass([
                    "vc-nav-arrow is-left",
                    {
                        "is-disabled": !$options.prevItemsEnabled
                    }
                ]),
                tabindex: $options.prevItemsEnabled ? 0 : void 0,
                onClick: _cache[0] || (_cache[0] = (...args)=>$options.movePrev && $options.movePrev(...args)
                ),
                onKeydown: _cache[1] || (_cache[1] = (e)=>$data.onSpaceOrEnter(e, $options.movePrev)
                )
            }, [
                _vue.renderSlot(_ctx.$slots, "nav-left-button", {
                }, ()=>[
                        _vue.createVNode(_component_svg_icon, {
                            name: "left-arrow",
                            width: "20px",
                            height: "24px"
                        })
                    ]
                )
            ], 42, _hoisted_3$2),
            _vue.createElementVNode("span", {
                role: "button",
                class: "vc-nav-title vc-grid-focus",
                style: {
                    whiteSpace: "nowrap"
                },
                tabindex: "0",
                onClick: _cache[2] || (_cache[2] = (...args)=>$options.toggleMode && $options.toggleMode(...args)
                ),
                onKeydown: _cache[3] || (_cache[3] = (e)=>$data.onSpaceOrEnter(e, $options.toggleMode)
                )
            }, _vue.toDisplayString($options.title), 33),
            _vue.createElementVNode("span", {
                role: "button",
                class: _vue.normalizeClass([
                    "vc-nav-arrow is-right",
                    {
                        "is-disabled": !$options.nextItemsEnabled
                    }
                ]),
                tabindex: $options.nextItemsEnabled ? 0 : void 0,
                onClick: _cache[4] || (_cache[4] = (...args)=>$options.moveNext && $options.moveNext(...args)
                ),
                onKeydown: _cache[5] || (_cache[5] = (e)=>$data.onSpaceOrEnter(e, $options.moveNext)
                )
            }, [
                _vue.renderSlot(_ctx.$slots, "nav-right-button", {
                }, ()=>[
                        _vue.createVNode(_component_svg_icon, {
                            name: "right-arrow",
                            width: "20px",
                            height: "24px"
                        })
                    ]
                )
            ], 42, _hoisted_4$2)
        ]),
        _vue.createElementVNode("div", _hoisted_5$1, [
            (_vue.openBlock(true), _vue.createElementBlock(_vue.Fragment, null, _vue.renderList($options.activeItems, (item)=>{
                return _vue.openBlock(), _vue.createElementBlock("span", {
                    key: item.label,
                    role: "button",
                    "data-id": item.id,
                    "aria-label": item.ariaLabel,
                    class: _vue.normalizeClass($options.getItemClasses(item)),
                    tabindex: item.isDisabled ? void 0 : 0,
                    onClick: item.click,
                    onKeydown: (e)=>$data.onSpaceOrEnter(e, item.click)
                }, _vue.toDisplayString(item.label), 43, _hoisted_6$1);
            }), 128))
        ])
    ], 512);
}
var CalendarNav = /* @__PURE__ */ _export_sfc(_sfc_main$6, [
    [
        "render",
        _sfc_render$2
    ]
]);
function showPopover(opts) {
    if (document) document.dispatchEvent(new CustomEvent("show-popover", {
        detail: opts
    }));
}
function hidePopover(opts) {
    if (document) document.dispatchEvent(new CustomEvent("hide-popover", {
        detail: opts
    }));
}
function togglePopover(opts) {
    if (document) document.dispatchEvent(new CustomEvent("toggle-popover", {
        detail: opts
    }));
}
function updatePopover(opts) {
    if (document) document.dispatchEvent(new CustomEvent("update-popover", {
        detail: opts
    }));
}
function getPopoverTriggerEvents(opts) {
    const { visibility  } = opts;
    const click = visibility === "click";
    const hover = visibility === "hover";
    const hoverFocus = visibility === "hover-focus";
    const focus = visibility === "focus";
    opts.autoHide = !click;
    let hovered = false;
    let focused = false;
    const { isRenderFn  } = opts;
    const events = {
        click: isRenderFn ? "onClick" : "click",
        mousemove: isRenderFn ? "onMousemove" : "mousemove",
        mouseleave: isRenderFn ? "onMouseleave" : "mouseleave",
        focusin: isRenderFn ? "onFocusin" : "focusin",
        focusout: isRenderFn ? "onFocusout" : "focusout"
    };
    return {
        [events.click] (e) {
            if (click) {
                opts.ref = e.target;
                togglePopover(opts);
                e.stopPropagation();
            }
        },
        [events.mousemove] (e) {
            opts.ref = e.currentTarget;
            if (!hovered) {
                hovered = true;
                if (hover || hoverFocus) showPopover(opts);
            }
        },
        [events.mouseleave] (e) {
            opts.ref = e.target;
            if (hovered) {
                hovered = false;
                if (hover || hoverFocus && !focused) hidePopover(opts);
            }
        },
        [events.focusin] (e) {
            opts.ref = e.currentTarget;
            if (!focused) {
                focused = true;
                if (focus || hoverFocus) showPopover(opts);
            }
        },
        [events.focusout] (e) {
            opts.ref = e.currentTarget;
            if (focused && !elementContains(opts.ref, e.relatedTarget)) {
                focused = false;
                if (focus || hoverFocus && !hovered) hidePopover(opts);
            }
        }
    };
}
const _sfc_main$5 = {
    name: "CalendarDay",
    emits: [
        "dayclick",
        "daymouseenter",
        "daymouseleave",
        "dayfocusin",
        "dayfocusout",
        "daykeydown"
    ],
    mixins: [
        childMixin,
        slotMixin
    ],
    inheritAttrs: false,
    render () {
        const backgroundsLayer = ()=>this.hasBackgrounds && _vue.h("div", {
                class: "vc-highlights vc-day-layer"
            }, this.backgrounds.map(({ key , wrapperClass , class: bgClass , style  })=>_vue.h("div", {
                    key,
                    class: wrapperClass
                }, [
                    _vue.h("div", {
                        class: bgClass,
                        style
                    })
                ])
            ))
        ;
        const contentLayer = ()=>this.safeSlot("day-content", {
                day: this.day,
                attributes: this.day.attributes,
                attributesMap: this.day.attributesMap,
                dayProps: this.dayContentProps,
                dayEvents: this.dayContentEvents
            }) || _vue.h("span", __spreadProps(__spreadValues(__spreadProps(__spreadValues({
            }, this.dayContentProps), {
                class: this.dayContentClass,
                style: this.dayContentStyle
            }), this.dayContentEvents), {
                ref: "content"
            }), [
                this.day.label
            ])
        ;
        const dotsLayer = ()=>this.hasDots && _vue.h("div", {
                class: "vc-day-layer vc-day-box-center-bottom"
            }, [
                _vue.h("div", {
                    class: "vc-dots"
                }, this.dots.map(({ key , class: bgClass , style  })=>_vue.h("span", {
                        key,
                        class: bgClass,
                        style
                    })
                ))
            ])
        ;
        const barsLayer = ()=>this.hasBars && _vue.h("div", {
                class: "vc-day-layer vc-day-box-center-bottom"
            }, [
                _vue.h("div", {
                    class: "vc-bars"
                }, this.bars.map(({ key , class: bgClass , style  })=>_vue.h("span", {
                        key,
                        class: bgClass,
                        style
                    })
                ))
            ])
        ;
        return _vue.h("div", {
            class: [
                "vc-day",
                ...this.day.classes,
                {
                    "vc-day-box-center-center": !this.$slots["day-content"]
                },
                {
                    "is-not-in-month": !this.inMonth
                }
            ]
        }, [
            backgroundsLayer(),
            contentLayer(),
            dotsLayer(),
            barsLayer()
        ]);
    },
    inject: [
        "sharedState"
    ],
    props: {
        day: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            glyphs: {
            },
            dayContentEvents: {
            }
        };
    },
    computed: {
        label () {
            return this.day.label;
        },
        startTime () {
            return this.day.range.start.getTime();
        },
        endTime () {
            return this.day.range.end.getTime();
        },
        inMonth () {
            return this.day.inMonth;
        },
        isDisabled () {
            return this.day.isDisabled;
        },
        backgrounds () {
            return this.glyphs.backgrounds;
        },
        hasBackgrounds () {
            return !!arrayHasItems(this.backgrounds);
        },
        content () {
            return this.glyphs.content;
        },
        dots () {
            return this.glyphs.dots;
        },
        hasDots () {
            return !!arrayHasItems(this.dots);
        },
        bars () {
            return this.glyphs.bars;
        },
        hasBars () {
            return !!arrayHasItems(this.bars);
        },
        popovers () {
            return this.glyphs.popovers;
        },
        hasPopovers () {
            return !!arrayHasItems(this.popovers);
        },
        dayContentClass () {
            return [
                "vc-day-content vc-focusable",
                {
                    "is-disabled": this.isDisabled
                },
                get_1(last_1(this.content), "class") || ""
            ];
        },
        dayContentStyle () {
            return get_1(last_1(this.content), "style");
        },
        dayContentProps () {
            let tabindex;
            if (this.day.isFocusable) tabindex = "0";
            else if (this.day.inMonth) tabindex = "-1";
            return {
                tabindex,
                "aria-label": this.day.ariaLabel,
                "aria-disabled": this.day.isDisabled ? "true" : "false",
                role: "button"
            };
        },
        dayEvent () {
            return __spreadProps(__spreadValues({
            }, this.day), {
                el: this.$refs.content,
                popovers: this.popovers
            });
        }
    },
    watch: {
        theme () {
            this.refresh();
        },
        popovers () {
            this.refreshPopovers();
        },
        "day.shouldRefresh" () {
            this.refresh();
        }
    },
    mounted () {
        this.refreshPopovers();
        this.refresh();
    },
    methods: {
        getDayEvent (origEvent) {
            return __spreadProps(__spreadValues({
            }, this.dayEvent), {
                event: origEvent
            });
        },
        click (e) {
            this.$emit("dayclick", this.getDayEvent(e));
        },
        mouseenter (e) {
            this.$emit("daymouseenter", this.getDayEvent(e));
        },
        mouseleave (e) {
            this.$emit("daymouseleave", this.getDayEvent(e));
        },
        focusin (e) {
            this.$emit("dayfocusin", this.getDayEvent(e));
        },
        focusout (e) {
            this.$emit("dayfocusout", this.getDayEvent(e));
        },
        keydown (e) {
            this.$emit("daykeydown", this.getDayEvent(e));
        },
        refresh () {
            if (!this.day.shouldRefresh) return;
            this.day.shouldRefresh = false;
            const glyphs = {
                backgrounds: [],
                dots: [],
                bars: [],
                popovers: [],
                content: []
            };
            this.day.attributes = Object.values(this.day.attributesMap || {
            }).sort((a, b)=>a.order - b.order
            );
            this.day.attributes.forEach((attr)=>{
                const { targetDate  } = attr;
                const { isDate: isDate2 , isComplex , startTime , endTime  } = targetDate;
                const onStart = this.startTime <= startTime;
                const onEnd = this.endTime >= endTime;
                const onStartAndEnd = onStart && onEnd;
                const onStartOrEnd = onStart || onEnd;
                const dateInfo = {
                    isDate: isDate2,
                    isComplex,
                    onStart,
                    onEnd,
                    onStartAndEnd,
                    onStartOrEnd
                };
                this.processHighlight(attr, dateInfo, glyphs);
                this.processNonHighlight(attr, "content", dateInfo, glyphs.content);
                this.processNonHighlight(attr, "dot", dateInfo, glyphs.dots);
                this.processNonHighlight(attr, "bar", dateInfo, glyphs.bars);
                this.processPopover(attr, glyphs);
            });
            this.glyphs = glyphs;
        },
        processHighlight ({ key , highlight  }, { isDate: isDate2 , isComplex , onStart , onEnd , onStartAndEnd  }, { backgrounds , content  }) {
            if (!highlight) return;
            const { base , start , end  } = highlight;
            if (isDate2 || isComplex) {
                backgrounds.push({
                    key,
                    wrapperClass: "vc-day-layer vc-day-box-center-center",
                    class: [
                        "vc-highlight",
                        start.class
                    ],
                    style: start.style
                });
                content.push({
                    key: `${key}-content`,
                    class: start.contentClass,
                    style: start.contentStyle
                });
            } else if (onStartAndEnd) {
                backgrounds.push({
                    key,
                    wrapperClass: "vc-day-layer vc-day-box-center-center",
                    class: [
                        "vc-highlight",
                        start.class
                    ],
                    style: start.style
                });
                content.push({
                    key: `${key}-content`,
                    class: start.contentClass,
                    style: start.contentStyle
                });
            } else if (onStart) {
                backgrounds.push({
                    key: `${key}-base`,
                    wrapperClass: "vc-day-layer vc-day-box-right-center",
                    class: [
                        "vc-highlight vc-highlight-base-start",
                        base.class
                    ],
                    style: base.style
                });
                backgrounds.push({
                    key,
                    wrapperClass: "vc-day-layer vc-day-box-center-center",
                    class: [
                        "vc-highlight",
                        start.class
                    ],
                    style: start.style
                });
                content.push({
                    key: `${key}-content`,
                    class: start.contentClass,
                    style: start.contentStyle
                });
            } else if (onEnd) {
                backgrounds.push({
                    key: `${key}-base`,
                    wrapperClass: "vc-day-layer vc-day-box-left-center",
                    class: [
                        "vc-highlight vc-highlight-base-end",
                        base.class
                    ],
                    style: base.style
                });
                backgrounds.push({
                    key,
                    wrapperClass: "vc-day-layer vc-day-box-center-center",
                    class: [
                        "vc-highlight",
                        end.class
                    ],
                    style: end.style
                });
                content.push({
                    key: `${key}-content`,
                    class: end.contentClass,
                    style: end.contentStyle
                });
            } else {
                backgrounds.push({
                    key: `${key}-middle`,
                    wrapperClass: "vc-day-layer vc-day-box-center-center",
                    class: [
                        "vc-highlight vc-highlight-base-middle",
                        base.class
                    ],
                    style: base.style
                });
                content.push({
                    key: `${key}-content`,
                    class: base.contentClass,
                    style: base.contentStyle
                });
            }
        },
        processNonHighlight (attr, itemKey, { isDate: isDate2 , onStart , onEnd  }, list) {
            if (!attr[itemKey]) return;
            const { key  } = attr;
            const className = `vc-${itemKey}`;
            const { base , start , end  } = attr[itemKey];
            if (isDate2 || onStart) list.push({
                key,
                class: [
                    className,
                    start.class
                ],
                style: start.style
            });
            else if (onEnd) list.push({
                key,
                class: [
                    className,
                    end.class
                ],
                style: end.style
            });
            else list.push({
                key,
                class: [
                    className,
                    base.class
                ],
                style: base.style
            });
        },
        processPopover (attribute, { popovers  }) {
            const { key , customData , popover  } = attribute;
            if (!popover) return;
            const resolvedPopover = defaults_1({
                key,
                customData,
                attribute
            }, __spreadValues({
            }, popover), {
                visibility: popover.label ? "hover" : "click",
                placement: "bottom",
                isInteractive: !popover.label
            });
            popovers.splice(0, 0, resolvedPopover);
        },
        refreshPopovers () {
            let popoverEvents = {
            };
            if (arrayHasItems(this.popovers)) popoverEvents = getPopoverTriggerEvents(defaults_1({
                id: this.dayPopoverId,
                data: this.day,
                isRenderFn: true
            }, ...this.popovers));
            this.dayContentEvents = mergeEvents({
                onClick: this.click,
                onMouseenter: this.mouseenter,
                onMouseleave: this.mouseleave,
                onFocusin: this.focusin,
                onFocusout: this.focusout,
                onKeydown: this.keydown
            }, popoverEvents);
            updatePopover({
                id: this.dayPopoverId,
                data: this.day
            });
        }
    }
};
const _sfc_main$4 = {
    name: "CalendarPane",
    emits: [
        "update:page",
        "weeknumberclick"
    ],
    mixins: [
        childMixin,
        slotMixin
    ],
    inheritAttrs: false,
    render () {
        const header = this.safeSlot("header", this.page) || _vue.h("div", {
            class: `vc-header align-${this.titlePosition}`
        }, [
            _vue.h("div", __spreadValues({
                class: "vc-title"
            }, this.navPopoverEvents), [
                this.safeSlot("header-title", this.page, this.page.title)
            ])
        ]);
        const weekdayCells = this.weekdayLabels.map((wl, i)=>_vue.h("div", {
                key: i + 1,
                class: "vc-weekday"
            }, [
                wl
            ])
        );
        const showWeeknumbersLeft = this.showWeeknumbers_.startsWith("left");
        const showWeeknumbersRight = this.showWeeknumbers_.startsWith("right");
        if (showWeeknumbersLeft) weekdayCells.unshift(_vue.h("div", {
            class: "vc-weekday"
        }));
        else if (showWeeknumbersRight) weekdayCells.push(_vue.h("div", {
            class: "vc-weekday"
        }));
        const getWeeknumberCell = (weeknumber)=>_vue.h("div", {
                class: [
                    "vc-weeknumber"
                ]
            }, [
                _vue.h("span", {
                    class: [
                        "vc-weeknumber-content",
                        `is-${this.showWeeknumbers_}`
                    ],
                    onClick: (event)=>{
                        this.$emit("weeknumberclick", {
                            weeknumber,
                            days: this.page.days.filter((d)=>d[this.weeknumberKey] === weeknumber
                            ),
                            event
                        });
                    }
                }, [
                    weeknumber
                ])
            ])
        ;
        const dayCells = [];
        const { daysInWeek: daysInWeek2  } = this.locale;
        this.page.days.forEach((day, i)=>{
            const mod = i % daysInWeek2;
            if (showWeeknumbersLeft && mod === 0 || showWeeknumbersRight && mod === daysInWeek2) dayCells.push(getWeeknumberCell(day[this.weeknumberKey]));
            dayCells.push(_vue.h(_sfc_main$5, __spreadProps(__spreadValues({
            }, this.$attrs), {
                day
            }), this.$slots));
            if (showWeeknumbersRight && mod === daysInWeek2 - 1) dayCells.push(getWeeknumberCell(day[this.weeknumberKey]));
        });
        const weeks = _vue.h("div", {
            class: {
                "vc-weeks": true,
                "vc-show-weeknumbers": this.showWeeknumbers_,
                "is-left": showWeeknumbersLeft,
                "is-right": showWeeknumbersRight
            }
        }, [
            weekdayCells,
            dayCells
        ]);
        return _vue.h("div", {
            class: [
                "vc-pane",
                `row-from-end-${this.rowFromEnd}`,
                `column-from-end-${this.columnFromEnd}`
            ],
            ref: "pane"
        }, [
            header,
            weeks
        ]);
    },
    props: {
        page: Object,
        position: Number,
        row: Number,
        rowFromEnd: Number,
        column: Number,
        columnFromEnd: Number,
        titlePosition: String,
        navVisibility: {
            type: String,
            default: ()=>getDefault("navVisibility")
        },
        showWeeknumbers: [
            Boolean,
            String
        ],
        showIsoWeeknumbers: [
            Boolean,
            String
        ]
    },
    computed: {
        weeknumberKey () {
            return this.showWeeknumbers ? "weeknumber" : "isoWeeknumber";
        },
        showWeeknumbers_ () {
            const showWeeknumbers = this.showWeeknumbers || this.showIsoWeeknumbers;
            if (showWeeknumbers == null) return "";
            if (isBoolean_1(showWeeknumbers)) return showWeeknumbers ? "left" : "";
            if (showWeeknumbers.startsWith("right")) return this.columnFromEnd > 1 ? "right" : showWeeknumbers;
            return this.column > 1 ? "left" : showWeeknumbers;
        },
        navPlacement () {
            switch(this.titlePosition){
                case "left":
                    return "bottom-start";
                case "right":
                    return "bottom-end";
                default:
                    return "bottom";
            }
        },
        navPopoverEvents () {
            const { sharedState , navVisibility , navPlacement , page , position  } = this;
            return getPopoverTriggerEvents({
                id: sharedState.navPopoverId,
                visibility: navVisibility,
                placement: navPlacement,
                modifiers: [
                    {
                        name: "flip",
                        options: {
                            fallbackPlacements: [
                                "bottom"
                            ]
                        }
                    }
                ],
                data: {
                    page,
                    position
                },
                isInteractive: true,
                isRenderFn: true
            });
        },
        weekdayLabels () {
            return this.locale.getWeekdayDates().map((d)=>this.format(d, this.masks.weekdays)
            );
        }
    }
};
class AttributeStore {
    constructor(theme, locale, attrs){
        this.theme = theme;
        this.locale = locale;
        this.map = {
        };
        this.refresh(attrs, true);
    }
    destroy() {
        this.theme = null;
        this.locale = null;
        this.map = {
        };
        this.list = [];
        this.pinAttr = null;
    }
    refresh(attrs, reset) {
        const map2 = {
        };
        const list = [];
        let pinAttr = null;
        const adds = [];
        const deletes = reset ? new Set() : new Set(Object.keys(this.map));
        if (arrayHasItems(attrs)) attrs.forEach((attr, i)=>{
            if (!attr || !attr.dates) return;
            const key = attr.key ? attr.key.toString() : i.toString();
            const order = attr.order || 0;
            const hashcode = hash(JSON.stringify(attr));
            let exAttr = this.map[key];
            if (!reset && exAttr && exAttr.hashcode === hashcode) deletes.delete(key);
            else {
                exAttr = new Attribute(__spreadValues({
                    key,
                    order,
                    hashcode
                }, attr), this.theme, this.locale);
                adds.push(exAttr);
            }
            if (exAttr && exAttr.pinPage) pinAttr = exAttr;
            map2[key] = exAttr;
            list.push(exAttr);
        });
        this.map = map2;
        this.list = list;
        this.pinAttr = pinAttr;
        return {
            adds,
            deletes: Array.from(deletes)
        };
    }
}
const addHorizontalSwipeHandler = (element, handler, { maxSwipeTime: maxSwipeTime2 , minHorizontalSwipeDistance: minHorizontalSwipeDistance2 , maxVerticalSwipeDistance: maxVerticalSwipeDistance2  })=>{
    if (!element || !element.addEventListener || !isFunction_1(handler)) return null;
    let startX = 0;
    let startY = 0;
    let startTime = null;
    let isSwiping = false;
    function touchStart(e) {
        const t = e.changedTouches[0];
        startX = t.screenX;
        startY = t.screenY;
        startTime = new Date().getTime();
        isSwiping = true;
    }
    function touchEnd(e) {
        if (!isSwiping) return;
        isSwiping = false;
        const t = e.changedTouches[0];
        const deltaX = t.screenX - startX;
        const deltaY = t.screenY - startY;
        const deltaTime = new Date().getTime() - startTime;
        if (deltaTime < maxSwipeTime2) {
            if (Math.abs(deltaX) >= minHorizontalSwipeDistance2 && Math.abs(deltaY) <= maxVerticalSwipeDistance2) {
                const arg = {
                    toLeft: false,
                    toRight: false
                };
                if (deltaX < 0) arg.toLeft = true;
                else arg.toRight = true;
                handler(arg);
            }
        }
    }
    on(element, "touchstart", touchStart, {
        passive: true
    });
    on(element, "touchend", touchEnd, {
        passive: true
    });
    return ()=>{
        off(element, "touchstart", touchStart);
        off(element, "touchend", touchEnd);
    };
};
const _sfc_main$3 = {
    name: "Calendar",
    emits: [
        "dayfocusin",
        "dayfocusout",
        "transition-start",
        "transition-end",
        "update:from-page",
        "update:to-page"
    ],
    render () {
        const panes = this.pages.map((page, i)=>{
            const position = i + 1;
            const row = Math.ceil((i + 1) / this.columns);
            const rowFromEnd = this.rows - row + 1;
            const column = position % this.columns || this.columns;
            const columnFromEnd = this.columns - column + 1;
            return _vue.h(_sfc_main$4, __spreadProps(__spreadValues({
            }, this.$attrs), {
                key: page.key,
                attributes: this.store,
                page,
                position,
                row,
                rowFromEnd,
                column,
                columnFromEnd,
                titlePosition: this.titlePosition,
                canMove: this.canMove,
                "onUpdate:page": (e)=>this.move(e, {
                        position: i + 1
                    })
                ,
                onDayfocusin: (e)=>{
                    this.lastFocusedDay = e;
                    this.$emit("dayfocusin", e);
                },
                onDayfocusout: (e)=>{
                    this.lastFocusedDay = null;
                    this.$emit("dayfocusout", e);
                }
            }), this.$slots);
        });
        const getArrowButton = (isPrev)=>{
            const click = ()=>this.move(isPrev ? -this.step_ : this.step_)
            ;
            const keydown = (e)=>onSpaceOrEnter(e, click)
            ;
            const isDisabled = isPrev ? !this.canMovePrev : !this.canMoveNext;
            return _vue.h("div", {
                class: [
                    "vc-arrow",
                    `is-${isPrev ? "left" : "right"}`,
                    {
                        "is-disabled": isDisabled
                    }
                ],
                role: "button",
                onClick: click,
                onKeydown: keydown
            }, [
                (isPrev ? this.safeSlot("header-left-button", {
                    click
                }) : this.safeSlot("header-right-button", {
                    click
                })) || _vue.h(SvgIcon, {
                    name: isPrev ? "left-arrow" : "right-arrow"
                })
            ]);
        };
        const getNavPopover = ()=>_vue.h(_sfc_main$9, {
                id: this.sharedState.navPopoverId,
                contentClass: "vc-nav-popover-container",
                ref: "navPopover"
            }, {
                default: ({ data: data2  })=>{
                    const { position , page  } = data2;
                    return _vue.h(CalendarNav, {
                        value: page,
                        position,
                        validator: (e)=>this.canMove(e, {
                                position
                            })
                        ,
                        onInput: (e)=>this.move(e)
                    }, __spreadValues({
                    }, this.$slots));
                }
            })
        ;
        const getDayPopover = ()=>_vue.h(_sfc_main$9, {
                id: this.sharedState.dayPopoverId,
                contentClass: "vc-day-popover-container"
            }, {
                default: ({ data: day , updateLayout , hide  })=>{
                    const attributes = Object.values(day.attributes).filter((a)=>a.popover
                    );
                    const masks2 = this.$locale.masks;
                    const format = this.formatDate;
                    const dayTitle = format(day.date, masks2.dayPopover);
                    return this.safeSlot("day-popover", {
                        day,
                        attributes,
                        masks: masks2,
                        format,
                        dayTitle,
                        updateLayout,
                        hide
                    }, _vue.h("div", [
                        masks2.dayPopover && _vue.h("div", {
                            class: [
                                "vc-day-popover-header"
                            ]
                        }, [
                            dayTitle
                        ]),
                        attributes.map((attribute)=>_vue.h(PopoverRow, {
                                key: attribute.key,
                                attribute
                            })
                        )
                    ]));
                }
            })
        ;
        return _vue.h("div", {
            "data-helptext": "Press the arrow keys to navigate by day, Home and End to navigate to week ends, PageUp and PageDown to navigate by month, Alt+PageUp and Alt+PageDown to navigate by year",
            class: [
                "vc-container",
                `vc-${this.$theme.color}`,
                {
                    "vc-is-expanded": this.isExpanded,
                    "vc-is-dark": this.$theme.isDark
                }
            ],
            onKeydown: this.handleKeydown,
            onMouseup: (e)=>e.preventDefault()
            ,
            ref: "container"
        }, [
            getNavPopover(),
            _vue.h("div", {
                class: [
                    "vc-pane-container",
                    {
                        "in-transition": this.inTransition
                    }
                ]
            }, [
                _vue.h(CustomTransition, {
                    name: this.transitionName,
                    "on-before-enter": ()=>{
                        this.inTransition = true;
                    },
                    "on-after-enter": ()=>{
                        this.inTransition = false;
                    }
                }, {
                    default: ()=>_vue.h("div", __spreadProps(__spreadValues({
                        }, this.$attrs), {
                            class: "vc-pane-layout",
                            style: {
                                gridTemplateColumns: `repeat(${this.columns}, 1fr)`
                            },
                            key: this.firstPage ? this.firstPage.key : ""
                        }), panes)
                }),
                _vue.h("div", {
                    class: [
                        `vc-arrows-container title-${this.titlePosition}`
                    ]
                }, [
                    getArrowButton(true),
                    getArrowButton(false)
                ]),
                this.$slots.footer && this.$slots.footer()
            ]),
            getDayPopover()
        ]);
    },
    mixins: [
        rootMixin,
        slotMixin
    ],
    provide () {
        return {
            sharedState: this.sharedState
        };
    },
    props: {
        rows: {
            type: Number,
            default: 1
        },
        columns: {
            type: Number,
            default: 1
        },
        step: Number,
        titlePosition: {
            type: String,
            default: ()=>getDefault("titlePosition")
        },
        isExpanded: Boolean,
        fromDate: Date,
        toDate: Date,
        fromPage: Object,
        toPage: Object,
        minPage: Object,
        maxPage: Object,
        transition: String,
        attributes: [
            Object,
            Array
        ],
        trimWeeks: Boolean,
        disablePageSwipe: Boolean
    },
    data () {
        return {
            pages: [],
            store: null,
            lastFocusedDay: null,
            focusableDay: new Date().getDate(),
            transitionName: "",
            inTransition: false,
            sharedState: {
                navPopoverId: createGuid(),
                dayPopoverId: createGuid(),
                theme: {
                },
                masks: {
                },
                locale: {
                }
            }
        };
    },
    computed: {
        firstPage () {
            return head_1(this.pages);
        },
        lastPage () {
            return last_1(this.pages);
        },
        minPage_ () {
            return this.minPage || this.pageForDate(this.minDate);
        },
        maxPage_ () {
            return this.maxPage || this.pageForDate(this.maxDate);
        },
        count () {
            return this.rows * this.columns;
        },
        step_ () {
            return this.step || this.count;
        },
        canMovePrev () {
            return this.canMove(-this.step_);
        },
        canMoveNext () {
            return this.canMove(this.step_);
        }
    },
    watch: {
        $locale () {
            this.refreshLocale();
            this.refreshPages({
                page: this.firstPage,
                ignoreCache: true
            });
            this.initStore();
        },
        $theme () {
            this.refreshTheme();
            this.initStore();
        },
        fromDate () {
            this.refreshPages();
        },
        fromPage (val) {
            const firstPage = this.pages && this.pages[0];
            if (pageIsEqualToPage(val, firstPage)) return;
            this.refreshPages();
        },
        toPage (val) {
            const lastPage = this.pages && this.pages[this.pages.length - 1];
            if (pageIsEqualToPage(val, lastPage)) return;
            this.refreshPages();
        },
        count () {
            this.refreshPages();
        },
        attributes: {
            handler (val) {
                const { adds , deletes  } = this.store.refresh(val);
                this.refreshAttrs(this.pages, adds, deletes);
            },
            deep: true
        },
        pages (val) {
            this.refreshAttrs(val, this.store.list, null, true);
        },
        disabledAttribute () {
            this.refreshDisabledDays();
        },
        lastFocusedDay (val) {
            if (val) {
                this.focusableDay = val.day;
                this.refreshFocusableDays();
            }
        },
        inTransition (val) {
            if (val) this.$emit("transition-start");
            else {
                this.$emit("transition-end");
                if (this.transitionPromise) {
                    this.transitionPromise.resolve(true);
                    this.transitionPromise = null;
                }
            }
        }
    },
    created () {
        this.refreshLocale();
        this.refreshTheme();
        this.initStore();
        this.refreshPages();
    },
    mounted () {
        if (!this.disablePageSwipe) this.removeHandlers = addHorizontalSwipeHandler(this.$refs.container, ({ toLeft , toRight  })=>{
            if (toLeft) this.moveNext();
            else if (toRight) this.movePrev();
        }, getDefault("touch"));
    },
    beforeUnmount () {
        this.pages = [];
        this.store.destroy();
        this.store = null;
        this.sharedState = null;
        if (this.removeHandlers) this.removeHandlers();
    },
    methods: {
        refreshLocale () {
            this.sharedState.locale = this.$locale;
            this.sharedState.masks = this.$locale.masks;
        },
        refreshTheme () {
            this.sharedState.theme = this.$theme;
        },
        canMove (arg, opts = {
        }) {
            const page = this.firstPage && this.$locale.toPage(arg, this.firstPage);
            if (!page) return false;
            let { position  } = opts;
            if (isNumber_1(arg)) position = 1;
            if (!position) {
                if (pageIsBeforePage(page, this.firstPage)) position = -1;
                else if (pageIsAfterPage(page, this.lastPage)) position = 1;
                else return true;
            }
            Object.assign(opts, this.getTargetPageRange(page, {
                position,
                force: true
            }));
            return pageRangeToArray(opts.fromPage, opts.toPage).some((p)=>pageIsBetweenPages(p, this.minPage_, this.maxPage_)
            );
        },
        movePrev (opts) {
            return this.move(-this.step_, opts);
        },
        moveNext (opts) {
            return this.move(this.step_, opts);
        },
        move (arg, opts = {
        }) {
            const canMove = this.canMove(arg, opts);
            if (!opts.force && !canMove) return Promise.reject(new Error(`Move target is disabled: ${JSON.stringify(opts)}`));
            this.$refs.navPopover.hide({
                hideDelay: 0
            });
            if (opts.fromPage && !pageIsEqualToPage(opts.fromPage, this.firstPage)) return this.refreshPages(__spreadProps(__spreadValues({
            }, opts), {
                page: opts.fromPage,
                position: 1,
                force: true
            }));
            return Promise.resolve(true);
        },
        focusDate (date, opts = {
        }) {
            return this.move(date, opts).then(()=>{
                const focusableEl = this.$el.querySelector(`.id-${this.$locale.getDayId(date)}.in-month .vc-focusable`);
                if (focusableEl) {
                    focusableEl.focus();
                    return Promise.resolve(true);
                }
                return Promise.resolve(false);
            });
        },
        showPageRange (range, opts) {
            let fromPage;
            let toPage;
            if (isDate(range)) fromPage = this.pageForDate(range);
            else if (isObject(range)) {
                const { month , year  } = range;
                const { from , to  } = range;
                if (isNumber_1(month) && isNumber_1(year)) fromPage = range;
                else if (from || to) {
                    fromPage = isDate(from) ? this.pageForDate(from) : from;
                    toPage = isDate(to) ? this.pageForDate(to) : to;
                }
            } else return Promise.reject(new Error("Invalid page range provided."));
            const lastPage = this.lastPage;
            let page = fromPage;
            if (pageIsAfterPage(toPage, lastPage)) page = addPages(toPage, -(this.pages.length - 1));
            if (pageIsBeforePage(page, fromPage)) page = fromPage;
            return this.refreshPages(__spreadProps(__spreadValues({
            }, opts), {
                page
            }));
        },
        getTargetPageRange (page, { position , force  } = {
        }) {
            let fromPage = null;
            let toPage = null;
            if (pageIsValid(page)) {
                let pagesToAdd = 0;
                position = +position;
                if (!isNaN(position)) pagesToAdd = position > 0 ? 1 - position : -(this.count + position);
                fromPage = addPages(page, pagesToAdd);
            } else fromPage = this.getDefaultInitialPage();
            toPage = addPages(fromPage, this.count - 1);
            if (!force) {
                if (pageIsBeforePage(fromPage, this.minPage_)) fromPage = this.minPage_;
                else if (pageIsAfterPage(toPage, this.maxPage_)) fromPage = addPages(this.maxPage_, 1 - this.count);
                toPage = addPages(fromPage, this.count - 1);
            }
            return {
                fromPage,
                toPage
            };
        },
        getDefaultInitialPage () {
            let page = this.fromPage || this.pageForDate(this.fromDate);
            if (!pageIsValid(page)) {
                const toPage = this.toPage || this.pageForDate(this.toPage);
                if (pageIsValid(toPage)) page = addPages(toPage, 1 - this.count);
            }
            if (!pageIsValid(page)) page = this.getPageForAttributes();
            if (!pageIsValid(page)) page = this.pageForThisMonth();
            return page;
        },
        refreshPages ({ page , position =1 , force , transition , ignoreCache  } = {
        }) {
            return new Promise((resolve, reject)=>{
                const { fromPage , toPage  } = this.getTargetPageRange(page, {
                    position,
                    force
                });
                const pages = [];
                for(let i = 0; i < this.count; i++)pages.push(this.buildPage(addPages(fromPage, i), ignoreCache));
                this.refreshDisabledDays(pages);
                this.refreshFocusableDays(pages);
                this.transitionName = this.getPageTransition(this.pages[0], pages[0], transition);
                this.pages = pages;
                this.$emit("update:from-page", fromPage);
                this.$emit("update:to-page", toPage);
                if (this.transitionName && this.transitionName !== "none") this.transitionPromise = {
                    resolve,
                    reject
                };
                else resolve(true);
            });
        },
        refreshDisabledDays (pages) {
            this.getPageDays(pages).forEach((d)=>{
                d.isDisabled = !!this.disabledAttribute && this.disabledAttribute.intersectsDay(d);
            });
        },
        refreshFocusableDays (pages) {
            this.getPageDays(pages).forEach((d)=>{
                d.isFocusable = d.inMonth && d.day === this.focusableDay;
            });
        },
        getPageDays (pages = this.pages) {
            return pages.reduce((prev, curr)=>prev.concat(curr.days)
            , []);
        },
        getPageTransition (oldPage, newPage, transition = this.transition) {
            if (transition === "none") return transition;
            if (transition === "fade" || !transition && this.count > 1 || !pageIsValid(oldPage) || !pageIsValid(newPage)) return "fade";
            const movePrev = pageIsBeforePage(newPage, oldPage);
            if (transition === "slide-v") return movePrev ? "slide-down" : "slide-up";
            return movePrev ? "slide-right" : "slide-left";
        },
        getPageForAttributes () {
            let page = null;
            const attr = this.store.pinAttr;
            if (attr && attr.hasDates) {
                let [date] = attr.dates;
                date = date.start || date.date;
                page = this.pageForDate(date);
            }
            return page;
        },
        buildPage ({ month , year  }, ignoreCache) {
            const key = `${year.toString()}-${month.toString()}`;
            let page = this.pages.find((p)=>p.key === key
            );
            if (!page || ignoreCache) {
                const date = new Date(year, month - 1, 15);
                const monthComps = this.$locale.getMonthComps(month, year);
                const prevMonthComps = this.$locale.getPrevMonthComps(month, year);
                const nextMonthComps = this.$locale.getNextMonthComps(month, year);
                page = {
                    key,
                    month,
                    year,
                    weeks: this.trimWeeks ? monthComps.weeks : 6,
                    title: this.$locale.format(date, this.$locale.masks.title),
                    shortMonthLabel: this.$locale.format(date, "MMM"),
                    monthLabel: this.$locale.format(date, "MMMM"),
                    shortYearLabel: year.toString().substring(2),
                    yearLabel: year.toString(),
                    monthComps,
                    prevMonthComps,
                    nextMonthComps,
                    canMove: (pg)=>this.canMove(pg)
                    ,
                    move: (pg)=>this.move(pg)
                    ,
                    moveThisMonth: ()=>this.moveThisMonth()
                    ,
                    movePrevMonth: ()=>this.move(prevMonthComps)
                    ,
                    moveNextMonth: ()=>this.move(nextMonthComps)
                    ,
                    refresh: true
                };
                page.days = this.$locale.getCalendarDays(page);
            }
            return page;
        },
        initStore () {
            this.store = new AttributeStore(this.$theme, this.$locale, this.attributes);
            this.refreshAttrs(this.pages, this.store.list, [], true);
        },
        refreshAttrs (pages = [], adds = [], deletes = [], reset) {
            if (!arrayHasItems(pages)) return;
            pages.forEach((p)=>{
                p.days.forEach((d)=>{
                    let shouldRefresh = false;
                    let map2 = {
                    };
                    if (reset) shouldRefresh = true;
                    else if (hasAny(d.attributesMap, deletes)) {
                        map2 = omit_1(d.attributesMap, deletes);
                        shouldRefresh = true;
                    } else map2 = d.attributesMap || {
                    };
                    adds.forEach((attr)=>{
                        const targetDate = attr.intersectsDay(d);
                        if (targetDate) {
                            const newAttr = __spreadProps(__spreadValues({
                            }, attr), {
                                targetDate
                            });
                            map2[attr.key] = newAttr;
                            shouldRefresh = true;
                        }
                    });
                    if (shouldRefresh) {
                        d.attributesMap = map2;
                        d.shouldRefresh = true;
                    }
                });
            });
        },
        handleKeydown (e) {
            const day = this.lastFocusedDay;
            if (day != null) {
                day.event = e;
                this.handleDayKeydown(day);
            }
        },
        handleDayKeydown (day) {
            const { dateFromTime , event  } = day;
            const date = dateFromTime(12);
            let newDate = null;
            switch(event.key){
                case "ArrowLeft":
                    newDate = addDays(date, -1);
                    break;
                case "ArrowRight":
                    newDate = addDays(date, 1);
                    break;
                case "ArrowUp":
                    newDate = addDays(date, -7);
                    break;
                case "ArrowDown":
                    newDate = addDays(date, 7);
                    break;
                case "Home":
                    newDate = addDays(date, -day.weekdayPosition + 1);
                    break;
                case "End":
                    newDate = addDays(date, day.weekdayPositionFromEnd);
                    break;
                case "PageUp":
                    if (event.altKey) newDate = addYears(date, -1);
                    else newDate = addMonths(date, -1);
                    break;
                case "PageDown":
                    if (event.altKey) newDate = addYears(date, 1);
                    else newDate = addMonths(date, 1);
                    break;
            }
            if (newDate) {
                event.preventDefault();
                this.focusDate(newDate).catch();
            }
        }
    }
};
const _sfc_main$2 = {
    inheritAttrs: false,
    emits: [
        "update:modelValue"
    ],
    props: {
        options: Array,
        modelValue: null
    }
};
const _hoisted_1$1 = {
    class: "vc-select"
};
const _hoisted_2$1 = [
    "value"
];
const _hoisted_3$1 = [
    "value",
    "disabled"
];
const _hoisted_4$1 = /* @__PURE__ */ _vue.createElementVNode("div", {
    class: "vc-select-arrow"
}, [
    /* @__PURE__ */ _vue.createElementVNode("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20"
    }, [
        /* @__PURE__ */ _vue.createElementVNode("path", {
            d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        })
    ])
], -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return _vue.openBlock(), _vue.createElementBlock("div", _hoisted_1$1, [
        _vue.createElementVNode("select", _vue.mergeProps(_ctx.$attrs, {
            value: $props.modelValue,
            onChange: _cache[0] || (_cache[0] = ($event)=>_ctx.$emit("update:modelValue", $event.target.value)
            )
        }), [
            (_vue.openBlock(true), _vue.createElementBlock(_vue.Fragment, null, _vue.renderList($props.options, (option)=>{
                return _vue.openBlock(), _vue.createElementBlock("option", {
                    key: option.value,
                    value: option.value,
                    disabled: option.disabled
                }, _vue.toDisplayString(option.label), 9, _hoisted_3$1);
            }), 128))
        ], 16, _hoisted_2$1),
        _hoisted_4$1
    ]);
}
var TimeSelect = /* @__PURE__ */ _export_sfc(_sfc_main$2, [
    [
        "render",
        _sfc_render$1
    ]
]);
const _amOptions = [
    {
        value: 0,
        label: "12"
    },
    {
        value: 1,
        label: "1"
    },
    {
        value: 2,
        label: "2"
    },
    {
        value: 3,
        label: "3"
    },
    {
        value: 4,
        label: "4"
    },
    {
        value: 5,
        label: "5"
    },
    {
        value: 6,
        label: "6"
    },
    {
        value: 7,
        label: "7"
    },
    {
        value: 8,
        label: "8"
    },
    {
        value: 9,
        label: "9"
    },
    {
        value: 10,
        label: "10"
    },
    {
        value: 11,
        label: "11"
    }
];
const _pmOptions = [
    {
        value: 12,
        label: "12"
    },
    {
        value: 13,
        label: "1"
    },
    {
        value: 14,
        label: "2"
    },
    {
        value: 15,
        label: "3"
    },
    {
        value: 16,
        label: "4"
    },
    {
        value: 17,
        label: "5"
    },
    {
        value: 18,
        label: "6"
    },
    {
        value: 19,
        label: "7"
    },
    {
        value: 20,
        label: "8"
    },
    {
        value: 21,
        label: "9"
    },
    {
        value: 22,
        label: "10"
    },
    {
        value: 23,
        label: "11"
    }
];
const _sfc_main$1 = {
    name: "TimePicker",
    components: {
        TimeSelect
    },
    emits: [
        "update:modelValue"
    ],
    props: {
        modelValue: {
            type: Object,
            required: true
        },
        locale: {
            type: Object,
            required: true
        },
        theme: {
            type: Object,
            required: true
        },
        is24hr: {
            type: Boolean,
            default: true
        },
        showBorder: Boolean,
        hourOptions: Array,
        minuteOptions: Array
    },
    computed: {
        date () {
            let date = this.locale.normalizeDate(this.modelValue);
            if (this.modelValue.hours === 24) date = new Date(date.getTime() - 1);
            return date;
        },
        hours: {
            get () {
                return this.modelValue.hours;
            },
            set (value) {
                this.updateValue(value, this.minutes);
            }
        },
        minutes: {
            get () {
                return this.modelValue.minutes;
            },
            set (value) {
                this.updateValue(this.hours, value);
            }
        },
        isAM: {
            get () {
                return this.modelValue.hours < 12;
            },
            set (value) {
                let hours = this.hours;
                if (value && hours >= 12) hours -= 12;
                else if (!value && hours < 12) hours += 12;
                this.updateValue(hours, this.minutes);
            }
        },
        amHourOptions () {
            return _amOptions.filter((opt)=>this.hourOptions.some((ho)=>ho.value === opt.value
                )
            );
        },
        pmHourOptions () {
            return _pmOptions.filter((opt)=>this.hourOptions.some((ho)=>ho.value === opt.value
                )
            );
        },
        hourOptions_ () {
            if (this.is24hr) return this.hourOptions;
            if (this.isAM) return this.amHourOptions;
            return this.pmHourOptions;
        },
        amDisabled () {
            return !arrayHasItems(this.amHourOptions);
        },
        pmDisabled () {
            return !arrayHasItems(this.pmHourOptions);
        }
    },
    methods: {
        updateValue (hours, minutes = this.minutes) {
            if (hours !== this.hours || minutes !== this.minutes) this.$emit("update:modelValue", __spreadProps(__spreadValues({
            }, this.modelValue), {
                hours,
                minutes,
                seconds: 0,
                milliseconds: 0
            }));
        }
    }
};
const _hoisted_1 = /* @__PURE__ */ _vue.createElementVNode("div", null, [
    /* @__PURE__ */ _vue.createElementVNode("svg", {
        fill: "none",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        viewBox: "0 0 24 24",
        class: "vc-time-icon",
        stroke: "currentColor"
    }, [
        /* @__PURE__ */ _vue.createElementVNode("path", {
            d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        })
    ])
], -1);
const _hoisted_2 = {
    class: "vc-time-content"
};
const _hoisted_3 = {
    key: 0,
    class: "vc-time-date"
};
const _hoisted_4 = {
    class: "vc-time-weekday"
};
const _hoisted_5 = {
    class: "vc-time-month"
};
const _hoisted_6 = {
    class: "vc-time-day"
};
const _hoisted_7 = {
    class: "vc-time-year"
};
const _hoisted_8 = {
    class: "vc-time-select"
};
const _hoisted_9 = /* @__PURE__ */ _vue.createElementVNode("span", {
    style: {
        "margin": "0 4px"
    }
}, ":", -1);
const _hoisted_10 = {
    key: 0,
    class: "vc-am-pm"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_time_select = _vue.resolveComponent("time-select");
    return _vue.openBlock(), _vue.createElementBlock("div", {
        class: _vue.normalizeClass([
            "vc-time-picker",
            [
                {
                    "vc-invalid": !$props.modelValue.isValid,
                    "vc-bordered": $props.showBorder
                }
            ]
        ])
    }, [
        _hoisted_1,
        _vue.createElementVNode("div", _hoisted_2, [
            $options.date ? (_vue.openBlock(), _vue.createElementBlock("div", _hoisted_3, [
                _vue.createElementVNode("span", _hoisted_4, _vue.toDisplayString($props.locale.format($options.date, "WWW")), 1),
                _vue.createElementVNode("span", _hoisted_5, _vue.toDisplayString($props.locale.format($options.date, "MMM")), 1),
                _vue.createElementVNode("span", _hoisted_6, _vue.toDisplayString($props.locale.format($options.date, "D")), 1),
                _vue.createElementVNode("span", _hoisted_7, _vue.toDisplayString($props.locale.format($options.date, "YYYY")), 1)
            ])) : _vue.createCommentVNode("", true),
            _vue.createElementVNode("div", _hoisted_8, [
                _vue.createVNode(_component_time_select, {
                    modelValue: $options.hours,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event)=>$options.hours = $event
                    ),
                    modelModifiers: {
                        number: true
                    },
                    options: $options.hourOptions_
                }, null, 8, [
                    "modelValue",
                    "options"
                ]),
                _hoisted_9,
                _vue.createVNode(_component_time_select, {
                    modelValue: $options.minutes,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event)=>$options.minutes = $event
                    ),
                    modelModifiers: {
                        number: true
                    },
                    options: $props.minuteOptions
                }, null, 8, [
                    "modelValue",
                    "options"
                ]),
                !$props.is24hr ? (_vue.openBlock(), _vue.createElementBlock("div", _hoisted_10, [
                    _vue.createElementVNode("button", {
                        class: _vue.normalizeClass({
                            active: $options.isAM,
                            "vc-disabled": $options.amDisabled
                        }),
                        onClick: _cache[2] || (_cache[2] = _vue.withModifiers(($event)=>$options.isAM = true
                        , [
                            "prevent"
                        ])),
                        type: "button"
                    }, " AM ", 2),
                    _vue.createElementVNode("button", {
                        class: _vue.normalizeClass({
                            active: !$options.isAM,
                            "vc-disabled": $options.pmDisabled
                        }),
                        onClick: _cache[3] || (_cache[3] = _vue.withModifiers(($event)=>$options.isAM = false
                        , [
                            "prevent"
                        ])),
                        type: "button"
                    }, " PM ", 2)
                ])) : _vue.createCommentVNode("", true)
            ])
        ])
    ], 2);
}
var TimePicker = /* @__PURE__ */ _export_sfc(_sfc_main$1, [
    [
        "render",
        _sfc_render
    ]
]);
const _baseConfig = {
    type: "auto",
    mask: "iso",
    timeAdjust: ""
};
const _config = [
    _baseConfig,
    _baseConfig
];
const MODE = {
    DATE: "date",
    DATE_TIME: "datetime",
    TIME: "time"
};
const RANGE_PRIORITY = {
    NONE: 0,
    START: 1,
    END: 2,
    BOTH: 3
};
const _sfc_main = {
    name: "DatePicker",
    emits: [
        "update:modelValue",
        "drag",
        "dayclick",
        "daykeydown",
        "popover-will-show",
        "popover-did-show",
        "popover-will-hide",
        "popover-did-hide"
    ],
    render () {
        const footer = (wrap, wrapperEl)=>{
            if (!this.$slots.footer) return wrap;
            const children = [
                wrap,
                this.$slots.footer()
            ];
            return wrapperEl ? _vue.h(wrapperEl, children) : children;
        };
        const timePicker = ()=>{
            if (!this.dateParts) return null;
            const parts = this.isRange ? this.dateParts : [
                this.dateParts[0]
            ];
            return _vue.h("div", {
            }, __spreadProps(__spreadValues({
            }, this.$slots), {
                default: ()=>parts.map((dp, idx)=>{
                        const hourOptions2 = this.$locale.getHourOptions(this.modelConfig_[idx].validHours, dp);
                        const minuteOptions = this.$locale.getMinuteOptions(this.modelConfig_[idx].minuteIncrement, dp);
                        return _vue.h(TimePicker, {
                            modelValue: dp,
                            locale: this.$locale,
                            theme: this.$theme,
                            is24hr: this.is24hr,
                            showBorder: !this.isTime,
                            isDisabled: this.isDateTime && !dp.isValid || this.isDragging,
                            hourOptions: hourOptions2,
                            minuteOptions,
                            "onUpdate:modelValue": (p)=>this.onTimeInput(p, idx === 0)
                        });
                    })
            }));
        };
        const calendar = ()=>_vue.h(_sfc_main$3, __spreadProps(__spreadValues({
            }, this.$attrs), {
                attributes: this.attributes_,
                theme: this.$theme,
                locale: this.$locale,
                minDate: this.minDateExact || this.minDate,
                maxDate: this.maxDateExact || this.maxDate,
                disabledDates: this.disabledDates,
                availableDates: this.availableDates,
                onDayclick: this.onDayClick,
                onDaykeydown: this.onDayKeydown,
                onDaymouseenter: this.onDayMouseEnter,
                ref: "calendar"
            }), __spreadProps(__spreadValues({
            }, this.$slots), {
                footer: ()=>this.isDateTime ? footer(timePicker()) : footer()
            }))
        ;
        const content = ()=>{
            if (this.isTime) return _vue.h("div", {
                class: [
                    "vc-container",
                    `vc-${this.$theme.color}`,
                    {
                        "vc-is-dark": this.$theme.isDark
                    }
                ]
            }, footer(timePicker(), "div"));
            return calendar();
        };
        return this.$slots.default ? _vue.h("div", [
            this.$slots.default(this.slotArgs),
            _vue.h(_sfc_main$9, {
                id: this.datePickerPopoverId,
                placement: "bottom-start",
                contentClass: `vc-container${this.isDark ? " vc-is-dark" : ""}`,
                "on-before-show": (e)=>this.$emit("popover-will-show", e)
                ,
                "on-after-show": (e)=>this.$emit("popover-did-show", e)
                ,
                "on-before-hide": (e)=>this.$emit("popover-will-hide", e)
                ,
                "on-after-hide": (e)=>this.$emit("popover-did-hide", e)
                ,
                ref: "popover"
            }, {
                default: content
            })
        ]) : content();
    },
    mixins: [
        rootMixin
    ],
    props: {
        mode: {
            type: String,
            default: MODE.DATE
        },
        modelValue: {
            type: null,
            required: true
        },
        modelConfig: {
            type: Object,
            default: ()=>({
                })
        },
        is24hr: Boolean,
        minuteIncrement: Number,
        isRequired: Boolean,
        isRange: Boolean,
        updateOnInput: {
            type: Boolean,
            default: ()=>getDefault("datePicker.updateOnInput")
        },
        inputDebounce: {
            type: Number,
            default: ()=>getDefault("datePicker.inputDebounce")
        },
        popover: {
            type: Object,
            default: ()=>({
                })
        },
        dragAttribute: Object,
        selectAttribute: Object,
        attributes: Array,
        validHours: [
            Object,
            Array,
            Function
        ]
    },
    data () {
        return {
            value_: null,
            dateParts: null,
            activeDate: "",
            dragValue: null,
            inputValues: [
                "",
                ""
            ],
            updateTimeout: null,
            watchValue: true,
            datePickerPopoverId: createGuid()
        };
    },
    computed: {
        isDate () {
            return this.mode.toLowerCase() === MODE.DATE;
        },
        isDateTime () {
            return this.mode.toLowerCase() === MODE.DATE_TIME;
        },
        isTime () {
            return this.mode.toLowerCase() === MODE.TIME;
        },
        isDragging () {
            return !!this.dragValue;
        },
        modelConfig_ () {
            return this.normalizeConfig(this.modelConfig, _config);
        },
        inputMask () {
            const masks2 = this.$locale.masks;
            if (this.isTime) return this.is24hr ? masks2.inputTime24hr : masks2.inputTime;
            if (this.isDateTime) return this.is24hr ? masks2.inputDateTime24hr : masks2.inputDateTime;
            return this.$locale.masks.input;
        },
        inputMaskHasTime () {
            return /[Hh]/g.test(this.inputMask);
        },
        inputMaskHasDate () {
            return /[dD]{1,2}|Do|W{1,4}|M{1,4}|YY(?:YY)?/g.test(this.inputMask);
        },
        inputMaskPatch () {
            if (this.inputMaskHasTime && this.inputMaskHasDate) return PATCH.DATE_TIME;
            if (this.inputMaskHasDate) return PATCH.DATE;
            if (this.inputMaskHasTime) return PATCH.TIME;
            return void 0;
        },
        slotArgs () {
            const { isRange , isDragging , updateValue , showPopover: showPopover2 , hidePopover: hidePopover2 , togglePopover: togglePopover2  } = this;
            const inputValue = isRange ? {
                start: this.inputValues[0],
                end: this.inputValues[1]
            } : this.inputValues[0];
            const events = [
                true,
                false
            ].map((isStart)=>__spreadValues({
                    input: this.onInputInput(isStart),
                    change: this.onInputChange(isStart),
                    keyup: this.onInputKeyup
                }, getPopoverTriggerEvents(__spreadProps(__spreadValues({
                }, this.popover_), {
                    id: this.datePickerPopoverId,
                    callback: (e)=>{
                        if (e.action === "show" && e.completed) this.onInputShow(isStart);
                    }
                })))
            );
            const inputEvents = isRange ? {
                start: events[0],
                end: events[1]
            } : events[0];
            return {
                inputValue,
                inputEvents,
                isDragging,
                updateValue,
                showPopover: showPopover2,
                hidePopover: hidePopover2,
                togglePopover: togglePopover2,
                getPopoverTriggerEvents
            };
        },
        popover_ () {
            return defaultsDeep_1(this.popover, getDefault("datePicker.popover"));
        },
        selectAttribute_ () {
            if (!this.hasValue(this.value_)) return null;
            const attribute = __spreadProps(__spreadValues({
                key: "select-drag"
            }, this.selectAttribute), {
                dates: this.value_,
                pinPage: true
            });
            const { dot , bar , highlight , content  } = attribute;
            if (!dot && !bar && !highlight && !content) attribute.highlight = true;
            return attribute;
        },
        dragAttribute_ () {
            if (!this.isRange || !this.hasValue(this.dragValue)) return null;
            const attribute = __spreadProps(__spreadValues({
                key: "select-drag"
            }, this.dragAttribute), {
                dates: this.dragValue
            });
            const { dot , bar , highlight , content  } = attribute;
            if (!dot && !bar && !highlight && !content) attribute.highlight = {
                startEnd: {
                    fillMode: "outline"
                }
            };
            return attribute;
        },
        attributes_ () {
            const attrs = isArrayLikeObject_1(this.attributes) ? [
                ...this.attributes
            ] : [];
            if (this.dragAttribute_) attrs.push(this.dragAttribute_);
            else if (this.selectAttribute_) attrs.push(this.selectAttribute_);
            return attrs;
        }
    },
    watch: {
        inputMask () {
            this.formatInput();
        },
        modelValue (val) {
            if (!this.watchValue) return;
            this.forceUpdateValue(val, {
                config: this.modelConfig_,
                formatInput: true,
                hidePopover: false
            });
        },
        value_ () {
            this.refreshDateParts();
        },
        dragValue () {
            this.refreshDateParts();
        },
        timezone () {
            this.refreshDateParts();
            this.forceUpdateValue(this.value_, {
                formatInput: true
            });
        }
    },
    created () {
        this.value_ = this.normalizeValue(this.modelValue, this.modelConfig_, PATCH.DATE_TIME, RANGE_PRIORITY.BOTH);
        this.forceUpdateValue(this.modelValue, {
            config: this.modelConfig_,
            formatInput: true,
            hidePopover: false
        });
        this.refreshDateParts();
    },
    mounted () {
        on(document, "keydown", this.onDocumentKeyDown);
        on(document, "click", this.onDocumentClick);
    },
    beforeUnmount () {
        off(document, "keydown", this.onDocumentKeyDown);
        off(document, "click", this.onDocumentClick);
    },
    methods: {
        getDateParts (date) {
            return this.$locale.getDateParts(date);
        },
        getDateFromParts (parts) {
            return this.$locale.getDateFromParts(parts);
        },
        refreshDateParts () {
            const value = this.dragValue || this.value_;
            const dateParts = [];
            if (this.isRange) {
                if (value && value.start) dateParts.push(this.getDateParts(value.start));
                else dateParts.push({
                });
                if (value && value.end) dateParts.push(this.getDateParts(value.end));
                else dateParts.push({
                });
            } else if (value) dateParts.push(this.getDateParts(value));
            else dateParts.push({
            });
            this.$nextTick(()=>this.dateParts = dateParts
            );
        },
        onDocumentKeyDown (e) {
            if (this.dragValue && e.key === "Escape") this.dragValue = null;
        },
        onDocumentClick (e) {
            if (document.body.contains(e.target) && !elementContains(this.$el, e.target)) {
                this.dragValue = null;
                this.formatInput();
            }
        },
        onDayClick (day) {
            this.handleDayClick(day);
            this.$emit("dayclick", day);
        },
        onDayKeydown (day) {
            switch(day.event.key){
                case " ":
                case "Enter":
                    this.handleDayClick(day);
                    day.event.preventDefault();
                    break;
                case "Escape":
                    this.hidePopover();
            }
            this.$emit("daykeydown", day);
        },
        handleDayClick (day) {
            const { keepVisibleOnInput , visibility  } = this.popover_;
            const opts = {
                patch: PATCH.DATE,
                adjustTime: true,
                formatInput: true,
                hidePopover: this.isDate && !keepVisibleOnInput && visibility !== "visible"
            };
            if (this.isRange) {
                if (!this.isDragging) this.dragTrackingValue = __spreadValues({
                }, day.range);
                else this.dragTrackingValue.end = day.date;
                opts.isDragging = !this.isDragging;
                opts.rangePriority = opts.isDragging ? RANGE_PRIORITY.NONE : RANGE_PRIORITY.BOTH;
                opts.hidePopover = opts.hidePopover && !opts.isDragging;
                this.updateValue(this.dragTrackingValue, opts);
            } else {
                opts.clearIfEqual = !this.isRequired;
                this.updateValue(day.date, opts);
            }
        },
        onDayMouseEnter (day) {
            if (!this.isDragging) return;
            this.dragTrackingValue.end = day.date;
            this.updateValue(this.dragTrackingValue, {
                patch: PATCH.DATE,
                adjustTime: true,
                formatInput: true,
                hidePriority: false,
                rangePriority: RANGE_PRIORITY.NONE
            });
        },
        onTimeInput (parts, isStart) {
            let value = null;
            if (this.isRange) {
                const start = isStart ? parts : this.dateParts[0];
                const end = isStart ? this.dateParts[1] : parts;
                value = {
                    start,
                    end
                };
            } else value = parts;
            this.updateValue(value, {
                patch: PATCH.TIME,
                rangePriority: isStart ? RANGE_PRIORITY.START : RANGE_PRIORITY.END
            }).then(()=>this.adjustPageRange(isStart)
            );
        },
        onInputInput (isStart) {
            return (e)=>{
                if (!this.updateOnInput) return;
                this.onInputUpdate(e.target.value, isStart, {
                    formatInput: false,
                    hidePopover: false,
                    debounce: this.inputDebounce
                });
            };
        },
        onInputChange (isStart) {
            return (e)=>{
                this.onInputUpdate(e.target.value, isStart, {
                    formatInput: true,
                    hidePopover: false
                });
            };
        },
        onInputUpdate (inputValue, isStart, opts) {
            this.inputValues.splice(isStart ? 0 : 1, 1, inputValue);
            const value = this.isRange ? {
                start: this.inputValues[0],
                end: this.inputValues[1] || this.inputValues[0]
            } : inputValue;
            const config = {
                type: "string",
                mask: this.inputMask
            };
            this.updateValue(value, __spreadProps(__spreadValues({
            }, opts), {
                config,
                patch: this.inputMaskPatch,
                rangePriority: isStart ? RANGE_PRIORITY.START : RANGE_PRIORITY.END
            })).then(()=>this.adjustPageRange(isStart)
            );
        },
        onInputShow (isStart) {
            this.adjustPageRange(isStart);
        },
        onInputKeyup (e) {
            if (e.key !== "Escape") return;
            this.updateValue(this.value_, {
                formatInput: true,
                hidePopover: true
            });
        },
        updateValue (value, opts = {
        }) {
            clearTimeout(this.updateTimeout);
            return new Promise((resolve)=>{
                const _a = opts, { debounce  } = _a, args = __objRest(_a, [
                    "debounce"
                ]);
                if (debounce > 0) this.updateTimeout = setTimeout(()=>{
                    this.forceUpdateValue(value, args);
                    resolve(this.value_);
                }, debounce);
                else {
                    this.forceUpdateValue(value, args);
                    resolve(this.value_);
                }
            });
        },
        normalizeConfig (config, baseConfig = this.modelConfig_) {
            config = isArrayLikeObject_1(config) ? config : [
                config.start || config,
                config.end || config
            ];
            return baseConfig.map((b, i)=>__spreadValues(__spreadValues({
                    validHours: this.validHours,
                    minuteIncrement: this.minuteIncrement
                }, b), config[i])
            );
        },
        forceUpdateValue (value, { config =this.modelConfig_ , patch =PATCH.DATE_TIME , clearIfEqual =false , formatInput =true , hidePopover: hidePopover2 = false , isDragging =this.isDragging , rangePriority =RANGE_PRIORITY.BOTH  } = {
        }) {
            config = this.normalizeConfig(config);
            let normalizedValue = this.normalizeValue(value, config, patch, rangePriority);
            if (!normalizedValue && this.isRequired) normalizedValue = this.value_;
            normalizedValue = this.adjustTimeForValue(normalizedValue, config);
            const isDisabled = this.valueIsDisabled(normalizedValue);
            if (isDisabled) {
                if (isDragging) return;
                normalizedValue = this.value_;
                hidePopover2 = false;
            }
            const valueKey = isDragging ? "dragValue" : "value_";
            let valueChanged = !this.valuesAreEqual(this[valueKey], normalizedValue);
            if (!isDisabled && !valueChanged && clearIfEqual) {
                normalizedValue = null;
                valueChanged = true;
            }
            if (valueChanged) {
                this[valueKey] = normalizedValue;
                if (!isDragging) this.dragValue = null;
                const denormalizedValue = this.denormalizeValue(normalizedValue);
                const event = this.isDragging ? "drag" : "update:modelValue";
                this.watchValue = false;
                this.$emit(event, denormalizedValue);
                this.$nextTick(()=>this.watchValue = true
                );
            }
            if (hidePopover2) this.hidePopover();
            if (formatInput) this.formatInput();
        },
        hasValue (value) {
            if (this.isRange) return isObject(value) && !!value.start && !!value.end;
            return !!value;
        },
        normalizeValue (value, config, patch, rangePriority) {
            if (!this.hasValue(value)) return null;
            if (this.isRange) {
                const result = {
                };
                const start = value.start > value.end ? value.end : value.start;
                result.start = this.normalizeDate(start, __spreadProps(__spreadValues({
                }, config[0]), {
                    fillDate: this.value_ && this.value_.start || config[0].fillDate,
                    patch
                }));
                const end = value.start > value.end ? value.start : value.end;
                result.end = this.normalizeDate(end, __spreadProps(__spreadValues({
                }, config[1]), {
                    fillDate: this.value_ && this.value_.end || config[1].fillDate,
                    patch
                }));
                return this.sortRange(result, rangePriority);
            }
            return this.normalizeDate(value, __spreadProps(__spreadValues({
            }, config[0]), {
                fillDate: this.value_ || config[0].fillDate,
                patch
            }));
        },
        adjustTimeForValue (value, config) {
            if (!this.hasValue(value)) return null;
            if (this.isRange) return {
                start: this.$locale.adjustTimeForDate(value.start, config[0]),
                end: this.$locale.adjustTimeForDate(value.end, config[1])
            };
            return this.$locale.adjustTimeForDate(value, config[0]);
        },
        sortRange (range, priority = RANGE_PRIORITY.NONE) {
            const { start , end  } = range;
            if (start > end) switch(priority){
                case RANGE_PRIORITY.START:
                    return {
                        start,
                        end: start
                    };
                case RANGE_PRIORITY.END:
                    return {
                        start: end,
                        end
                    };
                case RANGE_PRIORITY.BOTH:
                    return {
                        start: end,
                        end: start
                    };
            }
            return {
                start,
                end
            };
        },
        denormalizeValue (value, config = this.modelConfig_) {
            if (this.isRange) {
                if (!this.hasValue(value)) return null;
                return {
                    start: this.$locale.denormalizeDate(value.start, config[0]),
                    end: this.$locale.denormalizeDate(value.end, config[1])
                };
            }
            return this.$locale.denormalizeDate(value, config[0]);
        },
        valuesAreEqual (a, b) {
            if (this.isRange) {
                const aHasValue = this.hasValue(a);
                const bHasValue = this.hasValue(b);
                if (!aHasValue && !bHasValue) return true;
                if (aHasValue !== bHasValue) return false;
                return datesAreEqual(a.start, b.start) && datesAreEqual(a.end, b.end);
            }
            return datesAreEqual(a, b);
        },
        valueIsDisabled (value) {
            return this.hasValue(value) && this.disabledAttribute && this.disabledAttribute.intersectsDate(value);
        },
        formatInput () {
            this.$nextTick(()=>{
                const config = this.normalizeConfig({
                    type: "string",
                    mask: this.inputMask
                });
                const value = this.denormalizeValue(this.dragValue || this.value_, config);
                if (this.isRange) this.inputValues = [
                    value && value.start,
                    value && value.end
                ];
                else this.inputValues = [
                    value,
                    ""
                ];
            });
        },
        showPopover (opts = {
        }) {
            showPopover(__spreadProps(__spreadValues(__spreadValues({
                ref: this.$el
            }, this.popover_), opts), {
                isInteractive: true,
                id: this.datePickerPopoverId
            }));
        },
        hidePopover (opts = {
        }) {
            hidePopover(__spreadProps(__spreadValues(__spreadValues({
                hideDelay: 10
            }, this.showPopover_), opts), {
                id: this.datePickerPopoverId
            }));
        },
        togglePopover (opts) {
            togglePopover(__spreadProps(__spreadValues(__spreadValues({
                ref: this.$el
            }, this.popover_), opts), {
                isInteractive: true,
                id: this.datePickerPopoverId
            }));
        },
        adjustPageRange (isStart) {
            this.$nextTick(()=>{
                const calendar = this.$refs.calendar;
                const page = this.getPageForValue(isStart);
                const position = isStart ? 1 : -1;
                if (page && calendar && !pageIsBetweenPages(page, calendar.firstPage, calendar.lastPage)) calendar.move(page, {
                    position,
                    transition: "fade"
                });
            });
        },
        getPageForValue (isStart) {
            if (this.hasValue(this.value_)) return this.pageForDate(this.isRange ? this.value_[isStart ? "start" : "end"] : this.value_);
            return null;
        },
        move (args, opts) {
            if (this.$refs.calendar) return this.$refs.calendar.move(args, opts);
            return Promise.reject(new Error("Navigation disabled while calendar is not yet displayed"));
        },
        focusDate (date, opts) {
            if (this.$refs.calendar) return this.$refs.calendar.focusDate(date, opts);
            return Promise.reject(new Error("Navigation disabled while calendar is not yet displayed"));
        }
    }
};
var components = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    Calendar: _sfc_main$3,
    DatePicker: _sfc_main,
    Popover: _sfc_main$9,
    PopoverRow
});
function buildMediaQuery(screens) {
    if (isString_1(screens)) screens = {
        min: screens
    };
    if (!isArrayLikeObject_1(screens)) screens = [
        screens
    ];
    return screens.map((screen)=>{
        if (has(screen, "raw")) return screen.raw;
        return map_1(screen, (value, feature)=>{
            feature = get_1({
                min: "min-width",
                max: "max-width"
            }, feature, feature);
            return `(${feature}: ${value})`;
        }).join(" and ");
    }).join(", ");
}
var screensPlugin = {
    install: (app, screens)=>{
        screens = defaultsDeep_1(screens, window && window.__screens__, defaultScreens);
        let shouldRefreshQueries = true;
        const state2 = _vue.reactive({
            matches: [],
            queries: []
        });
        const refreshMatches = ()=>{
            state2.matches = toPairs_1(state2.queries).filter((p)=>p[1].matches
            ).map((p)=>p[0]
            );
        };
        const refreshQueries = ()=>{
            if (!shouldRefreshQueries || !window || !window.matchMedia) return;
            state2.queries = mapValues_1(screens, (v)=>{
                const query = window.matchMedia(buildMediaQuery(v));
                if (isFunction_1(query.addEventListener)) query.addEventListener("change", refreshMatches);
                else query.addListener(refreshMatches);
                return query;
            });
            shouldRefreshQueries = false;
            refreshMatches();
        };
        app.mixin({
            mounted () {
                refreshQueries();
            },
            computed: {
                $screens () {
                    return (config, def)=>state2.matches.reduce((prev, curr)=>has(config, curr) ? config[curr] : prev
                        , isUndefined_1(def) ? config.default : def)
                    ;
                }
            }
        });
    }
};
var setup = (app, defaults2)=>{
    const { screens  } = setupDefaults(app, defaults2);
    app.use(screensPlugin, screens);
};
var main = "";
const install = (app, defaults2 = {
})=>{
    app.use(setup, defaults2);
    const prefix = app.config.globalProperties.$VCalendar.componentPrefix;
    for(const componentKey in components){
        const component = components[componentKey];
        app.component(`${prefix}${component.name}`, component);
    }
};
var index = {
    install
};

},{"vue":"gzxs9","@popperjs/core":"1PuRF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1PuRF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPopper", ()=>createPopper
);
parcelHelpers.export(exports, "popperGenerator", ()=>_indexJs.popperGenerator
);
parcelHelpers.export(exports, "defaultModifiers", ()=>defaultModifiers
);
parcelHelpers.export(exports, "detectOverflow", ()=>_detectOverflowJsDefault.default
);
var _indexJs = require("./index.js");
var _eventListenersJs = require("./modifiers/eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _popperOffsetsJs = require("./modifiers/popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _computeStylesJs = require("./modifiers/computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _applyStylesJs = require("./modifiers/applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var _offsetJs = require("./modifiers/offset.js");
var _offsetJsDefault = parcelHelpers.interopDefault(_offsetJs);
var _flipJs = require("./modifiers/flip.js");
var _flipJsDefault = parcelHelpers.interopDefault(_flipJs);
var _preventOverflowJs = require("./modifiers/preventOverflow.js");
var _preventOverflowJsDefault = parcelHelpers.interopDefault(_preventOverflowJs);
var _arrowJs = require("./modifiers/arrow.js");
var _arrowJsDefault = parcelHelpers.interopDefault(_arrowJs);
var _hideJs = require("./modifiers/hide.js");
var _hideJsDefault = parcelHelpers.interopDefault(_hideJs);
var _detectOverflowJs = require("./utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var defaultModifiers = [
    _eventListenersJsDefault.default,
    _popperOffsetsJsDefault.default,
    _computeStylesJsDefault.default,
    _applyStylesJsDefault.default,
    _offsetJsDefault.default,
    _flipJsDefault.default,
    _preventOverflowJsDefault.default,
    _arrowJsDefault.default,
    _hideJsDefault.default
];
var createPopper = /*#__PURE__*/ _indexJs.popperGenerator({
    defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

},{"./index.js":"7unqC","./modifiers/eventListeners.js":"hBKsL","./modifiers/popperOffsets.js":"6I679","./modifiers/computeStyles.js":"gDlm2","./modifiers/applyStyles.js":"4iMn4","./modifiers/offset.js":"3GKVY","./modifiers/flip.js":"fv5wq","./modifiers/preventOverflow.js":"1AMhb","./modifiers/arrow.js":"31HFW","./modifiers/hide.js":"2g4OF","./utils/detectOverflow.js":"ltCuw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7unqC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "popperGenerator", ()=>popperGenerator
);
parcelHelpers.export(exports, "createPopper", ()=>createPopper
);
var _getCompositeRectJs = require("./dom-utils/getCompositeRect.js");
var _getCompositeRectJsDefault = parcelHelpers.interopDefault(_getCompositeRectJs);
var _getLayoutRectJs = require("./dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _listScrollParentsJs = require("./dom-utils/listScrollParents.js");
var _listScrollParentsJsDefault = parcelHelpers.interopDefault(_listScrollParentsJs);
var _getOffsetParentJs = require("./dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getComputedStyleJs = require("./dom-utils/getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _orderModifiersJs = require("./utils/orderModifiers.js");
var _orderModifiersJsDefault = parcelHelpers.interopDefault(_orderModifiersJs);
var _debounceJs = require("./utils/debounce.js");
var _debounceJsDefault = parcelHelpers.interopDefault(_debounceJs);
var _validateModifiersJs = require("./utils/validateModifiers.js");
var _validateModifiersJsDefault = parcelHelpers.interopDefault(_validateModifiersJs);
var _uniqueByJs = require("./utils/uniqueBy.js");
var _uniqueByJsDefault = parcelHelpers.interopDefault(_uniqueByJs);
var _getBasePlacementJs = require("./utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _mergeByNameJs = require("./utils/mergeByName.js");
var _mergeByNameJsDefault = parcelHelpers.interopDefault(_mergeByNameJs);
var _instanceOfJs = require("./dom-utils/instanceOf.js");
var _enumsJs = require("./enums.js");
parcelHelpers.exportAll(_enumsJs, exports);
var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
    placement: 'bottom',
    modifiers: [],
    strategy: 'absolute'
};
function areValidElements() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    return !args.some(function(element) {
        return !(element && typeof element.getBoundingClientRect === 'function');
    });
}
function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) generatorOptions = {
    };
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference1, popper1, options1) {
        if (options1 === void 0) options1 = defaultOptions;
        var state1 = {
            placement: 'bottom',
            orderedModifiers: [],
            options: Object.assign({
            }, DEFAULT_OPTIONS, {
            }, defaultOptions),
            modifiersData: {
            },
            elements: {
                reference: reference1,
                popper: popper1
            },
            attributes: {
            },
            styles: {
            }
        };
        var effectCleanupFns = [];
        var isDestroyed = false;
        var instance = {
            state: state1,
            setOptions: function setOptions(options) {
                cleanupModifierEffects();
                state1.options = Object.assign({
                }, defaultOptions, {
                }, state1.options, {
                }, options);
                state1.scrollParents = {
                    reference: _instanceOfJs.isElement(reference1) ? _listScrollParentsJsDefault.default(reference1) : reference1.contextElement ? _listScrollParentsJsDefault.default(reference1.contextElement) : [],
                    popper: _listScrollParentsJsDefault.default(popper1)
                }; // Orders the modifiers based on their dependencies and `phase`
                // properties
                var orderedModifiers = _orderModifiersJsDefault.default(_mergeByNameJsDefault.default([].concat(defaultModifiers, state1.options.modifiers))); // Strip out disabled modifiers
                state1.orderedModifiers = orderedModifiers.filter(function(m) {
                    return m.enabled;
                }); // Validate the provided modifiers so that the consumer will get warned
                var modifiers = _uniqueByJsDefault.default([].concat(orderedModifiers, state1.options.modifiers), function(_ref) {
                    var name = _ref.name;
                    return name;
                });
                _validateModifiersJsDefault.default(modifiers);
                if (_getBasePlacementJsDefault.default(state1.options.placement) === _enumsJs.auto) {
                    var flipModifier = state1.orderedModifiers.find(function(_ref2) {
                        var name = _ref2.name;
                        return name === 'flip';
                    });
                    if (!flipModifier) console.error([
                        'Popper: "auto" placements require the "flip" modifier be',
                        'present and enabled to work.'
                    ].join(' '));
                }
                var _getComputedStyle = _getComputedStyleJsDefault.default(popper1), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
                // cause bugs with positioning, so we'll warn the consumer
                if ([
                    marginTop,
                    marginRight,
                    marginBottom,
                    marginLeft
                ].some(function(margin) {
                    return parseFloat(margin);
                })) console.warn([
                    'Popper: CSS "margin" styles cannot be used to apply padding',
                    'between the popper and its reference element or boundary.',
                    'To replicate margin, use the `offset` modifier, as well as',
                    'the `padding` option in the `preventOverflow` and `flip`',
                    'modifiers.'
                ].join(' '));
                runModifierEffects();
                return instance.update();
            },
            // Sync update – it will always be executed, even if not necessary. This
            // is useful for low frequency updates where sync behavior simplifies the
            // logic.
            // For high frequency updates (e.g. `resize` and `scroll` events), always
            // prefer the async Popper#update method
            forceUpdate: function forceUpdate() {
                if (isDestroyed) return;
                var _state$elements = state1.elements, reference = _state$elements.reference, popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
                // anymore
                if (!areValidElements(reference, popper)) {
                    console.error(INVALID_ELEMENT_ERROR);
                    return;
                } // Store the reference and popper rects to be read by modifiers
                state1.rects = {
                    reference: _getCompositeRectJsDefault.default(reference, _getOffsetParentJsDefault.default(popper), state1.options.strategy === 'fixed'),
                    popper: _getLayoutRectJsDefault.default(popper)
                }; // Modifiers have the ability to reset the current update cycle. The
                // most common use case for this is the `flip` modifier changing the
                // placement, which then needs to re-run all the modifiers, because the
                // logic was previously ran for the previous placement and is therefore
                // stale/incorrect
                state1.reset = false;
                state1.placement = state1.options.placement; // On each update cycle, the `modifiersData` property for each modifier
                // is filled with the initial data specified by the modifier. This means
                // it doesn't persist and is fresh on each update.
                // To ensure persistent data, use `${name}#persistent`
                state1.orderedModifiers.forEach(function(modifier) {
                    return state1.modifiersData[modifier.name] = Object.assign({
                    }, modifier.data);
                });
                var __debug_loops__ = 0;
                for(var index = 0; index < state1.orderedModifiers.length; index++){
                    __debug_loops__ += 1;
                    if (__debug_loops__ > 100) {
                        console.error(INFINITE_LOOP_ERROR);
                        break;
                    }
                    if (state1.reset === true) {
                        state1.reset = false;
                        index = -1;
                        continue;
                    }
                    var _state$orderedModifie = state1.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {
                    } : _state$orderedModifie2, name = _state$orderedModifie.name;
                    if (typeof fn === 'function') state1 = fn({
                        state: state1,
                        options: _options,
                        name: name,
                        instance: instance
                    }) || state1;
                }
            },
            // Async and optimistically optimized update – it will not be executed if
            // not necessary (debounced to run at most once-per-tick)
            update: _debounceJsDefault.default(function() {
                return new Promise(function(resolve) {
                    instance.forceUpdate();
                    resolve(state1);
                });
            }),
            destroy: function destroy() {
                cleanupModifierEffects();
                isDestroyed = true;
            }
        };
        if (!areValidElements(reference1, popper1)) {
            console.error(INVALID_ELEMENT_ERROR);
            return instance;
        }
        instance.setOptions(options1).then(function(state) {
            if (!isDestroyed && options1.onFirstUpdate) options1.onFirstUpdate(state);
        }); // Modifiers have the ability to execute arbitrary code before the first
        // update cycle runs. They will be executed in the same order as the update
        // cycle. This is useful when a modifier adds some persistent data that
        // other modifiers need to use, but the modifier is run after the dependent
        // one.
        function runModifierEffects() {
            state1.orderedModifiers.forEach(function(_ref3) {
                var name = _ref3.name, _ref3$options = _ref3.options, options = _ref3$options === void 0 ? {
                } : _ref3$options, effect = _ref3.effect;
                if (typeof effect === 'function') {
                    var cleanupFn = effect({
                        state: state1,
                        name: name,
                        instance: instance,
                        options: options
                    });
                    var noopFn = function noopFn() {
                    };
                    effectCleanupFns.push(cleanupFn || noopFn);
                }
            });
        }
        function cleanupModifierEffects() {
            effectCleanupFns.forEach(function(fn) {
                return fn();
            });
            effectCleanupFns = [];
        }
        return instance;
    };
}
var createPopper = /*#__PURE__*/ popperGenerator();

},{"./dom-utils/getCompositeRect.js":"ijPls","./dom-utils/getLayoutRect.js":"jvjuf","./dom-utils/listScrollParents.js":"2di3T","./dom-utils/getOffsetParent.js":"laoYw","./dom-utils/getComputedStyle.js":"3mZjB","./utils/orderModifiers.js":"N0VO0","./utils/debounce.js":"g6Chr","./utils/validateModifiers.js":"1S5dQ","./utils/uniqueBy.js":"hhl2M","./utils/getBasePlacement.js":"59Wp3","./utils/mergeByName.js":"2zTVN","./dom-utils/instanceOf.js":"gYFUC","./enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ijPls":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getNodeScrollJs = require("./getNodeScroll.js");
var _getNodeScrollJsDefault = parcelHelpers.interopDefault(_getNodeScrollJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("./instanceOf.js");
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _isScrollParentJs = require("./isScrollParent.js"); // Returns the composite rect of an element relative to its offsetParent.
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) isFixed = false;
    var documentElement = _getDocumentElementJsDefault.default(offsetParent);
    var rect = _getBoundingClientRectJsDefault.default(elementOrVirtualElement);
    var scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    var offsets = {
        x: 0,
        y: 0
    };
    if (!isFixed) {
        if (_getNodeNameJsDefault.default(offsetParent) !== 'body' || _isScrollParentJsDefault.default(documentElement)) scroll = _getNodeScrollJsDefault.default(offsetParent);
        if (_instanceOfJs.isHTMLElement(offsetParent)) {
            offsets = _getBoundingClientRectJsDefault.default(offsetParent);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
        } else if (documentElement) offsets.x = _getWindowScrollBarXJsDefault.default(documentElement);
    }
    return {
        x: rect.left + scroll.scrollLeft - offsets.x,
        y: rect.top + scroll.scrollTop - offsets.y,
        width: rect.width,
        height: rect.height
    };
}
exports.default = getCompositeRect;

},{"./getBoundingClientRect.js":"9CFSQ","./getNodeScroll.js":"bBjCr","./getNodeName.js":"a2Qom","./instanceOf.js":"gYFUC","./getWindowScrollBarX.js":"sz4Ld","./getDocumentElement.js":"eJ9Y1","./isScrollParent.js":"9rLGO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9CFSQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getBoundingClientRect(element) {
    var rect = element.getBoundingClientRect();
    return {
        width: rect.width,
        height: rect.height,
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        x: rect.left,
        y: rect.top
    };
}
exports.default = getBoundingClientRect;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bBjCr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _instanceOfJs = require("./instanceOf.js");
var _getHTMLElementScrollJs = require("./getHTMLElementScroll.js");
var _getHTMLElementScrollJsDefault = parcelHelpers.interopDefault(_getHTMLElementScrollJs);
function getNodeScroll(node) {
    if (node === _getWindowJsDefault.default(node) || !_instanceOfJs.isHTMLElement(node)) return _getWindowScrollJsDefault.default(node);
    else return _getHTMLElementScrollJsDefault.default(node);
}
exports.default = getNodeScroll;

},{"./getWindowScroll.js":"1XUtN","./getWindow.js":"2SkOo","./instanceOf.js":"gYFUC","./getHTMLElementScroll.js":"6pwY2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1XUtN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function getWindowScroll(node) {
    var win = _getWindowJsDefault.default(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
    };
}
exports.default = getWindowScroll;

},{"./getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2SkOo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getWindow(node) {
    if (node.toString() !== '[object Window]') {
        var ownerDocument = node.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView : window;
    }
    return node;
}
exports.default = getWindow;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gYFUC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isElement", ()=>isElement
);
parcelHelpers.export(exports, "isHTMLElement", ()=>isHTMLElement
);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
/*:: declare function isElement(node: mixed): boolean %checks(node instanceof
  Element); */ function isElement(node) {
    var OwnElement = _getWindowJsDefault.default(node).Element;
    return node instanceof OwnElement || node instanceof Element;
}
/*:: declare function isHTMLElement(node: mixed): boolean %checks(node instanceof
  HTMLElement); */ function isHTMLElement(node) {
    var OwnElement = _getWindowJsDefault.default(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
}

},{"./getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6pwY2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getHTMLElementScroll(element) {
    return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
    };
}
exports.default = getHTMLElementScroll;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a2Qom":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getNodeName(element) {
    return element ? (element.nodeName || '').toLowerCase() : null;
}
exports.default = getNodeName;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"sz4Ld":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return _getBoundingClientRectJsDefault.default(_getDocumentElementJsDefault.default(element)).left + _getWindowScrollJsDefault.default(element).scrollLeft;
}
exports.default = getWindowScrollBarX;

},{"./getBoundingClientRect.js":"9CFSQ","./getDocumentElement.js":"eJ9Y1","./getWindowScroll.js":"1XUtN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eJ9Y1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _instanceOfJs = require("./instanceOf.js");
function getDocumentElement(element) {
    // $FlowFixMe: assume body is always available
    return (_instanceOfJs.isElement(element) ? element.ownerDocument : element.document).documentElement;
}
exports.default = getDocumentElement;

},{"./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9rLGO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = _getComputedStyleJsDefault.default(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
exports.default = isScrollParent;

},{"./getComputedStyle.js":"3mZjB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3mZjB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function getComputedStyle(element) {
    return _getWindowJsDefault.default(element).getComputedStyle(element);
}
exports.default = getComputedStyle;

},{"./getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jvjuf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getLayoutRect(element) {
    return {
        x: element.offsetLeft,
        y: element.offsetTop,
        width: element.offsetWidth,
        height: element.offsetHeight
    };
}
exports.default = getLayoutRect;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2di3T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getScrollParentJs = require("./getScrollParent.js");
var _getScrollParentJsDefault = parcelHelpers.interopDefault(_getScrollParentJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
function listScrollParents(element, list) {
    if (list === void 0) list = [];
    var scrollParent = _getScrollParentJsDefault.default(element);
    var isBody = _getNodeNameJsDefault.default(scrollParent) === 'body';
    var win = _getWindowJsDefault.default(scrollParent);
    var target = isBody ? [
        win
    ].concat(win.visualViewport || [], _isScrollParentJsDefault.default(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : updatedList.concat(listScrollParents(_getParentNodeJsDefault.default(target)));
}
exports.default = listScrollParents;

},{"./getScrollParent.js":"jy4ZS","./getParentNode.js":"bIHpd","./getNodeName.js":"a2Qom","./getWindow.js":"2SkOo","./isScrollParent.js":"9rLGO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jy4ZS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("./instanceOf.js");
function getScrollParent(node) {
    if ([
        'html',
        'body',
        '#document'
    ].indexOf(_getNodeNameJsDefault.default(node)) >= 0) // $FlowFixMe: assume body is always available
    return node.ownerDocument.body;
    if (_instanceOfJs.isHTMLElement(node) && _isScrollParentJsDefault.default(node)) return node;
    return getScrollParent(_getParentNodeJsDefault.default(node));
}
exports.default = getScrollParent;

},{"./getParentNode.js":"bIHpd","./isScrollParent.js":"9rLGO","./getNodeName.js":"a2Qom","./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bIHpd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
function getParentNode(element) {
    if (_getNodeNameJsDefault.default(element) === 'html') return element;
    return element.assignedSlot || element.parentNode || // $FlowFixMe: need a better way to handle this...
    element.host || // $FlowFixMe: HTMLElement is a Node
    _getDocumentElementJsDefault.default(element) // fallback
    ;
}
exports.default = getParentNode;

},{"./getNodeName.js":"a2Qom","./getDocumentElement.js":"eJ9Y1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"laoYw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _instanceOfJs = require("./instanceOf.js");
var _isTableElementJs = require("./isTableElement.js");
var _isTableElementJsDefault = parcelHelpers.interopDefault(_isTableElementJs);
function getTrueOffsetParent(element) {
    if (!_instanceOfJs.isHTMLElement(element) || _getComputedStyleJsDefault.default(element).position === 'fixed') return null;
    return element.offsetParent;
}
function getOffsetParent(element) {
    var window = _getWindowJsDefault.default(element);
    var offsetParent = getTrueOffsetParent(element); // Find the nearest non-table offsetParent
    while(offsetParent && _isTableElementJsDefault.default(offsetParent))offsetParent = getTrueOffsetParent(offsetParent);
    if (offsetParent && _getNodeNameJsDefault.default(offsetParent) === 'body' && _getComputedStyleJsDefault.default(offsetParent).position === 'static') return window;
    return offsetParent || window;
}
exports.default = getOffsetParent;

},{"./getWindow.js":"2SkOo","./getNodeName.js":"a2Qom","./getComputedStyle.js":"3mZjB","./instanceOf.js":"gYFUC","./isTableElement.js":"2qBb7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2qBb7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
function isTableElement(element) {
    return [
        'table',
        'td',
        'th'
    ].indexOf(_getNodeNameJsDefault.default(element)) >= 0;
}
exports.default = isTableElement;

},{"./getNodeName.js":"a2Qom","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"N0VO0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js"); // source: https://stackoverflow.com/questions/49875255
function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
        map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively
    function sort(modifier) {
        visited.add(modifier.name);
        var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
        requires.forEach(function(dep) {
            if (!visited.has(dep)) {
                var depModifier = map.get(dep);
                if (depModifier) sort(depModifier);
            }
        });
        result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
        if (!visited.has(modifier.name)) // check for visited object
        sort(modifier);
    });
    return result;
}
function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers); // order based on phase
    return _enumsJs.modifierPhases.reduce(function(acc, phase) {
        return acc.concat(orderedModifiers.filter(function(modifier) {
            return modifier.phase === phase;
        }));
    }, []);
}
exports.default = orderModifiers;

},{"../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lCAq5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "top", ()=>top
);
parcelHelpers.export(exports, "bottom", ()=>bottom
);
parcelHelpers.export(exports, "right", ()=>right
);
parcelHelpers.export(exports, "left", ()=>left
);
parcelHelpers.export(exports, "auto", ()=>auto
);
parcelHelpers.export(exports, "basePlacements", ()=>basePlacements
);
parcelHelpers.export(exports, "start", ()=>start
);
parcelHelpers.export(exports, "end", ()=>end
);
parcelHelpers.export(exports, "clippingParents", ()=>clippingParents
);
parcelHelpers.export(exports, "viewport", ()=>viewport
);
parcelHelpers.export(exports, "popper", ()=>popper
);
parcelHelpers.export(exports, "reference", ()=>reference
);
parcelHelpers.export(exports, "variationPlacements", ()=>variationPlacements
);
parcelHelpers.export(exports, "placements", ()=>placements
);
parcelHelpers.export(exports, "beforeRead", ()=>beforeRead
);
parcelHelpers.export(exports, "read", ()=>read
);
parcelHelpers.export(exports, "afterRead", ()=>afterRead
);
parcelHelpers.export(exports, "beforeMain", ()=>beforeMain
);
parcelHelpers.export(exports, "main", ()=>main
);
parcelHelpers.export(exports, "afterMain", ()=>afterMain
);
parcelHelpers.export(exports, "beforeWrite", ()=>beforeWrite
);
parcelHelpers.export(exports, "write", ()=>write
);
parcelHelpers.export(exports, "afterWrite", ()=>afterWrite
);
parcelHelpers.export(exports, "modifierPhases", ()=>modifierPhases
);
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [
    top,
    bottom,
    right,
    left
];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/ basePlacements.reduce(function(acc, placement) {
    return acc.concat([
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []);
var placements = /*#__PURE__*/ [].concat(basePlacements, [
    auto
]).reduce(function(acc, placement) {
    return acc.concat([
        placement,
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []); // modifiers that need to read the DOM
var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers
var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)
var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [
    beforeRead,
    read,
    afterRead,
    beforeMain,
    main,
    afterMain,
    beforeWrite,
    write,
    afterWrite
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g6Chr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function debounce(fn) {
    var pending;
    return function() {
        if (!pending) pending = new Promise(function(resolve) {
            Promise.resolve().then(function() {
                pending = undefined;
                resolve(fn());
            });
        });
        return pending;
    };
}
exports.default = debounce;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1S5dQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _formatJs = require("./format.js");
var _formatJsDefault = parcelHelpers.interopDefault(_formatJs);
var _enumsJs = require("../enums.js");
var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = [
    'name',
    'enabled',
    'phase',
    'fn',
    'effect',
    'requires',
    'options'
];
function validateModifiers(modifiers) {
    modifiers.forEach(function(modifier) {
        Object.keys(modifier).forEach(function(key) {
            switch(key){
                case 'name':
                    if (typeof modifier.name !== 'string') console.error(_formatJsDefault.default(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
                    break;
                case 'enabled':
                    if (typeof modifier.enabled !== 'boolean') console.error(_formatJsDefault.default(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
                case 'phase':
                    if (_enumsJs.modifierPhases.indexOf(modifier.phase) < 0) console.error(_formatJsDefault.default(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + _enumsJs.modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
                    break;
                case 'fn':
                    if (typeof modifier.fn !== 'function') console.error(_formatJsDefault.default(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
                    break;
                case 'effect':
                    if (typeof modifier.effect !== 'function') console.error(_formatJsDefault.default(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
                    break;
                case 'requires':
                    if (!Array.isArray(modifier.requires)) console.error(_formatJsDefault.default(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
                    break;
                case 'requiresIfExists':
                    if (!Array.isArray(modifier.requiresIfExists)) console.error(_formatJsDefault.default(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
                    break;
                case 'options':
                case 'data':
                    break;
                default:
                    console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function(s) {
                        return "\"" + s + "\"";
                    }).join(', ') + "; but \"" + key + "\" was provided.");
            }
            modifier.requires && modifier.requires.forEach(function(requirement) {
                if (modifiers.find(function(mod) {
                    return mod.name === requirement;
                }) == null) console.error(_formatJsDefault.default(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
            });
        });
    });
}
exports.default = validateModifiers;

},{"./format.js":"baNIW","../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"baNIW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function format(str) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
    return [].concat(args).reduce(function(p, c) {
        return p.replace(/%s/, c);
    }, str);
}
exports.default = format;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hhl2M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function uniqueBy(arr, fn) {
    var identifiers = new Set();
    return arr.filter(function(item) {
        var identifier = fn(item);
        if (!identifiers.has(identifier)) {
            identifiers.add(identifier);
            return true;
        }
    });
}
exports.default = uniqueBy;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"59Wp3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
function getBasePlacement(placement) {
    return placement.split('-')[0];
}
exports.default = getBasePlacement;

},{"../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2zTVN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function mergeByName(modifiers) {
    var merged1 = modifiers.reduce(function(merged, current) {
        var existing = merged[current.name];
        merged[current.name] = existing ? Object.assign({
        }, existing, {
        }, current, {
            options: Object.assign({
            }, existing.options, {
            }, current.options),
            data: Object.assign({
            }, existing.data, {
            }, current.data)
        }) : current;
        return merged;
    }, {
    }); // IE11 does not support Object.values
    return Object.keys(merged1).map(function(key) {
        return merged1[key];
    });
}
exports.default = mergeByName;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hBKsL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("../dom-utils/getWindow.js"); // eslint-disable-next-line import/no-unused-modules
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var passive = {
    passive: true
};
function effect(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window = _getWindowJsDefault.default(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener('scroll', instance.update, passive);
    });
    if (resize) window.addEventListener('resize', instance.update, passive);
    return function() {
        if (scroll) scrollParents.forEach(function(scrollParent) {
            scrollParent.removeEventListener('scroll', instance.update, passive);
        });
        if (resize) window.removeEventListener('resize', instance.update, passive);
    };
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'eventListeners',
    enabled: true,
    phase: 'write',
    fn: function fn() {
    },
    effect: effect,
    data: {
    }
};

},{"../dom-utils/getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6I679":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _computeOffsetsJs = require("../utils/computeOffsets.js");
var _computeOffsetsJsDefault = parcelHelpers.interopDefault(_computeOffsetsJs);
function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = _computeOffsetsJsDefault.default({
        reference: state.rects.reference,
        element: state.rects.popper,
        strategy: 'absolute',
        placement: state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'popperOffsets',
    enabled: true,
    phase: 'read',
    fn: popperOffsets,
    data: {
    }
};

},{"../utils/computeOffsets.js":"7jtXk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7jtXk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBasePlacementJs = require("./getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getVariationJs = require("./getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _getMainAxisFromPlacementJs = require("./getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _enumsJs = require("../enums.js");
function computeOffsets(_ref) {
    var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? _getBasePlacementJsDefault.default(placement) : null;
    var variation = placement ? _getVariationJsDefault.default(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;
    switch(basePlacement){
        case _enumsJs.top:
            offsets = {
                x: commonX,
                y: reference.y - element.height
            };
            break;
        case _enumsJs.bottom:
            offsets = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case _enumsJs.right:
            offsets = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case _enumsJs.left:
            offsets = {
                x: reference.x - element.width,
                y: commonY
            };
            break;
        default:
            offsets = {
                x: reference.x,
                y: reference.y
            };
    }
    var mainAxis = basePlacement ? _getMainAxisFromPlacementJsDefault.default(basePlacement) : null;
    if (mainAxis != null) {
        var len = mainAxis === 'y' ? 'height' : 'width';
        switch(variation){
            case _enumsJs.start:
                offsets[mainAxis] = Math.floor(offsets[mainAxis]) - Math.floor(reference[len] / 2 - element[len] / 2);
                break;
            case _enumsJs.end:
                offsets[mainAxis] = Math.floor(offsets[mainAxis]) + Math.ceil(reference[len] / 2 - element[len] / 2);
                break;
            default:
        }
    }
    return offsets;
}
exports.default = computeOffsets;

},{"./getBasePlacement.js":"59Wp3","./getVariation.js":"hIo7Y","./getMainAxisFromPlacement.js":"1Xlom","../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hIo7Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getVariation(placement) {
    return placement.split('-')[1];
}
exports.default = getVariation;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Xlom":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getMainAxisFromPlacement(placement) {
    return [
        'top',
        'bottom'
    ].indexOf(placement) >= 0 ? 'x' : 'y';
}
exports.default = getMainAxisFromPlacement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gDlm2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mapToStyles", ()=>mapToStyles
);
var _enumsJs = require("../enums.js");
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getWindowJs = require("../dom-utils/getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getDocumentElementJs = require("../dom-utils/getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("../dom-utils/getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _getBasePlacementJs = require("../utils/getBasePlacement.js"); // eslint-disable-next-line import/no-unused-modules
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var unsetSides = {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function roundOffsets(_ref) {
    var x = _ref.x, y = _ref.y;
    var win = window;
    var dpr = win.devicePixelRatio || 1;
    return {
        x: Math.round(x * dpr) / dpr || 0,
        y: Math.round(y * dpr) / dpr || 0
    };
}
function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive;
    var _roundOffsets = roundOffsets(offsets), x = _roundOffsets.x, y = _roundOffsets.y;
    var hasX = offsets.hasOwnProperty('x');
    var hasY = offsets.hasOwnProperty('y');
    var sideX = _enumsJs.left;
    var sideY = _enumsJs.top;
    var win = window;
    if (adaptive) {
        var offsetParent = _getOffsetParentJsDefault.default(popper);
        if (offsetParent === _getWindowJsDefault.default(popper)) offsetParent = _getDocumentElementJsDefault.default(popper);
         // $FlowFixMe: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
        /*:: offsetParent = (offsetParent: Element); */ if (placement === _enumsJs.top) {
            sideY = _enumsJs.bottom;
            y -= offsetParent.clientHeight - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
        }
        if (placement === _enumsJs.left) {
            sideX = _enumsJs.right;
            x -= offsetParent.clientWidth - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
        }
    }
    var commonStyles = Object.assign({
        position: position
    }, adaptive && unsetSides);
    if (gpuAcceleration) {
        var _Object$assign;
        return Object.assign({
        }, commonStyles, (_Object$assign = {
        }, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({
    }, commonStyles, (_Object$assign2 = {
    }, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}
function computeStyles(_ref3) {
    var state = _ref3.state, options = _ref3.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive;
    var transitionProperty = _getComputedStyleJsDefault.default(state.elements.popper).transitionProperty || '';
    if (adaptive && [
        'transform',
        'top',
        'right',
        'bottom',
        'left'
    ].some(function(property) {
        return transitionProperty.indexOf(property) >= 0;
    })) console.warn([
        'Popper: Detected CSS transitions on at least one of the following',
        'CSS properties: "transform", "top", "right", "bottom", "left".',
        '\n\n',
        'Disable the "computeStyles" modifier\'s `adaptive` option to allow',
        'for smooth transitions, or remove these properties from the CSS',
        'transition declaration on the popper element if only transitioning',
        'opacity or background-color for example.',
        '\n\n',
        'We recommend using the popper element as a wrapper around an inner',
        'element that can have any CSS property transitioned for animations.'
    ].join(' '));
    var commonStyles = {
        placement: _getBasePlacementJsDefault.default(state.placement),
        popper: state.elements.popper,
        popperRect: state.rects.popper,
        gpuAcceleration: gpuAcceleration
    };
    if (state.modifiersData.popperOffsets != null) state.styles.popper = Object.assign({
    }, state.styles.popper, {
    }, mapToStyles(Object.assign({
    }, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive
    })));
    if (state.modifiersData.arrow != null) state.styles.arrow = Object.assign({
    }, state.styles.arrow, {
    }, mapToStyles(Object.assign({
    }, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: 'absolute',
        adaptive: false
    })));
    state.attributes.popper = Object.assign({
    }, state.attributes.popper, {
        'data-popper-placement': state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'computeStyles',
    enabled: true,
    phase: 'beforeWrite',
    fn: computeStyles,
    data: {
    }
};

},{"../enums.js":"lCAq5","../dom-utils/getOffsetParent.js":"laoYw","../dom-utils/getWindow.js":"2SkOo","../dom-utils/getDocumentElement.js":"eJ9Y1","../dom-utils/getComputedStyle.js":"3mZjB","../utils/getBasePlacement.js":"59Wp3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4iMn4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNodeNameJs = require("../dom-utils/getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("../dom-utils/instanceOf.js"); // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow
function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name1) {
        var style = state.styles[name1] || {
        };
        var attributes = state.attributes[name1] || {
        };
        var element = state.elements[name1]; // arrow is optional + virtual elements
        if (!_instanceOfJs.isHTMLElement(element) || !_getNodeNameJsDefault.default(element)) return;
         // Flow doesn't support to extend this property, but it's the most
        // effective way to apply styles to an HTMLElement
        // $FlowFixMe
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(name) {
            var value = attributes[name];
            if (value === false) element.removeAttribute(name);
            else element.setAttribute(name, value === true ? '' : value);
        });
    });
}
function effect(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
        popper: {
            position: state.options.strategy,
            left: '0',
            top: '0',
            margin: '0'
        },
        arrow: {
            position: 'absolute'
        },
        reference: {
        }
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
    return function() {
        Object.keys(state.elements).forEach(function(name) {
            var element = state.elements[name];
            var attributes = state.attributes[name] || {
            };
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them
            var style1 = styleProperties.reduce(function(style, property) {
                style[property] = '';
                return style;
            }, {
            }); // arrow is optional + virtual elements
            if (!_instanceOfJs.isHTMLElement(element) || !_getNodeNameJsDefault.default(element)) return;
             // Flow doesn't support to extend this property, but it's the most
            // effective way to apply styles to an HTMLElement
            // $FlowFixMe
            Object.assign(element.style, style1);
            Object.keys(attributes).forEach(function(attribute) {
                element.removeAttribute(attribute);
            });
        });
    };
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'applyStyles',
    enabled: true,
    phase: 'write',
    fn: applyStyles,
    effect: effect,
    requires: [
        'computeStyles'
    ]
};

},{"../dom-utils/getNodeName.js":"a2Qom","../dom-utils/instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3GKVY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "distanceAndSkiddingToXY", ()=>distanceAndSkiddingToXY
);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _enumsJs = require("../enums.js");
function distanceAndSkiddingToXY(placement, rects, offset1) {
    var basePlacement = _getBasePlacementJsDefault.default(placement);
    var invertDistance = [
        _enumsJs.left,
        _enumsJs.top
    ].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset1 === 'function' ? offset1(Object.assign({
    }, rects, {
        placement: placement
    })) : offset1, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [
        _enumsJs.left,
        _enumsJs.right
    ].indexOf(basePlacement) >= 0 ? {
        x: distance,
        y: skidding
    } : {
        x: skidding,
        y: distance
    };
}
function offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [
        0,
        0
    ] : _options$offset;
    var data = _enumsJs.placements.reduce(function(acc, placement) {
        acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
        return acc;
    }, {
    });
    var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
        state.modifiersData.popperOffsets.x += x;
        state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'offset',
    enabled: true,
    phase: 'main',
    requires: [
        'popperOffsets'
    ],
    fn: offset
};

},{"../utils/getBasePlacement.js":"59Wp3","../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fv5wq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getOppositePlacementJs = require("../utils/getOppositePlacement.js");
var _getOppositePlacementJsDefault = parcelHelpers.interopDefault(_getOppositePlacementJs);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getOppositeVariationPlacementJs = require("../utils/getOppositeVariationPlacement.js");
var _getOppositeVariationPlacementJsDefault = parcelHelpers.interopDefault(_getOppositeVariationPlacementJs);
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _computeAutoPlacementJs = require("../utils/computeAutoPlacement.js");
var _computeAutoPlacementJsDefault = parcelHelpers.interopDefault(_computeAutoPlacementJs);
var _enumsJs = require("../enums.js");
var _getVariationJs = require("../utils/getVariation.js"); // eslint-disable-next-line import/no-unused-modules
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
function getExpandedFallbackPlacements(placement) {
    if (_getBasePlacementJsDefault.default(placement) === _enumsJs.auto) return [];
    var oppositePlacement = _getOppositePlacementJsDefault.default(placement);
    return [
        _getOppositeVariationPlacementJsDefault.default(placement),
        oppositePlacement,
        _getOppositeVariationPlacementJsDefault.default(oppositePlacement)
    ];
}
function flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) return;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = _getBasePlacementJsDefault.default(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [
        _getOppositePlacementJsDefault.default(preferredPlacement)
    ] : getExpandedFallbackPlacements(preferredPlacement));
    var placements = [
        preferredPlacement
    ].concat(fallbackPlacements).reduce(function(acc, placement) {
        return acc.concat(_getBasePlacementJsDefault.default(placement) === _enumsJs.auto ? _computeAutoPlacementJsDefault.default(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding,
            flipVariations: flipVariations,
            allowedAutoPlacements: allowedAutoPlacements
        }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];
    for(var i = 0; i < placements.length; i++){
        var placement1 = placements[i];
        var _basePlacement = _getBasePlacementJsDefault.default(placement1);
        var isStartVariation = _getVariationJsDefault.default(placement1) === _enumsJs.start;
        var isVertical = [
            _enumsJs.top,
            _enumsJs.bottom
        ].indexOf(_basePlacement) >= 0;
        var len = isVertical ? 'width' : 'height';
        var overflow = _detectOverflowJsDefault.default(state, {
            placement: placement1,
            boundary: boundary,
            rootBoundary: rootBoundary,
            altBoundary: altBoundary,
            padding: padding
        });
        var mainVariationSide = isVertical ? isStartVariation ? _enumsJs.right : _enumsJs.left : isStartVariation ? _enumsJs.bottom : _enumsJs.top;
        if (referenceRect[len] > popperRect[len]) mainVariationSide = _getOppositePlacementJsDefault.default(mainVariationSide);
        var altVariationSide = _getOppositePlacementJsDefault.default(mainVariationSide);
        var checks = [];
        if (checkMainAxis) checks.push(overflow[_basePlacement] <= 0);
        if (checkAltAxis) checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
        if (checks.every(function(check) {
            return check;
        })) {
            firstFittingPlacement = placement1;
            makeFallbackChecks = false;
            break;
        }
        checksMap.set(placement1, checks);
    }
    if (makeFallbackChecks) {
        // `2` may be desired in some cases – research later
        var numberOfChecks = flipVariations ? 3 : 1;
        var _loop = function _loop(_i) {
            var fittingPlacement = placements.find(function(placement) {
                var checks = checksMap.get(placement);
                if (checks) return checks.slice(0, _i).every(function(check) {
                    return check;
                });
            });
            if (fittingPlacement) {
                firstFittingPlacement = fittingPlacement;
                return "break";
            }
        };
        for(var _i1 = numberOfChecks; _i1 > 0; _i1--){
            var _ret = _loop(_i1);
            if (_ret === "break") break;
        }
    }
    if (state.placement !== firstFittingPlacement) {
        state.modifiersData[name]._skip = true;
        state.placement = firstFittingPlacement;
        state.reset = true;
    }
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'flip',
    enabled: true,
    phase: 'main',
    fn: flip,
    requiresIfExists: [
        'offset'
    ],
    data: {
        _skip: false
    }
};

},{"../utils/getOppositePlacement.js":"a8CY0","../utils/getBasePlacement.js":"59Wp3","../utils/getOppositeVariationPlacement.js":"bKTLC","../utils/detectOverflow.js":"ltCuw","../utils/computeAutoPlacement.js":"gytMj","../enums.js":"lCAq5","../utils/getVariation.js":"hIo7Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a8CY0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var hash = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
};
function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
        return hash[matched];
    });
}
exports.default = getOppositePlacement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bKTLC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var hash = {
    start: 'end',
    end: 'start'
};
function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
        return hash[matched];
    });
}
exports.default = getOppositeVariationPlacement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ltCuw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBoundingClientRectJs = require("../dom-utils/getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getClippingRectJs = require("../dom-utils/getClippingRect.js");
var _getClippingRectJsDefault = parcelHelpers.interopDefault(_getClippingRectJs);
var _getDocumentElementJs = require("../dom-utils/getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _computeOffsetsJs = require("./computeOffsets.js");
var _computeOffsetsJsDefault = parcelHelpers.interopDefault(_computeOffsetsJs);
var _rectToClientRectJs = require("./rectToClientRect.js");
var _rectToClientRectJsDefault = parcelHelpers.interopDefault(_rectToClientRectJs);
var _enumsJs = require("../enums.js");
var _instanceOfJs = require("../dom-utils/instanceOf.js");
var _mergePaddingObjectJs = require("./mergePaddingObject.js");
var _mergePaddingObjectJsDefault = parcelHelpers.interopDefault(_mergePaddingObjectJs);
var _expandToHashMapJs = require("./expandToHashMap.js"); // eslint-disable-next-line import/no-unused-modules
var _expandToHashMapJsDefault = parcelHelpers.interopDefault(_expandToHashMapJs);
function detectOverflow(state, options) {
    if (options === void 0) options = {
    };
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? _enumsJs.clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? _enumsJs.viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? _enumsJs.popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = _mergePaddingObjectJsDefault.default(typeof padding !== 'number' ? padding : _expandToHashMapJsDefault.default(padding, _enumsJs.basePlacements));
    var altContext = elementContext === _enumsJs.popper ? _enumsJs.reference : _enumsJs.popper;
    var referenceElement = state.elements.reference;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = _getClippingRectJsDefault.default(_instanceOfJs.isElement(element) ? element : element.contextElement || _getDocumentElementJsDefault.default(state.elements.popper), boundary, rootBoundary);
    var referenceClientRect = _getBoundingClientRectJsDefault.default(referenceElement);
    var popperOffsets = _computeOffsetsJsDefault.default({
        reference: referenceClientRect,
        element: popperRect,
        strategy: 'absolute',
        placement: placement
    });
    var popperClientRect = _rectToClientRectJsDefault.default(Object.assign({
    }, popperRect, {
    }, popperOffsets));
    var elementClientRect = elementContext === _enumsJs.popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect
    var overflowOffsets = {
        top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
        bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
        left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
        right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element
    if (elementContext === _enumsJs.popper && offsetData) {
        var offset = offsetData[placement];
        Object.keys(overflowOffsets).forEach(function(key) {
            var multiply = [
                _enumsJs.right,
                _enumsJs.bottom
            ].indexOf(key) >= 0 ? 1 : -1;
            var axis = [
                _enumsJs.top,
                _enumsJs.bottom
            ].indexOf(key) >= 0 ? 'y' : 'x';
            overflowOffsets[key] += offset[axis] * multiply;
        });
    }
    return overflowOffsets;
}
exports.default = detectOverflow;

},{"../dom-utils/getBoundingClientRect.js":"9CFSQ","../dom-utils/getClippingRect.js":"eeg2s","../dom-utils/getDocumentElement.js":"eJ9Y1","./computeOffsets.js":"7jtXk","./rectToClientRect.js":"cQ3tg","../enums.js":"lCAq5","../dom-utils/instanceOf.js":"gYFUC","./mergePaddingObject.js":"lEIf9","./expandToHashMap.js":"iQlH5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eeg2s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
var _getViewportRectJs = require("./getViewportRect.js");
var _getViewportRectJsDefault = parcelHelpers.interopDefault(_getViewportRectJs);
var _getDocumentRectJs = require("./getDocumentRect.js");
var _getDocumentRectJsDefault = parcelHelpers.interopDefault(_getDocumentRectJs);
var _listScrollParentsJs = require("./listScrollParents.js");
var _listScrollParentsJsDefault = parcelHelpers.interopDefault(_listScrollParentsJs);
var _getOffsetParentJs = require("./getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _instanceOfJs = require("./instanceOf.js");
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getDecorationsJs = require("./getDecorations.js");
var _getDecorationsJsDefault = parcelHelpers.interopDefault(_getDecorationsJs);
var _containsJs = require("./contains.js");
var _containsJsDefault = parcelHelpers.interopDefault(_containsJs);
var _rectToClientRectJs = require("../utils/rectToClientRect.js");
var _rectToClientRectJsDefault = parcelHelpers.interopDefault(_rectToClientRectJs);
function getClientRectFromMixedType(element, clippingParent) {
    return clippingParent === _enumsJs.viewport ? _rectToClientRectJsDefault.default(_getViewportRectJsDefault.default(element)) : _instanceOfJs.isHTMLElement(clippingParent) ? _getBoundingClientRectJsDefault.default(clippingParent) : _rectToClientRectJsDefault.default(_getDocumentRectJsDefault.default(_getDocumentElementJsDefault.default(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
function getClippingParents(element) {
    var clippingParents = _listScrollParentsJsDefault.default(element);
    var canEscapeClipping = [
        'absolute',
        'fixed'
    ].indexOf(_getComputedStyleJsDefault.default(element).position) >= 0;
    var clipperElement = canEscapeClipping && _instanceOfJs.isHTMLElement(element) ? _getOffsetParentJsDefault.default(element) : element;
    if (!_instanceOfJs.isElement(clipperElement)) return [];
     // $FlowFixMe: https://github.com/facebook/flow/issues/1414
    return clippingParents.filter(function(clippingParent) {
        return _instanceOfJs.isElement(clippingParent) && _containsJsDefault.default(clippingParent, clipperElement);
    });
} // Gets the maximum area that the element is visible in due to any number of
function getClippingRect(element, boundary, rootBoundary) {
    var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [
        rootBoundary
    ]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function(accRect, clippingParent) {
        var rect = getClientRectFromMixedType(element, clippingParent);
        var decorations = _getDecorationsJsDefault.default(_instanceOfJs.isHTMLElement(clippingParent) ? clippingParent : _getDocumentElementJsDefault.default(element));
        accRect.top = Math.max(rect.top + decorations.top, accRect.top);
        accRect.right = Math.min(rect.right - decorations.right, accRect.right);
        accRect.bottom = Math.min(rect.bottom - decorations.bottom, accRect.bottom);
        accRect.left = Math.max(rect.left + decorations.left, accRect.left);
        return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
}
exports.default = getClippingRect;

},{"../enums.js":"lCAq5","./getViewportRect.js":"cnH2G","./getDocumentRect.js":"d94SC","./listScrollParents.js":"2di3T","./getOffsetParent.js":"laoYw","./getDocumentElement.js":"eJ9Y1","./getComputedStyle.js":"3mZjB","./instanceOf.js":"gYFUC","./getBoundingClientRect.js":"9CFSQ","./getDecorations.js":"9CViJ","./contains.js":"4QxRR","../utils/rectToClientRect.js":"cQ3tg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cnH2G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function getViewportRect(element) {
    var win = _getWindowJsDefault.default(element);
    var visualViewport = win.visualViewport;
    var width = win.innerWidth;
    var height = win.innerHeight; // We don't know which browsers have buggy or odd implementations of this, so
    // for now we're only applying it to iOS to fix the keyboard issue.
    // Investigation required
    if (visualViewport && /iPhone|iPod|iPad/.test(navigator.platform)) {
        width = visualViewport.width;
        height = visualViewport.height;
    }
    return {
        width: width,
        height: height,
        x: 0,
        y: 0
    };
}
exports.default = getViewportRect;

},{"./getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d94SC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getCompositeRectJs = require("./getCompositeRect.js");
var _getCompositeRectJsDefault = parcelHelpers.interopDefault(_getCompositeRectJs);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
function getDocumentRect(element) {
    var win = _getWindowJsDefault.default(element);
    var winScroll = _getWindowScrollJsDefault.default(element);
    var documentRect = _getCompositeRectJsDefault.default(_getDocumentElementJsDefault.default(element), win);
    documentRect.height = Math.max(documentRect.height, win.innerHeight);
    documentRect.width = Math.max(documentRect.width, win.innerWidth);
    documentRect.x = -winScroll.scrollLeft;
    documentRect.y = -winScroll.scrollTop;
    return documentRect;
}
exports.default = getDocumentRect;

},{"./getCompositeRect.js":"ijPls","./getWindow.js":"2SkOo","./getDocumentElement.js":"eJ9Y1","./getWindowScroll.js":"1XUtN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9CViJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBordersJs = require("./getBorders.js");
var _getBordersJsDefault = parcelHelpers.interopDefault(_getBordersJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js"); // Borders + scrollbars
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
function getDecorations(element) {
    var win = _getWindowJsDefault.default(element);
    var borders = _getBordersJsDefault.default(element);
    var isHTML = _getNodeNameJsDefault.default(element) === 'html';
    var winScrollBarX = _getWindowScrollBarXJsDefault.default(element);
    var x = element.clientWidth + borders.right;
    var y = element.clientHeight + borders.bottom; // HACK:
    // document.documentElement.clientHeight on iOS reports the height of the
    // viewport including the bottom bar, even if the bottom bar isn't visible.
    // If the difference between window innerHeight and html clientHeight is more
    // than 50, we assume it's a mobile bottom bar and ignore scrollbars.
    // * A 50px thick scrollbar is likely non-existent (macOS is 15px and Windows
    //   is about 17px)
    // * The mobile bar is 114px tall
    if (isHTML && win.innerHeight - element.clientHeight > 50) y = win.innerHeight - borders.bottom;
    return {
        top: isHTML ? 0 : element.clientTop,
        right: element.clientLeft > borders.left ? borders.right : isHTML ? win.innerWidth - x - winScrollBarX : element.offsetWidth - x,
        bottom: isHTML ? win.innerHeight - y : element.offsetHeight - y,
        left: isHTML ? winScrollBarX : element.clientLeft
    };
}
exports.default = getDecorations;

},{"./getBorders.js":"kx8tX","./getNodeName.js":"a2Qom","./getWindow.js":"2SkOo","./getWindowScrollBarX.js":"sz4Ld","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kx8tX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _instanceOfJs = require("./instanceOf.js");
function toNumber(cssValue) {
    return parseFloat(cssValue) || 0;
}
function getBorders(element) {
    var computedStyle = _instanceOfJs.isHTMLElement(element) ? _getComputedStyleJsDefault.default(element) : {
    };
    return {
        top: toNumber(computedStyle.borderTopWidth),
        right: toNumber(computedStyle.borderRightWidth),
        bottom: toNumber(computedStyle.borderBottomWidth),
        left: toNumber(computedStyle.borderLeftWidth)
    };
}
exports.default = getBorders;

},{"./getComputedStyle.js":"3mZjB","./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4QxRR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function contains(parent, child) {
    // $FlowFixMe: hasOwnProperty doesn't seem to work in tests
    var isShadow = Boolean(child.getRootNode && child.getRootNode().host); // First, attempt with faster native method
    if (parent.contains(child)) return true;
    else if (isShadow) {
        var next = child;
        do {
            if (next && parent.isSameNode(next)) return true;
             // $FlowFixMe: need a better way to handle this...
            next = next.parentNode || next.host;
        }while (next)
    } // Give up, the result is false
    return false;
}
exports.default = contains;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cQ3tg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function rectToClientRect(rect) {
    return Object.assign({
    }, rect, {
        left: rect.x,
        top: rect.y,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
    });
}
exports.default = rectToClientRect;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lEIf9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getFreshSideObjectJs = require("./getFreshSideObject.js");
var _getFreshSideObjectJsDefault = parcelHelpers.interopDefault(_getFreshSideObjectJs);
function mergePaddingObject(paddingObject) {
    return Object.assign({
    }, _getFreshSideObjectJsDefault.default(), {
    }, paddingObject);
}
exports.default = mergePaddingObject;

},{"./getFreshSideObject.js":"g4xOt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g4xOt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getFreshSideObject() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
}
exports.default = getFreshSideObject;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iQlH5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function expandToHashMap(value, keys) {
    return keys.reduce(function(hashMap, key) {
        hashMap[key] = value;
        return hashMap;
    }, {
    });
}
exports.default = expandToHashMap;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gytMj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getVariationJs = require("./getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _enumsJs = require("../enums.js");
var _detectOverflowJs = require("./detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _getBasePlacementJs = require("./getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
function computeAutoPlacement(state, options) {
    if (options === void 0) options = {
    };
    var _options = options, placement1 = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? _enumsJs.placements : _options$allowedAutoP;
    var variation = _getVariationJsDefault.default(placement1);
    var placements = (variation ? flipVariations ? _enumsJs.variationPlacements : _enumsJs.variationPlacements.filter(function(placement) {
        return _getVariationJsDefault.default(placement) === variation;
    }) : _enumsJs.basePlacements).filter(function(placement) {
        return allowedAutoPlacements.indexOf(placement) >= 0;
    }); // $FlowFixMe: Flow seems to have problems with two array unions...
    var overflows = placements.reduce(function(acc, placement) {
        acc[placement] = _detectOverflowJsDefault.default(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding
        })[_getBasePlacementJsDefault.default(placement)];
        return acc;
    }, {
    });
    return Object.keys(overflows).sort(function(a, b) {
        return overflows[a] - overflows[b];
    });
}
exports.default = computeAutoPlacement;

},{"./getVariation.js":"hIo7Y","../enums.js":"lCAq5","./detectOverflow.js":"ltCuw","./getBasePlacement.js":"59Wp3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1AMhb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getMainAxisFromPlacementJs = require("../utils/getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _getAltAxisJs = require("../utils/getAltAxis.js");
var _getAltAxisJsDefault = parcelHelpers.interopDefault(_getAltAxisJs);
var _withinJs = require("../utils/within.js");
var _withinJsDefault = parcelHelpers.interopDefault(_withinJs);
var _getLayoutRectJs = require("../dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _getVariationJs = require("../utils/getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _getFreshSideObjectJs = require("../utils/getFreshSideObject.js");
var _getFreshSideObjectJsDefault = parcelHelpers.interopDefault(_getFreshSideObjectJs);
function preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = _detectOverflowJsDefault.default(state, {
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        altBoundary: altBoundary
    });
    var basePlacement = _getBasePlacementJsDefault.default(state.placement);
    var variation = _getVariationJsDefault.default(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = _getMainAxisFromPlacementJsDefault.default(basePlacement);
    var altAxis = _getAltAxisJsDefault.default(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({
    }, state.rects, {
        placement: state.placement
    })) : tetherOffset;
    var data = {
        x: 0,
        y: 0
    };
    if (!popperOffsets) return;
    if (checkMainAxis) {
        var mainSide = mainAxis === 'y' ? _enumsJs.top : _enumsJs.left;
        var altSide = mainAxis === 'y' ? _enumsJs.bottom : _enumsJs.right;
        var len = mainAxis === 'y' ? 'height' : 'width';
        var offset = popperOffsets[mainAxis];
        var min = popperOffsets[mainAxis] + overflow[mainSide];
        var max = popperOffsets[mainAxis] - overflow[altSide];
        var additive = tether ? -popperRect[len] / 2 : 0;
        var minLen = variation === _enumsJs.start ? referenceRect[len] : popperRect[len];
        var maxLen = variation === _enumsJs.start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
        // outside the reference bounds
        var arrowElement = state.elements.arrow;
        var arrowRect = tether && arrowElement ? _getLayoutRectJsDefault.default(arrowElement) : {
            width: 0,
            height: 0
        };
        var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : _getFreshSideObjectJsDefault.default();
        var arrowPaddingMin = arrowPaddingObject[mainSide];
        var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
        // to include its full size in the calculation. If the reference is small
        // and near the edge of a boundary, the popper can overflow even if the
        // reference is not overflowing as well (e.g. virtual elements with no
        // width or height)
        var arrowLen = _withinJsDefault.default(0, referenceRect[len], arrowRect[len]);
        var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
        var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
        var arrowOffsetParent = state.elements.arrow && _getOffsetParentJsDefault.default(state.elements.arrow);
        var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
        var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
        var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
        var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;
        var preventedOffset = _withinJsDefault.default(tether ? Math.min(min, tetherMin) : min, offset, tether ? Math.max(max, tetherMax) : max);
        popperOffsets[mainAxis] = preventedOffset;
        data[mainAxis] = preventedOffset - offset;
    }
    if (checkAltAxis) {
        var _mainSide = mainAxis === 'x' ? _enumsJs.top : _enumsJs.left;
        var _altSide = mainAxis === 'x' ? _enumsJs.bottom : _enumsJs.right;
        var _offset = popperOffsets[altAxis];
        var _min = _offset + overflow[_mainSide];
        var _max = _offset - overflow[_altSide];
        var _preventedOffset = _withinJsDefault.default(_min, _offset, _max);
        popperOffsets[altAxis] = _preventedOffset;
        data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'preventOverflow',
    enabled: true,
    phase: 'main',
    fn: preventOverflow,
    requiresIfExists: [
        'offset'
    ]
};

},{"../enums.js":"lCAq5","../utils/getBasePlacement.js":"59Wp3","../utils/getMainAxisFromPlacement.js":"1Xlom","../utils/getAltAxis.js":"59FWE","../utils/within.js":"3glSz","../dom-utils/getLayoutRect.js":"jvjuf","../dom-utils/getOffsetParent.js":"laoYw","../utils/detectOverflow.js":"ltCuw","../utils/getVariation.js":"hIo7Y","../utils/getFreshSideObject.js":"g4xOt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"59FWE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getAltAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
}
exports.default = getAltAxis;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3glSz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function within(min, value, max) {
    return Math.max(min, Math.min(value, max));
}
exports.default = within;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"31HFW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getLayoutRectJs = require("../dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _containsJs = require("../dom-utils/contains.js");
var _containsJsDefault = parcelHelpers.interopDefault(_containsJs);
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getMainAxisFromPlacementJs = require("../utils/getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _withinJs = require("../utils/within.js");
var _withinJsDefault = parcelHelpers.interopDefault(_withinJs);
var _mergePaddingObjectJs = require("../utils/mergePaddingObject.js");
var _mergePaddingObjectJsDefault = parcelHelpers.interopDefault(_mergePaddingObjectJs);
var _expandToHashMapJs = require("../utils/expandToHashMap.js");
var _expandToHashMapJsDefault = parcelHelpers.interopDefault(_expandToHashMapJs);
var _enumsJs = require("../enums.js");
var _instanceOfJs = require("../dom-utils/instanceOf.js"); // eslint-disable-next-line import/no-unused-modules
function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = _getBasePlacementJsDefault.default(state.placement);
    var axis = _getMainAxisFromPlacementJsDefault.default(basePlacement);
    var isVertical = [
        _enumsJs.left,
        _enumsJs.right
    ].indexOf(basePlacement) >= 0;
    var len = isVertical ? 'height' : 'width';
    if (!arrowElement || !popperOffsets) return;
    var paddingObject = state.modifiersData[name + "#persistent"].padding;
    var arrowRect = _getLayoutRectJsDefault.default(arrowElement);
    var minProp = axis === 'y' ? _enumsJs.top : _enumsJs.left;
    var maxProp = axis === 'y' ? _enumsJs.bottom : _enumsJs.right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = _getOffsetParentJsDefault.default(arrowElement);
    var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds
    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = _withinJsDefault.default(min, center, max); // Prevents breaking syntax highlighting...
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {
    }, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}
function effect(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element, _options$padding = options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    if (arrowElement == null) return;
     // CSS selector
    if (typeof arrowElement === 'string') {
        arrowElement = state.elements.popper.querySelector(arrowElement);
        if (!arrowElement) return;
    }
    if (!_instanceOfJs.isHTMLElement(arrowElement)) console.error([
        'Popper: "arrow" element must be an HTMLElement (not an SVGElement).',
        'To use an SVG arrow, wrap it in an HTMLElement that will be used as',
        'the arrow.'
    ].join(' '));
    if (!_containsJsDefault.default(state.elements.popper, arrowElement)) {
        console.error([
            'Popper: "arrow" modifier\'s `element` must be a child of the popper',
            'element.'
        ].join(' '));
        return;
    }
    state.elements.arrow = arrowElement;
    state.modifiersData[name + "#persistent"] = {
        padding: _mergePaddingObjectJsDefault.default(typeof padding !== 'number' ? padding : _expandToHashMapJsDefault.default(padding, _enumsJs.basePlacements))
    };
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'arrow',
    enabled: true,
    phase: 'main',
    fn: arrow,
    effect: effect,
    requires: [
        'popperOffsets'
    ],
    requiresIfExists: [
        'preventOverflow'
    ]
};

},{"../utils/getBasePlacement.js":"59Wp3","../dom-utils/getLayoutRect.js":"jvjuf","../dom-utils/contains.js":"4QxRR","../dom-utils/getOffsetParent.js":"laoYw","../utils/getMainAxisFromPlacement.js":"1Xlom","../utils/within.js":"3glSz","../utils/mergePaddingObject.js":"lEIf9","../utils/expandToHashMap.js":"iQlH5","../enums.js":"lCAq5","../dom-utils/instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2g4OF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) preventedOffsets = {
        x: 0,
        y: 0
    };
    return {
        top: overflow.top - rect.height - preventedOffsets.y,
        right: overflow.right - rect.width + preventedOffsets.x,
        bottom: overflow.bottom - rect.height + preventedOffsets.y,
        left: overflow.left - rect.width - preventedOffsets.x
    };
}
function isAnySideFullyClipped(overflow) {
    return [
        _enumsJs.top,
        _enumsJs.right,
        _enumsJs.bottom,
        _enumsJs.left
    ].some(function(side) {
        return overflow[side] >= 0;
    });
}
function hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = _detectOverflowJsDefault.default(state, {
        elementContext: 'reference'
    });
    var popperAltOverflow = _detectOverflowJsDefault.default(state, {
        altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
        referenceClippingOffsets: referenceClippingOffsets,
        popperEscapeOffsets: popperEscapeOffsets,
        isReferenceHidden: isReferenceHidden,
        hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({
    }, state.attributes.popper, {
        'data-popper-reference-hidden': isReferenceHidden,
        'data-popper-escaped': hasPopperEscaped
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'hide',
    enabled: true,
    phase: 'main',
    requiresIfExists: [
        'preventOverflow'
    ],
    fn: hide
};

},{"../enums.js":"lCAq5","../utils/detectOverflow.js":"ltCuw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Aqh1":[function() {},{}]},["iKiqL","bB7Pu"], "bB7Pu", "parcelRequire7fb3")

//# sourceMappingURL=index.3d214d75.js.map
