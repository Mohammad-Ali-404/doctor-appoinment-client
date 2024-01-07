import React from 'react';
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaCalendarCheck } from "react-icons/fa";

const SingleBlog = ({blog}) => {
    const {image, post_date, category, title, additional_description, posted_by,} = blog;
    return (
        <div className='py-4'>
            <div className="border rounded-md">
                <div className="max-w-full sm:px-8 px-4 sm:py-8 py-4 border-gray-50 mx-auto rounded-lg  dark:bg-gray-900">
                    <img src={image} alt="" className='sm:w-screen rounded w-full pb-4'/>
                    <div className="flex items-center justify-between">
                        <div className='flex items-center gap-2'>
                            <FaCalendarCheck className='text-lg'/>
                            <span className="text-sm dark:text-gray-400">{post_date}</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <BiSolidCategoryAlt className='text-lg'/>
                            <a rel="noopener noreferrer" href="#" className="px-2 py-1 border font-bold rounded">{category}</a>
                        </div>
                    </div>
                    <div className="mt-3">
                        <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">{title}</a>
                        <p className="mt-2">{additional_description}</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Read more</a>
                        <div>
                            <a rel="noopener noreferrer" href="#" className="flex items-center">
                                <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                                <span className="dark:text-gray-400">Posted By: {posted_by}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;