import React, { useCallback, useEffect } from 'react'
import svg from '../assets/stylenest.svg'
import { ToastContainer, toast } from 'react-toastify';
import AuthComponent from '../components/Login/AuthComponent';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';


const LoginPage = () => {
    const navigate = useNavigate();
    const setUser = useAuthStore((state) => state.setUser);
    const submitFunc = useCallback(async (dat) => {
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
            toast.error(data.error);
            return;
        }

        setUser(data);
        navigate('/');
    }, [])
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
