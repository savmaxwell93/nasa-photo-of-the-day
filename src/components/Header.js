import React from 'react';

const Header = (props) => {
    const { nasaDate } = props

    return (
        <div>
            <h1>Welcome to NASA's Photo of the Day!</h1>
            <h2>Today's Date is: {nasaDate.date}</h2>
        </div>
    )
}

export default Header