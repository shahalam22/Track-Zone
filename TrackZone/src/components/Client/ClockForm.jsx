import { useEffect, useState } from "react";
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
    const [errors, setErrors] = useState({title: '', name: '', timezone: ''});
    const [blurs, setBlurs] = useState({title: false, name: false, timezone: false});
    const [hasError, setHasError] = useState(true);

    const handleInputChange = (e) => {
        setClock({
            ...clock, 
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
        if(clock.title === ''){
            errors.title = 'This field is required';
        }else{
            errors.title = '';
        }
        if(clock.name === ''){
            errors.name = 'This field is required';
        }else{
            errors.name = '';
        }
        if(clock.timezone === ''){
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
        console.log(hasError);
    },[clock])


    const handleSubmit = (e) => {
        e.preventDefault();
        addNewClock(clock);
        setClock({...init});
    }

    return (
        <CustomForm onSubmit={handleSubmit}>
            <div>
                <CustomLabel htmlFor="title">Enter Title</CustomLabel>
                <CustomInput type="text" name="title" id="title" onChange={handleInputChange} onBlur={handleBlur}/>
                <p style={{color:'red'}}>{(errors.title != '' && blurs.title) && errors.title}</p>
            </div>
            <div>
                <CustomLabel htmlFor="name">Enter Name</CustomLabel>
                <CustomInput type="text" name="name" id="name"  onChange={handleInputChange} onBlur={handleBlur}/>
                <p style={{color:'red'}}>{(errors.name != '' && blurs.name) && errors.name}</p>
            </div>
            <div>
                <CustomLabel htmlFor="timezone">Select Timezone</CustomLabel>
                <CustomSelect name="timezone" id="timezone" onChange={handleInputChange} onBlur={handleBlur}>
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
            <CustomButton disabled={hasError} size='sm'>Save Clock</CustomButton>
        </CustomForm>
    )
}

export default ClockForm;