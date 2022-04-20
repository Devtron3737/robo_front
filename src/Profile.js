import React, { useState, useEffect } from 'react'

import './App.css'

function Profile({ handleNext, handleBack, profile }) {
    let name, age, details, aboutMe;
    [name, age, details, aboutMe] = profile


    return (
        <div>
            <div>{name}</div>
            <div>{age}</div>
            <div>{details}</div>
            <div>{aboutMe}</div>

            <div onClick={handleBack}>PREVIOUS PROFILE</div>
            <div onClick={handleNext}>NEXT PROFILE</div>
        </div>
    );
}

export default Profile;
