import React from 'react';
import contact from '../../../../public/contact-animation.json'
import Lottie from 'lottie-react';
import Container from '../../Shared/Container/Container';
import { FaCheckCircle } from 'react-icons/fa';
import { IoMdCall } from "react-icons/io";
import { BiSolidMessageDetail } from "react-icons/bi";

const Contact = () => {
    return (
        <div className='pt-10'>
            <Container>
                <section className=" py-10 dark:bg-gray-800 dark:text-gray-50">
                    <div className="grid grid-cols-1  gap-10 mx-auto md:grid-cols-2">
                        <div className="mt-10 md:py-0 md:px-6">
                            <div className=''>
                                <h1 className=' border-black text-[#3b8d5d] font-serif font-bold sm:text-2xl text-lg '>| Emergency Helpline</h1>
                                <h1 className=' border-black font-bold  text-2xl sm:text-4xl '>Need Emergency Contact</h1>
                                <p className='py-4'>User Welcome to OneCare E-Hospital, your gateway to virtual healthcare excellence. For any inquiries, support, or appointments, connect with us through the following channels</p>
                                <div>
                                    <h1 className='flex py-4 place-items-center text-lg font-semibold text-gray-700'><FaCheckCircle className='text-[#5d98db] mr-1 text-2xl'/>24/7 Contact Our Hospital.</h1>
                                    <h1 className='flex  place-items-center text-lg font-semibold text-gray-700'><FaCheckCircle className='text-[#5d98db] mr-1 text-2xl'/>24 Hours Open Our Hospital.</h1>
                                    <h1 className='flex py-4 place-items-center text-lg font-semibold text-gray-700'><FaCheckCircle className='text-[#5d98db] mr-1 text-2xl'/>Emergency Contact Our Phone Number.</h1>
                                </div>
                                <div className='grid sm:grid-cols-2 grid-cols-1 gap-10 py-10'>
                                    <div className="flex p-4 space-x-4 rounded-lg w-80 md:space-x-6 bg-[#bae8ee] hover:bg-green-200 duration-700 dark:text-gray-100">
                                        <div className="flex justify-center align-middle rounded-lg py-4 dark:bg-violet-400">
                                            <IoMdCall className='text-4xl'/>
                                        </div>
                                        <div className="flex flex-col justify-center align-middle">
                                            <p className="text-2xl font-semibold leadi">Phone Number</p>
                                            <p className="capitalize text-lg">+880 1792 344369</p>
                                        </div>
                                    </div>
                                    <div className="flex p-4 space-x-4 rounded-lg w-80 md:space-x-6 bg-[#bae8ee] hover:bg-green-200 duration-700  dark:text-gray-100">
                                        <div className="flex justify-center align-middle rounded-lg py-4 dark:bg-violet-400">
                                            <BiSolidMessageDetail className='text-4xl'/>
                                        </div>
                                        <div className="flex flex-col justify-center align-middle">
                                            <p className="text-2xl font-semibold leadi">Quick Your Email</p>
                                            <p className="">onecaresupport@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Lottie className='-mt-8' style={{width:'600px'}} animationData={contact}/>
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default Contact;