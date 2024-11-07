import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '../context/CartContext'
import CartMenu from './CartMenu'

const Navbar: React.FC = () => {
    const { cart } = useCart()
    const [isCartOpen, setIsCartOpen] = useState(false)

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

    return (
        <nav className="bg-blue-600 text-white shadow-md relative">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">Bike Shop</Link>
                <ul className="flex space-x-4">
                    <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
                    <li><Link to="/bikes" className="hover:text-blue-200">Bikes</Link></li>
                    <li><Link to="/about" className="hover:text-blue-200">About</Link></li>
                    <li><Link to="/contact" className="hover:text-blue-200">Contact</Link></li>
                </ul>
                <button
                    className="p-2 rounded-full bg-white text-blue-600 hover:bg-blue-100 relative"
                    onClick={() => setIsCartOpen(!isCartOpen)}
                >
                    <ShoppingCart size={24} />
                    {totalItems > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
              {totalItems}
            </span>
                    )}
                </button>
            </div>
            {isCartOpen && <CartMenu onClose={() => setIsCartOpen(false)} />}
        </nav>
    )
}

export default Navbar