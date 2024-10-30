import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import UserProfile from '../components/UserProfile'
import UserOrders from '../components/UserOrders'
import AdminPanel from '../components/Admin.tsx'
import { useAuthStore } from '../store/useAuthStore'

const UserPage = () => {
  const [data, setData] = useState('Info');
  const status = useAuthStore(state => state.user.status);

  return (
    <div className='min-h-screen flex justify-center items-center h-fit'>
      <div className='bg-white lg:w-1/2 lg:h-fit h-full rounded-md relative p-2'>
        <div>
          <Link className='absolute lg:top-4 lg:left-4 top-5 left-5 flex items-center gap-2 text-sm text-blue-500 hover:text-blue-800' to={'/'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:size-3 size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
            </svg>
            <div className='lg:text-base hidden lg:block'>Back to Store</div>
          </Link>
          <ul className='flex gap-2 text-center mx-auto w-1/2 justify-center'>
            <li onClick={() => setData('Info')} className={data === 'Info' ? 'border-b-blue-500 border-b-4 p-2 hover:border-b-blue-800' : 'p-2 border-b-blue-500'}>Acc info</li>
            {status === 'user' ? <li onClick={() => setData('Orders')} className={data === 'Orders' ? 'border-b-blue-500 border-b-4 p-2 hover:border-b-blue-800' : 'p-2 border-b-blue-500'}>Orders</li> :
              <li onClick={() => setData('Admin Panel')} className={data === 'Admin Panel' ? 'border-b-blue-500 border-b-4 p-2 hover:border-b-blue-800' : 'p-2 border-b-blue-500'}>Add Product</li>}
          </ul>
        </div>
        {data === 'Info' && <UserProfile />}
        {data === 'Orders' && <UserOrders />}
        {data === 'Admin Panel' && <AdminPanel />}
      </div>
    </div >
  )
}

export default UserPage
