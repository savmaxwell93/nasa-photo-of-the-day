import React from 'react';

const Image = (props) => {

    const { nasaTitle, nasaImg, nasaExplanation } = props

    return (
        <div>
            <h3>Today's Image is: {nasaTitle.title}</h3>
            <img src={nasaImg.hdurl} alt='nasa photograph' />
            <p>{nasaExplanation.explanation}</p>
        </div>
    )
}

export default Image