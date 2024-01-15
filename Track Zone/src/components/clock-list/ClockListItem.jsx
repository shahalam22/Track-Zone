import useCLock from "../../hooks/useClock";
import ClockActions from "../shared/clock-actions";
import ClockDisplay from "../shared/clock-display";

const ClockListItem = ({clock, updateClock, deleteClock}) => {
    const { date } = useCLock(clock.timezone, clock.offset);

    if(!date) return null;

    return(
        <div>
            <ClockDisplay
                date = {date}
                title = {clock.title}
                timezone = {clock.timezone}
                offset = {clock.offset}
            />
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