import { useForm, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'

const deliverySchema = z.object({
    name: z.string(),
    surname: z.string(),
    number: z.string().regex(/^\d{5,13}$/, 'Number must be between 5 and 13 digits')
})

// .int().gte(10000).lte(99999).max(12)

type deliveryInputs = z.infer<typeof deliverySchema>

const submit = (data: deliveryInputs) => {
    console.log('1')
    try {
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

const DeliveryForm = ({ sData }) => {
    const {
        register,
        reset,
        handleSubmit,
        getValues,
        formState: { errors, isSubmitting, isSubmitted }
    } = useForm<deliveryInputs>({
        resolver: zodResolver(deliverySchema)
    })

    const onSubmit: SubmitHandler<deliveryInputs> = (data) => {
        console.log('Submitting form with data:', data);
        sData(data)
    }
    return (
        <>
            <form className='grid grid-cols-6 gap-4 ' onSubmit={handleSubmit(onSubmit)}>
                <div className='col-start-1 col-end-4 gap-2 flex flex-col justify-between'>
                    <label htmlFor='name' className='text-sm text-gray-500 ml-1'>Name</label>
                    <input disabled={isSubmitted} type="text" className='p-3 outline-none rounded border border-gray-300' id='name' {...register('name')} />
                </div>
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                <div className='col-start-4 col-end-7 gap-2 flex flex-col justify-between'>
                    <label htmlFor='surname' className='text-sm text-gray-500 ml-1'>Surname</label>
                    <input disabled={isSubmitted} type="text" className='p-3 outline-none rounded border border-gray-300' id='surname' {...register('surname')} />
                </div>
                {errors.surname && <p className='text-red-500'>{errors.surname.message}</p>}
                <div className='col-span-6 row-start-2 gap-2 flex flex-col justify-between'>
                    <label htmlFor='number' className='text-sm text-gray-500 ml-1'>Number</label>
                    <input disabled={isSubmitted} type="text" id='number' className='p-3 outline-none text-center rounded border border-gray-300' {...register('number')} />
                </div>
                {errors.number && <p className='text-green-500'>{errors.number.message}</p>}
                <button disabled={isSubmitted} type='submit' className='p-2 bg-blue-500 rounded'>Confirm</button>
                <button type='button' onClick={() => { console.log('reset'); reset(getValues()) }} className='p-2 bg-blue-500 rounded'>Change</button>
            </form>
        </>
    )
}

export default DeliveryForm
