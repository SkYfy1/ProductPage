import React, { useState } from 'react'
import {toast , ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Newsletter = () => {
    const [email, setEmail] = useState()
  return (
    <>
    <ToastContainer />
    <div className='flex justify-between items-center mt-36'>
      <div>
        <h2 className='text-black pb-2 text-lg'>Join our newsletter</h2>
        <p className='text-gray-500 text-sm font-semibold'>We'll send you confirmation letter</p>
      </div>
      <div className='flex gap-3'>
        <input className='px-4 py-2 border-gray-400 bg-gray-200 text-gray-500 border rounded-md'  type="text" placeholder='Enter your email'  value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button className='px-4 bg-blue-800 rounded-md text-white hover:bg-blue-900' onClick={() => {
            toast.success('You successfully subscribed to our newsletter')
        }}>Subscribe</button>
      </div>
    </div>
    </>
  )
}

export default Newsletter
