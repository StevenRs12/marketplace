import "./Image.scss";

export const Image = ({ url, alt }) => {
  const className = "image";

  return (
    <div className={`${className}__container`}>
      <img src={url} alt={alt} />
    </div>
  );
};
