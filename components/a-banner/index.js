import ProductsCarousel from "../carrousel";

const Banner = () => {
  return (
    <div className="banner">
      <ProductsCarousel />
      <style jsx>
        {`
          .banner {
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #ebebeb;
          }
        `}
      </style>
    </div>
  );
};

export default Banner;
