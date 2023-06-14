import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

function LanguageSwitcher() {
    const { t } = useTranslation();

    return (
        <div>
            <button onClick={() => i18n?.changeLanguage('en')}>{t('english')}</button>
            <button onClick={() => i18n?.changeLanguage('fr')}>{t('français')}</button>
        </div>
    );
}

export default LanguageSwitcher;
