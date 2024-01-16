import React from "react";
import ReactDOM from "react-dom";

const Header = () => {
  return (
    <div>
      <h1>Working</h1>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* body */}
      {/* footer */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
