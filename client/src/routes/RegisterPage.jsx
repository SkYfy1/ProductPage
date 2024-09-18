import React from 'react'
import svg from '../assets/stylenest.svg'
import AuthComponent from '../components/Login/AuthComponent';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

const RegisterPage = () => {
  const navigate = useNavigate();
  const store = useAuthStore();

  const submitFunc = async (dat) => {
    const { email, name, password } = dat;
    // const res = await fetch('/api/auth/register', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ email, name, password })
    // })
  
    // const data = await res.json();
  
    // if(data.error) {
    //   toast.error(data.error)
    // }
    await store.registration(email, name, password);

    setTimeout(() => navigate('/'), 1000);
  }
  return (
    <div className='flex justify-center items-center h-screen'>
        <ToastContainer />
        <img className='absolute top-12 left-12' src={svg} alt="logoImg" />
        <div className='w-1/4 bg-white rounded text-center'>
         <p className='mt-12 text-2xl'>Welcome to Register page</p>
          <AuthComponent type='Register' submit={submitFunc}/>
        </div>
    </div>
  )
}

export default RegisterPage
