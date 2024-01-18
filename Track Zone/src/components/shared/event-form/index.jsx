const init = {
    title: '', 
    description: '', 
    time: '', 
    date: ''
}

import { useState } from "react";

const EventForm = ({
        values = {clockId: '', title: '', description: '', time: '', date: ''}, 
        handleOperation, 
        edit = false, 
        updateView}) => 
{

    const [eventValues, setEventValues] = useState({...values});

    const handleChange = (e) => {
        let { name, value } = e.target;
        setEventValues(prev =>({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleOperation(eventValues);
        setEventValues({...init});
        updateView();
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Enter Event Title</label>
                <input type="text" id="title" name="title" value={eventValues.title} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="description">Enter Event Description</label>
                <input type="text" name="description" id="description" value={eventValues.description} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="time">Enter Event Time</label>
                <input type="time" name="time" id="time" value={eventValues.time} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="date">Enter Event Date</label>
                <input type="date" name="date" id="date" value={eventValues.date} onChange={handleChange}/>
            </div>
        
            <button>{edit ? "Update" : "Create"}</button>
        </form>
    )
}

export default EventForm;
