
const EventDisplay = ({event}) => {
    return(
        <div>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p><b>TIME:</b> {event.time}</p>
            <p><b>DATE:</b> {event.date}</p>
        </div>
    )
}

export default EventDisplay;