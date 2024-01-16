import ClockActions from "../shared/clock-actions";
import ClockDisplay from "../shared/clock-display";
import useCLock from "../../hooks/useClock";
import { useEffect } from "react";
import useTimer from "../../hooks/useTimer";


const LocalClock = ({clock, updateClock, createClock}) => {
    const {date, timezone, offset} = useCLock(clock.timezone, clock.offset);
    const timer = useTimer(date);

    useEffect(() => {
        updateClock({
            date,
            timezone,
            offset,
        })
    }, [date])

    // console.log(clock.title);

    return (
        <div>
            {timer && <ClockDisplay date={timer} title={clock.title} timezone={timezone} offset={offset}/>}
            <ClockActions local={true} clock={clock} updateClock={updateClock} createClock={createClock}/>
        </div>
    );
};

export default LocalClock;