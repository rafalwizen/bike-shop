import React from 'react'
import { useCart } from '../context/CartContext'
import { useTranslation } from 'react-i18next'
import bikes from '../../config/bikesConfig.json'

const BikeList: React.FC = () => {
    const { addToCart } = useCart()
    const { t } = useTranslation()

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {bikes.map((bike) => (
                <div key={bike.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                    <div className="relative pt-[100%]">
                        <img
                            src={bike.image}
                            alt={bike.name}
                            className="absolute top-0 left-0 w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-4 md:p-6 flex-grow flex flex-col justify-between">
                        <div>
                            <h2 className="text-lg md:text-xl font-semibold mb-2 text-primary">{bike.name}</h2>
                            <p className="text-sm text-gray-600 mb-2">{bike.type}</p>
                            <p className="text-sm md:text-base text-gray-700 mb-4">{bike.description}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                            <span className="text-lg font-bold text-secondary">${bike.price}</span>
                            <button
                                className="w-full sm:w-auto bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary-600 transition-colors"
                                onClick={() => addToCart(bike)}
                            >
                                {t('addToCart')}
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BikeList
