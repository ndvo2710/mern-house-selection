import React, { useState } from 'react';
import { Col, Input } from "reactstrap";
import houseUtil from '../../utils/houses';

function InputUrl({ sharedStates }) {

    const [inputValue, setInputValue] = useState('');

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
                sharedStates.updateSpinnerToogle(true);

                setTimeout(() => {
                    sharedStates.houseReloadCountIncrement();
                    console.log('House Reload Done');
                    sharedStates.updateSpinnerToogle(false);
                }, 18000);


            } else {
                console.log(response);
            }
        }
    }

    return (
        <Col lg="4" xs="12">
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
    )
}

export default InputUrl
