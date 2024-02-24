import Card from "./Card";
import resList from "./utils/mockdata";

const Body = () => {
  return (
    <div className="body">
      <div className="search"> SEARCH </div>
      <div className="res-cards">
        {resList.map((res) => (
          <Card key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};
export default Body;
