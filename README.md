# clean-routing
An example project for clean NodeJS Routing

Just have a look at the structure and follow this pattern.
If you want to create a route, create a new Foldere with these files:
- index.js
- sinlge.js
- all.js

*index.js* will create an express router and the pass the requests for single items or all data to *single.js* or *all.js*.

## index.js

```javascript
  const cars = require('express').Router();
  cars.get('/', all);
  cars.get('/:carId', single);
```

## all.js
const data = require('path to my data')
```javascript
module.exports = (req, res) => {
  const subdata = data.subdata;
  res.status(200).json({ cars });
}
```
## single.js
const data = require('path to my data')
  const queryId = req.params.carId * 1^; //conver to int
  const result = data.subdata.find(r => r.id === queryId);
  res.status(200).json({ car });



This repository was created from [this](https://scotch.io/tutorials/keeping-api-routing-clean-using-express-routers) post
