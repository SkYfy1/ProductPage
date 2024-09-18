import React from 'react'
import { useAuthStore } from '../store/useAuthStore'

const UserPage = () => {
  const auth = useAuthStore()
  return (
    <div className='min-h-screen flex justify-center items-center h-fit'>
      <div className='bg-white w-1/2 rounded-md relative p-2'>
        <div className='absolute top-4 left-4 flex items-center gap-2 text-sm text-blue-500 hover:text-blue-800'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
          </svg>
          <p>Back to Store</p>
        </div>
        <ul className='flex gap-2 text-center mx-auto w-1/2 justify-center'>
          <li className='border-b-blue-500 border-b-4 p-2 hover:border-b-blue-800'>Acc info</li>
          <li className='p-2 border-b-blue-500'>Orders</li>
        </ul>
        <div>
          <div className='flex flex-col gap-4'>
            <div className='flex gap-2'>
              <div>User ID:</div>
              <div>{auth.user.id}</div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 mt-[3px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
            </div>
            <div className='flex gap-2'>
              <div>Email:</div>
              <div>{auth.user.email}</div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 mt-[3px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
            </div>
          </div>
          <div>
            <h1>Change Password</h1>
            <button className='bg-blue-500 rounded p-2'>Change?</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default UserPage
