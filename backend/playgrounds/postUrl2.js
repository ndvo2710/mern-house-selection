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
    'https://www.zillow.com/homedetails/11700-Sun-Glass-Dr-Manor-TX-78653/80104457_zpid/',
    'https://www.zillow.com/homedetails/11811-New-Sweden-Church-Rd-Manor-TX-78653/83833153_zpid/',
    'https://www.zillow.com/homedetails/12628-Saint-Mary-Dr-Manor-TX-78653/70353915_zpid/',
    'https://www.zillow.com/homedetails/9805-Evening-Canopy-Dr-Manor-TX-78653/2077242472_zpid/',
    'https://www.zillow.com/community/vine-creek/2078332362_zpid/',
    'https://www.zillow.com/homedetails/3508-Winter-Wren-Way-Pflugerville-TX-78660/145657488_zpid/',
    'https://www.zillow.com/homedetails/312-Blackman-Trl-Hutto-TX-78634/70992870_zpid/',
    'https://www.zillow.com/homedetails/420-Canadian-Springs-Dr-Leander-TX-78641/305173525_zpid/',
    'https://www.zillow.com/homedetails/4806-Scarsdale-Dr-Austin-TX-78744/29466471_zpid/',
    'https://www.zillow.com/homedetails/1705-Main-St-Bastrop-TX-78602/84372081_zpid/',
    'https://www.zillow.com/homedetails/123-Valle-Verde-Dr-Del-Valle-TX-78617/214442243_zpid/'
]


urls.forEach(myUrl => {
    const encodedUrl = encodeURI(myUrl);
    const urlDict = {
        url: encodedUrl,
        ds: '02-01-2021'
    }

    postUrl(urlDict).then(data => console.log(data)).catch(error => console.log(error))
})
