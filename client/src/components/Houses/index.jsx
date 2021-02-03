import React, { useState } from 'react';
import { Button, Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, Row } from "reactstrap";
import HouseRow from '../HouseRow';



function Houses({ houses }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);


    console.log(houses);
    const numHousesOnRow = 3;
    const houseArrays = [];
    for (let i = 0; i < houses.length; i += numHousesOnRow) {
        houseArrays.push(houses.slice(i, i + numHousesOnRow));
    }
    console.log(houseArrays);


    return (
        <>
            <section className='blogs-2'>
                <Container fluid>
                    <Row className="align-items-left text-left">
                        <Col lg="8" xs="12">
                            <h1 className="display-3">
                                MERN House Selection Project
                                {/* <Col className="pl-lg-0" sm="4" xs="12">
                                    <Button block color="primary" type="submit">
                                        New Section
                                        </Button>

                                </Col> */}
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
                                    <Button block color="primary" type="submit">
                                        Add
                                        </Button>

                                </Col>
                                <Col className="pl-lg-0" sm="2" xs="9">
                                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                                        <DropdownToggle caret>
                                            Dropdown
                                    </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem header>Header</DropdownItem>
                                            <DropdownItem>Some Action</DropdownItem>
                                            <DropdownItem text>Dropdown Item Text</DropdownItem>
                                            <DropdownItem disabled>Action (disabled)</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>Foo Action</DropdownItem>
                                            <DropdownItem>Bar Action</DropdownItem>
                                            <DropdownItem>Quo Action</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>

                                </Col>
                                <Col className="pl-lg-0" sm="2" xs="9">
                                    <Button block color="primary" type="submit">
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
