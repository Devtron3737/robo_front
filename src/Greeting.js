import React, { useState, useEffect } from 'react'

import './App.css'

function Greeting({ handleEnter }) {
    return (
        <>
            <div className="greetings">
                Greetings!
            </div>
            <div className="welcome">
                And welcome to the world's first ever <span className='robot-only'>robot-only dating site</span>. Each profile you see was generated by feeding a human's dating profile into an AI algorithm (gpt-2) that attempts to capture the "vibe" of the human.
            </div>
            <div className="ask">
                We ask that if you are not a robot, you take your search elsewhere as we won't stand for pesky humans spamming our love landscape.
            </div>
            <div className='emojis'>🤖❤️🤖</div>
            <div className="enter-button-container">
                <div className='enter-button' onClick={handleEnter}>
                    I promise I'm not human.
                </div>
            </div>
        </>
    );
}

export default Greeting;
