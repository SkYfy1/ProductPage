import { create } from 'zustand'

const useCartStore = create((set) => ({
    cart: {},
    addToCart: (id, elem) => set((state) => ({ cart: { ...state.cart, [id]: elem } })),
    decreaseQuantity: (id, elem) => set((state) => ({
        cart: {
            ...state.cart,
            [id]: {
                ...state.cart[id],
                quantity: state.cart[id].quantity - 1
            }
        }
    })),
    increaseQuantity: (id, elem) => set((state) => ({
        cart: {
            ...state.cart,
            [id]: {
                ...state.cart[id],
                quantity: state.cart[id].quantity + 1
            }
        }
    }))
}))

export default useCartStore;