import React from 'react'
import svg from '../assets/stylenest.svg'
import { Link } from 'react-router-dom'
import useCartStore from '../store/useCartStore'

const Navbar = ({ showCart }) => {
    const { cart } = useCartStore();
    return (
        <nav className='mx-auto pt-10 flex items-center justify-between max-w-[1430px]'>
            <div className='flex items-center gap-36'>
                <img src={svg} alt="logoImg" />
                <div className='flex gap-8'>
                    <Link to={'/'}>Shop all</Link>
                    <Link to={'/latest'}>Latest Arrivals</Link>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <div className='relative' onClick={() => Object.keys(cart).length >= 1 && showCart(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    <div className='absolute rounded-full bg-blue-400 size-4 text-center text-xs left-3 top-4'>{Object.keys(cart).length}</div>
                </div>
                <div>
                    <Link to={'/authorization'} className='px-4 py-2 text-base  text-gray-700 rounded-md'>Log in</Link>
                    <Link to={'/authorization'} className='px-4 py-2 text-base ml-2 bg-gray-300 text-gray-700 rounded-md'>Sign up for free</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
