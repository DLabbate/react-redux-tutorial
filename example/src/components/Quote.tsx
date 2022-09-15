import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuoteAction } from "../redux/quoteSaga";
import { QuoteModel } from "../redux/quoteSlice";
import { RootState } from "../store/store";
import styles from "./styles/Quote.module.css";

const Quote = () => {
  const dispatch = useDispatch();
  const data: QuoteModel = useSelector((state: RootState) => state.quotes.data);

  useEffect(() => {
    dispatch(fetchQuoteAction());
  }, [dispatch]);

  return (
    <div className={styles["quote-container"]}>
      <p className={styles["quote"]}>"{data.quote}"</p>
      <p className={styles["author"]}>- {data.author}</p>
    </div>
  );
};

export default Quote;
