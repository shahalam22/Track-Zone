import { useState } from "react";

const EventUpdateForm = ({handleUpdateEvent, event}) => {
    const [updatedEvent, setUpdatedEvent] = useState(event);

    const handleChange = (e) => {
        setUpdatedEvent({
            ...updatedEvent,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleUpdateEvent(updatedEvent);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" value={updatedEvent.title} onChange={handleChange}/>
            <label htmlFor="description">Description</label>
            <input type="text" name="description" value={updatedEvent.description} onChange={handleChange}/>
            <label htmlFor="date">Date</label>
            <input type="text" name="date" value={updatedEvent.date} onChange={handleChange}/>
            <label htmlFor="time">Time</label>
            <input type="text" name="time" value={updatedEvent.time} onChange={handleChange}/>
            <input type="submit" value="Update Event"/>
        </form>
    )
}

export default EventUpdateForm;