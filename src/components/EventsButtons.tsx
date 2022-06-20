import styles from "./EventsButtons.module.css";

interface EventsButtonsProps {
  isHide: boolean;
  handleHide: () => void;
}

const EventsButtons: React.FC<EventsButtonsProps> = ({
  isHide,
  handleHide,
}) => {
  return (
    <>
      {isHide ? (
        <button className={styles.EventsButtons} onClick={() => handleHide()}>
          hide events
        </button>
      ) : (
        <button className={styles.EventsButtons} onClick={() => handleHide()}>
          show events
        </button>
      )}
    </>
  );
};

export default EventsButtons;
