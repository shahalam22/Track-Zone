import EventActions from "../shared/event-actions";
import EventDisplay from "../shared/event-display";
import { CustomEventItemDiv } from "../ui/components";

const EventListItem = ({event, updateEvent, deleteEvent}) => {
    return(
        <CustomEventItemDiv>
            <EventDisplay event={event}/>
            <EventActions event={event} updateEvent={updateEvent} deleteEvent={deleteEvent}/>
        </CustomEventItemDiv>
    )
}

export default EventListItem;