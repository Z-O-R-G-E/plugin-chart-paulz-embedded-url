### Использование

Для сборки плагина, выполните следующие команды:
```
npm i
npm run build
```

В качестве альтернативы, чтобы запустить плагин в режиме разработки (= пересоздавать каждый раз при внесении изменений), запустите сервер разработки с помощью следующей команды:
```
npm run dev
```

Чтобы добавить пакет в Superset, перейдите в подкаталог `superset-frontend` в исходной папке Superset и запустите
```
npm i -S ./plugins/plugin-chart-paulz-embedded-url
```

Если ваш плагин Superset существует в каталоге `superset-frontend` и вы хотите устранить ошибки TypeScript, связанные с неправильным разрешением `@superset-ui/core`, добавьте следующее в ваш файл `tsconfig.json`:
```
"references": [
  {
    "path": "../../packages/superset-ui-chart-controls"
  },
  {
    "path": "../../packages/superset-ui-core"
  }
]
```

Вы также можете добавить следующее в массив `include` в `tsconfig.json`, чтобы сделать типы Superset доступными для вашего плагина:
```
"../../types/**/*"
```

Наконец, если вы хотите убедиться, что ваш плагин `tsconfig.json` согласован с корневым проектом Superset, вы можете добавить следующее в свой файл `tsconfig.json`:
```
"extends": "../../tsconfig.json",
```

После этого отредактируйте `superset-frontend/src/visualizations/presets/MainPreset.js` и внесите следующие изменения:
```js
import { PaulzEmbeddedUrl } from '@paulz-web/plugin-chart-paulz-embedded-url';
```

чтобы импортировать плагин, а затем добавить следующее в массив, переданный свойству `plugins`:
```js
    new PaulzEmbeddedUrl().configure({
        key: 'paulz-embedded-url',
    }),
```

После этого плагин должен появиться при запуске Superset, например. сервер разработки:
```
npm run dev-server
```
