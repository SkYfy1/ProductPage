import React from 'react'
import ProductList from '../components/ProductsList'
import { fetchByCollection } from '../functions/fetch.js'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

const CollectionPage = () => {
    const { name } = useParams();

    const { data: products,
        isLoading
    } = useQuery({
        queryKey: ['products', { name }],
        queryFn: () => fetchByCollection(name)
    })

    return (
        <div className='mx-auto my-0 py-2'>
            <h1 className='mx-auto w-1/3 text-center py-6 text-3xl'>Latest Arrivals</h1>
            {isLoading ? (<>Loading...</>) : <ProductList products={products} />}
        </div>
    )
}

export default CollectionPage
