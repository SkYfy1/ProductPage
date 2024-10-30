import React, { useState } from 'react'

const Order = ({ item, index }) => {
    const [showMore, setShowMore] = useState(false);
    const [ord, setIndex] = useState(0);
    return (
        <>
            <div className='flex justify-between p-2 my-4'>
                <div className='flex gap-5 w-1/3'>
                    <div>Заказ №{index + 1}</div>
                    <div>{item.date.slice(0, 21)}</div>
                    <div>{item.items.length} товар{item.items.length >= 2 && 'а/ов'}</div>
                </div>
                <div className='w-1/6'>Сумма: {item.totalPrice} $</div>
                <button className='w-1/6' onClick={() => setShowMore(!showMore)}>{showMore ? 'Скрыть' : 'Подробнее'}</button>
            </div>
            {showMore &&
                <div className='flex justify-between border-y border-blue-300 px-5'>
                    <div className='p-2 my-2 w-1/3'>
                        <div className='mb-5 font-semibold'>Данные о товаре</div>
                        <div>
                            {item.items.map((el, ind) => (
                                <div className='flex flex-col gap-2' key={ind}>
                                    <div>Название: {el.name}</div>
                                    <div>Количество: {el.quantity}</div>
                                    <div>Размер: {el.size}</div>
                                </div>
                            ))[item.items.length == 1 ? 0 : ord]}
                        </div>
                        <div className='flex gap-2 mt-4'>
                            Item:
                            {item.items.map((el, ind) => (
                                <button className='size-6 text-xs bg-blue-300 color-white rounded-full' onClick={() => setIndex(ind)}>{ind+1}</button>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 p-2 my-2'>
                        <div className='mb-3 font-semibold'>Данные получателя</div>
                        <div>Name: {item.receiver.name}</div>
                        <div>Surname: {item.receiver.surname}</div>
                        <div>Phone Number: {item.receiver.number}</div>
                    </div>
                    <div className='flex flex-col items-center my-2 p-2'>
                        <div className='mb-3 font-semibold'>Обслуживающая почта</div>
                        <div className='py-9'>{item.delivery}</div>
                    </div>
                </div>}
        </>
    )
}

// {item.items.map((el, ind) => 
//     (<div key={ind} className='flex flex-col gap-2 p-2 my-2'>
//         <div className='mb-3 font-semibold'>Данные о товаре</div>
//         <div>Название: {el.name}</div>
//         <div>Количество: {el.quantity}</div>
//         <div>Размер: {el.size}</div>
//     </div>)
// )[ord]}

export default Order
