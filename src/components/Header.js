import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
    background-image: url('https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2093&q=80');

    h1 {
        
        font-family: 'Tourney', cursive;
        font-size: 4rem;
    }
    h2 {
        font-family: 'Merriweather', serif;
        font-size: 2rem;
    }
`

const Header = (props) => {
    const { nasaDate } = props

    return (
        <StyledHeader>
            <h1>Welcome to NASA's Photo of the Day!</h1>
            <h2>Today's Date is: {nasaDate.date}</h2>
        </StyledHeader>
    )
}

export default Header