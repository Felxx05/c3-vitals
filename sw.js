// Minimaler Service Worker, damit Chrome und Samsung Internet die Steuerung als App anbieten.
// Er speichert nichts zwischen, alle Anfragen gehen direkt ins Netz.
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",e=>{});
