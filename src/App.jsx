import useApp from "./hooks/useApp";
import LocalClock from "./components/local-clock";
import ClockList from "./components/clock-list";


const App = () => {
    const {localClock,
        clocks,
        events,
        updateLocalClock,
        createClock,
        createEvent,
        updateClock,
        updateEvent,
        deleteClock,
        deleteEvent,} = useApp();

    

    return (
        <div>
            <h1 style={{color: "#4F6F52", fontFamily: 'Verdana', fontSize: '3rem', margin:'25px 5px'}}>TRACK ZONE</h1>
            <LocalClock clock={localClock} updateClock={updateLocalClock} createClock={createClock}/>
            <ClockList localClock = {localClock.date} clocks={clocks} updateClock={updateClock} deleteClock={deleteClock} events={events} createEvent={createEvent} updateEvent={updateEvent} deleteEvent={deleteEvent}/>
        </div>
    )
}

export default App;