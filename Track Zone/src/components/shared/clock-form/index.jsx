import { useEffect, useState } from "react";
import { getOffset } from "../../../utils/timezone";
import { TIMEZONE_OFFSET } from "../../../constants/timezone";

const init = {
    title: '',
    timezone: 'GMT', 
    offset: '0'
}

const ClockForm = ({ values = {...init}, handleClock, title=true, edit=false, updateView }) => {

    const [formValues, setFormValues] = useState({...values});
    const [errors, setErrors] = useState({title: '', timezone: '', offset: ''});
    const [blurs, setBlurs] = useState({title: false, timezone: false, offset: false});
    const [hasError, setHasError] = useState(true);

    const handleChange = (e) => {
        let { name, value } = e.target;
        if(name === 'offset'){
            value = Number(value)*60;
        }
        setFormValues(prev =>({
            ...prev,
            [name]: value
        }))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        handleClock(formValues);
        setFormValues({...init});
        updateView();
    }
    
    const handleBlur = (e) => {
        setBlurs({
            ...blurs,
            [e.target.name]: true
        });
    }

    const errorUpdate = () => {
        let errors = {};
        if(formValues.title === ''){
            errors.title = 'This field is required';
        }else{
            errors.title = '';
        }
        if(formValues.timezone === ''){
            errors.timezone = 'This field is required';
        }else{
            errors.timezone = '';
        }
        if(formValues.offset === ''){
            errors.offset = 'This field is required';
        }else{
            errors.offset = '';
        }

        setErrors({...errors});
        if(errors.title === '' && errors.timezone === '' && errors.offset === ''){
            setHasError(false);
        }else{
            setHasError(true);
        }
    }

    useEffect(() => {
        errorUpdate();
    }, [formValues])
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Enter Title</label>
                <input type="text" id="title" name="title" value={formValues.title} onChange={handleChange} disabled={!title} onBlur={handleBlur}/>
                <p style={{color:'red'}}>{(errors.title != '' && blurs.title) && errors.title}</p>
            </div>
            <div>
                <label htmlFor="timezone">Enter Timezone </label>
                <select name="timezone" id="timezone" value={formValues.timezone} onChange={handleChange} onBlur={handleBlur}>
                    <option value="GMT">GMT</option>
                    <option value="UTC">UTC</option>
                    <option value="PST">PST</option>
                    <option value="EST">EST</option>
                    <option value="BST">BST</option>
                    <option value="MST">MST</option>
                </select>
                <p style={{color:'red'}}>{(errors.timezone != '' && blurs.timezone) && errors.timezone}</p>
            </div>
            <div>
                {(formValues.timezone === 'GMT' || formValues.timezone === 'UTC') && (
                    <div>
                        <label htmlFor="offset">Enter Offset </label>
                        <select id="offset" name="offset" value={formValues.offset/60} onChange={handleChange} onBlur={handleBlur}>
                            {getOffset().map(offset => (
                                <option key={offset} value={offset}>{ offset }</option>
                            ))}        
                        </select>
                        <p style={{color:'red'}}>{(errors.offset != '' && blurs.offset) && errors.offset}</p>
                    </div>
                )}
            </div>

            <button disabled={hasError}>{edit ? "Update" : "Create"}</button>
        </form>
    )
}


export default ClockForm;