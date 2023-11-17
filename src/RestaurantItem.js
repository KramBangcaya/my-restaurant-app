import React from 'react';

const RestaurantItem = ({ restaurant }) => {
    return (
        <li className="restaurant-list__item" key={restaurant.restaurant_name}>
            <p>{restaurant.restaurant_name}</p>
        </li>
    );
};

export default RestaurantItem;