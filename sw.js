// Instalación de la PWA
self.addEventListener('install', (e) => {
    console.log('[Dunamis PWA] Instalada exitosamente');
    self.skipWaiting();
});

// Interceptar conexiones (Requisito obligatorio para el botón de instalar)
self.addEventListener('fetch', (e) => {
    e.respondWith(
        fetch(e.request).catch(() => {
            return new Response('Estás desconectado de internet.');
        })
    );
});
