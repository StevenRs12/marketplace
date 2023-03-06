import { useNavigate } from "react-router-dom";
import mainLogo from "../../assets/logo.png";
import car from "../../assets/car.png";
import { useState, useEffect } from "react";

import "./Header.scss";

export const Header = ({carValue}) => {
  const className = "header";
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/home");
  };

  return (
    <>
      <div className={`${className}__container`} onClick={goToHome}>
        <img src={mainLogo} className="img-logo" />
        <label className="title">Marketplacer</label>
        <img src={car} className="img-logo" />
        <label className="value-on-car">{carValue}</label>
      </div>
    </>
  );
};
