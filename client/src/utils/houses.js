async function createDS() {
    let today = new Date().toISOString().slice(0, 10);
    // const url = 'http://localhost:5000/create-ds'
    const url = 'https://mern-house-selection.herokuapp.com/create-ds'

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
        body: JSON.stringify({ currentDs: today }) // body data type must match "Content-Type" header
    };
    const response = await fetch(url, requestConfig);
    const res = await response.json();
    return {
        message: res,
        value: today
    }
}


async function createUrl(currentUrlDict) {
    /**
     * Sample urlObj :
        {
            url: encodedUrl,
            ds: '02-01-2021'
        }
     */

    // const url = 'http://localhost:5000/create-url'
    const url = 'https://mern-house-selection.herokuapp.com/create-url'
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
    const res = await response.json();
    console.log(res);
    return res
}

async function fetchHouses(dsValue, numHousesOnRow, updateHouseListCallback) {
    // const HOUSE_API_URL = `http://localhost:5000/fetch-zillow/${sharedStates.dropDownValue}`;
    const HOUSE_API_URL = `https://mern-house-selection.herokuapp.com/fetch-zillow/${dsValue}`;
    const res = await fetch(HOUSE_API_URL);
    const data = await res.json();
    console.log('Fetching Houses');
    console.log(data.success);
    const houses = data.success;
    const houseArrays = [];
    for (let i = 0; i < houses.length; i += numHousesOnRow) {
        houseArrays.push(houses.slice(i, i + numHousesOnRow));
    }
    updateHouseListCallback(houseArrays);
}

async function fetchDS(updateDsListCallback) {
    // const DS_API_URL = 'http://localhost:5000/fetch-ds';
    const DS_API_URL = 'https://mern-house-selection.herokuapp.com/fetch-ds';
    const res = await fetch(DS_API_URL);
    const data = await res.json();
    console.log('Fetching Ds');
    console.log(data.success);
    updateDsListCallback(data.success);
}

const houseUtil = {
    createDS,
    createUrl,
    fetchHouses,
    fetchDS
};

export default houseUtil;