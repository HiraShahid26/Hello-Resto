import { Link } from "react-router-dom";
import { RestaurantType } from "../models/Restaurant";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useFavoriteRestaurants } from "../Context/FavContext";

type RestoCardProps = {
  restaurant: RestaurantType;
  isFav: boolean;
};
export const RestoCard = ({ restaurant, isFav }: RestoCardProps) => {
  const {
    addFavoriteRestaurant,
    removeFavoriteRestaurant,
    favoriteRestaurantsIds,
    handleModal,
  } = useFavoriteRestaurants();
  console.log(isFav);
  return (
    <div className="card">
      <img src={restaurant.img} alt="" />

      <div className="logo">
        <Link to={`/details/${restaurant.id}`}>
          <h2>{restaurant.name}</h2>
        </Link>
        <div>
          {isFav ? (
            <button
              className="heart"
              onClick={() => handleModal(restaurant.id)}
            >
              <FaHeart />
            </button>
          ) : (
            <button
              className="heart"
              onClick={() => addFavoriteRestaurant(restaurant)}
            >
              <FaRegHeart />
            </button>
          )}
        </div>
      </div>
      <p className="text">{restaurant.description_short} </p>
    </div>
  );
};
