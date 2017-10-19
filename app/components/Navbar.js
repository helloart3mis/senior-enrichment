import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <div>
        <h3>Your Navbar</h3>
        <button>
          <NavLink to={'/campus'}>
            Campuses
          </NavLink>
        </button>
        <button>
          <NavLink to={'/student'}>
            Students
          </NavLink>
        </button>
      </div>
    )
  }

}
