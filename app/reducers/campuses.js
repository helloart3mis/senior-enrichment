import axios from 'axios';
import { REMOVE as REMOVE_STUDENT } from './student';

//ACTION TYPES
const INITIALIZE = 'INITIALIZE_CAMPUS';
const CREATE = 'CREATE_CAMPUS';
const REMOVE = 'REMOVE_CAMPUS';
const UPDATE = 'UPDATE_CAMPUS';

//ACTION CREATORS
const init = campuses => ({ type: INITIALIZE, campuses });
const create = campus => ({ type: CREATE, campus });
const remove = id => ({ type: REMOVE, id });
const update = campus => ({ type: UPDATE, campus });

//REDUCERS
export default function reducer(campuses = [], action) {
  switch (action.type) {

    case INITIALIZE:
      return action.campuses;

    case CREATE:
      return [action.campus, ...campuses];

    case REMOVE:
      return campuses.filter(campus => campus.id !== action.id);

    case REMOVE_STUDENT:
      return campuses.map(function (campus) {
        campus.students = campus.students.filter(function (student) {
          return action.id !== student.id
        })
        return campus
      }); //look to see if student belongs to campus, return campus without student

    case UPDATE:
      return campuses.map(campus => (
        action.campus.id === campus.id ? action.campus : campus
      ));
    default:
      return campuses;
  }
}

//THUNK CREATORS
export const fetchCampuses = () => dispatch => {
  axios.get('/api/campus')
    .then(res => dispatch(init(res.data)))
    .catch(err => console.error('Oh No! Could not find Campuses!', err));
};

// export const fetchCampus = id => dispatch => {
//   axios.get(`/api/campus/${id}`)
//     .then(res => dispatch(update(res.data)))
//     .catch(err => console.error('Oh No! Could not find campus!', err));
// };

export const addCampus = campus => dispatch => {
  axios.post('/api/campus', campus)
    .then(res => dispatch(create(res.data)))
    .catch(err => console.error(`Could not create ${campus}!`, err));
};

export const updateCampus = (id, campus) => dispatch => {
  axios.put(`/api/campus/${id}`, campus)
    .then(res => dispatch(update(res.data)))
    .catch(err => console.error(`Could not update ${campus}!`, err));
}

export const removeCampus = id => dispatch => {
  dispatch(remove(id));
  axios.delete(`/api/campus/${id}`)
    .catch(err => console.error(`Could not remove ${id}!`, err));
};
