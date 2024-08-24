import React from 'react'
import ProductList from '../components/ProductsList'
import { useQuery } from '@tanstack/react-query'
import { fetchLatest } from '../functions/fetch.js'

const LatestPage = () => {
    const { data: products,
        isLoading
    } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetchLatest()
    })

    return (
        <div className='mx-auto my-0 py-2'>
            <h1 className='mx-auto w-1/3 text-center py-6 text-3xl'>Latest Arrivals</h1>
            {isLoading ? (<>Loading...</>) : <ProductList products={products} />}
        </div>
    )
}

export default LatestPage;
