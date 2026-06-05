# UI-Kit — CLAUDE.md

`@chirpwireless/ui-kit` — публикуемая npm-библиотека: тема, иконки, shell-компоненты (`BaseLayout`, `Sidebar`, `UserMenu`, `Header`) и общая компонентная база для приложений Chirp / Kilo. Потребители получают одинаковый chrome (боковое меню, user-меню, layout), отличается только контент страниц.

## Language

- Общение с пользователем — на **русском**.
- README, комментарии в коде, commit messages, PR descriptions — на **английском**.
- **Никогда** не добавлять `Co-Authored-By` в commit messages.

## Stack

- **React 19 + TypeScript 5.7 + Vite 5** (lib mode, ES + CJS, `vite-plugin-dts`).
- **MUI 7** (`@mui/material`, `@mui/lab`, `@mui/icons-material`) + Emotion.
- **react-i18next v15** (встроенные namespaces в `src/locales/`).
- **Storybook 8** для разработки и визуальной документации.
- **Yarn** (`yarn.lock` — source of truth).

## Architecture — куда что класть

| Тип                                          | Локация                          |
| -------------------------------------------- | -------------------------------- |
| Custom MUI-обёртки (Button, Tabs, Dialog…)    | `/src/components/{Component}/`   |
| Лёгкие presentational (Avatar, ThemeSwitch…)  | `/src/ui/{Component}/`            |
| Shell (Sidebar, UserMenu, Header)             | `/src/components/{Component}/`   |
| Application layouts                          | `/src/layouts/{Layout}/`          |
| Custom hooks                                 | `/src/hooks/`                     |
| Pure helpers                                 | `/src/helpers/`                   |
| Theme / styles                               | `/src/styles/`                    |
| Icons                                        | `/src/assets/icons/`              |
| i18n resources                               | `/src/locales/`                   |
| Legacy (deprecated v0.x API)                 | `/src/_legacy/`                   |

**Не создавать** `components/` внутри других папок компонентов — вложенные части компонента лежат в `./components/` рядом с основным файлом.

### Component folder layout

```
src/components/Sidebar/
  ├── index.ts                  // только re-exports
  ├── Sidebar.tsx
  ├── SidebarLogo.tsx
  ├── components/
  │   └── RoutesList.tsx
  ├── types.ts
  ├── style.ts
  └── Sidebar.stories.tsx
```

## Library guidelines (specific to ui-kit)

- **Public API строго через `src/index.ts`** и подпути экспорта в `package.json#exports`. Если компонент / тип не реэкспортирован — считается внутренним.
- **Никаких side-effect импортов** в публичном API, кроме `import './styles/style.scss'` в корневом `src/index.ts`. Поле `sideEffects` в `package.json` указывает только CSS / SCSS.
- **Все strings, специфичные для приложения, — через props.** Внутри ui-kit `t()` используется только для собственных дефолтов (`organizationsLabel`, `logoutLabel` и т.п.).
- **Generic shell**: `BaseLayout` / `Sidebar` / `UserMenu` принимают данные и обработчики через props/slots. Никакого знания об auth, organizations, wallets, feature-flags внутри библиотеки.
- **Без бизнес-зависимостей**: `react-router`, `react-toastify`, MUI и прочее — только `peerDependencies`. `dependencies` пустой (или используется только для чистых helpers).
- **Версионирование**: SemVer. Major bump — любое изменение публичного API, перенос между `/` и `/legacy`, удаление компонента.

## TypeScript

- **Не использовать `any`** — всегда явные типы, generics, type guards.
- Избегать `as any`. Для неизвестных значений — `unknown` + narrowing.
- **Выносить сложные условия** в именованные переменные — не инлайнить compound boolean в JSX props.
- Public types экспортируются именованно: `export type { SidebarProps, SidebarItem } from './Sidebar';`.

## Exports

- **Только named exports**. Default exports — запрещены.
- **Не нужен `displayName`** (он нужен только для default exports).
- Каждая папка компонента имеет `index.ts` с re-exports: `export * from './ComponentName';`.

```typescript
// ✅ Correct
export const Sidebar = memo<SidebarProps>((props) => { ... });

// ❌ Wrong
export default Sidebar;
Sidebar.displayName = 'Sidebar';
```

## Naming

- **Functions**: `{noun}{verb}` — `createMenuItem`, `mapRoutes`.
- **Event handlers**: `handle{Action}` — `handleSubmit`, `handleItemClick`.
- **Hooks**: `use{Thing}` — `useLayout`, `useBreakpoints`.
- **Slots/render-props**: `{name}Slot` — `footerSlot`, `notificationsSlot`.

## Comments

- Только английский.
- Только там, где есть нетривиальная бизнес/архитектурная логика.
- Объяснять **WHY**, не **WHAT**.

## i18n

- Библиотека: `react-i18next` + `i18next`.
- Translation files: `src/locales/resources/*.json`.
- Default namespaces ui-kit: `common`, `sidebar`, `userMenu`.
- **4 языка** обязательны: `en`, `de`, `fr`, `es`.
- **Key = English text**.
- Потребитель мерджит `uiKitLocaleModule` со своими ресурсами.
- В компонентах: большинство строк приходит из props. Внутренний `t()` — только для дефолтов (когда соответствующий prop не задан).

```typescript
// ✅ Дефолт через t(), переопределяемый из props
const Sidebar = ({ collapseTooltip, ... }: SidebarProps) => {
  const { t } = useTranslation('sidebar');
  const collapseLabel = collapseTooltip ?? t('Collapse sidebar');
  ...
};
```

## React patterns

### Минимизировать useEffect

Избегать `useEffect` для реакции на изменения state/props, если ту же логику можно вызвать прямо в обработчике.

```typescript
// ✅
const handleSelect = (value: string) => {
  setSelected(value);
  doAdditionalWork(value);
};

// ❌
const handleSelect = (value: string) => setSelected(value);
useEffect(() => { doAdditionalWork(selected); }, [selected]);
```

`useEffect` — только для внешней синхронизации (DOM, подписки, third-party).

### Порядок внутри компонента

1. Hooks (`useState`, `useRef`, `useMemo`, `useCallback`, custom hooks).
2. Derived variables.
3. Handlers.
4. `useEffect` (всегда в конце, перед `return`).
5. `return` (JSX).

## Code quality

- Извлекать повторяющуюся логику в именованные функции — не дублировать inline-мапперы в `useState` initializer и `useEffect`.
- Сложные условия → именованные переменные.
- `useState` initializer — однострочник, ссылающийся на extracted-функцию.

## Pre-commit checklist

- [ ] Импорты через path alias `@chirp/ui/` или относительные внутри одной папки.
- [ ] Нет `any`.
- [ ] Только named exports.
- [ ] Нет default-export + `displayName`.
- [ ] Все public types реэкспортированы из `src/index.ts`.
- [ ] Дефолтные строки локализованы через `t()` (4 языка).
- [ ] Storybook-story есть для нового публичного компонента.
- [ ] `yarn build` проходит.
- [ ] `yarn lint` зелёный.

## Commands

```bash
yarn install

yarn dev                 # Storybook на :6006
yarn build               # vite build (lib mode + dts)
yarn build-storybook
yarn lint
yarn build-and-pack      # build + yarn pack для локального теста в приложении
```

## Development principles

- **Никаких fallback / workaround** — делать правильно или не делать.
- **Понять до того, как изменить** — прочитать существующий код.
- **Fix root cause** — не симптом.
- **Если решение выглядит как хак — это, скорее всего, не тот путь.**
- **Cross-platform** — решения работают на Windows, macOS, Linux.

## Key files

- `src/index.ts` — public API root.
- `src/styles/theme/index.ts` — `getTheme(mode, variant)` factory.
- `src/components/Sidebar/Sidebar.tsx` — generic sidebar shell.
- `src/components/UserMenu/UserMenu.tsx` — generic user menu shell.
- `src/layouts/BaseLayout/BaseLayout.tsx` — generic app shell.
- `src/_legacy/` — старый v0.x API, доступен через `@chirpwireless/ui-kit/legacy`.
