const Sequelize = require('sequelize');
const db = require('../index');

const Student = db.define('student', {
  name: {
    type: Sequelize.STRING,
    validate: {
      notNull: true
    }
  },
  email: {
    type: Sequelize.TEXT,
    validate: {
      notNull: true,
      isEmail: true
    }
  }
});

module.exports = Student;
