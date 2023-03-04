import { useNavigate } from "react-router-dom";

export const CardProduct = ({ product, isLoading }) => {
  const { imgUrl, model, price, brand, id } = product;
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/home/${id}`);
  };

  return (
    <>
      {!isLoading && (
        <div onClick={goToDetail} className="item">
          <img src={imgUrl} alt="" />
          <label>Modelo: {model}</label>
          <label>Marca: {brand}</label>
          <label>Precio: {price ? `$ ${price}` : "No disponible"}</label>
        </div>
      )}
    </>
  );
};
