import React, { useState, useEffect } from 'react'
import ProductInfo from '../components/ProductInfo'
import ImageSlider from '../components/ImageSlider'
import Benefits from '../components/Benefits'
import Collection from '../components/Collection'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import ReviewModal from '../components/ReviewModal'
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
  const [showReviews, setShowReviews] = useState(false);
  const {
    data: product,
    isLoading,
    error
  } = useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProduct(id)
  });

  useEffect(() => {
    function stopScroll(e) {
      e.preventDefault();
      console.log('stopScroll')
    }

    showReviews && window.addEventListener('scroll', stopScroll, { passive: false });
    showReviews && window.addEventListener('wheel', stopScroll, { passive: false });

    return () => {
      window.removeEventListener('scroll', stopScroll)
      window.removeEventListener('wheel', stopScroll);
    }
  }, [showReviews])

  if (isLoading) {
    return (<div>Loading...</div>)
  }

  if (error) {
    return (<div>{error.message}</div>)
  }
  return (
      <div className='lg:px-24 px-6 mx-auto my-0 pt-16 '>
        {/* {window.innerWidth <= 414 && <h1 className='text-3xl font-medium text-center tracking-wide mb-3'>{product.name}</h1>} */}
        <div className='flex flex-col lg:flex-row items-center lg:items-start gap-8 justify-center mb-10 lg:mb-52'>
          <ImageSlider prod={product}/>
          <ProductInfo prod={product} show={() => setShowReviews(true)}/>
        </div>
        <div className='pb-8'>
          <h1 className='lg:text-4xl text-xl mb-4 font-semibold tracking-wide'>Discover timeless elegance</h1>
          <p className=' text-xs lg:text-sm'>Step into a world where quality meetss quintessential charm with our collection.dsada fdzXvasfas dfads fasdfasdfdsadfasdfgasdgasdgasg asgasdgasdgdasgsadgasdgasdgda
            sgdasgsdagsadgsadgasdgadsgag.</p>
        </div>
        <Benefits />
        <Collection collection={product.collection}/>
        {showReviews && <ReviewModal id={id} show={(bool) => setShowReviews(bool)}/>}
      </div>
  )
}

export default ProductPage
