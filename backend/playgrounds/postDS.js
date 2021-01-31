import fetch from 'node-fetch';

async function postDs(currentDs) {
    const url = 'http://localhost:5000/create-ds'
    console.log({ currentDs });
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
        body: JSON.stringify({ currentDs }) // body data type must match "Content-Type" header
    };
    const response = await fetch(url, requestConfig);
    return await response.json();
}

postDs('01-31-2020').then(data => console.log(data)).catch(error => console.log(error))