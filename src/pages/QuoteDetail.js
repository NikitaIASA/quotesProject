import { useEffect } from "react";
import React from "react";
import { useParams, Routes, Route, Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlighedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from '../components/UI/LoadingSpinner';

import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../components/lib/api";

export const QuoteDetail = () => {
  const { quoteId } = useParams();

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }

  return (
    <>
      <HighlighedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Routes>
        <Route
          path="/"
          element={
            <div className="centered">
              <Link to={`/quotes/${quoteId}/comments`} className="btn--flat">
                Load comments
              </Link>
            </div>
          }
        ></Route>
        <Route path={`/comments`} element={<Comments />} />
      </Routes>
    </>
  );
};
