import { useState } from "react";
import Card from "./Card";
import resList from "./utils/mockdata";

const Body = () => {
  const [res,setRes]=useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filtered=resList.filter((res) => res.info.avgRating > 4.4);
            setRes(filtered)
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
