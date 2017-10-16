const Sequelize = require('sequelize');
const db = require('../index');

const Campuses = db.define('campuses', {
  name: {
    type: Sequelize.STRING,
    validate: {
      notNull: true
    }
  },
  image: {
    type: Sequelize.STRING,
    validate: {
      notNull: true
    }
  }
});

module.exports = Campuses;
