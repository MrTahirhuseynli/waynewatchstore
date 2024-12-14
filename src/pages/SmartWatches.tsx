import React, { useEffect, useState } from 'react';

interface SmartWatch {
  id: number;
  image: string;
  model: string;
  price: number;
}

const SmartWatches: React.FC = () => {
  const [smartWatches, setSmartWatches] = useState<SmartWatch[]>([]);

  useEffect(() => {
    const fetchSmartWatches = async () => {
      try {
        const response = await fetch('/products.json'); 
        if (!response.ok) {
          throw new Error('Failed to fetch products.json');
        }
        const data = await response.json();

        
        console.log('Fetched products:', data.products);

        
        const filteredSmartWatches = data.products.filter((product: any) =>
          [
            'Apple Watch ',
            'Samsung Galaxy ',
            'Fitbit Versa 4',
            'ROLEX',
            'OMEGA',
            'CALVIN KLEIN',
            'SWATCH',
            'BULOVA',
            'SKAGEN',
            'BREITLING',
            'TAG HEUER',
            'HAMILTON',
          ].includes(product.model)
        );

        console.log('Filtered smartwatches:', filteredSmartWatches);

        setSmartWatches(filteredSmartWatches);
      } catch (error) {
        console.error('Error fetching smartwatches:', error);
      }
    };

    fetchSmartWatches();
  }, []);

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Smartwatches</h1>
      <p className="text-center">Discover the latest smartwatches.</p>
      <div className="row">
        {smartWatches.map((watch) => (
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

export default SmartWatches;
