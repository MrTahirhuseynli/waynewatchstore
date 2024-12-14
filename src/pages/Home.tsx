import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Product {
  id: number;
  image: string;
  model: string;
  price: number;
}

interface SliderData {
  title: string;
  watches: Product[];
}

const Home: React.FC = () => {
  const [sliderData, setSliderData] = useState<SliderData[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/products.json'); 
        if (!response.ok) {
          throw new Error('Failed to fetch products.json');
        }
        const data = await response.json();

        const sliderTitles = [
          'Featured Watches',
          'Most Loved Watches',
          'Top Selling Watches',
          'Men’s Collection',
        ];

        
        const groupedData: SliderData[] = sliderTitles.map((title, index) => ({
          title,
          watches: data.products.slice(index * 6, (index + 1) * 6), 
        }));

        setSliderData(groupedData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // pc 4
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } }, // Tablet 3
      { breakpoint: 768, settings: { slidesToShow: 1 } }, // Telefon 1
    ],
  };

  return (
    <div>
      {sliderData.map((slider, index) => (
        <section key={index} className="carousel-section py-4">
          <h2 className="text-center mb-4">{slider.title}</h2>
          <Slider {...settings}>
            {slider.watches.map((watch) => (
              <div key={watch.id} className="slide">
                <div className="card text-center mx-2">
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
          </Slider>
        </section>
      ))}
    </div>
  );
};

export default Home;
