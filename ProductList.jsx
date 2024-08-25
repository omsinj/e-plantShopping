import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../slices/CartSlice'; // Ensure you have CartSlice setup
import './ProductList.css';

const plantsArray = [
  {
    id: 1,
    name: 'Fern',
    image: '/assets/fern.jpg',
    description: 'A beautiful indoor plant that thrives in indirect light.',
    cost: 12.99,
    category: 'Indoor'
  },
  // Add more plants here
];

const ProductList = () => {
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant)); // Add the plant to the cart (global state)

    // Mark plant as added to cart
    setAddedToCart((prev) => ({
      ...prev,
      [plant.name]: true,
    }));
  };

  return (
    <div className="product-grid">
      {plantsArray.map((plant) => (
        <div key={plant.id} className="plant-card">
          <img src={plant.image} alt={plant.name} className="plant-image" />
          <h3>{plant.name}</h3>
          <p>{plant.description}</p>
          <p>${plant.cost.toFixed(2)}</p>
          <button
            className="add-to-cart-btn"
            onClick={() => handleAddToCart(plant)}
            disabled={addedToCart[plant.name]} // Disable the button once added to cart
          >
            {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
