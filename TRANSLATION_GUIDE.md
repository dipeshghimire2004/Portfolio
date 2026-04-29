# Translation Implementation Guide

## Overview
This portfolio now supports English and Nepali (नेपाली) translations using `i18next` and `react-i18next`.

## How to Use

### For Users
- Click the language toggle button in the navbar (shows "नेपाली" when in English mode, "EN" when in Nepali mode)
- Language preference is saved in localStorage and persists across sessions

### For Developers

#### File Structure
```
src/
├── i18n.ts                          # i18n configuration
├── locales/
│   ├── en/
│   │   └── translation.json         # English translations
│   └── ne/
│       └── translation.json         # Nepali translations
```

#### Adding Translations to Components

1. Import the hook:
```tsx
import { useTranslation } from 'react-i18next';
```

2. Use in component:
```tsx
const MyComponent = () => {
  const { t } = useTranslation();
  
  return <h1>{t('hero.name')}</h1>;
};
```

3. For arrays:
```tsx
const items = t('bio.paragraphs', { returnObjects: true });
```

#### Adding New Translations

1. Add the key-value pair to both `en/translation.json` and `ne/translation.json`
2. Use the translation key in your component with `t('your.key')`

#### Changing Language Programmatically
```tsx
import { useTranslation } from 'react-i18next';

const { i18n } = useTranslation();
i18n.changeLanguage('ne'); // Switch to Nepali
i18n.changeLanguage('en'); // Switch to English
```

## Components Updated
- ✅ Navbar (with language switcher)
- ✅ Hero
- ✅ About
- ⏳ Projects (next)
- ⏳ Skills (next)
- ⏳ Experience (next)
- ⏳ Education (next)
- ⏳ Contact (next)
- ⏳ Footer (next)

## Next Steps
Continue updating remaining components (Projects, Skills, Experience, Education, Contact, Footer) to use translations.
