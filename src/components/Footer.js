import React from 'react';

const Footer = (props) => {

    const { nasaCopyright } = props


    return (
        <p>Image By: {nasaCopyright.copyright}</p>
    )
}

export default Footer