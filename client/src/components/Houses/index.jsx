// import React from 'react';
import React, { useState } from 'react';
import { Button, Col, Container, Input, Row } from "reactstrap";
import houseUtil from '../../utils/houses';
import HouseRow from '../HouseRow';


function Houses({ houses, dsArray, sharedStates }) {


    const numHousesOnRow = 3;
    const houseArrays = [];
    for (let i = 0; i < houses.length; i += numHousesOnRow) {
        houseArrays.push(houses.slice(i, i + numHousesOnRow));
    }
    // console.log('houseArrays: ', houseArrays);
    // console.log('dsArray: ', dsArray);


    const [inputValue, setInputValue] = useState('');

    async function newSectionOnClickHandle(updateDropDownValue) {
        const response = await houseUtil.createDS();
        if ('success' in response.message) {
            sharedStates.dsReloadCountIncrement();
            updateDropDownValue(response.value);
        } else {
            console.log(response.value);
        }
    }

    async function handleInputEnter(e) {
        if (e.key === 'Enter') {
            console.log('Enter Key is triggered');
            console.log(e.target.value);
            const url = encodeURI(e.target.value);
            const urlObject = {
                url,
                ds: sharedStates.dropDownValue
            }
            console.log(urlObject);
            const response = await houseUtil.createUrl(urlObject);
            setInputValue('');
            if ('success' in response) {

                setTimeout(() => {
                    sharedStates.houseReloadCountIncrement();
                    console.log('House Reload Done');
                }, 15000);


            } else {
                console.log(response);
            }
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
                                        value={inputValue}
                                        onChange={e => setInputValue(e.target.value)}
                                        onKeyDown={e => handleInputEnter(e)}
                                    ></Input>
                                </Col>
                                <Col className="pl-lg-0" sm="2" xs="9">
                                    <label htmlFor={"dsDropdown"}>
                                        {"Section start from:   "}

                                        <select
                                            id={"dsDropdown"}
                                            value={sharedStates.dropDownValue}
                                            onChange={e => sharedStates.updateDropDownValue(e.target.value)}
                                            onBlur={e => sharedStates.updateDropDownValue(e.target.value)}
                                            disabled={!dsArray.length}
                                        >
                                            {dsArray.map((dsItem, i) =>
                                                <option key={i} value={dsItem.ds}>{dsItem.ds}</option>)}
                                        </select>
                                    </label>
                                </Col>
                                <Col className="pl-lg-0" sm="2" xs="9">
                                    <Button
                                        block color="primary"
                                        type="submit"
                                        className="new-section"
                                        onClick={e => newSectionOnClickHandle(sharedStates.updateDropDownValue)}
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
