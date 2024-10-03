import React from 'react'

const QuantityInput = ({ quantity, setQuantity }) => {
  return (
    <div className=' rounded-md flex text-xs justify-between items-center px-2 py-1 w-24 border border-gray-300 bg-gray-100 '>
      <div className='cursor-pointer' onClick={() => quantity > 1 && setQuantity(quantity - 1)}>-</div>
      <div>{quantity}</div>
      <div className='cursor-pointer' onClick={() => setQuantity(quantity + 1)}>+</div>
    </div>
  )
}

export default QuantityInput
