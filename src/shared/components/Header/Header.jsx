import { useNavigate } from "react-router-dom";
import mainLogo from "../../assets/logo.png";

import "./Header.scss";

export const Header = () => {
  const className = "header";
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/home");
  };
  return (
    <>
      <div className={`${className}__container`} onClick={goToHome}>
        <img src={mainLogo} className="img-logo" />
        <label className="title">Marketplaceer</label>{" "}
      </div>
    </>
  );
};
