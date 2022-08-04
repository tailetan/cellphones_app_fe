/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper';

export default function Slider(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff'
        }}
        loop={true}
        spaceBetween={10}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2">
        {props.images.length > 0 &&
          props.images.map((item, index) => (
            <SwiperSlide key={index}>
              <img width="100%" alt="" src={item} />
            </SwiperSlide>
          ))}
      </Swiper>
      <br />
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={false}
        spaceBetween={10}
        slidesPerView={6}
        freeMode={false}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper">
        {props.images.length > 0 &&
          props.images.map((item, index) => (
            <SwiperSlide key={index}>
              <img width="100%" alt="" src={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
