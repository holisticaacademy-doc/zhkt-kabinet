// Сервис-воркер кабинета «Формула здоровья ЖКТ»: нужен, чтобы кабинет ставился значком на экран.
// Ничего не кэширует — всегда открывается свежая версия. Без интернета показывает понятную заглушку.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode !== 'navigate') return;
  e.respondWith(fetch(e.request).catch(() => new Response(
    '<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Нет интернета</title>' +
    '<body style="font-family:system-ui,sans-serif;background:#F3F8F5;color:#173f35;display:grid;place-items:center;min-height:100vh;margin:0;padding:24px;text-align:center">' +
    '<div><h1 style="font-size:22px">Нет подключения к интернету</h1><p>Кабинет откроется, как только появится связь.</p>' +
    '<button onclick="location.reload()" style="background:#9e007e;color:#fff;border:0;border-radius:999px;padding:12px 22px;font-size:16px;font-weight:700">Обновить</button></div></body>',
    { headers: { 'Content-Type': 'text/html; charset=utf-8' } })));
});
