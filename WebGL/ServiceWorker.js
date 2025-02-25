const CACHE_NAME = "unity-webgl-cache-v1";
const ASSETS_TO_CACHE = [
    "/index.html",
    "/Build/WebGL.loader.js",
    "/Build/WebGL.framework.js",
    "/Build/WebGL.wasm",
    "/Build/WebGL.data"
];

// Install Service Worker & Cache Files
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("Caching Unity WebGL files...");
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// Fetch Requests from Cache
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

// Activate & Remove Old Caches
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            );
        })
    );
});
