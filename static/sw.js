// Short Street Cook Book — service worker
// Bump VERSION to force a refresh of cached pages and assets on next visit.
const VERSION = 'ssc-v1';

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    try {
      const cache = await caches.open(VERSION);
      // precache the landing page so the app opens offline
      await cache.add(new Request('./', { cache: 'reload' }));
    } catch (e) { /* offline at install time — fine */ }
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  if (new URL(req.url).origin !== self.location.origin) return;

  // Page navigations: network-first, so online visits get fresh content and
  // offline visits fall back to the cached page (or the landing page).
  if (req.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const res = await fetch(req);
        const cache = await caches.open(VERSION);
        cache.put(req, res.clone());
        return res;
      } catch (e) {
        return (await caches.match(req)) || (await caches.match('./'));
      }
    })());
    return;
  }

  // Assets (CSS/JS/images/fonts): stale-while-revalidate — serve cache fast,
  // refresh in the background.
  event.respondWith((async () => {
    const cached = await caches.match(req);
    const network = fetch(req).then((res) => {
      if (res && res.status === 200) {
        caches.open(VERSION).then((c) => c.put(req, res.clone()));
      }
      return res;
    }).catch(() => cached);
    return cached || network;
  })());
});
