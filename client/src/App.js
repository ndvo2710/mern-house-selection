import { useState } from "react";
import MainSection from './components/MainSection';
import useLocalStorage from "./hooks/useLocalStorage";
// import mockData from './mockData';

function App() {
    // const [houseList, setHouseList] = useState(mockData);
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

    return (
        <div className="app">
            {/* <MainSection houses={houseList} dsArray={dsList} sharedStates={sharedStates} /> */}
            <MainSection sharedStates={sharedStates} />
        </div>
    );
}

export default App;
