import React, { useEffect, useState } from 'react'
import ModalWindow from './ModalWindow'
import Review from './Review'
import ReviewInput from './ReviewInput'
import { useQuery } from "@tanstack/react-query"
import ProductService from '../services/ProductService'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function PaginationRounded({ pageCount, setPage }) {
    return (
        <Stack spacing={2}>
            <Pagination count={pageCount} variant="outlined" shape="rounded" onChange={(event, page) => setPage(page)} />
        </Stack>
    );
}

const ReviewModal = ({ show, id }) => {
    const [page, setPage] = useState(1);
    const maxPerPage = 3;
    useEffect(() => {
        console.log(page)
    }, [page])

    const {
        data: reviews,
        isLoading,
        isError,
        error,
        refetch
    } = useQuery({
        queryKey: ['reviews', id],
        queryFn: async () => {
            const res = await ProductService.getReviews(id);
            return res.data;
        }
    })

    const addReview = async (dat) => {
        try {
            const res = await ProductService.addReview(dat);
            refetch();
        } catch (error) {
            console.log(error)
        }
    }

    if (isError) {
        return (
            <ModalWindow show={show}>
                <>Error: {error.message}</>
            </ModalWindow>
        )
    }

    if (isLoading) {
        return (
            <ModalWindow show={show}>
                <>Loading...</>
            </ModalWindow >
        )
    }
    return (
        <ModalWindow show={() => show(false)}>
            {<div className='flex flex-col gap-3'>
                {reviews.length > 5 ? reviews.slice(page * maxPerPage - 3, page * maxPerPage).map((el, ind) => ind < 5 && <Review review={el} key={el._id} />) : reviews?.map(el => <Review review={el} key={el._id} />)}
            </div>}
            {reviews.length > 5 && <div className='mt-2 flex justify-center'>
                <PaginationRounded pageCount={Math.ceil(reviews.length / maxPerPage)} setPage={setPage} />
            </div>}
            <ReviewInput id={id} addReview={addReview} />
        </ModalWindow >
    )
}

export default ReviewModal
