import { useEffect, useState } from "react";
import MainSection from './components/MainSection';
import useLocalStorage from "./hooks/useLocalStorage";
// import mockData from './mockData';

function App() {
    // const [houseList, setHouseList] = useState(mockData);
    const [dsList, setDsList] = useState([]);
    const [dsReloadCount, setdsReloadCount] = useState(0);
    const dsReloadCountIncrement = () => setdsReloadCount(dsReloadCount + 1);
    const [houseReloadCount, sethouseReloadCount] = useState(0);
    const houseReloadCountIncrement = () => sethouseReloadCount(houseReloadCount + 1);
    const [dropDownValue, setDropDownValue] = useLocalStorage('dsDropdown', '');
    const updateDropDownValue = (value) => setDropDownValue(value);

    const sharedStates = {
        dsReloadCount,
        dsReloadCountIncrement,
        houseReloadCount,
        houseReloadCountIncrement,
        dropDownValue,
        updateDropDownValue
    }


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
        dsReloadCount // dummy state for re-rendering ds
    ])



    return (
        <div className="app">
            {/* <MainSection houses={houseList} dsArray={dsList} sharedStates={sharedStates} /> */}
            <MainSection dsArray={dsList} sharedStates={sharedStates} />
        </div>
    );
}

export default App;
