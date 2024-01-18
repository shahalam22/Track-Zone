import { useEffect, useState } from "react";
import { getOffset } from "../../../utils/timezone";
import { TIMEZONE_OFFSET } from "../../../constants/timezone";

const init = {
    title: '',
    timezone: 'GMT', 
    offset: ''
}

const ClockForm = ({ values = {...init}, handleClock, title=true, edit=false, updateView }) => {

    const [formValues, setFormValues] = useState({...values});


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

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Enter Title</label>
                <input type="text" id="title" name="title" value={formValues.title} onChange={handleChange} disabled={!title} />
            </div>
            <div>
                <label htmlFor="timezone">Enter Timezone </label>
                <select name="timezone" value={formValues.timezone} onChange={handleChange}>
                    <option value="GMT">GMT</option>
                    <option value="UTC">UTC</option>
                    <option value="PST">PST</option>
                    <option value="EST">EST</option>
                    <option value="BST">BST</option>
                    <option value="MST">MST</option>
                </select>
            </div>
            <div>
                {(formValues.timezone === 'GMT' || formValues.timezone === 'UTC') && (
                    <div>
                        <label htmlFor="offset">Enter Offset </label>
                        <select id="offset" name="offset" value={formValues.offset/60} onChange={handleChange}>
                            {getOffset().map(offset => (
                                <option key={offset} value={offset}>{ offset }</option>
                            ))}        
                        </select>
                    </div>
                )}
            </div>

            <button>{edit ? "Update" : "Create"}</button>
        </form>
    )
}


export default ClockForm;