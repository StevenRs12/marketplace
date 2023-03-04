import { useEffect, useState } from "react";
import { getProductById } from "../Helpers/getProductById";

export const useFetchProductById = (id) => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProduct = async (id) => {
    setProduct(await getProductById(id));
    setIsLoading(false);
  };

  useEffect(() => {
    getProduct(id);
  }, []);

  return {
    product,
    isLoading,
  };
};
