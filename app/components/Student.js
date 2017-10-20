import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

function Student(props) {


  return (
    <div>
      <h3>Here Are Your Students</h3>
      <ul>
        {
          props.students.map(student => {
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
      <button>
        <NavLink to={'/newStudent'}>
          Add Student
          </NavLink>
      </button>
    </div>
  )

}

//CONTAINER

const mapStateToProps = (state) => {
  return {
    students: state.student
  }
}

export default withRouter(connect(mapStateToProps)(Student))
