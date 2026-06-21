const CACHE_NAME = 'rcp-pro-v1';
const ASSETS = [
  'index.html',
  'manifest.json'
];

// Instalar y guardar en caché los archivos críticos
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Responder desde la caché si no hay internet
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});