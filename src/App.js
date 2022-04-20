import React, {useState, useEffect} from 'react'
import Greeting from './Greeting';
import Profile from './Profile';

import './App.css'

import roboProfCsv from './robo_profs.csv'
import Papa from 'papaparse';

function App() {
    const [profiles, setProfiles] = useState([]);
    const [atHomescreen, setAtHomescreen] = useState(false);
    const [atProfile, setAtProfile] = useState(0);

    useEffect(() => {
        Papa.parse(roboProfCsv, {
            download: true,
            complete: function (input) {
                const records = input.data;
                setProfiles(records)
            }
        });
    }, [])

    function handleEnter(e) {
        setAtHomescreen(true)
    }

    function handleNext(e) {
        setAtProfile(atProfile + 1)
    }

    function handleBack(e) {
        setAtProfile(atProfile - 1)
    }


    if (atHomescreen === false) {
        return (
            <div className="app-container">
                <div className="logo-container">
                    <span className="robots">Robotsneed</span><span className="love">love</span><span className="period">.</span><span className="to">to</span>
                </div>
                <Greeting handleEnter={handleEnter} />
            </div>
        );
    } else {
        return (
            <div className="app-container">
                <div className="logo-container">
                    <span className="robots">Robotsneed</span><span className="love">love</span><span className="period">.</span><span className="to">to</span>
                </div>
                <Profile handleNext={handleNext} handleBack={handleBack} profile={profiles[atProfile]} />
            </div>
        );
    }
}

export default App;
