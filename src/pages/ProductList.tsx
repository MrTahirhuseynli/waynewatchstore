import React from 'react';
import products from '../public/products.json'; 

const ProductList: React.FC = () => {
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Product List</h1>
      <div className="row">
        {products.products.map((product) => (
          <div key={product.id} className="col-md-4 col-sm-6 mb-4">
            <div className="card text-center">
              <img
                src={product.image}
                alt={product.model}
                className="card-img-top"
                style={{ maxHeight: '150px', objectFit: 'contain' }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.model}</h5>
                <p className="card-text">${product.price.toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
