// import React from 'react';
import React from 'react';
import { Button, Col, Container, Input, Row } from "reactstrap";
import useLocalStorage from '../../hooks/useLocalStorage';
import HouseRow from '../HouseRow';

function Houses({ houses, dsArray, setIsDsReLoad }) {


    const numHousesOnRow = 3;
    const houseArrays = [];
    for (let i = 0; i < houses.length; i += numHousesOnRow) {
        houseArrays.push(houses.slice(i, i + numHousesOnRow));
    }
    console.log('houseArrays: ', houseArrays);
    console.log('dsArray: ', dsArray);

    const [dropDownValue, setDropDownValue] = useLocalStorage('dsDropdown', '');

    async function newSectionOnClickHandle(setDropDownValue) {
        let today = new Date().toISOString().slice(0, 10);
        const url = 'http://localhost:5000/create-ds'

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
        if ('success' in res) {
            setIsDsReLoad(true);
            setDropDownValue(today);
        } else {
            console.log(res);
        }
    }



    return (
        <>
            <section className='blogs-2'>
                <Container fluid>
                    <Row className="align-items-left text-left">
                        <Col lg="8" xs="12">
                            <h1 className="display-3">
                                MERN House Selection Project
                            </h1>
                            <Row className="row-input">
                                <Col sm="4" xs="12">
                                    <Input
                                        aria-label="Your text"
                                        id="signupSrtext"
                                        name="text"
                                        placeholder="Zillow Page URL"
                                        type="text"
                                    ></Input>
                                </Col>
                                <Col className="pl-lg-0" sm="2" xs="9">
                                    <label htmlFor={"dsDropdown"}>
                                        {"Section start from:   "}

                                        <select
                                            id={"dsDropdown"}
                                            value={dropDownValue}
                                            onChange={e => setDropDownValue(e.target.value)}
                                            onBlur={e => setDropDownValue(e.target.value)}
                                            disabled={!dsArray.length}
                                        >
                                            {dsArray.map(dsItem =>
                                                <option value={dsItem.ds}>{dsItem.ds}</option>)}
                                        </select>
                                    </label>
                                </Col>
                                <Col className="pl-lg-0" sm="2" xs="9">
                                    <Button
                                        block color="primary"
                                        type="submit"
                                        className="new-section"
                                        onClick={e => newSectionOnClickHandle(setDropDownValue)}
                                    >
                                        New Section
                                    </Button>

                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Container>
                <Container fluid>
                    <br></br>
                    {
                        houseArrays.map((rowData, i) => {
                            const rowName = `row-${i}`;
                            return <HouseRow key={i} rowName={rowName} rowData={rowData} />
                        })
                    }
                </Container>

            </section>
        </>
    )
}

export default Houses
