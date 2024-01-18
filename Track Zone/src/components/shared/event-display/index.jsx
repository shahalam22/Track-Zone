const EventDisplay = ({event}) => {
    return(
        <div>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p>{event.time}</p>
            <p>{event.date}</p>
        </div>
    )
}

export default EventDisplay;