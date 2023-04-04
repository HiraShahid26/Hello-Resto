import { createContext, useContext, useEffect, useRef, useState } from "react";
import { RestaurantType } from "../models/Restaurant";

type FavouriteRestaurantContextProps = {
  children: React.ReactNode;
};

type FavouriteRestaurantContext = {
  addFavoriteRestaurant: (restaurant: RestaurantType) => void;
  removeFavoriteRestaurant: (showModal: boolean) => void;
  favoriteRestaurantsIds: number[];
  show: boolean;
  handleModal: (id: number) => void;
};

export const FavoriteRestaurantsContext = createContext(
  {} as FavouriteRestaurantContext
);

export const useFavoriteRestaurants = () =>
  useContext(FavoriteRestaurantsContext);

const initFavId: number[] = [];
const getInitialState = () => {
  const favoriteRestaurantId = localStorage.getItem("favIds");
  return favoriteRestaurantId ? JSON.parse(favoriteRestaurantId) : initFavId;
};

export const FavoriteRestaurantsProvider = ({
  children,
}: FavouriteRestaurantContextProps) => {
  const [favoriteRestaurantsIds, setFavoriteRestaurantsIds] =
    useState<number[]>(getInitialState);
  const [show, setShow] = useState(false);

  let ID = useRef(0);

  const addFavoriteRestaurant = (restaurant: RestaurantType) => {
    const oldFavourites = [...favoriteRestaurantsIds];
    const newFavourites = oldFavourites.concat(restaurant.id);
    setFavoriteRestaurantsIds(newFavourites);
  };

  const removeFavoriteRestaurant = (showModal: boolean) => {
    if (showModal) {
      const oldFavourites = [...favoriteRestaurantsIds];
      const newFavourites = oldFavourites.filter((r) => r !== ID.current);
      setFavoriteRestaurantsIds(newFavourites);
      setShow(false);
    } else {
      setShow(false);
    }
  };

  const handleModal = (id: number) => {
    setShow(true);
    ID.current = id;
  };

  useEffect(() => {
    localStorage.setItem("favIds", JSON.stringify(favoriteRestaurantsIds));
  }, [favoriteRestaurantsIds]);

  const value = {
    addFavoriteRestaurant,
    removeFavoriteRestaurant,
    favoriteRestaurantsIds,
    show,
    handleModal,
  };

  return (
    <FavoriteRestaurantsContext.Provider value={value}>
      {children}
    </FavoriteRestaurantsContext.Provider>
  );
};
