import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
//   const err = useRouteError();
  return (
    <div className="error-container">
      <h1 className="error-heading">Error</h1>
      <p className="error-message">Oops! Something went wrong.</p>
    </div>
  );
};

export default Error;
