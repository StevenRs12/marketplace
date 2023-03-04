// import "./loader.scss"
import { Loader } from "../../shared/components/Loader/Loader";
import { Image } from "../../shared/components/Image/Image";
import { Description } from "../../shared/components/Description/Description";

import { useParams } from "react-router-dom";
import { useFetchProductById } from "../../shared/hooks/useFetchProductById";

import "./ProductDetail.scss";

export const ProductDetail = () => {
  const className = "product-detail";
  const { id } = useParams();
  const { product, isLoading } = useFetchProductById(id);
  const { imgUrl, model } = product;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={`${className}__container`}>
          <Image url={imgUrl} alt={model}></Image>
          <Description product={product}></Description>
        </div>
      )}
    </>
  );
};
