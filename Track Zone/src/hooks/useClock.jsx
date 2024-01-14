import { useEffect, useState } from "react";
import { addMinutes } from "date-fns";
import { TIMEZONE_OFFSET } from "../constants/timezone";


const useCLock = (timezone, offset) => {    // user date, user timezone that is which type of time he wants e.g.(UTC, GMT, PST, EST) & offset
    const [localDate, setLocalDate] = useState(null);
    const [localOffset, setLocalOffset] = useState(0);
    const [localTimezone, setLocalTimezone] = useState('');
    const [utc, setUTC] = useState(null);

    useEffect(() => {
        let d = new Date();
        const lo = d.getTimezoneOffset();
        d = addMinutes(d, lo);
        setUTC(d);
        setLocalOffset(lo)
    }, [])

    useEffect(() => {
        if(utc !== null){
            if(timezone){
                offset = TIMEZONE_OFFSET[timezone] ?? offset;
                const newUTC = addMinutes(utc, offset);
                setLocalDate(newUTC);
            }else{
                const newUTC = addMinutes(utc, -localOffset);
                setLocalDate(newUTC);
                const dateStrArr = newUTC.toUTCString().split(' ')
                setLocalTimezone(dateStrArr[dateStrArr.length - 1]);
            }
        }

    }, [utc, timezone, offset])


    return {
        date: localDate,
        dateUtc: utc,
        offset: offset || -localOffset,
        timezone: timezone || localTimezone,
    }
}

export default useCLock;