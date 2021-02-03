import React from 'react';
import { Button, Col, Container, Input, Row } from "reactstrap";
import HouseRow from '../HouseRow';


function Houses({ houses }) {
    console.log(houses);
    const numHousesOnRow = 4;
    const houseArrays = [];
    for (let i = 0; i < houses.length; i += numHousesOnRow) {
        houseArrays.push(houses.slice(i, i + numHousesOnRow));
    }
    console.log(houseArrays);


    return (
        <>
            <section className='blogs-4'>
                <Container fluid>
                    <Row className="align-items-left text-left">
                        <Col lg="5" xs="12">
                            <h1 className="display-3">
                                MERN House Selection Project,
                                <span className="text-primary">Develop Anything.</span>
                                <Col className="pl-lg-0" sm="4" xs="12">
                                    <Button block color="primary" type="submit">
                                        New Section
                                        </Button>

                                </Col>
                            </h1>
                            <Row className="row-input">
                                <Col sm="8" xs="12">
                                    <Input
                                        aria-label="Your text"
                                        id="signupSrtext"
                                        name="text"
                                        placeholder="Zillow Page URL"
                                        type="text"
                                    ></Input>
                                </Col>
                                <Col className="pl-lg-0" sm="4" xs="12">
                                    <Button block color="primary" type="submit">
                                        Add
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
