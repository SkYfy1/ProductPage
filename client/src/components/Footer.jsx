import React from 'react'
import Newsletter from './Newsletter'
import FooterNav from './FooterNav'


const Footer = () => {
  return (
    <div className=''>
      <Newsletter />
      <FooterNav />
      <div className='border-t border-gray-400 flex justify-between pt-6 pb-2'>
        <div>2024 StyleNest all right not reserved</div>
        <div className='flex gap-2'>
            <div className='bg-gray-500 size-6 rounded-full'></div>
            <div className='bg-gray-500 size-6 rounded-full'></div>
            <div className='bg-gray-500 size-6 rounded-full'></div>
            <div className='bg-gray-500 size-6 rounded-full'></div>
            <div className='bg-gray-500 size-6 rounded-full'></div>
        </div>
      </div>
    </div>
  )
}

export default Footer
