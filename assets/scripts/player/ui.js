'use strict'

const store = require('../store')
const events = require('./events')
// const showPlayersTemplate = require('../templates/players.handlebars')
const showPlayersTemplate = require('../templates/playercard.handlebars')
const singlePlayerTemplate = require('../templates/singleplayer.handlebars')

const addPlayerSuccess = (data) => {
  console.log('Sign Player success invoked. Data is', data)
  $('#addPlayerModal').modal('hide')
  document.getElementById('addPlayerForm').reset()
  $('#addPlayerMessage').text('Player successfully added')
  $('#addPlayerMessageModal').modal('show')
  // Functionality below was added to update the list of players when new player is added
  data.player.teamlogo = assignLogo(data.player.team)
  console.log('New data is', data)
  const showPlayersHtml = singlePlayerTemplate({ player: data.player })
  $('#playerlist').append(showPlayersHtml)
}

const addPlayerFailure = (error) => {
  console.log('Sign Player failure. Error is', error)
  $('#addPlayerModal').modal('hide')
  document.getElementById('addPlayerForm').reset()
  $('#addPlayerMessage').text('Oops! There was an error')
  $('#addPlayerMessageModal').modal('show')
}

const addSearchPlayerSuccess = (data) => {
  console.log('Search player success invoked. Data is', data)
  const modalName = '#addSearchPlayerModal' + data.player.jersey_number
  $(modalName).modal('hide')
  $('#addPlayerMessage').text('Player successfully added')
  $('#addPlayerMessageModal').modal('show')
  data.player.teamlogo = assignLogo(data.player.team)
  console.log('New data is', data)
  const showPlayersHtml = singlePlayerTemplate({ player: data.player })
  $('#playerlist').append(showPlayersHtml)
}

const addSearchPlayerFailure = (error) => {
  console.log('addSearchPlayerFailure, error is', error)
}

const updateListSuccess = (data) => {
  console.log('Update list success invoked. Data is', data)
  $('#playerlist').empty()
  for (let i = 0; i < data.players.length; i++) {
    data.players[i].teamlogo = assignLogo(data.players[i].team)
  }
  const showPlayersHtml = showPlayersTemplate({ players: data.players })
  // console.log('Show player html is', showPlayersHtml)
  if (data.players.length === 0) {
    $('#playerlist').append('<p>Click "Sign Player" to add a player to your list.</p>')
  } else {
    $('#playerlist').append(showPlayersHtml)
  }
}

const getPlayersSuccess = (data) => {
  console.log('Get player success invoked. Data is', data)
  $('#getPlayersModal').modal('hide')
  $('#playerlist').empty()
  for (let i = 0; i < data.players.length; i++) {
    data.players[i].teamlogo = assignLogo(data.players[i].team)
  }
  const showPlayersHtml = showPlayersTemplate({ players: data.players })
  // console.log('Show player html is', showPlayersHtml)
  if (data.players.length === 0) {
    $('#playerlist').append('<p>Click "Sign Player" to add a player to your list.</p>')
  } else {
    $('#playerlist').append(showPlayersHtml)
  }
}

const assignLogo = (team) => {
  let logo = ''
  if (team === 'Arsenal' || team === 'arsenal' || team === 'Arsenal FC') {
    logo = 'http://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg'
  } else if (team === 'Chelsea' || team === 'chelsea') {
    logo = 'http://upload.wikimedia.org/wikipedia/de/5/5c/Chelsea_crest.svg'
  } else if (team === 'Leicester City' || team === 'leicester city') {
    logo = 'http://upload.wikimedia.org/wikipedia/en/6/63/Leicester02.png'
  } else if (team === 'Watford' || team === 'watford' || team === 'Watford FC') {
    logo = 'https://upload.wikimedia.org/wikipedia/en/e/e2/Watford.svg'
  } else if (team === 'Liverpool' || team === 'liverpool' || team === 'Liverpool FC') {
    logo = 'http://upload.wikimedia.org/wikipedia/de/0/0a/FC_Liverpool.svg'
  } else if (team === 'Southampton' || team === 'southampton' || team === 'Southampton FC') {
    logo = 'http://upload.wikimedia.org/wikipedia/de/c/c9/FC_Southampton.svg'
  } else if (team === 'Swansea City' || team === 'swansea city' || team === 'Swansea City FC') {
    logo = 'http://upload.wikimedia.org/wikipedia/de/a/ab/Swansea_City_Logo.svg'
  } else if (team === 'West Bromwich Albion' || team === 'west brom' || team === 'West Brom') {
    logo = 'http://upload.wikimedia.org/wikipedia/de/8/8b/West_Bromwich_Albion.svg'
  } else if (team === 'Bournemouth' || team === 'bournemouth' || team === 'AFC Bournemouth') {
    logo = 'https://upload.wikimedia.org/wikipedia/de/4/41/Afc_bournemouth.svg'
  } else if (team === 'Everton' || team === 'everton' || team === 'Everton FC') {
    logo = 'http://upload.wikimedia.org/wikipedia/de/f/f9/Everton_FC.svg'
  } else if (team === 'Stoke City' || team === 'stoke city' || team === 'Stoke City FC') {
    logo = 'http://upload.wikimedia.org/wikipedia/de/a/a3/Stoke_City.svg'
  } else if (team === 'Crystal Palace' || team === 'crystal palace' || team === 'Crystal Palace FC') {
    logo = 'http://upload.wikimedia.org/wikipedia/de/b/bf/Crystal_Palace_F.C._logo_(2013).png'
  } else if (team === 'Huddersfield Town' || team === 'huddersfield' || team === 'Huddersfield') {
    logo = 'https://upload.wikimedia.org/wikipedia/en/5/5a/Huddersfield_Town_A.F.C._logo.svg'
  } else if (team === 'Burnley' || team === 'burnley' || team === 'Burnley FC') {
    logo = 'https://upload.wikimedia.org/wikipedia/en/0/02/Burnley_FC_badge.png'
  } else if (team === 'Brighton & Hove Albion' || team === 'brighton & hove albion') {
    logo = 'https://upload.wikimedia.org/wikipedia/en/f/fd/Brighton_&_Hove_Albion_logo.svg'
  } else if (team === 'Manchester City' || team === 'manchester city' || team === 'Manchester City FC') {
    logo = 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg'
  } else if (team === 'Newcastle United' || team === 'newcastle united' || team === 'Newcastle United FC') {
    logo = 'http://upload.wikimedia.org/wikipedia/de/5/56/Newcastle_United_Logo.svg'
  } else if (team === 'Tottenham' || team === 'tottenham' || team === 'Tottenham Hotspur FC') {
    logo = 'http://upload.wikimedia.org/wikipedia/de/b/b4/Tottenham_Hotspur.svg'
  } else if (team === 'Manchester United' || team === 'manchester united' || team === 'Manchester United FC') {
    logo = 'http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg'
  } else if (team === 'West Ham' || team === 'west ham' || team === 'West Ham United FC') {
    logo = 'http://upload.wikimedia.org/wikipedia/de/e/e0/West_Ham_United_FC.svg'
  } else {
    logo = 'https://seeklogo.com/images/P/premier-league-new-logo-D22A0CE87E-seeklogo.com.png'
  }
  return logo
}

const getPlayersFailure = (error) => {
  console.log('Get player failure. Error is', error)
  $('#getPlayersModal').modal('hide')
  $('#getPlayersMessageModal').modal('show')
}

const editPlayerSuccess = (data) => {
  console.log('editPlayerSuccess invoked. Data is', data)
  const modalName = '#editPlayerModal' + data.player.id
  $(modalName).modal('hide').on('hidden.bs.modal', clearPlayers)
  $('#editPlayersMessageModal').modal('show')
}

const editPlayerFailure = (error) => {
  console.log('Edit player failure. Error is', error)
  $('#editPlayersMessageTitle').text('Oops! There was an error')
  $('#editPlayersMessageBody').text('Please try again later')
  $('#editPlayersMessageModal').modal('show')
}

const deletePlayerSuccess = (data) => {
  console.log('deletePlayerSuccess invoked. Data is', data)
  $('#deletePlayerMessageModal').modal('show')
}

const deletePlayerFailure = (error) => {
  console.log('Release player failure. Error is', error)
  $('#deletePlayerMessageTitle').text('Oops! There was an error')
  $('#deletePlayerMessageBody').text('Please try again later')
  $('#deletePlayerMessageModal').modal('show')
}

const clearPlayers = () => {
  $('#playerlist').empty()
}

module.exports = {
  addPlayerSuccess,
  addPlayerFailure,
  getPlayersSuccess,
  getPlayersFailure,
  editPlayerSuccess,
  editPlayerFailure,
  deletePlayerSuccess,
  deletePlayerFailure,
  clearPlayers,
  updateListSuccess,
  addSearchPlayerSuccess,
  addSearchPlayerFailure,
  assignLogo
}
