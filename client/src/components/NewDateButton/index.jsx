import React from 'react';
import { Button, Col } from "reactstrap";
import houseUtil from '../../utils/houses';

function NewDateButton({ sharedStates }) {
    async function newDateClickHandle(updateDropdownCallback) {
        const response = await houseUtil.createDS();
        if ('success' in response.message) {
            sharedStates.dsReloadCountIncrement();
            updateDropdownCallback(response.value);
        } else {
            console.log(response.value);
        }
    }

    return (
        <Col className="pl-lg-0" sm="2" xs="9">
            <Button
                block color="primary"
                type="submit"
                className="new-section"
                onClick={e => newDateClickHandle(sharedStates.updateDropDownValue)}
            >
                New Date Section
            </Button>

        </Col>
    )
}

export default NewDateButton
