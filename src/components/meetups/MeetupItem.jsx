import classes from "./MeetupItem.module.css";
import Card from "../UI/Card";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem (props) {

    const favoriteCtx = useContext (FavoritesContext);
    const isItemFavorite = favoriteCtx.isItemFavorite(props.id);

    function toggleFavoriteStatusHandler () {
        if (isItemFavorite) {
            favoriteCtx.removeFavorite (props.id);
        } else {
            favoriteCtx.addFavorite ({
                id : props.id,
                title : props.title,
                image : props.image,
                address : props.address,
                description : props.description,
            })
        }
    }

    return (
        <Card>
        <li className={classes.item}>
            <div className={classes.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavoriteStatusHandler}>{isItemFavorite ? "Remove from Favorites" : "To Favorites"}</button>
            </div>
        </li>
        </Card>
    )
}

export default MeetupItem;

