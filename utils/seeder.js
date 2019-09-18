// set up a temporary (in memory) database
const Datastore = require('nedb')
const LOG = require('../utils/logger.js')
const pilots = require('../data/pilots.json')
const planes = require('../data/planes.json')
const flights = require('../data/flights.json')

module.exports = (app) => {
  LOG.info('START seeder.')
  const db = new Datastore()
  db.loadDatabase()
  db.insert(pilots)
  db.insert(planes)
  db.insert(flights)

  // initialize app.locals (objects for controllers)
  app.locals.pilots = db.find(pilots)
  app.locals.planes = db.find(planes)
  app.locals.flights = db.find(flights)

  LOG.debug(`${pilots.length} pilots`)
  LOG.debug(`${planes.length} planes`)
  LOG.debug(`${flights.length} flights`)
  LOG.info('END Seeder. Sample data read and verified.')
}
