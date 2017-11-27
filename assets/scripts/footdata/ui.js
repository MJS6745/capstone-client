'use strict'

const standingsTemplate = require('../templates/standings.handlebars')

const getStandingsSuccess = (data) => {
  console.log('Get standings success invoked. Data is', data)
}

const getStandingsFailure = (error) => {
  console.log('Error getting standings. Error is', error)
}

module.exports = {
  getStandingsSuccess,
  getStandingsFailure
}
