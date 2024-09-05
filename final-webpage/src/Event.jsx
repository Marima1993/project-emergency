import React from "react";
import { useParams, Link } from "wouter";
import Navbarmobil from "./components/Navbarmobil";

const Event = ({ events }) => {
  const { id } = useParams();
  const event = events.find((event) => event.id === parseInt(id));
  console.log(event, id, events);

  if (!event) {
    return <h2>Event not found</h2>;
  }
  function getImageUrl(name) {
    return new URL(`./concertimg/${name}`, import.meta.url).href;
  }
  return (
    <div>
      <Navbarmobil title="Event List" label="Leipzig Treffen" />
      <div className="event-detail p-4">
        <h1 className="text-2xl font-bold">{event.name}</h1>

        {/* Image is outside the yellow box */}
        {event.image && (
          <img
            src={getImageUrl(event.image)}
            alt={event.name}
            className="mb-4"
          />
        )}

        <p>Date: {event.date}</p>
        <p>Time: {event.time}</p>
        <p>Place: {event.location}</p>

        {/* Yellow box for description */}
        <div className="bg-yellow-300 p-4 rounded-md mt-4">
          <p className="font-semibold">Description:</p>
          <p>{event.description}</p>
        </div>

        <Link to="/events">
          <div className="back-button mt-4">
            <svg
              width="49"
              height="50"
              viewBox="0 0 49 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="49"
                height="50"
                rx="24.5"
                transform="matrix(1 0 0 -1 0 50)"
                fill="#1639F3"
              />
              <path
                d="M26.5757 16.105L25.4917 15.021C25.0327 14.562 24.2905 14.562 23.8364 15.021L14.3442 24.5083C13.8853 24.9673 13.8853 25.7095 14.3442 26.1636L23.8364 35.6558C24.2954 36.1147 25.0376 36.1147 25.4917 35.6558L26.5757 34.5718C27.0395 34.1079 27.0298 33.3511 26.5562 32.897L20.6724 27.2915H34.7056C35.355 27.2915 35.8774 26.769 35.8774 26.1196V24.5571C35.8774 23.9077 35.355 23.3853 34.7056 23.3853H20.6724L26.5562 17.7798C27.0347 17.3257 27.0444 16.5688 26.5757 16.105Z"
                fill="white"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Event;
