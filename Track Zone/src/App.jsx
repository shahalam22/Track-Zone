import { useState } from "react";
import { generate } from "shortid";
import LocalClock from "./components/local-clock";
import ClockList from "./components/clock-list";
import useCLock from "./hooks/useClock";


const LOCAL_CLOCK_INIT = {
    title: 'My Clock',
    timezone: '',
    offset: 0,
    date: null,
};

const App = () => {
    const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });
    const [clocks, setClocks] = useState([]);

    console.log(localClock.date);

    const updateLocalClock = (data) => {
        setLocalClock({
            ...localClock,
            ...data
        })
    }

    const createClock = (clock) => {
        clock.id = generate();
        setClocks([...clocks, clock]);
    }

    const updateClock = (updatedClock) => {
        const updatedClocks = clocks.map(clock => {
            if(clock.id === updatedClock.id) {
                return updatedClock;
            }else 
                return clock;
        })
        setClocks(updatedClocks);
    }

    const deleteClock = (id) => {
        const updatedClocks = clocks.filter(clock => clock.id !== id);
        setClocks(updatedClocks);
    }

    return (
        <div>
            <LocalClock clock={localClock} updateClock={updateLocalClock} createClock={createClock}/>
            <ClockList clocks={clocks} updateClock={updateClock} deleteClock={deleteClock}/>
        </div>
    )
}

export default App;