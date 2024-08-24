import React, { useEffect } from 'react'
import ProductMini from './ProductMini'
import { useQuery } from '@tanstack/react-query';

const fetchProduct = async (collection) => {
  const response = await fetch(`/api/collection/${collection}`);
  
  // Проверка статуса ответа
  if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
  }
  
  // Проверка, что ответ не пуст
  const data = await response.json();
  
  // Проверка на пустые данные
  if (!data) {
      throw new Error('No data found');
  }
  
  return data;
};

const Collection = ({ collection }) => {
  const {
    data: col,
    isLoading,
    error
  } = useQuery({
    queryKey: ['collection', collection],
    queryFn: () => fetchProduct(collection)
  })

  if (isLoading) {
    return (<div>Loading...</div>)
  }

  if (error) {
    return (<div>{error.message}</div>)
  }

  return (
    <div className='flex justify-start flex-col pb-5 w-full'>
      <h1 className='text-3xl font-semibold'>In this collection</h1>
      <div className='flex justify-between'>
        {col.map((el) => (
          <ProductMini key={el.product_id} prod={el} />
        ))}
      </div>
    </div>
  )
}

export default Collection
