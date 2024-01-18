const init = {
    title: '', 
    description: '', 
    time: '', 
    date: ''
}

import { useEffect } from "react";
import { useState } from "react";

const EventForm = ({
        values = {clockId: '', title: '', description: '', time: '', date: ''}, 
        handleOperation, 
        edit = false, 
        updateView}) => 
{

    const [eventValues, setEventValues] = useState({...values});
    const [errors, setErrors] = useState({title: '', description: '', time: '', date: ''});
    const [blurs, setBlurs] = useState({title: false, description: false, time: false, date: false});
    const [hasError, setHasError] = useState(true);

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

    const handleBlur = (e) => {
        setBlurs({
            ...blurs,
            [e.target.name]: true
        });
    }

    const errorUpdate = () => {
        let errors = {};
        if(eventValues.title === ''){
            errors.title = 'This field is required';
        }else{
            errors.title = '';
        }
        if(eventValues.description === ''){
            errors.description = 'This field is required';
        }else{
            errors.description = '';
        }
        if(eventValues.time === ''){
            errors.time = 'This field is required';
        }else{
            errors.time = '';
        }
        if(eventValues.date === ''){
            errors.date = 'This field is required';
        }else{
            errors.date = '';
        }

        setErrors({...errors});
        if(errors.title === '' && errors.description === '' && errors.time === '' && errors.date === ''){
            setHasError(false);
        }else{
            setHasError(true);
        }
    }

    useEffect(() => {
        errorUpdate();
    }, [eventValues])
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Enter Event Title</label>
                <input type="text" id="title" name="title" value={eventValues.title} onChange={handleChange} onBlur={handleBlur}/>
                <p style={{color:'red'}}>{(errors.title != '' && blurs.title) && errors.title}</p>
            </div>
            <div>
                <label htmlFor="description">Enter Event Description</label>
                <input type="text" name="description" id="description" value={eventValues.description} onChange={handleChange} onBlur={handleBlur}/>
                <p style={{color:'red'}}>{(errors.description != '' && blurs.description) && errors.description}</p>
            </div>
            <div>
                <label htmlFor="time">Enter Event Time</label>
                <input type="time" name="time" id="time" value={eventValues.time} onChange={handleChange} onBlur={handleBlur}/>
                <p style={{color:'red'}}>{(errors.time != '' && blurs.time) && errors.time}</p>
            </div>
            <div>
                <label htmlFor="date">Enter Event Date</label>
                <input type="date" name="date" id="date" value={eventValues.date} onChange={handleChange} onBlur={handleBlur}/>
                <p style={{color:'red'}}>{(errors.date != '' && blurs.date) && errors.date}</p>
            </div>
        
            <button disabled={hasError}>{edit ? "Update" : "Create"}</button>
        </form>
    )
}

export default EventForm;
