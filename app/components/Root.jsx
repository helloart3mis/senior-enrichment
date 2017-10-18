import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Campuses from './Campuses';
import SingleCampus from './SingleCampus';
import Student from './Student';
import SingleStudent from './SingleStudent';


export default class Root extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <main>
          <Switch>
            <Route exact path='/campus' component={Campuses} />
            <Route path='/campus/:id' component={SingleCampus} />
            <Route exact path='/student' component={Student} />
            <Route path='/student/:id' component={SingleStudent} />
            <Redirect to="/campus" />
          </Switch>
        </main>
      </div>
    )
  }
}
