import { useState } from 'react'
import UserClock from './components/user/UserClock';
import ClockForm from './components/Client/ClockForm';
import Clock from './components/Client/Clock';
import generateID from './utils/uniqueId';
import CustomDiv from './components/ui/CustomDiv';
import CustomButton from './components/ui/CustomButton';

const getID = generateID();


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

    return (
        <div>
            <div>
                <h1 style={{fontFamily:'Arial', textAlign:'center'}}>TrackZone</h1>

                <CustomDiv>
                    <UserClock updateUserZone={updateUserZone}/>

                    {/* Genrating form to make new Clock */}
                    <CustomButton onClick={handleNewClockGenerating}>Create New Clock</CustomButton>
                    {
                        newClockGenerating && (
                            <ClockForm addNewClock={addNewClock} clockID={getID.next().value}/>
                        )
                    }
                </CustomDiv>

                {/* Showing all clocks */}
                {
                    clocks.length > 0 && clocks.map((item) => {
                        return (
                            <Clock key={item.clockid} userZone={userZone} updateClock={updateClock} deleteClock={deleteClock} clockid={item.clockid} title={item.title} name={item.name} timezone={item.timezone}/>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default App;