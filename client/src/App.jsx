import { Routes, Route } from 'react-router-dom'
import MainPage from './routes/MainPage.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import ProductPage from "./routes/ProductPage.jsx"
import LatestPage from "./routes/LatestPage.jsx"
import LoginPage from "./routes/LoginPage.jsx"
import RegisterPage from "./routes/RegisterPage.jsx"
import AuthPage from "./routes/AuthPage.jsx"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import CollectionPage from "./routes/CollectionPage.jsx"
import { useEffect, useState } from "react"
import CartComponent from "./components/CartComponents.jsx"
import CheckOutPage from "./routes/CheckOutPage.jsx"
import MainLayout from "./layouts/MainLayout.jsx"
import SideLayout from "./layouts/SideLayout.jsx"
import UserPage from './routes/UserPage.jsx'
import { useAuthStore } from './store/useAuthStore.jsx'
import CategoriesPage from './routes/CategoriesPage.jsx'


const queryClient = new QueryClient()

function App() {
  const [showCart, setShowCart] = useState(false);
  const AuthStore = useAuthStore();

  useEffect(() => {
    if(localStorage.getItem('token')) {
      AuthStore.checkAuth()
    }
  }, [])

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
      <Routes>
        <Route path='/' element={<MainLayout showCart={setShowCart} />}>
          <Route index element={<MainPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/latest" element={<LatestPage />} />
          <Route path="/collection/:name" element={<CollectionPage />} />
          <Route path="/category/:name" element={<CategoriesPage />} />
        </Route>
        <Route element={<SideLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/authorization" element={<AuthPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route path='/user' element={<UserPage />}/>
        </Route>
      </Routes>
      {showCart && <CartComponent showCart={setShowCart} />}
    </QueryClientProvider>
  )
}

export default App
