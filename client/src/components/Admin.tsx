import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Input from './Input'
import axios from 'axios'
import { useState } from 'react'

const formSchema = z.object({
    product_id: z.string(),
    name: z.string(),
    description: z.string(),
    category: z.union([z.literal('dd'), z.literal('ss')]),
    collection: z.string(),
    additional_info: z.array(z.object({
        title: z.string(),
        description: z.string()
    })),
    images: z.array(z.object({
        color: z.string(),
        image_url: z.string()
    })),
    price: z.string(),
    colors_available: z.array(z.object({
        color: z.string(),
        quantity: z.string()
    }))
});

type FormFields = z.infer<typeof formSchema>;

const submit = async (data: FormFields) => {
    const d = await axios.post('http://localhost:8080/addProduct', { ...data });

    console.log(d)
}



const AdminPanel = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<FormFields>({
        resolver: zodResolver(formSchema)
    });
    const [quantity, setQuantity] = useState({
        images: [''],
        colors: [''],
        additional: ['',]
    })

    const onSubmit: SubmitHandler<FormFields> = (data) => submit(data);

    return (
        <div className='p-3'>
            <form className='flex gap-4' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col items-center gap-1'>
                    <div>Basic info</div>
                    <Input type="product_id" register={register} />
                    <Input type="name" register={register} />
                    <Input type="description" register={register} />
                    <Input type="collection" register={register} />
                    <Input type='price' register={register} />
                </div>
                <div className='flex flex-col items-center'>
                    <div>Additional info</div>
                    {quantity.additional.map((el, ind) =>
                        <>
                            <Input type={`additional_info.${ind}.title`} register={register} />
                            <Input type={`additional_info.${ind}.description`} register={register} />
                        </>
                    )}
                </div>
                <div className='flex flex-col items-center' >
                    <div>Images</div>
                    {quantity.images.map((el, ind) =>
                        <>
                            <Input type={`images.${ind}.color`} register={register} />
                            <Input type={`images.${ind}.image_url`} register={register} />
                        </>
                    )}
                </div>
                <div className='flex flex-col items-center'>
                    <div>Color Available</div>
                    {quantity.colors.map((el, ind) =>
                        <>
                            <Input type={`colors_available.${ind}.color`} register={register} />
                            <Input type={`colors_available.${ind}.quantity`} register={register} />
                        </>
                    )}
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <select className='h-12' {...register('category')}>
                        <option value="dd">dd</option>
                        <option value="ss">ss</option>
                    </select>
                    <div className='flex flex-col gap-2'>
                        <button onClick={() => setQuantity(prev => ({
                            ...prev,
                            additional: [...prev.additional, '']
                        }))} className=' h-1/3 rounded hover:bg-blue-900 text-base bg-blue-800 text-white py-5'>Add more info</button>
                        <button onClick={() => setQuantity(prev => ({
                            ...prev,
                            images: [...prev.images, '']
                        }))} className=' h-1/3 rounded hover:bg-blue-900 text-base bg-blue-800 text-white py-5'>Add more images</button>
                        <button onClick={() => setQuantity(prev => ({
                            ...prev,
                            colors: [...prev.colors, '']
                        }))} className=' h-1/3 rounded hover:bg-blue-900 text-base bg-blue-800 text-white py-5'>Add more colors</button>
                    </div>
                    <button disabled={isSubmitting} className='w-full rounded hover:bg-blue-900 text-base bg-blue-800 text-white py-5' type="submit" value='Register'>Add</button>
                </div>
            </form>
        </div>
    )
}

export default AdminPanel


{/* <div>
            <form className='px-12 py-12 flex flex-col justify-center items-center gap-1' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="product_id">First name:</label><br />
                    <input id='product_id' type="text" {...register('product_id')} />
                </div>
                <Input type="product_id" register={register}/>
                <div>
                    <label htmlFor="product_id">First name:</label><br />
                    <input type="text" {...register('name')} />
                </div>
                <input type="text" {...register('name')} />
                <input type="textarea" {...register('description')} />
                <select {...register('category')}>
                    <option value="dd">dd</option>
                    <option value="ss">ss</option>
                </select>
                <input type="text" {...register('collection')} />
                <input type="text" {...register(`additional_info.${0}.title`)} />
                <input type="text" {...register(`additional_info.${0}.description`)} />
                <input type="text" {...register(`images.${0}.color`)} />
                <input type="text" {...register(`images.${0}.image_url`)} />
                <input type="number" {...register('price')} />
                <input type="text" {...register(`colors_available.${0}.color`)} />
                <input type="text" {...register(`colors_available.${0}.quantity`)} />
                <button disabled={isSubmitting} className='w-1/4 rounded hover:bg-blue-900 text-base bg-blue-800 text-white py-5' type="submit" value='Register'>Add</button>
            </form>
        </div> */}
