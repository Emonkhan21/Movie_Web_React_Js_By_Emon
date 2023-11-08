import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import slider_1 from "../assets/slider_1.jpg"
import slider_2 from "../assets/slider_2.jpg"
import slider_3 from "../assets/slider_3.jpg"
import slider_4 from "../assets/slider_4.jpg"
import slider_5 from "../assets/slider_5.jpg"
// Import Swiper styles
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import 'swiper/css';
const MovieSlider = () => {
 
    return (
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> 
          <img className='w-full h-[540px]' src={slider_1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-[540px]'  src={slider_2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-[540px]'  src={slider_3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-[540px]'  src={slider_4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-[540px]' src={slider_5} alt="" />
         </SwiperSlide>
      
      </Swiper>
    )
}

export default MovieSlider