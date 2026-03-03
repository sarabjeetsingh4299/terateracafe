// Enhanced Service Worker for Tera Tera Café PWA with Performance Optimizations
const CACHE_NAME = 'tera-tera-cafe-v2';
const STATIC_CACHE = 'static-v2';
const DYNAMIC_CACHE = 'dynamic-v2';
const IMAGE_CACHE = 'images-v2';

// Critical resources to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/menu-data.js',
  '/manifest.json',
  '/img_5119.jpeg',
  '/tera-tera-cafe-maps.png'
];

// External resources to cache
const EXTERNAL_ASSETS = [
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

// Install event - cache critical resources with performance optimization
self.addEventListener('install', (event) => {
  console.log('SW: Installing with performance optimizations');
  
  event.waitUntil(
    Promise.all([
      // Cache static assets
      caches.open(STATIC_CACHE).then(cache => {
        console.log('SW: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      }),
      // Cache external assets separately
      caches.open(DYNAMIC_CACHE).then(cache => {
        console.log('SW: Caching external assets');
        return cache.addAll(EXTERNAL_ASSETS);
      })
    ]).then(() => {
      console.log('SW: Installation complete');
      // Force activation of new service worker
      return self.skipWaiting();
    })
  );
});

// Activate event - clean up old caches efficiently
self.addEventListener('activate', (event) => {
  console.log('SW: Activating with cache cleanup');
  
  const expectedCaches = [STATIC_CACHE, DYNAMIC_CACHE, IMAGE_CACHE];
  
  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (!expectedCaches.includes(cacheName)) {
              console.log('SW: Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Take control of all clients immediately
      self.clients.claim()
    ]).then(() => {
      console.log('SW: Activation complete');
    })
  );
});

// Enhanced fetch event with intelligent caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests and chrome-extension requests
  if (request.method !== 'GET' || url.protocol === 'chrome-extension:') {
    return;
  }
  
  // Handle different types of requests with appropriate strategies
  if (STATIC_ASSETS.includes(url.pathname)) {
    // Cache First strategy for static assets
    event.respondWith(cacheFirst(request, STATIC_CACHE));
  } else if (url.hostname === 'images.pexels.com') {
    // Cache First with expiration for images
    event.respondWith(cacheFirstWithExpiration(request, IMAGE_CACHE, 86400000)); // 24 hours
  } else if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'cdnjs.cloudflare.com') {
    // Stale While Revalidate for external resources
    event.respondWith(staleWhileRevalidate(request, DYNAMIC_CACHE));
  } else if (url.pathname.startsWith('/api/')) {
    // Network First for API calls
    event.respondWith(networkFirst(request, DYNAMIC_CACHE));
  } else {
    // Network First with fallback for other requests
    event.respondWith(networkFirstWithFallback(request));
  }
});

// Cache First strategy - fastest for static assets
async function cacheFirst(request, cacheName) {
  try {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('SW: Cache first failed:', error);
    return new Response('Offline', { status: 503 });
  }
}

// Cache First with expiration for images
async function cacheFirstWithExpiration(request, cacheName, maxAge) {
  try {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      const cachedDate = new Date(cachedResponse.headers.get('date'));
      const now = new Date();
      
      if (now - cachedDate < maxAge) {
        return cachedResponse;
      }
    }
    
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const responseToCache = networkResponse.clone();
      // Add timestamp header
      const headers = new Headers(responseToCache.headers);
      headers.set('date', new Date().toISOString());
      
      const modifiedResponse = new Response(responseToCache.body, {
        status: responseToCache.status,
        statusText: responseToCache.statusText,
        headers: headers
      });
      
      cache.put(request, modifiedResponse);
    }
    return networkResponse;
  } catch (error) {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
    return cachedResponse || new Response('Image not available offline', { status: 503 });
  }
}

// Stale While Revalidate - good for external resources
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  
  const fetchPromise = fetch(request).then(networkResponse => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  }).catch(() => cachedResponse);
  
  return cachedResponse || fetchPromise;
}

// Network First - for dynamic content
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
    return cachedResponse || new Response('Offline', { status: 503 });
  }
}

// Network First with fallback to main page
async function networkFirstWithFallback(request) {
  try {
    return await fetch(request);
  } catch (error) {
    if (request.destination === 'document') {
      const cache = await caches.open(STATIC_CACHE);
      return cache.match('/index.html');
    }
    return new Response('Offline', { status: 503 });
  }
}

// Background sync for offline functionality
self.addEventListener('sync', (event) => {
  console.log('SW: Background sync:', event.tag);
  
  if (event.tag === 'background-sync-order') {
    event.waitUntil(processOfflineOrders());
  }
});

// Optimized offline order processing
async function processOfflineOrders() {
  try {
    const cache = await caches.open('offline-orders');
    const requests = await cache.keys();
    
    const processPromises = requests.map(async (request) => {
      try {
        const response = await cache.match(request);
        const orderData = await response.json();
        
        // Simulate API call (replace with actual endpoint)
        const result = await fetch('/api/orders', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(orderData)
        });
        
        if (result.ok) {
          await cache.delete(request);
          console.log('SW: Offline order processed successfully');
        }
      } catch (error) {
        console.log('SW: Failed to process offline order:', error);
      }
    });
    
    await Promise.allSettled(processPromises);
  } catch (error) {
    console.log('SW: Error in offline order processing:', error);
  }
}

// Message handling for cache updates
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CACHE_IMAGES') {
    event.waitUntil(preloadImages(event.data.urls));
  }
});

// Preload images for better performance
async function preloadImages(imageUrls) {
  try {
    const cache = await caches.open(IMAGE_CACHE);
    const preloadPromises = imageUrls.map(url => {
      return fetch(url).then(response => {
        if (response.ok) {
          return cache.put(url, response);
        }
      }).catch(error => {
        console.log('SW: Failed to preload image:', url, error);
      });
    });
    
    await Promise.allSettled(preloadPromises);
    console.log('SW: Image preloading complete');
  } catch (error) {
    console.log('SW: Error in image preloading:', error);
  }
}