/**
 * @requires express
 */

const express = require('express')
const LOG = require('../utils/logger.js')

LOG.debug('START routing')
const router = express.Router()

// Manage top-level request first
router.get('/', (req, res, next) => {
  LOG.debug('Request to /')
  res.render('index.ejs', { title: 'Express App' })
})


// Defer path requests to a particular controller
router.use('/pilot', require('../controllers/pilot.js'))
router.use('/flight', require('../controllers/flight.js'))
router.use('/plane', require('../controllers/plane.js'))

LOG.debug('END routing')
module.exports = router
