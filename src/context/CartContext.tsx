import React, { createContext, useState, useContext, ReactNode } from 'react'

interface Bike {
    id: number;
    name: string;
    type: string;
    price: number;
    image: string;
    description: string;
}

interface CartItem extends Bike {
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (bike: Bike) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([])

    const addToCart = (bike: Bike) => {
        setCart(currentCart => {
            const existingItem = currentCart.find(item => item.id === bike.id)
            if (existingItem) {
                return currentCart.map(item =>
                    item.id === bike.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            }
            return [...currentCart, { ...bike, quantity: 1 }]
        })
    }

    const removeFromCart = (id: number) => {
        setCart(currentCart => currentCart.filter(item => item.id !== id))
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}