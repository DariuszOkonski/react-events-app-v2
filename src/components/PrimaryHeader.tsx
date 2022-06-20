import styles from "./PrimaryHeader.module.css";

interface PrimaryHeaderProps {
  title: string;
  description: string;
}

const Header: React.FC<PrimaryHeaderProps> = ({ title, description }) => {
  return (
    <>
      <div className={styles.primaryHeader}>
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.description}>
        <h2 className={styles.descriptionItem}>{description}</h2>
      </div>
    </>
  );
};

export default Header;
