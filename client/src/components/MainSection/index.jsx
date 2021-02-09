// import React from 'react';
import React from 'react';
import { Col, Container, Row } from "reactstrap";
import DsDropDown from '../DsDropDown';
import Houses from '../Houses';
import InputUrl from '../InputUrl';
import NewDateButton from '../NewDateButton';
import SpinnerSection from '../SpinnerSection';


function MainSection({ sharedStates }) {

    return (
        <>
            <section className='blogs-2'>
                <Container fluid>
                    <Row className="align-items-left text-left">
                        <Col lg="12" xs="12">
                            <h1 className="display-3">
                                MERN House Selection Project
                            </h1>
                            <Row className="row-input">
                                <InputUrl sharedStates={sharedStates} />
                                <DsDropDown sharedStates={sharedStates} />
                                <NewDateButton sharedStates={sharedStates} />
                                <SpinnerSection sharedStates={sharedStates} />
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
