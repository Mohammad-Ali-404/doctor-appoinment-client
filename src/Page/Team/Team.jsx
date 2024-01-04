import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageTitle from '../Shared/PageTitle/PageTitle';
import UseTeamMemberHook from '../../Hooks/UseTeamMemberHook';
import Container from '../Shared/Container/Container';
import ReactPaginate from 'react-paginate';
import SingleTeam from './SingleTeam';

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
                            // <div key={member.id}>
                               
                            // </div>
                            <SingleTeam key={member._id} member={member}></SingleTeam>
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
