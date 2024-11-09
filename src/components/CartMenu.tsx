import React from 'react'
import { useCart } from '../context/CartContext'
import { X } from 'lucide-react'

interface CartMenuProps {
    onClose: () => void;
}

const CartMenu: React.FC<CartMenuProps> = ({ onClose }) => {
    const { cart, removeFromCart, clearCart } = useCart()

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <div className="absolute right-0 top-full mt-2 w-96 bg-white shadow-lg rounded-lg z-10 p-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-primary">Your Cart</h2>
                <button onClick={onClose} className="text-gray-500 hover:text-primary">
                    <X size={24} />
                </button>
            </div>
            {cart.length === 0 ? (
                <p className="text-gray-500">Your cart is empty</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <div key={item.id} className="flex justify-between items-center mb-2">
                            <div>
                                <p className="font-semibold text-primary">{item.name}</p>
                                <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                            </div>
                            <div className="flex items-center">
                                <p className="font-semibold text-secondary mr-2">${item.price * item.quantity}</p>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-gray-500 hover:text-primary"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex justify-between items-center mb-2">
                            <p className="font-semibold text-primary">Total:</p>
                            <p className="font-semibold text-secondary">${total.toFixed(2)}</p>
                        </div>
                        <button
                            onClick={clearCart}
                            className="w-full bg-primary text-primary-foreground py-2 rounded hover:bg-primary-600 transition-colors mt-2"
                        >
                            Clear Cart
                        </button>
                        <button
                            className="w-full bg-secondary text-secondary-foreground py-2 rounded hover:bg-secondary-600 transition-colors mt-2"
                        >
                            Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

export default CartMenu