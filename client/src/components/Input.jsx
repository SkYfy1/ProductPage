import React from 'react'

const Input = ({ type, register }) => {
    return (
        <div className='flex flex-col items-center'>
            <label  htmlFor={type}>{type.includes('.') ? type.split('.')[2] : type} :</label>
            <input className='rounded py-2 px-2 border border-gray-400' id={type} type={type === 'description' ? "textarea" : 'text'} {...register(type)} />
        </div>
    )
}

export default Input
