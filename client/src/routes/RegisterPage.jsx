import React, { useEffect } from 'react'
import useAppState from '../store/useAppState';
import svg from '../assets/stylenest.svg'
import AuthComponent from '../components/Login/AuthComponent';
import { ToastContainer, toast } from 'react-toastify';

const submitFunc = async (dat) => {
  const { email, name, password } = dat;
  const res = await fetch('/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, name, password })
  })

  const data = await res.json();

  if(data.error) {
    toast.error(data.error)
  }

  console.log(data);
}

const RegisterPage = () => {
    const {setPosFalse, setPosTrue} = useAppState();
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
         <p className='mt-12 text-2xl'>Welcome to Register page</p>
          <AuthComponent type='Register' submit={submitFunc}/>
        </div>
    </div>
  )
}

export default RegisterPage
