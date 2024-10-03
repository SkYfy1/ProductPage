import React from 'react'
import OrderService from '../services/OrderService'
import Order from './Order'
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
  }

  return (
    <div>
      {orders?.map((el, index) => (<Order key={el.receiver._id} item={el} index={index}/>))}
    </div>
  )
}

export default UserOrders
