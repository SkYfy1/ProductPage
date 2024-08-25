import React from 'react'
import svg from '../assets/stylenest.svg'
import { Link } from 'react-router-dom'

const FooterNav = () => {
    return (
        <div className='flex justify-between py-12'>
            <div className='w-[400px]'>
                <img src={svg} alt="logoImg"  className='pb-10'/>
                <p className='text-sm text-gray-600 '>Craft your own style.</p>
            </div>
            <ul className='flex text-base flex-col gap-2 flex-2 '>
                <li className='text-gray-400'>SHOP CATEGORIES</li>
                <li>Unisex</li>
                <li>Women</li>
                <li>Men</li>
            </ul>
            <ul className='flex text-base flex-col gap-2 flex-2'>
                <li className='text-gray-400'>SHOP COLLECTIONS</li>
                <Link to='/latest'>Latest arrivals</Link>
                <Link to='/'>Collections</Link>
                <Link to='/about'>About</Link>
            </ul>
        </div>
    )
}

export default FooterNav
