import styles from "./Modal.module.css";
import { useState } from "react";
import { Event } from "./../data/EventsList";

interface ModalProps {
  handleClose: () => void;
  handleAddElement: (obj: Event) => void;
}

const Modal: React.FC<ModalProps> = ({ handleClose, handleAddElement }) => {
  const [title, setTitle] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [city, setCity] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !date || !city) {
      return;
    }

    const tempObj: Event = {
      id: Math.floor(Math.random() * 1000),
      title,
      city,
      date,
    };

    handleAddElement(tempObj);

    handleClose();
  };

  return (
    <div className={styles.modal}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <span onClick={handleClose} className={styles.close}>
          x
        </span>
        <h3>Add New Event</h3>
        <label className={styles.label}>
          <span className={styles.span}>Event Title:</span>
          <input
            className={styles.input}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <span style={{ opacity: !title ? 1 : 0 }} className={styles.warning}>
            fill in this field
          </span>
        </label>
        <label className={styles.label}>
          <span className={styles.span}>Event Date:</span>
          <input
            className={styles.input}
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <span style={{ opacity: !date ? 1 : 0 }} className={styles.warning}>
            fill in this field
          </span>
        </label>
        <label className={styles.label}>
          <span className={styles.span}>Event Location:</span>
          <select
            onChange={(e) => setCity(e.target.value)}
            className={styles.input}
            value={city}
          >
            <option value="manchester">manchester</option>
            <option value="london">london</option>
            <option value="cardiff">cardiff</option>
          </select>
          <span style={{ opacity: !city ? 1 : 0 }} className={styles.warning}>
            fill in this field
          </span>
        </label>
        <button>submit</button>
      </form>
    </div>
  );
};

export default Modal;
