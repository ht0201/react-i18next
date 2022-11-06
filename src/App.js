import { Avatar, Select, Typography } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import { US, HN, SN, FR } from 'country-flag-icons/react/3x2';

const { Icon, Option } = Select;

const langs = [
  {
    value: 'en',
    label: 'Eng',
    icon: <US className='icon' title='English' />,
  },
  {
    value: 'hn',
    label: 'HN',
    icon: <HN className='icon' title='Hindi' />,
  },
  {
    value: 'sp',
    label: 'SP',
    icon: <SN className='icon' title='Spain' />,
  },
  {
    value: 'fr',
    label: 'FR',
    icon: <FR className='icon' title='French' />,
  },
];

function App() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState('en');

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
      <Select
        defaultValue='en'
        style={{
          width: 200,
        }}
        onChange={changeLanguage}
        // optionLabelProp='label'
      >
        {langs.map((lang) => {
          return (
            <Option value={lang.value} label={lang.label}>
              <div className='option__item'>
                <span className='option__item__icon'>{lang.icon}</span>
                <span>{lang.label}</span>
              </div>
            </Option>
          );
        })}
      </Select>
    </div>
  );
}

export default App;
