import { useState } from 'react'
import UserClock from './components/user/UserClock';
import ClockForm from './components/Client/ClockForm';
import Clock from './components/Client/Clock';


function* generateID(){
    let id = 0;
    while(true){
        yield id++;
    }
}

const getID = generateID();


const App = () => {
    const [clocks, setClocks] = useState([]);
    const [newClockGenerating, setNewClockGenerating] = useState(false);

    const addNewClock = (clock) => {
        setClocks([clock, ...clocks]);
        setNewClockGenerating(false);
    }

    console.log(clocks);

    const handleNewClockGenerating = () => {
        setNewClockGenerating(true);
    }
    
    const deleteClock = (id) => {
        setClocks(clocks.filter((item) => item.clockid !== id));
    }

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
                <h1>TrackZone</h1>

                <UserClock/>

                <button onClick={handleNewClockGenerating}>Create New Clock</button>
                {
                    newClockGenerating && (
                        <ClockForm addNewClock={addNewClock} clockID={getID.next().value}/>
                    )
                }
                {
                    clocks.length > 0 && clocks.map((item) => {
                        return (
                            <Clock key={item.clockid} updateClock={updateClock} deleteClock={deleteClock} clockid={item.clockid} title={item.title} name={item.name} timezone={item.timezone}/>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default App;