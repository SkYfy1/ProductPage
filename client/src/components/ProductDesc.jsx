import React, { useState } from 'react'
import { animated, useSpring, useTrail } from '@react-spring/web';
import { height } from '@mui/system';

// api.start({ height: 300 })

const ProductDesc = ({ border, el }) => {
    const [showMore, setShowMore] = useState(false);
    const trail = useTrail(el.description.length, {
        from: {
            height: 0,
            opacity: 0
        },
        height: showMore ? 40 : 0,
        opacity: showMore ? 1 : 0,
        config: { mass: 5, tension: 2000, friction: 200 }
    })
    return (
        <div className={border ? ' border-b mt-6 pb-6' : 'mt-4 pb-6'}>
            <div className='flex justify-between mb-2'>
                <p>{el.title}</p>
                <button onClick={() => { setShowMore(!showMore) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
            </div>
                <ul className='ml-7 text-md list-disc'>
                    {
                        trail.map(({ height, ...style }, index) => (
                            <animated.li key={index} style={{ height, ...style }}>{el.description[index]}</animated.li>
                        ))
                    }
                </ul>
        </div>
    )
}


// {el.description.map((text, ind) => (
//     <li key={ind}>{text}</li>
// ))}

// {
//     trail.map(({ height, ...style }, index) => (
//         <animated.li className='flex items-center' style={{ height }}>{el.description[index]}</animated.li>
//     ))
// }
export default ProductDesc
