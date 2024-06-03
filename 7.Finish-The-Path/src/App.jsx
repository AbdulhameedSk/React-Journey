import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Home from "./pages/Home";
import ContactUs from "./components/ContactUs";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Error from "./components/Error";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="*" element={<Error />} /> {/* This line catches all unmatched routes */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;