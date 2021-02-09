import React, { useEffect } from 'react';
import { Button, Col, Spinner } from "reactstrap";


function SpinnerSection({ sharedStates }) {
    useEffect(() => {
        console.log('Spinner Toggle: ', sharedStates.SpinnerToggle);
        if (sharedStates.SpinnerToggle) {
            document.getElementById("loading").style.visibility = "visible";
        } else {
            document.getElementById("loading").style.visibility = "hidden";
        }

        return () => {
            // cleanup
        }
    }, [
        sharedStates.SpinnerToggle
    ])



    return (
        <Col id="loading">
            <Button
                className="ml-1 mb-1"
                color="success"
                disabled
                size="sm-1"
                type="button"
            >
                <Spinner color="blue" type="grow" size="sm"></Spinner>
                <span>Loading...</span>
            </Button>
        </Col>
    )
}

export default SpinnerSection
