import { useState } from "react";
import CustomButton from "../ui/CustomButton";
import { CustomForm, CustomInput, CustomLabel } from "../ui/CustomForm";

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
        <CustomForm onSubmit={handleSubmit}>
            <div>
                <CustomLabel htmlFor="title">Title</CustomLabel>
                <CustomInput type="text" name="title" value={updatedEvent.title} onChange={handleChange}/>
            </div>
            <div>
                <CustomLabel htmlFor="description">Description</CustomLabel>
                <CustomInput type="text" name="description" value={updatedEvent.description} onChange={handleChange}/>
            </div>
            <div>
                <CustomLabel htmlFor="date">Date</CustomLabel>
                <CustomInput type="text" name="date" value={updatedEvent.date} onChange={handleChange}/>
            </div>
            <div>
                <CustomLabel htmlFor="time">Time</CustomLabel>
                <CustomInput type="text" name="time" value={updatedEvent.time} onChange={handleChange}/>
            </div>
            <CustomButton size='sm'>Update</CustomButton>
        </CustomForm>
    )
}

export default EventUpdateForm;