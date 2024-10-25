import { z } from 'zod'

const formSchema = z.object({
    product_id: z.string(),
    name: z.string(),
    description: z.string(),
    category: z.union([z.literal('unisex'), z.literal('men'), z.literal('women')]),
    collection: z.union([z.literal('fresh'), z.literal('urban'), z.literal('cozy')]),
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

export { FormFields, formSchema };