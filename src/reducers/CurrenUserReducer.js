
const InitCurrentUser = localStorage.getItem('currentUser') || {}

export default function(state = InitCurrentUser, action) { 
  switch(action.type) {
    case 'USER_LOGGED':
      localStorage.setItem('currentUser', JSON.stringify(action.response))
      const user = localStorage.getItem('currentUser') || "{}"
      return JSON.parse(user)
  }
  return state;
}