import { formatDistance, set } from "date-fns";
import useCLock from "../../hooks/useClock";
import ClockActions from "../shared/clock-actions";
import ClockDisplay from "../shared/clock-display";
import useTimer from "../../hooks/useTimer";
import EventList from "../event-list";
import EventActions from "../shared/event-actions";


const ClockListItem = ({clock, updateClock, deleteClock, localClock, events, createEvent, updateEvent, deleteEvent}) => {
    const { date } = useCLock(clock.timezone, clock.offset);
    const timer = useTimer(date);

    if(!date || !timer) return null;

    const createEventbyClock = (event) => {
        event.clockId = clock.id;
        createEvent(event);
    }

    return(
        <div>
            <ClockDisplay
                date = {timer}
                title = {clock.title}
                timezone = {clock.timezone}
                offset = {clock.offset}
                localClock={localClock}
            />
            <h3>{formatDistance(localClock, date)}</h3>
            <ClockActions
                clock={clock}
                updateClock={updateClock}
                deleteClock={deleteClock}
            />
            <br />
            <div>
                <EventActions insideClock={true} createEventbyClock={createEventbyClock}/>
                {
                    events.length === 0 ? (
                        <h3>No events found</h3>
                    ):(
                        <EventList events={events} updateEvent={updateEvent} deleteEvent={deleteEvent} />
                    )
                }
            </div>
        </div>
    )
}

export default ClockListItem;