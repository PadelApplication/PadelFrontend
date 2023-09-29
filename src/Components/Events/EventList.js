import React, {useState} from "react";
import Event from "./Event";
import eventsData from "../../TestEventData";

function EventList() {
    const [events, setEvents] = useState(eventsData);

    const handleJoin = (eventId) => {
        const updatedEvents = events.map((event) => {
            if (event.id === eventId && event.people < 4) {
                return { ...event, people: event.people + 1 };
            }
            return event;
        });

        setEvents(updatedEvents);
    };

    const handleLeave = (eventId) => {
        const updatedEvents = events.map((event) => {
            if (event.id === eventId && event.people > 0) {
                return { ...event, people: event.people - 1 };
            }
            return event;
        });

        setEvents(updatedEvents);
    };

    return (
        <div>
            <h1 className={"p-12 text-5xl text-cyan-300 font-semibold static"}>Upcoming Padel Events</h1>
            <div className={"flex flex-row"}>
                {events.map((event) => (
                    <div className={"m-6"}>
                    <Event key={event.id} event={event} onJoin={handleJoin} onLeave={handleLeave} />
                    </div>
                ))}
            </div>

        </div>

    );
}

export default EventList;




