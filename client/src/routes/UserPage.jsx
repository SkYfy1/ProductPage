import React from 'react'
import { useAuthStore } from '../store/useAuthStore'

const UserPage = () => {
    const auth = useAuthStore()
  return (
    <div>
      {auth.user.name}
    </div>
  )
}

export default UserPage
