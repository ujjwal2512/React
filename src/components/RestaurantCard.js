import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData?.info;
    return (
      <div className="m-4 p-4 w-[240px] h-[400px] bg-orange-50 rounded-lg hover:bg-orange-300">
        <img
          className="w-[230px] h-[170px] rounded-lg"
          alt="res-logo"
          src={
            CDN_URL +
            resData.info.cloudinaryImageId
          }
        />
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h4 className="text-xs py-1">{cuisines.join(", ")}</h4>
        <h4 className="text-sm font-bold py-1">{avgRating} stars</h4>
        <h4 className="text-sm font-bold">{sla.deliveryTime} minutes</h4>
      </div>
    );
  };

  export const withPromotedLabel=(RestaurantCard)=>{
    return (props)=>{
      return (
        <div>
          <label className="absolute bg-orange-500 border-s-black  text-black m-2 p-2 rounded-lg font-bold">Promoted</label>
        <RestaurantCard {...props} />
        </div> 
      );
    };
  };

  export default RestaurantCard;