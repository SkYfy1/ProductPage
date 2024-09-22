import React, { useEffect } from 'react'
import OrderService from '../services/OrderService'
import Order from './Order'
import axios from 'axios'
import $api from '../http'
import { useAuthStore } from '../store/useAuthStore';
import { useQuery } from '@tanstack/react-query'

async function fetchOrders(user) {
  try {
    const orders = await OrderService.fetchOrders(user);
    const data = orders.data;
    return data;
  } catch (error) {
    console.log(error)
  }
}

const UserOrders = () => {
  const user = useAuthStore((state) => state.user.id);


  const {
    isLoading,
    data: orders
  } = useQuery({
    queryKey: ["orders"],
    queryFn: () => fetchOrders(user),
  })

  if (isLoading) {
    return (
      <>Loading...</>
    )
  } else {
    return (
      <>{orders[0].payment}</>
    )
  }

  return (
    <div>
      <Order />
    </div>
  )
}

export default UserOrders
