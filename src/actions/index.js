import axios from 'axios';

export function userLogged(response) {
  if(response.accessToken) { // if we have an access token I assume the login was səkˈsɛsfʊl,səkˈsɛsf(ə)l/
    localStorage.setItem('logged', true); // really important, refactor this and apply middleware
    return {
      type: 'USER_LOGGED',
      payload: true
    };
  }
}

export function userLogOut() {
  localStorage.setItem('logged', false);  // really important, refactor this and apply middleware
  return {
    type: 'USER_LOGGED',
    payload: false
  };
}