import React, { useEffect, useState } from "react";
import "./LoadingPage.css";
import EventList from "./EventList";
import { Redirect } from "wouter";

function LoadingPage({ initialEvents }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) {
    return <Redirect to="/events" />;
  }

  return (
    <>
      <div className="h-screen bg-gradient-to-b from-custom-blue via-custom-blue to-custom-yellow flex items-center justify-center">
        <h1 className="loading-text font-Raleway text-4xl text-white font-bold">
          {Array.from("LeipzigTreffen").map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </h1>
      </div>
    </>
  );
}

export default LoadingPage;
