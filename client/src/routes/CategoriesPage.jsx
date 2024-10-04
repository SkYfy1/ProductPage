import React from 'react'
import { useQuery } from '@tanstack/react-query'
import ProductService from '../services/ProductService'
import ProductList from '../components/ProductsList'
import { useParams } from 'react-router-dom'

const fetchByCategory = async (category) => {
    const response = await ProductService.getProductsByCategory(category);
    return response.data;
}

const CategoriesPage = () => {
    const { name } = useParams();
    const {
        data: products,
        isLoading
    } = useQuery({
        queryKey: ['products', { name }],
        queryFn: () => fetchByCategory(name)
    })

    return (
        <div className='mx-auto my-0 py-2'>
            <h1 className='mx-auto w-1/3 text-center py-6 text-3xl'>Latest Arrivals</h1>
            {isLoading ? (<>Loading...</>) : <ProductList products={products} />}
        </div>
    )
}

export default CategoriesPage
