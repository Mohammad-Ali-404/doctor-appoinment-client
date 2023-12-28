import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const PageTitle = ({ heading, subHeading }) => {
    return (
        <div className=" ">
            <div className="-mt-2">
                <div className="bg-cover bg-center sm:h-[500px] w-full" style={{backgroundImage: 'url(https://i.ibb.co/zb2P8xq/banner2.png)'}}>
                    <div className=""></div>
                    <div className="sm:p-52 pt-60  hero-overlay bg-cyan-900 opacity-40 px-10">
                        <h1 className='md:text-5xl text-2xl font-bold text-white mb-4 '>
                            {heading}
                        </h1>
                        <div className='flex flex-col-3 gap-1 text-white'>
                            <Link to='/' className='sm:text-2xl my-1'>Home</Link>
                            <BsArrowRight className='my-2 sm:text-3xl font-medium'/>
                            <span className='sm:text-lg font-semibold text-slate-100 my-1 sm:my-2'>{subHeading}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageTitle;