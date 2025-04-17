import React from 'react';
import PropTypes from 'prop-types';
import BusinessCard from './components/BusinessCard';

const App = ({ queryParameters }) => {
    const { name, jobTitle, department, email, phoneNumber, profilePhotoUrl } = queryParameters;

    return (
        <html lang="en">
            <head>
                <meta chatSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="preload" as="font" href="https://cdn.sunlife.com/content/dam/sunlife/global/fonts/SunLifeNewDisplay-Regular.woff2" type="font/woff2" crossOrigin="anonymous" />
                <title>{`Business Card - ${name}`}</title>
            </head>
            <body>
                <BusinessCard 
                    profilePhotoUrl={profilePhotoUrl}
                    name={name}
                    jobTitle={jobTitle}
                    department={department}
                    email={email}
                    phoneNumber={phoneNumber}
                />
            </body>
        </html>
    );
};

App.propType = {
    queryParameters: PropTypes.shape({
        name: PropTypes.string.isRequired,
        jobTitle: PropTypes.string.isRequired,
        department: PropTypes.string,
        email: PropTypes.string.isRequired,
        phoneNumber: PropTypes.string.isRequired,
        profilePhotoUrl: PropTypes.string,
    }).isRequired,
};

export default App;
