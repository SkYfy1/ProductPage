import ProductMini from './ProductMini'
import { useMemo, useState } from 'react';

const ProductList = ({ products }) => {
    const memoizedProducts = useMemo(() => products, [products]);
    const [count, setCount] = useState(5);

    // useEffect(() => {
    //     let timer;
    //     if (count < 20) {
    //         timer = setTimeout(() => setCount(prev => prev + 5), 1000)
    //     }
    //     return () => { console.log('setting'); clearTimeout(timer) }
    // }, [count])
    return (
        <>
            <div className='grid grid-cols-6 grid-rows-2 ml-[22px] w-full'>
                {memoizedProducts.map((prod, index) => {
                    if (index) return (
                        <ProductMini key={prod.name} prod={prod} />
                    )
                })}
            </div>
        </>
    )
}

export default ProductList;


'grid grid-cols-6 grid-rows-2 ml-[22px] w-full'

// {
//     memoizedProducts.map((prod, index) => {
//         if (index) return (
//             <ProductMini key={prod.name} prod={prod} index={index} />
//         )
//     })

// {memoizedProducts.map((prod, index) => (
//     <ProductMini key={prod.name} prod={prod} index={index} count={count}/>
// )
// )}