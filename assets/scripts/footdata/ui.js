'use strict'

const standingsTemplate = require('../templates/standings.handlebars')
const playerListTemplate = require('../templates/playersearch.handlebars')
const playerUi = require('../player/ui')

const getStandingsSuccess = (data) => {
  // console.log('Get standings success invoked. Data is', data)
  // console.log('Standing data is', data.standing)
  for (let i = 0; i < data.standing.length; i++) {
    data.standing[i].crestURI = httpsLogo(data.standing[i]._links.team.href)
  }
  const standingsHtml = standingsTemplate({ clubs: data.standing })
  // console.log('standingsHtml is', standingsHtml)
  $('#standingstable').append(standingsHtml)
}

const getStandingsFailure = (error) => {
  // console.log('Error getting standings. Error is', error)
  $('#standingstable').append('<tr><td>Standings unavailable. Please try again later</td></tr>')
}

const httpsLogo = (teamUrl) => {
  // console.log('URL received for analysis is', teamUrl)
  if (teamUrl.search('57') !== -1) {
    return 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg'
  } else if (teamUrl.search('1044') !== -1) {
    return 'https://upload.wikimedia.org/wikipedia/de/4/41/Afc_bournemouth.svg'
  } else if (teamUrl.search('397') !== -1) {
    return 'https://upload.wikimedia.org/wikipedia/en/f/fd/Brighton_&_Hove_Albion_logo.svg'
  } else if (teamUrl.search('328') !== -1) {
    return 'https://upload.wikimedia.org/wikipedia/en/0/02/Burnley_FC_badge.png'
  } else if (teamUrl.search('61') !== -1) {
    return 'https://upload.wikimedia.org/wikipedia/de/5/5c/Chelsea_crest.svg'
  } else if (teamUrl.search('354') !== -1) {
    return 'https://upload.wikimedia.org/wikipedia/de/b/bf/Crystal_Palace_F.C._logo_(2013).png'
  } else if (teamUrl.search('62') !== -1) {
    return 'https://upload.wikimedia.org/wikipedia/de/f/f9/Everton_FC.svg'
  } else if (teamUrl.search('394') !== -1) {
    return 'https://upload.wikimedia.org/wikipedia/en/5/5a/Huddersfield_Town_A.F.C._logo.svg'
  } else if (teamUrl.search('338') !== -1) {
    return 'https://upload.wikimedia.org/wikipedia/en/6/63/Leicester02.png'
  } else if (teamUrl.search('64') !== -1) {
    return 'https://upload.wikimedia.org/wikipedia/de/0/0a/FC_Liverpool.svg'
  } else if (teamUrl.search('65') !== -1) {
    return 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg'
  } else if (teamUrl.search('66') !== -1) {
    return 'https://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg'
  } else if (teamUrl.search('67') !== -1) {
    return 'https://upload.wikimedia.org/wikipedia/de/5/56/Newcastle_United_Logo.svg'
  } else if (teamUrl.search('70') !== -1) {
    return 'https://upload.wikimedia.org/wikipedia/de/a/a3/Stoke_City.svg'
  } else if (teamUrl.search('340') !== -1) {
    return 'https://upload.wikimedia.org/wikipedia/de/c/c9/FC_Southampton.svg'
  } else if (teamUrl.search('72') !== -1) {
    return 'https://upload.wikimedia.org/wikipedia/de/a/ab/Swansea_City_Logo.svg'
  } else if (teamUrl.search('73') !== -1) {
    return 'https://upload.wikimedia.org/wikipedia/de/b/b4/Tottenham_Hotspur.svg'
  } else if (teamUrl.search('346') !== -1) {
    return 'https://upload.wikimedia.org/wikipedia/en/e/e2/Watford.svg'
  } else if (teamUrl.search('74') !== -1) {
    return 'https://upload.wikimedia.org/wikipedia/de/8/8b/West_Bromwich_Albion.svg'
  } else if (teamUrl.search('563') !== -1) {
    return 'https://upload.wikimedia.org/wikipedia/de/e/e0/West_Ham_United_FC.svg'
  }
}

// const assignTeamId = (team) => {
//   let teamId = '0'
//   if (team === 'Manchester City FC') {
//     teamId = '65'
//   }
//   return teamId
// }

const getPlayerSuccess = (data) => {
  // console.log('getPlayerSuccess invoked. Data is', data)
  clearSearch()
  for (let i = 0; i < data.players.length; i++) {
    data.players[i].age = getAge(data.players[i].dateOfBirth)
    data.players[i].cleanTeamName = setTeamName(data)
    data.players[i].teamlogo = playerUi.assignLogo(setTeamName(data))
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
  // console.log('getPlayerFailure. Error is', error)
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
