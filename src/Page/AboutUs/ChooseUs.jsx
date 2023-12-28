import React from 'react';
import Container from '../Shared/Container/Container';
import { GrDocumentTest } from "react-icons/gr";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineHealthAndSafety, MdDashboardCustomize} from "react-icons/md";

const ChooseUs = () => {
    
    return (
        <div>
            <Container>
                
            <div className="grid gap-6 my-4 lg:grid-cols-4">
                                            <div className="border-2 border-cyan-900 text-center p-6 space-y-4 rounded-md bg-[#caf0f7]">
                                            <div className='flex justify-center'>
                                                <FaUserDoctor className='text-5xl rounded-full p-3 text-white bg-[#3e7950]'/>
                                            </div>
                                            <h1 className='sm:text-2xl text-lg font-bold hover:text-cyan-600 duration-300'>Qualified Staff of Doctors</h1>
                                            <p>Our team consists of highly qualified and experienced doctors, each with specialized certifications and a commitment to delivering top-notch medical care.</p>
                                            </div>
                                            <div className="border-2 border-cyan-900 text-center p-6 space-y-4 rounded-md bg-[#d1dcf1]">
                                            <div className='flex justify-center'>
                                                <MdOutlineHealthAndSafety className='text-5xl rounded-full p-2 text-white bg-[#00A6FB]'/>
                                            </div>
                                            <h1 className='sm:text-2xl text-lg font-bold hover:text-cyan-600 duration-300'>Instant Telehealth Consultations</h1>
                                            <p>Connect with healthcare professionals instantly through our telehealth services, providing swift and convenient virtual consultations for your medical needs.</p>
                                            </div>
                                            <div className="border-2 border-cyan-900 text-center p-6 space-y-4 rounded-md bg-[#caf0f7]">
                                            <div className='flex justify-center'>
                                                <GrDocumentTest className='text-5xl rounded-full p-3 text-white bg-[#d63384]'/>
                                            </div>
                                            <h1 className='sm:text-2xl text-lg font-bold hover:text-cyan-600 duration-300'>Effortless Lab Test Scheduling</h1>
                                            <p>Simplify the process of scheduling lab tests by utilizing our user-friendly platform, ensuring a smooth and hassle-free experience for your diagnostic needs.</p>
                                            </div>
                                            <div className="border-2 border-cyan-900 text-center p-6 space-y-4 rounded-md bg-[#d1dcf1]">
                                            <div className='flex justify-center'>
                                                <MdDashboardCustomize className='text-5xl rounded-full p-3 text-white bg-[#ffc107]'/>
                                            </div>
                                            <h1 className='sm:text-2xl text-lg font-bold hover:text-cyan-600 duration-300'>Personalized Health Dashboard Access</h1>
                                            <p>Gain control over your health information with access to a personalized dashboard, allowing you to manage and monitor your medical records securely and conveniently online.</p>
                                            </div>
                                        </div>
            </Container>
        </div>
    );
};

export default ChooseUs;