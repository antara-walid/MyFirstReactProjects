import { Link } from "react-router-dom";
import { useContext } from "react";

import classes from "./MainNavigation.module.css";
// classes is an object that help us access css classes from MainNavigation.modul.css
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
  const FavoritesCtx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>meetup app </div>
      <ul>
        <li>
          <Link to={"/"}>All Meetups</Link>
        </li>
        <li>
          <Link to={"/new-meetup"}>New-Meetup</Link>
        </li>
        <li>
          <Link to={"/favorites"}>
            Show Favorites <span className={classes.badge}>{FavoritesCtx.totalFavorites}</span>
          </Link>
        </li>
      </ul>
    </header>
  );
}
export default MainNavigation;
