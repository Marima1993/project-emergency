import React, { useState } from "react";
import { Link } from "wouter";
import Navbarmobil from "./components/Navbarmobil";

const AddEvent = ({ onAddEvent }) => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventImage, setEventImage] = useState(null);
  const [eventLocation, setEventLocation] = useState("");

  const handleImageChange = (event) => {
    setEventImage(event.target.files[0]);
    console.log(event.target.files[0].name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newEvent = {
      id: Date.now(),
      name: eventName,
      date: eventDate,
      time: eventTime,
      description: eventDescription,
      image: URL.createObjectURL(eventImage),
      location: eventLocation,
    };

    onAddEvent(newEvent);
  };

  return (
    <div>
      <Navbarmobil title="Add Event" label="Leipzig Treffen" />
      <div className="bg-yellow-300 p-4 rounded-lg shadow-md max-w-xs mx-auto mt-4 font-Raleway font-semibold text-lg">
        <div className="bg-white bg-opacity-50 p-4 rounded-md mb-4">
          <h2 className="text-center text-lg font-semibold mb-2">
            Upload Image
          </h2>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
            className="block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-semibold">Event Name:</label>
            <input
              type="text"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold">Date:</label>
            <input
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-600"
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold">Time:</label>
            <input
              type="time"
              value={eventTime}
              onChange={(e) => setEventTime(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-600"
            />
          </div>
          <div className="mb-4 relative">
            <label className="block font-semibold">Location:</label>
            <input
              type="text"
              value={eventLocation}
              onChange={(e) => setEventLocation(e.target.value)}
              placeholder="Event Location"
              required
              className="block w-full border border-gray-300 rounded-md p-2 pr-10"
            />
            <svg
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 3.53 7 11 7 11s7-7.47 7-11c0-3.87-3.13-7-7-7zm0 15c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
            </svg>
          </div>
          <div className="mb-4">
            <label className="block font-semibold">Description:</label>
            <textarea
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
              placeholder="Event Description"
              required
              className="mt-1 block w-full h-56 border border-gray-300 rounded-md p-2"
            />
          </div>
        </form>
      </div>

      <div className="flex justify-between mx-4 mb-4">
        <Link to="/events">
          <div className="back-button flex items-center justify-center text-white py-2 px-4 rounded-md">
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
                d="M26.5757 16.105L25.4917 15.021C25.0327 14.562 24.2905 14.562 23.8364 15.021L14.3442 24.5083C13.8853 24.9673 13.8853 25.7095 14.3442 26.1636L23.8364 35.6558C24.2954 36.1147 25.0376 36.1147 25.4917 35.6558L26.5757 34.5718C27.0396 34.1079 27.0298 33.3511 26.5562 32.897L20.6724 27.2915H34.7056C35.355 27.2915 35.8774 26.769 35.8774 26.1196V24.5571C35.8774 23.9077 35.355 23.3853 34.7056 23.3853H20.6724L26.5562 17.7798C27.0347 17.3257 27.0444 16.5688 26.5757 16.105Z"
                fill="white"
              />
            </svg>
          </div>
        </Link>

        <button
          type="submit"
          className="add-event-button flex items-center justify-center text-white py-2 px-4 rounded-md"
          onClick={handleSubmit}
        >
          <svg
            width="56"
            height="50"
            viewBox="0 0 56 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="49" height="50" rx="24.5" fill="#1639F3" />
            <path
              d="M21.4911 34.2766L13.3661 26.1516C12.878 25.6635 12.878 24.8721 13.3661 24.3839L15.1338 22.6161C15.622 22.1279 16.4135 22.1279 16.9016 22.6161L22.375 28.0894L34.0984 16.3661C34.5865 15.878 35.378 15.878 35.8662 16.3661L37.6339 18.1339C38.122 18.622 38.122 19.4135 37.6339 19.9016L23.2589 34.2767C22.7707 34.7648 21.9792 34.7648 21.4911 34.2766Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AddEvent;
