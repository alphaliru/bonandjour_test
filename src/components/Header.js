import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{ padding: '10px', background: '#f5f5f5' }}>
      <nav>
        <Link to="/" style={{ marginRight: '10px' }}>首頁</Link>
        <Link to="/products">所有商品</Link>
      </nav>
    </header>
  );
}