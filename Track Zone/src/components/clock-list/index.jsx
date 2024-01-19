import ClockListItem from "./ClockListItem";
import { CustomClockListDiv} from "../ui/components";

const ClockList = ({clocks, updateClock, deleteClock, localClock, events, createEvent, updateEvent, deleteEvent}) => {

    const getEventsByClock = (clockId) => {
        return events.filter(event => event.clockId === clockId);
    }

    return (
        <CustomClockListDiv>
            <h3>OTHER CLOCKS</h3>
            { clocks.length === 0 ? (
                <p>There is no clock, please create one first.</p>
            ) : (
                <div>
                    {clocks.map(clock => (
                        <ClockListItem key={clock.id} localClock={localClock} clock={clock} updateClock={updateClock} deleteClock={deleteClock} events={getEventsByClock(clock.id)} createEvent={createEvent} updateEvent={updateEvent} deleteEvent={deleteEvent}/>
                    ))}
                </div>
            )}
        </CustomClockListDiv>
    );
};

export default ClockList;