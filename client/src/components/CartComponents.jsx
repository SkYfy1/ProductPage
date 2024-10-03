import React from 'react'
import useCartStore from '../store/useCartStore'
import useCart from '../hooks/useCart'
import { useNavigate } from 'react-router-dom';

const CartComponent = ({ showCart }) => {
    const { isLoading, cartItems } = useCart();
    const navigate = useNavigate()

    const { decreaseQuantity, increaseQuantity, deleteItem } = useCartStore();

    if (isLoading) {
        return (
            <>Loading cart items</>
        )
    }

    const totalPrice = cartItems.reduce((accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity), 0);

    return (
        <div className='absolute top-0 left-0 z-10 w-full h-full flex justify-center items-center'>
            <div className='z-20 w-full h-full bg-black bg-opacity-50 absolute'></div>
            <div className='bg-white rounded w-1/3 py-5 z-20'>
                <div className='flex justify-between mb-2 px-4'>
                    <div className='text-xl'>Cart</div>
                    <svg onClick={() => showCart(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className='border-y border-gray-300 py-3 flex flex-col gap-3'>
                    {cartItems.map((item) => (
                        <div key={item.name} className='flex px-4 items-center justify-between'>
                            <div className='flex gap-4 items-center'>
                                <img src={item.img} className='object-cover rounded crisp-image image-crisp' alt="" />
                                <div>{item.name}</div>
                            </div>
                            <div>{item.size}</div>
                            <div>{item.color.charAt(0).toUpperCase() + item.color.slice(1)}</div>
                            <div className='flex justify-center items-center gap-2'>
                                <svg onClick={() => decreaseQuantity(item.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                </svg>
                                <span className='border px-3 py-2 border-gray-500 rounded'>{item.quantity}</span>
                                <svg onClick={() => increaseQuantity(item.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </div>
                            <div className='text-xl'>{item.price} $</div>
                            <button onClick={() => deleteItem(item.id)}>Delete item</button>
                        </div>
                    ))}
                </div>
                <div className='flex justify-between px-4 mt-4 items-center'>
                    <div className='text-xl'>Total: {totalPrice} $</div>
                    <button onClick={() => {
                        showCart(false);
                        navigate('/checkout')
                    }} className=' w-1/3 rounded hover:bg-blue-900 text-base bg-blue-800 text-white p-3'>Purchase</button>
                </div>
            </div>
        </div>
    )
}

export default CartComponent