// Service worker mínimo: solo existe para cumplir el requisito de
// instalación de Chrome/Android. No cachea nada a propósito, para
// evitar que la app quede "pegada" en una versión vieja.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
