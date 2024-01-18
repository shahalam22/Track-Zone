import { useState } from 'react'


const App = () => {
    const [userZone, setUserZone] = useState('Asia/Dhaka');
    const [clocks, setClocks] = useState([]);
    const [newClockGenerating, setNewClockGenerating] = useState(false);

    // Adding new clock function
    const addNewClock = (clock) => {
        setClocks([clock, ...clocks]);
        setNewClockGenerating(false);
    }

    // Function to handle new clock generating
    const handleNewClockGenerating = () => {
        setNewClockGenerating(true);
    }

    // Update User Zone
    const updateUserZone = (zone) => {
        setUserZone(zone);
    }
    
    // Clock deleting function
    const deleteClock = (id) => {
        setClocks(clocks.filter((item) => item.clockid !== id));
    }

    // Clock updating function
    const updateClock = (id, updatedClock) => {
        const updatedClocks = clocks.map((item) => {
            return item.clockid === id ? {
                ...item,
                title: updatedClock.title,
                name: updatedClock.name,
                timezone: updatedClock.timezone
            } : item;
        });
        setClocks(updatedClocks);
    }

    return {
        userZone,
        clocks,
        newClockGenerating,
        addNewClock,
        handleNewClockGenerating,  
        updateUserZone,
        deleteClock,
        updateClock
    }
}

export default App;