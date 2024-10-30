import React from 'react'
import { animated, useSpring } from '@react-spring/web'

const Sliding = () => {
    const spring = useSpring({
        from: { transform: 'translateX(0%)' },
        to: { transform: 'translateX(-100%)' },
        loop: true,
        config: { duration: 5000 },
        reset: true
    })
    return (
        <>
            <div className='w-full bg-blue-700 overflow-hidden py-1 rounded  mt-5'>
                {/* <animated.div style={{ ...spring }}>texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext</animated.div> */}
                <div className="flex  text-white">
                    <animated.div style={{ ...spring }} className="flex-shrink-0 whitespace-nowrap">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </animated.div>
                    <animated.div style={{ ...spring }} className="flex-shrink-0 whitespace-nowrap">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </animated.div>
                </div>
            </div>
        </>
    )
}

export default Sliding
