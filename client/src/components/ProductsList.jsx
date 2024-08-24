import ProductMini from './ProductMini'
import { useMemo } from 'react';

const ProductList = ({ products }) => {
    const memoizedProducts = useMemo(() => products, [products]);
    return (
        <>
            <div className='grid grid-cols-6 grid-rows-2 ml-[22px] w-full'>
                {memoizedProducts.map((prod) => (
                    <ProductMini key={prod.name} prod={prod} />
                ))}
            </div>
        </>
    )
}

export default ProductList;
