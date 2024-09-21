import React, { useEffect } from 'react'
import Order from './Order'
import axios from 'axios'
import $api from '../http'
import { useAuthStore } from '../store/useAuthStore'

async function fetchOrders() {
  const orders = await $api.post('/user/orders', { user })
}

const UserOrders = () => {
  const user  = useAuthStore((state) => state.user.id)


  async function fetchOrders() {
    const orders = await $api.post('/user/orders', { user })
    console.log(orders.data);
  }

  useEffect(() => {
    fetchOrders();
  })
  return (
    <div>
      <Order />
    </div>
  )
}

export default UserOrders
