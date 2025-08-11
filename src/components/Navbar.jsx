import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname, hash } = useLocation()
  const at = (h) => (hash === h ? { fontWeight: 700 } : {})
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <div className="brand">Bon & Jour</div>
        <div className="links">
          <Link to="/" style={at('#/')}>首頁</Link>
          <Link to="/products" style={at('#/products')}>所有商品</Link>
        </div>
      </div>
    </nav>
  )
}