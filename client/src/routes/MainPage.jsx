import React from 'react'
import AllCollections from '../components/AllCollections'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore'
import UserService from '../services/UserService'

const fetchUsers = async () => {
  try {
    const users = await UserService.fetchUsers();
    console.log(users)
  } catch (error) {
    console.log(error)
  }
}

const MainPage = () => {
  const store = useAuthStore();
  return (
    <>
      <h1 className='mx-auto w-fit py-6 text-3xl'>Choose Collection</h1>
      <button className='p-2 bg-blue-500 rounded text-white my-2' onClick={fetchUsers}>Get all users</button>
      <AllCollections />
      <Link to={'/latest'} className='w-1/4 mx-auto rounded block mt-12 hover:bg-blue-900 text-base bg-blue-800 text-white py-2 text-center'>Or check latest arrivals</Link>
    </>
  )
}

export default MainPage
