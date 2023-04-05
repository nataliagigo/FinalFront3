import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Paths } from "./utils/Paths";

const Card = ({ name, username, id }) => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFav = favs.find((fav) => fav.id === id) ? true : false;
    setIsFav(isFav);
  }, []);

  const handleFavs = () => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    const newFavs = favs.filter((fav) => fav.id !== id);
    setIsFav(!isFav);

    if (isFav) {
      localStorage.setItem("favorites", JSON.stringify(newFavs));
      return;
    }

    localStorage.setItem(
      "favorites",
      JSON.stringify([...favs, { name, username, id }])
    );
  };

  return (
    <div className="card">
      <Link to={`${Paths.dentist.path}/${id}`}>
        <img src="./images/doctora.jpg" alt={username} />
        <h4>{name}</h4>
        <p>{username}</p>
      </Link>
      <button onClick={handleFavs} className="favButton">
        <span class={`material-symbols-outlined ${isFav ? "fav" : ""}`}>
          star
        </span>
        {`${!isFav ? "Add" : "Remove"}`}
      </button>
    </div>
  );
};

export default Card;
