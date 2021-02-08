import React, { useEffect, useState } from 'react';
import { Container } from "reactstrap";
import mockData from '../../mockData';
import HouseRow from '../HouseRow';




function Houses({ sharedStates }) {
    const numHousesOnRow = 3;

    const [houseList, setHouseList] = useState(() => {
        const houseArrays = [];
        for (let i = 0; i < mockData.length; i += numHousesOnRow) {
            houseArrays.push(mockData.slice(i, i + numHousesOnRow));
        }
        return houseArrays
    });




    useEffect(() => {
        async function fetchHouses() {
            // const HOUSE_API_URL = `http://localhost:5000/fetch-zillow/${sharedStates.dropDownValue}`;
            const HOUSE_API_URL = `https://mern-house-selection.herokuapp.com/fetch-zillow/${sharedStates.dropDownValue}`;
            const res = await fetch(HOUSE_API_URL);
            const data = await res.json();
            console.log('Fetching Houses');
            console.log(data.success);
            const houses = data.success;
            const houseArrays = [];
            for (let i = 0; i < houses.length; i += numHousesOnRow) {
                houseArrays.push(houses.slice(i, i + numHousesOnRow));
            }
            setHouseList(houseArrays);
        }

        (fetchHouses)();

        return () => {
            // cleanup
        }
    }, [
        sharedStates.houseReloadCount, // dummy state for re-rendering ds
        sharedStates.dropDownValue
    ])


    return (
        <Container fluid>
            <br></br>
            {
                houseList.map((rowData, i) => {
                    const rowName = `row-${i}`;
                    return <HouseRow key={i} rowName={rowName} rowData={rowData} />
                })
            }
        </Container>
    )
}

export default Houses
