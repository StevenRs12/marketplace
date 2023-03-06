import { useState, useEffect } from "react";

import { usePostAddItemToCar } from "../../hooks/usePostAddItemToCar";

import "./AddToCar.scss";

export const AddToCar = ({ options, updateHeaderInfo }) => {
  const className = "add-to-car";
  const { storages, colors } = options;
  const [storage, setStorage] = useState(storages[0].code);
  const [color, setColor] = useState(colors[0].code);
  const [data, isLoading, error, post] = usePostAddItemToCar();

  const storageOptions = storages?.map((storageOption) => (
    <option value={storageOption.code}>{storageOption.name}</option>
  ));

  const colorOptions = colors?.map((colorOption) => (
    <option value={colorOption.code}>{colorOption.name}</option>
  ));

  const handleClick = () => {
    post({
      storageCode: storage,
      colorCode: color,
      id: 1,
    });
  };

  useEffect(() => {
    updateHeaderInfo(data);
  }, [data]);

  return (
    <div className={`${className}__container`}>
      <div className={`${className}__selector`}>
        <span>Almacenamiento: </span>
        <select
          name="select-storage"
          value={storage}
          onChange={(event) => setStorage(event.target.value)}
        >
          {storageOptions}
        </select>
      </div>
      <div className={`${className}__selector`}>
        <span>Colores: </span>
        <select
          name="select-colors"
          value={color}
          onChange={(event) => setColor(event.target.value)}
        >
          {colorOptions}
        </select>
      </div>
      <button onClick={handleClick} className>
        {isLoading ? "Cargando..." : "Agregar al carrito"}
      </button>
    </div>
  );
};
