import React from 'react';
import { FaGraduationCap } from 'react-icons/fa6';
import { CiCirclePlus } from 'react-icons/ci';
import { Link } from 'react-router-dom';
const SingleTeam = ({member}) => {
    const {_id, image, name, specialist, degree} = member;
    console.log(_id);
    return (
        <div>
             <div className="flex flex-col justify-center h-full shadow-xl bg-white dark:text-gray-100">
                <img src={image} alt="" className="sm:w-full h-4/6 p-4 mx-auto" />                        
                    <div className='flex justify-between sm:px-4 px-6 py-6'>
                        <div className="space-y-4">
                            <div className="my-2 space-y-1 ">
                                <h2 className="text-lg font-semibold sm:text-xl">{name}</h2>
                                <p className="text-xs sm:text-base">{specialist}</p>
                                <div className='flex items-center gap-2'>
                                    <FaGraduationCap className='text-2xl'/>
                                    <p>{degree}</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-8'>
                            <Link to={`/teamdetails/${_id}`}><CiCirclePlus className='text-5xl'/></Link>
                        </div>
                    </div>                        
            </div>
        </div>
    );
};

export default SingleTeam;