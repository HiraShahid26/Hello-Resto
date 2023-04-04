import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { RestaurantContext } from "./Context/RestaurantContext";
import { Home } from "./pages/Home";
import { restaurants } from "./data";
import { Favourite } from "./pages/Favourite";
import { RestaurantDetails } from "./pages/RestaurantDetails";
import { FavoriteRestaurantsContext, FavoriteRestaurantsProvider } from "./Context/FavContext";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RestaurantContext.Provider value={{ restaurants }}>
        <FavoriteRestaurantsProvider >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="details/:id" element={<RestaurantDetails />} />
          </Routes>
        </FavoriteRestaurantsProvider>
      </RestaurantContext.Provider>
    </BrowserRouter>
  );
}

export default App;
