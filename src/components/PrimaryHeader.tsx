import styles from "./PrimaryHeader.module.css";

interface PrimaryHeaderProps {
  description: string;
}

const PrimaryHeader: React.FC<PrimaryHeaderProps> = ({ description }) => {
  return (
    <div className={styles.primaryHeader}>
      <h1 className={styles.title}>{description}</h1>
    </div>
  );
};

export default PrimaryHeader;
