import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";
import classes from "./Favorites.module.css";

function FavoritesPage () {

    const favoriteCtx = useContext (FavoritesContext);

    if (favoriteCtx.totalFavorites == 0) {
        return (
            <div className={classes.nh}>
                <h1>My Favorites</h1>
                <p>Nothing here</p>
            </div>
        )
    }

    return (
        <section>
            <h1>My Favorites</h1>
            <MeetupList meetups={favoriteCtx.favorites} />
        </section>
    )
}

export default FavoritesPage;

