import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import SignPage from './src/pages/SignPage';
import ProfilePage from './src/pages/ProfilePage';
import MainPage from './src/pages/MainPage';
import Header from './src/components/header'
import './App.css';

function App() {
  return (
    <>
      <Router>
        {/* <Route path='/main' component={Header} /> */}
        <Switch>
          <Route path='/main' exact component={MainPage} /> 
          <Route path='/main/profile' exact component={ProfilePage} />
          <Route path="/sign" component={SignPage} />      
          <Route render={()=> <div className='error'>에러페이지</div>} />
        </Switch>
      </Router>
    </>
  );
}

export default App;