import axios from 'axios';

//ACTION TYPES
const INITIALIZE = 'INITIALIZE_STUDENTS';
export const CREATE = 'CREATE_STUDENT';
export const REMOVE = 'REMOVE_STUDENT';
const UPDATE = 'UPDATE_STUDENT';

//ACTION CREATORS
const init = students => ({ type: INITIALIZE, students });
const create = student => ({ type: CREATE, student });
const remove = id => ({ type: REMOVE, id });
const update = student => ({ type: UPDATE, student });

//REDUCERS
export default function reducer(students = [], action) {
  switch (action.type) {

    case INITIALIZE:
      return action.students;

    case CREATE:
      return [...students, action.student];

    case REMOVE:
      return students.filter(student => student.id !== action.id);

    case UPDATE:
      return students.map(student => (
        action.student.id === student.id ? action.student : student
      ));
    default:
      return students;
  }
}

//THUNK CREATORS
export const fetchStudents = () => dispatch => {
  axios.get('/api/student')
    .then(res => dispatch(init(res.data)))
    .catch(err => console.error('Oh No! Could not find Students!', err));
};

// export const fetchStudent = id => dispatch => {
//   axios.get(`/api/student/${id}`)
//     .then(res => dispatch(update(res.data)))
//     .catch(err => console.error('Oh No! Could not find student!', err));
// };

export const addStudent = student => dispatch => {
  axios.post('/api/student', student)
    .then(res => dispatch(create(res.data)))
    .catch(err => console.error(`Could not create ${student}!`, err));
};

export const updateStudent = (id, student) => dispatch => {
  axios.put(`/api/student/${id}`, student)
    .then(res => dispatch(update(res.data)))
    .catch(err => console.error(`Could not update ${student}!`, err));
}

export const removeStudent = id => dispatch => {
  dispatch(remove(id));
  axios.delete(`/api/student/${id}`)
    .catch(err => console.error(`Could not remove ${id}!`, err));
};
