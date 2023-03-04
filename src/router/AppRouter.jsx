import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { Header } from "../shared/components/Header/Header";
import { ProductDetail } from "../pages/ProductDetail/ProductDetail";

export const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="home" element={<HomePage />}></Route>
        <Route path="home/:id" element={<ProductDetail />}></Route>
        <Route path="/*" element={<Navigate to="/home" />}></Route>
      </Routes>
    </>
  );
};
