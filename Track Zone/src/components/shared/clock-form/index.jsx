import { useEffect, useState } from "react";
import { getOffset } from "../../../utils/timezone";
import { TIMEZONE_OFFSET } from "../../../constants/timezone";

const defaultOffsets = [
    -11.5, -11, -10.5, -10, -9.5, -9, -8.5, -8, -7.5, -7, -6.5, -6, -5.5, -5, -4.5, -4, -3.5, -3, -2.5, -2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4 ,4.5, 5, 5.5, 5.75, 6, 6.5
]

const ClockForm = ({ values = {title: '', timezone: 'GMT', offset: ''}, handleClock, title=true, edit=false }) => {

    const [formValues, setFormValues] = useState({...values});

    useEffect(() => {
        if(TIMEZONE_OFFSET[formValues.timezone]){
            setFormValues(prev => ({
                ...prev,
                offset: TIMEZONE_OFFSET[formValues.timezone]
            }));
        }
    }, [formValues.timezone])

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