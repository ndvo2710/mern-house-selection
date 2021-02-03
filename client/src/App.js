import { useState } from "react";
import Houses from './components/Houses';
import mockData from "./mockData";

function App() {
    const [houseList, setHouseList] = useState(mockData)

    return (
        <div className="app">
            <Houses houses={houseList} />
        </div>
    );
}

export default App;
