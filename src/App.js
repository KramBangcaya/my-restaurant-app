import React from 'react';
import RestaurantList from './RestaurantList';
import './RestaurantList.css';

const App = () => {
  return (
    <div className="restaurant-list">
      <h2 className="restaurant-list__header">List of Restaurants</h2>
      <div className="restaurant-list__body">
        <RestaurantList />
      </div>
    </div>
  );
};

export default App;