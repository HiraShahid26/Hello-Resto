import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <Link to={"/"}>
        <h1> Hello Resto</h1>
      </Link>
      <Link to={"/favourite"}>
        <button className="btn">Mes Favoris</button>
      </Link>
    </div>
  );
};
