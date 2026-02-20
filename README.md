# Paturehon - Church Management System Landing Page

Paturehon (from Batak language: "merapihkan" - to organize, repair, arrange, or maintain something to make it better, tidy, or functional again) is a modern, responsive landing page for a comprehensive church management system built with React, TypeScript, and Vite. Features internationalization support for English and Indonesian languages.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Internationalization**: Support for English and Indonesian languages with localStorage persistence
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Animations**: Smooth animations using Framer Motion
- **Charts**: Interactive data visualizations with Recharts
- **Warm Color Scheme**: Church-appropriate warm color palette
- **Church Asset Management**: Comprehensive tracking and management of church assets

## Internationalization

The application supports two languages:

- **English (en)**: Default language
- **Indonesian (id)**: Complete Indonesian translation

### Language Switcher

Users can switch between languages using the language toggle button in the navigation bar. The selected language is **automatically saved to localStorage** and will persist across browser sessions and page refreshes.

### Language Detection Priority

The application detects the user's preferred language in this order:

1. **localStorage** (saved user preference)
2. **Browser navigator** (system/browser language)
3. **HTML lang attribute** (fallback)
4. **English** (final fallback)

### Adding New Languages

To add a new language:

1. Add the new language resources to `src/i18n.ts`
2. Update the language switcher component if needed
3. Add the language code to the i18n configuration

## Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **Framer Motion** for animations
- **Recharts** for data visualization
- **react-i18next** for internationalization

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── LanguageSwitcher.tsx    # Language toggle component
│   └── ui/                     # shadcn/ui components
├── App.tsx                     # Main application component
├── App.css                     # Global styles and CSS variables
├── i18n.ts                     # Internationalization configuration
└── main.tsx                    # Application entry point
```

## Customization

### Colors

The application uses CSS custom properties for theming. You can modify the color scheme in `src/App.css`:

```css
:root {
  --primary: oklch(0.7 0.15 85); /* Yellow */
  --accent: oklch(0.65 0.2 35); /* Orange */
  --secondary: oklch(0.95 0.02 85); /* Cream */
  /* ... other variables */
}
```

### Translations

All text content is managed through the i18n system. To modify translations, edit the resources object in `src/i18n.ts`.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
