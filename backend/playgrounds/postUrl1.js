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


const urls = [
    'https://www.zillow.com/homedetails/2509-Thunder-Horse-Leander-TX-78641/116080050_zpid/',
    'https://www.zillow.com/community/deerbrooke/2076798954_zpid/',
    'https://www.zillow.com/homedetails/420-Canadian-Springs-Dr-Leander-TX-78641/305173525_zpid/',
    'https://www.zillow.com/homedetails/2624-Montebelluna-Pl-Leander-TX-78641/145552473_zpid/',
    'https://www.zillow.com/homedetails/1408-Volente-Ln-Leander-TX-78641/243342678_zpid/',
    'https://www.zillow.com/homedetails/17411-Toyahville-Trl-Round-Rock-TX-78664/2075362188_zpid/',
    'https://www.zillow.com/community/presidential-heights/2080473231_zpid/',
    'https://www.zillow.com/homedetails/1105-Mountain-View-Dr-Pflugerville-TX-78660/29448314_zpid/',
    'https://www.zillow.com/homedetails/2450-Wickersham-Ln-P1605-Austin-TX-78741/29464764_zpid/',
    'https://www.zillow.com/homedetails/3000-Guadalupe-St-UNIT-301-Austin-TX-78705/29398021_zpid/',
    'https://www.zillow.com/homedetails/7406-Navajo-Pass-Leander-TX-78641/29373285_zpid/',
    'https://www.zillow.com/homedetails/16803-Manda-Carlson-Rd-Manor-TX-78653/83815158_zpid/'
]


urls.forEach(myUrl => {
    const encodedUrl = encodeURI(myUrl);
    const urlDict = {
        url: encodedUrl,
        ds: '02-01-2021'
    }

    postUrl(urlDict).then(data => console.log(data)).catch(error => console.log(error))
})
