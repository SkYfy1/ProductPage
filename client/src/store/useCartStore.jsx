import { create } from 'zustand'

const useCartStore = create((set) => ({
    cart: {},
    addToCart: (id, elem) => set((state) => ({ cart: { ...state.cart, [id]: elem } })),
    decreaseQuantity: (id, elem) => set((state) => {
        if(state.cart[id].quantity >= 2) {
            return { cart: {
                ...state.cart,
                [id]: {
                    ...state.cart[id],
                    quantity: state.cart[id].quantity - 1
                }
            }}
        };

        const { [id]: _, ...remainingItems } = state.cart; // удаляем элемент
        return { cart: remainingItems };
    }),
    increaseQuantity: (id, elem) => set((state) => ({
        cart: {
            ...state.cart,
            [id]: {
                ...state.cart[id],
                quantity: state.cart[id].quantity + 1
            }
        }
    })),
    deleteItem: (id) => set((state) => {
        const { [id]: _, ...remainingItems } = state.cart; // удаляем элемент
        return { cart: remainingItems };
    })
}))

export default useCartStore;