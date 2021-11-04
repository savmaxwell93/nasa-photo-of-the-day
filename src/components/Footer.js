import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
    font-size: .8rem;
    font-family: 'Merriweather', serif;
`

const Footer = (props) => {

    const { nasaCopyright } = props


    return (
        <FooterStyle>
            <p>Image By: {nasaCopyright.copyright}</p>
        </FooterStyle>
    )
}

export default Footer