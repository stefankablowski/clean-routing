const models = require('express').Router();
const all = require('./all');
const single = require('./single');

const data = require('../../data.json');

models.param('modelId', (req, res, next, value) => {
    const model = data.models.find(m => m.id === (value * 1))

    if(model){
        req['model'] = model;
        next();
    } else {
        res.status(404).send('Invalid model ID');
    }
})

const cars = require('./cars');

models.get('/',all);

models.get('/:modelId',single);

models.use('/:modelId/cars',cars);

module.exports = models;