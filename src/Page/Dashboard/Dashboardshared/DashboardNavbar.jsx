import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../Shared/Container/Container';
import ProfileDropdown from '../../../components/ProfileDropdown/ProfileDropdown';
import logo from '../../../assets/logo/logo.png'
const DashboardNavbar = () => {
    return (
        <div className=''>
            <Container>
                <div className="navbar bg-base-100">
                    <div className="flex-1">
                        <Link to='/' className="text-xl"><img src={logo} className='w-32' alt="" /></Link>
                    </div>
                    <div className="flex-none z-10 inset-0">
                        <ProfileDropdown/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default DashboardNavbar;