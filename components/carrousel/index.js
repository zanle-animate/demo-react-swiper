// import Swiper core and required components
import { Swiper, SwiperSlide } from "swiper/react";
import { Cards } from "../../data/images";

const data = Cards;

const ProductsCarousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="card">
              <img src={item.image} alt="" />
              <div className="text">
                <h1>{item.title}</h1>
                <h4>{item.alt}</h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>
        {`
          .card {
            width: 600px;
            height: 600px;
            border-radius: 1em;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
            background: white;
            border: 2px solid grey;
            cursor: pointer;
          }
          img {
            width: 100%;
            height: 400px;
            object-fit: cover;
          }
          .text {
            width: 100%;
            height: 200px;
            color: #1c1c1c;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
          }
        `}
      </style>
    </>
  );
};

export default ProductsCarousel;
