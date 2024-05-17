import React, { useEffect } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css';

// import required modules
import { Pagination,Navigation } from 'swiper/modules';
import CarauselLeftBtn from './CarauselLeftBtn';
import CarauselRightBtn from './CarauselRightBtn';
const data = [0,1,2,3,4,5,6]
const Controls = ({data}) =>{
    const swiper = useSwiper();
    useEffect(() =>{
        swiper.slideTo(0)
    },[data])
}
const getDateValue = (n) =>{
    if(n === 0){
        return 'Today'
    }

    if(n===1){
        return 'Tommorrow'
    }
    let date = new Date();
    console.log(date)
    let day = date.getDate()+n
    console.log(day)
    return day;
}
// getDateValue(3)
const SlotCarausal = () => {
  return (
<>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        initialSlide={0}
        modules={[Navigation]}
        className="mySwiper"
      >
        <Controls data = {data} />
        <CarauselLeftBtn />
        <CarauselRightBtn />
        {data.map(d => <SwiperSlide>{getDateValue(d)}</SwiperSlide>)}
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  )
}

export default SlotCarausal
