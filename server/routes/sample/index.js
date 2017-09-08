// apiRoutes/sample.js
const router = require('express').Router();

// matches GET requests to /api/sample/
router.get('/', function (req, res, next) { res.json({hello: 'world'}) /* etc */});
// matches POST requests to /api/sample/
router.post('/', function (req, res, next) { /* etc */});
// matches PUT requests to /api/sample/:sampleId
router.put('/:sampleId', function (req, res, next) { /* etc */});
// matches DELTE requests to /api/sample/:sampleId
router.delete('/:sampleId', function (req, res, next) { /* etc */});

module.exports = router;
