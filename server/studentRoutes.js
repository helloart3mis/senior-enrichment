var router = require('express').Router();
var Student = require('../db/models/student')

router.get('/', (req, res, next) => {
  Student.findAll()
    .then(student => res.json(student))
    .catch(next);
})

router.get('/:id', (req, res, next) => {
  Student.findById(req.params.id)
    .then(student => res.json(student))
    .catch(next);
})

router.post('/', (req, res, next) => {
  Student.create(req.body)
    .then(student => res.json(student))
    .catch(next);
})

router.put('/:id', (req, res, next) => {
  Student.findById(req.params.id)
    .then(student => res.json(student.update(req.body)))
    .catch(next);
})

router.delete('/:id', (req, res, next) => {
  const id = req.params.id
  Student.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
})

module.exports = router;
