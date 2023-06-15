self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('my-cache').then(function (cache) {
            return cache.addAll([
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
            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});
