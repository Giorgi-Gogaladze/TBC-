'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { SortingOptionsProps } from './interfaces/SortingOptionsProps'

const SortingOptions: React.FC<SortingOptionsProps> = ({sortBy, order}) => {
    const router = useRouter()

    const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const [newSortBy, newOrder] = e.target.value.split('-') as [string, 'asc' | 'desc']

        router.push(`?sortBy=${newSortBy}&order=${newOrder}`)
    }
    
    return (
        <select onChange={handleSort} value={`${sortBy}-${order}`}>
          <option>sort by</option>
          <option value="price-asc">price up</option>
          <option value="price-desc">price down</option>
          <option value="rating-asc">rating up</option>
          <option value="rating-desc">rating down</option>
        </select>
      );
}

export default SortingOptions;