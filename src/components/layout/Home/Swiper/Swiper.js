import "swiper/css";
import "./swiper.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper";
import ImageFive from "../../../../assets/images/TV.png";
import ImageFour from "../../../../assets/images/13ACL6.png";
import ImageOne from "../../../../assets/images/kt-690-300-max.png";
import ImageSeven from "../../../../assets/images/A73.png";
import ImageSix from "../../../../assets/images/note_11_pro_5g.png";
import ImageThree from "../../../../assets/images/TAI_NGHE_LG.png";
import ImageTwo from "../../../../assets/images/ip13-xl-sh-690-300-max.png";

function SwiperFunction() {
  const swiperArray = [
    {
      image: ImageOne,
      title: "MỪNG KHAI TRƯƠNG <br /> Giảm sốc 65%",
      id: 0,
    },
    {
      image: ImageTwo,
      title: "IPHONE 13 XANH LÁ <br /> Chính hãng sớm nhất",
      id: 1,
    },
    {
      image: ImageThree,
      title: "TAI NGHE LG <br /> Giá siêu hấp dẫn",
      id: 2,
    },
    {
      image: ImageFour,
      title: "LENOVO YOGA 6 <br /> Giá siêu hấp dẫn",
      id: 3,
    },
    {
      image: ImageFive,
      title: "TV SAMSUNG <br /> Gỉảm giá đến 40%",
      id: 4,
    },
    {
      image: ImageSix,
      title: "REDMI NOTE 11 PRO+ <br /> Ưu đãi độc quyền",
      id: 5,
    },
    {
      image: ImageSeven,
      title: "GALAXY A73 <br /> Ưu đãi cực lớn",
      id: 6,
    },
  ];

  return (
    <div className="swiper">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        className="main-thumbnail swipper-container"
      >
        <SwiperSlide>
          <img
            src={swiperArray[0].image}
            alt={swiperArray[0].title}
            width="100%"
            height="100%"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={swiperArray[1].image}
            alt={swiperArray[1].title}
            width="100%"
            height="100%"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={swiperArray[2].image}
            alt={swiperArray[2].title}
            width="100%"
            height="100%"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={swiperArray[3].image}
            alt={swiperArray[3].title}
            width="100%"
            height="100%"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={swiperArray[4].image}
            alt={swiperArray[4].title}
            width="100%"
            height="100%"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={swiperArray[5].image}
            alt={swiperArray[5].title}
            width="100%"
            height="100%"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={swiperArray[6].image}
            alt={swiperArray[6].title}
            width="100%"
            height="100%"
          />
        </SwiperSlide>
      </Swiper>
      <div>
        <Swiper spaceBetween={0} slidesPerView={5} className="gallery-thumbs">
          <SwiperSlide className="active">
            <div
              dangerouslySetInnerHTML={{ __html: swiperArray[0].title }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              dangerouslySetInnerHTML={{ __html: swiperArray[1].title }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              dangerouslySetInnerHTML={{ __html: swiperArray[2].title }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              dangerouslySetInnerHTML={{ __html: swiperArray[3].title }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              dangerouslySetInnerHTML={{ __html: swiperArray[4].title }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              dangerouslySetInnerHTML={{ __html: swiperArray[5].title }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              dangerouslySetInnerHTML={{ __html: swiperArray[6].title }}
            ></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default SwiperFunction;
