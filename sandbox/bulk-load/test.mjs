// Example file, run by cding into the sandbox/bulk-load folder and running 'node test.mjs'
// Playmaker's Theater is omitted from here

import fetch from 'node-fetch';

fetch('http://localhost:5001/app/building/add/multiple', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify([
        {
            "name": "test",
            "abbreviation": "none",
            "defaultLatitude": "35.91167620",
            "defaultLongitude": "-79.05426350",
            "campus": "test"
        }
    ])
});