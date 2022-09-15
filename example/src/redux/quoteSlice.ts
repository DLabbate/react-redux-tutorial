import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface QuoteModel {
  quote: string;
  author: string;
}

interface QuoteState {
  data: QuoteModel;
}

const initialState: QuoteState = {
  data: { quote: "", author: "" },
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
