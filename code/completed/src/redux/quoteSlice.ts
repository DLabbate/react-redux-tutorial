import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuoteModel } from "../models";

interface QuoteState {
  data: QuoteModel;
}

const initialState: QuoteState = {
  data: { text: "", author: "" },
};

export const quoteSlice = createSlice({
  name: "quote",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setQuote: (state, action: PayloadAction<QuoteModel>) => {
      const newQuote: QuoteModel = action.payload;
      state.data = newQuote;
    },
  },
});

export const { setQuote } = quoteSlice.actions;

export default quoteSlice.reducer;
