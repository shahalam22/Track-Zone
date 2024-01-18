import { useEffect, useState } from "react";
import { generate } from "shortid";
import LocalClock from "./components/local-clock";
import ClockList from "./components/clock-list";


const LOCAL_CLOCK_INIT = {
    title: 'My Clock',
    timezone: '',
    offset: 0,
    date: null,
};

const App = () => {
    const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });
    const [clocks, setClocks] = useState([]);
    const [events, setEvents] = useState([]);

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

    const createEvent = (event) => {
        event.id = generate();
        setEvents([...events, event]);
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

    const updateEvent = (updatedEvent) => {
        const updatedEvents = events.map(event => {
            if(event.id === updatedEvent.id) {
                return updatedEvent;
            }else{
                return event;
            }
        })
        setEvents(updatedEvents);
    }

    const deleteClock = (id) => {
        const updatedClocks = clocks.filter(clock => clock.id !== id);
        setClocks(updatedClocks);
    }

    const deleteEvent = (id) => {
        const updatedEvents = events.filter(event => event.id !== id);
        setEvents(updatedEvents);
    }

    

    return (
        <div>
            <LocalClock clock={localClock} updateClock={updateLocalClock} createClock={createClock}/>
            <ClockList localClock = {localClock.date} clocks={clocks} updateClock={updateClock} deleteClock={deleteClock} events={events} createEvent={createEvent} updateEvent={updateEvent} deleteEvent={deleteEvent}/>
        </div>
    )
}

export default App;