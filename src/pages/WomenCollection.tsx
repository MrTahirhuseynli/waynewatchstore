import React, { useEffect, useState } from 'react';

interface Product {
  id: number;
  image: string;
  model: string;
  price: number;
}

const WomenCollection: React.FC = () => {
  const [watches, setWatches] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/products.json'); // JSON dosyasını fetch et
        if (!response.ok) {
          throw new Error('Failed to fetch products.json');
        }
        const data = await response.json();
        const womenWatches = data.products.slice(12, 24); // Kadın saatlerini filtrele (örnek)
        setWatches(womenWatches);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Women's Collection</h1>
      <p className="text-center">Find the perfect watch for women.</p>
      <div className="row">
        {watches.map((watch) => (
          <div key={watch.id} className="col-md-4 col-sm-6 mb-4">
            <div className="card text-center">
              <img
                src={watch.image}
                alt={watch.model}
                className="card-img-top"
                style={{ maxHeight: '150px', objectFit: 'contain' }}
              />
              <div className="card-body">
                <h5 className="card-title">{watch.model}</h5>
                <p className="card-text">${watch.price.toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomenCollection;
