import React from 'react'
import ProductCard from '../components/ProductCard.jsx'
import { PRODUCTS } from '../data/products.js'

export default function Home() {
  const featured = PRODUCTS.slice(0, 4)
  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1>甜而不膩的日常</h1>
          <p>Bon & Jour · 精選手作甜點，每一口都是好心情</p>
        </div>
      </section>

      <div className="container">
        <h2 style={{margin:'16px 0'}}>精選商品 <span className="badge">NEW</span></h2>
        <div className="grid">
          {featured.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </div>
  )
}