import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

function SingleCampus(props) {

  var found = props.campuses.find(campus => campus.id === +props.match.params.id)
  console.log("FOUND ====", found)

  return (
    <div>
      <h3>{found.name}</h3>
      <ul>
        {
          found.students.map(student => {
            return (
              <li key={student.id}>
                <NavLink to={`/student/${student.id}`}>
                  {student.name}
                </NavLink>
              </li>
            )
          })
        }
      </ul>
    </div>
  )


}

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses
  }
}

export default withRouter(connect(mapStateToProps)(SingleCampus))
