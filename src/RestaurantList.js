import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RestaurantItem from './RestaurantItem';

const RestaurantList = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        axios.get('https://nextjs-orpin-omega-98.vercel.app/api/restaurants')
            .then(response => response.data)
            .then(data => setRestaurants(data))
            .catch(error => {
                // Handle the error, log it, or provide user feedback
                console.error('Error fetching data:', error);
            });
    }, []);

    const groupRestaurantsByState = () => {
        const groupedRestaurants = {};
        for (const restaurant of restaurants) {
            const state = restaurant.state;
            if (!groupedRestaurants[state]) {
                groupedRestaurants[state] = [];
            }
            groupedRestaurants[state].push(restaurant);
        }
        return groupedRestaurants;
    };


    return (
        <ul>
            {Object.entries(groupRestaurantsByState()).map(([state, stateRestaurants]) => (
                <div className="restaurant-list__section" key={state}>
                    <h3 className="restaurant-list__section-header">{state}:</h3>
                    <ul className="restaurant-list__section-list">
                        {stateRestaurants.map((restaurant) => (
                            <RestaurantItem key={restaurant.restaurant_name} restaurant={restaurant} />
                        ))}
                    </ul>
                </div>
            ))}
        </ul>
    );
};

export default RestaurantList;