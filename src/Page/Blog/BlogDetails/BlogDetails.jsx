import React from 'react';
import { Helmet } from 'react-helmet-async';
// import { FaCircleCheck } from 'react-icons/fa6';
import { useLoaderData } from 'react-router-dom';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Container from '../../Shared/Container/Container';
import BlogSide from '../BlogSide';
import { FaCalendarCheck } from 'react-icons/fa';
import { FaCircleCheck } from 'react-icons/fa6';
import { BiSolidCategoryAlt } from 'react-icons/bi';

const BlogDetails = () => {
    const blogDetails = useLoaderData()
    console.log(blogDetails);
    return (
        <div>
            <Helmet><title>Blog Details | One Care</title></Helmet>
            <PageTitle heading='Blog Details' subHeading='Blog Details' />
           <Container>
                    <div className='sm:flex flex-row py-11 gap-10'>
                        <div className='sm:max-w-screen-2xl border border-gray-200 sm:pl-20 sm:px-0 px-2 sm:py-10 py-2'>
                                <div className="">
                                    <div className='space-y-4'>
                                        <img src={blogDetails.image} alt={blogDetails.title} className="mb-4 sm:w-5/6 rounded-lg" />
                                        <div className="flex items-center gap-10">
                                            <div className="flex items-center gap-10">
                                                <div className='flex items-center gap-2'>
                                                    <FaCalendarCheck className='text-lg'/>
                                                    <span className="text-sm dark:text-gray-400">{blogDetails.post_date}</span>
                                                </div>
                                                
                                                <div className='flex items-center gap-2'>
                                                    <BiSolidCategoryAlt className='text-lg'/>
                                                    <a rel="noopener noreferrer" href="#" className="px-2 py-1 border font-bold rounded">{blogDetails.category}</a>
                                                </div>
                                            </div>
                                            <div className='flex items-center '>
                                                <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                                                <span className="dark:text-gray-400">Posted By: {blogDetails.posted_by}</span>
                                            </div>
                                        </div>
                                        <h2 className="sm:text-3xl text-xl font-bold mb-1">{blogDetails.title}</h2>
                                        <p className="text-gray-700 text-lg">{blogDetails.additional_description}</p>
                                        <p className="text-gray-600 mb-4 sm:w-8/12 py-1">{blogDetails.details}</p>
                                    </div>

                                    <div className='space-y-5'>
                                        <h3 className="text-2xl font-bold gap-6 space-y-5 mb-2">Capabilities</h3>
                                        <div className="gap-4 ">
                                            {blogDetails.capabilities_details.map((capabilities, index) => (
                                                <li key={index} className="mb-2 flex gap-2 items-center"> <FaCircleCheck className='text-xl text-blue-500'/>{capabilities}</li>
                                            ))}
                                            <p className='sm:w-8/12'>{blogDetails.testimonial}</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className='sm:w-3/12 w-full py-4'>
                            <BlogSide/>
                        </div>
                    </div>
           </Container>
        </div>
    );
};

export default BlogDetails;