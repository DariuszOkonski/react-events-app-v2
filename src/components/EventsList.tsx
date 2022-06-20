import { Event } from "../data/EventsList";
import styles from "./EventsList.module.css";
import SingleEvent from "./SingleEvent";

interface EventsListProps {
  eventsList: Event[];
  handleDelete: (id: number) => void;
}

const EventsList: React.FC<EventsListProps> = ({
  eventsList,
  handleDelete,
}) => {
  return (
    <div className={styles.container}>
      {eventsList.length ? (
        <>
          <h3 className={styles.title}>Events list</h3>
          <ul>
            {eventsList.map((element) => (
              <SingleEvent
                key={element.id}
                {...element}
                handleDelete={handleDelete}
              />
            ))}
          </ul>
        </>
      ) : (
        <h3 className={styles.title}>No data to display</h3>
      )}
    </div>
  );
};

export default EventsList;
