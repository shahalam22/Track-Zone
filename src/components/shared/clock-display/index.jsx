import { format } from 'date-fns';
import { CustomClockDiv } from '../../ui/components';


const ClockDisplay = ({title, date, timezone, offset}) => {

    const offsetHrs = offset / 60;

    return (
        <CustomClockDiv>
            <h1>Title : { title }</h1>
            <h3>{ format(date, "dd-MM-yyyy hh:mm:ss aaaaa'm'") }</h3>
            <p>
                { timezone }
                { (timezone === 'GMT' || timezone === 'UTC') && (offsetHrs > 0 ? `+${Math.abs(offsetHrs)}` : `-${Math.abs(offsetHrs)}`) }
            </p>
        </CustomClockDiv>
    );
};

export default ClockDisplay;