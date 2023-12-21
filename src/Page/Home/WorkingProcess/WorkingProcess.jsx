import React from 'react';
import Container from '../../Shared/Container/Container';
import { FaCalendarCheck, FaMoneyBillWave, FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdEditDocument } from "react-icons/md";
const WorkingProcess = () => {
    return (
        <div>
            <div className='py-20 bg-gradient-to-r from-[#e0f3f544] to-[#cae3e7]'>
                <Container>
                    <div className='text-center'>
                        <h1 className=' border-black text-[#3b8d5d] font-serif font-bold sm:text-2xl text-lg '>| How We WorK</h1>
                        <h1 className=' border-black py-2 font-bold text-xl  sm:text-4xl '>Our Working Process</h1>
                    </div>
                    <div>
                        <section className=" dark:bg-gray-800 dark:text-gray-100">
                            <div className="container mx-auto">
                                <div className="grid gap-6 my-16 lg:grid-cols-4">
                                    <div className="border-2 border-cyan-900 text-center p-6 space-y-4 rounded-md bg-[#caf0f7]">
                                      <div className='flex justify-center'>
                                        <FaSearch className='text-5xl rounded-full p-3 text-white bg-[#3e7950]'/>
                                      </div>
                                       <h1 className='sm:text-2xl text-lg font-bold hover:text-cyan-600 duration-300'>Select Services</h1>
                                       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quis quibusdam ab quae.</p>
                                       <Link><h1 className='text-lg font-semibold pt-2'>Explore More</h1></Link>
                                    </div>
                                    <div className="border-2 border-cyan-900 text-center p-6 space-y-4 rounded-md bg-[#d1dcf1]">
                                      <div className='flex justify-center'>
                                        <FaCalendarCheck className='text-5xl rounded-full p-2 text-white bg-[#00A6FB]'/>
                                      </div>
                                       <h1 className='sm:text-2xl text-lg font-bold hover:text-cyan-600 duration-300'>Book An Appointment</h1>
                                       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quis quibusdam ab quae.</p>
                                       <Link><h1 className='text-lg font-semibold pt-2'>Explore More</h1></Link>
                                    </div>
                                    <div className="border-2 border-cyan-900 text-center p-6 space-y-4 rounded-md bg-[#caf0f7]">
                                      <div className='flex justify-center'>
                                        <FaMoneyBillWave className='text-5xl rounded-full p-3 text-white bg-[#d63384]'/>
                                      </div>
                                       <h1 className='sm:text-2xl text-lg font-bold hover:text-cyan-600 duration-300'>Complete Payment</h1>
                                       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quis quibusdam ab quae.</p>
                                       <Link><h1 className='text-lg font-semibold pt-2'>Explore More</h1></Link>
                                    </div>
                                    <div className="border-2 border-cyan-900 text-center p-6 space-y-4 rounded-md bg-[#d1dcf1]">
                                      <div className='flex justify-center'>
                                        <MdEditDocument className='text-5xl rounded-full p-3 text-white bg-[#ffc107]'/>
                                      </div>
                                       <h1 className='sm:text-2xl text-lg font-bold hover:text-cyan-600 duration-300'>Get Reports</h1>
                                       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quis quibusdam ab quae.</p>
                                       <Link><h1 className='text-lg font-semibold pt-2'>Explore More</h1></Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default WorkingProcess;