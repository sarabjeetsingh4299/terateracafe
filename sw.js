// Enhanced Service Worker for Tera Tera Café PWA with Performance Optimizations
const CACHE_VERSION = 'v3';
const STATIC_CACHE = `static-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `dynamic-${CACHE_VERSION}`;
const IMAGE_CACHE = `images-${CACHE_VERSION}`;

// Critical resources to cache immediately (minimal for fast install)
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/menu-data.js',
  '/manifest.json'
];

// Install event - cache only critical resources for fast install
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  const expectedCaches = [STATIC_CACHE, DYNAMIC_CACHE, IMAGE_CACHE];
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => Promise.all(
        cacheNames.map(cacheName => {
          if (!expectedCaches.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      ))
      .then(() => self.clients.claim())
  );
});

// Optimized fetch with intelligent caching
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  if (request.method !== 'GET') return;
  
  // Images - Cache First
  if (request.destination === 'image') {
    event.respondWith(
      caches.match(request).then(cached => {
        if (cached) return cached;
        return fetch(request).then(response => {
          if (response.ok) {
            caches.open(IMAGE_CACHE).then(cache => cache.put(request, response.clone()));
          }
          return response;
        });
      })
    );
    return;
  }
  
  // Static assets - Cache First
  if (STATIC_ASSETS.includes(url.pathname)) {
    event.respondWith(
      caches.match(request).then(cached => cached || fetch(request))
    );
    return;
  }
  
  // External resources - Stale While Revalidate
  if (url.origin !== location.origin) {
    event.respondWith(
      caches.match(request).then(cached => {
        const fetchPromise = fetch(request).then(response => {
          if (response.ok) {
            caches.open(DYNAMIC_CACHE).then(cache => cache.put(request, response.clone()));
          }
          return response;
        });
        return cached || fetchPromise;
      })
    );
    return;
  }
  
  // Default - Network First
  event.respondWith(
    fetch(request).catch(() => caches.match(request))
  );
});