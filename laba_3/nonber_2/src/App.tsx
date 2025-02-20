import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t, i18n } = useTranslation();
  const [count, setCount] = useState(0);

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="container m-3">
      
      
      <div className="row mb-3">
        <div className="col-6 p-0">
          <button
            type="button"
            className={`btn ${i18n.language === 'en' ? 'btn-primary' : 'btn-outline-primary'} w-100`}
            data-testid="en"
            onClick={() => handleLanguageChange('en')}
          >
            English
          </button>
        </div>

        <div className="col-6 p-0">
          <button
            type="button"
            className={`btn ${i18n.language === 'ru' ? 'btn-primary' : 'btn-outline-primary'} w-100`}
            data-testid="ru"
            onClick={() => handleLanguageChange('ru')}
          >
            Русский
          </button>
        </div>
      </div>

      
      <div className="row mb-3">
        <div className="col-12 text-center">
          <button
            type="button"
            className="btn btn-info"
            data-testid="counter"
            onClick={handleIncrement}
          >
            {t('clicks_interval', { postProcess: 'interval', count: count })}
          </button>
        </div>
      </div>

      
      <div className="row">
        <div className="col-12">
          <button
            type="button"
            className="btn btn-warning w-100"
            data-testid="reset"
            onClick={handleReset}
          >
            {t('reset')}
          </button>
        </div>
      </div>

    </div>
  );
};

export default App;
