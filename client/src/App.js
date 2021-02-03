import { useEffect, useState } from "react";
import Houses from './components/Houses';
import mockData from './mockData';

const HOUSE_API_URL = 'http://localhost:5000/fetch-zillow/02-01-2021';


function App() {
    const [houseList, setHouseList] = useState(mockData);

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

    return (
        <div className="app">
            <Houses houses={houseList} />
        </div>
    );
}

export default App;
