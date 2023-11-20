import React from 'react';

const RestaurantItem = ({ restaurant }) => {
    return (
        <li className="restaurant-list__section-item" key={restaurant.restaurant_name}>
            <p className="restaurant-list__section-item-name">{restaurant.restaurant_name}</p>
        </li>
    );
};

export default RestaurantItem;