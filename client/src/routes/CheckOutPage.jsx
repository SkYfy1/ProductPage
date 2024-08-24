import React, { useEffect, useState } from 'react'
import svg from '../assets/stylenest.svg'
import useCart from '../hooks/useCart';
import delivery from '../data/delivery';
import DeliveryForm from '../components/DeliveryForm';
import useAppState from '../store/useAppState'



const opt = 'flex justify-between my-2 border border-blue-400 p-6 rounded'
// {option === item.name ? 'flex justify-between my-2 border border-blue-400 p-6 rounded' : 'flex justify-between my-2 p-5'}

const CheckOutPage = () => {
    const { setPosFalse, setPosTrue } = useAppState();
    const { isLoading, cartItems } = useCart();
    const [option, setOption] = useState();
    const [payment, setPayment] = useState("Payment upon receipt");

    useEffect(() => {
        setPosFalse();
        return () => {
            setPosTrue();
        }
    }, [])

    return (
        <div className='ml-24 py-8 px-24 min-h-screen max-h-fit container'>
            <div className='border-b border-gray-300 pb-8'>
                <img src={svg} alt="logoImg" />
            </div>
            {/* Mainside */}
            <div className='flex gap-12'>
                <div className='w-full'>
                    <div className='flex flex-col gap-4 my-3'>
                        <h1 className='text-3xl font-semibold'>Checkout</h1>
                        <p className='text-lg font-semibold'>Order №41421</p>
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
                            <div key={item.name} className={`flex justify-between my-2 p-5 ${option === item.name && 'border border-blue-400 p-6 rounded'}`}>
                                <div>
                                    <input className='mr-2' type="radio" value={item.name} checked={option === item.name} onChange={(e) => setOption(e.target.value)}/>
                                    Самовывоз из {item.name}
                                </div>
                                <div>{item.price}</div>
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
                        <DeliveryForm />
                    </div>
                    <p className='text-sm mt-10'>© 2001–2024 Интернет-магазин «StyleNest» — Щоразу що треба</p>
                </div>
                {/* Sidebar */}
                <div className='w-1/5 fixed top-18 right-40 p-4 rounded'>
                    <div className='border border-gray-300 p-4 flex justify-between rounded mb-2'>
                        <p className='text-xl'>Promo code</p>
                        <span className='text-base text-blue-400 flex gap-1 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            Add
                        </span>
                    </div>
                    <div className='border border-gray-200 bg-gray-100 p-4 rounded'>
                        <h2 className='text-3xl font-bold'>Total</h2>
                        <div className='flex flex-col gap-2 my-3'>
                            <div className='flex justify-between'>
                                <p>1 toval</p>
                                <p> 921921 $</p>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div>stoimost dost</div>
                                <div className='font-semibold text-sm'>
                                    <p>po tarifam</p>
                                    <p>po tarifam</p>
                                </div>
                            </div>
                            <div className=' py-4 border-y flex text-base justify-between items-center border-gray-300'>
                                <div>K oplate</div>
                                <div className='text-lg font-semibold'> 21212321</div>
                            </div>
                        </div>
                        <button
                            className=' w-full rounded hover:bg-blue-900 text-base mb-3 bg-blue-800 text-white p-3'>Purchase
                        </button>
                        <div className='text-xs flex flex-col gap-3 text-gray-500'>
                            <p>Получение заказа от 5 000 ₴ - 30 000 ₴ при наличии документов. При оплате наличными от 30 000 ₴ необходимо предоставить документы для верификации согласно требованиям Закона Украины от 06.12.2019 №361-IX</p>
                            <span>Подтверждая заказ, я принимаю условия:</span>
                            <ul className=' list-disc flex flex-col underline list-inside text-xs gap-2'>
                                <li>положения о сборе и защите перс данных</li>
                                <li>пользовательского соглашения</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOutPage
