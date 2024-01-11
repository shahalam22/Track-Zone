import { useState, useEffect } from "react";
import CustomButton from "../ui/CustomButton";
import { CustomForm, CustomInput, CustomLabel } from "../ui/CustomForm";


const init = {
    title: '',
    description: '',
    date: '',
    time: '',
};

const EventForm = ({addNewEvent, eventid}) => {
    const [event, setEvent] = useState({...init, eventid: eventid});
    const [errors, setErrors] = useState({title: '', description: '', date: '', time: ''});
    const [blurs, setBlurs] = useState({title: false, description: false, date: false, time: false});
    const [hasError, setHasError] = useState(true);

    const handleInputChange = (e) => {
        setEvent({
            ...event, 
            [e.target.name]: e.target.value
        });
    };

    const handleBlur = (e) => {
        setBlurs({
            ...blurs,
            [e.target.name]: true
        });
    }

    const errorUpdate = () => {
        let errors = {};
        if(event.title === ''){
            errors.title = 'This field is required';
        }else{
            errors.title = '';
        }
        if(event.description === ''){
            errors.description = 'This field is required';
        }else{
            errors.description = '';
        }
        if(event.date === ''){
            errors.date = 'This field is required';
        }else{
            errors.date = '';
        }
        if(event.time === ''){
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
    },[event]);

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewEvent(event);
        setEvent({...init});
    };

    return (
        <CustomForm onSubmit={handleSubmit}>
            <div>
                <CustomLabel htmlFor="title">Enter Title: </CustomLabel>
                <CustomInput type="text" name="title" id="title" onChange={handleInputChange} onBlur={handleBlur}/>
                <p style={{color:'red'}}>{(errors.title != '' && blurs.title) && errors.title}</p>
            </div>
            <div>
                <CustomLabel htmlFor="description">Enter Description: </CustomLabel>
                <CustomInput type="text" name="description" id="description" onChange={handleInputChange} onBlur={handleBlur}/>
                <p style={{color:'red'}}>{(errors.description != '' && blurs.description) && errors.description}</p>
            </div>
            <div>
                <CustomLabel htmlFor="date">Enter Date: </CustomLabel>
                <CustomInput type="date" name="date" id="date" onChange={handleInputChange} onBlur={handleBlur}/>
                <p style={{color:'red'}}>{(errors.date != '' && blurs.date) && errors.date}</p>
            </div>
            <div>
                <CustomLabel htmlFor="time">Enter Time: </CustomLabel>
                <CustomInput type="time" name="time" id="time" onChange={handleInputChange} onBlur={handleBlur}/>
                <p style={{color:'red'}}>{(errors.time != '' && blurs.time) && errors.time}</p>
            </div>
            <CustomButton disabled={hasError} size='sm' type="submit">Save</CustomButton>
        </CustomForm>
    )
}

export default EventForm;