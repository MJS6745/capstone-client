'use strict'

const store = require('../store')

const signUpSuccess = (data) => {
  console.log('signUpSuccess invoked. Data is', data)
  $('#signUpModal').modal('hide')
  document.getElementById('signUpForm').reset()
  $('#signUpMessage').text('Sign up successful!')
  $('#signUpMessageModal').modal('show')
}

const signUpFailure = (error) => {
  console.log('Error is', error)
  $('#signUpModal').modal('hide')
  document.getElementById('signUpForm').reset()
  $('#signUpMessage').text('Oops! There was an error')
  $('#signUpMessageModal').modal('show')
}

const signInSuccess = (data) => {
  console.log('signInSuccess invoked. Data coming back from sign in API is', data)
  store.user = data.user
  console.log('Store data after sign in API call is currently', store.user)
  $('#signInModal').modal('hide')
  document.getElementById('signInForm').reset()
  $('#signInMessage').text('Sign in successful!')
  $('#signInMessageModal').modal('show')
  $('#changePasswordButton').show()
  $('#signOutButton').show()
  $('#addPlayerButton').show()
  $('#getPlayersButton').show()
  $('#searchPlayerButton').show()
  $('#search-results').empty()
  $('#signUpButton').hide()
  $('#signInButton').hide()
}

const signInFailure = (error) => {
  console.log('Error is', error)
  $('#signInModal').modal('hide')
  document.getElementById('signInForm').reset()
  $('#signInMessage').text('Oops! Invalid login')
  $('#signInMessageModal').modal('show')
}

const changePasswordSuccess = (data) => {
  console.log('changePasswordSuccess invoked. Data is ', data)
  $('#changePasswordModal').modal('hide')
  document.getElementById('changePasswordForm').reset()
  $('#changePasswordMessage').text('All set! Your password has been updated')
  $('#changePasswordMessageModal').modal('show')
}

const changePasswordFailure = (error) => {
  console.log('changePasswordFailure invoked. Error is', error)
  $('#changePasswordModal').modal('hide')
  document.getElementById('changePasswordForm').reset()
  $('#changePasswordMessage').text('Oops! There was an error')
  $('#changePasswordMessageModal').modal('show')
}

const signOutSuccess = () => {
  console.log('signOutSuccess invoked')
  console.log('Store data before clear is', store.user)
  store.user = null
  console.log('Store data after clear is', store.user)
  $('#signOutModal').modal('hide')
  $('#signOutMessage').text('You have been signed out successfully')
  $('#signOutMessageModal').modal('show')
  $('#changePasswordButton').hide()
  $('#signOutButton').hide()
  $('#addPlayerButton').hide()
  $('#getPlayersButton').hide()
  $('#searchPlayerButton').hide()
  $('#playerlist').empty()
  $('#search-results').empty()
  $('#search-results').append('<p>Please log in to search for players</p>')
  $('#signUpButton').show()
  $('#signInButton').show()
}

const signOutFailure = (error) => {
  console.log('signOutFailure invoked')
  console.log('Error is', error)
  $('#signOutModal').modal('hide')
  $('#signOutMessage').text('Oops! There was an error')
  $('#signOutMessageModal').modal('show')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
