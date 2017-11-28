'use strict'

const standingsTemplate = require('../templates/standings.handlebars')

const getStandingsSuccess = (data) => {
  console.log('Get standings success invoked. Data is', data)
  console.log('Standing data is', data.standing)
  for (let i = 0; i < data.standing.length; i++) {
    data.standing[i].teamId = assignTeamId(data.standing[i].teamName)
  }
  const standingsHtml = standingsTemplate({ clubs: data.standing })
  // console.log('standingsHtml is', standingsHtml)
  $('#standingstable').append(standingsHtml)
}

const getStandingsFailure = (error) => {
  console.log('Error getting standings. Error is', error)
  $('#standingstable').append('<tr><td>Standings unavailable. Please try again later</td></tr>')
}

const assignTeamId = (team) => {
  let teamId = '0'
  if (team === 'Manchester City FC') {
    teamId = '65'
  }
  return teamId
}

const getPlayerSuccess = (data) => {
  console.log('getPlayerSuccess invoked. Data is', data)
}

const getPlayerFailure = (error) => {
  console.log('getPlayerFailure. Error is', error)
}

module.exports = {
  getStandingsSuccess,
  getStandingsFailure,
  getPlayerSuccess,
  getPlayerFailure
}
