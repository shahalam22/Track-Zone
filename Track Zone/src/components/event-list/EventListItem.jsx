import EventActions from "../shared/event-actions";
import EventDisplay from "../shared/event-display";

const EventListItem = ({event, updateEvent, deleteEvent}) => {
    return(
        <div>
            <EventDisplay event={event}/>
            <EventActions event={event} updateEvent={updateEvent} deleteEvent={deleteEvent}/>
        </div>
    )
}

export default EventListItem;