import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// type Inputs = {
//     email: string,
//     name?: string,
//     password: string,
// };

const formSchema = z.object({
    email: z.string().email(),
    name: z.string().optional(),
    password: z.string().min(5),
})

type FormFields = z.infer<typeof formSchema>;


const AuthComponent = ({ type, submit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<FormFields>({
        resolver: zodResolver(formSchema)
    });

    const onSubmit: SubmitHandler<FormFields> = (data) => submit(data);
    return (
        <form className='px-12 py-12 flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
            <input id='email' className='rounded py-5 px-5 border border-gray-400' placeholder='Type your email' type="text" {...register('email')} />
            {errors.email && (<div className='text-gray-500'>{errors.email.message}</div>)}
            {type === 'Register' && <input id='name' className='rounded py-5 px-5 border border-gray-400' placeholder='Type your name' type="text" {...register('name')} />}
            <input id='password' className='rounded py-5 px-5 border border-gray-400' placeholder='Type your password' type="password" {...register('password')} />
            {errors.password && (<div className='text-gray-500'>{errors.password.message}</div>)}
            <button disabled={isSubmitting} className='w-full rounded hover:bg-blue-900 text-base bg-blue-800 text-white py-5' type="submit" value='Register'>{type}</button>
        </form>
    )
}

export default AuthComponent
