import React, { useEffect, useState } from 'react'
import Rate from './MUI/Rating.jsx'

const ReviewInput = ({ id, addReview }) => {
    const [text, setText] = useState('');
    const [name, setName] = useState('')
    const [stars, setStars] = useState(0)

    useEffect(() => {
        console.log(stars)
    }, [stars])
    return (
        <div className='flex flex-col mt-4 items-start gap-2'>
            <h1 className='text-2xl'>Add a review</h1>
            <div className=''>
                <p className='text-xl text-start mb-2'>Add your rating <span className='text-xs text-red-500'>*</span></p>
                <Rate click={setStars} data={stars} type='review' />
            </div>
            <div className='w-full flex flex-col gap-2 text-sm'>
                <div className='text-xl text-start'>Write your name <span className='text-xs text-red-500'>*</span></div>
                <input placeholder='Type...' className='w-full h-full py-1 border-gray-500 border rounded px-2' type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='w-full flex flex-col gap-2 h-32 text-sm'>
                <div className='text-xl text-start'>Write your review <span className='text-xs text-red-500'>*</span></div>
                <textarea placeholder='Type...' className='w-full h-24 p-2 resize-none text-start align-text-top border-gray-500 border rounded px-2' type="text" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <button className='w-full p-2 rounded-lg bg-blue-600 text-white' onClick={async () => {
                // const res = await ProductService.addReview({ review: text, user: 'dsuaujdas', stars: 2, product_id: id });
                // console.log(res.data);
                await addReview({ review: text, user: name, stars, product_id: id })
                setText('');
            }}>Submit</button>
        </div>
    )
}

export default ReviewInput
