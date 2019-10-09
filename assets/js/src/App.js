import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Index from './Pages/Index';
import Ceremony from './Pages/Ceremony';
import Dinner from './Pages/Dinner';
import Party from './Pages/Party';

import Footer from './Layout/Footer';

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={Index} />
        <Route path="/obiad" exact component={Dinner} />
        <Route path="/party" exact component={Party} />
        <Route path="/ceremonia" exact component={Ceremony} />
      </Router>
      <Footer />
    </>
  );
}

export default App;
