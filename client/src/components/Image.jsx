import React from 'react'
import { useState } from 'react'
import { useSpring, animated } from '@react-spring/web';


const Image = React.memo(({ img }) => {
    // return (
    //         <img src={img} loading='lazy' className='size-32 gap-10 rounded-md object-cover' alt="" />
    // )
    const [loading, setLoading] = useState(true);

    return (
        <>
            {loading && <div className="size-32 gap-10 rounded-md bg-gray-400"></div>}
            <img
                src={img}
                className='size-32 gap-10 rounded-md object-cover'
                onLoad={() => { setLoading(false); }}
                alt="product"
                style={{ display: loading ? 'none' : 'block' }}
            />
        </>
    );
})

export default Image
