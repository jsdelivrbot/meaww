
const InitLogged = localStorage.getItem('logged') == 'true'

export default function(state = InitLogged, action) { 
  switch(action.type) {
    case 'USER_LOGGED':
      return action.payload;
  }
  return state;
}