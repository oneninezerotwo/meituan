import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import {Provider} from 'react-redux';
import Search from './pages/Search/Search';
import store from './pages/Stores/Stores';
// import List2 from './compents/List2';/
import DetailPage from './pages/DetailPage/DetailPage';
ReactDOM.render (
  <Provider store={store}>

    <Router>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Home} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/detailPage" component={DetailPage} />
      </Switch>
      {/* <Redirect to="/home" /> */}
    </Router>
  </Provider>,
  document.getElementById ('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister ();
