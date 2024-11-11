import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useTranslation } from 'react-i18next'
import bikes from '../../config/bikesConfig.json'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Bike {
    id: number;
    name: string;
    type_en: string;
    type_pl: string;
    price: number;
    images: string[];
    description_en: string;
    description_pl: string;
    specs: {
        [key: string]: string | undefined;
    };
}

const BikeModal: React.FC<{ bike: Bike; onAddToCart: () => void }> = ({ bike, onAddToCart }) => {
    const { i18n, t } = useTranslation()
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bike.images.length)
    }

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + bike.images.length) % bike.images.length)
    }

    return (
        <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2 relative">
                <img
                    src={bike.images[currentImageIndex]}
                    alt={bike.name}
                    className="w-full h-auto object-cover rounded-lg"
                />
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-4">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={prevImage}
                        className="bg-white hover:bg-gray-100 text-gray-800 hover:text-primary rounded-full p-2"
                    >
                        <ChevronLeft className="h-4 w-4"/>
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={nextImage}
                        className="bg-white hover:bg-gray-100 text-gray-800 hover:text-primary rounded-full p-2"
                    >
                        <ChevronRight className="h-4 w-4"/>
                    </Button>
                </div>

            </div>
            <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold mb-2">{bike.name}</h2>
                <p className="text-lg font-semibold mb-2">{i18n.language === 'pl' ? bike.type_pl : bike.type_en}</p>
                <p className="text-gray-600 mb-4">{i18n.language === 'pl' ? bike.description_pl : bike.description_en}</p>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">{t('specifications')}</h3>
                    <ul className="list-disc pl-5">
                        {Object.entries(bike.specs).map(([key, value]) => (
                            <li key={key}>
                                <span className="font-medium">{key}:</span> {value}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-secondary">${bike.price}</span>
                    <Button onClick={onAddToCart}>{t('addToCart')}</Button>
                </div>
            </div>
        </div>
    )
}

const BikeList: React.FC = () => {
    const { addToCart } = useCart()
    const { i18n, t } = useTranslation()

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {bikes.map((bike) => (
                <Dialog key={bike.id}>
                    <DialogTrigger asChild>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                            <div className="relative pt-[100%] overflow-hidden">
                                <img
                                    src={bike.images[0]}
                                    alt={bike.name}
                                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                                />
                            </div>
                            <div className="p-4 md:p-6 flex-grow flex flex-col justify-between">
                                <div>
                                    <h2 className="text-lg md:text-xl font-semibold mb-2 text-primary">{bike.name}</h2>
                                    <p className="text-sm text-gray-600 mb-2">
                                        {i18n.language === 'pl' ? bike.type_pl : bike.type_en}
                                    </p>
                                    <p className="text-sm md:text-base text-gray-700 mb-4">
                                        {i18n.language === 'pl' ? bike.description_pl : bike.description_en}
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                                    <span className="text-lg font-bold text-secondary">${bike.price}</span>
                                    <Button
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            addToCart(bike)
                                        }}
                                    >
                                        {t('addToCart')}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[900px]">
                        <BikeModal bike={bike} onAddToCart={() => addToCart(bike)} />
                    </DialogContent>
                </Dialog>
            ))}
        </div>
    )
}

export default BikeList