import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Modal } from "../components/Modal";
import { useFavoriteRestaurants } from "../Context/FavContext";
import { restaurants } from "../data";
import { RestaurantType } from "../models/Restaurant";

export const RestaurantDetails = () => {
  let { id } = useParams();
  let idNum = Number(id);
  const [restoById, setRestoById] = useState<RestaurantType | null>(null);
  console.log(id);

  const {
    handleModal,
    addFavoriteRestaurant,
    removeFavoriteRestaurant,
    favoriteRestaurantsIds,
  } = useFavoriteRestaurants();

  let restaurantsList = restaurants.filter((rest) => rest.id === idNum);
  console.log(restaurantsList);

  return (
    <div>
      {restaurantsList.map((rest) => {
        const isFav = favoriteRestaurantsIds.some((id) => id === rest.id);
        return (
          <div className="menu">
            <h1 className="name">{rest.name}</h1>
            <div className="description">
              <p>{rest.description_long}</p>
            </div>
            {isFav ? (
              <button className="yes" onClick={() => handleModal(rest.id)}>
                Remove from Fav
              </button>
            ) : (
              <button
                className="yes"
                onClick={() => addFavoriteRestaurant(rest)}
              >
                Add to Fav
              </button>
            )}

            <h2 className="m">Menu</h2>
            <h4>Entrees</h4>
            <p className="p">{rest.menu.entrees[0]}</p>
            <p className="p">{rest.menu.entrees[1]}</p>

            <h4>Plats</h4>
            <p className="p">{rest.menu.dishes[0]}</p>
            <p className="p">{rest.menu.dishes[1]}</p>
            <p className="p">{rest.menu.dishes[2]}</p>

            <h4>Deserts</h4>
            <p className="p">{rest.menu.deserts[0]}</p>
            <p className="p">{rest.menu.deserts[1]}</p>
          </div>
        );
      })}
      <Modal />
    </div>
  );
};
