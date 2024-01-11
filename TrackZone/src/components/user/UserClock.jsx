import { useEffect, useState } from "react";
import CustomButton from "../ui/CustomButton";
import { CustomSelect } from "../ui/CustomForm";

const UserClock = ({updateUserZone}) => {

    const [userTimezone, setUserTimezone] = useState('Asia/Dhaka');
    const [zonedDate, setZonedDate] = useState(new Date().toLocaleString('en-US', { timeZone: userTimezone }));
    const [editMode, setEditMode] = useState(false);

    const handleEditMode = () => {
        setEditMode(true);
    }

    const handleSaveChanges = () => {
        updateUserZone(userTimezone);
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
    }, [zonedDate])

    return (
        <div>
            <h3>Your Clock time</h3>
            <p>{userTimezone}</p>
            <p>{zonedDate}</p>
            <CustomButton disabled={editMode} onClick={handleEditMode}>Edit</CustomButton>
            {
                editMode && (
                    <div>
                        <p>Select Your TimeZone</p>
                        <CustomSelect name="timezone" id="timezone" onChange={handleTimezoneChange}>
                            {
                                Intl.supportedValuesOf('timeZone').map((item, index) => {
                                    return (
                                        <option key={index} value={item}>{item}</option>
                                    )
                                })
                            }
                        </CustomSelect>
                        <CustomButton size='sm' onClick={handleSaveChanges}>Save Changes</CustomButton>
                    </div>
                )
            }
        </div>
    )
}

export default UserClock;