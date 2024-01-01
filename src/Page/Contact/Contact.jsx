import React, { useRef } from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Container from '../Shared/Container/Container';
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import mailAnimation from '../../../public/mail-animation.json'
import Lottie from 'lottie-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendMail = e =>{
        e.preventDefault()
        emailjs.sendForm('service_3vpz6vf', 'template_ahdo24f', form.current, 'lJgtXu48Ko6X-1Djl')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
          }, (error) => {
              console.log(error.text); 
          });
    }
    return (
        <div>
            <HelmetProvider>
                <Helmet><title>Contact | One Care</title></Helmet>
            </HelmetProvider>
            <PageTitle heading={'Contact'} subHeading={'Contact'}/>
            <div className='py-14'>
                <Container>
                    <div>
                        <div className="grid gap-6 my-4 lg:grid-cols-4">
                            <div className="border-2 border-gray-100 p-6 space-y-4 rounded-md bg-[#ffffff]">
                                <div className=''>
                                    <FaLocationDot className='text-5xl rounded-full p-3 text-white bg-[#da4551]'/>
                                </div>
                                <h1 className='sm:text-2xl text-lg font-bold duration-300'>Hospital Address</h1>
                                <p>2656 food place Street, NY 2200, USA</p>
                            </div>                
                            <div className="border-2 border-gray-100 p-6 space-y-4 rounded-md bg-[#ffffff]">
                                <div className=''>
                                    <FaPhone className='text-5xl rounded-full p-3 text-white bg-[#3e7950]'/>
                                </div>
                                <h1 className='sm:text-2xl text-lg font-bold duration-300'>Phone Number</h1>
                                <p>+880 1792 344369</p>
                            </div>                
                            <div className="border-2 border-gray-100 p-6 space-y-2 rounded-md bg-[#ffffff]">
                                <div className=''>
                                    <IoIosMail className='text-5xl rounded-full p-3 text-white bg-[#c9bc49]'/>
                                </div>
                                <h1 className='sm:text-2xl text-lg font-bold duration-300'>Office Email</h1>
                                <p>im.mohammadali12@gmail.com</p>
                                <p>support@gmail.com</p>
                            </div>                
                            <div className="border-2 border-gray-100 p-6 space-y-4 rounded-md bg-[#ffffff]">
                                <div className=''>
                                    <TbWorld className='text-5xl rounded-full p-3 text-white bg-[#3869aa]'/>
                                </div>
                                <h1 className='sm:text-2xl text-lg font-bold duration-300'>Website Link</h1>
                                <p><a href="https://stellar-figolla-6a48fe.netlify.app/">https://stellar-figolla-6a48fe.netlify.app/</a></p>
                            </div>                
                        </div>
                    </div>
                    <div className='py-10 flex justify-center sm:flex-row '>
                        <div className='hidden xl:block'>
                            <Lottie className='-mt-20' style={{width:'500'}} animationData={mailAnimation}/>
                        </div>
                        <div className='max-w-screen-2xl sm:pt-28 pt-0'>
                            <form ref={form} onSubmit={sendMail}> 
                                <div className='sm:flex gap-4'>
                                        <div className="mb-4 w-96 ">
                                            <input
                                                type="text"
                                                id="name"
                                                name="user_name"
                                                className="mt-1 p-2 w-full border rounded-md"
                                                placeholder="Full Name"
                                            />
                                        </div>
                                        <div className="mb-4 w-96 ">
                                            <input
                                                type="email"
                                                id="email"
                                                name="user_email"
                                                className="mt-1 p-2 w-full border rounded-md"
                                                placeholder="Email Address"
                                            />
                                        </div>
                                </div>
                                <div className='sm:flex gap-4'>
                                        <div className="mb-4 w-full ">
                                            <input
                                                type="text"
                                                id="phone"
                                                name="user_phone"
                                                className="mt-1 p-2 w-full border rounded-md"
                                                placeholder="Phone Number"
                                            />
                                        </div>
                                        <div className="mb-4 w-full ">
                                            <input
                                                type="text"
                                                id="subject"
                                                name="user_subject"
                                                className="mt-1 p-2 w-full border rounded-md"
                                                placeholder="subject"
                                            />
                                        </div>
                                </div>
                                <div>
                                    <textarea 
                                        id="message"
                                        name="message"
                                        placeholder='Write your message'
                                        className='w-full border rounded-md p-2'
                                        rows="5">
                                    </textarea>
                                </div>
                                <button className='bg-gradient-to-t from-[#6eb5df] to-[#29acb6aa] btn btn-md text-base' type="submit">Submit Now</button>
                            </form>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Contact;