var router = require('express').Router();
var Campuses = require('../db/models/campuses');

router.get('/', (req, res, next) => {
  Campuses.findAll()
    .then(campuses => res.json(campuses))
    .catch(next);
})

router.get('/:id', (req, res, next) => {
  Campuses.findById(req.params.id)
    .then(campus => res.json(campus))
    .catch(next);
})

router.post('/', (req, res, next) => {
  Campuses.create(req.body)
    .then(campus => res.json(campus))
    .catch(next);
})

router.put('/:id', (req, res, next) => {
  Campuses.findById(req.params.id)
    .then(campus => res.json(campus.update(req.body)))
    .catch(next);
})

router.delete('/:id', (req, res, next) => {
  const id = req.params.id
  Campuses.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
})

module.exports = router;
