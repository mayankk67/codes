import React from 'react';
import './App.css';
import Pdflink from './components/PdfFromLink';
import Pdftext from './components/PdfFromText';
import Hompage from './components/Hompage';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Routex from './components/routes';

function App() {
  return (
    <BrowserRouter>
    <div>
      <header >
      <Routex />
      <Switch>
          <Route path='/' exact component={Hompage}></Route>
          <Route path='/pdfFromLink' component={Pdflink}></Route>
          <Route path='/pdfFromText' component={Pdftext}></Route>
      </Switch>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
