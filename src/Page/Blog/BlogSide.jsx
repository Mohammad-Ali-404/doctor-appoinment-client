import React from 'react';
import UseBlogsHook from '../../Hooks/UseBlogsHook';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaHeadset, FaTwitter } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
const BlogSide = () => {
    const [blogs] = UseBlogsHook();
    const popularBlog = blogs.filter(blog => blog.category === 'popular')
    return (
        <div>
            <div className='bg-gradient-to-t p-8 from-[#e8e9ec] to-[#ebf3f3] rounded-md'>
                            <h1 className='text-lg font-semibold pb-2 border-b-2 border-blue-400'>Popular Blog</h1>
                                {
                                    popularBlog.slice(0, 3).map((popular) =>(
                                        <div key={popular._id} className='py-3 border-b border-slate-400'>
                                            <img src={popular.image} className='w-20 h-14' alt="" />
                                            <h1 className='w-5/6'>{popular.title}</h1>
                                            <p>{popular.posted_date}</p>
                                            <Link to={`/blogdetails/${popular._id}`} className='hover:underline text-sm'>Read More</Link>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='py-5'>
                                <div className='bg-gradient-to-t p-8 from-[#e8e9ec] to-[#ebf3f3] rounded-md'>
                                    <h1  className='text-lg font-semibold pb-2 border-b-2 border-blue-400'>Follow Us</h1>
                                    <div className="flex justify-start text-5xl space-x-3 pt-4">
                                        <Link to="" title="Facebook" className="flex items-center p-1">
                                            <FaFacebookSquare className='bg-slate-50 hover:bg-blue-300 rounded-full p-2'/>
                                        </Link>
                                        <Link to="" title="Twitter" className="flex items-center p-1">
                                            <RiInstagramFill className='bg-slate-50 hover:bg-blue-300 rounded-full p-2'/>
                                        </Link>
                                        <Link to="" title="Instagram" className="flex items-center p-1">
                                            <FaTwitter className='bg-slate-50 hover:bg-blue-300 rounded-full p-2'/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-gradient-to-t p-3 from-[#e8e9ec] to-[#ebf3f3] rounded-md'>
                                <div className='py-10 sm:mx-auto mx-0 px-5'>
                                    <div className='flex items-center gap-5'>
                                        <FaHeadset className='sm:text-6xl text-2xl'/>
                                        <div>
                                            <h1 className='sm:text-3xl text-xl font-serif'>Emergency Cases</h1>
                                            <a href="tel:" className='text-lg py-2'>+880 1792-344369</a>
                                        </div>
                                    </div>
                                    <p className='py-4'>Welcome to OneCare! We value your feedback, inquiries, and suggestions. Our dedicated team is here to assist you in any way we can. Please feel free to reach out to us using the contact information.</p>
                                    <Link to='/contact'><button className="self-center px-8 py-3 font-semibold text-white hover:bg-[#3b8d5d]  rounded-full shadow bg-[#5d98db] transition-colors duration-700 hover:border-[#5996dd] border-gray-400 border mr-4">Contact Us</button></Link>
                                </div>
                            </div>
        </div>
    );
};

export default BlogSide;