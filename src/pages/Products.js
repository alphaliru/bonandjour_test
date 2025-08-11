import React from 'react';

function Products() {
  const products = [
    { id: 1, name: '草莓千層', price: 180 },
    { id: 2, name: '抹茶慕斯', price: 160 },
    { id: 3, name: '檸檬塔', price: 150 },
  ];

  return (
    <section style={{ padding: '40px' }}>
      <h2>所有商品</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '20px',
              width: '200px',
              textAlign: 'center',
            }}
          >
            <img
              src={`https://via.placeholder.com/200x150?text=${p.name}`}
              alt={p.name}
              style={{ borderRadius: '4px', marginBottom: '10px' }}
            />
            <h3>{p.name}</h3>
            <p>NT$ {p.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
