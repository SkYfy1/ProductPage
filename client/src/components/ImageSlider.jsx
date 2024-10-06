import React, { useState } from 'react'
import CollectionItem from './CollectionItem'

const ImageSlider = ({ prod }) => {
    const [index, setIndex] = useState(0);
    const [translate, setTranslate] = useState(0);
    return (
        <div className='lg:flex lg:flex-col lg:w-[800px] w-[200px] gap-6 overflow-hidden'>
            <CollectionItem col={prod.collection} img={prod.images[index].image_url} />
            {prod.images.length >=2 && <div className='w-fit flex gap-3 h-36 relative'>
                {prod.images.length >= 5 && <svg onClick={() => setTranslate(prev => prev - 100)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 absolute top-1/2 text-white -translate-y-1/2 z-50 hover:cursor-help">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                </svg>}
                <div className='flex gap-2 w-fit transition-transform duration-500 ease-out'
                    style={{ transform: `translateX(-${translate}px)` }}
                >
                    {prod.images.map((el, ind) => (
                        <>
                            <img onClick={() => setIndex(ind)} src={el.image_url} key={ind} alt="" className={index == ind ? 'object-cover rounded-md w-32 border-2 border-blue-800' : 'object-cover rounded-md w-32 border-2 border-transparent hover:cursor-pointer'} />
                        </>
                    ))}
                </div>
                {/* {prod.images.map((el, ind) => (
                        <img onClick={() => setIndex(ind)} src={el.image_url} key={ind} alt="" className={index == ind ? 'object-cover rounded-md w-32 border-2 border-blue-800' : 'object-cover rounded-md w-32 border-2 border-transparent'} />
                    ))} */}
                {prod.images.length >= 5 && <svg onClick={() => translate != 500 && setTranslate(prev => prev + 100)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 top-1/2 -translate-y-1/2 -right-10 text-white -translate-x-[100%] absolute hover:cursor-help">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>}
            </div>}
        </ div>
    )
}

export default ImageSlider
