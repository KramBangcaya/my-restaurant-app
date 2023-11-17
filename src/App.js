import React from 'react';
import RestaurantList from './RestaurantList';
import './RestaurantList.css';

const App = () => {
  return (
    <div className="App">
      <h1 className="restaurant-list__header">List of Restaurants</h1>
      <RestaurantList />
    </div>
  );
};

export default App;