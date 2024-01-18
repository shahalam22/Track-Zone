import UserClock from './components/user/UserClock';
import ClockForm from './components/Client/ClockForm';
import Clock from './components/Client/Clock';
import generateID from './utils/uniqueId';
import {CustomDiv} from './components/ui/CustomDiv';
import CustomButton from './components/ui/CustomButton';
import useApp from './hooks/useApp';

const getID = generateID();


const App = () => {
    const {
        userZone,
        clocks,
        newClockGenerating,
        addNewClock,
        handleNewClockGenerating,  
        updateUserZone,
        deleteClock,
        updateClock} = useApp();

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