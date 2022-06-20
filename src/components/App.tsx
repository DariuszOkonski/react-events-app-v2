import { useEffect, useState } from "react";
import "./App.css";
import EventsButtons from "./EventsButtons";
import Header from "./PrimaryHeader";
import { Event, eventsList } from "./../data/EventsList";
import EventsList from "./EventsList";
import Modal from "./Modal";

function App() {
  const [areEventsHidden, setAreEventsHidden] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    setEvents(eventsList());
  }, []);

  const handleDelete = (id: number) => {
    const tempEvents = events.filter((element) => element.id !== id);
    setEvents(tempEvents);
  };

  const handleAddElement = (obj: Event) => {
    setEvents([obj, ...events]);
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

      {showModal && (
        <Modal
          handleClose={() => setShowModal(false)}
          handleAddElement={handleAddElement}
        />
      )}

      <div className="btn-container">
        <button onClick={() => setShowModal(true)}>Add New Event</button>
      </div>
    </div>
  );
}

export default App;
