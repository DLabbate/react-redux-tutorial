import { QuoteModel } from "../models";

export const getRandomQuote = async (): Promise<QuoteModel> => {
  // REST API that returns a list of insiprational quotes
  const url = "https://type.fit/api/quotes";

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("An error occured fetching the quote");
  }

  const quotesArray: QuoteModel[] = await response.json();
  const randomIndex = Math.floor(Math.random() * quotesArray.length);

  return quotesArray[randomIndex];
};
