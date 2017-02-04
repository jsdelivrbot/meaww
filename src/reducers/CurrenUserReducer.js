
export default function(state = {}, action) { 
  switch(action.type) {
    case 'USER_LOGGED':
      return action.response.id && {
        id: action.response.id,
        name: action.response.name,
        picture: action.response.picture.data.url
      } || {}
  }
  return state;
}