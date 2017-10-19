const Sequelize = require('sequelize');
const db = require('../index');
const Student = require('./student');

const Campuses = db.define('campuses', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
    defaultScope: {
      include: [
        { model: Student }
      ]
    }
  });

module.exports = Campuses;
