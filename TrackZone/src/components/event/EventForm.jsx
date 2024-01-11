import { useState } from "react";
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
        <CustomForm onSubmit={handleSubmit}>
            <div>
                <CustomLabel htmlFor="title">Enter Title: </CustomLabel>
                <CustomInput type="text" name="title" id="title" onChange={handleInputChange}/>
            </div>
            <div>
                <CustomLabel htmlFor="description">Enter Description: </CustomLabel>
                <CustomInput type="text" name="description" id="description" onChange={handleInputChange}/>
            </div>
            <div>
                <CustomLabel htmlFor="date">Enter Date: </CustomLabel>
                <CustomInput type="date" name="date" id="date" onChange={handleInputChange}/>
            </div>
            <div>
                <CustomLabel htmlFor="time">Enter Time: </CustomLabel>
                <CustomInput type="time" name="time" id="time" onChange={handleInputChange}/>
            </div>
            <CustomButton size='sm' type="submit">Save</CustomButton>
        </CustomForm>
    )
}

export default EventForm;