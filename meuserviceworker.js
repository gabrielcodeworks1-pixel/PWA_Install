self.addEventListener('install', function(event) {
    console.log('Service Worker instalado');
    event.waitUntil(
        caches.open('pwa-cache-v1').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/main.js',
                '/manifest.json',
                '/icon-192.png',
                '/icon-512.png',
                '/meuserviceworker.js',
                '/style.css'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});