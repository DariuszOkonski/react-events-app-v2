import { useEffect, useState } from "react";
import "./App.css";
import EventsButtons from "./EventsButtons";
import Header from "./PrimaryHeader";
import { Event, eventsList } from "./../data/EventsList";

function App() {
  const [areEventsHidden, setAreEventsHidden] = useState<boolean>(false);
  const [events, setEvents] = useState<Event[]>();

  useEffect(() => {
    setEvents(eventsList());
  }, []);

  return (
    <div className="App">
      <Header
        title="Events in Your Area"
        description="All the latest events in Marioland"
      />

      <EventsButtons
        isHide={areEventsHidden}
        handleHide={() => setAreEventsHidden((prevState) => !prevState)}
      />
    </div>
  );
}

export default App;
