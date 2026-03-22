self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('fatfighters-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html'
        // add more files if you have them
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
