import { useState } from "react";
import EventForm from "../event-form/index";

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
            {!insideClock && <button onClick={() => setIsEdit(true)}>Edit</button>}
            {insideClock ?<button onClick={() => setIsCreate(true)}>Create</button> : <button onClick={() => deleteEvent(event.id)}>Delete</button>}
            {
                isEdit && (
                    <>
                        <h3>Edit Event</h3>
                        <EventForm values={event} handleOperation={updateEvent} edit={true} updateView={updateIsEdit}/>
                    </>
                )
            }
            {
                isCreate && (
                    <>
                        <h3>Create a new Event</h3>
                        <EventForm handleOperation={createEventbyClock} updateView={updateIsCreate}/>
                    </>
                )
            }
        </div>
    )
}

export default EventActions;