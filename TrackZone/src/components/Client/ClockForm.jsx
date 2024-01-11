import { useState } from "react";

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
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Enter Title: </label>
            <input type="text" name="title" id="title" onChange={handleInputChange}/>
            <label htmlFor="name">Enter Name: </label>
            <input type="text" name="name" id="name"  onChange={handleInputChange}/>
            <label htmlFor="timezone">Select Timezone: </label>
            <select name="timezone" id="timezone" onChange={handleInputChange}>
                {
                    Intl.supportedValuesOf('timeZone').map((item, index) => {
                        return (
                            <option key={index} value={item}>{item}</option>
                        )
                    })
                }
            </select>
            <input type="submit" value="Save Clock" />
        </form>
    )
}

export default ClockForm;