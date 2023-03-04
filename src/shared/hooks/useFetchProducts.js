import { useEffect, useState } from "react";
import { getMarketplace } from "../Helpers/getMarketplace";

export const useFetchMarketplace = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const ONE_HOUR_MILI_SECONDS = 3600000;

  const getProducts = async () => {
    const data = localStorage.getItem("productsFiltered");
    const lastUpdate = localStorage.getItem("lastUpdate");
    if (
      JSON.parse(data)?.length > 0 &&
      lastUpdate &&
      ONE_HOUR_MILI_SECONDS > new Date() - new Date(JSON.parse(lastUpdate))
    ) {
      setProducts(JSON.parse(data));
      setIsLoading(false);
    } else {
      const dataServ = await getMarketplace();
      setProducts(dataServ);
      setIsLoading(false);
      localStorage.setItem("productsFiltered", JSON.stringify(dataServ));
      localStorage.setItem("lastUpdate", JSON.stringify(new Date()));
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    products,
    isLoading,
  };
};
