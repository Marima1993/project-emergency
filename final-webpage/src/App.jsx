import React, { useState } from "react";
import "./App.css";
import { Route, Switch } from "wouter";
import LandingPage from "./LandingPage";
import LoadingPage from "./LoadingPage";
import EventList from "./EventList";
import AddEvent from "./AddEvent";
import Event from "./Event";

function App() {
  const [events, setEvents] = useState([
    {
      id: 1,
      name: "Die Eroberung des Atoms",
      image: "photo_5384126150378380708_y.jpg",
      date: "19.09.2024",
      time: "20:00",
      location: " Leipzig",
      description: `ABD IS BACK IN THE GAME AND TOGETHER WITH OMNI WE ENCOUNTER ALL ATOMS!!
    together with:
  
  CHERRY CHEEKS
  EGG OR HEN?-PUNK, ORLAAAAANDO
  https://cherrycheeks.bandcamp.com/album/cherry-radio
  
  KOSTENFALLE
  WAS HAT HEGEL AUF NEM TAPE DEMO ZU SUCHEN-NNDW, HAMHAMHAMBURG
  https://kostenfalle.bandcamp.com/album/demo
  
  we try to start sharp in time, but you know, sometimes Bands get Lost in Berlin and appear drunk at 1am at the venue.
  
  See ya!`,
    },
    {
      id: 2,
      name: "Record Release Party @ Ränch",
      image: "4a7a30ab-1da1-4fea-84b1-eb5c0b9716af.jpeg",
      date: "15-09-24",
      time: "18:00",
      location: " Leipzig",
      description: `Next big one at the Ränch next Thursday!!
    further infos as always:
    http://itr.root.sx/
    [save the dates for the next shows at the Ränch 18.9. + 8.10.]
    
    Sat, 15 Sept 2024
    vegan Küfa/dinner: 18h00 [Pasta Salad - as long as it lasts]
    Show: 20h00
    poster by I.L.L.O. 
    ________________________________________
    Giulio Erasmus & the end of the worm
    mutant discodub funk / BXL 
    BC
    ________________________________________
    Torx (tape release + splitter records label launch)
    crooked punk / Leipzig
    IG | BC
    ________________________________________
    Horizontaler Gentransfer
    exp. k-pop research / Stutti
    IG | SF
    ________________________________________
    NMT [bxl,be]
    new solo project of rébecca bonté, also part of the lo-fi pop duo acte bonté. Midlife aesthetic crisis with screaming attempts, various noise strata + velocious kick variations. Disjointed pop songs mainly guided by fear and shyness.
    SC | YT | IG
    ——————————————————
    +++ DJ Set by MR. DOWNSTAIRS +++`,
    },
    {
      id: 3,
      name: "Tech Conference",
      image: "https://via.placeholder.com/150",
      date: "2024-09-20",
      time: "09:00",
      location: " Leipzig",
      description: "Learn about the latest trends in technology.",
    },
  ]);
  const onAddEvent = (newEvent) => {
    console.log(newEvent);
    setEvents([...events, newEvent]);
  };
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route
        path="/LoadingPage"
        initialEvents={events}
        component={LoadingPage}
      />

      <Route
        path="/add-event"
        component={() => <AddEvent onAddEvent={onAddEvent} />}
      />
      <Route
        path="/events"
        component={() => (
          <EventList initialEvents={events} setEvents={setEvents} />
        )}
      />
      <Route path="/event/:id" component={() => <Event events={events} />} />
    </Switch>
  );
}

export default App;
