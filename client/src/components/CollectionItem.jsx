import React from 'react'
import { useNavigate } from 'react-router-dom'

const CollectionItem = ({ name, img, id }) => {
    const navigate = useNavigate();
    return (
        <div className='h-[590px] w-full rounded-md overflow-hidden relative cursor-pointer' onClick={() => navigate(`/collection/${id}`)}>
            <img src={img} alt="" className='object-cover w-full h-full' />
            <div className='absolute w-fit bg-gray-300 text-gray-800 bg-opacity-80 z-10 bottom-3 left-3 rounded px-1'>{name}</div>
        </div>
    )
}

export default CollectionItem
