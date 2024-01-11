import { useState } from "react";
import CustomButton from "../ui/CustomButton";
import { CustomForm, CustomInput, CustomLabel, CustomSelect } from "../ui/CustomForm";

const ClockUpdateForm = ({handleUpdateClock, clock}) => {
    const [updatedClock, setUpdatedClock] = useState({...clock});

    const handleInputChange = (e) => {
        setUpdatedClock({
            ...updatedClock, 
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleUpdateClock(updatedClock);
    }

    return (
        <CustomForm onSubmit={handleSubmit}>
            <div>
                <CustomLabel htmlFor="title">Enter Title: </CustomLabel>
                <CustomInput type="text" name="title" id="title" value={updatedClock.title} onChange={handleInputChange}/>
            </div>
            <div>
                <CustomLabel htmlFor="name">Enter Name: </CustomLabel>
                <CustomInput type="text" name="name" id="name" value={updatedClock.name} onChange={handleInputChange}/>
            </div>
            <div>
                <CustomLabel htmlFor="timezone">Select Timezone: </CustomLabel>
                <CustomSelect name="timezone" id="timezone" value={updatedClock.timezone} onChange={handleInputChange}>
                    {
                        Intl.supportedValuesOf('timeZone').map((item, index) => {
                            return (
                                <option key={index} value={item}>{item}</option>
                            )
                        })
                    }
                </CustomSelect>
            </div>
            <CustomButton size='sm' type="submit">Save Changes</CustomButton>
        </CustomForm>
    )

}

export default ClockUpdateForm;