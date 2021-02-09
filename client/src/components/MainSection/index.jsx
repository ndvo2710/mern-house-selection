// import React from 'react';
import React, { useState } from 'react';
import { Button, Col, Container, Input, Row } from "reactstrap";
import houseUtil from '../../utils/houses';
import DsDropDown from '../DsDropDown';
import Houses from '../Houses';


function MainSection({ sharedStates }) {

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
                                <DsDropDown sharedStates={sharedStates} />
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
                <Houses sharedStates={sharedStates} />

            </section>
        </>
    )
}

export default MainSection
