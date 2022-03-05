import React from "react";
import Category from "../CategoryPage/Category";
import { Routes, Route } from "react-router";
import CatsImage from "../CatsPage/CatsPage";
import "./mainPage.scss";

const MainPage = () => {
  return (
    <div className="page">
      <div className="page__sidebar">
        <Category />
      </div>
      <div className="page__content">
        <Routes>
          <Route path="/" element={<CatsImage />} />
          <Route path="/cats/:categories/:id" element={<CatsImage />} />
        </Routes>
      </div>
    </div>
  );
};
export default MainPage;
