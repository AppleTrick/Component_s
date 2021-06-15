import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignPage from './src/pages/SignPage';
import ProfilePage from './src/pages/ProfilePage';
import MainPage from './src/pages/MainPage';
import './App.css';

function App() {
  return (
    <>
      <Router>
            <Route path='/main' component={MainPage} />
            <Route path='/profile' component={ProfilePage} />
            <Route path="/sign" component={SignPage} />
      </Router>
    </>
  );
}

export default App;