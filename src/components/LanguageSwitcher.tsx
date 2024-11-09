import React from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation()

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
    }

    return (
        <div className="flex space-x-2">
            <button
                className={`px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-secondary text-secondary-foreground' : 'bg-primary-600 text-primary-foreground'}`}
                onClick={() => changeLanguage('en')}
            >
                EN
            </button>
            <button
                className={`px-2 py-1 rounded ${i18n.language === 'pl' ? 'bg-secondary text-secondary-foreground' : 'bg-primary-600 text-primary-foreground'}`}
                onClick={() => changeLanguage('pl')}
            >
                PL
            </button>
        </div>
    )
}

export default LanguageSwitcher