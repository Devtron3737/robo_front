import React, {useState, useEffect} from 'react'

import './App.css'
import { parse } from '@vanillaes/csv';
// import * as fs from 'fs';
// import fs from 'fs'
import roboProfCsv from './robo_profs.csv'
import Papa from 'papaparse';

function App() {
    const [items, setItems] = useState([]);

    console.log("hiiii")

    useEffect(() => {
        // fs.readFile('robo_profs.csv', 'utf8', function (err, data) {
        console.log("!!!data");
        console.log(roboProfCsv);

        Papa.parse(roboProfCsv, {
            download: true,
            complete: function (input) {
                const records = input.data;
                console.log("!!!PARSED data");
                console.log(records);
            }
        });

        // const parsed = parse(roboProfCsv)
        // console.log("THIS IS PARSED")
        // console.log(parsed);
        // });
    })

    return (
        <div className="App">
        </div>
    );
}

export default App;
