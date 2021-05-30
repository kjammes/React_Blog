import { useContext } from "react";

import classes from "./MeetupItem.module.css";
import Card from "../UI/Card";
import FavouritesContext from "../../store/favourites-context";

function MeetupItem(props) {
  const favouritesCtx = useContext(FavouritesContext);

  const itemIsFavourite = favouritesCtx.itemIsFavourite(props.id);

  function toggleFavouriteStatusHandler() {
    if (itemIsFavourite) {
      favouritesCtx.removeFavourite(props.id);
    } else {
      favouritesCtx.addFavourite({
        ...props,
      });
    }
  }

  return (
    <Card>
      <li className={classes.item}>
        <div>
          <img src={props.image} alt={props.title} className={classes.image} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouriteStatusHandler}>
            {itemIsFavourite ? "Remove from favourites" : "To Favourites"}
          </button>
        </div>
      </li>
    </Card>
  );
}

export default MeetupItem;
