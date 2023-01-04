import React from "react";
import { useParams, Routes, Route } from "react-router-dom";
import Comments from '../components/comments/Comments';
import HighlighedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
];


export const QuoteDetail = () => {
  const {quoteId} = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === quoteId);

  if (!quote) {
    return <p>No quote found</p>
  }

  return (
    <>
      <HighlighedQuote text={quote.text} author={quote.author}/>
      <Routes>
        <Route path={`/comments`} element={<Comments/>}/>
      </Routes>
    </>
  );
};
