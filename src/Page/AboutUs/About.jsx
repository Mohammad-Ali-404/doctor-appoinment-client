import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import AboutUs from '../Home/AboutUs/AboutUs';
import ChooseUs from './ChooseUs';

const About = () => {
    return (
        <div>
            <PageTitle heading={'About Us'} subHeading={'About Us'}/>
            <div className='py-10'>
                <AboutUs/>
                <ChooseUs/>
            </div>
        </div>
    );
};

export default About;