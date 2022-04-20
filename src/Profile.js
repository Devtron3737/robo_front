import React from 'react'

import './App.css'

function Profile({ handleNext, profile }) {
    let name, age, details, aboutMe;
    [name, age, details, aboutMe] = profile


    return (
        <div>
            <div className="name-age-container">
                <div className="name-age">
                    🤖 {name}, {age}
                </div>
            </div>
            <div className="details-container">
                <div className="details">
                    {details}
                </div>
            </div>
            <div className="about-me-text-container">
                About Me:
            </div>
            <div className="about-me-container">
                <div className="about-me">
                    {aboutMe}
                </div>
            </div>

            <div className="next-button-container">
                <div className="next-button-subcontainer">
                    <div className='next-button' onClick={handleNext}>
                        Proceed...
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
