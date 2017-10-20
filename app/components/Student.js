import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import { removeStudent } from '../reducers/student'

function Student(props) {


  return (
    <div>
      <h3>Here Are Your Students</h3>
      <ul>
        {
          props.students.map(student => {
            return (
              <div>
                <li key={student.id}>
                  <NavLink to={`/student/${student.id}`}>
                    {student.name}
                  </NavLink>
                </li>
                <button onClick={event => props.removeStudentFunc(student.id)}>Delete Student</button>
              </div>
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

const mapStateToDispatch = (dispatch) => {
  return {
    removeStudentFunc: function (student) {
      dispatch(removeStudent(student))
    }
  }
};

export default withRouter(connect(mapStateToProps, mapStateToDispatch)(Student))
