import React from 'react'
import svg from '../assets/stylenest.svg'
import { Link } from 'react-router-dom'

const FooterNav = () => {
    return (
        <div className='flex lg:flex-row flex-col gap-5 lg:gap-0 items-center justify-between py-12'>
            <div className='lg:w-[400px] after:'>
                <img src={svg} alt="logoImg"  className='lg:pb-10'/>
                <p className='text-sm text-gray-600 '>Craft your own style.</p>
            </div>
            <ul className='flex lg:text-base text-sm flex-col gap-2 flex-2 '>
                <li className='text-gray-400'>SHOP CATEGORIES</li>
                <Link to='/category/unisex'>Unisex</Link>
                <Link to='/category/women'>Women</Link>
                <Link to='/category/men'>Men</Link>
            </ul>
            <ul className='flex lg:text-base text-sm flex-col gap-2 flex-2'>
                <li className='text-gray-400'>SHOP COLLECTIONS</li>
                <Link to='/latest'>Latest arrivals</Link>
                <Link to='/'>Collections</Link>
                <Link to='/about'>About</Link>
            </ul>
        </div>
    )
}

export default FooterNav
