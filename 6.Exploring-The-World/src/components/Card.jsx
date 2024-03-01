import CDN from "./utils/constants";
const Card = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.info;
  return (
    <div className="card">
      <img src={CDN + cloudinaryImageId} alt="FOOD" />
      <h4>{name}</h4>
      <p>{cuisines ? cuisines.join(", ") : " "}</p>
      <ul>
        <li>{avgRating}</li>
        <li>{deliveryTime + "min"}</li>
        <li className="price">Price: {costForTwo}</li>
      </ul>
      <button onClick={() => alert("Item added to cart!")}>Add To Cart</button>
    </div>
  );
};
export default Card;
