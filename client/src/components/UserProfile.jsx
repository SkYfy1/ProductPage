import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore'

const UserProfile = () => {
    const auth = useAuthStore();
    const [showInputs, setShowInputs] = useState({
        password: false,
        email: false
    })
    const [inputValue, setInputValue] = useState('')
    const [inputValue2, setInputValue2] = useState('')
    return (
        <div className='p-4'>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-2'>
                    <div>User ID:</div>
                    <div>{auth.user.id}</div>
                </div>
                <div className='flex gap-2'>
                    <div>Email:</div>
                    <div className='w-[175px]'>
                        {showInputs.email ?
                            <input className='border border-blue-400 rounded w-full h-6' value={inputValue} onChange={(e) => setInputValue(e.target.value)} /> :
                            <div>{auth.user.email}</div>
                        }
                    </div>

                    <button onClick={() => setShowInputs((prev) => ({ ...prev, email: !prev.email }))} className='bg-blue-500 rounded p-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </button>

                </div>
                <div className='flex gap-2 items-center'>
                    <h1>Change Password</h1>
                    <button disabled={showInputs.password} onClick={() => setShowInputs((prev) => ({ ...prev, password: !prev.password }))} className='bg-blue-500 rounded p-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                    {showInputs.password && <div className='flex gap-2'>
                    <input className='border border-blue-400 rounded w-1/7 h-6' value={inputValue2} onChange={(e) => setInputValue2(e.target.value)} />
                    <button onClick={() => {
                        console.log(`New password: ${inputValue2}`);
                        setShowInputs((prev) => ({ ...prev, password: false }));
                        setInputValue2('')
                    }} className='bg-blue-500 rounded px-2 text-white'>Confirm</button>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default UserProfile