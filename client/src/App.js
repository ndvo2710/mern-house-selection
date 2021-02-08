import { useEffect, useState } from "react";
import Houses from './components/Houses';
import useLocalStorage from "./hooks/useLocalStorage";
import mockData from './mockData';

function App() {
  const [houseList, setHouseList] = useState(mockData);
  const [dsList, setDsList] = useState([]);
  const [dsReloadCount, setdsReloadCount] = useState(0);
  const dsReloadCountIncrement = () => setdsReloadCount(dsReloadCount + 1);
  const [houseReloadCount, sethouseReloadCount] = useState(0);
  const houseReloadCountIncrement = () => sethouseReloadCount(houseReloadCount + 1);
  const [dropDownValue, setDropDownValue] = useLocalStorage('dsDropdown', '');
  const updateDropDownValue = (value) => setDropDownValue(value);

  const sharedStates = {
    dsReloadCountIncrement,
    houseReloadCountIncrement,
    dropDownValue,
    updateDropDownValue
  }


  useEffect(() => {
    async function fetchHouses() {
      // const HOUSE_API_URL = `http://localhost:5000/fetch-zillow/${sharedStates.dropDownValue}`;
      const HOUSE_API_URL = `https://mern-house-selection.herokuapp.com/fetch-zillow/${sharedStates.dropDownValue}`;
      const res = await fetch(HOUSE_API_URL);
      const data = await res.json();
      console.log('Fetching Houses');
      console.log(data.success);
      setHouseList(data.success);
    }

    (fetchHouses)();

    return () => {
      // cleanup
    }
  }, [
    houseReloadCount, // dummy state for re-rendering ds
    sharedStates.dropDownValue
  ])

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
      <Houses houses={houseList} dsArray={dsList} sharedStates={sharedStates} />
    </div>
  );
}

export default App;
