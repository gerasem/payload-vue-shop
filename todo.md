#ToDo
[-] read languages array in header storefront from payload config
[x] get Product type from backend and use it for HttpTypes.StoreProduct and HttpTypes.CartLineItem
[x] create collection MediaSvg for inline svgs
[ ] delete services/medusa config.ts file and create payload config file for payload sdk
[x] custom field in header for slogan
[x] header: get data from api
[x] test language change
[ ] get item by slug
[ ] get gallery form api for item
[ ] get item variants from api for item
[x] ! item price EUR
[ ] check price variants with variable price
[x] Footer get links from api
[ ] read data from SEO tab and use them in frontend
[x] get categories from api
[x] add image for categories

[ ] get data from payload for each page (main page, text pages in footer etc.)

проблема в том что сейчас для каждой покупки нужно делать новый билд. решение: получать inventory
при открытии страницы товара и страницы корзины. 

itemView - api запрос проверка количества (параметр productId), заодно получить количество
по каждому варианту (!). это говно нужно куда то сохранить? так то нужно добавить 
поля inventory в itemStore.items. обязательно нужно проверить с помощью функции
isClient перед загрузкой inventory в апи, потому что для ssg это вообще не нужно.

isClient ? getInventoryFromApi и записать это значение в локальную переменную в
компоненте, которая по умолчанию равна 1000. перед запросом выполнить проверку, может значение inventory уже в сторе

нужно так же править graphql запрос, потому что нам больше не нужно значение inventory.

но еще нужно добавить в IItem необязательный параметр inventory в том числе и для вариантов

CartItem делать запрос inventory при onMounted, если в сторе нет значения

скачать webstorm для коммитов с чекбоксами

НОВОЕ: мне не нравится что в CartStore новый тип для товаров в корзине, хотя лучше сохранять туда сам товар. нужно переделать 
CartView и CartItem