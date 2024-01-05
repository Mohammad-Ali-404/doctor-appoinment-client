import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData()
    console.log(serviceDetails);
    return (
        <div>
            
        </div>
    );
};

export default ServiceDetails;