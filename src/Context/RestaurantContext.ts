import { createContext } from "react";
import { RestaurantType } from "../models/Restaurant";

export type RestaurantContextType = {
  restaurants: RestaurantType[];
};

export const RestaurantContext = createContext<RestaurantContextType>({
  restaurants: [],
});
