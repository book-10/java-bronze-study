const CACHE_NAME = 'java-bronze-v5';
const FILES = [
  './',
  './index.html',
  './questions.js',
  './notes.js',
  './manifest.json',
  './icon-192.svg',
  './Java_インスタンス化.png',
  './Java_クラスの継承.png',
  './Java_オーバーライド.png',
  './Java_抽象クラス.png',
  './Java＿カプセル化.png',
  './Java_コンポジション.png',
  './Java_例外処理.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // ネットワーク優先（オンライン時は常に最新を取得）
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const clone = res.clone();
        caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
