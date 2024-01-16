import { useEffect, useState } from "react";
import { generate } from "shortid";
import LocalClock from "./components/local-clock";
import ClockList from "./components/clock-list";
import useCLock from "./hooks/useClock";
import useEvents from "./hooks/useEvents";


const LOCAL_CLOCK_INIT = {
    title: 'My Clock',
    timezone: '',
    offset: 0,
    date: null,
};

const App = () => {
    const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });
    const [clocks, setClocks] = useState([]);

    

    const {getEvents, getEventByClockId, addEvent, deleteEvent, updateEvent, events} = useEvents();

    useEffect(() => {
        
        if(Object.keys(events).length === 0) {
            addEvent({title : 'test', clockId: '1'});
        }

        console.log('All events: ', getEvents());
        console.log('All events array: ', getEvents(true));
        console.log('Event by id: ', getEventByClockId('1', true));

    }, [events])



    // console.log(localClock.date);

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
            <ClockList localClock = {localClock.date} clocks={clocks} updateClock={updateClock} deleteClock={deleteClock}/>
        </div>
    )
}

export default App;