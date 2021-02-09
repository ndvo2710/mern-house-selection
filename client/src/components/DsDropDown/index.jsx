import React, { useEffect, useState } from 'react';
import { Col, FormGroup, Input } from "reactstrap";


function DsDropDown({ sharedStates }) {
    const [dsList, setDsList] = useState([]);



    useEffect(() => {
        async function fetchDS() {
            // const DS_API_URL = 'http://localhost:5000/fetch-ds';
            const DS_API_URL = 'https://mern-house-selection.herokuapp.com/fetch-ds';
            const res = await fetch(DS_API_URL);
            const data = await res.json();
            console.log('Fetching Ds');
            console.log(data.success);
            setDsList(data.success);
        }

        (fetchDS)();


        return () => {
            // cleanup
        }
    }, [
        sharedStates.dsReloadCount // dummy state for re-rendering ds
    ]);


    return (
        <Col className="pl-lg-0" sm="2" xs="9">
            <FormGroup>
                <Input
                    data-trigger=""
                    id="choices-single-default"
                    name="choices-single-default"
                    type="select"
                    value={sharedStates.dropDownValue}
                    onChange={e => sharedStates.updateDropDownValue(e.target.value)}
                    onBlur={e => sharedStates.updateDropDownValue(e.target.value)}
                    disabled={!dsList.length}
                >
                    <option placeholder="true" disabled>Houses with Date start from</option>
                    {dsList.map((dsItem, i) =>
                        <option key={i} value={dsItem.ds}>{dsItem.ds}</option>)}
                </Input>

            </FormGroup>
        </Col>
    )
}

export default DsDropDown
