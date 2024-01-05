import React, { useState } from 'react';
import UseServiceHook from '../../Hooks/UseServiceHook';
import { Helmet } from 'react-helmet-async';
import Container from '../Shared/Container/Container';
import PageTitle from '../Shared/PageTitle/PageTitle';
import SingleServices from './SingleServices';
import ReactPaginate from 'react-paginate';

const Services = () => {
    const [service] = UseServiceHook();
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const offset = currentPage * itemsPerPage;
    const paginatedTeamMembers = service.slice(offset, offset + itemsPerPage);
    return (
        <div>
            <div>
                <Helmet><title>Service | One Care</title></Helmet>
                <PageTitle heading='Our Team' subHeading='Our Team' />
                <div>
                    <Container>
                        <div className='grid sm:grid-cols-3 py-10 grid-cols-1 gap-10'>
                            {
                                paginatedTeamMembers.map((service) => (
                                
                                    <SingleServices key={service.id} service={service}/>
                                ))
                            }
                        </div>
                        <div className='my-4'>
                            <ReactPaginate
                                previousLabel={'Previous'}
                                nextLabel={'Next'}
                                breakLabel={'...'}
                                breakClassName={'text-gray-600'}
                                pageCount={Math.ceil(service.length / itemsPerPage)}
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
            </div>
        </div>
    );
};

export default Services;