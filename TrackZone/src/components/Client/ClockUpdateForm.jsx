import { useState, useEffect } from "react";
import CustomButton from "../ui/CustomButton";
import { CustomForm, CustomInput, CustomLabel, CustomSelect } from "../ui/CustomForm";

const ClockUpdateForm = ({handleUpdateClock, clock}) => {
    const [updatedClock, setUpdatedClock] = useState({...clock});
    const [errors, setErrors] = useState({title: '', name: '', timezone: ''});
    const [blurs, setBlurs] = useState({title: false, name: false, timezone: false});
    const [hasError, setHasError] = useState(true);

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

    const handleBlur = (e) => {
        setBlurs({
            ...blurs,
            [e.target.name]: true
        });
    }

    const errorUpdate = () => {
        let errors = {};
        if(updatedClock.title === ''){
            errors.title = 'This field is required';
        }else{
            errors.title = '';
        }
        if(updatedClock.name === ''){
            errors.name = 'This field is required';
        }else{
            errors.name = '';
        }
        if(updatedClock.timezone === ''){
            errors.timezone = 'This field is required';
        }else{
            errors.timezone = '';
        }
        setErrors({...errors});
        if(errors.title === '' && errors.name === '' && errors.timezone === ''){
            setHasError(false);
        }else{
            setHasError(true);
        }
    }

    useEffect(() => {
        errorUpdate();
    },[updatedClock]);

    return (
        <CustomForm onSubmit={handleSubmit}>
            <div>
                <CustomLabel htmlFor="title">Enter Title: </CustomLabel>
                <CustomInput type="text" name="title" id="title" value={updatedClock.title} onChange={handleInputChange} onBlur={handleBlur}/>
                <p style={{color:'red'}}>{(errors.title != '' && blurs.title) && errors.title}</p>
            </div>
            <div>
                <CustomLabel htmlFor="name">Enter Name: </CustomLabel>
                <CustomInput type="text" name="name" id="name" value={updatedClock.name} onChange={handleInputChange} onBlur={handleBlur}/>
                <p style={{color:'red'}}>{(errors.name != '' && blurs.name) && errors.name}</p>
            </div>
            <div>
                <CustomLabel htmlFor="timezone">Select Timezone: </CustomLabel>
                <CustomSelect name="timezone" id="timezone" value={updatedClock.timezone} onChange={handleInputChange} onBlur={handleBlur}>
                    {
                        Intl.supportedValuesOf('timeZone').map((item, index) => {
                            return (
                                <option key={index} value={item}>{item}</option>
                            )
                        })
                    }
                </CustomSelect>
                <p style={{color:'red'}}>{(errors.timezone != '' && blurs.timezone) && errors.timezone}</p>
            </div>
            <CustomButton disabled={hasError} size='sm' type="submit">Save Changes</CustomButton>
        </CustomForm>
    )

}

export default ClockUpdateForm;