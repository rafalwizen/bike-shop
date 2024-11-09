import React from 'react'
import { useCart } from '../context/CartContext'

interface Bike {
    id: number;
    name: string;
    type: string;
    price: number;
    image: string;
    description: string;
}

const bikes: Bike[] = [
    {
        id: 1,
        name: 'Mountain Explorer',
        type: 'Mountain Bike',
        price: 799,
        image: '/images/mountain-bike.jpg',
        description: 'Perfect for rough terrains and adventurous trails.'
    },
    {
        id: 2,
        name: 'Road Master',
        type: 'Road Bike',
        price: 1299,
        image: '/images/road-bike.jpg',
        description: 'Sleek and fast, ideal for long distance rides on paved roads.'
    },
    {
        id: 3,
        name: 'City Cruiser',
        type: 'City Bike',
        price: 599,
        image: '/images/city-bike.jpg',
        description: 'Comfortable and stylish for your daily urban commute.'
    },
    {
        id: 4,
        name: 'E-Rider Pro',
        type: 'Electric Bike',
        price: 1999,
        image: '/images/electric-bike.jpg',
        description: 'Powerful electric assistance for effortless riding.'
    },
]

const BikeList: React.FC = () => {
    const { addToCart } = useCart()

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {bikes.map((bike) => (
                <div key={bike.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                    <img src={bike.image} alt={bike.name} className="w-full aspect-square object-cover" />
                    <div className="p-6 flex-grow flex flex-col justify-between">
                        <div>
                            <h2 className="text-xl font-semibold mb-2 text-primary">{bike.name}</h2>
                            <p className="text-sm text-gray-600 mb-2">{bike.type}</p>
                            <p className="text-gray-700 mb-4">{bike.description}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-bold text-secondary">${bike.price}</span>
                            <button
                                className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary-600 transition-colors"
                                onClick={() => addToCart(bike)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BikeList