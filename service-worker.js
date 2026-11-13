// Retire the previous site cache so returning visitors receive the new site.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil((async () => {
  const keys = await caches.keys();
  await Promise.all(keys.filter(key => key.startsWith('workbox-precache')).map(key => caches.delete(key)));
  await self.registration.unregister();
  await self.clients.claim();
})()));
