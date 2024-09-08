import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore'

const MainLayout = ({ showCart }) => {
    const user = useAuthStore((state) => state.user);
    return (
        <div className="2xl:min-h-screen h-full bg-gray-200 font-noto pb-4">
            <Navbar showCart={showCart}/>
            {user && <div className='my-11 flex justify-center items-center'>Hello {user.name}</div>}
            <div className='max-w-[1430px] bg-white rounded-md mx-auto pb-12 mt-12 px-8'>
                <Outlet />
                <Footer />
            </div>
        </div>
    )
}

export default MainLayout
