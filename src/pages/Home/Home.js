import React, {Component} from 'react';
import App from './../../App';
import List from './../../compents/List';
import List2 from './../../compents/List2';
import Footer from './../../compents/Footer/Footer';
// import {Provider} from 'react-redux';
// import store from './../Stores/Stores';
// import {HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
// import Details from './../Details/Details';
// import Search from './../Search/Search';
// import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
// import {withRouter} from 'react-router-dom';

class Home extends Component {
  render () {
    // console.log (this);
    return (
      <div>
        <App />
        <List />
        <List2 />
        <Footer />

      </div>
    );
  }
}

export default connect (state => {
  return state;
  // console.log (state);
}) (Home);
