import React, { useState } from 'react';
import { Flag } from 'react-flag-kit';

const languages = [
  { code: 'en', name: 'English', flag: 'US' },
  { code: 'fr', name: 'French', flag: 'FR' },
  { code: 'es', name: 'Spanish', flag: 'ES' },
  // Add more languages as needed
];

const FlagSelect = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0].code);

  const handleLanguageChange = (code) => {
    setSelectedLanguage(code);
    // Here you can implement logic to change the website language
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center items-center rounded-full border border-gray-300 shadow-sm px-2 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          style={{ width: '50px' }}
        >
          <Flag code={selectedLanguage} />
        </button>
      </div>
      <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
              role="menuitem"
            >
              <Flag code={language.flag} className="inline-block mr-2" />
              {language.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlagSelect;
