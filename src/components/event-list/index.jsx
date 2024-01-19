import EventListItem from "./EventListItem";

const EventList = ({events, updateEvent, deleteEvent, createEvent}) => {

    return (
        <div>
            <h3>Events</h3>
            { events.length === 0 ? (
                <p>There is no event, please create one first.</p>
            ) : (
                <ul>
                    {events.map(event => (
                        <EventListItem key={event.id} event={event} updateEvent={updateEvent} deleteEvent={deleteEvent} createEvent={createEvent}/>
                    ))}
                </ul>
            )}
        </div>
    )

}

export default EventList;