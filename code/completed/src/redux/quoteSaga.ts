import { createAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import * as api from "../api/api";
import { QuoteModel } from "../models";
import { setQuote } from "./quoteSlice";

export const fetchQuoteAction = createAction("quote/fetch");

// Worker Saga: will be fired on actions of type: "quote/fetch"
function* fetchQuote() {
  try {
    const quote: QuoteModel = yield call(api.getRandomQuote);
    yield put(setQuote(quote));
  } catch (error) {
    console.error("Error fetching the quote...");
  }
}

/*
Watcher Saga
 takeEvery --> Allows concurrent fetches
 takeLatest --> Does not allow concurrent fetches
*/
function* fetchQuoteSaga() {
  yield takeLatest(fetchQuoteAction.type, fetchQuote);
}

export default fetchQuoteSaga;
