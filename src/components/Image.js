import React from 'react';
import styled from 'styled-components';

const ImageStyle = styled.div`
    img {
        max-width: 100%;
        max-height: 100vh;
    }
    font-family: 'Merriweather', serif;
`

const Image = (props) => {

    const { nasaTitle, nasaImg, nasaExplanation } = props

    return (
        <ImageStyle>
            <h3>Today's Image is: {nasaTitle.title}</h3>
            <img src={nasaImg.hdurl} alt='nasa photograph' />
            <p>{nasaExplanation.explanation}</p>
        </ImageStyle>
    )
}

export default Image