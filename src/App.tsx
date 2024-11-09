import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import BikeList from './components/BikeList'
import About from './components/About'
import { CartProvider } from './context/CartContext'
import { useTranslation } from "react-i18next";

function App() {
    const { t } = useTranslation()

    return (
        <CartProvider>
            <Router>
                <div className="min-h-screen bg-gray-100">
                    <Navbar />
                    <main className="container mx-auto px-4 py-8">
                        <Routes>
                            <Route path="/" element={
                                <>
                                    <h1 className="text-3xl font-bold mb-6 text-center">{t('welcomeToOurBikeShop')}</h1>
                                    <BikeList />
                                </>
                            } />
                            <Route path="/bikes" element={<BikeList />} />
                            <Route path="/about" element={<About />} />
                        </Routes>
                    </main>
                </div>
            </Router>
        </CartProvider>
    )
}

export default App