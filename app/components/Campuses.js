import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

function Campuses(props) {


  return (
    <div>
      <h3>Here Are Your Campuses</h3>
      <ul>
        {
          props.campuses.map(campus => {
            return (
              <li key={campus.id}>
                <NavLink to={`/campus/${campus.id}`}>
                  {campus.name}
                </NavLink>
              </li>
            )
          })
        }
      </ul>
    </div>
  )

}

//CONTAINER

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses
  }
}

export default withRouter(connect(mapStateToProps)(Campuses))
