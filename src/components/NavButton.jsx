import React from 'react'

function NavButton({ButtonName, ButtonId, NavButtonHandler}) {
  return (
    <button className='nav-button' id={ButtonId} onClick={NavButtonHandler}>
      {ButtonName}
    </button>
  )
}

export default NavButton
