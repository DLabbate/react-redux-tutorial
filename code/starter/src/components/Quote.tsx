import styles from "./styles/Quote.module.css";

const Quote = () => {
  return (
    <div className={styles["quote-container"]}>
      <p className={styles["text"]}>"quote"</p>
      <p className={styles["author"]}>- author</p>
    </div>
  );
};

export default Quote;
