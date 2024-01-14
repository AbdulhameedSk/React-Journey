import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "head" }, "HEY");

//aaj tera bhai jsx sikhega
const jsxhead = <h1 id="head">HEY</h1>;

const HeadingComponent = () => {
  return <h1>We are learning funcitonal react components</h1>;
};

const CompInComp = () => {
  return <h1>We are using component inside component</h1>;
};
//component-composition is nested components
const HeadingComponent1 = () => (
  <>
    {jsxhead}
    <CompInComp />
    <h1>We are learning funcitonal react components</h1>
  </>
);
//HeadingComponent and HeadingComponent1 are same

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent1 />);
