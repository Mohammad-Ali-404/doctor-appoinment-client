import React from 'react';
import UseTestimonialHook from '../../../Hooks/UseTestimonialHook';
import Container from '../../Shared/Container/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
const Testimonial = () => {
    const [testimonial] = UseTestimonialHook()
    return (
        <div className='bg-no-repeat w-full h-auto' style={{ backgroundImage: 'url(https://i.ibb.co/4gj7MxS/testimonial-bg.jpg)', backgroundSize:'cover',}}>
            
            <div className=' bg-[#66666654] bg-opacity-60'>
                
                <Container>
                    <div className='text-center pt-10'>
                        <h1 className=' border-black text-[#3b8d5d] font-serif font-bold sm:text-2xl text-lg '>| Testimonials</h1>
                        <h1 className=' border-black font-bold  text-2xl sm:text-4xl '>What Our Client Says</h1>
                         
                    </div>
                    <div>
                
                    <Swiper 
                                slidesPerView={1}
                                spaceBetween={10}
                                pagination={{
                                clickable: true,
                                }}
                                breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                {testimonial.map((review) =>(
                                    
                                    <SwiperSlide key={review.id} >
                                        <div className="py-10 flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
                                            <div className="flex flex-col max-w-lg mx-4 my-6 shadow-lg">
                                                <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-white">
                                                    <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                                                            <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                                            <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                                        </svg>{review.feedback}
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-400">
                                                            <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                                            <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                                        </svg>
                                                    </p>
                                                </div>
                                                <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-slate-300 dark:text-gray-900">
                                                    <img src={review.image} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full" />
                                                    <Rating style={{ maxWidth: 120 }} value={review.rating} readOnly />
                                                    <p className="text-xl font-semibold leadi">{review.name}</p>
                                                    <p className="text-sm uppercase">Customer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                ))}
                        </Swiper>
                    </div>
                </Container>
               
            </div>
        </div>
    );
};

export default Testimonial;