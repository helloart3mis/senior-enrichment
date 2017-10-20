import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Campuses from './Campuses';
import SingleCampus from './SingleCampus';
import Student from './Student';
import SingleStudent from './SingleStudent';
// import { connect } from 'react-redux';
import { fetchCampuses } from '../reducers/campuses';
// import { withRouter } from 'react-router';
import store from '../store';
import NewCampus from './NewCampus';
import { fetchStudents } from '../reducers/student';
import NewStudent from './NewStudent';


export default class Root extends Component {

  componentDidMount() {
    const campusesThunk = fetchCampuses();
    store.dispatch(campusesThunk);

    const studentThunk = fetchStudents();
    store.dispatch(studentThunk);
  }


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
            <Route exact path='/newCampus' component={NewCampus} />
            <Route path='/newStudent' component={NewStudent} />
            <Redirect to="/campus" />
          </Switch>
        </main>
      </div>
    )
  }
}

//CONTAINER

// const mapProps = null;

// const mapDispatch = dispatch => ({
//   fetchInitialData: () => {
//     dispatch(fetchCampuses());
//     // dispatch(); this is for users
//   }
// });

// export default withRouter(connect(mapProps, mapDispatch)(Root));
