// Minimaler Service Worker, damit Chrome und Samsung Internet die Seite als App anbieten.
// Er speichert nichts zwischen. Die Seite selbst wird immer frisch geladen,
// damit Updates sofort ankommen (sonst hält der Browser sie bis zu 10 Minuten im Cache).
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",e=>{
  if(e.request.mode==="navigate")e.respondWith(fetch(e.request,{cache:"no-cache"}).catch(()=>fetch(e.request)));
});
