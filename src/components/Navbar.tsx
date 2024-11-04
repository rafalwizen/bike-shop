import React from 'react'
import { ShoppingCart } from 'lucide-react'

const Navbar: React.FC = () => {
    return (
        <nav className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <a href="/" className="text-2xl font-bold">Bike Shop</a>
                <ul className="flex space-x-4">
                    <li><a href="/" className="hover:text-blue-200">Home</a></li>
                    <li><a href="/bikes" className="hover:text-blue-200">Bikes</a></li>
                    <li><a href="/about" className="hover:text-blue-200">About</a></li>
                    <li><a href="/contact" className="hover:text-blue-200">Contact</a></li>
                </ul>
                <button className="p-2 rounded-full bg-white text-blue-600 hover:bg-blue-100">
                    <ShoppingCart size={24} />
                </button>
            </div>
        </nav>
    )
}

export default Navbar