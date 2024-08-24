import React, { useState } from 'react'

const ProductDesc = ({ border, el }) => {
    const [showMore, setShowMore] = useState(false);
    return (
        <div className={ border ? ' border-b mt-6 pb-6' :'mt-4 pb-6'}>
            <div className='flex justify-between mb-2'>
                <p>{el.title}</p>
                <button onClick={() => setShowMore(!showMore)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
            </div>
            {showMore && (
                <ul className='ml-7 text-md list-disc'>
                    {el.description.map((text, ind) => (
                        <li key={ind}>{text}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ProductDesc
