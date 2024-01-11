import { useState, useEffect } from "react";
import Event from "../event/Event";
import EventForm from "../event/EventForm";
import ClockUpdateForm from "./ClockUpdateForm";
import generateID from "../../utils/uniqueId";
import CustomClientDiv from "../ui/CustomClientDiv";
import CustomButton from "../ui/CustomButton";

const getID = generateID();

const Clock = ({updateClock, deleteClock,clockid, title, name, timezone}) => {
    const [clock, setClock] = useState({id: clockid, title: title, name: name, timezone: timezone, time: new Date().toLocaleString('en-US', { timeZone: timezone })});
    const [events, setEvents] = useState([]);
    const [newEventId, setNewEventId] = useState(0);
    const [updatingClock, setUpdatingClock] = useState(false);
    const [newEventGenerating, setNewEventGenerating] = useState(false);

    
    const handleAddEvent = (event) => {
        setEvents([...events, event]);
        setNewEventGenerating(false);
    };

    const handleNewEventGenerating = () => {
        setNewEventGenerating(true);
        setNewEventId(getID.next().value);
    };

    const handleDeleteClock = () => {
        deleteClock(clock.id);
    }

    const deleteEvent = (id) => {
        setEvents(events.filter((item) => item.eventid !== id));
    }

    const handleUpdateClock = (updatedClock) => {
        setClock(updatedClock);
        updateClock(clock.id, clock);
        setUpdatingClock(false);
    }

    const handleUpdateClockGenerating = () => {
        setUpdatingClock(true);
    }

    const updateEvent = (id, updatedEvent) => {
        const updatedEvents = events.map((item) => {
            return item.eventid === id ? {
                ...item,
                title: updatedEvent.title,
                description: updatedEvent.description,
                date: updatedEvent.date,
                time: updatedEvent.time
            } : item;
        });
        setEvents(updatedEvents);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setClock({
                ...clock,
                time: new Date().toLocaleString('en-US', { timeZone: clock.timezone })
            })
        }, 100);

        return () => clearInterval(interval);
    }, [clock]);


    return (
        <CustomClientDiv>
            <h2>{clock.title}</h2>
            {/* <p>{clock.id}</p> */}
            <p>{clock.name}</p>
            <p>{clock.timezone}</p>
            <p>{clock.time}</p>

            <CustomButton size='sm' onClick={handleUpdateClockGenerating}>Update Clock</CustomButton>
            {
                updatingClock && (
                    <ClockUpdateForm handleUpdateClock={handleUpdateClock} clock={clock}/>
                )
            }
            <CustomButton size='sm' onClick={handleDeleteClock}>Delete Clock</CustomButton>

            <CustomButton size='sm' onClick={handleNewEventGenerating}>Add New Event</CustomButton>
            {
                newEventGenerating && (
                    <EventForm addNewEvent={handleAddEvent} eventid={newEventId}/>
                )
            }
            {
                events.map((item) => {
                    return (
                        <Event key={item.eventid} updateEvent={updateEvent} deleteEvent={deleteEvent} eventid={item.eventid} title={item.title} description={item.description} date={item.date} time={item.time}/>
                    )
                })
            }
        </CustomClientDiv>
    )
}

export default Clock;