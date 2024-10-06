import React from 'react'
import CollectionItem from './CollectionItem'
import { useQuery } from '@tanstack/react-query'

const fetchFunc = async () => {
    const res = await fetch('/api');
    const data = await res.json();
    return data;
}

const AllCollections = () => {
    const { data: collections, isLoading } = useQuery({
        queryKey: ['collections'],
        queryFn: () => fetchFunc()
    })

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className='flex flex-col lg:flex-row gap-2'>
            {collections?.map((el) => (
                <CollectionItem key={el.name} name={el.name} id={el.collection_id} img={el.image_url} />
            ))}
        </div>
    )
}

export default AllCollections
