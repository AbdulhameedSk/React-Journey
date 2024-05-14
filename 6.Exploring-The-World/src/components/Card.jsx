import CDN from "./utils/constants";
const Card = (props) => {
  const { resData } = props;
  // In this code snippet, const { resData } = props; is using destructuring assignment to extract the resData property from the props object. It's equivalent to const resData = props.resData;, but it's a more concise syntax.

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
