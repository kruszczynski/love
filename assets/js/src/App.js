import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Index from './Pages/Index';
import Ceremony from './Pages/Ceremony';

import Footer from './Layout/Footer';

const Obiad = () => <h2>Obiad</h2>;
const Przyjecie = () => <h2>Przyjecie</h2>;

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={Index} />
        <Route path="/obiad" exact component={Obiad} />
        <Route path="/party" exact component={Przyjecie} />
        <Route path="/ceremonia" exact component={Ceremony} />
      </Router>
      <Footer />
    </>
  );
}

export default App;
