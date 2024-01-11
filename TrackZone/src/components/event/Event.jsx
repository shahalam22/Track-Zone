import { useState } from "react";
import EventUpdateForm from "./EventUpdateForm";

const Event = ({updateEvent, deleteEvent, eventid, title, description, date, time}) => {
    const [event, setEvent] = useState({eventid: eventid, title: title, description: description, date: date, time: time});
    const [updatingEvent, setUpdatingEvent] = useState(false);

    const handleDeleteEvent = () => {
        deleteEvent(event.eventid);
    }

    const handleUpdateEvent = (updatedEvent) => {
        setEvent(updatedEvent);
        updateEvent(event.eventid, event);
        setUpdatingEvent(false);
    }

    const handleUpdateEventGenerating = () => {
        setUpdatingEvent(true);
    }

    return (
        <div>
            <h4>{event.title}</h4>
            <p>{event.eventid}</p>
            <p>{event.description}</p>
            <p>{event.date}</p>
            <p>{event.time}</p>
            <button onClick={handleUpdateEventGenerating}>Update Event</button>
            {
                updatingEvent && (
                    <EventUpdateForm handleUpdateEvent={handleUpdateEvent} event={event}/>
                )
            }
            <button onClick={handleDeleteEvent}>Delete Event</button>
        </div>
    )
}


export default Event;