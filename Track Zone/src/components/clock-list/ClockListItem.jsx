import { formatDistance } from "date-fns";
import useCLock from "../../hooks/useClock";
import ClockActions from "../shared/clock-actions";
import ClockDisplay from "../shared/clock-display";
import useTimer from "../../hooks/useTimer";

const ClockListItem = ({clock, updateClock, deleteClock, localClock}) => {
    const { date } = useCLock(clock.timezone, clock.offset);
    const timer = useTimer(date);

    if(!date || !timer) return null;

    return(
        <div>
            <ClockDisplay
                date = {timer}
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



// clock = {
//     id: 'c1',
//     title: 'test',
//     timezone: 'gmt',
//     offset: 360,
// }

// // way 1 to store events
// const events = [
//     {
//         id: 'e1',
//         clock: 'c1',
//     },
//     {
//         id: 'e2',
//         clock: 'c1',
//     },
//     {
//         id: 'e3',
//         clock: 'c1',
//     }
// ]

// // way 2 to store events
// const events2 = {
//     'e1': {},
//     'e2': {},
//     'e3': {},
// }

// // way 3 to store events
// const events3 = {
//     'c1': [],
//     'c2': [],
//     'c3': [],
// }

// ekhane protteck ta way tei amader kichu problem ache karon protitate 2 ta kore structure ashtese ekta clock er arekta event er jonno.
// ekhane amader emn vabe design kora lagbe jeno amra lower time complexity te amader desired output paite pari.

// MUST READ //
// ekhane arekta boro bepar holo amra EVENT and CLOCK ke alada rakhbo. 
// Then tader marge korte hobe. But clock er moddhe event ke store kora jabe 
// na vuleo. Karon amra jodi pore events er arekta create banaya oikhan theke 
// manipulate korte chai tokhon prottek clock theke dhore dhore event extrat 
// kora lagbe amader. Jeta onek time Complex + arekta issue hoilo event e kono 
// problem hoile tokhon amder clock o kaj korbe na. Ar jodi amra event ke alada 
// rakhi taile clock e hat na diyei amra event niye kaj korte pari.

// here we will use below way to store events
// const events = [
//     'c1_e1': {},
//     'c1_e2': {},
//     'c1_e3': {},
// ]