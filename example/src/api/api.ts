import { QuoteModel } from "../redux/quoteSlice";

export const getRandomQuote = async (): Promise<QuoteModel> => {
  const url = "https://quotes.rest/qod?language=en";

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("An error occured fetching the quote");
  }

  let quote: QuoteModel = (await response.json()).contents.quotes[0];

  return quote;
};
