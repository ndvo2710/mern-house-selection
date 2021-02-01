import fetch from 'node-fetch';

async function postUrl(currentUrlDict) {
    const url = 'http://localhost:5000/create-url'
    const requestConfig = {
        method: 'POST', // *GET, POST, PUT/PATCH, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify({ currentUrlDict }) // body data type must match "Content-Type" header
    };
    const response = await fetch(url, requestConfig);
    const content = await response.json();
    console.log(content);
    return content
}

const myUrl = 'https://www.zillow.com/homedetails/1013-Zacarias-Dr-Leander-TX-78641/250925071_zpid/'
const encodedUrl = encodeURI(myUrl);
const urlDict = {
    url: encodedUrl,
    ds: '02-01-2021'
}

postUrl(urlDict).then(data => console.log(data.text())).catch(error => console.log(error))