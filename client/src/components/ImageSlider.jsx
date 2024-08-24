import React, { useState } from 'react'
import CollectionItem from './CollectionItem'

const ImageSlider = ({ prod }) => {
    const [index, setIndex] = useState(0);
    return (
        <div className='flex flex-col gap-6 overflow-hidden'>
            <CollectionItem col={prod.collection} img={prod.images[0].image_url}/>
            <div className='overflow-hidden w-[800px] flex gap-3 h-36'>
                {/* placeholder */}
                {prod.images.map(el => (
                    <img src={el.image_url} key={el.image_url} alt="" className='object-cover rounded-md w-32' />
                ))}
                {/* <div className='object-fill rounded-md w-32 bg-gray-700'>f</div>
                <div className='object-fill rounded-md w-32 bg-gray-700'>f</div>
                <div className='object-fill rounded-md w-32 bg-gray-700'>f</div>
                <div className='object-fill rounded-md w-32 bg-gray-700'>f</div> */}
                {/* <img src="#" className='w-12 h-4 object-fill rounded-sm' alt="" />
                <img src="#" className='w-12 h-4 object-fill rounded-sm' alt="" />
                <img src="#" className='w-12 h-4 object-fill rounded-sm' alt="" />
                <img src="#" className='w-12 h-4 object-fill rounded-sm' alt="" /> */}
            </div>
        </ div>
    )
}

export default ImageSlider
