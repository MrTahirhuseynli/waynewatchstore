import React, { useEffect, useState } from 'react';

interface Store {
  id: number;
  name: string;
  address: string;
  image: string;
}

const Stores: React.FC = () => {
  const [stores, setStores] = useState<Store[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; 

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await fetch('/products.json'); 
        if (!response.ok) {
          throw new Error('Failed to fetch products.json');
        }
        const data = await response.json();

        // Ürünlerden mağaza verilerini oluştur
        const storeData = data.products.map((product: any, index: number) => ({
          id: index + 1,
          name: `Store ${String.fromCharCode(65 + (index % 26))}`, 
          address: `Address ${index + 1}`, 
          image: product.image,
        }));

        setStores(storeData);
      } catch (error) {
        console.error('Error fetching stores:', error);
      }
    };

    fetchStores();
  }, []);

  const totalPages = Math.ceil(stores.length / itemsPerPage); // toplam page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentStores = stores.slice(startIndex, startIndex + itemsPerPage); 

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Locate Stores Near You</h1>
      <p className="text-center">Find our stores in your location.</p>
      <div className="row">
        {currentStores.map((store) => (
          <div key={store.id} className="col-md-4 col-sm-6 mb-4">
            <div className="card text-center">
              <img
                src={store.image}
                alt={store.name}
                className="card-img-top"
                style={{ maxHeight: '150px', objectFit: 'contain' }}
              />
              <div className="card-body">
                <h5 className="card-title">{store.name}</h5>
                <p className="card-text">{store.address}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Sayfa Geçiş Butonları */}
      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn btn-success me-2"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Previous
        </button>
        <button
          className="btn btn-success"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
      {/* page no */}
      <div className="d-flex justify-content-center mt-3">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`btn ${currentPage === index + 1 ? 'btn-success' : ''} mx-1`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Stores;
