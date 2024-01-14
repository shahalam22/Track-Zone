import { useState } from "react";
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

    console.log(localClock.date);

    const updateLocalClock = (data) => {
        setLocalClock({
            ...localClock,
            ...data
        })
    }

    return (
        <div>
            <LocalClock clock={localClock} updateClock={updateLocalClock}/>
            <ClockList/>
        </div>
    )
}

export default App;