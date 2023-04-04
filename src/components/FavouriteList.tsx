import React, { useContext, useEffect, useState } from "react";
import { useFavoriteRestaurants } from "../Context/FavContext";
import { RestaurantContext } from "../Context/RestaurantContext";
import { RestaurantType } from "../models/Restaurant";
import { Modal } from "./Modal";
import { RestoCard } from "./RestoCard";

export const FavouriteList = () => {
  const { favoriteRestaurantsIds, show } = useFavoriteRestaurants();
  const { restaurants } = useContext(RestaurantContext);
  const [favRestaurants, setFavRestaurants] = useState<RestaurantType[]>([]);

  const favoriteResto = () => {
    const restaurantFilter = restaurants.filter((resto) =>
      favoriteRestaurantsIds.includes(resto.id)
    );
    setFavRestaurants(restaurantFilter);
  };

  useEffect(() => {
    favoriteResto();
  }, [favoriteRestaurantsIds]);

  return (
    <div className="detail-card">
      {favRestaurants.map((resto) => (
        <div key={resto.id}>
          <RestoCard restaurant={resto} isFav={true} />
        </div>
      ))}
      <Modal />
    </div>
  );
};
