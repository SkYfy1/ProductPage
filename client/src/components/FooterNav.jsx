import React from 'react'
import svg from '../assets/stylenest.svg'

const FooterNav = () => {
    return (
        <div className='flex justify-between py-12'>
            <div className='w-[400px]'>
                <img src={svg} alt="logoImg"  className='pb-10'/>
                <p className='text-sm text-gray-600 '>Craft sdjajda sjidasjkdajsd  sdasdasdasas dadasdas dadasdasdasd asdas.</p>
            </div>
            <ul className='flex text-base flex-col gap-2 flex-2 '>
                <li className='text-gray-400'>SHOP CATEGORIES</li>
                <li>Unisex</li>
                <li>Women</li>
                <li>Men</li>
            </ul>
            <ul className='flex text-base flex-col gap-2 flex-2'>
                <li className='text-gray-400'>SHOP COLLECTIONS</li>
                <li>Latest arrivals</li>
                <li>dasdas</li>
                <li>j21f1sdasf</li>
                <li>fasfafa</li>
            </ul>
        </div>
    )
}

export default FooterNav
