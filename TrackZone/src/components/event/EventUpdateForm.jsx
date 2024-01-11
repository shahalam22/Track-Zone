import { useState, useEffect } from "react";
import CustomButton from "../ui/CustomButton";
import { CustomForm, CustomInput, CustomLabel } from "../ui/CustomForm";

const EventUpdateForm = ({handleUpdateEvent, event}) => {
    const [updatedEvent, setUpdatedEvent] = useState({...event});
    const [errors, setErrors] = useState({title: '', description: '', date: '', time: ''});
    const [blurs, setBlurs] = useState({title: false, description: false, date: false, time: false});
    const [hasError, setHasError] = useState(true);

    const handleChange = (e) => {
        setUpdatedEvent({
            ...updatedEvent,
            [e.target.name]: e.target.value
        });
    }

    const handleBlur = (e) => {
        setBlurs({
            ...blurs,
            [e.target.name]: true
        });
    }

    const errorUpdate = () => {
        let errors = {};
        if(updatedEvent.title === ''){
            errors.title = 'This field is required';
        }else{
            errors.title = '';
        }
        if(updatedEvent.description === ''){
            errors.description = 'This field is required';
        }else{
            errors.description = '';
        }
        if(updatedEvent.date === ''){
            errors.date = 'This field is required';
        }else{
            errors.date = '';
        }
        if(updatedEvent.time === ''){
            errors.time = 'This field is required';
        }else{
            errors.time = '';
        }

        setErrors({...errors});

        if(errors.title === '' && errors.description === '' && errors.date === '' && errors.time === ''){
            setHasError(false);
        }else{
            setHasError(true);
        }
    }

    useEffect(() => {
        errorUpdate();
    },[updatedEvent]);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleUpdateEvent(updatedEvent);
    }

    return (
        <CustomForm onSubmit={handleSubmit}>
            <div>
                <CustomLabel htmlFor="title">Title</CustomLabel>
                <CustomInput type="text" name="title" value={updatedEvent.title} onChange={handleChange} onBlur={handleBlur}/>
                <p style={{color:'red'}}>{(errors.title != '' && blurs.title) && errors.title}</p>
            </div>
            <div>
                <CustomLabel htmlFor="description">Description</CustomLabel>
                <CustomInput type="text" name="description" value={updatedEvent.description} onChange={handleChange} onBlur={handleBlur}/>
                <p style={{color:'red'}}>{(errors.description != '' && blurs.description) && errors.description}</p>
            </div>
            <div>
                <CustomLabel htmlFor="date">Date</CustomLabel>
                <CustomInput type="text" name="date" value={updatedEvent.date} onChange={handleChange} onBlur={handleBlur}/>
                <p style={{color:'red'}}>{(errors.date != '' && blurs.date) && errors.date}</p>
            </div>
            <div>
                <CustomLabel htmlFor="time">Time</CustomLabel>
                <CustomInput type="text" name="time" value={updatedEvent.time} onChange={handleChange} onBlur={handleBlur}/>
                <p style={{color:'red'}}>{(errors.time != '' && blurs.time) && errors.time}</p>
            </div>
            <CustomButton disabled={hasError} size='sm'>Update</CustomButton>
        </CustomForm>
    )
}

export default EventUpdateForm;