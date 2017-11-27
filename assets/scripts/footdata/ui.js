'use strict'

const standingsTemplate = require('../templates/standings.handlebars')

const getStandingsSuccess = (data) => {
  console.log('Get standings success invoked. Data is', data)
  console.log('Standing data is', data.standing)
  // The club field (first col in table) should have the rank, logo, and club name
  const standingsHtml = standingsTemplate({ clubs: data.standing })
  // console.log('standingsHtml is', standingsHtml)
  $('#standingstable').append(standingsHtml)
}

const getStandingsFailure = (error) => {
  console.log('Error getting standings. Error is', error)
  $('#standingstable').append('<tr><td>Standings unavailable. Please try again later</td></tr>')
}

module.exports = {
  getStandingsSuccess,
  getStandingsFailure
}
