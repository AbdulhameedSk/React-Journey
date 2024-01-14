import React from "react";
import ReactDOM from "react-dom/client";
const p = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "h1 tag"),
    React.createElement("h1", {}, "h1 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "h1 tag again"),
    React.createElement("h1", {}, "h1 tag again"),
  ]),
]);

const head = ReactDOM.createRoot(document.getElementById("root"));
head.render(p);
