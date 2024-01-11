import { useState } from "react";

const init = {
    title: '',
    description: '',
    date: '',
    time: '',
};

const EventForm = ({addNewEvent, eventid}) => {
    const [event, setEvent] = useState({...init, eventid: eventid});

    const handleInputChange = (e) => {
        setEvent({
            ...event, 
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewEvent(event);
        setEvent({...init});
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Enter Title: </label>
            <input type="text" name="title" id="title" onChange={handleInputChange}/>
            <label htmlFor="description">Enter Description: </label>
            <input type="text" name="description" id="description" onChange={handleInputChange}/>
            <label htmlFor="date">Enter Date: </label>
            <input type="date" name="date" id="date" onChange={handleInputChange}/>
            <label htmlFor="time">Enter Time: </label>
            <input type="time" name="time" id="time" onChange={handleInputChange}/>
            <input type="submit" value="Save Event" />
        </form>
    )
}

export default EventForm;