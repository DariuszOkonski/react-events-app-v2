import { useState } from "react";
import "./App.css";
import EventsButtons from "./EventsButtons";
import Header from "./PrimaryHeader";

function App() {
  const [areEventsHidden, setAreEventsHidden] = useState(false);

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
