'use strict'

const standingsTemplate = require('../templates/standings.handlebars')
const playerListTemplate = require('../templates/playersearch.handlebars')

const getStandingsSuccess = (data) => {
  console.log('Get standings success invoked. Data is', data)
  console.log('Standing data is', data.standing)
  // for (let i = 0; i < data.standing.length; i++) {
  //   data.standing[i].teamId = assignTeamId(data.standing[i].teamName)
  // }
  const standingsHtml = standingsTemplate({ clubs: data.standing })
  // console.log('standingsHtml is', standingsHtml)
  $('#standingstable').append(standingsHtml)
}

const getStandingsFailure = (error) => {
  console.log('Error getting standings. Error is', error)
  $('#standingstable').append('<tr><td>Standings unavailable. Please try again later</td></tr>')
}

// const assignTeamId = (team) => {
//   let teamId = '0'
//   if (team === 'Manchester City FC') {
//     teamId = '65'
//   }
//   return teamId
// }

const getPlayerSuccess = (data) => {
  console.log('getPlayerSuccess invoked. Data is', data)
  clearSearch()
  for (let i = 0; i < data.players.length; i++) {
    data.players[i].age = getAge(data.players[i].dateOfBirth)
    data.players[i].cleanTeamName = setTeamName(data)
  }
  const searchHtml = playerListTemplate({ players: data.players })
  $('#search-results').append(searchHtml)
}

const setTeamName = (data) => {
  // Need to check the ID at the end of the URL for self and assign the team name based on that
  const teamUrl = data._links.team.href
  // console.log('teamUrl is', teamUrl)
  // console.log(typeof teamUrl)
  if (teamUrl.search('57') !== -1) {
    return 'Arsenal'
  } else if (teamUrl.search('1044') !== -1) {
    return 'Bournemouth'
  } else if (teamUrl.search('397') !== -1) {
    return 'Brighton & Hove Albion'
  } else if (teamUrl.search('328') !== -1) {
    return 'Burnley'
  } else if (teamUrl.search('61') !== -1) {
    return 'Chelsea'
  } else if (teamUrl.search('354') !== -1) {
    return 'Crystal Palace'
  } else if (teamUrl.search('62') !== -1) {
    return 'Everton'
  } else if (teamUrl.search('394') !== -1) {
    return 'Huddersfield Town'
  } else if (teamUrl.search('338') !== -1) {
    return 'Leicester City'
  } else if (teamUrl.search('64') !== -1) {
    return 'Liverpool'
  } else if (teamUrl.search('65') !== -1) {
    return 'Manchester City'
  } else if (teamUrl.search('66') !== -1) {
    return 'Manchester United'
  } else if (teamUrl.search('67') !== -1) {
    return 'Newcastle United'
  } else if (teamUrl.search('70') !== -1) {
    return 'Stoke City'
  } else if (teamUrl.search('340') !== -1) {
    return 'Southampton'
  } else if (teamUrl.search('72') !== -1) {
    return 'Swansea City'
  } else if (teamUrl.search('73') !== -1) {
    return 'Tottenham'
  } else if (teamUrl.search('346') !== -1) {
    return 'Watford'
  } else if (teamUrl.search('74') !== -1) {
    return 'West Brom'
  } else if (teamUrl.search('563') !== -1) {
    return 'West Ham'
  } else {
    return 'Enter a team name'
  }
}

const getPlayerFailure = (error) => {
  clearSearch()
  $('#search-results').append('<p>Player data unavailable. Please try again later.</p>')
  console.log('getPlayerFailure. Error is', error)
}

const clearSearch = () => {
  $('#search-results').empty()
}

const getAge = (dateString) => {
  const today = new Date()
  const birthDate = new Date(dateString)
  let age = today.getFullYear() - birthDate.getFullYear()
  const m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  return age
}

module.exports = {
  getStandingsSuccess,
  getStandingsFailure,
  getPlayerSuccess,
  getPlayerFailure
}
