# Аудит и План Рефакторинга

## 🔴 КРИТИЧЕСКИЕ проблемы безопасности
[ ] 1.1 Коллекция купонов полностью открыта (`read: () => true`)
[ ] 1.2 GraphQL Playground потенциально доступен в продакшне
[ ] 1.3 `PAYLOAD_SECRET` слишком короткий и предсказуемый
[ ] 1.4 Чувствительные данные в URL при возврате Stripe

## 🟠 СЕРЬЁЗНЫЕ проблемы безопасности
[ ] 2.1 Отсутствие валидации купона на сервере при initiatePayment
[x] 2.2 XSS через `v-html` в rich text (richtext.ts)
[x] 2.3 XSS через `v-html` с SVG (svg.ts)
[x] 2.4 Отсутствие rate limiting на аутентификацию (настроен maxLoginAttempts в Payload)
[ ] 2.5 Регистрация пользователей открыта (сейчас `verify: false` из-за отсутствия email-провайдера)

## 🔴 Ошибки в бизнес-логике
[x] 3.1 Race condition при изменении количества товаров (добавлен debounce)
[ ] 3.2 Inventory check отсутствует при добавлении в корзину
[x] 3.3 Порог бесплатной доставки проверяется ПОСЛЕ скидки (согласовано)
[ ] 3.4 Checkout guard ненадёжен (срабатывает только на client-side)
[x] 3.5 Хардкод «Benutzerkonto» в header (заменено на translation)

## 🟡 Проблемы производительности
[x] 4.1 N+1 запросов при загрузке корзины/избранного (исправлено)
[ ] 4.2 Дублирование запросов при загрузке главной страницы
[ ] 4.3 `window.addEventListener('resize')` без throttle
[ ] 4.4 `usePayloadImageUrl` вызывает `useRuntimeConfig` в цикле
[ ] 4.5 Отсутствие lazy loading изображений
[x] 4.6 Prerender с `crawlLinks: true` при динамическом контенте (заменено на ISR)

## 🟡 Ошибки и недочёты в коде
[x] 5.1 Отсутствие `await` при `cartStore.init()`
[x] 5.2 Register и login не используют `localePath`
[ ] 5.3 Rate limiter в contact.post.ts не масштабируется
[x] 5.4 Дублирование `useAsyncData` ключа `payload-settings`
[ ] 5.5 `sitemap-routes.ts` использует публичный URL вместо серверного

## 🔵 Качество кода и архитектура
[x] 6.3 Типизация — `any` в критических местах (исправлено в plugin config)
[x] 6.4 Отсутствие error boundaries для компонентов (обёрнуты в app.vue)
[ ] 6.5 Нет пагинации в каталоге
[x] 6.6 Hardcoded fallback values (удалены хардкоды в useCartStore)

---

## Исходная структура файлов (Progress Tracker)

### Components
[x] base, cart, catalog, category, content, cookie, header, home, Footer, SmartLink
[ ] checkout, form, item

### Pages
[x] page, all-items.vue, cart.vue, contact.vue, favorites.vue, index.vue, payment
[ ] auth, category, item, cabinet.vue, checkout.vue

### Stores
[x] useCartStore.ts (основные баги профикшены)
[ ] useCheckoutStore.ts
[ ] useUserStore.ts

### Utils
[x] richtext.ts, svg.ts
[ ] payloadImage.ts, price.ts

### Composables
[ ] Все файлы usePayload... (ожидают проверки N+1 запросов)
