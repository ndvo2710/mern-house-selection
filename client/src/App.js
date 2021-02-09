import { useState } from "react";
import MainSection from './components/MainSection';
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
    const [dsReloadCount, setdsReloadCount] = useState(0);
    const dsReloadCountIncrement = () => setdsReloadCount(dsReloadCount + 1);
    const [houseReloadCount, sethouseReloadCount] = useState(0);
    const houseReloadCountIncrement = () => sethouseReloadCount(houseReloadCount + 1);
    const [dropDownValue, setDropDownValue] = useLocalStorage('dsDropdown', '');
    const updateDropDownValue = (value) => setDropDownValue(value);
    const [SpinnerToggle, setSpinnerToggle] = useState(false);
    const updateSpinnerToogle = (value) => setSpinnerToggle(value);

    const sharedStates = {
        dsReloadCount,
        dsReloadCountIncrement,
        houseReloadCount,
        houseReloadCountIncrement,
        dropDownValue,
        updateDropDownValue,
        SpinnerToggle,
        updateSpinnerToogle
    }

    return (
        <div className="app">
            <MainSection sharedStates={sharedStates} />
        </div>
    );
}

export default App;
