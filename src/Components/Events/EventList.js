import React, { useState } from "react";
import Event from "./Event";
import eventsData from "../../TestEventData";

function EventList({ token }) {
    const [events, setEvents] = useState(eventsData);

    const handleJoin = (eventId) => {
        // Check if the user is logged in (token is present)
        if (token) {
            const updatedEvents = events.map((event) => {
                if (event.id === eventId && event.people < 4) {
                    return { ...event, people: event.people + 1 };
                }
                return event;
            });
            setEvents(updatedEvents);
        } else {
            // Handle not logged in
            console.log("User is not logged in. Please log in to join events.");
        }
    };

    const handleLeave = (eventId) => {
        // Check if the user is logged in (token is present)
        if (token) {
            const updatedEvents = events.map((event) => {
                if (event.id === eventId && event.people > 0) {
                    return { ...event, people: event.people - 1 };
                }
                return event;
            });
            setEvents(updatedEvents);
        } else {
            // Handle not logged in
            console.log("User is not logged in. Please log in to leave events.");
        }
    };

    return (
        <div className="max-w-max">
            <h1 className="p-8 text-5xl text-cyan-300 font-semibold static">
                Upcoming Padel Events
            </h1>
            <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}>
                {events.map((event) => (
                    <div className={"m-6"}>
                        <Event
                            key={event.id}
                            event={event}
                            onJoin={handleJoin}
                            onLeave={handleLeave}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EventList;
