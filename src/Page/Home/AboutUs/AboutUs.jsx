import React from 'react';
import Container from '../../Shared/Container/Container';
import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className='py-14'>
            <Container>
                
                <div className='grid sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2  gap-5 '>
                    <div className='sm:px-0 px-6 pt-5'>
                        <div className='flex'>
                            <img className='sm:w-[500px] w-[250px] sm:h-[450px] ' src="https://i.ibb.co/YLvRc0s/doctors.jpg" alt="" />
                            <img className='sm:h-24 h-14 w-14 sm:w-24  sm:mt-16 sm:ml-10 mt-5 text-red-900 animate-ping duration-1000' src="https://i.ibb.co/3RgNqmc/dot-removebg-preview-removebg-preview.png" alt="" />
                        </div>
                        <img className='sm:w-[500px] w-[220px] sm:mx-52 mx-28 sm:-mt-44 -mt-20 sm:h-[450px]' src="https://i.ibb.co/RY64Yfs/surgery-1822458-640.jpg" alt="" />
                    </div>
                    <div className='sm:py-20 py-7 sm:px-2 w-10/12'>
                        <h1 className=' text-[#3b8d5d] font-serif font-bold sm:text-2xl text-lg '>| About us</h1>
                        <p className=' pt-6 font-bold sm:text-4xl text-2xl '>A Sanctuary for Health: OneCare Leading the Way in Medical Excellence.</p>
                        <p className='sm:w-10/12 py-4 text-base font-sans'>Welcome to our state-of-the-art hospital and online appointment center, where your health is our top priority. Our dedicated team of skilled healthcare professionals is committed to providing personalized and compassionate care. Experience seamless and convenient access to medical expertise through our user-friendly online platform, ensuring you can schedule appointments with ease. Whether in-person or virtual, trust us to deliver quality healthcare tailored to your needs, ensuring your well-being is in capable hands.</p>
                        <div className='sm:flex gap-10 pb-10 flex-row '>
                            <div>
                                <h1 className='flex py-4 place-items-center text-lg font-semibold text-gray-700'><FaCheckCircle className='text-[#63a3ec] mr-1 text-2xl'/>On Duty Doctors</h1>
                                <h1 className='flex place-items-center text-lg font-semibold text-gray-700'><FaCheckCircle className='text-[#5d98db] mr-1 text-2xl'/>Oxizen On Wheel</h1>
                                <h1 className='flex pt-4 place-items-center text-lg font-semibold text-gray-700'><FaCheckCircle className='text-[#5d98db] mr-1 text-2xl'/>Ambulance Services </h1>
                            </div>
                            <div>
                            <h1 className='flex py-4 place-items-center text-lg font-semibold text-gray-700'><FaCheckCircle className='text-[#5d98db] mr-1 text-2xl'/>2Pharmacy On Clinic</h1>
                            <h1 className='flex place-items-center text-lg font-semibold text-gray-700'><FaCheckCircle className='text-[#5d98db] mr-1 text-2xl'/>24/7 Medical Emergency</h1>
                            </div>
                        </div>
                        <Link to='/about'><button className="self-center sm:px-8 px-4 sm:py-3 py-1 font-semibold text-white hover:bg-[#3b8d5d]  rounded-full shadow bg-[#5d98db] transition-colors duration-700 hover:border-[#5996dd] border-gray-400 border mr-4">Discover More</button></Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AboutUs;