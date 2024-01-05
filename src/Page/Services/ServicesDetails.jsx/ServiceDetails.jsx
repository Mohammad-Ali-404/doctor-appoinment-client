/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useAxiosSecure from '../../../Hooks/UserAxiosSecure';
import Container from '../../Shared/Container/Container';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import { Helmet } from 'react-helmet-async';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData()
    const [axiosSecure] = useAxiosSecure()
// Todo
    return (
        <div className=''>
            <Helmet><title>Service Details | One Care</title></Helmet>
            <PageTitle heading='Service Details' subHeading='Service Details' />
            <div className='py-10'>
                <Container>
                    <div className='sm:flex flex-row'>
                        <div>
                            
                        </div>
                        <div>

                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default ServiceDetails;