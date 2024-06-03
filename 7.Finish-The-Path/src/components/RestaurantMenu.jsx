import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [card, setCard] = useState([]);

  const fetchMenu = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    const ui =
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setCard(ui);
  };

  const { name, cuisines, avgRating, costForTwo, deliveryTime } =
    card[2]?.info || {};

  console.log(name);

  useEffect(() => {
    fetchMenu();
  }, []);

  // Define inline styles
  const styles = {
    menu: {
      padding: "20px",
      maxWidth: "600px",
      margin: "0 auto",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#fff",
    },
    heading: {
      fontSize: "24px",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: "20px",
    },
    restaurantInfo: {
      fontSize: "18px",
      lineHeight: "1.6",
      marginBottom: "10px",
    },
    cuisineList: {
      listStyleType: "none",
      paddingLeft: "0",
    },
    cuisineItem: {
      backgroundColor: "#f8f8f8",
      padding: "5px 10px",
      borderRadius: "4px",
      display: "inline-block",
      marginRight: "10px",
      marginBottom: "10px",
    },
  };

  // If resInfo is null, show the Shimmer component
    if (card.length ==0) {
      return <Shimmer />;
    }

  return (
    <div style={styles.menu}>
      {/* <h1 style={styles.heading}>Cuisine</h1> */}
      <div style={styles.restaurantInfo}>
        <strong>Name:</strong> {name || "Loading..."}
      </div>
      <div style={styles.restaurantInfo}>
        <strong>Cuisines:</strong>
        <ul style={styles.cuisineList}>
          {cuisines?.map((cuisine, index) => (
            <li key={index} style={styles.cuisineItem}>
              {cuisine}
            </li>
          ))}
        </ul>
      </div>
      <div style={styles.restaurantInfo}>
        <strong>Average Rating:</strong> {avgRating || "N/A"}
      </div>
      <div style={styles.restaurantInfo}>
        <strong>Cost for Two:</strong> {costForTwo || "N/A"}
      </div>
      <div style={styles.restaurantInfo}>
        <strong>Delivery Time:</strong> {deliveryTime || "N/A"} minutes
      </div>
    </div>
  );
};

export default RestaurantMenu;
