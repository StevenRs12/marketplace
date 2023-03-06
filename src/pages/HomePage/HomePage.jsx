import { useEffect, useState } from "react";

import { Search } from "../../shared/components/Search/Search";
import { CardProduct } from "../../shared/components/CardProduct/CardProduct";
import { Loader } from "../../shared/components/Loader/Loader";
import { useFetchMarketplace } from "../../shared/hooks/useFetchProducts";

import "./HomePage.scss";

export const HomePage = () => {
  const className = "home-page";
  const { products, isLoading } = useFetchMarketplace();
  const [productsFiltered, setProductsFiltered] = useState([]);
  const onFilterProducts = (newSearch) => {
    setProductsFiltered(
      products.filter(
        (product) =>
          product.model.toLowerCase().includes(newSearch.toLowerCase()) ||
          product.brand.toLowerCase().includes(newSearch.toLowerCase())
      )
    );
  };
  useEffect(() => {
    setProductsFiltered(products);
  }, [products]);

  const listItems = productsFiltered.map((product) => (
    <CardProduct
      className="item"
      product={product}
      isLoading={isLoading}
    ></CardProduct>
  ));

  const NoFoundItems = <span>No se encontraron resultados</span>;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={`${className}__container`}>
          <div className="filter-items">
            <Search onNewSearch={(value) => onFilterProducts(value)}></Search>
          </div>
          <div className="items-list">
            {productsFiltered.length ? listItems : NoFoundItems}
          </div>
        </div>
      )}
    </>
  );
};
