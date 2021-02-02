import fetch from 'node-fetch';

async function postZillowPage(zillowPageDict) {
    const url = 'http://localhost:5000/zillow-page'
    console.log(zillowPageDict);
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
        body: JSON.stringify({ zillowPageDict }) // body data type must match "Content-Type" header
    };
    const response = await fetch(url, requestConfig);
    return await response.json();
}

const zilowPage = {
    price: 380000,
    details: '4 bd | 2 ba | 1,865 sqft',
    url: 'https://www.zillow.com/homedetails/1013-Zacarias-Dr-Leander-TX-78641/250925071_zpid/',
    imageLink: 'https://photos.zillowstatic.com/fp/02bbfed84c3c1325112eacaafa2fb4c1-cc_ft_576.jpg',
    ds: '01-31-2021',
    address: '1013 Zacarias Dr, Leander, TX 78641',
    status: 'Active under contract',
    monthlyMortgage: '2123',
    isChosen: true,
}
postZillowPage(zilowPage).then(data => console.log(data)).catch(error => console.log(error))