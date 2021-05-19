import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import FetchData from './components/FetchData';
import CourtList from './components/CourtList';
import ScrollToTop from './components/ScrollToTop';

import './css/custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <ScrollToTop />
        <Route exact path='/' component={Home} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/court-list' component={CourtList} />
      </Layout>
    );
  }
}
