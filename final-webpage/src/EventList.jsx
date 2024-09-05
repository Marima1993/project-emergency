import React, { useState } from "react";
import { Link } from "wouter";
import "./EventList.css";
import Navbarmobil from "./components/Navbarmobil";
import { Button } from "./components/Button";

function EventList({ initialEvents }) {
  const [events, setEvents] = useState(initialEvents);
  console.log(events, initialEvents);

  const handleAddEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  function getImageUrl(name) {
    return new URL(`./concertimg/${name}`, import.meta.url).href;
  }

  return (
    <div>
      <Navbarmobil
        title="Event List"
        label="Leipzig Treffen"
        backgroundColor="#f0f0f0"
      />

      {events.map((event) => (
        <div key={event.id} className="event-card font-Raleway">
          <h2>{event.name}</h2>
          <img src={getImageUrl(event.image)} alt={event.name} />
          <p>Date: {event.date}</p>
          <p>Time: {event.time}</p>
          <p>Place: {event.location}</p>
          <Link to={`/event/${event.id}`}>
            <Button primary label="Event Description" size="medium" />
          </Link>
        </div>
      ))}
      <Link to="/add-event">
        <button className="add-event-button">
          <svg
            width="49"
            height="50"
            viewBox="0 0 49 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="49" height="50" rx="24.5" fill="#1639F3" />
            <path
              d="M35.808 23.488V27.072H27.872V35.712H23.84V27.072H15.904V23.488H23.84V14.848H27.872V23.488H35.808Z"
              fill="white"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
}

export default EventList;
