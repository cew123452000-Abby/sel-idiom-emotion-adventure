const CACHE_NAME = "sel-idiom-pwa-v1";
const CORE_FILES = [
  "./",
  "./index.html",
  "./app.js",
  "./styles.css",
  "./manifest.webmanifest",
  "./assets/icons/app-icon-192.png",
  "./assets/icons/app-icon-512.png",
  "./assets/icons/apple-touch-icon.png",
  "./assets/emotion-adventure-bg-v2.png",
  "./assets/emotion-island.png",
  "./assets/emotion-monopoly-bg.png",
  "./assets/family-situations.png",
  "./assets/play-situations.png",
  "./assets/school-situations.png"
];
const IDIOM_FILES = ["anger", "disgust", "fear", "joy", "sadness", "surprise"]
  .flatMap(group => Array.from({ length: 10 }, (_, index) =>
    `./assets/idioms/${group}/${String(index + 1).padStart(2, "0")}.jpg`
  ));
const PRECACHE_FILES = [...CORE_FILES, ...IDIOM_FILES];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_FILES))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin) return;

  event.respondWith((async () => {
    const cached = await caches.match(event.request, { ignoreSearch: true });
    if (cached) return cached;
    try {
      const response = await fetch(event.request);
      if (response.ok) {
        const cache = await caches.open(CACHE_NAME);
        cache.put(event.request, response.clone());
      }
      return response;
    } catch (error) {
      if (event.request.mode === "navigate") {
        return caches.match("./index.html");
      }
      throw error;
    }
  })());
});
