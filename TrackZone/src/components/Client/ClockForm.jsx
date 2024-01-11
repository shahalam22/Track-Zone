import { useState } from "react";
import {CustomForm,  CustomInput,  CustomLabel, CustomSelect } from "../ui/CustomForm";
import CustomButton from "../ui/CustomButton";


const init = {
    clockid: '',
    title: '',
    name: '',
    timezone: ''
}

const ClockForm = ({addNewClock, clockID}) => {
    
    const [clock, setClock] = useState({...init, clockid: clockID});

    const handleInputChange = (e) => {
        setClock({
            ...clock, 
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewClock(clock);
        setClock({...init});
    }   

    return (
        <CustomForm onSubmit={handleSubmit}>
            <div>
                <CustomLabel htmlFor="title">Enter Title</CustomLabel>
                <CustomInput type="text" name="title" id="title" onChange={handleInputChange}/>
            </div>
            <div>
                <CustomLabel htmlFor="name">Enter Name</CustomLabel>
                <CustomInput type="text" name="name" id="name"  onChange={handleInputChange}/>
            </div>
            <div>
                <CustomLabel htmlFor="timezone">Select Timezone</CustomLabel>
                <CustomSelect name="timezone" id="timezone" onChange={handleInputChange}>
                    {
                        Intl.supportedValuesOf('timeZone').map((item, index) => {
                            return (
                                <option key={index} value={item}>{item}</option>
                            )
                        })
                    }
                </CustomSelect>
            </div>
            <CustomButton size='sm'>Save Clock</CustomButton>
        </CustomForm>
    )
}

export default ClockForm;