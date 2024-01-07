import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageTitle from '../Shared/PageTitle/PageTitle';
import Container from '../Shared/Container/Container';
import UseBlogsHook from '../../Hooks/UseBlogsHook';
import SingleBlog from './SingleBlog';
import ReactPaginate from 'react-paginate';
import BlogSide from './BlogSide';


const Blog = () => {
    const [blogs] = UseBlogsHook();
    const itemsPerPage = 4;
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const offset = currentPage * itemsPerPage;
    const paginatedBlogs = blogs.slice(offset, offset + itemsPerPage);
    return (
        <div>
            <Helmet><title>Blog | One Care</title></Helmet>
            <PageTitle heading={'Blog'} subHeading={'Blog'}/>
            <div className='py-10'>
                <Container>
                    <div className='sm:flex flex-row gap-10'>
                        <div className='sm:w-9/12 w-full'>
                            <div className='py-7 gap-10'>
                                {
                                    paginatedBlogs.map((blog) => (
                                        <SingleBlog key={blog._id} blog={blog}/>
                                    ))
                                }
                            </div>
                            <div className='my-4'>
                                <ReactPaginate
                                    previousLabel={'Previous'}
                                    nextLabel={'Next'}
                                    breakLabel={'...'}
                                    breakClassName={'text-gray-600'}
                                    pageCount={Math.ceil(blogs.length / itemsPerPage)}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    onPageChange={handlePageClick}
                                    containerClassName={'flex justify-center gap-2'}
                                    subContainerClassName={'flex items-center space-x-4'}
                                    activeClassName={'bg-blue-500 text-white font-semibold border border-blue-500 py-2 -mt-2 rounded-full'}
                                    pageLinkClassName={'text-slate-800 hover:bg-blue-100 border border-blue-500 px-4 py-2 rounded-full'}
                                    previousLinkClassName={'text-slate-800 hover:bg-blue-100 border border-blue-500 px-4 py-2 rounded-full'}
                                    nextLinkClassName={'text-blue-500 hover:bg-blue-100 border border-blue-500 px-4 py-2 rounded-full'}
                                />
                            </div>
                        </div>
                        <div className='sm:w-3/12 w-full py-11'>
                            <BlogSide/>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Blog;