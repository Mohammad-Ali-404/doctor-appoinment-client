import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Login = () => {
    return (
        <div>
            <HelmetProvider>
                <Helmet><title>Sign In | One Care</title></Helmet>
            </HelmetProvider>
            <PageTitle heading='Login' subHeading='Login' />
            <div className='py-20'>

            </div>
        </div>
    );
};

export default Login;