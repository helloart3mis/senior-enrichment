import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

function SingleStudent(props) {
  var found = props.students.find(student => student.id === +props.match.params.id)

  var foundCampus = props.campuses.find(campus => campus.id === found.campusId)

  return (
    <div>
      <h2>{found.name}</h2>
      <p>{found.email}</p>
      <h4>My Wizard School Is: </h4>
      {
        !foundCampus ?
          <p>No School Found</p> :
          <NavLink to={`/campus/${foundCampus.id}`}>
            {foundCampus.name}
          </NavLink>
      }
    </div>
  )


}

const mapStateToProps = (state) => {
  return {
    students: state.student,
    campuses: state.campuses
  }
}

export default withRouter(connect(mapStateToProps)(SingleStudent))
