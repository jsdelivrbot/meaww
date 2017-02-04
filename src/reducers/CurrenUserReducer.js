
export default function(state = {}, action) { 
  switch(action.type) {
    case 'USER_LOGGED':
      return action.response || {};
  }
  return state;
}