/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { GoArrowRight } from "react-icons/go";

const SingleServices = ({service}) => {
    const {id, title, image , details} = service;
    const maxDetailsLength = 110; 
    return (
        <div>
            <div className="max-w-lg p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <h2 className="text-xl font-semibold tracki">{title}</h2>
                </div>
                <p className=" pt-2">
                    {details.length > maxDetailsLength ? `${details.slice(0, maxDetailsLength)}...` : details}    
                </p>
                <div className='pt-4'>
                    <Link><button className='flex items-center px-3 py-1 text-sm font-semibold bg-red-100 rounded-md'>See More <GoArrowRight className='text-xl ml-1 mt-1'/></button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleServices;