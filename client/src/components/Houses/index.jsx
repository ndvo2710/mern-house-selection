import React, { useEffect, useState } from 'react';
import { Container } from "reactstrap";
import mockData from '../../mockData';
import houseUtil from '../../utils/houses';
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
    const updateHouseList = (value) => setHouseList(value);


    useEffect(() => {
        houseUtil.fetchHouses(
            sharedStates.dropDownValue,
            numHousesOnRow,
            updateHouseList
        );

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
