import ClockListItem from "./ClockListItem";

const ClockList = ({clocks, updateClock, deleteClock}) => {
    return (
        <div>
            <h3>Other Clocks</h3>
            { clocks.length === 0 ? (
                <p>There is no clock, please create one first.</p>
            ) : (
                <ul>
                    {clocks.map(clock => (
                        <ClockListItem key={clock.id} clock={clock} updateClock={updateClock} deleteClock={deleteClock}/>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ClockList;