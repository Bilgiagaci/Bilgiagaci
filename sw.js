const CACHE_NAME = 'bilgi-agaci-cache-v2'; // Sürümü güncelledik
const urlsToCache = [
  '/',
  '/index.html',
  '/language.js',
  '/sorular.js',

  // Avatarlar (sorular.js dosyasından otomatik olarak listelendi)
  '/avatars/avatar1.png',
  '/avatars/avatar2.png',
  '/avatars/avatar3.png',
  '/avatars/avatar4.png',
  '/avatars/avatar5.png',
 

  // Ses Dosyaları (index.html dosyasından tespit edildi)
  '/audio/correct.wav',
  '/audio/wrong.wav',
  '/audio/click.wav'
  '/audio/achievement.wav'
  '/audio/time-up.wav'
];

// Service Worker'ı yükle ve dosyaları önbelleğe al
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// İstekleri ele al: önce önbellekten sun, yoksa ağdan getir
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Eski önbellekleri temizle
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});