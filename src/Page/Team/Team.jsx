import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageTitle from '../Shared/PageTitle/PageTitle';
import UseTeamMemberHook from '../../Hooks/UseTeamMemberHook';
import { FaGraduationCap } from 'react-icons/fa6';
import { CiCirclePlus } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import Container from '../Shared/Container/Container';
import ReactPaginate from 'react-paginate';

const Team = () => {
    const [teamMember] = UseTeamMemberHook();
    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const offset = currentPage * itemsPerPage;
    const paginatedTeamMembers = teamMember.slice(offset, offset + itemsPerPage);

    return (
        <div>
            <Helmet><title>Sign In | One Care</title></Helmet>
            <PageTitle heading='Our Team' subHeading='Our Team' />
            <Container>
                <div className='grid sm:grid-cols-4 py-10 grid-cols-1 gap-10'>
                    {
                        paginatedTeamMembers.map((member) => (
                            <div key={member.id}>
                                <div className="flex flex-col justify-center h-full shadow-xl bg-white dark:text-gray-100">
                                        <img src={member.image} alt="" className="sm:w-80 w-full py-5 mx-auto" />
                                        <div className='flex justify-between sm:px-4 px-6 py-6'>
                                            <div className="space-y-4">
                                                <div className="my-2 space-y-1 ">
                                                    <h2 className="text-lg font-semibold sm:text-xl">{member.name}</h2>
                                                    <p className="text-xs sm:text-base">{member.specialist}</p>
                                                    <div className='flex items-center gap-2'>
                                                        <FaGraduationCap className='text-2xl'/>
                                                        <p>{member.degree}</p>
                                                    </div>
                                                </div>
                                                {/* <div className="flex text-2xl justify-center pt-2 space-x-4 align-center">
                                                    <Link><FaFacebook className='hover:text-[#6280d1] duration-500'/></Link>
                                                    <Link><FaInstagram className='hover:text-[#6280d1] duration-500'/></Link>
                                                    <Link><FaTwitter className='hover:text-[#6280d1] duration-500'/></Link>
                                                </div> */}
                                            </div>
                                            <div className='mt-8'>
                                                <Link><CiCirclePlus className='text-5xl'/></Link>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='my-4'>
                    <ReactPaginate
                        previousLabel={'Previous'}
                        nextLabel={'Next'}
                        breakLabel={'...'}
                        breakClassName={'text-gray-600'}
                        pageCount={Math.ceil(teamMember.length / itemsPerPage)}
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
                
            </Container>
        </div>
    );
};

export default Team;
