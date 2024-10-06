import React, { useState } from 'react'
import QuantityInput from './QuantityInput.jsx'
import ProductDesc from './ProductDesc.jsx'
import useCartStore from '../store/useCartStore.jsx';
import Rate from './MUI/Rating.jsx'

const obj =  {
    active: 'rounded-sm border border-blue-800 px-4 py-[5px]',
    nonActive: 'rounded-sm border border-gray-300 px-4 py-[5px]'
}

const ProductInfo = ({ prod }) => {
    const [product, setProduct] = useState({
        size: 'M',
        quantity: 1,
        color: prod.colors_available[0].color,
    });

    const { cart, addToCart } = useCartStore();

    const price = prod.price - (prod.price * 20 / 100)

    return (
        <div>
            {window.innerWidth > 414 && <h1 className='lg:text-4xl hidden lg:block font-medium tracking-wide mb-3'>{prod.name}</h1>}
            <div className='flex gap-1 items-center'>
                <h3 className=' text-slate-600 text-lg font-medium'>{price}$</h3>
                <h3 className=' text-slate-400 text-base line-through font-light self-end'>{prod.price}$</h3>
            </div>
            <div className='text-xs inline-block p-1 mt-1 bg-yellow-100 text-orange-700 border border-yellow-200 rounded-full'>20% OFF</div>
            <div className='flex gap-2 items-center mb-4 mt-2 text-center'>
                <h3 className='text-base'>4.1</h3>
                <Rate />
                <a href="#" className='text-blue-800 text-xs font-semibold'>See all reviews</a>
            </div>
            <p className='text-sm mb-4'>{prod.description}</p>
            <div className='mb-4'>
                <p className='text-xs mb-2'>Available Colors</p>
                <div className='flex gap-2'>
                {prod.colors_available.map((color, index) => (
                        <div key={index} className={`size-3 rounded-full ml-1 opacity-95 cursor-pointer bg-${color.color}-800 hover:scale-125 transition-all ease-in`} onClick={() => setProduct((prev) => ({ ...prev, color: color.color}))}></div>
                        // 'rounded-full size-3 ml-1 cursor-pointer hover:bg-red-500 transition-all ease-in'
                ))}
                </div>
            </div>
            <div className='pb-5'>
                <p className='text-xs mb-2'>Available Sizes</p>
                <div className='flex text-sm gap-2'>
                    <button className={product.size === 'XS' ? obj.active : obj.nonActive} onClick={(e) => setProduct((prev) => ({ ...prev, size: e.target.textContent}))}>XS</button>
                    <button className={product.size === 'S' ? obj.active : obj.nonActive} onClick={(e) => setProduct((prev) => ({ ...prev, size: e.target.textContent}))}>S</button>
                    <button className={product.size === 'M' ? obj.active : obj.nonActive} onClick={(e) => setProduct((prev) => ({ ...prev, size: e.target.textContent}))}>M</button>
                    <button className={product.size === 'L' ? obj.active : obj.nonActive} onClick={(e) => setProduct((prev) => ({ ...prev, size: e.target.textContent}))}>L</button>
                    <button className={product.size === 'XL' ? obj.active : obj.nonActive} onClick={(e) => setProduct((prev) => ({ ...prev, size: e.target.textContent}))}>XL</button>
                </div>
            </div>
            <div className='pb-5'>
                <p className='text-xs pb-3'>Quantity</p>
                <QuantityInput quantity={product.quantity} setQuantity={(quantity) => setProduct((prev) => ({ ...prev, quantity: quantity}))}/>
            </div>
            <button className='w-full rounded hover:bg-blue-900 mb-3 text-base bg-blue-800 text-white p-3' onClick={() => {
                addToCart(prod.product_id, product)
            }}>Add to Cart</button>
            {prod.additional_info.map((el, index) => prod.additional_info.length - 1 === index ? (
                <ProductDesc key={index} el={el}/>
            ) : (
                <ProductDesc key={index} border={true} el={el}/>
            ))}
        </div>
    )
}

export default ProductInfo
