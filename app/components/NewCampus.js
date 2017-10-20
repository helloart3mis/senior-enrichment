import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { addCampus } from '../reducers/campuses'


class NewCampus extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      image: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    const name = evt.target.form.name.value;
    const image = evt.target.form.image.value;


    this.setState({ name, image });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addCampusFunc(this.state);
    this.setState({ name: '', image: '' })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Magic School</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Wizarding School..."
            />
            <label>Magic Images</label>
            <input
              type="text"
              name="image"
              value={this.state.image}
              onChange={this.handleChange}
              placeholder="Show Me Some Magic..."
            />
            <span>
              <button type="submit">Accio School!</button>
            </span>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = null;

const mapStateToDispatch = (dispatch) => {
  return {
    addCampusFunc: function (schoolInfo) {
      dispatch(addCampus(schoolInfo))
    }
  }
};

export default withRouter(connect(mapStateToProps, mapStateToDispatch)(NewCampus))

