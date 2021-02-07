import { useEffect, useState } from "react";
import Houses from './components/Houses';
import mockData from './mockData';

const HOUSE_API_URL = 'http://localhost:5000/fetch-zillow/02-01-2021';
const DS_API_URL = 'http://localhost:5000/fetch-ds';


function App() {
  const [houseList, setHouseList] = useState(mockData);
  const [dsList, setDsList] = useState([]);
  const [isDsReLoad, setIsDsReLoad] = useState(false);

  useEffect(() => {
    async function fetchHouses() {
      const res = await fetch(HOUSE_API_URL);
      const data = await res.json();
      console.log('Testing');
      console.log(data.success);
      setHouseList(data.success);
    }

    (fetchHouses)();

    return () => {
      // cleanup
    }
  }, [
    // input
  ])

  useEffect(() => {
    async function fetchDS() {
      const res = await fetch(DS_API_URL);
      const data = await res.json();
      console.log('Testing');
      console.log(data.success);
      setDsList(data.success);
    }

    (fetchDS)();

    return () => {
      // cleanup
    }
  }, [
    isDsReLoad // dummy for re-rendering ds
  ])



  return (
    <div className="app">
      <Houses houses={houseList} dsArray={dsList} setIsDsReLoad={setIsDsReLoad} />
    </div>
  );
}

export default App;
