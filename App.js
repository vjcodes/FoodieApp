import React from "react";
import ReactDOM from "react-dom/client";
import Foodie from "./assets/Foodie.png";
import { restaurants } from "./dummyData/restaurants";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={Foodie} />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

const resObj = {
  info: {
    id: "56478",
    name: "Om Sweets & Snacks",
    cloudinaryImageId: "bztjesdzq7j9fmji3zv6",
    locality: "Arjun Nagar",
    areaName: "Sector 8",
    costForTwo: "₹400 for two",
    cuisines: [
      "Sweets",
      "North Indian",
      "South Indian",
      "Chinese",
      "Snacks",
      "Desserts",
      "Bakery",
    ],
    avgRating: 4.4,
    veg: true,
    parentId: "676",
    avgRatingString: "4.4",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 17,
      lastMileTravel: 0.7,
      serviceability: "SERVICEABLE",
      slaString: "17 mins",
      lastMileTravelString: "0.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-23 22:30:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
      },
      freedelMessage: "FREE DELIVERY",
      badgeType: "BADGE_TYPE_ONE_LITE",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  analytics: {},
  cta: {
    link: "https://www.swiggy.com/restaurants/om-sweets-and-snacks-arjun-nagar-sector-8-gurgaon-56478",
    type: "WEBLINK",
  },
};

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.info.cloudinaryImageId}`}
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating}</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.sla.slaString}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
