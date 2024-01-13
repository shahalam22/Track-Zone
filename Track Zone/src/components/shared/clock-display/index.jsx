import { format } from 'date-fns';


const ClockDisplay = ({ title, date, timezone, offset}) => {

    const offsetHrs = offset / 60;

    return (
        <div>
            <h1>Title : { title }</h1>
            <h3>{ format(date, "dd-MM-yyyy hh:mm:ss aaaaa'm'") }</h3>
            <p>
                { timezone }
                { offsetHrs > 0 ? `+${Math.abs(offsetHrs)}` : `-${Math.abs(offsetHrs)}` }
            </p>
        </div>
    );
};

export default ClockDisplay;