import ClockListItem from "./ClockListItem";

const ClockList = ({clocks, updateClock, deleteClock, localClock, events, createEvent, updateEvent, deleteEvent}) => {

    const getEventsByClock = (clockId) => {
        return events.filter(event => event.clockId === clockId);
    }

    return (
        <div>
            <h3>Other Clocks</h3>
            { clocks.length === 0 ? (
                <p>There is no clock, please create one first.</p>
            ) : (
                <ul>
                    {clocks.map(clock => (
                        <ClockListItem key={clock.id} localClock={localClock} clock={clock} updateClock={updateClock} deleteClock={deleteClock} events={getEventsByClock(clock.id)} createEvent={createEvent} updateEvent={updateEvent} deleteEvent={deleteEvent}/>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ClockList;