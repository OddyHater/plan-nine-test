## Тестовое задание для plan 9
Макет [тут](https://www.figma.com/design/CTkJvKWW12DD0EMeXOK6IV/Testovoe-Front---FROG?node-id=0-1&p=f&t=4nxpq2eGCw5FgJZ6-0)

## Запуск проекта

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Затем откройте [http://localhost:3000](http://localhost:3000).

## Пометка
Roboto Flex — это высоко настраиваемый вариативный шрифт. Его визуальный вид зависит от конкретных значений осей вариаций. Чтобы максимально точно соответствовать макету, требуется явная настройка параметров шрифта. Без точной конфигурации, использованной в дизайне, возможны незначительные визуальные отличия.

Дополнительно по [ссылке](https://fonts.google.com/specimen/Roboto+Flex/about)

Текущие настройки шрифта реализованы в app/global.css: 

```aiignore
  font-variation-settings:
    "slnt" 0,
    "GRAD" 0,
    "XOPQ" 107,
    "YOPQ" 107,
    "XTRA" 468,
    "YTAS" 750,
    "YTDE" -203,
    "YTFI" 738,
    "YTLC" 514,
    "YTUC" 712,
    "wdth" 70;
```

## Деплой

Деплой реализован [здесь](https://plan-nine-test.vercel.app/)
