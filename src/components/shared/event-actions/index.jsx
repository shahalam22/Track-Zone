import { useState } from "react";
import EventForm from "../event-form/index";
import { CustomButton, CustomH3 } from "../../ui/components";

const EventActions = ({insideClock = false ,event, updateEvent, deleteEvent, createEventbyClock}) => {

    const [isEdit, setIsEdit] = useState(false);
    const [isCreate, setIsCreate] = useState(false);

    const updateIsCreate = () => {
        setIsCreate(false);
    }

    const updateIsEdit = () => {
        setIsEdit(false);
    }


    return (
        <div>
            {!insideClock && <CustomButton onClick={() => setIsEdit(true)}>Edit</CustomButton>}
            {insideClock ?<CustomButton onClick={() => setIsCreate(true)}>Create New Event</CustomButton> : <CustomButton onClick={() => deleteEvent(event.id)}>Delete</CustomButton>}
            {
                isEdit && (
                    <>
                        <CustomH3>Edit Event</CustomH3>
                        <EventForm values={event} handleOperation={updateEvent} edit={true} updateView={updateIsEdit}/>
                    </>
                )
            }
            {
                isCreate && (
                    <>
                        <CustomH3>Create a new Event</CustomH3>
                        <EventForm handleOperation={createEventbyClock} updateView={updateIsCreate}/>
                    </>
                )
            }
        </div>
    )
}

export default EventActions;