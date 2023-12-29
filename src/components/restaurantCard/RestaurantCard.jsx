import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div
      className="bg-gray-100 m-4 p-4 w-[250px] h-[500px] border transition hover:bg-gray-200 hover:border-black hover:w-[300px] hover:h-550px rounded-lg"
      // style={{ backgroundColor: "#f0f0f0" }}
    >
      <img
        className="rounded-lg h-[50%] w-[100%]"
        src={`${CDN_URL}${resData.info.cloudinaryImageId}`}
      />
      <h3 className="font-bold py-4 text-lg">{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating}</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
