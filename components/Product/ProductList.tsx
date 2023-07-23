import React from 'react'
import ProductCard from './ProductCard'
import { useAppSelector } from '@/redux/store'

export const ProductList = () => {
    const products = useAppSelector(state => state?.product?.products ?? [])

    return (
        <div className='flex flex-wrap items-center justify-center gap-8'>
            {
                products?.map((p: any, idx: any) => (
                    <ProductCard
                        key={ idx }
                        data={ p }
                    />
                ))
            }
        </div>
    )
}
