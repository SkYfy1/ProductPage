import React from 'react'
import { animated, useSpring } from '@react-spring/web'

const Sliding = () => {
    const spring = useSpring({
        from: { transform: 'translateX(0%)' },
        to: { transform: 'translateX(-100%)' },
        loop: true,
        config: { duration: 1000 },
        reset: true
    })
    return (
        <>
            <div className='w-full bg-blue-700 overflow-hidden py-1 rounded  mt-5'>
                {/* <animated.div style={{ ...spring }}>texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext</animated.div> */}
                <div className="flex text-white">
                    <animated.div style={spring} className="flex-shrink-0 whitespace-nowrap">
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                    </animated.div>
                    <animated.div style={spring} className="flex-shrink-0 whitespace-nowrap">
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                    </animated.div>
                </div>
            </div>
        </>
    )
}

export default Sliding
