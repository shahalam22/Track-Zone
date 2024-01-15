import { formatDistance } from "date-fns";
import useCLock from "../../hooks/useClock";
import ClockActions from "../shared/clock-actions";
import ClockDisplay from "../shared/clock-display";

const ClockListItem = ({clock, updateClock, deleteClock, localClock}) => {
    const { date } = useCLock(clock.timezone, clock.offset);

    if(!date) return null;

    return(
        <div>
            <ClockDisplay
                date = {date}
                title = {clock.title}
                timezone = {clock.timezone}
                offset = {clock.offset}
                localClock={localClock}
            />
            <h3>{formatDistance(localClock, date)}</h3>
            <ClockActions
                clock={clock}
                updateClock={updateClock}
                deleteClock={deleteClock}
            />
            <br />
        </div>
    )
}

export default ClockListItem;