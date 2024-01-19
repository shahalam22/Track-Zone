import { useState } from "react";
import ClockForm from "../clock-form";
import { CustomButton, CustomH3 } from "../../ui/components";


const ClockActions = ({local = false, clock, updateClock, createClock, deleteClock}) => {
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
            <CustomButton onClick={() => setIsEdit(!isEdit)}>Edit</CustomButton>
            { local ? <CustomButton onClick={() => setIsCreate(!isCreate)}>Create</CustomButton> : <CustomButton onClick={() => deleteClock(clock.id)}>Delete</CustomButton>}
            {
                isEdit && (
                    <>
                        <CustomH3>Edit Clock</CustomH3>
                        <ClockForm values={clock} handleClock={updateClock} title={!local} edit={true} updateView={updateIsEdit}/>
                    </>
                )
            }
            {
                isCreate && (
                    <>
                        <CustomH3>Create a new Clock</CustomH3>
                        <ClockForm handleClock={createClock} updateView={updateIsCreate}/>
                    </>
                )
            }
        </div>
    )
}

export default ClockActions;
