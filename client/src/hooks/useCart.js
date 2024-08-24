import { useQuery } from '@tanstack/react-query'
import { fetchLatest } from '../functions/fetch'
import useCartStore from '../store/useCartStore'

const useCart = () => {
    const {
        data: products = [],
        isLoading
    } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetchLatest()
    })
    const { cart } = useCartStore();

    const cartItems = products.filter((product) => cart.hasOwnProperty(product.product_id)).map(el => {
        const item = cart[el.product_id];

        return {
            id: el.product_id,
            name: el.name,
            price: el.price,
            img: el.images[0].image_url,
            ...item
        }
    });

    return { cartItems, isLoading };
}

export default useCart;