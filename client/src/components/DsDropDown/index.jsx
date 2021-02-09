import React, { useEffect, useState } from 'react';
import { Col } from "reactstrap";



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
    ])

    return (
        <Col className="pl-lg-0" sm="2" xs="9">
            <label htmlFor={"dsDropdown"}>
                {"Section start from:   "}

                <select
                    id={"dsDropdown"}
                    value={sharedStates.dropDownValue}
                    onChange={e => sharedStates.updateDropDownValue(e.target.value)}
                    onBlur={e => sharedStates.updateDropDownValue(e.target.value)}
                    disabled={!dsList.length}
                >
                    {dsList.map((dsItem, i) =>
                        <option key={i} value={dsItem.ds}>{dsItem.ds}</option>)}
                </select>
            </label>
        </Col>
    )
}

export default DsDropDown
