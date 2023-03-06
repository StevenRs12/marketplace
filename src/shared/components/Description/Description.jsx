import "./Description.scss";

export const Description = ({ product }) => {
  const className = "description";
  const {
    brand,
    model,
    price,
    cpu,
    ram,
    os,
    displayResolution,
    battery,
    primaryCamera,
    secondaryCmera,
    dimentions,
    weight,
  } = product;
  return (
    <>
      <div className={`${className}__container`}>
        <h1>
          {model} - {brand}
        </h1>
        <span className={"txt-label"}>${price}</span>
        <div className={"sub-container"}>
          <span>Lo que tienes que saber de este producto</span>
          <ul>
            <li className="txt"> CPU - {cpu || "No disponible"}</li>
            <li className="txt"> Memoria RAM - {ram || "No disponible"}</li>
            <li className="txt">
              Sistema operativo - {os || "No disponible"}
            </li>
            <li className="txt">
              Resolución de pantalla - {displayResolution || "No disponible"}
            </li>
            <li className="txt">
              Capacidad de batería - {battery || "No disponible"}
            </li>
            <li className="txt">
              Cámara principal - {primaryCamera || "No disponible"}
            </li>
            <li className="txt">
              Cámara secundaria - {secondaryCmera || "No disponible"}
            </li>
            <li className="txt"> Tamaño - {dimentions || "No disponible"}</li>
            <li className="txt"> Peso - {weight || "No disponible"} </li>
          </ul>
        </div>
      </div>
    </>
  );
};
