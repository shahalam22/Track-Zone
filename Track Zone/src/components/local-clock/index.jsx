import ClockActions from "../shared/clock-actions";
import ClockDisplay from "../shared/clock-display";
import useCLock from "../../hooks/useClock";
import { useEffect } from "react";

const LocalClock = ({clock, updateClock}) => {
    const {date, timezone, offset} = useCLock(clock.timezone, clock.offset);

    useEffect(() => {
        updateClock({
            date,
            timezone,
            offset,
        })
    }, [date])

    console.log(clock.title);

    return (
        <div>
            {date && <ClockDisplay date={date} title={clock.title} timezone={timezone} offset={offset}/>}
            <ClockActions local={true} clock={clock} updateClock={updateClock}/>
        </div>
    );
};

export default LocalClock;