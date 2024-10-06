import React from 'react'
import svg from '../assets/stylenest.svg'
import { Link, useNavigate } from 'react-router-dom'
import useCartStore from '../store/useCartStore'
import { useAuthStore } from '../store/useAuthStore'

const Navbar = ({ showCart }) => {
    const store = useAuthStore();
    const cart = useCartStore((state) => state.cart);
    const navigate = useNavigate();
    // const logout = async () => {
    //     const logout = await fetch('/api/auth/logout');

    //     if (!logout.ok) {
    //         throw new Error(`Network response was not ok: ${response.statusText}`);
    //     }

    //     const data = await logout.json();

    //     console.log(data);
    //     auth.setUser(null);
    // }
    if(store.isLoading) {
        return <nav className='mx-auto pt-10 flex items-center justify-between max-w-[1430px]'>
        <div className='flex items-center gap-36'>
            <img src={svg} alt="logoImg" />
            <div className='flex gap-8'>
                <Link to={'/'}>Collections</Link>
                <Link to={'/latest'}>Latest Arrivals</Link>
            </div>
        </div>
        <div className='flex gap-4 items-center'>
                <div className='cursor-pointer' onClick={() => navigate('/user')}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={store.isLoading ? "size-6 fill-black" : "size-6"}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                </div>
            <div className='relative cursor-pointer' onClick={() => Object.keys(cart).length >= 1 && showCart(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                <div className='absolute rounded-full bg-blue-500 size-4 text-center text-xs left-3 top-4'>{Object.keys(cart).length}</div>
            </div>
                <div>
                    <button onClick={() => store.logout()}>Log Out</button>
                </div>
        </div>
    </nav>
    }
    return (
        <nav className='mx-auto px-5 pt-12 lg:pt-10 flex items-center justify-between max-w-[1430px]'>
            <div className='flex gap-2 items-center text-center lg:gap-36'>
                <img src={svg} className='w-20 lg:w-24 absolute top-3 left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:static' alt="logoImg" />
                <div className='flex flex-col lg:flex-row text-xs md:text-base gap-4 lg:gap-8'>
                    <Link to={'/'}>Collections</Link>
                    <Link to={'/latest'}>Latest Arrivals</Link>
                </div>
            </div>
            <div className='flex gap-4 items-center'>
                {store.user &&
                    <div className='cursor-pointer' onClick={() => navigate('/user')}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </div>}
                <div className='relative cursor-pointer' onClick={() => Object.keys(cart).length >= 1 && showCart(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    <div className='absolute rounded-full bg-blue-500 size-4 text-center text-xs left-3 top-4'>{Object.keys(cart).length}</div>
                </div>
                {store.isAuth ?
                    <div className='lg:text-base text-sm'>
                        <button onClick={() => store.logout()}>Log Out</button>
                    </div> :
                    <div>
                        <Link to={'/authorization'} className='lg:px-4 py-2 text-base  text-gray-700 rounded-md hover:bg-gray-300 transition-all duration-300 ease-in'>Log in</Link>
                        <Link to={'/authorization'} className='lg:px-4 py-2 text-base ml-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-all duration-300 ease-in'>Sign up for free</Link>
                    </div>}
            </div>
        </nav>
    )
}

export default Navbar
