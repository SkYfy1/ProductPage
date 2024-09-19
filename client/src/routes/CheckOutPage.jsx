import React, { useEffect, useState } from 'react'
import svg from '../assets/stylenest.svg'
import useCart from '../hooks/useCart';
import delivery from '../data/delivery';
import DeliveryForm from '../components/DeliveryForm';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';



const opt = 'flex justify-between my-2 border border-blue-400 p-6 rounded'
// {option === item.name ? 'flex justify-between my-2 border border-blue-400 p-6 rounded' : 'flex justify-between my-2 p-5'}

const CheckOutPage = () => {
    const { isLoading, cartItems } = useCart();
    const [option, setOption] = useState(delivery[0]);
    const [payment, setPayment] = useState("Payment upon receipt");
    const user = useAuthStore((state) => state.user);
    const [deliveryData, setDeliveryData] = useState({});

    const cartPrice = cartItems.reduce((accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity), 0);
    const totalPrice = cartPrice + option.price

    return (
        <div className='ml-24 py-8 px-24 min-h-screen max-h-fit container'>
            <Link to='/' className='border-b border-gray-300 pb-8'>
                <img src={svg} alt="logoImg" />
            </Link>
            {/* Mainside */}
            <div className='flex gap-12'>
                <div className='w-full'>
                    <div className='flex flex-col gap-4 my-3'>
                        <h1 className='text-3xl font-semibold'>Checkout {user.email}</h1>
                        <p className='text-lg font-semibold'>Order №{Math.ceil(Math.random()*100)}</p>
                    </div>
                    <div className='p-5 border border-gray-400 rounded'>
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
                            </div>
                        ))}
                    </div>
                    <div>
                        <h1 className='text-lg font-semibold my-3'>Delivery</h1>
                        {delivery.map((item) => (
                            <div key={item.name} className={`flex justify-between my-2 p-5 ${option.name === item.name && 'border border-blue-400 p-6 rounded'}`}>
                                <div>
                                    <input className='mr-2' type="radio" value={item.name} checked={option.name === item.name} onChange={() => setOption(item)}/>
                                    Pickup from the {item.name} post office
                                </div>
                                <div>{item.price} $</div>
                                <div>{item.time}</div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h1 className='text-lg font-semibold my-3'>Payment</h1>
                        <select className='p-4 bg-gray-100 border-gray-200 border rounded w-full' value={payment} onChange={e => setPayment(e.target.value)}>
                            <option value="Payment upon receipt">Payment upon receipt</option>
                            <option value="Payment online">Payment online</option>
                            <option value="Paypal">Paypal</option>
                        </select>
                    </div>
                    <div>
                        <h1 className='text-lg font-semibold my-3'>Receiver</h1>
                        <DeliveryForm sData={(data) => setDeliveryData(data)}/>
                    </div>
                    <p className='text-sm mt-10'>© 2001–2024 Интернет-магазин «StyleNest» — Щоразу що треба</p>
                </div>
                {/* Sidebar */}
                <div className='w-1/5 fixed top-18 right-40 p-4 rounded'>
                    <div className='border border-gray-300 p-4 flex justify-between rounded mb-2'>
                        <p className='text-xl'>Promo code</p>
                        <button onClick={() => alert('Thanks for order')} className='text-base text-blue-400 flex gap-1 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            Add
                        </button>
                    </div>
                    <div className='border border-gray-200 bg-gray-100 p-4 rounded'>
                        <h2 className='text-3xl font-bold'>Total</h2>
                        <div className='flex flex-col gap-2 my-3'>
                            <div className='flex justify-between'>
                                <p>{cartItems.length} products</p>
                                <p> {totalPrice} $</p>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div>Delivery Price</div>
                                <div className='font-semibold text-sm'>
                                    <p>according to</p>
                                    <p>carrier tariffs</p>
                                </div>
                            </div>
                            <div className=' py-4 border-y flex text-base justify-between items-center border-gray-300'>
                                <div>Total payment</div>
                                <div className='text-lg font-semibold'>{totalPrice} $</div>
                            </div>
                        </div>
                        <button onClick={() => alert('Thanks for order')}
                            className=' w-full rounded hover:bg-blue-900 text-base mb-3 bg-blue-800 text-white p-3'>Purchase
                        </button>
                        <div className='text-xs flex flex-col gap-3 text-gray-500'>
                            <p>Receiving an order from 5,000 ₴ - 30,000 ₴ if documents are available. When paying in cash over ₴30,000, you must provide documents for verification in accordance with the requirements of the Law of Ukraine dated December 6, 2019 No. 361-IX</p>
                            <span>By confirming the order, I accept the terms and conditions:</span>
                            <ul className=' list-disc flex flex-col underline list-inside text-xs gap-2'>
                                <li>provisions on the collection and protection of personal data</li>
                                <li>user agreement</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOutPage
