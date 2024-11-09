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
        <nav className="bg-primary text-primary-foreground shadow-md relative">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold flex items-center gap-2">
                    <img src="/images/bike_shop_logo.jpg" alt="Bike Shop Logo" className="h-12 w-12 rounded-full" />
                    <span>Bike Shop</span>
                </Link>
                <ul className="flex space-x-4">
                    <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
                    <li><Link to="/bikes" className="hover:text-secondary transition-colors">Bikes</Link></li>
                    <li><Link to="/about" className="hover:text-secondary transition-colors">About</Link></li>
                    <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
                </ul>
                <button
                    className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary-600 transition-colors relative"
                    onClick={() => setIsCartOpen(!isCartOpen)}
                >
                    <ShoppingCart size={24} />
                    {totalItems > 0 && (
                        <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs">
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