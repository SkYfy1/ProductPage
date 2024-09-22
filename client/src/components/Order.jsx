import React, { useState } from 'react'

const Order = ({ item }) => {
    const [showMore, setShowMore] = useState(false)
    return (
        <div className='flex justify-between p-2 my-4'>
            <div className='flex gap-5'>
                <div>Заказ №321312</div>
                <div>02.01.2024</div>
                <div>1 товар</div>
            </div>
            <div>Сумма: {item.totalPrice} $</div>
            <button onClick={() => setShowMore(!showMore)}>Подробнее</button>
            {showMore && <div>{item.receiver.name}</div>}
        </div>
    )
}

export default Order
