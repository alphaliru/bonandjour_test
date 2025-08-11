import React from 'react'

export default function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} loading="lazy" />
      <div className="card-body">
        <div className="card-title">{product.name}</div>
        <div className="price">NT$ {product.price.toLocaleString()}</div>
        <div style={{marginTop: 6, color:'#777', fontSize: 13}}>{product.category}</div>
      </div>
    </div>
  )
}