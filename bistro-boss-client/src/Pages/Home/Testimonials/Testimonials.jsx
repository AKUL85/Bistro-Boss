import React, { use, useEffect, useState } from 'react';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
function Testimonials(props) {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('/reviews.json')
            .then(res => res.json())
            .then(data => {

                setReviews(data);
            })
    }, [])

    return (
        <section className='my-20'>
            <SectionTitle
                heading={"testimonials"}
                subheading={"What Our Client Say "}></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => {
                        return (
                            <SwiperSlide key={review._id}>
                                <div className='mx-24 my-20 flex flex-col items-center'>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                    <p>{review.details}</p>
                                    <h3 className='text-3xl text-orange-400'>{review.name}</h3>
                                </div>
                            </SwiperSlide>
                        );
                    })

                }
                
            </Swiper>
        </section>
    );
}

export default Testimonials;