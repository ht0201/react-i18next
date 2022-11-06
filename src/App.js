import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState('');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <p>{t('paragraph')}</p>
        <button
          className={`btn ${lang === 'en' ? 'active' : ''}`}
          onClick={() => changeLanguage('en')}
        >
          english
        </button>
        <button
          className={`btn ${lang === 'hn' ? 'active' : ''}`}
          onClick={() => changeLanguage('hn')}
        >
          hindi
        </button>
        <button
          className={`btn ${lang === 'sp' ? 'active' : ''}`}
          onClick={() => changeLanguage('sp')}
        >
          spanish
        </button>
        <button
          className={`btn ${lang === 'fr' ? 'active' : ''}`}
          onClick={() => changeLanguage('fr')}
        >
          french
        </button>
      </header>
    </div>
  );
}

export default App;
