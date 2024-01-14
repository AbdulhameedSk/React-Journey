//Lets create nested div elements
//To create two elements as siblings we have to give them in array
//Since it looks ugly we have jsx
const p = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "We did it"),
    React.createElement("h1", {}, "We did it again"),
  ])
);

const hello = React.createElement(
  "h1",
  { id: "head" },
  "hello world from Reactjs!"
);
console.log(hello);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(hello);

const nroot = ReactDOM.createRoot(document.getElementById("nroot"));
nroot.render(p);
