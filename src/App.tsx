import React from 'react'
import Navbar from './components/Navbar'
import BikeList from './components/BikeList'
import { CartProvider } from './context/CartContext'

function App() {
    return (
        <CartProvider>
            <div className="min-h-screen bg-gray-100">
                <Navbar />
                <main className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-6 text-center">Welcome to Our Bike Shop</h1>
                    <BikeList />
                </main>
            </div>
        </CartProvider>
    )
}

export default App