'use strict'

const store = require('../store')

const signUpSuccess = (data) => {
  // console.log('signUpSuccess invoked. Data is', data)
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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
