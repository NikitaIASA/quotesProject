import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useHttp from "../components/hooks/use-http";
import { addQuote } from "../components/lib/api";
import QuoteForm from '../components/quotes/QuoteForm'

export const NewQuote = () => {
  const {sendRequest, status} = useHttp(addQuote);
  let navigate = useNavigate();

  useEffect(() => {
    if (status === 'completed') {
      navigate('/quotes');
    }
  }, [status, navigate])

  

  const addQuoteHandler = quoteData => {
    sendRequest(quoteData);
  }

  return (
    <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler}/>
  )
}
