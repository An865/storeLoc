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
})({"../keys.json":[function(require,module,exports) {
module.exports = {
  "type": "service_account",
  "project_id": "gs-api-test-316420",
  "private_key_id": "d3b9cc210286470aaa8c255303a3b494bff8c544",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCvtCi2QlGciDPN\n4vXhp7+i1mKSodmMe7aP3wpxWVn3QCK+MOR4KAQchQefxbod/esqth41uUqpLhOT\n26ym+T9r2kKb1yFrkzB2R+o1OUka/qGYf0CU9cJTxpNYnl9lCPB1ZXU3PyxxGWVc\nuJSvgdSeFYFUL/8L8rigmLTHnpetyuCQGcQ2ZKTGI/9ahzFEMNzCOmm4GN1/WpSv\ndeY9b5rFtkRVmvRoiX2cFph89ng6kY7Tzb4/y1ECLNZn05r9eht9XCOUvLsrLeBV\nng+CvDzCUmu1zvnu4rUyxH20j5GvTJzy9jYdo+dS7Yg/xuGHHQp033rN/NezFes0\n7r6Ji9WDAgMBAAECgf9lrNuZLxCdX+rjp3LrRt5VgXD3IGifUK7CSZjBbM7HjsNn\nlSyg7fTg1T8mfyDHFbtuRRnIj0yAmk3ei2U5OrnmZovb6+tGecH/QsL8UuD7K8xX\ncwLsVQH6nVym65Ej5nYbMC1bXVfsrTNEBvoDurAF75B53ifdwinwfCSzX4Cvx1Ko\nV+UeRksexGafVMpG54vAhirorbgvazq9dB8yvNq15zJVLtuQc57jMxDU5sol3EnZ\nWNPJhImlUXYMSu6gpjsPQBd37AmFzdkZFDnGtZww7F6tu485HUnqYihYGa8KZZJf\ncYQsJ7WuiKKmew77WPqxXPXTqd7xKmh3ToF9zZkCgYEA6hdWMma07Q2EN9qYYyzy\nZ0gnu5iE9MCBmoJkx+fonDRvaBYOXM7DnO0y5eOgof3dVT9ejaFkrbi9RQDlkKi9\nXYcdqCPjy7czsQyXFo2dZFgwOZ3U3dIOoGyxB9Zx3WosXi9b0auONSsZ3Im94sLS\nU9ONFFcLmWFRSBpsG78jUV8CgYEAwCXmaQV0/iLrKRREvfsin0wI8cHJoKYrNSY1\nZkey2IQeSbIt9diu2LDtpzB5TKW7nhAA6A4g9DklE5uw2hVGfck5SJQgJX0jguUs\nLwZEMfO0HJBFPUTj+8naD6Rlvad8gJTrTyNomYEEviejyiAqMb8YPuJ8QfaciJWy\nFTEQel0CgYEAo6VyzcM9Iib70mwPce1+/DLWC/AAqnVVZSVYvONjmqeRZktc+QZW\ne4LavRlXN0eYjjrBp/M2xbdLIU0SLwG3eAW39s44Nja5fUEW8l5HtFluRSkQIY3y\nSbYSQC9q5GWP5LvozXfH72VVK/Zi935IuO9ARgLgCfadcvF9uBvz3bMCgYEAqHJR\nTK4xAv2/pFKVdOstTfMNQEs/pCsoY76sP48JdZBVMQwYCJc9qM9qeBAhtpTwJkAn\nW0fPkepq24a4gmb2Vh1Kr5rTl6ndsMmRc2QN8rCPrB655F15c+lf1iir3JhwqBRl\nOQp0j2Wwr7b2eqK5+sRoz/AjOHyme4KoDLXnmS0CgYEA2NlJS7KxjQCAGEMcLHg1\ngtOi3yxMnEzCWEbDj/y3ZYGFAn+KBvjR7uEKZa6zsbiCF7zZ+YW3inx9eGh0DSdK\nVXD2JyK/kRCWGPK1GeinzPopTBZH7mRItWqNIjMl0Uu+EQOeSt4zAbHlY2wS0oqS\nFs49zfqSZB9LD8quPgI7TK8=\n-----END PRIVATE KEY-----\n",
  "client_email": "services11@gs-api-test-316420.iam.gserviceaccount.com",
  "client_id": "115053798495590660786",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/services11%40gs-api-test-316420.iam.gserviceaccount.com",
  "spreadsheetId": "1j6MKVuhiw0xHy8krD93P8xUonAHyOkAQj7bwnqrkAq4",
  "accessToken": "pk.eyJ1IjoiYXNwaXJlOCIsImEiOiJja291Y3Q1eTkwaDJ0MnBrN3h3a2l0MGxrIn0.zQrd_Tphf5M3Juy_LWlHkQ"
};
},{}],"scripts/script.js":[function(require,module,exports) {
"use strict";

var _keys = require("../../keys.json");

//  mapboxgl.accessToken = keys.accessToken;
mapboxgl.accessToken = _keys.accessToken; //note center is in longitude (range -180 to 180), latitude (range -90 to 90)

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [-111.8438395, 33.741123],
  zoom: 13,
  scrollZoom: false
}); //

console.log('hello');
var BASE_URL = 'http://localhost:8080'; // axios.get('http://localhost:8080').then((response) => {
//     console.log(response.data);
//     let stores = regitsponse.data;
//     map.on('load', function (e) {
//         /* Add the data to your map as a layer */
//         map.addLayer({
//             id: 'locations',
//             type: 'circle',
//             /* Add a GeoJSON source containing place coordinates and information. */
//             source: {
//                 type: 'geojson',
//                 data: stores,
//             },
//         });
//     });
// });
},{"../../keys.json":"../keys.json"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50705" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/script.js"], null)
//# sourceMappingURL=/script.a6e1fada.js.map