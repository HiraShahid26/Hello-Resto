import React, { useContext } from "react";
import { useFavoriteRestaurants } from "../Context/FavContext";
import { RestaurantContext } from "../Context/RestaurantContext";
import { RestoCard } from "./RestoCard";

export const RestaurantList = () => {
  const { restaurants } = useContext(RestaurantContext);
  const { favoriteRestaurantsIds } = useFavoriteRestaurants();

  return (
    <div className="detail-card">
      {restaurants.map((resto) => {
        const isFav = favoriteRestaurantsIds.some((id) => id === resto.id);
        return (
          <div key={resto.id}>
            <RestoCard restaurant={resto} isFav={isFav} />
          </div>
        );
      })}
    </div>
  );
};
