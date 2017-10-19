import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

function SingleCampus(props) {

  var found = props.campuses.find(campus => campus.id === +props.match.params.id)
  // console.log("CAMPUS ---->", props.campuses);
  // console.log("FOUND ---->", found);
  // if (!found) {
  //   return <div>what</div>
  // }
  return (
    <div>
      <h3>{found.name}</h3>
      <ul>
        {
          found.students.map(student => {
            return (
              <li key={student.id}>{student.name}</li>
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
