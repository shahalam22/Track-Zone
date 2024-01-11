import { useState } from "react";

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
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Enter Title: </label>
            <input type="text" name="title" id="title" value={updatedClock.title} onChange={handleInputChange}/>
            <label htmlFor="name">Enter Name: </label>
            <input type="text" name="name" id="name" value={updatedClock.name} onChange={handleInputChange}/>
            <label htmlFor="timezone">Select Timezone: </label>
            <select name="timezone" id="timezone" value={updatedClock.timezone} onChange={handleInputChange}>
                {
                    Intl.supportedValuesOf('timeZone').map((item, index) => {
                        return (
                            <option key={index} value={item}>{item}</option>
                        )
                    })
                }
            </select>
            <input type="submit" value="Update Clock" />
        </form>
    )

}

export default ClockUpdateForm;