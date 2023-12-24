import React from 'react';
import Container from '../../Shared/Container/Container';
import UseServiceHook from '../../../Hooks/UseServiceHook';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import { GoArrowRight } from "react-icons/go";
const Service = () => {
    const [service] = UseServiceHook();
    return (
        <div className='bg-no-repeat w-full h-auto' style={{ backgroundImage: 'url(https://i.ibb.co/3dcDjvq/bg.jpg)', backgroundSize:'cover',}}>
            <div className='sm:py-14 py-8'>
                <Container>
                    <div className='text-center'>
                        <h1 className=' border-black text-[#3b8d5d] font-serif font-bold sm:text-2xl text-lg '>| Our Service</h1>
                        <h1 className=' border-black font-bold  text-2xl sm:text-4xl '>Our Madical Service</h1>
                    </div>
                    <div>
                        <div className='sm:pt-20 pt-10'>
                            <Swiper 
                                slidesPerView={1}
                                spaceBetween={10}
                                pagination={{
                                clickable: true,
                                }}
                                breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 4,
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
                                <div >
                                    {service.map((services) => (
                                            <SwiperSlide key={services.id}>
                                                <div className="flex flex-col sm:max-w-lg max-w-md bg-[#fafcfc] dark:text-gray-100">
                                                    <img src={services.image} className="flex-shrink-0 object-cover h-64 sm:h-96 rounded-sm dark:bg-gray-500 aspect-square" alt={services.title} />
                                                    <div className='p-6'>
                                                        <h2 className="sm:text-xl text-lg font-semibold">{services.title}</h2>
                                                        <p className='sm:text-base py-2 text-sm w-10/12'>{services.details.slice(0, 80)}...</p>
                                                        <Link><h1 className='hover:text-[#5996dd] duration-500 sm:text-xl text-base flex items-center'>Read More <GoArrowRight className='mt-1 font-bold sm:ml-2 ml-1'/></h1></Link>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                    ))}
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Service;