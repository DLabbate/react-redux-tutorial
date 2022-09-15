import { all } from "redux-saga/effects";
import fetchQuoteSaga from "../redux/quoteSaga";

export default function* rootSaga() {
  yield all([fetchQuoteSaga()]);
}
