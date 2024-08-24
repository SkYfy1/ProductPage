import React, { useEffect } from 'react'
import ProductInfo from '../components/ProductInfo'
import ImageSlider from '../components/ImageSlider'
import Benefits from '../components/Benefits'
import Collection from '../components/Collection'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
const fetchProduct = async (id) => {
  const response = await fetch(`/api/product/${id}`);
  
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

const ProductPage = () => {
  const { id } = useParams();
  const {
    data: product,
    isLoading,
    error
  } = useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProduct(id)
  })

  if (isLoading) {
    return (<div>Loading...</div>)
  }

  if (error) {
    return (<div>{error.message}</div>)
  }
  return (
      <div className='px-24 mx-auto my-0 pt-16'>
        <div className='flex gap-8 justify-center mb-52'>
          <ImageSlider prod={product}/>
          <ProductInfo prod={product}/>
        </div>
        <div className='pb-8'>
          <h1 className='text-4xl mb-4 font-semibold tracking-wide'>Discover timeless elegance</h1>
          <p className='text-sm'>Step into a world where quality meetss quintessential charm with our collection.dsada fdzXvasfas dfads fasdfasdfdsadfasdfgasdgasdgasg asgasdgasdgdasgsadgasdgasdgdasgdasgsdagsadgsadgasdgadsgag.</p>
        </div>
        <Benefits />
        <Collection collection={product.collection}/>
      </div>
  )
}

export default ProductPage
