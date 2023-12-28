import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import AboutUs from '../Home/AboutUs/AboutUs';

const About = () => {
    return (
        <div>
            <PageTitle heading={'About Us'} subHeading={'About Us'}/>
            <div className='py-10'>
                <AboutUs/>
            </div>
        </div>
    );
};

export default About;