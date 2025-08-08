
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/slide1.jpg';
import slide2 from '../../../assets/slide2.jpg';
import slide3 from '../../../assets/slide3.jpg';
import slide4 from '../../../assets/slide4.jpg';
import slide5 from '../../../assets/slide5.jpg';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
function Category(props) {
    return (
        <section>
            <SectionTitle subheading={'From 11:00 AM to 10:00 PM'} heading={"Order Online"}></SectionTitle>
            <Swiper
            slidesPerView={'auto'}
            spaceBetween={10}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper mb-24"
        >
            <SwiperSlide className="!w-[250px]"><img src={slide1} alt="" />
            <h3 className='text-4xl uppercase text-white -mt-16 text-center '>salad</h3>
            </SwiperSlide>
            <SwiperSlide className="!w-[250px]"><img src={slide2} alt="" />
               <h3 className='text-4xl uppercase text-white -mt-16 text-center '>pizza</h3>
            </SwiperSlide>
            <SwiperSlide className="!w-[250px]"><img src={slide3} alt="" />
               <h3 className='text-4xl uppercase text-white -mt-16 text-center '>soup</h3>
            </SwiperSlide>
            <SwiperSlide className="!w-[250px]"><img src={slide4} alt="" />
               <h3 className='text-4xl uppercase text-white -mt-16 text-center '>cake</h3>
            </SwiperSlide>
            <SwiperSlide className="!w-[250px]"><img src={slide5} alt="" />
               <h3 className='text-4xl uppercase text-white -mt-16 text-center '>salad</h3>
            </SwiperSlide>
        </Swiper>
        </section>

    );
}

export default Category;