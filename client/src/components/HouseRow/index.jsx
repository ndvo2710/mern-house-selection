import React from 'react';
import { Row } from "reactstrap";
import House from '../House';



function HouseRow({ rowName, rowData }) {
    console.log(rowData);
    return (
        <Row className={rowName}>
            {
                rowData.map((houseData, i) => {
                    const houseClassName = `house-${i}`;
                    return <House houseClassName={houseClassName} houseData={houseData} key={i} />
                })
            }
        </Row>
    )
}

export default HouseRow
