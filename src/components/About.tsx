import React from 'react'
import { useTranslation } from 'react-i18next'

const About: React.FC = () => {
    const { t } = useTranslation()

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">{t('aboutOurBikeShop')}</h1>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">{t('ourHistory')}</h2>
                    <p className="mb-4">
                        {t('foundedIn2005')}
                    </p>
                    <p className="mb-4">
                        {t('ourJourney')}
                    </p>
                    <h2 className="text-2xl font-semibold mb-4">{t('whereWeAreFrom')}</h2>
                    <p className="mb-4">
                        {t('proudToCallTarnowskieGory')}
                    </p>
                    <p>
                        {t('ourLocation')}: ul. Krakowska 153, 42-600 Tarnowskie Góry, Poland
                    </p>
                </div>
                <div>
                    <img
                        src="/images/headquarters.jpg"
                        alt={t('ourBikeShopHeadquarters')}
                        className="w-full max-h-[600px] object-cover object-center rounded-lg shadow-md"
                    />
                    <p className="text-sm text-gray-600 mt-2 text-center">{t('ourBikeShopHeadquartersInTarnowskieGory')}</p>
                </div>
            </div>
        </div>
    )
}

export default About