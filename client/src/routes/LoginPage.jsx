import React, { useEffect } from 'react'
import useAppState from '../store/useAppState';
import svg from '../assets/stylenest.svg'
import { ToastContainer } from 'react-toastify';
import AuthComponent from '../components/Login/AuthComponent';

const submitFunc = async (dat) => {
    const { email, password } = dat;
    const res = await fetch('/api/auth/login', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })

    const data = await res.json();

    if (data.error) {
        toast.error(data.error)
    }

    console.log(data);
}

const LoginPage = () => {
    const { setPosFalse, setPosTrue } = useAppState();
    useEffect(() => {
        setPosFalse();
        return () => {
            setPosTrue();
        }
    }, []);
    return (
        <div className='flex justify-center items-center h-screen'>
            <ToastContainer />
            <img className='absolute top-12 left-12' src={svg} alt="logoImg" />
            <div className='w-1/4 bg-white rounded text-center'>
                <p className='mt-12 text-2xl'>Welcome to Login page</p>
                <AuthComponent type='Login' submit={submitFunc} />
            </div>
        </div>
    )
}

export default LoginPage
