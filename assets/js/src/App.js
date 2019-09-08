import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Index from './Index';
import Navigation from './Navigation';

const Yay = () => <h2>Yay</h2>;

function App() {
  return (
    <Router>
      <Navigation />
      <Route path="/" exact component={Index} />
      <Route path="/yay" component={Yay} />
    </Router>
  );
}

export default App;
