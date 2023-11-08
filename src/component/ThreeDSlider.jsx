import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { useMovieContext } from '../context/allData';

const ThreeDSlider = () => {
    const { category } = useMovieContext()
    console.log(category)
    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            // centeredSlides={false}
            slidesPerView={'3'}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
        >

            {
                category.map(cat => <SwiperSlide key={cat._id}>
                    <h2 className='text-xl text-center badge badge-success'>{cat.name}</h2>
                    <img className=' rounded-lg' src={cat.imageUrl} />

                </SwiperSlide>)
            }

            {/*  */}

            {/* <SwiperSlide>
                <img className='' src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </SwiperSlide> */}
        </Swiper>
    )
}

export default ThreeDSlider