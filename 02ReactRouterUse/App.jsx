import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import SignPage from './src/pages/SignPage';
import ProfilePage from './src/pages/ProfilePage';
import MainPage from './src/pages/MainPage';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/profile' component={ProfilePage} />
          <Route path="/sign" component={SignPage} />
          <Route path='/' exact component={MainPage} />
          <Route path='*' render={()=> <div className='error'>에러페이지</div>} />
        </Switch>
      </Router>
    </>
  );
}

export default App;