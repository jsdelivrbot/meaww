import React from 'react';

const LogOut = ({userLogOut}) => {
  return(
    <div>
      <button className="btn btn-danger" onClick={userLogOut}> 
        Log Out
      </button>
    </div>
  )
}

export default LogOut;