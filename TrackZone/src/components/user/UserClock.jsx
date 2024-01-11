import { useEffect, useState } from "react";

const UserClock = () => {

    const [userTimezone, setUserTimezone] = useState('Asia/Dhaka');
    const [zonedDate, setZonedDate] = useState(new Date().toLocaleString('en-US', { timeZone: userTimezone }));
    const [editMode, setEditMode] = useState(false);

    const handleEditMode = () => {
        setEditMode(true);
    }

    const handleSaveChanges = () => {
        setEditMode(false);
    }

    const handleTimezoneChange = (e) => {
        setUserTimezone(e.target.value);
        setZonedDate(new Date().toLocaleString('en-US', { timeZone: e.target.value }));
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setZonedDate(new Date().toLocaleString('en-US', { timeZone: userTimezone }));
        }, 100);

        return () => clearInterval(interval);
    }, [])

    return (
        <div>
            <h3>Your Clock time is - </h3>
            <p>{userTimezone}</p>
            <p>{zonedDate}</p>
            <button disabled={editMode} onClick={handleEditMode}>Edit</button>
            {
                editMode && (
                    <div>
                        <p>Select Your TimeZone</p>
                        <select name="timezone" id="timezone" onChange={handleTimezoneChange}>
                            {
                                Intl.supportedValuesOf('timeZone').map((item, index) => {
                                    return (
                                        <option key={index} value={item}>{item}</option>
                                    )
                                })
                            }
                        </select>
                        <button onClick={handleSaveChanges}>Save Changes</button>
                    </div>
                )
            }
        </div>
    )
}

export default UserClock;