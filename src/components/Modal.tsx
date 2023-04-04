import { useFavoriteRestaurants } from "../Context/FavContext";

export const Modal = () => {
  const { removeFavoriteRestaurant, show } = useFavoriteRestaurants();

  if (!show) return null;
  return (
    <div className="modal">
      <h3>Are you sure you want to delete this restaurant?</h3>
      <button onClick={() => removeFavoriteRestaurant(true)}>Yes</button>
      <button onClick={() => removeFavoriteRestaurant(false)}>No</button>
    </div>
  );
};
