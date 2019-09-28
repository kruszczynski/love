import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Index from './Index';
import Navigation from './Navigation';

const RSVP = () => <h2>RSPV</h2>;
const Kolacja = () => <h2>Kolacja</h2>;
const Przyjecie = () => <h2>Przyjecie</h2>;

function App() {
  return (
    <Router>
      <Route path="/" exact component={Index} />
      <Route path="/kolacja" exact component={Kolacja} />
      <Route path="/przyjecie" exact component={Przyjecie} />
      <Route path="/rsvp" exact component={RSVP} />
    </Router>
  );
}

export default App;
