import React from 'react';
import { Card, CardBody, CardTitle, Col } from "reactstrap";


function House({ houseClassName, houseData }) {
    return (
        <Col lg="3">
            <Card
                className="card-blog card-background"
                data-animation="zooming"
            >
                <div
                    className="full-background"
                    style={{
                        backgroundImage:
                            "url(" + houseData.imageLink + ")",
                    }}
                ></div>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <CardBody>
                        <div className="content-bottom">
                            <h3 className="card-category text-white opacity-8">
                                <strong>{houseData.price} - {houseData.status} </strong>
                            </h3>
                            <CardTitle tag="h5">{houseData.details}</CardTitle>
                            <CardTitle tag="h5"><strong>Monthly Mortgage:</strong> {houseData.monthlyMortgage}</CardTitle>
                            <CardTitle tag="h6">{houseData.address}</CardTitle>
                        </div>
                    </CardBody>
                </a>
            </Card>
        </Col>
    )
}

export default House
