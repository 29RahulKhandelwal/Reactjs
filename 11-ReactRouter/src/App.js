import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import NotFound from "./pages/NotFound";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote=React.lazy(()=>import("./pages/NewQuote"));
const QuoteDetail=React.lazy(()=>import("./pages/QuoteDetail"));

function App() {
  return (
    <Layout>
      <Suspense fallback={<div className="centered"><LoadingSpinner /></div>}>
        <Switch>
          <Route exact path="/"><Redirect to="/quotes" /></Route>
          <Route exact path="/quotes"><AllQuotes /></Route>
          <Route path="/quotes/:quoteId"><QuoteDetail /></Route>
          <Route exact path="/new-quote"><NewQuote /></Route>
          <Route path="*"><NotFound /></Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
