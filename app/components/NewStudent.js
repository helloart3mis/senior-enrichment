import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { addStudent } from '../reducers/student'


class NewStudent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      campusId: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    const name = evt.target.form.name.value;
    const email = evt.target.form.email.value;
    const campusId = evt.target.value;


    this.setState({ name, email, campusId });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addStudentFunc(this.state);
    this.setState({ name: '', email: '', campus: '' })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Wizard</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="What's your name..."
            />
            <label>Contact Information</label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Send me an owl..."
            />
            <label>What's Your Wizarding School</label>
            <select value={this.state.campusId}
              onChange={this.handleChange}
            >
              {
                this.props.campuses.map(campus => {
                  return (
                    <option key={campus.id} value={campus.id}>{campus.name}</option>
                  )
                })
              }
            </select>
            <span>
              <button type="submit">Accio Student!</button>
            </span>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses
  }
};

const mapStateToDispatch = (dispatch) => {
  return {
    addStudentFunc: function (studentInfo) {
      dispatch(addStudent(studentInfo))
    }
  }
};

export default withRouter(connect(mapStateToProps, mapStateToDispatch)(NewStudent))

