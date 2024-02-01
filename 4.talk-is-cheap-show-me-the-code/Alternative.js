import React from "react";
import ReactDOM from "react-dom";
import myImage from "./img/CraveCraft.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={myImage} alt="LOGO" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Support</li>
          <li>Cart</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  );
};

const resObj = {
  info: {
    id: "312149",
    name: "Wow! Momo",
    cloudinaryImageId: "5a148e63e9c54942e37627da1aa156be",
    locality: "Banjara Hills",
    areaName: "Banjara Hills",
    costForTwo: "₹300 for two",
    cuisines: [
      "Tibetan",
      "Healthy Food",
      "Asian",
      "Chinese",
      "Snacks",
      "Continental",
      "Desserts",
      "Beverages",
    ],
    avgRating: 4.1,
    parentId: "1776",
    avgRatingString: "4.1",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 44,
      lastMileTravel: 6.4,
      serviceability: "SERVICEABLE",
      slaString: "40-45 mins",
      lastMileTravelString: "6.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-02-02 01:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹99",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
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
  analytics: {
    context: "seo-data-555f1aab-793d-43b0-9dfc-196c22c2cb8e",
  },
  cta: {
    link: "https://www.swiggy.com/restaurants/wow-momo-banjara-hills-hyderabad-312149",
    text: "RESTAURANT_MENU",
    type: "WEBLINK",
  },
  widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
};

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.link} alt={props.alt} />
      <h4>{props.resname}</h4>
      <p>{props.at}</p>
      {console.log(props.reach)}
      <ul>
        <li>{props.rating}</li>
        <li>{props.reach}</li>
        <li className="price">Price: ${props.price}.00</li>
      </ul>
      <button onClick={() => alert("Item added to cart!")}>Add To Cart</button>
    </div>
  );
};

const ItemList = (props) => {
  return (
    <div className="item-list">
      {props.items.map((item) => (
        <Card
          link={item.link}
          alt={item.alt}
          resname={item.resname}
          at={item.at}
          rating={item.rating}
          reach={item.reach}
          price={item.price}
          key={item.id}
        />
      ))}
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search"> SEARCH </div>
      <div className="res-card">
        <ItemList
          items={[
            {
              link: require(`./img/Biryani.jpg`),
              alt: "BIRYANI",
              resname: "BhaiPoint",
              at: "Halal", // This 'at' is not defined in the ItemList component
              rating: 4.3,
              reach: "20min",
              price: 100,
              id: 1,
            },
            {
              link: require(`./img/Biryani.jpg`),
              alt: "BIRYANI",
              resname: "BhaiPoint",
              at: "Halal", // This 'at' is not defined in the ItemList component
              rating: 4.3,
              reach: "20min",
              price: 100,
              id: 1,
            },
            {
              link: require(`./img/Biryani.jpg`),
              alt: "BIRYANI",
              resname: "BhaiPoint",
              at: "Halal", // This 'at' is not defined in the ItemList component
              rating: 4.3,
              reach: "20min",
              price: 100,
              id: 1,
            },
            {
              link: require(`./img/Biryani.jpg`),
              alt: "BIRYANI",
              resname: "BhaiPoint",
              at: "Halal", // This 'at' is not defined in the ItemList component
              rating: 4.3,
              reach: "20min",
              price: 100,
              id: 1,
            },
            {
              link: require(`./img/Biryani.jpg`),
              alt: "BIRYANI",
              resname: "BhaiPoint",
              at: "Halal", // This 'at' is not defined in the ItemList component
              rating: 4.3,
              reach: "20min",
              price: 100,
              id: 1,
            },
            {
              link: require(`./img/Biryani.jpg`),
              alt: "BIRYANI",
              resname: "BhaiPoint",
              at: "Halal", // This 'at' is not defined in the ItemList component
              rating: 4.3,
              reach: "20min",
              price: 100,
              id: 1,
            },
          ]}
        />
      </div>
    </div>
  );
};

const Footer = () => {
  return <div className="footer"></div>;
};

const App = () => {
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* body */}
      <Body />
      {/* footer */}
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
