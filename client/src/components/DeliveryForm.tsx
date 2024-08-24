import { useForm, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'

const deliverySchema = z.object({
    name: z.string(),
    surname: z.string(),
    number: z.number().int().gte(10000).lte(99999).max(12)
})

type deliveryInputs = z.infer<typeof deliverySchema>

const submit = (data: deliveryInputs) => {
    console.log(data)
}

const DeliveryForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<deliveryInputs>({
        resolver: zodResolver(deliverySchema)
    })

    const onSubmit: SubmitHandler<deliveryInputs> = (data) => submit(data)
    return (
        <form className='grid grid-cols-6 gap-4 ' onSubmit={handleSubmit(onSubmit)}>
            <div className='col-start-1 col-end-4 gap-2 flex flex-col justify-between'>
                <label htmlFor='name' className='text-sm text-gray-500 ml-1'>Name</label>
                <input type="text" className='p-3 outline-none rounded border border-gray-300' id='name' {...register('name')} />
            </div>
            <div className='col-start-4 col-end-7 gap-2 flex flex-col justify-between'>
                <label htmlFor='surname' className='text-sm text-gray-500 ml-1'>Surname</label>
                <input type="text" className='p-3 outline-none rounded border border-gray-300' id='surname' {...register('surname')} />
            </div>
            <div className='col-span-6 row-start-2 gap-2 flex flex-col justify-between'>
                <label htmlFor='number' className='text-sm text-gray-500 ml-1'>Number</label>
                <input type="text" id='number' className='p-3 outline-none text-center rounded border border-gray-300' {...register('number')} />
            </div>
        </form>
    )
}

export default DeliveryForm
