import React, { useState } from 'react'
import woman from '../assets/wide.avif'

const Benefits = () => {
    const [benefit, setBenefit] = useState('Sustainability');

    return (
        <div className='pb-44'>
            <div className='border-b flex gap-4 border-gray-400 text-md font-medium text-gray-600'>
                <button onClick={(e) => setBenefit(e.target.textContent)} className={'Sustainability' === benefit ? 'pb-2 border-b relative top-px px-2 border-blue-800 text-blue-800' : 'pb-2 px-2'}>Sustainability</button>
                <button onClick={(e) => setBenefit(e.target.textContent)} className={'Comfort' === benefit ? 'pb-2 border-b relative top-px px-2 border-blue-800 text-blue-800' : 'pb-2 px-2'}>Comfort</button>
                <button onClick={(e) => setBenefit(e.target.textContent)} className={'Durability' === benefit ? 'pb-2 border-b relative top-px px-2 border-blue-800 text-blue-800' : 'pb-2 px-2'}>Durability</button>
                <button onClick={(e) => setBenefit(e.target.textContent)} className={'Versatility' === benefit ? 'pb-2 border-b relative top-px px-2 border-blue-800 text-blue-800' : 'pb-2 px-2'}>Versatility</button>
            </div>
            <div className='h-56 flex mt-6 gap-6'>
                <img src={woman} alt="nature" className='rounded-md w-1/3 object-cover' />
                <div className='flex-1'>
                    <h2 className='text-2xl font-semibold'>Eco-Friendly Choice</h2>
                    <p>Withdj iasdjasjdasj dajisdasdnjasd jkasjdkasdn asj kdnaskj dlasdk mlasdas dsdasdasdasda sdasdasd asdasd.</p>
                    <div className='grid grid-rows-4 grid-cols-2 mt-4'>
                        <div className='flex items-center gap-4 row-span-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                            </svg>
                            <p>Recycled Matrials</p>
                        </div>
                        <div className='flex items-center gap-4 row-span-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                            </svg>
                            <p>Carbon Neutral</p>
                        </div >
                        <div className='flex items-center gap-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <p>Low impact Dye</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33" />
                            </svg>
                            <p>Water ak kajsdsak</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits
