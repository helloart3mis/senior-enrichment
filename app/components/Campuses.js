import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import { removeCampus } from '../reducers/campuses'

function Campuses(props) {


  return (
    <div>
      <h3>Here Are Your Campuses</h3>
      <ul>
        {
          props.campuses.map(campus => {
            return (
              <div>
                <li key={campus.id}>
                  <NavLink to={`/campus/${campus.id}`}>
                    {campus.name}
                  </NavLink>
                </li>
                <button onClick={event => props.removeCampusFunc(campus.id)}>Delete School</button>
              </div>
            )
          })
        }
      </ul>
      <button>
        <NavLink to={'/newCampus'}>
          Add Campus
          </NavLink>
      </button>
    </div>
  )

}

//CONTAINER

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    removeCampusFunc: function (campus) {
      dispatch(removeCampus(campus))
    }
  }
};

export default withRouter(connect(mapStateToProps, mapStateToDispatch)(Campuses))
