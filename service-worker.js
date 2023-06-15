// service-worker.js

const CACHE_NAME = 'my-app-cache';
const urlsToCache = [
  '/',
  '/public/index.html',
  '/src/img/first.png',
  '/src/img/fifth.png',
  '/src/img/fourth.png',
  '/src/img/li1.png',
  '/src/img/li2.png',
  '/src/img/li3.png',
  '/src/img/li4.png',
  '/src/img/plus.png',
  '/src/img/second.png',
  '/src/img/sixth-text.png',
  '/src/img/sixth-text2.png',
  '/src/img/sixth-text3.png',
  '/src/img/sixth.png',
  '/src/img/third.png',// Add paths to all the images you want to cache
  // Add paths to other static assets you want to cache
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
