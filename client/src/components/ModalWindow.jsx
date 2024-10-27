import React from 'react'

const ModalWindow = ({ children, show }) => {
    return (
        <>
            <div className='bg-opacity-75 bg-black absolute w-full h-full z-40 left-0 top-0' onClick={show}></div>
            <div className='bg-white rounded z-50 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-1/4 min-h-fit p-5 text-center'>{children}</div>
        </>
    )
}

export default ModalWindow
