import { useEffect, useState } from "react";
import Card from "./Card";
import resList from "./utils/mockdata";

const Body = () => {
  const [res, setRes] = useState(resList);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = resList.filter((res) => res.info.avgRating > 4.4);
            setRes(filtered);
          }}
        >
          Top Rated Restaurants
        </button>{" "}
      </div>
      <div className="res-cards">
        {res.map((rest) => (
          <Card key={rest.info.id} resData={rest} />
        ))}
      </div>
    </div>
  );
};
export default Body;
