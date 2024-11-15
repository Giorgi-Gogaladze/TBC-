'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const SortingOptions = ({sortBy, order}) => {
    const router = useRouter()

    const handleSort = (e) => {
        const event = e.target.value
        const [sortBy, order] = event.split('-');

        router.push(`?sortBy=${sortBy}&order=${order}`, {shallow: true})
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