import React from 'react'

const ModalWindow = ({ children }) => {
    return (
        <>
            <div className='bg-opacity-75 bg-black absolute w-full h-full z-40 left-0 top-0'></div>
            <div className='bg-white rounded z-50 fixed top-0 left-[267px] translate-y-2/4 translate-x-full w-1/4 h-1/2 p-5 text-center'>{children}</div>
        </>
    )
}

export default ModalWindow
