import React, { useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard.jsx'
import { PRODUCTS } from '../data/products.js'

export default function Products() {
  const [q, setQ] = useState('')
  const [sort, setSort] = useState('reco')

  const items = useMemo(() => {
    let arr = PRODUCTS.filter(p => p.name.toLowerCase().includes(q.toLowerCase()))
    if (sort === 'price-asc') arr = [...arr].sort((a,b)=>a.price-b.price)
    if (sort === 'price-desc') arr = [...arr].sort((a,b)=>b.price-a.price)
    return arr
  }, [q, sort])

  return (
    <div className="container">
      <h2 style={{margin:'16px 0'}}>所有商品</h2>

      <div className="toolbar">
        <input type="search" placeholder="搜尋商品名稱…" value={q} onChange={e=>setQ(e.target.value)} />
        <select value={sort} onChange={e=>setSort(e.target.value)}>
          <option value="reco">推薦排序</option>
          <option value="price-asc">價格：低 → 高</option>
          <option value="price-desc">價格：高 → 低</option>
        </select>
      </div>

      <div className="grid" style={{marginTop: 8}}>
        {items.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}