import styles from "./SingleEvent.module.css";

interface SingleEventProps {
  id: number;
  title: string;
  date: string;
  city: string;
  handleDelete: (id: number) => void;
}

const SingleEvent: React.FC<SingleEventProps> = ({
  title,
  date,
  city,
  id,
  handleDelete,
}) => {
  const handleClick = () => {
    handleDelete(id);
  };
  return (
    <li className={styles.container}>
      <h3 className={styles.title}>{title}</h3>

      <p className={styles.info}>
        {date} - {city}
      </p>
      <button onClick={handleClick} className={styles.btn}>
        delete event
      </button>
    </li>
  );
};

export default SingleEvent;
