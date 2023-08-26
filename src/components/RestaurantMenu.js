import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestrauntMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }
  //console.log(resInfo?.cards[0]?.card?.card?.info);

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { carousel } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(carousel);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {carousel.map((item) => (
          <li key={item.dish.info.id}>
            {item.dish.info.name} - Rs.{" "}
            {item.dish.info.defaultPrice / 100 || item.dish.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
