import Navbar from "./components/Navbar"
import { Routes, Route } from 'react-router-dom'
import MainPage from './routes/MainPage.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import ProductPage from "./routes/ProductPage.jsx"
import LatestPage from "./routes/LatestPage.jsx"
import Footer from "./components/Footer.jsx"
import LoginPage from "./routes/LoginPage.jsx"
import RegisterPage from "./routes/RegisterPage.jsx"
import useAppState from "./store/useAppState.jsx"
import AuthPage from "./routes/AuthPage.jsx"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import CollectionPage from "./routes/CollectionPage.jsx"
import { useEffect, useState } from "react"
import CartComponent from "./components/CartComponents.jsx"
import CheckOutPage from "./routes/CheckOutPage.jsx"


const queryClient = new QueryClient()

function App() {
  const { pos } = useAppState();
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    function stopScroll(e) {
      e.preventDefault();
      console.log('stopScroll')
    }

    showCart && window.addEventListener('scroll', stopScroll, { passive: false });
    showCart && window.addEventListener('wheel', stopScroll, { passive: false });

    return () => {
      window.removeEventListener('scroll', stopScroll)
      window.removeEventListener('wheel', stopScroll);
    }
  }, [showCart])

  return (
    <QueryClientProvider client={queryClient}>
      <div className={pos ? "h-full bg-gray-200 font-noto pb-4" : "h-full bg-gray-200 font-noto"}>
      {pos && <Navbar showCart={setShowCart} />}
      <div className={pos && 'max-w-[1430px] bg-white rounded-md mx-auto pb-12 mt-12 px-8'}>
        <p>{pos}</p>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/latest" element={<LatestPage />} />
          <Route path="/authorization" element={<AuthPage />} />
          <Route path="/collection/:name" element={<CollectionPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
        </Routes>
        {showCart && <CartComponent showCart={setShowCart}/>}
        {pos && <Footer />}
      </div>
    </div>
    </QueryClientProvider>
  )
}

export default App
