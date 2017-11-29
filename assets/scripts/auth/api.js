
'use strict'

const config = require('../config')
const store = require('../store')
const ui = require('./ui')

// const signUp = (data) => {
//   console.log('Sign Up API invoked')
//   return $.ajax({
//     url: config.apiOrigin + '/sign-up',
//     method: 'POST',
//     data: data
//   })
// }

const signUp = (data) => {
  console.log('Sign Up API invoked')
  store.onSignUpSignIn = data
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signUpSignIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data: store.onSignUpSignIn
  })
}

const signIn = (data) => {
  console.log('Data being passed to the API is', data)
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data: data
  })
}

const changePassword = (data) => {
  // console.log('Change pw user data is', data)
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  signUpSignIn
}
