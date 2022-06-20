import { useEffect, useState } from "react";
import "./App.css";
import EventsButtons from "./EventsButtons";
import Header from "./PrimaryHeader";
import { Event, eventsList } from "./../data/EventsList";
import EventsList from "./EventsList";

function App() {
  const [areEventsHidden, setAreEventsHidden] = useState<boolean>(false);
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    setEvents(eventsList());
  }, []);

  const handleDelete = (id: number) => {
    const tempEvents = events.filter((element) => element.id !== id);
    setEvents(tempEvents);
  };

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

      {areEventsHidden && (
        <EventsList eventsList={events} handleDelete={handleDelete} />
      )}
    </div>
  );
}

export default App;
