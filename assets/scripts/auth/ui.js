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

module.exports = {
  signUpSuccess,
  signUpFailure
}
