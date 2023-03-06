import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Header } from "../shared/components/Header/Header";
import { HomePage } from "../pages/HomePage/HomePage";
import { ProductDetail } from "../pages/ProductDetail/ProductDetail";

export const AppRouter = () => {
  const [carValue, setCarValue] = useState(localStorage.getItem("carValue"));

  const updateHeaderInfo = (val) => {
    setCarValue(localStorage.getItem("carValue"));
  };
  return (
    <>
      <Header carValue={carValue} />
      <Routes>
        <Route path="home" element={<HomePage />}></Route>
        <Route
          path="home/:id"
          element={<ProductDetail updateHeaderInfo={updateHeaderInfo} />}
        ></Route>
        <Route path="/*" element={<Navigate to="/home" />}></Route>
      </Routes>
    </>
  );
};
