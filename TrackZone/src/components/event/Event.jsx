import { useState } from "react";
import EventUpdateForm from "./EventUpdateForm";
import CustomButton from "../ui/CustomButton";
import { CustomEventDiv } from "../ui/CustomDiv";

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
        <CustomEventDiv>
            <h4>{event.title}</h4>
            {/* <p>{event.eventid}</p> */}
            <p>{event.description}</p>
            <p>{event.date}</p>
            <p>{event.time}</p>
            <CustomButton size='sm' onClick={handleUpdateEventGenerating}>Update Event</CustomButton>
            {
                updatingEvent && (
                    <EventUpdateForm handleUpdateEvent={handleUpdateEvent} event={event}/>
                )
            }
            <CustomButton size='sm' onClick={handleDeleteEvent}>Delete Event</CustomButton>
        </CustomEventDiv>
    )
}


export default Event;