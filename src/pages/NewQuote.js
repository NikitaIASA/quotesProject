import { useNavigate } from "react-router-dom";

import QuoteForm from '../components/quotes/QuoteForm'

export const NewQuote = () => {
  let navigate = useNavigate();
  

  const addQuoteHandler = quoteData => {
    console.log(quoteData);
    navigate('/quotes');
  }

  return (
    <QuoteForm onAddQuote={addQuoteHandler}/>
  )
}
