import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../slices/CartSlice'; // Redux action to add item to cart
import './ProductList.css'; // Assuming you have a CSS file for styling

const plantsArray = [
  {
    id: 1,
    name: 'Fern',
    image: '/assets/fern.jpg',
    description: 'A beautiful indoor plant that thrives in indirect light.',
    cost: 12.99,
    category: 'Indoor',
  },
  {
    id: 2,
    name: 'Succulent',
    image: '/assets/succulent.jpg',
    description: 'Low maintenance plant perfect for dry environments.',
    cost: 8.99,
    category: 'Indoor',
  },
  {
    id: 3,
    name: 'Spider Plant',
    image: '/assets/spiderplant.jpg',
    description: 'A popular houseplant with arching leaves.',
    cost: 10.99,
    category: 'Indoor',
  },
  {
    id: 4,
    name: 'Aloe Vera',
    image: '/assets/aloe.jpg',
    description: 'Medicinal plant known for its healing properties.',
    cost: 15.99,
    category: 'Outdoor',
  },
  {
    id: 5,
    name: 'Cactus',
    image: '/assets/cactus.jpg',
    description: 'A sturdy plant that can thrive in extreme conditions.',
    cost: 9.99,
    category: 'Outdoor',
  },
  {
    id: 6,
    name: 'Peace Lily',
    image: '/assets/peacelily.jpg',
    description: 'Beautiful flowering plant with air-purifying properties.',
    cost: 14.99,
    category: 'Indoor',
  },
];

const ProductList = () => {
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant)); // Dispatch action to add item to cart

    // Mark plant as added to cart by setting the plant name in state
    setAddedToCart((prev) => ({
      ...prev,
      [plant.name]: true,
    }));
  };

  return (
    <div className="product-grid">
      {plantsArray.map((plant) => (
        <div key={plant.id} className="plant-card">
          <img src={plant.image} alt={plant.name} classN

