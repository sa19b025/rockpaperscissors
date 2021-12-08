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
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
})({"79gfX":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "91f24895c05ff127";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
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
            it = o[Symbol.iterator]();
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
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
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

},{}],"i8ewE":[function(require,module,exports) {
// imports
var _cookiesJs = require("./cookies.js");
var _predictJs = require("./predict.js");
var _streamJs = require("./stream.js");
var _picturevideoJs = require("./picturevideo.js");
var _determinewinnerJs = require("./determinewinner.js");
var _npcrandJs = require("./npcrand.js");
// Handle Cookies
if (!_cookiesJs.getCookie("PlayerWins") && !_cookiesJs.getCookie("ComputerWins")) {
    _cookiesJs.setCookie("PlayerWins", 0, 5);
    _cookiesJs.setCookie("ComputerWins", 0, 5);
}
console.log("PlayerWins: " + _cookiesJs.getCookie("PlayerWins"));
console.log("ComputerWins: " + _cookiesJs.getCookie("ComputerWins"));
let playerWins = _cookiesJs.getCookie("PlayerWins");
let computerWins = _cookiesJs.getCookie("ComputerWins");
// GLOBAL VARIABLES
const constraints = {
    audio: false,
    video: {
        width: 1120,
        height: 630
    }
};
let predictedValue1 = "";
const canvas = document.getElementById("canvas");
const canvas2 = document.getElementById("canvas2");
const ctx = canvas.getContext("2d");
const ctx2 = canvas2.getContext("2d");
//on Dom load
document.addEventListener("DOMContentLoaded", function() {
    loadPage1();
    if (!_cookiesJs.getCookie("PlayerWins") && !_cookiesJs.getCookie("ComputerWins")) {
        _cookiesJs.setCookie("PlayerWins", 0, 5);
        _cookiesJs.setCookie("ComputerWins", 0, 5);
    }
    _cookiesJs.getCookie("ComputerWins");
});
//Onclicklisteners
//when Start Clicked load page 2
const startButton = document.getElementById("startButton");
startButton.addEventListener("click", function() {
    loadPage2();
});
//when snapshot clicked take pic and loadPage3
const snapshotButton = document.getElementById("snapshot");
snapshotButton.addEventListener("click", function() {
    const img = _picturevideoJs.picturevideo(ctx, ctx2, video, canvas, canvas2);
    loadPage3(img);
    _streamJs.stopvideo();
});
//Refresh buttons functionality
const refreshButtonPage3 = document.getElementById("refreshP3");
refreshButtonPage3.addEventListener("click", function() {
    refreshPage();
});
const refreshButtonPage4 = document.getElementById("refreshP4");
refreshButtonPage4.addEventListener("click", function() {
    refreshPage();
});
//delete Cookies
const deleteCookie = document.getElementById("deleteCookies");
deleteCookie.addEventListener("click", function() {
    //delete Cookies
    _cookiesJs.deleteCookies();
    document.getElementById("deleteCookies").className = "hide";
});
// Hide Pages 2-4
function loadPage1() {
    document.getElementById("pageTwo").style.display = "none";
    document.getElementById("pageThree").style.display = "none";
    document.getElementById("pageFour").style.display = "none";
}
//hide everything except for page two
function loadPage2() {
    document.getElementById("pageOne").style.display = "none";
    document.getElementById("pageTwo").style.display = "inline-block";
    document.getElementById("pageThree").style.display = "none";
    document.getElementById("pageFour").style.display = "none";
    _streamJs.stream(constraints, ctx, ctx2);
}
//hide everything except for page three
function loadPage3(img) {
    document.getElementById("pageOne").style.display = "none";
    document.getElementById("pageTwo").style.display = "none";
    document.getElementById("pageThree").style.display = "inline-block";
    document.getElementById("pageFour").style.display = "none";
    const maxPredictionVal = _predictJs.predict(img);
    maxPredictionVal.then(function(result) {
        predictedValue1 = result;
        console.log(predictedValue1);
    });
    //Continue button functionality
    const continueButton = document.getElementById("continue");
    continueButton.addEventListener("click", function() {
        loadPage4(predictedValue1);
    });
}
//hide everything except for page four
//calc Computer Symbol and determine who won
function loadPage4(predictedValue) {
    document.getElementById("pageOne").style.display = "none";
    document.getElementById("pageTwo").style.display = "none";
    document.getElementById("pageThree").style.display = "none";
    document.getElementById("pageFour").style.display = "inline-block";
    const valueNPC = _npcrandJs.npcRand();
    _determinewinnerJs.determineWinner(valueNPC, predictedValue, playerWins, computerWins);
}
//restart buttons function
function refreshPage() {
    window.location.reload();
    console.log("reload");
}

},{"./cookies.js":"ex0I3","./predict.js":"5RkpW","./stream.js":"73ONc","./picturevideo.js":"kMU2H","./determinewinner.js":"fUn6B","./npcrand.js":"a9wUW"}],"ex0I3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setCookie", ()=>setCookie
);
parcelHelpers.export(exports, "getCookie", ()=>getCookie
);
parcelHelpers.export(exports, "deleteCookies", ()=>deleteCookies
);
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 86400000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for(let i = 0; i < ca.length; i++){
        let c = ca[i];
        while(c.charAt(0) == " ")c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
}
function deleteCookies() {
    document.cookie = "ComputerWins=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "PlayerWins=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
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

},{}],"5RkpW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "predict", ()=>predict
);
async function predict(img) {
    // const URL = "https://teachablemachine.withgoogle.com/models/CoWEt_sY5/";
    // Link zum Freigeben Version 2: https://teachablemachine.withgoogle.com/models/SIbkI-Nno/
    const URL = "https://teachablemachine.withgoogle.com/models/SIbkI-Nno/";
    let model;
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    model = await tmImage.load(modelURL, metadataURL);
    // predict can take in an image, video or canvas html element
    const prediction = await model.predict(img);
    console.log(prediction);
    const predictionList = document.getElementById("predictionList");
    let maxPercentage = 0;
    let maxPredictionVal = "";
    for(var i = 0; i < 3; i++){
        const predictionPercentage = prediction[i].probability;
        if (maxPercentage < predictionPercentage) {
            maxPercentage = predictionPercentage;
            maxPredictionVal = prediction[i].className;
        }
        const predictionClassName = prediction[i].className;
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(predictionClassName + " " + Math.round(predictionPercentage * 10000) / 100 + "%"));
        predictionList.appendChild(li);
    }
    return maxPredictionVal;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"73ONc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stream", ()=>stream1
);
parcelHelpers.export(exports, "stopvideo", ()=>stopvideo
);
function stream1(constraints, ctx, ctx2) {
    navigator.mediaDevices.getUserMedia(constraints).then((stream)=>{
        document.getElementById("video").srcObject = stream;
        console.log("video ready");
    }).catch((error)=>{
        console.log("Something went wrong! " + error.message);
    });
    ctx.fillStyle = "grey";
    ctx.fillRect(0, 0, 224, 224);
    ctx2.fillStyle = "grey";
    ctx2.fillRect(0, 0, 848, 477);
}
function stopvideo(e) {
    var stream = video.srcObject;
    var tracks = stream.getTracks();
    for(var i = 0; i < tracks.length; i++){
        var track = tracks[i];
        track.stop();
    }
    video.srcObject = null;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kMU2H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "picturevideo", ()=>picturevideo
);
function picturevideo(ctx, ctx2, video, canvas, canvas2) {
    ctx.drawImage(video, 0, 49, 224, 126);
    ctx2.drawImage(video, 0, 0, 848, 477);
    console.log("canvas drawn");
    let img = document.getElementById("photo");
    let img2 = document.getElementById("photo2");
    let data = canvas.toDataURL("image/png");
    img.setAttribute("src", data);
    let data2 = canvas2.toDataURL("image/png");
    img2.setAttribute("src", data2);
    img = document.getElementById("photo");
    console.log(img);
    console.log(img2);
    return img;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fUn6B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "determineWinner", ()=>determineWinner
);
var _cookiesJs = require("./cookies.js");
function determineWinner(valueNPC, maxPredictionVal, playerWins, computerWins) {
    let result = "";
    console.log("NPC: " + valueNPC + " " + "Player: " + maxPredictionVal);
    const valuePlayer = maxPredictionVal;
    if (valueNPC == valuePlayer) result = "It's a draw.";
    else if (valueNPC == "Rock" && valuePlayer == "Paper") {
        result = "The Player won.";
        playerWins++;
    } else if (valueNPC == "Rock" && valuePlayer == "Scissors") {
        result = "The Computer won.";
        computerWins++;
    } else if (valueNPC == "Paper" && valuePlayer == "Rock") {
        result = "The Computer won.";
        computerWins++;
    } else if (valueNPC == "Paper" && valuePlayer == "Scissors") {
        result = "The Player won.";
        playerWins++;
    } else if (valueNPC == "Scissors" && valuePlayer == "Rock") {
        result = "The Player won.";
        playerWins++;
    } else if (valueNPC == "Scissors" && valuePlayer == "Paper") {
        result = "The Computer won.";
        computerWins++;
    } else result = "undetermined";
    _cookiesJs.setCookie("PlayerWins", playerWins, 5);
    _cookiesJs.setCookie("ComputerWins", computerWins, 5);
    const imgfilenamePlayer = "../images/" + valuePlayer.toLowerCase() + "_player.png";
    const imgfilenameComputer = "../images/" + valueNPC.toLowerCase() + "_computer.png";
    console.log(imgfilenamePlayer + " " + imgfilenameComputer);
    document.getElementById("playerValueImage").src = imgfilenamePlayer;
    document.getElementById("computerValueImage").src = imgfilenameComputer;
    const plaValTag = document.getElementById("playerValue");
    plaValTag.innerHTML = "You chose <strong>" + maxPredictionVal + "</strong>.<br />";
    _cookiesJs.setCookie("ComputerWins", computerWins, 5);
    const npcValTag = document.getElementById("npcRnd");
    npcValTag.innerHTML = "The Computer chose <strong>" + valueNPC + "</strong>.<br />";
    const resultTag = document.getElementById("result");
    resultTag.innerHTML = result;
    const score = document.getElementById("score");
    score.innerHTML = "Player " + playerWins + " : " + computerWins + " Computer";
    console.log(result);
}

},{"./cookies.js":"ex0I3","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"a9wUW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "npcRand", ()=>npcRand
);
function npcRand() {
    let valueNPC = "";
    const number = Math.floor(Math.random() * 100) % 3;
    switch(number){
        case 0:
            valueNPC = "Rock";
            break;
        case 1:
            valueNPC = "Paper";
            break;
        case 2:
            valueNPC = "Scissors";
            break;
        default:
            console.log("ERROR: Unknown");
            break;
    }
    console.log(valueNPC + " " + number);
    return valueNPC;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["79gfX","i8ewE"], "i8ewE", "parcelRequire9a80")

//# sourceMappingURL=index.c05ff127.js.map
