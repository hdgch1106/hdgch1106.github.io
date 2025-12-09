'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b68f4b7acba8b0c79453b65d2e668ff5",
"assets/AssetManifest.bin.json": "4a5b1a48748f65522c3d65f9e483cf28",
"assets/AssetManifest.json": "31d87dcc984e4718a4464e173d222328",
"assets/assets/icons/android.png": "8c4ccaa5e22375278048f573c3803331",
"assets/assets/icons/backend.png": "06a5c8ce8613a50e1822bf63ae0a3aa9",
"assets/assets/icons/firebase.png": "7371a3d035412a78dabc88d0e5237b44",
"assets/assets/icons/flutter.png": "f78d11c9cda36c52917f4794d09f10d9",
"assets/assets/icons/ips.png": "4419fe7dcebb04b4885f363732b8b02b",
"assets/assets/icons/soalsac.png": "9d1e515f334ec7d1790d9368f2f8d48b",
"assets/assets/icons/spigot.png": "421057de6617d21f9393624b8dc2357e",
"assets/assets/icons/web.png": "d41ba459b76a4abc8e513744dee4285c",
"assets/assets/images/me.png": "5da4af0865857fbd56ffb2cd0ffda27e",
"assets/assets/images/project1.png": "9cd894e44eb9c26b1c796d914a8abdbf",
"assets/assets/images/project1_preview1.png": "1a1e0019b43e1d39a66d223a968b9d49",
"assets/assets/images/project1_preview2.png": "9c260dc51a45efc6353a9bb4783488a8",
"assets/assets/images/project1_preview3.png": "a83595f274b4912854327936f0e6438e",
"assets/assets/images/project1_preview4.png": "bbdfae5636ccfa243d65f48465d24ef5",
"assets/assets/images/project1_preview5.png": "54e79ba447369185c21b9ea38e8ff689",
"assets/assets/images/project2.png": "2ef0fca32d052c53223e4d91183c893f",
"assets/assets/images/project2_preview1.png": "2c54ddcf2dcda684b6794d284888869f",
"assets/assets/images/project2_preview2.png": "267792caf18c12131825e757845a7e2c",
"assets/assets/images/project2_preview3.png": "9eec15f9aaf4938fdc29534bdfb8666b",
"assets/assets/images/project2_preview4.png": "e8dac3e35d37883a387b55ce61a0246e",
"assets/assets/images/project2_preview5.png": "48624b22a4d9101af19e594cdf5985e7",
"assets/assets/images/project3.png": "a61334ed288e4fe078fb0bd6afb7254a",
"assets/assets/images/project3_preview1.png": "db22555f12e6721678107202bbe3b8d4",
"assets/assets/images/project3_preview2.png": "68d57f8c4cd127b10f9d5edc98c7c284",
"assets/assets/images/project3_preview3.png": "d14fe369296aa7a760f394565b2908f3",
"assets/assets/images/project3_preview4.png": "256fea7154034822807df1733af58118",
"assets/assets/images/project3_preview5.png": "2aba9e9ff7cfe5a6ba5fdb05c632126c",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/fonts/MaterialIcons-Regular.otf": "9b5c5e4e8bc2e2da8467eaaf24cdfb82",
"assets/NOTICES": "b40b2861826bd594dbc99ea13874f9ba",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d8eddcc031e22621528bed369ef88708",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "01a6f1dbbca5f54ed681f0665c7d6eeb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "239a9970a7a727a87d7d1c6a4f3e3691",
"/": "239a9970a7a727a87d7d1c6a4f3e3691",
"main.dart.js": "e55107d727c2d716ec23cbf3907fc054",
"manifest.json": "aee7c4007fda52a6824c76eec5a84487",
"version.json": "eb33ccd44b584eaab0796d41f01fc156"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
