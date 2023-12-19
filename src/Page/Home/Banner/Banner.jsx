import React from 'react';
import Container from '../../Shared/Container/Container';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import image from '../../../assets/banner/react.png'
const Banner = () => {
    return (
        <div className='bg-gradient-to-r from-[#d7e5f7] to-[#c2f8c244]' >
            <div className='' >
                <Container>
                    <section className="dark:bg-gray-800 dark:text-gray-100" >
                        <div className="container flex flex-col justify-center mx-auto lg:flex-row lg:justify-between" >
                            <div className="flex bg-no-repeat flex-col h-full justify-center text-center pt-40 rounded-sm lg:max-w-md xl:max-w-lg lg:text-left" style={{ backgroundImage: 'url(https://i.ibb.co/vz1mC4P/banner-logo.png)', backgroundPosition:'right bottom', display: 'inline', lineHeight: '1',}}>
                                <img className='w-20 animate-pulse -mb-10 ml-12 sm:-ml-20' src={image} alt="" />
                                <h1 className='sm:border-l-2 border-black text-[#3b8d5d] font-bold text-xl sm:px-2'>Welcome To OneCare</h1>
                                <p className="sm:text-5xl text-3xl font-extrabold sm:py-6 py-4">We Are Committed To Your Health</p>
                                <p className='mt-2 sm:text-lg sm:w-full w-80 mx-auto text-base font-medium sm:mb-12'>It is a established fact that a reader will be distracted by the content of a page when looking at this layout.</p>
                                <div className='sm:flex sm:py-0 py-4 gap-2'>
                                    <Link><button className="self-center sm:px-8 px-4 mr-4 sm:py-3 py-1 font-semibold text-white bg-[#3b8d5d]  rounded-full shadow hover:bg-[#5d98db] transition-colors duration-700 hover:border-[#5996dd] border-gray-400 border sm:mr-4">Meet A Doctor</button></Link>    
                                    <Link><button className="self-center sm:px-8 px-4 sm:py-3 py-1 font-semibold text-white hover:bg-[#3b8d5d]  rounded-full shadow bg-[#5d98db] transition-colors duration-700 hover:border-[#5996dd] border-gray-400 border mr-4">Appoinment</button></Link>    
                                </div>
                                <div className='flex sm:mx-0 mx-auto gap-10 sm:py-10 py-6'>
                                    <div>
                                        <h1 className='sm:text-3xl text-xl font-bold'><CountUp delay={0} end={379} />k+</h1>
                                        <p className='sm:text-lg text-base font-medium'>Recovered Patients</p>
                                    </div>
                                    <div>
                                        <h1  className='sm:text-3xl text-xl font-bold'><CountUp delay={0} end={98} />%</h1>
                                        <p className='sm:text-lg font-medium'>Good Review</p>
                                    </div>
                                    <div>
                                        <h1  className='sm:text-3xl text-xl font-bold'><CountUp delay={0} end={150} />+</h1>
                                        <p className='sm:text-lg font-medium'>Popular Doctors</p>
                                    </div>
                                </div>              
                            </div>
                            <div className="flex items-center justify-center px-4 pt-4 mt-8 lg:mt-0 bg-gradient-to-r border-l-2 border-green-300 from-[#e6f7ee] to-[#c2f8c244] rounded-s-full rounded-se-xl">
                                <img src="https://i.ibb.co/SmPLrF2/hero-img.webp" alt=""  />
                            </div>
                        </div>
                    </section>
                </Container>
            </div>
        </div>
    );
};

export default Banner;