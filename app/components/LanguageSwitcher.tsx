'use client';

import { useI18n } from '../contexts/I18nContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useI18n();

  return (
    <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-3 py-2 border border-rose-200/50 shadow-md">
      <button
        onClick={() => setLanguage('en')}
        className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
          language === 'en'
            ? 'bg-gradient-to-r from-rose-600 to-rose-700 text-white shadow-md'
            : 'text-gray-600 hover:text-rose-600 hover:bg-rose-50'
        }`}
      >
        EN
      </button>
      <div className="h-4 w-px bg-rose-200"></div>
      <button
        onClick={() => setLanguage('bn')}
        className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
          language === 'bn'
            ? 'bg-gradient-to-r from-rose-600 to-rose-700 text-white shadow-md'
            : 'text-gray-600 hover:text-rose-600 hover:bg-rose-50'
        }`}
      >
        বাংলা
      </button>
    </div>
  );
}

