import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Image from './Image';
import { Suspense } from 'react';
import { lazy } from 'react';

const LazyImg = React.lazy(() => import('./Image.jsx'))

const ProductMini = React.memo(({ prod }) => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   console.log(prod.images[0].image_url)
  // })
  // if (index > count) {
  //   return (
  //     <div className='mt-5 cursor-pointer' onClick={() => navigate(`/product/${prod.product_id}`)}>
  //       {/* <img src={prod.images[0].image_url} className='size-32 gap-10 rounded-md object-cover' alt="" /> */}
  //       <div className={`h-52 w-48 gap-10 rounded-md object-cover bg-[url(${prod.images[0].image_url})`}>dasdas</div>
  //       <p className=' text-xs text-gray-500 font-semibold mt-2 mb-1'>{prod.images[0].color}</p>
  //       <h3 className='text-base'>{prod.name}</h3>
  //       <h3 className=' text-sm text-gray-500 mt-2'>{prod.price}$</h3>
  //       <div className='flex gap-2 mt-2'>
  //         {prod.colors_available.map((el, index) => (
  //           <div key={index} className='size-2 rounded-full border-gray-200 border' style={{
  //             backgroundColor: el.color,
  //             opacity: 0.8
  //           }}></div>
  //         ))}
  //       </div>
  //     </div>
  //   )
  // }
  useEffect(() => {
    console.log('Rerender')
  })
  return (
    <div className='mt-5 cursor-pointer flex flex-col items-center' onClick={() => navigate(`/product/${prod.product_id}`)}>
        <Image img={prod.images[0].image_url} />
      {/* <img src={prod.images[0].image_url} className='size-32 gap-10 rounded-md object-cover' alt="" /> */}
      <p className=' text-xs text-gray-500 font-semibold mt-2 mb-1'>{prod.images[0].color}</p>
      <h3 className=' text-sm lg:text-base'>{prod.name}</h3>
      <h3 className=' lg:text-sm text-xs text-gray-500 mt-2'>{prod.price}$</h3>
      <div className='flex gap-2 mt-2'>
        {prod.colors_available.map((el, index) => (
          <div key={index} className='size-2 rounded-full border-gray-200 border' style={{
            backgroundColor: el.color,
            opacity: 0.8
          }}></div>
        ))}
      </div>
    </div>
  )
})

// loading={index < 5 ? "eager" : "lazy"}

export default ProductMini
